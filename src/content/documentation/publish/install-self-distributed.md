---
layout: sidebar
title: Installing self-distributed extensions
permalink: /documentation/publish/install-self-distributed/
topic: Publish
tags: [add-on, distribution, testing, guide, installation]
contributors: [caitmuenster, irenesmith, jwilk, hellosct1, gray_-_wolf, luanmm, rebloor]
last_updated_by: rebloor
date: 2025-03-31
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Installing self-distributed extensions

You can make a self-distributed extension available as a [web download](/documentation/publish/self-distribution/#options) that is installed automatically into desktop Firefox. To install self-distributed extensions downloaded in Firefox for Android or distributed in another way, you need to provide instructions for installing the extension from a file.

::: note
If you use self-distribution for a beta version of a listed extension, Firefox doesn’t automatically update the beta version when you sign a new beta version on AMO. For more information on delivering beta updates, see [Distribute pre-release versions](/documentation/publish/distribute-pre-release-versions/).
:::

Automatic compatibility checks are performed for extensions installed from a file.

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Preparing your add-on

To prepare your add-on for installation from file:

1. Include an ID in the extension’s `manifest.json` file, replacing **@your-addon-id** with a suitable ID for your add-on:

<!-- Syntax Highlighting -->
```json
"browser_specific_settings": {
  "gecko": {
    "id": "@your-addon-id"
  }
}
```
<!-- END: Syntax Highlighting -->

An email address style ID is recommended.

2. Sign the add-on on [addons.mozilla.org](https://addons.mozilla.org) (AMO). Depending on how you want to make your add-on available, you can use either the unlisted (if you are distributing the add-on exclusively) or listed options. For more details, see [Signing and distributing your add-on](/documentation/publish/signing-and-distribution-overview/).

{% endcapture %}
{% include modules/column-w-toc.liquid,
	id: "preparing-your-addon"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Install add-on from file on a computer

To install an add-on from file in desktop Firefox, send the user the signed add-on with these instructions:

1. Save the add-on file on your computer.

2. In Firefox, open **Add-ons and themes**.

3. From the settings cog, open **Install Add-on From File**.

   ![Add-ons Manager setting cog](/assets/img/documentation/publish/install-addon-from-file.png)

4. Browse to and open the saved add-on file.

5. When prompted, click **Add**.

   ![add add-on confirmation](/assets/img/documentation/publish/add_add_on_confirmation.png)

6. The add-on now appears in the Add-on Manager’s list of installed add-ons and is ready to use.

   ![add-on appears in add-ons manager](/assets/img/documentation/publish/add_on_added.png)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "install-addon-from-file"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Install add-on from file on Android

To install an extension in Firefox for Android from file, make the extension available as a web download or send the user the signed extension and provide them with these instructions:

1. Download or save the extension file to your device.

2. In Firefox, open **Settings**, then **About Firefox**.

3. Tap the Firefox logo five times in quick succession. This unlocks hidden menu items.

4. Open **Settings** and then **Install Extension from File**.

5. Browse to and open the saved extension file.

6. When prompted, click **Add**.

7. The extension appears in the **Extension** list of installed extensions and is ready to use.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "install-addon-from-file-android"
  content: content
%}

<!-- END: Single Column Body Module -->
