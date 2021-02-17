---
layout: sidebar
title: Comparison with XUL/XPCOM extensions
permalink: /documentation/develop/comparison-with-xul-xpcom-extensions/
topic: Develop
tags: [webextensions]
contributors:
  [
    rebloor,
    mdnwebdocs-bot,
    hellosct1,
    suterj,
    wbamberg,
    xricson,
    Rob--W,
    andrewtruongmoz,
    Leif-AMO,
  ]
last_updated_by: rebloor
date: 2019-03-20 08:11:36
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Comparison with XUL/XPCOM extensions

This article is a technical comparison between the WebExtensions technology and "classic" extensions developed using direct XUL manipulation and direct access to XPCOM. It's intended to help orient people who maintain an add-on like this, and who are planning to port it to use WebExtension APIs.

::: note alert
Support for extensions using XUL/XPCOM or the Add-on SDK was removed in Firefox 57, released November 2017. As there is no supported version of Firefox enabling these technologies, this page will be removed by December 2020.
:::

This article covers both [overlay extension](https://developer.mozilla.org/Add-ons/Overlay_Extensions) and [bootstrapped extensions](https://developer.mozilla.org/docs/Mozilla/Add-ons/Bootstrapped_extensions), but not extensions developed using the Add-on SDK. For the Add-on SDK, please see [Comparison with the Add-on SDK](/documentation/develop/comparison-with-the-add-on-sdk).

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

At a very basic level, XUL/XPCOM extensions are similar to extensions developed with WebExtensions. They both include:

- manifest files defining metadata for the extension and some aspects of its behavior.
- JavaScript code that gets access to a set of privileged JavaScript APIs and that stays loaded for as long as the extension itself is enabled.
- the ability to add specific UI elements, such as buttons, to the browser.

Beyond that, though, the systems are very different. In particular:

- Compared with XUL/XPCOM extensions, WebExtensions provide much more limited options for the extension's UI, and a much more limited set of privileged JavaScript APIs.
- WebExtensions can only access web content by injecting separate scripts into web pages and communicating with them using a messaging API (note, though, that this is also true of XUL/XPCOM extensions that expect to work with multiprocess Firefox).

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "intro"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Manifest

[manifest-link]:https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json
[extension-link]:https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
[i18n-link]:https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/i18n
[content-script-link]:https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
[message-broadcaster-link]:https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMessageBroadcaster
[process-script-link]:https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIProcessScriptLoader
[storage-link]:https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage
[javascript-api-link]:https://developer.mozilla.org/Add-ons/WebExtensions/API
[background-script-link]:https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts
[tab-link]:https://developer.mozilla.org/docs/Mozilla/Tech/XUL/tabbrowser

XUL/XPCOM extensions have two manifest files:

- the [`install.rdf`](https://developer.mozilla.org/Add-ons/Install_Manifests) contains metadata about the extension such as its name, icons, and so on
- the [`chrome.manifest`](https://developer.mozilla.org/docs/Chrome_Registration), that tells Firefox where it can find the components of the extension, including XUL overlays for the extension's interface, scripts for its behavior, and files containing localized strings.

WebExtensions have a single manifest file called [`manifest.json`][manifest-link], that has a similar purpose. You use it to specify the extension's name, description, icons, and so on, as well as to specify any buttons it adds to Firefox and to list scripts it needs to run. To get an overview of the components of an extension developed using WebExtension APIs, and how they are specified in manifest.json, see ["Anatomy of an extension"][extension-link].

### Learn more

- [`manifest.json` documentation][manifest-link]
- [Anatomy of a extension][extension-link]

{% endcapture %}
{% include modules/one-column.liquid
  id: "manifest"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## UI

XUL/XPCOM extensions can build their UI by directly manipulating the XUL used to specify the browser's own UI. They do this either using overlays or, in the case of bootstrapped/restartless extensions, using JavaScript to modify the XUL document. They can not only add any elements to the browser's UI, they can also modify or remove existing elements. They can also use APIs like [`CustomizableUI.jsm`](https://developer.mozilla.org/docs/Mozilla/JavaScript_code_modules/CustomizableUI.jsm) to build their UI.

Extensions built with WebExtension APIs don't get this kind of direct access. Instead, a combination of `manifest.json` keys and JavaScript APIs enable them to add a limited set of UI components to the browser. The available components are:

{% capture table %}

| Name           | Description                                                  | Specified using                                                                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Browser action | Button in the browser toolbar, with an optional popup panel. | [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest key <br/> [`browserAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API |
| Page action    | Button in the URL bar, with an optional popup panel.         | [`page_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key <br/> [`pageAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API             |
| Commands       | Keyboard shortcuts.                                          | [`commands`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) manifest key <br/> [`commands`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/commands) API                       |
| Context menu   | Adds items and submenus to the browser's context menu.       | [`contextMenus`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus) API                                                                                                                                        |

{% endcapture %}
{% include modules/table.liquid
    content: table
%}

{% endcapture %}
{% include modules/one-column.liquid
  id: "ui"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Privileged APIs

Both XUL/XPCOM extensions and extensions built with WebExtension APIs can contain scripts that stay loaded for as long as the extension itself is enabled, and that have access to a set of privileged APIs. However, XUL/XPCOM extensions get access to a much wider range of APIs.

The scripts packaged with XUL/XPCOM extensions get access to the full set of [XPCOM API](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface) and [JavaScript code modules](https://developer.mozilla.org/docs/Mozilla/JavaScript_code_modules) through the [`Components`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components_object) object. They also get direct access to the browser's internals through globals like [`gBrowser`][tab-link].

The equivalent WebExtension scripts are called [background script][background-script-link], and they get access to a much smaller set of high-level JavaScript APIs. To see all the privileged APIs available to background scripts, see the [summary API page][javascript-api-link]. Background scripts also get a [`window`](https://developer.mozilla.org/docs/Web/API/Window) global, with all the DOM objects that are available in a normal web page.

There are vastly more APIs available to XUL/XPCOM extensions than are available to WebExtensions, and for many XUL/XPCOM APIs, there isn't a WebExtensions substitute. The table below lists every API in the popular [`Services.jsm`](https://developer.mozilla.org/docs/Mozilla/JavaScript_code_modules/Services.jsm) module, describe what the equivalent WebExtensions API would be, if there is one.

You'll see that many APIs have no WebExtensions equivalent yet. However, we are intending to extend the WebExtension APIs to support the needs of add-on developers, so if you have ideas, we'd love to hear them. You can reach us on the [dev-addons mailing list](https://mail.mozilla.org/listinfo/dev-addons) or [Add-ons](https://mzl.la/2u8ZGbg) channel on [Matrix](https://wiki.mozilla.org/Matrix).

{% capture table %}

| Services.jsm API                                                                                                                                                                                                                                                                                                                                 | WebExtensions equivalent                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `nsIAndroidBridge`                                                                                                                                                                                                                                                                                                                               | None                                                                                                                                                                                                                                       |
| [`nsIXULAppInfo`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXULAppInfo) <br/> [`nsIXULRuntime`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXULRuntime)                                                                                                                      | None                                                                                                                                                                                                                                       |
| [`nsIAppShellService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAppShellService)                                                                                                                                                                                                                             | None                                                                                                                                                                                                                                       |
| [`nsIBlocklistService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIBlocklistService)                                                                                                                                                                                                                           | None                                                                                                                                                                                                                                       |
| [`nsICacheService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsICacheService)                                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| `nsICacheStorageService`                                                                                                                                                                                                                                                                                                                         | None                                                                                                                                                                                                                                       |
| [`nsIClipboard`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIClipboard)                                                                                                                                                                                                                                         | Partial: see the [`clipboard`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/clipboard) API, and [Interacting with the clipboard](f). |
| [`nsIConsoleService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIConsoleService)                                                                                                                                                                                                                               | [`window.console`](https://developer.mozilla.org/docs/Web/API/Console)                                                                                                                                                                     |
| [`nsIContentPrefService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentPrefService)                                                                                                                                                                                                                       | None                                                                                                                                                                                                                                       |
| [`nsICookieManager2`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsICookieManager2)                                                                                                                                                                                                                               | [`cookies`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/cookies)                                                                                                                                                  |
| [`nsIMessageSender`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMessageSender)                                                                                                                                                                                                                                 | [Content scripts][content-script-link]                                                                                                                                        |
| [`CrashManager.jsm`](http://dxr.mozilla.org/mozilla-central/source/toolkit/components/crashes/CrashManager.jsm)                                                                                                                                                                                                                                  | None                                                                                                                                                                                                                                       |
| [`nsIDirectoryService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDirectoryService) <br/> [`nsIProperties`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIProperties)                                                                                                          | None                                                                                                                                                                                                                                       |
| [`nsIDOMStorageManager`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMStorageManager)                                                                                                                                                                                                                         | None                                                                                                                                                                                                                                       |
| `nsIDOMRequestService`                                                                                                                                                                                                                                                                                                                           | None                                                                                                                                                                                                                                       |
| [`nsIDownloadManager`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadManager)                                                                                                                                                                                                                             | [`downloads`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/downloads)                                                                                                                                              |
| [`nsIDroppedLinkHandler`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDroppedLinkHandler)                                                                                                                                                                                                                       | None                                                                                                                                                                                                                                       |
| [`nsIEventListenerService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIEventListenerService)                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| [`nsIEffectiveTLDService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIEffectiveTLDService)                                                                                                                                                                                                                     | None                                                                                                                                                                                                                                       |
| [`nsIFocusManager`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFocusManager)                                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| [`nsIIOService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIIOService) <br/> `nsIIOService2`                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| [`nsILocaleService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILocaleService)                                                                                                                                                                                                                                 | [`i18n`][i18n-link]                                                                                                                                                        |
| [`nsILoginManager`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILoginManager)                                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| `nsIWinMetroUtils`                                                                                                                                                                                                                                                                                                                               | None                                                                                                                                                                                                                                       |
| [`nsIMessageBroadcaster`][message-broadcaster-link] <br/> [`nsIFrameScriptLoader`][process-script-link]                                                                                     | [Content scripts][content-script-link]                                                                                                                                        |
| [`nsIObserverService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIObserverService)                                                                                                                                                                                                                             | None                                                                                                                                                                                                                                       |
| [`nsIPermissionManager`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPermissionManager)                                                                                                                                                                                                                         | None                                                                                                                                                                                                                                       |
| [`nsIMessageBroadcaster`][message-broadcaster-link] <br/> [`nsIProcessScriptLoader`][process-script-link]                                                                                    | [Content scripts][content-script-link]                                                                                                                                       |
| [`nsIPrefBranch`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrefBranch) <br/> [`nsIPrefBranch2`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrefBranch2) <br/> [`nsIPrefService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrefService) | See [Settings](https://developer.mozilla.org/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions#Settings).                                                                                                                         |
| [`nsIPromptService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPromptService)                                                                                                                                                                                                                                 | None                                                                                                                                                                                                                                       |
| [`mozIJSSubScriptLoader`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIJSSubScriptLoader)                                                                                                                                                                                                                       | None                                                                                                                                                                                                                                       |
| `nsIScriptSecurityManager`                                                                                                                                                                                                                                                                                                                       | None                                                                                                                                                                                                                                       |
| [`nsIBrowserSearchService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIBrowserSearchService)                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| [`nsIAppStartup`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAppStartup)                                                                                                                                                                                                                                       | None                                                                                                                                                                                                                                       |
| [`mozIStorageService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageService)                                                                                                                                                                                                                             | [`storage`][storage-link]                                                                                                                                                 |
| [`nsIStringBundleService`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIStringBundleService)                                                                                                                                                                                                                     | [`i18n`][i18n-link]                                                                                                                                                        |
| [`nsIPropertyBag2`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPropertyBag2)                                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| [`nsITelemetry`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITelemetry)                                                                                                                                                                                                                                         | None                                                                                                                                                                                                                                       |
| [`nsIThreadManager`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIThreadManager)                                                                                                                                                                                                                                 | None                                                                                                                                                                                                                                       |
| [`nsIURIFixup`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURIFixup)                                                                                                                                                                                                                                           | None                                                                                                                                                                                                                                       |
| [`nsIURLFormatter`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURLFormatter)                                                                                                                                                                                                                                   | None                                                                                                                                                                                                                                       |
| [`nsIVersionComparator`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIVersionComparator)                                                                                                                                                                                                                         | None                                                                                                                                                                                                                                       |
| [`nsIWindowMediator`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWindowMediator)                                                                                                                                                                                                                               | None                                                                                                                                                                                                                                       |
| [`nsIWindowWatcher`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWindowWatcher)                                                                                                                                                                                                                                 | None                                                                                                                                                                                                                                       |

{% endcapture %}
{% include modules/table.liquid
    content: table
%}

### Learn more

- [JavaScript APIs available for extensions][javascript-api-link]
- [Background scripts for extensions][background-script-link]

{% endcapture %}
{% include modules/one-column.liquid
  id: "privileged-apis"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Interacting with web content

Historically, XUL/XPCOM extensions have been able to get direct access to web content. For example, they can directly access and modify the page DOM using [`gBrowser`][tab-link]:

```js

gBrowser.contentWindow.document.querySelector("h1").innerHTML = "yadda yadda";

```

However, this is only possible in single-process Firefox. In [multiprocess Firefox](https://developer.mozilla.org/docs/Mozilla/Firefox/Multiprocess_Firefox), web content and extension code run in different processes, so this direct access is no longer possible, and extensions which rely on it will break. Multiprocess Firefox is coming soon, and multiprocess compatibility will be a necessity.

XUL/XPCOM extensions can still interact with web content in multiprocess Firefox by [refactoring the code that accesses web content into separate scripts called frame scripts, and using the message manager to communicate with these scripts](https://developer.mozilla.org/Add-ons/Working_with_multiprocess_Firefox). But this is complex and can involve deep changes to the extension's code.

WebExtensions are multiprocess-compatible by default: code that interacts with web content is factored into separate scripts called [content scripts][content-script-link], that can communicate with the rest of the extension using a messaging API.

### Learn more

- [Content scripts for extensions](https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts)

{% endcapture %}
{% include modules/one-column.liquid
  id: "interacting-with-web-content"
  content: content
%}

<!-- Single Column Body Module -->

{% capture content %}

## Localization

In a XUL/XPCOM extension you handle localization by supplying DTD or properties for each supported language, and referring to them using locale statements inside the `chrome.manifest`. You can then include localized strings in UI elements or in code.

The general approach with WebExtensions is similar, but the details are all different. With WebExtensions you supply localized strings as a collection of JSON files, one for each locale.

To retrieve localized strings in extension code, use the [`i18n`][i18n-link] API.

WebExtensions don't have direct support for localizing strings appearing in HTML, so you have to do this yourself, using JavaScript to retrieve localized strings and to replace the HTML with the localized version.

### Learn more

- [Extensions Internationalization guide.](https://developer.mozilla.org/Add-ons/WebExtensions/Internationalization)
- [Example internationalized extension.](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n)

{% endcapture %}
{% include modules/one-column.liquid
  id: "localization"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Settings

XUL/XPCOM extensions typically store settings using the [XPCOM preferences service](https://developer.mozilla.org/Add-ons/Code_snippets/Preferences) or the [inline options](https://developer.mozilla.org/docs/Mozilla/Add-ons/Inline_Options) system.

With WebExtensions you write an HTML file that presents the settings UI, which can include a script for persisting the settings for your extension. The script gets access to all the WebExtensions APIs, and it's generally expected that you should use the [`storage`][storage-link] API to persist settings.

You then assign the HTML file's URL to the [`options_ui`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key in `manifest.json`. Your settings page then appears in the extension's entry in the Add-ons Manager. The options page can also be programmatically opened with an API call to [`browser.runtime.openOptionsPage`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage).

Note that WebExtensions does not give you access to the [Preferences API](https://developer.mozilla.org/docs/Mozilla/Tech/Preferences_API), so you can't directly get or set the browser's own preferences.
Some browser-specific preferences can however still be controlled through the [`browser.browserSettings`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings) or [`browser.privacy`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/privacy) API.

### Learn more

- [Introduction to options pages](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Options_pages)
- [An example extension that has an options page](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour)

{% endcapture %}
{% include modules/one-column.liquid
  id: "settings"
  content: content
%}

<!-- END: Single Column Body Module -->


