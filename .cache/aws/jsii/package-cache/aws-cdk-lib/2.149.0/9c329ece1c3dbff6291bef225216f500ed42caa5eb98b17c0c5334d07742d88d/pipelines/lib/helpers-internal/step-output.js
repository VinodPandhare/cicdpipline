"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StepOutput=void 0;var core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};const STEP_OUTPUT_SYM=Symbol.for("@aws-cdk/pipelines.StepOutput"),PRODUCED_OUTPUTS_SYM=Symbol.for("@aws-cdk/pipelines.outputs");class StepOutput{static isStepOutput(resolvable){return!!resolvable[STEP_OUTPUT_SYM]}static findAll(structure){return findAllStepOutputs(structure)}static producedStepOutputs(step){return step[PRODUCED_OUTPUTS_SYM]??[]}static recordProducer(...outputs){for(const output of outputs){const step=output.step;let list=step[PRODUCED_OUTPUTS_SYM];list||(list=[],step[PRODUCED_OUTPUTS_SYM]=list),list.push(...outputs)}}constructor(step,engineName,engineSpecificInformation){this.creationStack=[],this.resolution=void 0,this.step=step,this.engineName=engineName,this.engineSpecificInformation=engineSpecificInformation,Object.defineProperty(this,STEP_OUTPUT_SYM,{value:!0})}defineResolution(value){this.resolution=value}resolve(_context){if(this.resolution===void 0)throw new Error(`Output for step ${this.step} not configured. Either the step is not in the pipeline, the step implementation did not call 'this.discoverReferencedOutputs()', or this engine does not support Outputs for this step.`);return this.resolution}toString(){return core_1().Token.asString(this)}}exports.StepOutput=StepOutput;function findAllStepOutputs(structure){const ret=new Set;return recurse(structure),Array.from(ret);function checkToken(x){return x&&StepOutput.isStepOutput(x)?(ret.add(x),!0):x!==void 0}function recurse(x){if(x){if(core_1().Tokenization.isResolvable(x)){checkToken(x);return}if(Array.isArray(x)){checkToken(core_1().Tokenization.reverseList(x))||x.forEach(recurse);return}if(typeof x=="number"){checkToken(core_1().Tokenization.reverseNumber(x));return}if(typeof x=="string"){core_1().Tokenization.reverseString(x).tokens.forEach(checkToken);return}if(typeof x=="object")for(const[k,v]of Object.entries(x))recurse(k),recurse(v)}}}