---
layout: sidebar
title: Using the AMO theme generator
permalink: /documentation/themes/using-the-amo-theme-generator/
published: false
topic: Themes
tags: [add-on, Add-ons, AMO, Firefox, Guide, Tutorial]
contributors: [irenesmith, andrewtruongmoz, caitmuenster, shiy23]
last_updated_by: irenesmith
date: 2019-02-28 12:39:01
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Using the AMO theme generator

The theme generator on [addons.mozilla.org](https://addons.mozilla.org) (AMO) guides you through the process of creating a theme for Firefox. Once you have defined the colors and image for your theme, the generator will submit your new theme to AMO. You may submit themes for publishing on AMO or for self-distribution.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Getting Started

{% capture note %}

You will need to be logged in to your Firefox Account to access the Theme Generator.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

If you would like to publish your theme on [addons.mozilla.org](https://addons.mozilla.org) (AMO), begin by going to the [listed Theme Generator page](https://addons.mozilla.org/en-US/developers/addon/submit/wizard-listed).

Otherwise, if you prefer to self-distribute your theme, go to the [unlisted Theme Generator Page](https://addons.mozilla.org/en-US/developers/addon/submit/wizard-unlisted). For more information on distribution, visit [Signing and distributing your add-on](/documentation/publish/signing-and-distribution-overview/).

{% capture note %}

**Note:** You can create a more elaborate theme, for example a theme that uses multiple images, by creating a Static Theme. To get started with Static Themes, take a look at: [Theme concepts](/documentation/publish/theme-concepts).

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

To use the AMO theme generator, fill out the form with information for your new theme.

<img src="{% asset "documentation/themes/new_theme.png" @path @optim %}" style="border:1px solid black" />

Start by giving your new theme a name.

When picking an image for the theme's header, it should be:

- 200 pixels tall
- No larger than 6.9MB
- The format can be one of: PNG, JPG, APNG, SVG or GIF (Do not use animated gifs.)
- The image will be aligned to the right end of the header.

In the example above, the image fades into a solid color, keeping the image size down.

Color values can be entered using hex, rgb, or rgba. You can also use the color selector to pick the colors for your theme:

<img src="{% asset "documentation/themes/theme_colors.png" @path @optim %}" style="border:1px solid black" />

The color you select will be displayed in the example below the color settings so you can play with colors until you find just the right combination for your theme. The largest block represents the intensity of the color, the rainbow slider to its right allows you to select the hue, and the rightmost slider defines the opacity of the color.

Once the color input field loses focus, the color format will be converted to rgba when the input field loses focus. The RGB (red, green, blue) component of the color can range from 0 to 255, while the "a" in RGBA stands for alpha and controls the opacity of the color. Valid values for alpha range between 0 and 1 and the default value is 1.0 or completely opaque.

{% capture note %}

You can use the [Firefox Color extension](https://color.firefox.com/) to preview your creation.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

The colors in the following image shows you the colors you can define for your theme. All but the **Header area background** and **Header area text and icons** are optional:

<img src="{% asset "documentation/themes/theme_colors_labeled.png" @path @optim %}" style="border:1px solid black" />

**Header area background** <br/>
The color of the header area background, displayed in the part of the header not covered or visible through the header image. **Manifest field**: _accentcolor_.

**Header area text and icons** <br/>
The color of the text and icons in the header area, except the active tab. **Manifest field**: _textcolor_.

**Toolbar area background (optional)** <br/>
The background color for the navigation bar, the bookmarks bar, and the selected tab. **Manifest field**: _toolbar_.

**Toolbar area text and icons (optional)** <br/>
The color of the text and icons in the toolbar and the active tab. **Manifest field**: _toolbar_text_.

**Toolbar field area background (optional)** <br/>
The background color for fields in the toolbar, such as the URL bar. **Manifest field**: _toolbar_field_.

**Toolbar field area text (optional)** <br/>
The color of text for fields in the toolbar, such as the URL bar. **Manifest field**: _toolbar_field_text_.

As you fill in the information, you will see a browser preview of your theme at the bottom of the form.

When you have finished filling in the information, click the **Finish Theme** button to continue.

{% capture note %}

Themes submitted for self-distribution will be signed immediately and an XPI file will be generated for download.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

{% endcapture %}
{% include modules/column-w-toc.html
  id="getting-started"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->
<!-- Single Column Body Module -->

{% capture content %}

## Submitting your theme

If you are publishing your theme to [addons.mozilla.org](https://addons.mozilla.org) (AMO), the second page of the theme creator asks you to describe your theme. You will have to enter the following information:

**Name** <br/>
This is the name of your theme as it will be displayed on AMO, and can be different from the name that is displayed when the theme has been installed in Firefox.

**Add-on URL** <br/>
This is the address from which your theme can be downloaded. You can edit the final portion of the value (after https://addons.mozilla.org/) but please use only letters, numbers, underscores, and dashes in your URL.

**Summary (required)** <br/>
Describe your theme. You have 250 characters in which to describe your theme.

**Select a category (required)** <br/>
Selecting an accurate category for your theme will help others find it on AMO. The following categories are available:

- Abstract
- Causes
- Fashion
- Film and TV
- Firefox
- Foxkeh
- Holiday
- Music
- Nature
- Other
- Scenery
- Seasonal
- Sports
- Websites

**Support email** <br/>
The email address where people can contact you if they have trouble with your theme.

**Support website** <br/>
The URL to the website where you provide support for your theme.

**License (required)** <br/>
The license under which your theme is published will be by the choices you make in response to the following questions:

- Can others share your theme, as long as you're given credit?
- Can others make commercial use of your theme?
- Can others create derivative works from your theme?

Once you have filled in all of the required information, you can complete the submission process by clickiing on the **Submit Version** button. You should see something that looks like this:

<img src="{% asset "documentation/themes/theme_after_submit.png" @path @optim %}" style="border:1px solid black" />

{% endcapture %}
{% include modules/one-column.html
  id="submitting-your-theme"
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
