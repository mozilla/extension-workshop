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

{% capture page_hero_banner_content %}

# Develop

Short and brief description of the sort of content you will find on this page.

{% endcapture %}
{% include modules/page-hero.html
	content: page_hero_banner_content
	cta1_label: "Do first thing"
	cta1_url: "#"
	cta2_label: "Do second thing"
	cta2_url: "#"
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Label Title 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

<!-- Note -->

{% capture note %}

Note that this is a one-way conversion. You cannot update an extension using WebExtensions to use a legacy technology. This means that you must be sure that you are ready to commit to using WebExtension APIs before you submit the updated add-on to AMO.

{% endcapture %}
{% include modules/note.html
	content: note
	alert: false
%}

<!-- END: Note -->

<!-- Table -->

{% capture table %}

| Column Title                          | Column Title        | Column Title               |
| ------------------------------------- | ------------------- | -------------------------- |
| Content scripts matching URL patterns | [`page-mod`](#) API | [`content-scripts`](#) key |
| Content scripts matching URL patterns | [`page-mod`](#) API | [`content-scripts`](#) key |
| Content scripts matching URL patterns | [`page-mod`](#) API | [`content-scripts`](#) key |

{% endcapture %}
{% include modules/table.html
	content: table
%}

<!-- END: Table -->

{% endcapture %}
{% include modules/column-w-toc.html
	id: "section-1"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

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

{% endcapture %}
{% include modules/one-column.html
	id: "section-2"
	content: content
	aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Page section container
	(wrap modules in a page section container
	when they are all part of the same section
	referenced by a table of contents link) -->
<section id="section-3" class="page-section-container">

<!-- Single Column Body Module -->

{% capture content %}

## Label Title 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

<!-- Alert -->

{% capture alert %}

Support for extensions using XUL/XPCOM or the Add-on SDK was removed in Firefox 57, released November 2017. As there is no supported version of Firefox enabling these technologies, this page will be removed by December 2020.

{% endcapture %}
{% include modules/note.html
	content: alert
	alert: true
%}

<!-- END: Alert -->

{% endcapture %}
{% include modules/one-column.html
	id: ""
	content: content
	aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Two Column Body Module -->

{% capture col_1_content %}

![Example Alt Tag Description](/_assets/img/fpo-half-width-image-1.jpg "Example Title Tag Description")

{% endcapture %}
{% capture col_2_content %}

#### [Laser Cat](https://www.firefox.com)

This page provides a succinct description of the extension, clear instructions on how to fire your cat’s lasers, and how to turn your laser cat on and off.

{% endcapture %}
{% include modules/two-column.html
	col_1: col_1_content
	col_2: col_2_content
	reverse: true
%}

<!-- END: Two Column Body Module -->

<!-- Two Column Body Module With Aside -->

{% capture col_1_content %}

![Example Alt Tag Description](/_assets/img/fpo-half-width-image-2.png "Example Title Tag Description")

{% endcapture %}
{% capture col_2_content %}

#### [Ghostery - Privacy Ad Blocker](https://www.firefox.com)

As the features of Ghostery are mostly silent, this onboarding screen gives users two options for the initial setup: A simple one-click option and a link to the full settings so they can customize how Ghostery works.

{% endcapture %}
{% capture aside %}

###### Related Content

Cards contain content and links about a single subject.

[Related Article](https://www.firefox.com)

{% endcapture %}
{% include modules/two-column.html
	col_1: col_1_content
	col_2: col_2_content
	aside: aside
	reverse: false
%}

<!-- END: Two Column Body Module With Aside -->

</section>
<!-- END: page navigation section -->

<!-- Single Column Body Module -->

{% capture content %}

## Label Title 4

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

<!-- Expandable List -->

{% capture expandable-list %}

<!-- List Item 1 -->

{% capture item-content %}

Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, [read App pricing](#).

{% endcapture %}
{% include modules/expandable-list-item.html
	id: "content-1"
	title: "How do I change my developer account information?"
	content: item-content
%}

<!-- END: List Item 1 -->

<!-- List Item 2 -->

{% capture item-content %}

Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, [read App pricing](#).

{% endcapture %}
{% include modules/expandable-list-item.html
	id: "content-2"
	title: "How do I change my developer account information?"
	content: item-content
%}

<!-- END: List Item 2 -->

<!-- List Item 3 -->

{% capture item-content %}

Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, [read App pricing](#).

{% endcapture %}
{% include modules/expandable-list-item.html
	id: "content-3"
	title: "How do I change my developer account information?"
	content: item-content
%}

<!-- END: List Item 3 -->

{% endcapture %}
{% include modules/expandable-list.html
	list: expandable-list
%}

<!-- END: Expandable List -->

{% endcapture %}
{% include modules/one-column.html
	id: "section-4"
	content: content
	aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Phase 1 Components

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed.

<!-- Image with caption -->

{% include modules/image-with-caption.html
	source: "content-guidelines/example-remembear.png"
	alt: "Screenshot Remembear"
	caption: "Full width image (above)"
%}

<!-- END: Image with caption -->

{% endcapture %}
{% include modules/one-column.html
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Half Width Images -->

{% capture col_1_content %}

<!-- Image with caption -->

{% include modules/image-with-caption.html
	source: "content-guidelines/example-remembear.png"
	alt: "Screenshot Remembear"
	caption: "Full width image (above)"
%}

<!-- END: Image with caption -->

{% endcapture %}
{% capture col_2_content %}

<!-- Image with caption -->

{% include modules/image-with-caption.html
	source: "content-guidelines/example-remembear.png"
	alt: "Screenshot Remembear"
	caption: "Full width image (above)"
%}

<!-- END: Image with caption -->

{% endcapture %}
{% include modules/two-column.html
	col_1: col_1_content
	col_2: col_2_content
	reverse: false
%}

<!-- END: Half Width Images -->

<!-- Single Column Body Module -->

{% capture content %}

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.html
	title: "What’s Great Content and Design?"
	youtube_id: "a0_OsLGI0k4"
	image: "content-guidelines/example-thumbnail.jpg"
	alt: "What’s Great Content and Design?"
%}

<!-- END: Video Popup Thumbnail -->

{% endcapture %}
{% include modules/one-column.html
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Half Width Video Popup Thumbnails -->

{% capture col_1_content %}

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.html
	title: "What’s Great Content and Design?"
	youtube_id: "a0_OsLGI0k4"
	image: "content-guidelines/example-thumbnail.jpg"
	alt: "What’s Great Content and Design?"
%}

<!-- END: Video Popup Thumbnail -->

#### What’s Great Content and Design?

Featuring Madhava Enros, Senior Director of Firefox User Experience, and Dietrich Ayala, extension developer.

{% endcapture %}
{% capture col_2_content %}

<!-- Video Popup Thumbnail -->

{% include modules/video-popup.html
	title: "What’s Great Content and Design?"
	youtube_id: "a0_OsLGI0k4"
	image: "content-guidelines/example-thumbnail.jpg"
	alt: "What’s Great Content and Design?"
%}

<!-- END: Video Popup Thumbnail -->

#### What’s Great Content and Design?

Featuring Madhava Enros, Senior Director of Firefox User Experience, and Dietrich Ayala, extension developer.

{% endcapture %}
{% include modules/two-column.html
	col_1: col_1_content
	col_2: col_2_content
	reverse: false
%}

<!-- END: Half Width Video Popup Thumbnails -->

<!-- Icon Grid:
	 Set fit attribute to "shrink" to fit grid to image size
	 -OR-
	 Set fit attribute to "auto" to fit images to grid width
	 -->

{% capture content %}

### Icons

<small>Examples of goood icons</small>

{% endcapture %}
{% capture grid %}

<!-- Icon Cell -->

{% include modules/icon-grid-cell.html
	image: "content-guidelines/example-icon.png"
	alt: "Icon"
	width: "53"
	fit: "shrink"
%}

<!-- END: Icon Cell -->

<!-- Icon Cell -->

{% include modules/icon-grid-cell.html
	image: "content-guidelines/example-icon.png"
	alt: "Icon"
	width: "53"
	fit: "shrink"
%}

<!-- END: Icon Cell -->

<!-- Icon Cell -->

{% include modules/icon-grid-cell.html
	image: "content-guidelines/example-icon.png"
	alt: "Icon"
	width: "53"
	fit: "shrink"
%}

<!-- END: Icon Cell -->

{% endcapture %}
{% include modules/icon-grid.html
	content: content
	grid: grid
%}

<!-- END: Icon Grid -->

<!-- Single Column Body Module -->

{% capture content %}

Your extension’s name is critical. It shows up everywhere—in search results, on [addons.mozilla.org](https://addons.mozilla.org 'addons.mozilla.org'), and in the browser itself. It’s sometimes one of the few pieces of information that a user has to determine whether or not they are interested in what you built.

Research shows that people really do take an extension’s name into account when making installation decisions. And, what you put into the extension name field becomes your URL on [addons.mozilla.org](https://addons.mozilla.org 'addons.mozilla.org').

Between your extension name and subtitle, you have up to 70 characters to use—that’s because 70 is the max character limit for your headline in external search results. It’s best to keep your extension name shorter so you have more characters left over for your subtitle.

- Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Enim facilisis gravida neque convallis a cras.
- Id diam vel quam elementum pulvinar etiam non. Quam id leo in vitae turpis.

### Extension Name Do’s and Don’ts

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

<!-- Do this -->

{% capture dothis %}

1. **Make it memorable**
2. **Make it unique**
3. **Keep it short for better display on smaller screens**
4. **Make it easy to read and say**
5. **Give an idea or hint about what your extension does with an illustrative word or metaphor**

<!-- Example (Block) -->

{% capture example %}

Examples: An extension that saves passwords is called **Remembear**

An extension that puts a cat on new tabs is called **Tabbycat**

An extension that improves YouTube is called **Enhancer for YouTube**

{% endcapture %}
{% include modules/example.html
	content: example
	layout: "block"
%}

<!-- END: Example (Block) -->

{% endcapture %}
{% include modules/do-this.html
	title: "Do This"
	content: dothis
%}

<!-- END: Do this -->

<!-- Not this -->

{% capture notthis %}

###### 1. Don't include a description.

Save these details for your subtitle and description.

<!-- Example (Inline) -->

{% include modules/example.html
	content: "Example: Videomix, a fast video downloader"
	layout: "inline"
%}

<!-- END: Example (Inline) -->

###### 2. Don't stuff it with keywords.

Google is smarter than this and it just makes your extension look untrustworthy.

<!-- Example (Inline) -->

{% include modules/example.html
	content: "Example: Youtube Download Videos, Convert, Media, MP3, MP4, Free."
	layout: "inline"
%}

<!-- END: Example (Inline) -->

###### 3. Don't use random words to differentiate, like “Barbara Notetaker.”

Instead, create a descriptive name that is not already in use, like “Instant Notetaker.”

###### 4. Don't call it something with no meaning, like “hoyv.”

While the name “hoyv” doesn’t work, the name “uBlock Origin” for an ad-blocking extension does because it contains the word “block”.

###### 5. Don't include "WebExtension," “Firefox” or “Mozilla."

###### 6. Don't include version number or a previous name.

<!-- Example (Inline) -->

{% include modules/example.html
	content: "Example: Weatherchanger (fix version)"
	layout: "inline"
%}

<!-- END: Example (Inline) -->

###### 7. Don't make it hard to read or say.

<!-- Example (Inline) -->

{% include modules/example.html
	content: "Example: TrLrs! Tab Changer."
	layout: "inline"
%}

<!-- END: Example (Inline) -->

###### Remembear Example:

![Screenshot Remembear](/_assets/img/content-guidelines/example-remembear.png "Screenshot Remembear")

###### List Example:

- [Honey ](https://firefox.com 'Honey ')
- [Ghoastery](https://firefox.com 'Ghoastery')
- [Disconnect](https://firefox.com 'Disconnect')
- [Ecoesia](https://firefox.com 'Ecoesia')
- [Mate Translate](https://firefox.com 'Mate Translate')

{% endcapture %}
{% include modules/not-this.html
	title: "Not This"
	content: notthis
%}

<!-- END: Not this -->

{% endcapture %}
{% include modules/one-column.html
	id: "section-2"
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Do this, not this, side-by-side -->

{% capture do_this_content %}

1. **Make it memorable**
2. **Make it unique**
3. **Keep it short for better display on smaller screens**

<!-- Example (Block) -->

{% capture example %}

Examples: An extension that saves passwords is called **Remembear**

An extension that puts a cat on new tabs is called **Tabbycat**

An extension that improves YouTube is called **Enhancer for YouTube**

{% endcapture %}
{% include modules/example.html
	content: example
	layout: "block"
%}

<!-- END: Example (Block) -->

{% endcapture %}
{% capture not_this_content %}

1. **Make it memorable**
2. **Make it unique**
3. **Keep it short for better display on smaller screens**

<!-- Example (Block) -->

{% capture example %}

Examples: An extension that saves passwords is called **Remembear**

An extension that puts a cat on new tabs is called **Tabbycat**

An extension that improves YouTube is called **Enhancer for YouTube**

{% endcapture %}
{% include modules/example.html
	content: example
	layout: "block"
%}

<!-- END: Example (Block) -->

{% endcapture %}
{% include modules/do-this-not-this.html
	do_this_title: "Do This"
	do_this_content: do_this_content
	not_this_title: "Not This"
	not_this_content: not_this_content
%}

<!-- END: Do this, not this, side-by-side -->

<!-- Single Column Body Module -->

{% capture content %}

<!-- Tile -->

{% capture tile %}

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

{% endcapture %}
{% include modules/tile.html
	content tile
%}

<!-- END: Tile -->

{% endcapture %}
{% include modules/one-column.html
	content: content
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
