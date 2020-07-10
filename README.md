[![CircleCI](https://circleci.com/gh/mozilla/extension-workshop/tree/master.svg?style=svg)](https://circleci.com/gh/mozilla/extension-workshop/tree/master)

# Firefox Extension Workshop

Welcome to Firefox Extension Workshop, a launchpad for building Firefox extensions! 🚀

## Updating Content

If you would like to update content or other resources on Firefox Extension Workshop, please refer to [contributing.md](.github/contributing.md)

## Development Guide: Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Node JS](https://nodejs.org/en/). Runnning the LTS release is recommended.
- [Yarn](https://yarnpkg.com/en/) for package management.

```
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
| yarn clean          | Clears the output directory                                                             |
| yarn build          | Builds the site.                                                                        |
| yarn start          | Starts eleventy and includes unpublished content.                                       |

## Development Guide: Content Updates

This site has three templates: a full-width page, a sidebar page for documentation, and a Content Guidelines page

### Uploading media

1. Add the image files to `src/assets/img/`
2. In your page, link to images using this page structure:


You can reference images with the full path from the assets directory e.g: `/assets/img/image.png`

Here's an example in `markdown`:

```markdown
![Remembear subtitle screenshot](/assets/img/remembear-subtitle.png "Remembear subtitle text")
```

### How to add a "sidebar" layout page

1. Open `data/pages.json`.
2. Add a node with appropriate attributes, in the appropriate location, for the new page. See below for [details on how to understand the pages.json structure](#understanding-the-pagejson-structure).
3. Create a new page, nested inside a folder struture that matches the url path. For example, for permalink `/documentation/develop/best-practices-for-collecting-user-data-consents/`, you would create a file called `best-practices-for-collecting-user-data-consents.md` and place it in `documentation` > `develop`.
4. For reference on how to create a page, review the `sidebar-master-template.md` file, which lists all available modules. Some notes:
   - `published: false` will withhold this content from stage and production, to publish content, remove this line.
   - `skip_index: true` is used for pages that shouldn't be indexed for search results.
   - When creating page sections that will be listed in the table of contents, add an ID attribute to the section container that matches the subpageitem added to Pages.yaml. If your layout requires several sections for one table of contents entry, nest your sections inside a containing element which has the ID attribute.
   - Rull for creating section IDs: use the `h2` title of the section, converted to lowercase, spaces replaced with dashes, all non-alphanumeric characters removed. For example, the section `h2` title "Know your privacy settings" would be converted to `know-your-privacy-settings` for the section ID
   - The first section following the "Page Hero" module should be the "Table of Contents" module: `modules/column-w-toc.html`.

<h4 id="understanding-the-pagesjson-structure">Understanding the Pages.json structure</h4>

- Each new page has a title and url attribute _**Note:** The url attribute must match exactly the permalink attribute of the page's front matter (including leading and trailing slashes)_
- Pages can also have a subpageitems node for sections within the page to be referenced in the table of contents for that page:
  - Each subpageitem node has a title and ID attribute, where the ID matches the ID attribute of the section container _(IDs need to be added to a containing element, rather than the heading element, of the section. This is so that highlighting for that section stays active even when the section title is out of view)_
- Overview pages have category nodes for each of the sub categories for that section
- Categories have a category attibute which denotes the category title, and a pages attribute where sub pages of the overview page are listed
- The Documentation Topics section pages are nested inside a `subfolderitems` node, which creates the dropdown panel

General overview of the pages layout:

```json
[
  {
    "title": "Documentation Topics",
    "subfolderitems": [
      {
        "title": "Develop",
        "url": "/documentation/develop/",
        "subpageitems": [
          {
            "title": "Firefox Tools",
            "id": "firefox-tools"
          }
        ],
        "categories": [
          {
            "category": "Getting Started",
            "pages": [
              {
                "title": "Firefox Workflow Overview",
                "url": "/documentation/develop/firefox-workflow-overview/"
              }
            ]
          }
        ]
      },
      {
        "title": "Publish",
        "url": "/documentation/publish/",
        "subpageitems": [
          {
            "title": "Get your extension signed",
           "id": "get-your-extension-signed"
          }
        ]
      },
      {
        "title": "Manage",
        "url": "/documentation/manage/",
        "subpageitems": [
          {
            "title": "Stay informed when Firefox changes",
            "id": "stay-informed-when-firefox-changes"
          }
        ]
      },
      {
        "title": "Enterprise",
        "url": "/documentation/enterprise/",
        "subpageitems": [
          {
            "title": "Section Title",
            "id": "introduction"
          }
        ]
      },
      {
        "title": "Themes",
        "url": "/documentation/themes/",
        "subpageitems": [
          {
            "title": "What themes are",
            "id": "what-themes-are"
          }
        ]
      }
    ]
  },
  {
    "title": "Extension Basics",
    "url": "/extension-basics/",
    "subpageitems": [
      {
        "title": "Getting started",
        "id": "getting-started"
      }
    ]
  },
  {
    "title": "Community",
    "url": "/community/",
    "subpageitems": [
      {
        "title": "Who is part of the community?",
        "id": "who-is-part-of-the-community"
      }
    ],
    "categories": [
      {
        "category": "About the Community",
        "pages": [
          {
            "title": "",
            "url": ""
          }
        ]
      }
    ]
  }
]
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

Go to `data/content-guidelines-pages.yaml` and add a new entry for your page:

```
- title: "Page Name"
  url: "/content-guidelines/page-name/"
  draft-label: true
```

#### Controlling draft labelling

If you don't want the page to be labelled as a draft, as and when it's ready remove `draft-label: true` from the relevant entry in `data/content-guidelines.yaml`

## Deployment

All deploys for stage and prod are handled via the [releases](https://github.com/mozilla/extension-workshop/releases) page.

### Dev Deploys

The site is auto-deployed on commits to master to https://extensionworkshop-dev.allizom.org/. You can check the version on -dev with [the dev version link](https://extensionworkshop-dev.allizom.org/__version__)

### Stage Deploys

Tags with a version ending in `-stage` will be deployed to https://extensionworkshop.allizom.org/. You can check the version on stage with [the stage version link](https://extensionworkshop.allizom.org/__version__)

A good example of a tag for stage would be `v2.0.1-stage`.

### Production Deploys

Tags of the format `vN.N.N` will be deployed to https://extensionworkshop.com/. You can check the version on prod with [the prod version link](https://extensionworkshop.com/__version__)

A good example tag would be `v2.0.1`.

### Version numbers

Tag versions should aim to follow follow the [semver](https://semver.org/) format.
