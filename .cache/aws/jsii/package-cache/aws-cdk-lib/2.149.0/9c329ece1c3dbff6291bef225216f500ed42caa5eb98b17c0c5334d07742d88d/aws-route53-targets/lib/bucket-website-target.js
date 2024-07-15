"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.BucketWebsiteTarget=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},region_info_1=()=>{var tmp=require("../../region-info");return region_info_1=()=>tmp,tmp};class BucketWebsiteTarget{constructor(bucket){this.bucket=bucket;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BucketWebsiteTarget),error}}bind(_record,_zone){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_IRecordSet(_record),jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_IHostedZone(_zone)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const{region}=core_1().Stack.of(this.bucket.stack);if(core_1().Token.isUnresolved(region))throw new Error(["Cannot use an S3 record alias in region-agnostic stacks.","You must specify a specific region when you define the stack","(see https://docs.aws.amazon.com/cdk/latest/guide/environments.html)"].join(" "));const{s3StaticWebsiteHostedZoneId:hostedZoneId,s3StaticWebsiteEndpoint:dnsName}=region_info_1().RegionInfo.get(region);if(!hostedZoneId||!dnsName)throw new Error(`Bucket website target is not supported for the "${region}" region`);return{hostedZoneId,dnsName}}}exports.BucketWebsiteTarget=BucketWebsiteTarget,_a=JSII_RTTI_SYMBOL_1,BucketWebsiteTarget[_a]={fqn:"aws-cdk-lib.aws_route53_targets.BucketWebsiteTarget",version:"2.149.0"};