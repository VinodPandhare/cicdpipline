"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LambdaDeploymentGroup=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},application_1=()=>{var tmp=require("./application");return application_1=()=>tmp,tmp},deployment_config_1=()=>{var tmp=require("./deployment-config");return deployment_config_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../../cx-api");return cx_api_1=()=>tmp,tmp},codedeploy_generated_1=()=>{var tmp=require("../codedeploy.generated");return codedeploy_generated_1=()=>tmp,tmp},base_deployment_group_1=()=>{var tmp=require("../private/base-deployment-group");return base_deployment_group_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("../private/utils");return utils_1=()=>tmp,tmp};class LambdaDeploymentGroup extends base_deployment_group_1().DeploymentGroupBase{static fromLambdaDeploymentGroupAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codedeploy_LambdaDeploymentGroupAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromLambdaDeploymentGroupAttributes),error}return new ImportedLambdaDeploymentGroup(scope,id,attrs)}constructor(scope,id,props){super(scope,id,{deploymentGroupName:props.deploymentGroupName,role:props.role,roleConstructId:"ServiceRole"});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codedeploy_LambdaDeploymentGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LambdaDeploymentGroup),error}this.role=this._role,this.application=props.application||new(application_1()).LambdaApplication(this,"Application"),this.alarms=props.alarms||[],this.role.addManagedPolicy(iam().ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSCodeDeployRoleForLambdaLimited")),this.deploymentConfig=this._bindDeploymentConfig(props.deploymentConfig||deployment_config_1().LambdaDeploymentConfig.CANARY_10PERCENT_5MINUTES);const removeAlarmsFromDeploymentGroup=cdk().FeatureFlags.of(this).isEnabled(cx_api_1().CODEDEPLOY_REMOVE_ALARMS_FROM_DEPLOYMENT_GROUP),resource=new(codedeploy_generated_1()).CfnDeploymentGroup(this,"Resource",{applicationName:this.application.applicationName,serviceRoleArn:this.role.roleArn,deploymentGroupName:this.physicalName,deploymentConfigName:this.deploymentConfig.deploymentConfigName,deploymentStyle:{deploymentType:"BLUE_GREEN",deploymentOption:"WITH_TRAFFIC_CONTROL"},alarmConfiguration:cdk().Lazy.any({produce:()=>(0,utils_1().renderAlarmConfiguration)({alarms:this.alarms,ignorePollAlarmFailure:props.ignorePollAlarmsFailure,removeAlarms:removeAlarmsFromDeploymentGroup,ignoreAlarmConfiguration:props.ignoreAlarmConfiguration})}),autoRollbackConfiguration:cdk().Lazy.any({produce:()=>(0,utils_1().renderAutoRollbackConfiguration)(this.alarms,props.autoRollback)})});this._setNameAndArn(resource,this.application),props.preHook&&this.addPreHook(props.preHook),props.postHook&&this.addPostHook(props.postHook),props.alias.node.defaultChild.cfnOptions.updatePolicy={codeDeployLambdaAliasUpdate:{applicationName:this.application.applicationName,deploymentGroupName:resource.ref,beforeAllowTrafficHook:cdk().Lazy.string({produce:()=>this.preHook&&this.preHook.functionName}),afterAllowTrafficHook:cdk().Lazy.string({produce:()=>this.postHook&&this.postHook.functionName})}},this.deploymentConfig instanceof constructs_1().Construct&&this.node.addDependency(this.deploymentConfig)}addAlarm(alarm){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_IAlarm(alarm)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addAlarm),error}this.alarms.push(alarm)}addPreHook(preHook){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(preHook)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addPreHook),error}if(this.preHook!==void 0)throw new Error("A pre-hook function is already defined for this deployment group");this.preHook=preHook,this.grantPutLifecycleEventHookExecutionStatus(this.preHook),this.preHook.grantInvoke(this.role)}addPostHook(postHook){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(postHook)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addPostHook),error}if(this.postHook!==void 0)throw new Error("A post-hook function is already defined for this deployment group");this.postHook=postHook,this.grantPutLifecycleEventHookExecutionStatus(this.postHook),this.postHook.grantInvoke(this.role)}grantPutLifecycleEventHookExecutionStatus(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantPutLifecycleEventHookExecutionStatus),error}return iam().Grant.addToPrincipal({grantee,resourceArns:[this.deploymentGroupArn],actions:["codedeploy:PutLifecycleEventHookExecutionStatus"]})}}exports.LambdaDeploymentGroup=LambdaDeploymentGroup,_a=JSII_RTTI_SYMBOL_1,LambdaDeploymentGroup[_a]={fqn:"aws-cdk-lib.aws_codedeploy.LambdaDeploymentGroup",version:"2.149.0"};class ImportedLambdaDeploymentGroup extends base_deployment_group_1().ImportedDeploymentGroupBase{constructor(scope,id,props){super(scope,id,{application:props.application,deploymentGroupName:props.deploymentGroupName}),this.application=props.application,this.deploymentConfig=this._bindDeploymentConfig(props.deploymentConfig||deployment_config_1().LambdaDeploymentConfig.CANARY_10PERCENT_5MINUTES)}}
