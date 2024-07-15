"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EmrSetClusterTerminationProtection=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},task_utils_1=()=>{var tmp=require("../private/task-utils");return task_utils_1=()=>tmp,tmp};class EmrSetClusterTerminationProtection extends sfn().TaskStateBase{constructor(scope,id,props){super(scope,id,props),this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_tasks_EmrSetClusterTerminationProtectionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EmrSetClusterTerminationProtection),error}this.taskPolicies=[new(iam()).PolicyStatement({actions:["elasticmapreduce:SetTerminationProtection"],resources:[core_1().Stack.of(this).formatArn({service:"elasticmapreduce",resource:"cluster",resourceName:"*"})]})]}_renderTask(){return{Resource:(0,task_utils_1().integrationResourceArn)("elasticmapreduce","setClusterTerminationProtection",sfn().IntegrationPattern.REQUEST_RESPONSE),Parameters:sfn().FieldUtils.renderObject({ClusterId:this.props.clusterId,TerminationProtected:this.props.terminationProtected})}}}exports.EmrSetClusterTerminationProtection=EmrSetClusterTerminationProtection,_a=JSII_RTTI_SYMBOL_1,EmrSetClusterTerminationProtection[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.EmrSetClusterTerminationProtection",version:"2.149.0"};
