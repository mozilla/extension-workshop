---
layout: sidebar
title: Firefox workflow overview
permalink: /documentation/develop/firefox-workflow-overview/
published: false
topic: Develop
tags:
  [
    Add-ons,
    Code,
    enhance,
    Extensions,
    Firefox,
    prepare,
    publish,
    retire,
    WebExtensions,
    workflow,
  ]
contributors: [irenesmith, hellosct1, rebloor, mdnwebdocs-bot]
last_updated_by: irenesmith
date: 2019-05-20 03:25:40
---

{% capture page_hero_banner_content %}

# Firefox workflow overview

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

{% capture content %}

<table>
    <tr align="left" style="font-size: 28px">
        <th>Prepare</th>
        <th>Code</th>
        <th>Publish<a href="#distribute-extension">*</a></th>
        <th>Enhance</th>
        <th>Retire</th>
    </tr>
    <tr>
        <td><a href="/documentation/develop/choosing-a-firefox-version-for-extension-development">Choose a Firefox version for web extension development</a></td>
        <td>Code your extension</td>
        <td> Package your extension with <a href="/documentation/develop/getting-started-with-web-ext#packaging-your-extension">web-ext build</a></td>
        <td> Responded to Mozilla extension review</td>
        <td><a href="/documentation/manage/retiring-your-extension">Retire your extension</a></td>
    </tr>
    <tr>
        <td>Choose your IDE or code editor</td>
        <td>Run your extension with <a href="/documentation/develop/getting-started-with-web-ext#testing-out-an-extension">web-ext run</a> or <a href="/documentation/develop/temporary-installation-in-firefox/">about:debugging</a></td>
        <td>Create an <a href="https://addons.mozilla.org">addons.mozilla.org</a> account</td>
      <td><a href="/documentation/publish/promoting-your-extension/">Promote your extension</a></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="/documentation/develop/getting-started-with-web-ext/">Install web-ext</a></td>
        <td><a href="/documentation/develop/testing-persistent-and-restart-features/">Test persistent and restart features</a></td>
        <td><a href="/documentation/publish/submitting-an-add-on">Submit your extension</a></td>
        <td><a href="https://blog.mozilla.org/addons/2019/04/08/recommended-extensions-program-coming-soon/">Nominate your extension to be recommended</a></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://webextensions.tech/">Create your extension scaffold</a></td>
        <td>Debug with the <a href="https://developer.mozilla.org/docs/Tools/Browser_Toolbox/">Add-on Debugging Window</a></td>
        <td><a href="/documentation/publish/source-code-submission/">Submit your source code</a> (if required)</td>
        <td><a href="/documentation/manage/updating-your-extension/">Update and improve your extension</a></td>
        <td></td>
    </tr>
    <tr>
        <td>Get familiar with the <a href="/documentation/publish/add-on-policies/">add-on policies</a> and <a href="/documentation/publish/firefox-add-on-distribution-agreement/">developer agreement</a></td>
        <td></td>
        <td><a href="/documentation/develop/create-an-appealing-listing/">Create an appealing listing</a></td>
        <td></td>
        <td></td>
    </tr>
</table>

 <section id="distribute-extension"></section>
<p>* Or distribute your extension for <a href="/documentation/publish/distribute-sideloading/">sideloading</a>, <a href="/documentation/publish/distribute-for-desktop-apps/">desktop apps</a>, or <a href="/documentation/enterprise/enterprise-distribution/">in an enterprise</a>.</p>

**Have an extension you want to bring to Firefox?** We provide advice, guidelines, and tools to help making make porting straightforward. To get started, visit [Porting a Google Chrome extension](/documentation/develop/porting-a-google-chrome-extension/).

{% endcapture %}
{% include modules/one-column.html
    id="workflow-table"
    content=content
    aside=""
%}

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
