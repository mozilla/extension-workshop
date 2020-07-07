---
layout: sidebar.liquid
title: Develop
permalink: /documentation/develop/
published: true
tags: []
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Bring your extension to life

Support your development workflow with these straightforward tools and guides.

{% endcapture %}
{% include modules/overview-page-hero.liquid
	content: page_hero_banner_content
	background: "develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Firefox Tools

### Development tools

All you need to create extensions for Firefox is a [text editor](https://developer.mozilla.org/docs/Learn/Common_questions/Available_text_editors) and [a version of Firefox](/documentation/develop/choosing-a-firefox-version-for-extension-development/) to support your testing. Mozilla and the Firefox extension developer community have also created a number of [extension development tools](/documentation/develop/browser-extension-development-tools/) that can simplify the coding and testing of your extension.

### Chromium-based browser extensions

Get familiar with the [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) library if you’re planning on developing for both Firefox and chromium based browsers.

This enables you to switch between the different Firefox and chromium based namespaces and asynchronous call handling methods for each type of browser.

### web-ext command line tool

The web-ext tool can help you by:

- providing features to automatically reload your extension preview as the code changes
- assist with debugging
- create extension packages, and more

{% endcapture %}
{% include modules/column-w-toc.liquid
	id: "firefox-tools"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Page section container -->

<section id="user-experience" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## User Experience

{% endcapture %}
{% include modules/one-column.liquid
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

![Great user experiences](/assets/img/documentation/develop/GreatUserExperiences_promo.jpg)

{% endcapture %}
{% capture col_2_content %}

Having an exceptional user experience is crucial to attracting, and retaining, users of your extension.

[RememBear](https://addons.mozilla.org/firefox/addon/remembear-app/) is a great example of an extension with an outstanding user experience.

{% endcapture %}
{% include modules/two-column.liquid
	col_1: col_1_content
	col_2: col_2_content
	reverse: false
%}

<!-- END: Two Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

### Make a great first impression

Focus on a slick [onboarding flow](/documentation/develop/onboard-upboard-offboard-users/) that gets users up to speed with your extension quickly.

If your extension collects user data during onboarding, make sure you follow the [best practices for collecting user data consent](/documentation/develop/best-practices-for-collecting-user-data-consents/). And, it’s important that you [request the right permissions](/documentation/develop/request-the-right-permissions/).

### Put your user first

Keep your users engaged and follow the [user experience best practices](/documentation/develop/user-experience-best-practices/). And, don’t forget to [build an accessible extension](/documentation/develop/build-an-accessible-extension/), so that everyone can make use of it.

Lastly, [building a secure extension](/documentation/develop/build-a-secure-extension/) is fundamental to delivering an excellent user experience.

### Define your value proposition

Users are less likely to install an extension if they don’t understand what it does and what value it adds to their browsing experience.
Find out best practices for putting your best foot forward with your extension.

{% endcapture %}
{% include modules/one-column.liquid
	content: content
%}

<!-- END: Single Column Body Module -->

</section>

<!-- END: Page section container -->

<!-- Page section container -->

<section id="firefox-for-android" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Firefox for Android

{% endcapture %}
{% include modules/one-column.liquid
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

![Moble Extensions](/assets/img/documentation/develop/MobleExtensions_promo.png)

{% endcapture %}
{% capture col_2_content %}

### Understanding how to develop extensions for Android

To offer your extension to Firefox for Android users, you’ll need to consider some [differences between Firefox for the desktop and Android](/documentation/develop/differences-between-desktop-and-android-extensions/).

Get started with everything you need to know about [developing for Firefox for Android](/documentation/develop/developing-extensions-for-firefox-for-android/).

{% endcapture %}
{% include modules/two-column.liquid
	col_1: col_1_content
	col_2: col_2_content
	reverse: true
%}

<!-- END: Two Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

### Creating browser experiences for Android apps

If you develop Android apps, when you want to include a browser experience in your app you can take advantage of the browser engine that underpins Firefox using the [GeckoView Extensions Android library](https://github.com/mozilla/geckoview).

{% endcapture %}
{% include modules/one-column.liquid
	content: content
%}

<!-- END: Single Column Body Module -->

</section>

<!-- END: Page section container -->

<!-- Page section container -->

<section id="port-to-firefox" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Port to Firefox

{% endcapture %}
{% include modules/one-column.liquid
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

![Chrome To Firefox Extensions](/assets/img/documentation/develop/ChromeToFirefoxExtensions_promo.png)

{% endcapture %}
{% capture col_2_content %}

### Bring your Chrome extension to Firefox

The Firefox extension environment is highly compatible with chromium-based extension technology. Your extension might already be capable of running on Firefox, or need only a few changes.

[Test your extension’s compatibility](https://www.extensiontest.com/) and check out our [porting guide](/documentation/develop/porting-a-google-chrome-extension/) to get started.

{% endcapture %}
{% include modules/two-column.liquid
	col_1: col_1_content
	col_2: col_2_content
	reverse: true
%}

<!-- END: Two Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

### Update a legacy Firefox extension

If you have a [legacy Firefox extension](/documentation/develop/porting-a-legacy-firefox-extension/), you can still find out how to get it up and running on the latest version of Firefox. Check out the porting information for the [Add-on SDK](/documentation/develop/comparison-with-the-add-on-sdk/) and [XUL/XPCOM](/documentation/develop/comparison-with-xul-xpcom-extensions/) based extensions.

{% endcapture %}
{% include modules/one-column.liquid
	content: content
%}

<!-- END: Single Column Body Module -->

</section>

<!-- END: Page section container -->

<!-- Page section container -->

<section id="test-and-debug" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Test and debug

### Make sure your extension is running right

Test and [debug your code](/documentation/develop/debugging/) by [temporarily installing](/documentation/develop/temporary-installation-in-firefox/) it in Firefox.

Understanding [extensions and the Add-on ID](/documentation/develop/extensions-and-the-add-on-id/) will help you test more effectively. You will also want to [test persistent and restart features](/documentation/develop/testing-persistent-and-restart-features/) along with [permission requests](/documentation/develop/test-permission-requests/).

You can use [web-ext](/documentation/develop/getting-started-with-web-ext/) to automatically install and update your extension while making coding changes.

{% endcapture %}
{% include modules/one-column.liquid
	content: content
%}

<!-- END: Single Column Body Module -->

</section>

<!-- END: Page section container -->

<!-- Meta Data -->

{%- include page-meta-data.liquid -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.liquid -%}

<!-- END: Up Next -->
