---
layout: sidebar
title: Add-on Policies FAQ
permalink: /documentation/publish/add-on-policies-faq/
topic: Publish
tags: [add-ons, review, policies, faq]
contributors:
  [
    dotproto,
    fjosephmoz,
    wagnerand
  ]
last_updated_by: wagnerand
date: 2025-07-29
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Add-on Policies – Frequently Asked Questions

::: note
This is a preview of Frequently Asked Questions that will become effective on Aug 4, 2025.
:::

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## No Surprises

### What does "No Surprises" mean in the context of Firefox add-ons?

It means users should clearly understand what your add-on does before and after installation. The add-on's name and description must accurately reflect its functionality, and any unexpected features must be disclosed, opt-in, and clearly attributed to the primary function of the add-on.

### What qualifies as an "unexpected" feature?

Features unrelated to the add-on's primary function, such as altering the homepage, search engine, or new tab page, especially if not clearly indicated in the add-on's name or description.

### How should I implement opt-in for unexpected features?

The add-on must present a clear opt-in interface after installation, specifying the feature and its impact. Users must actively consent; default settings cannot enable these features.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "no-surprises"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Content

### Can I use "Firefox" in my add-on's name?

Yes, but it should follow the format "\<Add-on Name\> for Firefox" and comply with [Mozilla's Trademark Guidelines](https://www.mozilla.org/en-US/foundation/trademarks/policy/).

### Are there restrictions on the content of my add-on?

Yes. Add-ons must not violate [Mozilla's Acceptable Use Policy](https://www.mozilla.org/en-US/about/legal/acceptable-use/), must disclose any required payments, and must not promote or install unrelated software or content.

### Can I list an internal-use add-on on addons.mozilla.org (AMO)?

Yes. Add-ons intended for internal or private groups can be listed on AMO.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "content"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Submission Guidelines

### What are the key requirements when submitting an add-on?

Your add-on must function as described, pass functional and code reviews, and include testing information and credentials if necessary. Unrelated changes in updates can complicate the review process. More info, including default reviewer environment, can be found on the [source code submission guidelines](/documentation/publish/source-code-submission/).

### Do I need to submit my source code?

Yes, especially if your add-on contains minified, transpiled, or machine-generated code. Provide the original source code and build instructions. All dependencies must either be included in the source code package directly or downloaded only through the respective official package managers during the build process. Obfuscated code is not allowed.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "submission-guidelines"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Data Collection and Transmission Disclosure and Control

### What is the definition of data transmission?

Data transmission refers to any data that is collected, used, transferred, shared, or handled outside of the add-on or the local browser.

### What data transmission practices are prohibited?

Transmitting search terms or browsing activity unrelated to the add-on's primary function, or any ancillary data not required for primary functionality, is prohibited.

### What data transmission practices are permitted?

Add-ons may provide user-initiated local backup features without requiring explicit user consent. For example, a bookmark add-on could allow a user to download an export of their bookmarks to their local filesystem. Sending this same export file to a remote server would require that the extension follow the [Add-on Policies' Data Collection and Consent provisions](/documentation/publish/add-on-policies-preview-2025-08/#data-collection-and-transmission-disclosure-and-control). 

### Do I have to host my privacy policy on addons.mozilla.org (AMO)?

A privacy policy is no longer required to be hosted on AMO. It is recommended that developers provide a link to their privacy policy on their AMO listing page.

### What data requires affirmative consent (opt-in)?

Personally identifying information may only be collected after receiving explicit consent from the user. For more information on how different types of data are classified, see the [Firefox add-on data classification taxonomy](/documentation/develop/firefox-builtin-data-consent/#taxonomy).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "data-collection-and-transmission-disclosure-and-control"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Security, Compliance, and Blocking

### What security expectations does Mozilla have?

Add-ons must safely manage data and interactions with the browser, web, and OS. Add-ons must be secure, well-maintained, and performant.

### What can lead to my add-on being blocked?

Add-ons may be blocked if they:

* Intentionally violate policies.
* Contain critical security vulnerabilities.
* Compromise user privacy.
* Circumvent user consent or control.
* Obfuscate or contain unreadable code.

### Will I be notified before my add-on is blocked?

Mozilla may attempt to contact you to address issues before blocking. However, in cases of intentional or severe violations, blocking may occur without prior notice.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "security-compliance-and-blocking"
  content: content
%}

<!-- END: Single Column Body Module -->
