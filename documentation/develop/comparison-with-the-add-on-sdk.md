---
layout: sidebar
title: Comparison with the Add-on SDK
permalink: /documentation/develop/comparison-with-the-add-on-sdk/
published: false
topic: Develop
tags:
  [Addon SDK, AddonSDK, porting, WebExtensions]
contributors: [rebloor, mdnwebdocs-bot, wbamberg, LoveIsGrief, freaktechnik, hellosct1, andrewtruongmoz, smile4ever, Leif-AMO, kumar303, Sebastianz, Rob--W]
last_updated_by: rebloor
date: 2019-03-20 08:08:55
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Comparison with the Add-on SDK

This article is a technical comparison of the Add-on SDK and WebExtensions technology. It's intended to help orient people who have an add-on that uses the SDK, and who are planning to port it to use WebExtension APIs.

{% capture note %}

Support for extensions using XUL/XPCOM or the Add-on SDK was removed in Firefox 57, released November 2017. As there is no supported version of Firefox enabling these technologies, this page will be removed by December 2020.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=true
%}

If you're planning to port an [overlay extension](https://developer.mozilla.org/Add-ons/Overlay_Extensions) or a [bootstrapped extension](https://developer.mozilla.org/docs/Mozilla/Add-ons/Bootstrapped_extensions), see [Comparison with XUL/XPCOM extensions](/documentation/develop/comparison-with-xul-xpcom-extensions).

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

The basic structure and concepts of the Add-on SDK are shared by WebExtensions. Both technologies include:

