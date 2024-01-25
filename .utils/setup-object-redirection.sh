#!/bin/bash
#
# Redirect objects to different locations.
#
set -ex

if [ -z "$EXTENSION_WORKSHOP_BUCKET" ]; then
    echo "The S3 bucket EXTENSION_WORKSHOP_BUCKET is not set. Failing."
    exit 1
fi

# Per https://github.com/mozilla/extension-workshop/issues/1368
redirection_objects=(
  documentation/develop/developing-extensions-for-firefox-for-android-fennec
  documentation/develop/developing-extensions-for-firefox-for-android-fennec/index.html
)
# for obj in "${redirection_objects[@]}" ; do
#   if aws s3api head-object --bucket "$EXTENSION_WORKSHOP_BUCKET" --key "$obj" &> /dev/null ; then
#     aws s3api put-object                    \
#       --bucket "$EXTENSION_WORKSHOP_BUCKET" \
#       --key "$obj"                          \
#       --website-redirect-location /documentation/develop/developing-extensions-for-firefox-for-android/
#   fi
# done

for obj in "${REDIRECTION_OBJECTS[@]}" ; do
  if gsutil stat "gs://$EXTENSION_WORKSHOP_BUCKET/$obj" &> /dev/null ; then
    gsutil web set -m "gs://$EXTENSION_WORKSHOP_BUCKET/$obj" -e "/documentation/develop/developing-extensions-for-firefox-for-android/"
  fi
done

redirection_objects=(
  documentation/develop/porting-a-legacy-firefox-extension
  documentation/develop/porting-a-legacy-firefox-extension/index.html
  documentation/develop/comparison-with-the-add-on-sdk
  documentation/develop/comparison-with-the-add-on-sdk/index.html
  documentation/develop/comparison-with-xul-xpcom-extensions
  documentation/develop/comparison-with-xul-xpcom-extensions/index.html
)
# for obj in "${redirection_objects[@]}" ; do
#   if aws s3api head-object --bucket "$EXTENSION_WORKSHOP_BUCKET" --key "$obj" &> /dev/null ; then
#     aws s3api put-object                    \
#       --bucket "$EXTENSION_WORKSHOP_BUCKET" \
#       --key "$obj"                          \
#       --website-redirect-location /documentation/develop/
#   fi
# done

for obj in "${REDIRECTION_OBJECTS[@]}" ; do
  if gsutil stat "gs://$EXTENSION_WORKSHOP_BUCKET/$obj" &> /dev/null ; then
    gsutil web set -m "gs://$EXTENSION_WORKSHOP_BUCKET/$obj" -e "/documentation/develop/"
  fi
  done