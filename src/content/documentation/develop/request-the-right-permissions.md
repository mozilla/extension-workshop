---
layout: sidebar
title: Request the right permissions
description: Learn how to request the right permissions for your Firefox extension. Follow security best practices and only request what your extension needs.
permalink: /documentation/develop/request-the-right-permissions/
topic: Develop
tags: [add-ons, beginner, extensions, how-to, intermediate, permissions]
contributors:
  [caitmuenster, Zearin_Galaurum, rebloor, evilpie, hellosct1, freaktechnik]
last_updated_by: rebloor
date: 2026-10-18
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Requesting the right permissions

Or how to avoid permissions discouraging users from installing your extensions.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="introduction" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.liquid -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Introduction

To inform users of the potential impact of installing an extension, Firefox displays a message showing what [permissions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) an extension is requesting when it's installed. The prompt looks something like this:

![The install permission prompt in Firefox Nova for an extension requesting several permissions](/assets/img/documentation/develop/General_permissions_message_example.png)

Also, if an extension update requires additional permissions the user is prompted to approve the permissions before the updated version is installed:

![The update permission prompt in Firefox Nova, shown in the Add-ons Manager](/assets/img/documentation/develop/Permissions_update.png)

If the user chooses not to approve the permissions and cancels the update, the previous version remains installed and available for use.

