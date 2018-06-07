var chai = require('chai');
var assert = chai.assert;

describe('Testing Override Console Log', function() {
  it('console should exist as an object', function() {
    assert.equal(typeof(console), 'object');
  });
  it('console.log should exist as a Fn', function() {
    assert.equal(typeof(console.log), 'function');
  });
});
