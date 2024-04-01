// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as s,isObject as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-finite@v0.2.1-esm/index.mjs";function n(e){return s(e)&&i(e)}function r(e){return t(e)&&i(e.valueOf())}function m(e){return n(e)||r(e)}e(m,"isPrimitive",n),e(m,"isObject",r);export{m as default,r as isObject,n as isPrimitive};
//# sourceMappingURL=index.mjs.map
