"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HttpStage=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var index_1=()=>{var tmp=require(".././index");return index_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},base_1=()=>{var tmp=require("../common/base");return base_1=()=>tmp,tmp};const DEFAULT_STAGE_NAME="$default";class HttpStageBase extends base_1().StageBase{metricClientError(props){return this.metric("4xx",{statistic:"Sum",...props})}metricServerError(props){return this.metric("5xx",{statistic:"Sum",...props})}metricDataProcessed(props){return this.metric("DataProcessed",{statistic:"Sum",...props})}metricCount(props){return this.metric("Count",{statistic:"SampleCount",...props})}metricIntegrationLatency(props){return this.metric("IntegrationLatency",props)}metricLatency(props){return this.metric("Latency",props)}}class HttpStage extends HttpStageBase{static fromHttpStageAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_HttpStageAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromHttpStageAttributes),error}class Import extends HttpStageBase{constructor(){super(...arguments),this.baseApi=attrs.api,this.stageName=attrs.stageName,this.api=attrs.api}get url(){throw new Error("url is not available for imported stages.")}get domainUrl(){throw new Error("domainUrl is not available for imported stages.")}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.stageName?props.stageName:DEFAULT_STAGE_NAME});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_HttpStageProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,HttpStage),error}new(index_1()).CfnStage(this,"Resource",{apiId:props.httpApi.apiId,stageName:this.physicalName,autoDeploy:props.autoDeploy,defaultRouteSettings:props.throttle?{throttlingBurstLimit:props.throttle?.burstLimit,throttlingRateLimit:props.throttle?.rateLimit}:void 0}),this.stageName=this.physicalName,this.baseApi=props.httpApi,this.api=props.httpApi,props.domainMapping&&this._addDomainMapping(props.domainMapping)}get url(){const s=core_1().Stack.of(this),urlPath=this.stageName===DEFAULT_STAGE_NAME?"":this.stageName;return`https://${this.api.apiId}.execute-api.${s.region}.${s.urlSuffix}/${urlPath}`}get domainUrl(){if(!this._apiMapping)throw new Error("domainUrl is not available when no API mapping is associated with the Stage");return`https://${this._apiMapping.domainName.name}/${this._apiMapping.mappingKey??""}`}}exports.HttpStage=HttpStage,_a=JSII_RTTI_SYMBOL_1,HttpStage[_a]={fqn:"aws-cdk-lib.aws_apigatewayv2.HttpStage",version:"2.149.0"};