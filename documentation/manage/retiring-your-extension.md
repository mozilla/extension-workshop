---
layout: sidebar
title: Retiring your extension
permalink: /documentation/manage/retiring-your-extension/
published: false
topic: Manage
tags: [manage, end-of-life]
contributors: [rebloor]
last_updated_by: rebloor
date: 2019-03-23 06:22:00
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Retiring your extension

There may be occasions where you want to retire one of your extensions. This article suggests the steps you might want to follow, as well as offering some pointers to a suitable timeline.

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Reasons for withdrawing an extension

There are two main reasons why you might want to end-of-life your extension:

- You plan to remove support for a product or service. In this case, you’ll want to remove the extension from browsers when support ceases.

- You're replacing the extension with a new one, which isn't a direct upgrade. In this case, you'll want to encourage existing users to install the new extension, before you remove the old extension from browsers.

{% endcapture %}
{% include modules/column-w-toc.html
  id="reasons-for-withdrawing"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Steps to retiring an extension

When you want to withdraw an extension, considered taking the following steps:

1. Devise a timetable for your extension’s end-of-life. Consider including the following steps in a timetable for withdrawing your extension:

   1. publish your extension’s end-of-life timetable, including an explanation of why you're retiring your extension.
   2. publish an update that removes installed copies of your extension.
   3. make the extension unavailable for new installs, by making its AMO listing invisible.

2. Publish advice that you're planning to end-of-life your extension. Consider the following options to advise people of your intention to take down your extension:

   1. update your extension’s page on addons.mozilla.org (AMO) with its end-of-life timetable.
   2. if your extension is being superseded by another, provide a link to the new extension. You could use [`management.onInstalled`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/management/onInstalled) to listen for installation of the new extension to trigger the removal of the original extension using [`management.uninstallSelf`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf).
   3. communicate the timetable through social media, forums, or where possible by email.

3. Publish a final, self-removing version of your extension. Use [`management.uninstallSelf()`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf) to cause your extension to uninstall itself. Before it does, provide a notice reminding the user about the removal of the extension. If your extension is being superseded by another, remember to provide a reminder about the link to the new extension. You might offer the user the option to remove the extension now or in a few days time.

4. Make your AMO listing invisible to prevent new installs. To hide your extension’s AMO listing:
   1. open your extension’s listing in AMO.
   2. from the sidebar menu, open Manage Status & Versions.
   3. In the Listing Visibility section, click Invisible.

Your hidden extension will not be available either to a search of AMO or an attempt to access it directly using the page’s AMO URL.

{% endcapture %}
{% include modules/one-column.html
  id="steps-to-retiring-an-extension"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Suggested retirement timetable

There is no ideal period between publication of your end-of-life timetable and the removal of your extension from users’ browsers. In setting the timetable, you might wish to consider:

- if you’re not providing a replacement extension, you could consider a relatively short notice period, perhaps a couple of weeks.

- if you’re replacing the extension with an alternative version, you may wish to provide a longer notice period, with regular reminders about the new extension. In this case, you might want to leave weeks or months between the initial end-of-life advice and the final removal of installed copies.

When you’ve started retiring the extension, use the active user statistics on AMO to fine-tune your timing. For example, if the number of active users isn't declining significantly you may want to delay deploying your extension’s final version and send out a reminder about your plans. To access the active user statistics, open your extension in the AMO Developer Hub and click **View Statistics Dashboard** on the shortcut menu.

{% endcapture %}
{% include modules/one-column.html
  id="suggested-retirement-timetable"
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
