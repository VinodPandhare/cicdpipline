"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.GenericLogDriver=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var log_driver_1=()=>{var tmp=require("./log-driver");return log_driver_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./utils");return utils_1=()=>tmp,tmp};class GenericLogDriver extends log_driver_1().LogDriver{constructor(props){super();try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_GenericLogDriverProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,GenericLogDriver),error}this.logDriver=props.logDriver,this.options=props.options||{},this.secretOptions=props.secretOptions}bind(_scope,_containerDefinition){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ContainerDefinition(_containerDefinition)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{logDriver:this.logDriver,options:(0,utils_1().removeEmpty)(this.options),secretOptions:this.secretOptions&&(0,utils_1().renderLogDriverSecretOptions)(this.secretOptions,_containerDefinition.taskDefinition)}}}exports.GenericLogDriver=GenericLogDriver,_a=JSII_RTTI_SYMBOL_1,GenericLogDriver[_a]={fqn:"aws-cdk-lib.aws_ecs.GenericLogDriver",version:"2.149.0"};
