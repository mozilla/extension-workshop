const glob = require('glob');
const matter = require('gray-matter');

describe('frontmatter tests', () => {
  for (const mdFile of glob.sync('src/content/**/*.md')) {
    let fm = matter.read(mdFile).data;

    // Ignore the homepage as it's a special case.
    if (!mdFile.match(/index\.md/)) {
      it(`${mdFile} should have description under 70 chars`, () => {
        expect(fm.title).toBeDefined();
        expect(fm.title.length).toBeLessThanOrEqual(70);
      });
    }

    it(`${mdFile} should have tags with no spaces`, () => {
      const tags = fm.tags || [];
      for (const tag of tags) {
        expect(tag).toMatch(/^[a-z0-9-]+$/);
      }
    });
  }
});
