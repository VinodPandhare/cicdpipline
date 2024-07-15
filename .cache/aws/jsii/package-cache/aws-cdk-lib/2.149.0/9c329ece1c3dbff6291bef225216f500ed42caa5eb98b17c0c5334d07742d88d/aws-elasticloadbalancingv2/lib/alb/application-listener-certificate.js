"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ApplicationListenerCertificate=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},elasticloadbalancingv2_generated_1=()=>{var tmp=require("../elasticloadbalancingv2.generated");return elasticloadbalancingv2_generated_1=()=>tmp,tmp};class ApplicationListenerCertificate extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_ApplicationListenerCertificateProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ApplicationListenerCertificate),error}if(!props.certificateArns&&!props.certificates)throw new Error("At least one of 'certificateArns' or 'certificates' is required");const certificates=[...(props.certificates||[]).map(c=>({certificateArn:c.certificateArn})),...(props.certificateArns||[]).map(certificateArn=>({certificateArn}))];new(elasticloadbalancingv2_generated_1()).CfnListenerCertificate(this,"Resource",{listenerArn:props.listener.listenerArn,certificates})}}exports.ApplicationListenerCertificate=ApplicationListenerCertificate,_a=JSII_RTTI_SYMBOL_1,ApplicationListenerCertificate[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListenerCertificate",version:"2.149.0"};