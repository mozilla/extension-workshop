---
layout: sidebar
title: Community
permalink: /community/
published: false
tags: []
contributors: [caitmuenster]
author: caitmuenster
date: 2019-07-09 09:00:00
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Join the developer community

Tap into the worldwide network of Firefox developers help improve the Firefox add-ons ecosystem.

{% endcapture %}
{% include modules/overview-page-hero.html
	content=page_hero_banner_content
	cta1_label=""
	cta1_url=""
	cta2_label=""
	cta2_url=""
	background="community-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Who is part of the community?

Firefox extension developers are part of a vibrant, global community of creators who help millions of Firefox users around the world to customize their browsing experience. They’re ready to share their skills and expertise to help you develop your Firefox extension.

{% endcapture %}
{% include modules/column-w-toc.html
	id="who-is-part-of-the-community"
	content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Connect with the community

There are several ways to stay up-to-date with Firefox add-on technology and connected to the worldwide network of creators.

### Add-ons blog.

Stay up to date with the latest information about add-on technology on the [Add-ons blog](https://blog.mozilla.org/addons).

### Email list

Subscribe to our [mailing list](https://mail.mozilla.org/listinfo/dev-addons) dedicated to the development of the add-on ecosystem, including the site addons.mozilla.org (AMO), WebExtensions APIs, and public meetings.

### Questions about add-on development

You can get help and support by posting to [Mozilla's community forum](https://discourse.mozilla.org/c/add-ons), [Stack Overflow](http://stackoverflow.com/questions/tagged/firefox-addon), or the [developer mailing list](https://mail.mozilla.org/listinfo/dev-addons).

### Meetup IRL

Find out whether there is a browser extensions or Mozilla related group or meet up near you from these resources:

- [Mozilla Reps program](https://reps.mozilla.org/events/#/period/future/), where you can find events arranged by volunteer Mozillians from around the world. And, if there are no events local to you, the program can help you get things started.

- [Campus Clubs](https://campus.mozilla.community/), for events arranged by students with a passion for keeping the web open, at universities and colleges worldwide.
  You can also attend Mozilla’s public meetings and events for extension developers, such as add-on demo sessions Details of these events are found in the [Developer Communication Calendar](https://wiki.mozilla.org/Add-ons/developer/communication#Add-on_Developer_Communication_Calendar).

{% endcapture %}
{% include modules/one-column.html
	id="connect-with-the-community"
	content=content
	aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Get involved in the community

Help make the add-on ecosystem a better place by being a contributor, from assisting with documentation to fixing bugs and more. For more information, [visit the Contribute page](https://docs.google.com/document/d/1_fRGPgjNF3jX-xEROosUx0jmu6PwCY4UNC42EOoHfKQ/edit).

You can also propose changes to the API, both for additions or changes, and assistance with API development. A good place to start is to get familiar with [Mozilla’s goals for the API](https://docs.google.com/document/d/10DoLNszOr94pKV6I1KNC7OYHdMn5TqDP7W6rBju1LEs/edit).

{% endcapture %}
{% include modules/one-column.html
	id="get-involved-in-the-community"
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
