// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;var l=e,f=function(t,r,e){var l,f,b,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),b="get"in e,p="set"in e,f&&(b||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return b&&a&&a.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t},b=r()?l:f;var p=function(t,r,e){b(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var y=function(t){return"number"==typeof t};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return v&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var j=function(t){return m.call(t)},d=Object.prototype.hasOwnProperty;var g=function(t,r){return null!=t&&d.call(t,r)},S="function"==typeof Symbol?Symbol.toStringTag:"",O=g,w=S,I=s;var P=j,h=function(t){var r,e,n;if(null==t)return I.call(t);e=t[w],r=O(t,w);try{t[w]=void 0}catch(r){return I.call(t)}return n=I.call(t),r?t[w]=e:delete t[w],n},N=_()?h:P,T=Number,E=T.prototype.toString;var V=N,A=T,F=function(t){try{return E.call(t),!0}catch(t){return!1}},G=_();var k=function(t){return"object"==typeof t&&(t instanceof A||(G?F(t):"[object Number]"===V(t)))},x=y,Y=k;var C=p,q=function(t){return x(t)||Y(t)},z=y,B=k;C(q,"isPrimitive",z),C(q,"isObject",B);var D=Number.POSITIVE_INFINITY,H=T.NEGATIVE_INFINITY,J=D,K=H;var L=function(t){return t==t&&t>K&&t<J};function M(t){return z(t)&&L(t)}function Q(t){return B(t)&&L(t.valueOf())}function R(t){return M(t)||Q(t)}p(R,"isPrimitive",M),p(R,"isObject",Q);export{R as default,Q as isObject,M as isPrimitive};
//# sourceMappingURL=mod.js.map