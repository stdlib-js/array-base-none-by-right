<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# noneByRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether all elements in an array fail a test implemented by a predicate function, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
noneByRight = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-none-by-right@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var noneByRight = require( 'path/to/vendor/umd/array-base-none-by-right/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-none-by-right@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.noneByRight;
})();
</script>
```

#### noneByRight( x, predicate\[, thisArg] )

Tests whether all elements in an array fail a test implemented by a `predicate` function, iterating from right to left.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ 0, 0, 0, 0 ];

var bool = noneByRight( x, isPositive );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `false`.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ -1, -2, 3, -4 ];

var bool = noneByRight( x, isPositive );
// returns false
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the `predicate` function execution context, provide a `thisArg`.

```javascript
function predicate( value ) {
    this.count += 1;
    return ( value < 0 );
}

var x = [ 1, 2, -3, 4 ];

var context = {
    'count': 0
};

var bool = noneByRight( x, predicate, context );
// returns false

var cnt = context.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function performs a linear scan and returns immediately upon encountering a truthy return value. Unlike [`Array.prototype.every`][mdn-array-every], when performing a linear scan, the function does **not** skip `undefined` elements.
-   If provided an empty array, the function returns `true`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@umd/browser.js"></script>
<script type="text/javascript">
(function () {.isPrimitive;
var naryFunction = require( '@stdlib/utils-nary-function' );
var noneByRight = require( '@stdlib/array-base-none-by-right' );

var x = bernoulli( 10, 0.1, {
    'dtype': 'int8'
});
// returns <Int8Array>

var out = noneByRight( x, naryFunction( isPositiveInteger, 1 ) );
// returns <boolean>

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-none-by-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-none-by-right

[test-image]: https://github.com/stdlib-js/array-base-none-by-right/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/array-base-none-by-right/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-none-by-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-none-by-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-none-by-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-none-by-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-none-by-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-none-by-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-none-by-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-none-by-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-none-by-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-none-by-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-none-by-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-none-by-right/main/LICENSE

[mdn-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

</section>

<!-- /.links -->
