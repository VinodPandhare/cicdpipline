"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FieldUtils=exports.Context=exports.Data=exports.JsonPath=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var json_path_1=()=>{var tmp=require("./private/json-path");return json_path_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class JsonPath{static stringAt(path){return validateJsonPath(path),new(json_path_1()).JsonPathToken(path).toString()}static listAt(path){return validateDataPath(path),core_1().Token.asList(new(json_path_1()).JsonPathToken(path))}static numberAt(path){return validateJsonPath(path),core_1().Token.asNumber(new(json_path_1()).JsonPathToken(path))}static objectAt(path){return validateJsonPath(path),new(json_path_1()).JsonPathToken(path)}static get entirePayload(){return new(json_path_1()).JsonPathToken("$").toString()}static isEncodedJsonPath(value){return!!(0,json_path_1().jsonPathString)(value)}static get executionId(){return new(json_path_1()).JsonPathToken("$$.Execution.Id").toString()}static get executionInput(){return new(json_path_1()).JsonPathToken("$$.Execution.Input").toString()}static get executionName(){return new(json_path_1()).JsonPathToken("$$.Execution.Name").toString()}static get executionRoleArn(){return new(json_path_1()).JsonPathToken("$$.Execution.RoleArn").toString()}static get executionStartTime(){return new(json_path_1()).JsonPathToken("$$.Execution.StartTime").toString()}static get stateEnteredTime(){return new(json_path_1()).JsonPathToken("$$.State.EnteredTime").toString()}static get stateName(){return new(json_path_1()).JsonPathToken("$$.State.Name").toString()}static get stateRetryCount(){return new(json_path_1()).JsonPathToken("$$.State.RetryCount").toString()}static get stateMachineId(){return new(json_path_1()).JsonPathToken("$$.StateMachine.Id").toString()}static get stateMachineName(){return new(json_path_1()).JsonPathToken("$$.StateMachine.Name").toString()}static get taskToken(){return new(json_path_1()).JsonPathToken("$$.Task.Token").toString()}static get entireContext(){return new(json_path_1()).JsonPathToken("$$").toString()}static array(...values){return new(json_path_1()).JsonPathToken(`States.Array(${values.map(json_path_1().renderInExpression).join(", ")})`).toString()}static arrayPartition(array,chunkSize){return new(json_path_1()).JsonPathToken(`States.ArrayPartition(${[array,chunkSize].map(json_path_1().renderInExpression).join(", ")})`).toString()}static arrayContains(array,value){return new(json_path_1()).JsonPathToken(`States.ArrayContains(${[array,value].map(json_path_1().renderInExpression).join(", ")})`).toString()}static arrayRange(start,end,step){return new(json_path_1()).JsonPathToken(`States.ArrayRange(${[start,end,step].map(json_path_1().renderInExpression).join(", ")})`).toString()}static arrayGetItem(array,index){return new(json_path_1()).JsonPathToken(`States.ArrayGetItem(${[array,index].map(json_path_1().renderInExpression).join(", ")})`).toString()}static arrayLength(array){return new(json_path_1()).JsonPathToken(`States.ArrayLength(${(0,json_path_1().renderInExpression)(array)})`).toString()}static arrayUnique(array){return new(json_path_1()).JsonPathToken(`States.ArrayUnique(${(0,json_path_1().renderInExpression)(array)})`).toString()}static base64Encode(input){return new(json_path_1()).JsonPathToken(`States.Base64Encode(${(0,json_path_1().renderInExpression)(input)})`).toString()}static base64Decode(base64){return new(json_path_1()).JsonPathToken(`States.Base64Decode(${(0,json_path_1().renderInExpression)(base64)})`).toString()}static hash(data,algorithm){return new(json_path_1()).JsonPathToken(`States.Hash(${[data,algorithm].map(json_path_1().renderInExpression).join(", ")})`).toString()}static jsonMerge(value1,value2){return new(json_path_1()).JsonPathToken(`States.JsonMerge(${[value1,value2].map(json_path_1().renderInExpression).join(", ")}, false)`).toString()}static mathRandom(start,end){return new(json_path_1()).JsonPathToken(`States.MathRandom(${[start,end].map(json_path_1().renderInExpression).join(", ")})`).toString()}static mathAdd(num1,num2){return new(json_path_1()).JsonPathToken(`States.MathAdd(${[num1,num2].map(json_path_1().renderInExpression).join(", ")})`).toString()}static stringSplit(inputString,splitter){return new(json_path_1()).JsonPathToken(`States.StringSplit(${[inputString,splitter].map(json_path_1().renderInExpression).join(", ")})`).toString()}static uuid(){return new(json_path_1()).JsonPathToken("States.UUID()").toString()}static format(formatString,...values){const allArgs=[formatString,...values];return new(json_path_1()).JsonPathToken(`States.Format(${allArgs.map(json_path_1().renderInExpression).join(", ")})`).toString()}static stringToJson(jsonString){return new(json_path_1()).JsonPathToken(`States.StringToJson(${(0,json_path_1().renderInExpression)(jsonString)})`)}static jsonToString(value){const path=(0,json_path_1().jsonPathFromAny)(value);if(!path)throw new Error("Argument to JsonPath.jsonToString() must be a JsonPath object");return new(json_path_1()).JsonPathToken(`States.JsonToString(${path})`).toString()}constructor(){}}exports.JsonPath=JsonPath,_a=JSII_RTTI_SYMBOL_1,JsonPath[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.JsonPath",version:"2.149.0"},JsonPath.DISCARD=core_1().Token.asString(core_1().JsonNull.INSTANCE,{displayHint:"DISCARD (JSON `null`)"});class Data{static stringAt(path){return validateDataPath(path),new(json_path_1()).JsonPathToken(path).toString()}static listAt(path){return validateDataPath(path),core_1().Token.asList(new(json_path_1()).JsonPathToken(path))}static numberAt(path){return validateDataPath(path),core_1().Token.asNumber(new(json_path_1()).JsonPathToken(path))}static get entirePayload(){return new(json_path_1()).JsonPathToken("$").toString()}static isJsonPathString(value){return!!(0,json_path_1().jsonPathString)(value)}constructor(){}}exports.Data=Data,_b=JSII_RTTI_SYMBOL_1,Data[_b]={fqn:"aws-cdk-lib.aws_stepfunctions.Data",version:"2.149.0"};class Context{static stringAt(path){return validateContextPath(path),new(json_path_1()).JsonPathToken(path).toString()}static numberAt(path){return validateContextPath(path),core_1().Token.asNumber(new(json_path_1()).JsonPathToken(path))}static get taskToken(){return new(json_path_1()).JsonPathToken("$$.Task.Token").toString()}static get entireContext(){return new(json_path_1()).JsonPathToken("$$").toString()}constructor(){}}exports.Context=Context,_c=JSII_RTTI_SYMBOL_1,Context[_c]={fqn:"aws-cdk-lib.aws_stepfunctions.Context",version:"2.149.0"};class FieldUtils{static renderObject(obj){return(0,json_path_1().renderObject)(obj)}static findReferencedPaths(obj){return Array.from((0,json_path_1().findReferencedPaths)(obj)).sort()}static containsTaskToken(obj){const paths=(0,json_path_1().findReferencedPaths)(obj);return paths.has("$$.Task.Token")||paths.has("$$.Task")||paths.has("$$")}constructor(){}}exports.FieldUtils=FieldUtils,_d=JSII_RTTI_SYMBOL_1,FieldUtils[_d]={fqn:"aws-cdk-lib.aws_stepfunctions.FieldUtils",version:"2.149.0"};function validateJsonPath(path){const intrinsicFunctionFullNames=["Array","ArrayPartition","ArrayContains","ArrayRange","ArrayGetItem","ArrayLength","ArrayUnique","Base64Encode","Base64Decode","Hash","JsonMerge","StringToJson","JsonToString","MathRandom","MathAdd","StringSplit","UUID","Format"].map(fn=>`States.${fn}`);if(path!=="$"&&!path.startsWith("$.")&&path!=="$$"&&!path.startsWith("$$.")&&!path.startsWith("$[")&&intrinsicFunctionFullNames.every(fn=>!path.startsWith(fn))){const lastItem=intrinsicFunctionFullNames.pop(),intrinsicFunctionsStr=intrinsicFunctionFullNames.join(", ")+", or "+lastItem;throw new Error(`JSON path values must be exactly '$', '$$', start with '$.', start with '$$.', start with '$[', or start with an intrinsic function: ${intrinsicFunctionsStr}. Received: ${path}`)}}function validateDataPath(path){if(path!=="$"&&!path.startsWith("$[")&&!path.startsWith("$."))throw new Error("Data JSON path values must either be exactly equal to '$', start with '$[' or start with '$.'")}function validateContextPath(path){if(path!=="$$"&&!path.startsWith("$$."))throw new Error("Context JSON path values must either be exactly equal to '$$' or start with '$$.'")}