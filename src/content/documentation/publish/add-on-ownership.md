---
layout: sidebar
title: Add-on ownership
permalink: /documentation/publish/add-on-ownership/
topic: Publish
tags: [development, ownership, code, dispute]
contributors: [caitmuenster, rebloor]
last_updated_by: caitmuenster
date: 2019-06-05 14:56:00
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Add-on ownership

Add-ons are often the result of the work of a team of developers, which is why add-ons on AMO can have multiple authors. Authors may be designated as owners or developers. Both types of author can update and manage the add-on and its listing, but only owners can add authors to the add-on. The owners of an add-on can transfer ownership and add authors to an add-on through the [Developer Hub](https://addons.mozilla.org/developers/).

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Transfer ownership

No interaction with Mozilla representatives is necessary for a transfer of ownership, follow these steps:

- Make sure the new owner has an account on [addons.mozilla.org](https://addons.mozilla.org). New accounts can be created using **Register** or **Log in**, found in the top right of the homepage. The new owner must confirm their email address before continuing.
- Sign into your account on the [Add-on Developer Hub](https://addons.mozilla.org/developers/), and click **Edit Listing** for the add-on you want to transfer.
- In the left-hand menu, click **Manage Authors & License**.
- Add the new owner’s email address in the box with the hint **Enter a new author‘s email address**. By default, this new address is set as an owner, with the **Listed** box checked. Don’t change these defaults.
- Click the X icon next to your email address to remove yourself from the list of authors.
- Click **Save Changes**.

The new owner can now manage updates, listing information, and perform all the other add-on listing tasks.

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "transfer-ownership"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Code disputes

The nature of add-ons means that their source code to be viewed. This visibility does not mean that the source code is open source or available for use in another add-on. The original author of an add-on retains copyright to their work unless otherwise noted in the add-on’s license.

If we're notified of a copyright or license infringement, we will take steps to address the situation in line with the provisions of the Digital Millennium Copyright Act (DMCA), which may include taking down the add-on listing. Details about this process and how to report trademark or licensing issues are [found here](https://www.mozilla.org/about/legal/report-abuse/).

If you are unsure of the current copyright status of an add-on’s source code, contact the author and get permission before using the source code.

{% endcapture %}
{% include modules/one-column.liquid
  id: "code-disputes"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.liquid -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.liquid -%}

<!-- END: Up Next -->
