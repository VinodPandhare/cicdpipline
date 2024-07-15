"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FluentdLogDriver=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var log_driver_1=()=>{var tmp=require("./log-driver");return log_driver_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./utils");return utils_1=()=>tmp,tmp};class FluentdLogDriver extends log_driver_1().LogDriver{constructor(props={}){super(),this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_FluentdLogDriverProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,FluentdLogDriver),error}}bind(_scope,_containerDefinition){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ContainerDefinition(_containerDefinition)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{logDriver:"fluentd",options:(0,utils_1().stringifyOptions)({"fluentd-address":this.props.address,"fluentd-async-connect":this.props.asyncConnect,"fluentd-buffer-limit":this.props.bufferLimit,"fluentd-retry-wait":this.props.retryWait&&this.props.retryWait.toSeconds(),"fluentd-max-retries":this.props.maxRetries,"fluentd-sub-second-precision":this.props.subSecondPrecision,...(0,utils_1().renderCommonLogDriverOptions)(this.props)})}}}exports.FluentdLogDriver=FluentdLogDriver,_a=JSII_RTTI_SYMBOL_1,FluentdLogDriver[_a]={fqn:"aws-cdk-lib.aws_ecs.FluentdLogDriver",version:"2.149.0"};