
# bit-vector

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Simple, fast bit vectors for javascript.  Useful in place of object maps where performance is extremely important and your keys are all integers or integer convertible values that lie within a relatively narrow range.

## Installation

    $ npm install bit-vector

## Usage

This package exports four functions:

  * `createBv(sizeInBits)` - Creates a bit vector with the number of bits you want.  Returns an array or typed array (depending on your environment) of length: `Math.ceil(sizeInBits / 32)`.
  * `setBit(bv, idx)` - Set the bit at `idx` position in the vector
  * `clearBit(bv, idx)` - Clear the bit at `idx` position in the vector
  * `getBit(bv, idx)` - Retrieve the bit as a boolean value at `idx` position in the vector

That's it for now.

## Performance

On v8 this is about twice as fast as the equivalent operation using an object.  Here's the [jsperf](http://jsperf.com/bit-vector-vs-object/2).  It is obviously also substantially more memory-efficient.  On v8 in particular it should be substantially faster when you need to frequently delete keys, since this puts v8 objects into 'dictionary mode' which is substantially slower.

  * Chrome - ~2x faster than objects
  * Safari - 2-3x faster
  * Firefox - 40x faster

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
