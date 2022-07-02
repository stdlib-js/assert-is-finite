// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as s,isObject as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-finite@esm/index.mjs";function n(e){return s(e)&&i(e)}function r(e){return t(e)&&i(e.valueOf())}function m(e){return n(e)||r(e)}e(m,"isPrimitive",n),e(m,"isObject",r);export{m as default,r as isObject,n as isPrimitive};
//# sourceMappingURL=index.mjs.map
