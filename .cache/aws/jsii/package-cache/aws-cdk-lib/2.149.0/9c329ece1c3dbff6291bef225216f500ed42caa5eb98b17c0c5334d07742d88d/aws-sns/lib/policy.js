"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TopicPolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var sns_generated_1=()=>{var tmp=require("./sns.generated");return sns_generated_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class TopicPolicy extends core_1().Resource{constructor(scope,id,props){super(scope,id),this.document=new(aws_iam_1()).PolicyDocument({assignSids:!0});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_TopicPolicyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,TopicPolicy),error}this.document=props.policyDocument??this.document,props.enforceSSL&&props.topics.map(t=>this.document.addStatements(this.createSSLPolicyDocument(t.topicArn))),new(sns_generated_1()).CfnTopicPolicy(this,"Resource",{policyDocument:this.document,topics:props.topics.map(t=>t.topicArn)})}createSSLPolicyDocument(topicArn){return new(aws_iam_1()).PolicyStatement({sid:"AllowPublishThroughSSLOnly",actions:["sns:Publish"],effect:aws_iam_1().Effect.DENY,resources:[topicArn],conditions:{Bool:{"aws:SecureTransport":"false"}},principals:[new(aws_iam_1()).StarPrincipal]})}}exports.TopicPolicy=TopicPolicy,_a=JSII_RTTI_SYMBOL_1,TopicPolicy[_a]={fqn:"aws-cdk-lib.aws_sns.TopicPolicy",version:"2.149.0"};
