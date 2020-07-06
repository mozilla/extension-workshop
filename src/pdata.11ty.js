/*
 * module.exports = class {
  data() {
    return {
      permalink: 'api/v1/pages.json',
      eleventyExcludeFromCollections: true
    }
  }

  async render({ collections }) {
    return JSON.stringify(collections.all);
  }
}
*/

var util = require('util');
module.exports = function({collections}) {

  return util.inspect(collections.all);
};
