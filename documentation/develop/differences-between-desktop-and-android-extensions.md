---
layout: sidebar
title: Differences between desktop and Android extensions
permalink: /documentation/develop/differences-between-desktop-and-android-extensions/
published: false
topic: Develop
tags:
  [Add-ons, Guide, Mobile, NeedsUpdate, WebExtensions]
contributors: [mdnwebdocs-bot, ExE-Boss, gokulakrishna, hellosct1, ramkumar.kr94, andrewtruongmoz, PikadudeNo1, rebloor, wbamberg]
last_updated_by:  mdnwebdocs-bot
date: 2019-03-18
---
<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Differences between desktop and Android extensions
{% capture note %}

**Warning: The content of this article may be out of date.** This page has last been updated before Firefox 54.

{% endcapture %}
{% include modules/note.html
	content=note
	alert=true
%}

Firefox for Android offers a subset of the WebExtensions APIs available to the desktop version of Firefox. Some of these differences are due to the nature of the Android environment and therefore the features Firefox can implement, others are where Firefox for Android does not yet offer all the desktop features. This article describes and explains these differences and looks at the impact they might have on your add-on development.

{% capture note %}

This summary is based on the features planned for Firefox version 54.

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

A detailed list of the WebExtension APIs supported in Firefox for Android is provided on the [Browser support for JavaScript APIs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) page and details of the supported manifest.json keys are provided on the [manifest.json section](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json) page.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->
{% capture content_with_toc %}

## User interface

Firefox for Android offers a streamlined version of the UI found in desktop Firefox, ensuring Firefox offers an enjoyable and engaging experience on mobile. Some of the differences relate to how the Android UI differs from the desktop UIs found in Linux, Mac OS, and Windows. For example, Android does not support a windowing environment, and devices do not usually include a physical keyboard, from which keyboard shortcuts can be issued. Other differences relate to optimizing usability on smaller mobile device screens.

As a result of the UI differences, extensions for Firefox for Android do not support the following APIs and manifest.json keys: 
- [`commands`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/commands) and the related [`commands`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/commands) manifest.json key, as Android tablets and smartphones do not usually have a physical keyboard from which ‘commands’ can be issued.
- [`sidebarAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) and the related [`sidebar_action`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json key, due to the limited screen real estate on Android devices sidebars, such as the browser history, are presented in full browser tabs. Where possible, you should move any sidebar content to tabs as well.
- [`windows`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/windows) as there is only one Firefox on Android 'window', so it has no ability to open or otherwise manipulate additional browser windows.

Support for [`browserAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) and the [browser_action](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest.json key is under development. Firefox 55 will support `default_title` and `default_popup` of the manifest.json key [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), using `default_title` to add an item to the Firefox for Android menu, and the [`browserAction.onClicked()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) event will be available to listen for the menu item being tapped. Additionally, in Firefox 57 support for the [`browserAction.setTitle`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle) and [`browserAction.getTitle`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/getTitle) methods will be added.


### Effect on your add-on UI

These differences impact the way you expose your add-on in the Firefox UI. The most common option, adding a button for your add-on to the Firefox toolbar with [`browserAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), is not available (at least until Firefox 55). Nor can you expose your add-on through a sidebar or context menu. You will, therefore, use an address bar button (through the manifest.json [`page_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) key and [`pageAction`](https://developer.mozilla.org//Add-ons/WebExtensions/API/pageAction) API) remembering that by default this button is hidden and must be shown programmatically.

The features of [`pageAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) are also reduced in Firefox for Android. The manifest.json key [page_action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) enables you to define the button icon and a popup. You then have use of [`pageAction.show()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) and [`pageAction.hide()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) however, once ‘shown’, note that the address bar button is visible in all tabs (unlike the desktop behavior, where the button is shown only for a specified tab.) But you will still be able to hide the pageAction using [`pageAction.hide()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) on a specific tab (say, for example, you wish to hide your extension's page action icon in about:addons or about:memory tabs) And you can set a listener to [`pageAction.onClicked()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked). [`pageAction.setPopup()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/setPopup) and [`pageAction.getPopup()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/getPopup) are also available, so you can update the popup or create a popup once the add-on is running. 

Also, in both [`pageAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) and [`browserAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) popup content is opened in a new tab and persists until the user manually closes the tab.

You can also manipulate tabs on Firefox for Android. The [`tabs`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API enables you to perform most of the actions you can on the desktop, the main exceptions are:

- zoom features, Firefox for Android has one zoom level only, which the user can override with a pinch gesture on the page.
- features related to selecting and moving tabs, again as these features are not supported on Android.
- the ability to detect a tab's language or muted status. 

### Other UI related API and manifest.json key differences

There are some other UI features not supported, these are:

- [`bookmarks`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks), which means you cannot manipulate the user's bookmarks, although the user can do this themselves through the UI.
- [`browsingData`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browsingData), which means you cannot offer users features to clear browser data such as history, downloads, passwords, and alike.
- The [chrome_url_overrides](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) and [chrome_settings_overrides](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) manifest.json keys, which means you cannot add custom home and new tab pages.
- [`contextMenus`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus), which means you cannot add options to context menus.
- [`history`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/history), which means you cannot search or manipulate the history of browsed pages.
- [`omnibox`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) and the related [omnibox](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/omnibox) manifest.json key, which means you cannot provide custom address bar suggestions.
- [`sessions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/sessions), which means you cannot list and restore tabs that have been closed while the browser has been running.
- The [options_ui](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/options_ui) manifest.json key can be used only from Firefox for Android version 57 and above.

Developer tools for Firefox for Android are provided through remote debugging mechanisms [over USB](https://developer.mozilla.org/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_with_WebIDE) or [Wi-Fi](https://developer.mozilla.org/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_over_Wifi) that connect to the WebIDE on a desktop. Therefore, Firefox for Android does not provide any built-in developer tools and its extensions do not support the APIs to extend the developer tools:

- [devtools.inspectedWindow](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow)
- [devtools.network](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/devtools.network)
- [devtools.panels](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels) and the related [devtools_page](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json key.


{% endcapture %}
{% include modules/column-w-toc.html
    id="user-interface"
    content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->
{% capture content %}

## Native application interaction

You do not have the ability to interact with native applications as [`runtime.connectNative()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connectNative) and [`runtime.sendNativeMessage()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage) are not available.

{% endcapture %}
{% include modules/one-column.html
    id="native-application-interaction"
    content=content
    aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->
{% capture content %}

## Permissions

Permissions to use certain WebExtension APIs must be requested in the manifest.json file. On the desktop version of Firefox users are warned when an extension requests a permission and are given the option to deny the add-on that permission. However, on Firefox for Android permissions are granted automatically and the user isn’t given the option to deny them. It is currently planned to resolve this issue in Firefox 57.

{% endcapture %}
{% include modules/one-column.html
    id="permissions"
    content=content
    aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->
{% capture content %}

## Other notes

{% capture note %}

At the time of writing there was an issue with [`storage.sync()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) and data is not synchronized with the user’s Firefox account from Firefox for Android. More details can be found in [bug 1316442](https://bugzilla.mozilla.org/show_bug.cgi?id=1316442).

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

{% endcapture %}
{% include modules/one-column.html
    id="other-notes"
    content=content
    aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->