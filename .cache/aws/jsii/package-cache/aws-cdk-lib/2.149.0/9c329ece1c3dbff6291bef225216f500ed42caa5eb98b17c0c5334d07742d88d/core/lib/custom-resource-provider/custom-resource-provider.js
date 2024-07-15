"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.determineLatestNodeRuntimeName=exports.CustomResourceProvider=exports.CustomResourceProviderRuntime=void 0;const jsiiDeprecationWarnings=require("../../../.warnings.jsii.js"),JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti"),custom_resource_provider_base_1=require("./custom-resource-provider-base"),region_info_1=require("../../../region-info"),stack_1=require("../stack");var CustomResourceProviderRuntime;(function(CustomResourceProviderRuntime2){CustomResourceProviderRuntime2.NODEJS_12_X="nodejs12.x",CustomResourceProviderRuntime2.NODEJS_12="deprecated_nodejs12.x",CustomResourceProviderRuntime2.NODEJS_14_X="nodejs14.x",CustomResourceProviderRuntime2.NODEJS_16_X="nodejs16.x",CustomResourceProviderRuntime2.NODEJS_18_X="nodejs18.x",CustomResourceProviderRuntime2.NODEJS_20_X="nodejs20.x"})(CustomResourceProviderRuntime||(exports.CustomResourceProviderRuntime=CustomResourceProviderRuntime={}));class CustomResourceProvider extends custom_resource_provider_base_1.CustomResourceProviderBase{static getOrCreate(scope,uniqueid,props){try{jsiiDeprecationWarnings.aws_cdk_lib_CustomResourceProviderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getOrCreate),error}return this.getOrCreateProvider(scope,uniqueid,props).serviceToken}static getOrCreateProvider(scope,uniqueid,props){try{jsiiDeprecationWarnings.aws_cdk_lib_CustomResourceProviderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getOrCreateProvider),error}const id=`${uniqueid}CustomResourceProvider`,stack=stack_1.Stack.of(scope);return stack.node.tryFindChild(id)??new CustomResourceProvider(stack,id,props)}constructor(scope,id,props){super(scope,id,{...props,runtimeName:customResourceProviderRuntimeToString(props.runtime)});try{jsiiDeprecationWarnings.aws_cdk_lib_CustomResourceProviderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CustomResourceProvider),error}}}exports.CustomResourceProvider=CustomResourceProvider,_a=JSII_RTTI_SYMBOL_1,CustomResourceProvider[_a]={fqn:"aws-cdk-lib.CustomResourceProvider",version:"2.149.0"};function customResourceProviderRuntimeToString(x){switch(x){case CustomResourceProviderRuntime.NODEJS_12:case CustomResourceProviderRuntime.NODEJS_12_X:return"nodejs12.x";case CustomResourceProviderRuntime.NODEJS_14_X:return"nodejs14.x";case CustomResourceProviderRuntime.NODEJS_16_X:return"nodejs16.x";case CustomResourceProviderRuntime.NODEJS_18_X:return"nodejs18.x";case CustomResourceProviderRuntime.NODEJS_20_X:return"nodejs20.x"}}function determineLatestNodeRuntimeName(scope){return stack_1.Stack.of(scope).regionalFact(region_info_1.FactName.LATEST_NODE_RUNTIME,"nodejs18.x")}exports.determineLatestNodeRuntimeName=determineLatestNodeRuntimeName;
