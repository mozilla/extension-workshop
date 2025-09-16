---
layout: sidebar
title: Firefox workflow overview
permalink: /documentation/develop/firefox-workflow-overview/
topic: Develop
tags:
  [
    add-ons,
    code,
    enhance,
    extensions,
    firefox,
    prepare,
    publish,
    retire,
    webextensions,
    workflow,
  ]
contributors: [irenesmith, hellosct1, rebloor, ani-sha]
last_updated_by: ani-sha
date: 2020-03-24 12:47:00
---

{% capture page_hero_banner_content %}

# Firefox workflow overview

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

{% capture content %}

<table>
    <thead>
        <tr>
            <th>Prepare</th>
            <th>Code</th>
            <th>Publish<a href="#distribute-extension">*</a></th>
            <th>Enhance</th>
            <th>Retire</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="/documentation/develop/choosing-a-firefox-version-for-extension-development">Choose a Firefox version for web extension development</a></td>
            <td>Code your extension</td>
            <td> Package your extension with <a href="/documentation/develop/getting-started-with-web-ext#packaging-your-extension">web-ext build</a></td>
            <td> Responded to Mozilla extension review</td>
            <td><a href="/documentation/manage/retiring-your-extension">Retire your extension</a></td>
        </tr>
        <tr>
            <td>Choose your IDE or code editor</td>
            <td>Run your extension with <a href="/documentation/develop/getting-started-with-web-ext#testing-out-an-extension">web-ext run</a> or <a href="/documentation/develop/temporary-installation-in-firefox/"><code>about:debugging</code></a></td>
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
            <td><a href="https://webext.eu/">Create your extension scaffold</a></td>
            <td>Debug with the <a href="https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html">Add-on Debugging Window</a></td>
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
    </tbody>
</table>

<p id="distribute-extension">* Or distribute your extension for <a href="/documentation/publish/install-self-distributed/">manual installation</a>, <a href="/documentation/publish/distribute-for-desktop-apps/">desktop apps</a>, or <a href="/documentation/enterprise/enterprise-distribution/">use in an enterprise</a>.</p>

**Have an extension you want to bring to Firefox?** We provide advice, guidelines, and tools to help making make porting straightforward. To get started, visit [Porting a Google Chrome extension](/documentation/develop/porting-a-google-chrome-extension/).

{% endcapture %}
{% include modules/one-column.liquid,
    id: "workflow-table"
    content: content
%}


