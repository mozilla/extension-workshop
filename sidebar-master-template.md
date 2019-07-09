---
layout: sidebar
title: Sidebar Master Template
permalink: /sidebar-master-template/
published: false
topic: Develop
tags: [label, distribution, install, remove]
contributors: [lancecummings, caitmuenster, muffinresearch]
last_updated_by: lancecummings
date: 2019-06-24 09:00:00
skip_index: true
---

<!-- Page Hero Banner -->

<section class="page-hero">
<div class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="page-hero-description" markdown="1">
<p class="section-title"><small>{{ page.topic }}</small></p>

# Develop

Short and brief description of the sort of content you will find on this page.

</div>
<div class="page-hero-cta">

<a href="/documentation/develop/getting-started-with-web-ext/" class="button">Do first thing</a>
<a href="/documentation/develop/build-an-extension-in-5-minutes/" class="button secondary">Do second thing</a>

</div>
</div>
</article>
</div>
</section>

<!-- END: Overview Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="section-1" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.html -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Label Title 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

<!-- Note -->

<p class="note">Note that this is a one-way conversion. You cannot update an extension using WebExtensions to use a legacy technology. This means that you must be sure that you are ready to commit to using WebExtension APIs before you submit the updated add-on to AMO.</p>

<!-- END: Note -->

<!-- Table -->

<div class="table-wrapper table-scroll" markdown="1">

