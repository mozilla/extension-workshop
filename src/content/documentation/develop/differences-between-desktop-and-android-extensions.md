---
layout: sidebar
title: Differences between desktop and Android extensions
permalink: /documentation/develop/differences-between-desktop-and-android-extensions/
topic: Develop
tags: [add-ons, guide, mobile, needsupdate, webextensions]
contributors:
  [
    caitmuenster,
    mdnwebdocs-bot,
    ExE-Boss,
    gokulakrishna,
    hellosct1,
    ramkumar.kr94,
    andrewtruongmoz,
    PikadudeNo1,
    rebloor,
    wbamberg,
  ]
last_updated_by: mdnwebdocs-bot
date: 2020-09-15
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

::: note alert
Only a limited number of [recommended extensions](/documentation/publish/recommended-extensions/) are supported for Firefox for Android. Look out for updates on the [add-ons blog](https://blog.mozilla.org/addons/category/mobile?utm_source=extensionworkshop.com&utm_medium=dev-article&utm_content=differences-between-desktop-and-android-extensions).
:::

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

You cannot reveal your add-on through a sidebar or context menu. However, you can expose your extension as an option under the Add-ons item in the browser menu or as an address bar button.

Depending on the manifest version used by your app, you add an option under the Add-ons item in the browser menu:

- for Manifest V2 with the `manifest.json` [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) key and [`browserAction`](https://developer.mozilla.org//Add-ons/WebExtensions/API/browserAction) API.
- for Manifest V3 with the `manifest.json` [`action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) key and [`action`](https://developer.mozilla.org//Add-ons/WebExtensions/API/action) API.

You can also use an address bar button (through the `manifest.json` [`page_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) key and [`pageAction`](https://developer.mozilla.org//Add-ons/WebExtensions/API/pageAction) API), remembering that this button is hidden by default and must be shown programmatically.

The features of [`pageAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) in Firefox for Android differ slightly from the desktop version. 

The `manifest.json` key [page_action](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) lets you define the button icon and a popup. You then have use of [`pageAction.show()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) and [`pageAction.hide()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide); however, once ‘shown’, the address bar button is visible in all tabs (unlike the desktop behavior, where the button is shown only for a specified tab.) You can hide the pageAction using [`pageAction.hide()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) on a tab (say, for example, you wish to hide your extension’s page action icon in `about:addons` or `about:memory` tabs) 

You can set a listener to [`pageAction.onClicked()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked). [`pageAction.setPopup()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/setPopup) and [`pageAction.getPopup()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/getPopup) are also available, so you can update the popup or create a popup once the add-on is running.

Also, in [`pageAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](https://developer.mozilla.org//Add-ons/WebExtensions/API/browserAction), and [`action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/action) popup content opens as an overlay, covering the browser window until the user closes the overlay.

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

## Other notes

::: note
At the time of writing there was an issue with [`storage.sync()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) and data is not synchronized with the user’s Mozilla account from Firefox for Android. More details can be found in [bug 1316442](https://bugzilla.mozilla.org/show_bug.cgi?id=1316442).
:::

{% endcapture %}
{% include modules/one-column.liquid,
    id: "other-notes"
    content: content
%}

<!-- END: Single Column Body Module -->
