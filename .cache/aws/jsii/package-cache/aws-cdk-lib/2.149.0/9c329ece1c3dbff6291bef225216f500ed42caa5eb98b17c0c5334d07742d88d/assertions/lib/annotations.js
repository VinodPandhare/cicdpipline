"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Annotations=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var messages_1=()=>{var tmp=require("./private/messages");return messages_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class Annotations{static fromStack(stack){try{jsiiDeprecationWarnings().aws_cdk_lib_Stack(stack)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromStack),error}return new Annotations(toMessages(stack))}constructor(messages){this._messages=convertArrayToMessagesType(messages)}hasError(constructPath,message){const matchError=(0,messages_1().hasMessage)(this._messages,constructPath,constructMessage("error",message));if(matchError)throw new Error(matchError)}hasNoError(constructPath,message){const matchError=(0,messages_1().hasNoMessage)(this._messages,constructPath,constructMessage("error",message));if(matchError)throw new Error(matchError)}findError(constructPath,message){return convertMessagesTypeToArray((0,messages_1().findMessage)(this._messages,constructPath,constructMessage("error",message)))}hasWarning(constructPath,message){const matchError=(0,messages_1().hasMessage)(this._messages,constructPath,constructMessage("warning",message));if(matchError)throw new Error(matchError)}hasNoWarning(constructPath,message){const matchError=(0,messages_1().hasNoMessage)(this._messages,constructPath,constructMessage("warning",message));if(matchError)throw new Error(matchError)}findWarning(constructPath,message){return convertMessagesTypeToArray((0,messages_1().findMessage)(this._messages,constructPath,constructMessage("warning",message)))}hasInfo(constructPath,message){const matchError=(0,messages_1().hasMessage)(this._messages,constructPath,constructMessage("info",message));if(matchError)throw new Error(matchError)}hasNoInfo(constructPath,message){const matchError=(0,messages_1().hasNoMessage)(this._messages,constructPath,constructMessage("info",message));if(matchError)throw new Error(matchError)}findInfo(constructPath,message){return convertMessagesTypeToArray((0,messages_1().findMessage)(this._messages,constructPath,constructMessage("info",message)))}}exports.Annotations=Annotations,_a=JSII_RTTI_SYMBOL_1,Annotations[_a]={fqn:"aws-cdk-lib.assertions.Annotations",version:"2.149.0"};function constructMessage(type,message){return{level:type,entry:{data:message}}}function convertArrayToMessagesType(messages){return messages.reduce((obj,item,index)=>({...obj,[index]:item}),{})}function convertMessagesTypeToArray(messages){return Object.values(messages)}function toMessages(stack){const root=stack.node.root;if(!core_1().Stage.isStage(root))throw new Error("unexpected: all stacks must be part of a Stage or an App");return root.synth({force:!0}).getStackArtifact(stack.artifactId).messages}
