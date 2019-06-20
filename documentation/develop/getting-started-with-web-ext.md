---
layout: sidebar
title: Getting started with web-ext
permalink: /documentation/develop/getting-started-with-web-ext/
published: false
topic: Develop
tags: label distribution install remove
contributors: caitmuenster muffinresearch bqbn
author: caitmuenster
date: 2019-06-24 09:00:00
---

<!-- Page Hero Banner -->

<section class="page-hero">
<div class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">
<div class="page-hero-description" markdown="1">
<p class="section-title"><small>{{ page.topic }}</small></p>

# Getting started with web-ext

web-ext is a command line tool designed to speed up various parts of the extension development process, making development faster and easier. This article explains how to install and use web-ext.

</div>
<div class="page-hero-cta">

<a href="/documentation/develop/getting-started-with-web-ext/" class="button">Do first thing</a>
<a href="/documentation/develop/build-an-extension-in-5-minutes" class="button secondary">Do second thing</a>

</div>
</div>
</article>
</div>
</section>

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="installation-section" class="module">
<aside class="module-aside table-of-contents" markdown="1">

###### Contents

1. [Installation](#installation-section 'Installation')
2. [Using web-ext](#using-web-ext-section 'Using web-ext')
3. [See also](#see-also-section 'See also')

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Installation

`web-ext` is a node-based application that you install with the <a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="nodejs/npm">nodejs/npm</a> tool. Install web-ext using the following command:

<!-- Syntax Highlighting -->

{% highlight console %}
npm install --global web-ext
{% endhighlight %}

<!-- END: Syntax Highlighting -->

`web-ext` requires the current <a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="LTS">LTS</a> (long-term support) versions of <a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="NodeJS">NodeJS</a>.

To test whether the installation worked run the following command, which displays the `web-ext` version number:

<!-- Syntax Highlighting -->

{% highlight console %}
web-ext --version
{% endhighlight %}

<!-- END: Syntax Highlighting -->

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="using-web-ext-section" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Using web-ext

Before you start using `web-ext` locate an example extension to use—if you don’t have one, use one from the <a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="webextensions-examples">webextensions-examples</a> repo.

#### Testing out an extension

Test an extension in Firefox by `cd`'ing into your extensions’s root directory and entering:

<!-- Syntax Highlighting -->

{% highlight console %}
web-ext run
{% endhighlight %}

<!-- END: Syntax Highlighting -->

This starts Firefox and loads the extension temporarily in the browser, just as you can on the about:debugging page. Note that this `web-ext` method has the same limitations regarding prompts for permissions and restart features as about:debugging.

#### Automatic extension reloading

The `run` command watches your source files and tells Firefox to reload the extension after you edit and save a file. For exmaple, if you changed the `name` property in your `manifest.json` file, Firefox displays the new name. This makes it easy to try out new features because you can see the effect immediately. The automatic reloading feature is active by default, you use it like this:

<!-- Syntax Highlighting -->

{% highlight console %}
web-ext run
{% endhighlight %}

<!-- END: Syntax Highlighting -->

<p class="note">Extension reloading is only supported in Firefox 49 or higher.</p>

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="see-also-section" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## See also

<a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="webextensions-examples">webextensions-examples</a>
<br>
<a href="https://www.firefox.com" target="_blank" rel="noreferrer noopener" title="web-ext command reference">web-ext command reference</a>

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

<section class="module up-next">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

###### Up Next

</div>

<!-- Tile -->

<a href="/documentation/develop/web-ext-webpack-plug-in/" class="cell auto tile tile-block-link">
<div class="block-link" markdown="1">
	
Develop

##### Web-ext Webpack plug-in

</div>
</a>

<!-- END: Tile -->

<!-- Tile -->

<a href="/documentation/develop/web-ext-command-reference" class="cell auto tile tile-block-link">
<div class="block-link" markdown="1">
	
Develop

##### Web-ext command reference

</div>
</a>

<!-- END: Tile -->

<!-- Tile -->

<a href="/documentation/develop/browser-api-polyfill" class="cell auto tile tile-block-link">
<div class="block-link" markdown="1">
	
Develop

##### Browser API Polyfill

</div>
</a>

<!-- END: Tile -->

</article>
</section>

<!-- END: Up Next -->
