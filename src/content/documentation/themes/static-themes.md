---
layout: sidebar
title: Static themes
description: Learn how to create static themes to customize Firefox's appearance, including colors, background images, and more.
permalink: /documentation/themes/static-themes/
topic: Themes
tags: [themes, amo, firefox]
contributors: [caitmuenster, rebloor]
last_updated_by: rebloor
date: 2026-09-18
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Static themes

You can code a static theme to customize Firefox's look and feel.

{% endcapture %}
{% include modules/page-hero.liquid,
 content: page_hero_banner_content
%}

<!-- End Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Introduction

You specify static themes the same way you do browser extensions: the theme colors and layouts are defined in a manifest.json file and accompanied by any images you use in your theme. You then package the theme and submit it to addons.mozilla.org for signing before distributing and installing it in Firefox.

This article:

- Shows you how to create a simple static theme.
- Explains what you need to consider when creating a theme for Nova.
- Explores the controls for where gradients and images are displayed.
- Discusses the options you have for adding images to a theme.
- Explains how to publish and update your theme.

::: note
You can't define a theme and browser extension functionality in one package, such as including a theme to complement an extension. You can, however, programmatically include a theme in an extension using the `theme` API. See [Dynamic themes](/documentation/themes/dynamic-themes/) for more information.
:::

