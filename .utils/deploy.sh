#!/bin/bash

# This file is used to deploy Firefox Extension Workshop to an S3 bucket. It
# expects to be run from the root of the extensions-challenge directory and
# you'll need your S3 bucket name in an environment variable
# $EXTENSION_WORKSHOP_BUCKET

set -ex

# if [ ! -d "dist" ]; then
#     echo "Can't find /dist/ directory. Are you running from the correct"\
#          "root directory?"
#     exit 1
# fi

# if [ -z "$EXTENSION_WORKSHOP_BUCKET" ]; then
#     echo "The S3 bucket is not set. Failing."
#     exit 1
# fi

if [ ! -d "dist" ]; then
    echo "Can't find /dist/ directory. Are you running from the correct"\
         "root directory?"
    exit 1
fi

if [ -z "$EXTENSION_WORKSHOP_BUCKET" ]; then
    echo "The GCS bucket is not set. Failing."
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
"connect-src 'self' https://blog.mozilla.org/addons/feed/ https://www.mozilla.org/en-US/newsletter/ https://*.google-analytics.com; "\
"font-src 'self'; "\
"form-action 'self' https://www.mozilla.org/en-US/newsletter/; "\
"frame-ancestors 'none'; "\
"frame-src https://www.youtube.com/embed/ https://calendar.google.com/calendar/appointments/; "\
"img-src 'self' data:; "\
"object-src 'none'; "\
"script-src 'self' https://www.youtube.com/iframe_api https://www.youtube.com/s/player/ 'sha256-vqFvYKh0rwFP9fSa0PuzUff2ElHQ+rkjGfycqUNqufQ=' https://www.googletagmanager.com/gtag/js; "\
"style-src 'self' 'unsafe-inline'\""
HSTS="\"strict-transport-security\": \"max-age=${ONE_YEAR}; includeSubDomains; preload\""
TYPE="\"x-content-type-options\": \"nosniff\""
XSS="\"x-xss-protection\": \"0\""
XFRAME="\"x-frame-options\": \"SAMEORIGIN\""
REFERRER="\"referrer-policy\": \"no-referrer-when-downgrade\""
ACAO="\"Access-Control-Allow-Origin\": \"*\""


# build version.json if it isn't provided
[ -e version.json ] || $(dirname $0)/build-version-json.sh

# if [ -e version.json ]; then
#     mv version.json dist/__version__
#     # __version__ JSON; short cache
#     aws s3 cp \
#       --cache-control "max-age=${TEN_MINUTES}" \
#       --content-type "application/json" \
#       --metadata "{${ACAO}, ${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
#       --metadata-directive "REPLACE" \
#       --acl "public-read" \
#       dist/__version__ s3://${EXTENSION_WORKSHOP_BUCKET}/__version__
# fi
if [ -e version.json ]; then
    mv version.json dist/__version__
    # __version__ JSON; short cache
    gsutil -h "Cache-Control:max-age=${TEN_MINUTES}" \
      -h "Content-Type:application/json" \
      -h "Metadata:${ACAO},${CSPSTATIC},${HSTS},${TYPE},${XSS},${XFRAME},${REFERRER}" \
      -h "x-goog-metadata-directive:REPLACE" \
      -a public-read cp dist/__version__ gs://$EXTENSION_WORKSHOP_BUCKET/__version__
fi

upload_file() {
  local file=$1
  local content_type=$2
  local cache_control=$3
  local metadata=$4

  gsutil -h "Cache-Control:${cache_control}" \
    -h "Content-Type:${content_type}" \
    ...
}

HTML_METADATA="${ACAO},${CSP},${HSTS},${TYPE},${XSS},${XFRAME},${REFERRER}"
JS_METADATA="${ACAO},${CSPSTATIC},..."
SVG_METADATA="${CSPSTATIC},${HSTS},..."
TEN_MINUTES="max-age=600"
ONE_YEAR="max-age=31536000, immutable"

