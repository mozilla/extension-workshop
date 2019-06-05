'use strict';

function renderJekyllPagesApiSearchResults(query, results, doc, resultsElem) {
  var list_title = doc.createElement('h2'),
    list = doc.createElement('ol'),
    num = 0;

  list_title.classList.add('no-underline');

  results.forEach(function(result, index) {
    if (!result.title) return true;

    var item = doc.createElement('li'),
      link = doc.createElement('a'),
      title = doc.createElement('h3'),
      excerpt = doc.createTextNode('Excerpt to go here...'),
      url = doc.createTextNode(location.origin + result.url),
      body = doc.createElement('p'),
      body_2 = doc.createElement('p'),
      small = doc.createElement('small'),
      text = doc.createTextNode(result.title);

    title.appendChild(text);
    small.appendChild(url);
    body.appendChild(excerpt);
    body_2.appendChild(small);
    link.appendChild(title);
    link.appendChild(body);
    link.appendChild(body_2);
    link.title = result.title;
    link.href = result.url;
    item.appendChild(link);
    list.appendChild(item);

    link.tabindex = index;
    if (index === 0) {
      link.focus();
    }

    num++;
  });

  var list_title_text = doc.createTextNode(
    num + ' results for "' + query + '"'
  );
  list_title.appendChild(list_title_text);
  resultsElem.appendChild(list_title);
  resultsElem.appendChild(list);
}

module.exports = function(query, results, doc, resultsList) {
  renderJekyllPagesApiSearchResults(query, results, doc, resultsList);
};
