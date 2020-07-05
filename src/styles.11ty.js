/*
 * Based on https://gist.github.com/liamfiddler/07e2878755a0a631a584b6420866424e
 * This is a JS template that generates a CSS output.
 * Be sure that JS templates are not excluded from templateFormats in your config!
 * Also you'll want to ignore other JS statics otherwise they'll get run as templates!
 *
 */
const util = require('util');

const Fiber = require('fibers');
const sass = require('sass');

const renderSass = util.promisify(sass.render);
const inputFile = './src/_assets/css/styles.scss'; // the path to your main SCSS file
const outputFile = '_assets/css/styles.css'; // the filename you want this template to be saved as

module.exports = class {
  data() {
    return {
      permalink: outputFile,
      layout: false,
      eleventyExcludeFromCollections: true,
    };
  }
  async render() {
    const { css } = await renderSass({
      file: inputFile,
      includePaths: [
        'node_modules/foundation-sites/scss/',
        'node_modules/slick-carousel/slick/',
        'node_modules/hamburgers/_sass/hamburgers',
      ],
      // For a perf speed-up see https://sass-lang.com/documentation/js-api#fiber
      fiber: Fiber,
    });

    return css;
  }
};
