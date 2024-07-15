"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ApplicationMultipleTargetGroupsServiceBase=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},aws_certificatemanager_1=()=>{var tmp=require("../../../aws-certificatemanager");return aws_certificatemanager_1=()=>tmp,tmp},aws_ecs_1=()=>{var tmp=require("../../../aws-ecs");return aws_ecs_1=()=>tmp,tmp},aws_elasticloadbalancingv2_1=()=>{var tmp=require("../../../aws-elasticloadbalancingv2");return aws_elasticloadbalancingv2_1=()=>tmp,tmp},aws_route53_1=()=>{var tmp=require("../../../aws-route53");return aws_route53_1=()=>tmp,tmp},aws_route53_targets_1=()=>{var tmp=require("../../../aws-route53-targets");return aws_route53_targets_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};class ApplicationMultipleTargetGroupsServiceBase extends constructs_1().Construct{constructor(scope,id,props={}){super(scope,id),this.listeners=new Array,this.targetGroups=new Array,this.loadBalancers=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_patterns_ApplicationMultipleTargetGroupsServiceBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ApplicationMultipleTargetGroupsServiceBase),error}if(this.validateInput(props),this.cluster=props.cluster||this.getDefaultCluster(this,props.vpc),this.desiredCount=props.desiredCount||1,this.internalDesiredCount=props.desiredCount,props.taskImageOptions&&(this.logDriver=this.createLogDriver(props.taskImageOptions.enableLogging,props.taskImageOptions.logDriver)),props.loadBalancers){this.validateLbProps(props.loadBalancers);for(const lbProps of props.loadBalancers){const lb=this.createLoadBalancer(lbProps.name,lbProps.publicLoadBalancer,lbProps.idleTimeout);this.loadBalancers.push(lb);const protocolType=new Set;for(const listenerProps of lbProps.listeners){const protocol=this.createListenerProtocol(listenerProps.protocol,listenerProps.certificate);if(listenerProps.certificate!==void 0&&protocol!==void 0&&protocol!==aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS)throw new Error("The HTTPS protocol must be used when a certificate is given");protocolType.add(protocol);const listener=this.configListener(protocol,{certificate:listenerProps.certificate,domainName:lbProps.domainName,domainZone:lbProps.domainZone,listenerName:listenerProps.name,loadBalancer:lb,port:listenerProps.port,sslPolicy:listenerProps.sslPolicy});this.listeners.push(listener)}const domainName=this.createDomainName(lb,lbProps.domainName,lbProps.domainZone);new(core_1()).CfnOutput(this,`LoadBalancerDNS${lb.node.id}`,{value:lb.loadBalancerDnsName});for(const protocol of protocolType)new(core_1()).CfnOutput(this,`ServiceURL${lb.node.id}${protocol.toLowerCase()}`,{value:protocol.toLowerCase()+"://"+domainName})}this.loadBalancer=this.loadBalancers[0],this.listener=this.listeners[0]}else{this.loadBalancer=this.createLoadBalancer("LB");const protocol=this.createListenerProtocol();this.listener=this.configListener(protocol,{listenerName:"PublicListener",loadBalancer:this.loadBalancer});const domainName=this.createDomainName(this.loadBalancer);new(core_1()).CfnOutput(this,"LoadBalancerDNS",{value:this.loadBalancer.loadBalancerDnsName}),new(core_1()).CfnOutput(this,"ServiceURL",{value:protocol.toLowerCase()+"://"+domainName})}}getDefaultCluster(scope,vpc){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_IVpc(vpc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getDefaultCluster),error}const DEFAULT_CLUSTER_ID=`EcsDefaultClusterMnL3mNNYN${vpc?vpc.node.id:""}`,stack=core_1().Stack.of(scope);return stack.node.tryFindChild(DEFAULT_CLUSTER_ID)||new(aws_ecs_1()).Cluster(stack,DEFAULT_CLUSTER_ID,{vpc})}createAWSLogDriver(prefix){return new(aws_ecs_1()).AwsLogDriver({streamPrefix:prefix})}findListener(name){if(!name)return this.listener;for(const listener of this.listeners)if(listener.node.id===name)return listener;throw new Error(`Listener ${name} is not defined. Did you define listener with name ${name}?`)}registerECSTargets(service,container,targets){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_BaseService(service),jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ContainerDefinition(container)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerECSTargets),error}for(const targetProps of targets){const conditions=[];targetProps.hostHeader&&conditions.push(aws_elasticloadbalancingv2_1().ListenerCondition.hostHeaders([targetProps.hostHeader])),targetProps.pathPattern&&conditions.push(aws_elasticloadbalancingv2_1().ListenerCondition.pathPatterns([targetProps.pathPattern]));const targetGroup=this.findListener(targetProps.listener).addTargets(`ECSTargetGroup${container.containerName}${targetProps.containerPort}`,{port:80,targets:[service.loadBalancerTarget({containerName:container.containerName,containerPort:targetProps.containerPort,protocol:targetProps.protocol})],conditions,priority:targetProps.priority});this.targetGroups.push(targetGroup)}if(this.targetGroups.length===0)throw new Error("At least one target group should be specified.");return this.targetGroups[0]}addPortMappingForTargets(container,targets){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ContainerDefinition(container)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addPortMappingForTargets),error}for(const target of targets)container.findPortMapping(target.containerPort,target.protocol||aws_ecs_1().Protocol.TCP)||container.addPortMappings({containerPort:target.containerPort,protocol:target.protocol})}createLogDriver(enableLoggingProp,logDriverProp){return logDriverProp??(enableLoggingProp??!0?this.createAWSLogDriver(this.node.id):void 0)}configListener(protocol,props){const listener=this.createListener(props,protocol);let certificate;return protocol===aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS?certificate=this.createListenerCertificate(props.listenerName,props.certificate,props.domainName,props.domainZone):certificate=void 0,certificate!==void 0&&listener.addCertificates(`Arns${props.listenerName}`,[aws_elasticloadbalancingv2_1().ListenerCertificate.fromArn(certificate.certificateArn)]),listener}validateInput(props){if(props.cluster&&props.vpc)throw new Error("You can only specify either vpc or cluster. Alternatively, you can leave both blank");if(props.desiredCount!==void 0&&props.desiredCount<1)throw new Error("You must specify a desiredCount greater than 0");if(props.loadBalancers){if(props.loadBalancers.length===0)throw new Error("At least one load balancer must be specified");for(const lbProps of props.loadBalancers)if(lbProps.listeners.length===0)throw new Error("At least one listener must be specified")}}validateLbProps(props){for(let prop of props)if(prop.idleTimeout){const idleTimeout=prop.idleTimeout.toSeconds();if(idleTimeout>core_1().Duration.seconds(4e3).toSeconds()||idleTimeout<core_1().Duration.seconds(1).toSeconds())throw new Error("Load balancer idle timeout must be between 1 and 4000 seconds.")}}createLoadBalancer(name,publicLoadBalancer,idleTimeout){const internetFacing=publicLoadBalancer??!0,lbProps={vpc:this.cluster.vpc,internetFacing,idleTimeout,loadBalancerName:name};return new(aws_elasticloadbalancingv2_1()).ApplicationLoadBalancer(this,name,lbProps)}createListenerProtocol(listenerProtocol,certificate){return listenerProtocol??(certificate?aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTPS:aws_elasticloadbalancingv2_1().ApplicationProtocol.HTTP)}createListenerCertificate(listenerName,certificate,domainName,domainZone){if(typeof domainName>"u"||typeof domainZone>"u")throw new Error("A domain name and zone is required when using the HTTPS protocol");return certificate!==void 0?certificate:new(aws_certificatemanager_1()).Certificate(this,`Certificate${listenerName}`,{domainName,validation:aws_certificatemanager_1().CertificateValidation.fromDns(domainZone)})}createListener({loadBalancer,listenerName,port,sslPolicy},protocol){return loadBalancer.addListener(listenerName,{protocol,open:!0,port,sslPolicy})}createDomainName(loadBalancer,name,zone){let domainName=loadBalancer.loadBalancerDnsName;if(typeof name<"u"){if(typeof zone>"u")throw new Error("A Route53 hosted domain zone name is required to configure the specified domain name");domainName=new(aws_route53_1()).ARecord(this,`DNS${loadBalancer.node.id}`,{zone,recordName:name,target:aws_route53_1().RecordTarget.fromAlias(new(aws_route53_targets_1()).LoadBalancerTarget(loadBalancer))}).domainName}return domainName}}exports.ApplicationMultipleTargetGroupsServiceBase=ApplicationMultipleTargetGroupsServiceBase,_a=JSII_RTTI_SYMBOL_1,ApplicationMultipleTargetGroupsServiceBase[_a]={fqn:"aws-cdk-lib.aws_ecs_patterns.ApplicationMultipleTargetGroupsServiceBase",version:"2.149.0"};
