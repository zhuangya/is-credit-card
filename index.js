"use strict";

module.exports = function isCreditCard(cardNumber) {
  return (
    [...cardNumber].reduce((sum, digit, index) => {
      digit = digit * (index % 2 === 0 ? 2 : 1);
      while (digit >= 10) {
        sum += digit % 10;
        digit = Math.floor(digit / 10);
      }
      return sum + digit;
    }, 0) %
      10 ===
    0
  );
};
