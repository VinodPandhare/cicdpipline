"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SqsDestination=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},s3=()=>{var tmp=require("../../aws-s3");return s3=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class SqsDestination{constructor(queue){this.queue=queue;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sqs_IQueue(queue)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SqsDestination),error}}bind(_scope,bucket){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}if(this.queue.grantSendMessages(new(iam()).ServicePrincipal("s3.amazonaws.com",{conditions:{ArnLike:{"aws:SourceArn":bucket.bucketArn}}})),this.queue.encryptionMasterKey){const statement=new(iam()).PolicyStatement({principals:[new(iam()).ServicePrincipal("s3.amazonaws.com")],actions:["kms:GenerateDataKey*","kms:Decrypt"],resources:["*"]});this.queue.encryptionMasterKey.addToResourcePolicy(statement,!0).statementAdded||core_1().Annotations.of(this.queue.encryptionMasterKey).addWarningV2("@aws-cdk/aws-s3-notifications:sqsKMSPermissionsNotAdded",`Can not change key policy of imported kms key. Ensure that your key policy contains the following permissions: 
${JSON.stringify(statement.toJSON(),null,2)}`)}return{arn:this.queue.queueArn,type:s3().BucketNotificationDestinationType.QUEUE,dependencies:[this.queue]}}}exports.SqsDestination=SqsDestination,_a=JSII_RTTI_SYMBOL_1,SqsDestination[_a]={fqn:"aws-cdk-lib.aws_s3_notifications.SqsDestination",version:"2.149.0"};
