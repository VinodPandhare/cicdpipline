"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderInExpression=exports.jsonPathFromAny=exports.jsonPathString=exports.recurseObject=exports.findReferencedPaths=exports.renderObject=exports.JsonPathToken=void 0;var intrinstics_1=()=>{var tmp=require("./intrinstics");return intrinstics_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};const JSON_PATH_TOKEN_SYMBOL=Symbol.for("@aws-cdk/aws-stepfunctions.JsonPathToken");class JsonPathToken{static isJsonPathToken(x){return x[JSON_PATH_TOKEN_SYMBOL]===!0}constructor(path){this.path=path,this.creationStack=(0,core_1().captureStackTrace)(),this.displayHint=path.replace(/^[^a-zA-Z]+/,""),Object.defineProperty(this,JSON_PATH_TOKEN_SYMBOL,{value:!0})}resolve(_ctx){return this.path}toString(){return core_1().Token.asString(this,{displayHint:this.displayHint})}toJSON(){return`<path:${this.path}>`}}exports.JsonPathToken=JsonPathToken;function renderObject(obj){return recurseObject(obj,{handleString:renderString,handleList:renderStringList,handleNumber:renderNumber,handleBoolean:renderBoolean,handleResolvable:renderResolvable})}exports.renderObject=renderObject;function findReferencedPaths(obj){const found=new Set;return recurseObject(obj,{handleString(_key,x){for(const p of findPathsInIntrinsicFunctions(jsonPathString(x)))found.add(p);return{}},handleList(_key,x){for(const p of findPathsInIntrinsicFunctions(jsonPathStringList(x)))found.add(p);return{}},handleNumber(_key,x){for(const p of findPathsInIntrinsicFunctions(jsonPathNumber(x)))found.add(p);return{}},handleBoolean(_key,_x){return{}},handleResolvable(_key,x){for(const p of findPathsInIntrinsicFunctions(jsonPathFromAny(x)))found.add(p);return{}}}),found}exports.findReferencedPaths=findReferencedPaths;function findPathsInIntrinsicFunctions(expression){if(!expression)return[];const ret=new Array;try{const parsed=new(intrinstics_1()).IntrinsicParser(expression).parseTopLevelIntrinsic();return recurse(parsed),ret}catch{return[expression]}function recurse(p){switch(p.type){case"path":ret.push(p.path);break;case"fncall":for(const arg of p.arguments)recurse(arg)}}}function recurseObject(obj,handlers,visited=[]){if(typeof obj!="object"||obj===null)return obj;if(visited.includes(obj))return{};visited.push(obj);const ret={};for(const[key,value]of Object.entries(obj))typeof value=="string"?Object.assign(ret,handlers.handleString(key,value)):typeof value=="number"?Object.assign(ret,handlers.handleNumber(key,value)):Array.isArray(value)?Object.assign(ret,recurseArray(key,value,handlers,visited)):typeof value=="boolean"?Object.assign(ret,handlers.handleBoolean(key,value)):value==null||typeof value=="object"&&(core_1().Tokenization.isResolvable(value)?Object.assign(ret,handlers.handleResolvable(key,value)):ret[key]=recurseObject(value,handlers,visited));return visited.pop(),ret}exports.recurseObject=recurseObject;function recurseArray(key,arr,handlers,visited=[]){return isStringArray(arr)&&jsonPathStringList(arr)!==void 0?handlers.handleList(key,arr):{[key]:resolveArray(arr,handlers,visited)}}function resolveArray(arr,handlers,visited=[]){return arr.map(value=>{if(typeof value=="string"&&jsonPathString(value)!==void 0||typeof value=="number"&&jsonPathNumber(value)!==void 0||isStringArray(value)&&jsonPathStringList(value)!==void 0)throw new Error("Cannot use JsonPath fields in an array, they must be used in objects");return Array.isArray(value)?resolveArray(value,handlers,visited):typeof value=="object"&&value!==null?recurseObject(value,handlers,visited):value})}function isStringArray(x){return Array.isArray(x)&&x.every(el=>typeof el=="string")}function renderString(key,value){const path=jsonPathString(value);return path!==void 0?{[key+".$"]:path}:{[key]:value}}function renderResolvable(key,value){const path=jsonPathFromAny(value);return path!==void 0?{[key+".$"]:path}:{[key]:value}}function renderStringList(key,value){const path=jsonPathStringList(value);return path!==void 0?{[key+".$"]:path}:{[key]:value}}function renderNumber(key,value){const path=jsonPathNumber(value);return path!==void 0?{[key+".$"]:path}:{[key]:value}}function renderBoolean(key,value){return{[key]:value}}function jsonPathString(x){const fragments=core_1().Tokenization.reverseString(x),jsonPathTokens=fragments.tokens.filter(JsonPathToken.isJsonPathToken);if(jsonPathTokens.length>0&&fragments.length>1)throw new Error(`Field references must be the entire string, cannot concatenate them (found '${x}')`);if(jsonPathTokens.length>0)return jsonPathTokens[0].path}exports.jsonPathString=jsonPathString;function jsonPathFromAny(x){if(x)return typeof x=="string"?jsonPathString(x):pathFromToken(core_1().Tokenization.reverse(x))}exports.jsonPathFromAny=jsonPathFromAny;function jsonPathStringList(x){return pathFromToken(core_1().Tokenization.reverseList(x))}function jsonPathNumber(x){return pathFromToken(core_1().Tokenization.reverseNumber(x))}function pathFromToken(token){return token&&(JsonPathToken.isJsonPathToken(token)?token.path:void 0)}function renderInExpression(x){const path=jsonPathFromAny(x);if(path)return path;if(typeof x=="number")return x.toString(10);if(typeof x=="string")return singleQuotestring(x);throw new Error("Unxexpected value.")}exports.renderInExpression=renderInExpression;function singleQuotestring(x){const ret=new Array;ret.push("'");for(let i=0;i<x.length;i++){const c=x[i];c==="'"?ret.push("\\'"):c==="\\"&&(i==x.length-1||x[i+1]!="{"&&x[i+1]!="}")?ret.push("\\\\"):ret.push(c)}return ret.push("'"),ret.join("")}