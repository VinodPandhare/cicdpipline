"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ApplicationLoadBalancedServiceBase=exports.ApplicationLoadBalancedServiceRecordType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},aws_certificatemanager_1=()=>{var tmp=require("../../../aws-certificatemanager");return aws_certificatemanager_1=()=>tmp,tmp},aws_ecs_1=()=>{var tmp=require("../../../aws-ecs");return aws_ecs_1=()=>tmp,tmp},aws_elasticloadbalancingv2_1=()=>{var tmp=require("../../../aws-elasticloadbalancingv2");return aws_elasticloadbalancingv2_1=()=>tmp,tmp},aws_route53_1=()=>{var tmp=require("../../../aws-route53");return aws_route53_1=()=>tmp,tmp},aws_route53_targets_1=()=>{var tmp=require("../../../aws-route53-targets");return aws_route53_targets_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},ApplicationLoadBalancedServiceRecordType;(function(ApplicationLoadBalancedServiceRecordType2){ApplicationLoadBalancedServiceRecordType2[ApplicationLoadBalancedServiceRecordType2.ALIAS=0]="ALIAS",ApplicationLoadBalancedServiceRecordType2[ApplicationLoadBalancedServiceRecordType2.CNAME=1]="CNAME",ApplicationLoadBalancedServiceRecordType2[ApplicationLoadBalancedServiceRecordType2.NONE=2]="NONE"})(ApplicationLoadBalancedServiceRecordType||(exports.ApplicationLoadBalancedServiceRecordType=ApplicationLoadBalancedServiceRecordType={}));class ApplicationLoadBalancedServiceBase extends constructs_1().Construct{get loadBalancer(){if(!this._applicationLoadBalancer)throw new Error(".loadBalancer can only be accessed if the class was constructed with an owned, not imported, load balancer");return this._applicationLoadBalancer}constructor(scope,id,props={}){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_patterns_ApplicationLoadBalancedServiceBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ApplicationLoadBalancedServiceBase),error}if(props.cluster&&props.vpc)throw new Error("You can only specify either vpc or cluster. Alternatively, you can leave both blank");if(this.cluster=props.cluster||this.getDefaultCluster(this,props.vpc),props.desiredCount!==void 0&&!cdk().Token.isUnresolved(props.desiredCount)&&props.desiredCount<1)throw new Error("You must specify a desiredCount greater than 0");this.desiredCount=props.desiredCount||1,this.internalDesiredCount=props.desiredCount;const internetFacing=props.publicLoadBalancer??!0;if(props.idleTimeout){const idleTimeout=props.idleTimeout.toSeconds();if(idleTimeout>core_1().Duration.seconds(4e3).toSeconds()||idleTimeout<core_1().Duration.seconds(1).toSeconds())throw new Error("Load balancer idle timeout must be between 1 and 4000 seconds.")}const lbProps={vpc:this.cluster.vpc,loadBalancerName:props.loadBalancerName,internetFacing,idleTimeout:props.idleTimeout},loadBalancer=props.loadBalancer??new(aws_elasticloadbalancingv2_1()).ApplicationLoadBalancer(this,"LB",lbProps);if(props.certificate!==void 0&&props.protocol!==void 0&&props.protocol!==aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS)throw new Error("The HTTPS protocol must be used when a certificate is given");const protocol=props.protocol??(props.certificate?aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS:aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTP);if(protocol!==aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS&&props.redirectHTTP===!0)throw new Error("The HTTPS protocol must be used when redirecting HTTP traffic");const targetProps={protocol:props.targetProtocol??aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTP,protocolVersion:props.protocolVersion};if(this.listener=loadBalancer.addListener("PublicListener",{protocol,port:props.listenerPort,open:props.openListener??!0,sslPolicy:props.sslPolicy}),this.targetGroup=this.listener.addTargets("ECS",targetProps),protocol===aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS)if(props.certificate!==void 0)this.certificate=props.certificate;else{if(typeof props.domainName>"u"||typeof props.domainZone>"u")throw new Error("A domain name and zone is required when using the HTTPS protocol");this.certificate=new(aws_certificatemanager_1()).Certificate(this,"Certificate",{domainName:props.domainName,validation:aws_certificatemanager_1().CertificateValidation.fromDns(props.domainZone)})}this.certificate!==void 0&&this.listener.addCertificates("Arns",[aws_elasticloadbalancingv2_1().ListenerCertificate.fromCertificateManager(this.certificate)]),props.redirectHTTP&&(this.redirectListener=loadBalancer.addListener("PublicRedirectListener",{protocol:aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTP,port:80,open:props.openListener??!0,defaultAction:aws_elasticloadbalancingv2_1().ListenerAction.redirect({port:props.listenerPort?.toString()||"443",protocol:aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS,permanent:!0})}));let domainName=loadBalancer.loadBalancerDnsName;if(typeof props.domainName<"u"){if(typeof props.domainZone>"u")throw new Error("A Route53 hosted domain zone name is required to configure the specified domain name");switch(props.recordType??ApplicationLoadBalancedServiceRecordType.ALIAS){case ApplicationLoadBalancedServiceRecordType.ALIAS:domainName=new(aws_route53_1()).ARecord(this,"DNS",{zone:props.domainZone,recordName:props.domainName,target:aws_route53_1().RecordTarget.fromAlias(new(aws_route53_targets_1()).LoadBalancerTarget(loadBalancer))}).domainName;break;case ApplicationLoadBalancedServiceRecordType.CNAME:domainName=new(aws_route53_1()).CnameRecord(this,"DNS",{zone:props.domainZone,recordName:props.domainName,domainName:loadBalancer.loadBalancerDnsName}).domainName;break;case ApplicationLoadBalancedServiceRecordType.NONE:break}}loadBalancer instanceof aws_elasticloadbalancingv2_1().ApplicationLoadBalancer&&(this._applicationLoadBalancer=loadBalancer),new(cdk()).CfnOutput(this,"LoadBalancerDNS",{value:loadBalancer.loadBalancerDnsName}),new(cdk()).CfnOutput(this,"ServiceURL",{value:protocol.toLowerCase()+"://"+domainName})}getDefaultCluster(scope,vpc){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_IVpc(vpc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getDefaultCluster),error}const DEFAULT_CLUSTER_ID=`EcsDefaultClusterMnL3mNNYN${vpc?vpc.node.id:""}`,stack=cdk().Stack.of(scope);return stack.node.tryFindChild(DEFAULT_CLUSTER_ID)||new(aws_ecs_1()).Cluster(stack,DEFAULT_CLUSTER_ID,{vpc})}addServiceAsTarget(service){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_BaseService(service)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addServiceAsTarget),error}this.targetGroup.addTarget(service)}createAWSLogDriver(prefix){return new(aws_ecs_1()).AwsLogDriver({streamPrefix:prefix})}}exports.ApplicationLoadBalancedServiceBase=ApplicationLoadBalancedServiceBase,_a=JSII_RTTI_SYMBOL_1,ApplicationLoadBalancedServiceBase[_a]={fqn:"aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedServiceBase",version:"2.149.0"};
