/* eslint-disable import/no-unresolved */
const { assert } = require('chai');
const { fibonacciIteration } = require('../src/fibonacci');

describe('fibonacciIteration', () => {
  it('give input is 5 should return balba', () => {
    assert.equal(fibonacciIteration(5), 5);
  });
});
