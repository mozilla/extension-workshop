---
layout: sidebar
title: Cross-browser compatibility
permalink: /documentation/themes/cross-browser-compatibility/
topic: Themes
tags: [themes, compatibility, firefox]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2021-04-02 
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Cross-browser compatibility
Themes for Firefox are not always compatible with other major browsers. 

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- End Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

There is currently limited compatibility between themes in the major browsers. Opera takes an entirely different approach, and Microsoft Edge themes are not yet open to developers.

There is good compatibility between Firefox [static themes](/documentation/themes/static-themes/) and Chrome themes, providing the ability to port a single header image theme from Firefox to Chrome. However, noting that `frame` and `tab_background_text` only support RGB color array definition on Chrome.

So, in the single image theme example [(weta_fade)](https://github.com/mdn/webextensions-examples/tree/master/themes/weta_fade) could be supported in Chrome using the following manifest.json file:

 <!-- Syntax Highlighting -->

```js
{
  "manifest_version": 2,
  "version": "1.0",
  "name": "<your_theme_name>",
  "theme": {
    "images": {
      "theme_frame": "weta.png"
    },
    "colors": {
      "frame": [ 173 , 176 , 159 ],
      "tab_background_text": [ 0 , 0 , 0 ]
    }
  }
}
```
<!-- END: Syntax Highlighting -->

Also, note that Chrome tiles the `“theme_frame”:` image from the left of the header area: 

![Themes](/assets/img/documentation/themes/chrome_theme_example.png)

For more information, see the notes on [Chrome compatibility](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#chrome_compatibility) on MDN.

{% endcapture %}
{% include modules/one-column.liquid
  id: "single-image-themes"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->