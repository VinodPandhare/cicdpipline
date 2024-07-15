"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UpdatePipelineAction=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},codebuild=()=>{var tmp=require("../../../../aws-codebuild");return codebuild=()=>tmp,tmp},cpactions=()=>{var tmp=require("../../../../aws-codepipeline-actions");return cpactions=()=>tmp,tmp},iam=()=>{var tmp=require("../../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../../core");return core_1=()=>tmp,tmp},docker_credentials_1=()=>{var tmp=require("../../docker-credentials");return docker_credentials_1=()=>tmp,tmp},construct_internals_1=()=>{var tmp=require("../../private/construct-internals");return construct_internals_1=()=>tmp,tmp},default_codebuild_image_1=()=>{var tmp=require("../../private/default-codebuild-image");return default_codebuild_image_1=()=>tmp,tmp};class UpdatePipelineAction extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);const installSuffix=props.cdkCliVersion?`@${props.cdkCliVersion}`:"",stackIdentifier=props.pipelineStackHierarchicalId??props.pipelineStackName,buildSpec=codebuild().BuildSpec.fromObject({version:"0.2",phases:{install:{commands:[`npm install -g aws-cdk${installSuffix}`,...(0,docker_credentials_1().dockerCredentialsInstallCommands)(docker_credentials_1().DockerCredentialUsage.SELF_UPDATE,props.dockerCredentials)]},build:{commands:[`cdk -a ${(0,construct_internals_1().embeddedAsmPath)(scope)} deploy ${stackIdentifier} --require-approval=never --verbose`]}}}),selfMutationProject=new(codebuild()).PipelineProject(this,"SelfMutation",{projectName:props.projectName,environment:{buildImage:default_codebuild_image_1().CDKP_DEFAULT_CODEBUILD_IMAGE,privileged:props.privileged??!1},buildSpec:props.buildSpec?codebuild().mergeBuildSpecs(props.buildSpec,buildSpec):buildSpec});selfMutationProject.addToRolePolicy(new(iam()).PolicyStatement({actions:["sts:AssumeRole"],resources:[`arn:*:iam::${core_1().Stack.of(this).account}:role/*`],conditions:{"ForAnyValue:StringEquals":{"iam:ResourceTag/aws-cdk:bootstrap-role":["image-publishing","file-publishing","deploy"]}}})),selfMutationProject.addToRolePolicy(new(iam()).PolicyStatement({actions:["cloudformation:DescribeStacks"],resources:["*"]})),selfMutationProject.addToRolePolicy(new(iam()).PolicyStatement({actions:["s3:ListBucket"],resources:["*"]})),(props.dockerCredentials??[]).forEach(reg=>reg.grantRead(selfMutationProject,docker_credentials_1().DockerCredentialUsage.SELF_UPDATE)),this.action=new(cpactions()).CodeBuildAction({actionName:"SelfMutate",input:props.cloudAssemblyInput,project:selfMutationProject,environmentVariables:props.cdkCliVersion?{CDK_CLI_VERSION:{value:props.cdkCliVersion}}:void 0})}bind(scope,stage,options){return this.action.bind(scope,stage,options)}onStateChange(name,target,options){return this.action.onStateChange(name,target,options)}get actionProperties(){return this.action.actionProperties}}exports.UpdatePipelineAction=UpdatePipelineAction,_a=JSII_RTTI_SYMBOL_1,UpdatePipelineAction[_a]={fqn:"aws-cdk-lib.pipelines.UpdatePipelineAction",version:"2.149.0"};