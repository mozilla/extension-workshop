---
layout: sidebar
title: Add-ons for desktop apps
permalink: /documentation/publish/distribute-for-desktop-apps/
published: true
topic: Publish
tags: [add-on, distribution, apps, desktop, guide, installation]
contributors: [SphinxKnight, irenesmith, rebloor]
last_updated_by: hellosct1
date: 2019-07-30 02:28:37
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

## Add-ons for desktop apps

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

If you have developed an add-on to complement a desktop application, there are two ways you can install the add-on:

- Direct the user to install the add-on from the web, either from [addons.mozilla.org (AMO)](https://addons.mozilla.org) or your own site.
- Sideloading via standard extension folders or the Windows registry.

Of these options, directing the user to install from AMO is recommended. The reasons for recommending this option are:

- It avoids any issues with the installation process; the user will not get an interstitial messages during the installation of the add-on, find the add-on installed but disabled, or find that the add-on was not installed.
- If you update the add-on, the new version will be automatically installed.

By contrast, sideloading using the [standard extension folders](/documentation/publish/distribute-sideloading/#standard-extension-folders) or [Windows registry](/documentation/enterprise/enterprise-distribution/#installation-using-windows-registry) will require your desktop app to install any update to the add-on. As noted in these articles, these methods are deprecated and won't work in future versions of Firefox.

{% endcapture %}
{% include modules/one-column.html
  id="what-cant-you-do"
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
