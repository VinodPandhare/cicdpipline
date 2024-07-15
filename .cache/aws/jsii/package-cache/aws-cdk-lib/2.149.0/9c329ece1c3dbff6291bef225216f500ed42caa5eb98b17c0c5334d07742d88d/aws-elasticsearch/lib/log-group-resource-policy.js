"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LogGroupResourcePolicy=void 0;var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},cr=()=>{var tmp=require("../../custom-resources");return cr=()=>tmp,tmp};class LogGroupResourcePolicy extends cr().AwsCustomResource{constructor(scope,id,props){const policyDocument=new(iam()).PolicyDocument({statements:props.policyStatements});super(scope,id,{resourceType:"Custom::CloudwatchLogResourcePolicy",onUpdate:{service:"CloudWatchLogs",action:"putResourcePolicy",parameters:{policyName:props.policyName,policyDocument:JSON.stringify(policyDocument)},physicalResourceId:cr().PhysicalResourceId.of(id)},onDelete:{service:"CloudWatchLogs",action:"deleteResourcePolicy",parameters:{policyName:props.policyName},ignoreErrorCodesMatching:"ResourceNotFoundException"},policy:cr().AwsCustomResourcePolicy.fromSdkCalls({resources:["*"]})})}}exports.LogGroupResourcePolicy=LogGroupResourcePolicy;