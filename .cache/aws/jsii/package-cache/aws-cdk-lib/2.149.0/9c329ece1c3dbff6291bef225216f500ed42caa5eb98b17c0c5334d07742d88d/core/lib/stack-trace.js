"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.captureStackTrace=void 0;var debug_1=()=>{var tmp=require("./debug");return debug_1=()=>tmp,tmp};function captureStackTrace(below=captureStackTrace,limit=Number.MAX_SAFE_INTEGER){if(!(0,debug_1().debugModeEnabled)())return["stack traces disabled"];const object={},previousLimit=Error.stackTraceLimit;try{Error.stackTraceLimit=limit,Error.captureStackTrace(object,below)}finally{Error.stackTraceLimit=previousLimit}return object.stack?object.stack.split(`
`).slice(1).map(s=>s.replace(/^\s*at\s+/,"")):[]}exports.captureStackTrace=captureStackTrace;