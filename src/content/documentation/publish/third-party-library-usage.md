---
layout: sidebar
title: Third Party Library Usage
permalink: /documentation/publish/third-party-library-usage/
topic: Publish
tags: [add-ons, extensions, review-policy]
contributors: [ChrisRoss5, One, wesinator]
last_updated_by: wesinator
date: 2022-10-17
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Third Party Library Usage

The [Development Practices](/documentation/publish/add-on-policies/#development-practices) section of the [Add-ons Policies](/documentation/publish/add-on-policies/) states that you can include third party libraries in your extension as long the following conditions are met:

* Extensions may only use the release versions of third party libraries.
* Third party libraries may not be modified.

In order for reviewers to verify that these requirements are met, you must provide links to the library source code as part of the AMO submission process. If you don't provide information about third-party libraries and the reviewer cannot evaluate your extension, it may be rejected.

If your extension uses minified, obfuscated or otherwise machine-generated first-party code, please see [our requirements](/documentation/publish/source-code-submission/) for that.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## When must links for third-party libraries be provided?

When submitting a version to AMO, links to third-party libraries must be provided. You can add the links to the "Notes for Reviewers" section of your extension's details. 

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "when-must-links-for-third-party-libraries-be-provided"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## How to determine the third-party library link

You must provide links to the original copies of the files included in your extension and links to the readable source code for those files. For repositories or version controlled files, please specify the link using release tag that you’ve used. Note that non-release versions of third-party libraries are not accepted.

You should download third-party libraries from their official site, not from a CDN or other location. This point is important. Reviewers confirm that your code contains the original library using checksums, so the version in the extension must be identical to the official distribution. Unofficial sources often make small changes to a library’s files, such as whitespace changes, so the checksums don't match.

Example: If you’re using the minified version of mousetrap release 1.4.2 (because you haven’t had the chance to update to the latest version) the following links are **incorrect**.

<!-- Not this -->

<section class="not-this">

- `https://craig.is/killing/mice`—using the main website, which only shows the latest version.
- `https://github.com/ccampbell/mousetrap/blob/master/mousetrap.min.js`—using the master branch, which may change anytime.
- `https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?71631`—using the link to a CDN, which could differ from the source.

</section>

The **correct** link is

<!-- END: Not this -->

<!-- Do this -->

<section class="do-this">

`https://github.com/ccampbell/mousetrap/blob/1.4.2/mousetrap.min.js`

</section>

<!-- END: Do this -->

which links to the exact file, using the tag for the version.

Tip: If the library is on GitHub, you can usually find this version under the “releases” link, then click on the small tag icon next to the version number and navigate to the file in the repository.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "how-to-determine-the-third-party-library-link"
  content: content
%}

{% capture content %}

## Use of package managers

Extensions developers can use package managers and package repositories like [npm](https://www.npmjs.com/) to retrieve third party libraries.

With a default npm configuration, third party library dependencies are declared in the project's `package.json` file: this qualifies as a third party library link as [previously described](#how-to-determine-the-third-party-library-link).

Reviewers must be be able to retrieve and review all packages used by your extension, so the use of private packages or non-public registries is not recommended. If you do, you will need to provide reviewers with access to the private packages. Access information should be provided along with build instructions as part of the [source code submission](https://extensionworkshop.com/documentation/publish/source-code-submission/) process.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "use-of-package-managers"
  content: content
%}

{% capture content %}

## Communicating third-party library links to the reviewer

You can add the links to the “Notes for Reviewers” section of your extension’s details on AMO.

This section can be found under “Manage Status & Versions” for each version.

---

If you miss any of the necessary information for used third-party libraries, the reviewer will have to get in touch to request the missing items. This could delay the completion of your extension’s review or, in the worst-case, result in your extension being taken down because we can't confirm it complies with the [add-on policies](/documentation/publish/add-on-policies).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "communicating-third-party-library-links-to-the-reviewer"
  content: content
%}
