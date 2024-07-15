"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RunGlueJobTask=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},resource_arn_suffix_1=()=>{var tmp=require("../resource-arn-suffix");return resource_arn_suffix_1=()=>tmp,tmp};class RunGlueJobTask{constructor(glueJobName,props={}){if(this.glueJobName=glueJobName,this.props=props,this.integrationPattern=props.integrationPattern||sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,![sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,sfn().ServiceIntegrationPattern.SYNC].includes(this.integrationPattern))throw new Error(`Invalid Service Integration Pattern: ${this.integrationPattern} is not supported to call Glue.`)}bind(task){const notificationProperty=this.props.notifyDelayAfter?{NotifyDelayAfter:this.props.notifyDelayAfter.toMinutes()}:null;let iamActions;return this.integrationPattern===sfn().ServiceIntegrationPattern.FIRE_AND_FORGET?iamActions=["glue:StartJobRun"]:this.integrationPattern===sfn().ServiceIntegrationPattern.SYNC&&(iamActions=["glue:StartJobRun","glue:GetJobRun","glue:GetJobRuns","glue:BatchStopJobRun"]),{resourceArn:(0,resource_arn_suffix_1().getResourceArn)("glue","startJobRun",this.integrationPattern),policyStatements:[new(iam()).PolicyStatement({resources:[core_1().Stack.of(task).formatArn({service:"glue",resource:"job",resourceName:this.glueJobName})],actions:iamActions})],metricPrefixSingular:"GlueJob",metricPrefixPlural:"GlueJobs",metricDimensions:{GlueJobName:this.glueJobName},parameters:{JobName:this.glueJobName,Arguments:this.props.arguments,Timeout:this.props.timeout?.toMinutes(),SecurityConfiguration:this.props.securityConfiguration,NotificationProperty:notificationProperty}}}}exports.RunGlueJobTask=RunGlueJobTask,_a=JSII_RTTI_SYMBOL_1,RunGlueJobTask[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.RunGlueJobTask",version:"2.149.0"};
