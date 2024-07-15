"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.StartExecution=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var resource_arn_suffix_1=()=>{var tmp=require("./resource-arn-suffix");return resource_arn_suffix_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../aws-stepfunctions");return sfn=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class StartExecution{constructor(stateMachine,props={}){if(this.stateMachine=stateMachine,this.props=props,this.integrationPattern=props.integrationPattern||sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,![sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,sfn().ServiceIntegrationPattern.SYNC,sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN].includes(this.integrationPattern))throw new Error(`Invalid Service Integration Pattern: ${this.integrationPattern} is not supported to call Step Functions.`);if(this.integrationPattern===sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN&&!sfn().FieldUtils.containsTaskToken(props.input))throw new Error("Task Token is missing in input (pass JsonPath.taskToken somewhere in input)")}bind(task){return{resourceArn:(0,resource_arn_suffix_1().getResourceArn)("states","startExecution",this.integrationPattern),policyStatements:this.createScopedAccessPolicy(task),parameters:{Input:this.props.input,StateMachineArn:this.stateMachine.stateMachineArn,Name:this.props.name}}}createScopedAccessPolicy(task){const stack=core_1().Stack.of(task),policyStatements=[new(iam()).PolicyStatement({actions:["states:StartExecution"],resources:[this.stateMachine.stateMachineArn]})];return this.integrationPattern===sfn().ServiceIntegrationPattern.SYNC&&(policyStatements.push(new(iam()).PolicyStatement({actions:["states:DescribeExecution","states:StopExecution"],resources:[stack.formatArn({service:"states",resource:"execution",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME,resourceName:`${stack.splitArn(this.stateMachine.stateMachineArn,core_1().ArnFormat.COLON_RESOURCE_NAME).resourceName}*`})]})),policyStatements.push(new(iam()).PolicyStatement({actions:["events:PutTargets","events:PutRule","events:DescribeRule"],resources:[stack.formatArn({service:"events",resource:"rule",resourceName:"StepFunctionsGetEventsForStepFunctionsExecutionRule"})]}))),policyStatements}}exports.StartExecution=StartExecution,_a=JSII_RTTI_SYMBOL_1,StartExecution[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.StartExecution",version:"2.149.0"};