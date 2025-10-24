---
layout: sidebar
title: Create an appealing listing
description: Maximize your visibility with an appealing add-on listing. Learn how to write a compelling description and choose effective screenshots for addons.mozilla.org (AMO).
permalink: /documentation/develop/create-an-appealing-listing/
topic: Publish
tags: [add-ons, beginner, guide, publishing, webextension]
contributors:
  [
    wbamberg,
    bravetoaster2,
    caitmuenster,
    andrewtruongmoz,
    rebloor,
  ]
last_updated_by: rebloor
date: 2019-03-18 17:05:25
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Creating an appealing add-on listing

There are two essential steps to getting people to use your add-on: they need to discover your add-on and open the listing page, then the listing page needs to encourage them to click the Add to Firefox button. The content you add to a listing is therefore vital: from making effective use of keywords in your descriptions, to get visibility in external search engine results, through having an icon that attracts a user’s attention from a category list, to screenshots that show how useful your add-on is.

So, let us look at some of the ways you can encourage users to get to your listing page and, once there, install your add-on.

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="your-add-ons-name" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.liquid -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Your add-on’s name

You want your add-on’s name to be unique and descriptive, so it gives the user a good indication of what your add-on does. If your add-on does something similar to existing add-ons—a note taking app for example—don’t be tempted to call your add-on “Barbara” to differentiate it. Rather, look for a descriptive name that is not in use, such as “Best notes”, “Fast notes”, or similar.

Another advantage of using a unique name is that you also get a unique slug on addons.mozilla.org (commonly referred to as AMO) that matches your add-on name.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="create-a-captivating-icon" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Create a captivating icon

Your add-on’s icon could be as important, if not more so, as your add-on’s name. An eye-catching icon can draw users to your add-on in a category list or search. Where possible, make the icon relevant to your add-on’s function—for example, a notepad for a notes application. Also, unless it is part of a recognizable brand, do not include words or letters in your icon: you will be using the same icon across all locales, so words or letters may not translate well. You can load icons at two resolutions—32x32 and 64x64—in either PNG or JPEG format, but consider using SVG or similar vector format for the icon’s source, to get optimum scaling.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="create-a-meaningful-set-of-keywords" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Create a meaningful set of keywords

Before writing your add-on’s summary and description, or adding version details, think about the keywords someone might use to search for an add-on such as yours. You can add these keywords as tags to your add-on listing (in the Basic Information section). With careful use in your summary, description, and version details, the keywords will also help users discover your add-on through web searches. And, when you use keywords in your text, remember to keep their use natural: forcing keywords in won’t help readability nor will it improve search rankings.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="make-sure-your-summary-is-just-long-enough" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Make sure your summary is just long enough

The summary description for your add-on is limited to 250 characters, but do not consider it a challenge to use all the available characters. Keep your summary as short as possible while highlighting the key features of your add-on and how they will benefit the user. Be direct and to-the-point.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="focus-on-key-features-in-your-screenshots" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Focus on key features in your screenshots

There isn’t a practical limit to the number of screenshots you can include in an add-on’s listing, but don’t keep adding them: make sure each screenshot shows a key feature of your add-on. Do not be afraid to annotate your screenshots. However, you can only load one set of screenshots, although you can localize their descriptions. So, annotate to highlight features but explain the annotations in text, not on the screenshot, and avoid adding text to the images.

We recommended that you capture images that are 1280x800px (the maximum image display size). For other image sizes, we recommend using the 1.6:1 ratio.

You also have the option to reorder your screenshots, so make sure they tell a story about your add-on’s features. This will help users gain a better understanding of how your add-on will work for them.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="the-add-on-description-can-be-longer-but-not-too-long" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## The add-on description can be longer, but not too long

While the add-on summary is limited to 250 characters, you are not practically limited when it comes to the add-on’s description and version details. However, don’t think you need to use this freedom to write a novel.

Most users will take only a few seconds to scan your listing to determine if your add-on is of interest to them. So, make the opening comments in the description impactful. Then make sure the remainder of the descriptions says what needs to be said, but no more. Also, use the available HTML formatting to make your copy easier to scan. For example, list key features in bullets and highlight keywords or phrases that describe your add-on’s features.

As with the summary, remember the key is to tell the user why your add-on will matter to them: do not just describe features, explain the benefits to the user.

Similarly, when you are adding version details, be crisp and to-the-point. Make sure you highlight fixes to any issues users have raised or improvements implemented from user suggestions. If prospective users see that you listen, they will be more inclined to try your add-on.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="make-it-local" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Make it local

If your extension is developed using WebExtension APIs, we offer comprehensive support for internationalizing your extension, using the [`i18n`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/i18n) API, so you can add translations and localize your extension. You also have the option to localize almost all the text content of your add-on’s listing, including its name.

You will want to add a localized listing for each language your add-on supports. However, even if your add-on does not offer a wide selection of localized versions, localizing the listing content can help make your add-on more accessible to users around the world.

Also, remember to set the most appropriate default locale, so that users browsing in languages you have not localized to get the best impression of your add-on.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="make-it-experimental" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Make it experimental

