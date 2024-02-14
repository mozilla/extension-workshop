---
layout: sidebar
title: Add-on Policies
permalink: /documentation/publish/add-on-policies/
topic: Publish
tags: [add-ons, review, policies]
contributors:
  [
    kewisch,
    rebloor,
    wagnerand,
    atsay,
    jvillalobos,
    wbamberg,
    kmaglione,
  ]
last_updated_by: wagnerand
date: 2024-02-15
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Add-on Policies

Add-ons extend the core capabilities of Firefox, enabling users to modify and personalize their web experience. A healthy ecosystem, built on trust, is vital for developers to be successful and users to feel safe making Firefox their own. For these reasons, Mozilla requires all add-ons to comply with the following policies. These policies are not intended to serve as legal advice: depending on where you are located, additional requirements may apply to your add-on’s privacy policy, and to your other practices.

**All add-ons are subject to these policies, regardless of how they are distributed.**

When an add-on is given human review or otherwise assessed by Mozilla, these policies act as guiding principles for those reviews. Add-ons that do not comply with these policies may be rejected or disabled by Mozilla.

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## No Surprises

Users should be able to easily discern the functionality of your add-on based on the listing, and should not be presented with unexpected user experiences after installing it. The listing should include an easy-to-read description of what the add-on does, and what information it collects. Please consult our best practices guide for [creating an appealing listing](/documentation/develop/create-an-appealing-listing/).

### Unexpected features

“Unexpected” features are those that are unrelated to the add-on’s primary function, and are not clearly indicated by the add-on name or description. This may include features that impact user privacy or security, make unexpected changes to web content, or change default settings like the new tab page, homepage, or search engine.

Any “unexpected” feature(s) must adhere to all of the following requirements:
- The add-on description must clearly state any changes made by these features.
- The features must be “opt-in”, meaning the user has to take non-default action to enact the change. Changes prompted by Firefox after the add-on is installed do not require an additional opt-in. The permissions prompt shown when installing an add-on does not alleviate the need for an opt-in.
- The opt-in interface must clearly state the name of the add-on requesting the change.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "no-surprises"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Content

