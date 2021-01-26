const fs = require('fs-extra');
const glob = require('glob');

/*
 * Tests to mitigate issues with headings not being displayed due
 * to incorrect formatting. This should be a test failure:
 *
 * ```
 * <section>
 * ### A Heading
 * ```
 *
 * This would not:
 *
 * ```
 * <section>
 *
 * ### Another heading
 *```
 */
describe('section heading test', () => {
  for (const mdFile of glob.sync('src/content/**/*.md')) {
    it(`${mdFile} should not have sections next to headings without a new line`, async () => {
      const mdFileContent = await fs.readFile(mdFile, 'utf8');
      expect(mdFileContent).not.toMatch(/<\/section>(?:\r|\n|\r\n)#{1,6} .*$/m);
    });
  }
});
