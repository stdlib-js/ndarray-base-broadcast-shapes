"use strict";var d=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var h=d(function(x,c){
function g(t){var e,n,u,o,s,l,a,f,i,r,v;if(f=t.length,n=[],f===0)return n;if(o=t[0],i=o.length,f===1){for(r=0;r<i;r++)n.push(o[r]);return n}for(e=[i],r=1;r<f;r++)e.push(t[r].length),e[r]>i&&(i=e[r]);for(r=0;r<i;r++)n.push(0);for(r=i-1;r>=0;){for(s=e[0]-i+r,s>=0?u=o[s]:u=1,v=1;v<f;v++){if(l=e[v]-i+r,l>=0?a=t[v][l]:a=1,u===1){u=a;continue}if(!(a===1||u===a))return null}n[r]=u,r-=1}return n}c.exports=g
});var m=h();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
