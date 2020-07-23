const { Liquid } = require('liquidjs');

module.exports = (() => {
  const liquidParser = new Liquid({
    root: ['./src/includes', './src/layouts'],
    extname: '.liquid',
    dynamicPartials: false,
    strictFilters: true,
  });

  return liquidParser;
})();
