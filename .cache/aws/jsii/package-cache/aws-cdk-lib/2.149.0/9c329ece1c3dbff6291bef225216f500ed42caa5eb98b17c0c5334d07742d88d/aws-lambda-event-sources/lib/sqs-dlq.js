"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SqsDlq=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class SqsDlq{constructor(queue){this.queue=queue;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sqs_IQueue(queue)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SqsDlq),error}}bind(_target,targetHandler){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IEventSourceMapping(_target),jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(targetHandler)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return this.queue.grantSendMessages(targetHandler),{destination:this.queue.queueArn}}}exports.SqsDlq=SqsDlq,_a=JSII_RTTI_SYMBOL_1,SqsDlq[_a]={fqn:"aws-cdk-lib.aws_lambda_event_sources.SqsDlq",version:"2.149.0"};