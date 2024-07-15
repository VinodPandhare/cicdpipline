"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScheduledTaskBase=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},aws_ec2_1=()=>{var tmp=require("../../../aws-ec2");return aws_ec2_1=()=>tmp,tmp},aws_ecs_1=()=>{var tmp=require("../../../aws-ecs");return aws_ecs_1=()=>tmp,tmp},aws_events_1=()=>{var tmp=require("../../../aws-events");return aws_events_1=()=>tmp,tmp},aws_events_targets_1=()=>{var tmp=require("../../../aws-events-targets");return aws_events_targets_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};class ScheduledTaskBase extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_patterns_ScheduledTaskBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ScheduledTaskBase),error}if(this.cluster=props.cluster||this.getDefaultCluster(this,props.vpc),props.desiredTaskCount!==void 0&&props.desiredTaskCount<1)throw new Error("You must specify a desiredTaskCount greater than 0");this.desiredTaskCount=props.desiredTaskCount||1,this.subnetSelection=props.subnetSelection||{subnetType:aws_ec2_1().SubnetType.PRIVATE_WITH_EGRESS},this._securityGroups=props.securityGroups,this.propagateTags=props.propagateTags,this.tags=props.tags,this.eventRule=new(aws_events_1()).Rule(this,"ScheduledEventRule",{schedule:props.schedule,ruleName:props.ruleName,enabled:props.enabled}),props.schedule._bind(scope)}addTaskDefinitionToEventTarget(taskDefinition){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_TaskDefinition(taskDefinition)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addTaskDefinitionToEventTarget),error}const eventRuleTarget=new(aws_events_targets_1()).EcsTask({cluster:this.cluster,taskDefinition,taskCount:this.desiredTaskCount,subnetSelection:this.subnetSelection,securityGroups:this._securityGroups,propagateTags:this.propagateTags,tags:this.tags});return this.addTaskAsTarget(eventRuleTarget),eventRuleTarget}addTaskAsTarget(ecsTaskTarget){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_targets_EcsTask(ecsTaskTarget)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addTaskAsTarget),error}this.eventRule.addTarget(ecsTaskTarget)}getDefaultCluster(scope,vpc){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_IVpc(vpc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getDefaultCluster),error}const DEFAULT_CLUSTER_ID=`EcsDefaultClusterMnL3mNNYN${vpc?vpc.node.id:""}`,stack=core_1().Stack.of(scope);return stack.node.tryFindChild(DEFAULT_CLUSTER_ID)||new(aws_ecs_1()).Cluster(stack,DEFAULT_CLUSTER_ID,{vpc})}createAWSLogDriver(prefix){return new(aws_ecs_1()).AwsLogDriver({streamPrefix:prefix})}}exports.ScheduledTaskBase=ScheduledTaskBase,_a=JSII_RTTI_SYMBOL_1,ScheduledTaskBase[_a]={fqn:"aws-cdk-lib.aws_ecs_patterns.ScheduledTaskBase",version:"2.149.0"};