---
layout: sidebar
title: Firefox version compatibility
permalink: /documentation/publish/version-compatibility/
topic: Publish
tags: [add-ons, intermediate, tutorial, webextensions, amo, distribution]
contributors: [dotproto]
last_updated_by: dotproto
date: 2023-10-05
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Firefox version compatibility

Learn how to customize Firefox version compatibility settings on addons.mozilla.org and when to use this feature.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## AMO settings vs. `browser_specific_settings`

## Manifest `browser_specific_settings` key

## AMO compatibility setting

You can control the versions of Firefox that can install your add-on by configuring a version's compatibility settings. 

1. Visit the [Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/). <br/><br/> <img src="/assets/img/publish/configure_versions_dev_hub.png" alt="Screen showing the My Add-ons list in the Add-on Developer Hub" style="box-shadow:0 0 0.5em gray;" />

2. In My Add-ons, find the add-on you want to configure and click **Edit Product Page**.

3. Click **Manage Status & Versions** in the left navigation menu. A list of all your extension versions displays.<br/><br/> <img src="/assets/img/publish/configure_versions_manage_menu.png" alt="Screen showing the all versions list for an extension" style="box-shadow:0 0 0.5em gray;" />

4. Click the version number you want to configure.

5. In the compatibility section, for the product you want to specify versions for, select the earliest and latest product versions this version of your add-on is compatible with. Remember, if you used `browser_specific_settings.gecko_android` the compatibility settings for Android are locked.<br/><br/> <img src="/assets/img/publish/configure_versions_manage_page.png" alt="Screen showing the manage version options, including the settings for compatibility." style="box-shadow:0 0 0.5em gray;" />

6. Click **Save Changes** to apply your edits.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "compatibility"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents Module -->

<!-- Single Column Body Module -->

{% capture content %}

## 

Add some content.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "TODO"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## TODO

Add some content.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "TODO"
  content: content
%}

<!-- END: Single Column Body Module -->
