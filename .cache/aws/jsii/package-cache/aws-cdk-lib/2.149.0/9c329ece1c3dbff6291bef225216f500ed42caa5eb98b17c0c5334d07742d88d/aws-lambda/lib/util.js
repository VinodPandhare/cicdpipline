"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flatten=exports.flatMap=exports.addAlias=void 0;var alias_1=()=>{var tmp=require("./alias");return alias_1=()=>tmp,tmp};function addAlias(scope,version,aliasName,options={}){return new(alias_1()).Alias(scope,`Alias${aliasName}`,{aliasName,version,...options})}exports.addAlias=addAlias;function flatMap(xs,fn){return flatten(xs.map(fn))}exports.flatMap=flatMap;function flatten(xs){return Array.prototype.concat.apply([],xs)}exports.flatten=flatten;