<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# broadcastShapes

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Broadcast array shapes to a single shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import broadcastShapes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@esm/index.mjs';
```

#### broadcastShapes( shapes )

Broadcasts array shapes to a single shape.

```javascript
var sh1 = [ 8, 1, 6, 1 ];
var sh2 = [ 7, 1, 5 ];

var sh = broadcastShapes( [ sh1, sh2 ] );
// returns [ 8, 7, 6, 5 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When operating on two arrays, the function compares their shapes element-wise, beginning with the trailing (i.e., rightmost) dimension. The following are examples of compatible shapes and their corresponding broadcasted shape:

    ```text
    A      (4d array):  8 x 1 x 6 x 1
    B      (3d array):      7 x 1 x 5
    ---------------------------------
    Result (4d array):  8 x 7 x 6 x 5

    A      (2d array):  5 x 4
    B      (1d array):      1
    -------------------------
    Result (2d array):  5 x 4

    A      (2d array):  5 x 4
    B      (1d array):      4
    -------------------------
    Result (2d array):  5 x 4

    A      (3d array):  15 x 3 x 5
    B      (3d array):  15 x 1 x 5
    ------------------------------
    Result (3d array):  15 x 3 x 5

    A      (3d array):  15 x 3 x 5
    B      (2d array):       3 x 5
    ------------------------------
    Result (3d array):  15 x 3 x 5

    A      (3d array):  15 x 3 x 5
    B      (2d array):       3 x 1
    ------------------------------
    Result (3d array):  15 x 3 x 5

    A      (5d array):  8 x 1 x 1 x 6 x 1
    B      (4d array):      1 x 7 x 1 x 5
    C      (5d array):  8 x 4 x 1 x 6 x 5
    -------------------------------------
    Result (5d array):  8 x 4 x 7 x 6 x 5

    A      (5d array):  8 x 1 x 1 x 6 x 1
    B      (1d array):                  0
    -------------------------------------
    Result (5d array):  8 x 1 x 1 x 6 x 0

    A      (5d array):  8 x 0 x 1 x 6 x 1
    B      (2d array):              6 x 5
    -------------------------------------
    Result (5d array):  8 x 0 x 1 x 6 x 5

    A      (5d array):  8 x 1 x 1 x 6 x 1
    B      (5d array):  8 x 0 x 1 x 6 x 1
    -------------------------------------
    Result (5d array):  8 x 0 x 1 x 6 x 1

    A      (3d array):  3 x 2 x 1
    B      (0d array):
    -----------------------------
    Result (3d array):  3 x 2 x 1

    A      (0d array):
    B      (3d array):  3 x 2 x 1
    -----------------------------
    Result (3d array):  3 x 2 x 1
    ```

    As demonstrated above, arrays are not required to have the same number of dimensions in order to be broadcast compatible. Array shapes with fewer dimensions are implicitly prepended with singleton dimensions (i.e., dimensions equal to `1`). Accordingly, the following example

    ```text
    A      (2d array):  5 x 4
    B      (1d array):      4
    -------------------------
    Result (2d array):  5 x 4
    ```

    is equivalent to

    ```text
    A      (2d array):  5 x 4
    B      (2d array):  1 x 4
    -------------------------
    Result (2d array):  5 x 4
    ```

    Similarly, a zero-dimensional array is expanded (by prepending singleton dimensions) from

    ```text
    A      (3d array):  3 x 2 x 1
    B      (0d array):
    -----------------------------
    Result (3d array):  3 x 2 x 1
    ```

    to

    ```text
    A      (3d array):  3 x 2 x 1
    B      (3d array):  1 x 1 x 1
    -----------------------------
    Result (3d array):  3 x 2 x 1
    ```

    Stated otherwise, every array has implicit leading dimensions of size `1`. During broadcasting, a `3 x 4` matrix is the same as a `3 x 4 x 1 x 1 x 1` multidimensional array.

-   Two respective dimensions in two shape arrays are compatible if

    1.  the dimensions are equal.
    2.  one dimension is `1`.

    The two aforementioned rules apply to empty arrays or arrays that have a dimension of size `0`. For unequal dimensions, the size of the dimension which is not `1` determines the size of the output shape dimension.

    Accordingly, dimensions of size `0` must be paired with a dimension of size `0` or `1`. In such cases, by the rules above, the size of the corresponding output shape dimension is `0`.

-   The function returns `null` if provided incompatible shapes (i.e., shapes which cannot be broadcast with one another).

    ```javascript
    var sh1 = [ 3, 2 ];
    var sh2 = [ 2, 3 ];

    var sh = broadcastShapes( [ sh1, sh2 ] );
    // returns null
    ```

    The following are examples of array shapes which are **not** compatible and do **not** broadcast:

    ```text
    A      (1d array):  3
    B      (1d array):  4                   # dimension does not match

    A      (2d array):      2 x 1
    B      (3d array):  8 x 4 x 3           # second dimension does not match

    A      (3d array):  15 x 3 x 5
    B      (2d array):  15 x 3              # singleton dimensions can only be prepended, not appended

    A      (5d array):  8 x 8 x 1 x 6 x 1
    B      (5d array):  8 x 0 x 1 x 6 x 1   # second dimension does not match
    ```

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
<script type="module">

import lpad from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs';
import broadcastShapes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@esm/index.mjs';

var shapes;
var out;
var sh;
var i;
var j;

function shape2string( shape ) {
    return lpad( shape.join( ' x ' ), 20, ' ' );
}

shapes = [
    [ [ 1, 2 ], [ 2 ] ],
    [ [ 1, 1 ], [ 3, 4 ] ],
    [ [ 6, 7 ], [ 5, 6, 1 ], [ 7 ], [ 5, 1, 7 ] ],
    [ [ 1, 3 ], [ 3, 1 ] ],
    [ [ 1 ], [ 3 ] ],
    [ [ 2 ], [ 3, 2 ] ],
    [ [ 2, 3 ], [ 2, 3 ], [ 2, 3 ], [ 2, 3 ] ],
    [ [ 1, 2 ], [ 1, 2 ] ]
];

for ( i = 0; i < shapes.length; i++ ) {
    sh = shapes[ i ];
    for ( j = 0; j < sh.length; j++ ) {
        console.log( shape2string( sh[ j ] ) );
    }
    console.log( lpad( '', 20, '-' ) );

    out = broadcastShapes( sh );
    console.log( shape2string( out )+'\n' );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



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

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-broadcast-shapes.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-broadcast-shapes

[test-image]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-broadcast-shapes/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-broadcast-shapes?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-broadcast-shapes.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-broadcast-shapes/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-broadcast-shapes/main/LICENSE

</section>

<!-- /.links -->
