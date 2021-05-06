---
layout: sidebar
title: Add-ons Blocking Process
permalink: /documentation/publish/add-ons-blocking-process/
topic: Publish
contributors: [caitmuenster, kewisch]
last_updated_by: caitmuenster
date: 2021-05-04 
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Add-ons Blocking Process

Add-ons enable users to add features to Firefox for a personalized browsing experience. Most add-ons are created with the best intent, providing users with useful and delightful features. However, add-ons can also be used to compromise personal data and security.

When Mozilla becomes aware of add-ons that go against user expectations or otherwise risk user privacy and security, it takes steps to block them from running in Firefox. This may happen proactively, or in response to an abuse report. When an extension is blocked, it is disabled in Firefox and users are not able to override the block. 

The following describes Mozilla’s common practices for dealing with add-ons that appear to violate the [Add-on Policies](/documentation/publish/add-on-policies/). Authoritative information on the conditions for removing or revoking add-ons can be found in the [Firefox Add-on Distribution Agreement](/documentation/publish/firefox-add-on-distribution-agreement/) and the [Add-on Policies](/documentation/publish/add-on-policies/).

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Security Over Choice

When deciding whether to block an add-on from running in Firefox, we ask whether the risk is so great that it outweighs the user’s choice to install the software, the utility it provides, as well as the developer’s freedom to distribute and control their software. If we encounter a situation where we cannot make a clear-cut decision, we will err on the side of security to protect the user.

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "security-over-choice"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->
<!-- Single Column Body Module -->

{% capture content %}

## Blocking Criteria

Blocking is reserved for add-ons with the following characteristics:

- They appear to intentionally violate policy
- They contain critical security vulnerabilities
- They compromise user privacy
- They severely circumvent user consent or control

Add-ons that appear to be clones, repeats or close copies of already blocked add-ons will also be removed. If an issue is known to affect only a subset of versions, the block may be applied to the affected versions specifically. Add-ons that contain obfuscated or comparably unreadable code will also be blocked.

{% endcapture %}
{% include modules/one-column.liquid
  id: "blocking-criteria"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Developer Outreach

When we decide to block an add-on, we may reach out to the developer if we believe the issue can be remedied. As the security of users may be at stake, we require developers to respond within three days. If no response is received within this timeframe, or the developer isn’t able to address the issue, we may proceed with the block.

More commonly, we will not reach out to developers prior to blocking if it appears that the add-on is intentionally violating our policies, or the violation is sufficiently severe.

{% endcapture %}
{% include modules/one-column.liquid
  id: "developer-outreach"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Requesting a Block

If you have encountered an add-on that you believe meets the criteria for being blocked, you may [request a block](http://bugzilla.mozilla.org/form.blocklist). Note that developers cannot request a block of their own add-ons.

Mozilla only blocks add-ons based on the [Firefox distribution agreement](/documentation/publish/firefox-add-on-distribution-agreement/) and [add-on policies](/documentation/publish/add-on-policies/). When requesting a block, please read these carefully as the policies do allow certain forms of monetization and data collection.

{% endcapture %}
{% include modules/one-column.liquid
  id: "requesting-a-block"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Blocking Other Types of Third Party Software

In addition to add-ons, Mozilla may also block other types of software that pose a risk to the user.

Mozilla may limit hardware acceleration features of graphics cards for certain graphics driver versions in accordance with the [graphics driver blocks](https://wiki.mozilla.org/Blocklisting/Graphics) policy. This is done for stability reasons, to avoid driver crashes that would interrupt the user.
{% endcapture %}
{% include modules/one-column.liquid
  id: "blocking-other-types-of-third-party-software"
  content: content
%}

<!-- END: Single Column Body Module -->

