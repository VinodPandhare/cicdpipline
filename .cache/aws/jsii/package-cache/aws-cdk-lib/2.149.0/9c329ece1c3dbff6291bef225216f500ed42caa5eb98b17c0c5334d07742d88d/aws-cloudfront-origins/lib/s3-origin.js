"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.S3Origin=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var http_origin_1=()=>{var tmp=require("./http-origin");return http_origin_1=()=>tmp,tmp},cloudfront=()=>{var tmp=require("../../aws-cloudfront");return cloudfront=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp};class S3Origin{constructor(bucket,props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_origins_S3OriginProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3Origin),error}this.origin=bucket.isWebsite?new(http_origin_1()).HttpOrigin(bucket.bucketWebsiteDomainName,{protocolPolicy:cloudfront().OriginProtocolPolicy.HTTP_ONLY,...props}):new S3BucketOrigin(bucket,props)}bind(scope,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_OriginBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return this.origin.bind(scope,options)}}exports.S3Origin=S3Origin,_a=JSII_RTTI_SYMBOL_1,S3Origin[_a]={fqn:"aws-cdk-lib.aws_cloudfront_origins.S3Origin",version:"2.149.0"};class S3BucketOrigin extends cloudfront().OriginBase{constructor(bucket,{originAccessIdentity,...props}){super(bucket.bucketRegionalDomainName,props),this.bucket=bucket,originAccessIdentity&&(this.originAccessIdentity=originAccessIdentity)}bind(scope,options){if(!this.originAccessIdentity){const bucketStack=cdk().Stack.of(this.bucket),bucketInDifferentStack=bucketStack!==cdk().Stack.of(scope),oaiScope=bucketInDifferentStack?bucketStack:scope,oaiId=bucketInDifferentStack?`${cdk().Names.uniqueId(scope)}S3Origin`:"S3Origin";this.originAccessIdentity=new(cloudfront()).OriginAccessIdentity(oaiScope,oaiId,{comment:`Identity for ${options.originId}`})}return this.bucket.addToResourcePolicy(new(iam()).PolicyStatement({resources:[this.bucket.arnForObjects("*")],actions:["s3:GetObject"],principals:[this.originAccessIdentity.grantPrincipal]})),super.bind(scope,options)}renderS3OriginConfig(){return{originAccessIdentity:`origin-access-identity/cloudfront/${this.originAccessIdentity.originAccessIdentityId}`}}}
