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

## Version compatibility

Version compatibility controls allow you to manage which versions of Firefox are able to install your extension. Developers can use these controls to make an extension available on Android or prevent incompatible versions of Firefox from installing the extension. For example, say you are working on an extension that heavily depends on the Declarative Net Request API. To ensure that incompatible versions of Firefox don't install it, you would want to set the minimum compatible version of Firefox to 113, the first release that supported this API.

There are two ways to control Firefox version compatibility settings for an add-on. Each setting controls a different part of the addon installation experience.

<dl>
<dt>The <code>browser_specific_settings</code> field in manifest.json</dt>
<dd style="padding-left: 2rem;">

This setting controls the version compatibility check that the user's web browser performs during installation. It is also used to populate AMO's compatibility controls.

</dd>

<dt>AMO's compatibility controls</dt>
<dd style="padding-left: 2rem;">

This setting controls what extensions appear in search results on AMO and are available for installation.</dd>

</dl>

Due to the way these two mechanisms interact, it's possible to accidentally make an extension available for download in a browser that will fail to install it. To avoid this, we strongly recommend that developers only use `browser_specific_settings` to control browser compatibility settings.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "compatibility"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents Module -->

<!-- Single Column Body Module -->

{% capture content %}

## The `browser_specific_settings` key

This is our recommended method of managing an extension's browser compatibility settings.

The [`browser_specific_settings`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest key allows you to statically declare what versions of Firefox can load the extension. Firefox versions outside of the supported range will fail during the extension's installation process.

Since these values are hardcoded in the extension itself, they cannot be changed after a version has been packaged. When distributing on AMO, you must submit a new version of the add-on to modify the range of browsers that can load the extension

There are two relevant subkeys for Firefox browsers:

| Key             | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `gecko`         | Used to specify settings for the desktop version of Firefox. |
| `gecko_android` | Specifies settings for the Android version of Firefox.       |

::: note
Firefox for iOS and Firefox Focus do not support add-ons and therefore do not have subkeys.
:::

Both `gecko` and `gecko_android` accept two version-related subkeys:

| Subkey               | Description                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `strict_min_version` | Specifies the lowest version of the browser that can load the extension.                                          |
| `strict_max_version` | Specifies the highest version of the browser that can load the extension.<br>*Avoid unless absolutely necessary.* |

### Android compatibility

In order to signal that your extension is compatible with Android, your manifest must at least set `browser_specific_settings.gecko_android` to an empty object. If you don't, AMO will assume that the extension is not compatible with Android and will not list it as available on Android. This can be manually overridden using AMO's compatibility controls. Omitting `"gecko_android"` does not affect Firefox for Android's ability to install the extension.

```json
{
  "name": "Desktop & Android extension",
  "version": "1.0",
  "manifest_version": 2,
  "browser_specific_settings": {
    "gecko_android": {}
  }
}
```

{% endcapture %}
{% include modules/one-column.liquid,
  id: "browser-specific-settings"
  content: content
%}

<!-- END: Content with Table of Contents Module -->

<!-- Single Column Body Module -->

{% capture content %}

## AMO compatibility setting

AMO's browser version compatibility settings determine which versions of Firefox can search for and install a given extension. The browser compatibility settings for a newly uploaded version of an extension are automatically by the `browser_specific_settings` of the extension's manifest.

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

<!-- END: Content with Table of Contents Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Recommendations

1. Use `browser_specific_settings` as your primary (or only way) tool for managing Firefox version compatibility settings.

2. If you want to support Android, make sure you have a `browser_specific_settings.gecko_android` object in your manifest.

2. Do not use `strict_max_version` unless absolutely necessary. This setting can lead to unexpected results.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "recommendations"
  content: content
%}
