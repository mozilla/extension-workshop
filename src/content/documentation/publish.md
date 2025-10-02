---
layout: sidebar
title: Distribute and promote your extension to the right audience
permalink: /documentation/publish/
tags: []
contributors: [caitmuenster,Nanush7]
last_updated_by: Nanush7
date: 2024-05-14 
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Distribute your extension to the right audience

Learn how to get your extension signed and distributed worldwide or to your enterprise.

{% endcapture %}
{% include modules/overview-page-hero.liquid,
	content: page_hero_banner_content
	background: "develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Get your extension signed

Extensions and themes need to be [submitted for signing](/documentation/publish/signing-and-distribution-overview/) by Mozilla before they can be installed and used in the [release](https://www.mozilla.org/firefox/) and [Beta](https://www.mozilla.org/firefox/channel/desktop/) versions of Firefox. Signing provides Firefox users with the assurance that an extension hasn’t been tampered with and gives Mozilla the ability to block malicious extensions. 

After you have coded and tested your add-on, take a few minutes to see that it needs to meet the policies in the [Firefox Add-on Distribution Agreement](/documentation/publish/firefox-add-on-distribution-agreement/) and [Add-on Policies](/documentation/publish/add-on-policies/). If your extension does not comply with these policies, it may not get a signature or it could be [blocked](/documentation/publish/add-ons-blocking-process/) after signing.

When you are ready to submit your add-on, create an extension package either [manually](/documentation/publish/package-your-extension/) or using [web-ext](/documentation/develop/getting-started-with-web-ext/).

Once your extension is submitted, it is subject to review by Mozilla at any time. In order to review your extension, Mozilla add-on reviewers must be able to reproduce your build. If your extension makes use of code minifiers, tools that generate a single file from other files, template engines, or any other custom tool that pre-processes and generates file(s) to include in your extension, you are required to [submit the source code](/documentation/publish/source-code-submission/) for your extension.

{% endcapture %}
{% include modules/column-w-toc.liquid,
	id: "get-your-extension-signed"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Distribute your signed extension

![Multiple Devices And Browsers](/assets/img/documentation/develop/MultipleDevicesAndBrowsers_fullwidth.png)

There are three ways you can distribute your extension. They are:

- Use [addons.mozilla.org](https://developer.mozilla.org/docs/Mozilla/Add-ons/Distribution/Submitting_an_add-on) (most popular, broadest audience)
- Provide a [download location for the signed extension](/documentation/publish/self-distribution/) file for users to self-install into Firefox.
- Use one of the [mechanisms designed to enable enterprise browser administrators to install add-ons](/documentation/enterprise/enterprise-distribution/)

Regardless of what you choose, you’ll need to set up a developer account on [addons.mozilla.org](https://addons.mozilla.org) and host your extension to get it signed, even if you do not distribute it there. Just satisfy a few simple requirements and get your account up and running.

If you choose to not distribute on addons.mozilla.org, there are [some things you should consider](/documentation/publish/self-distribution/) before you distribute it yourself.

Check out our [publisher’s resources](/documentation/manage/resources-for-publishers/). You can:

- stay up-to-date with developments in Firefox
- connect with the add-on developer ecosystem
- get in touch with who manages the add-on resources

{% endcapture %}
{% include modules/one-column.liquid,
	id: "distribute-your-signed-extension"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Promote your extension

Improve your add-on's SEO and attract more users by [creating an appealing listing](/documentation/develop/create-an-appealing-listing/) for your extension.

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.liquid,
	title: "Tips for great content and design for your extension"
	youtube_id: "a0_OsLGI0k4"
	image: "documentation/develop/extension-workshop-content-and-design.png"
	alt: "Tips for great content and design for your extension"
%}

<!-- END: Video Popup Thumbnail -->

Regardless of how you plan to distribute your add-on, you will want to [promote your extension](/documentation/publish/promoting-your-extension/).

Mozilla promotes a selection of [Recommended Extensions](/documentation/publish/recommended-extensions/) that meet a high standard of security, utility, and user experience. If you’d like your extension to be included in the program, submit a nomination.

[Making money from browser extensions](/documentation/publish/make-money-from-browser-extensions/) is also something you might want to consider as your user base grows.

::: note
If you’re distributing to an enterprise running the ESR version of Firefox, and the administrator of the enterprise has disabled signing enforcement, then those users can install unsigned extensions. This means you do not need to submit your extension to addons.mozilla.org for signing.

Users of Developer Edition or Nightly can also disable Firefox's signing enforcement.
:::

{% endcapture %}
{% include modules/one-column.liquid,
	id: "promote-your-extension"
	content: content
%}

<!-- END: Single Column Body Module -->

