---
layout: sidebar
title: Developer accounts
permalink: /documentation/publish/developer-accounts/
published: true
topic: Publish
tags: [Development, Extensions, publishing]
contributors: [One, rebloor]
last_updated_by: One
date: 2019-06-06 07:38:43
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Developer accounts

Developer accounts for addons.mozilla.org are integrated with [Firefox Accounts](https://accounts.firefox.com/signup), which lets you access and manage multiple Mozilla services from one account. You can manage your Firefox Account from [accounts.firefox.com/settings](https://accounts.firefox.com/settings).

{% endcapture %}
{% include modules/page-hero.html
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Setting a display name

It’s important to set a display name on your profile on [addons.mozilla.org](https://addons.mozilla.org) to increase transparency with users, add-on reviewers, and the greater community.

{% capture note %}

Your Firefox Account display name will not sync to your profile on addons.mozilla.org. You will need to set your developer account display name from your profile on addons.mozilla.org.

{% endcapture %}
{% include modules/note.html
    content: note
    alert: false
%}

{% endcapture %}
{% include modules/column-w-toc.html
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
{% include modules/one-column.html
  id: "blocked-accounts"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
