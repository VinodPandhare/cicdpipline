"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.NetworkLoadBalancedServiceBase=exports.NetworkLoadBalancedServiceRecordType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},aws_ecs_1=()=>{var tmp=require("../../../aws-ecs");return aws_ecs_1=()=>tmp,tmp},aws_elasticloadbalancingv2_1=()=>{var tmp=require("../../../aws-elasticloadbalancingv2");return aws_elasticloadbalancingv2_1=()=>tmp,tmp},aws_route53_1=()=>{var tmp=require("../../../aws-route53");return aws_route53_1=()=>tmp,tmp},aws_route53_targets_1=()=>{var tmp=require("../../../aws-route53-targets");return aws_route53_targets_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},NetworkLoadBalancedServiceRecordType;(function(NetworkLoadBalancedServiceRecordType2){NetworkLoadBalancedServiceRecordType2[NetworkLoadBalancedServiceRecordType2.ALIAS=0]="ALIAS",NetworkLoadBalancedServiceRecordType2[NetworkLoadBalancedServiceRecordType2.CNAME=1]="CNAME",NetworkLoadBalancedServiceRecordType2[NetworkLoadBalancedServiceRecordType2.NONE=2]="NONE"})(NetworkLoadBalancedServiceRecordType||(exports.NetworkLoadBalancedServiceRecordType=NetworkLoadBalancedServiceRecordType={}));class NetworkLoadBalancedServiceBase extends constructs_1().Construct{get loadBalancer(){if(!this._networkLoadBalancer)throw new Error(".loadBalancer can only be accessed if the class was constructed with an owned, not imported, load balancer");return this._networkLoadBalancer}constructor(scope,id,props={}){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_patterns_NetworkLoadBalancedServiceBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,NetworkLoadBalancedServiceBase),error}if(props.cluster&&props.vpc)throw new Error("You can only specify either vpc or cluster. Alternatively, you can leave both blank");if(this.cluster=props.cluster||this.getDefaultCluster(this,props.vpc),props.desiredCount!==void 0&&props.desiredCount<1)throw new Error("You must specify a desiredCount greater than 0");this.desiredCount=props.desiredCount||1,this.internalDesiredCount=props.desiredCount;const internetFacing=props.publicLoadBalancer??!0,lbProps={vpc:this.cluster.vpc,internetFacing,ipAddressType:props.ipAddressType},loadBalancer=props.loadBalancer??new(aws_elasticloadbalancingv2_1()).NetworkLoadBalancer(this,"LB",lbProps),listenerPort=props.listenerPort??80,targetProps={port:props.taskImageOptions?.containerPort??80};if(this.listener=loadBalancer.addListener("PublicListener",{port:listenerPort}),this.targetGroup=this.listener.addTargets("ECS",targetProps),typeof props.domainName<"u"){if(typeof props.domainZone>"u")throw new Error("A Route53 hosted domain zone name is required to configure the specified domain name");switch(props.recordType??NetworkLoadBalancedServiceRecordType.ALIAS){case NetworkLoadBalancedServiceRecordType.ALIAS:new(aws_route53_1()).ARecord(this,"DNS",{zone:props.domainZone,recordName:props.domainName,target:aws_route53_1().RecordTarget.fromAlias(new(aws_route53_targets_1()).LoadBalancerTarget(loadBalancer))});break;case NetworkLoadBalancedServiceRecordType.CNAME:new(aws_route53_1()).CnameRecord(this,"DNS",{zone:props.domainZone,recordName:props.domainName,domainName:loadBalancer.loadBalancerDnsName});break;case NetworkLoadBalancedServiceRecordType.NONE:break}}loadBalancer instanceof aws_elasticloadbalancingv2_1().NetworkLoadBalancer&&(this._networkLoadBalancer=loadBalancer),props.loadBalancer===void 0&&new(cdk()).CfnOutput(this,"LoadBalancerDNS",{value:this.loadBalancer.loadBalancerDnsName})}getDefaultCluster(scope,vpc){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_IVpc(vpc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getDefaultCluster),error}const DEFAULT_CLUSTER_ID=`EcsDefaultClusterMnL3mNNYN${vpc?vpc.node.id:""}`,stack=cdk().Stack.of(scope);return stack.node.tryFindChild(DEFAULT_CLUSTER_ID)||new(aws_ecs_1()).Cluster(stack,DEFAULT_CLUSTER_ID,{vpc})}addServiceAsTarget(service){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_BaseService(service)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addServiceAsTarget),error}this.targetGroup.addTarget(service)}createAWSLogDriver(prefix){return new(aws_ecs_1()).AwsLogDriver({streamPrefix:prefix})}}exports.NetworkLoadBalancedServiceBase=NetworkLoadBalancedServiceBase,_a=JSII_RTTI_SYMBOL_1,NetworkLoadBalancedServiceBase[_a]={fqn:"aws-cdk-lib.aws_ecs_patterns.NetworkLoadBalancedServiceBase",version:"2.149.0"};
