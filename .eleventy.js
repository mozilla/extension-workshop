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

  return {
    dir: {
      input: "./index.md",      // Equivalent to Jekyll's source property
      output: "./_site", // Equivalent to Jekyll's destination property
      includes: "./_includes",
      layouts: "./_layouts"
    }
  };
};
