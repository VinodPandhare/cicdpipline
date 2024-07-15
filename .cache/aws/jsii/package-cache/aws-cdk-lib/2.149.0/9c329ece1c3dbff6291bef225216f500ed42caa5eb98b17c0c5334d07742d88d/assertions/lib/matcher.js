"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.MatchResult=exports.Matcher=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class Matcher{static isMatcher(x){return x&&x instanceof Matcher}}exports.Matcher=Matcher,_a=JSII_RTTI_SYMBOL_1,Matcher[_a]={fqn:"aws-cdk-lib.assertions.Matcher",version:"2.149.0"};class MatchResult{constructor(target){this.failuresHere=new Map,this.captures=new Map,this.finalized=!1,this.innerMatchFailures=new Map,this._hasFailed=!1,this._failCount=0,this._cost=0,this.target=target}push(matcher,path,message){try{jsiiDeprecationWarnings().print("aws-cdk-lib.assertions.MatchResult#push","use recordFailure()"),jsiiDeprecationWarnings().aws_cdk_lib_assertions_Matcher(matcher)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.push),error}return this.recordFailure({matcher,path,message})}recordFailure(failure){try{jsiiDeprecationWarnings().aws_cdk_lib_assertions_MatchFailure(failure)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.recordFailure),error}const failKey=failure.path.join(".");let list=this.failuresHere.get(failKey);return list||(list=[],this.failuresHere.set(failKey,list)),this._failCount+=1,this._cost+=failure.cost??1,list.push(failure),this._hasFailed=!0,this}get isSuccess(){return!this._hasFailed}hasFailed(){return this._hasFailed}get failCount(){return this._failCount}get failCost(){return this._cost}compose(id,inner){try{jsiiDeprecationWarnings().aws_cdk_lib_assertions_MatchResult(inner)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.compose),error}return inner.hasFailed()&&(this._hasFailed=!0,this._failCount+=inner.failCount,this._cost+=inner._cost,this.innerMatchFailures.set(id,inner)),inner.captures.forEach((vals,capture)=>{vals.forEach(value=>this.recordCapture({capture,value}))}),this}finished(){return this.finalized?this:(this.failCount===0&&this.captures.forEach((vals,cap)=>cap._captured.push(...vals)),this.finalized=!0,this)}toHumanStrings(){const failures=new Array;debugger;return recurse(this,[]),failures.map(r=>{const loc=r.path.length===0?"":` at /${r.path.join("/")}`;return""+r.message+loc+` (using ${r.matcher.name} matcher)`});function recurse(x,prefix){for(const fail of Array.from(x.failuresHere.values()).flat())failures.push({matcher:fail.matcher,message:fail.message,path:[...prefix,...fail.path]});for(const[key,inner]of x.innerMatchFailures.entries())recurse(inner,[...prefix,key])}}renderMismatch(){if(!this.hasFailed())return"<match>";const parts=new Array,indents=new Array;return emitFailures(this,""),recurse(this),moveMarkersToFront(parts.join("").trimEnd());function emit(x){if(x===void 0)debugger;parts.push(x.replace(/\n/g,`
${indents.join("")}`))}function emitFailures(r,path,scrapSet){for(const fail of r.failuresHere.get(path)??[])emit(`!! ${fail.message}
`);scrapSet?.delete(path)}function recurse(r){const remainingFailures=new Set(Array.from(r.failuresHere.keys()).filter(x=>x!==""));if(Array.isArray(r.target)){indents.push("  "),emit(`[
`);for(const[first,i]of enumFirst(range(r.target.length))){first||emit(`,
`),emitFailures(r,`${i}`,remainingFailures);const innerMatcher=r.innerMatchFailures.get(`${i}`);innerMatcher?(emitFailures(innerMatcher,""),recurseComparingValues(innerMatcher,r.target[i])):emit(renderAbridged(r.target[i]))}emitRemaining(),indents.pop(),emit(`
]`);return}if(r.target&&typeof r.target=="object"){indents.push("  "),emit(`{
`);const keys=Array.from(new Set([...Object.keys(r.target),...Array.from(remainingFailures)])).sort();for(const[first,key]of enumFirst(keys)){first||emit(`,
`),emitFailures(r,key,remainingFailures);const innerMatcher=r.innerMatchFailures.get(key);innerMatcher?(emitFailures(innerMatcher,""),emit(`${jsonify(key)}: `),recurseComparingValues(innerMatcher,r.target[key])):(emit(`${jsonify(key)}: `),emit(renderAbridged(r.target[key])))}emitRemaining(),indents.pop(),emit(`
}`);return}emitRemaining(),emit(jsonify(r.target));function emitRemaining(){remainingFailures.size>0&&emit(`
`);for(const key of remainingFailures)emitFailures(r,key)}}function recurseComparingValues(inner,actualValue){if(inner.target===actualValue)return recurse(inner);emit(renderAbridged(actualValue)),emit(" <*> "),recurse(inner)}function renderAbridged(x){if(Array.isArray(x))switch(x.length){case 0:return"[]";case 1:return`[ ${renderAbridged(x[0])} ]`;case 2:return x.every(e=>["number","boolean","string"].includes(typeof e))?`[ ${x.map(renderAbridged).join(", ")} ]`:"[ ... ]";default:return"[ ... ]"}if(x&&typeof x=="object"){const keys=Object.keys(x);switch(keys.length){case 0:return"{}";case 1:return`{ ${JSON.stringify(keys[0])}: ${renderAbridged(x[keys[0]])} }`;default:return"{ ... }"}}return jsonify(x)}function jsonify(x){return JSON.stringify(x)??"undefined"}function moveMarkersToFront(x){const re=/^(\s+)!!/gm;return x.replace(re,(_,spaces)=>`!!${spaces.substring(0,spaces.length-2)}`)}}recordCapture(options){try{jsiiDeprecationWarnings().aws_cdk_lib_assertions_MatchCapture(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.recordCapture),error}let values=this.captures.get(options.capture);values===void 0&&(values=[]),values.push(options.value),this.captures.set(options.capture,values)}}exports.MatchResult=MatchResult,_b=JSII_RTTI_SYMBOL_1,MatchResult[_b]={fqn:"aws-cdk-lib.assertions.MatchResult",version:"2.149.0"};function*range(n){for(let i=0;i<n;i++)yield i}function*enumFirst(xs){let first=!0;for(const x of xs)yield[first,x],first=!1}