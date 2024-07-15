"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SendToQueue=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},resource_arn_suffix_1=()=>{var tmp=require("../resource-arn-suffix");return resource_arn_suffix_1=()=>tmp,tmp};class SendToQueue{constructor(queue,props){if(this.queue=queue,this.props=props,this.integrationPattern=props.integrationPattern||sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,![sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN].includes(this.integrationPattern))throw new Error(`Invalid Service Integration Pattern: ${this.integrationPattern} is not supported to call SQS.`);if(props.integrationPattern===sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN&&!sfn().FieldUtils.containsTaskToken(props.messageBody))throw new Error("Task Token is missing in messageBody (pass JsonPath.taskToken somewhere in messageBody)")}bind(_task){return{resourceArn:(0,resource_arn_suffix_1().getResourceArn)("sqs","sendMessage",this.integrationPattern),policyStatements:[new(iam()).PolicyStatement({actions:["sqs:SendMessage"],resources:[this.queue.queueArn]})],parameters:{QueueUrl:this.queue.queueUrl,MessageBody:this.props.messageBody.value,DelaySeconds:this.props.delay&&this.props.delay.toSeconds(),MessageDeduplicationId:this.props.messageDeduplicationId,MessageGroupId:this.props.messageGroupId}}}}exports.SendToQueue=SendToQueue,_a=JSII_RTTI_SYMBOL_1,SendToQueue[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.SendToQueue",version:"2.149.0"};