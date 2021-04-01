---
layout: sidebar
title: Dynamic themes
permalink: /documentation/themes/dynamic-themes/
topic: Themes
tags: [ themes, amo, firefox, guide]
contributors: [ caitmuenster ]
last_updated_by: [ caitmuenster ]
date: 2021-04-01 
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Dynamic themes

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- End Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

You can use the [theme](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme) API to control the theme used in Firefox from within a browser extension. There are a couple of use cases for this option:

* To bundle a theme with a browser extension, as an added extra.
* Create a dynamic theme that changes under programmatic control.

And, obviously, you can combine the two and bundle a programmatically controlled theme with your extension.

::: note
If you have not built a browser extension before, check out [Your first extension on MDN](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) for a step-by-step guide.
:::

Using the theme API is straightforward. First, request "theme" [permission](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in the extension's [manifest.json](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file. Next, you build a JSON object containing the same information you would use in a static theme’s manifest.json, Finally, pass the JSON object in a [theme.update()](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) call.

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
	image: "content-guidelines/example-thumbnail.jpg"
	alt: "Dynamic Themes in Firefox"
%}

<!-- END: Video Popup Thumbnail -->

{% endcapture %}
{% include modules/one-column.liquid
  id: ""
  content: content
  aside: ""
%}

<!-- END: Content with Table of Contents -->

