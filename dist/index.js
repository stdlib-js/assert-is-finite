"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(m){throw (r=0, m)}};};var t=e(function(R,n){
var o=require('@stdlib/assert-is-number/dist').isPrimitive,b=require('@stdlib/math-base-assert-is-finite/dist');function f(i){return o(i)&&b(i)}n.exports=f
});var s=e(function(g,v){
var O=require('@stdlib/assert-is-number/dist').isObject,j=require('@stdlib/math-base-assert-is-finite/dist');function p(i){return O(i)&&j(i.valueOf())}v.exports=p
});var a=e(function(h,c){
var x=t(),P=s();function F(i){return x(i)||P(i)}c.exports=F
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),N=t(),d=s();q(u,"isPrimitive",N);q(u,"isObject",d);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