If your add-on is an experiment, flag this when you submit it to AMO. While doing so will reduce the add-on’s visibility on AMO, it is important to make sure that users are aware, so their expectations are appropriate. If you do not mark an experimental add-on, you could end up with poor reviews that your add-on does not deserve, and once you have a poor rating and poor reviews, it can take a lot of work to build a better reputation.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="select-the-right-platforms-and-versions" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Select the right platforms and versions

If your add-on does not work on Android be sure to select only Linux, Mac OS, and Windows as the supported platforms. This will avoid issues with users giving poor reviews because your add-on does not work on their platform or Firefox version. For more information on defining version support, if you need to, see the `manifest.json` [`browser_specific_settings` key](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/browser_specific_settings).

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="categorize-well" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Categorize well

You can select up to two categories to describe your add-on. Choose carefully to get the best match. However, do not include your add-on in a second category if one will do, as spamming a category could do more harm than good.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="be-prepared-to-provide-support" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Be prepared to provide support

Providing support for your add-on gives potential users the assurance that they will be able to get any issues resolved. In your add-on’s listing you can provide details of its homepage, an email address for support, and the address of a support page on your website or the add-on’s website. If you can, provide all three of these. However, as a minimum, consider offering an email address for support.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="set-up-a-developer-profile" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Set up a developer profile

Your developer profile enables you to provide information about the reasons behind the creation of your add-on and what you plan next for its development. You do not need to create a developer profile, but if you do, as with all other descriptions of your add-on, make comments short and to the point.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="use-plain-language-in-any-privacy-policy-or-license-agreement" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Use plain language in any privacy policy or license agreement

If your add-on makes use of personal data, you will need a privacy policy, and you may want or need an end user license agreement. Make sure these are written in plain language, not legalese. Plain language makes these documents accessible to your users and makes it more likely they will install your add-on.

::: note
Remember to include the text of your privacy policy and license agreement in your add-on’s listing details, even if you host a copy on your website or in the add-on.
:::

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="gently-ask-for-a-review" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Gently ask for a review

Ratings and reviews are a huge benefit to your add-on, assuming they are good. When you are happy that you have the features and quality needed in your add-on, consider requesting users to complete a review.

However, take care with requesting reviews, here are some guidelines:

- Do not make leaving a review a requirement of accessing features within your add-on.
- Do not repeatedly request the user to provide a review, if they do not want to provide a review nagging them could result in them uninstalling your add-on.
- Do give the user time to learn about and use most of your add-ons features before requesting a review.
- Do not try to influence the user’s review by pre-populating the comments section or selecting a five-star rating.

And, when users suggest improvements or highlight issues in the reviews, use the reply feature to acknowledge their feedback.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="make-use-of-markdown" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Make use of Markdown

<abbr title="The description, developer comments, EULA, Privacy policy, and version release notes">Some fields</abbr> in your add-on's listing support a limited set of Markdown.
<table>
   <thead>
      <tr>
         <th scope="col">Style</th>
         <th scope="col">Syntax</th>
         <th scope="col">Example</th>
         <th scope="col">Output</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Bold</td>
         <td><code>** **</code> or <code>__ __</code></td>
         <td><code>**This is bold**</code></td>
         <td><strong>This is bold</strong></td>
      </tr>
      <tr>
         <td>Italic</td>
         <td><code>* *</code> or <code>_ _</code>     </td>
         <td><code>_This is italicized_</code></td>
         <td><em>This is italicized</em></td>
      </tr>
      <tr>
        <td>Links</td>
        <td><code>[Text](Link)</code></td>
        <td><code>[Click me!](https://addons.mozilla.org/)</code></td>
        <td><a href="https://addons.mozilla.org/">Click me!</a></td>
      </tr>
      <tr>
        <td>Abbreviations</td>
        <td><code>*[abbr]: Abbreviation</code></td>
        <td><code>
        HTML is fun!<br/>*[HTML]: Hyper Text Markup Language
        </code></td>
        <td><abbr title="Hypertext Markup Language">HTML</abbr> is fun!</td>
      </tr>
      <tr>
        <td>Blockquote</td>
        <td><code>&gt;</code></td>
        <td><code>&gt; This is a blockquote.</code></td>
        <td><blockquote>This is a blockquote.</blockquote></td>
      </tr>
      <tr>
        <td>Code</td>
        <td><code>```</code></td>
        <td><code>
        ```<br/>console.log("Hello, world!");<br/>```
        </code></td>
        <td><code>console.log("Hello, world!");</code></td>
      </tr>
      <tr>
        <td>Unordered Lists</td>
        <td><code>-</code>, <code>*</code>, or <code>+</code></td>
        <td><code>- List Item
        </code></td>
        <td><ul><li>List item</li></ul></td>
      </tr>
      <tr>
        <td>Ordered Lists</td>
        <td><code>1.</code>, <code>2.</code>, <code>3.</code> ...</td>
        <td><code>1. List Item
        </code></td>
        <td><ol><li>List item</li></ol></td>
      </tr>
   </tbody>
</table>

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="some-other-points" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Some other points

- Where several people have helped in writing the add-on, make sure they are listed as Authors.
- Keep any requests for contributions appropriate.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->


