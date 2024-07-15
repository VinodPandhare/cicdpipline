"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasMapping=exports.findMappings=void 0;var section_1=()=>{var tmp=require("./section");return section_1=()=>tmp,tmp};function findMappings(template,logicalId,props={}){const section=template.Mappings??{},result=(0,section_1().matchSection)((0,section_1().filterLogicalId)(section,logicalId),props);return result.match?result.matches:{}}exports.findMappings=findMappings;function hasMapping(template,logicalId,props){const section=template.Mappings??{},result=(0,section_1().matchSection)((0,section_1().filterLogicalId)(section,logicalId),props);if(!result.match)return(0,section_1().formatSectionMatchFailure)(`mappings with logicalId ${logicalId}`,result)}exports.hasMapping=hasMapping;