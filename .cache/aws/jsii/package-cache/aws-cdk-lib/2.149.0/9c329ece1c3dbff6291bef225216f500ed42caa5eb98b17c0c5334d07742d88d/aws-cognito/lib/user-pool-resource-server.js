"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserPoolResourceServer=exports.ResourceServerScope=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cognito_generated_1=()=>{var tmp=require("./cognito.generated");return cognito_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class ResourceServerScope{constructor(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_ResourceServerScopeProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ResourceServerScope),error}this.scopeName=props.scopeName,this.scopeDescription=props.scopeDescription}}exports.ResourceServerScope=ResourceServerScope,_a=JSII_RTTI_SYMBOL_1,ResourceServerScope[_a]={fqn:"aws-cdk-lib.aws_cognito.ResourceServerScope",version:"2.149.0"};class UserPoolResourceServer extends core_1().Resource{static fromUserPoolResourceServerId(scope,id,userPoolResourceServerId){class Import extends core_1().Resource{constructor(){super(...arguments),this.userPoolResourceServerId=userPoolResourceServerId}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.identifier});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_UserPoolResourceServerProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,UserPoolResourceServer),error}const resource=new(cognito_generated_1()).CfnUserPoolResourceServer(this,"Resource",{identifier:this.physicalName,name:props.userPoolResourceServerName??this.physicalName,scopes:props.scopes,userPoolId:props.userPool.userPoolId});this.userPoolResourceServerId=resource.ref}}exports.UserPoolResourceServer=UserPoolResourceServer,_b=JSII_RTTI_SYMBOL_1,UserPoolResourceServer[_b]={fqn:"aws-cdk-lib.aws_cognito.UserPoolResourceServer",version:"2.149.0"};