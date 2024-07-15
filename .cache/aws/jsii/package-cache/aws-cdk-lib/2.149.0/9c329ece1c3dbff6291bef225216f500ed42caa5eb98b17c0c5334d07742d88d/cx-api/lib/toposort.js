"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.topologicalSort=void 0;function topologicalSort(xs,keyFn,depFn){const remaining=new Map;for(const element of xs){const key=keyFn(element);remaining.set(key,{key,element,dependencies:depFn(element)})}const ret=new Array;for(;remaining.size>0;){const selectable=Array.from(remaining.values()).filter(e=>e.dependencies.every(d=>!remaining.has(d)));selectable.sort((a,b)=>a.key<b.key?-1:b.key<a.key?1:0);for(const selected of selectable)ret.push(selected.element),remaining.delete(selected.key);if(selectable.length===0)throw new Error(`Could not determine ordering between: ${Array.from(remaining.keys()).join(", ")}`)}return ret}exports.topologicalSort=topologicalSort;