find dist -type f -not -path 'dist/__version__/*' | while read -r fn; do
  if [[ $fn == *.html ]]; then
    upload_file "$fn" "text/html" "${TEN_MINUTES}" "${HTML_METADATA}"
  elif [[ $fn == *.js ]]; then
    upload_file "$fn" "application/javascript" "${TEN_MINUTES}" "${JS_METADATA}"
  elif [[ $fn == *.svg ]]; then
    upload_file "$fn" "image/svg+xml" "${ONE_YEAR}" "${SVG_METADATA}"
 
  else upload_file "$fn"  <content-type>  "${}" "${}"
 if 

done





# for fn in $(find dist -name '*.html' -not -path 'dist/__version__'); do
#   # HTML; short cache
#   gsutil -h "Cache-Control:max-age=${TEN_MINUTES}" \
#     -h "Content-Type:text/html" \
#     -h "Metadata:${ACAO},${CSP},${HSTS},${TYPE},${XSS},${XFRAME},${REFERRER}" \
#     -h "x-goog-metadata-directive:REPLACE" \
#     -a public-read cp $fn gs://$EXTENSION_WORKSHOP_BUCKET/$fn
# done

# for fn in $(find dist -name '*.js' -not -path 'dist/__version__'); do
#   # JS; short cache
#   gsutil -h "Cache-Control:max-age=${TEN_MINUTES}" \
#     -h "Content-Type:application/javascript" \
#     -h "Metadata:${ACAO},${CSPSTATIC},${HSTS},${TYPE},${XSS},${XFRAME},${REFERRER}" \
#     -h "x-goog-metadata-directive:REPLACE" \
#     -a public-read cp $fn gs://$EXTENSION_WORKSHOP_BUCKET/$fn
# done

# for fn in $(find dist -name '*.svg' -not -path 'dist/__version__'); do
#   # SVG; cache forever, assign correct content-type
#   gsutil -h "Cache-Control:max-age=${ONE_YEAR}, immutable" \
#     -h "Content-Type:image/svg+xml" \
#     -h "Metadata:${CSPSTATIC},${HSTS},${TYPE},${XSS},${XFRAME},${REFERRER}" \
#     -h "x-goog-metadata-directive:REPLACE" \
#     -a public-read cp $fn gs://$EXTENSION_WORKSHOP_BUCKET/$fn
# done


# HTML; short cache
# aws s3 sync \
#   --cache-control "max-age=${TEN_MINUTES}" \
#   --content-type "text/html" \
#   --exclude "*" \
#   --include "*.html" \
#   --metadata "{${CSP}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
#   --metadata-directive "REPLACE" \
#   --acl "public-read" \
#   dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# JSON; short cache
# aws s3 sync \
#   --cache-control "max-age=${TEN_MINUTES}" \
#   --content-type "application/json" \
#   --exclude "*" \
#   --include "*.json" \
#   --metadata "{${ACAO}, ${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
#   --metadata-directive "REPLACE" \
#   --acl "public-read" \
#   dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# SVG; cache forever, assign correct content-type
# aws s3 sync \
#   --cache-control "max-age=${ONE_YEAR}, immutable" \
#   --content-type "image/svg+xml" \
#   --exclude "*" \
#   --include "*.svg" \
#   --metadata "{${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
#   --metadata-directive "REPLACE" \
#   --acl "public-read" \
#   dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

# Everything else; cache forever, because it has hashes in the filenames
# aws s3 sync \
#   --delete \
#   --cache-control "max-age=${ONE_YEAR}, immutable" \
#   --metadata "{${CSPSTATIC}, ${HSTS}, ${TYPE}, ${XSS}, ${XFRAME}, ${REFERRER}}" \
#   --metadata-directive "REPLACE" \
#   --acl "public-read" \
#   dist/ s3://${EXTENSION_WORKSHOP_BUCKET}/

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

