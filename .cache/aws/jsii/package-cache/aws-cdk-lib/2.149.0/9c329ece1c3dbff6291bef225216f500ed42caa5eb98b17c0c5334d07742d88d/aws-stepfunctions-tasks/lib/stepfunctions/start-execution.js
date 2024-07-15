"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.StepFunctionsStartExecution=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},task_utils_1=()=>{var tmp=require("../private/task-utils");return task_utils_1=()=>tmp,tmp};class StepFunctionsStartExecution extends sfn().TaskStateBase{constructor(scope,id,props){super(scope,id,props),this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_tasks_StepFunctionsStartExecutionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,StepFunctionsStartExecution),error}if(this.integrationPattern=props.integrationPattern||sfn().IntegrationPattern.REQUEST_RESPONSE,(0,task_utils_1().validatePatternSupported)(this.integrationPattern,StepFunctionsStartExecution.SUPPORTED_INTEGRATION_PATTERNS),this.integrationPattern===sfn().IntegrationPattern.WAIT_FOR_TASK_TOKEN&&!sfn().FieldUtils.containsTaskToken(props.input))throw new Error("Task Token is required in `input` for callback. Use JsonPath.taskToken to set the token.");if(this.props.associateWithParent&&props.input&&props.input.type!==sfn().InputType.OBJECT)throw new Error("Could not enable `associateWithParent` because `input` is taken directly from a JSON path. Use `sfn.TaskInput.fromObject` instead.");this.taskPolicies=this.createScopedAccessPolicy()}_renderTask(){const suffix=this.integrationPattern===sfn().IntegrationPattern.RUN_JOB?":2":"";let input;if(this.props.associateWithParent){const associateWithParentEntry={AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID:sfn().JsonPath.stringAt("$$.Execution.Id")};input=this.props.input?{...this.props.input.value,...associateWithParentEntry}:associateWithParentEntry}else input=this.props.input?this.props.input.value:sfn().TaskInput.fromJsonPathAt("$").value;return{Resource:`${(0,task_utils_1().integrationResourceArn)("states","startExecution",this.integrationPattern)}${suffix}`,Parameters:sfn().FieldUtils.renderObject({Input:input,StateMachineArn:this.props.stateMachine.stateMachineArn,Name:this.props.name})}}createScopedAccessPolicy(){const stack=core_1().Stack.of(this),policyStatements=[new(iam()).PolicyStatement({actions:["states:StartExecution"],resources:[this.props.stateMachine.stateMachineArn]})];return this.integrationPattern===sfn().IntegrationPattern.RUN_JOB&&(policyStatements.push(new(iam()).PolicyStatement({actions:["states:DescribeExecution","states:StopExecution"],resources:[stack.formatArn({service:"states",resource:"execution",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME,resourceName:`${stack.splitArn(this.props.stateMachine.stateMachineArn,core_1().ArnFormat.COLON_RESOURCE_NAME).resourceName}*`})]})),policyStatements.push(new(iam()).PolicyStatement({actions:["events:PutTargets","events:PutRule","events:DescribeRule"],resources:[stack.formatArn({service:"events",resource:"rule",resourceName:"StepFunctionsGetEventsForStepFunctionsExecutionRule"})]}))),policyStatements}}exports.StepFunctionsStartExecution=StepFunctionsStartExecution,_a=JSII_RTTI_SYMBOL_1,StepFunctionsStartExecution[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.StepFunctionsStartExecution",version:"2.149.0"},StepFunctionsStartExecution.SUPPORTED_INTEGRATION_PATTERNS=[sfn().IntegrationPattern.REQUEST_RESPONSE,sfn().IntegrationPattern.RUN_JOB,sfn().IntegrationPattern.WAIT_FOR_TASK_TOKEN];