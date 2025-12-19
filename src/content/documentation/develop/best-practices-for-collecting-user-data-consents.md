---
layout: sidebar.liquid
title: Best practices for collecting user data consents
description: Follow best practices for collecting user data consent in your Firefox extension. Ensure privacy compliance and maintain user trust.
permalink: /documentation/develop/best-practices-for-collecting-user-data-consents/
topic: Develop
tags:
  [add-ons, extensions, how-to, privacy, ui, user-interface, ux, webextensions]
contributors: [rebloor, hamatti, mkaply, abhn, dotproto]
last_updated_by: dotproto
date: 2025-12-18
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Prompt users for data and privacy consents

If your extension collects user data, it needs to comply with the requirement of the [Data Disclosure, Collection and Management](/documentation/publish/add-on-policies/#data-disclosure-collection-and-management) section of the [Add-on Policies](/documentation/publish/add-on-policies/).

A common developer question about these policies is how to translate them into browser extension features that are compliant to [Mozilla’s Add-on policies](/documentation/publish/add-on-policies/). This how-to is the result of those requests and offers advice on implementing prompts to meet the data collection and add-on policies. This article suggests how you can implement suitable prompts but it doesn’t replace or supersede the policies; you still need to confirm that your extension complies with the policies.

Note: If your extension is installed in an enterprise via the `force_installed` or `normal_installed` options in the [ExtensionSettings enterprise policy](https://mozilla.github.io/policy-templates/#extensionsettings), you must still implement the disclosure and consent experience in the add-on.
You can set a value via the [3rdparty enterprise policy](https://mozilla.github.io/policy-templates/#3rdparty) and read it with `storage.managed` in the add-on to determine if consent is granted. You must display the disclosure and consent experience if the value is not set in `storage.managed`.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Know your privacy settings

To create the consent flow and consent dialogs your extension needs, you should first answer these questions:

1. Does my extension collect technical or interaction data? If so, offer the user the opportunity to opt-out of this data collection, although you can always offer opt-in consent if you prefer.
2. Does my extension collect personally identifying information? If so, get the user’s opt-in consent before collecting any of this data. Remember that personally identifying information includes technical or interaction data tagged with the user’s identity or information that can be used to identify the user, such as an URL.

If you are unsure whether your add-on collects personal, technical, or interaction data, refer to the definition in [Data Disclosure, Collection and Management](/documentation/publish/add-on-policies/#data-disclosure-collection-and-management). 

"Data" includes all information the extension collects, regardless of the manner of collection or the reason for collection. This also includes data collected as part of the extension’s  primary functionality.

Data sent to native applications using [NativeMessaging](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) must be declared in the data collection consent and categorized in the appropriate consent model (whether opt-in or opt-out). 

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "know-your-privacy-settings"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Get prepared

Before designing the data collection consent for your extension, you should:

- eliminate any unnecessary data collection.
- design your extension to offer as much functionality as possible if the user declines the collection of data.
- create a privacy policy.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "get-prepared"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Create a privacy policy

When your users arrive at your data and privacy consent dialog, they need to know what they're consenting to and this is where your privacy policy comes in. The  [privacy policy](/documentation/publish/add-on-policies/#privacy-policy) section of the [Add-on Policies](/documentation/publish/add-on-policies/) provides clear guidelines on what the policy should include. If you’re collecting significant quantities of data and making significant use of it, taking legal advice may be prudent. However, your first strategy should be to reduce or eliminate the collection of user data where possible. If your data collection and use is fairly low-level, it’s possible that a privacy policy generator may be helpful. You may also want to take a look at [Mozilla's privacy policy](https://www.mozilla.org/privacy/) as a model to follow.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "create-a-privacy-policy"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Prompt after install

As part of your extension’s onboarding flow, include information about your privacy policy and data collection and seek any necessary user consent. Any privacy information and settings should be clear and unmissable. Separating these details from general information about your extension can help. Using a new tab in the focused window is recommended.

For more information on how to implement a post-install page or dialog, see [Best practices for onboarding, upboarding, and offboarding users](/documentation/develop/onboard-upboard-offboard-users/).

As mentioned in the [Add-on policies](/documentation/publish/add-on-policies/), if your extension collects user data in association with features that run in the background, such as ad blocking, you need to make sure the data collection is not activated until you have obtained user consent.

If an update to your extension collects new personally identifying information, existing users must consent to the new data collection (opt-in) when your extension updates.

We have talked about how you could let users opt-out of collecting technical and interaction data but must have users opt-in to collecting personally identifying information. Before you design your extension features around your consent requests, it is important to understand how these options affect your design.

Where you provide the user with an opt-in option, the related feature **must be turned off by default** and only turned on once the user has actively agreed to use that feature.

Where you provide the user with an opt-out option, the related features **can be turned on by default** but **must be turned off if the user indicates** they want to opt-out.

If the primary function of your extension requires collecting user data, provide an option in the data collection consent to uninstall it if your users don't consent to the data collection. The [`management.uninstallSelf()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf) API can be used to uninstall your extension. Name the consent decline button appropriately, such as "Decline and uninstall".

{% endcapture %}
{% include modules/one-column.liquid,
  id: "prompt-after-install"
  content: content
%}

<!-- END: Single Column Body Module -->

{% capture content %}

## Data classification
It is important to classify data into its right category and set defaults accordingly. Mozilla's add-on policies require an opt-in data collection consent for personally identifiable data and opt-out for technical and user interaction data. 

Incorrect classification of data on the data collection consent will result in a review rejection.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "data-classification"
  content: content
%}

<!-- Single Column Body Module -->

{% capture content %}

## Determine your consent flow

Before designing your consent dialogs, you should determine the privacy consent flow for your extension, based on the data it collects. Here is an example of a consent flow where an extension collects personally identifying information and technical data:

![Illustrating an example of the application flow for handling privacy consents.](/assets/img/documentation/develop/consent-flowchart.png)

In this example:

1. Your extension should start up with all data collection functionality disabled.
2. Immediately after installation, present them with a consent dialog. (See [Best practices for onboarding, upboarding, and offboarding users](/documentation/develop/onboard-upboard-offboard-users/) for more.)
   On this dialog:
3. The option for collecting personally identifying information must default to disabled so that the user has to actively opt-in.
4. The options for technical data may default to enabled, so that the user may choose to opt-out.
5. If the user:
    - accepts mandatory and optional data collection &rarr; continue with data collection enabled enabled.
    - declines optional data collection &rarr; disable optional data collection and continue running the extension.
    - declines mandatory data collection &rarr; uninstall the extension with [`management.uninstallSelf()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "determine-your-consent-flow"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Your consent dialogs

Once you understand your privacy consent flow, you can add a suitable consent dialog. The following are suggestions on how to present a data collection consent dialog. We recommend that all of the data collection controls and actions (toggles and confirmation buttons) be present within the same view. A summary of the data collected and how it is used must be present for each type of data collected within the consent dialog.

Where the mockups include the linked text "our Privacy Policy", this should go to your extension’s privacy policy page. Privacy policy page should be self-hosted for unlisted extensions or hosted on AMO for listed extensions.

### Only personally identifying information
The default option is not to collect personally identifying information. If you do, the user needs to actively opt-in. Remember to list the data you’re collecting; don’t make the user read your privacy policy to determine what data you are collecting and why.

  ![Mockup of a prompt that could be used when an extension requires consent for processing personal data only.](/assets/img/documentation/develop/consent-personal.jpg)
### Only technical or interaction data
Data collected does not include user identifiers. The option to collect technical data can be set as the default response.

  ![Mockup of a prompt that could be used when an extension requires consent for processing technical data only.](/assets/img/documentation/develop/consent-anon.jpg)
### Combination: Personal and technical data.
The add-on is requesting both types of data collection. Please ensure the choices are separate.

  ![Mockup of a prompt that could be used when extension requires consent for processing personal and technical data.](/assets/img/documentation/develop/consent-mixed.jpg)
### Required data collection
The extension requires personal or technical data collection to provide its primary function and cannot be used without. The consent decline option uninstalls the extension using [`management.uninstallSelf()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf).

### Terminology in consent prompts

While Mozilla does not require the use of specific language in consent prompts, the [Add-ons Policies](/documentation/publish/add-on-policies/) and this guide typically use the following phrases:

| Category                | Common phrases |
| ----------------------- | -------------- |
| Personal                | "personal data"<br>"personal information"<br>"personally identifying information" |
| Technical & Interaction | "technical data"<br>"anonymous data"<br>"user interaction data"<br>"technical and user interaction data" |

We generally prefer that extensions follow this convention as consistent language directly aids user understanding. Any alternate phrases used to described these categories should clearly set user expectations and match the usage of other data-related terminology in this guide, Add-ons Policies, and [built-in data consent](/documentation/develop/firefox-builtin-data-consent/).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "your-consent-dialogs"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->
