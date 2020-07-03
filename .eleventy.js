module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "./",      // Equivalent to Jekyll's source property
      output: "./_site", // Equivalent to Jekyll's destination property
      includes: "./_includes",
      layouts: "./_layouts"
    }
  };
};
