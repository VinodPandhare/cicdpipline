"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Map=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var map_base_1=()=>{var tmp=require("./map-base");return map_base_1=()=>tmp,tmp},fields_1=()=>{var tmp=require("../fields");return fields_1=()=>tmp,tmp},state_graph_1=()=>{var tmp=require("../state-graph");return state_graph_1=()=>tmp,tmp},types_1=()=>{var tmp=require("../types");return types_1=()=>tmp,tmp};class Map extends map_base_1().MapBase{constructor(scope,id,props={}){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_MapProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Map),error}this.processorMode=types_1().ProcessorMode.INLINE}iterator(iterator){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_stepfunctions.Map#iterator","- use `itemProcessor`\xA0instead."),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_IChainable(iterator)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.iterator),error}const name=`Map ${this.stateId} Iterator`;return super.addIterator(new(state_graph_1()).StateGraph(iterator.startState,name)),this}toStateJson(){return{...super.toStateJson(),...this.renderParameters(),...this.renderIterator()}}validateState(){const errors=super.validateState();return!this.iteration&&!this.processor&&errors.push("Map state must either have a non-empty iterator or a non-empty item processor"),this.iteration&&this.processor&&errors.push("Map state cannot have both an iterator and an item processor"),this.parameters&&this.itemSelector&&errors.push("Map state cannot have both parameters and an item selector"),errors}renderParameters(){if(this.parameters)return fields_1().FieldUtils.renderObject({Parameters:this.parameters})}addRetry(props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_RetryProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addRetry),error}return super._addRetry(props),this}addCatch(handler,props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_IChainable(handler),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_CatchProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addCatch),error}return super._addCatch(handler.startState,props),this}itemProcessor(processor,config={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_IChainable(processor),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_ProcessorConfig(config)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.itemProcessor),error}const name=`Map ${this.stateId} Item Processor`,stateGraph=new(state_graph_1()).StateGraph(processor.startState,name);return super.addItemProcessor(stateGraph,config),this}}exports.Map=Map,_a=JSII_RTTI_SYMBOL_1,Map[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.Map",version:"2.149.0"};
