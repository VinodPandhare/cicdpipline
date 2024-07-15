"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkTemplateForCyclicDependencies=void 0;function checkTemplateForCyclicDependencies(template){const logicalIds=new Set(Object.keys(template.Resources??{})),dependencies=new Map;for(const[logicalId,resource]of Object.entries(template.Resources??{}))dependencies.set(logicalId,intersect(findResourceDependencies(resource),logicalIds));for(;dependencies.size>0;){const free=Array.from(dependencies.entries()).filter(([_,deps])=>deps.size===0);if(free.length===0){const cycle=findCycle(dependencies),cycleResources={};for(const logicalId of cycle)cycleResources[logicalId]=template.Resources?.[logicalId];throw new Error(`Template is undeployable, these resources have a dependency cycle: ${cycle.join(" -> ")}:

${JSON.stringify(cycleResources,void 0,2)}`)}for(const[logicalId,_]of free){for(const deps of dependencies.values())deps.delete(logicalId);dependencies.delete(logicalId)}}}exports.checkTemplateForCyclicDependencies=checkTemplateForCyclicDependencies;function findResourceDependencies(res){return new Set([...toArray(res.DependsOn??[]),...findExpressionDependencies(res.Properties)])}function toArray(x){return Array.isArray(x)?x:[x]}function findExpressionDependencies(obj){const ret=new Set;return recurse(obj),ret;function recurse(x){if(x&&(Array.isArray(x)&&x.forEach(recurse),typeof x=="object")){const keys=Object.keys(x);if(keys.length===1&&keys[0]==="Ref")ret.add(x[keys[0]]);else if(keys.length===1&&keys[0]==="Fn::GetAtt")ret.add(x[keys[0]][0]);else if(keys.length===1&&keys[0]==="Fn::Sub"){const argument=x[keys[0]],pattern=Array.isArray(argument)?argument[0]:argument;if(typeof pattern=="string")for(const logId of logicalIdsInSubString(pattern))ret.add(logId);const contextDict=Array.isArray(argument)?argument[1]:void 0;contextDict&&typeof contextDict=="object"&&Object.values(contextDict).forEach(recurse)}else Object.values(x).forEach(recurse)}}}function logicalIdsInSubString(x){return analyzeSubPattern(x).flatMap(fragment=>{switch(fragment.type){case"getatt":case"ref":return[fragment.logicalId];case"literal":return[]}})}function analyzeSubPattern(pattern){const ret=[];let start=0,ph0=pattern.indexOf("${",start);for(;ph0>-1;){if(pattern[ph0+2]==="!"){start=ph0+3,ph0=pattern.indexOf("${",start);continue}const ph1=pattern.indexOf("}",ph0+2);if(ph1===-1)break;const placeholder=pattern.substring(ph0+2,ph1);if(ph0>start&&ret.push({type:"literal",content:pattern.substring(start,ph0)}),placeholder.includes(".")){const[logicalId,attr]=placeholder.split(".");ret.push({type:"getatt",logicalId,attr})}else ret.push({type:"ref",logicalId:placeholder});start=ph1+1,ph0=pattern.indexOf("${",start)}return start<pattern.length-1&&ret.push({type:"literal",content:pattern.slice(start)}),ret}function intersect(xs,ys){return new Set(Array.from(xs).filter(x=>ys.has(x)))}function findCycle(deps){for(const node of deps.keys()){const cycle=recurse(node,[node]);if(cycle)return cycle}throw new Error("No cycle found. Assertion failure!");function recurse(node,path){for(const dep of deps.get(node)??[]){if(path.includes(dep))return[...path,dep];const cycle=recurse(dep,[...path,dep]);if(cycle)return cycle}}}