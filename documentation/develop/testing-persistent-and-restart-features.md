---
layout: sidebar
title: Testing persistent and restart features
permalink: /documentation/develop/testing-persistent-and-restart-features/
published: false
topic: Develop
tags:
  [
    add-on,
    Beginner,
    Development,
    Extensions,
    How-to,
    Intermediate,
    Testing,
    web-ext,
    WebExtensions,
  ]
contributors: [mdnwebdocs-bot, freaktechnik, Rob--W, rebloor, tophf, Dietrich]
last_updated_by: mdnwebdocs-bot
date: 2019-03-18 18:03:56
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Testing persistent and restart features

When testing your extension, you may notice that some features reset themselves or stop working when you load an updated version or after you restart Firefox. For example, you may be using local storage and notice that previously saved data disappears when you reload your extension. Alternatively, you may want to test your extension across a Firefox restart but notice your extension doesn't remain loaded.

This article explains why you see these behaviors. It then shows you what to do to ensure that features persist when you reload your extension and how to set up to test restart behavior.

Before we look at how Firefox treats the extension you're testing; there are a couple of features of Firefox and extensions that you need to be aware of: the add-on ID and Firefox profiles.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## What is an add-on ID?

The add-on ID is used to uniquely identify each extension and in turn that ID is used to link an extension to certain features of the WebExtension APIs. These features are:

- [`storage.managed`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed)—identifies data as belonging to the extension by its add-on ID.
- [`storage.sync`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)—identifies data as belonging to the extension by its add-on ID.
- [`identity.getRedirectURL`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL)—the redirect URL includes the extension's add-on ID.
- [Native messaging](https://developer.mozilla.org/Add-ons/WebExtensions/Native_messaging)—the native app identifies extensions that can communicate with it by their add-on ID.
- [`pkcs11`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11)—the PKCS #11 module identifies extensions that can communicate with it by their add-on ID.
- [`runtime.onMessageExternal`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal)—an extension sends messages to another extension using its add-on ID as the address.
- [`runtime.onConnectExternal`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnectExternal)—an extension requests a connection with an extension by the other extension's add-on ID.
- [`browserAction`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)—the saved position of the button is identified as belonging to the extension based on its add-on ID.

An extension can be assigned an add-on ID using the manifest.json file `"applications"` key.

{% highlight javascript linenos %}
"applications": {
  "gecko": {
    "id": "addon@example.com"
  }
}
{% endhighlight %}

If the extension doesn't have an add-on ID defined with the `"applications"` key, it gets an add-on ID through one of the following:

- If the extension is submitted AMO and signed, it's given an ID when it's signed.
- If the extension is loaded using Load Temporary Add-on in about:debugging it's assigned a temporary add-on ID.

![temporary extensions]({% asset "documentation/develop/Temporary_extensions.png" @optim @path %})

You'll notice an additional ID in the image above, the Internal UUID. This is a unique identifier given to the extension on installation. It's used to define the storage location for resources included in the extension and identify an extension's data in [window.localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) or [indexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). However, you don't need to know its value. Its use in `window.localStorage` or `indexedDB` is transparent and to access resources included in the extension you use [`runtime.getURL`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL), which returns the path to the resources. And, because it's unique to each installation, it doesn't provide an ID that can be relied upon for other purposes.

{% endcapture %}
{% include modules/column-w-toc.html
  id="what-is-an-add-on-id"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## What is a Firefox profile?

Data that defines how the user has configured Firefox, along with information generated as they browse the web such as history and cookies, is stored in a special folder, called a [profile](https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data). In addition to cookies, the profile holds local storage and other profile related content.

{% endcapture %}
{% include modules/one-column.html
  id="what-is-a-firefox-profile"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Extension behavior in Firefox

When you develop an extension, assuming you've not defined an add-on ID using the `"applications"` key, the default behavior in Firefox is as follows:

- when using the Load Temporary Add-on feature in about:debugging your extension is assigned a new add-on ID each time you load it.
- when using web-ext, in addition to getting a new add-on ID each time you launch an extension it's also launched into a new profile.
- when a temporarily loaded extension is unloaded, local storage, such as that used by `storage.local`, `window.localStorage`, and `indexedDB`, is removed.
- when you stop Firefox, any temporarily loaded extensions are unloaded so aren't available when Firefox restarts. This includes extensions loaded with Load Temporary Add-on in about:debugging and web-ext.

The consequences of this behavior, when reloading an extension, is that:

- any data in local or sync storage is lost.
- any redirect URL becomes invalid.
- the extension will no longer be able to communicate with native apps or a PKCS #11 module.
- it will no longer be possible to send messages or create connections between extensions.
- you cannot test how the extension will behave if Firefox is stopped and restarted.
- `browserAction` positions are not carried over.

{% endcapture %}
{% include modules/one-column.html
  id="extension-behavior-in-firefox"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## What do I do to ensure I can test my extension?

To get your extension to behave like a signed extension during development testing, use the following techniques:

- to make sure an extension can use add-on ID dependent features between reloads, such as local storage or native application communication:
  - set an add-on ID using the `"applications"` key in the extension's manifest.json.
  - when using web-ext, make sure you use the same profile.
- to ensure you use the same profile for multiple tests of an extension when using web-ext:
  - optionally, use [Profile Manager](https://support.mozilla.org/kb/profile-manager-create-and-remove-firefox-profiles) to create a new Firefox profile.
  - find the path to your new profile or the default Firefox profile by following the instructions in [How do I find my profile?](https://support.mozilla.org//kb/profiles-where-firefox-stores-user-data#w_how-do-i-find-my-profile)
  - add the Firefox profile path to the `web-ext run` command as follows: <br/> `web-ext run --firefox-profile [A PATH TO A FIREFOX PROFILE] --keep-profile-changes`
- to preserve `storage.local` data, access to `window.localStorage` or `indexedDB` data when removing a temporary add-on (such as between browser restarts):
  - go to about:config and set both <br/> `extensions.webextensions.keepStorageOnUninstall` and <br/> `extensions.webextensions.keepUuidOnUninstall` to `true`.
- to test restart behavior:

  - set an add-on ID using the `"applications"` key in the extension's manifest.json.
  - install the [Nightly](https://www.mozilla.org/firefox/nightly/all/) or [Developer](https://www.mozilla.org/firefox/developer/) editions of Firefox. Note: You can also use [unbranded Beta and Release builds](https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds).
  - go to about:config and set `xpinstall.signatures.required` to `false`.
  - package your extension into a ZIP file [using web-ext](/documentation/develop/web-ext-command-reference#web-ext-build) or by [zipping it manually](/documentation/publish/package-your-extension).
  - install your extension using Install Add-on From File in the Add-on manager (about:addons). <br/> Note: Remember you'll need to reload your extension each time you change it. <br/> Note: If you don't set the add-on ID, when you load the extension you get an error like this: <br/> ![ID failure]({% asset "documentation/develop/ID_failure.png" @optim @path %}) <br/> with a matching error in the browser console.

  ![ID failure in console]({% asset "documentation/develop/ID_failure_console.png" @optim @path %})

{% endcapture %}
{% include modules/one-column.html
  id="what-do-i-do-to-ensure-i-can-test-my-extension"
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
