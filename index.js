'use strict';

module.exports = function isCreditCard (cardNumber) {
  cardNumber = cardNumber.split('');
  if (cardNumber.length !== 16) {
    throw new Error('invalid card number');
  }

  return cardNumber.map(function (num, index) {
    return (index % 2 === 0 ? num * 2 : num).toString();
  }).reduce(function (soFar, strnum) {
    strnum.split('').forEach(function (sn) {
      soFar = soFar + parseInt(sn, 10);
    });

    return soFar;
  }, 0) % 10 === 0;
};
