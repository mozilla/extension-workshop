---
layout: sidebar
title: Monitoring extension usage statistics
description: Learn how to monitor extension usage statistics on addons.mozilla.org (AMO). Gain valuable insights into your add-on's performance and user base.
permalink: /documentation/manage/monitoring-extension-usage-statistics/
topic: Manage
tags: [manage, distribution, amo, stats, usage, downloads]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2020-07-30
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Monitoring extension usage statistics

Learn how to use the built-in dashboard on addons.mozilla.org (AMO) to monitor usage statistics for your extension.

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

Developers can use the statistics dashboard feature on addons.mozilla.org (AMO) to find more information related to their extension’s usage. These stats are aggregated from [Firefox telemetry data](https://support.mozilla.org/kb/telemetry-clientid) and do not include any personally identifiable user data. This information provides developers with more information about user adoption, general demographics, and other insights that might help them make changes or improvements.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "introduction"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

# Accessing the statistics dashboard

Each extension’s dashboard is private and can only be accessed by authors and owners of the extension.

The easiest way to access the dashboard is to sign in to AMO and navigate to “Manage My Submissions.” You can find a link to the statistics dashboard under the name of the add-on it is associated with.

![Screenshot of an add-on on the Manage My Submissions page; below the add-on name is a link titled Statistics](/assets/img/documentation/manage/manage_my_submissions_statistics.png)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "accessing-the-statistics-dashboard"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

# Tracking external sources

If you link to your add-on’s listing page you can append the following [standard UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) to be tracked as additional sources on your download statistics dashboard:

<!-- Table -->

{% capture table %}

| Parameter             | Description   | Example             |
| ------------------------------------- | ------------------- | -------------------------- |
| <em>utm_source</em>		| The name of the product, domain of the website that drives traffic to the link. | <em>utm_source=email</em> |
| <em>utm_medium</em> | The channel you are using to share your link.  | <em>utm_medium=social</em> |
| <em>utm_content</em> | The specific item that a person clicks on to access the link (such as an A/B test, a website banner, or a specific ad). | <em>utm_content=get-the-addon-button</em> |
| <em>utm_campaign</em> | The specific product promotion or strategic campaign. | <em>utm_campaign=launch-announcement</em> |

{% endcapture %}
{% include modules/table.liquid,
	content: table
%}

::: note
The statistics dashboard will only count installs from the AMO listing page. Installs from other sources, such as .xpi downloads from a website or blog, are not counted on the dashboard, even if they link to an XPI hosted on AMO. 
:::

<!-- END: Table -->

All of these parameters are optional. The statistics dashboard includes a view that breaks down downloads by each of these parameters, so you can use any or all of them. You can also use a tool like [Campaign URL Builder](https://ga-dev-tools.appspot.com/campaign-url-builder/) by Google to create your UTM parameters.

::: note
There is a limit of 40 characters for each UTM parameter value. Longer values will be truncated.
:::

{% endcapture %}
{% include modules/one-column.liquid,
  id: "tracking-external-sources"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Add-on listing example

Below is an example of a link to your add-on's listing page with UTM parameters:

`https://addons.mozilla.org/addon/firefox-color?utm_source=mysite.wordpress.com&utm_medium=blog&utm_content=top-banner&utm_campaign=get-my-addons`

{% endcapture %}
{% include modules/one-column.liquid,
  id: "add-on-listing-example"
  content: content
%}

<!-- END: Single Column Body Module -->
