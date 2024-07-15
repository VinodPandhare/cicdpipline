"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AssetApiDefinition=exports.InlineApiDefinition=exports.S3ApiDefinition=exports.ApiDefinition=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},s3_assets=()=>{var tmp=require("../../aws-s3-assets");return s3_assets=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../cx-api");return cxapi=()=>tmp,tmp};class ApiDefinition{static fromBucket(bucket,key,objectVersion){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromBucket),error}return new S3ApiDefinition(bucket,key,objectVersion)}static fromInline(definition){return new InlineApiDefinition(definition)}static fromAsset(file,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAsset),error}return new AssetApiDefinition(file,options)}bindAfterCreate(_scope,_restApi){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IRestApi(_restApi)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bindAfterCreate),error}}}exports.ApiDefinition=ApiDefinition,_a=JSII_RTTI_SYMBOL_1,ApiDefinition[_a]={fqn:"aws-cdk-lib.aws_apigateway.ApiDefinition",version:"2.149.0"};class S3ApiDefinition extends ApiDefinition{constructor(bucket,key,objectVersion){super(),this.key=key,this.objectVersion=objectVersion;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3ApiDefinition),error}if(!bucket.bucketName)throw new Error("bucketName is undefined for the provided bucket");this.bucketName=bucket.bucketName}bind(_scope){return{s3Location:{bucket:this.bucketName,key:this.key,version:this.objectVersion}}}}exports.S3ApiDefinition=S3ApiDefinition,_b=JSII_RTTI_SYMBOL_1,S3ApiDefinition[_b]={fqn:"aws-cdk-lib.aws_apigateway.S3ApiDefinition",version:"2.149.0"};class InlineApiDefinition extends ApiDefinition{constructor(definition){if(super(),this.definition=definition,typeof definition!="object")throw new Error("definition should be of type object");if(Object.keys(definition).length===0)throw new Error("JSON definition cannot be empty")}bind(_scope){return{inlineDefinition:this.definition}}}exports.InlineApiDefinition=InlineApiDefinition,_c=JSII_RTTI_SYMBOL_1,InlineApiDefinition[_c]={fqn:"aws-cdk-lib.aws_apigateway.InlineApiDefinition",version:"2.149.0"};class AssetApiDefinition extends ApiDefinition{constructor(path,options={}){super(),this.path=path,this.options=options;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AssetApiDefinition),error}}bind(scope){if(this.asset===void 0&&(this.asset=new(s3_assets()).Asset(scope,"APIDefinition",{path:this.path,...this.options})),this.asset.isZipArchive)throw new Error(`Asset cannot be a .zip file or a directory (${this.path})`);return{s3Location:{bucket:this.asset.s3BucketName,key:this.asset.s3ObjectKey}}}bindAfterCreate(scope,restApi){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IRestApi(restApi)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bindAfterCreate),error}if(!scope.node.tryGetContext(cxapi().ASSET_RESOURCE_METADATA_ENABLED_CONTEXT))return;if(!this.asset)throw new Error("bindToResource() must be called after bind()");const child=constructs_1().Node.of(restApi).defaultChild;child.addMetadata(cxapi().ASSET_RESOURCE_METADATA_PATH_KEY,this.asset.assetPath),child.addMetadata(cxapi().ASSET_RESOURCE_METADATA_PROPERTY_KEY,"BodyS3Location")}}exports.AssetApiDefinition=AssetApiDefinition,_d=JSII_RTTI_SYMBOL_1,AssetApiDefinition[_d]={fqn:"aws-cdk-lib.aws_apigateway.AssetApiDefinition",version:"2.149.0"};