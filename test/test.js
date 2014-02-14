var assert = require('assert');
var isCredit = require('../index');

describe('isCreditCard', function () {
  it('should return true when the credit card is valid', function () {
    assert.equal(isCredit('4367455035219281'), true);
  });
});