const { Liquid } = require('liquidjs');
const md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
});
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const xmlFiltersPlugin = require('eleventy-xml-plugin');
const safeExternalLinks = require('eleventy-plugin-safe-external-links');

module.exports = function (eleventyConfig) {
  const liquidParser = new Liquid({
    root: ['./src/_includes', './src/_layouts'],
    extname: '.liquid',
    dynamicPartials: false,
    strictFilters: true,
  });

  eleventyConfig.setLibrary('liquid', liquidParser);

  // Tell the config to not use gitignore for ignores.
  eleventyConfig.setUseGitIgnore(false);

  // Explicitly copy through the built files needed.
  eleventyConfig.addPassthroughCopy('./src/_assets/img/');
  eleventyConfig.addPassthroughCopy('./src/_assets/fonts/');
  eleventyConfig.addPassthroughCopy('./src/_assets/js/basket-client.js');

  // Plugins
  eleventyConfig.addPlugin(xmlFiltersPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  /*
  eleventyConfig.addPlugin(safeExternalLinks, {
    pattern: 'https://', // RegExp pattern for external links
    noopener: true, // Whether to include noopener
    noreferrer: true, // Whether to include noreferrer
    files: [ // What output file extensions to work on
      '.html'
    ],
  });
  */

  // Markdown instance in general plus for filter in templates.
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdownify', function (value) {
    return md.render(value.toString());
  });

  return {
    templateFormats: ['md', 'liquid', 'html'],
    dir: {
      input: 'src',
      output: 'src/_site',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
