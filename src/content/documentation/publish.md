---
layout: sidebar
title: Publish
permalink: /documentation/publish/
tags: []
contributors: [caitmuenster]
last_updated_by: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Distribute your extension to the right audience

Learn how to get your extension signed and distributed worldwide or to your enterprise.

{% endcapture %}
{% include modules/overview-page-hero.liquid
	content: page_hero_banner_content
	background: "develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Get your extension signed

Once your extension is coded and tested, it needs to meet the policies in the [developer agreement](/documentation/publish/firefox-add-on-distribution-agreement/) and [add-on policies](/documentation/publish/add-on-policies/) before it is signed. If your extension doesn’t meet these policies, it may not get a signature or it could be [blocked](/documentation/publish/add-ons-blocking-process/) after signing.

When you’re confident your extension complies with those policies, it needs to be signed before it’s distributed\* for use in the [release](https://www.mozilla.org/firefox/) and [Beta](https://www.mozilla.org/firefox/channel/desktop/) versions of Firefox. Signing provides Firefox users with the assurance that an extension hasn’t been tampered with and gives Mozilla the ability to block malicious extensions.

All extensions can be submitted for signing through [addons.mozilla.org][addons-link].

Before submitting your extension for signing, create an extension package either [manually](/documentation/publish/package-your-extension/) or using [web-ext](/documentation/develop/getting-started-with-web-ext/). Once you’ve packaged your extension, there are [three ways to get it signed](/documentation/publish/signing-and-distribution-overview/).

Once your extension is signed, it is subject to review by Mozilla at any time. To enable this review, you may have to [submit the source code](/documentation/publish/source-code-submission/) for your extension.

{% endcapture %}
{% include modules/column-w-toc.liquid
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
- Provide a [download location for the signed extension][self-dist] file for users to self-install into Firefox.
- Use one of the [mechanisms designed to enable enterprise browser administrators to install add-ons](/documentation/enterprise/enterprise-distribution/)

Regardless of what you choose, you’ll need to set up a developer account on [addons.mozilla.org][addons-link] and host your extension to get it signed, even if you do not distribute it there. Just satisfy a few simple requirements and get your account up and running.

If you choose to not distribute on addons.mozilla.org, there are [some things you should consider][self-dist] before you distribute it yourself.

Check out our [publisher’s resources](/documentation/manage/resources-for-publishers/). You can:

- stay up-to-date with developments in Firefox
- connect with the add-on developer ecosystem
- get in touch with who manages the add-on resources

{% endcapture %}
{% include modules/one-column.liquid
	id: "distribute-your-signed-extension"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Promote your extension

Grow your user base by [creating an appealing listing](/documentation/develop/create-an-appealing-listing/) for your extension.

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.liquid
	title: "Tips for great content and design for your extension"
	youtube_id: "a0_OsLGI0k4"
	image: "documentation/develop/extension-workshop-content-and-design.png"
	alt: "Tips for great content and design for your extension"
%}

<!-- END: Video Popup Thumbnail -->

However you choose to distribute your extension, you’ll want to [promote your extension](/documentation/publish/promoting-your-extension/).

Mozilla promotes a selection of [Recommended Extensions](https://blog.mozilla.org/addons/2019/04/08/recommended-extensions-program-coming-soon/) that meet a high standard of security, utility, and user experience. If you’d like your extension to be included in the program, submit a nomination.

[Making money from browser extensions](/documentation/publish/make-money-from-browser-extensions/) is also something you might want to consider as your user base grows.

::: note
If you’re distributing to an enterprise running the ESR version of Firefox or to users of Developer Edition or Nightly you don’t need to submit your extension to addons.mozilla.org for signing, you can distribute and install unsigned extensions.
:::

{% endcapture %}
{% include modules/one-column.liquid
	id: "promote-your-extension"
	content: content
%}

<!-- END: Single Column Body Module -->

[addons-link]:https://addons.mozilla.org
[self-dist]:/documentation/publish/self-distribution/
