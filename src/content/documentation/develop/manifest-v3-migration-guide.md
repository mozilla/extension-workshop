---
layout: sidebar.liquid
title: Manifest V3 migration guide
permalink: /documentation/develop/manifest-v3-migration-guide/
topic: Develop
tags: [webextensions, api, firefox]
contributors: [
  erosman,
  Klestofer,
  rebloor,
  willdurand
]
last_updated_by: rebloor
date: 2023-03-03
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Manifest V3 migration guide

Manifest V3 became generally available in Firefox 109 after being available as a developer preview from Firefox 101. This page details what's changed and how you adapt your extensions to take advantage of Manifest V3.

See the [Developing extensions for Firefox for Android](/documentation/develop/developing-extensions-for-firefox-for-android/#mv3-compatibility) page for additional guidance if you plan to support Firefox for Android.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## What is Manifest V3?

Manifest V3 (MV3) is the umbrella term for several foundational changes to the WebExtensions API in Firefox. The name refers to the declared `manifest_version` key in each extension’s [manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

The Manifest V3 changes apply to extensions for Safari, Firefox, and Chromium-based browsers – such as Chrome, Edge, and Opera. While the goal is to maintain a high degree of compatibility between the Firefox, Safari, and Chromium extension platforms, our implementation diverges where we think it matters and where our values point to a different direction.

This article discusses the changes introduced with Manifest V3 in Firefox and highlights where they diverge from the Chrome and Safari implementation.

{% endcapture %}

{% include modules/column-w-toc.liquid,
    id: "what-is-manifest-v3"
    content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Manifest V3 changes

This section details the Manifest V3 changes made to Firefox.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "developer-preview-changes"
    content: content
%}

{% capture content %}

### Manifest version

The manifest.json key [`manifest_version`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version) accepts `3`. To use Manifest V3, update your manifest.json file like this:

```json
"manifest_version": 3
```

{% endcapture %}
{% include modules/one-column.liquid,
    id: "manifest-version"
    content: content
%}

{% capture content %}

### Search extensions icons

Search extensions must use local icons. This change prevents the unnecessary network pings that result from accessing remote icons.

To accommodate this change, provide a local icon and define it in your manifest.json [chrome_settings_overrides](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) manifest key like this:

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
{% include modules/one-column.liquid,
    id: "search-extensions-icons"
    content: content
%}

{% capture content %}

### Host permissions

Host permissions are no longer defined in the manifest.json keys `permissions` or `optional_permissions`. Instead, they are defined in the [`host_permissions`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) key.

In addition, unlike Manifest V2, where host permissions in `permissions` are granted on install, `host_permissions` in Manifest V3 are treated as optional permissions in Firefox and Safari and, therefore, must be requested. See [Requested permissions and user prompts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions#requested_permissions_and_user_prompts) in the `host_permissions` documentation for more information.

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
{% include modules/one-column.liquid,
    id: "host-permissions"
    content: content
%}

{% capture content %}

### Browser action

The features available under the manifest.json key `browser_action` and the `browserAction` API have moved to a new `action` [key](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) and [API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action). Also, the `_execute_action` [special shortcut](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) is introduced.

As the old and new key and API are otherwise identical, the changes needed are relatively straightforward and are as follows:

- rename the manifest.json key 'browser_action' to 'action' and remove any reference to [`browser_style`](#browser-style), like this:
  ```json
  "action": {
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
- update API references from `browser.browserAction` to  `browser.action`.
- if used, change `_execute_browser_action` to `_execute_action` in the `commands` manifest key and in the [`menu.create`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) and [`menu.update`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/update) API methods (or their aliases `contextMenus.create` and `contextMenus.update`).

::: note
If the user changes the shortcut of the `_execute_browser_action` command, it is automatically carried over to the `_execute_action` command when an extension migrates from Manifest V2 to V3. This was implemented in Chrome 111 and Firefox 127.
:::

::: note
In Chromium and Safari, the Browser Action and Page Action APIs are unified into the Action API, `page_action` is merged into the renamed `action` key, and the `_execute_page_action` special shortcut is replaced by `_execute_action`. Firefox retains the page action API, key, and special shortcut in the developer preview but will merge the page action features into action in a later release.
:::

{% endcapture %}
{% include modules/one-column.liquid,
    id: "browser-action"
    content: content
%}

{% capture content %}

### `browser_style`

In Manifest Version 3, `browser_style: true` is no longer supported in the [options_ui](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [page_action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), and [sidebar_action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest keys.

The goal of this property was to enable extension UI components to take on the browser's style. However, it only partially worked as intended. As a consequence, it has been deprecated for Manifest V3. Therefore, remove any references from the manifest keys.  

In Manifest Version 2, `browser_style` defaults to `true` for `options_ui` and `sidebar_action`. Therefore, unless you had set `"browser_style": false`, confirm that the appearance of `options_ui` and `sidebar_action` match your intended design.

See [Manifest V3 migration for `browser_style`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for more information.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "browser-style"
    content: content
%}

{% capture content %}

### Scripting API

The [Scripting API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting) takes over the features of `tabs.insertCSS()`, `tabs.removeCSS()`, and `tabs.executeScript()` and adds capabilities to register, update, and unregister content scripts at runtime.

Also, the `code` parameter is removed so that arbitrary strings can no longer be executed. This API requires the [`scripting` permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). So, you need to move any arbitrary strings executed as scripts to files and rewrite your code to use the Scripting API.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "scripting-api"
    content: content
%}

{% capture content %}

### Event-driven background scripts

Firefox has extended support for [background scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) by enabling non-persistent background pages (aka Event Pages) for Manifest V2 and V3. Using non-persistent background scripts greatly reduces your extension use of browser resources. However, MV3 removes support for persistent background pages.

To migrate your extension to using non-persistent background pages, you need to:

- Update your manifest.json `background` key to remove the `"persistent"` property or set it to `false`. This feature is also supported in MV2 from Firefox 106.
- Ensure listeners are at the top-level and use the synchronous pattern.
- Record state changes in local storage.
- Change timers to alarms.
- Switch from using [`extension.getBackgroundPage`](https://developer.mozilla.org/en-US/Mozilla/Add-ons/WebExtensions/API/extension/getBackgroundPage) to call a function from the background page, to [`runtime.getBackgroundPage`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage).
- Place menu creation using [`menus.create`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) or its alias `contextMenus.create` in a `runtime.onInstalled` listener. Also, note that the [`menus.onClicked`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked) event or its alias `contextMenus.onClicked` must be used to handle menu entry click events from an event page, instead of the `onclick` parameter of the `contextMenus.create` or `contextMenus.update` methods. If the `onclick` property of `menus.create` or its alias `contextMenus.create` are used from a call originating from an event page, they throw synchronously.

::: note
Safari also supports event-driven background scripts, however, Chromium has adopted service workers instead.
:::

::: note
Firefox supports non-persistent background pages from Firefox 106. In Firefox 105 and earlier, event pages are run as if they are a persistent background page.
:::

More information on the migration process can be found on the [background script](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) page on MDN.

{% endcapture %}

{% include modules/one-column.liquid,
    id: "event-driven-background-scripts"
    content: content
%}

{% capture content %}

#### Event pages and backward-compatibility

::: note
This section is only relevant if your extension supports Firefox 105 and earlier.
:::

An extension designed as a non-persistent background page works even when event pages are not supported (i.e., in Firefox 105 and earlier) with one exception: the registration of context menus. In an event page, context menus persist across restarts, while they do not in persistent background pages.

If the recommendation to register menus in `runtime.onInstalled` is followed, these menus are removed after a browser restart in Firefox 105 and earlier. To work around this issue, you could unconditionally call `browser.contextMenus.create`. When the menu exists, the `browser.runtime.lastError` property is set when the (optional) `create` callback is called.

```javascript
browser.contextMenus.create(
  {
    id: "my-menu",
    // etc.
  },
  () => {
    // TODO: Do not forget to read the "browser.runtime.lastError" property to
    // avoid warnings about an uncaught error when the menu item was created
    // before ("ID already exists: my-menu").
  }
);
```

If the initialization of the menu is expensive or requires complex logic, an alternative is to check whether event pages are supported and, if so, run the logic less frequently than at every wakeup of the event page (e.g., with [`runtime.onInstalled`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) or [`runtime.onStartup`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup)).

You can detect the availability of event pages using the characteristic that an error is thrown synchronously when `onclick` is passed to `contextMenus.create` in an event page.

The following code shows how to use such a test to register menus.

```javascript
let eventPagesSupported = true;
try {
  // Firefox throws a synchronous error when onclick is passed in an event page.
  browser.contextMenus.create({ id: "test-menu", onclick: () => {} });
  eventPagesSupported = false;
  browser.contextMenus.remove("test-menu");
} catch (err) {
  // Firefox 106+ error: Property "onclick" cannot be used in menus.create, replace with an "onClicked" event listener.
}
async function registerMyMenus() {
  browser.contextMenus.create({ id: "my-menu", /* etc. */ });
}
if (eventPagesSupported) {
  browser.runtime.onInstalled.addListener(registerMyMenus);
} else {
  registerMyMenus();
}
```

{% endcapture %}

{% include modules/one-column.liquid,
    id: "event-pages-and-backward-compatibility"
    content: content
%}

{% capture content %}

### Content security policies

[Content security policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) in the [`content_security_policy`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key is changing to use the `extension_pages` property. 

Therefore, you need to move the extension’s CSP to the manifest.json key to `extension_pages`, like this:

```json
"content_security_policy": {
 "extension_pages": "default-src 'self'"
}
```

Manifest V3 has a more restrictive content security policy than Manifest V2, this may require further changes in your pages.

Mozilla’s long-standing [add-on policies](/documentation/publish/add-on-policies/) prohibit remote code execution. In keeping with these policies, the [content_security_policy](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) field no longer supports sources permitting remote code in script-related directives, such as `script-src` or `’unsafe-eval’`. The only permitted values for the `script-src` directive are `’self’` and `’wasm-unsafe-eval’`. `’wasm-unsafe-eval’` must be specified in the CSP if an extension is to use WebAssembly. In Manifest V3, content scripts are subject to the same CSP as other parts of the extension.

Historically, a custom extension CSP required `object-src` to be specified. This is not required in Manifest V3 (and was removed from Manifest V2 in Firefox 106). See [`object-src` in the `content_security_policy` documentation](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive)). This change makes it easier for extensions to customize the CSP with minimal boilerplate.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "content-security-policies"
    content: content
%}

{% capture content %}

### Web Accessible Resources

Web accessible resources are available only to the sites and extensions specified in the manifest. In Manifest V3, Firefox supports the `extension_ids`, `matches`, and `resources` properties to specify the packaged resources you want to make available. Firefox does not support the `use_dynamic_url` property.

To migrate your extension, rewrite the manifest.json key [‘web_accessible_resources’](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)  to specify the sites and extensions that can access the resources.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "web-accessible-resources"
    content: content
%}

{% capture content %}

### Features already supported by Firefox

As part of its Manifest V3 implementation, Chromium introduces [promise](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview#promises) support to many methods with the goal of eventually supporting promises on all appropriate methods. This will provide for greater compatibility between Firefox and Chrome extensions, given that Firefox already supports promises when using the `browser.*` namespace.

In Manifest v2, Firefox extensions support the use of the `chrome.*` namespace with APIs that provide asynchronous event handling using callbacks. In Manifest V3, Firefox supports promises for asynchronous events in the `chrome.*` namespace.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "features-already-supported-by-firefox"
    content: content
%}

{% capture content %}

### Extension version in the manifest

The format of the top-level manifest.json `version` key in Firefox has evolved and became simpler: letters and other previously allowed symbols are no longer accepted. The value must be a string with 1 to 4 numbers separated by dots (e.g., `1.2.3.4`). Each number can have up to 9 digits and leading zeros before another digit are not allowed (e.g., `2.01` is forbidden, but `0.2`, `2.0.1`, and `2.1` are allowed).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "extension-version"
    content: content
%}

{% capture content %}

## Migration checklist

- Update the manifest.json key `manifest_version` to `3`.
- If your extension adds a search engine, add a local icon and reference it in the manifest.json key `chrome_settings_overrides.search_provider.favicon_url`.
- Remove any host permissions from the manifest.json keys `permissions` and `optional_permissions` and add them to the `host_permissions` key. Remember that `host_permissions` is treated as an optional permission in Firefox and Safari but granted at install in Chrome.
- Remove references to `browser_style` from the manifest.json keys `browser_action`, `options_ui`, `page_action`, and `sidebar_action`.
- If `browser_style:false` was not specified in `options_ui` and `sidebar_action`, confirm that their appearance has not changed.
- Rename the manifest.json key `browser_action` to `action` and update any API references from `browser.browserAction` to `browser.action`.
- Convert background pages to be non-persistent.
- Move the extension’s CSP to the manifest.json key `content_security_policy.extension_pages` and update the CSP to conform to Manifest V3 requirements.
- Move any arbitrary strings executed as scripts to files and update your code to use the Scripting API.
- Rename the deprecated manifest.json key `applications` to `browser_specific_settings`.
- The add-on ID is required to publish your extension. Make sure to add one in the manifest.json key `browser_specific_settings.gecko.id`.
- Ensure that the top-level manifest.json key `version` is a string of numbers separated by up to 3 dots. For details, see [version format](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "migration-checklist"
    content: content
%}

<!-- END: Single Column Body Module -->
