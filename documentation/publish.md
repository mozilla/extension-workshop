---
layout: sidebar
title: Publish
permalink: /documentation/publish/
published: false
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
{% include modules/overview-page-hero.html
	content=page_hero_banner_content
	cta1_label=""
	cta1_url=""
	cta2_label=""
	cta2_url=""
	background="develop-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Get your extension signed

Once your extension is coded and tested, it needs to meet the policies in the [developer agreement](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Agreement) and [add-on policies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews) before it is signed. If your extension doesn’t meet these policies, it may not get a signature or it could be [blocked](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Blocking_Process) after signing.

When you’re confident your extension complies with those policies, it needs to be signed before it’s distributed\* for use in the [release](https://www.mozilla.org/en-US/firefox/) and [Beta](https://www.mozilla.org/firefox/channel/desktop/) versions of Firefox. Signing provides Firefox users with the assurance that an extension hasn’t been tampered with and gives Mozilla the ability to block malicious extensions.

All extensions can be submitted for signing through [addons.mozilla.org](https://addons.mozilla.org).

Before submitting your extension for signing, create an extension package either [manually](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Package_your_extension_) or using [web-ext](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference#web-ext_build). Once you’ve packaged your extension, there are [three ways to get it signed](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution).

Once your extension is signed, it is subject to review by Mozilla at any time. To enable this review, you may have to [submit the source code](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Source_Code_Submission) for your extension.

{% endcapture %}
{% include modules/column-w-toc.html
	id="get-your-extension-signed"
	content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Distribute your signed extension

![Multiple Devices And Browsers]({% asset "documentation/develop/MultipleDevicesAndBrowsers_fullwidth.png" @optim @path %})

There are four ways you can distribute your extension. They are:

- Use [addons.mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution/Submitting_an_add-on) (most popular, broadest audience)
- Provide a download location for the signed extension file for users to self-install or [sideload](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Alternative_distribution_options/Sideloading_add-ons) into Firefox.
- Include the extension installation as part of the installation of a [desktop application](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Alternative_distribution_options/Add-ons_for_desktop_apps).
- Use one of the [mechanisms designed to enable enterprise browser administrators to install add-ons](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Alternative_distribution_options/Add-ons_in_the_enterprise)

Regardless of what you choose, you’ll need to set up a developer account on [addons.mozilla.org](https://addons.mozilla.org) and host your extension to get it signed, even if you do not distribute it there. Just satisfy a few simple requirements and get your account up and running.

If you choose to not distribute on addons.mozilla.org, there are [some things you should consider](https://docs.google.com/document/d/1nw5FMHI4pH3iKHEdLS6GuAUl9oRfFd5P4uC7wEAQaCU/edit#heading=h.w6vo7guwwexf) before you distribute it yourself.

Check out our [publisher’s resources](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution/Resources_for_publishers). You can:

- stay up-to-date with developments in Firefox
- connect with the add-on developer ecosystem
- get in touch with who manages the add-on resources

{% endcapture %}
{% include modules/one-column.html
	id="distribute-your-signed-extension"
	content=content
	aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Promote your extension

Grow your user base by [creating creating an appealing listing](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Listing) for your extension.

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.html
	title="Tips for great content and design for your extension"
	youtube_id="a0_OsLGI0k4"
	image="documentation/develop/extension-workshop-content-and-design.png"
	alt="Tips for great content and design for your extension"
%}

<!-- END: Video Popup Thumbnail -->

However you choose to distribute your extension, you’ll want to [promote your extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution/Promoting_your_extension_or_theme).

Mozilla promotes a selection of [Recommended Extensions](https://blog.mozilla.org/addons/2019/04/08/recommended-extensions-program-coming-soon/) that meet a high standard of security, utility, and user experience. If you’d like your extension to be included in the program, submit a nomination.

[Making money from browser extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution/Make_money_from_browser_extensions) is also something you might want to consider as your user base grows.

<!-- Note -->

{% capture note %}

If you’re distributing to an enterprise running the ESR version of Firefox or to users of Developer Edition or Nightly you don’t need to submit your extension to addons.mozilla.org for signing, you can distribute and install unsigned extensions.

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

<!-- END: Note -->

{% endcapture %}
{% include modules/one-column.html
	id="promote-your-extension"
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
