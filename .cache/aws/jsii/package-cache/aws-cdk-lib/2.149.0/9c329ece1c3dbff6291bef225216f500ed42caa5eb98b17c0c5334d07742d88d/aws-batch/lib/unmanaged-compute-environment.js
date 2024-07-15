"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnmanagedComputeEnvironment=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var batch_generated_1=()=>{var tmp=require("./batch.generated");return batch_generated_1=()=>tmp,tmp},compute_environment_base_1=()=>{var tmp=require("./compute-environment-base");return compute_environment_base_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class UnmanagedComputeEnvironment extends compute_environment_base_1().ComputeEnvironmentBase{static fromUnmanagedComputeEnvironmentArn(scope,id,unmanagedComputeEnvironmentArn){const computeEnvironmentName=core_1().Stack.of(scope).splitArn(unmanagedComputeEnvironmentArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).resourceName;class Import extends compute_environment_base_1().ComputeEnvironmentBase{constructor(){super(...arguments),this.computeEnvironmentArn=unmanagedComputeEnvironmentArn,this.computeEnvironmentName=computeEnvironmentName,this.enabled=!0,this.containerDefinition={}}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_batch_UnmanagedComputeEnvironmentProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,UnmanagedComputeEnvironment),error}this.unmanagedvCPUs=props?.unmanagedvCpus;const resource=new(batch_generated_1()).CfnComputeEnvironment(this,"Resource",{type:"unmanaged",state:this.enabled?"ENABLED":"DISABLED",computeEnvironmentName:props?.computeEnvironmentName,unmanagedvCpus:this.unmanagedvCPUs,serviceRole:props?.serviceRole?.roleArn??new(aws_iam_1()).Role(this,"BatchServiceRole",{managedPolicies:[aws_iam_1().ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSBatchServiceRole")],assumedBy:new(aws_iam_1()).ServicePrincipal("batch.amazonaws.com")}).roleArn});this.computeEnvironmentName=this.getResourceNameAttribute(resource.ref),this.computeEnvironmentArn=this.getResourceArnAttribute(resource.attrComputeEnvironmentArn,{service:"batch",resource:"compute-environment",resourceName:this.physicalName})}}exports.UnmanagedComputeEnvironment=UnmanagedComputeEnvironment,_a=JSII_RTTI_SYMBOL_1,UnmanagedComputeEnvironment[_a]={fqn:"aws-cdk-lib.aws_batch.UnmanagedComputeEnvironment",version:"2.149.0"};