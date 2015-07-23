[![NPM version](https://badge.fury.io/js/iphone-png.svg)](http://badge.fury.io/js/iphone-png)
[![Build Status](https://travis-ci.org/kaelzhang/node-iphone-png.svg?branch=master)](https://travis-ci.org/kaelzhang/node-iphone-png)
[![Dependency Status](https://gemnasium.com/kaelzhang/node-iphone-png.svg)](https://gemnasium.com/kaelzhang/node-iphone-png)

# iphone-png

Make png files extracted from .ipa file of iphone or ipad readable and openable.

Mac OS X only for now, or you can help me to make it work on Windows.

## Install

```sh
$ npm install iphone-png -g
```

After this, you will have a `iphone-png` command in your Terminal.

## Usage

### CLI

```sh
iphone-png atlas-iphone.png atlas.png
# Then `atlas.png` will be recognized and opened in Photoshop.
```

### npm module

```sh
$ npm install iphone-png -g
```

```js
var crush = require('iphone-png');
crush(src, output, function(err){
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // If succeeded, the `output` file will be a normal png file that can be opened by photoshop. 
});
```


## License

MIT
