const { Liquid } = require('liquidjs');
const md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
}).disable('code');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const xmlFiltersPlugin = require('eleventy-xml-plugin');

module.exports = function (eleventyConfig) {
  const liquidParser = new Liquid({
    root: ['./src/includes', './src/layouts'],
    extname: '.liquid',
    dynamicPartials: false,
    strictFilters: true,
  });

  eleventyConfig.setLibrary('liquid', liquidParser);

  // Tell the config to not use gitignore for ignores.
  eleventyConfig.setUseGitIgnore(false);

  // Explicitly copy through the built files needed.
  eleventyConfig.addPassthroughCopy('./src/assets/img/');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts/');
  eleventyConfig.addPassthroughCopy('./src/assets/js/basket-client.js');
  eleventyConfig.addPassthroughCopy({ './node_modules/lunr/lunr.min.js': 'assets/js/lunr.min.js' });

  // Plugins
  eleventyConfig.addPlugin(xmlFiltersPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Markdown instance in general plus for filter in templates.
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdownify', function (value) {
    return md.render(value.toString());
  });

  return {
    // templateFormats: ['md', 'liquid', 'html'],
    dir: {
      input: 'src/content',
      output: 'src/build',
      // The following are relative to the input dir.
      data: '../data',
      includes: '../includes',
      layouts: '../layouts',
    },
  };
};
