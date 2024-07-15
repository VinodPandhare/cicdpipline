"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ItemBatcher=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class ItemBatcher{constructor(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_ItemBatcherProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ItemBatcher),error}this.props=props}render(){return{...this.props.maxItemsPerBatch&&{MaxItemsPerBatch:this.props.maxItemsPerBatch},...this.props.maxItemsPerBatchPath&&{MaxItemsPerBatchPath:this.props.maxItemsPerBatchPath},...this.props.maxInputBytesPerBatch&&{MaxInputBytesPerBatch:this.props.maxInputBytesPerBatch},...this.props.maxInputBytesPerBatchPath&&{MaxInputBytesPerBatchPath:this.props.maxInputBytesPerBatchPath},...this.props.batchInput&&{BatchInput:this.props.batchInput}}}validateItemBatcher(){const errors=[];return this.props.maxItemsPerBatch&&this.props.maxItemsPerBatchPath&&errors.push("Provide either `maxItemsPerBatch` or `maxItemsPerBatchPath`, but not both"),this.props.maxInputBytesPerBatch&&this.props.maxInputBytesPerBatchPath&&errors.push("Provide either `maxInputBytesPerBatch` or `maxInputBytesPerBatchPath`, but not both"),!this.props.maxItemsPerBatch&&!this.props.maxItemsPerBatchPath&&!this.props.maxInputBytesPerBatch&&!this.props.maxInputBytesPerBatchPath&&!this.props.batchInput&&errors.push("Provide at least one value to the ItemBatcher"),errors}}exports.ItemBatcher=ItemBatcher,_a=JSII_RTTI_SYMBOL_1,ItemBatcher[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.ItemBatcher",version:"2.149.0"};
