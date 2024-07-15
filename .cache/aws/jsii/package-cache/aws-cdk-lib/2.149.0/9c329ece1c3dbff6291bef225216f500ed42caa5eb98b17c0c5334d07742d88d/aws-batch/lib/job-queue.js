"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.JobQueue=exports.JobStateTimeLimitActionsState=exports.JobStateTimeLimitActionsReason=exports.JobStateTimeLimitActionsAction=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var batch_generated_1=()=>{var tmp=require("./batch.generated");return batch_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},JobStateTimeLimitActionsAction;(function(JobStateTimeLimitActionsAction2){JobStateTimeLimitActionsAction2.CANCEL="CANCEL"})(JobStateTimeLimitActionsAction||(exports.JobStateTimeLimitActionsAction=JobStateTimeLimitActionsAction={}));var JobStateTimeLimitActionsReason;(function(JobStateTimeLimitActionsReason2){JobStateTimeLimitActionsReason2.INSUFFICIENT_INSTANCE_CAPACITY="CAPACITY:INSUFFICIENT_INSTANCE_CAPACITY",JobStateTimeLimitActionsReason2.COMPUTE_ENVIRONMENT_MAX_RESOURCE="MISCONFIGURATION:COMPUTE_ENVIRONMENT_MAX_RESOURCE",JobStateTimeLimitActionsReason2.JOB_RESOURCE_REQUIREMENT="MISCONFIGURATION:JOB_RESOURCE_REQUIREMENT"})(JobStateTimeLimitActionsReason||(exports.JobStateTimeLimitActionsReason=JobStateTimeLimitActionsReason={}));var JobStateTimeLimitActionsState;(function(JobStateTimeLimitActionsState2){JobStateTimeLimitActionsState2.RUNNABLE="RUNNABLE"})(JobStateTimeLimitActionsState||(exports.JobStateTimeLimitActionsState=JobStateTimeLimitActionsState={}));class JobQueue extends core_1().Resource{static fromJobQueueArn(scope,id,jobQueueArn){const stack=core_1().Stack.of(scope);class Import extends core_1().Resource{constructor(){super(...arguments),this.computeEnvironments=[],this.priority=1,this.jobQueueArn=jobQueueArn,this.jobQueueName=stack.splitArn(jobQueueArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).resourceName}addComputeEnvironment(_computeEnvironment,_order){throw new Error(`cannot add ComputeEnvironments to imported JobQueue '${id}'`)}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props?.jobQueueName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_batch_JobQueueProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,JobQueue),error}this.computeEnvironments=props?.computeEnvironments??[],this.priority=props?.priority??1,this.enabled=props?.enabled,this.schedulingPolicy=props?.schedulingPolicy;const resource=new(batch_generated_1()).CfnJobQueue(this,"Resource",{computeEnvironmentOrder:core_1().Lazy.any({produce:()=>this.computeEnvironments.map(ce=>({computeEnvironment:ce.computeEnvironment.computeEnvironmentArn,order:ce.order}))}),priority:this.priority,jobQueueName:props?.jobQueueName,state:this.enabled??!0?"ENABLED":"DISABLED",schedulingPolicyArn:this.schedulingPolicy?.schedulingPolicyArn,jobStateTimeLimitActions:this.renderJobStateTimeLimitActions(props?.jobStateTimeLimitActions)});this.jobQueueArn=this.getResourceArnAttribute(resource.attrJobQueueArn,{service:"batch",resource:"job-queue",resourceName:this.physicalName}),this.jobQueueName=core_1().Stack.of(this).splitArn(this.jobQueueArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).resourceName,this.node.addValidation({validate:()=>validateOrderedComputeEnvironments(this.computeEnvironments)})}addComputeEnvironment(computeEnvironment,order){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_batch_IComputeEnvironment(computeEnvironment)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addComputeEnvironment),error}this.computeEnvironments.push({computeEnvironment,order})}renderJobStateTimeLimitActions(jobStateTimeLimitActions){if(!jobStateTimeLimitActions||jobStateTimeLimitActions.length===0)return;return jobStateTimeLimitActions.map((action,index)=>renderJobStateTimeLimitAction(action,index));function renderJobStateTimeLimitAction(jobStateTimeLimitAction,index){const maxTimeSeconds=jobStateTimeLimitAction.maxTime.toSeconds();if(maxTimeSeconds<600||maxTimeSeconds>86400)throw new Error(`maxTime must be between 600 and 86400 seconds, got ${maxTimeSeconds} seconds at jobStateTimeLimitActions[${index}]`);return{action:jobStateTimeLimitAction.action??JobStateTimeLimitActionsAction.CANCEL,maxTimeSeconds,reason:jobStateTimeLimitAction.reason,state:jobStateTimeLimitAction.state??JobStateTimeLimitActionsState.RUNNABLE}}}}exports.JobQueue=JobQueue,_a=JSII_RTTI_SYMBOL_1,JobQueue[_a]={fqn:"aws-cdk-lib.aws_batch.JobQueue",version:"2.149.0"};function validateOrderedComputeEnvironments(computeEnvironments){const seenOrders=[];for(const ce of computeEnvironments){if(seenOrders.includes(ce.order))return["assigns the same order to different ComputeEnvironments"];seenOrders.push(ce.order)}return seenOrders.length===0?["This JobQueue does not link any ComputeEnvironments"]:[]}
