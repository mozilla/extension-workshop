/*
 * Params:
 * - query: query string
 * - results: search results matching the query
 * - doc: window.document object
 * - resultsElem: HTML element to which generated search results elements will
 *     be appended
 */
function renderJekyllPagesApiSearchResults(query, results, doc, resultsElem) {
  results.forEach(function(result, index) {
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