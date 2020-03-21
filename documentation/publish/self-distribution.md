---
layout: sidebar
title: Distributing an add-on yourself
permalink: /documentation/publish/self-distribution/
published: true
topic: Publish
tags: [add-on, distribution, publication, reviews, signing, installation]
contributors: [rebloor]
last_updated_by: rebloor
date: 2019-08-18 11:19:17
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Distributing an add-on yourself

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

You aren't required to list or distribute your add-on through [addons.mozilla.org](https://addons.mozilla.org) (AMO); you can distribute it yourself. However, before distributing your add-on yourself, here are some things you should consider:

- AMO is a very popular distribution platform, with millions of monthly visitors and installations. It's integrated into the Firefox Add-ons Manager, allowing for easy installation of add-ons published on AMO.
- When an add-on is listed on AMO, Firefox automatically updates installed copies when a new version is listed on AMO. To enable Firefox to automatically update self-distributed add-ons, the URL where Firefox can find updates needs to be included in the add-on manifest's [`update_url`](/documentation/manage/updating-your-extension/#enable-update) key.

For self-distributed add-ons that don't have an update URL, Firefox checks AMO for updates and the add-on is updated to a listed version, if one is available.

For more information on how to submit an add-on for distribution on AMO or self-distribution, see [Submitting an add-on](/documentation/publish/submitting-an-add-on/).

{% endcapture %}
{% include modules/column-w-toc.html
	id="self-distribution-introduction"
	content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Self-distribution options

When you choose to distribute an add-on yourself, they can be installed using the following methods:

- Web download (link to `/documentation/publish/submitting-an-add-on/#self-distribution`)—make your extension available on a suitable web accessible server and when the user downloads the signed add-on file Firefox will install it.
- Installing add-on from file (link target remains the same)—enables a user to install an add-on using an .xpi file saved on their computer.
- Add-ons for use with a desktop app—starting with Firefox 74, it is no longer be possible to have an extension be automatically installed as part of another application install. See the [Add-ons Blog](https://blog.mozilla.org/addons/2020/03/10/support-for-extension-sideloading-has-ended/) for more information.
- Add-ons in an enterprise environment—this page discusses the use of signed compared to unsigned extensions, installation options, the Firefox settings affecting installation, and including add-ons with a custom Firefox install package.

{% endcapture %}
{% include modules/one-column.html
  id="options"
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
