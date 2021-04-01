---
layout: sidebar
title: Theme concepts
permalink: /documentation/themes/distribute-themes/
topic: Themes
tags: [ amo, firefox, guide, themes]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2021-04-01 
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Package and distribute your themes
This page will walk you through how to package and distribute your themes. 

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## 

Static themes are specified using the same resources as a browser extension: a manifest.json file to define the theme components with those components stored in the same folder as the manifest.json file or a sub folder. These resources are then packed in a zip for publication on addons.mozilla.org (AMO) or for self-distribution. For more information on self-distribution, visit Signing and distributing your add-on.

You can also use the theme generator on AMO to create a static theme. Additionally, Firefox Color can be used to preview customizations to the browser's theme with options to share and export a theme.

::: note
A theme and browser extension functionality cannot be defined in one package, such as including a theme to complement an extension. You can, however, programmatically include a theme in an extension using the Theme API. See Dynamic themes.
:::

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "static-themes"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}




{% endcapture %}
{% include modules/one-column.liquid
  id: "static-theme-approaches"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Create a simple static theme
To create a simple, single image static theme, follow these instructions:

1. Create a folder in a suitable location on your computer.
2. Add the theme image file to the folder: 

 <!-- Syntax Highlighting -->

```js
<mytheme>
 <your_header_image>.<type>
```
<!-- END: Syntax Highlighting -->

3. Create a file called manifest.json in the folder and edit its content as follows: 

<!-- Syntax Highlighting -->
```js
{
  "manifest_version": 2,
  "version": "1.0",
  "name": "<your_theme_name>",
  "theme": {
    "images": {
      "theme_frame": "<your_header_image>.<type>"
    },
    "colors": {
      "frame": "#FFFFFF",
      "tab_background_text": "#000"
    }
  }
}
```
<!-- END: Syntax Highlighting -->

Where: 
  * `"frame":` is the heading area background color for your theme.
  * `"tab_background_text":` is the color of the text in the heading area.

4. Package your theme and submit it to addons.mozilla.org (AMO), following [these instructions](/documentation/publish/package-your-extension/). Themes can be submitted to AMO for hosting or for self-distribution.

{% endcapture %}
{% include modules/one-column.liquid
  id: "create-a-simple-static-theme"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->


