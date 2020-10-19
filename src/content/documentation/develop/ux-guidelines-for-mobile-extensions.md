---
layout: sidebar
title: Differences between desktop and Android extensions
permalink: /documentation/develop/ux-guidelines-for-mobile-extensions/
topic: Develop
tags: [add-ons, guide, mobile, webextensions, ux, user-experience]
contributors:
  [
    caitmuenster
  ]
last_updated_by: caitmuenster
date: 2020-10-19
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# User Experience Guidelines for Mobile Extensions

TEST TEST TEST

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

# Introduction

::: note alert
In August 2020, Mozilla launched a new, reimagined Firefox for Android experience (codenamed "Fenix"). The  browser for Android has been rebuilt from the ground up using [GeckoView](https://mozilla.github.io/geckoview/), Mozilla's mobile browsing engine.

Currently, only a limited number of [Recommended Extensions](https://support.mozilla.org/kb/recommended-extensions-program?utm_source=extensionworkshop.com&utm_medium=dev-article&utm_content=developing-extensions-for-firefox-for-android) are supported. However, we are continuously working on increasing support, taking into account usage and feedback to ensure we are making the most of our available resources. We will post updates to [The Add-ons Blog](https://blog.mozilla.org/addons/category/mobile?utm_source=extensionworkshop.com&utm_medium=dev-article&utm_content=differences-between-desktop-and-android-extensions) as plans solidify each quarter.
:::

To make sure your users have a great experience with your extension on Firefox for Android, you’ll want to make sure your extension’s user interface integrates well with the browser.

This article provides guidelines for optimizing your extension’s user experience on mobile. We’ve broken these guidelines up into three segments: the basics, which lists the minimum requirements needed for your extension to work well on a variety of devices; the extra mile, which details how you can make your extension look and feel like Firefox for Android; and the last mile, which describes how you can make your extension feel mobile-native or mobile-first.

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "introduction"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

# The basics
Make your extension’s stylesheet responsive and follow these key guidelines to ensure that your extension works well for as many people as possible on a variety of devices.

## Color contrast

Pass your colors through WebAIM’s [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). They should pass WCAG AA level.

## Layout

- Optimise for a 360 × 640 dp layout

- Follow Material Design's [touch targets guidelines](https://material.io/design/usability/accessibility.html#layout-and-typography).

## Typography

- Use [Roboto](https://fonts.google.com/specimen/Roboto), the standard Android font family.

- Follow Material Design's recommendations for [type scale](https://material.io/).

{% endcapture %}
{% include modules/one-column.liquid
    id: "the-basics"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

# The extra mile

To provide a seamless experience between your extension and the browser, use the guidelines in this section to make your extension match Firefox for Android’s look and feel.

## Themes

- Use the Protocol Design System's [color palette](https://protocol.mozilla.org/fundamentals/color.html).

- Match Firefox for Android's [color usage](https://www.figma.com/proto/TebIgESfWmQkMcEmwNaYZl/Android?node-id=0%3A498&viewport=-4823%2C213%2C0.5&scaling=min-zoom&hide-ui=1) for light and dark themes.

## Color contrast

Pass your colors through WebAIM’s [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). They should pass WCAG AAA level.

## Typography

### Font family

Match the font families used in Firefox for Android:

- [Inter](https://fonts.google.com/specimen/Inter) for body and capition context
- [Metropolis](https://www.1001fonts.com/metropolis-font.html) for headlines, subtitles, and buttons

### Type scale

Follow the [Firefox for Android typographic scale](https://www.figma.com/proto/TebIgESfWmQkMcEmwNaYZl/Android?node-id=0%3A806&viewport=115%2C161%2C0.5&scaling=min-zoom).

## Iconography

Use either [Photon Android icons](https://design.firefox.com/icons/viewer/) or [Material icons](https://material.io/resources/icons/).

## Components

Frequently used elements in your extension should use mobile-optimised [Material Web Components](https://material-components.github.io/material-components-web-catalog/). They may include:

- [Button](https://material-components.github.io/material-components-web-catalog/#/component/button), [Floating Action Button](https://material-components.github.io/material-components-web-catalog/#/component/fab) and [Icon button](https://material-components.github.io/material-components-web-catalog/#/component/icon-button)
- Form elements like [checkbox](https://material-components.github.io/material-components-web-catalog/#/component/checkbox), [radio button](https://material-components.github.io/material-components-web-catalog/#/component/radio), [switch](https://material-components.github.io/material-components-web-catalog/#/component/switch) and [text field](https://material-components.github.io/material-components-web-catalog/#/component/text-field)
- [List](https://material-components.github.io/material-components-web-catalog/#/component/list)
- [Menu](https://material-components.github.io/material-components-web-catalog/#/component/menu) and [Select](https://material-components.github.io/material-components-web-catalog/#/component/select)


{% endcapture %}
{% include modules/one-column.liquid
    id: "the-extra-mile"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

# The last mile

If you’d like your extension to behave as though it is integrated in the browser, use these guidelines to design your extension to be mobile-native.

## Layout and typography

Rebuild your extension's layout using the [Material Web Components Layout Grid](https://material-components.github.io/material-components-web-catalog/#/component/layout-grid).

## Components

Most if not all elements in your extension should use mobile-optimised [Material Web Components](https://material-components.github.io/material-components-web-catalog/):
- [Tab bar](https://material-components.github.io/material-components-web-catalog/#/component/tabs)
- [Top app bar](https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar)

Seldom used elements that could be mobile-optimised include [Card](https://material-components.github.io/material-components-web-catalog/#/component/card), [Chips](https://material-components.github.io/material-components-web-catalog/#/component/chips), [Data table](https://material-components.github.io/material-components-web-catalog/#/component/data-table), [Dialog](https://material-components.github.io/material-components-web-catalog/#/component/dialog), [Drawer](https://material-components.github.io/material-components-web-catalog/#/component/drawer), [Image list](https://material-components.github.io/material-components-web-catalog/#/component/image-list), and [Snackbar](https://material-components.github.io/material-components-web-catalog/#/component/snackbar).

Components should match [Firefox for Android color usage](https://www.figma.com/proto/TebIgESfWmQkMcEmwNaYZl/Android?node-id=0%3A498&viewport=-4823%2C213%2C0.5&scaling=min-zoom&hide-ui=1) for light and dark themes.

{% endcapture %}
{% include modules/one-column.liquid
    id: "the-last-mile"
    content: content
%}

<!-- END: Single Column Body Module -->
