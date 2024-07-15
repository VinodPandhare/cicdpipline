"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.S3EventSourceV2=exports.S3EventSource=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var notifs=()=>{var tmp=require("../../aws-s3-notifications");return notifs=()=>tmp,tmp};class S3EventSource{constructor(bucket,props){this.bucket=bucket,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_Bucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_event_sources_S3EventSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3EventSource),error}}bind(target){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(target)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const filters=this.props.filters||[];for(const event of this.props.events)this.bucket.addEventNotification(event,new(notifs()).LambdaDestination(target),...filters)}}exports.S3EventSource=S3EventSource,_a=JSII_RTTI_SYMBOL_1,S3EventSource[_a]={fqn:"aws-cdk-lib.aws_lambda_event_sources.S3EventSource",version:"2.149.0"};class S3EventSourceV2{constructor(bucket,props){this.bucket=bucket,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_event_sources_S3EventSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3EventSourceV2),error}}bind(target){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(target)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const filters=this.props.filters||[];for(const event of this.props.events)this.bucket.addEventNotification(event,new(notifs()).LambdaDestination(target),...filters)}}exports.S3EventSourceV2=S3EventSourceV2,_b=JSII_RTTI_SYMBOL_1,S3EventSourceV2[_b]={fqn:"aws-cdk-lib.aws_lambda_event_sources.S3EventSourceV2",version:"2.149.0"};