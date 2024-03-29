---
layout: sidebar
title: Community
permalink: /community/
tags: [community, contribute, webextensions]
contributors: [caitmuenster, grlwholifts, Rob--W, dotproto]
author: caitmuenster
last_updated_by: dotproto
date: 2023-09-20
---

<!-- Overview Page Hero Banner -->

{% capture page_hero_banner_content %}

# Join the developer community

Tap into the worldwide network of Firefox developers help improve the Firefox add-ons ecosystem.

{% endcapture %}
{% include modules/overview-page-hero.liquid,
	content: page_hero_banner_content
	background: "community-overview-hero-bg.jpg"
%}

<!-- END: Overview Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Who is part of the community?

Firefox extension developers are part of a vibrant, global community of creators who help millions of Firefox users around the world to customize their browsing experience. They’re ready to share their skills and expertise to help you develop your Firefox extension.

{% endcapture %}
{% include modules/column-w-toc.liquid,
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

### Firefox for Android office hours <span id="office-hours"></span>

The Firefox Add-ons team holds one-on-one office hours sessions to help you make your extensions available on Android. This is in addition to the [Firefox for Android Add-ons](https://discourse.mozilla.org/c/add-ons/android/9393) forum, where you can seek advice and assistance anytime.

<details>
  <summary>Book a session</summary>

  <iframe id="booking-frame" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3yNnoZNBdJCTiJjqziXs9GoCYpfW9XZFkB0QWKNy9dfoqqPlCw7UsYh48Ff0i3lZcA5YzygwrU?gv=true" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" style="height: 600px;"></iframe>
</details>

### Questions about add-on development

You can get help and support by posting to [Mozilla's community forum](https://discourse.mozilla.org/c/add-ons) or [Stack Overflow](http://stackoverflow.com/questions/tagged/firefox-addon). You can also talk with us on [Matrix](https://wiki.mozilla.org/Matrix) in the [Add-ons room](https://mzl.la/2u8ZGbg) (for general development questions) or in the [add-on reviewers room](https://mzl.la/2IJ2Oi1) (for questions about an add-on review).

### Public meetings

You can also attend Mozilla’s public meetings and events for extension developers. Details of these events are found in the [Developer Communication Calendar](https://wiki.mozilla.org/Add-ons/developer/communication#Add-on_Developer_Communication_Calendar).

{% endcapture %}
{% include modules/one-column.liquid,
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
{% include modules/one-column.liquid,
	id: "get-involved-in-the-community"
	content: content
%}

<!-- END: Single Column Body Module -->
