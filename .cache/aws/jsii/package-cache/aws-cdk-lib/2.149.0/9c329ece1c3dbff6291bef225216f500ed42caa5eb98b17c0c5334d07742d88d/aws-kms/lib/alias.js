"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Alias=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var kms_generated_1=()=>{var tmp=require("./kms.generated");return kms_generated_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};const REQUIRED_ALIAS_PREFIX="alias/",DISALLOWED_PREFIX=REQUIRED_ALIAS_PREFIX+"aws/";class AliasBase extends core_1().Resource{get keyArn(){return core_1().Stack.of(this).formatArn({service:"kms",resource:this.aliasName})}get aliasArn(){return core_1().Stack.of(this).formatArn({service:"kms",resource:this.aliasName})}get keyId(){return this.aliasName}addAlias(alias){return this.aliasTargetKey.addAlias(alias)}addToResourcePolicy(statement,allowNoOp){return this.aliasTargetKey.addToResourcePolicy(statement,allowNoOp)}grant(grantee,...actions){return this.aliasTargetKey.grant(grantee,...actions)}grantDecrypt(grantee){return this.aliasTargetKey.grantDecrypt(grantee)}grantEncrypt(grantee){return this.aliasTargetKey.grantEncrypt(grantee)}grantEncryptDecrypt(grantee){return this.aliasTargetKey.grantEncryptDecrypt(grantee)}grantGenerateMac(grantee){return this.aliasTargetKey.grantGenerateMac(grantee)}grantVerifyMac(grantee){return this.aliasTargetKey.grantVerifyMac(grantee)}}class Alias extends AliasBase{static fromAliasAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_kms_AliasAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAliasAttributes),error}class _Alias extends AliasBase{get aliasName(){return attrs.aliasName}get aliasTargetKey(){return attrs.aliasTargetKey}}return new _Alias(scope,id)}static fromAliasName(scope,id,aliasName){class Import extends core_1().Resource{constructor(){super(...arguments),this.keyArn=core_1().Stack.of(this).formatArn({service:"kms",resource:aliasName}),this.keyId=aliasName,this.aliasName=aliasName}get aliasTargetKey(){throw new Error("Cannot access aliasTargetKey on an Alias imported by Alias.fromAliasName().")}addAlias(_alias){throw new Error("Cannot call addAlias on an Alias imported by Alias.fromAliasName().")}addToResourcePolicy(_statement,_allowNoOp){return{statementAdded:!1}}grant(grantee,..._actions){return iam().Grant.drop(grantee,"")}grantDecrypt(grantee){return iam().Grant.drop(grantee,"")}grantEncrypt(grantee){return iam().Grant.drop(grantee,"")}grantEncryptDecrypt(grantee){return iam().Grant.drop(grantee,"")}grantGenerateMac(grantee){return iam().Grant.drop(grantee,"")}grantVerifyMac(grantee){return iam().Grant.drop(grantee,"")}}return new Import(scope,id)}constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_kms_AliasProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Alias),error}let aliasName=props.aliasName;if(core_1().Token.isUnresolved(aliasName)){if(core_1().Tokenization.reverseString(aliasName).firstValue&&core_1().Tokenization.reverseString(aliasName).firstToken===void 0){const valueInToken=core_1().Tokenization.reverseString(aliasName).firstValue;if(valueInToken.startsWith(REQUIRED_ALIAS_PREFIX)||(aliasName=REQUIRED_ALIAS_PREFIX+aliasName),valueInToken.toLocaleLowerCase().startsWith(DISALLOWED_PREFIX))throw new Error(`Alias cannot start with ${DISALLOWED_PREFIX}: ${aliasName}`);if(!valueInToken.match(/^[a-zA-Z0-9:/_-]{1,256}$/))throw new Error("Alias name must be between 1 and 256 characters in a-zA-Z0-9:/_-")}}else{if(aliasName.startsWith(REQUIRED_ALIAS_PREFIX)||(aliasName=REQUIRED_ALIAS_PREFIX+aliasName),aliasName===REQUIRED_ALIAS_PREFIX)throw new Error(`Alias must include a value after "${REQUIRED_ALIAS_PREFIX}": ${aliasName}`);if(aliasName.toLocaleLowerCase().startsWith(DISALLOWED_PREFIX))throw new Error(`Alias cannot start with ${DISALLOWED_PREFIX}: ${aliasName}`);if(!aliasName.match(/^[a-zA-Z0-9:/_-]{1,256}$/))throw new Error("Alias name must be between 1 and 256 characters in a-zA-Z0-9:/_-")}super(scope,id,{physicalName:aliasName}),this.aliasTargetKey=props.targetKey;const resource=new(kms_generated_1()).CfnAlias(this,"Resource",{aliasName:this.physicalName,targetKeyId:this.aliasTargetKey.keyArn});core_1().FeatureFlags.of(this).isEnabled(cx_api_1().KMS_ALIAS_NAME_REF)?this.aliasName=this.getResourceNameAttribute(resource.ref):this.aliasName=this.getResourceNameAttribute(resource.aliasName),props.removalPolicy&&resource.applyRemovalPolicy(props.removalPolicy)}generatePhysicalName(){return REQUIRED_ALIAS_PREFIX+super.generatePhysicalName()}}exports.Alias=Alias,_a=JSII_RTTI_SYMBOL_1,Alias[_a]={fqn:"aws-cdk-lib.aws_kms.Alias",version:"2.149.0"};
