---
layout: sidebar
title: Let users express their personality with themes
permalink: /documentation/themes/
tags: [themes]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2021-04-02 
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Enable creative expression with themes

You can use themes to customize how your browser looks by adding images and adjusting the color of various components.

{% endcapture %}
{% include modules/overview-page-hero.liquid,
	content: page_hero_banner_content
	background: "develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

With themes, you can customize the look of your Firefox by adding images to the header part of the section and changing the colors of the tab strip, address bar, toolbars, and [other supported areas](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors).

These themes use the [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions), the technology used to modify or enhance the capability of Firefox. You can choose to create a [static theme](/documentation/themes/static-themes/), which don't change after installation, or a [dynamic theme](/documentation/themes/dynamic-themes/) if you would like to bundle your theme in an extension or programmatically control changes to theme. 

Not a coder? Not a problem! It's easy to create a static theme using the [AMO theme generator](/documentation/themes/using-the-amo-theme-generator) or [Firefox Color](https://color.firefox.com). 

{% endcapture %}
{% include modules/one-column.liquid,
	id: "creating-themes"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## How to create themes

There are four ways you can create themes:

- **[Use the AMO theme generator](/documentation/themes/using-the-amo-theme-generator):** Use the theme wizard on [addons.mozilla.org](https://addons.mozilla.org?utm_source=extensionworkshop.com&utm_medium=referral&utm_content=themes) (AMO) to create themes that are hosted on AMO or that you [distribute yourself](/documentation/publish/self-distribution/).

- **Use [Firefox Color](https://color.firefox.com):** Create on-the-fly themes in Firefox. You can generate a URL to share the theme or export the theme as an add-on package.

- **[Code a theme yourself](/documentation/themes/static-themes/):** Take advantage of all the theme features available. For instance, add color to more UI components, or utilize the ability to use multiple images. You can then choose to host these themes on AMO or distribute them yourself.

- **Include themes in your extension:** Use the [`theme` API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/theme) in an extension. You can activate these themes based on user requests or dynamic information, like the time of day or the webpage the user is viewing.

![Themes](/assets/img/documentation/develop/Themes_fullwidth.jpg)

{% endcapture %}
{% include modules/one-column.liquid,
	id: "creating-themes"
	content: content
%}

<!-- END: Single Column Body Module -->


