"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.OpenIdConnectProvider=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp};class OpenIdConnectProvider extends iam().OpenIdConnectProvider{constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_eks_OpenIdConnectProviderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,OpenIdConnectProvider),error}const clientIds=["sts.amazonaws.com"];super(scope,id,{url:props.url,clientIds})}}exports.OpenIdConnectProvider=OpenIdConnectProvider,_a=JSII_RTTI_SYMBOL_1,OpenIdConnectProvider[_a]={fqn:"aws-cdk-lib.aws_eks.OpenIdConnectProvider",version:"2.149.0"};
