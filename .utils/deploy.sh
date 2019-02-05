#!/bin/bash

# This file is used to deploy Extension Workshop to an S3 bucket. It
# expects to be run from the root of the extensions-challenge directory and
# you'll need your S3 bucket name in an environment variable
# $EXTENSION_WORKSHOP_BUCKET

set -ex

if [ ! -d "_site" ]; then
    echo "Can't find /_site/ directory. Are you running from the correct"\
         "root directory?"
    exit 1
fi

if [ -z "$EXTENSION_WORKSHOP_BUCKET" ]; then
    echo "The S3 bucket is not set. Failing."
    exit 1
fi

# The basic strategy is to sync all the files that need special attention
# first, and then sync everything else which will get defaults


# For short-lived assets; in seconds
TEN_MINUTES="600"

# For long-lived assets; in seconds
ONE_YEAR="31536000"

CSP="\"content-security-policy\": \"default-src 'self'; font-src 'self' fonts.gstatic.com use.typekit.net;"\
"connect-src https://blog.mozilla.org/addons/feed/;"\
"form-action 'none'; frame-ancestors 'self';"\
"frame-src 'none';"\
"img-src 'self' data: https://ssl.google-analytics.com https://www.google-analytics.com https://p.typekit.net/p.gif;"\
"object-src 'none';"\
"script-src 'self' use.typekit.net https://ssl.google-analytics.com https://www.google-analytics.com/analytics.js;"\
"style-src 'self' 'unsafe-inline' fonts.googleapis.com;\""
HSTS="\"strict-transport-security\": \"max-age=${ONE_YEAR}; includeSubDomains; preload\""
TYPE="\"x-content-type-options\": \"nosniff\""
XSS="\"x-xss-protection\": \"1; mode=block\""
ACAO="\"Access-Control-Allow-Origin\": \"*\""


# build version.json if it isn't provided
[ -e version.json ] || $(dirname $0)/build-version-json.sh

if [ -e version.json ]; then
    mv version.json _site/__version__
    # __version__ JSON; short cache
    aws s3 cp \
      --cache-control "max-age=${TEN_MINUTES}" \
      --content-type "application/json" \
      --metadata "{${ACAO}, ${HSTS}, ${TYPE}}" \
      --metadata-directive "REPLACE" \
      --acl "public-read" \
      _site/__version__ s3://${EXTENSION_WORKSHOP_BUCKET}/__version__
fi

# HTML; short cache
aws s3 sync \
  --cache-control "max-age=${TEN_MINUTES}" \
  --content-type "text/html" \
  --exclude "*" \
  --include "*.html" \
  --metadata "{${CSP}, ${HSTS}, ${TYPE}, ${XSS}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  _site/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# JSON; short cache
aws s3 sync \
  --cache-control "max-age=${TEN_MINUTES}" \
  --content-type "application/json" \
  --exclude "*" \
  --include "*.json" \
  --metadata "{${ACAO}, ${HSTS}, ${TYPE}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  _site/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# SVG; cache forever, assign correct content-type
aws s3 sync \
  --cache-control "max-age=${ONE_YEAR}, immutable" \
  --content-type "image/svg+xml" \
  --exclude "*" \
  --include "*.svg" \
  --metadata "{${HSTS}, ${TYPE}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  _site/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# Everything else; cache forever, because it has hashes in the filenames
aws s3 sync \
  --delete \
  --cache-control "max-age=${ONE_YEAR}, immutable" \
  --metadata "{${HSTS}, ${TYPE}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  _site/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# HTML - `path/index.html` to `path` resources; short cache
for fn in $(find _site -name 'index.html' -not -path '_site/index.html'); do
  s3path=${fn#_site/}
  s3path=${s3path%/index.html}
  aws s3 cp \
    --cache-control "max-age=${TEN_MINUTES}" \
    --content-type "text/html" \
    --exclude "*" \
    --include "*.html" \
    --metadata "{${CSP}, ${HSTS}, ${TYPE}, ${XSS}}" \
    --metadata-directive "REPLACE" \
    --acl "public-read" \
    $fn s3://${EXTENSION_WORKSHOP_BUCKET}/${s3path}
done

