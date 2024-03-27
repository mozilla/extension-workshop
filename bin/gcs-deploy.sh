#!/bin/bash

set -ex
 EXTENSION_WORKSHOP_BUCKET_GCS=$1

 echo $EXTENSION_WORKSHOP_BUCKET_GCS

 CODE_DIR="dist"
 # For short-lived assets; in seconds
 TEN_MINS="600"

 # For long-lived assets; in seconds
 ONE_YEAR="31536000"

 CSPSTATIC="x-goog-meta-content-security-policy: default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors: 'none'; object-src 'none'"
 CSP="x-goog-meta-content-security-policy: default-src 'none'; img-src 'self' data:; form-action 'self' https://www.mozilla.org/en-US/newsletter/;  media-src 'self' blob:; script-src 'self' https://www.youtube.com/iframe_api https://www.youtube.com/s/player/ 'sha256-vqFvYKh0rwFP9fSa0PuzUff2ElHQ+rkjGfycqUNqufQ=' https://www.googletagmanager.com/gtag/js ; font-src 'self'; frame-ancestors 'none';  frame-src  https://www.youtube.com/embed/ https://calendar.google.com/calendar/appointments/; base-uri 'none'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://blog.mozilla.org/addons/feed/ https://www.mozilla.org/en-US/newsletter/ https://*.google-analytics.com;"
 ACAO="x-goog-meta-access-control-allow-origin: *"
 if [ -z "$EXTENSION_WORKSHOP_BUCKET_GCS" ]; then
  echo "The GCS bucket is not set. Failing."
  exit 1
 fi


  if [ -e version.json ]; then
 mv version.json dist/__version__
 # __version__ JSON; short cache
 gcloud storage cp  dist/__version__ gs://${EXTENSION_WORKSHOP_BUCKET_GCS}/__version__ 

 fi


deploy_code() {

 # The basic strategy is to sync all the files that need special attention
 # first, and then sync everything else which will get defaults
 #
 # Note that we use single quotes below for the regex pattern so that we don't
 # have to deal with history expansion in shell.

 # HTML; short cache
  gsutil                                       \
  -h "cache-control: max-age=${TEN_MINS}"     \
  -h "content-type: text/html"                \
  -h "$CSP"                                    \
  -h "$ACAO"                                   \
  rsync                                        \
  -R                                           \
  -J                                          \
  -a public-read                              \
  -x '.*(?<!\.html)$'                         \
  dist "gs://$EXTENSION_WORKSHOP_BUCKET_GCS/"

 # JS; short cache
 gsutil                                        \
 -h "cache-control: max-age=${TEN_MINS}"    \
 -h "content-type: text/javascript"          \
 -h "$CSPSTATIC"                             \
 rsync                                       \
 -R                                          \
 -J                                          \
 -a public-read                              \
 -x '.*(?<!\.js)$'                           \
 dist "gs://$EXTENSION_WORKSHOP_BUCKET_GCS/"

 # SVG; cache forever, assign correct content-type
 gsutil                                        \
 -h "cache-control: max-age=${ONE_YEAR}, immutable" \
 -h "content-type: image/svg+xml"            \
 -h "$CSPSTATIC"                             \
 -m                                          \
 rsync                                       \
 -R                                          \
 -J                                          \
 -a public-read                              \
 -x '.*(?<!\.svg)$'                          \
 dist "gs://$EXTENSION_WORKSHOP_BUCKET_GCS/"

 # evertying else in bucket. 
 gsutil                                                 \
 -h "cache-control: max-age=${ONE_YEAR}, immutable"  \
 -h "$CSPSTATIC"                                     \
 -m                                                  \
 rsync                                               \
 -R                                                  \
 -d                                                  \
 -a public-read                                      \
 dist "gs://$EXTENSION_WORKSHOP_BUCKET_GCS/"

}

deploy_code 