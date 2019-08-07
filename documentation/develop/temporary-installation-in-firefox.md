---
layout: sidebar
title: Temporary installation in Firefox
permalink: /documentation/develop/temporary-installation-in-firefox/
published: false
topic: Develop
tags: [WebExtensions]
contributors:
  [
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
date: 2019-03-18 18:38:23
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Temporary installation in Firefox

This article describes how an add-on developer can temporarily install an extension in Firefox for testing and debugging. The extension will stay installed until you restart Firefox. You can use this method with any kind of restartless extension, including [bootstrapped extensions](https://developer.mozilla.org/docs/Mozilla/Add-ons/Bootstrapped_extensions) and [Add-on SDK add-ons](https://developer.mozilla.org//docs/Mozilla/Add-ons/SDK).

Note that this is not how end users should install add-ons in Firefox. End users will install add-ons by downloading and opening packaged add-ons that have been signed by Mozilla. To learn how an extension developer can get an add-on packaged and signed, see [Publishing your extension](/documentation/publish/package-your-extension).

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

To install an extension temporarily:

- open Firefox
- enter "about:debugging" in the URL bar
- click "Load Temporary Add-on"
- open the extension's directory and select any file inside the extension.

The extension will be installed, and will stay installed until you restart Firefox.

<!-- Single Column Body Module -->

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.html
    title="borderify WebExtension - part 1"
    youtube_id="cer9EUKegG4"
    image="documentation/develop/borderify-part-1.png"
    alt="borderify part 1"
%}

<!-- END: Video Popup Thumbnail -->

{% endcapture %}
{% include modules/column-w-toc.html
  id="intro"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Reloading a temporary extension

Starting in Firefox 48, there's a new button labeled "Reload" next to the extension's entry in about:debugging:

![reload-extension]({% asset "documentation/develop/reload-extension.png" @optim @path %})

This does what it says:

- reloading any persistent scripts, such as [background scripts](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)
- parsing the `manifest.json` file again, so changes to [`permissions`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), [`content_scripts`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), [`browser_action`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) or any other keys will take effect.

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.html
    title="borderify WebExtension - part 3"
    youtube_id="NuajE60jfGY"
    image="documentation/develop/borderify-part-3.png"
    alt="borderify part 3"
%}

<!-- END: Video Popup Thumbnail -->

{% capture note %}

Note that in Firefox 48 only, "Reload" does not update the extension's name and description that are displayed in about:debugging and about:addons. This is fixed in Firefox 49.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

{% endcapture %}
{% include modules/one-column.html
  id="reloading-a-temporary-extension"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Using the command line

If you are already using the command line for development, check out the [web-ext](/documentation/develop/getting-started-with-web-ext) tool. It automates the temporary installation step and automatically reloads your extension when its source code changes.

{% endcapture %}
{% include modules/one-column.html
  id="using-the-command-line"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Detecting temporary installation

Your extension can detect whether it was installed from about:debugging rather than as a built and signed extension downloaded from [addons.mozilla.org](https://addons.mozilla.org). Listen for the [`runtime.onInstalled`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) event, and check the value of `details.temporary`.

{% endcapture %}
{% include modules/one-column.html
  id="detecting-temporary-installation"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Limitations

Temporary installation of an extension doesn’t fully mimic the behavior of a signed extension. For example, if the extension makes installation time permission requests, these are not displayed as part of the temporary installation process. Also, features, such as local storage, persist even if the extension is removed and the browser restarted.

For information on how to address these situations, see [Test permission requests](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Test_permission_requests) and [Testing persistent and restart features.](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Testing_persistent_and_restart_features)

{% endcapture %}
{% include modules/one-column.html
  id="limitations"
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
