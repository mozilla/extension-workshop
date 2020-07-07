---
layout: sidebar
title: Manage
permalink: /documentation/manage/
published: true
tags: [manage]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Optimize and stay up-to-date

Manage your extension to keep it growing, accurate, and integrated with Firefox

{% endcapture %}
{% include modules/overview-page-hero.liquid
	content: page_hero_banner_content
	background: "develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Stay informed when Firefox changes

We’re constantly improving Firefox and the add-on experience. Use [this list of resources for publishers](/documentation/manage/resources-for-publishers/) to stay up-to-date with Firefox news and developments.

{% endcapture %}
{% include modules/column-w-toc.liquid
	id: "stay-informed-when-firefox-changes"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Publish extension updates

When you’re ready to improve your extension or receive suggestions for new features from your user community, you might decide to publish an update.

[Best practices for updating extensions](/documentation/manage/best-practices-for-updating/)

![Power Up Extensions](/assets/img/documentation/develop/PowerUpExtensions_fullwidth.png)

{% endcapture %}
{% include modules/one-column.liquid
	id: "publish-extension-updates"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Manage authors of your extension

Add-ons are often the result of the work of a team of developers, which is why [add-ons on AMO can have multiple authors](/documentation/publish/add-on-ownership/).

If someone is using your code without your permission, please follow [these instructions](https://www.mozilla.org/about/legal/report-infringement/) to file a DMCA Notice with Mozilla’s legal team to resolve the situation.

{% endcapture %}
{% include modules/one-column.liquid
	id: "manage-authors-of-your-extension"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Promote your extension

Keep your user base growing regularly reviewing your listing to [make sure it’s as appealing](/documentation/develop/create-an-appealing-listing/) as it can be.

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.liquid
	title: "Tips for great content and design for your extension"
	youtube_id: "a0_OsLGI0k4"
	image: "documentation/develop/extension-workshop-content-and-design.png"
	alt: "Tips for great content and design for your extension"
%}

<!-- END: Video Popup Thumbnail -->

However you choose to distribute your extension, you’ll want to promote your extension or theme.

Mozilla promotes a selection of [Recommended Extensions](https://blog.mozilla.org/addons/2019/04/08/recommended-extensions-program-coming-soon/) that meet a high standard of security, utility, and user experience. If you’d like your extension to be included in the program, submit a nomination.

[Making money from browser extensions](/documentation/publish/make-money-from-browser-extensions/) is also something you might want to consider as your user base grows.

{% endcapture %}
{% include modules/one-column.liquid
	id: "promote-your-extension"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Removing your extension from distribution

Sometimes, add-ons outlive their usefulness: features they provide may be added to Firefox, your product or service may evolve, or it could simply be easier to write a new extension than maintain your old one.

Here’s how to [Retire your extension](/documentation/manage/retiring-your-extension/) gracefully.

{% endcapture %}
{% include modules/one-column.liquid
	id: "removing-your-extension-from-distribution"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.liquid -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.liquid -%}

<!-- END: Up Next -->
