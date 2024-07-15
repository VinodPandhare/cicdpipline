"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Policy=exports.Filter=exports.FilterOrPolicy=exports.FilterOrPolicyType=exports.SubscriptionProtocol=exports.Subscription=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var sns_generated_1=()=>{var tmp=require("./sns.generated");return sns_generated_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class Subscription extends core_1().Resource{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_SubscriptionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Subscription),error}if(props.rawMessageDelivery&&[SubscriptionProtocol.HTTP,SubscriptionProtocol.HTTPS,SubscriptionProtocol.SQS,SubscriptionProtocol.FIREHOSE].indexOf(props.protocol)<0)throw new Error("Raw message delivery can only be enabled for HTTP, HTTPS, SQS, and Firehose subscriptions.");if(props.filterPolicy){if(Object.keys(props.filterPolicy).length>5)throw new Error("A filter policy can have a maximum of 5 attribute names.");this.filterPolicy=Object.entries(props.filterPolicy).reduce((acc,[k,v])=>({...acc,[k]:v.conditions}),{});let total=1;if(Object.values(this.filterPolicy).forEach(filter=>{total*=filter.length}),total>150)throw new Error(`The total combination of values (${total}) must not exceed 150.`)}else if(props.filterPolicyWithMessageBody){if(Object.keys(props.filterPolicyWithMessageBody).length>5)throw new Error("A filter policy can have a maximum of 5 attribute names.");this.filterPolicyWithMessageBody=props.filterPolicyWithMessageBody}if(props.protocol===SubscriptionProtocol.FIREHOSE&&!props.subscriptionRoleArn)throw new Error("Subscription role arn is required field for subscriptions with a firehose protocol.");const filterPolicy=this.filterPolicyWithMessageBody?buildFilterPolicyWithMessageBody(this.filterPolicyWithMessageBody):this.filterPolicy;this.deadLetterQueue=this.buildDeadLetterQueue(props),new(sns_generated_1()).CfnSubscription(this,"Resource",{endpoint:props.endpoint,protocol:props.protocol,topicArn:props.topic.topicArn,rawMessageDelivery:props.rawMessageDelivery,filterPolicy,filterPolicyScope:this.filterPolicyWithMessageBody?"MessageBody":void 0,region:props.region,redrivePolicy:this.buildDeadLetterConfig(this.deadLetterQueue),subscriptionRoleArn:props.subscriptionRoleArn})}buildDeadLetterQueue(props){if(!props.deadLetterQueue)return;const deadLetterQueue=props.deadLetterQueue;return deadLetterQueue.addToResourcePolicy(new(aws_iam_1()).PolicyStatement({resources:[deadLetterQueue.queueArn],actions:["sqs:SendMessage"],principals:[new(aws_iam_1()).ServicePrincipal("sns.amazonaws.com")],conditions:{ArnEquals:{"aws:SourceArn":props.topic.topicArn}}})),deadLetterQueue}buildDeadLetterConfig(deadLetterQueue){if(deadLetterQueue)return{deadLetterTargetArn:deadLetterQueue.queueArn}}}exports.Subscription=Subscription,_a=JSII_RTTI_SYMBOL_1,Subscription[_a]={fqn:"aws-cdk-lib.aws_sns.Subscription",version:"2.149.0"};var SubscriptionProtocol;(function(SubscriptionProtocol2){SubscriptionProtocol2.HTTP="http",SubscriptionProtocol2.HTTPS="https",SubscriptionProtocol2.EMAIL="email",SubscriptionProtocol2.EMAIL_JSON="email-json",SubscriptionProtocol2.SMS="sms",SubscriptionProtocol2.SQS="sqs",SubscriptionProtocol2.APPLICATION="application",SubscriptionProtocol2.LAMBDA="lambda",SubscriptionProtocol2.FIREHOSE="firehose"})(SubscriptionProtocol||(exports.SubscriptionProtocol=SubscriptionProtocol={}));function buildFilterPolicyWithMessageBody(inputObject,depth=1,totalCombinationValues=[1]){const result={};for(const[key,filterOrPolicy]of Object.entries(inputObject))if(filterOrPolicy.isPolicy())result[key]=buildFilterPolicyWithMessageBody(filterOrPolicy.policyDoc,depth+1,totalCombinationValues);else if(filterOrPolicy.isFilter()){const filter=filterOrPolicy.filterDoc.conditions;result[key]=filter,totalCombinationValues[0]*=filter.length*depth}if(totalCombinationValues[0]>150)throw new Error(`The total combination of values (${totalCombinationValues}) must not exceed 150.`);return result}var FilterOrPolicyType;(function(FilterOrPolicyType2){FilterOrPolicyType2[FilterOrPolicyType2.FILTER=0]="FILTER",FilterOrPolicyType2[FilterOrPolicyType2.POLICY=1]="POLICY"})(FilterOrPolicyType||(exports.FilterOrPolicyType=FilterOrPolicyType={}));class FilterOrPolicy{static filter(filter){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_SubscriptionFilter(filter)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.filter),error}return new Filter(filter)}static policy(policy){return new Policy(policy)}isPolicy(){return this.type===FilterOrPolicyType.POLICY}isFilter(){return this.type===FilterOrPolicyType.FILTER}}exports.FilterOrPolicy=FilterOrPolicy,_b=JSII_RTTI_SYMBOL_1,FilterOrPolicy[_b]={fqn:"aws-cdk-lib.aws_sns.FilterOrPolicy",version:"2.149.0"};class Filter extends FilterOrPolicy{constructor(filterDoc){super(),this.filterDoc=filterDoc,this.type=FilterOrPolicyType.FILTER;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_SubscriptionFilter(filterDoc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Filter),error}}}exports.Filter=Filter,_c=JSII_RTTI_SYMBOL_1,Filter[_c]={fqn:"aws-cdk-lib.aws_sns.Filter",version:"2.149.0"};class Policy extends FilterOrPolicy{constructor(policyDoc){super(),this.policyDoc=policyDoc,this.type=FilterOrPolicyType.POLICY}}exports.Policy=Policy,_d=JSII_RTTI_SYMBOL_1,Policy[_d]={fqn:"aws-cdk-lib.aws_sns.Policy",version:"2.149.0"};
