---
layout: sidebar
title: Add-on Policies
permalink: /documentation/publish/add-on-policies/
published: false
topic: Publish
tags: [Add-ons, Review Policy]
contributors:
  [
    kewisch,
    mdnwebdocs-bot,
    rebloor,
    One,
    jyotsna17gupta,
    atsay,
    Jorge.villalobos,
    wbamberg,
    david_ross,
    Lazaro08,
    jswisher,
    zenmeso,
    kmaglione,
  ]
last_updated_by: kewisch
date: 2019-06-10 04:12:33
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Add-on Policies

Add-ons extend the core capabilities of Firefox, enabling users to modify and personalize their web experience. A healthy ecosystem, built on trust, is vital for developers to be successful and users to feel safe making Firefox their own. For these reasons, Mozilla requires all add-ons to comply with the following policies on acceptable practices. These policies are not intended to serve as legal advice, nor as a comprehensive list of terms to include in your add-on’s privacy policy.

All add-ons are subject to these policies, regardless of how they are distributed. When an add-on is given human review or otherwise assessed by Mozilla, these policies act as guiding principles for those reviews. Add-ons that do not comply with these policies may be rejected or disabled by Mozilla. Therefore, follow these policies when making add-on design and development decisions.

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## No Surprises

Surprises can be appropriate in many situations, but they are not welcome when user security, privacy and control are at stake. It is extremely important to be as transparent as possible when submitting an add-on. Users should be able to easily discern what the functionality of your add-on is and not be presented with unexpected user experiences after installing it.

### Unexpected features

“Unexpected” features are those that are unrelated to the add-on’s primary function, and are not likely from the add-on name or description to be expected by a user installing that add-on.

Should an add-on include any unexpected feature that falls into one of the following categories:

- Potentially compromises user privacy or security (like sending data to third parties)
- Changes default settings like the new tab page, homepage or search engine
- Makes unexpected changes to the browser or web content
- Includes features or functionality not related to the add-on’s core function(s)

