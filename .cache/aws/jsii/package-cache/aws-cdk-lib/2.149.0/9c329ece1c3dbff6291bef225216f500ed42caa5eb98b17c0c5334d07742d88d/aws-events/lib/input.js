"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventField=exports.RuleTargetInput=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class RuleTargetInput{static fromText(text){return new FieldAwareEventInput(text,InputType.Text)}static fromMultilineText(text){return new FieldAwareEventInput(text,InputType.Multiline)}static fromObject(obj){return new FieldAwareEventInput(obj,InputType.Object)}static fromEventPath(path){return new LiteralEventInput({inputPath:path})}constructor(){}}exports.RuleTargetInput=RuleTargetInput,_a=JSII_RTTI_SYMBOL_1,RuleTargetInput[_a]={fqn:"aws-cdk-lib.aws_events.RuleTargetInput",version:"2.149.0"};class LiteralEventInput extends RuleTargetInput{constructor(props){super(),this.props=props}bind(_rule){return this.props}}class FieldAwareEventInput extends RuleTargetInput{constructor(input,inputType){super(),this.input=input,this.inputType=inputType}bind(rule){let fieldCounter=0;const pathToKey=new Map,inputPathsMap={};function keyForField(f){const existing=pathToKey.get(f.path);if(existing!==void 0)return existing;fieldCounter+=1;const key=f.displayHint||`f${fieldCounter}`;return pathToKey.set(f.path,key),key}class EventFieldReplacer extends core_1().DefaultTokenResolver{constructor(){super(new(core_1()).StringConcat)}resolveToken(t,_context){if(!isEventField(t))return core_1().Token.asString(t);const key=keyForField(t);if(inputPathsMap[key]&&inputPathsMap[key]!==t.path)throw new Error(`Single key '${key}' is used for two different JSON paths: '${t.path}' and '${inputPathsMap[key]}'`);return inputPathsMap[key]=t.path,`<${key}>`}}const stack=core_1().Stack.of(rule);let resolved;this.inputType===InputType.Multiline?(resolved=core_1().Tokenization.resolve(this.input,{scope:rule,resolver:new EventFieldReplacer}),resolved=resolved.split(`
`).map(stack.toJsonString).join(`
`)):resolved=stack.toJsonString(core_1().Tokenization.resolve(this.input,{scope:rule,resolver:new EventFieldReplacer}));const keys=Object.keys(inputPathsMap);return keys.length===0?{input:resolved}:{inputTemplate:this.unquoteKeyPlaceholders(resolved,keys),inputPathsMap}}unquoteKeyPlaceholders(sub,keys){if(this.inputType!==InputType.Object)return sub;return core_1().Lazy.uncachedString({produce:ctx=>core_1().Token.asString(deepUnquote(ctx.resolve(sub)))});function deepUnquote(resolved){if(Array.isArray(resolved))return resolved.map(deepUnquote);if(typeof resolved=="object"&&resolved!==null){for(const[key,value]of Object.entries(resolved))resolved[key]=deepUnquote(value);return resolved}else if(typeof resolved=="string")return keys.reduce((r,key)=>r.replace(new RegExp(`(?<!\\\\)"<${key}>"`,"g"),`<${key}>`),resolved);return resolved}}}class EventField{static get eventId(){return this.fromPath("$.id")}static get detailType(){return this.fromPath("$.detail-type")}static get source(){return this.fromPath("$.source")}static get account(){return this.fromPath("$.account")}static get time(){return this.fromPath("$.time")}static get region(){return this.fromPath("$.region")}static fromPath(path){return new EventField(path).toString()}constructor(path){this.path=path,this.displayHint=this.path.replace(/^[^a-zA-Z0-9_-]+/,"").replace(/[^a-zA-Z0-9_-]/g,"-"),Object.defineProperty(this,EVENT_FIELD_SYMBOL,{value:!0}),this.creationStack=(0,core_1().captureStackTrace)()}resolve(_ctx){try{jsiiDeprecationWarnings().aws_cdk_lib_IResolveContext(_ctx)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.resolve),error}return this.path}toString(){return core_1().Token.asString(this,{displayHint:this.displayHint})}toJSON(){return`<path:${this.path}>`}}exports.EventField=EventField,_b=JSII_RTTI_SYMBOL_1,EventField[_b]={fqn:"aws-cdk-lib.aws_events.EventField",version:"2.149.0"};var InputType;(function(InputType2){InputType2[InputType2.Object=0]="Object",InputType2[InputType2.Text=1]="Text",InputType2[InputType2.Multiline=2]="Multiline"})(InputType||(InputType={}));function isEventField(x){return EVENT_FIELD_SYMBOL in x}const EVENT_FIELD_SYMBOL=Symbol.for("@aws-cdk/aws-events.EventField");