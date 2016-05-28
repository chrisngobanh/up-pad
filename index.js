'use strict';
module.exports = upPad;

function upPad (str, len) {
  // convert `str` to `string`
  str = str + '';

  if (len <= 0) return str;

  var ch = '\n';
  var pad = '';
  while (true) {
    if (len & 1) pad += ch;
    len >>= 1;
    if (len) ch += ch;
    else break;
  }
  return pad + str;
}