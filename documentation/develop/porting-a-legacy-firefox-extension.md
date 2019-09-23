---
layout: sidebar
title: Porting a legacy Firefox extension
permalink: /documentation/develop/porting-a-legacy-firefox-extension/
published: false
topic: Develop
tags: [WebExtensions]
contributors:
  [
    mdnwebdocs-bot,
    rebloor,
    caitmuenster,
    wbamberg,
    ExE-Boss,
    TheV360,
    atsay,
    andrewtruongmoz,
    Dietrich,
    david_ross,
    cricciuto,
    Croydon,
  ]
last_updated_by: mdnwebdocs-bot
date: 2019-03-18 18:32:18
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Porting a legacy Firefox extension

If you have developed a Firefox extension using XUL/XPCOM or the Add-on SDK, this page will help you migrate your extension to use [WebExtensions](/documentation/develop/about-the-webextensions-api) APIs. The standard to build extensions for Firefox is to use WebExtensions APIs. It will be the only type of extension supported in Firefox by the end of November 2017 with the release of [Firefox 57](https://wiki.mozilla.org/RapidRelease/Calendar).

{% capture note %}

Support for extensions using XUL/XPCOM or the Add-on SDK was removed in Firefox 57, released November 2017. As there is no supported version of Firefox enabling these technologies, this page will be removed by December 2020.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=true
%}

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Quick start

1. Get an idea of the main things you'll have to change in your extension:

- Familiarize yourself with the [WebExtension format and structure](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension), and [build a basic example](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Writing_the_extension).
- If your extension is based on XUL and XPCOM, whether it's an [overlay extension](https://developer.mozilla.org/Add-ons/Overlay_Extensions) or a [bootstrapped extension](https://developer.mozilla.org/docs/Mozilla/Add-ons/Bootstrapped_extensions), see [Comparison with XUL/XPCOM extensions](/documentation/develop/comparison-with-xul-xpcom-extensions) to find out how WebExtensions can correspond with the legacy APIs you're using.
- If your extension is based on the Add-on SDK, see [Comparison with the Add-on SDK](/documentation/develop/comparison-with-the-add-on-sdk) to find out how WebExtensions can correspond with the legacy SDK APIs you're using.

2. Rewrite your extension code. See below for migration paths for different types of extensions. From Firefox 51 onwards, you can embed an extension built using WebExtension APIs in a bootstrapped extension or an SDK add-on, and can thus port a legacy extension a piece at a time, and have a working extension at each step. See [Embedded WebExtensions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions) for more information.
3. When you're ready to submit the WebExtension version of your extension to AMO... wait a minute... are you truly ready? Because of the extensions permissions model, you cannot revert from WebExtensions back to using a legacy extension format. So test _thoroughly_, because this is a permanent one-way trip. Also, see the hybrid example below. If you're not ready, you can embed your WebExtension in a legacy extension container, which allows you to test your extension migration but still go back if needed in an emergency.
4. When you're _really_ ready to submit the WebExtension version of your extension to AMO, first port your old add-on ID to the new WebExtension manifest.json file. Your extension must have the same ID as previous versions. Copy the value in the "id" field from your package.json file into the id field in the [applications](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) section of the WebExtension manifest.json file. Then you can submit your extension update to AMO as your normally would.

{% capture note %}

Note that this is a one-way conversion: You **cannot** update an extension using WebExtensions to use a legacy technology. This means that you must be sure that you are ready to commit to using WebExtension APIs before you submit the updated add-on to AMO.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

{% endcapture %}
{% include modules/column-w-toc.html
  id="quick-start"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Migration paths

### SDK Extensions

Here is the comparison chart showing [SDK APIs and their WebExtensions format counterparts](/documentation/develop/comparison-with-the-add-on-sdk). If you don't see the APIs you need to port to use WebExtensions APIs, look below to learn how to request APIs and also how to implement them.

### XUL/XPCOM Extensions

Here is the comparison chart showing [XUL/XPCOM APIs and their WebExtensions format counterparts](/documentation/develop/comparison-with-xul-xpcom-extensions). If you don't see the APIs you need to port to use WebExtension APIs, look below to learn how to request APIs and also how to implement them.

{% endcapture %}
{% include modules/one-column.html
  id="migration-paths"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Don't see the WebExtensions APIs you need?

**Develop WebExtension APIs for Firefox** - If you're experienced with Mozilla infrastructure and would like to develop WebExtensions APIs directly for Firefox, here is a list of [approved APIs](https://mzl.la/2dVs5Ys) that you can start contributing to.

**Experiment with new WebExtension APIs** - If you want to prototype and tinker with WebExtensions APIs without having to build Firefox, [WebExtensions Experiments](http://webextensions-experiments.readthedocs.io/en/latest/index.html) is for you!

**Request a new WebExtensions API** - If you want to request a new WebExtensions API, please read [this page](https://wiki.mozilla.org/WebExtensions/NewAPIs).

{% endcapture %}
{% include modules/one-column.html
  id="dont-see-the-webextensions-apis-you-need"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Tools

- [web-ext](/documentation/develop/getting-started-with-web-ext) is a command line tool designed to speed up various parts of the extension development process, making development faster and easier.
- [WebExtensions Helper](https://github.com/mi-g/weh) speeds up browser extension development by providing utilities for WebExtensions-based (Firefox, Chrome, Opera and Edge) extensions
- [Chrome Extension generator](https://github.com/yeoman/generator-chrome-extension) creates everything you need to get started with extension development. You can choose Browser UI(Browser,Page Action, Omnibox) type and select permissions you need.
- [Extensionizr](http://extensionizr.com/) is a wizard that helps you create a basic extension
- [Chrome Boilerplate](https://github.com/mahemoff/chrome-boilerplate) is boilerplate code for Chrome WebExtension.
- [Skeleton Chrome Extension](https://github.com/sitepoint/ChromeSkel_a) is an extension bootstrap and template

{% endcapture %}
{% include modules/one-column.html
  id="tools"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Documentation

- [WebExtensions Project Page](https://wiki.mozilla.org/Add-ons/developer/communication) on the Mozilla Wiki
- [How-to guides](/documentation/develop) covering common extension developer cases, like [intercepting web requests](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests) and [adding a button to the toolbar](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Comparison with the Add-on SDK](/documentation/develop/comparison-with-the-add-on-sdk)
- [Comparison with XUL/XPCOM extensions](/documentation/develop/comparison-with-xul-xpcom-extensions)
- [Browser compatibility table](https://developer.mozilla.org/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) for all WebExtensions APIs
- [Examples of extensions](https://developer.mozilla.org/Add-ons/WebExtensions/Examples)

{% endcapture %}
{% include modules/one-column.html
  id="documentation"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Contact

You can use the links [here](https://developer.mozilla.org/docs/Mozilla/Add-ons#Contact_us) to get help, keep up to date with news around add-ons, and give us feedback.

{% endcapture %}
{% include modules/one-column.html
  id="contact"
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
