---
layout: sidebar
title: Firefox built-in consent for data collection and transmission
description: Understand the Firefox built-in data consent mechanisms. Use Firefox's features to inform users about data collection in your extension.
permalink: /documentation/develop/firefox-builtin-data-consent/
topic: Develop
tags: [data-collection, data-transmission, api, permissions, firefox, guide]
contributors:
  [
    abyrne-moz,
    wagnerand,
    willdurand
  ]
last_updated_by: wagnerand
date: 2025-08-04
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Firefox built-in consent for data collection and transmission

::: note
Firefox supports built-in consent for data collection and transmission in Firefox for desktop 140 and later, and Firefox for Android 142 and later.

From November 3, 2025, all new extensions must adopt the Firefox built-in data collection consent system. Extensions must state if and what data they collect or transmit. New versions and updates for add-ons created before November 3 don’t need to use this feature, but will have to at a later date.

For updates on the rollout and the timeline for AMO accepting submissions using this feature and for tips on how to take advantage of it, see the [community blog](https://blog.mozilla.org/addons/).
:::

You can specify the data your extension collects or transmits in the extension’s `manifest.json` file. This information is shown to the user when they first install the extension. A user can then choose to accept or reject the data collection, just as they do with extension permissions. You can also specify that the extension collects no data.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Taxonomy

Firefox uses categories to standardize data collection information for developers and users. In line with the [policies](/documentation/publish/add-on-policies/), there are two types of data: *Personal data* and *Technical and Interaction data*.

### Personal data

Personally identifiable information can be actively provided by the user or obtained through extension APIs. It includes, but isn’t limited to, names, email addresses, search terms, and browsing activity data, as well as access to and placement of cookies.

| Data type<br>visible during install    | Data collection permission<br>used in the manifest | Definition and examples                                                                                                                                                                                           | Eligible for [implicit consent](/documentation/publish/add-on-policies/#data-collection-and-transmission-disclosure-and-control)? |
|----------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Personally identifying information** | `personallyIdentifyingInfo`                          | Examples: contact information such as name and address, email, and phone number, as well as other identifying data such as ID numbers, voice or video recordings, age, demographic information, or biometric data. | no                                                                                                                                                |
| **Health information**                 | `healthInfo`                                         | Examples: medical history, symptoms, diagnoses, treatments, procedures, or heart rate data.                                                                                                                     | no                                                                                                                                                |
| **Financial and payment information**  | `financialAndPaymentInfo`                            | Examples: credit card numbers, transactions, credit ratings, financial statements, or payment history.                                                                                                          | no                                                                                                                                                |
| **Authentication information**         | `authenticationInfo`                                 | Examples: passwords, usernames, personal identification numbers (PINs), security questions, and registration information for extensions that offer account-based services.                                      | no                                                                                                                                                |
| **Personal communications**            | `personalCommunications`                             | Examples: emails, text or chat messages, social media posts, and data from phone calls and conference calls.                                                                                                    | no                                                                                                                                                |
| **Location**                           | `locationInfo`                                       | Examples: region, GPS coordinates, or information about things near a user’s device.                                                                                                                            | yes                                                                                                                                               |
| **Browsing activity**                  | `browsingActivity`                                   | Information about the websites users visit, such as specific URLs, domains, or categories of pages users view.                                                                                               | yes                                                                                                                                               |
| **Website content**                    | `websiteContent`                                     | Covers anything visible on a website — such as text, images, videos, and links — and anything embedded such as cookies, audio, page headers, and request and response information.                             | yes                                                                                                                                               |
| **Website activity**                   | `websiteActivity`                                    | Examples: interactions and mouse and keyboard activity, such as scrolling, clicking, typing, and actions such as saving and downloading.                                                                     | yes                                                                                                                                               |
| **Search terms**                       | `searchTerms`                                        | Search terms entered into search engines or the browser.                                                                                                                                                        | yes                                                                                                                                               |
| **Bookmarks**                          | `bookmarksInfo`                                      | Information about Firefox bookmarks, including specific websites, bookmark names, and folder names.                                                                                                             | yes                                                                                                                                               |

### Technical and interaction data

Technical data describes the environment the user is running, such as browser settings, platform information, and hardware properties. User interaction data includes how the user interacts with Firefox and the installed add-on, metrics for product improvement, and error information.

| Data type<br>visible during install | Data collection permission<br>used in the manifest | Definition and examples                                                                          |
|-------------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Technical and interaction data**  | `technicalAndInteraction`                          | Examples: Device and browser info, extension usage and settings data, crash and error reports. |

{% endcapture %}
{% include modules/column-w-toc.liquid,
    id: "taxonomy"
    content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Specifying data types

You specify the data types your extension transmits in the `browser_specific_settings.gecko.data_collection_permissions` key in the `manifest.json` file. As a reminder, the policies state that data transmission refers to any data collected, used, transferred, shared, or handled outside the add-on or the local browser.

### Personal data

Personal data permissions can be required or optional, except for `technicalAndInteraction` that cannot be required:

```json
"browser_specific_settings": {
  "gecko": {
    "data_collection_permissions": {
      "required": [...],
      "optional": [...]
    }
  }
}
```

The rest of this section describes each key in the `data_collection_permissions` object.

#### Required data

When you specify data types in the required list, users must accept this data collection to use the extension, they cannot opt out. To enables the user to review the data-collection requirements of an extension before installing it, data collection information is presented to the user in the installation prompt, like this:

![The extension installation prompt shows data types as specified in the manifest.](/assets/img/documentation/develop/data-collection-permissions-prompt-install.webp)

If the user doesn’t agree to data collection, they can cancel the extension installation.

This installation prompt is the result of a `manifest.json` file that specifies one required data type, `locationInfo`, and one optional data type, `technicalAndInteraction`.

```json
{
  "manifest_version": 2,
  "name": "Example - Data collection with fallback",
  "version": "1.0.0",
  "permissions": [
    "storage",
    "management"
  ],
  "browser_specific_settings": {
    "gecko": {
        "id": "@example-data-collection-with-fallback",
        "data_collection_permissions": {
          "required": [
             "locationInfo"
          ],
          "optional": [
             "technicalAndInteraction"
          ]
         }
      }
  },
  "background": {
    "scripts": [
      "background.js"
    ]
  },
  "browser_action": {},
  "options_ui": {
     "page": "options/page.html"
  }
}
```

This adds the require required data collection paragraph to the installation prompt. The data permissions are also listed in `about:addons` like this:

![The about:addons page shows details of required and optional data collection permissions,](/assets/img/documentation/develop/data-collection-permissions-about-addons.webp)

#### Optional data

Optional data collection permissions are specified using the optional list. These aren’t presented during installation (except for `technicalAndInteraction`), and they aren’t granted by default. The extension can request that the user opts in to this data collection after installation using a prompt, and the user can enable or disable this optional data collection in `about:addons` in the *Permissions and data* section of the extension settings.

### Technical and interaction data

The `technicalAndInteraction` data type behaves differently to all other data types. This data permission must be optional, but unlike other optional data collection options, the user can turn this permission on or off during the installation flow. This choice is available in the optional settings section of the extension installation prompt.

### No data collection

If your extension doesn’t collect or transmit any data, you should explicitly indicate that by specifying the `none` required permission in the manifest, as follows:

```json
{
  "manifest_version": 2,
  "name": "extension without data collection",
  "version": "1.0.0",
  "browser_specific_settings": {
    "gecko": {
      "id": "@extension-without-data-collection",
      "data_collection_permissions": {
        "required": ["none"]
      }
    }
  },
  "permissions": [
    "bookmarks",
    "<all_urls>"
  ]
}
```

When a user attempts to install this extension, Firefox shows the usual installation prompt with the description of the required (API) permissions and a description to indicate that the extension doesn’t collect any data, like this:

![The extension installation prompt shows the no data transmission ar defined in the manifest](/assets/img/documentation/develop/data-collection-permissions-prompt-install-no-transmission.webp)

The "no data collected" type is also listed in the *Permissions and data* tab of the extension in `about:addons`, like this:

![The  about:addons page shows the "no data collected" permission.](/assets/img/documentation/develop/data-collection-permissions-about-addons-no-transmission.webp)

{% endcapture %}
{% include modules/one-column.liquid,
    id: "specifying-data-types"
    content: content
%}

{% capture content %}

## Accessing the data collection permissions programmatically

You use the [`browser.permissions` API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions) to interact with the optional data permissions. Specifically, the `getAll()` method returns the list of granted optional data permissions, as follows:

```js
await browser.permissions.getAll()

{
  origins: ["<all_urls>"],
  permissions: ["bookmarks"],
  // In this case, the permission is granted.
​  data_collection: ["technicalAndInteraction"]
}
```

You use the presence or absence of the `data_collection` key in the response of the `getAll()` method to feature-detect the built-in data collection consent experience in Firefox at runtime.

```js
const perms = await browser.permissions.getAll();
if (!perms.data_collection) {
  // no built-in data consent in Firefox
}
```

You use the [`browser.permissions.request()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) API method to get consent from users for ancillary data collection (defined in the optional list):

```js
await browser.permissions.request({ data_collection: ["healthInfo"] });
```

This call displays a message to the user, giving them the choice to opt in to this data collection, like this:

![The prompt for requesting data collection permissions programmatically.](/assets/img/documentation/develop/data-collection-permissions-prompt-programmatic.webp)

{% endcapture %}
{% include modules/one-column.liquid,
    id: "acessing-data-permissions-programmatically"
    content: content
%}

{% capture content %}

## Updates

When an extension is updated, Firefox only shows the added required data permissions, unless it’s the special `none` data type, because when the extension doesn’t collect any data, that doesn’t need to be notified to the user.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "updates"
    content: content
%}
