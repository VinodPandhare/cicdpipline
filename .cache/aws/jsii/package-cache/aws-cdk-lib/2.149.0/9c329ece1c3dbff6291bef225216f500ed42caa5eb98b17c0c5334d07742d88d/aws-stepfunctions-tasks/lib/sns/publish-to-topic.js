"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PublishToTopic=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},resource_arn_suffix_1=()=>{var tmp=require("../resource-arn-suffix");return resource_arn_suffix_1=()=>tmp,tmp};class PublishToTopic{constructor(topic,props){if(this.topic=topic,this.props=props,this.integrationPattern=props.integrationPattern||sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,![sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN].includes(this.integrationPattern))throw new Error(`Invalid Service Integration Pattern: ${this.integrationPattern} is not supported to call SNS.`);if(this.integrationPattern===sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN&&!sfn().FieldUtils.containsTaskToken(props.message))throw new Error("Task Token is missing in message (pass JsonPath.taskToken somewhere in message)")}bind(_task){return{resourceArn:(0,resource_arn_suffix_1().getResourceArn)("sns","publish",this.integrationPattern),policyStatements:[new(iam()).PolicyStatement({actions:["sns:Publish"],resources:[this.topic.topicArn]})],parameters:{TopicArn:this.topic.topicArn,Message:this.props.message.value,MessageStructure:this.props.messagePerSubscriptionType?"json":void 0,Subject:this.props.subject}}}}exports.PublishToTopic=PublishToTopic,_a=JSII_RTTI_SYMBOL_1,PublishToTopic[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.PublishToTopic",version:"2.149.0"};