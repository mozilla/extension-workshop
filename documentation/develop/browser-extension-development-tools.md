---
layout: sidebar
title: Browser Extension Development Tools
permalink: /documentation/develop/browser-extension-development-tools/
published: false
topic: Develop
tags:
  [
    'Coding',
    'Debugging',
    'Development',
    'Guide',
    'Scaffold',
    'Testing',
    'Tools',
    'Translation',
    'WebExtensions',
  ]
contributors: [rebloor, mdnwebdocs-bot, hellosct1]
author: rebloor
date: 2019-03-21 12:47:53
---

<!-- Page Hero Banner -->

<section class="page-hero">
<div class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="page-hero-description" markdown="1">
<p class="section-title"><small>{{ page.topic }}</small></p>

# Browser Extension Development Tools

Mozilla and the Firefox browser extension developer community have created a range of tools that can simplify and speed up your browser extension development. This page provides a summary of those tools including details on the features each offers, how to get started, where in the development cycle it fits, and links to useful resources.

</div>
<div class="page-hero-cta"></div>
</div>
</article>
</div>
</section>

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Boilerplating tools

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<section id="boilerplating-tools">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Extension scaffolding builder

Create a scaffold for your browser extensions. Provide the tool with extension name, description, and version. Then specify whether you want background and content scripts, browser and page actions, and extension options. create-web-ext then delivers a boilerplate project as a zip download, containing all the folders and files you need to start development.

![Extension Scaffolding Builder]({% asset "documentation/develop/Extension_scaffolding_builder.png" @optim @path %})

