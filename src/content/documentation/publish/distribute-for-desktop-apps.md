---
layout: sidebar
title: Add-ons for desktop apps
permalink: /documentation/publish/distribute-for-desktop-apps/
topic: Publish
tags: [add-on, distribution, apps, desktop, guide, installation]
contributors: [SphinxKnight, irenesmith, rebloor, ani-sha]
last_updated_by: ani-sha
date: 2020-03-20 22:38:00
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

## Add-ons for desktop apps

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

::: note alert
Starting with Firefox 74, it is no longer be possible to have an extension be automatically installed as part of another application install. See the [Add-ons Blog](https://blog.mozilla.org/addons/2020/03/10/support-for-extension-sideloading-has-ended/) for more information.
:::

If you have developed an add-on to complement a desktop application, you will need to provide a way for users to install your extension. You can direct the user to install the add-on from your website or list it on [addons.mozilla.org (AMO)](https://addons.mozilla.org)

Of these options, directing the user to install from AMO is recommended. It avoids any issues with the installation process; the user will not get an interstitial messages during the installation of the add-on, find the add-on installed but disabled, or find that the add-on was not installed.

If you would like to direct users to install the add-on from your website, please read this article on [self-distribution](/documentation/publish/submitting-an-add-on/#self-distribution) to learn how to prepare the `.xpi` file for web installs.

Enterprise administrators and people who distribute their own builds of Firefox (such as some Linux and Selenium distributions) will be able to continue to deploy extensions to users. Enterprise administrators can do this via [policies](https://github.com/mozilla/policy-templates#extensionsettings). Additionally, Firefox Extended Support Release (ESR) will continue to support sideloading as an extension installation method.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "what-cant-you-do"
  content: content
%}

<!-- END: Single Column Body Module -->


