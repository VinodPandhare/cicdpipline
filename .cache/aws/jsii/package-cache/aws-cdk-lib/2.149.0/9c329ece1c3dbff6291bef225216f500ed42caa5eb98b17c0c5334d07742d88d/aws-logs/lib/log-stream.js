"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LogStream=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var logs_generated_1=()=>{var tmp=require("./logs.generated");return logs_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class LogStream extends core_1().Resource{static fromLogStreamName(scope,id,logStreamName){class Import extends core_1().Resource{constructor(){super(...arguments),this.logStreamName=logStreamName}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.logStreamName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_logs_LogStreamProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LogStream),error}const resource=new(logs_generated_1()).CfnLogStream(this,"Resource",{logGroupName:props.logGroup.logGroupName,logStreamName:this.physicalName});resource.applyRemovalPolicy(props.removalPolicy),this.logStreamName=this.getResourceNameAttribute(resource.ref)}}exports.LogStream=LogStream,_a=JSII_RTTI_SYMBOL_1,LogStream[_a]={fqn:"aws-cdk-lib.aws_logs.LogStream",version:"2.149.0"};