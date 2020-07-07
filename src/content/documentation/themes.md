---
layout: sidebar
title: Themes
permalink: /documentation/themes/
published: true
tags: [themes]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Enable creative expression with themes

You can use themes to customize how your browser looks by adding images and adjusting the color of various components.

{% endcapture %}
{% include modules/overview-page-hero.liquid
	content: page_hero_banner_content
	background: "develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

## How to create themes

![Themes](/assets/img/documentation/develop/Themes_fullwidth.jpg)

There are four ways you can create themes:

- **[Use the AMO theme generator](/documentation/themes/using-the-amo-theme-generator):** Use the theme wizard on [addons.mozilla.org](https://addons.mozilla.org) (AMO) to create themes that are hosted on AMO or that you distribute yourself.

- **Use [Firefox Color](https://color.firefox.com):** Create on-the-fly themes in Firefox. You can generate a URL to share the theme or export the theme as an add-on package.

- **[Code a theme yourself](https://developer.mozilla.org/docs/Mozilla/Add-ons/Themes/Theme_concepts):** Take advantage of all the theme features available. For instance, add color to more UI components, or utilize the ability to use multiple images. You can then choose to host these themes on AMO or distribute them yourself.

- **Include themes in your extension:** Use the [theme API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/theme) to take advantage of the full range of features in standalone themes. You can activate these themes based on user requests or dynamic information, like the time of day or the webpage the user is viewing.

{% endcapture %}
{% include modules/one-column.liquid
	id: "creating-themes"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.liquid -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.liquid -%}

<!-- END: Up Next -->
