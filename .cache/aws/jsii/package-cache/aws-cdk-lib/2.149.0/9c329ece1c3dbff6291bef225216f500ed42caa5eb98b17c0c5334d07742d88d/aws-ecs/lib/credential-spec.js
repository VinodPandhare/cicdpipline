"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DomainlessCredentialSpec=exports.DomainJoinedCredentialSpec=exports.CredentialSpec=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class CredentialSpec{static arnForS3Object(bucket,key){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.arnForS3Object),error}if(!key)throw new Error("key is undefined");return bucket.arnForObjects(key)}static arnForSsmParameter(parameter){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ssm_IParameter(parameter)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.arnForSsmParameter),error}return parameter.parameterArn}constructor(prefixId,fileLocation){this.prefixId=prefixId,this.fileLocation=fileLocation}bind(){return{typePrefix:this.prefixId,location:this.fileLocation}}}exports.CredentialSpec=CredentialSpec,_a=JSII_RTTI_SYMBOL_1,CredentialSpec[_a]={fqn:"aws-cdk-lib.aws_ecs.CredentialSpec",version:"2.149.0"};class DomainJoinedCredentialSpec extends CredentialSpec{static fromS3Bucket(bucket,key){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromS3Bucket),error}return new DomainJoinedCredentialSpec(CredentialSpec.arnForS3Object(bucket,key))}static fromSsmParameter(parameter){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ssm_IParameter(parameter)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromSsmParameter),error}return new DomainJoinedCredentialSpec(CredentialSpec.arnForSsmParameter(parameter))}constructor(fileLocation){super("credentialspec",fileLocation)}}exports.DomainJoinedCredentialSpec=DomainJoinedCredentialSpec,_b=JSII_RTTI_SYMBOL_1,DomainJoinedCredentialSpec[_b]={fqn:"aws-cdk-lib.aws_ecs.DomainJoinedCredentialSpec",version:"2.149.0"};class DomainlessCredentialSpec extends CredentialSpec{static fromS3Bucket(bucket,key){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromS3Bucket),error}return new DomainlessCredentialSpec(CredentialSpec.arnForS3Object(bucket,key))}static fromSsmParameter(parameter){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ssm_IParameter(parameter)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromSsmParameter),error}return new DomainlessCredentialSpec(CredentialSpec.arnForSsmParameter(parameter))}constructor(fileLocation){super("credentialspecdomainless",fileLocation)}}exports.DomainlessCredentialSpec=DomainlessCredentialSpec,_c=JSII_RTTI_SYMBOL_1,DomainlessCredentialSpec[_c]={fqn:"aws-cdk-lib.aws_ecs.DomainlessCredentialSpec",version:"2.149.0"};
