---
layout: sidebar
title: Submitting an add-on
permalink: /documentation/publish/submitting-an-add-on/
topic: Publish
tags: [add-ons, beginner, tutorial, webextensions]
contributors: [Rob--W, Roubo, rebloor, wbamberg, chrisdavidmills, andrewtruongmoz, wesinator]
last_updated_by: wesinator
date: 2022-10-17
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Submitting an add-on

This article walks through the process of publishing an add-on. If you just want to get started, head to the [Submit a New Add-on](https://addons.mozilla.org/developers/addon/submit/) page on AMO.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

To start, familiarize yourself with the [Add-on Policies](/documentation/publish/add-on-policies/) and [Developer Agreement](/documentation/publish/firefox-add-on-distribution-agreement/).

Next, prepare your add-on for publication by adding all its files to a ZIP archive with the extension `.zip`, `.xpi`, or `.crx`. For information on how to create your ZIP, see [Package your extension](/documentation/publish/package-your-extension/), and for details on what to include in the file, see [Anatomy of an extension](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).

::: note
The maximum file size accepted is 200 MB. If your add-on is larger than 200 MB, it will fail validation.
:::

If your add-on includes code that might be difficult to read, such as code created by minification or obfuscation, create a source code package. For more information on this requirement, see [Source Code Submission](/documentation/publish/source-code-submission/).

Create your developer account. On [addons.mozilla.org](https://addons.mozilla.org) (AMO):

- If you have a Firefox Account, in the page header, click **Log in** and log in with your Firefox Account. This connects your account with AMO.
- If you don't have a Firefox Account, in the page header, click **Register**.

Go to [Add-ons Developer Hub](https://addons.mozilla.org/developers/) and click **Submit Your First Add-on** or **Submit a New Add-on**. You reach the following page:

<img src="/assets/img/publish/newstepone.png" style="box-shadow:0 0 0.5em gray;" />

Choose:

- **On this site**, if you want your add-on listed on AMO. <br/> Click **Continue** and follow the [Listing on AMO](#listing-on-amo) guide.
- **On your own**, if you plan to distribute the add-on yourself and don't want it listed on AMO. <br/> Click **Continue** and follow the [Self-distribution guide](#self-distribution) guide.

{% endcapture %}
{% include modules/column-w-toc.liquid,
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

4. If your add-on passes all the checks, you receive this message: <br/><br/> <img src="/assets/img/publish/uploadsuccess.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" />

   You may receive a message that you only have warnings. It's advisable to address these warnings, particularly those flagged as security or privacy issues, as they may result in your add-on failing review. However, you can continue with the submission.
   Otherwise, you receive a message similar to this: <br/><br/> <img src="/assets/img/publish/errorsubmit.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" /> <br/>
   The message informs you of what failed. You cannot continue. Address these issues and return to step 1.

5. Select the add-on's compatible platform(s).

6. Click **Continue**.

7. Indicate whether you need to provide your source code. <br/><br/> <img src="/assets/img/publish/Submit_add_on_source_code.png" style="box-shadow:0px 0px 0.5em gray;" />

   If you select **Yes**, a section displays describing what you need to submit. Click **Browse** and locate and upload your source code package. See [Source code submission](/documentation/publish/source-code-submission/) for more information.

8. Click **Continue**.
9. The Describe Add-on page displays. <br/><br/> <img src="/assets/img/publish/Submit_add_on_describe_add_on.png" style="box-shadow:0px 0px 0.5em gray;" alt="Submit an add-on page"/> <br/>
   Provide the following:
   - **Name**: your add-on's name.
   - **Add-on URL**: the URL for your add-on on AMO. A URL is automatically assigned based on your add-on's name. To change this, click **Edit**. The URL must be unique. You are warned if another add-on is using your chosen URL, and you must enter a different one.
   - **Summary**: a useful and descriptive short summary of your add-on.
   - **Description**: a longer description that provides users with details of the extensin's features and functionality.
   - **This add-on is experimental**: your add-on is experimental or otherwise not ready for general use. The add-on will be listed but with reduced visibility. You can remove this flag when your add-on is ready for general use.
   - **This add-on requires payment, non-free services or software, or additional hardware**: indicate if your add-on requires users to make an additional purchase for it to work fully.
   - **Select up to 2 Firefox categories for this add-on**: select categories that describe your add-on.
   - **Select up to 2 Firefox for Android categories for this add-on**: select categories that describe your add-on.
   - **Support email** and **Support website**: an email address and website where users can get in touch when they have questions, issues, or compliments.
   - **License**: select the appropriate license for your add-on. Click **Details** to learn more about each license.
   - **This add-on has a privacy policy**: if any data is being transmitted from the user’s device, a privacy policy explaining what is being sent and how it’s used is required. Check this box and provide the privacy policy.
   - **Notes for Reviewers**: information to assist the AMO reviewer, such as log in details for a dummy account, source code information, or similar.

9. Click **Submit Version**

10. The Version Submitted page displays. You also receive an email confirmation. <br/><br/> <img src="/assets/img/publish/Submit_add_on_version_submitted.png" style="box-shadow:0 0 0.5em gray;" /> <br/>

Your add-on is published and available on AMO for users to discover and install. Note, however, that your add-on may be subject to further review. If it is, you receive notification of the outcome of the review later.

::: note
When you're ready to release a new version of your add-on, update it by visiting the add-on's page on [addons.mozilla.org](https://addons.mozilla.org) and uploading the new version. You must update it on the add-on's page so AMO recognizes it as an update to an add-on and not a new one.
:::

Learn how to make your add-on listing appealing with these [tips](/documentation/develop/create-an-appealing-listing/).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "listing-on-amo"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Self-distribution

::: note
If you want Firefox to handle updates to your add-on, remember to include the [`browser_specific_settings`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in your `manifest.json` with the `update_url` attribute set to point to an [update manifest file](https://developer.mozilla.org/Add-ons/Updates).
:::

1. The Upload Version page displays. <br/><br/> ![Submit an add-on page](/assets/img/publish/Submit_add_on_before_upload.png)

2. Click **Select a file**, select and upload your add-on.
3. The validator checks the add-on for issues and the page updates. <br/><br/> <img src="/assets/img/publish/Submit_add_on_after_upload.png" style="box-shadow:0 0 0.5em gray;" />
4. If your add-on passes all the checks, you receive this message: <br/><br/> <img src="/assets/img/publish/uploadsuccess.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" />

   You may receive a message that you only have warnings. It's advisable to address these warnings, particularly those flagged as security or privacy issues, as they may result in your add-on failing review. However, you can continue with the submission.
   Otherwise, you receive a message similar to this: <br/><br/> <img src="/assets/img/publish/errorsubmit.png" style="box-shadow:0px 0px 0.5em gray; height:50px; width:500px;" /> <br/>
   The message informs you of what failed. You cannot continue. Address the issues and return to step 1.

5. Select the add-on's compatible platform(s).
6. Click **Continue**.
7. Indicate whether you need to provide your source code. <br/><br/> <img src="/assets/img/publish/Submit_add_on_source_code.png" style="box-shadow:0px 0px 0.5em gray;" />

    If you select **Yes**, a section displays describing what you need to submit. Click **Browse** and locate and upload your source code package. See [Source code submission](/documentation/publish/source-code-submission/) for more information.

8. Click **Continue**.
8. The Version Signature Pending page displays. <br/><br/> <img src="/assets/img/publish/Submit_add_version_signature_pending.png" style="box-shadow:0px 0px 0.5em gray;" />
10. Click **Go to My Submissions**.
11. You receive an email when your extension has been signed. 
12. Follow the link in the email or open your extension from My Add-ons and, under the latest version details, click  **View All**. <br/><br/> <img src="/assets/img/publish/view_all_versions.png
" style="box-shadow:0px 0px 0.5em gray;" />
13. Select the version you uploaded and, on the version page, click the file link to download the signed copy of your add-on. <br/><br/> <img src="/assets/img/publish/signed_file.png
" style="box-shadow:0px 0px 0.5em gray;" />

You can now distribute your add-on. Note, however, that your add-on may be subject to further review. If it is, you receive notification of the outcome of the review later.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "self-distribution"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Get help

For resources that can help now you've published an add-on and details of how to get help if you encounter issues, check out [Resources for publishers](/documentation/manage/resources-for-publishers/).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "get-help"
  content: content
%}

<!-- END: Single Column Body Module -->


