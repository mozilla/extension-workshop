---
layout: sidebar
title: Develop
permalink: /documentation/develop/
published: false
---

<!-- Overview Page Hero Banner -->

<section class="overview-hero" style="background-image: url({% asset "develop-overview-hero-bg.jpg" @optim @path %});">
<div class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="overview-hero-description" markdown="1">

# Develop

Short and brief description of the sort of content you will find on this page.

</div>
<div class="overview-hero-cta">

<a href="/documentation/develop/getting-started-with-web-ext/" class="button">Do first thing</a>
<a href="/documentation/develop/build-an-extension-in-5-minutes" class="button secondary">Do second thing</a>

</div>
</div>
</article>
</div>
</section>

<!-- END: Overview Page Hero Banner -->

<!-- Single Column Body Module -->

<section class="module">
<aside class="module-aside table-of-contents" markdown="1">

<h6>Contents</h6>

1. [Summary](#summary "Develop Overview Summary")
2. [Description](#description "Develop Overview Description")
3. [Flow](#Flow "Develop Overview Flow")
4. [Instructions](#instructions "Develop Overview Instructions")

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Label Title 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed. 

<!-- Note -->

<p class="note">Note that this is a one-way conversion. You cannot update an extension using WebExtensions to use a legacy technology. This means that you must be sure that you are ready to commit to using WebExtension APIs before you submit the updated add-on to AMO.</p>

<!-- END: Note -->

<!-- Table -->

<table>
	<thead>
		<tr>
			<th>Column Title</th>
			<th>Column Title</th>
			<th>Column Title</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Content scripts matching URL patterns</td>
			<td><code>page-mod</code> API</td>
			<td><code>content-scripts</code> key</td>
		</tr>
		<tr>
			<td>Content scripts matching URL patterns</td>
			<td><code>page-mod</code> API</td>
			<td><code>content-scripts</code> key</td>
		</tr>
		<tr>
			<td>Content scripts matching URL patterns</td>
			<td><code>page-mod</code> API</td>
			<td><code>content-scripts</code> key</td>
		</tr>
	</tbody>
</table>

<!-- END: Table -->

## Label Title 2

You reference all extensions API functions using a namespace, for example, `browser.alarms.create([delayInMinutes]);` would create an alram in Firefox that goes off after the time specified in `code goes here`

[`code link goes here`](https://www.firefox.com "Code link example") and [`runtime.sendNativeMessage()`](https://www.firefox.com "Code link example")

<div>
	<p>Placeholder for syntax highlighting code block</p>
</div>

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

<h4><a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="External Link Example">Laser Cat</a></h4>

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

<h4><a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="External Link Example">Ghostery - Privacy Ad Blocker</a></h4>

As the features of Ghostery are mostly silent, this onboarding screen gives users two options for the initial setup: A simple one-click option and a link to the full settings so they can customize how Ghostery works.

</div>
</article>
<aside class="module-aside tile" markdown="1">

###### Related Content

Cards contain content and links about a single subject.

<a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="External Link Example">Related Article</a>

</aside>
</section>

<!-- END: Two Column Body Module With Aside -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Label Title 4

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed. 

<!-- Expandable List -->

<dl class="expandable-list">
<dt>How do I change my developer account information?</dt>
<dd>Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, <a href="#" title="link title">read App pricing</a>.</dd>

<dt>How do I manage access to account information for multiple members of my team or company?</dt>
<dd>Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, <a href="#" title="link title">read App pricing</a>.</dd>

<dt>What is the developer's revenue share?</dt>
<dd>Developers receive 70% of the pre-VAT and fee amount. For instance, if the US price is $.99 (Tier 10), the Euro price is €.89, and the VAT is 20% (based on a UK standard VAT rate), the pre-VAT price is €.74, which is around $.99 (sometimes the equivalent price tier may be higher and sometimes lower). Developers receive 70% of the €. For more information on price tiers and pricing, <a href="#" title="link title">read App pricing</a>.</dd>
</dl>

<!-- END: Expandable List -->

</div>
</article>
</section>