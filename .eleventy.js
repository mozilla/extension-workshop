const fs = require('fs-extra');
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

  // Tell the config to not use gitignore for ignores.
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setLibrary('liquid', liquidParser);
  // Markdown instance in general plus for filter in templates.
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdownify', function (value) {
    return md.render(value.toString());
  });

  // Explicitly copy through the built files needed.
  eleventyConfig.addPassthroughCopy({ './src/assets/img/': 'assets/img/' });
  eleventyConfig.addPassthroughCopy({ './src/assets/fonts/': 'assets/fonts/' });
  eleventyConfig.addPassthroughCopy({
    './src/assets/js/basket-client.js': 'assets/js/basket-client.js',
  });
  eleventyConfig.addPassthroughCopy({
    './node_modules/lunr/lunr.min.js': 'assets/js/lunr.min.js',
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('src/build/404.html');
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  // Plugins
  eleventyConfig.addPlugin(xmlFiltersPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
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
