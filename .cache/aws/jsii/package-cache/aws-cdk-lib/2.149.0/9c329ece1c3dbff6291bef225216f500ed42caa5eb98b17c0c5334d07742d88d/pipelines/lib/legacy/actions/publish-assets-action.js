"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PublishAssetsAction=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},codebuild=()=>{var tmp=require("../../../../aws-codebuild");return codebuild=()=>tmp,tmp},codepipeline_actions=()=>{var tmp=require("../../../../aws-codepipeline-actions");return codepipeline_actions=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../../core");return core_1=()=>tmp,tmp},asset_type_1=()=>{var tmp=require("../../blueprint/asset-type");return asset_type_1=()=>tmp,tmp},default_codebuild_image_1=()=>{var tmp=require("../../private/default-codebuild-image");return default_codebuild_image_1=()=>tmp,tmp},fs_1=()=>{var tmp=require("../../private/fs");return fs_1=()=>tmp,tmp};class PublishAssetsAction extends constructs_1().Construct{constructor(scope,id,props){super(scope,id),this.props=props,this.commands=new Array;const installCommand=`npm install -g cdk-assets${props.cdkCliVersion?`@${props.cdkCliVersion}`:""}`,buildSpec=codebuild().BuildSpec.fromObject({version:"0.2",phases:{install:{commands:props.preInstallCommands?[...props.preInstallCommands,installCommand]:installCommand},build:{commands:core_1().Lazy.list({produce:()=>this.commands})}}});this.buildSpec=props.buildSpec?codebuild().mergeBuildSpecs(props.buildSpec,buildSpec):buildSpec;const project=new(codebuild()).PipelineProject(this,"Default",{projectName:this.props.projectName,environment:{buildImage:default_codebuild_image_1().CDKP_DEFAULT_CODEBUILD_IMAGE,privileged:props.assetType===asset_type_1().AssetType.DOCKER_IMAGE?!0:void 0},vpc:props.vpc,subnetSelection:props.subnetSelection,buildSpec:props.createBuildspecFile?codebuild().BuildSpec.fromSourceFilename(this.getBuildSpecFileName()):this.buildSpec,role:props.role});props.dependable&&project.node.addDependency(props.dependable),this.action=new(codepipeline_actions()).CodeBuildAction({actionName:props.actionName,project,input:this.props.cloudAssemblyInput,role:props.role,environmentVariables:props.cdkCliVersion?{CDK_CLI_VERSION:{value:props.cdkCliVersion}}:void 0}),(0,core_1().attachCustomSynthesis)(this,{onSynthesize:this._onSynth.bind(this)})}getBuildSpecFileName(){return`buildspec-assets-${this.node.path.replace(new RegExp("/","g"),"-")}.yaml`}_onSynth(session){if(this.props.createBuildspecFile){const specFile=path().join(session.outdir,this.getBuildSpecFileName());fs().writeFileSync(specFile,core_1().Stack.of(this).resolve(this.buildSpec.toBuildSpec()),{encoding:"utf-8"})}}addPublishCommand(relativeManifestPath,assetSelector){const command=`cdk-assets --path "${(0,fs_1().toPosixPath)(relativeManifestPath)}" --verbose publish "${assetSelector}"`;this.commands.includes(command)||this.commands.push(command)}bind(scope,stage,options){return this.action.bind(scope,stage,options)}onStateChange(name,target,options){return this.action.onStateChange(name,target,options)}get actionProperties(){return this.action.actionProperties}}exports.PublishAssetsAction=PublishAssetsAction,_a=JSII_RTTI_SYMBOL_1,PublishAssetsAction[_a]={fqn:"aws-cdk-lib.pipelines.PublishAssetsAction",version:"2.149.0"};