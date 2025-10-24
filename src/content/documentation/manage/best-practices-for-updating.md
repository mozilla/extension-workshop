---
layout: sidebar
title: Best practices for updating your extension
description: Follow best practices for updating your Firefox extension. Ensure a smooth transition for your users with every new version.
permalink: /documentation/manage/best-practices-for-updating/
topic: Manage
tags: [update, manage, distribution]
contributors: [rebloor]
last_updated_by: rebloor
date: 2019-03-18 05:01:39
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Best practices for updating your extension

Almost every extension needs to be updated from time to time, whether that be to correct bugs or add new features. Updating your extension is something that is worth planning methodically, not only to ensure the quality of the changes but also to maximize the opportunities to engage or re-engage with your audience.

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

To help you deliver the most productive updates, here are some tips from the Firefox extension developer community:

- Create a roadmap of features you’d like to add to your extension, remembering to update it based on user feedback. Also, plan for new browser version releases, to confirm nothing breaks your extension and to take advantage of new features. If you want to make your roadmap public, don’t be too specific about delivery dates as missing deadlines could reduce user confidence in your extension.

- Make updates on a regular cycle, such as monthly or quarterly, unless you need to fix a critical bug. Users may find more frequent updates (for example daily or even weekly), particularly those that affect the features, functions, behavior, or look of the extension, too disruptive. Maintaining a regular update cycle can help keep users engaged.

- In addition to testing on the current release of Firefox, test your extension in the Firefox Nightly and Beta releases to make sure no upcoming changes are likely to affect your extension.

- Include an upboarding page that describes what improvements and changes are included in the upgrade—don’t just say “bug fixes and improvements”. For more information, see [Best practices for onboarding, upboarding, and offboarding users](/documentation/develop/onboard-upboard-offboard-users/).

- Avoid moving “free” features behind a paywall, as user reaction is likely to be negative. (Adding new paid features is generally not problematic. Although, adding paid features to an otherwise free extension should be handled with care, to avoid giving the impression that the extension as a whole now needs to be paid for.) For more details, see [Making money from browser extensions](https://developer.mozilla.org/docs/Mozilla/Add-ons/Distribution/Make_money_from_browser_extensions).

- Avoid abruptly removing features, consider providing a deprecation period of at least one upgrade cycle, particularly where you don’t have metrics for the use of that feature. Providing a deprecation period enables users to provide feedback on any impacts you may not have anticipated.

- Provide guided instructions for replaced features, such as retaining old menu items that then provide a message guiding the user to the new feature.

- Provide an appropriate mix of bug fixes and new or enhanced features in an upgrade. Users who are inconvenienced by a bug may react negatively if your upgrades don’t appear to address bugs. However, if you have several technical fixes to make that have little or no user impact, you may want to consider including those in a separate, silent (no upboarding page) release.

- Remember to update your extension’s AMO listing page. Include your release notes in the dedicated section. Update the description to cover new features, replace or add screenshots, and consider tweaking your extension’s icon to help highlight that you have made changes.

- Include news about the update in your channels such as website, social media, user groups, and alike.

- After releasing your update, monitor ratings and reviews, feedback, and support channels to make sure there are no unexpected responses that suggest there are errors in your changes or the changes are not working as expected.

- Start planning your next upgrade!

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "security-over-choice"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->


