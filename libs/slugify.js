const slugify = require('slugify');

module.exports = (() => {
  const slugifier = (string) =>
    slugify(string, {
      replacement: '-',
      lower: true,
    });
  return slugifier;
})();