To get started, [visit the tool online](http://webextensions.tech/) or [install it locally from npm](https://www.npmjs.com/package/create-web-ext).

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Development

##### Resources

- [create-web-ext online (webextensions.tech)](http://webextensions.tech/)
- [create-web-ext on npm](https://www.npmjs.com/package/create-web-ext)
- [GitHub project](https://github.com/web-ext-labs/create-web-ext)
- [GitHub UI project](https://github.com/web-ext-labs/ui-tool)

</aside>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### WebExtensions Example

The webextensions-examples GitHub repository is a collection browser extension examples. Each example is a complete working extension that you can install and run in Firefox. You are free to use these examples as the starting point for your browser extensions, as they are made available under the [Mozilla Public License 2.0.](https://www.mozilla.org/en-US/MPL/2.0/)

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Development

##### Resources

- [GitHub project](https://github.com/mdn/webextensions-examples)
- [Examples page on MDN](https://developer.mozilla.org/Add-ons/WebExtensions/Examples)

</aside>
</section>

<!-- END: Single Column Body Module -->

</section>

<section id="coding-tools">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Coding tools

If you're looking for information about text editor in which to write your code, see the [Common questions](https://developer.mozilla.org/en-US/docs/Learn/Common_questions) article [Available text editors](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Available_text_editors).

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### web-ext

Speed up browser extension development and make development tasks easier with this command line tool. This tool helps:

- automatically reload and restart your extension in Firefox, as you make code changes.
- launch your extension to any installed version of Firefox, including into Firefox for Android.
- check your extension’s manifest and code for common errors.
- package your extension ready for submission to AMO.
- sign your extension for self-hosted distribution.

To get started with web-ext, install it with the [nodejs/npm](https://nodejs.org/) tool.

[Get started](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Development
- Testing
- Publication

##### Resources

- [Command reference](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/web-ext_command_reference)
- [GitHub project](https://github.com/mozilla/web-ext)

</aside>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### web-ext-webpack-plugin

Use this plug-in to simplify the development of extensions built using webpack. The plug-in does this by integrating the web-ext run and lint commands into the webpack process, so that the extension is linted and reloaded once webpack build completes.

To get started, add the plug-in to your webpack.config.js.

[Get started](https://github.com/hiikezoe/web-ext-webpack-plugin/blob/master/README.md)

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Development

##### Resources

- [Demo screencast](https://youtu.be/Cx_0QoY27tg)
- [GitHub repo](https://github.com/hiikezoe/web-ext-webpack-plugin)
- [Example](https://github.com/birtles/rikaichamp/)

</aside>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### WebExtension browser API Polyfill

When creating extensions you want to work in Firefox and Chrome, this library enables you to use the Firefox Promise-based APIs and have them run on Google Chrome with few, if any, changes.

To get started, install using npm and load the library into the contexts where browser APIs are accessed.

[Get started](https://github.com/mozilla/webextension-polyfill/#installation)

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Development

##### Resources

- [GitHub project](https://github.com/mozilla/webextension-polyfill/)

</aside>
</section>

<!-- END: Single Column Body Module -->

</section>

<section id="testing-and-debugging-tools">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Testing and debugging tools

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### about:debugging

This Firefox page enables you to manually install add-ons into Firefox for testing and to kickoff debugging, using the Addon Debugging Window, for any browser extension installed in Firefox.

![About Debugging]({% asset "documentation/develop/about-debugging.png" @optim @path %})

To get started, type about:debugging in the Firefox address bar.

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Testing and debugging

##### Resources

- [MDN page](https://developer.mozilla.org/en-US/docs/Tools/about:debugging)

</aside>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Addon Debugging Window

Debug your browser extensions with this version of the standard Firefox developer toolbox. With Addon Debugging Window you get access to a [console](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console), [debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger), [scratchpad](https://developer.mozilla.org/en-US/docs/Tools/Scratchpad), [page inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector), [style editor](https://developer.mozilla.org/en-US/docs/Tools/Style_Editor), [network monitor](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor), [performance analyzer](https://developer.mozilla.org/en-US/docs/Tools/Profiler), [storage inspector](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector), and [accessibility inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector).

![Addon Debugging Window]({% asset "documentation/develop/Addon_Debugging_Window.png" @optim @path %})

To get started, enable Browser Toolbox then open about:debugging and click debug next to the extension you want to debug.

[Get started](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox#Enabling_the_Browser_Toolbox)

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Debugging

##### Resources

- [MDN page](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox)

</aside>
</section>

<!-- END: Single Column Body Module -->

</section>

<section id="translation-tools">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Translation tools

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Web Extension Translator

A tool for creating and managing `_locales` folder `messages.json` files. Import browser extensions from GitHub or a browser extension zip file, compare translations, add new locales, export updated translations, and more.

![Web Extension Translator]({% asset "documentation/develop/Web_Extension_Translator.png" @optim @path %})

To get started, visit the [online version](https://lusito.github.io/web-ext-translator/) or install the [npm package](https://www.npmjs.com/package/web-ext-translator) locally.

[Get started](https://github.com/Lusito/web-ext-translator/blob/master/README.md)

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Development
- Localization

##### Resources

- [Online version](https://lusito.github.io/web-ext-translator/)
- [npm package](https://www.npmjs.com/package/web-ext-translator)
- [GitHub repo](https://github.com/Lusito/web-ext-translator)

</aside>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Translate Web-Ext

A tool for creating and managing `_locales` folder `messages.json` files. Import previous and current source files as well as the destination file, with options to import from a URL or local file. See details of changes requiring translation, save work in progress locally, and export completed `messages.json` files.

![Translate Web-ext]({% asset "documentation/develop/Translate_Web-ext.png" @optim @path %})

To get started, [visit the tool online](https://morikko.github.io/translate-web-extension).

[Get started](https://morikko.github.io/translate-web-extension/help)

</div>
</article>
<aside class="module-aside tile" markdown="1">

##### Use during:

- Development
- Localization

##### Resources

- [Translate Web-Ext](https://morikko.github.io/translate-web-extension)

</aside>
</section>

<!-- END: Single Column Body Module -->

</section>

<section id="tools-for-firefox-for-android">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Tools for Firefox for Android

When developing browser extensions for Firefox for Android, you can make use of:

- web-ext, to automatically load your extension to an Android device as you make code changes.
- Addon Debugging Window, to debug your extension.

For more details, see [Developing extensions for Firefox for Android](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android).

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

</section>

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->