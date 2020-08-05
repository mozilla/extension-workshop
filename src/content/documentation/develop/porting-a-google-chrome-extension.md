---
layout: sidebar
title: Porting a Google Chrome extension
permalink: /documentation/develop/porting-a-google-chrome-extension/
topic: Develop
tags: [webextensions]
contributors:
  [
    jennyevans,
    blossomica,
    mdnwebdocs-bot,
    aseffasamson,
    rebloor,
    Uemmra3,
    Makyen,
    wbamberg,
    andrewtruongmoz,
    AndreiPetcu,
    kumar303,
    yfdyh000,
  ]
last_updated_by: jennyevans
date: 2019-05-19 11:54:36
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Porting a Google Chrome extension

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content %}

The browser extension APIs are designed to promote cross-browser compatibility among extensions. The WebExtension APIs is therefore, to a large extent, code-compatible with the [extension API](https://developer.chrome.com/extensions) supported by Google Chrome and Opera. Extensions written for these browsers will, in most cases, run in Firefox with just a few changes. Almost all of the [WebExtension APIs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API) provide support for callback functions under the `chrome` namespace, the same as Chrome. The only APIs that aren't supported in the `chrome` namespace are those that are intentionally incompatible with Chrome. In those cases, the API documentation page states that support is provided only in the `browser` namespace. The process of porting an extension from Chrome or Opera is, therefore, relatively straightforward:

1. Review your use of `manifest.json` features and Chrome extension APIs against the [Chrome incompatibilities reference](https://developer.mozilla.org/Add-ons/WebExtensions/Chrome_incompatibilities). Mozilla provides a service that can help to automate this step: [extensiontest.com](https://www.extensiontest.com/). If you're using features or APIs that aren't supported in Firefox, you might not be able to port your extension.
2. Install your extension in Firefox by using [`about:debugging`](https://developer.mozilla.org/docs/Tools/about:debugging) or the [web-ext tool](/documentation/develop/getting-started-with-web-ext#testing-out-an-extension) (similar to Chrome’s command-line tools).
3. [Test your extension](/documentation/develop/debugging).
4. If you have any problems, contact us on the [dev-addons mailing list](https://mail.mozilla.org/listinfo/dev-addons) or [Add-ons](https://mzl.la/2u8ZGbg) channel on [Matrix](https://wiki.mozilla.org/Matrix).
5. Package your extension, [manually](/documentation/publish/package-your-extension) or using the [web-ext](/documentation/develop/getting-started-with-web-ext#packaging-your-extension) tool.
6. [Create an account on addons.mozilla.org then submit your add-on for signing and distribution](/documentation/publish/submitting-an-add-on).

If you use the Chrome command-line option for loading an unpacked extension, check out the [web-ext](/documentation/develop/getting-started-with-web-ext/) tool which automates temporary installation in Firefox for development.

{% endcapture %}
{% include modules/one-column.liquid
  id: "create-a-privacy-policy"
  content: content
%}

<!-- END: Single Column Body Module -->


