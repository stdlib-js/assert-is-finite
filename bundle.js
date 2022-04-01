// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isFinite=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;var c=r,f=function(t,e,r){var c,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,b="set"in r,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),b&&u&&u.call(t,e,r.set),t},p=e()?c:f;var b=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var y=function(t){return"number"==typeof t};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var s=function(){return v&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,m=_;var d=function(t){return m.call(t)},j=Object.prototype.hasOwnProperty;var g=function(t,e){return null!=t&&j.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",O=g,h=S,T=_;var w=d,I=function(t){var e,r,n;if(null==t)return T.call(t);r=t[h],e=O(t,h);try{t[h]=void 0}catch(e){return T.call(t)}return n=T.call(t),e?t[h]=r:delete t[h],n},P=s()?I:w,N=Number,E=N.prototype.toString;var F=P,V=N,x=function(t){try{return E.call(t),!0}catch(t){return!1}},A=s();var G=function(t){return"object"==typeof t&&(t instanceof V||(A?x(t):"[object Number]"===F(t)))},k=y,Y=G;var C=b,q=function(t){return k(t)||Y(t)},z=G;C(q,"isPrimitive",y),C(q,"isObject",z);var B=q,D=Number.POSITIVE_INFINITY,H=N.NEGATIVE_INFINITY,J=D,K=H;var L=function(t){return t==t&&t>K&&t<J},M=B.isPrimitive,Q=L;var R=function(t){return M(t)&&Q(t)},U=B.isObject,W=L;var X=function(t){return U(t)&&W(t.valueOf())},Z=R,$=X;var tt=b,et=function(t){return Z(t)||$(t)},rt=X;return tt(et,"isPrimitive",R),tt(et,"isObject",rt),et}));
//# sourceMappingURL=bundle.js.map
