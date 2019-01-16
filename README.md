# Extension Workshop

Launchpad for why and how to build Firefox extensions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [Jekyll](https://jekyllrb.com) site generator for [Github Pages](https://pages.github.com)
* [Yarn](https://yarnpkg.com/en/) Package Manager
* [Codekit](https://codekitapp.com) to compile javaScript


## Content Updates

This site has two templates: the Extension Workshop landing page and Content Guidelines pages

### How to add a Content Guidelines page

#### Create a new page

1. Create new file
2. Add header (see example below)
3. Copy 'modules' needed from content-guidelines-master-template.md and paste in new file
4. Save as markdown: page-name.md

```
---
layout: page
title: Page Name
permalink: /content-guidelines/page-name/
---
```

#### Upload media

1. Navigate to /assets/img/ and click Upload files
2. In your page, link to images using this page structure:

```
{{ site.baseurl }}/assets/img/image.jpg
```

#### Add the page to the menu

Go to data/content-guidelines-pages.yaml and add a new entry for your page:

```
- title: "Page Name"
  url: "/content-guidelines/page-name/"

```

## Deployment

Add additional notes about how to deploy this on a live system
