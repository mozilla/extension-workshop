---
layout: sidebar
title: Developer accounts
permalink: /documentation/publish/developer-accounts/
topic: Publish
tags: [development, extensions, publishing]
contributors: [One, rebloor]
last_updated_by: One
date: 2019-06-06 07:38:43
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Developer accounts

Developer accounts for addons.mozilla.org are integrated with [Mozilla accounts](https://accounts.firefox.com/signup), which lets you access and manage multiple Mozilla services from one account. You can manage your Mozilla account from [accounts.firefox.com/settings](https://accounts.firefox.com/settings).

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Setting a display name

It’s important to set a display name on your profile on [addons.mozilla.org](https://addons.mozilla.org) to increase transparency with users, add-on reviewers, and the greater community.

::: note
Your Mozilla account display name will not sync to your profile on addons.mozilla.org. You will need to set your developer account display name from your profile on addons.mozilla.org.
:::

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "setting-a-display-name"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Blocked accounts

To mitigate malicious actors from submitting spam to addons.mozilla.org, we will not accept submissions from accounts that use a disposable temporary email address, or that have submitted multiple add-ons that violate our [Add-on Policies](/documentation/publish/add-on-policies).

If you believe your account has been incorrectly blocked, please email amo-admins [at] mozilla [dot] com and include a link to your developer profile.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "blocked-accounts"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Issues receiving reviewer emails

If you're expecting but haven't received emails from the https://addons.mozilla.org (AMO) platform, check that:

1. Your Mozilla account's primary email address is correct. To update it, see the support article [Change primary email address on Mozilla account](https://support.mozilla.org/en-US/kb/change-primary-email-address-firefox-accounts).
1. The email isn't in your spam or junk folder. If it is, consider adding the AMO email domain (@mozilla.org) to your [approved senders](https://clean.email/blog/email-security/how-to-whitelist-an-email) list.
1. Your inbox isn't full.
1. Your mail provider hasn't implemented a security filter that blocked the email delivery.

If you're still experiencing issues after making these checks, posting details of your issue to the [add-ons community forum](https://discourse.mozilla.org/c/add-ons/35) may help.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "email-issues"
  content: content
%}

<!-- END: Single Column Body Module -->