| Column Title                          | Column Title        | Column Title               |
| ------------------------------------- | ------------------- | -------------------------- |
| Content scripts matching URL patterns | [`page-mod`](#) API | [`content-scripts`](#) key |
| Content scripts matching URL patterns | [`page-mod`](#) API | [`content-scripts`](#) key |
| Content scripts matching URL patterns | [`page-mod`](#) API | [`content-scripts`](#) key |

</div>

<!-- END: Table -->

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="section-2" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Label Title 2

You reference all extensions API functions using a namespace, for example, `browser.alarms.create([delayInMinutes]);` would create an alram in Firefox that goes off after the time specified in `code goes here`

[`code link goes here`](https://www.firefox.com 'Code link example') and [`runtime.sendNativeMessage()`](https://www.firefox.com 'Code link example')

<!-- Syntax Highlighting -->

{% highlight javascript linenos %}
function setCurrentChoice(result) {
document.querySelector('#color').value = result.color || 'blue';
}
{% endhighlight %}

<!-- END: Syntax Highlighting -->

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Page navigation section
	(wrap modules in a page section container
	when they are all part of the section
	referenced by a table of contents link) -->

<section id="section-3" class="page-section-container">

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Label Title 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

<p class="note alert">Support for extensions using XUL/XPCOM or the Add-on SDK was removed in Firefox 57, released November 2017. As there is no supported version of Firefox enabling these technologies, this page will be removed by December 2020.</p>

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x align-middle">
<div class="cell small-12 medium-6 medium-order-2" markdown="1">

![Example Alt Tag Description]({% asset "fpo-half-width-image-1.jpg" @path @optim %} "Example Title Tag Description")

</div>
<div class="cell small-12 medium-6" markdown="1">

#### [Laser Cat](https://www.firefox.com)

This page provides a succinct description of the extension, clear instructions on how to fire your cat’s lasers, and how to turn your laser cat on and off.

</div>
</article>
</section>

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module With Aside -->

<section class="module">
<article class="module-content grid-x grid-padding-x align-middle">
<div class="cell small-12 medium-6" markdown="1">

![Example Alt Tag Description]({% asset "fpo-half-width-image-2.png" @path @optim %} "Example Title Tag Description")

</div>
<div class="cell small-12 medium-6" markdown="1">

#### [Ghostery - Privacy Ad Blocker](https://www.firefox.com)

As the features of Ghostery are mostly silent, this onboarding screen gives users two options for the initial setup: A simple one-click option and a link to the full settings so they can customize how Ghostery works.

</div>
</article>
<aside class="module-aside tile" markdown="1">

###### Related Content

Cards contain content and links about a single subject.

[Related Article](https://www.firefox.com)

</aside>
</section>

<!-- END: Two Column Body Module With Aside -->

</section>

<!-- END: page navigation section -->

<!-- Single Column Body Module -->

<section id="section-4" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Label Title 4

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

<!-- Expandable List -->

<dl class="expandable-list" aria-label="Accordion Control Button Group">
<dt><button aria-controls="content-1" aria-expanded="true">How do I change my developer account information?</button></dt>
<dd aria-hidden="false" id="content-1">Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, <a href="#" title="link title">read App pricing</a>.</dd>

<dt><button aria-controls="content-2" aria-expanded="true">How do I manage access to account information for multiple members of my team or company?</button></dt>
<dd aria-hidden="false" id="content-2">Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, <a href="#" title="link title">read App pricing</a>.</dd>

<dt><button aria-controls="content-3" aria-expanded="true">What is the developer's revenue share?</button></dt>
<dd aria-hidden="false" id="content-3">Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, <a href="#" title="link title">read App pricing</a>.</dd>
</dl>

<!-- END: Expandable List -->

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Phase 1 Components

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Full Width Image -->

<section class="module image-with-caption">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

![Screenshot Remembear]({% asset "content-guidelines/example-remembear.png" @optim @path %} "Screenshot Remembear") Full width image (above)

</div>
</article>
</section>

<!-- END: Full Width Image -->

<!-- Half Width Images -->

<section class="module image-with-caption">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12 medium-6" markdown="1">

![Screenshot Remembear]({% asset "content-guidelines/example-remembear.png" @path @optim %} "Screenshot Remembear") Half width image (above)

</div>
<div class="cell small-12 medium-6" markdown="1">

![Screenshot Remembear]({% asset "content-guidelines/example-remembear.png" @path @optim %} "Screenshot Remembear") Half width image (above)

</div>
</article>
</section>

<!-- END: Half Width Images -->

<!-- Video Popup Thumbnail -->

<section class="module video-popup">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

[![What’s Great Content and Design?]({% asset "content-guidelines/example-thumbnail.jpg" @path @optim %})](a0_OsLGI0k4 'What’s Great Content and Design?')

</div>
</article>
</section>

<!-- END: Video Popup Thumbnail -->

<!-- Half Width Video Popup Thumbnails -->

<section class="module video-popup">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12 medium-6" markdown="1">

![What’s Great Content and Design?]({% asset "content-guidelines/example-thumbnail.jpg" @path @optim %} "What’s Great Content and Design?")

#### What’s Great Content and Design?

Featuring Madhava Enros, Senior Director of Firefox User Experience, and Dietrich Ayala, extension developer.

</div>
<div class="cell small-12 medium-6" markdown="1">

[![What’s Great Content and Design?]({% asset "content-guidelines/example-thumbnail.jpg" @path @optim %})](a0_OsLGI0k4 'What’s Great Content and Design?')

#### What’s Great Content and Design?

Featuring Madhava Enros, Senior Director of Firefox User Experience, and Dietrich Ayala, extension developer.

</div>
</article>
</section>

<!-- END: Half Width Video Popup Thumbnails -->

<!-- Icon Grid *** use "shrink" class to fit grid to image size -OR- use "auto" class to fit images to grid width *** -->

<section class="module icon-grid">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

### Icons

<small>Examples of goood icons</small>

</div>
<div class="cell shrink">
	<p><img src="{% asset "content-guidelines/example-icon.png" @path @optim %}" alt="Icon" title="Icon" width="53"></p>
</div>
<div class="cell shrink">
	<p><img src="{% asset "content-guidelines/example-icon.png" @path @optim %}" alt="Icon" title="Icon" width="53"></p>
</div>
<div class="cell shrink">
	<p><img src="{% asset "content-guidelines/example-icon.png" @path @optim %}" alt="Icon" title="Icon" width="53"></p>
</div>
</article>
</section>

<!-- END: Image Grid -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

Your extension’s name is critical. It shows up everywhere—in search results, on [addons.mozilla.org](https://addons.mozilla.org 'addons.mozilla.org'), and in the browser itself. It’s sometimes one of the few pieces of information that a user has to determine whether or not they are interested in what you built.

Research shows that people really do take an extension’s name into account when making installation decisions. And, what you put into the extension name field becomes your URL on [addons.mozilla.org](https://addons.mozilla.org 'addons.mozilla.org').

Between your extension name and subtitle, you have up to 70 characters to use—that’s because 70 is the max character limit for your headline in external search results. It’s best to keep your extension name shorter so you have more characters left over for your subtitle.

- Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Enim facilisis gravida neque convallis a cras.
- Id diam vel quam elementum pulvinar etiam non. Quam id leo in vitae turpis.

### Extension Name Do’s and Don’ts

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Do this -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="do-this" markdown="1"><header><h6>Do This</h6></header>

1. **Make it memorable**
2. **Make it unique**
3. **Keep it short for better display on smaller screens**
4. **Make it easy to read and say**
5. **Give an idea or hint about what your extension does with an illustrative word or metaphor**

<!-- Example (Block) -->

<div class="example" markdown="1">

Examples: An extension that saves passwords is called **Remembear**

An extension that puts a cat on new tabs is called **Tabbycat**

An extension that improves YouTube is called **Enhancer for YouTube**

</div>

<!-- END: Example (Block) -->

</div>
</div>
</article>
</section>

<!-- END: Do this -->

<!-- Not this -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="not-this" markdown="1"><header><h6>Not This</h6></header>

###### 1. Don't include a description.

Save these details for your subtitle and description.

<!-- Example (Inline) -->

<span class="example">Example: Videomix, a fast video downloader</span>

<!-- END: Example (Inline) -->

###### 2. Don't stuff it with keywords.

Google is smarter than this and it just makes your extension look untrustworthy.

<!-- Example (Inline) -->

<span class="example">Example: Youtube Download Videos, Convert, Media, MP3, MP4, Free.</span>

<!-- END: Example (Inline) -->

###### 3. Don't use random words to differentiate, like “Barbara Notetaker.”

Instead, create a descriptive name that is not already in use, like “Instant Notetaker.”

###### 4. Don't call it something with no meaning, like “hoyv.”

While the name “hoyv” doesn’t work, the name “uBlock Origin” for an ad-blocking extension does because it contains the word “block”.

###### 5. Don't include "WebExtension," “Firefox” or “Mozilla."

###### 6. Don't include version number or a previous name.

<!-- Example (Inline) -->

<span class="example">Example: Weatherchanger (fix version)</span>

<!-- END: Example (Inline) -->

###### 7. Don't make it hard to read or say.

<!-- Example (Inline) -->

<span class="example">Example: TrLrs! Tab Changer.</span>

<!-- END: Example (Inline) -->

###### Remembear Example:

<!-- Full Width Image -->

<section class="image-with-caption" markdown="1">
![Screenshot Remembear]({% asset "content-guidelines/example-remembear.png" @path @optim %} "Screenshot Remembear")
</section>

<!-- END: Full Width Image -->

###### List Example:

- [Honey ](https://firefox.com 'Honey ')
- [Ghoastery](https://firefox.com 'Ghoastery')
- [Disconnect](https://firefox.com 'Disconnect')
- [Ecoesia](https://firefox.com 'Ecoesia')
- [Mate Translate](https://firefox.com 'Mate Translate')

</div>
</div>
</article>
</section>

<!-- END: Not this -->

<!-- Do this, not this, side-by-side -->

<section class="module do-this-not-this">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12 medium-6">
<div class="do-this" markdown="1"><header><h6>Do This</h6></header>

1. **Make it memorable**
2. **Make it unique**
3. **Keep it short for better display on smaller screens**

<!-- Example (Block) -->

<div class="example" markdown="1">

Examples: An extension that saves passwords is called **Remembear**

An extension that puts a cat on new tabs is called **Tabbycat**

An extension that improves YouTube is called **Enhancer for YouTube**

</div>

<!-- END: Example (Block) -->

</div>
</div>
<div class="cell small-12 medium-6">
<div class="not-this" markdown="1"><header><h6>Not This</h6></header>

1. **Make it memorable**
2. **Make it unique**
3. **Keep it short for better display on smaller screens**

<!-- Example (Block) -->

<div class="example" markdown="1">

Examples: An extension that saves passwords is called **Remembear**

An extension that puts a cat on new tabs is called **Tabbycat**

An extension that improves YouTube is called **Enhancer for YouTube**

</div>

<!-- END: Example (Block) -->

</div>
</div>
</article>
</section>

<!-- END: Do this, not this, side-by-side -->

<!-- Tile -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12 tile" markdown="1">

#### Requirements

- Minimum length: 2 characters
- Maximum length: 70 characters between extension name and subtitle
- Lorem ipsum: dolor sit amet, consectetur adipiscing elit
- Sed do eiusmod: tempor incididunt ut labore et dolore magna aliqua
- Ut enim ad: minim veniam, quis nostrud exercitation ullamco laboris
- Nisi ut aliquip: ex ea commodo consequat
- Duis aute: irure dolor in reprehenderit in voluptate velit esse cillum
- Excepteur sint: occaecat cupidatat non proident
- Bunt in culpa: qui officia deserunt mollit anim id est laborum

</div>
</article>
</section>

<!-- END: Tile -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
