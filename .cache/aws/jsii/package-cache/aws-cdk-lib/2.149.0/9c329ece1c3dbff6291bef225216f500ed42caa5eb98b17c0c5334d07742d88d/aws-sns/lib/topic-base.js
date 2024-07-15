"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TopicBase=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var policy_1=()=>{var tmp=require("./policy");return policy_1=()=>tmp,tmp},subscription_1=()=>{var tmp=require("./subscription");return subscription_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class TopicBase extends core_1().Resource{constructor(scope,id,props={}){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_ResourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,TopicBase),error}this.node.addValidation({validate:()=>this.policy?.document.validateForResourcePolicy()??[]})}addSubscription(topicSubscription){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_ITopicSubscription(topicSubscription)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addSubscription),error}const subscriptionConfig=topicSubscription.bind(this),scope=subscriptionConfig.subscriberScope||this;let id=subscriptionConfig.subscriberId;if(core_1().Token.isUnresolved(subscriptionConfig.subscriberId)&&(id=this.nextTokenId(scope)),scope.node.tryFindChild(id))throw new Error(`A subscription with id "${id}" already exists under the scope ${scope.node.path}`);const subscription=new(subscription_1()).Subscription(scope,id,{topic:this,...subscriptionConfig});return subscriptionConfig.subscriptionDependency&&subscription.node.addDependency(subscriptionConfig.subscriptionDependency),subscription}addToResourcePolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToResourcePolicy),error}return!this.policy&&this.autoCreatePolicy&&(this.policy=new(policy_1()).TopicPolicy(this,"Policy",{topics:[this]})),this.policy?(this.policy.document.addStatements(statement),this.enforceSSL&&this.policy.document.addStatements(this.createSSLPolicyDocument()),{statementAdded:!0,policyDependable:this.policy}):{statementAdded:!1}}createSSLPolicyDocument(){return new(iam()).PolicyStatement({sid:"AllowPublishThroughSSLOnly",actions:["sns:Publish"],effect:iam().Effect.DENY,resources:[this.topicArn],conditions:{Bool:{"aws:SecureTransport":"false"}},principals:[new(iam()).StarPrincipal]})}grantPublish(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantPublish),error}return iam().Grant.addToPrincipalOrResource({grantee,actions:["sns:Publish"],resourceArns:[this.topicArn],resource:this})}grantSubscribe(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantSubscribe),error}return iam().Grant.addToPrincipalOrResource({grantee,actions:["sns:Subscribe"],resourceArns:[this.topicArn],resource:this})}bindAsNotificationRuleTarget(_scope){return this.grantPublish(new(iam()).ServicePrincipal("codestar-notifications.amazonaws.com")),{targetType:"SNS",targetAddress:this.topicArn}}nextTokenId(scope){let nextSuffix=1;const re=/TokenSubscription:([\d]*)/gm;for(const source of scope.node.findAll()){const m=re.exec(source.node.id);if(m!==null){const matchSuffix=parseInt(m[1],10);matchSuffix>=nextSuffix&&(nextSuffix=matchSuffix+1)}}return`TokenSubscription:${nextSuffix}`}}exports.TopicBase=TopicBase,_a=JSII_RTTI_SYMBOL_1,TopicBase[_a]={fqn:"aws-cdk-lib.aws_sns.TopicBase",version:"2.149.0"};
