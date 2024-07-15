"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Resolver=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},appsync_generated_1=()=>{var tmp=require("./appsync.generated");return appsync_generated_1=()=>tmp,tmp},caching_key_1=()=>{var tmp=require("./caching-key");return caching_key_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class Resolver extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_ResolverProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Resolver),error}const pipelineConfig=props.pipelineConfig&&props.pipelineConfig.length?{functions:props.pipelineConfig.map(func=>func.functionId)}:void 0;if(props.runtime&&!props.code)throw new Error("Code is required when specifying a runtime");if(props.code&&(props.requestMappingTemplate||props.responseMappingTemplate))throw new Error("Mapping templates cannot be used alongside code");if(pipelineConfig&&props.dataSource)throw new Error(`Pipeline Resolver cannot have data source. Received: ${props.dataSource.name}`);if(props.cachingConfig?.ttl&&(props.cachingConfig.ttl.toSeconds()<1||props.cachingConfig.ttl.toSeconds()>3600))throw new Error(`Caching config TTL must be between 1 and 3600 seconds. Received: ${props.cachingConfig.ttl.toSeconds()}`);if(props.cachingConfig?.cachingKeys&&props.cachingConfig.cachingKeys.find(cachingKey=>!core_1().Token.isUnresolved(cachingKey)&&!caching_key_1().BASE_CACHING_KEYS.find(baseCachingKey=>cachingKey.startsWith(baseCachingKey))))throw new Error(`Caching config keys must begin with $context.arguments, $context.source or $context.identity. Received: ${props.cachingConfig.cachingKeys}`);const code=props.code?.bind(this);this.resolver=new(appsync_generated_1()).CfnResolver(this,"Resource",{apiId:props.api.apiId,typeName:props.typeName,fieldName:props.fieldName,dataSourceName:props.dataSource?props.dataSource.name:void 0,kind:pipelineConfig?"PIPELINE":"UNIT",runtime:props.runtime?.toProperties(),codeS3Location:code?.s3Location,code:code?.inlineCode,pipelineConfig,requestMappingTemplate:props.requestMappingTemplate?props.requestMappingTemplate.renderTemplate():void 0,responseMappingTemplate:props.responseMappingTemplate?props.responseMappingTemplate.renderTemplate():void 0,cachingConfig:this.createCachingConfig(props.cachingConfig),maxBatchSize:props.maxBatchSize}),props.api.addSchemaDependency(this.resolver),props.dataSource&&this.resolver.addDependency(props.dataSource.ds),this.arn=this.resolver.attrResolverArn}createCachingConfig(config){return config?{cachingKeys:config.cachingKeys,ttl:config.ttl?.toSeconds()}:void 0}}exports.Resolver=Resolver,_a=JSII_RTTI_SYMBOL_1,Resolver[_a]={fqn:"aws-cdk-lib.aws_appsync.Resolver",version:"2.149.0"};
