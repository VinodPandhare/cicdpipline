"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RequestValidator=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var apigateway_generated_1=()=>{var tmp=require("./apigateway.generated");return apigateway_generated_1=()=>tmp,tmp},restapi_1=()=>{var tmp=require("./restapi");return restapi_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class RequestValidator extends core_1().Resource{static fromRequestValidatorId(scope,id,requestValidatorId){class Import extends core_1().Resource{constructor(){super(...arguments),this.requestValidatorId=requestValidatorId}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.requestValidatorName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_RequestValidatorProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,RequestValidator),error}const validatorProps={name:this.physicalName,restApiId:props.restApi.restApiId,validateRequestBody:props.validateRequestBody,validateRequestParameters:props.validateRequestParameters},resource=new(apigateway_generated_1()).CfnRequestValidator(this,"Resource",validatorProps);this.requestValidatorId=resource.ref;const deployment=props.restApi instanceof restapi_1().RestApi?props.restApi.latestDeployment:void 0;deployment&&(deployment.node.addDependency(resource),deployment.addToLogicalId({validator:validatorProps}))}}exports.RequestValidator=RequestValidator,_a=JSII_RTTI_SYMBOL_1,RequestValidator[_a]={fqn:"aws-cdk-lib.aws_apigateway.RequestValidator",version:"2.149.0"};