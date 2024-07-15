"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Cache=exports.LocalCacheMode=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},LocalCacheMode;(function(LocalCacheMode2){LocalCacheMode2.SOURCE="LOCAL_SOURCE_CACHE",LocalCacheMode2.DOCKER_LAYER="LOCAL_DOCKER_LAYER_CACHE",LocalCacheMode2.CUSTOM="LOCAL_CUSTOM_CACHE"})(LocalCacheMode||(exports.LocalCacheMode=LocalCacheMode={}));class Cache{static none(){return{_toCloudFormation(){return{type:"NO_CACHE"}},_bind(){}}}static local(...modes){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codebuild_LocalCacheMode(modes)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.local),error}return{_toCloudFormation:()=>({type:"LOCAL",modes}),_bind:()=>{}}}static bucket(bucket,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_codebuild_BucketCacheOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bucket),error}return{_toCloudFormation:()=>({type:"S3",location:core_1().Fn.join("/",[bucket.bucketName,options&&options.prefix||core_1().Aws.NO_VALUE])}),_bind:project=>{bucket.grantReadWrite(project)}}}}exports.Cache=Cache,_a=JSII_RTTI_SYMBOL_1,Cache[_a]={fqn:"aws-cdk-lib.aws_codebuild.Cache",version:"2.149.0"};
