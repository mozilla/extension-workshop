---
layout: sidebar
title: Themes
permalink: /documentation/themes/
published: false
tags: []
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Enable creative expression with themes

Users can more deeply personalize Firefox by personalizing the look of their browser.

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

## What themes are

[Themes](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes/Theme_concepts) add images to the header area of the Firefox browser—the area behind the menu bar, toolbars, address bar, search bar, and tab strip—and can adjust the color of various UI components, such as text and toolbar icons.

{% endcapture %}
{% include modules/column-w-toc.html
	id="what-themes-are"
	content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Creating themes

![Themes]({% asset "documentation/develop/Themes_fullwidth.jpg" @optim @path %})

There are four ways you can create themes:

- **[Use the AMO theme generator](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes/Using_the_AMO_theme_generator):** Create themes that are hosted on AMO or you distribute yourself. Not all features are available.

- **Use [Firefox Color](https://color.firefox.com):** Create on-the-fly themes in Firefox. You can generate a URL to share the theme or export the theme as an add-on package. Not all features are available.

- **Code a theme yourself:** Take advantage of all the theme features available. For instance, add color to more UI components, or utilize the ability to use multiple images. You can then choose to host these themes on AMO or distribute them yourself.

- **Include themes in your extension:** Use the [theme API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme) to take advantage of the full range of features in standalone themes. You can activate these themes based on user requests or dynamic information, like the time of day or the webpage the user is viewing.

{% endcapture %}
{% include modules/one-column.html
	id="creating-themes"
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
