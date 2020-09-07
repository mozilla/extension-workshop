---
layout: sidebar
title: Signing and distribution overview
permalink: /documentation/publish/signing-and-distribution-overview/
topic: Publish
tags: [add-on, distribution, publication, reviews, signing, installation]
contributors:
  [
    Kaligule,
    chrisdavidmills,
    mdnwebdocs-bot,
    musakarakas,
    MeridelW,
    jvillalobos,
    rebloor,
    andymckay-github,
    wbamberg,
    jsmnbom,
    Zayed-Hossen,
    andrewtruongmoz,
    Makyen,
    AnnetteRivers,
    FKasa,
    Alien426,
    V@no,
    eviljeff,
    Noitidart,
    mconnormoz,
    hasangol,
    Cikgu77,
    01787500664,
    Macarte,
    kumar303,
    SphinxKnight,
    tedmcox,
    iwanrezpect,
  ]
last_updated_by: Kaligule
date: 2020-08-18 20:10:00
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Signing and distributing your add-on

Add-ons need to be signed before they can be installed into release and beta versions of Firefox. This signing process takes place through [addons.mozilla.org](https://addons.mozilla.org) (AMO), whether you choose to distribute your add-on through AMO or to do it yourself.

Here we look at the signing requirements and the related reviews, before discussing how to choose between distributing on AMO or distributing an add-on yourself. We also look at the channels available on AMO and answer questions about code ownership and disputes.

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Signing your add-ons

Starting with Firefox 43, add-on extensions and multi-item add-ons that include extensions need to be signed by Mozilla before they can install in release and beta versions of Firefox. This includes themes and language packs; dictionaries don't need to be signed however.

Unsigned extensions can be installed in [Developer Edition](https://www.mozilla.org/firefox/developer/), [Nightly](https://www.mozilla.org/firefox/nightly/all/), and [ESR](https://www.mozilla.org/firefox/organizations/) versions of Firefox, after toggling the `xpinstall.signatures.required` preference in `about:config`.

Mozilla signs add-ons through the [AMO](https://addons.mozilla.org) website and provides three methods for submitting your add-on for signing:

- upload your add-on through the [Developer Hub on AMO](/documentation/publish/submitting-an-add-on/#listing-on-amo).
- use the [addons.mozilla.org signing API](https://addons-server.readthedocs.io/en/latest/topics/api/signing.html).
- use [web-ext sign](/documentation/develop/web-ext-command-reference/#web-ext-sign).

All the signing options are subject to the [Firefox Add-on Distribution Agreement](/documentation/publish/firefox-add-on-distribution-agreement/).

Using the signing API or web-ext returns you signed add-ons, with no distribution listing created on AMO. If you take the option to upload your add-on through the AMO Developer Hub, you're given a choice between listing on AMO or self-distribution. If you choose self-distribution, at the end of the process you download signed copies of your add-on.

Regardless of the method used all add-ons must pass an automated validation before they are signed. They may also be subject to a manual code review. The review criteria applied to add-ons are found in the [Add-on Policies](/documentation/publish/add-on-policies/).

{% endcapture %}
{% include modules/column-w-toc.liquid
	id: "signing-your-addons"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Distributing your add-on

You aren't required to list or distribute your add-on through AMO. You'll, therefore, need to decide if you want to distribute and list your add-on through AMO or distribute it yourself. Here are some things you should consider:

- AMO is a very popular distribution platform, with millions of monthly visitors and installations. It's integrated into the Firefox Add-ons Manager, allowing for easy installation of add-ons published on AMO.

- When an add-on is listed on AMO, updates to installed copies are handled automatically by Firefox each time a new version is listed on AMO.
  To enable Firefox to automatically update self-distributed add-ons, the URL where Firefox can find updates needs to be included in the add-on manifest's [update_link](https://developer.mozilla.org/docs/Mozilla/Add-ons/Updates) key. Self-distributed add-ons that don't have an update URL check AMO for updates and are updated to a listed version, if one is available.

For more information on how to submit an add-on for distribution on AMO or self-distribution, see [Submitting an add-on](/documentation/publish/submitting-an-add-on/).

{% endcapture %}
{% include modules/one-column.liquid
  id: "distributing-your-addon"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## More information about AMO

<section id="ownership"></section>

### Ownership

Add-ons on AMO can have multiple users with permission to update and manage the listing. The authors of an add-on can transfer ownership and add developers to an add-on's listing through the Developer Hub. No interaction with Mozilla representatives is necessary for a transfer of ownership.

#### To transfer ownership

- Make sure the new owner has an account on [addons.mozilla.org](https://addons.mozilla.org). New accounts can be created using the "Register or Log in" button, after which the owner must confirm their email address.
- Sign into your account on the [Add-on Developer Hub](https://addons.mozilla.org/developers/), and click "Edit Listing" for the extension you want to transfer.
- On the left-hand side of the screen, you will see a blue box labeled "Edit Information". Click "Manage Authors & License" — from the resulting page you can add and remove authors.
- Once you have added the new author's email address, set that person as the extension owner and make sure the "Listed" box has a checkmark. Now you can remove yourself by clicking the "x" next to your email address.
- When you're done, click "Save Changes". The new owner will be able to manage updates, listing information, etc., when logged in.

<section id="code-disputes"></section>

### Code disputes

Many add-ons allow their source code to be viewed. This does not mean that the source code is open source or available for use in another add-on. The original author of an add-on retains copyright of their work unless otherwise noted in the add-on's license.

If we're notified of a copyright or license infringement, we will take steps to address the situation per the DMCA, which may include taking down the add-on listing. Details about this process and how to report trademark or licensing issues can be [found here](https://www.mozilla.org/about/legal/report-infringement/).

If you are unsure of the current copyright status of an add-on's source code, you must contact the author and get explicit permission before using the source code.

{% endcapture %}
{% include modules/one-column.liquid
  id: "about-amo"
  content: content
%}

<!-- END: Single Column Body Module -->