{% endcapture %}
{% include modules/column-w-toc.liquid,
 id: "introduction"
 content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Create a simple static theme

The simplest static theme changes only the Firefox interface colors. It doesn't need any image files. To create one:

1. Create a folder in a suitable location on your computer, such as `teal-colors`.
2. In the folder, create a file called `manifest.json` with this content:

<!-- Syntax Highlighting -->
```json
{
  "manifest_version": 2,
  "version": "1.0",
  "name": "Teal colors",
  "browser_specific_settings": {
    "gecko": {
      "id": "teal-colors@example.com"
 }
 },
  "theme": {
    "colors": {
      "frame": "#0f766e",
      "tab_background_text": "#f0fdfa",
      "tab_selected": "#ccfbf1",
      "tab_text": "#134e4a",
      "toolbar": "#ccfbf1",
      "toolbar_text": "#134e4a",
      "toolbar_field": "#ffffff",
      "toolbar_field_text": "#134e4a"
 }
 },
  "dark_theme": {
    "colors": {
      "frame": "#042f2e",
      "tab_background_text": "#ccfbf1",
      "tab_selected": "#115e59",
      "tab_text": "#f0fdfa",
      "toolbar": "#115e59",
      "toolbar_text": "#f0fdfa",
      "toolbar_field": "#042f2e",
      "toolbar_field_text": "#f0fdfa"
 }
 }
}
```
<!-- END: Syntax Highlighting -->

 Where:

- `"browser_specific_settings"` sets the theme's ID.
- `"theme"` defines the theme that applies when Firefox uses the light color scheme.
- `"dark_theme"` defines the theme that applies when Firefox uses the dark color scheme. If you omit it, Firefox uses `"theme"` for both color schemes.
- `"frame"` is the background color of the header area, behind the tabs.
- `"tab_background_text"` is the color of the text in the header area, such as the titles of unselected tabs.
- `"tab_selected"` and `"tab_text"` are the background and text colors of the selected tab.
- `"toolbar"` and `"toolbar_text"` are the background and text colors of the toolbars, such as the navigation toolbar.
- `"toolbar_field"` and `"toolbar_field_text"` are the background and text colors of the address bar.

1. Test your theme in Firefox:
   1. Enter `about:debugging` in the address bar, and select **This Firefox**.
   2. Select **Load Temporary Add-on…** and open the `manifest.json` file in your theme's folder.

 The theme stays applied until you remove it or restart Firefox. You can also use [web-ext](/documentation/develop/getting-started-with-web-ext/) to run the theme.

With the light color scheme, the theme looks like this:

![Teal colors theme with the light color scheme, showing a dark teal tab strip and a light teal navigation toolbar](/assets/img/documentation/themes/static-theme-colors-light.png)

With the dark color scheme, Firefox uses the colors from `"dark_theme"`:

![Teal colors theme with the dark color scheme, showing a very dark teal tab strip and a mid-teal navigation toolbar](/assets/img/documentation/themes/static-theme-colors-dark.png)

For the full list of UI elements where you can set colors, see the [`theme` key description](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors). When your theme is ready, see [Publishing themes](#publishing-themes) to make it available to users.

{% endcapture %}
{% include modules/one-column.liquid,
 id: "create-a-simple-static-theme"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Nova themes

Nova is the Firefox visual design introduced in Firefox 157. It changes how Firefox draws the interface, so it's worth checking your theme against it.

### Accent colors

Your theme should not use the [purple color](https://acorn.firefox.com/latest/desktop/styles/color/full-palette-0YLNaoxC#section-purple-a4). This color is reserved for the themes Mozilla ships.

::: note
**TODO:** Will AMO reject these themes, or is another mechanism used to enforce this?
:::

### Selected tab styling

In earlier versions of Firefox, the UI design gave the selected tab a drop shadow that separated it from the toolbar. Nova removes that shadow. By default, the selected tab takes the toolbar's background color, which can make it hard to pick out if your theme doesn't style it.

This effect is most pronounced when a theme uses similar colors for the header and the toolbar. For example, this theme sets the two almost identically and does not set a color for selected tabs:

 <!-- Syntax Highlighting -->
```json
"colors": {
  "frame": "#0f766e",
  "toolbar": "#107a72",
  "tab_background_text": "#f0fdfa",
  "toolbar_text": "#f0fdfa",
  "toolbar_field": "#ffffff",
  "toolbar_field_text": "#134e4a"
}
```
<!-- END: Syntax Highlighting -->

The selected tab takes the `toolbar` color. As that color is almost identical to `frame`, and there's no shadow to separate them, the selected tab is hard to distinguish:

![Theme without tab_selected set, where the selected tab is the same color as the toolbar and merges with it](/assets/img/documentation/themes/static-theme-tab-selected-default.png)

So, set the selected tab's colors explicitly with `tab_selected` for its background and `tab_text` for its label, and check that they contrast with `toolbar` and `frame`:

 <!-- Syntax Highlighting -->
```json
"colors": {
  "frame": "#0f766e",
  "toolbar": "#107a72",
  "tab_selected": "#ffffff",
  "tab_text": "#134e4a",
  "tab_background_text": "#f0fdfa",
  "toolbar_text": "#f0fdfa",
  "toolbar_field": "#ffffff",
  "toolbar_field_text": "#134e4a"
}
```
<!-- END: Syntax Highlighting -->

With the same header and toolbar colors as before, the selected tab now has its own color, so it stands out from both the header and the unselected tabs:

![Theme with tab_selected set to white, where the selected tab stands out from the toolbar and the unselected tabs](/assets/img/documentation/themes/static-theme-tab-selected-explicit.png)

### Image-based themes

If your theme uses `theme_frame` or `additional_backgrounds`, check where those images display in the Nova interface. The `backgrounds_area` property controls whether Firefox draws them across the whole window or only in the top toolbars, as described in [Using gradients and images](#using-gradients-and-images).

::: note
**TODO:** Describe how a `theme_frame` image behaves behind the toolbar and the sidebar in Nova. Cover how the image aligns when the sidebar is open, and whether any part of the image is obscured or stretched.
:::

### Sidebar

The sidebar respects these color keys:

- `sidebar`: the sidebar's background color.
- `sidebar_text`: the color of text in the sidebar. Firefox also uses this color, with `sidebar`, to decide whether to render the sidebar's widgets in a light or dark scheme.
- `sidebar_border`: the color of the sidebar's border.
- `sidebar_highlight` and `sidebar_highlight_text`: the background and text colors of the selected item in the sidebar.

::: note
**TODO:** Document the known sidebar limitations, including the hover states in sidebar panels and the behavior with expand-on-hover enabled. Note which keys have no effect in these cases.
:::

### Nova examples

Several Nova theme examples are in the [acorn-themes](https://github.com/FirefoxUX/acorn-themes/tree/main/themes/nova) GitHub repository. Each example includes light (`theme`) and dark (`dark_theme`) variants using colors and gradients.

{% endcapture %}
{% include modules/one-column.liquid,
 id: "nova-themes"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Using gradients and images

A theme's backgrounds can use images and, from Firefox 156, CSS gradients. You can control where Firefox draws them: across the whole browser window or only in the toolbars at the top of the window.

### Defining a gradient

Anywhere a theme takes a background item, that is `theme_frame` and the items in `additional_backgrounds`, you can supply a gradient as an object. For example:

 <!-- Syntax Highlighting -->
```json
"images": {
  "additional_backgrounds": [
 { "linear-gradient": "to bottom right, #6d28d9, #db2777, #f97316" }
 ]
}
```
<!-- END: Syntax Highlighting -->

You can use `linear-gradient`, `radial-gradient`, and `conic-gradient`, along with their repeating versions: `repeating-linear-gradient`, `repeating-radial-gradient`, and `repeating-conic-gradient`.

For details on specifying images, see [Working with images](#working_with_images).

### Control where gradients and images are drawn

From Firefox 156, the `backgrounds_area` property specifies where Firefox draws your theme's background gradients and images. It takes one of these values:

- `"window"`: draws the backgrounds across the whole browser window.
- `"top_toolbars"`: draws the backgrounds only in the horizontal toolbars at the top of the window, such as the tab strip, navigation toolbar, and bookmarks toolbar.
- `"auto"`: Firefox chooses the area based on `additional_backgrounds_alignment`. If any background is aligned to the vertical `center` or `bottom` (for example, `"center"`, `"bottom"`, or `"left bottom"`), the backgrounds are drawn in the top toolbars. Otherwise, they're drawn across the whole window. This is the default when `backgrounds_area` is omitted.

For example, this theme draws a gradient across the whole window:

 <!-- Syntax Highlighting -->
```json
{
  "manifest_version": 2,
  "version": "1.0",
  "name": "Sunset gradient",
  "browser_specific_settings": {
    "gecko": {
      "id": "sunset-gradient@example.com"
 }
 },
  "theme": {
    "images": {
      "additional_backgrounds": [
 { "linear-gradient": "to bottom right, #6d28d9, #db2777, #f97316" }
 ]
 },
    "properties": {
      "backgrounds_area": "window",
      "additional_backgrounds_alignment": ["right top"],
      "additional_backgrounds_tiling": ["no-repeat"],
      "additional_backgrounds_size": ["cover"]
 },
    "colors": {
      "frame": "#6d28d9",
      "tab_background_text": "#ffffff",
      "tab_selected": "#ffffff",
      "tab_text": "#4c1d95",
      "toolbar_text": "#ffffff",
      "toolbar_field": "#ffffff",
      "toolbar_field_text": "#4c1d95"
 }
 }
}
```
<!-- END: Syntax Highlighting -->

The gradient fills the whole browser window, including the areas around the web content, such as the sidebar. (These screenshots use vertical tabs, so the tabs are displayed in the sidebar.)

![Sunset gradient theme with backgrounds_area set to window, with the gradient covering the toolbars and the vertical tab sidebar](/assets/img/documentation/themes/static-theme-gradient-window.png)

Changing the value to `"top_toolbars"` restricts the gradient to the toolbars at the top of the window, and the rest of the window uses the `frame` color:

 <!-- Syntax Highlighting -->
```json
"properties": {
  "backgrounds_area": "top_toolbars",
  "additional_backgrounds_alignment": ["right top"],
  "additional_backgrounds_tiling": ["no-repeat"],
  "additional_backgrounds_size": ["cover"]
},
```
<!-- END: Syntax Highlighting -->

![Sunset gradient theme with backgrounds_area set to top_toolbars, with the gradient only in the top toolbars and the sidebar using the frame color](/assets/img/documentation/themes/static-theme-gradient-top-toolbars.png)

Background images follow the same rule. Here, a tiled image with `backgrounds_area` set to `"window"` covers the sidebar as well as the toolbars:

![Theme with backgrounds_area set to window, with the tiled image drawn across the whole browser window](/assets/img/documentation/themes/static-theme-backgrounds-area-window.png)

While `"top_toolbars"` keeps the same image in the toolbars only:

![Theme with backgrounds_area set to top_toolbars, with the tiled image drawn only in the toolbars at the top of the window](/assets/img/documentation/themes/static-theme-backgrounds-area-top-toolbars.png)

::: note
Firefox versions earlier than 156 don't support `backgrounds_area`. In these versions, Firefox uses the `"auto"` behavior. For more information, see the [`theme` key description](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme).
:::

{% endcapture %}
{% include modules/one-column.liquid,
 id: "using-gradients-and-images"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Working with images

{% endcapture %}
{% include modules/one-column.liquid,
 id: "working_with_images"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

### Header image themes

This is the basic theme with an image option, where you define:

- An image, using `"theme_frame"`, which is anchored to the top right of the header area.
- At least one color, such as for the text in the header.

For example:

 <!-- Syntax Highlighting -->

```js
  "theme": {
    "images": {
      "theme_frame": "weta.png"
 },
    
    "colors": {
       "frame": "#adb09f",
       "tab_text": "#000"
 }
 }
```
<!-- END: Syntax Highlighting -->

Your header image should be 200 pixels deep to fill the header space. The maximum image width depends on the monitor resolution and how much of the monitor Firefox is using. Practically, this means you may need to allow up to 5120 pixels wide (for 5 K monitors).

However, rather than creating a very wide image, a better approach is to use a narrower image with a transparent left edge so that it fades to the background color. For example, you could use this image:

![Single image](/assets/img/documentation/themes/static-theme-single-image.png)

combined with a complementary background color, to create this effect in the header:

![Simple static theme preview](/assets/img/documentation/themes/simple-static-theme-preview.png)

See details about this theme in the [themes](https://github.com/mdn/webextensions-examples/tree/master/themes) example [weta_fade](https://github.com/mdn/webextensions-examples/tree/master/themes/weta_fade).

Obviously, you can still provide a wide image if you prefer.

{% endcapture %}
{% include modules/one-column.liquid,
 id: "header-image-themes"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

### Multi-image themes

You can also create themes using one or more images specified using `"additional_backgrounds"`. You can anchor these images individually to locations within the header, with the option to tile each image.

For example, you wanted to tile a centrally justified image, such as:

![Single image](/assets/img/documentation/themes/static-theme-single-image.png)

to create this effect:

![Multiple images](/assets/img/documentation/themes/static-theme-multiple-images.png)

Here you specify the Weta image like this:

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
  "additional_backgrounds_tiling": [ "repeat" ]
},
```
<!-- END: Syntax Highlighting -->

Full details on how to set up this theme are in the [themes](https://github.com/mdn/webextensions-examples/tree/master/themes) example [weta_mirror](https://github.com/mdn/webextensions-examples/tree/master/themes/weta_mirror). Full details of the alignment options can be found in the [`theme` key description](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme).

{% endcapture %}
{% include modules/one-column.liquid,
 id: "multiple-image-themes"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

### Static animated themes

You can create an animated theme using an APNG image, as in the [themes](https://github.com/mdn/webextensions-examples/tree/master/themes) example [animated](https://github.com/mdn/webextensions-examples/tree/master/themes/animated). However, remember that rapid animations, such as the one in the example, might be too distracting for a practical theme.

You can also animate themes programmatically with [dynamic themes](/documentation/themes/dynamic-themes/).

{% endcapture %}
{% include modules/one-column.liquid,
 id: "static-animated-themes"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Publishing themes

This section explains how to publish your new theme and update it as you make changes,

### Publish a new theme

Package your theme and submit it to [addons.mozilla.org](https://addons.mozilla.org?utm_source=extensionworkshop.com&utm_medium=referral&utm_content=static-themes) (AMO).

You can find information about how to package, sign, and distribute your theme in the [Signing and distribution overview](/documentation/publish/signing-and-distribution-overview/). You can choose to publicly distribute your theme on AMO or [distribute it yourself](/documentation/publish/self-distribution/).

### Updating static themes

If your static theme is hosted on [addons.mozilla.org](https://addons.mozilla.org?utm_source=extensionworkshop.com&utm_medium=referral&utm_content=static-themes), you can upload a new version using the [Developer Hub](https://addons.mozilla.org/developers?utm_source=extensionworkshop.com&utm_medium=referral&utm_content=static-themes).

::: note
If you plan to upload a packaged file, increase the version number to be higher than the current version in the package's manifest.json.
:::

1. Visit the product page for your theme through the [Developer Hub](https://addons.mozilla.org/developers?utm_source=extensionworkshop.com&utm_medium=referral&utm_content=static-themes).
2. Select "Upload New Version" from the sidebar.
3. Upload your packaged file for validation.

You can also modify your theme using the AMO theme generator by selecting "Create a Theme" for Step 2. If you choose this option, you do not need to increase the version number in your theme's manifest.json.

{% endcapture %}
{% include modules/one-column.liquid,
 id: "publishing-themes"
 content: content
 aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->