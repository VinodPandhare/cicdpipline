"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PhysicalName=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var physical_name_generator_1=()=>{var tmp=require("./private/physical-name-generator");return physical_name_generator_1=()=>tmp,tmp},token_1=()=>{var tmp=require("./token");return token_1=()=>tmp,tmp};class PhysicalName{constructor(){}}exports.PhysicalName=PhysicalName,_a=JSII_RTTI_SYMBOL_1,PhysicalName[_a]={fqn:"aws-cdk-lib.PhysicalName",version:"2.149.0"},PhysicalName.GENERATE_IF_NEEDED=token_1().Token.asString(new(physical_name_generator_1()).GeneratedWhenNeededMarker);