"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sortKeyComparator=void 0;function sortKeyComparator(keyFn){return(a,b)=>{const ak=keyFn(a),bk=keyFn(b);for(let i=0;i<ak.length&&i<bk.length;i++){const av=ak[i],bv=bk[i];let diff=0;if(typeof av=="number"&&typeof bv=="number"?diff=av-bv:typeof av=="string"&&typeof bv=="string"&&(diff=av.localeCompare(bv)),diff!==0)return diff}return bk.length-ak.length}}exports.sortKeyComparator=sortKeyComparator;