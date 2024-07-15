"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RealtimeLogConfig=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cloudfront_generated_1=()=>{var tmp=require("./cloudfront.generated");return cloudfront_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class RealtimeLogConfig extends core_1().Resource{constructor(scope,id,props){super(scope,id,{physicalName:props.realtimeLogConfigName??core_1().Lazy.string({produce:()=>core_1().Names.uniqueResourceName(this,{})})});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_RealtimeLogConfigProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,RealtimeLogConfig),error}if(props.samplingRate<1||props.samplingRate>100)throw new Error(`Sampling rate must be between 1 and 100 (inclusive), received ${props.samplingRate}`);const resource=new(cloudfront_generated_1()).CfnRealtimeLogConfig(this,"Resource",{endPoints:props.endPoints.map(endpoint=>endpoint._renderEndpoint(this)),fields:props.fields,name:this.physicalName,samplingRate:props.samplingRate});this.realtimeLogConfigArn=this.getResourceArnAttribute(resource.attrArn,{service:"cloudfront",region:"",resource:"realtime-log-config",resourceName:this.physicalName}),this.realtimeLogConfigName=this.getResourceNameAttribute(resource.ref)}}exports.RealtimeLogConfig=RealtimeLogConfig,_a=JSII_RTTI_SYMBOL_1,RealtimeLogConfig[_a]={fqn:"aws-cdk-lib.aws_cloudfront.RealtimeLogConfig",version:"2.149.0"};
