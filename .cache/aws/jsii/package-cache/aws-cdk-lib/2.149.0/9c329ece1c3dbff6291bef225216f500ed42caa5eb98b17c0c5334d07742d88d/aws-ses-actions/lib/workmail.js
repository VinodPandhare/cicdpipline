"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorkMail=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class WorkMail{constructor(props){this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_actions_WorkMailProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,WorkMail),error}}bind(_rule){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_IReceiptRule(_rule)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{workmailAction:{organizationArn:this.props.organizationArn,topicArn:this.props.topic?.topicArn}}}}exports.WorkMail=WorkMail,_a=JSII_RTTI_SYMBOL_1,WorkMail[_a]={fqn:"aws-cdk-lib.aws_ses_actions.WorkMail",version:"2.149.0"};
