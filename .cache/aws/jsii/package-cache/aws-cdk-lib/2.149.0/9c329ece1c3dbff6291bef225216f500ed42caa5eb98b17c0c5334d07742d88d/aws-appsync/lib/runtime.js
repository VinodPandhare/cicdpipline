"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FunctionRuntime=exports.FunctionRuntimeFamily=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var FunctionRuntimeFamily;(function(FunctionRuntimeFamily2){FunctionRuntimeFamily2.JS="APPSYNC_JS"})(FunctionRuntimeFamily||(exports.FunctionRuntimeFamily=FunctionRuntimeFamily={}));class FunctionRuntime{constructor(family,version){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_FunctionRuntimeFamily(family)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,FunctionRuntime),error}this.name=family,this.version=version}toProperties(){return{name:this.name,runtimeVersion:this.version}}}exports.FunctionRuntime=FunctionRuntime,_a=JSII_RTTI_SYMBOL_1,FunctionRuntime[_a]={fqn:"aws-cdk-lib.aws_appsync.FunctionRuntime",version:"2.149.0"},FunctionRuntime.JS_1_0_0=new FunctionRuntime(FunctionRuntimeFamily.JS,"1.0.0");