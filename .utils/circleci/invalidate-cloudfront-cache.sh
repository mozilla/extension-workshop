#!/bin/bash
set -ex

if [ -z "$DISTRIBUTION_ID" ]; then
    echo "The Cloudfront distribution id is not set. Failing."
    exit 1
fi

aws configure set preview.cloudfront true

INVALIDATION_ID=$(
  aws cloudfront create-invalidation    \
    --distribution-id $DISTRIBUTION_ID  \
    --paths '/*'                        \
  | jq -r '.Invalidation.Id'
)

# The wait command polls every 20 seconds until a successful state has
# been reached. It'll exit with a return code of 255 after 30 failed
# checks. We retry 3 times for a maximum 30 minutes, as we've seen the
# invalidation can take more than 10 minutes to finish.
retry=0

# "aws cloudfront wait" may fail, in which case we don't want to abort
# unless it has failed more than the number of retry times.
set +e

until aws cloudfront wait invalidation-completed  \
      --distribution-id $DISTRIBUTION_ID          \
      --id $INVALIDATION_ID ; do
  ret=$?
  (( retry++ ))
  if (( retry >= 3 )); then
    exit $ret
  fi
done
