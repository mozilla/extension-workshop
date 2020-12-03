---
layout: sidebar
title: Community
permalink: /community/
tags: [community, contribute, webextensions]
contributors: [caitmuenster, grlwholifts]
author: caitmuenster
date: 2020-12-03 
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Join the developer community

Tap into the worldwide network of Firefox developers help improve the Firefox add-ons ecosystem.

{% endcapture %}
{% include modules/overview-page-hero.liquid
	content: page_hero_banner_content
	background: "community-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Who is part of the community?

Firefox extension developers are part of a vibrant, global community of creators who help millions of Firefox users around the world to customize their browsing experience. They’re ready to share their skills and expertise to help you develop your Firefox extension.

{% endcapture %}
{% include modules/column-w-toc.liquid
	id: "who-is-part-of-the-community"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Connect with the community

There are several ways to stay up-to-date with Firefox add-on technology and connected to the worldwide network of creators.

### Add-ons blog

Stay up to date with the latest information about add-on technology on the [Add-ons blog](https://blog.mozilla.org/addons).

### Questions about add-on development

You can get help and support by posting to [Mozilla's community forum](https://discourse.mozilla.org/c/add-ons), [Stack Overflow](http://stackoverflow.com/questions/tagged/firefox-addon), or the [developer mailing list](https://mail.mozilla.org/listinfo/dev-addons). You can also talk with us on [Matrix](https://wiki.mozilla.org/Matrix) in the [Add-ons room](https://mzl.la/2u8ZGbg) (for general development questions) or in the [add-on reviewers room](https://mzl.la/2IJ2Oi1) (for questions about an add-on review).

### Meetup IRL

Find out whether there is a browser extensions or Mozilla related group or meet up near you from these resources:

- [Mozilla Reps program](https://reps.mozilla.org/events/#/period/future/), where you can find events arranged by volunteer Mozillians from around the world. And, if there are no events local to you, the program can help you get things started.

- [Campus Clubs](https://campus.mozilla.community/), for events arranged by students with a passion for keeping the web open, at universities and colleges worldwide.
  You can also attend Mozilla’s public meetings and events for extension developers, such as add-on demo sessions Details of these events are found in the [Developer Communication Calendar](https://wiki.mozilla.org/Add-ons/developer/communication#Add-on_Developer_Communication_Calendar).

{% endcapture %}
{% include modules/one-column.liquid
	id: "connect-with-the-community"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Get involved in the community

Help make the add-on ecosystem a better place by being a contributor, from assisting with documentation to fixing bugs and more. For more information, [please see current contribution opportunities](https://wiki.mozilla.org/Add-ons/Contribute).

You can also propose changes to the API, both for additions or changes, and assistance with API development. A good place to start is to get familiar with [Mozilla’s vision for the API](https://wiki.mozilla.org/WebExtensions/Vision) and [policies for developing the API](https://wiki.mozilla.org/WebExtensions/policy).

If you are ready to start contributing to the API, you can [onboard to the WebExtensions codebase](https://wiki.mozilla.org/WebExtensions/Contribution_Onramp) and read our [hacking guide](https://wiki.mozilla.org/WebExtensions/Hacking). If you would like to create a new API, either for yourself or for uplift to Firefox, please see [WebExtensions Experiments](https://webextensions-experiments.readthedocs.io/en/latest/).

Please file new bugs for the WebExtensions API on [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?product=WebExtensions). You can also use Bugzilla to search for [existing bugs](https://mzl.la/2zzJwXu) filed to the WebExtensions product.

{% endcapture %}
{% include modules/one-column.liquid
	id: "get-involved-in-the-community"
	content: content
%}

<!-- END: Single Column Body Module -->
