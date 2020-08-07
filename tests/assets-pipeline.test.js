const { AssetPipeline } = require('../bin/assets-pipeline');
const fs = require('fs-extra');
const path = require('path');

const src = path.resolve(__dirname, 'fixtures/testsite');
const dest = path.resolve(__dirname, 'fixtures/dist/');

let ap;

describe('Asset Pipeline functions', () => {

  beforeEach(async () => {
    ap = new AssetPipeline(src, dest);
    await ap.recursiveListDir();
  });

  describe('getContentHash', () => {
    it('should hash content', () => {
      const hash = ap.getContentHash('whatever');
      expect(hash).toEqual('85738f8f9a7f1b04b5329c590ebcb9e425925c6d0984089c43a022de4f19c281');
    });
  });

  describe('getFileHash', () => {
    it('should hash a file', async () => {
      const hash = await ap.getFileHash(path.join(__dirname, 'fixtures/hash.txt'));
      expect(hash).toEqual('4fe366c97ef67271487fd682c7e4efa122338272c12df66003adfc3ec6c064af');
    });
  });

  describe('getHashedPath', () => {
    it('should add a hash to a path', async () => {
      const hash = '4fe366c97ef67271487fd682c7e4efa122338272c12df66003adfc3ec6c064af';
      const hashedPath = ap.getHashedPath('fixtures/hash.txt', hash);
      expect(hashedPath).toEqual('fixtures/hash.4fe366c9.txt');
    });
  });

  describe('spliceString', () => {
    it('should replace a specific part of a string', async () => {
      const replaced = ap.spliceString('aabbaa', 2, 4, 'aa');
      expect(replaced).toEqual('aaaaaa');
    });
  });

  describe('recursiveListDir', () => {
    it('should generate a map of files', async () => {
      expect(ap.assetMap).toEqual({
        "assets/file1.css": {
          "hashedPath": null,
        },
        "assets/file2.js":  {
          "hashedPath": null,
        },
        "assets/octoamo-sm.png": {
          "hashedPath": null,
        },
        "index.html": {
          "hashedPath": null,
        },
        "robots.txt": {
          "hashedPath": null,
        },
      });
    });
  });

  describe('updateKeys', () => {
    const key = 'assets/file1.css';

    it('Should update a given key with hash data', async () => {
      ap.updateKeys({ key, fileHash: 'testhash-blah' });
      expect(ap.assetMap[key].hash).toBe('testhash-blah');
      expect(ap.assetMap[key].shortHash).toBe('testhash');
      expect(ap.assetMap[key].hashedPath).toBe('assets/file1.testhash.css');
    });

    it('Should update a given key with written flag', async () => {
      ap.updateKeys({ key, written: true });
      expect(ap.assetMap[key].written).toBe(true);
    });
  });

  describe('trimLeadingSlash', () => {
    it('should remove a leading slash', () => {
      const trimmed = ap.trimLeadingSlash('/whatever/something/');
      expect(trimmed).toBe('whatever/something/');
    });
  });

  describe('hasHashedReplacementURL',  () => {
    const fileObj = {
      'foo/test.css': {
        hashedPath: 'foo/test.7ff8923a.css',
      },
      'foo/test2.css': {
        hashedPath: null
      },
    };

    it('should return true if a hashedReplacementURL exists', () => {
      const hasReplacementURL = ap.hasHashedReplacementURL('/foo/test.css', fileObj);
      expect(hasReplacementURL).toBe(true);
    });

    it('can handle a query string', () => {
      const hasReplacementURL = ap.hasHashedReplacementURL('/foo/test.css?foo=1', fileObj);
      expect(hasReplacementURL).toBe(true);
    });

    it('should return false if a hashedReplacementURL does not exist', () => {
      const hasReplacementURL = ap.hasHashedReplacementURL('/foo/test2.css', fileObj);
      expect(hasReplacementURL).toBe(false);
    });
  });

  describe('getReplacementURL', () => {
    const fileObj = {
      'foo/test.css': {
        hashedPath: 'foo/test.7ff8923a.css',
      },
      'foo/test2.css': {
        hashedPath: null
      },
    };

    it('should provide a hashed path based on the input', () => {
      const replacement = ap.getReplacementURL('/foo/test.css', fileObj)
      expect(replacement).toBe('/foo/test.7ff8923a.css');
    });

    it('should provide a hashed path based on the input', () => {
      const replacement = ap.getReplacementURL('/foo/test.css?foo=1', fileObj)
      expect(replacement).toBe('/foo/test.7ff8923a.css?foo=1');
    });

    it('should provide the same output as the input if not hashed', () => {
      const replacement = ap.getReplacementURL('/foo/test2.css', fileObj)
      expect(replacement).toBe('/foo/test2.css');
    });
  });

  describe('updateHashMap', () => {
    beforeAll(async () => {
      await ap.recursiveListDir();
    });

    it('should update the assetMap for files matching a certain pattern', async () => {
      await ap.updateHashMap(/\.css$/)
      expect(ap.assetMap).toEqual({
        "assets/file1.css": {
          "hash": "072a023e300cf4a837e64807f5cbacf432b885f34738a466b7ee6f1e9a9476b3",
          "hashedPath": "assets/file1.072a023e.css",
          "shortHash": "072a023e",
          "written": false,
        },
        "assets/file2.js":  {
          "hashedPath": null,
        },
        "assets/octoamo-sm.png": {
          "hashedPath": null,
        },
        "index.html": {
          "hashedPath": null,
        },
        "robots.txt": {
          "hashedPath": null,
        },
      });
    });

    it('should call the callback when provided', async () => {
      const myAsyncMock = jest.fn();
      await ap.updateHashMap(/\.css$/, myAsyncMock)
      expect(myAsyncMock.mock.calls.length).toBe(1);
    });
  });
});


