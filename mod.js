// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var e,f,n,t,u,l,o,h,i,s,p;if(f=[],0===(h=r.length))return f;if(i=(t=r[0]).length,1===h){for(s=0;s<i;s++)f.push(t[s]);return f}for(e=[i],s=1;s<h;s++)e.push(r[s].length),e[s]>i&&(i=e[s]);for(s=0;s<i;s++)f.push(0);for(s=i-1;s>=0;){for(n=(u=e[0]-i+s)>=0?t[u]:1,p=1;p<h;p++)if(o=(l=e[p]-i+s)>=0?r[p][l]:1,1!==n){if(1!==o&&n!==o)return null}else n=o;f[s]=n,s-=1}return f}export{r as default};
//# sourceMappingURL=mod.js.map
