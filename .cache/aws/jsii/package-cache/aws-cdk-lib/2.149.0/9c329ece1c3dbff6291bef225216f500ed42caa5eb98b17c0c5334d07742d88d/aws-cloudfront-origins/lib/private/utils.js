"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateSecondsInRangeOrUndefined=void 0;function validateSecondsInRangeOrUndefined(name,min,max,duration){if(duration===void 0)return;const value=duration.toSeconds();if(!Number.isInteger(value)||value<min||value>max)throw new Error(`${name}: Must be an int between ${min} and ${max} seconds (inclusive); received ${value}.`)}exports.validateSecondsInRangeOrUndefined=validateSecondsInRangeOrUndefined;
