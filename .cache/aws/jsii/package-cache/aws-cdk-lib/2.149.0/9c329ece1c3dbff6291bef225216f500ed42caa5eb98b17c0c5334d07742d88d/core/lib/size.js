"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SizeRoundingBehavior=exports.Size=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var token_1=()=>{var tmp=require("./token");return token_1=()=>tmp,tmp};class Size{static bytes(amount){return new Size(amount,StorageUnit.Bytes)}static kibibytes(amount){return new Size(amount,StorageUnit.Kibibytes)}static mebibytes(amount){return new Size(amount,StorageUnit.Mebibytes)}static gibibytes(amount){return new Size(amount,StorageUnit.Gibibytes)}static tebibytes(amount){return new Size(amount,StorageUnit.Tebibytes)}static pebibyte(amount){return Size.pebibytes(amount)}static pebibytes(amount){return new Size(amount,StorageUnit.Pebibytes)}constructor(amount,unit){if(!token_1().Token.isUnresolved(amount)&&amount<0)throw new Error(`Storage amounts cannot be negative. Received: ${amount}`);this.amount=amount,this.unit=unit}toBytes(opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_SizeConversionOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.toBytes),error}return convert(this.amount,this.unit,StorageUnit.Bytes,opts)}toKibibytes(opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_SizeConversionOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.toKibibytes),error}return convert(this.amount,this.unit,StorageUnit.Kibibytes,opts)}toMebibytes(opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_SizeConversionOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.toMebibytes),error}return convert(this.amount,this.unit,StorageUnit.Mebibytes,opts)}toGibibytes(opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_SizeConversionOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.toGibibytes),error}return convert(this.amount,this.unit,StorageUnit.Gibibytes,opts)}toTebibytes(opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_SizeConversionOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.toTebibytes),error}return convert(this.amount,this.unit,StorageUnit.Tebibytes,opts)}toPebibytes(opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_SizeConversionOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.toPebibytes),error}return convert(this.amount,this.unit,StorageUnit.Pebibytes,opts)}isUnresolved(){return token_1().Token.isUnresolved(this.amount)}}exports.Size=Size,_a=JSII_RTTI_SYMBOL_1,Size[_a]={fqn:"aws-cdk-lib.Size",version:"2.149.0"};var SizeRoundingBehavior;(function(SizeRoundingBehavior2){SizeRoundingBehavior2[SizeRoundingBehavior2.FAIL=0]="FAIL",SizeRoundingBehavior2[SizeRoundingBehavior2.FLOOR=1]="FLOOR",SizeRoundingBehavior2[SizeRoundingBehavior2.NONE=2]="NONE"})(SizeRoundingBehavior||(exports.SizeRoundingBehavior=SizeRoundingBehavior={}));class StorageUnit{constructor(label,inBytes){this.label=label,this.inBytes=inBytes}toString(){return this.label}}StorageUnit.Bytes=new StorageUnit("bytes",1),StorageUnit.Kibibytes=new StorageUnit("kibibytes",1024),StorageUnit.Mebibytes=new StorageUnit("mebibytes",1024*1024),StorageUnit.Gibibytes=new StorageUnit("gibibytes",1024*1024*1024),StorageUnit.Tebibytes=new StorageUnit("tebibytes",1024*1024*1024*1024),StorageUnit.Pebibytes=new StorageUnit("pebibytes",1024*1024*1024*1024*1024);function convert(amount,fromUnit,toUnit,options={}){const rounding=options.rounding??SizeRoundingBehavior.FAIL;if(fromUnit.inBytes===toUnit.inBytes)return amount;if(token_1().Token.isUnresolved(amount))throw new Error(`Size must be specified as 'Size.${toUnit}()' here since its value comes from a token and cannot be converted (got Size.${fromUnit})`);const multiplier=fromUnit.inBytes/toUnit.inBytes,value=amount*multiplier;switch(rounding){case SizeRoundingBehavior.NONE:return value;case SizeRoundingBehavior.FLOOR:return Math.floor(value);default:case SizeRoundingBehavior.FAIL:if(!Number.isInteger(value))throw new Error(`'${amount} ${fromUnit}' cannot be converted into a whole number of ${toUnit}.`);return value}}
