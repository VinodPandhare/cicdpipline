"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pass=exports.Result=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var state_type_1=()=>{var tmp=require("./private/state-type");return state_type_1=()=>tmp,tmp},state_1=()=>{var tmp=require("./state");return state_1=()=>tmp,tmp},chain_1=()=>{var tmp=require("../chain");return chain_1=()=>tmp,tmp},fields_1=()=>{var tmp=require("../fields");return fields_1=()=>tmp,tmp};class Result{static fromString(value){return new Result(value)}static fromNumber(value){return new Result(value)}static fromBoolean(value){return new Result(value)}static fromObject(value){return new Result(value)}static fromArray(value){return new Result(value)}constructor(value){this.value=value}}exports.Result=Result,_a=JSII_RTTI_SYMBOL_1,Result[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.Result",version:"2.149.0"};class Pass extends state_1().State{constructor(scope,id,props={}){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_PassProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Pass),error}this.result=props.result,this.endStates=[this]}next(next){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_IChainable(next)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.next),error}return super.makeNext(next.startState),chain_1().Chain.sequence(this,next)}toStateJson(){return{Type:state_type_1().StateType.PASS,Comment:this.comment,Result:this.result?.value,ResultPath:(0,state_1().renderJsonPath)(this.resultPath),...this.renderInputOutput(),...this.renderParameters(),...this.renderNextEnd()}}renderParameters(){return fields_1().FieldUtils.renderObject({Parameters:this.parameters})}}exports.Pass=Pass,_b=JSII_RTTI_SYMBOL_1,Pass[_b]={fqn:"aws-cdk-lib.aws_stepfunctions.Pass",version:"2.149.0"};
