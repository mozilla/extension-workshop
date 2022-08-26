---
layout: sidebar.liquid
title: Manifest V3 migration guide
permalink: /documentation/develop/manifest-v3-migration-guide/
topic: Develop
tags: [webextensions, api, firefox]
contributors: [rebloor, willdurand]
last_updated_by: erosman
date: 2022-08-11
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Manifest V3 migration guide

We have introduced a developer preview of Manifest V3 to Firefox. This page provides you with details of what's changed and how you adapt your extensions to take advantage of this preview.

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

{% capture content %}

## What is Manifest V3?

Manifest v3 (MV3) is the umbrella term for a number of foundational changes to the WebExtensions API in Firefox. The name refers to the declared `manifest_version` key in each extension’s [manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

The Manifest v3 changes apply to extensions for Chromium-based browsers – such as Chrome, Edge, and Opera. While it is the goal to maintain a high degree of compatibility between the Firefox, Safari, and Chromium extension platforms, our implementation diverges where we think it matters and where our values point to a different direction.

This article discusses the overall changes introduced with the developer preview of Manifest v3 for Firefox and also highlights where it diverges from the Chrome and Safari implementation.

{% endcapture %}
{% include modules/column-w-toc.liquid
    id: "what-is-manifest-v3"
    content: content
%}

{% capture content %}

## Turn on the developer preview

The developer preview of Manifest V3 is available in Firefox 101. However, to test your extensions you need to turn on the MV3 features. To do this, go to `about:config` and:

- Set `extensions.manifestV3.enabled` to `true`.
- Set `xpinstall.signatures.required` to `false`.

You can now install MV3 extensions from `about:debugging`.

If you want to permanently install an MV3 extension, you need to use the Nightly or Developer edition channels with `xpinstall.signatures.required` set to `false`.

{% endcapture %}
{% include modules/one-column.liquid
    id: "turn-on-the-developer-preview"
    content: content
%}

{% capture content %}

::: note
Use [`web-ext run`](/documentation/develop/getting-started-with-web-ext/) with the `--firefox-preview` option to quickly try your MV3 extension.
:::

## Developer preview changes

This section details the Manifest V3 changes made to Firefox and available in the developer preview.

{% endcapture %}
{% include modules/one-column.liquid
    id: "developer-preview-changes"
    content: content
%}

{% capture content %}

### Manifest version

The manifest.json key [`manifest_version`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) accepts `3`. To use Manifest V3, update your manifest.json file like this:

```json
"manifest_version": 3
```

{% endcapture %}
{% include modules/one-column.liquid
    id: "manifest-version"
    content: content
%}

{% capture content %}

### Search extensions icons

Search extensions must use local icons. This change prevents the unnecessary network pings that result from accessing remote icons.

To accommodate this change, provide a local icon and defined in your manifest.json [chrome_settings_overrides](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) manifest key like this:

```json
"chrome_settings_overrides": {
  "search_provider": {
    "name": "Search engine",
    "search_url": "https://www.searchengine.com/search/?q={searchTerms}",
    "keyword": "search",
    "favicon_url": "/imager/favicon.ico"
  }
}
```

{% endcapture %}
{% include modules/one-column.liquid
    id: "search-extensions-icons"
    content: content
%}

{% capture content %}

### Host permissions

Host permissions are on longer defined in the manifest.json keys `permissions` or `optional_permissions`, rather, they are defined in the [`host_permissions`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) key.

Move all host permission specifications to the manifest.json key `host_permissions` like this:

```json
"permissions": [
  "tabs",
  "notifications"
],
"optional_permissions": [
  "geolocation"
],
"host_permissions": [
  "http://www.mysite.com/",
  "*://*.example.org/*"
]
```

{% endcapture %}
{% include modules/one-column.liquid
    id: "host-permissions"
    content: content
%}

{% capture content %}

### Browser action

The features available under the manifest.json key `browser_action` and the `browserAction` API have moved to a new `action` [key](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) and [API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms). As the old and new key and API are otherwise identical, the only change you need to make is to rename the manifest.json key 'browser_action' to 'action', like this:

```json
"action": {
  "browser_style": true,
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html",
  "theme_icons": [{
    "light": "icons/geo-16-light.png",
    "dark": "icons/geo-16.png",
    "size": 16
  }, {
    "light": "icons/geo-32-light.png",
    "dark": "icons/geo-32.png",
    "size": 32
  }]
}
```

and update API references from `browser.browserAction` to  `browser.action`.

::: note
In Chromium and Safari, `page_action` is also merged into the renamed `action` key. Firefox retains the separate `page_action` in the developer preview but will merge `page_action` into `action` in a later release.

Also, in Chromium and Safari the Browser Action and Page Action APIs are unified into the Action API, Firefox retains the separate Page Action API in the developer preview but will merge the Page Action API into the new Action API in a later release.
:::

{% endcapture %}
{% include modules/one-column.liquid
    id: "browser-action"
    content: content
%}

{% capture content %}

### Scripting API

The new [Scripting API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting) takes over the features of `tabs.insertCSS()`, `tabs.removeCSS()`,  and `tabs.executeScript()` and adds capabilities to register, update, and unregister content scripts at runtime.

Also, the `code` parameter is removed so that arbitrary strings can no longer be executed. This API requires the [`scripting` permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). So, you need to move any arbitrary strings executed as scripts to files and rewrite your code to use the Scripting API.

{% endcapture %}
{% include modules/one-column.liquid
    id: "scripting-api"
    content: content
%}

{% capture content %}

### Event-driven background scripts

Firefox has extended its support for [background scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) by enabling non-persistent background pages for Manifest V2 and V3. Using non-persistent background scripts greatly reduces your extension use of browser resources. However, MV3 removes support for persistent background pages.

::: note
If you want to migrate your MV2 extension to using non-persistent background pages, you can test them in the MV3 developer preview by enabling the preference `extensions.eventPages.enabled`.
:::

To migrate your extension to using non-persistent background pages you need to:

- Update your manifest.json `background` key to remove the `"persistent"` property or set it to `false`.
- Ensure listeners are at the top-level and use the synchronous pattern.
- Record state changes in local storage.
- Change timers to alarms.
- Switch from using [`extension.getBackgroundPage`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension/getBackgroundPage) to call a function from the background page, to [`runtime.getBackgroundPage`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage).
— Place menu creation using `menus.create` in a `runtime.onInstalled` listener.

More information on the migration process can be found on the [background script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) page on MDN.

::: note
Safari also supports event-driven background scripts, however, Chromium has adopted service workers instead.
:::

{% endcapture %}
{% include modules/one-column.liquid
    id: "event-driven-background-dscripts"
    content: content
%}

{% capture content %}

### Content security policies

[Content security policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) in the manifest.json key is changing to use the `extension_pages` property. Manifest V3 has a more restrictive content security policy than Manifest V2, this may require further changes in your pages.

Move the extension’s CSP to the the manifest.json key to `extension_pages`, like this:

```json
"content_security_policy": {
 "extension_pages": "default-src 'self'"
}
```

{% endcapture %}
{% include modules/one-column.liquid
    id: "content-security-policies"
    content: content
%}

{% capture content %}

### Web Accessible Resources

Web accessible resources are available only to the sites and extensions specified in the manifest. The developer preview supports `resources` and `matches`, but does not support the `extension_ids` and `use_dynamic_url` properties.

To migrate your extension, rewrite the manifest.json key [‘web_accessible_resources’](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)  to specify the sites and extensions that can access the resources.

{% endcapture %}
{% include modules/one-column.liquid
    id: "web-accessible-resources"
    content: content
%}

{% capture content %}

### Features already supported by Firefox

Chromium introduces [promise](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview#promises) support to many methods with the goal of eventually supporting promises on all appropriate methods. This will provide for greater compatibility between Firefox and Chrome extensions, given that Firefox already supports promises when using the `browser.*` namespace.

In Manifest v2, Firefox extensions support the use of the `chrome.*` namespace with APIs that provide asynchronous event handling using callbacks. In full release of Manifest v3, Firefox will support promises for asynchronous events in the `chrome.*` namespace.

{% endcapture %}
{% include modules/one-column.liquid
    id: "features-already-supported-by-firefox"
    content: content
%}

{% capture content %}

## Migration checklist

- Update the manifest.json key `manifest_version` to `3`.
- If your extension adds a search engine, add a local icon and reference it in the  manifest.json key `chrome_settings_overrides.search_provider.favicon_url`.
- Remove any host permissions from the manifest.json keys permissions and `optional_permissions` and add them to the `host_permissions` key.
- Rename the manifest.json key `browser_action` to `action` and update any API references to `browser.browserAction` to  `browser.action`.
- Convert background pages to be non-persistent.
- Move the extension’s CSP to the the manifest.json key ‘content_security_policy.extension_pages’ and update the CSP to conform to Manifest V3 requirements.
- Move any arbitrary strings executed as scripts to files and update your code to use the Scripting API.
- The add-on ID is required to publish your extension. Make sure to add one in the `browser_specific_settings.gecko.id` manifest.json key.

{% endcapture %}
{% include modules/one-column.liquid
    id: "developer-preview-changes"
    content: content
%}

{% capture content %}

## Future features

We are working towards a general availability release of manifest V3 for a future release.

{% endcapture %}
{% include modules/one-column.liquid
    id: "developer-preview-changes"
    content: content
%}
<!-- END: Single Column Body Module -->

