module.exports = function (cardNumber) {
  cardNumber = cardNumber.split('');
  var i;
  for (i = 0, l = cardNumber.length; i < l; i ++) {
    if (i % 2 === 0) {
      cardNumber[i] = cardNumber[i] * 2;
    }
  }

  return sumString(cardNumber.join('')) % 10 === 0;

};


function sumString(string) {
  var s = string.split('');
  var i;
  var result = 0;
  for (i = 0, l = s.length; i < l; i++) {
    result = result + ~~s[i];
  }

  return result;
}