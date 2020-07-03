
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_assets");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strict_filters: true,
    root: [
      '_includes',
      '.',
    ],
  });

  const md = require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("markdownify", function(value) {
    return md.render(value.toString());
  });

  return {
    dir: {
      input: "./",      // Equivalent to Jekyll's source property
      output: "./_site", // Equivalent to Jekyll's destination property
      includes: "./_includes",
      layouts: "./_layouts"
    }
  };
};
