---
layout: sidebar
title: Signing and distribution overview
permalink: /documentation/publish/signing-and-distribution-overview/
topic: Publish
tags: [add-on, distribution, publication, reviews, signing, installation]
contributors:
  [
    caitmuenster,
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
    SolidAxel,
    jean-acsas,
  ]
last_updated_by: jean-acsas
date: 2022-05-17 18:52:00
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

Extensions and themes need to be signed by Mozilla before they can be installed in release and beta versions of Firefox. Dictionaries don't need to be signed.

Unsigned extensions can be installed in the [Developer Edition](https://www.mozilla.org/firefox/developer/), [Nightly](https://www.mozilla.org/firefox/nightly/all/), and [ESR](https://www.mozilla.org/firefox/organizations/) versions of Firefox, after toggling the `xpinstall.signatures.required` preference in `about:config`. To use this feature your extension must have an [add-on ID](/documentation/develop/extensions-and-the-add-on-id/).

Mozilla signs add-ons through [addons.mozilla.org](https://addons.mozilla.org). You can use one of the following methods to sign your extension, but please be aware that not all signing methods support all distribution options. 

<!-- Table -->

{% capture table %}

| Signing method     | Supported distribution channel(s) | 
| ------------------------------------- | ------------------- | 
| Web upload via the [AMO Developer Hub](https://addons.mozilla.org/developers/) | Public listing on AMO or self-distribution| 
| Submit using [web-ext sign](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-sign) or using the [AMO signing API](https://addons-server.readthedocs.io/en/latest/topics/api/signing.html) | Brand new submissions can only be submitted as self-distributed (unlisted) extensions. <br /><br /> Subsequent updates can be listed on AMO or self-distributed (unlisted)| 

{% endcapture %}
{% include modules/table.liquid
	content: table
%}

<!-- END: Table -->

All submissions, regardless of how they are signed, are subject to Mozilla's [Add-on Policies](/documentation/publish/add-on-policies/) and the the [Firefox Add-on Distribution Agreement](/documentation/publish/firefox-add-on-distribution-agreement/).

{% endcapture %}
{% include modules/column-w-toc.liquid
	id: "signing-your-addons"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Distributing your add-on
You can choose to distribute your add-on publicly on addons.mozilla.org (AMO) or distribute it yourself. Here are some things to consider when you are deciding which method is most appropriate for your needs. 

### Public listing on addons.mozilla.org (AMO) 
AMO is a very popular distribution platform, with millions of monthly visitors and installations. It's integrated into the Firefox Add-ons Manager, allowing for easy installation of add-ons published on AMO. You can boost your extension’s SEO and attract more users by [creating an appealing listing](/documentation/develop/create-an-appealing-listing/). 

When an add-on is listed on AMO, updates to installed copies are handled automatically by Firefox each time a new version is listed on AMO.

For more information on how to submit an add-on for distribution on AMO or self-distribution, see [Submitting an add-on](/documentation/publish/submitting-an-add-on/).

### Self-distribution
Self-distributed add-ons are sometimes referred to as “unlisted” extensions because they cannot be publicly viewed or installed from AMO. You may want to self-distribute your extension if it is a beta version or if it is intended to be used by a limited audience. All add-ons, including self-distributed ones, are subject to be manually reviewed at any time after submission to check for compliance with the [Add-on Policies](/documentation/publish/add-on-policies/).

If you choose this method, be sure to read the article on [self-distribution](/documentation/publish/self-distribution/) to learn how users can install self-distributed add-ons and how to push automatic updates to your users. 

{% endcapture %}
{% include modules/one-column.liquid
  id: "distributing-your-addon"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Post-submission review
Regardless of distribution method, all add-ons undergo automated validation before they are signed. It can take up to 24 hours for your submission to be signed and published, or longer if your submission is selected for manual review. 

All add-ons are subject to a manual code review at any time after submission. The review criteria applied to add-ons are found in the [Add-on Policies](/documentation/publish/add-on-policies/). Reviews may result in the rejection of current or previous versions of your add-on, or in your add-on being blocked. 

See [What does review rejection mean to users?](/documentation/publish/what-does-review-rejection-mean-to-users/) and [Add-ons Blocking Process](/documentation/publish/add-ons-blocking-process/) for more information.

{% endcapture %}
{% include modules/one-column.liquid
  id: "post-submission-review"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## More information about addons.mozilla.org (AMO)

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


