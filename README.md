[![CircleCI](https://circleci.com/gh/mozilla/extension-workshop/tree/master.svg?style=svg)](https://circleci.com/gh/mozilla/extension-workshop/tree/master)

# Extension Workshop

Launchpad for why and how to build Firefox extensions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Ruby 2.6.1](https://www.ruby-lang.org/en/downloads/), a dynamic open-source programming language
- [Jekyll](https://jekyllrb.com) site generator for [Github Pages](https://pages.github.com)
- [Yarn](https://yarnpkg.com/en/) Package Manager

Once you have Jekyll and yarn insalled you'll need to install the dependencies:

```
bundle install
yarn install
```

Then to run locally in devlopment run:

```
yarn start
```

Note: Running locally will show unpublished content that uses the `published: false` convention in frontmatter. Content with `published: false` will not be available on stage or production.

### Available yarn commands

| Command             | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| yarn clean          | Clears the output directly and cleans the .jekyll-cache.                                |
| yarn build          | Builds the site.                                                                        |
| yarn start          | Starts jekyll and includes unpublished content. (Note the first run is slow!)           |
| yarn start-prodlike | Starts jekyll and doesn't include unpublished content for a production-like experience. |

## Content Updates

This site has three templates: a full-width page, a sidebar page for documentation, and a Content Guidelines page

### Uploading media

1. Add the image files to `_assets/img/`
2. In your page, link to images using this page structure:

This tag will output an entire `img` element. Note: that using `@optim` enables the jekyll asset pipeline to optimize the image. This is always recommended unless you see an issue with the output.

```
{% asset "image.jpg" @optim %}
```

For finer control you can use:

```html
<img src="{% asset "image.jpg" @path @optim %}" someattr="whatever" />
```

Here's an example using markdown - note you need to add `@path` and `@optim`.

```markdown
![Remembear subtitle screenshot]({% asset "content-guidelines/remembear-subtitle.png" @path @optim %} "Remembear subtitle text")
```

### How to add a "sidebar" layout page:

1. Open `_data/pages.yaml`.
2. Add a node with appropriate attributes, in the appropriate location, for the new page. See below for [details on how to understand the pages.yaml structure](#understanding-the-pagesyaml-structure).
3. Create a new page, nested inside a folder struture that matches the url path. For example, for permalink `/documentation/develop/best-practices-for-collecting-user-data-consents/`, you would create a file called `best-practices-for-collecting-user-data-consents.md` and place it in `documentation` > `develop`.
4. For reference on how to create a page, review the `sidebar-master-template.md` file, which lists all available modules. Some notes:
   - `published: false` will withhold this content from stage and production, to publish content, remove this line.
   - `skip_index: true` is used for pages that shouldn't be indexed for search results. 
   - When creating page sections that will be listed in the table of contents, add an ID attribute to the section container that matches the subpageitem added to Pages.yaml. If your layout requires several sections for one table of contents entry, simply nest your sections inside a containing element which has the ID attribute. 
   - Rull for creating section IDs: use the `h2` title of the section, converted to lowercase, spaces replaced with dashes, all non-alphanumeric characters removed. For example, the section `h2` title "Know your privacy settings" would be converted to `know-your-privacy-settings` for the section ID
   - The first section following the Page Hero module should have the `table-of-contents` `aside` section prepended to it. 

<h4 id="understanding-the-pagesyaml-structure">Understanding the Pages.yaml structure</h4>

- Each node is started with a `-`
- Sub nodes are indented below parent nodes
- Each new page has a title and url attribute *__Note:__ The url attribute must match exactly the permalink attribute of the page's front matter (including leading and trailing slashes)*
- Attributes are indented on new lines
- Pages can also have a subpageitems node for sections within the page to be referenced in the table of contents for that page:
  - Each subpageitem node has a title and ID attribute, where the ID matches the ID attribute of the section container *(IDs need to be added to a containing element, rather than the heading element, of the section. This is so that highlighting for that section stays active even when the section title is out of view)*
- Overview pages have category nodes for each of the sub categories for that section
- Categories have a category attibute which denotes the category title, and a pages attribute where sub pages of the overview page are listed
- The Documentation Topics section pages are nested inside a `subfolderitems` node, which creates the dropdown panel 

General overview of the pages layout:
```
- title: "Documentation Topics"
  subfolderitems:
    - title: "Develop"
      url: "/documentation/develop/"
      subpageitems:
        - title: "Firefox Tools"
          id: "firefox-tools"
          ...
      categories:
        - category: "Getting Started"
          pages: 
            - title: "Firefox Workflow Overview"
              url: "/documentation/develop/firefox-workflow-overview/"
        ...
    - title: "Publish"
      url: "/documentation/publish/"
      subpageitems:
        - title: "Get your extension signed"
          id: "get-your-extension-signed"
        ...
    - title: "Manage"
      url: "/documentation/manage/"
      subpageitems:
        - title: "Stay informed when Firefox changes"
          id: "stay-informed-when-firefox-changes"
        ...
    - title: "Enterprise"
      url: "/documentation/enterprise/"
      subpageitems:
        - title: "Section Title"
          id: "introduction"
        ...
    - title: "Themes"
      url: "/documentation/themes/"
      subpageitems:
        - title: "What themes are"
          id: "what-themes-are"
        ...
- title: "Extension Basics"
  url: "/extension-basics/"
  subpageitems:
    - title: "Getting started"
      id: "getting-started"
    ...
- title: "Community"
  url: "/community/"
  subpageitems:
    - title: "Who is part of the community?"
      id: "who-is-part-of-the-community"
    ...
  categories:
    - category: "About the Community"
      pages:
        - title: ""
          url: ""
        ...
    ...
```

### How to add a "Content Guidelines" page

#### Create a new page

1. Create new file
2. Add header (see example below)
3. Copy 'modules' needed from `content-guidelines/master-template.md` and paste in new file
4. Save as markdown: `content-guidelines/page-name.md`

```
---
layout: guides
title: Page Name
permalink: /content-guidelines/page-name/
published: false
---
```

Note: `published: false` will withhold this content from stage and production, to publish content, remove this line.

#### Add the page to the menu

Go to `_data/content-guidelines-pages.yaml` and add a new entry for your page:

```
- title: "Page Name"
  url: "/content-guidelines/page-name/"
  draft-label: true
```

#### Controlling draft labelling

If you don't want the page to be labelled as a draft, as and when it's ready remove `draft-label: true` from the relevant entry in `_data/content-guidelines.yaml`

## Deployment

The site is auto-deployed on commits to master to https://extensionworkshop.allizom.org/

Tagged commits will be auto deployed to production.
