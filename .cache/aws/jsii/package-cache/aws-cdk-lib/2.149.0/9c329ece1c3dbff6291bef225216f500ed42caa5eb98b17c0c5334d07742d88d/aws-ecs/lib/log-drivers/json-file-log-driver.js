"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.JsonFileLogDriver=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var log_driver_1=()=>{var tmp=require("./log-driver");return log_driver_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./utils");return utils_1=()=>tmp,tmp};class JsonFileLogDriver extends log_driver_1().LogDriver{constructor(props={}){super(),this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_JsonFileLogDriverProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,JsonFileLogDriver),error}if(props.maxFile&&props.maxFile<0)throw new Error("`maxFile` must be a positive integer.")}bind(_scope,_containerDefinition){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ContainerDefinition(_containerDefinition)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{logDriver:"json-file",options:(0,utils_1().stringifyOptions)({"max-size":this.props.maxSize,"max-file":this.props.maxFile,compress:this.props.compress,labels:(0,utils_1().joinWithCommas)(this.props.labels),env:(0,utils_1().joinWithCommas)(this.props.env),"env-regex":this.props.envRegex})}}}exports.JsonFileLogDriver=JsonFileLogDriver,_a=JSII_RTTI_SYMBOL_1,JsonFileLogDriver[_a]={fqn:"aws-cdk-lib.aws_ecs.JsonFileLogDriver",version:"2.149.0"};