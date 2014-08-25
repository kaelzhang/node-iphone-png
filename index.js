'use strict';

module.exports = crush;

var spawns = require('spawns');
var fs = require('fs');
var fse = require('fs-extra');
var tmp = require('tmp');
var node_path = require('path');
var bin = '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin/pngcrush';
var command = bin + ' -q -revert-iphone-optimizations -d';

function check (callback) {
  fs.exists(bin, function (exists) {
    if (exists) {
      return callback(null);
    }

    callback({
      code: 'COMMAND_NOT_FOUND',
      message: 'Command "pngcrush" not found. You need to install the latest version of XCode.'
    });
  });
}


function crush (from, to, callback) {
  if (from === to) {
    return callback({
      code: 'INVALID_FILE_PATH',
      message: 'The resource file and the destination should not be the same.'
    });
  }

  check(function (err) {
    if (err) {
      return callback(err);
    }

    tmp.dir(function (err, dir) {
      if (err) {
        return callback(err);
      }

      spawns(command + ' "' + dir + '" "' + from + '"', {
        stdio: 'inherit'
      }).on('close', function (code) {
        if (code) {
          return callback(code);
        }

        var filename = node_path.basename(from);
        var output = node_path.join(dir, filename);

        fse.copy(output, to, callback);
      });
    });
  });
}
