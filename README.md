Error Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Error function][error-function].

The [error function][error-function] is defined as


## Installation

``` bash
$ npm install math-erf
```


## Usage

``` javascript
var erf = require( 'math-erf' );
```

#### erf( x )

Evaluates the [error function][error-function].

``` javascript
var y = erf()
// returns
```


## Examples

``` javascript
var erf = require( 'math-erf' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-erf.svg
[npm-url]: https://npmjs.org/package/math-erf

[build-image]: http://img.shields.io/travis/math-io/erf/master.svg
[build-url]: https://travis-ci.org/math-io/erf

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/erf/master.svg
[coverage-url]: https://codecov.io/github/math-io/erf?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/erf.svg
[dependencies-url]: https://david-dm.org/math-io/erf

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/erf.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/erf

[github-issues-image]: http://img.shields.io/github/issues/math-io/erf.svg
[github-issues-url]: https://github.com/math-io/erf/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[error-function]: https://en.wikipedia.org/wiki/Error_function