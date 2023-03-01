<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isFinite

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a finite number.



<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
import isFinite from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { isObject, isPrimitive } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@deno/mod.js';
```

#### isFinite( value )

Tests if a value is a finite `number`.

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isFinite( 5.0 );
// returns true

bool = isFinite( new Number( 5.0 ) );
// returns true

bool = isFinite( 1.0/0.0 );
// returns false

bool = isFinite( null );
// returns false
```

#### isFinite.isPrimitive( value )

Tests if a `value` is a primitive `number` having a finite value.

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isFinite.isPrimitive( -3.0 );
// returns true

bool = isFinite.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isFinite.isObject( value )

Tests if a `value` is a `Number` object having a finite value.

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isFinite.isObject( 3.0 );
// returns false

bool = isFinite.isObject( new Number( 3.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the built-in [`isFinite`][mdn-is-finite], input values are **not** coerced to numbers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';
import isFinite from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@deno/mod.js';

var bool = isFinite( -5.0 );
// returns true

bool = isFinite( 0.0 );
// returns true

bool = isFinite( new Number( 5.0 ) );
// returns true

bool = isFinite( 5.256 );
// returns true

bool = isFinite( 1.0/0.0 );
// returns false

bool = isFinite( -1.0/0.0 );
// returns false

bool = isFinite( '5' );
// returns false

bool = isFinite( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-finite-array`][@stdlib/assert/is-finite-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only finite numbers.</span>
-   <span class="package-name">[`@stdlib/assert-is-infinite`][@stdlib/assert/is-infinite]</span><span class="delimiter">: </span><span class="description">test if a value is an infinite number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-finite.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-finite

[test-image]: https://github.com/stdlib-js/assert-is-finite/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-finite/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-finite/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-finite?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-finite.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-finite/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-finite/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-finite/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-finite/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-finite/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-finite/main/LICENSE

[mdn-is-finite]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite

<!-- <related-links> -->

[@stdlib/assert/is-finite-array]: https://github.com/stdlib-js/assert-is-finite-array/tree/deno

[@stdlib/assert/is-infinite]: https://github.com/stdlib-js/assert-is-infinite/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
