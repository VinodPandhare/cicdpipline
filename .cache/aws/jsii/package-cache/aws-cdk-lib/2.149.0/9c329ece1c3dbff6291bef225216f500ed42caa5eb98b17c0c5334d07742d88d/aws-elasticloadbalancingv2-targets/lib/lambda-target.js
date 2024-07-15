"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LambdaTarget=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var elbv2=()=>{var tmp=require("../../aws-elasticloadbalancingv2");return elbv2=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp};class LambdaTarget{constructor(fn){this.fn=fn;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(fn)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LambdaTarget),error}}attachToApplicationTargetGroup(targetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_IApplicationTargetGroup(targetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToApplicationTargetGroup),error}return this.fn.grantInvoke(new(iam()).ServicePrincipal("elasticloadbalancing.amazonaws.com")).applyBefore(targetGroup),this.attach(targetGroup)}attachToNetworkTargetGroup(targetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkTargetGroup(targetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToNetworkTargetGroup),error}return this.fn.grantInvoke(new(iam()).ServicePrincipal("elasticloadbalancing.amazonaws.com")).applyBefore(targetGroup),this.attach(targetGroup)}attach(_targetGroup){return{targetType:elbv2().TargetType.LAMBDA,targetJson:{id:this.fn.functionArn}}}}exports.LambdaTarget=LambdaTarget,_a=JSII_RTTI_SYMBOL_1,LambdaTarget[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2_targets.LambdaTarget",version:"2.149.0"};