These messages could discourage some users from installing your extension, as they might suggest it's doing something “scary”. We provide users with an [explanation of these permissions messages](https://support.mozilla.org/kb/permission-request-messages-explained) and guidance on [how to judge if they're appropriate](https://support.mozilla.org/kb/tips-assessing-safety-extension). However, there are several things you can do to reduce the likelihood of users abandoning the installation of your extension because of these messages; these include:

- Make sure you aren't requesting unnecessary permissions.
- Request permissions at runtime, which enables you to ask for the permissions in context and offer a fallback if the user doesn't grant them.
- Describe why your extension is requesting its permissions in its AMO description.

Tip: Permission messages aren't issued [when you load an unpacked extension](/documentation/develop/temporary-installation-in-firefox/). For information on how to see the standard runtime permission flow, see [Test permission requests](/documentation/develop/test-permission-requests/).

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="advised-permissions" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Advised permissions

Not all [permissions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) result in advice being given to the user. The permissions that trigger the display of a message and the messages they trigger are:

<!-- Table -->

<div class="table-wrapper table-scroll">

| Permission                                                                                                                       | Permissions messages                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host permissions                                                                                                                 | Access your data for all websites<br>Access your data for sites in the *[named]*  domain<br>Access your data in _#_ other domains<br>Access your data for _[named site]_<br>Access your data on _#_ other sites” |
| API permissions:                                                                                                                 |
| `bookmarks`                                                                                                                    | Read and modify bookmarks                                                                                                                                                                                        |
| `browserSettings`                                                                                                              | Read and modify browser settings                                                                                                                                                                                 |
| `browsingData`                                                                                                                 | Clear recent browsing history, cookies, and related data                                                                                                                                                         |
| `declarativeNetRequest`                                                                                                        | Block content on any page                                                                                                                                                         |
| `downloads`                                                                                                                    | Download files and read and modify the browser’s download history                                                                                                                                                |
| `downloads.open`                                                                                                               | Open files downloaded to your computer                                                                                                                                                                           |
| `find`                                                                                                                         | Read the text of all open tabs                                                                                                                                                                                   |
| `geolocation`                                                                                                                  | Access your location                                                                                                                                                                                             |
| `history`                                                                                                                      | Access browsing history                                                                                                                                                                                          |
| `management`                                                                                                                   | Monitor extension usage and manage themes                                                                                                                                                                        |
| `nativeMessaging`   | Exchange messages with programs other than Firefox  |
| `notifications`                                                                                                                | Display notifications to you                                                                                                                                                                                     |
| `pkcs11`                                                                                                                       | Provide cryptographic authentication services                                                                                                                                                                    |
| `privacy`                                                                                                                      | Read and modify privacy settings                                                                                                                                                                                 |
| `proxy`                                                                                                                        | Control browser proxy settings                                                                                                                                                                                   |
| `sessions`                                                                                                                     | Access recently closed tabs                                                                                                                                                                                      |
| `tabs`                                                                                                                         | Access browser tabs                                                                                                                                                                                              |
| `tabHide`                                                                                                                      | Hide and show browser tabs                                                                                                                                                                                           |
| `topSites`                                                                                                                     | Access browsing history                                                                                                                                                                                          |
| `webNavigation`                                                                                                                | Access browser activity during navigation                                                                                                                                                                            |
| `userScripts`                                                                                                                  | Allow unverified third-party scripts to access your data                                                                                                 |
| Clipboard access:                                                                                              
| `clipboardWrite`                                                                                                               | Input data to the clipboard                                                                                                                                                                                      |
| `clipboardRead`                                                                                                                | Get data from the clipboard                                                                                                                                                                                      |
| Other permissions:                                                                                                             |
| The manifest key [`devtools_page`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)<sup>*</sup> | Extend developer tools to access your data in open tabs                                                                                                                                                          |

&#42; This warning can be suppressed by setting the [optional permission](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) `"devtools"` and requesting the permission with the [permissions API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions). See [Request permissions at runtime](#request-permissions-at-runtime).

</div>

<!-- END: Table -->

::: note
The permissions that display messages and their messages may differ in other browsers. For information about viewing the permission message in Chrome, see [Viewing Warnings.](https://developer.chrome.com/apps/permission_warnings#view_warnings)
:::

These permissions don't get alerted to users:

- API permissions:
  - `alarms`
  - `contextMenus`
  - `contextualIdentities`
  - `cookies`
  - `declarativeNetRequestWithHostAccess`
  - `identity`
  - `idle`
  - `menus`
  - `storage`
  - `theme`
  - `webRequest`
  - `webRequestBlocking`
- Other permissions:
  - `unlimitedStorage`
  - `activeTab`

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="avoid-unnecessary-permissions" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Avoid unnecessary permissions

This section looks at situations where you might be asking for more permissions than your extension needs and what you should do about them.

### Ask for only the permissions your extension uses

This may seem obvious, but if you create an extension using an earlier example as a template or remove a feature during development or testing, you may be asking for permissions your extension doesn't need. Addressing this involves manually checking your code against the permissions ([`permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and [`optional_permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)) that you're requesting in the extension's `manifest.json`.

### Use "activeTab" rather than "tabs" and host permissions

Take an extension you're developing to help color-blind users. At the user's request, your extension looks for and updates CSS on a web page to replace colors the user may have difficulty distinguishing with safe colors. Your extension must access and update CSS on every page your user visits. You could do this by requesting the `"tabs"` permission and host permission for `"<all_urls>"`.

```json
"permissions": [
  "<all_urls>",
  "tabs"
]
```

Requesting these permissions results in the user getting this advice:

![The install permission prompt in Firefox Nova showing "Access your data for all websites"](/assets/img/documentation/develop/All_Websites_permissions.png) 

The alternative is to request `"activeTab"`. This permission provides your extension with the same capabilities but only for the active tab and only when run from the extension's UI (that is, from a toolbar button, navigation bar button, context menu, or shortcut key).

Importantly, `"activeTab"` doesn't display a permissions message when installing the extension.

### Avoid host permission "&lt;all_urls&gt;" if you can

Requesting host permission `"<all_urls>"` results in the permissions request message "Access your data for all websites". If your extension is designed to work with a few websites or domains, narrow the request. Then, when installing your extension, users see a count and a list, which is scrollable for longer lists, of the websites and domains access requests.

![The install permission prompt in Firefox Nova listing four domains](/assets/img/documentation/develop/Permissions_host_four.png)

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="request-permissions-at-runtime" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Request permissions at runtime

Users may not understand the context of permissions requested during installation. To provide the user with context, request permissions when they are needed using the [Permissions API](https://developer.mozilla.org/Add-ons/WebExtensions/API/permissions).

Permissions that can be requested a runtime are known as [optional permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions). However, not all permissions can be requested at runtime. There are also a small number of [optional-only permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions) that can only be requested at runtime. An example of one such optional-only permission is the `userScript` permission in Firefox.

A typical scenario for using this approach is the `"geoLocation"` permission. Say you've written a note-taking extension that includes the ability to add a minimap of the note-takers location. Requesting location access during installation might leave the user unclear why the extension needs to access location, so they might not install it. However, if permission to use location is requested when the user first tries the feature to add a minimap, they'll get a clearer understanding of why the permission is needed and be more likely to grant it. Should they choose not to grant the permission, the extension can offer a graceful fallback—in this example, not adding the minimap—but the important outcome of this approach is that the user has installed and used your extension.

![The optional permission request prompt in Firefox Nova](/assets/img/documentation/develop/Permissions_optional_request.png)

Making a runtime permission request is straightforward. Include any permissions you want to request under the `manifest.json` [`optional_permissions`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/optional_permissions) key. Then, pass the permissions you want granted to [`permissions.request`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request), which prompts the user to grant the permissions. `true` is returned if the user grants the request, `false` if they don't.

You can't request all the permissions available to `"permissions"` using optional permissions. You can't request these API permissions:

- `alarms`
- `background`
- `contentSettings`
- `contextualIdentities`
- `debugger`
- `downloads`
- `downloads.open`
- `find`
- `identity`
- `menus`
- `pageCapture`
- `privacy`
- `storage`
- `theme`

There are a couple of things to note:

- You can only request permissions inside the handler for a user action, such as from a toolbar button (browser action), shortcut menu item, or similar.
- If you need to request an optional-only permission, it must be the only permission you request in a `permissions.request` call.
- If you request several permissions at once, they are either all granted or all declined; the user cannot choose to grant some and not others.

Users can also grant or revoke optional permissions anytime through an extension's option page. Your extension, therefore, needs to test to determine whether it has the necessary permissions or listen to the [permissions.onAdded](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) and [permissions.onRemoved](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) events.

![The Permissions and data tab for an extension in the Firefox Nova Add-ons Manager, with the optional permission highlighted](/assets/img/documentation/develop/Optional-permissions_in_extension_options_page.png)

For more information about optional permissions, see [`optional_permissions`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/optional_permissions) and the [permissions](https://github.com/mdn/webextensions-examples/tree/master/permissions) example.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="add-information-about-permissions-to-your-extensions-amo-page" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Add information about permissions to your extensions AMO page

Permissions messages are most likely to prevent users from installing your extension because the user doesn't understand why permissions are being requested. While the user can get general advice on the impact of a permission, it may not be sufficient for them to understand why a permission is being requested in your extension.

To address this issue, provide information in your extension's AMO description explaining what permissions your extension requests and why.

A good example of this approach is [Gesturefy](https://addons.mozilla.org/firefox/addon/gesturefy/), which offers users this advice:

<table>
  <tr>
    <td>
      <p><strong>Permissions explained:</strong></p>
      <ul>
        <li>Access your data for all websites: <em>This is a key permission, because the complete gesture functionality is injected in every webpage you visit (which means a part of the code is running in each tab). This is necessary, because with the new API there is no other way to track your mouse movement or draw anything on the screen. It’s also needed to perform page specific commands like scroll down or up.</em></li>
        <li>Read and modify browser settings: <em>This is required to change the context menu behaviour for MacOS and Linux users to support the usage of the right mouse button.</em> </li>
        <li>Display notifications: <em>This is used to show a notification on Gesturefy updates or to display certain error messages.</em></li>
      <ul>
    </td>
  </tr>
</table>

</div>
</article>
</section>

<!-- END: Single Column Body Module -->
