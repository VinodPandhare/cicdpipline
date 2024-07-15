"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.BatchJob=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class BatchJob{constructor(jobQueueArn,jobQueueScope,jobDefinitionArn,jobDefinitionScope,props={}){this.jobQueueArn=jobQueueArn,this.jobQueueScope=jobQueueScope,this.jobDefinitionArn=jobDefinitionArn,this.jobDefinitionScope=jobDefinitionScope,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_targets_BatchJobProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BatchJob),error}}bind(rule,_id){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_IRule(rule)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}this.validateJobName(this.props.jobName);const jobName=this.props.jobName??core_1().Names.uniqueResourceName(rule,{maxLength:128}),batchParameters={jobDefinition:this.jobDefinitionArn,jobName,arrayProperties:this.props.size?{size:this.props.size}:void 0,retryStrategy:this.props.attempts?{attempts:this.props.attempts}:void 0};this.props.deadLetterQueue&&(0,util_1().addToDeadLetterQueueResourcePolicy)(rule,this.props.deadLetterQueue);const role=(0,util_1().singletonEventRole)(this.jobDefinitionScope);return role.addToPrincipalPolicy(new(iam()).PolicyStatement({actions:["batch:SubmitJob"],resources:[this.jobDefinitionArn,this.jobQueueArn]})),{...(0,util_1().bindBaseTargetConfig)(this.props),arn:this.jobQueueArn,role,input:this.props.event,targetResource:this.jobQueueScope,batchParameters}}validateJobName(name){if(!core_1().Token.isUnresolved(name)&&name!==void 0&&(name.length<1||name.length>128))throw new Error(`Invalid jobName value ${name}, must have length between 1 and 128, got: ${name.length}`)}}exports.BatchJob=BatchJob,_a=JSII_RTTI_SYMBOL_1,BatchJob[_a]={fqn:"aws-cdk-lib.aws_events_targets.BatchJob",version:"2.149.0"};
