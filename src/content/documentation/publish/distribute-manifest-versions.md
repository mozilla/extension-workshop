---
layout: sidebar
title: Distribute Manifest V2 and V3 extensions
permalink: /documentation/publish/distribute-manifest-versions/
topic: Publish
tags: [add-ons, beginner, tutorial, webextensions]
contributors: [rebloor]
last_updated_by: rebloor
date: 2023-03-03
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Distribute Manifest V2 and V3 extensions

Learn how to distribute versions of your extension supporting Manifest V2 and V3.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

Firefox added support for Manifest Version 3 (MV3) extensions in Firefox 109, which was released to general availability January 17, 2023. Earlier versions of Firefox are only compatible with Manifest Version 2 (MV2) extensions.

It is not possible to create a version of an extension that is MV2- and MV3-compatible. Therefore, you need a way of distributing both types of extension if you need to continue supporting older clients, such as Firefox ESR. (Firefox ESR 102.x, the extended support release for enterprises – large companies and organizations – is supported until September 2023, when the ESR release moves to a version supporting MV3).

To help address the situation, AMO can distribute your MV2-compatible extension and sign an MV3-compatible version for [self-distribution](/documentation/publish/self-distribution/). Some developers use this as a form of a beta channel, though it is not officially supported as such. 

However, if you choose to remain on MV2 and wait to transition to MV3 later, you can take steps in MV2 that [move your extension closer to what is necessary for MV3](https://blog.mozilla.org/addons/2022/10/31/begin-your-mv3-migration-by-implementing-new-features-today/). As usual, if your extension depends on features only available to recent Firefox versions, specify the compatible Firefox version in the [`strict_min_version`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) field in manifest.json. Then, older Firefox extensions are not updated. A new user on an old Firefox version can install an older version of the extension using the “See all versions” link at the extension listing on AMO.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "transfer-ownership"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->
<!-- Single Column Body Module -->

{% capture content %}

## Prepare your MV3 version

To support automatic updates to newer MV3 versions, you must create and make an update manifest file available and include the file’s location in the extension’s manifest file.

See [Updating your extension](/documentation/manage/updating-your-extension/) for details about the update manifest file format and manifest change needed.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "listing-on-amo"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Get a signed MV3 version

To get a signed version of your MV3 extension:

1. On AMO, when you upload the MV3 extension version, change “Where to host version”  to “on your own”.
   ::: note
   You must change it back to “on this site” for MV2 versions, as the most recently used channel is remembered.
   :::
2. For API uploads, specify `channel=unlisted` for the self-distribution channel.

See [Self-distribution](/documentation/publish/submitting-an-add-on/#self-distribution) for more details on the process.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "listing-on-amo"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## How to distribute the MV3 version

Self-distributed versions cannot be downloaded by users directly from AMO. You must distribute the experimental XPI to users yourself, such as by a download from your website, email, etc.

See [Distributing an add-on yourself](/documentation/publish/self-distribution/) for more details on the process.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "self-distribution"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Transition your experimental MV3 version to your live version

When you want to support just MV3-compatible versions of Firefox for your extension, visit AMO and upload the MV3 version to the primary AMO listed channel (“on this site”), without the `update_url` in the [`browser_specific_settings`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest key. Then, when signed, download the XPI and distribute it to your users as you did originally. The lack of the `update_url` manifest key means users get future updates from the AMO channel.

::: note
Take care with version numbers. The version number must be higher than the earlier listed MV2 and experimental MV3 versions. Firefox only upgrades the extension if the version number is greater than the installed version.
:::

{% endcapture %}
{% include modules/one-column.liquid,
  id: "get-help"
  content: content
%}

<!-- END: Single Column Body Module -->
