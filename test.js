var chai = require('chai');
var assert = chai.assert;
var logModule = require('./index');

describe('Testing Override Console Log', function() {
  it('console should exist as an object', function() {
    assert.equal(typeof(console), 'object');
  });
  it('console.log should exist as a Fn', function() {
    assert.equal(typeof(console.log), 'function');
  });

  it('checking for existence of the new functions should exist as a Fn', function() {
    assert.equal(typeof(logModule.log), 'function');
    assert.equal(typeof(logModule.logI), 'function');
    assert.equal(typeof(logModule.logD), 'function');
    assert.equal(typeof(logModule.logE), 'function');
  });
});
