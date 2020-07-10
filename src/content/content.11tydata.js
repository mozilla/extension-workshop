/*
 * This file controls if files are published or not.
 * The filename must match the directory name.
 * If frontmatter contains: `published: false` this doc will be omitted from the build for the production env.
 *
 */
module.exports = {
  eleventyComputed: {
    siteEnv: process.env.ELEVENTY_ENV,
    permalink: (data) => {
      if (process.env.ELEVENTY_ENV !== 'production') {
        return data.permalink;
      } else {
        // Don't output files with an explicit "published: false".
        return data.published === false ? false : data.permalink;
      }
    },
    pageTitle: (data) => {
      if (data.tag) {
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
    pageDescription: (data) => {
      return data.description ? data.description : data.site.description;
    },
    canonicalUrl: data => {
      if (data.canonical_url) {
        return data.canonical_url;
      }
      return data.site.url + data.page.url;
    },
  },
};
