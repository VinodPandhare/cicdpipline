"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SnsDestination=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class SnsDestination{constructor(topic){this.topic=topic;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_ITopic(topic)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SnsDestination),error}}bind(_scope,fn,_options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(fn),jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_DestinationOptions(_options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return this.topic.grantPublish(fn),{destination:this.topic.topicArn}}}exports.SnsDestination=SnsDestination,_a=JSII_RTTI_SYMBOL_1,SnsDestination[_a]={fqn:"aws-cdk-lib.aws_lambda_destinations.SnsDestination",version:"2.149.0"};
