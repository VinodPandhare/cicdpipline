"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.S3Code=exports.InlineCode=exports.AssetCode=exports.Code=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},runtime_1=()=>{var tmp=require("./runtime");return runtime_1=()=>tmp,tmp},s3_assets=()=>{var tmp=require("../../aws-s3-assets");return s3_assets=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class Code{static fromInline(code){return new InlineCode(code)}static fromAsset(assetPath,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAsset),error}return new AssetCode(assetPath,options)}static fromBucket(bucket,key,objectVersion){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromBucket),error}return new S3Code(bucket,key,objectVersion)}}exports.Code=Code,_a=JSII_RTTI_SYMBOL_1,Code[_a]={fqn:"aws-cdk-lib.aws_synthetics.Code",version:"2.149.0"};class AssetCode extends Code{constructor(assetPath,options){super(),this.assetPath=assetPath,this.options=options;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AssetCode),error}if(!fs().existsSync(this.assetPath))throw new Error(`${this.assetPath} is not a valid path`)}bind(scope,handler,family){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_synthetics_RuntimeFamily(family)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return this.asset||(this.asset=new(s3_assets()).Asset(scope,"Code",{path:this.assetPath,...this.options})),this.validateCanaryAsset(scope,handler,family),{s3Location:{bucketName:this.asset.s3BucketName,objectKey:this.asset.s3ObjectKey}}}validateCanaryAsset(scope,handler,family){if(!this.asset)throw new Error("'validateCanaryAsset' must be called after 'this.asset' is instantiated");const asmManifestDir=core_1().Stage.of(scope)?.outdir,assetPath=asmManifestDir?path().join(asmManifestDir,this.asset.assetPath):this.assetPath;if(path().extname(assetPath)!==".zip"){if(!fs().lstatSync(assetPath).isDirectory())throw new Error(`Asset must be a .zip file or a directory (${this.assetPath})`);const filename=handler.split(".")[0],nodeFilename=`${filename}.js`,pythonFilename=`${filename}.py`;if(family===runtime_1().RuntimeFamily.NODEJS&&!fs().existsSync(path().join(assetPath,"nodejs","node_modules",nodeFilename)))throw new Error(`The canary resource requires that the handler is present at "nodejs/node_modules/${nodeFilename}" but not found at ${this.assetPath} (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Nodejs.html)`);if(family===runtime_1().RuntimeFamily.PYTHON&&!fs().existsSync(path().join(assetPath,"python",pythonFilename)))throw new Error(`The canary resource requires that the handler is present at "python/${pythonFilename}" but not found at ${this.assetPath} (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_WritingCanary_Python.html)`)}}}exports.AssetCode=AssetCode,_b=JSII_RTTI_SYMBOL_1,AssetCode[_b]={fqn:"aws-cdk-lib.aws_synthetics.AssetCode",version:"2.149.0"};class InlineCode extends Code{constructor(code){if(super(),this.code=code,code.length===0)throw new Error("Canary inline code cannot be empty")}bind(_scope,handler,_family){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_synthetics_RuntimeFamily(_family)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}if(handler!=="index.handler")throw new Error(`The handler for inline code must be "index.handler" (got "${handler}")`);return{inlineCode:this.code}}}exports.InlineCode=InlineCode,_c=JSII_RTTI_SYMBOL_1,InlineCode[_c]={fqn:"aws-cdk-lib.aws_synthetics.InlineCode",version:"2.149.0"};class S3Code extends Code{constructor(bucket,key,objectVersion){super(),this.bucket=bucket,this.key=key,this.objectVersion=objectVersion;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3Code),error}}bind(_scope,_handler,_family){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_synthetics_RuntimeFamily(_family)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{s3Location:{bucketName:this.bucket.bucketName,objectKey:this.key,objectVersion:this.objectVersion}}}}exports.S3Code=S3Code,_d=JSII_RTTI_SYMBOL_1,S3Code[_d]={fqn:"aws-cdk-lib.aws_synthetics.S3Code",version:"2.149.0"};
