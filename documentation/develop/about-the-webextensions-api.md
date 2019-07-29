---
layout: sidebar
title: About the WebExtensions API
permalink: /documentation/develop/about-the-webextensions-api/
published: false
topic: Develop
tags: [WebExtensions, API, Firefox]
contributors: [rebloor, mconca, caitmuenster]
last_updated_by: caitmuenster
date: 2019-06-05
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# About the WebExtensions API

WebExtension APIs provide a user-controlled, web-focused extension development platform used to extend the features of Firefox. The APIs strike a balance between the functionality extensions bring to Firefox and the risks they introduce to the user experience.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

{% capture content %}

Designed to offer cross-browser compatibility with Chromium-based browsers—such as Chrome, Edge, and Opera—the APIs:

- Include features to extend the capabilities of Firefox to interact with web content.
- Simplify the development and maintenance of extensions for Firefox and other browsers.
- Make it easier for users to personalize Firefox, using extensions and themes.
- Minimize the impact that changes to Firefox internals have on extensions.
- Improve the performance, safety, and security of extensions in Firefox.

Since its introduction, Mozilla has expanded the capabilities of the API as part of a commitment to push innovation and adoption of the API in browsers. These expanded capabilities include features such as the [Contextual Identities](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities) a.k.a. the containers API.

{% endcapture %}
{% include modules/one-column.html
    id="about-the-webextensions-api"
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
