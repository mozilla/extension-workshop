---
layout: sidebar
title: Choosing a Firefox version for extension development
permalink: /documentation/develop/choosing-a-firefox-version-for-extension-development/
topic: Develop
tags: [add-ons, development, extensions, guide, tools]
contributors: [mdnwebdocs-bot, rebloor]
last_updated_by: mdnwebdocs-bot
date: 2019-03-18 16:36:22
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Choose a Firefox version for web extension development

Firefox provides several versions that offer different capabilities for developing web extensions. This article provides an overview of the differences among these versions of Firefox and recommends how to use each in the development lifecycle.

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="firefox-editions" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.liquid -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Firefox editions

This table summarizes the edition information, features for extension development, and provides a recommendation for each editions use in extension development.

<!-- Table -->

<div class="table-wrapper table-scroll">

| Edition                                                                         | Version      | Stable | Tools for extension development | Installs unsigned extensions | Recommended extension development use           |
| ------------------------------------------------------------------------------- | ------------ | ------ | ------------------------------- | ---------------------------- | ----------------------------------------------- |
| [Release](https://www.mozilla.org/firefox/)                                     | Current      | Yes    | Yes                             | No                           | Regression testing, User alpha and beta testing |
| [Beta](https://beta.mozilla.org/)                                               | Current +1   | Yes    | Yes                             | No                           | Regression testing, User alpha and beta testing |
| [Developer Edition](https://www.mozilla.org/firefox/channel/desktop/#developer) | Current +1   | Yes    | Yes                             | Yes                          | Extension development                           |
| [Nightly](https://nightly.mozilla.org/)                                         | Current +2   | No     | Yes                             | Yes                          | Early access to the latest WebExtension API     |
| [ESR](https://www.mozilla.org/firefox/organizations/)                           | Current - >1 | Yes    | Yes                             | Yes                          | Extension development within enterprises        |

</div>

<!-- END: Table -->

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="firefox-version-and-their-web-extension-development-capabilities" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Firefox version and their web extension development capabilities

### Release

This is the version of Firefox that most people use, it’s the version offered when someone visits the [main Firefox download page][https://www.mozilla.org/firefox/].

You load extensions under development into this version of Firefox using [`about:debugging`][https://developer.mozilla.org/docs/Tools/about:debugging] or [`web-ext`][ /documentation/develop/getting-started-with-web-ext/] and have access to the [addon debugging window][https://developer.mozilla.org/docs/Tools/Browser_Toolbox]. However, you cannot install unsigned extensions, which limits your ability to test features such as restart behavior, permission prompts, and upgrades.

Development of extensions for Firefox for Android is fully supported.

Suggested development use: You may want to install and test a signed copy of your extension into the release version to conduct final regression testing. You can also distribute signed copies of your extension to other people to assist with alpha or beta testing.

[Download][https://www.mozilla.org/firefox/]

### Beta

This version of Firefox is generally used by people interested in taking advantage of the features due in the next Release version of Firefox.

You load extensions under development into this version of Firefox using [`about:debugging`][https://developer.mozilla.org/docs/Tools/about:debugging] or [`web-ext`][ /documentation/develop/getting-started-with-web-ext/] and have access to the [addon debugging window][https://developer.mozilla.org/docs/Tools/Browser_Toolbox]. However, you cannot install unsigned extensions, which limits your ability to test features such as restart behavior, permission prompts, and upgrades.

Development of extensions for Firefox for Android is fully supported.

Suggested development use: You may want to install and test a signed copy of your extension into Beta to conduct regression testing. Such testing will provide you with some certainty that your extension will continue to function correctly in the next version of Firefox. You can also distribute signed copies of your extension to other people to assist with alpha or beta testing.

[Download](https://beta.mozilla.org/)

### Developer Edition

This version of Firefox is based on Firefox Beta with additional features designed to assist with web and web extension development.

You load extensions under development into this version of Firefox using [`about:debugging`][https://developer.mozilla.org/docs/Tools/about:debugging] or [`web-ext`][ /documentation/develop/getting-started-with-web-ext/] and have access to the [addon debugging window][https://developer.mozilla.org/docs/Tools/Browser_Toolbox]. You can also install unsigned extensions, after adjusting or setting certain `about:config` properties (generally fewer changes than you need to achieve the same tasks in Nightly). This enables you to test features such as restart behavior, permission prompts, and upgrades.

Development of extensions for Firefox for Android is fully supported.

Suggested development use: Use Developer Edition as your primary web extension development and testing platform.

[Download](https://www.mozilla.org/firefox/channel/desktop/#developer)

### Nightly

This version of Firefox provides a build that is updated nightly with the latest in development features for the future release of Firefox. It is generally used by people interested in experiencing the very latest features and providing feedback when they find issues.

You load extensions under development into this version of Firefox using [`about:debugging`][https://developer.mozilla.org/docs/Tools/about:debugging] or [`web-ext`][ /documentation/develop/getting-started-with-web-ext/] and have access to the [addon debugging window][https://developer.mozilla.org/docs/Tools/Browser_Toolbox]. You can also install unsigned extensions, after adjusting or setting certain `about:config` properties. This enables you to test features such as restart behavior, permission prompts, and upgrades.

Development of extensions for Firefox for Android is fully supported.

Suggested development use: Nightly provides a preview of future Firefox features, including WebExtension APIs, that are under development. Feature stability isn’t guaranteed, therefore, Nightly isn’t recommended as your primary web extension development platform. You may, however, wish to use Nightly where you want to take advantage of forthcoming features or test to give yourself the longest forward view of the compatibility of your extension with Firefox.

[Download](https://nightly.mozilla.org/)

### ESR

The Extended Support Release (ESR) version of Firefox has features for IT professionals to configure and deploy Firefox in their organization. It also provides enterprises with a feature stable version of Firefox for longer than the normal release cycle provides. So, at the time of writing, the release version of Firefox was 65 (with Beta on 66 and Nightly on 67) the ESR version was 60.

You load extensions under development into this version of Firefox using [`about:debugging`][https://developer.mozilla.org/docs/Tools/about:debugging] or [`web-ext`][ /documentation/develop/getting-started-with-web-ext/] and have access to the [addon debugging window][https://developer.mozilla.org/docs/Tools/Browser_Toolbox]. You can also install unsigned extensions, after adjusting or setting certain `about:config` properties (this feature is provided so enterprises can install extensions they want to keep private and don’t want to submit to addons.mozilla.org for signing).

Development of extensions for Firefox for Android is fully supported.

Suggested development use: Use ESR as your primary web extension development and testing platform when developing extensions for an enterprise and you want to confirm that your extension’s feature set is compatible with the ESR version.

[Download](https://www.mozilla.org/firefox/organizations/)

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

[https://www.mozilla.org/firefox/]:https://www.mozilla.org/firefox/
[https://developer.mozilla.org/docs/Tools/Browser_Toolbox]:https://developer.mozilla.org/docs/Tools/Browser_Toolbox
[https://developer.mozilla.org/docs/Tools/about:debugging]:https://developer.mozilla.org/docs/Tools/about:debugging
[ /documentation/develop/getting-started-with-web-ext/]: /documentation/develop/getting-started-with-web-ext/