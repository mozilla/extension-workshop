[![CI](https://github.com/mozilla/extension-workshop/actions/workflows/ci.yml/badge.svg)](https://github.com/mozilla/extension-workshop/actions/workflows/ci.yml)

# Firefox Extension Workshop

Welcome to Firefox Extension Workshop, a launchpad for building Firefox extensions! 🚀

## Updating Content

If you would like to update content or other resources on Firefox Extension Workshop, please refer to [`contributing.md`](.github/contributing.md)

## Development Guide: Getting Started

These instructions get a copy of the project up and running on your local machine for development and testing purposes.

For notes on how to deploy the project on a live system, see [Deployment](#deployment).

### Prerequisites

- [Node JS](https://nodejs.org/en/). Runnning the LTS release is recommended.

```
npm install
```

To start local development, run:

```
npm start
```

**ℹ️ NOTE:** Running locally will show unpublished content that uses the `published: false` convention in frontmatter. Content with `published: false` will not be available on staging or production.


### Available npm commands

| Command                  | Description                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------- |
| `npm start`             | Starts eleventy and includes unpublished content.                                       |
| `npm build:production`  | Builds the site for production.                                                         |
| `npm build:unpublished` | Builds the site for production with unpublished content.                                |
| `npm clean`             | Clears the output directory. (You probably won't need to use this manually.)            |

## How the site is built

The site is built with [Eleventy](https://www.11ty.dev/), a NodeJS-based static site generator.

The site works in slightly different ways depending on whether you're running the site for local development or building the site for production.

### Development builds

When you run `npm start` the CSS and JS is built in parallel with the eleventy build. Once up and running both eleventy and the JS and CSS build scripts watch for changes. When something changes the site is re-built.

In development Eleventy knows nothing about the CSS and JavaScript builds. For automatic reloading of the JS and CSS, each script uses a fetch to the public API to tell browserSync there is new code and it reloads it for you.

### Production builds

Building for production is slightly different. The Eleventy process and the JS and CSS builds happen in series. Then a 3rd `asset-pipeline` process initiates and takes the the built content from `./build` directory and runs it through various optimizations.

During these optimizations, the following takes place:

* Binary files are versioned with hashes in the file names.
* References to these file in CSS and JS are updated.
* CSS and JS are minified.
* The HTML is processed to update the references to the assets new hash-based filenames.

All of this means that we can serve the site with far-future `Expires` headers. If the resource is in the browser's cache, the browser won't even make a request for it. To break the cache, the resource's URL needs to change. When something is updated and the script is re-run, the hash in the filename will change, so the new filename won't be cached and the browser will know to fetch it. This helps the site be fast.

Whilst the `asset-pipline` script is custom, it leverages a lot of existing libs where possible, these include Terser, postHTML, postCSS, and various plugins.

It's likely that some day, 11ty will have its own mechanism for wrangling assets. At that point, this will no longer be required.

#### Asset paths

For the `asset-pipeline` script to do its thing, all you need to do is refer to all assets with a path beginning with `/assets/`. If you do that, everything else is handled for you ✨

## Development Guide: Content Updates

This site has three templates:

1. A full-width page
2. A sidebar "page" for documentation
3. A Content Guidelines page

### Repo layout

```bash
extensionworkshop.com
├── bin
│   ├── asset-pipeline           # The asset build script
│   ├── build-script             # The JS build script
│   └── build-styles             # The CSS build script
│
├── build                        # Where eleventy builds the site to
│
├── dist                         # Where production builds are built
│
├── libs
│   ├── markdown.js              # The markdown renderer instance and plugins
│   ├── slugify.js               # The central slug function
│   └── templates.js             # The liquidjs template instance
│
├── screenshots                  # Screenshots used in README.md
│
├── src
│   ├── assets                   # Assets (CSS, JavaScript, fonts and images)
│   ├── content                  # Content (Markdown and JS (generated))
│   ├── data                     # Data files (JSON)
│   ├── includes                 # Components (Liquid)
│   └── layouts                  # Layout templates
│
├── tests                        # Test files run by jest `npm test`.
│
├── eleventy.config.js           # Eleventy configuration
├── .eleventyignore              # Files ignored by Eleventy
├── .gitignore                   # Files not tracked by Git
├── .stylelintrc                 # Stylelint configuration
├── .prettierrc                  # Prettier config
├── .prettierignore              # Files ignored by prettier
├── .eslintrc                    # eslint config
├── .eslintignore                # Files ignored by eslint
├── package.json                 # Node.js package manifest
└── README.md                    # This file
```

### Uploading media

1. Add the image files to `src/assets/img/`
2. In your page, link to images using this page structure:

You can reference images with the full path from the `assets/` directory (e.g, `/assets/img/image.png`).

Here's an example in `markdown`:

```markdown
![Remembear subtitle screenshot](/assets/img/remembear-subtitle.png "Remembear subtitle text")
```

### Adding notes and alerts

For a note, use the markdown syntax extensions as follows. (These markdown extensions are supplied by a plugin to the markdown renderer.)

```markdown
::: note
This is a note
:::
```

Looks like this ![Note Screenshot](../master/screenshots/note.png)

For an alert, use the following:

```markdown
::: note alert
This is an alert
:::
```

Looks like this ![Alert Screenshot](../master/screenshots/alert.png)

### How to add a "sidebar" layout page

1. Open `data/pages.json`.
2. Add a node with appropriate attributes, in the appropriate location, for the new page. See below: [Understanding the `pages.json` structure](#understanding-the-pagejson-structure).
3. Create a new page, nested inside a folder struture that matches the URL path. For example, for permalink `/documentation/develop/best-practices-for-collecting-user-data-consents/`, you would create a file called `best-practices-for-collecting-user-data-consents.md` and place it in `documentation ▶︎ develop`.
4. For reference on how to create a page, review the `sidebar-master-template.md` file, which lists all available modules. Some notes:
   - `published: false` will withhold this content from staging and production. To publish content, remove this line.
   - `skip_index: true` is used for pages that shouldn't be indexed for search results.
   - When creating page sections that should be listed in the table of contents, add an `id` attribute to the section container that matches the `subpageitems` entry added to `pages.json`. If your layout requires several sections for one table of contents entry, nest your sections inside a containing element which has the `id` attribute.
   - Rule for creating section `id`s: use the `h2` title of the section, converted to lowercase, spaces replaced with dashes, all non-alphanumeric characters removed. For example, the section `h2` title "Know your privacy settings" would be converted to `know-your-privacy-settings` for the section `id`.
   - The first section following the "Page Hero" module should be the "Table of Contents" module: `modules/column-w-toc.html`.

<h4 id="understanding-the-pagesjson-structure">Understanding the <code>pages.json</code> structure</h4>

- Each page has a `title` and `url` attribute.<br>
    **ℹ️ NOTE:** The `url` attribute must exactly match the `permalink` attribute of the page's front matter _(including leading and trailing slashes)_.
- Pages may also have a `subpageitems` node for sections within the page to be referenced in the table of contents for that page:
  - Each `subpageitem` node has a `title` and `id` attribute. The value of `id` matches the `id` attribute of the section container.<br>
    (**ℹ️ NOTE:** `id`s must be added to the containing element, rather than the heading element, of the section. This ensures that highlighting for the section remains active, even when the section title is out of view.)
- Overview pages have `category` nodes for each of their contained (sub) `categories`.
- Categories have a `category` attibute (which denotes the category title), and a `pages` attribute (which lists sub-pages of the overview page).
- The Documentation Topics section pages are nested inside a `subfolderitems` node, which creates the dropdown panel.

<details>
   <summary>General overview of the <code>pages.json</code> layout:</summary>

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

</details>

### How to add a "Content Guidelines" page

#### Create a new page

1. Create new file
2. Add frontmatter (see example below)
3. Copy 'modules' needed from `content-guidelines/master-template.md` and paste in new file
4. Save as markdown: `content-guidelines/page-name.md`

```yaml
---
layout: guides
title: Page Name
permalink: /content-guidelines/page-name/
published: false
---
```

**ℹ️ NOTE:** `published: false` will withhold this content from staging and production. To publish content, remove this line.


#### Add the page to the menu

Go to `data/content-guidelines-pages.json` and add a new entry for your page:

```json
{
  "title": "Page Name",
  "url": "/content-guidelines/page-name/",
  "draft-label": true
}
```

#### Controlling draft labelling

If you don't want the page to be labelled as a draft (such as and when it's ready), remove `"draft-label": true` from the relevant entry in `data/content-guidelines-pages.json`.

### Tagging

Tags should aim to follow the AMO calendar format: `YYYY.MM.DD` with an optional
`-x` suffix for cherry-picking.

## Deployments/Releases

### Stage Deploys

The site is auto-deployed on commits to `master` to https://extensionworkshop.allizom.org/. You can check the version with [the stage version link](https://extensionworkshop.allizom.org/__version__).

### Production Deploys

Tags matching `^20\d{2}\.\d{2}\.\d{2}(?:-\d+)?$` regular expression will be deployed to https://extensionworkshop.com/. You can check the version on production with [the production version link](https://extensionworkshop.com/__version__). A good example tag for a production deployment is `2026.03.03`.

When you need to deploy a site version, you must create a git tag following the pattern described. To perform a release, you can use the GitHub Web UI and follow the instructions in [Managing releases in a repository][github-release-docs]. Using the _Generate release notes_ option is recommended, but if you do so, remove the details of any dependencies included in the release. You can take inspiration from the [previous releases][previous releases].

[github-release-docs]: https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository
[previous releases]: https://github.com/mozilla/extension-workshop/releases
