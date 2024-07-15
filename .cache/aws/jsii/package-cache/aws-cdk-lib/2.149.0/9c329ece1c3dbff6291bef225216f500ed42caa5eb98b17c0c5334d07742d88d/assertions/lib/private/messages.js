"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasNoMessage=exports.hasMessage=exports.findMessage=void 0;var section_1=()=>{var tmp=require("./section");return section_1=()=>tmp,tmp};function findMessage(messages,constructPath,props={}){const section=messages,result=(0,section_1().matchSection)(filterPath(section,constructPath),props);return result.match?result.matches:{}}exports.findMessage=findMessage;function hasMessage(messages,constructPath,props){const section=messages,result=(0,section_1().matchSection)(filterPath(section,constructPath),props);if(!result.match){for(const mr of Object.values(result.closestResults))redactTraces(mr.target);return(0,section_1().formatSectionMatchFailure)(`messages at path ${constructPath}`,result,"Stack")}}exports.hasMessage=hasMessage;function hasNoMessage(messages,constructPath,props){const section=messages,result=(0,section_1().matchSection)(filterPath(section,constructPath),props);if(result.match)return[`Expected no matches, but stack has ${Object.keys(result.matches).length} messages as follows:`,(0,section_1().formatAllMatches)(result.matches)].join(`
`)}exports.hasNoMessage=hasNoMessage;function redactTraces(match,redact=!0){redact&&match.entry?.trace!==void 0&&(match.entry.trace="redacted")}function filterPath(section,path){return path==="*"?section:Object.entries(section??{}).filter(([_,v])=>v.id===path).reduce((agg,[k,v])=>({...agg,[k]:v}),{})}