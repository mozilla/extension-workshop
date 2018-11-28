#!/bin/bash
set -ex

if [ -z "$DISTRIBUTION_ID" ]; then
    echo "The Cloudfront distribution id is not set. Failing."
    exit 1
fi

aws configure set preview.cloudfront true

INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths '/*' | jq -r '.Invalidation.Id');

aws cloudfront wait invalidation-completed \
  --distribution-id $DISTRIBUTION_ID \
  --id $INVALIDATION_ID
