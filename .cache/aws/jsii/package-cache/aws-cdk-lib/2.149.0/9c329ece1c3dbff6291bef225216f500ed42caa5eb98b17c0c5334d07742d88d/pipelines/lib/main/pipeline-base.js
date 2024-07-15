"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PipelineBase=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},blueprint_1=()=>{var tmp=require("../blueprint");return blueprint_1=()=>tmp,tmp};const PIPELINE_SYMBOL=Symbol.for("@aws-cdk/pipelines.PipelineBase");class PipelineBase extends constructs_1().Construct{static isPipeline(x){return x!==null&&typeof x=="object"&&PIPELINE_SYMBOL in x}constructor(scope,id,props){super(scope,id),this.built=!1;try{jsiiDeprecationWarnings().aws_cdk_lib_pipelines_PipelineBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,PipelineBase),error}if(Object.defineProperty(this,PIPELINE_SYMBOL,{value:!0}),props.synth instanceof blueprint_1().ShellStep&&!props.synth.primaryOutput&&props.synth.primaryOutputDirectory("cdk.out"),!props.synth.primaryOutput)throw new Error(`synthStep ${props.synth} must produce a primary output, but is not producing anything. Configure the Step differently or use a different Step type.`);this.synth=props.synth,this.waves=[],this.cloudAssemblyFileSet=props.synth.primaryOutput,core_1().Aspects.of(this).add({visit:()=>this.buildJustInTime()})}addStage(stage,options){try{jsiiDeprecationWarnings().aws_cdk_lib_Stage(stage),jsiiDeprecationWarnings().aws_cdk_lib_pipelines_AddStageOpts(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addStage),error}if(this.built)throw new Error("addStage: can't add Stages anymore after buildPipeline() has been called");return this.addWave(stage.stageName).addStage(stage,options)}addWave(id,options){try{jsiiDeprecationWarnings().aws_cdk_lib_pipelines_WaveOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addWave),error}if(this.built)throw new Error("addWave: can't add Waves anymore after buildPipeline() has been called");const wave=new(blueprint_1()).Wave(id,options);return this.waves.push(wave),wave}buildPipeline(){if(this.built)throw new Error("build() has already been called: can only call it once");this.doBuildPipeline(),this.built=!0}buildJustInTime(){this.built||this.buildPipeline()}}exports.PipelineBase=PipelineBase,_a=JSII_RTTI_SYMBOL_1,PipelineBase[_a]={fqn:"aws-cdk-lib.pipelines.PipelineBase",version:"2.149.0"};