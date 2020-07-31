---
layout: sidebar
title: Temporary installation in Firefox
permalink: /documentation/develop/temporary-installation-in-firefox/
topic: Develop
tags: [webextensions]
contributors:
  [
    caitmuenster,
    mdnwebdocs-bot,
    ldevernay,
    rebloor,
    Abhro,
    wbamberg,
    devSchnitzel,
    andrewtruongmoz,
    hellosct1,
    kumar303,
  ]
last_updated_by: mdnwebdocs-bot
date: 2019-12-19 08:45:00
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Temporary installation in Firefox

This article describes how you can temporarily install an extension in Firefox for testing and debugging. The extension stays installed until you remove it or restart Firefox.

For extension development, automate the processes described on this page by using [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).

Note that this is not how end-users should install add-ons in Firefox. End-users install add-ons by downloading and opening packaged add-ons that have been signed by Mozilla. To learn how you get an add-on packaged and signed, see [Publishing your extension](/documentation/publish/package-your-extension).

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

To install an extension temporarily:

- open Firefox
- enter "about:debugging" in the URL bar
- click "This Firefox"
- click "Load Temporary Add-on"
- open the extension's directory and select any file inside the extension.

The extension installs and remains installed until you remove it or restart Firefox.

<!-- Single Column Body Module -->

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.liquid
    title: "Temporarily Install Extension"
    youtube_id: "J7el77F1ckg"
    image: "documentation/develop/temp-install-extension.png"
    alt: "temporarily install extension"
%}

<!-- END: Video Popup Thumbnail -->

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "intro"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Reloading a temporary extension

To reload the extension, click "Reload":

![reload-extension](/assets/img/documentation/develop/reload-extension.png)

This:

- reloads any persistent scripts, such as [background scripts](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)
- parses the `manifest.json` file, so changes to [`permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), [`content_scripts`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), or any other keys take effect.

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.liquid
    title: "Reload Temporary Extension"
    youtube_id: "d3hgLMVJAzY"
    image: "documentation/develop/reload-temp-extension.png"
    alt: "reload temporary extension"
%}

<!-- END: Video Popup Thumbnail -->

::: note
Note that in Firefox 48 only, "Reload" does not update the extension's name and description that are displayed in about:debugging and about:addons. This is fixed in Firefox 49.
:::

{% endcapture %}
{% include modules/one-column.liquid
  id: "reloading-a-temporary-extension"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Using the command line

If you use the command line for development, check out [web-ext](/documentation/develop/getting-started-with-web-ext). It automates the temporary installation and automatically reloads your extension when its source code changes.

{% endcapture %}
{% include modules/one-column.liquid
  id: "using-the-command-line"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Detecting temporary installation

An extension can detect whether it was installed from about:debugging, rather than as a signed extension downloaded from [addons.mozilla.org](https://addons.mozilla.org). It does this by listening for the [`runtime.onInstalled`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) event, and checking the value of `details.temporary`.

{% endcapture %}
{% include modules/one-column.liquid
  id: "detecting-temporary-installation"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Limitations

The temporary installation of an extension doesn’t fully mimic the behavior of a signed extension. For example, if the extension makes installation time permission requests, these are not displayed as part of the temporary installation process. Also, features, such as local storage, persist even if the extension is removed and the browser restarted.

For information on how to address these situations, see [Test permission requests](/documentation/develop/test-permission-requests/) and [Testing persistent and restart features.](/documentation/develop/testing-persistent-and-restart-features/)

{% endcapture %}
{% include modules/one-column.liquid
  id: "limitations"
  content: content
%}

<!-- END: Single Column Body Module -->


