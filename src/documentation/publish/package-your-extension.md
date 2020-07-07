---
layout: sidebar
title: Package your extension
permalink: /documentation/publish/package-your-extension/
published: true
topic: Publish
tags: [add-on, distribution, publication, reviews, signing, installation]
contributors:
  [
    potterwrit,
    irenesmith,
    rebloor,
    mdnwebdocs-bot,
    Alston,
    andrewtruongmoz,
    julienw,
    hellosct1,
    david_ross,
    wbamberg,
    mrj,
    mickro,
  ]
last_updated_by: mickro
date: 2020-04-26
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Package your extension

During development, your extension will consist of a directory containing a manifest.json file and the other files the extension needs—scripts, icons, HTML documents, and so on. You need to zip these into a single file for uploading to AMO.

<!-- Note -->

{% capture note %}

Packaged extensions in Firefox are called "XPI files", which are ZIP files with a different extension.

You don't have to use the XPI extension when uploading to AMO.

{% endcapture %}
{% include modules/note.liquid
	content: note
	alert: false
%}

<!-- END: Note -->

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

The most convenient way to package your extension is to use [web-ext build](/documentation/develop/web-ext-command-reference/#web-ext-build). This tool automatically excludes files that are commonly unwanted in packages, such as `.git` files. Otherwise, follow the instructions below for your operating system.

<!-- Note -->

{% capture note %}

**Tip:** The ZIP file must be a ZIP of the extension's files themselves, not of the directory containing them.

{% endcapture %}
{% include modules/note.liquid
	content: note
	alert: false
%}

<!-- END: Note -->

{% endcapture %}
{% include modules/column-w-toc.liquid
	id: "package-intro"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Windows

1. Open the directory containing your extension's files.

2. Select files and directories needed to implement your extension, exclude those files that aren't needed to run the extension, such as `.git`, graphic sources, and similar files.

3. Open the shortcut menu and click **Send to** then **Compressed (zipped) folder**.

![Creating package windows image](/assets/img/documentation/publish/creating_package_windows.png)

{% endcapture %}
{% include modules/one-column.liquid
  id: "package-windows"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Mac OSX

1. Open the directory containing your extension's files.

2. Select files and directories needed to implement your extension, excludes those files that aren't needed to run the extension, such as `.git`, graphic sources, and similar files.

3. Open the shortcut menu and click **Compress** **_n_** **Items**.

![Creating package Mac image](/assets/img/documentation/publish/creating_package_mac.png)

{% endcapture %}
{% include modules/one-column.liquid
  id: "package-mac"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Linux / Mac OSX Terminal

1. Open Terminal.

2. Open the directory containing your extension's files, using the command
   `cd path/to/my-extension/`.

3. ZIP the content of the directory—remembering to excludes those files that aren't needed to run the extension, such as `.git`, graphic sources, and similar files—using the command `zip -r -FS ../my-extension.zip * --exclude '*.git*'`.

<!-- Note -->

{% capture note %}

See [the documentation for the `zip` command](https://linux.die.net/man/1/zip) for more information.

{% endcapture %}
{% include modules/note.liquid
	content: note
	alert: false
%}

<!-- END: Note -->

{% endcapture %}
{% include modules/one-column.liquid
  id: "package-linux"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.liquid -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.liquid -%}

<!-- END: Up Next -->
