---
layout: sidebar
title: Static themes
permalink: /documentation/themes/static-themes/
topic: Themes
tags: [ themes, amo, firefox, guide]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2021-04-01 
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Static themes
In this article, you will learn how to code a static theme for Firefox. 

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- End Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Introduction
Static themes are specified using the same resources as a browser extension: a manifest.json file to define the theme components with those components stored in the same folder as the manifest.json file or a sub folder. These resources are then packed in a zip for publication on [addons.mozilla.org](https://addons.mozillal.org?utm_source=extensionworkshop.com&utm_medium=referral&utm_content=static-themes) (AMO) or for self-distribution. For more information on self-distribution, visit Signing and distributing your add-on.

There are a few approaches you can take to theming the header area of Firefox: you can use use a single static image, a single animated image, or multiple images. 

::: note
A theme and browser extension functionality cannot be defined in one package, such as including a theme to complement an extension. You can, however, programmatically include a theme in an extension using the Theme API. See [Dynamic themes](/documentation/themes/dynamic-themes/).
:::

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "introduction"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Single image themes
This is the basic or minimal theming option, where you define:
* A single image, which is anchored to the top right of the header area.
* A color for the text in the header.

The area your header image needs to fill is a maximum of 200 pixels high. The maximum image width is determined by the resolution of the monitor Firefox is displaying on and how much of the monitor Firefox is using. Practically, this means you would need to allow for a width of up to 5120 pixels wide (for the next generation of 5k monitors). 

However, rather than creating a very wide image, a better approach is to use a narrower image with a transparent left edge so that it fades to the background color. For example, we could use this image: 


combined with a complementary background color, to create this effect in the header: 

See details about this theme in the [themes](https://github.com/mdn/webextensions-examples/tree/master/themes) example [weta_fade](https://github.com/mdn/webextensions-examples/tree/master/themes/weta_fade).

Obviously, you can still provide a single wide image if you prefer.

{% endcapture %}
{% include modules/one-column.liquid
  id: "single-image-themes"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Multiple Image Themes
As an alternative to creating a single image theme, you have the option to use multiple images. These images can be individually anchored to locations within the header, with the option to apply tiling to each image.

Depending on the effect you want to create you may need to suppress the mandatory "theme_frame": image with an empty or transparent image. You would use an empty or transparent image if, for example, you wanted to tile a centrally justified image, such as


to create this effect

Here you specify the weta image like this:

 <!-- Syntax Highlighting -->

```js
"images": {
  "theme_frame": "empty.png",
  "additional_backgrounds": [ "weta_for_tiling.png"]
},
```
<!-- END: Syntax Highlighting -->

and the images tiling with: 

 <!-- Syntax Highlighting -->
```js
"properties": {
  "additional_backgrounds_alignment": [ "top" ],
  "additional_backgrounds_tiling": [ "repeat"  ]
},
```
<!-- END: Syntax Highlighting -->

Full details of how to setup this theme can be found in the [themes](https://github.com/mdn/webextensions-examples/tree/master/themes) example [weta_mirror](https://github.com/mdn/webextensions-examples/tree/master/themes/weta_mirror). Full details of the alignment options can be found in the ["theme" key description](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme).

{% endcapture %}
{% include modules/one-column.liquid
  id: "multiple-image-themes"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Static Animated Themes
It is possible to create an animated theme using an APNG format image, as in the [themes](https://github.com/mdn/webextensions-examples/tree/master/themes) example [animated](https://github.com/mdn/webextensions-examples/tree/master/themes/animated). However, remember that rapid animations, such as the one in the example might be too distracting for a practical theme.

You can also animate themes programmatically, which we discuss in Dynamic themes.

{% endcapture %}
{% include modules/one-column.liquid
  id: "static-animated-themes"
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

4. Package your theme and submit it to addons.mozilla.org (AMO), following [these instructions](/documentation/publish/package-your-extension/). You can choose to publically distribute your theme on AMO or distribute it yourself. 

{% endcapture %}
{% include modules/one-column.liquid
  id: "create-a-simple-static-theme"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->


