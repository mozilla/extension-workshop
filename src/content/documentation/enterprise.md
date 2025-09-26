---
layout: sidebar
title: Enhance your workflows with extensions for the enterprise
permalink: /documentation/enterprise/
tags: [enterprise]
contributors: [caitmuenster, mkaply]
last_updated_by: mkaply
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Extensions for your enterprise

Firefox gives your enterprise a high-performance, standards compliant, manageable browser environment.

{% endcapture %}
{% include modules/overview-page-hero.liquid,
	content: page_hero_banner_content
	background: "develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

Extensions give you the ability to complement standard browser features and provide richer interfaces to enterprise web applications.

{% endcapture %}
{% include modules/column-w-toc.liquid,
	id: "introduction"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Page section container -->

<section id="developing-your-enterprise-extension" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Developing your enterprise extension

{% endcapture %}
{% include modules/one-column.liquid,
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

![Enterprise Extensions](/assets/img/documentation/develop/EnterpriseExtensions_promo.jpg)

{% endcapture %}
{% capture col_2_content %}

Developing extensions for your enterprise is straightforward – you can follow the standard extension development path. You can also [add policy support](/documentation/enterprise/enterprise-development/#how-to-add-policy) to your extension to allow enterprises to preconfigure settings for your extension.

[Some Firefox enterprise policies](/documentation/enterprise/enterprise-policies-that-impact-extensions/) might affect the installation, behavior, and update of extensions.

{% endcapture %}
{% include modules/two-column.liquid,
	col_1: col_1_content
	col_2: col_2_content
	reverse: false
%}

<!-- END: Two Column Body Module -->

</section>

<!-- END: Page section container -->

<!-- Single Column Body Module -->

{% capture content %}

## Distributing your enterprise extension

Extensions for enterprise deployments of Firefox Extended Support Release (ESR) should be distributed outside of [addons.mozilla.org](https://addons.mozilla.org).

Once your extension is developed and tested, you can use one of the [enterprise distribution](/documentation/enterprise/enterprise-distribution/) methods to install it in Firefox.

{% endcapture %}
{% include modules/one-column.liquid,
	id: "distributing-your-enterprise-extension"
	content: content
	aside: ""
%}

<!-- END: Single Column Body Module -->
