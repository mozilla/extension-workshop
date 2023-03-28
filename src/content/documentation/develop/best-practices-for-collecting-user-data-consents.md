---
layout: sidebar.liquid
title: Best practices for collecting user data consents
permalink: /documentation/develop/best-practices-for-collecting-user-data-consents/
topic: Develop
tags:
  [add-ons, extensions, how-to, privacy, ui, user-interface, ux, webextensions]
contributors: [rebloor, hamatti]
last_updated_by: hamatti
date: 2023-01-11
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Prompt users for data and privacy consents

If your extension collects user data, it needs to comply with the requirement of the [Data Disclosure, Collection and Management](/documentation/publish/add-on-policies/#data-disclosure-collection-and-management) section of the [Add-on Policies](/documentation/publish/add-on-policies/).

A common developer question about these policies is how to translate them into browser extension features that are compliant to [Mozilla’s Add-on policies](/documentation/publish/add-on-policies/). This how-to is the result of those requests and offers advice on implementing prompts to meet the data collection and add-on policies. This article suggests how you can implement suitable prompts but it doesn’t replace or supersede the policies; you still need to confirm that your extension complies with the policies.

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

If you are unsure if your add-on collects personal data, technical data, or interaction data, check out the definition in [Data Disclosure, Collection and Management](/documentation/publish/add-on-policies/#data-disclosure-collection-and-management).

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

As part of your extension’s onboarding flow, include information about your privacy policy and data collection, and seek any necessary user consents. Any privacy information and settings should be clear and unmissable, separating these details from general information about your extension can help.

For more information on how to implement a post-install page or dialog, see [Best practices for onboarding, upboarding, and offboarding users](/documentation/develop/onboard-upboard-offboard-users/).

As mentioned in the [Add-on policies](/documentation/publish/add-on-policies/), if your extension collects user data in association with features that run in the background, such as ad blocking, you need to make sure the data collection is not activated until you have obtained user consent.

We have talked about how you could let users opt-out of collecting technical and interaction data but must have users opt-in to collecting personally identifying information. Before you design your extension features around your consent requests, it is important to understand how these options affect your design.

Where you provide the user with an opt-in option, the related feature **must be turned off by default** and only turned on once the user has actively agreed to use that feature.

Where you provide the user with an opt-out, option the related features **can be turned on by default** but **must be turned off if the user indicates** they want to opt-out.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "prompt-after-install"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Determine your consent flow

Before designing your consent dialogs, you should determine the privacy consent flow for your extension, based on the data it collects. Here is an example of a consent flow where an extension collects personally identifying information and technical data:

![Illustrating an example of the application flow for handling privacy consents.](/assets/img/documentation/develop/MDN_Privacy_Flags_Flow_Diagram.png)

In this example:

1. Your extension should start up with all data collection functionality disabled.
2. Shortly after installation (see [Best practices for onboarding, upboarding, and offboarding users](/documentation/develop/onboard-upboard-offboard-users/)), present them with a consent dialog.
   On this dialog:
3. The option for collecting personally identifying information must default to disabled so that the user has to actively opt-in.
4. The options for technical data may default to enabled, so that the user may choose to opt-out.
5. If the user:
    - opts IN to all features &rarr; continue with all extension features enabled.
    - opts OUT of any feature that cannot be disabled &rarr; offer them the option to remove the extension. If they choose not to remove the extension present the consent dialog again.
    - opts OUT only from features that can be disabled &rarr; disable those features and continue running the extension.

You can prompt the user to uninstall the extension with [`management.uninstallSelf()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "determine-your-consent-flow"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Your consent dialogs

Once you understand your privacy consent flow, you can add a suitable consent dialog. The following are suggestions on how to present a data collection consent dialog. Where the mockups include the linked text “our Privacy Policy”, this should go to your extension’s privacy policy page on AMO. If you choose to follow these mockups, remember to modify them appropriately for your extension.

**Note:** All consent options should be offered to the user under one consent dialog, so there is one main page for the user consent flow.

### Only personally identifying information
The default option is not to collect personally identifying information. If you do, the user needs to actively opt-in. Remember to list the data you’re collecting; don’t make the user read your privacy policy to determine what data you are collecting and why.

  ![Mockup of a prompt that could be used when an extension requires consent for processing personal data only.](/assets/img/documentation/develop/privacy_prompt_mockup_personal_data.png)
### Only technical or interaction data
Data collected does not include user identifiers. The option to collect technical data can be set as the default response.

  ![Mockup of a prompt that could be used when an extension requires consent for processing technical data only.](/assets/img/documentation/develop/privacy_prompt_mockup_anonymous_data.png)
### Combination: Personal and technical data.
The add-on is requesting both types of data collection. Please ensure the choices are separate.

  ![Mockup of a prompt that could be used when extension requires consent for processing personal and technical data.](/assets/img/documentation/develop/privacy_prompt_mockup_combined.png)
### Required data collection
The extension requires personal or technical data collection to provide its functionality, it cannot be used without. The default option is your choice.

  ![Mockup of a prompt that could be used when the user provides insufficient permission for privacy related features so that the extension cannot work. Gives the user the option to uninstall the extension or review their privacy settings.](/assets/img/documentation/develop/privacy_prompt_mockup_remove_extension.png)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "your-consent-dialogs"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->
