"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hashValues=void 0;var crypto=()=>{var tmp=require("crypto");return crypto=()=>tmp,tmp};function hashValues(...ids){const sha256=crypto().createHash("sha256");return ids.forEach(val=>sha256.update(val)),sha256.digest("hex").slice(0,12)}exports.hashValues=hashValues;
