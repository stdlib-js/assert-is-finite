// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,a=r,f=function(e,t,r){var a,f,p,b;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||c.call(e,t)?(a=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=a):e[t]=r.value),p="get"in r,b="set"in r,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),b&&u&&u.call(e,t,r.set),e},p=t()?a:f,b=function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},y=function(e){return"number"==typeof e},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=function(){return s&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,d=m,j=function(e){return d.call(e)},v=Object.prototype.hasOwnProperty,g=function(e,t){return null!=e&&v.call(e,t)},S="function"==typeof Symbol?Symbol.toStringTag:"",O=g,h=S,T=m,w=j,I=function(e){var t,r,n;if(null==e)return T.call(e);r=e[h],t=O(e,h);try{e[h]=void 0}catch(t){return T.call(e)}return n=T.call(e),t?e[h]=r:delete e[h],n},P=_()?I:w,N=Number,E=N.prototype.toString,F=P,V=N,x=function(e){try{return E.call(e),!0}catch(e){return!1}},A=_(),G=function(e){return"object"==typeof e&&(e instanceof V||(A?x(e):"[object Number]"===F(e)))},k=y,Y=G,C=b,q=function(e){return k(e)||Y(e)},z=G;C(q,"isPrimitive",y),C(q,"isObject",z);var B=q,D=Number.POSITIVE_INFINITY,H=N.NEGATIVE_INFINITY,J=D,K=H,L=function(e){return e==e&&e>K&&e<J};function M(e){return B.isPrimitive(e)&&L(e)}function Q(e){return B.isObject(e)&&L(e.valueOf())}function R(e){return M(e)||Q(e)}return b(R,"isPrimitive",M),b(R,"isObject",Q),R},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isFinite=t();
//# sourceMappingURL=browser.js.map
