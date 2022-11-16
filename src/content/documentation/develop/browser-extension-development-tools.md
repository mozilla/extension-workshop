---
layout: sidebar.liquid
title: Browser Extension Development Tools
permalink: /documentation/develop/browser-extension-development-tools/
topic: Develop
tags:
  [
    coding,
    debugging,
    development,
    guide,
    scaffold,
    testing,
    tools,
    translation,
    webextensions,
  ]
contributors: [rebloor, mdnwebdocs-bot, hellosct1, ani-sha, ankushduacodes]
last_updated_by: ankushduacodes
date: 2021-01-23 00:04:00
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Browser Extension Development Tools

Mozilla and the Firefox browser extension developer community have created a range of tools that can simplify and speed up your browser extension development. This page provides a summary of those tools including details on the features each offers, how to get started, where in the development cycle it fits, and links to useful resources.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<section id="boilerplating-tools" class="page-section-container">

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Boilerplating tools

### Extension scaffolding builder

Create a scaffold for your browser extensions. Provide the tool with extension name, description, and version. Then specify whether you want background and content scripts, browser and page actions, and extension options. create-web-ext then delivers a boilerplate project as a zip download, containing all the folders and files you need to start development.

{% endcapture %}
{% include modules/column-w-toc.liquid,
    content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

![Extension Scaffolding Builder](/assets/img/documentation/develop/Extension_scaffolding_builder.png)

To get started, [visit the tool online](https://webext.eu/) or [install it locally from npm](https://www.npmjs.com/package/create-web-ext).

{% endcapture %}
{% capture aside %}

##### Use during:

- Development

##### Resources

- [create-web-ext online (webext.eu)](https://webext.eu/)
- [create-web-ext on npm](https://www.npmjs.com/package/create-web-ext)
- [GitHub project](https://github.com/web-ext-labs/create-web-ext)
- [GitHub UI project](https://github.com/web-ext-labs/ui-tool)

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### WebExtensions Example

The [webextensions-examples GitHub repository](https://github.com/mdn/webextensions-examples) is a collection browser extension examples. Each example is a complete working extension that you can install and run in Firefox. You are free to use these examples as the starting point for your browser extensions, as they are made available under the [Mozilla Public License 2.0.](https://www.mozilla.org/MPL/2.0/)

{% endcapture %}
{% capture aside %}

##### Use during:

- Development

##### Resources

- [GitHub project](https://github.com/mdn/webextensions-examples)
- [Examples page on MDN](https://developer.mozilla.org/Add-ons/WebExtensions/Examples)

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

</section>

<section id="coding-tools" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Coding tools

If you're looking for information about text editor in which to write your code, see the [Common questions](https://developer.mozilla.org/docs/Learn/Common_questions) article [Available text editors](https://developer.mozilla.org/docs/Learn/Common_questions/Available_text_editors).

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### web-ext

Speed up browser extension development and make development tasks easier with this command line tool. This tool helps:

- automatically reload and restart your extension in Firefox, as you make code changes.
- launch your extension to any installed version of Firefox, including into Firefox for Android.
- check your extension’s manifest and code for common errors.
- package your extension ready for submission to AMO.
- sign your extension for self-hosted distribution.

To get started with web-ext, install it with the [nodejs/npm](https://nodejs.org/) tool.

[Get started](/documentation/develop/getting-started-with-web-ext/)

{% endcapture %}
{% capture aside %}

##### Use during:

- Development
- Testing
- Publication

##### Resources

- [Command reference](/documentation/develop/web-ext-command-reference/)
- [GitHub project](https://github.com/mozilla/web-ext)

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### web-ext-webpack-plugin

Use this plug-in to simplify the development of extensions built using webpack. The plug-in does this by integrating the `web-ext run` and `lint` commands into the webpack process, so that the extension is linted and reloaded once webpack build completes.

To get started, add the plug-in to your `webpack.config.js`.

[Get started](https://github.com/hiikezoe/web-ext-webpack-plugin/blob/master/README.md)

{% endcapture %}
{% capture aside %}

##### Use during:

- Development

##### Resources

- [Demo screencast](https://youtu.be/Cx_0QoY27tg)
- [GitHub repo](https://github.com/hiikezoe/web-ext-webpack-plugin)
- [Example](https://github.com/birtles/rikaichamp/)

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### WebExtension browser API Polyfill

When creating extensions you want to work in Firefox and Chrome, this library enables you to use the Firefox Promise-based APIs and have them run on Google Chrome with few, if any, changes.

To get started, install using npm and load the library into the contexts where browser APIs are accessed.

[Get started](https://github.com/mozilla/webextension-polyfill/#installation)

{% endcapture %}
{% capture aside %}

##### Use during:

- Development

##### Resources

- [GitHub project](https://github.com/mozilla/webextension-polyfill/)

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

</section>

<section id="testing-and-debugging-tools" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Testing and debugging tools

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### about:debugging

This Firefox page enables you to manually install add-ons into Firefox for testing and to kickoff debugging, using the Addon Debugging Window, for any browser extension installed in Firefox.

![About Debugging](/assets/img/documentation/develop/about-debugging.png)

To get started, type `about:debugging` in the Firefox address bar.

{% endcapture %}
{% capture aside %}

##### Use during:

- Testing and debugging

##### Resources

- [MDN page](https://developer.mozilla.org/docs/Tools/about:debugging)

{% endcapture %}
{% include modules/one-column.liquid,
    id: ""
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### Addon Debugging Window

Debug your browser extensions with this version of the standard Firefox developer toolbox. With Addon Debugging Window you get access to a [console](https://developer.mozilla.org/docs/Tools/Browser_Console), [debugger](https://developer.mozilla.org/docs/Tools/Debugger), [scratchpad](https://developer.mozilla.org/docs/Tools/Scratchpad), [page inspector](https://developer.mozilla.org/docs/Tools/Page_Inspector), [style editor](https://developer.mozilla.org/docs/Tools/Style_Editor), [network monitor](https://developer.mozilla.org/docs/Tools/Network_Monitor), [performance analyzer](https://developer.mozilla.org/docs/Tools/Profiler), [storage inspector](https://developer.mozilla.org/docs/Tools/Storage_Inspector), and [accessibility inspector](https://developer.mozilla.org/docs/Tools/Accessibility_inspector).

![Addon Debugging Window](/assets/img/documentation/develop/Addon_Debugging_Window.png)

To get started, enable Browser Toolbox then open `about:debugging` and click debug next to the extension you want to debug.

[Get started](https://developer.mozilla.org/docs/Tools/Browser_Toolbox#Enabling_the_Browser_Toolbox)

{% endcapture %}
{% capture aside %}

##### Use during:

- Debugging

##### Resources

- [MDN page](https://developer.mozilla.org/docs/Tools/Browser_Toolbox)

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

</section>

<section id="translation-tools" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Translation tools

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### Web Extension Translator

A tool for creating and managing `_locales` folder `messages.json` files. Import browser extensions from GitHub or a browser extension zip file, compare translations, add new locales, export updated translations, and more.

![Web Extension Translator](/assets/img/documentation/develop/Web_Extension_Translator.png)

To get started, visit the [online version](https://lusito.github.io/web-ext-translator/) or install the [npm package](https://www.npmjs.com/package/web-ext-translator) locally.

[Get started](https://github.com/Lusito/web-ext-translator/blob/master/README.md)

{% endcapture %}
{% capture aside %}

##### Use during:

- Development
- Localization

##### Resources

- [Online version](https://lusito.github.io/web-ext-translator/)
- [npm package](https://www.npmjs.com/package/web-ext-translator)
- [GitHub repo](https://github.com/Lusito/web-ext-translator)

{% endcapture %}
{% include modules/one-column.liquid,
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

<!-- Single Column Body Module With Aside -->

{% capture content %}

### Translate Web-Ext

A tool for creating and managing `_locales` folder `messages.json` files. Import previous and current source files as well as the destination file, with options to import from a URL or local file. See details of changes requiring translation, save work in progress locally, and export completed `messages.json` files.

![Translate Web-ext](/assets/img/documentation/develop/Translate_Web-ext.png)

To get started, [visit the tool online](https://morikko.github.io/translate-web-extension).

[Get started](https://morikko.github.io/translate-web-extension/help)

{% endcapture %}
{% capture aside %}

##### Use during:

- Development
- Localization

##### Resources

- [Translate Web-Ext](https://morikko.github.io/translate-web-extension)

{% endcapture %}
{% include modules/one-column.liquid,
    id: ""
    content: content
    aside: aside
%}

<!-- END: Single Column Body Module With Aside -->

</section>

<section id="tools-for-firefox-for-android" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Tools for Firefox for Android

When developing browser extensions for Firefox for Android, you can make use of:

- web-ext, to automatically load your extension to an Android device as you make code changes.
- Addon Debugging Window, to debug your extension.

For more details, see [Developing extensions for Firefox for Android](/documentation/develop/developing-extensions-for-firefox-for-android/).

{% endcapture %}
{% include modules/one-column.liquid,
    id: ""
    content: content
    aside: ""
%}

<!-- END: Single Column Body Module -->

</section>


