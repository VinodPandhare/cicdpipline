"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Cache=void 0;class Cache{constructor(){this.cache=new Map}clear(){this.cache.clear()}obtain(cacheKey,calcFn){let value=this.cache.get(cacheKey);return value||(value=calcFn(),this.cache.set(cacheKey,value),value)}}exports.Cache=Cache;