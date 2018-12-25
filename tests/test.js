const hamzahModule = require('../hamzah')
const assert = require('assert');

describe('hamzah()', () => {
  it('should return a text without "hamzah"', () => {
    const result = hamzahModule.hamzah('أحمد أمجد إحسان آسر');
    assert.equal(result, 'احمد امجد احسان اسر');
  });
});