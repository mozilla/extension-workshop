---
layout: sidebar
title: Add-on Policies for Enterprise Add-ons Preview (Dec 1, 2026)
description: The Add-on Policies for Enterprise Add-ons. Ensure your extension complies with all the requirements.
permalink: /documentation/publish/add-on-policies-for-enterprise-preview-2026-12/
topic: Publish
tags: [add-ons, review, policies, enterprise]
contributors:
  [
    awagner,
  ]
last_updated_by: awagner
date: 2026-10-20
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Add-on Policies for Enterprise Add-ons

::: note
This is a preview of the Add-on Policies for Enterprise Add-ons, becoming effective Dec 1, 2026.
:::

Add-ons extend the core capabilities of Firefox, enabling users to modify and personalize their web experience. A healthy ecosystem, built on trust, is vital for developers to be successful and users to feel safe making Firefox their own. For these reasons, Mozilla requires Enterprise Add-ons to comply with the following policies. These policies are not intended to serve as legal advice: depending on where you are located, additional requirements may apply.

**All Enterprise Add-ons are subject to these policies.**
**All Listed and Self-distributed Add-ons are subject to [policies for those distribution channels](/documentation/publish/add-on-policies-preview-2026-12/).**

When an add-on is given human review or otherwise assessed by Mozilla, these policies act as guiding principles for those reviews. Add-ons that do not comply with these policies may be rejected or disabled by Mozilla.

{% endcapture %}
{% include modules/page-hero.liquid,
  content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## 1. Preamble

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "preamble"
  content: content_with_toc
%}

{% capture content %}

### 1.1. Definition of an Enterprise Add-on

An Enterprise Add-on is an add-on that self-declares its enterprise status via the specific manifest key

```
browser_specific_settings: {
    gecko: {
        admin_install_only: true
    }
}
```

{% endcapture %}
{% include modules/one-column.liquid,
  id: "definition-of-an-enterprise-add-on"
  content: content
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## 2. Distribution

Enterprise Add-ons can only be installed through [enterprise policies](https://support.mozilla.org/en-US/kb/enforcing-policies-firefox-enterprise).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "distribution"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## 3. Content

1. Add-ons are subject to Mozilla’s [Acceptable Use Policy](https://www.mozilla.org/about/legal/acceptable-use/).
2. Add-ons and their content must conform to the laws of the United States. (Add-ons that violate or have content that violates the law in other jurisdictions may also be removed or have access limited.)
3. Add-ons that make use of Mozilla trademarks must comply with the [Mozilla Trademark Guidelines](https://www.mozilla.org/foundation/trademarks/policy/). If the add-on uses “Firefox” in its name, the naming standard the add-on is expected to follow is “\<Add-on name\> for Firefox”.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "content"
  content: content
%}

{% capture content %}

## 4. Submission Guidelines

1. Enterprise Add-ons must be submitted through the Enterprise channel on AMO.
2. Source code submission is optional, but will become required if for any reason Mozilla determines there is a likelihood that an extension violates applicable laws, otherwise causes or contributes to user harm or requires review. Source code must be provided upon request within 14 days. Failure to do so will result in all non-reviewable versions getting blocked.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "submission-guidelines"
  content: content
%}

{% capture content %}

## 5. Security, Compliance and Blocking

1. Mozilla may block affected versions or entire add-ons that don’t comply with the above policies, depending on the extent of their non-compliance.
2. Mozilla may attempt to contact the add-on’s developer(s) and provide a reasonable time frame for the problems to be corrected before a block is deployed. If an add-on appears to intentionally or repeatedly violate the policies, or its developers have proven unreachable, unresponsive, or uncooperative, blocking may be immediate.
3. Mozilla reserves the right to block or delete any developer’s account on addons.mozilla.org, thereby preventing further use of the service, for certain violations of Mozilla’s policies.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "security-compliance-and-blocking"
  content: content
%}

<!-- END: Single Column Body Module -->
