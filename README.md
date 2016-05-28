## up-pad

String up pad

We are now using O(log(n)) algorithm.

[![Build Status][travis-image]][travis-url]

## Install

```bash
$ npm install up-pad
```

## Usage

```js
upPad = require('up-pad')

upPad('foo', 5)
// => "\n\n\n\n\nfoo"

upPad('foobar', 6)
// => "\n\n\n\n\n\nfoobar"

upPad(1, 2)
// => "\n\n1"

upPad(17, 5)
// => "\n\n\n\n\n17"
```

[travis-image]: https://travis-ci.org/chrisngobanh/up-pad.svg?branch=master
[travis-url]: https://travis-ci.org/chrisngobanh/up-pad