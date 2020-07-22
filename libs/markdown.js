const markdown = require('markdown-it');
const slugify = require('./slugify');

module.exports = (() => {
  const options = {
    html: true,
    breaks: true,
    linkify: false,
  };

  const plugins = [
    [
      require('markdown-it-container'),
      'note',
      {
        validate: function (params) {
          return params.trim().match(/note/);
        },
        render: function (tokens, idx) {
          const isAlert = tokens[idx].info.trim().match(/note alert$/);
          if (tokens[idx].nesting === 1) {
            const className = isAlert ? ' alert' : '';
            return `<div class="note${className}">\n`;
          } else {
            // closing tag
            return '</div>\n';
          }
        },
      },
    ],
  ];

  const parser = markdown(options);

  if (plugins) {
    plugins.forEach((plugin) => {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    });
  }

  // Disable pre/code based on indentation.
  parser.disable('code');

  return parser;
})();
