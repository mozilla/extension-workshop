---
layout: sidebar
title: Themes
permalink: /documentation/themes/
published: false
tags: []
contributors: [caitmuenster]
author: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

<section class="overview-hero" style="background-image: url({% asset "develop-overview-hero-bg.jpg" @optim @path %});">
<div class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="overview-hero-description" markdown="1">

# Enable creative expression with themes

Users can more deeply personalize Firefox by personalizing the look of their browser.

</div>
<div class="overview-hero-cta"></div>
</div>
</article>
</div>
</section>

<!-- END: Overview Page Hero Banner -->

<!-- Section 1: Single Column Body Module -->

<section id="what-themes-are" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.html -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## What themes are

[Themes](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes/Theme_concepts) add images to the header area of the Firefox browser—the area behind the menu bar, toolbars, address bar, search bar, and tab strip—and can adjust the color of various UI components, such as text and toolbar icons.

</div>
</article>
</section>

<!-- END: Section 1: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="creating-themes" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Creating themes

![Themes]({% asset "documentation/develop/Themes_fullwidth.jpg" @optim @path %})

There are four ways you can create themes:

- **[Use the AMO theme generator](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes/Using_the_AMO_theme_generator):** Create themes that are hosted on AMO or you distribute yourself. Not all features are available.

- **Use [Firefox Color](https://color.firefox.com):** Create on-the-fly themes in Firefox. You can generate a URL to share the theme or export the theme as an add-on package. Not all features are available.

- **Code a theme yourself:** Take advantage of all the theme features available. For instance, add color to more UI components, or utilize the ability to use multiple images. You can then choose to host these themes on AMO or distribute them yourself.

- **Include themes in your extension:** Use the [theme API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme) to take advantage of the full range of features in standalone themes. You can activate these themes based on user requests or dynamic information, like the time of day or the webpage the user is viewing.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
