---
layout: sidebar
title: Enterprise
permalink: /documentation/enterprise/
published: false
tags: []
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Extensions for your enterprise

Firefox gives your enterprise a high-performance, standards compliant, manageable browser environment.

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

## Section Title

Extensions give you the ability to complement standard browser features and provide richer interfaces to enterprise web applications.

{% endcapture %}
{% include modules/column-w-toc.html
	id="introduction"
	content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Page section container -->

<section id="developing-your-enterprise-extension" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Developing your enterprise extension

{% endcapture %}
{% include modules/one-column.html
	id=""
	content=content
	aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

![Enterprise Extensions]({% asset "documentation/develop/EnterpriseExtensions_promo.jpg" @path @optim %})

{% endcapture %}
{% capture col_2_content %}

Developing extensions for your enterprise is straightforward – you can follow the standard extension development path.

[Some Firefox enterprise policies](https://docs.google.com/document/d/1t-tUnHoycTNbGJvlqkvF_jJN-gJiWxuconQu4kOR8e4/edit) might affect the extension.com

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
	reverse=false
%}

<!-- END: Two Column Body Module -->

</section>

<!-- END: Page section container -->

<!-- Single Column Body Module -->

{% capture content %}

## Distributing your enterprise extension

Extensions for enterprise deployments of Firefox Extended Support Release (ESR) should be distributed outside of addons.org.

Once your extension is developed and tested, you can use one of the [enterprise distribution](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Alternative_distribution_options/Add-ons_in_the_enterprise) methods to install it in Firefox.

{% endcapture %}
{% include modules/one-column.html
	id="distributing-your-enterprise-extension"
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
