"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodeStarConnectionsSourceAction=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var codepipeline=()=>{var tmp=require("../../../aws-codepipeline");return codepipeline=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},action_1=()=>{var tmp=require("../action");return action_1=()=>tmp,tmp},common_1=()=>{var tmp=require("../common");return common_1=()=>tmp,tmp};class CodeStarConnectionsSourceAction extends action_1().Action{constructor(props){super({...props,category:codepipeline().ActionCategory.SOURCE,owner:"AWS",provider:"CodeStarSourceConnection",artifactBounds:(0,common_1().sourceArtifactBounds)(),outputs:[props.output]});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_actions_CodeStarConnectionsSourceActionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CodeStarConnectionsSourceAction),error}this.props=props}get variables(){return{fullRepositoryName:this.variableExpression("FullRepositoryName"),branchName:this.variableExpression("BranchName"),authorDate:this.variableExpression("AuthorDate"),commitId:this.variableExpression("CommitId"),commitMessage:this.variableExpression("CommitMessage"),connectionArn:this.variableExpression("ConnectionArn")}}bound(_scope,_stage,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_IStage(_stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_ActionBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bound),error}return options.role.addToPolicy(new(iam()).PolicyStatement({actions:["codestar-connections:UseConnection"],resources:[this.props.connectionArn]})),options.bucket.grantReadWrite(options.role),options.bucket.grantPutAcl(options.role),this.props.codeBuildCloneOutput===!0&&this.props.output.setMetadata(CodeStarConnectionsSourceAction._CONNECTION_ARN_PROPERTY,this.props.connectionArn),{configuration:{ConnectionArn:this.props.connectionArn,FullRepositoryId:`${this.props.owner}/${this.props.repo}`,BranchName:this.props.branch??"master",OutputArtifactFormat:this.props.codeBuildCloneOutput===!0?"CODEBUILD_CLONE_REF":void 0,DetectChanges:this.props.triggerOnPush}}}}exports.CodeStarConnectionsSourceAction=CodeStarConnectionsSourceAction,_a=JSII_RTTI_SYMBOL_1,CodeStarConnectionsSourceAction[_a]={fqn:"aws-cdk-lib.aws_codepipeline_actions.CodeStarConnectionsSourceAction",version:"2.149.0"},CodeStarConnectionsSourceAction._CONNECTION_ARN_PROPERTY="CodeStarConnectionArnProperty";