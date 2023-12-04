---
layout: sidebar
title: Request the right permissions
permalink: /documentation/develop/request-the-right-permissions/
topic: Develop
tags: [add-ons, beginner, extensions, how-to, intermediate, permissions]
contributors:
  [caitmuenster, mdnwebdocs-bot, rebloor, evilpie, hellosct1, freaktechnik]
last_updated_by: rebloor
date: 2021-03-19 
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

To help make users aware of the potential impact of installing an extension, Firefox will display a message showing what [permissions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) an extension is requesting when it's installed. The prompt looks  something like this:

![Example of the permissions messages from the Gesturefy extension](/assets/img/documentation/develop/General_permissions_message_example.png)

Also, if an extension update requires additional permissions the user is prompted to approve the permissions before the updated version is installed:

![Example of the message displayed when an extension update requests additional permissions](/assets/img/documentation/develop/Permissions_update.png)

If the user chooses not to approve the permissions and cancels the update, the previous version remains installed and available for use.

These messages have the potential to discourage some users from installing your extension, as the messages might suggest it's doing something “scary”. We provide users with an [explanation of these permissions messages](https://support.mozilla.org/kb/permission-request-messages-explained) and guidance on [how to judge if they're appropriate](https://support.mozilla.org/kb/tips-assessing-safety-extension). However, there are several things you can do to reduce the likelihood of users abandoning the install of your extension because of these messages, these include:

- Make sure you aren't requesting unnecessary permissions.
- Request permissions at runtime, which enables you to ask for the permissions in context and offer a fall back if the user doesn't grant them.
- Describe why your extension is requesting its permissions in its AMO description.

Tip: Permission warnings aren't issued [when you load an unpacked extension](/documentation/develop/temporary-installation-in-firefox/). For information on how to see the standard runtime permission flow, see [Test permission requests](/documentation/develop/test-permission-requests/).

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="advised-permissions" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Advised permissions

Not all [permissions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) result in advice being given to the user. The permissions that trigger the display of a message and the messages they trigger are:

<!-- Table -->

<div class="table-wrapper table-scroll">

| Permission                                                                                                                       | Permissions messages                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host permissions                                                                                                                 | Access your data for all websites<br>Access your data for sites in the *[named]*  domain<br>Access your data in _#_ other domains<br>Access your data for _[named site]_<br>Access your data on _#_ other sites” |
| API permissions:                                                                                                                 |
| `bookmarks`                                                                                                                    | Read and modify bookmarks                                                                                                                                                                                        |
| `browserSettings`                                                                                                              | Read and modify browser settings                                                                                                                                                                                 |
| `browsingData`                                                                                                                 | Clear recent browsing history, cookies, and related data                                                                                                                                                         |
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
| `topSites`                                                                                                                     | Access browsing history                                                                                                                                                                                          |
| `webNavigation`                                                                                                                | Access browser activity during navigation                                                                                                                                                                        |
| Clipboard access:                                                                                                                |
| `clipboardWrite`                                                                                                               | Input data to the clipboard                                                                                                                                                                                      |
| `clipboardRead`                                                                                                                | Get data from the clipboard                                                                                                                                                                                      |
| Other permissions:                                                                                                               |
| The manifest key [`devtools_page`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)<sup>*</sup> | Extend developer tools to access your data in open tabs                                                                                                                                                          |

&#42; This warning can be suppressed by setting the [optional permission](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) `"devtools"` and requesting the permission with the [permissions API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions). See [Request permissions at runtime](#request-permissions-at-runtime).

</div>

<!-- END: Table -->

::: note
The permissions that display messages and the messages they display may be different in other browsers. For information about viewing the permission message in Chrome, see [Viewing Warnings.](https://developer.chrome.com/apps/permission_warnings#view_warnings)
:::

The following permissions don't get alerted to users:

- API permissions:
  - `alarms`
  - `contextMenus`
  - `contextualIdentities`
  - `cookies`
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

This may seem obvious, but if you create an extension by using an earlier example as a template or you remove a feature during development or testing, you may be asking for permissions your extension doesn't need. Addressing this is a case of doing a manual check of your code against the permissions ([`permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and [`optional_permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)) that you're requesting in the extension's `manifest.json`.

### Use "activeTab" rather than "tabs" and host permissions

Take an extension you're developing to help-color blind users. At the user's request you're going to look for and update CSS in a web page to replace colors the user may have difficulty distinguishing with safe colors. You obviously need to access and update CSS on every page your user visits. You could do this by requesting the `"tabs"` permission and host permission for `"<all_urls>"`.

```json
"permissions": [
  "<all_urls>",
  "tabs"
]
```

Requesting these permissions results in the user getting this advice:

![Example of the "Access your data for all websites" permission message](/assets/img/documentation/develop/All_Websites_permissions.png)

The alternative is to request `"activeTab"`. This permission provides your extension with the same capabilities but only for the active tab and only when run from the extension's UI (that is from a toolbar button, navigation bar button, context menu, or shortcut key).

Importantly, `"activeTab"` doesn't result in the display of a permissions message when installing the extension.

### Avoid host permission "&lt;all_urls&gt;" if you can

As noted in the previous example, requesting host permission `"<all_urls>"` results in the permissions request message Access your data for all websites. If your extension is designed to work with one or a small number of websites or domains, narrow the request. On installation users will get details for the first four websites or domains you request access to.

![Example of the permissions message when host permission for four websites as requested](/assets/img/documentation/develop/Permissions_host_four.png)

If you request access to more than four websites or domains, the message will list the first three and indicate the number of other requests.

![Example of the permissions message when hosts permission for 5 or more website is requested](/assets/img/documentation/develop/Permissions_host_four_plus.png)

### Avoid the "unlimitedStorage" permission

Only ask for `"unlimitedStorage"` permission if you expect your extension's local data storage to exceed 5MB if it's not going to exceed that amount, don't ask for it.

![Example of the permission message when requesting access to unlimited client-side data storage](/assets/img/documentation/develop/Permissions_unlimiteddata.png)

Note: Firefox doesn't currently restrict local storage size, although it does ask users to approve this permission request if you make it. Firefox may add a restriction in the future. If that happens, the limit is unlikely to be less than Chrome's current 5 MB restriction.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="request-permissions-at-runtime" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Request permissions at runtime

Users may not understand the context of permissions requested during installation. The alternative approach is to request permissions as they are needed, using the [Permissions API](https://developer.mozilla.org/Add-ons/WebExtensions/API/permissions), and thereby provide the user with context.

A typical scenario for using this approach is the `"geoLocation"` permission. Say you've written a note-taking extension that includes the ability to add a minimap of the note takers location. Requesting location access during installation might leave the user unclear why the extension needs to access location, so they might not install it. However, if permission to use location is requested when the user first tries the feature to add a minimap, they'll get a clearer understanding of why the permission is needed and be more likely to grant it. And should they choose not to grant the permission, the extension can offer a graceful fall-back—in this example, not adding the minimap—but the important outcome of this approach is that the user has installed and used your extension.

![Example of an additional or runtime permission request message](/assets/img/documentation/develop/Permissions_optional_request.png)

Making a runtime permission request is straightforward. Include any permissions you want to request under the `manifest.json` [`optional_permissions`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/optional_permissions) key. Then pass the permissions you want granted to [`permissions.request`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request), which prompts the user to grant the permissions. `true` is returned if the user grants the request, `false` if they don't.

You can't request all the permissions available to `"permissions"` using optional permissions. You can't request the following API permissions:

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
- If you request several permissions at once they are either all granted or all declined, the user cannot choose to grant some and not others.

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

Permissions messages are most likely to prevent a user from installing your extension because they don't understand why permissions are being requested. While the user can get general advice on the impact of a permission, it may not be sufficient for them to understand why a permission is being requested in your extension.

To address this issue, provide information in your extension's AMO description that explains what permissions your extension is requesting and why.

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


