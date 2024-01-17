---
layout: sidebar
title: Differences between desktop and Android extensions
permalink: /documentation/develop/differences-between-desktop-and-android-extensions/
topic: Develop
tags: [add-ons, guide, mobile, webextensions]
contributors:
  [
    caitmuenster,
    ExE-Boss,
    gokulakrishna,
    hellosct1,
    ramkumar.kr94,
    andrewtruongmoz,
    rebloor,
    wbamberg,
    dotproto,
  ]
last_updated_by: rebloor
date: 2024-01-17
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Differences between desktop and Android extensions

There are some important distinctions to be aware of when developing an extension for Android.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

Firefox for Android offers a subset of the WebExtensions APIs available to the desktop version of Firefox. Some of these differences are due to the nature of the Android environment and therefore the features Firefox can implement, others are where Firefox for Android does not offer all the desktop features. This article explores these differences and how they affect your add-on development.

A detailed list of the WebExtension APIs supported in Firefox for Android is provided on the [Browser support for JavaScript APIs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) page and details of the supported `manifest.json` keys are provided on the [manifest.json section](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json) page.

::: note
For information about extension development in Firefox for Android, please see [this article](/documentation/develop/developing-extensions-for-firefox-for-android/).
:::

{% endcapture %}
{% include modules/column-w-toc.liquid,
    id: "introduction"
    content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## User interface

Firefox for Android offers a streamlined version of the UI found in desktop Firefox, ensuring Firefox offers an enjoyable and engaging experience on mobile. Some differences relate to how the Android UI differs from the desktop UIs found in Linux, Mac OS, and Windows. For example, Android does not support a windowing environment, and devices do not usually include a physical keyboard from which keyboard shortcuts can be issued. Other differences relate to optimizing usability on smaller mobile device screens.

### UI API and `manifest.json` key differences

As a result of the UI differences, extensions for Firefox for Android do not support the following APIs and `manifest.json` keys:

- [`chrome_url_overrides`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) and [`chrome_settings_overrides`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) `manifest.json` keys, which means you cannot add custom home and new tab pages.
- [`commands`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/commands) and the related [`commands`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/commands) `manifest.json` key, as Android tablets and smartphones do not usually have a physical keyboard from which ‘commands’ can be issued.
- [`omnibox`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) and the related [`omnibox`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/omnibox) `manifest.json` key, which means you cannot provide custom address bar suggestions.
- [`menus`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/menus), which means you cannot add options to context menus.
- [`sidebarAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) and the related [`sidebar_action`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/sidebar_action) `manifest.json` key, due to the limited screen real estate on Android devices sidebars, such as the browser history, are presented in full browser tabs. Where possible, you should move any sidebar content to tabs.
- [`browserAction`](https://developer.mozilla.org//Add-ons/WebExtensions/API/browserAction) (Manifest V2), [`action`](https://developer.mozilla.org//Add-ons/WebExtensions/API/action) (Manifest V3), and [`pageAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) add their "button" to the Add-ons item in the Firefox for Android browser menu. Also, popup content opens as an overlay, covering the browser window until the user closes the overlay.

### Other related API and `manifest.json` key differences

There are some other related features that are not supported, these are:

- [`bookmarks`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks), which means you cannot manipulate the user’s bookmarks, although the user can do this themselves through the UI.
- [`history`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/history), which means you cannot search or manipulate the history of browsed pages.
- [`sessions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/sessions), which means you cannot list and restore tabs that have been closed while the browser has been running.
- [`windows`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/windows), as there is only one Firefox on Android ‘window’, and the browser cannot open or otherwise manipulate additional browser windows.

Developer tools for Firefox for Android are provided through remote debugging mechanisms [over USB](https://developer.android.com/studio/debug/dev-options) or [Wi-Fi](https://developer.mozilla.org/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_over_Wifi) that connect to the WebIDE on a desktop. Therefore, Firefox for Android does not provide any built-in developer tools and its extensions do not support the APIs to extend the developer tools:

- [`devtools.inspectedWindow`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow)
- [`devtools.network`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/devtools.network)
- [`devtools.panels`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels) and the related [`devtools_page`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/devtools_page) `manifest.json` key.

### Effect on your add-on UI

#### Reveal your add-on

You reveal your add-on as an option under the Add-ons item in the Firefox for Android browser menu. Depending on the manifest version used by your app, you add an option like this:

- for Manifest V2 with the `manifest.json` [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) key and [`browserAction`](https://developer.mozilla.org//Add-ons/WebExtensions/API/browserAction) API.
- for Manifest V3 with the `manifest.json` [`action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) key and [`action`](https://developer.mozilla.org//Add-ons/WebExtensions/API/action) API.

Note that the [`browserAction`](https://developer.mozilla.org//Add-ons/WebExtensions/API/browserAction) and [`action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/action) popup content opens as an overlay, covering the browser window until the user closes the overlay.

#### Work with tabs

You can also manipulate tabs on Firefox for Android. The [`tabs`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API enables you to perform most of the actions you can on the desktop, the main exceptions are:

- zoom features, Firefox for Android has one zoom level only, which the user can override with a pinch gesture on the page.
- features related to selecting and moving tabs, again as these features are not supported on Android.
- the ability to detect a tab’s language or muted status.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "user-interface"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Execution model

The [process model on Android](https://developer.android.com/guide/components/activities/process-lifecycle) kills idle processes to maintain device performance. Among the processes Android can kill are extension processes. To account for this behavior, extensions should be designed to recover after they have been killed. [Event pages, or non-persistent background scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), are the best mechanism to support this. If your extension uses persistent background script, [learn how to convert them to event pages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#convert_to_non-persistent).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "execution-model"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Native application interaction

You do not have the ability to interact with native applications as [`runtime.connectNative()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connectNative) and [`runtime.sendNativeMessage()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage) are not available.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "native-application-interaction"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Permissions

Permissions to use certain WebExtension APIs must be requested in the `manifest.json` file. On the desktop version of Firefox users are warned when an extension requests a permission and are given the option to deny the add-on that permission. However, on Firefox for Android permissions are granted automatically and the user isn’t given the option to deny them. It is currently planned to resolve this issue in Firefox 57.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "permissions"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Storage

Desktop Firefox supports the [local](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/local), [managed](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed), [session](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/session), and [sync](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) storage areas.

Firefox for Android supports local, session, and sync storage. However, data in sync storage is not synchronized with the user's Mozilla account from Firefox for Android. More details can be found in [bug 1625257](https://bugzilla.mozilla.org/show_bug.cgi?id=1625257).

Firefox for Android doesn't support the managed storage area. All calls to [StorageArea](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea#methods) methods are rejected.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "storage"
    content: content
%}

<!-- END: Single Column Body Module -->
