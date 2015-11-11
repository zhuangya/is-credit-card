var assert = require('assert');
var isCredit = require('.');

describe('isCreditCard', function () {
  it('should throw error when credit card is invalid', function () {
    assert.throws(function () { isCredit('123') }, /invalid card number/);
  });
  it('should return true when the credit card is valid', function () {
    assert.equal(isCredit('4367455035219281'), true);
  });
});

