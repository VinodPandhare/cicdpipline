"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloudFormationDeployStackSetAction=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var singleton_policy_1=()=>{var tmp=require("./private/singleton-policy");return singleton_policy_1=()=>tmp,tmp},stackset_types_1=()=>{var tmp=require("./stackset-types");return stackset_types_1=()=>tmp,tmp},codepipeline=()=>{var tmp=require("../../../aws-codepipeline");return codepipeline=()=>tmp,tmp},action_1=()=>{var tmp=require("../action");return action_1=()=>tmp,tmp},common_1=()=>{var tmp=require("../common");return common_1=()=>tmp,tmp};class CloudFormationDeployStackSetAction extends action_1().Action{constructor(props){super({...props,region:props.stackSetRegion,provider:"CloudFormationStackSet",category:codepipeline().ActionCategory.DEPLOY,artifactBounds:{minInputs:1,maxInputs:3,minOutputs:0,maxOutputs:0},inputs:[...props.template._artifactsReferenced??[],...props.parameters?._artifactsReferenced??[],...props.stackInstances?._artifactsReferenced??[]]});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_actions_CloudFormationDeployStackSetActionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CloudFormationDeployStackSetAction),error}this.props=props,this.deploymentModel=props.deploymentModel??stackset_types_1().StackSetDeploymentModel.selfManaged(),(0,common_1().validatePercentage)("failureTolerancePercentage",props.failureTolerancePercentage),(0,common_1().validatePercentage)("maxAccountConcurrencyPercentage",props.maxAccountConcurrencyPercentage)}bound(scope,_stage,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_IStage(_stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_ActionBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bound),error}const singletonPolicy=singleton_policy_1().SingletonPolicy.forRole(options.role);singletonPolicy.grantCreateUpdateStackSet(this.props);const instancesResult=this.props.stackInstances?._bind(scope),permissionModelBind=this.deploymentModel?._bind(scope);for(const role of permissionModelBind?.passedRoles??[])singletonPolicy.grantPassRole(role);return(this.actionProperties.inputs||[]).length>0&&options.bucket.grantRead(singletonPolicy),{configuration:{StackSetName:this.props.stackSetName,Description:this.props.description,TemplatePath:this.props.template._render(),Parameters:this.props.parameters?._render(),Capabilities:(0,singleton_policy_1().parseCapabilities)(this.props.cfnCapabilities),FailureTolerancePercentage:this.props.failureTolerancePercentage,MaxConcurrentPercentage:this.props.maxAccountConcurrencyPercentage,...instancesResult?.stackSetConfiguration,...permissionModelBind?.stackSetConfiguration}}}}exports.CloudFormationDeployStackSetAction=CloudFormationDeployStackSetAction,_a=JSII_RTTI_SYMBOL_1,CloudFormationDeployStackSetAction[_a]={fqn:"aws-cdk-lib.aws_codepipeline_actions.CloudFormationDeployStackSetAction",version:"2.149.0"};
