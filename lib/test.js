"use strict";

var idealData = require('./result');

var myData = require('./index');

var assert = require('chai').assert;

describe('Equals data', function () {
  it('The example data is equal with result data after convert!', function () {
    assert.deepEqual(myData, idealData);
  });
});