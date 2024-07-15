"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RateLimitedApiKey=exports.ApiKey=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var apigateway_generated_1=()=>{var tmp=require("./apigateway.generated");return apigateway_generated_1=()=>tmp,tmp},usage_plan_1=()=>{var tmp=require("./usage-plan");return usage_plan_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class ApiKeyBase extends core_1().Resource{grantRead(grantee){return iam().Grant.addToPrincipal({grantee,actions:readPermissions,resourceArns:[this.keyArn]})}grantWrite(grantee){return iam().Grant.addToPrincipal({grantee,actions:writePermissions,resourceArns:[this.keyArn]})}grantReadWrite(grantee){return iam().Grant.addToPrincipal({grantee,actions:[...readPermissions,...writePermissions],resourceArns:[this.keyArn]})}}class ApiKey extends ApiKeyBase{static fromApiKeyId(scope,id,apiKeyId){class Import extends ApiKeyBase{constructor(){super(...arguments),this.keyId=apiKeyId,this.keyArn=core_1().Stack.of(this).formatArn({service:"apigateway",account:"",resource:"/apikeys",arnFormat:core_1().ArnFormat.SLASH_RESOURCE_NAME,resourceName:apiKeyId})}}return new Import(scope,id)}constructor(scope,id,props={}){super(scope,id,{physicalName:props.apiKeyName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_ApiKeyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ApiKey),error}const resource=new(apigateway_generated_1()).CfnApiKey(this,"Resource",{customerId:props.customerId,description:props.description,enabled:props.enabled??!0,generateDistinctId:props.generateDistinctId,name:this.physicalName,stageKeys:this.renderStageKeys(props.resources,props.stages),value:props.value});this.keyId=resource.ref,this.keyArn=core_1().Stack.of(this).formatArn({service:"apigateway",account:"",resource:"/apikeys",arnFormat:core_1().ArnFormat.SLASH_RESOURCE_NAME,resourceName:this.keyId})}renderStageKeys(resources,stages){if(!(!resources&&!stages)){if(resources&&stages)throw new Error('Only one of "resources" or "stages" should be provided');return resources?resources.map(resource=>{const restApi=resource;if(!restApi.deploymentStage)throw new Error(`Cannot add an ApiKey to a RestApi that does not contain a "deploymentStage".
Either set the RestApi.deploymentStage or create an ApiKey from a Stage`);const restApiId=restApi.restApiId,stageName=restApi.deploymentStage.stageName.toString();return{restApiId,stageName}}):stages?stages.map(stage=>({restApiId:stage.restApi.restApiId,stageName:stage.stageName})):void 0}}}exports.ApiKey=ApiKey,_a=JSII_RTTI_SYMBOL_1,ApiKey[_a]={fqn:"aws-cdk-lib.aws_apigateway.ApiKey",version:"2.149.0"};class RateLimitedApiKey extends ApiKeyBase{constructor(scope,id,props={}){super(scope,id,{physicalName:props.apiKeyName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_RateLimitedApiKeyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,RateLimitedApiKey),error}const resource=new ApiKey(this,"Resource",props);(props.apiStages||props.quota||props.throttle)&&new(usage_plan_1()).UsagePlan(this,"UsagePlanResource",{apiStages:props.apiStages,quota:props.quota,throttle:props.throttle}).addApiKey(resource),this.keyId=resource.keyId,this.keyArn=resource.keyArn}}exports.RateLimitedApiKey=RateLimitedApiKey,_b=JSII_RTTI_SYMBOL_1,RateLimitedApiKey[_b]={fqn:"aws-cdk-lib.aws_apigateway.RateLimitedApiKey",version:"2.149.0"};const readPermissions=["apigateway:GET"],writePermissions=["apigateway:POST","apigateway:PUT","apigateway:PATCH","apigateway:DELETE"];
