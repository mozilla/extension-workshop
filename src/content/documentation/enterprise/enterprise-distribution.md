---
layout: sidebar
title: Enterprise distribution
permalink: /documentation/enterprise/enterprise-distribution/
topic: Enterprise
tags: [enterprise, policies, distribution, guide, installation]
contributors:
  [
    rebloor,
    irenesmith,
    hellosct1,
    wbamberg,
    kmaglione,
    mconca,
    championshuttler,
    TriMoon,
    aswan,
    Makyen,
    andrewtruongmoz,
  ]
last_updated_by: rebloor
date: 2023-08-04
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Enterprise distribution

As an enterprise IT administrator, you may want to install add-ons automatically for your users. This page discusses the options.

{% endcapture %}
{% include modules/page-hero.liquid,
  content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Signed vs. unsigned extensions

All add-ons must be signed before they can be installed into Firefox's standard or beta versions. Unsigned add-ons can be installed in the [Developer Edition](https://www.mozilla.org/firefox/developer/), [Nightly](https://www.mozilla.org/firefox/nightly/all/), and [ESR](https://www.mozilla.org/firefox/enterprise/) versions of Firefox, after toggling the `xpinstall.signatures.required` preference in `about:config`.

If you want to install unsigned add-ons, deploying an [ESR](https://www.mozilla.org/firefox/enterprise/) version of Firefox is recommended. When deployed, unsigned add-ons can be installed using any method, including opening the add-on file from a web page.

The recommended alternative approach is to use the option for self-distributed add-ons on [addons.mozilla.org](https://addons.mozilla.org) (AMO). This option means you can get a signed add-on without it being listed in the public add-ons directory. This signed add-on can then be installed from a web page behind the firewall or using one of the options described here.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "signed-vs-unsigned"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Using an ExtensionSettings policy

This is the recommended approach to installing add-ons automatically. The ExtensionSettings policy enables you to set default behavior for the browser and installation behavior for extensions. For example, you could disable extension installation generally, then automatically install or allow installation of specific extensions.

See [ExtensionSettings](https://mozilla.github.io/policy-templates/#extensionsettings) for details.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "using-an-extensionsettings-policy"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Bundling add-ons with a custom Firefox

You can bundle add-ons within a customized Firefox, and they are installed automatically when the user starts up the application for the first time.

See [Deploying Firefox with extensions](https://support.mozilla.org/kb/deploying-firefox-with-extensions) for details.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "bundling-add-ons-with-custom-Firefox"
  content: content
%}

<!-- END: Single Column Body Module -->
