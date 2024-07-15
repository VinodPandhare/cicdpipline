"use strict";var _a,_b,_c,_d,_e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClientAttributes=exports.DateTimeAttribute=exports.BooleanAttribute=exports.NumberAttribute=exports.StringAttribute=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var attr_names_1=()=>{var tmp=require("./private/attr-names");return attr_names_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class StringAttribute{constructor(props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_StringAttributeProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,StringAttribute),error}if(props.minLen&&!core_1().Token.isUnresolved(props.minLen)&&props.minLen<0)throw new Error(`minLen cannot be less than 0 (value: ${props.minLen}).`);if(props.maxLen&&!core_1().Token.isUnresolved(props.maxLen)&&props.maxLen>2048)throw new Error(`maxLen cannot be greater than 2048 (value: ${props.maxLen}).`);this.minLen=props?.minLen,this.maxLen=props?.maxLen,this.mutable=props?.mutable}bind(){let stringConstraints;return(this.minLen||this.maxLen)&&(stringConstraints={minLen:this.minLen,maxLen:this.maxLen}),{dataType:"String",stringConstraints,mutable:this.mutable}}}exports.StringAttribute=StringAttribute,_a=JSII_RTTI_SYMBOL_1,StringAttribute[_a]={fqn:"aws-cdk-lib.aws_cognito.StringAttribute",version:"2.149.0"};class NumberAttribute{constructor(props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_NumberAttributeProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,NumberAttribute),error}this.min=props?.min,this.max=props?.max,this.mutable=props?.mutable}bind(){let numberConstraints;return(this.min||this.max)&&(numberConstraints={min:this.min,max:this.max}),{dataType:"Number",numberConstraints,mutable:this.mutable}}}exports.NumberAttribute=NumberAttribute,_b=JSII_RTTI_SYMBOL_1,NumberAttribute[_b]={fqn:"aws-cdk-lib.aws_cognito.NumberAttribute",version:"2.149.0"};class BooleanAttribute{constructor(props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_CustomAttributeProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BooleanAttribute),error}this.mutable=props?.mutable}bind(){return{dataType:"Boolean",mutable:this.mutable}}}exports.BooleanAttribute=BooleanAttribute,_c=JSII_RTTI_SYMBOL_1,BooleanAttribute[_c]={fqn:"aws-cdk-lib.aws_cognito.BooleanAttribute",version:"2.149.0"};class DateTimeAttribute{constructor(props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_CustomAttributeProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,DateTimeAttribute),error}this.mutable=props?.mutable}bind(){return{dataType:"DateTime",mutable:this.mutable}}}exports.DateTimeAttribute=DateTimeAttribute,_d=JSII_RTTI_SYMBOL_1,DateTimeAttribute[_d]={fqn:"aws-cdk-lib.aws_cognito.DateTimeAttribute",version:"2.149.0"};class ClientAttributes{constructor(){this.attributesSet=new Set}withStandardAttributes(attributes){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_StandardAttributesMask(attributes)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.withStandardAttributes),error}let attributesSet=new Set(this.attributesSet);for(const attributeKey in attr_names_1().StandardAttributeNames)if(attributes[attributeKey]===!0){const attributeName=attr_names_1().StandardAttributeNames[attributeKey];attributesSet.add(attributeName)}let aux=new ClientAttributes;return aux.attributesSet=attributesSet,aux}withCustomAttributes(...attributes){let attributesSet=new Set(this.attributesSet);for(let attribute of attributes)attribute.startsWith("custom:")||(attribute="custom:"+attribute),attributesSet.add(attribute);let aux=new ClientAttributes;return aux.attributesSet=attributesSet,aux}attributes(){return Array.from(this.attributesSet).sort()}}exports.ClientAttributes=ClientAttributes,_e=JSII_RTTI_SYMBOL_1,ClientAttributes[_e]={fqn:"aws-cdk-lib.aws_cognito.ClientAttributes",version:"2.149.0"};
