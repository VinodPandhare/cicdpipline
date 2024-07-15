"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BucketNotifications=void 0;var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},notifications_resource_handler_1=()=>{var tmp=require("./notifications-resource-handler");return notifications_resource_handler_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},bucket_1=()=>{var tmp=require("../bucket");return bucket_1=()=>tmp,tmp},destination_1=()=>{var tmp=require("../destination");return destination_1=()=>tmp,tmp};class BucketNotifications extends constructs_1().Construct{constructor(scope,id,props){super(scope,id),this.eventBridgeEnabled=!1,this.lambdaNotifications=new Array,this.queueNotifications=new Array,this.topicNotifications=new Array,this.bucket=props.bucket,this.handlerRole=props.handlerRole}addNotification(event,target,...filters){const resource=this.createResourceOnce(),targetProps=target.bind(this,this.bucket),commonConfig={Events:[event],Filter:renderFilters(filters)};switch(targetProps.dependencies&&resource.node.addDependency(...targetProps.dependencies),targetProps.type){case destination_1().BucketNotificationDestinationType.LAMBDA:this.lambdaNotifications.push({...commonConfig,LambdaFunctionArn:targetProps.arn});break;case destination_1().BucketNotificationDestinationType.QUEUE:this.queueNotifications.push({...commonConfig,QueueArn:targetProps.arn});break;case destination_1().BucketNotificationDestinationType.TOPIC:this.topicNotifications.push({...commonConfig,TopicArn:targetProps.arn});break;default:throw new Error("Unsupported notification target type:"+destination_1().BucketNotificationDestinationType[targetProps.type])}}enableEventBridgeNotification(){this.createResourceOnce(),this.eventBridgeEnabled=!0}renderNotificationConfiguration(){return{EventBridgeConfiguration:this.eventBridgeEnabled?{}:void 0,LambdaFunctionConfigurations:this.lambdaNotifications.length>0?this.lambdaNotifications:void 0,QueueConfigurations:this.queueNotifications.length>0?this.queueNotifications:void 0,TopicConfigurations:this.topicNotifications.length>0?this.topicNotifications:void 0}}createResourceOnce(){if(!this.resource){const handler=notifications_resource_handler_1().NotificationsResourceHandler.singleton(this,{role:this.handlerRole}),managed=this.bucket instanceof bucket_1().Bucket;managed||handler.addToRolePolicy(new(iam()).PolicyStatement({actions:["s3:GetBucketNotification"],resources:["*"]})),this.resource=new(cdk()).CfnResource(this,"Resource",{type:"Custom::S3BucketNotifications",properties:{ServiceToken:handler.functionArn,BucketName:this.bucket.bucketName,NotificationConfiguration:cdk().Lazy.any({produce:()=>this.renderNotificationConfiguration()}),Managed:managed}});const bucket=this.bucket,resource=this.resource;cdk().Aspects.of(this).add({visit(node){node===resource&&bucket.policy&&node.node.addDependency(bucket.policy)}})}return this.resource}}exports.BucketNotifications=BucketNotifications;function renderFilters(filters){if(!filters||filters.length===0)return;const renderedRules=new Array;let hasPrefix=!1,hasSuffix=!1;for(const rule of filters){if(!rule.suffix&&!rule.prefix)throw new Error("NotificationKeyFilter must specify `prefix` and/or `suffix`");if(rule.suffix){if(hasSuffix)throw new Error("Cannot specify more than one suffix rule in a filter.");renderedRules.push({Name:"suffix",Value:rule.suffix}),hasSuffix=!0}if(rule.prefix){if(hasPrefix)throw new Error("Cannot specify more than one prefix rule in a filter.");renderedRules.push({Name:"prefix",Value:rule.prefix}),hasPrefix=!0}}return{Key:{FilterRules:renderedRules}}}
