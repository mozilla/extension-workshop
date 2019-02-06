# Extension Workshop

Launchpad for why and how to build Firefox extensions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Jekyll](https://jekyllrb.com) site generator for [Github Pages](https://pages.github.com)
- [Yarn](https://yarnpkg.com/en/) Package Manager

Once you have Jekyll and yarn insalled you'll need to install the dependencies:

```
bundle install
yarn install
```

Then to run locally in devlopment run:

```
bundle exec jekyll serve
```

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

1. Add the image files to `_assets/img/`
2. In your page, link to images using this page structure:

This tag will output an entire `img` element. Note: that using `@optim` enables the jekyll asset pipeline to optimize the image this is always recommended unless you see an issue with the output.

```
{% asset "image.jpg" @optim %}
```

For finer control you can use:

```
<img src="{% asset "image.jpg" @path @optim %}" someattr="whatever" />
```

#### Add the page to the menu

Go to data/content-guidelines-pages.yaml and add a new entry for your page:

```
- title: "Page Name"
  url: "/content-guidelines/page-name/"

```

## Deployment

The site is auto-deployed on commits to master to https://extensionworkshop.allizom.org/

Tagged commits will be auto deployed to production.
