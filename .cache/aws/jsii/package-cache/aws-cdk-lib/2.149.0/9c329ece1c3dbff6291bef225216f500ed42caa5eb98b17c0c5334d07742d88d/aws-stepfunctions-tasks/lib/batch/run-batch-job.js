"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RunBatchJob=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},resource_arn_suffix_1=()=>{var tmp=require("../resource-arn-suffix");return resource_arn_suffix_1=()=>tmp,tmp};class RunBatchJob{constructor(props){if(this.props=props,this.integrationPattern=props.integrationPattern||sfn().ServiceIntegrationPattern.SYNC,![sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,sfn().ServiceIntegrationPattern.SYNC].includes(this.integrationPattern))throw new Error(`Invalid Service Integration Pattern: ${this.integrationPattern} is not supported to call RunBatchJob.`);if((0,core_1().withResolved)(props.arraySize,arraySize=>{if(arraySize!==void 0&&(arraySize<2||arraySize>1e4))throw new Error(`arraySize must be between 2 and 10,000. Received ${arraySize}.`)}),props.dependsOn&&props.dependsOn.length>20)throw new Error(`dependencies must be 20 or less. Received ${props.dependsOn.length}.`);(0,core_1().withResolved)(props.attempts,attempts=>{if(attempts!==void 0&&(attempts<1||attempts>10))throw new Error(`attempts must be between 1 and 10. Received ${attempts}.`)}),props.timeout!==void 0&&(0,core_1().withResolved)(props.timeout.toSeconds(),timeout=>{if(timeout<60)throw new Error(`timeout must be greater than 60 seconds. Received ${timeout} seconds.`)}),props.containerOverrides?.environment&&Object.keys(props.containerOverrides.environment).forEach(key=>{if(key.match(/^AWS_BATCH/))throw new Error(`Invalid environment variable name: ${key}. Environment variable names starting with 'AWS_BATCH' are reserved.`)})}bind(_task){return{resourceArn:(0,resource_arn_suffix_1().getResourceArn)("batch","submitJob",this.integrationPattern),policyStatements:this.configurePolicyStatements(_task),parameters:{JobDefinition:this.props.jobDefinitionArn,JobName:this.props.jobName,JobQueue:this.props.jobQueueArn,Parameters:this.props.payload,ArrayProperties:this.props.arraySize!==void 0?{Size:this.props.arraySize}:void 0,ContainerOverrides:this.props.containerOverrides?this.configureContainerOverrides(this.props.containerOverrides):void 0,DependsOn:this.props.dependsOn?this.props.dependsOn.map(jobDependency=>({JobId:jobDependency.jobId,Type:jobDependency.type})):void 0,RetryStrategy:this.props.attempts!==void 0?{Attempts:this.props.attempts}:void 0,Timeout:this.props.timeout?{AttemptDurationSeconds:this.props.timeout.toSeconds()}:void 0}}}configurePolicyStatements(task){return[new(iam()).PolicyStatement({resources:[core_1().Stack.of(task).formatArn({service:"batch",resource:"job-definition",resourceName:"*"}),this.props.jobQueueArn],actions:["batch:SubmitJob"]}),new(iam()).PolicyStatement({resources:[core_1().Stack.of(task).formatArn({service:"events",resource:"rule/StepFunctionsGetEventsForBatchJobsRule"})],actions:["events:PutTargets","events:PutRule","events:DescribeRule"]})]}configureContainerOverrides(containerOverrides){let environment;containerOverrides.environment&&(environment=Object.entries(containerOverrides.environment).map(([key,value])=>({Name:key,Value:value})));let resources;return containerOverrides.gpuCount&&(resources=[{Type:"GPU",Value:`${containerOverrides.gpuCount}`}]),{Command:containerOverrides.command,Environment:environment,InstanceType:containerOverrides.instanceType?.toString(),Memory:containerOverrides.memory,ResourceRequirements:resources,Vcpus:containerOverrides.vcpus}}}exports.RunBatchJob=RunBatchJob,_a=JSII_RTTI_SYMBOL_1,RunBatchJob[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.RunBatchJob",version:"2.149.0"};
