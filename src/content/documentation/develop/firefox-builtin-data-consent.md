---
layout: sidebar
title: Firefox built-in consent for data collection and transmission
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
date: 2025-06-19
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Firefox built-in consent for data collection and transmission

::: note
Firefox built-in consent for data collection and transmission is supported in Firefox for desktop 140 and later, and Firefox for Android 142 and above.

Please follow our [community blog](https://blog.mozilla.org/addons/) for updates on the overall rollout process and a timeline when we will start accepting accepting submissions on AMO that make use of this feature.
:::

Developers can specify what data they wish to collect or transmit in their extensions `manifest.json` file. This information will be parsed by the browser and shown to the user when they first install the extension. A user can then choose to accept or reject the data collection, just like they do with extension permissions. The developer can also specify that the extension collects no data.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Taxonomy

To standardize this information for both developers and end users, Mozilla has created categories based on data types that extensions might be using today. In line with our [policies](/documentation/publish/add-on-policies/), there are two types of data: *Personal data*, and *Technical and Interaction data*.

### Personal data

Personally identifiable information can be actively provided by the user or obtained through extension APIs. It includes, but is not limited to names, email addresses, search terms and browsing activity data, as well as access to and placement of cookies.

| Data type<br>Visible during install    | Data collection permission**<br>Used in the manifest | Definition / Examples                                                                                                                                                                                           |
|----------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Personally identifying information** | `personallyIdentifyingInfo`                          | Examples: contact information like name and address, email, and phone number, as well as other identifying data such as ID numbers, voice or video recordings, age, demographic information, or biometric data. |
| **Health information**                 | `healthInfo`                                         | Examples: medical history, symptoms, diagnoses, treatments, procedures, or heart rate data.                                                                                                                     |
| **Financial and payment information**  | `financialAndPaymentInfo`                            | Examples: credit card numbers, transactions, credit ratings, financial statements, or payment history.                                                                                                          |
| **Authentication information**         | `authenticationInfo`                                 | Examples: passwords, usernames, personal identification numbers (PINs), security questions, and registration information for extensions that offer account-based services.                                      |
| **Personal communications**            | `personalCommunications`                             | Examples: emails, text or chat messages, social media posts, and data from phone calls and conference calls.                                                                                                    |
| **Location**                           | `locationInfo`                                       | Examples: region, GPS coordinates, or information about things near a user’s device.                                                                                                                            |
| **Browsing activity**                  | `browsingActivity`                                   | Information about the websites you visit, like specific URLs, domains, or categories of pages you view over time.                                                                                               |
| **Website content**                    | `websiteContent`                                     | Covers anything visible on a website — such as text, images, videos, and links — as well as anything embedded like cookies, audio, page headers, request, and response information.                             |
| **Website activity**                   | `websiteActivity`                                    | Examples: interactions and mouse and keyboard activity like scrolling, clicking, typing, and covers actions such as saving and downloading.                                                                     |
| **Search terms**                       | `searchTerms`                                        | Search terms entered into search engines.                                                                                                                                                                       |
| **Bookmarks**                          | `bookmarksInfo`                                      | Information about Firefox bookmarks, including specific websites, bookmark names, and folder names.                                                                                                             |

### Technical and interaction data

Technical data describes information about the environment the user is running, such as browser settings, platform information, and hardware properties. User interaction data includes how the user interacts with Firefox and the installed add-on, metrics for product improvement, and error information.

| Data type<br>Visible during install | Data collection permission<br>Used in the manifest | Definition / Examples                                                                          |
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

You specify data types your extension transmits in the `browser_specific_settings.gecko.data_collection_permissions` key in the `manifest.json` file. As a reminder, our policies state that data transmission refers to any data that is collected, used, transferred, shared, or handled outside of the add-on or the local browser.

### Personal data

Personal data permissions can either be required or optional (only `technicalAndInteraction` cannot be required, see the documentation further down):

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

When types of data are specified in the required list, users must opt in to this data collection to use the extension. Users cannot opt-out, and Figure 1 gives an example of how it could look. If a user does not agree to the data collection the extension is not installed. This gives the user a chance to review the data collection requirements of an extension before it is installed in their browser.

In the example `manifest.json` file below, the developer specifies a single type of required data: `locationInfo`.

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

This results in a new paragraph in the installation prompt (see Figure 1). The data permissions are also listed in `about:addons` as shown in Figure 2.

![Figure 1: Installation prompt with data types as specified in the manifest](/assets/img/documentation/develop/data-collection-permissions-prompt-install.webp)
*Figure 1: Installation prompt with data types as specified in the manifest*

![Figure 2: The data permissions are also listed in about:addons](/assets/img/documentation/develop/data-collection-permissions-about-addons.webp)
*Figure 2: The data permissions are also listed in about:addons*

#### Optional data

Optional data collection permissions can be specified using the optional list. These are not surfaced during installation (except `technicalAndInteraction`; see next section), and they are not granted by default. The extension can request the user opts in to this data collection after installation via a prompt, and the user can enable or disable this option data collection at any time in `about:addons` in the *Permissions and data* section of the extension settings.

### Technical and interaction data

The `technicalAndInteraction` data type behaves differently compared to all others. This data permission can only be optional, but unlike other optional data collection options the user has the opportunity to enable or disable this during the installation flow. In Figure 1 above, this choice is available in the optional settings section of the installation prompt.

### No data collection

If an extension does not collect or transmit any data, developers should explicitly indicate that by specifying the `none` required permission in the manifest, as follows:

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

When a user attempts to install this extension, Firefox will show the usual installation prompt with the description of the required (API) permissions as well as a new description to indicate that the extension does not collect any data (see Figure 3).

![Figure 3: Installation prompt with no data transmission defined in the manifest](/assets/img/documentation/develop/data-collection-permissions-prompt-install-no-transmission.webp)
*Figure 3: Installation prompt with no data transmission defined in the manifest*

The "no data collected" type is also listed in the *Permissions and data* tab of the extension in `about:addons` as shown in Figure 4.

![Figure 4: The "no data collected" permission is listed in about:addons](/assets/img/documentation/develop/data-collection-permissions-about-addons-no-transmission.webp)
*Figure 4: The "no data collected" permission is listed in about:addons*

{% endcapture %}
{% include modules/one-column.liquid,
    id: "specifying-data-types"
    content: content
%}

{% capture content %}

## Accessing the data collection permissions programmatically

Extension developers can use the [`browser.permissions` API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions) to interact with the optional data permissions. Specifically, the `getAll()` method returns the list of granted optional data permissions as follows:

```js
await browser.permissions.getAll()

{
  origins: ["<all_urls>"],
  permissions: ["bookmarks"],
  // In this case, the permission is granted.
​  data_collection: ["technicalAndInteraction"]
}
```

The presence/absence of the `data_collection` key in the response of the `getAll()` method can also be used to feature-detect the built-in data collection consent experience in Firefox at runtime.

```js
const perms = await browser.permissions.getAll();
if (!perms.data_collection) {
  // no built-in data consent in Firefox
}
```

Extension developers can use the [`browser.permissions.request()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) API method (MDN docs) to get consent from users for ancillary data collection (defined in the optional list):

```js
await browser.permissions.request({ data_collection: ["healthInfo"] });
```

This will show the following message to the Firefox user, giving them the choice to opt in to this data collection or not (Figure 5)

![Figure 5: Prompt when requesting data collection permissions programmatically](/assets/img/documentation/develop/data-collection-permissions-prompt-programmatic.webp)
*Figure 5: Prompt when requesting data collection permissions programmatically*

{% endcapture %}
{% include modules/one-column.liquid,
    id: "acessing-data-permissions-programmatically"
    content: content
%}

{% capture content %}

## Updates

When an extension is updated, Firefox will only show the newly added required data permissions, unless it’s the special `none` data type because when the extension does not collect any data, that does not need to be exposed to the user.

{% endcapture %}
{% include modules/one-column.liquid,
    id: "updates"
    content: content
%}
