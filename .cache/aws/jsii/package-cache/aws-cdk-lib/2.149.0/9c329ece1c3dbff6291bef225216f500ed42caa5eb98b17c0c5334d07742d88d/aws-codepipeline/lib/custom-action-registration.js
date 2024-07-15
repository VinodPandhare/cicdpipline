"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CustomActionRegistration=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},codepipeline_generated_1=()=>{var tmp=require("./codepipeline.generated");return codepipeline_generated_1=()=>tmp,tmp};class CustomActionRegistration extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_CustomActionRegistrationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CustomActionRegistration),error}new(codepipeline_generated_1()).CfnCustomActionType(this,"Resource",{category:props.category,inputArtifactDetails:{minimumCount:props.artifactBounds.minInputs,maximumCount:props.artifactBounds.maxInputs},outputArtifactDetails:{minimumCount:props.artifactBounds.minOutputs,maximumCount:props.artifactBounds.maxOutputs},provider:props.provider,version:props.version||"1",settings:{entityUrlTemplate:props.entityUrl,executionUrlTemplate:props.executionUrl},configurationProperties:props.actionProperties?.map(ap=>({key:ap.key||!1,secret:ap.secret||!1,...ap}))})}}exports.CustomActionRegistration=CustomActionRegistration,_a=JSII_RTTI_SYMBOL_1,CustomActionRegistration[_a]={fqn:"aws-cdk-lib.aws_codepipeline.CustomActionRegistration",version:"2.149.0"};