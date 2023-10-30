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

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## `browser_specific_settings` vs. AMO compatibility settings

There are two ways to control Firefox version compatibility settings for an add-on: using the `browser_specific_settings` field in the add-on's manifest or with the compatibility controls in AMO's version management interface. Each setting controls a different part of the addon

Due to the way these two control mechanisms interact, it's possible for a developer to accidentally make an extension available for download in a browser that will fail to install it. To avoid this, we recommend that developes only use `browser_specific_settings` to control browser compatibility settings.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "bsp-vs-amo"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Manifest `browser_specific_settings` key

The [`browser_specific_settings`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)  manifest key allows you to statically declare what versions of Firefox can load the extension. Versions outside of the supported range will fail during the installation process. Since these values are hardcoded in the extension itself, they cannot be changed after a version has been packaged. When distributing on AMO, you must submit a new version of the add-on to modify the range of browsers that can load the extension

There are two relevant subkeys for Firefox browsers:

| Key             | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `gecko`         | Used to specify settings for the desktop version of Firefox. |
| `gecko_android` | Specifies settings for the Android version of Firefox.       |

::: note
Firefox for iOS and Firefox Focus do not support add-ons and therefore do not have subkeys.
:::

Both `gecko` and `gecko_android` accept two version-related subkeys:

| Subkey               | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| `strict_min_version` | Specifies the lowest or minimum version of the browser that can load the extension.  |
| `strict_max_version` | Specifies the highest or maximum version of the browser that can load the extension. |

{% endcapture %}
{% include modules/one-column.liquid,
  id: "compatibility"
  content: content
%}


<!-- END: Content with Table of Contents Module -->

<!-- Single Column Body Module -->

{% capture content %}

## AMO compatibility setting

AMO's browser version compatibility settings determine which versions of Firefox can search for and install a given extension. The browser compatibility settings for a newly uploaded version of an extension using the `browser_specific_settings` data from the extension's manifest.

Use the following instructions to manually configure browser compatibility settings.

1. Visit the [Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/). <br/><br/> <img src="/assets/img/publish/configure_versions_dev_hub.png" alt="Screen showing the My Add-ons list in the Add-on Developer Hub" style="box-shadow:0 0 0.5em gray;" />

2. In My Add-ons, find the add-on you want to configure and click **Edit Product Page**.

3. Click **Manage Status & Versions** in the left navigation menu. A list of all your extension versions displays.<br/><br/> <img src="/assets/img/publish/configure_versions_manage_menu.png" alt="Screen showing the all versions list for an extension" style="box-shadow:0 0 0.5em gray;" />

4. Click the version number you want to configure.

5. In the compatibility section, for the product you want to specify versions for, select the earliest and latest product versions this version of your add-on is compatible with. Remember, if you used `browser_specific_settings.gecko_android` the compatibility settings for Android are locked.<br/><br/> <img src="/assets/img/publish/configure_versions_manage_page.png" alt="Screen showing the manage version options, including the settings for compatibility." style="box-shadow:0 0 0.5em gray;" />

6. Click **Save Changes** to apply your edits.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "amo-compatibility"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

{% endcapture %}
{% include modules/one-column.liquid,
  id: "bss-vs-amo"
  content: content
%}

<!-- END: Single Column Body Module -->
