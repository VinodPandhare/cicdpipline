"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FunctionHook=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var common_1=()=>{var tmp=require("./common");return common_1=()=>tmp,tmp},topic_hook_1=()=>{var tmp=require("./topic-hook");return topic_hook_1=()=>tmp,tmp},sns=()=>{var tmp=require("../../aws-sns");return sns=()=>tmp,tmp},subs=()=>{var tmp=require("../../aws-sns-subscriptions");return subs=()=>tmp,tmp};class FunctionHook{constructor(fn,encryptionKey){this.fn=fn,this.encryptionKey=encryptionKey;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(fn),jsiiDeprecationWarnings().aws_cdk_lib_aws_kms_IKey(encryptionKey)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,FunctionHook),error}}bind(_scope,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_BindHookTargetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const topic=new(sns()).Topic(_scope,"Topic",{masterKey:this.encryptionKey}),role=(0,common_1().createRole)(_scope,options.role);return this.encryptionKey?.grant(role,"kms:Decrypt","kms:GenerateDataKey"),topic.addSubscription(new(subs()).LambdaSubscription(this.fn)),new(topic_hook_1()).TopicHook(topic).bind(_scope,{lifecycleHook:options.lifecycleHook,role})}}exports.FunctionHook=FunctionHook,_a=JSII_RTTI_SYMBOL_1,FunctionHook[_a]={fqn:"aws-cdk-lib.aws_autoscaling_hooktargets.FunctionHook",version:"2.149.0"};