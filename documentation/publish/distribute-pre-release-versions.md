---
layout: sidebar
title: Distribute pre-release versions
permalink: /documentation/publish/distribute-pre-release-versions/
published: true
topic: Publish
tags: [beta, alpha, testing, pre-release, publish, guide, how-to]
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2020-05-06
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Distribute pre-release versions

Learn how to distribute an alpha or beta pre-release version of your extension for Firefox.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- Single Column Body Module -->

{% capture content %}

Pre-release channels are not supported on [addons.mozilla.org](https://addons.mozilla.org) (AMO), so if you would like to have a limited group of users test a beta version of your extension, you will need to take the following steps to set up your own channel using an self-hosted version of your extension:

1. In the `manifest.json` of the beta version, [specify the location of your update manifest](/documentation/manage/updating-your-extension/#enable-update). This will ensure that your beta users will receive future updates. If your release channel is also self-hosted, you will need to use a different update URL for the beta channel.

2. Submit your extension for signing on [addons.mozilla.org](https://addons.mozilla.org) using the [self-distribution workflow](/documentation/publish/submitting-an-add-on/#self-distribution). If you prefer to use the command line, you can [use web-ext to sign the extension](/documentation/develop/getting-started-with-web-ext).

<!-- Note -->

{% capture note %}

If your extension’s release version is listed on [addons.mozilla.org](https://addons.mozilla.org), you will need to [define which channel you are signing with web-ext](/documentation/develop/getting-started-with-web-ext/#signing-test-version-listed).

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

3. After the extension has been signed, host the `.xpi` file on a web property that you own, such as a Github repository or Wordpress site.

4. Direct your beta users to install the extension from the web property.

You will need to follow the same process to add new versions to your beta channel. As long as you have set the location of the update manifest, beta users will automatically receive updates of the beta version as you make them available.  Note that only beta users will get these updated versions. You will need to separately update your release channel to push updates to your release users.

If you decide to discontinue your beta channel and your add-on is listed on AMO, you can release a final beta version without an update URL in the manifest. This will tell Firefox to check AMO for updates, and within a few days users will be migrated to the main update branch. If your release channel is also self-hosted, you must change the update URL of your final beta version to match the main release version.


{% endcapture %}
{% include modules/one-column.html
  id="listing-on-amo"
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
