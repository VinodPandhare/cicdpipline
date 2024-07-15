"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isGeneratedWhenNeededMarker=exports.GeneratedWhenNeededMarker=exports.generatePhysicalName=void 0;var crypto=()=>{var tmp=require("crypto");return crypto=()=>tmp,tmp},constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},token_map_1=()=>{var tmp=require("./token-map");return token_map_1=()=>tmp,tmp},names_1=()=>{var tmp=require("../names");return names_1=()=>tmp,tmp},stack_1=()=>{var tmp=require("../stack");return stack_1=()=>tmp,tmp},token_1=()=>{var tmp=require("../token");return token_1=()=>tmp,tmp};function generatePhysicalName(resource){const stack=stack_1().Stack.of(resource),stackPart=new PrefixNamePart(stack.stackName,25),idPart=new SuffixNamePart(names_1().Names.nodeUniqueId(resource.node),24),region=stack.region;if(token_1().Token.isUnresolved(region)||!region)throw new Error(`Cannot generate a physical name for ${constructs_1().Node.of(resource).path}, because the region is un-resolved or missing`);const account=stack.account;if(token_1().Token.isUnresolved(account)||!account)throw new Error(`Cannot generate a physical name for ${constructs_1().Node.of(resource).path}, because the account is un-resolved or missing`);const parts=[stackPart,idPart].map(part=>part.generate()),hash=crypto().createHash("sha256").update(stackPart.bareStr).update(idPart.bareStr).update(region).update(account).digest("hex").slice(0,12);return[...parts,hash].join("").toLowerCase()}exports.generatePhysicalName=generatePhysicalName;class NamePart{constructor(bareStr){this.bareStr=bareStr}}class PrefixNamePart extends NamePart{constructor(bareStr,prefixLength){super(bareStr),this.prefixLength=prefixLength}generate(){return this.bareStr.slice(0,this.prefixLength)}}class SuffixNamePart extends NamePart{constructor(str,suffixLength){super(str),this.suffixLength=suffixLength}generate(){const strLen=this.bareStr.length,startIndex=Math.max(strLen-this.suffixLength,0);return this.bareStr.slice(startIndex,strLen)}}const GENERATE_IF_NEEDED_SYMBOL=Symbol.for("@aws-cdk/core.<private>.GenerateIfNeeded");class GeneratedWhenNeededMarker{constructor(){this.creationStack=[],Object.defineProperty(this,GENERATE_IF_NEEDED_SYMBOL,{value:!0})}resolve(_ctx){throw new Error('Invalid physical name passed to CloudFormation. Use "this.physicalName" instead')}toString(){return"PhysicalName.GENERATE_IF_NEEDED"}}exports.GeneratedWhenNeededMarker=GeneratedWhenNeededMarker;function isGeneratedWhenNeededMarker(val){const token=token_map_1().TokenMap.instance().lookupString(val);return!!token&&GENERATE_IF_NEEDED_SYMBOL in token}exports.isGeneratedWhenNeededMarker=isGeneratedWhenNeededMarker;
