"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsagePlan=exports.Period=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var apigateway_generated_1=()=>{var tmp=require("./apigateway.generated");return apigateway_generated_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp},Period;(function(Period2){Period2.DAY="DAY",Period2.WEEK="WEEK",Period2.MONTH="MONTH"})(Period||(exports.Period=Period={}));var UsagePlanKeyType;(function(UsagePlanKeyType2){UsagePlanKeyType2.API_KEY="API_KEY"})(UsagePlanKeyType||(UsagePlanKeyType={}));class UsagePlanBase extends core_1().Resource{addApiKey(apiKey,options){let id;const prefix="UsagePlanKeyResource";core_1().FeatureFlags.of(this).isEnabled(cx_api_1().APIGATEWAY_USAGEPLANKEY_ORDERINSENSITIVE_ID)?id=`${prefix}:${core_1().Names.nodeUniqueId(apiKey.node)}`:id=this.node.tryFindChild(prefix)?`${prefix}:${core_1().Names.nodeUniqueId(apiKey.node)}`:prefix;const resource=new(apigateway_generated_1()).CfnUsagePlanKey(this,id,{keyId:apiKey.keyId,keyType:UsagePlanKeyType.API_KEY,usagePlanId:this.usagePlanId});options?.overrideLogicalId&&resource.overrideLogicalId(options?.overrideLogicalId)}}class UsagePlan extends UsagePlanBase{static fromUsagePlanId(scope,id,usagePlanId){class Import extends UsagePlanBase{constructor(){super(scope,id),this.usagePlanId=usagePlanId}}return new Import}constructor(scope,id,props={}){super(scope,id),this.apiStages=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_UsagePlanProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,UsagePlan),error}let resource;resource=new(apigateway_generated_1()).CfnUsagePlan(this,"Resource",{apiStages:core_1().Lazy.any({produce:()=>this.renderApiStages(this.apiStages)}),description:props.description,quota:this.renderQuota(props),throttle:this.renderThrottle(props.throttle),usagePlanName:props.name}),this.apiStages.push(...props.apiStages||[]),this.usagePlanId=resource.ref,props.apiKey&&this.addApiKey(props.apiKey)}addApiStage(apiStage){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_UsagePlanPerApiStage(apiStage)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addApiStage),error}this.apiStages.push(apiStage)}renderApiStages(apiStages){if(apiStages&&apiStages.length>0){const stages=[];return apiStages.forEach(apiStage=>{stages.push(this.createStage(apiStage))}),stages}}createStage(apiStage){const stage=apiStage.stage?apiStage.stage.stageName.toString():void 0,apiId=apiStage.stage?apiStage.stage.restApi.restApiId:void 0,throttle=this.renderThrottlePerMethod(apiStage.throttle);return{apiId,stage,throttle}}renderQuota(props){if(props.quota!==void 0){const limit=props.quota?props.quota.limit:void 0;return(0,util_1().validateInteger)(limit,"Throttle quota limit"),{limit:limit||void 0,offset:props.quota?props.quota.offset:void 0,period:props.quota?props.quota.period:void 0}}}renderThrottle(props){let ret;if(props!==void 0){const burstLimit=props.burstLimit;(0,util_1().validateInteger)(burstLimit,"Throttle burst limit");const rateLimit=props.rateLimit;(0,util_1().validateDouble)(rateLimit,"Throttle rate limit"),ret={burstLimit,rateLimit}}return ret}renderThrottlePerMethod(throttlePerMethod){const ret={};return throttlePerMethod&&throttlePerMethod.length>0&&throttlePerMethod.forEach(value=>{const method=value.method,methodId=`${method.resource.path}/${method.httpMethod}`;ret[methodId]=this.renderThrottle(value.throttle)}),ret}}exports.UsagePlan=UsagePlan,_a=JSII_RTTI_SYMBOL_1,UsagePlan[_a]={fqn:"aws-cdk-lib.aws_apigateway.UsagePlan",version:"2.149.0"};
