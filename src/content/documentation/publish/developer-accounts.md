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

When an email doesn’t get delivered the cause can vary widely from relatively simple to technically complex issues. Below are several of the more common reasons why you may not have received emails sent from our https://addons.mozilla.org (AMO) platform.

The two most common explanations are usually: 

1. The email is sitting in a spam or junk folder in the recipient's inbox.
    * To remedy this, you can add the AMO email domain (@mozilla.org) to your [approved senders](https://clean.email/blog/email-security/how-to-whitelist-an-email) list.
1. The email was blocked from being delivered by a security filter. In this case, the email was filtered after being received by the email server – it never even reached the recipient's personal inbox.

Another potential issue is if the primary email address associated with your Mozilla account no longer exists or if you no longer have access to it. In this case, please follow the instructions [here](https://support.mozilla.org/en-US/kb/change-primary-email-address-firefox-accounts) to update the email address on your Mozilla account.

One final item to check is whether or not your inbox is full. If it is, you will need to delete some messages before you are able to start receiving emails again.

If you are still experiencing problems receiving emails from the AMO platform we encourage you to post in our [add-ons community forum](https://discourse.mozilla.org/c/add-ons/35) with the specific details of your issue.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "email-issues"
  content: content
%}

<!-- END: Single Column Body Module -->


