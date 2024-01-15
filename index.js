// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).noneByRight=e()}(this,(function(){"use strict";var r="function";var e={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function t(r){var t=e[r];return"function"==typeof t?t:e.default}var n={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function i(r){var e=n[r];return"function"==typeof e?e:n.default}var o={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function a(r){var e=o[r];return"function"==typeof e?e:o.default}var u={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function f(r){var e=u[r];return"function"==typeof e?e:u.default}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function p(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=p(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=p(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(r){return"string"==typeof r}var b=Math.abs,v=String.prototype.toLowerCase,d=String.prototype.toUpperCase,E=String.prototype.replace,A=/e\+(\d)$/,T=/e-(\d)$/,_=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function S(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,V,"$1e"),t=E.call(t,k,"e"),t=E.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,A,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,_,"$1."),t=E.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):v.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var B=String.fromCharCode,I=isNaN,O=Array.isArray;function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,i,o,a,u,f,l;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(w(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,I(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function Y(r){var e,t,n;if(!N(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=U(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var W,$=Object.prototype,G=$.toString,Z=$.__defineGetter__,X=$.__defineSetter__,J=$.__lookupGetter__,z=$.__lookupSetter__;W=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(r,e,t.get),a&&X&&X.call(r,e,t.set),r};var q=W;function D(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var ir=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[nr],e=er(r,nr);try{r[nr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return Q.call(r)};var or=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};function ar(r){return null!==r&&"object"==typeof r}function ur(r){return ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function fr(){return/^\s*function\s*([^(]*)/i}D(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ar));var lr=/^\s*function\s*([^(]*)/i;function cr(r){var e,t,n;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return ur(r)?"Buffer":t}D(fr,"REGEXP",lr);var sr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},yr=Object.prototype.toString;var pr=Object.prototype.hasOwnProperty;var hr="function"==typeof tr?tr.toStringTag:"";var gr=K()?function(r){var e,t,n,i,o;if(null==r)return yr.call(r);t=r[hr],o=hr,e=null!=(i=r)&&pr.call(i,o);try{r[hr]=void 0}catch(e){return yr.call(r)}return n=yr.call(r),e?r[hr]=t:delete r[hr],n}:function(r){return yr.call(r)},mr="function"==typeof Float64Array;var wr="function"==typeof Float64Array?Float64Array:null;var br="function"==typeof Float64Array?Float64Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,NaN]),t=e,r=(mr&&t instanceof Float64Array||"[object Float64Array]"===gr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Float32Array;var Er=Number.POSITIVE_INFINITY,Ar="function"==typeof Float32Array?Float32Array:null;var Tr="function"==typeof Float32Array?Float32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,5e40]),t=e,r=(dr&&t instanceof Float32Array||"[object Float32Array]"===ir(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Er}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Uint32Array;var jr="function"==typeof Uint32Array?Uint32Array:null;var kr="function"==typeof Uint32Array?Uint32Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(xr&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Sr="function"==typeof Int32Array;var Lr="function"==typeof Int32Array?Int32Array:null;var Rr="function"==typeof Int32Array?Int32Array:void 0;var Br=function(){var r,e,t;if("function"!=typeof Lr)return!1;try{e=new Lr([1,3.14,-3.14,2147483648]),t=e,r=(Sr&&t instanceof Int32Array||"[object Int32Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")},Ir="function"==typeof Uint16Array;var Or="function"==typeof Uint16Array?Uint16Array:null;var Cr="function"==typeof Uint16Array?Uint16Array:void 0;var Fr=function(){var r,e,t;if("function"!=typeof Or)return!1;try{e=new Or(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ir&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Mr="function"==typeof Int16Array;var Pr="function"==typeof Int16Array?Int16Array:null;var Ur="function"==typeof Int16Array?Int16Array:void 0;var Nr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr([1,3.14,-3.14,32768]),t=e,r=(Mr&&t instanceof Int16Array||"[object Int16Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")},Yr="function"==typeof Uint8Array;var Wr="function"==typeof Uint8Array?Uint8Array:null;var $r="function"==typeof Uint8Array?Uint8Array:void 0;var Gr=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,256,257]),t=e,r=(Yr&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")},Zr="function"==typeof Uint8ClampedArray;var Xr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Jr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var zr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Zr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ir(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},qr="function"==typeof Int8Array;var Dr="function"==typeof Int8Array?Int8Array:null;var Hr="function"==typeof Int8Array?Int8Array:void 0;var Kr=function(){var r,e,t;if("function"!=typeof Dr)return!1;try{e=new Dr([1,3.14,-3.14,128]),t=e,r=(qr&&t instanceof Int8Array||"[object Int8Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};function Qr(r){return"number"==typeof r}var re=Number,ee=re.prototype.toString;var te=K();function ne(r){return"object"==typeof r&&(r instanceof re||(te?function(r){try{return ee.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function ie(r){return Qr(r)||ne(r)}D(ie,"isPrimitive",Qr),D(ie,"isObject",ne);var oe=re.NEGATIVE_INFINITY,ae=Math.floor;function ue(r){return ae(r)===r}function fe(r){return r<Er&&r>oe&&ue(r)}function le(r){return Qr(r)&&fe(r)}function ce(r){return ne(r)&&fe(r.valueOf())}function se(r){return le(r)||ce(r)}function ye(r){return le(r)&&r>=0}function pe(r){return ce(r)&&r.valueOf()>=0}function he(r){return ye(r)||pe(r)}D(se,"isPrimitive",le),D(se,"isObject",ce),D(he,"isPrimitive",ye),D(he,"isObject",pe);function ge(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ue(r.length)&&r.length>=0&&r.length<=4294967295}var me=Math.floor;function we(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(e=r.length,me(e)===e)&&r.length>=0&&r.length<=9007199254740991;var e}var be="function"==typeof ArrayBuffer;function ve(r){return be&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===ir(r)}function de(r){return"object"==typeof r&&null!==r&&!or(r)}var Ee=/./;function Ae(r){return"boolean"==typeof r}var Te=Object.prototype.toString;var _e=Object.prototype.hasOwnProperty;var xe="function"==typeof tr?tr.toStringTag:"";var je=K()?function(r){var e,t,n,i,o;if(null==r)return Te.call(r);t=r[xe],o=xe,e=null!=(i=r)&&_e.call(i,o);try{r[xe]=void 0}catch(e){return Te.call(r)}return n=Te.call(r),e?r[xe]=t:delete r[xe],n}:function(r){return Te.call(r)},ke=Boolean,Ve=Boolean.prototype.toString;var Se=K();function Le(r){return"object"==typeof r&&(r instanceof ke||(Se?function(r){try{return Ve.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===je(r)))}function Re(r){return Ae(r)||Le(r)}function Be(){return new Function("return this;")()}D(Re,"isPrimitive",Ae),D(Re,"isObject",Le);var Ie="object"==typeof self?self:null,Oe="object"==typeof window?window:null,Ce="object"==typeof global?global:null,Fe="object"==typeof globalThis?globalThis:null;var Me=function(r){if(arguments.length){if(!Ae(r))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Be()}if(Fe)return Fe;if(Ie)return Ie;if(Oe)return Oe;if(Ce)return Ce;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Me.document&&Me.document.childNodes,Ue=Int8Array;var Ne="function"==typeof Ee||"object"==typeof Ue||"function"==typeof Pe?function(r){return cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?cr(r).toLowerCase():e};function Ye(r){return"function"===Ne(r)}function We(r,e){if(!(this instanceof We))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Qr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Qr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}D(We,"BYTES_PER_ELEMENT",8),D(We.prototype,"BYTES_PER_ELEMENT",8),D(We.prototype,"byteLength",16),D(We.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(We.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var $e="function"==typeof Math.fround?Math.fround:null,Ge=new _r(1);var Ze="function"==typeof $e?$e:function(r){return Ge[0]=r,Ge[0]};function Xe(r,e){if(!(this instanceof Xe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Qr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Qr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ze(r)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ze(e)}),this}function Je(r){return r instanceof We||r instanceof Xe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function ze(r){return ue(r/2)}function qe(){return"function"==typeof tr&&"symbol"==typeof tr("foo")&&er(tr,"iterator")&&"symbol"==typeof tr.iterator}D(Xe,"BYTES_PER_ELEMENT",4),D(Xe.prototype,"BYTES_PER_ELEMENT",4),D(Xe.prototype,"byteLength",8),D(Xe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Xe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var De=qe()?Symbol.iterator:null;function He(r,e,t){q(r,e,{configurable:!1,enumerable:!1,get:t})}function Ke(r){return r.re}function Qe(r){return r.im}function rt(r,e){return new _r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function et(r,e){return new vr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function tt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ge(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Je(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ke(n),Qe(n))}return e}function nt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ge(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Je(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ke(o),Qe(o))}return n}function it(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Je(n=e[i]))return null;r[o]=Ke(n),r[o+1]=Qe(n),o+=2}return r}var ot=2*_r.BYTES_PER_ELEMENT,at=qe();function ut(r){return r instanceof st||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ft(r){return r===st||"Complex128Array"===r.name}function lt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ot}function ct(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*ot}function st(){var r,e,t,n;if(e=arguments.length,!(this instanceof st))return 0===e?new st:1===e?new st(arguments[0]):2===e?new st(arguments[0],arguments[1]):new st(arguments[0],arguments[1],arguments[2]);if(0===e)t=new _r(0);else if(1===e)if(ye(arguments[0]))t=new _r(2*arguments[0]);else if(we(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Je(t[0])){if(null===(t=it(new _r(2*n),t))){if(!ze(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new _r(arguments[0])}}else{if(lt(t))t=rt(t,0);else if(ct(t))t=et(t,0);else if(!ze(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new _r(t)}else if(ve(arguments[0])){if(!ue((t=arguments[0]).byteLength/ot))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ot,t.byteLength));t=new _r(t)}else{if(!de(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===at)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ye(t[De]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ye((t=t[De]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=tt(t))instanceof Error)throw t;t=new _r(t)}else{if(!ve(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ye(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ue(r/ot))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ot,r));if(2===e){if(!ue((n=t.byteLength-r)/ot))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ot,n));t=new _r(t,r)}else{if(!ye(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ot>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ot));t=new _r(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}function yt(r){return r.re}function pt(r){return r.im}function ht(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ge(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Je(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(yt(n),pt(n))}return e}function gt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ge(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Je(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(yt(o),pt(o))}return n}function mt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Je(n=e[i]))return null;r[o]=yt(n),r[o+1]=pt(n),o+=2}return r}D(st,"BYTES_PER_ELEMENT",ot),D(st,"name","Complex64Array"),D(st,"from",(function(r){var e,n,i,o,u,f,l,c,s,y,p,h;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ye(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(ut(r)){if(c=r.length,i){for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(e,r.get(p),p)))u[h]=Ke(y),u[h+1]=Qe(y);else{if(!(ge(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(we(r)){if(i){for(c=r.length,l=r.get&&r.set?a("default"):t("default"),p=0;p<c;p++)if(!Je(l(r,p))){s=!0;break}if(s){if(!ze(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(o=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(e,l(r,p),p);return o}for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(e,l(r,p),p)))u[h]=Ke(y),u[h+1]=Qe(y);else{if(!(ge(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(de(r)&&at&&Ye(r[De])){if(!Ye((u=r[De]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?nt(u,i,e):tt(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(st,"of",(function(){var r,e;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),He(st.prototype,"buffer",(function(){return this._buffer.buffer})),He(st.prototype,"byteLength",(function(){return this._buffer.byteLength})),He(st.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(st.prototype,"BYTES_PER_ELEMENT",st.BYTES_PER_ELEMENT),D(st.prototype,"copyWithin",(function(r,e){if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(st.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Xe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),De&&D(t,De,(function(){return e.entries()})),t})),D(st.prototype,"get",(function(r){var e;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Xe((e=this._buffer)[r*=2],e[r+1])})),He(st.prototype,"length",(function(){return this._length})),D(st.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ye(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Je(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ke(r),void(n[t+1]=Qe(r))}if(ut(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new _r(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!we(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Je(r[f])){o=!0;break}if(o){if(!ze(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new _r(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ke(u),n[t+1]=Qe(u),t+=2}}));var wt=2*vr.BYTES_PER_ELEMENT,bt=qe();function vt(r){return r instanceof Tt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function dt(r){return r===Tt||"Complex64Array"===r.name}function Et(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===wt/2}function At(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===wt}function Tt(){var r,e,t,n;if(e=arguments.length,!(this instanceof Tt))return 0===e?new Tt:1===e?new Tt(arguments[0]):2===e?new Tt(arguments[0],arguments[1]):new Tt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new vr(0);else if(1===e)if(ye(arguments[0]))t=new vr(2*arguments[0]);else if(we(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Je(t[0])){if(null===(t=mt(new vr(2*n),t))){if(!ze(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(arguments[0])}}else{if(Et(t))t=rt(t,0);else if(At(t))t=et(t,0);else if(!ze(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(t)}else if(ve(arguments[0])){if(!ue((t=arguments[0]).byteLength/wt))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",wt,t.byteLength));t=new vr(t)}else{if(!de(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===bt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ye(t[De]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ye((t=t[De]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ht(t))instanceof Error)throw t;t=new vr(t)}else{if(!ve(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ye(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ue(r/wt))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",wt,r));if(2===e){if(!ue((n=t.byteLength-r)/wt))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",wt,n));t=new vr(t,r)}else{if(!ye(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*wt>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*wt));t=new vr(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}D(Tt,"BYTES_PER_ELEMENT",wt),D(Tt,"name","Complex128Array"),D(Tt,"from",(function(r){var e,n,i,o,u,f,l,c,s,y,p,h;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ye(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(vt(r)){if(c=r.length,i){for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(e,r.get(p),p)))u[h]=yt(y),u[h+1]=pt(y);else{if(!(ge(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(we(r)){if(i){for(c=r.length,l=r.get&&r.set?a("default"):t("default"),p=0;p<c;p++)if(!Je(l(r,p))){s=!0;break}if(s){if(!ze(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(o=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(e,l(r,p),p);return o}for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(e,l(r,p),p)))u[h]=yt(y),u[h+1]=pt(y);else{if(!(ge(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(de(r)&&bt&&Ye(r[De])){if(!Ye((u=r[De]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?gt(u,i,e):ht(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(Tt,"of",(function(){var r,e;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),He(Tt.prototype,"buffer",(function(){return this._buffer.buffer})),He(Tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),He(Tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(Tt.prototype,"BYTES_PER_ELEMENT",Tt.BYTES_PER_ELEMENT),D(Tt.prototype,"copyWithin",(function(r,e){if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(Tt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new We(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),De&&D(t,De,(function(){return e.entries()})),t})),D(Tt.prototype,"get",(function(r){var e;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new We((e=this._buffer)[r*=2],e[r+1])})),He(Tt.prototype,"length",(function(){return this._length})),D(Tt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ye(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Je(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=yt(r),void(n[t+1]=pt(r))}if(vt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*wt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!we(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Je(r[f])){o=!0;break}if(o){if(!ze(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*wt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=yt(u),n[t+1]=pt(u),t+=2}}));var _t=[vr,_r,Br,Vr,Nr,Fr,Kr,Gr,zr,st,Tt],xt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],jt=xt.length;function kt(e){var n,o=function(r){var e;if(or(r))return"generic";if(ur(r))return null;for(e=0;e<jt;e++)if(r instanceof _t[e])return xt[e];return sr[cr(r)]||null}(e);return typeof(n=e).get===r&&typeof n.set===r?{accessorProtocol:!0,accessors:[a(o),f(o)]}:{accessorProtocol:!1,accessors:[t(o),i(o)]}}return function(r,e,t){var n=function(r){var e=kt(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}(r);return n.accessorProtocol?function(r,e,t){var n,i,o;for(n=r.data,i=r.accessors[0],o=n.length-1;o>=0;o--)if(e.call(t,i(n,o),o,n))return!1;return!0}(n,e,t):function(r,e,t){var n;for(n=r.length-1;n>=0;n--)if(e.call(t,r[n],n,r))return!1;return!0}(r,e,t)}}));
//# sourceMappingURL=index.js.map
