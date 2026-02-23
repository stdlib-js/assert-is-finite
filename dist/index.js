"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(y,n){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,o=require('@stdlib/math-base-assert-is-finite/dist');function b(i){return m(i)&&o(i)}n.exports=b
});var s=e(function(R,v){
var f=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/math-base-assert-is-finite/dist');function j(i){return f(i)&&O(i.valueOf())}v.exports=j
});var a=e(function(g,c){
var p=t(),x=s();function P(i){return p(i)||x(i)}c.exports=P
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),F=t(),N=s();q(u,"isPrimitive",F);q(u,"isObject",N);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
