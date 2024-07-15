"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DefaultTokenResolver=exports.StringConcat=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var encoding_1=()=>{var tmp=require("./private/encoding");return encoding_1=()=>tmp,tmp},token_map_1=()=>{var tmp=require("./private/token-map");return token_map_1=()=>tmp,tmp};class StringConcat{join(left,right){return left===void 0?right!==void 0?`${right}`:void 0:right===void 0?`${left}`:`${left}${right}`}}exports.StringConcat=StringConcat,_a=JSII_RTTI_SYMBOL_1,StringConcat[_a]={fqn:"aws-cdk-lib.StringConcat",version:"2.149.0"};class DefaultTokenResolver{constructor(concat){this.concat=concat;try{jsiiDeprecationWarnings().aws_cdk_lib_IFragmentConcatenator(concat)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,DefaultTokenResolver),error}}resolveToken(t,context,postProcessor){try{jsiiDeprecationWarnings().aws_cdk_lib_IResolvable(t),jsiiDeprecationWarnings().aws_cdk_lib_IResolveContext(context),jsiiDeprecationWarnings().aws_cdk_lib_IPostProcessor(postProcessor)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.resolveToken),error}try{let resolved=t.resolve(context);return resolved=context.resolve(resolved),resolved=postProcessor.postProcess(resolved,context),resolved}catch(e){let message=`Resolution error: ${e.message}.`;throw t.creationStack&&t.creationStack.length>0&&(message+=`
Object creation stack:
  at ${t.creationStack.join(`
  at `)}`),e.message=message,e}}resolveString(fragments,context){try{jsiiDeprecationWarnings().aws_cdk_lib_TokenizedStringFragments(fragments),jsiiDeprecationWarnings().aws_cdk_lib_IResolveContext(context)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.resolveString),error}return fragments.mapTokens({mapToken:context.resolve}).join(this.concat)}resolveList(xs,context){try{jsiiDeprecationWarnings().aws_cdk_lib_IResolveContext(context)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.resolveList),error}if(xs.length!==1)throw new Error(`Cannot add elements to list token, got: ${xs}`);const str=encoding_1().TokenString.forListToken(xs[0]),tokenMap=token_map_1().TokenMap.instance(),fragments=str.split(tokenMap.lookupToken.bind(tokenMap));if(fragments.length!==1)throw new Error(`Cannot concatenate strings in a tokenized string array, got: ${xs[0]}`);return fragments.mapTokens({mapToken:context.resolve}).firstValue}}exports.DefaultTokenResolver=DefaultTokenResolver,_b=JSII_RTTI_SYMBOL_1,DefaultTokenResolver[_b]={fqn:"aws-cdk-lib.DefaultTokenResolver",version:"2.149.0"};
