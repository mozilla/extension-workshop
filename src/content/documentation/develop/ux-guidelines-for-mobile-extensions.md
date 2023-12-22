---
layout: sidebar
title: User experience guidelines for mobile extensions
permalink: /documentation/develop/user-experience-guidelines-for-mobile-extensions/
topic: Develop
tags: [add-ons, guide, mobile, webextensions, ux, user-experience]
contributors:
  [
    caitmuenster,
    dotproto
  ]
last_updated_by: dotproto
date: 2023-12-01
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# User Experience Guidelines for Mobile Extensions

Make your extension seamlessly integrate with Firefox for Android.

{% endcapture %}
{% include modules/page-hero.liquid,
  content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Introduction

To make sure your users have a great experience with your extension on Firefox for Android, you want to ensure your extension’s user interface integrates well with the browser.

This article provides guidelines for optimizing your extension’s user experience on mobile. We’ve broken these guidelines up into three segments: the basics, which lists the minimum requirements needed for your extension to work well on a variety of devices; the extra mile, which details how you can make your extension look and feel like Firefox for Android; and the last mile, which describes how you can make your extension feel mobile-native or mobile-first.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "introduction"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## The basics
Make your extension’s stylesheet responsive and follow these key guidelines to ensure that your extension works well for as many people as possible on a variety of devices.

### Color contrast

Pass your colors through WebAIM’s [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). They should pass WCAG AA level.

### Layout

- Optimize for a 360 × 640 dp layout.

- Follow Material Design’s [touch targets guidelines](https://material.io/design/usability/accessibility.html#layout-and-typography).

### Typography

- Use [Roboto](https://fonts.google.com/specimen/Roboto), the standard Android font family.

- Follow Material Design’s recommendations for [type scale](https://material.io/).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "the-basics"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## The extra mile

To provide a seamless experience between your extension and the browser, use the guidelines in this section to make your extension match Firefox for Android’s look and feel.

### Themes

Use the Acorn Design System’s [color palette](https://acorn.firefox.com/latest/styles/color-MZHBVuZc).

### Color contrast

Pass your colors through WebAIM’s [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). They should pass WCAG AAA level.

### Typography

#### Font family

Match the font families used in Firefox for Android:

- [Inter](https://fonts.google.com/specimen/Inter) for body and caption context
- [Metropolis](https://www.1001fonts.com/metropolis-font.html) for headlines, subtitles, and buttons

### Iconography

Use either [Acorn Android icons](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H/) or [Material icons](https://material.io/resources/icons/).

### Components

Frequently used elements in your extension should use mobile-optimized [Material Web Components](https://material-components.github.io/material-components-web-catalog/). They may include:

- [Button](https://material-components.github.io/material-components-web-catalog/#/component/button), [Floating Action Button](https://material-components.github.io/material-components-web-catalog/#/component/fab), and [Icon button](https://material-components.github.io/material-components-web-catalog/#/component/icon-button)
- Form elements like [checkbox](https://material-components.github.io/material-components-web-catalog/#/component/checkbox), [radio button](https://material-components.github.io/material-components-web-catalog/#/component/radio), [switch](https://material-components.github.io/material-components-web-catalog/#/component/switch), and [text field](https://material-components.github.io/material-components-web-catalog/#/component/text-field)
- [List](https://material-components.github.io/material-components-web-catalog/#/component/list)
- [Menu](https://material-components.github.io/material-components-web-catalog/#/component/menu) and [Select](https://material-components.github.io/material-components-web-catalog/#/component/select)


{% endcapture %}
{% include modules/one-column.liquid,
    id: "the-extra-mile"
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## The last mile

If you’d like your extension to behave as though it is integrated into the browser, use these guidelines to design your extension to be mobile-native.

### Layout and typography

Rebuild your extension’s layout using the [Material Web Components Layout Grid](https://material-components.github.io/material-components-web-catalog/#/component/layout-grid).

### Components

Most, if not all, elements in your extension should use mobile-optimized [Material Web Components](https://material-components.github.io/material-components-web-catalog/):
- [Tab bar](https://material-components.github.io/material-components-web-catalog/#/component/tabs)
- [Top app bar](https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar)

Seldom used elements that could be mobile-optimized include [Card](https://material-components.github.io/material-components-web-catalog/#/component/card), [Chips](https://material-components.github.io/material-components-web-catalog/#/component/chips), [Data table](https://material-components.github.io/material-components-web-catalog/#/component/data-table), [Dialog](https://material-components.github.io/material-components-web-catalog/#/component/dialog), [Drawer](https://material-components.github.io/material-components-web-catalog/#/component/drawer), [Image list](https://material-components.github.io/material-components-web-catalog/#/component/image-list), and [Snackbar](https://material-components.github.io/material-components-web-catalog/#/component/snackbar).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "the-last-mile"
    content: content
%}

<!-- END: Single Column Body Module -->