Add-ons that make use of Mozilla trademarks must comply with the [Mozilla Trademark Guidelines](https://www.mozilla.org/foundation/trademarks/policy/). If the add-on uses “Firefox” in its name, the naming standard the add-on is expected to follow is “&lt;Add-on name&gt; for Firefox”.

In addition, add-ons listed on addons.mozilla.org must adhere to the following policies:

- All add-ons submitted for listing on addons.mozilla.org are subject to Mozilla’s [Acceptable Use Policy](https://www.mozilla.org/about/legal/acceptable-use/).
- Listings must disclose when payment is required to enable any add-on functionality.
- Any add-ons hosted on Mozilla site(s), and their content, must conform to the laws of the United States. (Add-ons that violate or have content that violates the law in other jurisdictions may also be removed or have access limited.)
- Add-ons that are intended for internal or private use, or are only accessible to a closed user group or for distribution testing may not be listed on addons.mozilla.org. Such add-ons may be [uploaded for self-distribution](../submitting-an-add-on/#self-distribution) instead.
- If the add-on is a fork of another add-on, the name must clearly distinguish it from the original and provide a significant difference in functionality and/or code.
- Add-ons with the sole purpose of promoting, installing, loading or launching an outside website, application or add-on are not permitted.

Themes listed on addons.mozilla.org that include images must comply with our minimum quality standards. Themes that feature low quality, stretched, or blank images, as well as those themes in which the header image is misaligned, are not permitted. Duplicate themes are not permitted.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "content"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Submission Guidelines

Add-ons must function only as described. During review, the add-on undergoes basic functional testing in addition to code review. To facilitate the functional testing, the add-on author must provide testing information and, if an account is needed for any part of the add-on’s functionality, testing credentials to allow use of the add-on.

If corrections have been requested and are submitted as part of a new version, the new version should not contain unrelated changes, as this complicates the review process and can lead to further rejections.

### Source Code Submission

Code must be provided in a way that is reviewable. Add-ons may contain transpiled, minified or otherwise machine-generated code, but Mozilla needs to review a copy of the source code before any of these steps have been applied. The author must provide this information to Mozilla during submission along with instructions on how to reproduce the build. Build tools or environments that no longer appear to be supported by their maintainers are not accepted. Reviewers may ask you to refactor parts of the code if it is not reviewable.

The provided source code is reviewed by an administrator and is not redistributed in any way. The code is only used for the purpose of reviewing the add-on. Failure to provide this information results in rejection or blocking.

Add-ons are not allowed to contain obfuscated code, nor code that hides the purpose of the functionality involved. If external resources are used in combination with add-on code, the functionality of the code must not be obscured. Minification of code with the intent to reduce file size is permitted.

Please read our [Source Code Submission guidelines](/documentation/publish/source-code-submission/) to avoid unexpected rejections or blocks.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "submission-guidelines"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Development Practices

In general, developers are free to maintain their add-ons in the manner they choose. However, in order to maintain appropriate data security measures and allow us to effectively review code, we have certain technical requirements that all add-ons must meet. In particular, potentially dangerous APIs may only be used in ways that are demonstrably safe, and code within add-ons that cannot be verified as behaving safely and correctly may need to be refactored.

The following requirements are of particular importance:


- Add-ons must only request those permissions that are necessary for them to function.
- Add-ons must be self-contained and not load remote code for execution.
- Add-ons must not load or redirect to a remote new tab page. The new tab page must be contained within the add-on.
- Add-ons must not relax web page security headers, such as the Content Security Policy.
- Add-ons must use encryption when transporting data remotely.
- Add-ons should avoid including redundant code or files.
- Add-ons must not negatively impact the performance or stability of Firefox.
- Only release versions of third-party libraries and/or frameworks may be included with an add-on. Modifications to these libraries/frameworks are not permitted. Please read our [third party library guidelines](/documentation/publish/third-party-library-usage/) to better understand related requirements.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "development-practices"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Data Disclosure, Collection and Management

Add-ons must limit data collection to what is necessary for functionality, and must use the data only for the purpose for which it was collected. For the purposes of this policy, “data” includes all information the add-on collects, regardless of the manner of collection.

### Privacy Policy

Add-ons that collect or transmit user data must maintain a privacy policy in the privacy policy field on addons.mozilla.org. The privacy policy must:

- be specific to the add-on, and not contain extraneous information or provisions unrelated to the add-on,
- set forth the data to be collected,
  - If the collection of visited URLs or user search terms is required for the add-on to work, that collection must be disclosed in the privacy policy,
  - If your add-on installs cookies, the placing and purpose of those cookies must be disclosed,
- disclose how the extension collects, uses, stores, and shares or discloses information about users,
  - If data is sent to a third party, your policy must disclose the identity of those services,
  - If your add-on enables third party websites to see that it is installed, that fact must also be disclosed,
- clearly describe the purpose of the data collection,
- be the full policy text; it cannot be a link to an externally hosted privacy policy.

A summary of this information must be included in the add-on’s description. Finally, you and your add-on must also comply with all applicable data privacy laws.

### Prohibited Data Collection

- Search functionality provided or loaded by the add-on must not collect search terms or intercept searches that are going to a third-party search provider.
- Collecting, or facilitating the collection of ancillary information (e.g. any data not required for the add-on’s functionality as stated in the description) is prohibited.
- The collection of browsing activity is only permitted as part of the add-on’s primary function.

### User Consent and Control

The user must be provided with a clear way to control the add-on’s data collection immediately after installation of the add-on. If data collection starts or changes in an add-on update, or the consent and control is introduced in an update, it must be shown to all new and upgrading users immediately after the update.

The data collection consent and control must be contained within the add-on. The consent experience must:

- Clearly state what type of data is being collected
- Link to the add-on’s privacy policy. For add-ons listed on addons.mozilla.org, the link must point to the privacy policy on addons.mozilla.org. Self-hosted add-ons that don’t have a listing on addons.mozilla.org should point to a self-hosted privacy policy.
- Inform about the impact of accepting or declining the data collection

If both personal and technical data is being collected, the user must be provided separate choices. If the user declines consent, the impact must be related to the data not being available.

Please refer to our [best practices](/documentation/develop/best-practices-for-collecting-user-data-consents/) for advice and examples on how to design and implement a data collection consent prompt.

Add-ons installed in an enterprise environment can bypass the consent experience when they are installed by enterprise policy. For more information, refer to the [enterprise documentation](/documentation/enterprise/enterprise-development/).

#### Personal Data (opt-in)
Personally identifiable information can be actively provided by the user or obtained through extension APIs. It includes, but is not limited to names, email addresses, search terms and browsing activity data, as well as access to and placement of cookies.

Before an add-on may collect personal information, it must clearly describe, and the user must affirmatively consent (i.e., explicitly opt-in) to the type of personal data being collected.

If the main functionality of the add-on does not work without collecting personal data, the add-on must provide a choice for the user to either accept the data collection or uninstall the add-on.

#### Technical & User Interaction Data (opt-out)

Technical data describes information about the environment the user is running, such as browser settings, platform information and hardware properties. User interaction data includes how the user interacts with Firefox and the installed add-ons, metrics for product improvement, and error information.

When an add-on collects either of these types of information, it must allow the user to disable that data collection (opt-out) during the initial consent experience.

### Additional Privacy Protocols
- Leaking local or user-specific information to websites or other applications (e.g. through native messaging) is prohibited.
- If the add-on uses native messaging, the policies on user consent and control apply to any data sent to the native application as well. The privacy policy must clearly disclose which information is being exchanged with the application.
- Data from private browsing sessions must not be stored. Information that identifies a user across browsing sessions or containers must not be made available to web content.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "data-disclosure-collection-and-management"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Monetization

- An add-on injecting advertising into web page content must clearly identify the injected content as originating from the add-on.
- The inclusion of any cryptocurrency miners in an add-on is prohibited.
- Modifying web content or facilitating redirects to include affiliate promotion tags is not permitted. Conversely, the inclusion of affiliate promotions in user interface elements that are clearly identified as belonging to the add-on are acceptable.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "monetization"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Security, Compliance and Blocking

We expect all add-ons, whether hosted on addons.mozilla.org or not, to be secure and well-maintained in how they handle both their own data and their users’ data. They must also securely manage all of their interactions with the web and the browser and the operating system.

### Policy Enforcement

Mozilla may reject or block affected versions or entire add-ons that don’t comply with the above policies, depending on the extent of their non-compliance.

Mozilla may attempt to contact the add-on’s developer(s) and provide a reasonable time frame for the problems to be corrected before a block is deployed. If an add-on appears to intentionally or repeatedly violate the policies, or its developers have proven unreachable, unresponsive, or uncooperative, blocking may be immediate.

Mozilla reserves the right to block or delete any developer’s account on addons.mozilla.org, thereby preventing further use of the service, for certain violations of Mozilla’s policies.

For more information about rejection and blocking, see [What does review rejection mean to users?](/documentation/publish/what-does-review-rejection-mean-to-users/)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "security-compliance-and-blocking"
  content: content
%}

<!-- END: Single Column Body Module -->
