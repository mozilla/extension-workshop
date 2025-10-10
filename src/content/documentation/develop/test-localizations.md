---
layout: sidebar
title: Test localizations
description: Learn how to test extension localizations using language packs in Firefox or Firefox Beta to ensure everything displays correctly in the Firefox and extension UI.
permalink: /documentation/develop/test-localizations/
topic: Develop
tags: [add-ons, extensions, guide, permissions, testing, webextensions, localization]
contributors: [rebloor]
last_updated_by: rebloor
date: 2025-10-17
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Test localizations

To test your extension's localization, you use [Firefox](https://www.firefox.com/en-US/) or [Firefox Beta](https://www.firefox.com/en-US/channel/desktop/), the Firefox builds where you can install language packs.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content %}

For each locale supported in your extension, follow the instructions to [Use Firefox in another language](https://support.mozilla.org/en-US/kb/use-firefox-another-language) to switch the Firefox UI language. (If you know your way around **Settings**, under **Language**, use **Set Alternatives**.)

When Firefox is running in your test language, from `about:debugging`, [install the extension temporarily](/documentation/develop/temporary-installation-in-firefox/) or reload it if it's installed. After installing or reloading your extension, if you've set up your extension correctly, you see it listed with its icon, name, and description in the chosen language. You can also see the localized extension details in `about:addons`. Now, exercise the extension's features to ensure the translations are in place.

To try this process out, use the [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) extension. Set up Firefox to display one of the languages supported in the example (German, Dutch, or Japanese). Load the extension and go to a website. Click a link to see the translated version of the notification reporting the link's URL.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "test-localizations"
  content: content
%}

<!-- END: Single Column Body Module -->
