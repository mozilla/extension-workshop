/**
 * @jest-environment jsdom
 */

describe('new-tab-links.js', () => {
  beforeAll(() => {
    // Set up our document body
    document.body.innerHTML = `
      <a id="test1" href="http://${location.hostname}/">test1</a>
      <a id="test2" href="/whatever">test2</a>
      <a id="test3" href="http://whatever.com" rel="nofollow">test3</a>
      <a id="test4" href="https://whatever.com">test4</a>
      <a id="test5" href="/whatever" rel="nofollow">test2</a>
    `;

    // This module has a side-effect
    require('../src/assets/js/new-tab-links');
  });

  it('should have not added rel or target attrs to a link on this host', () => {
    const testLink = document.getElementById('test1');
    expect(testLink.getAttribute('rel')).toBe(null);
    expect(testLink.getAttribute('target')).toBe(null);
  });

  it('should have not added rel or target attrs to a relative link', () => {
    const testLink = document.getElementById('test2');
    expect(testLink.getAttribute('rel')).toBe(null);
    expect(testLink.getAttribute('target')).toBe(null);
  });

  it('should append rel attrs and target attr to an external link', () => {
    const testLink = document.getElementById('test3');
    expect(testLink.getAttribute('rel')).toBe('nofollow noreferrer noopener');
    expect(testLink.getAttribute('target')).toBe('_blank');
  });

  it('should add rel attrs and target attr to an external link', () => {
    const testLink = document.getElementById('test4');
    expect(testLink.getAttribute('rel')).toBe('noreferrer noopener');
    expect(testLink.getAttribute('target')).toBe('_blank');
  });

  it('should not change an existing rel attr on a relative link', () => {
    const testLink = document.getElementById('test5');
    expect(testLink.getAttribute('rel')).toBe('nofollow');
    expect(testLink.getAttribute('target')).toBe(null);
  });
});
