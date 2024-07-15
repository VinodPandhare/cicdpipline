"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Lazy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var debug_1=()=>{var tmp=require("./debug");return debug_1=()=>tmp,tmp},stack_trace_1=()=>{var tmp=require("./stack-trace");return stack_trace_1=()=>tmp,tmp},token_1=()=>{var tmp=require("./token");return token_1=()=>tmp,tmp};class Lazy{static stringValue(producer,options={}){return token_1().Token.asString(new LazyString(producer,!1),options)}static string(producer,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_IStableStringProducer(producer),jsiiDeprecationWarnings().aws_cdk_lib_LazyStringValueOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.string),error}return token_1().Token.asString(new LazyString(producer,!0),options)}static uncachedString(producer,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_IStringProducer(producer),jsiiDeprecationWarnings().aws_cdk_lib_LazyStringValueOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.uncachedString),error}return token_1().Token.asString(new LazyString(producer,!1),options)}static numberValue(producer){return token_1().Token.asNumber(new LazyNumber(producer,!1))}static number(producer){try{jsiiDeprecationWarnings().aws_cdk_lib_IStableNumberProducer(producer)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.number),error}return token_1().Token.asNumber(new LazyNumber(producer,!0))}static uncachedNumber(producer){try{jsiiDeprecationWarnings().aws_cdk_lib_INumberProducer(producer)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.uncachedNumber),error}return token_1().Token.asNumber(new LazyNumber(producer,!1))}static listValue(producer,options={}){return token_1().Token.asList(new LazyList(producer,!1,options),options)}static uncachedList(producer,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_IListProducer(producer),jsiiDeprecationWarnings().aws_cdk_lib_LazyListValueOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.uncachedList),error}return token_1().Token.asList(new LazyList(producer,!1,options),options)}static list(producer,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_IStableListProducer(producer),jsiiDeprecationWarnings().aws_cdk_lib_LazyListValueOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.list),error}return token_1().Token.asList(new LazyList(producer,!0,options),options)}static anyValue(producer,options={}){return new LazyAny(producer,!1,options)}static any(producer,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_IStableAnyProducer(producer),jsiiDeprecationWarnings().aws_cdk_lib_LazyAnyValueOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.any),error}return new LazyAny(producer,!0,options)}static uncachedAny(producer,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_IAnyProducer(producer),jsiiDeprecationWarnings().aws_cdk_lib_LazyAnyValueOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.uncachedAny),error}return new LazyAny(producer,!1,options)}constructor(){}}exports.Lazy=Lazy,_a=JSII_RTTI_SYMBOL_1,Lazy[_a]={fqn:"aws-cdk-lib.Lazy",version:"2.149.0"};class LazyBase{constructor(producer,cache){this.producer=producer,this.cache=cache,this.creationStack=(0,debug_1().debugModeEnabled)()?(0,stack_trace_1().captureStackTrace)(this.constructor):[`Execute again with ${debug_1().CDK_DEBUG}=true to capture stack traces`]}resolve(context){return this.cache?this._cached??(this._cached=this.producer.produce(context)):this.producer.produce(context)}toString(){return token_1().Token.asString(this)}toJSON(){return"<unresolved-lazy>"}}class LazyString extends LazyBase{}class LazyNumber extends LazyBase{}class LazyList extends LazyBase{constructor(producer,cache,options={}){super(producer,cache),this.options=options}resolve(context){const resolved=super.resolve(context);if(!(resolved?.length===0&&this.options.omitEmpty))return resolved}}class LazyAny extends LazyBase{constructor(producer,cache,options={}){super(producer,cache),this.options=options}resolve(context){const resolved=super.resolve(context);if(!(Array.isArray(resolved)&&resolved.length===0&&this.options.omitEmptyArray))return resolved}}