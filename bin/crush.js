#!/usr/bin/env node

'use strict';

var crush = require('../');
var from = process.argv[2];
var to = process.argv[3];

crush(from, to, function (err) {
  if (!err) {
    process.exit(0);
  }

  var message = err.stack || err.message;
  if (message) {
    console.error(message);
  } else if (typeof err === 'number') {
    console.error('Not ok, pngcrush exit with code ' + err);
  } else {
    console.error(err);
  }

  process.exit(1);
});