const fs = require('fs-extra');
const serialize = require('serialize-javascript');

/*
 * This file controls if files are published or not.
 * The filename must match the directory name.
 * If frontmatter contains: `published: false` this doc will be omitted from the build for the production env.
 *
 */
module.exports = {
  eleventyComputed: {
    siteEnv: process.env.ELEVENTY_ENV,
    fileDate: async (data) => {
      const stat = await fs.stat(data.page.inputPath);
      const created = new Date(stat.birthtimeMs).toISOString();
      return {
        published: data.data ? data.date.toISOString() : created,
        created,
        modifed: new Date(stat.ctimeMs).toISOString(),
      };
    },
    permalink: (data) => {
      if (process.env.ELEVENTY_ENV !== 'production') {
        return data.permalink;
      } else {
        // Don't output files with an explicit "published: false".
        return data.published === false ? false : data.permalink;
      }
    },
    title: (data) => {
      if (data.tag) {
        return `Results for tag "${data.tag}"`;
      } else {
        return data.title;
      }
    },
    seo: {
      title: (data) => {
        if (data.permalink === '') {
          // Special case the homepage.
          return `${data.site.title} | ${data.site.description}`;
        } else if (data.tag) {
          // Special case tag titles.
          return `Results for tag "${data.tag}" | ${data.site.title}`;
        } else if (data.title) {
          // Use a title if set in the frontmatter.
          return `${data.title} | ${data.site.title}`;
        } else {
          // Use site title as a last resort.
          return data.site.title;
        }
      },
      description: (data) => {
        return data.description ? data.description : data.site.description;
      },
      canonicalURL: (data) => {
        if (data.canonical_url) {
          return data.canonical_url;
        }
        return data.site.url + data.page.url;
      },
      jsonLD: (data) => {
        const defaultJSON = {
          '@context': 'http://schema.org',
          url: data.seo.canonicalURL,
        };
        const webSite = {
          ...defaultJSON,
          '@type': 'WebSite',
          name: data.site.title,
        };
        const webPage = {
          ...defaultJSON,
          '@type': 'WebPage',
          name: data.site.title,
        };
        const techArticle = {
          ...defaultJSON,
          '@type': 'TechArticle',
          author: data.author,
          datePublished: data.fileDate.published,
          headline: data.title,
        };
        let jsonData;
        switch (data.schemaType) {
          case 'webSite':
            jsonData = webSite;
            break;
          case 'webPage':
            jsonData = webPage;
            break;
          default:
            jsonData = techArticle;
            break;
        }
        return serialize(jsonData, { space: 2, isJSON: true });
      },
    },
  },
};
