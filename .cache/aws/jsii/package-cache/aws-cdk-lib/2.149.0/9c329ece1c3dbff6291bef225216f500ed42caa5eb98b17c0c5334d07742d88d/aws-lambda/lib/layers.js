"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LayerVersion=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var lambda_generated_1=()=>{var tmp=require("./lambda.generated");return lambda_generated_1=()=>tmp,tmp},runtime_1=()=>{var tmp=require("./runtime");return runtime_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class LayerVersionBase extends core_1().Resource{addPermission(id,permission){if(permission.organizationId!=null&&permission.accountId!=="*")throw new Error(`OrganizationId can only be specified if AwsAccountId is '*', but it is ${permission.accountId}`);new(lambda_generated_1()).CfnLayerVersionPermission(this,id,{action:"lambda:GetLayerVersion",layerVersionArn:this.layerVersionArn,principal:permission.accountId,organizationId:permission.organizationId})}}class LayerVersion extends LayerVersionBase{static fromLayerVersionArn(scope,id,layerVersionArn){return LayerVersion.fromLayerVersionAttributes(scope,id,{layerVersionArn,compatibleRuntimes:runtime_1().Runtime.ALL})}static fromLayerVersionAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_LayerVersionAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromLayerVersionAttributes),error}if(attrs.compatibleRuntimes&&attrs.compatibleRuntimes.length===0)throw new Error("Attempted to import a Lambda layer that supports no runtime!");class Import extends LayerVersionBase{constructor(){super(...arguments),this.layerVersionArn=attrs.layerVersionArn,this.compatibleRuntimes=attrs.compatibleRuntimes}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.layerVersionName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_LayerVersionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LayerVersion),error}if(props.compatibleRuntimes&&props.compatibleRuntimes.length===0)throw new Error("Attempted to define a Lambda layer that supports no runtime!");const code=props.code.bind(this);if(code.inlineCode)throw new Error("Inline code is not supported for AWS Lambda layers");if(!code.s3Location)throw new Error("Code must define an S3 location");const resource=new(lambda_generated_1()).CfnLayerVersion(this,"Resource",{compatibleRuntimes:props.compatibleRuntimes&&props.compatibleRuntimes.map(r=>r.name),compatibleArchitectures:props.compatibleArchitectures?.map(a=>a.name),content:{s3Bucket:code.s3Location.bucketName,s3Key:code.s3Location.objectKey,s3ObjectVersion:code.s3Location.objectVersion},description:props.description,layerName:this.physicalName,licenseInfo:props.license});props.removalPolicy&&resource.applyRemovalPolicy(props.removalPolicy),props.code.bindToResource(resource,{resourceProperty:"Content"}),this.layerVersionArn=resource.ref,this.compatibleRuntimes=props.compatibleRuntimes}}exports.LayerVersion=LayerVersion,_a=JSII_RTTI_SYMBOL_1,LayerVersion[_a]={fqn:"aws-cdk-lib.aws_lambda.LayerVersion",version:"2.149.0"};
