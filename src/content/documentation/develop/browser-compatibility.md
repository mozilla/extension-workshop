---
layout: sidebar.liquid
title: Browser compatibility
description: Check browser compatibility for WebExtension APIs. Ensure your code works across Firefox and other browsers with these compatibility tables.
permalink: /documentation/develop/browser-compatibility/
topic: Develop
tags: [beginner, extensions, webextensions, compatibility, cross-browser]
contributors: [rebloor]
last_updated_by: rebloor
date: 2026-08-05
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Browser compatibility

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

All browsers have the same baseline support for namespace (`browser.*`) and promises:

- Firefox and Safari supported the `browser.*` namespace and promises from inception.
- Chromium-based browsers (such as Chrome, Opera, and Microsoft Edge) introduced promises with Manifest V3, except for DevTools APIs. Support for the `browser.*` namespace was added [in 2026](https://developer.chrome.com/docs/extensions/develop/concepts/browser-namespace), along with promise support in all asynchronous methods.

While work continues to standardize the browser extension APIs, differences remain among the Firefox, Safari, and Chromium-based browsers. These differences, summarized on this page, include:

- **API support**: JavaScript API support varies among browsers.
- **Manifest key support**: Support for `manifest.json` keys differs among browsers.
- Variations due to differences in browser behavior.

For information on building an extension that works on multiple browsers and accounts for these differences, see [Building a cross-browser extension](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension).

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "quick-start"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Namespace and asynchronous methods

You reference all extensions APIs using a namespace. For example, `browser.alarms.create({delayInMinutes});` creates an alarm that goes off after the time specified in `delayInMinutes`.

From mid-2026, all major browsers support the `browser` namespace and promises for asynchronous methods. Previously, Chromium-based browsers (such as Chrome, Opera, and Microsoft Edge) used only the `chrome` namespace with callbacks.

::: note
As a porting aid, Firefox supports `chrome` using callbacks, alongside `browser` using promises. This means that many older Chrome extensions work in Firefox without changes, unless they use Chrome-specific APIs that don’t exist in Firefox.
:::

To target older Chromium-based browsers with extensions written using the `browser` namespace and promises, use the [webextension-polyfill](https://github.com/mozilla/webextension-polyfill).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "namespace"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Promises

JavaScript provides several ways to handle asynchronous events. The extensions API standard is to use the promise object. The promise approach offers significant advantages when handling chained asynchronous event calls.

Firefox has always used the promise object. Chromium-based browsers historically supported callbacks through the `chrome` namespace, which is why many extensions and samples use callbacks. Chromium-based browsers now support promises through the `browser` namespace, so you no longer need to design around this for current browser versions.

So, extensions and samples written against the older, callback-only Chrome APIs use the `chrome` namespace, with callbacks to return values, and [`runtime.lastError`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/lastError) to communicate errors:

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

The equivalent code using the `browser` namespace and [promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise):

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
{% include modules/one-column.liquid,
  id: "asynchronous"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## API coverage

The differences in the extensions API function implementations among the browsers fall into two broad categories:

- Variations in the support for features within a function. For example, at the time of writing, Firefox doesn’t support the [notification](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/notifications) function method [`onButtonClicked`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked) while Firefox is the only browser that supports [`onShown`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown).

- Proprietary functions, supporting browser-specific features. For example, at the time of writing, containers is a Firefox-specific feature supported by the [`contextualIdentities`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities) function.

Full details of the differences in API support are provided in [Browser support for JavaScript APIs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) on MDN. Where there are caveats regarding support for an API feature, there is a drop down below the version number that expands to show details of the caveat. The API features reference page also explains the caveat.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "api-coverage"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Manifest keys

The differences in the supported [`manifest.json` keys](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json) among the browsers fall broadly into two categories:

- Extension information attributes. For example, at the time of writing, Firefox and Opera include the [developer](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key enabling the addition of details about the developer of the extension, as well as the author, to be recorded.
- Extension features. For example, at the time of writing, Edge did not support the [commands](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) key that enables shortcut keys to be defined for an extension.

Full details of the differences in key support are provided in the [Browser compatibility](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json#Browser_compatibility) section of the [`manifest.json`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json) page on MDN. Where there are caveats regarding support for a manifest key, there is a drop down below the version number that expands to show details of the caveat. The manifest key reference page also explains the caveat.

### Variations due to browser behavior

While a web extension API may be compatible between Firefox and the Chromium-based browsers, variations in the browser behavior may mean that the outcome for an extension or to the user are not identical.

Cases where the extension behavior may be affected include:

- **URLs in CSS**: Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.
- **[Web accessible resources](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)**: These assets use a URL with a browser-specific scheme where the authority is an extension-specific identifier, where:
  - Firefox uses the internal UUID, a unique identifier assigned randomly to an extension when it's installed.
  - Safari uses the internal ID, a unique identifier assigned randomly to an extension per browser session.
  - Extensions for Chromium-based browsers use an ID assigned to the extension when it is published. However, the [key](https://developer.chrome.com/docs/extensions/reference/manifest/key) property can be used to set this ID.
- **Content script requests context**: In Chromium-based browsers, when a request is called (for example, using `fetch())` to relative a URL, such as `/api`, from a content script, it is sent to `https://example.com/api`. Firefox uses absolute URLs.
- **Native messaging**: there are variations in the command-line arguments, manifest key names, and manifest location between Firefox and the Chromium-based browsers.

For example, in Firefox notifications are cleared immediately when the user clicks them. This is not the case in Chrome.

Details of these variations are documented as part of the API feature reference pages.

{% endcapture %}
{% include modules/one-column.liquid,
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
{% include modules/one-column.liquid,
  id: "more-information"
  content: content
%}

<!-- END: Single Column Body Module -->


