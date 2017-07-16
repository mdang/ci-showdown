var chai = require('chai');
var assert = chai.assert;

describe('Basic Math Suite', function() {
  it('should add', function() {
    assert.equal(1+1, 2);
  });

  it('should subtract', function() {
    assert.equal(2-1, 1);
  });

  it('should divide', function() {
    assert.equal(9/3, 3);
  });

  it('should multiply', function() {
    assert.equal(2*2, 4);
  })
});
