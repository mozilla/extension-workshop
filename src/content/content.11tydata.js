/*
 * This file controls if files are published or not.
 * The filename must match the directory name.
 * If frontmatter contains: `published: false` this doc will be omitted from the build for the production env.
 *
 */
module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      if (process.env.ELEVENTY_ENV !== 'production') {
        return data.permalink;
      } else {
        // Don't output files with an explicit "published: false".
        return data.published === false ? false : data.permalink;
      }
    },
  },
};
