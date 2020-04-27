---
layout: sidebar
title: Unique Firefox Capabilities
permalink: /documentation/develop/unique-firefox-capabilities/
published: true
topic: Develop
tags: [Getting started, WebExtensions, API, Firefox]
contributors: [rebloor, caitmuenster]
last_updated_by: caitmuenster
date: 2020-04-24
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Unique Firefox Capabilities

Take advantage of features unique to Firefox to extend the Web even further.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

{% capture content %}

Firefox is a great place to begin your browser extension development. To start, you get the highest compliance with the proposed browser extension API including use of the `browser.* namespace` and promises for handling asynchronous events. Then, there is a highly supportive community of extension developers, ready to assist you.

Firefox also offers some unique features that you can use to build more secure, easy to use, and more visually appealing extensions. Just take a look at what’s available:

{% endcapture %}
{% include modules/one-column.html
    id=""
    content=content
    aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Help users separate their browser activities with [Contextual Identities](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities) a.k.a. Containers. Give groups of tabs their own local browser storage: cookie store and local data in localStorage and indexedDB. This keeps details such as site preferences, signed in sessions, and ad tracking data private to the tabs.

{% endcapture %}

{% capture col_2_content %}

![Containers-screenshot]({% asset "documentation/develop/containers.png" @optim @path %} "A screenshot of a container dropdown menu, which includes Personal, Work, Banking, and Shopping containers, and the option to Manage Containers")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Record and display additional or complementary information about a web page with the [Sidebar](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) UI component, a panel that sits alongside web pages.

{% endcapture %}

{% capture col_2_content %}

![Sidebar-screenshot]({% asset "documentation/develop/sidebar.png" @optim @path %} "A screenshot of the Annotator extension, which adds a sidebar to the browser window and lets users write text in a box")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Better integrate your extension with the browser using the ability to pick up the browser style in page and browser actions as well as the sidebar UI. Define, in the `manifest.json` file, the URLs where a page action is shown or hidden, and choose where to place the browser action icon.

{% endcapture %}

{% capture col_2_content %}

![Sidebar-screenshot]({% asset "documentation/develop/icon_placement.png" @optim @path %} "A screenshot the Firefox toolbar that shows extension icons. The icon for the Beastify is clicked to show a dropdown menu.")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Help users locate content of interest in a web page, with the ability to [find and highlight text in a webpage](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/find).

{% endcapture %}

{% capture col_2_content %}

![Find-screenshot]({% asset "documentation/develop/find.png" @optim @path %} "A screenshot of text on a page with the word Color highlighted in purple")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Perform searches directly from your extension, with features to [get details of search engines and perform a search](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/search).

{% endcapture %}

{% capture col_2_content %}

![Search-extension-screenshot]({% asset "documentation/develop/search_extension.png" @optim @path %} "A screenshot of the Wikipedia entry for Extension")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Add an extra dimension to your themes by [updating the browser theme at runtime](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/theme). With this feature you can alternate themes by time of day, apply a different theme when users browse your website, reflect user actions in your extension, and more.

{% endcapture %}

{% capture col_2_content %}

![Dynamic-theme-screenshot]({% asset "documentation/develop/dynamic_theme.png" @optim @path %} "A screenshot a yellow browser theme with a timer that transforms it into an earth-colored browser theme")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Provide users with control over their browsing experience from your extension with the ability to [modify (some) global browser settings](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings).

{% endcapture %}

{% capture col_2_content %}

![Extension-controlling-settings]({% asset "documentation/develop/extension_controlling_settings.png" @optim @path %} "A screenshot of the user preferences screen for New Windows and Tabs, which shows an extension is controlling the user's home page and New Tab page.")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Enable users to reliably add your extension’s features to new pages and sites, with the ability to [register and unregister content scripts at runtime](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts).

{% endcapture %}

{% capture col_2_content %}

![Script-inject-screenshot]({% asset "documentation/develop/script_inject.png" @optim @path %} "A screenshot of code showing how the protocol for IRC can be handled.")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Take advantage of external services to handle protocols or content types by registering [protocol handlers](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) in the `manifest.json`.

{% endcapture %}

{% capture col_2_content %}

![Protocol-handlers--screenshot]({% asset "documentation/develop/protocol.png" @optim @path %} "A screenshot of a configuration page for setting proxy access to the Internet")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Perform additional web tasks such as [resolving domain names](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/dns) and [proxying web requests](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/proxy).

{% endcapture %}

{% capture col_2_content %}

![Proxy-settings-screenshot]({% asset "documentation/develop/proxy_settings.png" @optim @path %} "A screenshot of a configuration page for setting proxy access to the Internet")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

Add advanced security capabilities using [PKCS #11 security modules to source keys and certificates](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11).

{% endcapture %}

{% capture col_2_content %}

![Certificate-key--screenshot]({% asset "documentation/develop/certificate_key.png" @optim @path %} "A graphic of a scroll with an award on it and a key next to it.")

{% endcapture %}
{% include modules/two-column.html
	id=""
	col_1=col_1_content
	col_2=col_2_content
	aside=""
%}

<!-- END: Two Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
