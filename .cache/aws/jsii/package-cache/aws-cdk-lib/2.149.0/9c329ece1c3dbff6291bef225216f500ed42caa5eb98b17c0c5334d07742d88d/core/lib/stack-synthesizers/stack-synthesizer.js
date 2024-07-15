"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.StackSynthesizer=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},_shared_1=()=>{var tmp=require("./_shared");return _shared_1=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../../cx-api");return cxapi=()=>tmp,tmp},assets_1=()=>{var tmp=require("../assets");return assets_1=()=>tmp,tmp},cfn_fn_1=()=>{var tmp=require("../cfn-fn");return cfn_fn_1=()=>tmp,tmp},cfn_parameter_1=()=>{var tmp=require("../cfn-parameter");return cfn_parameter_1=()=>tmp,tmp},cfn_rule_1=()=>{var tmp=require("../cfn-rule");return cfn_rule_1=()=>tmp,tmp},string_specializer_1=()=>{var tmp=require("../helpers-internal/string-specializer");return string_specializer_1=()=>tmp,tmp};class StackSynthesizer{get bootstrapQualifier(){}get lookupRole(){}bind(stack){try{jsiiDeprecationWarnings().aws_cdk_lib_Stack(stack)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}if(this._boundStack!==void 0)throw new Error("A StackSynthesizer can only be used for one Stack: create a new instance to use with a different Stack");this._boundStack=stack}synthesizeStackTemplate(stack,session){try{jsiiDeprecationWarnings().print("aws-cdk-lib.StackSynthesizer#synthesizeStackTemplate","Use `synthesizeTemplate` instead"),jsiiDeprecationWarnings().aws_cdk_lib_Stack(stack),jsiiDeprecationWarnings().aws_cdk_lib_ISynthesisSession(session)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.synthesizeStackTemplate),error}stack._synthesizeTemplate(session)}synthesizeTemplate(session,lookupRoleArn){try{jsiiDeprecationWarnings().aws_cdk_lib_ISynthesisSession(session)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.synthesizeTemplate),error}return this.boundStack._synthesizeTemplate(session,lookupRoleArn),stackTemplateFileAsset(this.boundStack,session)}emitStackArtifact(stack,session,options={}){try{jsiiDeprecationWarnings().print("aws-cdk-lib.StackSynthesizer#emitStackArtifact","Use `emitArtifact` instead"),jsiiDeprecationWarnings().aws_cdk_lib_Stack(stack),jsiiDeprecationWarnings().aws_cdk_lib_ISynthesisSession(session),jsiiDeprecationWarnings().aws_cdk_lib_SynthesizeStackArtifactOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.emitStackArtifact),error}(0,_shared_1().addStackArtifactToAssembly)(session,stack,options??{},options.additionalDependencies??[])}emitArtifact(session,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_ISynthesisSession(session),jsiiDeprecationWarnings().aws_cdk_lib_SynthesizeStackArtifactOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.emitArtifact),error}(0,_shared_1().addStackArtifactToAssembly)(session,this.boundStack,options??{},options.additionalDependencies??[])}addBootstrapVersionRule(requiredVersion,bootstrapStackVersionSsmParameter){addBootstrapVersionRule(this.boundStack,requiredVersion,bootstrapStackVersionSsmParameter)}get boundStack(){if(!this._boundStack)throw new Error("The StackSynthesizer must be bound to a Stack first before boundStack() can be called");return this._boundStack}cloudFormationLocationFromFileAsset(location){try{jsiiDeprecationWarnings().aws_cdk_lib_cloud_assembly_schema_FileDestination(location)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.cloudFormationLocationFromFileAsset),error}const{region,urlSuffix}=stackLocationOrInstrinsics(this.boundStack),httpUrl=cfnify(`https://s3.${region}.${urlSuffix}/${location.bucketName}/${location.objectKey}`),s3ObjectUrlWithPlaceholders=`s3://${location.bucketName}/${location.objectKey}`;return{bucketName:cfnify(location.bucketName),objectKey:cfnify(location.objectKey),httpUrl,s3ObjectUrl:cfnify(s3ObjectUrlWithPlaceholders),s3ObjectUrlWithPlaceholders,s3Url:httpUrl}}cloudFormationLocationFromDockerImageAsset(dest){try{jsiiDeprecationWarnings().aws_cdk_lib_cloud_assembly_schema_DockerImageDestination(dest)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.cloudFormationLocationFromDockerImageAsset),error}const{account,region,urlSuffix}=stackLocationOrInstrinsics(this.boundStack);return{repositoryName:cfnify(dest.repositoryName),imageUri:cfnify(`${account}.dkr.ecr.${region}.${urlSuffix}/${dest.repositoryName}:${dest.imageTag}`),imageTag:cfnify(dest.imageTag)}}}exports.StackSynthesizer=StackSynthesizer,_a=JSII_RTTI_SYMBOL_1,StackSynthesizer[_a]={fqn:"aws-cdk-lib.StackSynthesizer",version:"2.149.0"};function stackTemplateFileAsset(stack,session){const templatePath=path().join(session.assembly.outdir,stack.templateFile);if(!fs().existsSync(templatePath))throw new Error(`Stack template ${stack.stackName} not written yet: ${templatePath}`);const template=fs().readFileSync(templatePath,{encoding:"utf-8"}),sourceHash=(0,_shared_1().contentHash)(template);return{fileName:stack.templateFile,packaging:assets_1().FileAssetPackaging.FILE,sourceHash,deployTime:!0}}function addBootstrapVersionRule(stack,requiredVersion,bootstrapStackVersionSsmParameter){if(stack.node.tryFindChild("BootstrapVersion"))return;const param=new(cfn_parameter_1()).CfnParameter(stack,"BootstrapVersion",{type:"AWS::SSM::Parameter::Value<String>",description:`Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. ${cxapi().SSMPARAM_NO_INVALIDATE}`,default:bootstrapStackVersionSsmParameter}),oldVersions=range(1,requiredVersion).map(n=>`${n}`);new(cfn_rule_1()).CfnRule(stack,"CheckBootstrapVersion",{assertions:[{assert:cfn_fn_1().Fn.conditionNot(cfn_fn_1().Fn.conditionContains(oldVersions,param.valueAsString)),assertDescription:`CDK bootstrap stack version ${requiredVersion} required. Please run 'cdk bootstrap' with a recent version of the CDK CLI.`}]})}function range(startIncl,endExcl){const ret=new Array;for(let i=startIncl;i<endExcl;i++)ret.push(i);return ret}function stackLocationOrInstrinsics(stack){return{account:(0,string_specializer_1().resolvedOr)(stack.account,"${AWS::AccountId}"),region:(0,string_specializer_1().resolvedOr)(stack.region,"${AWS::Region}"),urlSuffix:(0,string_specializer_1().resolvedOr)(stack.urlSuffix,"${AWS::URLSuffix}")}}function cfnify(s){return s.indexOf("${")>-1?cfn_fn_1().Fn.sub(s):s}