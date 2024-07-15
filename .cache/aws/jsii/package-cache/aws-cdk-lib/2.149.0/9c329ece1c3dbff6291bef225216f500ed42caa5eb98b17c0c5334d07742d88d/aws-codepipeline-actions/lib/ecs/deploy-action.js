"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EcsDeployAction=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var codepipeline=()=>{var tmp=require("../../../aws-codepipeline");return codepipeline=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},action_1=()=>{var tmp=require("../action");return action_1=()=>tmp,tmp},common_1=()=>{var tmp=require("../common");return common_1=()=>tmp,tmp};class EcsDeployAction extends action_1().Action{constructor(props){super({...props,category:codepipeline().ActionCategory.DEPLOY,provider:"ECS",artifactBounds:(0,common_1().deployArtifactBounds)(),inputs:[determineInputArtifact(props)],resource:props.service});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_actions_EcsDeployActionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EcsDeployAction),error}const deploymentTimeout=props.deploymentTimeout?.toMinutes({integral:!0});if(deploymentTimeout!==void 0&&(deploymentTimeout<1||deploymentTimeout>60))throw new Error(`Deployment timeout must be between 1 and 60 minutes, got: ${deploymentTimeout}`);this.props=props,this.deploymentTimeout=deploymentTimeout}bound(_scope,_stage,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_IStage(_stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_ActionBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bound),error}return options.role.addToPolicy(new(iam()).PolicyStatement({actions:["ecs:DescribeServices","ecs:DescribeTaskDefinition","ecs:DescribeTasks","ecs:ListTasks","ecs:RegisterTaskDefinition","ecs:TagResource","ecs:UpdateService"],resources:["*"]})),options.role.addToPolicy(new(iam()).PolicyStatement({actions:["iam:PassRole"],resources:["*"],conditions:{StringEqualsIfExists:{"iam:PassedToService":["ec2.amazonaws.com","ecs-tasks.amazonaws.com"]}}})),options.bucket.grantRead(options.role),{configuration:{ClusterName:this.props.service.cluster.clusterName,ServiceName:this.props.service.serviceName,FileName:this.props.imageFile?.fileName,DeploymentTimeout:this.deploymentTimeout}}}}exports.EcsDeployAction=EcsDeployAction,_a=JSII_RTTI_SYMBOL_1,EcsDeployAction[_a]={fqn:"aws-cdk-lib.aws_codepipeline_actions.EcsDeployAction",version:"2.149.0"};function determineInputArtifact(props){if(props.imageFile&&props.input)throw new Error("Exactly one of 'input' or 'imageFile' can be provided in the ECS deploy Action");if(props.imageFile)return props.imageFile.artifact;if(props.input)return props.input;throw new Error("Specifying one of 'input' or 'imageFile' is required for the ECS deploy Action")}
