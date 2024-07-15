"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ApiMapping=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var index_1=()=>{var tmp=require(".././index");return index_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};class ApiMapping extends core_1().Resource{static fromApiMappingAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_ApiMappingAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromApiMappingAttributes),error}class Import extends core_1().Resource{constructor(){super(...arguments),this.apiMappingId=attrs.apiMappingId}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_ApiMappingProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ApiMapping),error}let stage=props.stage??props.api.defaultStage;if(!stage)throw new Error("stage property must be specified");if(props.apiMappingKey==="")throw new Error("empty string for api mapping key not allowed");const apiMappingProps={apiId:props.api.apiId,domainName:props.domainName.name,stage:stage.stageName,apiMappingKey:props.apiMappingKey},resource=new(index_1()).CfnApiMapping(this,"Resource",apiMappingProps);this.node.addDependency(stage),this.apiMappingId=resource.ref,this.mappingKey=props.apiMappingKey,this.domainName=props.domainName}}exports.ApiMapping=ApiMapping,_a=JSII_RTTI_SYMBOL_1,ApiMapping[_a]={fqn:"aws-cdk-lib.aws_apigatewayv2.ApiMapping",version:"2.149.0"};