- [manifest files](#manifest-files) defining metadata for the extension and some aspects of its behavior.
- [persistent scripts](#persistent-scripts) that get access to a set of privileged JavaScript APIs and that stay loaded for as long as the extension itself is enabled.
- [content scripts](#content-scripts) that can be injected into web pages, and that can communicate with persistent scripts using an asynchronous messaging API.
- [the ability to add specific UI elements](#ui-elements), such as buttons, to the browser. Buttons in turn can have popups that are defined using HTML, JavaScript, and CSS.
- [a set of privileged JavaScript APIs](#javascript-apis) for interacting with the web or with the browser.
- [a command-line tool](#command-line-tool) that developers can use to test their extensions.

Beyond these broad similarities, there are a lot of differences in the details, and these are summarised in the following sections.

{% endcapture %}
{% include modules/column-w-toc.html
  id="intro"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Manifest files 

In both technologies you have a JSON manifest file in the extension's root directory. In the SDK this is called "[package.json](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Tools/package_json)", while in WebExtensions it's called ["manifest.json"](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Both files contain basic metadata such as the extension's name, description, and icons.


However, "manifest.json" includes many keys that define parts of the extension's capabilities and behavior, which in the SDK are more often defined in code. For example:

{% capture table %}

| Feature	                            | Add-on SDK         | WebExtensions              |
| ------------------------------------- | ------------------- | -------------------------- |
| Content scripts matching URL patterns | [`page-mod`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod) API | [`content-scripts`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key |
| Toolbar buttons                       | [`ui/button/action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_button_action) API | [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) key |
| Access privileged APIs                | `require()` function | [`permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) key |

{% endcapture %}
{% include modules/table.html
	content=table
%}


This makes developing extensions with WebExtension APIs more declarative and less programmatic, compared with SDK add-ons.

With the SDK you'll typically use [`jpm init`](https://developer.mozilla.org/Add-ons/SDK/Tools/jpm#jpm_init) to create a new package.json. The WebExtensions technology doesn't have an equivalent of `jpm init`, so you'll probably write the manifest from scratch or copy and adapt an existing one.

- [Learn more about manifest.json](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

{% endcapture %}
{% include modules/one-column.html
  id="manifest-files"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Persistent scripts

Both technologies have the concept of persistent scripts that stay loaded for the extension's lifetime, have access to privileged APIs, and can communicate with other parts of the extension such as content scripts.

In the SDK this script is by default called "index.js", and it can [load other scripts using the module loader](https://developer.mozilla.org/Add-ons/SDK/Guides/Module_structure_of_the_SDK#Local_Modules).

With WebExtensions, these scripts are called "[background scripts](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)". You can define a set of scripts using the [`background`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) manifest key, and they will all be loaded into the same document, which is a hidden, auto-generated, blank HTML page. You can also define your own custom document using the `background` key.

An important difference is that background scripts get a [`window`](https://developer.mozilla.org/docs/Web/API/Window) global, with all the DOM objects you'd expect to be present on a window. This makes writing extensions more like writing web pages, with direct access to all the normal Web APIs like [XMLHttpRequest](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest) or [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API).

Also note that by default, extensions have a [Content Security Policy](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) applied to them. You can specify your own policy, but the default policy, among other things, disallows potentially unsafe practices such as the use of [`eval()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval).

### Learn more 

- [Background scripts for extensions](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)

{% endcapture %}
{% include modules/one-column.html
  id="persistent-scripts"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Content scripts

In both the Add-on SDK and WebExtensions, persistent scripts can't directly access the content of web pages. Instead, extensions can attach content scripts to web pages. These scripts:

- do get direct access to web content
- don't have access to privileged APIs
- can communicate with the persistent scripts using a messaging API.

In both technologies, there are two ways to attach scripts: you can automatically attach a set of scripts to pages whose URL matches a given pattern, or you can programmatically attach a script to the page hosted by a given tab. The way to do this is different in each technology, though:

{% capture table %}

| Operation	                            | Add-on SDK          | WebExtensions              |
| ------------------------------------- | ------------------- | -------------------------- |
| Attach scripts to pages matching URL pattern | [`page-mod`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod) API | [`content-scripts`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key |
| Content scripts matching URL patterns | [`tab.attach()`](https://developer.mozilla.org/Add-ons/SDK/High-Level_APIs/tabs#Run_scripts_in_a_tab) | [`tabs.executeScript()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) |

{% endcapture %}
{% include modules/table.html
	content=table
%}

The match patterns used for URLs are different:

- [SDK match patterns](https://developer.mozilla.org/Add-ons/SDK/Low-Level_APIs/util_match-pattern)
- [WebExtension match patterns](https://developer.mozilla.org/Add-ons/WebExtensions/match_patterns)


In both technologies you can pass options to control when the script runs and whether it will be attached to subframes. WebExtensions don't include an equivalent of `contentScriptOptions`, though, so to pass configuration options to a content script in an extension, you would either have to send them in a message or store them in [`storage.local`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/local).

In both technologies, content scripts can communicate with persistent scripts using an asynchronous messaging API:

{% capture table %}

| Operation                             | Add-on SDK          | WebExtensions              |
| ------------------------------------- | ------------------- | -------------------------- |
| Send message                          | [`port.emit()`](https://developer.mozilla.org/Add-ons/SDK/Guides/Content_Scripts/port#emit()) | [`runtime.sendMessage()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) / [`tabs.sendMessage()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) |
| Receive message 						| [`port.on()`](https://developer.mozilla.org/Add-ons/SDK/Guides/Content_Scripts/port#on()) | [`runtime.onMessage`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) |

{% endcapture %}
{% include modules/table.html
	content=table
%}

- [Communicating with persistent scripts in the SDK](https://developer.mozilla.org/Add-ons/SDK/Guides/Content_Scripts#Communicating_with_the_add-on)
- [Communicating with persistent scripts in WebExtensions](https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts)

In both cases, content scripts can communicate with scripts loaded by the page using [`window.postMessage`](https://developer.mozilla.org/docs/Web/API/Window/postMessage) and [`window.addEventListener`](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener).

In both technologies, have access to the page they're injected into, but get "a clean view of the DOM", meaning that they don't get to see modifications made to the DOM by scripts loaded by the page.

In the SDK, content scripts can [share objects with page scripts](https://developer.mozilla.org/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Sharing_objects_with_page_scripts), using techniques like `unsafeWindow` and [`createObjectIn`](https://developer.mozilla.org/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.createObjectIn). With WebExtensions, the `unsafeWindow` is available via [`wrappedJSObject`](https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts#Accessing_page_script_objects_from_content_scripts) instead. All the export helper functions are available, too.

### Learn more 

- [Content scripts for WebExtensions](https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts)

{% endcapture %}
{% include modules/one-column.html
  id="content-scripts"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## UI elements

Both technologies provide APIs to create a UI for your extension. UI options for WebExtensions are more limited.

{% capture table %}

| UI Element 	      	| Add-on SDK          | WebExtensions              |
| --------------------- | ------------------- | -------------------------- |
| Button | [`ui/button/action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_button_action) | [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) / [`page_action`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/page_action) |
| Toggle button | [`ui/button/toggle`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_button_toggle) | [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) / [`page_action`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/page_action) |
| Toolbar | [`ui/toolbar`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_toolbar) | None |
| Sidebar | [`ui/sidebar`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_sidebar) | `sidebar_action` |
| Panel | [`panel`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel) | `browser_action` / `page_action` [popup](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Popups) |
| Context menu | [`context-menu`](https://developer.mozilla.org/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/context-menu) | [`contextMenus`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus) |

{% endcapture %}
{% include modules/table.html
	content=table
%}

### Panels and popups

Panels and [popups](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Popups) are both transient dialogs specified using HTML, CSS, and JavaScript.

Unlike panels, popups are always attached to a button (either a browser action or a page action) and can't be displayed programmatically: they are only shown when the user clicks the button.

Also unlike panels, popup scripts get access to all the same APIs that background scripts do. They can even get direct access to the background page, via [`runtime.getBackgroundPage()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage).


{% endcapture %}
{% include modules/one-column.html
  id="ui-elements"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Settings

The Add-on SDK and WebExtensions both have some support for settings (sometimes also called options or preferences).

With the SDK you can define preferences using a `preferences` key in package.json. The user can see and change these preferences in the extension's entry in the Add-ons Manager. The extension in turn can listen for changes using the [`simple-prefs`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/simple-prefs) API.

With WebExtensions, you will have to implement your own UI for presenting settings, and your own code for persisting them for your extension. You do this by writing an HTML file that presents the settings UI, which can include a script for persisting the settings. The script gets access to all the WebExtensions APIs, and it's generally expected that you should use the [storage](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage) API to persist settings.

You then assign the HTML file's URL to the [`options_ui`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key in manifest.json. Your settings page then appears in the extension's entry in the Add-ons Manager. The options page can also be programmatically opened with an API call to [`browser.runtime.openOptionsPage`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage).

Note that WebExtensions does not provide an equivalent of the SDK's [`preferences/service`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/preferences_service) API, which provides general access to browser settings. However, you can change some browser settings using the [`privacy`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/privacy) and [`browserSettings`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings) APIs.

### Learn more 

- [Introduction to options pages](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Options_pages)
- [An example extension that has an options page](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour)

{% endcapture %}
{% include modules/one-column.html
  id="settings"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Internationlization 

The Add-on SDK and WebExtensions both include tools for localizing user-visible text. They offer mostly similar functionality:

{% capture table %}

| Feature	                            | Add-on SDK          | WebExtensions              |
| ------------------------------------- | ------------------- | -------------------------- |
| Strings in add-on scripts 			| Yes 				  | Yes 					   |
| Strings in content scripts 			| No 				  | Yes 					   |
| Strings in HTML 						| Yes 				  | No  					   |
| Strings in CSS  						| No  				  | Yes						   |
| Title & description					| Yes				  | Yes 					   | 
| Plural forms 							| Yes				  | No  					   |
| Placeholders 							| Yes 				  | Yes						   | 

{% endcapture %}
{% include modules/table.html
	content=table
%}

In both systems, you supply localized strings as a collection of files, one for each locale.

To retrieve localized strings in extension code, there's a JavaScript API - [`l10n`](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/l10n) in the SDK and [`i18n`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/i18n) in WebExtensions - that returns a localized string given an ID.

WebExtensions don't have direct support for localizing strings appearing in HTML, so you have to do this yourself, using JavaScript to retrieve localized strings and to replace the HTML with the localized version.

### Learn more

- [Extensions Internationalization guide](https://developer.mozilla.org/Add-ons/WebExtensions/Internationalization)
- [Example internationalized extension](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n)
- [Example script for an extension using WebExtensions to translate HTML in the SDK style](https://gist.github.com/freaktechnik/4a72bc0711d9bc82cf3b075bcc292953)

{% endcapture %}
{% include modules/one-column.html
  id="internationalization"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Command-line tool

The Add-on SDK comes with a command-line tool, [jpm](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Tools/jpm), that you can use for testing and packaging extensions. There's an equivalent tool for WebExtensions, called [web-ext](/documentation/develop/getting-started-with-web-ext). web-ext doesn't yet support all the same commands that jpm does, but it has the basics: [run](/documentation/develop/web-ext-command-reference#web-ext-run), [build](/documentation/develop/web-ext-command-reference#web-ext-build), and [sign](/documentation/develop/web-ext-command-reference#web-ext-sign).

It's also now possible to install (and reload) SDK add-ons and extensions built with WebExtension APIs in Firefox from their source directory, without needing to package them as an XPI. See [Temporary Installation in Firefox](/documentation/develop/temporary-installation-in-firefox).

### Learn more

- [web-ext tutorial](/documentation/develop/getting-started-with-web-ext)
- [web-ext reference](/documentation/develop/web-ext-command-reference)
- [Temporary installation in Firefox](/documentation/develop/temporary-installation-in-firefox)

{% endcapture %}
{% include modules/one-column.html
  id="command-line-tool"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## JavaScript APIs

In both the SDK and WebExtensions, the main power of the extension comes from a set of dedicated JavaScript APIs. For most of the SDK high-level APIs, there is a WebExtensions equivalent.

One big limitation of WebExtensions compared with the SDK is that SDK add-ons can use require("chrome") to get access to the full range of XPCOM APIs in Firefox. This is not possible with WebExtensions.

To access privileged APIs in the SDK, you use require():

{% highlight json linenos %}

var tabs = require("sdk/tabs");
tabs.open("https://developer.mozilla.org/");

{% endhighlight %}

With WebExtensions most APIs are made available already, with no need to import them:

{% highlight json linenos %}

browser.tabs.create({
  "url": "https://developer.mozilla.org/"
});

{% endhighlight %}

For some WebExtension APIs, you need to ask permission first, using the [`permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json key. In the example below, the extension will need to ask for the "tabs" permission if they want access to the tab's URL:

**manifest.json:**

{% highlight json linenos %}

...

"permissions": [
    "tabs"
  ]

...

{% endhighlight %}

**background script:**

{% highlight json linenos %}

function logUrl(tabs) {
 console.log(tabs[0].url);
}

var querying = browser.tabs.query(
  {active: true, currentWindow: true}
);

querying.then(logUrl);


{% endhighlight %}

### Add-on SDK => WebExtensions

The tables in this section list every SDK API and describe what the equivalent WebExtensions API would be, if there is one implemented in the current Developer Edition.

The first table covers high-level SDK APIs, the second covers low-level APIs.

#### High-level APIs

{% capture table %}

| Add-on SDK                            | WebExtensions       | 
| ------------------------------------- | ------------------- | 
| [addon-page](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/addon-page) | Use [`tabs.create()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) to load pages packaged with your add-on into normal browser tabs. | 
| [base64](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/base64) | [`window.atob()` and `btoa()`](https://developer.mozilla.org/docs/Web/API/WindowBase64) | 
| [clipboard](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/clipboard) | [`document.execCommand`](https://developer.mozilla.org/docs/Web/API/Document/execCommand) without using `select()` and similar in the background page. | 
| [context-menu](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/context-menu) | [`contextMenus`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus)
| [hotkeys](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/hotkeys) | [`commands`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/commands)
| [indexed-db](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/indexed-db) | [`window.indexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API)
| [l10n](https://developer.mozilla.org/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/l10n) | [`i18n`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/i18n)
| [notifications](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/notifications) | [`notifications`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/notifications)
| [page-mod](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod) | [`content_scripts`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)
| [page-worker](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-worker) | Porting isn't complete and being treated in [Bug 1318532](https://bugzilla.mozilla.org/show_bug.cgi?id=1318532) <br/><br/> Workarounds (that might require webrequestBlocking to access all webpages [[example](https://stackoverflow.com/questions/15532791/getting-around-x-frame-options-deny-in-a-chrome-extension)]): <br/><br/> - Use the background page <br/> - load remote iframes into the background page <br/> - make an [ajax](https://developer.mozilla.org/docs/AJAX) call to get static information from the page 
| [panel](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel) | See [UI elements](#ui-elements) above. 
| [passwords](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/passwords) | [Experimental logins API](https://github.com/web-ext-experiments/logins)
| [private-browsing](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/private-browsing) | [`Tab.incognito`](https://developer.mozilla.org/Add-ons/WebExtensions/API/Tabs/Tab) and [`Window.incognito`](https://developer.mozilla.org/Add-ons/WebExtensions/API/windows/Window).
| [querystring](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/querystring) | [`window.URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams)
| [request](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/request) | [`window.fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API) or [`window.XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest)
|[selection](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/selection) | Use a content script that sends the selection data to the add-on. Alternatively, if you can use a contextmenu on a selection, the selection is contained in selectionText (see [`contextMenus.OnClickData`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus/OnClickData)).
| [self](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/self) | [`runtime.getManifest()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest) and [`extension.getURL()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL) for `data.url()`
| [simple-prefs](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/simple-prefs) | [`storage`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage) and [`options_ui`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
| [simple-storage](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/simple-storage) | [`storage`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)
| [system](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/system) | Partly provided by [`runtime`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime).
| [tabs](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs) | [`tabs`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
| [timers](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/timers) | [`alarms`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
| [ui](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/ui) | See [UI elements](#ui-elements) above.
| [url](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/url) | [`window.URL`](https://developer.mozilla.org/docs/Web/API/Window/URL)
| [widget](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/widget) | None
| [windows](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows) | [`windows`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/windows)

{% endcapture %}
{% include modules/table.html
	content=table
%}

#### Low-level APIs

{% capture table %}

| Add-on SDK                            | WebExtensions       | 
| ------------------------------------- | ------------------- | 
| [loader](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/_loader) | None
| [chrome](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/chrome) | None
| [console/plain-text](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/console_plain-text) | None
| [console/traceback](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/console_traceback) | None
| [content/content](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/content_content) | None
| [content/loader](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/content_loader) | None
| [content/mod](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/content_mod) | None
| [content/symbiont](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/content_symbiont) | None
| [content/worker](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/content_worker) | None
| [core/heritage](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/core_heritage) | None
| [core/namespace](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/core_namespace) | None
| [core/promise](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/core_promise) | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)
| [dev/panel](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/dev_panel) | [`devtools.panels`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels)
| [event/core](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/event_core) | None
| [event/target](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/event_target) | None
| [frame/hidden-frame](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/frame_hidden-frame) | None
| [frame/utils](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/frame_utils) | None
| [fs/path](https://developer.mozilla.org/docs/Archive/Add-ons/Add-on_SDK/Low-Level_APIs/fs_path) | None
| [io/byte-streams](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/io_byte-streams) | None
| [io/file](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/io_file) | None
| [io/text-streams](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/io_text-streams) | None
| [lang/functional](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/lang_functional) | None
| [lang/type](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/lang_type) | None
| [loader/cuddlefish](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/loader_cuddlefish) | None
| [loader/sandbox](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/loader_sandbox) | None
| [net/url](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/net_url) | None
| [net/xhr](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/net_xhr) | [`window.fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API) or [`window.XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest)
| [places/bookmarks](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/places_bookmarks) | [`bookmarks`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)
| [places/favicon](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/places_favicon) | None
| [places/history](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/places_history) | [`history`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/history)
| [platform/xpcom](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/platform_xpcom) | None
| [preferences/event-target](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/preferences_event-target) | None
| [preferences/service](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/preferences_service) | Limited support via the [`privacy`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/privacy) and [`browserSettings`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings) APIs.
| [remote/child](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/remote_child) | None
| [remote/parent](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/remote_parent) | None
| [stylesheet/style](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/stylesheet_style) | None
| [stylesheet/utils](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/stylesheet_utils) | None
| [system/child_process](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/system_child_process) | [`runtime.connectNative`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connectNative)
| [system/environment](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/system_environment) | None
| [system/events](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/system_events) | None
| [system/runtime](https://developer.mozilla.org/docs/Archive/Add-ons/Add-on_SDK/Low-Level_APIs/system_runtime) | Partially provided by [`runtime.getPlatformInfo`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getPlatformInfo)
| [system/xul-app](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/system_xul-app) | Partially provided by [`runtime.getBrowserInfo`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo)
| [tabs/utils](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/tabs_utils) | None
| [ui/button/action](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_button_action) | [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) / [`page_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
[ui/button/toggle](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_button_toggle) | [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) / [`page_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
| [ui/frame](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_frame) | None
| [ui/id](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_id) | None
| [ui/sidebar](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_sidebar) | [`sidebarAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)
| [ui/toolbar](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_toolbar) | None
| [util/array](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/util_array) | None
| [util/collection](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/util_collection) | None
| [util/deprecate](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/util_deprecate) | None
| [util/list](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/util_list) | None
| [util/match-pattern](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/util_match-pattern) | None
| [util/object](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/util_object) | None
| [util/uuid](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/util_uuid) | None
| [window/utils](https://developer.mozilla.org/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/window_utils) | None

{% endcapture %}
{% include modules/table.html
	content=table
%}

{% endcapture %}
{% include modules/one-column.html
  id="javascript-apis"
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

