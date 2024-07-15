"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadBalancer=exports.LoadBalancerGeneration=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var LoadBalancerGeneration;(function(LoadBalancerGeneration2){LoadBalancerGeneration2[LoadBalancerGeneration2.FIRST=0]="FIRST",LoadBalancerGeneration2[LoadBalancerGeneration2.SECOND=1]="SECOND"})(LoadBalancerGeneration||(exports.LoadBalancerGeneration=LoadBalancerGeneration={}));class LoadBalancer{static classic(loadBalancer){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancing_LoadBalancer(loadBalancer)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.classic),error}class ClassicLoadBalancer extends LoadBalancer{constructor(){super(...arguments),this.generation=LoadBalancerGeneration.FIRST,this.name=loadBalancer.loadBalancerName}}return new ClassicLoadBalancer}static application(albTargetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_IApplicationTargetGroup(albTargetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.application),error}class AlbLoadBalancer extends LoadBalancer{constructor(){super(...arguments),this.generation=LoadBalancerGeneration.SECOND,this.name=albTargetGroup.targetGroupName}}return new AlbLoadBalancer}static network(nlbTargetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkTargetGroup(nlbTargetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.network),error}class NlbLoadBalancer extends LoadBalancer{constructor(){super(...arguments),this.generation=LoadBalancerGeneration.SECOND,this.name=nlbTargetGroup.targetGroupName}}return new NlbLoadBalancer}}exports.LoadBalancer=LoadBalancer,_a=JSII_RTTI_SYMBOL_1,LoadBalancer[_a]={fqn:"aws-cdk-lib.aws_codedeploy.LoadBalancer",version:"2.149.0"};