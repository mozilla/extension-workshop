---
layout: sidebar
title: Extension Basics
permalink: /extension-basics/
published: false
tags: []
contributors:
  [
    caitmuenster,
	rbrishabh,
  ]
last_updated_by: rbrishabh
date: 2019-09-24 19:34:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Bring your extension to life

Get how-tos, resources, and information to successfully build and ship your extension for Firefox.

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

## Getting started

The Extension Workshop can help you develop extensions for Firefox and give your users simple, yet powerful ways to customize their browsing experience. You’ll find:

- [Overview of the Firefox extension features](https://extensionworkshop.allizom.org/#about)
- [Tools and processes for developing and testing](/documentation/develop/)
- [How to publish your extension on addons.mozilla.org or distribute it yourself](/documentation/publish/)
- [How to manage your published extension](/documentation/manage/)
- [An enterprise guide for developing and using extensions](/documentation/enterprise/)
- [How to develop themes for Firefox](/documentation/themes/)
- [Firefox developer communities](/community/)

{% endcapture %}
{% include modules/column-w-toc.html
	id="getting-started"
	content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Mozilla Developer Network

Documentation for the WebExtensions API can be found on the [Mozilla Developer Network](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions) (MDN).

On MDN, you’ll find:

- Tutorials to help you start
- Explanations of key extension development concepts
- A guide to extension UI components
- How to use the extension Javascript APIs.
- A reference guide for the extension Javascript APIs, including compatibility tables for other popular browsers.
- A reference guide for the manifest.json file and its keys.

{% endcapture %}
{% include modules/one-column.html
	id="mozilla-developer-network"
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
