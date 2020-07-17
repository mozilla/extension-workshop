---
layout: sidebar.liquid
title: Browser compatibility
permalink: /documentation/develop/browser-compatibility/
topic: Develop
tags: [beginner, extensions, webextensions, compatibility, cross-browser]
contributors: [rebloor]
last_updated_by: rebloor
date: 2019-05-27 6:35:30
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Browser compatibility

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

While work continues to standardize the APIs used for browser extension development, there remain differences between Chromium-based browsers—such as Chrome, Opera, and the Chromium-based Microsoft Edge—and Firefox. These differences, summarized on this page, include:

- **Namespace**: In Chromium-based browsers, JavaScript APIs are accessed under the `chrome` namespace. In Firefox, they are accessed under the `browser` namespace.
- **Asynchronous APIs**: In Chromium-based browsers, asynchronous APIs are implemented using callbacks. In Firefox, asynchronous APIs are implemented using promise.
- **API support**: Support for JavaScript APIs differs among browsers.
- **Manifest key support**: Support for `manifest.json` keys differs among browsers.
- Variations due to differences in browser behavior.

Firefox is the most compliant with the proposed standard, and is, therefore, your best place to start when developing browser extensions. A simple way of addressing many of these differences is by using the [web extension polyfill library](https://github.com/mozilla/webextension-polyfill). For an introduction to using this tool, see [Building a cross-browser extension](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension). Note, however, that the polyfill does not support Firefox exclusive APIs that are not available in Chrome.

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "quick-start"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Namespace

You reference all extensions API functions using a namespace, for example, `browser.alarms.create({delayInMinutes});` would create an alarm in Firefox that goes off after the time specified in `delayInMinutes`.

There are two API namespaces in use:

- `browser`(the proposed standard) is used in Firefox. For example: `browser.browserAction.setIcon({path: "path/to/icon.png"});`
- `chrome` is used in Chromium-based browsers. For example: `chrome.browserAction.setIcon({path: "path/to/icon.png"});`

{% endcapture %}
{% include modules/one-column.liquid
  id: "namespace"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Asynchronous

JavaScript provides several ways in which to handle asynchronous events. The proposed extensions API standard is to use the promise object. The promise approach provides significant advantages when dealing with chained asynchronous event calls.

Firefox uses the promise object for all asynchronous WebExtensions APIs. Chromium-based browsers use callbacks.

As a porting aid, the Firefox WebExtension APIs supports `chrome` using callbacks and `browser` using promise. This means that many Chrome extensions will work in Firefox without changes, unless they are using Chrome specific APIs that don’t exist in Firefox.

In Chrome, asynchronous APIs use callbacks to return values, and [`runtime.lastError`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/lastError) to communicate errors:

```js
function logCookie(c) {
  if (chrome.extension.lastError) {
    console.error(chrome.extension.lastError);
  } else {
    console.log(c);
  }
}

chrome.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

The equivalent WebExtensions API code using [promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise):

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(logCookie, logError);
```

If you are unfamiliar with how JavaScript can handle asynchronous events or promises, take a look at [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) or the MDN [Using promises](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Using_promises) page.

{% endcapture %}
{% include modules/one-column.liquid
  id: "asynchronous"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## API Coverage

The differences in the extensions API function implementations among the browsers fall into two broad categories:

- Variations in the support for features within a function. For example, at the time of writing, Firefox doesn’t support the [notification](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/notifications) function method [onButtonClicked](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked) while Firefox is the only browser that supports [onShown](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown).

- Proprietary functions, supporting browser-specific features. For example, at the time of writing, containers is a Firefox-specific feature supported by the [contextualIdentities](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities) function.

Full details of the differences in API support are provided in [Browser support for JavaScript APIs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) on MDN. Where there are caveats regarding support for an API feature, there is a drop down below the version number that expands to show details of the caveat. The API features reference page also explains the caveat.

{% endcapture %}
{% include modules/one-column.liquid
  id: "api-coverage"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Manifest keys

The differences in the supported [manifest.json keys](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json) among the browsers fall broadly into two categories:

- Extension information attributes. For example, at the time of writing, Firefox and Opera include the [developer](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key enabling the addition of details about the developer of the extension, as well as the author, to be recorded.
- Extension features. For example, at the time of writing, Edge did not support the [commands](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) key that enables shortcut keys to be defined for an extension.

Full details of the differences in key support are provided in the [Browser compatibility](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json#Browser_compatibility) section of the [manifest.json](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json) page on MDN. Where there are caveats regarding support for a manifest key, there is a drop down below the version number that expands to show details of the caveat. The manifest key reference page also explains the caveat.

### Variations due to browser behavior

While a web extension API may be compatible between Firefox and the Chromium-based browsers, variations in the browser behavior may mean that the outcome for an extension or to the user are not identical.

Cases where the extension behavior may be affected include:

- **URLs in CSS**: Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.
- **[Web accessible resources](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)**: Firefox always use a random UUID to identify an extension in a browser instance. Extensions for Chromium-based browsers can use the [key](https://developer.chrome.com/extensions/manifest/key) property to fix the extension ID on different machines. However, the recommendation practice In Chromium-based browsers is not to use this approach.
- **Content script requests context**: In Chromium-based browsers, when a request is called (for example, using `fetch())` to relative a URL, such as `/api`, from a content script, it is sent to `https://example.com/api`. Firefox uses absolute URLs.
- **Native messaging**: there are variations in the command-line arguments, manifest key names, and manifest location between Firefox and the Chromium-based browsers.

For example, in Firefox notifications are cleared immediately when the user clicks them. This is not the case in Chrome.

Details of these variations are documented as part of the API feature reference pages.

{% endcapture %}
{% include modules/one-column.liquid
  id: "manifest-keys"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## More information

You can find more detailed information about the differences in the supported browser extensions API features in:

- [Browser support for JavaScript APIs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browser compatibility for manifest.json](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{% endcapture %}
{% include modules/one-column.liquid
  id: "more-information"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.liquid -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.liquid -%}

<!-- END: Up Next -->