describe('Asset Pipeline cacheBusting', () => {
  describe('cachebustAssets', () => {
    beforeAll(async () => {
      jest.spyOn(console, 'log').mockImplementation(jest.fn());
      ap = new AssetPipeline(src, dest);
      await ap.cacheBustAssets();
    });

    it('should rewrite a binary file to dest', async () => {
      const exists = await fs.stat(path.join(dest, ap.assetMap['assets/octoamo-sm.png'].hashedPath)).catch((e) => false);
      expect(exists).not.toBe(false);
    });

    it('should rewrite a js file to dest', async () => {
      const exists = await fs.stat(path.join(dest, ap.assetMap['assets/file2.js'].hashedPath)).catch((e) => false);
      expect(exists).not.toBe(false);
    });

    it('should have rewritten asset refs in js', async () => {
      const jsFile = await fs.readFile(path.join(dest, ap.assetMap['assets/file2.js'].hashedPath), 'utf8');
      expect(jsFile).toContain(ap.assetMap['assets/octoamo-sm.png'].hashedPath);
    });

    it('should rewrite a css file to dest', async () => {
      const exists = await fs.stat(path.join(dest, ap.assetMap['assets/file1.css'].hashedPath)).catch((e) => false);
      expect(exists).not.toBe(false);
    });

    it('should have rewritten asset refs in css', async () => {
      const css = await fs.readFile(path.join(dest, ap.assetMap['assets/file1.css'].hashedPath), 'utf8');
      expect(css).toContain(ap.assetMap['assets/octoamo-sm.png'].hashedPath);
    });

    it('should rewrite an html file to dest', async () => {
      const exists = await fs.stat(path.join(dest, 'index.html')).catch((e) => false);
      expect(exists).not.toBe(false);
    });

    it('should have rewritten asset refs in html', async () => {
      const html = await fs.readFile(path.join(dest, 'index.html'), 'utf8');
      expect(html).toContain(ap.assetMap['assets/octoamo-sm.png'].hashedPath);
      expect(html).toContain(ap.assetMap['assets/file2.js'].hashedPath);
      expect(html).toContain(ap.assetMap['assets/file1.css'].hashedPath);
    });

    it('should rewrite an robots.txt file to dest', async () => {
      const exists = await fs.stat(path.join(dest, 'robots.txt')).catch((e) => false);
      expect(exists).not.toBe(false);
    });
  });
});
