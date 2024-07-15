"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sum=exports.UniqueStringSet=exports.mergePrincipal=exports.AttachedPolicies=exports.generatePolicyName=exports.undefinedIfEmpty=exports.LITERAL_STRING_KEY=void 0;var core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};const MAX_POLICY_NAME_LEN=128;exports.LITERAL_STRING_KEY="LiteralString";function undefinedIfEmpty(f){return core_1().Lazy.list({produce:()=>{const array=f();return array&&array.length>0?array:void 0}})}exports.undefinedIfEmpty=undefinedIfEmpty;function generatePolicyName(scope,logicalId){const resolvedLogicalId=core_1().Tokenization.resolve(logicalId,{scope,resolver:new(core_1()).DefaultTokenResolver(new(core_1()).StringConcat)});return lastNCharacters(resolvedLogicalId,MAX_POLICY_NAME_LEN)}exports.generatePolicyName=generatePolicyName;function lastNCharacters(str,n){const startIndex=Math.max(str.length-n,0);return str.substring(startIndex,str.length)}class AttachedPolicies{constructor(){this.policies=new Array}attach(policy){if(!this.policies.find(p=>p===policy)){if(this.policies.find(p=>p.policyName===policy.policyName))throw new Error(`A policy named "${policy.policyName}" is already attached`);this.policies.push(policy)}}}exports.AttachedPolicies=AttachedPolicies;function mergePrincipal(target,source){const sourceKeys=Object.keys(source),targetKeys=Object.keys(target);if(exports.LITERAL_STRING_KEY in source&&targetKeys.some(k=>k!==exports.LITERAL_STRING_KEY)||exports.LITERAL_STRING_KEY in target&&sourceKeys.some(k=>k!==exports.LITERAL_STRING_KEY))throw new Error(`Cannot merge principals ${JSON.stringify(target)} and ${JSON.stringify(source)}; if one uses a literal principal string the other one must be empty`);for(const key of sourceKeys){target[key]=target[key]??[];let value=source[key];Array.isArray(value)||(value=[value]),target[key].push(...value)}return target}exports.mergePrincipal=mergePrincipal;class UniqueStringSet{static from(fn){return core_1().Token.asList(new UniqueStringSet(fn))}constructor(fn){this.fn=fn,this.creationStack=(0,core_1().captureStackTrace)()}resolve(context){return context.registerPostProcessor(this),this.fn()}postProcess(input,_context){if(!Array.isArray(input))return input;if(input.length===0)return;const uniq={};for(const el of input)uniq[JSON.stringify(el)]=el;return Object.values(uniq)}toString(){return core_1().Token.asString(this)}}exports.UniqueStringSet=UniqueStringSet;function sum(xs){return xs.reduce((a,b)=>a+b,0)}exports.sum=sum;
