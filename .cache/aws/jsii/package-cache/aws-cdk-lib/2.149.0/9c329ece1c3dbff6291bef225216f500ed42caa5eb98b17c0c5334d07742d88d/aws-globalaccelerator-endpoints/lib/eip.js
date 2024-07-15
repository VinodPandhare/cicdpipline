"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnEipEndpoint=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var _util_1=()=>{var tmp=require("./_util");return _util_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class CfnEipEndpoint{constructor(eip,options={}){this.eip=eip,this.options=options;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_CfnEIP(eip),jsiiDeprecationWarnings().aws_cdk_lib_aws_globalaccelerator_endpoints_CfnEipEndpointProps(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnEipEndpoint),error}(0,_util_1().validateWeight)(options.weight),this.region=core_1().Stack.of(eip).region}renderEndpointConfiguration(){return{endpointId:this.eip.attrAllocationId,weight:this.options.weight}}}exports.CfnEipEndpoint=CfnEipEndpoint,_a=JSII_RTTI_SYMBOL_1,CfnEipEndpoint[_a]={fqn:"aws-cdk-lib.aws_globalaccelerator_endpoints.CfnEipEndpoint",version:"2.149.0"};