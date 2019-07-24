---
layout: sidebar
title: Source code submission
permalink: /documentation/publish/source-code-submission/
published: false
topic: Publish
tags: [Add-ons, distribution, Extensions, Review Policy]
contributors: [kewisch, mdnwebdocs-bot, One, rebloor, wbamberg, atsay]
last_updated_by: kewisch
date: 2019-06-10 06:33:38
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Source code submission

To complete the review process at [addons.mozilla.org](https://addons.mozilla.org) (AMO), reviewers must be able to read the code in your extension. Some build processes render extension code difficult to read. These processes include minifying your code, as well as the use of module bundlers or similar tools, such as [webpack](https://webpack.js.org/). In this case, when you upload your extension to AMO, you will need to provide your source code and instructions for building that source code, where build processes render your extension’s code hard to read.

If your add-on uses third-party libraries, please see [our requirements](/documentation/Publish/third-party-library-usage/) for those.

<p class="note" markdown="1">

Minifying your code isn't recommended. It rarely protects your code, as these techniques can be reversed using tools such as [JSNice](http://jsnice.org/) and [JS Beautifier](http://jsbeautifier.org/). Unlike the advantage that minified code offers web pages loaded over the internet, extension code is loaded from a local source, so performance benefits are not significant.

</p>

If you do not provide source code with clear instructions and the reviewer cannot evaluate your extension, it may be rejected.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Provide your extension source code

Here you can find details of when you must provide your extension’s source code, details of the information you need to provide about the build process, and how to upload your source code.

### When must source code be uploaded?

You must upload your extension’s source code when its code was created using:

- code minifiers, such as [uglifyJS](https://github.com/mishoo/UglifyJS2) or [Google Closure Compiler](https://developers.google.com/closure/compiler/).
- tools that generate a single file from other files, such as [browserify](http://browserify.org/) or [webpack](https://webpack.js.org/).
- template engines, such as [handlebars](http://handlebarsjs.com/) or [css2js](https://github.com/grnadav/css2js).
- any other custom tool that takes files, applies pre-processing, and generates file(s) to include in the extension.

<p class="note" markdown="1">

Any source code that you submit is only accessible to a small group of admin reviewers.

</p>

### Provide build instructions

An important aspect of reviewing source code is confirming that it's the same code as used in your extension. This is to ensure that a malware author doesn't provide legitimate-looking sources, but has added a backdoor to the minified code. It is, therefore, necessary for the reviewer to rebuild your extension from the source code.

To reproduce the build, the reviewer runs the instructions you provided and then uses a diff tool to compare the generated sources to those in the extension. There must be no differences. The easiest way to provide the build instructions is to include a README file with the submitted source code. If it’s one or two files that are processed, for example obfuscated, the instructions can be something like `run uglifyjs data/mycoolstuff.js`. If the extension is more complex, provide a script to perform the build. When preparing your instructions, remember to include:

- operating system and environment requirements.
- details, including required version and installation instructions, of any tools or utilities that need to be downloaded, for example, [yuicompressor](http://yui.github.io/yuicompressor/).
- a list of all the commands to generate an identical copy of the extension from the source code, for example, npm install or a grunt target. Ideally, you should include every command in the build script file.

The tools you use to minify, or concatenate your source code:

- must be open source: we cannot verify a build made with commercial tools.
- cannot be web-based: all review builds are run locally. Using a web-based tool doesn’t allow the reviewers to be certain that your sources match the minified code. Some web-based tools offer a version that can be run locally, in which case provide a script to run the tool locally.

When using npm, yarn, or other package management tools that support it, be sure to include the lockfile, for example, `package-lock.json`. Otherwise, reviewers may use a different version resulting in differences between the generated code and that in the extension.

Assume the reviewer hasn’t installed any developer tools on their computer, that is, make sure you include all the set-up and build instructions to create your code. However, you don’t need to describe how to install common tools such as npm or node.

Tip: Use a build target relative to the directory containing the source, such as a `dist` subfolder. This makes it easier for the reviewer to locate your extension’s built code.

### How to upload source code

<p class="note" markdown="1">

If you need to provide it, matching source code must be attached to every extension version.

</p>

You can submit your source code in two ways:

- during the extension upload process, in the step where you upload your extension:

<article class="module-content grid-x grid-padding-x">
<div class="cell small-10" markdown="1">

![Upload sources screenshot]({% asset "publish/upload-process-sources.png" @path @optim %})

</div>
</article>

- if you’ve already uploaded your extension, open Manage Status & Versions, select the version you want to attach source code to, and submit your files in the source code section:

<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

![Upload sources screenshot]({% asset "publish/version-page-sources.png" @path @optim %})

</div>
</article>

{% endcapture %}
{% include modules/column-w-toc.html
  id="provide-your-extension-source-code"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->
<!-- Single Column Body Module -->

{% capture content %}

## Use of obfuscated code

Extensions using obfuscated code are not permitted, regardless of whether they are hosted on addons.mozilla.org (AMO) or not. Extensions using obfuscated code are in violation of our Add-on Policy and are subject to being blocked.

Code is considered obfuscated if the logic and meaning is transformed in a way intended to make it difficult for a human to understand or reverse-engineer. A commonly used tool is [JavaScript Obfuscator](https://obfuscator.io/), and there are a number of other tools that can conceal code functionality.

Remote resources, such as data files, are not allowed to be used to obscure the logic of your add-on. The functionality of your extension cannot be concealed by making control flow decisions based on these external resources.

Not all code that is difficult to read is obfuscated, and we specifically allow minified code to be submitted along with sources as described in this guide. With minification, the intent is to reduce the file size of the code. Techniques used here include reducing the length of variable and function names or removing whitespaces, comments and other redundant syntax elements.

We also allow tools that combine multiple files into a single file, or transpile code from other languages.

<section class="do-this" markdown="1"><header><h5>The allowed approach merely reduces file size but retains the meaning of the code:</h5></header>

`var d=document;var o=JSON.parse(responseText);var e=d.createElement("div");e.className=o.className;e.textContent="Your favorite color is now "+o.color;addonElement.appendChild(e);`

</section>

<section class="not-this" markdown="1"><header><h5>While the prohibited use of obfuscators will completely mask the intent of the code:</h5></header>

`var _0x364e=['\x70\x61\x72\x73\x65','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74','\x64\x69\x76','\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65','\x59\x6f\x75\x72\x20\x66\x61\x76\x6f\x72\x69\x74\x65\x20\x63\x6f\x6c\x6f\x72\x20\x69\x73\x20\x6e\x6f\x77\x20','\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'];var _0x1dab=function(_0x440e53,_0x322e43){_0x440e53=_0x440e53-0x0;var _0x4b349d=_0x364e[_0x440e53];return _0x4b349d;};var data=JSON[_0x1dab('0x0')](responseText);var div=document[_0x1dab('0x1')](_0x1dab('0x2'));div[_0x1dab('0x3')]=data[_0x1dab('0x3')];div['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=_0x1dab('0x4')+data['\x63\x6f\x6c\x6f\x72'];addonElement[_0x1dab('0x5')](div);`

</section>

{% endcapture %}
{% include modules/one-column.html
  id="use-of-obfuscated-code"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Source code checklist

Use this checklist to confirm that you are providing the right details with your source code submission:

- If you use them, are your build tools:
  - open source?
  - able to be run on the reviewer’s computer?
- Does your source code package include:
  - source code for any private repositories or frameworks used in your add-on?
  - a README file that includes:
    - details of the operating system used for the build?
    - details of any specific versions of tools or utilities needed?
    - links to any tools or utilities that need to be downloaded?
    - guidance for installing any downloaded tools and utilities, for example, links to online instructions?
    - instructions for building your add-on code or details of any scripts provided?
  - your build script?
  - the version lockfile for any package management tools, such as npm or yarn?
  - anything else needed to complete the build of your extension’s package?

Remember, if you miss any of the necessary content from your uploaded source code package the reviewer will have to get in touch to request the missing items. This could delay the completion of your extension’s review or, in the worst-case, result in your extension being taken down because we can't confirm it complies with the [add-on policies](/documentation/publish/add-on-policies).

{% endcapture %}
{% include modules/one-column.html
  id="source-code-checklist"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
