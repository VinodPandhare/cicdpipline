"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TagOptions=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var util_1=()=>{var tmp=require("./private/util");return util_1=()=>tmp,tmp},validation_1=()=>{var tmp=require("./private/validation");return validation_1=()=>tmp,tmp},servicecatalog_generated_1=()=>{var tmp=require("./servicecatalog.generated");return servicecatalog_generated_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp};class TagOptions extends cdk().Resource{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicecatalog_TagOptionsProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,TagOptions),error}this._cfnTagOptions=this.createUnderlyingTagOptions(props.allowedValuesForTags)}createUnderlyingTagOptions(allowedValuesForTags){if(Object.keys(allowedValuesForTags).length===0)throw new Error(`No tag option keys or values were provided for resource ${this.node.path}`);var tagOptions=[];for(const[tagKey,tagValues]of Object.entries(allowedValuesForTags)){validation_1().InputValidator.validateLength(this.node.addr,"TagOption key",1,128,tagKey);const uniqueTagValues=new Set(tagValues);if(uniqueTagValues.size===0)throw new Error(`No tag option values were provided for tag option key ${tagKey} for resource ${this.node.path}`);uniqueTagValues.forEach(tagValue=>{validation_1().InputValidator.validateLength(this.node.addr,"TagOption value",1,256,tagValue);const tagOptionIdentifier=(0,util_1().hashValues)(tagKey,tagValue),tagOption=new(servicecatalog_generated_1()).CfnTagOption(this,tagOptionIdentifier,{key:tagKey,value:tagValue,active:!0});tagOptions.push(tagOption)})}return tagOptions}}exports.TagOptions=TagOptions,_a=JSII_RTTI_SYMBOL_1,TagOptions[_a]={fqn:"aws-cdk-lib.aws_servicecatalog.TagOptions",version:"2.149.0"};