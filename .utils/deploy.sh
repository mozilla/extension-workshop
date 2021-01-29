#!/bin/bash

# This file is used to deploy Firefox Extension Workshop to an S3 bucket. It
# expects to be run from the root of the extensions-challenge directory and
# you'll need your S3 bucket name in an environment variable
# $EXTENSION_WORKSHOP_BUCKET

set -ex

if [ ! -d "dist" ]; then
    echo "Can't find /dist/ directory. Are you running from the correct"\
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

CSPSTATIC="\"content-security-policy\": \"default-src 'none'; "\
"base-uri 'none'; "\
"form-action 'none'; "\
"object-src 'none'\""

# DO NOT REMOVE the locale from the newsletter form url. See #476.
CSP="\"content-security-policy\": \"default-src 'none'; "\
"base-uri 'self'; "\
"connect-src 'self' https://blog.mozilla.org/addons/feed/ https://www.mozilla.org/en-US/newsletter/ https://www.google-analytics.com/; "\
"font-src 'self'; "\
"form-action 'self' https://www.mozilla.org/en-US/newsletter/; "\
"frame-ancestors 'none'; "\
"frame-src https://www.youtube.com/embed/; "\
"img-src 'self' data:; "\
"object-src 'none'; "\
"script-src 'self' https://www.youtube.com/iframe_api https://www.youtube.com/s/player/ 'sha256-cEol3PeVsUqXLYFr6jKFJdNafMQx9RDvCSi6+kCHa6U=' https://www.google-analytics.com/analytics.js; "\
"style-src 'self' 'unsafe-inline'\""
HSTS="\"strict-transport-security\": \"max-age=${ONE_YEAR}; includeSubDomains; preload\""
TYPE="\"x-content-type-options\": \"nosniff\""
XSS="\"x-xss-protection\": \"1; mode=block\""
XFRAME="\"x-frame-options\": \"SAMEORIGIN\""
REFERRER="\"referrer-policy\": \"no-referrer-when-downgrade\""
ACAO="\"Access-Control-Allow-Origin\": \"*\""


# build version.json if it isn't provided
[ -e version.json ] || $(dirname $0)/build-version-json.sh

if [ -e version.json ]; then
    mv version.json dist/__version__
    # __version__ JSON; short cache
    aws s3 cp \
      --cache-control "max-age=${TEN_MINUTES}" \
      --content-type "application/json" \
      --metadata "{${ACAO}, ${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
      --metadata-directive "REPLACE" \
      --acl "public-read" \
      dist/__version__ s3://${EXTENSION_WORKSHOP_BUCKET}/__version__
fi

# HTML; short cache
aws s3 sync \
  --cache-control "max-age=${TEN_MINUTES}" \
  --content-type "text/html" \
  --exclude "*" \
  --include "*.html" \
  --metadata "{${CSP}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# JSON; short cache
aws s3 sync \
  --cache-control "max-age=${TEN_MINUTES}" \
  --content-type "application/json" \
  --exclude "*" \
  --include "*.json" \
  --metadata "{${ACAO}, ${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# SVG; cache forever, assign correct content-type
aws s3 sync \
  --cache-control "max-age=${ONE_YEAR}, immutable" \
  --content-type "image/svg+xml" \
  --exclude "*" \
  --include "*.svg" \
  --metadata "{${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# Everything else; cache forever, because it has hashes in the filenames
aws s3 sync \
  --delete \
  --cache-control "max-age=${ONE_YEAR}, immutable" \
  --metadata "{${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
  --metadata-directive "REPLACE" \
  --acl "public-read" \
  dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# HTML - `path/index.html` to `path` resources; short cache
for fn in $(find dist -name 'index.html' -not -path 'dist/index.html'); do
  s3path=${fn#dist/}
  s3path=${s3path%/index.html}
  aws s3 cp \
    --cache-control "max-age=${TEN_MINUTES}" \
    --content-type "text/html" \
    --exclude "*" \
    --include "*.html" \
    --metadata "{${CSP}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
    --metadata-directive "REPLACE" \
    --website-redirect "/${s3path}/" \
    --acl "public-read" \
    $fn s3://${EXTENSION_WORKSHOP_BUCKET}/${s3path}
done

