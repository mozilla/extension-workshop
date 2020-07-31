---
layout: sidebar
title: Recommended extensions
permalink: /documentation/publish/recommended-extensions/
topic: Publish
tags: [promote, recommended]
contributors: [devaneymoz]
last_updated_by: [devaneymoz]
date: 2019-09-19 12:01:01
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Recommended Extensions Program

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

[Recommended extensions](https://addons.mozilla.org/firefox/search/?recommended=true&type=extension) are curated extensions that meet the highest standards of security, functionality, and user experience. Firefox staff thoroughly evaluate each extension before it receives Recommended status.

Recommended extensions are easy to identify because of their distinctive “Recommended” badge.

![Add-ons Manager setting cog](/assets/img/documentation/publish/RecEx_badge.png)

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "overview"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Criteria for Recommended extensions

When evaluating nominations, curators are primarily concerned with:

- **Does the extension function at an exemplary level?** All Recommended extensions should not only function as they promise, but function at a very high level. For instance, there are many ad blockers out there, but not all ad blockers are equally effective.

- **Is the extension safe?** We’re committed to helping protect users against third party software that may—intentionally or otherwise—compromise user security. Before an extension receives Recommended status, it undergoes rigorous technical review by staff security experts.

- **Does the extension offer an exceptional user experience?** Recommended extensions should be delightful to use. Curators look for content that’s intuitive to manage and well-designed. Common areas of concern include the post-install experience (i.e. once the user installs the extension, is it clear how to use it?), settings management, user interface copy, etc.

- **Is the extension relevant to a general, international audience?** The actively managed nature of Recommended extensions means we can only feature a relatively small collection of curated extensions. We try to select Recommended extensions that will be relevant to Firefox users around the globe.

The add-ons team may remove extensions from the Recommended list at any time. Reasons may include a degraded experience, security flaws, developer abandonment, or perhaps stronger alternatives emerge.

{% endcapture %}
{% include modules/one-column.liquid
  id: "criteria"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Developer partnership

Due to the heightened exposure Recommended extensions receive and because Firefox puts its brand endorsement behind these extensions, we only consider collaborating with developers who are committed to actively maintaining their extensions. This means:

- Strict adherence to AMO’s [add-on policies](/documentation/publish/add-on-policies/). If security concerns arise, developers must be responsive to addressing fixes.
- Work with staff to polish user experience issues (e.g. copy edits, user flow optimization, etc.)
- Address bug fixes in a timely manner.

Because of the program’s priority on security, every new version of a Recommended extension submitted must undergo a full technical review before it will appear on AMO. Depending on the state of the review queue, wait times may take up to two weeks.

{% endcapture %}
{% include modules/one-column.liquid
  id: "partnership"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Selection process

While the Recommended program will always be on the lookout for great new extensions, the collection is intended to remain fairly fixed over time. Our aim is to promote Recommended extensions that Firefox users can trust to be secure and exceptional over the lifespan of the extension. This is achieved by nurturing a tightly curated list of extensions.

If you’d like to nominate an extension you feel deserves consideration for the Recommended program—even if it’s one of your own—please email us a link to its AMO listing page at **amo-featured [at] mozilla [dot] org** and briefly explain why you think your extension should be considered for the Recommended list.

{% endcapture %}
{% include modules/one-column.liquid
  id: "selection"
  content: content
%}

<!-- END: Single Column Body Module -->


