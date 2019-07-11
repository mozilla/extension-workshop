---
layout: sidebar
title: Best practices for collecting user data consents
permalink: /documentation/develop/best-practices-for-collecting-user-data-consents/
published: false
topic: Develop
tags:
  [Add-ons, Extensions, How to, Privacy, UI, User Interface, UX, WebExtensions]
contributors: [rebloor]
last_updated_by: rebloor
date: 2019-04-24 14:35:04
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Prompt users for data and privacy consents

If your extension uses cookies or collects user data, it needs to comply with the requirement of the [Data Disclosure, Collection and Management](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews#Data_Disclosure_Collection_and_Management) section of the [Add-on Policies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews).

A common developer question about these policies is how to translate them into web extension features that can pass the addons.mozilla.org reviews. This how-to is the result of those requests and offers advice on implementing prompts to meet the data collection and add-on policies. This article suggests how you can implement suitable prompts but it doesn’t replace or supersede the policies; you still need to confirm that your extension complies with the policies.

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
	cta1_label=""
	cta1_url=""
	cta2_label=""
	cta2_url=""
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="know-your-privacy-settings" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.html -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Know your privacy settings

To create the consent flow and consent dialogues your extension needs, you should first answer these questions:

1. Does my extension use cookies?  If so, you’ll need to get user consent to store cookies.
2. Does my extension collect technical or interaction data? (If you’re unsure what technical and interaction data is, check out the definition in [Data Disclosure, Collection and Management](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews#Data_Disclosure_Collection_and_Management).) If so, offer the user the opportunity to opt-out of this data collection, although you can always offer opt-in consent if you prefer.
3. Does my extension collect personally identifying information? If so, get the user’s opt-in consent before collecting any of this data. Remember that personally identifying information includes technical or interaction data tagged with the user’s identity or information that can be used to identify the user, such as an IP address.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="get-prepared" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Get prepared

Before designing the data collection and use of cookies consents for your extension, you should:

- eliminate any unnecessary data collection or cookies.
- design your extension to offer as much functionality as possible if the user declines the collection of data or the use of cookies.
- create a privacy policy.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="create-a-privacy-policy" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Create a privacy policy

When your users arrive at your data and privacy consent dialogue, they need to know what they're consenting to and this is where your privacy policy comes in. The [Data Disclosure, Collection and Management](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews#Data_Disclosure_Collection_and_Management) section of the [Add-on Policies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews) provides clear guidelines on what the policy should include. If you’re collecting significant quantities of data and making significant use of it, taking legal advice may be prudent. However, your first strategy should be to reduce or eliminate the collection of user data where possible. If your data collection and use is fairly low-level, it’s possible that privacy policy generator—such as [Cooley LLP](https://www.cooleygo.com/documents/privacy-policy/) or [iubenda](http://www.iubenda.com)—may be helpful. You may also want to take a look at [Mozilla's privacy policy](https://www.mozilla.org/en-US/privacy/) as a model to follow.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="prompt-after-install-or-on-first-use" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Prompt after install or on first use

As part of your extension’s onboarding flow, include information about your privacy policy and data collection, and seek any necessary user consents. Any privacy information and settings should be clear and unmissable, separating these details from general information about your extension can help.

For more information on how to implement a post-install page or dialog, see [Best practices for onboarding, upboarding, and offboarding users](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices).

As mentioned in the [Add-on policies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews#Data_Disclosure_Collection_and_Management), if your extension uses cookies or collects user data in association with features that run in the background, such as ad blocking, you need to make sure the cookies or data collection are not activated until you have user consent.

We have talked about how you could let users opt-out of collecting technical and interaction data but must have users opt-in to collecting personally identifying information. Before you design your extension features around your consent requests, it is important to understand how these options affect your design.

Where you provide the user with an opt-in option, the related feature must be turned off by default and only turned on once the user has actively agreed to use that feature.

Where you provide the user with an opt-out, option the related features can be turned on by default but must be turned off if the user indicates they want to opt-out.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="determine-your-consent-flow" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Determine your consent flow

Before designing your consent dialogs, you should determine the privacy consent flow for your extension, based on the data it collects and whether it uses cookies. Here is an example of a consent flow where an extension collects personally identifying information and technical data and uses cookies:

![Illustrating an example of the application flow for handling privacy consents.]({% asset "documentation/develop/MDN_Privacy_Flags_Flow_Diagram.png" @optim @path %})

In this example:

1. Your extension should start up with all cookie and data collection functionality disabled.
2. Either shortly after installation (see [Best practices for onboarding, upboarding, and offboarding users](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices)) or when the user first attempts to uses an extension feature, present them with a consent dialog.  
   On this dialog:
3. The option for collecting personally identifying information must default to disabled so that the user has to actively opt-in.
4. The options for technical data and cookies may default to enabled, so that the user may choose to opt-out.
5. If the user opts:
6. IN to all features, continue with all extension features enabled.
7. OUT of any feature that cannot be disabled, offer them the option to remove the extension. If they choose not to remove the extension present the consent dialog again.
8. OUT only from features that can be disabled, disable those features and continue running the extension.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="your-consent-dialogs" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Your consent dialogs

Once you understand your privacy consent flow, you can add suitable consent dialogues. The following are suggestions on how to present data collection and cookie consent dialogs. Where the mockups include the linked text “our Privacy Policy”, this should go to your extension’s privacy policy page on AMO. If you choose to follow these mockups, remember to modify them appropriately for your extension.

- Only Cookies. The option to add cookies can be set as the default response.  
  ![Mockup of a prompt that could be used when an extension requires user consent to use cookies alone.]({% asset "documentation/develop/privacy_prompt_mockup_cookies_only.png" @optim @path %})
- Only personally identifying information. The default option is not to collect personally identifying information. If you do, the user needs to actively opt-in. Remember to list the data you’re collecting; don’t make the user read your privacy policy to determine what data you are collecting and why.  
  ![Mockup of a prompt that could be used when an extension requires consent for processing personal data only.]({% asset "documentation/develop/privacy_prompt_mockup_personal_data.png" @optim @path %})
- Only technical data, (no user identifiers). The option to collect technical data can be set as the default response.  
  ![Mockup of a prompt that could be used when an extension requires consent for processing technical data only.]({% asset "documentation/develop/privacy_prompt_mockup_anonymous_data.png" @optim @path %})
- Combination: Cookies, Personal, and Technical Data.  
  ![Mockup of a prompt that could be used when extension requires consent for cookies and processing personal and technical data.]({% asset "documentation/develop/privacy_prompt_mockup_all_three.png" @optim @path %})
- The extension won’t work without data or cookies. The default option is your choice.  
  ![Mockup of a prompt that could be used when the user provide insufficient permission for privacy related features so that the extension cannot work. Gives the user the option to uninstall the extension or review their privacy settings.]({% asset "documentation/develop/privacy_prompt_mockup_remove_extension.png" @optim @path %})

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
