// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,f;e=this,f=function(){"use strict";return function(e){var f,n,t,r,o,u,i,s,l,d,h;if(n=[],0===(s=e.length))return n;if(l=(r=e[0]).length,1===s){for(d=0;d<l;d++)n.push(r[d]);return n}for(f=[l],d=1;d<s;d++)f.push(e[d].length),f[d]>l&&(l=f[d]);for(d=0;d<l;d++)n.push(0);for(d=l-1;d>=0;){for(t=(o=f[0]-l+d)>=0?r[o]:1,h=1;h<s;h++)if(i=(u=f[h]-l+d)>=0?e[h][u]:1,1!==t){if(1!==i&&t!==i)return null}else t=i;n[d]=t,d-=1}return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=f():"function"==typeof define&&define.amd?define(f):(e="undefined"!=typeof globalThis?globalThis:e||self).broadcastShapes=f();
//# sourceMappingURL=index.js.map