{% endcapture %}
{% include modules/column-w-toc.html
  id="no-surprises"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Content

Add-ons that make use of Mozilla trademarks must comply with the [Mozilla Trademark Policy](https://www.mozilla.org/en-US/foundation/trademarks/policy/). If the add-on uses “Firefox” in its name, the naming standard the add-on is expected to follow is “<Add-on name> for Firefox”.

In addition, add-ons listed on addons.mozilla.org (AMO) must adhere to the following policies:

- All add-ons submitted for listing on AMO are subject to Mozilla’s [Conditions of Use](https://www.mozilla.org/en-US/about/legal/acceptable-use/).
- Add-ons must disclose when payment is required to enable any functionality.
- The add-on listing should have an easy-to-read description about everything it does, and any information it collects. Please consult our best practices guide for [creating an appealing listing](/documentation/develop/create-an-appealing-listing/).
- Includes features or functionality not related to the add-on’s core function(s)
- Add-ons that are intended for internal or private use, are only accessible to a closed user group, or for distribution testing may not be listed on AMO. Such add-ons may be [uploaded for self-distribution](/documentation/publish/signing-and-distributing-your-add-on/) instead.
- If the add-on is a fork of another add-on, the name must clearly distinguish it from the original and provide a significant difference in functionality and/or code.

{% endcapture %}
{% include modules/one-column.html
  id="content"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Submission Guidelines

Add-ons must function only as described, and should provide an appealing user experience. Based on the description of the add-on, a user must be able to understand and use the add-on’s features without requiring expert knowledge. Tips on how to create a good user experience for your add-on can be found [here](/documentation/develop/user-experience-best-practices/).

In addition, add-ons listed on addons.mozilla.org (AMO) must adhere to the following policies:

During review, the add-on undergoes basic testing in addition to code review. To facilitate the functional testing, the add-on author must provide testing information and, if applicable, testing credentials required to use the add-on if an account is needed for any part of the add-on’s functionality.

Issues brought up during review must be addressed using best efforts. If corrections have been requested, the new version should not contain unrelated changes, as this complicates the review process and can lead to further rejections.

### Source Code Submission

Add-ons may contain transpiled, minified or otherwise machine-generated code, but Mozilla needs to review a copy of the human-readable source code. The author must provide this information to Mozilla during submission along with instructions on how to reproduce the build.

The provided source code will be reviewed by an administrator and will not be redistributed in any way. The code will only be used for the purpose of reviewing the add-on. Failure to provide this information will result in rejection.

Add-ons are not allowed to contain obfuscated code, nor code that hides the purpose of the functionality involved. If external resources are used in combination with add-on code, the functionality of the code must not be obscured. To the contrary, minification of code with the intent to reduce file size is permitted.

Please read our [Source Code Submission guidelines](/documentation/publish/source-code-submission/) to avoid unexpected rejections or blocks.

{% endcapture %}
{% include modules/one-column.html
  id="submission-guidelines"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Development Practices

In general, developers are free to maintain their add-ons in the manner they choose. However, in order to maintain appropriate data security and effectively review code, we do have certain technical requirements that all add-ons must meet. In particular, potentially dangerous APIs may only be used in ways that are demonstrably safe, and code within add-ons that cannot be verified as behaving safely and correctly may need to be refactored.

While any code, method or practice in a submitted add-on is subject to review and rejection, the following requirements are of particular importance:

- Add-ons must only request those permissions that are necessary for function
- Add-ons must be self-contained and not load remote code for execution
- Add-ons must use encrypted channels for sending sensitive user data
- Add-ons should avoid including duplicate or unnecessary files
- Add-on code must be written in a way that is reviewable and understandable. Reviewers may ask you to refactor parts of the code if it is not reviewable.
- Add-ons must not negatively impact the performance or stability of Firefox.
- Only release versions of third-party libraries and/or frameworks may be included with an add-on. Modifications to these libraries/frameworks are not permitted.
- Please read our [third party library guidelines](/documentation/Publish/third-party-library-usage/) to avoid unexpected rejections.

{% endcapture %}
{% include modules/one-column.html
  id="development-practices"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Data Disclosure, Collection and Management

You must disclose how the add-on collects, uses, stores and shares user data in the privacy policy field on AMO. Mozilla expects that the add-on limits data collection whenever possible, in keeping with Mozilla’s [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) and Mozilla’s [Data Privacy Principles](https://www.mozilla.org/en-US/privacy/principles/), and uses the data only for the purpose for which it was originally collected.

User data includes all information the add-on collects, regardless of the manner. It can be personal data actively provided by the user (such as a name or email address), technical data (such as operating system, build ID, version numbers, crash reports, activation, updates), and interaction or activity data (add-on activity data, visited URLs, console logs), including interactions with Firefox.

The add-on’s privacy policy must be the full policy text; it cannot be a link to an externally hosted privacy policy. In addition, the privacy policy must:

- be specific and exclusive to the add-on,
- clearly describe the purpose of the data collection,
- set forth the exact data to be collected,
- address the add-on’s particular privacy properties.

A summary of this information must be included in the add-on’s listing description. Finally, you and your add-on must also comply with all applicable data privacy laws as well as any other laws that may apply to your specific add-on.

Please refer to our [best practices](/documentation/develop/best-practices-for-collecting-user-data-consents/) for advice and examples on how to design and implement a data collection consent prompt.

### User Interactions & Technical Data

- Users must be provided a clear way to control this data collection. The control mechanism must be shown during the installation process of the add-on.
- Add-ons must only collect information about add-on performance and/or use.
- Collecting ancillary information (e.g. any data not explicitly required for the add-on’s basic functionality) is prohibited.

### Cookies

- If your add-on installs cookies, this must also be disclosed in the add-on’s privacy policy.
- The add-on privacy policy must clearly express the placing and purposes of the cookie(s). It is highly recommended that you disclose the types of cookies being used.
- Users must be provided an opportunity to refuse the storage of or access to cookies, and must be informed of the consequences of doing so (e.g., without a functional cookie, the add-on may not work).
- Installing cookies that are not explicitly required for the add-on’s functionality is prohibited.

### Personal Data

- If you are collecting any personal information, the users must provide affirmative consent (i.e., explicit opt-in from the user). It must be clear to the user that they give consent to the collection of personal data.
- Collecting ancillary personal information (e.g., any data not explicitly required for the add-on’s basic functionality) is prohibited.
- Any transmission of this type of data must use secure, encrypted connections.

### Additional Privacy Protocols

- Leaking local or user-sensitive information to websites or other processes (e.g., using native messaging) is prohibited.
- If the add-on uses native messaging, the privacy policy must clearly disclose which information is being exchanged with the native application. Data exchanged with the native application must be in accordance with our No Surprises policy.
- HTTPS must be used for security and privacy-sensitive operations such as transmitting passwords or tokens.
- Browsing data from private browsing sessions must not be stored.
- Identity information must not be leaked to web content in private browsing sessions.

{% endcapture %}
{% include modules/one-column.html
  id="data-disclosure-collection-and-management"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Security Vulnerabilities

Because add-ons run in an environment with elevated privileges relative to ordinary web pages, they present a very serious set of security considerations. They have the potential to open security holes not only in the add-ons themselves, but also in the browser, in web pages, and, in particularly distressing cases, the entire system the browser is running on.

As a result, we take our security policies very seriously and apply them to all add-ons, whether hosted on AMO or not. We expect all add-ons to be secure and well-maintained in handling both their own data and their user’s data. They must also securely manage all of their interactions with the web, the browser and the operating system.

{% endcapture %}
{% include modules/one-column.html
  id="security-vulnerabilities"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Monetization

- Monetization mechanisms must comply with the policies in the _Data Disclosure, Collection and Management_ section. In particular, an add-on must be accompanied with a clear user control mechanism (and opt-in for personal data) presented during the installation or update process of the add-on. Collecting ancillary information for monetization is prohibited.
- An add-on injecting advertising into web page content must clearly identify the injected content as originating from the add-on.
- The inclusion of any cryptocurrency miners or similar functionality in an add-on is prohibited.
- Modifying web content or facilitating redirects to include affiliate promotion tags is not permitted. Conversely, the use of affiliate promotion in user interface elements clearly identified as belonging to the add-on are acceptable.

{% endcapture %}
{% include modules/one-column.html
  id="monetization"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Compliance & Blocking

Mozilla may reject or block affected versions or entire add-ons that don’t meet these policies, depending on the extent of their non-compliance.

Mozilla may attempt to contact the add-on’s developer(s) and provide a reasonable time frame for the problems to be corrected before a block is deployed. If an add-on appears to intentionally violate the policies or its developers have proven unreachable, unresponsive, or uncooperative, or in case of repeat violations, blocking may be immediate.

Mozilla reserves the right to block or delete any developer’s account on addons.mozilla.org, thereby preventing further use of the service.

For information about how rejection and blocking affects users, see [What does review rejection mean to users?](/documentation/Publish/what-does-review-rejection-mean-to-users/)

{% endcapture %}
{% include modules/one-column.html
  id="compliance-and-blocking"
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
