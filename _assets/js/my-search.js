'use strict';

function renderJekyllPagesApiSearchResults(query, results, doc, resultsElem) {
  results.forEach(function(result, index) {
    console.log(result);

    var item = doc.createElement('li'),
      link = doc.createElement('a'),
      text = doc.createTextNode(result.title);

    link.appendChild(text);
    link.title = result.title;
    link.href = result.url;
    item.appendChild(link);
    resultsElem.appendChild(item);

    link.tabindex = index;
    if (index === 0) {
      link.focus();
    }
  });
}

module.exports = function(query, results, doc, resultsList) {
  renderJekyllPagesApiSearchResults(query, results, doc, resultsList);
};
