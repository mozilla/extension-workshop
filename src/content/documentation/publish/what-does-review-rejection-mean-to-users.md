---
layout: sidebar
title: What does review rejection mean to users?
permalink: /documentation/publish/what-does-review-rejection-mean-to-users/
topic: Publish
tags: [add-ons, extensions, guide, publication, review, webextensions]
contributors: [potterwrit, rebloor]
last_updated_by: potterwrit
date: 2019-07-15 12:58:07
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# What does review rejection mean to users?

This article explains how users and people looking for your extension are affected should you get a rejection from the Mozilla review process.

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Review overview

Any extension you submit to [addons.mozilla.org](https://addons.mozilla.org) (AMO) is subject to two reviews. There is a machine validation of your extension as part of the submission flow, and a human review that takes place after your extension is published.

The machine validation tells you immediately if anything needs to be fixed to enable the publication of your extension. The human review occurs after publication and can occur at any time. When this review starts, the reviewer may ask for clarification about your extension. The outcome of the review could be the rejection of your extension’s latest version, and the rejection of earlier unreviewed versions if they also contain issues.

For more information on these processes, see [Submitting an add-on](/documentation/publish/submitting-an-add-on/) and [Add-on Policies](/documentation/publish/add-on-policies/).

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "review-overview"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->
<!-- Single Column Body Module -->

{% capture content %}

## Impact of review rejection

Should your extension be rejected by the human review:

- You receive an email that explains the reason for the rejection and what action you need to take to correct the issues identified.
- If an earlier version of your extension is public, this becomes the one seen by visitors to AMO.
- If there is no public version of your extension to display, your extension's listing on AMO is suspended. This means that your extension no longer appears in any lists on AMO, nor will it be returned in the results of searches performed by AMO visitors. Should someone follow an external link to your extension listing, they will arrive at a 404 page.

People who have installed your extension will not notice any change as a result of the review rejection; they will be able to continue using your extension as usual.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "impact-of-review-rejection"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Blocklisting

Blocklisting is a mechanism that enables Mozilla to prevent an extension from being used in Firefox (a hard block) or require users to confirm they wish to run the extension (a soft block).

If you do not respond to review feedback and fix any issues promptly your extension may get considered for blocklisting, particularly if the issues identified relate to critical security vulnerabilities, or stability or performance issues. However, if your extension is deliberately malicious or abusive, it may be blocklisted without notification.

For more information on blocklisting, see [Add-ons blocking process](/documentation/publish/add-ons-blocking-process/).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "blocklisting"
  content: content
%}

<!-- END: Single Column Body Module -->

