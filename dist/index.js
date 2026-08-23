"use strict";var d=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var h=d(function(x,c){
function g(t){var e,i,u,o,s,l,a,f,n,r,v;if(f=t.length,i=[],f===0)return i;if(o=t[0],n=o.length,f===1){for(r=0;r<n;r++)i.push(o[r]);return i}for(e=[n],r=1;r<f;r++)e.push(t[r].length),e[r]>n&&(n=e[r]);for(r=0;r<n;r++)i.push(0);for(r=n-1;r>=0;){for(s=e[0]-n+r,s>=0?u=o[s]:u=1,v=1;v<f;v++){if(l=e[v]-n+r,l>=0?a=t[v][l]:a=1,u===1){u=a;continue}if(!(a===1||u===a))return null}i[r]=u,r-=1}return i}c.exports=g
});var m=h();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
