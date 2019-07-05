# credit card number validator helper

[![Greenkeeper badge](https://badges.greenkeeper.io/zhuangya/is-credit-card.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]


## usage

```
var isCreditCard = require('is-creadit-card');

if (isCreditCard(cardNumber)) {
  buy(something)
} else {
  console.error('damn!');
}
```

[npm-image]: https://img.shields.io/npm/v/is-credit-card.svg?style=flat-square
[npm-url]: https://npmjs.org/package/is-credit-card
[travis-image]: https://img.shields.io/travis/zhuangya/is-credit-card.svg?style=flat-square
[travis-url]: https://travis-ci.org/zhuangya/is-credit-card
[david-image]: http://img.shields.io/david/zhuangya/is-credit-card.svg?style=flat-square
[david-url]: https://david-dm.org/palomajs/is-credit-card
[license-image]: http://img.shields.io/npm/l/is-credit-card.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/is-credit-card.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/is-credit-card
