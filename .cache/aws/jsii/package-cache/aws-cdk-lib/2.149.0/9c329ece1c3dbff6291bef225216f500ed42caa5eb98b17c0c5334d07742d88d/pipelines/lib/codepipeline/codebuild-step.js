"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodeBuildStep=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var buildspecs_1=()=>{var tmp=require("./private/buildspecs");return buildspecs_1=()=>tmp,tmp},outputs_1=()=>{var tmp=require("./private/outputs");return outputs_1=()=>tmp,tmp},codebuild=()=>{var tmp=require("../../../aws-codebuild");return codebuild=()=>tmp,tmp},blueprint_1=()=>{var tmp=require("../blueprint");return blueprint_1=()=>tmp,tmp};class CodeBuildStep extends blueprint_1().ShellStep{constructor(id,props){super(id,props),this.exportedVariables=new Set,this.exportedVarsRendered=!1;try{jsiiDeprecationWarnings().aws_cdk_lib_pipelines_CodeBuildStepProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CodeBuildStep),error}this.projectName=props.projectName,this.buildEnvironment=props.buildEnvironment,this._partialBuildSpec=props.partialBuildSpec,this.vpc=props.vpc,this.subnetSelection=props.subnetSelection,this.cache=props.cache,this.role=props.role,this.actionRole=props.actionRole,this.rolePolicyStatements=props.rolePolicyStatements,this.securityGroups=props.securityGroups,this.timeout=props.timeout,this.fileSystemLocations=props.fileSystemLocations,this.logging=props.logging}get project(){if(!this._project)throw new Error("Call pipeline.buildPipeline() before reading this property");return this._project}get grantPrincipal(){return this.project.grantPrincipal}get partialBuildSpec(){this.exportedVarsRendered=!0;const varsBuildSpec=this.exportedVariables.size>0?codebuild().BuildSpec.fromObject({version:"0.2",env:{"exported-variables":Array.from(this.exportedVariables)}}):void 0;return(0,buildspecs_1().mergeBuildSpecs)(varsBuildSpec,this._partialBuildSpec)}exportedVariable(variableName){if(this.exportedVarsRendered&&!this.exportedVariables.has(variableName))throw new Error("exportVariable(): Pipeline has already been produced, cannot call this function anymore");return this.exportedVariables.add(variableName),(0,outputs_1().makeCodePipelineOutput)(this,variableName)}_setProject(project){this._project=project}}exports.CodeBuildStep=CodeBuildStep,_a=JSII_RTTI_SYMBOL_1,CodeBuildStep[_a]={fqn:"aws-cdk-lib.pipelines.CodeBuildStep",version:"2.149.0"};