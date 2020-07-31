---
layout: sidebar
title: Submitting an add-on
permalink: /documentation/publish/submitting-an-add-on/
topic: Publish
tags: [add-ons, beginner, tutorial, webextensions]
contributors: [Roubo, rebloor, wbamberg, chrisdavidmills, andrewtruongmoz]
last_updated_by: Roubo
date: 2019-05-17 13:58:25
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Submitting an add-on

This article walks through the process of publishing an add-on. If you just want to get started, head to the [Submit a New Add-on](https://addons.mozilla.org/developers/addon/submit/) page on AMO.

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

To start, familiarize yourself with the [Add-on Policies](/documentation/publish/add-on-policies/) and [Developer Agreement](/documentation/publish/firefox-add-on-distribution-agreement/).

Next, prepare your add-on for publication by adding all its files to a ZIP archive with the extension .zip, .xpi, .crx, or .xml. For information on how to create your ZIP, see [Package your extension](/documentation/publish/package-your-extension/), and for details on what to include in the file, see [Anatomy of an extension](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).

::: note
The maximum file size accepted is 200 MB. If your add-on is larger than 200 MB, it will fail validation.
:::

If your add-on includes code that might be difficult to read, such as code created by minification or obfuscation, create a source code package. For more information on this requirement, see [Source Code Submission](/documentation/publish/source-code-submission/).

Create your developer account on [addons.mozilla.org](https://addons.mozilla.org) (AMO):

- If you have a Firefox Account, connect it with AMO: visit AMO, in the page header click **Log in**, then log in with your Firefox Account.
- If you don't have a Firefox Account: visit AMO and, in the page header, click **Register**.

Go to the [Add-ons Developer Hub](https://addons.mozilla.org/developers/) and click **Submit Your First Add-on** or **Submit a New Add-on**. You'll reach the following page:

<img src="/assets/img/publish/newstepone.png" style="box-shadow:0 0 0.5em gray;" />

Choose:

- **On this site**, if you want your add-on listed on AMO. <br/> Click **Continue** and follow the [Listing on AMO](#listing-on-amo) guide to find out how.
- **On your own**, if you plan to distribute the add-on yourself and don't want it listed on AMO. <br/> Click **Continue** and follow the [Self-distribution guide](#self-distribution) to find out how.

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "transfer-ownership"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->
<!-- Single Column Body Module -->

{% capture content %}

## Listing on AMO

1. The Upload Version page displays. <br/><br/> ![Submit an add-on page](/assets/img/publish/Submit_add_on_before_upload.png)

2. Click **Select a file**, select and upload your add-on.

3. The validator checks the add-on for issues and the page updates. <br/><br/> <img src="/assets/img/publish/Submit_add_on_after_upload.png" style="box-shadow:0 0 0.5em gray;" />

4. If your add-on passes all the checks, you receive the following message: <br/><br/> <img src="/assets/img/publish/uploadsuccess.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" />

   You may receive a message that you only have warnings. It's advisable to address these warnings, particularly those flagged as security or privacy issues, as they may result in your add-on failing review. However, you can continue with the submission.
   Otherwise, you receive a message similar to this: <br/><br/> <img src="/assets/img/publish/errorsubmit.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" /> <br/>
   The message informs you of what failed. You'll not be able to continue. Address the issues and return to step 1.

5. If you need to provide source code, click **Browse** and locate and upload your source code package.
6. Select the add-on's compatible platform(s).
7. Click **Continue**.
8. The Describe Add-on page displays. <br/> ![Submit an add-on page](/assets/img/publish/Submit_add_on_describe_add_on.png) <br/>
   Provide the following:
   - Name: your add-on's name.
   - Add-on URL: the URL for your add-on on AMO. A URL will be automatically assigned based on your add-on's name, to change this, click Edit. Note: The URL must be unique, you'll be warned if another add-on is using your chosen URL and you'll have to enter a different one before you can set the URL.
   - Summary: a useful and descriptive summary of your add-on.
   - This add-on is experimental: your add-on is experimental or otherwise not ready for general use. The add-on will be listed but with reduced visibility. You can remove this flag when your add-on is ready for general use.
   - This add-on requires payment, non-free services or software, or additional hardware: indicate if your add-on requires users to make an additional purchase for it to work fully.
   - Select up to 2 Firefox categories for this add-on: select categories that describe your add-on.
   - Select up to 2 Firefox for Android categories for this add-on: select categories that describe your add-on.
   - Support email and website: an email address and website where users can get in touch when they have questions, issues, or compliments.
   - License: select the appropriate license for your add-on. Click Details to learn more about each license.
   - This add-on has a privacy policy: if any data is being transmitted from the user’s device, a privacy policy is required explaining what is being sent and how it’s used. Check this box and provide the privacy policy.
   - Notes to Reviewer: information that will assist the AMO reviewer, such as log in details for a dummy account, source code information, or similar.
9. Click **Submit Version**
10. The Version Submitted page displays. You'll also receive an email confirmation. <br/><br/> <img src="/assets/img/publish/Submit_add_on_version_submitted.png" style="box-shadow:0 0 0.5em gray;" /> <br/>

Your add-on is published and available on AMO for users to discover and install. Note, however, that your add-on may still be subject to further review, if it is you'll receive notification of the outcome of the review later.

::: note
When you're ready to release a new version of your add-on, update it by visiting the add-on's page on [addons.mozilla.org](https://addons.mozilla.org) and uploading the new version. You must update it on the add-on's page, so AMO recognizes it as an update to an existing add-on and not a new one.
:::

Learn how to make your add-on listing appealing with these [tips](/documentation/develop/create-an-appealing-listing/).

{% endcapture %}
{% include modules/one-column.liquid
  id: "listing-on-amo"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Self-distribution

::: note
If you want Firefox to handle updates to your add-on, remember to include the [`browser_specific_settings`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in your manifest.json with the `update_url` attribute set to point to an [update manifest file](https://developer.mozilla.org/Add-ons/Updates).
:::

1. The Upload Version page displays. <br/><br/> ![Submit an add-on page](/assets/img/publish/Submit_add_on_before_upload.png)

2. Click **Select a file**, select and upload your add-on.
3. The validator checks the add-on for issues and the page updates. <br/><br/> <img src="/assets/img/publish/Submit_add_on_after_upload.png" style="box-shadow:0 0 0.5em gray;" />
4. If your add-on passes all the checks, you receive the following message: <br/><br/> <img src="/assets/img/publish/uploadsuccess.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" />

   You may receive a message that you only have warnings. It's advisable to address these warnings, particularly those flagged as security or privacy issues, as they may result in your add-on failing review. However, you can continue with the submission.
   Otherwise, you receive a message similar to this: <br/><br/> <img src="/assets/img/publish/errorsubmit.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" /> <br/>
   The message informs you of what failed. You'll not be able to continue. Address the issues and return to step 1.

5. If you need to provide source code, click **Browse** and locate and upload your source code package.
6. Select the add-on's compatible platform(s).
7. Click **Sign Add-on**.
8. The Version Signed page displays. You'll also receive an email confirmation. <br/><br/> <img src="/assets/img/publish/Submit_add_version_signed.png" style="box-shadow:0 0 0.5em gray;" />
9. Click **Download** to obtain a signed copy of your add-on.

You can now distribute your add-on. Note, however, that your add-on may still be subject to further review, if it is you'll receive notification of the outcome of the review later.

{% endcapture %}
{% include modules/one-column.liquid
  id: "self-distribution"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Get help

For resources that can help now you've published an add-on and details of how to get help if you encounter issues, check out [Resources for publishers](/documentation/manage/resources-for-publishers/).

{% endcapture %}
{% include modules/one-column.liquid
  id: "get-help"
  content: content
%}

<!-- END: Single Column Body Module -->


