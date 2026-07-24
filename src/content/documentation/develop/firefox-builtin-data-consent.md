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
    D4n2021,
    rebloor,
    wagnerand,
    willdurand,
  ]
last_updated_by: rebloor
date: 2026-04-25
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Firefox built-in consent for data collection and transmission

::: note
Firefox supports built-in consent for data collection and transmission in Firefox for desktop 140 and later, and Firefox for Android 142 and later.

From November 3, 2025, all new extensions must adopt the Firefox built-in data collection consent system. Extensions must state if and what data they collect or transmit. New versions and updates for add-ons created before November 3 don’t need to use this feature, but will have to at a later date.

Implementing the built-in consent feature doesn't remove the obligation to create a [custom data collection experience](/documentation/develop/best-practices-for-collecting-user-data-consents/) for use when installing on Firefox versions from before the feature's introduction. See [Data collection experience on older Firefox versions](#data-collection-experience-on-older-Firefox-versions) for implementation advice.

For updates on the rollout and the timeline for AMO accepting submissions using this feature and for tips on how to take advantage of it, see the [community blog](https://blog.mozilla.org/addons/).
:::

You use Firefox's built-in consent experience to specify what, if any, data your extension collects or transmits by adding details to your extension's `manifest.json` file. If your extension collects data, this information is shown to the user when they first install the extension and when the extension is updated if the data collected changes. A user can then choose to accept or reject the data collection, just as they do with extension permissions. 

::: note
You also use this feature to [specify that your extension collects no data](#specifying-no-data-collection).
:::

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Taxonomy

Firefox uses categories to standardize data collection information for developers and users. In line with the [policies](/documentation/publish/add-on-policies/), there are two types of data: *Personal data* and *Technical and Interaction data*.

{% endcapture %}
{% include modules/column-w-toc.liquid,
    id: "taxonomy"
    content: content_with_toc
%}

{% capture content %}

### Personal data

Personally identifiable information can be actively provided by the user or obtained through extension APIs. It includes, but isn’t limited to, names, email addresses, search terms, and browsing activity data, as well as access to and placement of cookies.

| Data type<br>visible during install    | Data collection permission<br>used in the manifest | Definition and examples                                                                                                                                                                                           | Eligible for [implicit consent](/documentation/publish/add-on-policies/#implicit-consent-for-self-evident-single-use-extension)? |
|----------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Personally identifying information** | `personallyIdentifyingInfo`                          | Examples: contact information such as name and address, email, and phone number, as well as other identifying data such as ID numbers, voice or video recordings, age, demographic information, or biometric data. | no                                                                                                                                                |
| **Health information**                 | `healthInfo`                                         | Examples: medical history, symptoms, diagnoses, treatments, procedures, or heart rate data.                                                                                                                     | no                                                                                                                                                |
| **Financial and payment information**  | `financialAndPaymentInfo`                            | Examples: credit card numbers, transactions, credit ratings, financial statements, or payment history.                                                                                                          | no                                                                                                                                                |
| **Authentication information**         | `authenticationInfo`                                 | Examples: passwords, usernames, personal identification numbers (PINs), security questions, and registration information for extensions that offer account-based services.                                      | no                                                                                                                                                |
| **Personal communications**            | `personalCommunications`                             | Examples: emails, text or chat messages, social media posts, and data from phone calls and conference calls.                                                                                                    | no                                                                                                                                                |
| **Location**                           | `locationInfo`                                       | Examples: region, GPS coordinates, or information about things near a user’s device.                                                                                                                            | yes                                                                                                                                               |
| **Browsing activity**                  | `browsingActivity`                                   | Information about the websites users visit, such as specific URLs, domains, or categories of pages users view.                                                                                               | yes                                                                                                                                               |
| **Website content**                    | `websiteContent`                                     | Covers anything visible on a website — such as text, images, videos, and links — and anything embedded, such as cookies, audio, page headers, and request and response information.                             | yes                                                                                                                                               |
| **Website activity**                   | `websiteActivity`                                    | Examples: interactions and mouse and keyboard activity, such as scrolling, clicking, typing, and actions, such as saving and downloading.                                                                     | yes                                                                                                                                               |
| **Search terms**                       | `searchTerms`                                        | Search terms entered into search engines or the browser.                                                                                                                                                        | yes                                                                                                                                               |
| **Bookmarks**                          | `bookmarksInfo`                                      | Information about Firefox bookmarks, including specific websites, bookmark names, and folder names.                                                                                                             | yes                                                                                                                                               |

{% endcapture %}
{% include modules/one-column.liquid,
    id: "taxonomy-personal-data"
%}

{% capture content %}

### Technical and interaction data

Technical data describes the environment the user is running, such as browser settings, platform information, and hardware properties. User interaction data includes how the user interacts with Firefox and the installed add-on, metrics for product improvement, and error information.

| Data type<br>visible during install | Data collection permission<br>used in the manifest | Definition and examples                                                                          |
|-------------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Technical and interaction data**  | `technicalAndInteraction`                          | Examples: Device and browser info, extension usage and settings data, crash and error reports. |

{% endcapture %}
{% include modules/one-column.liquid,
    id: "taxonomy-technical-and-interaction-data"
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Specifying data types

You specify the data types your extension transmits in the `browser_specific_settings.gecko.data_collection_permissions` key in the `manifest.json` file. As a reminder, the policies state that data transmission refers to any data collected, used, transferred, shared, or handled outside the add-on or the local browser.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "specifying-data-types"
    content: content
%}

{% capture content %}

### Personal data

Personal data permissions can be required or optional, except for `technicalAndInteraction`, which cannot be required:

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

When you specify data types in the required list, users must accept this data collection to use the extension; they cannot opt out. So the user can review the data-collection requirements of an extension before installing it, data collection information is presented to the user in the installation prompt, like this:

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

This manifest adds the "required" data collection paragraph to the installation prompt. `about:addons` also lists these data permissions, like this:

![The about:addons page shows details of required and optional data collection permissions.](/assets/img/documentation/develop/data-collection-permissions-about-addons.webp)

#### Optional data

You specify optional data-collection permissions in the optional list. Firefox doesn't present these permissions to the user during installation (except for `technicalAndInteraction`), and doesn't grant them by default. The extension can request that the user opts in to this data collection after installation by calling [`permissions.request()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) in a user-activated event handler. The user can turn this optional data collection on or off in `about:addons` in the *Permissions and data* section of the extension settings.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "specifying-personal-data"
    content: content
%}

{% capture content %}

### Technical and interaction data

The `technicalAndInteraction` data type behaves differently from all other data types. This data permission must be optional, but unlike other optional data collection options, the user can turn this permission on or off during the installation flow. This choice is available in the optional settings section of the extension installation prompt.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "specifying-technical-and-interaction-data"
    content: content
%}

{% capture content %}

### No data collection

If your extension doesn’t collect or transmit any data, you indicate that by specifying the `none` required permission in the manifest, as follows:

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

![The extension installation prompt shows that the manifest defines that no data is transmitted](/assets/img/documentation/develop/data-collection-permissions-prompt-install-no-transmission.webp)

The *Permissions and data* tab for the extension in `about:addons` also lists the "no data collected" type, like this:

![The  about:addons page shows the "no data collected" permission.](/assets/img/documentation/develop/data-collection-permissions-about-addons-no-transmission.webp)

{% endcapture %}
{% include modules/one-column.liquid,
    id: "specifying-no-data-collection"
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

You use the presence or absence of the `data_collection` key in the `getAll()` method’s response to feature-detect the built-in data collection consent experience in Firefox at runtime.

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

When an extension is updated, Firefox only shows the required data permissions added. However, Firefox doesn't notify the user of a change to no data collection (`"required": ["none"]`).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "updates"
    content: content
%}

{% capture content %}

## Testing

To see how the data collection prompts appear to a user for a new install or upgrade, follow the process described in [Test permission requests](/documentation/develop/test-permission-requests/).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "testing"
    content: content
%}

{% capture content %}

## Data collection experience on older Firefox versions

If your extension collects data and a user installs it on Firefox for desktop 139 or earlier, or Firefox for Android 141 or earlier, it must display a [custom data collection experience](/documentation/develop/best-practices-for-collecting-user-data-consents/). To allow for this, you have three options:

1. Set `strict_min_version` to 140 and 142 for [`gecko`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#strict_min_version) and [`gecko_android`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#strict_min_version_2) respectively in the extension's manifest.json file's `browser_specific_settings` key. This setting prevents the extension from installing or running on Firefox versions that do not support the built-in experience. 
2. Turn off the data collection for old Firefox versions. As this may limit the extension's features, consider informing users that they can use the extension fully by upgrading to the latest version of Firefox.
3. Triggered the display of a custom data collection experience for old Firefox versions.

For new extensions, options 1 or 2 make the most sense, as most users are on newer versions of Firefox.

If you choose to implement options 2 or 3, use the technique described in [Accessing the data collection permissions programmatically](#acessing-data-permissions-programmatically) to determine whether the `data_collection` key is present. If the key is absent, then turn off the data collection or trigger the display of the custom data collection experience.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "data-collection-experience-on-older-Firefox-versions"
    content: content
%}

