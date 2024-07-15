"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deserialize=exports.serialize=void 0;var yaml=()=>{var tmp=require("yaml");return yaml=()=>tmp,tmp},yaml_types=()=>{var tmp=require("yaml/types");return yaml_types=()=>tmp,tmp};function serialize(obj){const oldFold=yaml_types().strOptions.fold.lineWidth;try{return yaml_types().strOptions.fold.lineWidth=0,yaml().stringify(obj,{schema:"yaml-1.1"})}finally{yaml_types().strOptions.fold.lineWidth=oldFold}}exports.serialize=serialize;function deserialize(str){return parseYamlStrWithCfnTags(str)}exports.deserialize=deserialize;function makeTagForCfnIntrinsic(intrinsicName,addFnPrefix){return{identify(value){return typeof value=="string"},tag:`!${intrinsicName}`,resolve:(_doc,cstNode)=>{const ret={};return ret[addFnPrefix?`Fn::${intrinsicName}`:intrinsicName]=parseYamlStrWithCfnTags(cstNode.toString().substring(intrinsicName.length+1)),ret}}}const shortForms=["Base64","Cidr","FindInMap","GetAZs","ImportValue","Join","Sub","Select","Split","Transform","And","Equals","If","Not","Or","GetAtt"].map(name=>makeTagForCfnIntrinsic(name,!0)).concat(makeTagForCfnIntrinsic("Ref",!1),makeTagForCfnIntrinsic("Condition",!1));function parseYamlStrWithCfnTags(text){return yaml().parse(text,{customTags:shortForms,schema:"core"})}