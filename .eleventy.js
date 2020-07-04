const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const xmlFiltersPlugin = require('eleventy-xml-plugin')
const md = require("markdown-it")({
  html: true,
  breaks: true,
  linkify: true
});


module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_assets");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strict_filters: true,
    root: [
      './src/_includes',
      './src/_layouts',
    // '.',
    ],
  });

  eleventyConfig.addPlugin(xmlFiltersPlugin)
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("markdownify", function(value) {
    return md.render(value.toString());
  });

  return {
    templateFormats: ['md', 'liquid', 'html'],

    dir: {
      input: "src",
      output: "src/_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
