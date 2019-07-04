---
layout: sidebar
title: Develop
permalink: /documentation/develop/
published: false
tags: []
contributors: [caitmuenster]
author: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

<section class="overview-hero" style="background-image: url({% asset "develop-overview-hero-bg.jpg" @optim @path %});">
<div class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="overview-hero-description" markdown="1">

# Bring your extension to life

Support your development workflow with these straightforward tools and guides.

</div>
<div class="overview-hero-cta"></div>
</div>
</article>
</div>
</section>

<!-- END: Overview Page Hero Banner -->

<!-- Section 1: Single Column Body Module -->

<section id="firefox-tools" class="module">
<aside class="module-aside table-of-contents" markdown="1">

###### Contents

1. [Firefox Tools](#firefox-tools)
2. [User Experience](#user-experience)
3. [Firefox for Android](#firefox-for-android)
4. [Port to Firefox](#port-to-firefox)
5. [Test and debug](#test-and-debug)

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Firefox Tools

### Development tools

All you need to create extensions for Firefox is a [text editor](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Available_text_editors) and [a version of Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Choose_a_Firefox_version_for_web_extension_develop) to support your testing. Mozilla and the Firefox extension developer community have also created a number of [extension development tools](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Development_Tools) that can simplify the coding and testing of your extension.

### Chromium-based browser extensions

Get familiar with the [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) library if you’re planning on developing for both Firefox and chromium based browsers.

This enables you to switch between the different Firefox and chromium based namespaces and asynchronous call handling methods for each type of browser.

### web-ext command line tool

The web-ext tool can help you by:

- providing features to automatically reload your extension preview as the code changes
- assist with debugging
- create extension packages, and more

</div>
</article>
</section>

<!-- END: Section 1: Single Column Body Module -->

<!-- Section 2 -->

<section id="user-experience">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## User Experience

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x align-middle">
<div class="cell small-12 medium-6" markdown="1">

![Great user experiences]({% asset "documentation/develop/GreatUserExperiences_promo.jpg" @path @optim %})

</div>
<div class="cell small-12 medium-6" markdown="1">

Having an exceptional user experience is crucial to attracting, and retaining, users of your extension.

[RememBear](https://addons.mozilla.org/firefox/addon/remembear-app/) is a great example of an extension with an outstanding user experience.

</div>
</article>
</section>

<!-- END: Two Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Make a great first impression

Focus on a slick [onboarding flow](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices) that gets users up to speed with your extension quickly.

If your extension collects user data during onboarding, make sure you follow the [best practices for collecting user data consents](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Prompt_users_for_data_and_privacy_consents). And, it’s important that you [request the right permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions).

### Put your user first

Keep your users engaged and follow the [user experience best practices](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/User_experience_best_practices). And, don’t forget to [build an accessible extension](https://trello.com/c/ez7X6Qy2/129-accessibility-for-extensions), so that everyone can make use of it.

Lastly, [building a secure extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Security_best_practices) is fundamental to delivering an excellent user experience.

### Define your value proposition

Users are less likely to install an extension if they don’t understand what it does and what value it adds to their browsing experience.
Find out best practices for putting your best foot forward with your extension.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

</section>

<!-- END: Section 2 -->

<!-- Section 3 -->

<section id="firefox-for-android">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Firefox for Android

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x align-middle">
<div class="cell small-12 medium-6 medium-order-2" markdown="1">

![Moble Extensions]({% asset "documentation/develop/MobleExtensions_promo.jpg" @path @optim %})

</div>
<div class="cell small-12 medium-6" markdown="1">

### Understanding how to develop extensions for Android

To offer your extension to Firefox for Android users, you’ll need to consider some [differences between Firefox for the desktop and Android](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android).

Get started with everything you need to know about [developing for Firefox for Android](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android).

</div>
</article>
</section>

<!-- END: Two Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Creating browser experiences for Android apps

If you develop Android apps, when you want to include a browser experience in your app you can take advantage of the browser engine that underpins Firefox using the [GeckoView Extensions Android library](https://github.com/mozilla/geckoview).

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

</section>

<!-- END: Section 3 -->

<!-- Section 4 -->

<section id="port-to-firefox">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Port to Firefox

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x align-middle">
<div class="cell small-12 medium-6 medium-order-2" markdown="1">

![Chrome To Firefox Extensions]({% asset "documentation/develop/ChromeToFirefoxExtensions_promo.jpg" @path @optim %})

</div>
<div class="cell small-12 medium-6" markdown="1">

### Bring your Chrome extension to Firefox

The Firefox extension environment is highly compatible with chromium-based extension technology. Your extension might already be capable of running on Firefox, or need only a few changes.

[Test your extension’s compatibility](https://www.extensiontest.com/) and check out our [porting guide](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension) to get started.

</div>
</article>
</section>

<!-- END: Two Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Update a legacy Firefox extension

If you have a [legacy Firefox extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on), you can still find out how to get it up and running on the latest version of Firefox. Check out the porting information for the [Add-on SDK](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK) and [XUL/XPCOM](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions) based extensions.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

</section>

<!-- END: Section 4 -->

<!-- Section 5 -->

<section id="test-and-debug">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Test and debug

### Make sure your extension is running right

Test and [debug your code](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Debugging) by [temporarily installing](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) it in Firefox.

Understanding [extensions and the Add-on ID](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID) will help you test more effectively. You will also want to [test persistent and restart features](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Testing_persistent_and_restart_features) along with [permission requests](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Test_permission_requests).

You can use [web-ext](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext) to automatically install and update your extension while making coding changes.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

</section>

<!-- END: Section 5 -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

<section class="module up-next">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

###### Up Next

</div>

<!-- Tile -->

<a href="/documentation/develop/web-ext-webpack-plug-in/" class="cell auto tile tile-block-link">
<div class="block-link" markdown="1">
	
Develop

##### Web-ext Webpack plug-in

</div>
</a>

<!-- END: Tile -->

<!-- Tile -->

<a href="/documentation/develop/web-ext-command-reference" class="cell auto tile tile-block-link">
<div class="block-link" markdown="1">
	
Develop

##### Web-ext command reference

</div>
</a>

<!-- END: Tile -->

<!-- Tile -->

<a href="/documentation/develop/browser-api-polyfill" class="cell auto tile tile-block-link">
<div class="block-link" markdown="1">
	
Develop

##### Browser API Polyfill

</div>
</a>

<!-- END: Tile -->

</article>
</section>

<!-- END: Up Next -->
