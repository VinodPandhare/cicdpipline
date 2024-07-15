"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Lambda=exports.LambdaInvocationType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},LambdaInvocationType;(function(LambdaInvocationType2){LambdaInvocationType2.EVENT="Event",LambdaInvocationType2.REQUEST_RESPONSE="RequestResponse"})(LambdaInvocationType||(exports.LambdaInvocationType=LambdaInvocationType={}));class Lambda{constructor(props){this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_actions_LambdaProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Lambda),error}}bind(rule){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_IReceiptRule(rule)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const permissionId="AllowSes";this.props.function.permissionsNode.tryFindChild(permissionId)||this.props.function.addPermission(permissionId,{action:"lambda:InvokeFunction",principal:new(iam()).ServicePrincipal("ses.amazonaws.com"),sourceAccount:cdk().Aws.ACCOUNT_ID});const permission=this.props.function.permissionsNode.tryFindChild(permissionId);return permission?rule.node.addDependency(permission):cdk().Annotations.of(rule).addWarningV2("@aws-cdk/aws-ses-actions:lambdaAddInvokePermissions","This rule is using a Lambda action with an imported function. Ensure permission is given to SES to invoke that function."),{lambdaAction:{functionArn:this.props.function.functionArn,invocationType:this.props.invocationType,topicArn:this.props.topic?.topicArn}}}}exports.Lambda=Lambda,_a=JSII_RTTI_SYMBOL_1,Lambda[_a]={fqn:"aws-cdk-lib.aws_ses_actions.Lambda",version:"2.149.0"};
