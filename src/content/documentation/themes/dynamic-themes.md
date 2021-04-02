---
layout: sidebar
title: Dynamic themes
permalink: /documentation/themes/dynamic-themes/
topic: Themes
tags: [themes, dynamic themes, firefox, publish]
contributors: [ caitmuenster ]
last_updated_by: [ caitmuenster ]
date: 2021-04-01 
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Dynamic themes
Dynamic themes can customize the look and feel of Firefox, and can be activated to change based on user requests or dynamic information. 

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- End Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

# Introduction
Dynamic themes have access to the full power of the [theme](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/theme) API and can be integrated into a [browser extension](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions) to change the appearance of Firefox. Dynamic themes can also change based on user requests or dynamic information, such as the time of day or what website the user is accessing.

{% endcapture %}
{% include modules/one-column.liquid
  id: "introduction"
  content: content
  aside: ""
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Creating dynamic themes

To create a dynamic theme, start by creating the [manifest.json]((https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json)) for a new browser extension and request the  "theme" [permission](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

 Next, you build a JSON object containing the same information you would use in a static theme’s manifest.json, Finally, pass the JSON object in a [theme.update()](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) call.

For example, the following code, from the [dynamic theme example](https://github.com/mdn/webextensions-examples/tree/master/dynamic-theme) defines the content for the day and night elements of the dynamic theme:

 <!-- Syntax Highlighting -->

```js
const themes = {
  'day': {
    images: {
     theme_frame: 'sun.jpg',
    },
    colors: {
     frame: '#CF723F',
     tab_background_text: '#111',
    }
  },
  'night': {
    images: {
     theme_frame: 'moon.jpg',
    },
    colors: {
     frame: '#000',
     tab_background_text: '#fff',
    }
  }
};
```
<!-- END: Syntax Highlighting -->

The theme.Theme object is then passed to theme.update() to change the header theme, as in this code snippet from the same example:

```js
function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}
```

Learn more about dynamic themes and see an additional example in the following video:

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.liquid
	title: "Dynamic Themes in Firefox"
	youtube_id: "ycckyrUN0AY"
	image: "documentation/themes/dynamic-themes-video-screenshot.png"
	alt: "Dynamic Themes in Firefox"
%}

<!-- END: Video Popup Thumbnail -->

::: note
If you have not built a browser extension before, check out [Your first extension on MDN](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) for a step-by-step guide.
:::

{% endcapture %}
{% include modules/one-column.liquid
  id: "creating-dynamic-themes"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Publishing dynamic themes 

The workflow for publishing dynamic themes follows the same path as publishing browser extensions for Firefox. You can read an [overview](/documentation/publish/) of the process in the Publish section of Firefox Etension Workshop. 

First, you will need to [package](/documentation/publish/package-your-extension/) your dynamic theme. Then, you will need to submit it to [addons.mozilla.org](https://addons.mozilla.org?utm_source=extensionworkshop.com&utm_medium=referral&utm_content=dynamic-themes) (AMO) for signing. If you would like to to distribute your dynamic theme on AMO, follow the instructions for [Listing on AMO](/documentation/publish/submitting-an-add-on/#listing-on-amo) in the [Submitting an add-on](/documentation/publish/submitting-an-add-on/) article. If you do not want to list your dynamic theme on AMO, follow the instructions for [Self-distribution](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/#self-distribution). 

{% endcapture %}
{% include modules/one-column.liquid
  id: "publishing-dynamic-themes"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

