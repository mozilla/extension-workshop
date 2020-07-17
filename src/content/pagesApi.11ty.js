/*
 * This is a stand-in for the pages API as a quick fix to get the existing search using Lunr working
 * as it did under Jekyll.
 *
 */
module.exports = class {
  data() {
    return {
      permalink: 'api/v1/pages.json',
      eleventyExcludeFromCollections: true,
    };
  }

  async render({ collections }) {
    const data = {
      entries: [],
    };
    collections.all.map((item, id) => {
      const page = {
        title: item.data.title,
        url: item.url,
        body: item.templateContent
          .replace(/\n/g, ' ')
          .replace(/\t/g, ' ')
          .replace(
            /<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,
            ' '
          )
          .replace(/\s+/g, ' '),
        tags: item.data.tags,
      };
      if (!item.data.skip_index) {
        data.entries.push(page);
      }
    });
    return JSON.stringify(data);
  }
};
