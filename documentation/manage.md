---
layout: sidebar
title: Manage
permalink: /documentation/manage/
published: false
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
{% include modules/overview-page-hero.html
	content=page_hero_banner_content
	cta1_label=""
	cta1_url=""
	cta2_label=""
	cta2_url=""
	background="develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Stay informed when Firefox changes

We’re constantly improving Firefox and the add-on experience. Use [this list of resources for publishers](/documentation/manage/resources-for-publishers/) to stay up-to-date with Firefox news and developments.

{% endcapture %}
{% include modules/column-w-toc.html
	id="stay-informed-when-firefox-changes"
	content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Promote your extension

Keep your user base growing regularly reviewing your listing to [make sure it’s as appealing](/documentation/develop/create-an-appealing-listing/) as it can be.

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.html
	title="Tips for great content and design for your extension"
	youtube_id="a0_OsLGI0k4"
	image="documentation/develop/extension-workshop-content-and-design.png"
	alt="Tips for great content and design for your extension"
%}

<!-- END: Video Popup Thumbnail -->

However you choose to distribute your extension, you’ll want to promote your extension or theme.

Mozilla promotes a selection of [Recommended Extensions](https://blog.mozilla.org/addons/2019/04/08/recommended-extensions-program-coming-soon/) that meet a high standard of security, utility, and user experience. If you’d like your extension to be included in the program, submit a nomination.

[Making money from browser extensions](/documentation/publish/make-money-from-browser-extensions/) is also something you might want to consider as your user base grows.

{% endcapture %}
{% include modules/one-column.html
	id="promote-your-extension"
	content=content
	aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Publish extension updates

When you’re ready to improve your extension or receive suggestions for new features from your user community, you might decide to publish an update.

[Best practices for updating extensions](/documentation/manage/best-practices-for-updating/)

![Power Up Extensions]({% asset "documentation/develop/PowerUpExtensions_fullwidth.png" @optim @path %})

{% endcapture %}
{% include modules/one-column.html
	id="publish-extension-updates"
	content=content
	aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Manage authors of your extension

Add-ons are often the result of the work of a team of developers, which is why [add-ons on AMO can have multiple authors](https://docs.google.com/document/d/1nw5FMHI4pH3iKHEdLS6GuAUl9oRfFd5P4uC7wEAQaCU/edit#heading=h.w6vo7guwwexf).

If someone is using your code without your permission, please follow [these instructions](https://www.mozilla.org/about/legal/report-infringement/) to file a DMCA Notice with Mozilla’s legal team to resolve the situation.

{% endcapture %}
{% include modules/one-column.html
	id="manage-authors-of-your-extension"
	content=content
	aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Removing your extension from distribution

Sometimes, add-ons outlive their usefulness: features they provide may be added to Firefox, your product or service may evolve, or it could simply be easier to write a new extension than maintain your old one.

Here’s how to [Retire your extension](/documentation/manage/retiring-your-extension/) gracefully.

{% endcapture %}
{% include modules/one-column.html
	id="removing-your-extension-from-distribution"
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
