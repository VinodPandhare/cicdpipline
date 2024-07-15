"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HealthCheckType=exports.RoutingPolicy=exports.DnsRecordType=exports.DiscoveryType=exports.Service=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var alias_target_instance_1=()=>{var tmp=require("./alias-target-instance");return alias_target_instance_1=()=>tmp,tmp},cname_instance_1=()=>{var tmp=require("./cname-instance");return cname_instance_1=()=>tmp,tmp},ip_instance_1=()=>{var tmp=require("./ip-instance");return ip_instance_1=()=>tmp,tmp},namespace_1=()=>{var tmp=require("./namespace");return namespace_1=()=>tmp,tmp},non_ip_instance_1=()=>{var tmp=require("./non-ip-instance");return non_ip_instance_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./private/utils");return utils_1=()=>tmp,tmp},servicediscovery_generated_1=()=>{var tmp=require("./servicediscovery.generated");return servicediscovery_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class ServiceBase extends core_1().Resource{}class Service extends ServiceBase{static fromServiceAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicediscovery_ServiceAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromServiceAttributes),error}class Import extends ServiceBase{constructor(){super(...arguments),this.namespace=attrs.namespace,this.serviceId=attrs.serviceId,this.serviceArn=attrs.serviceArn,this.dnsRecordType=attrs.dnsRecordType,this.routingPolicy=attrs.routingPolicy,this.serviceName=attrs.serviceName,this.discoveryType=attrs.discoveryType||(0,utils_1().defaultDiscoveryType)(attrs.namespace)}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicediscovery_ServiceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Service),error}const namespaceType=props.namespace.type,discoveryType=props.discoveryType||(0,utils_1().defaultDiscoveryType)(props.namespace);if(namespaceType==namespace_1().NamespaceType.HTTP&&discoveryType==DiscoveryType.DNS_AND_API)throw new Error("Cannot specify `discoveryType` of DNS_AND_API when using an HTTP namespace.");if(discoveryType===DiscoveryType.API&&(props.routingPolicy||props.dnsRecordType))throw new Error("Cannot specify `routingPolicy` or `dnsRecord` when using an HTTP namespace.");if(props.healthCheck&&props.customHealthCheck)throw new Error("Cannot specify both `healthCheckConfig` and `healthCheckCustomConfig`.");if(namespaceType===namespace_1().NamespaceType.DNS_PRIVATE&&props.healthCheck)throw new Error("Cannot specify `healthCheckConfig` for a Private DNS namespace.");if(props.routingPolicy===RoutingPolicy.MULTIVALUE&&props.dnsRecordType===DnsRecordType.CNAME)throw new Error("Cannot use `CNAME` record when routing policy is `Multivalue`.");if(props.routingPolicy===RoutingPolicy.MULTIVALUE&&props.loadBalancer)throw new Error("Cannot register loadbalancers when routing policy is `Multivalue`.");if(props.healthCheck&&props.healthCheck.type===HealthCheckType.TCP&&props.healthCheck.resourcePath)throw new Error("Cannot specify `resourcePath` when using a `TCP` health check.");const routingPolicy=props.dnsRecordType===DnsRecordType.CNAME||props.loadBalancer?RoutingPolicy.WEIGHTED:RoutingPolicy.MULTIVALUE,dnsRecordType=props.dnsRecordType||DnsRecordType.A;if(props.loadBalancer&&!(dnsRecordType===DnsRecordType.A||dnsRecordType===DnsRecordType.AAAA||dnsRecordType===DnsRecordType.A_AAAA))throw new Error("Must support `A` or `AAAA` records to register loadbalancers.");const dnsConfig=discoveryType===DiscoveryType.API?void 0:{dnsRecords:renderDnsRecords(dnsRecordType,props.dnsTtl),namespaceId:props.namespace.namespaceId,routingPolicy},healthCheckConfigDefaults={type:HealthCheckType.HTTP,failureThreshold:1,resourcePath:props.healthCheck&&props.healthCheck.type!==HealthCheckType.TCP?"/":void 0},healthCheckConfig=props.healthCheck&&{...healthCheckConfigDefaults,...props.healthCheck},healthCheckCustomConfig=props.customHealthCheck,service=new(servicediscovery_generated_1()).CfnService(this,"Resource",{name:props.name,description:props.description,dnsConfig,healthCheckConfig,healthCheckCustomConfig,namespaceId:props.namespace.namespaceId,type:props.discoveryType==DiscoveryType.API?"HTTP":void 0});this.serviceName=service.attrName,this.serviceArn=service.attrArn,this.serviceId=service.attrId,this.namespace=props.namespace,this.dnsRecordType=dnsRecordType,this.routingPolicy=routingPolicy,this.discoveryType=discoveryType}registerLoadBalancer(id,loadBalancer,customAttributes){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_ILoadBalancerV2(loadBalancer)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerLoadBalancer),error}return new(alias_target_instance_1()).AliasTargetInstance(this,id,{service:this,dnsName:loadBalancer.loadBalancerDnsName,customAttributes})}registerNonIpInstance(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicediscovery_NonIpInstanceBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerNonIpInstance),error}return new(non_ip_instance_1()).NonIpInstance(this,id,{service:this,...props})}registerIpInstance(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicediscovery_IpInstanceBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerIpInstance),error}return new(ip_instance_1()).IpInstance(this,id,{service:this,...props})}registerCnameInstance(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicediscovery_CnameInstanceBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerCnameInstance),error}return new(cname_instance_1()).CnameInstance(this,id,{service:this,...props})}}exports.Service=Service,_a=JSII_RTTI_SYMBOL_1,Service[_a]={fqn:"aws-cdk-lib.aws_servicediscovery.Service",version:"2.149.0"};function renderDnsRecords(dnsRecordType,dnsTtl=core_1().Duration.minutes(1)){const ttl=dnsTtl.toSeconds();return dnsRecordType===DnsRecordType.A_AAAA?[{type:DnsRecordType.A,ttl},{type:DnsRecordType.AAAA,ttl}]:[{type:dnsRecordType,ttl}]}var DiscoveryType;(function(DiscoveryType2){DiscoveryType2.API="API",DiscoveryType2.DNS_AND_API="DNS_AND_API"})(DiscoveryType||(exports.DiscoveryType=DiscoveryType={}));var DnsRecordType;(function(DnsRecordType2){DnsRecordType2.A="A",DnsRecordType2.AAAA="AAAA",DnsRecordType2.A_AAAA="A, AAAA",DnsRecordType2.SRV="SRV",DnsRecordType2.CNAME="CNAME"})(DnsRecordType||(exports.DnsRecordType=DnsRecordType={}));var RoutingPolicy;(function(RoutingPolicy2){RoutingPolicy2.WEIGHTED="WEIGHTED",RoutingPolicy2.MULTIVALUE="MULTIVALUE"})(RoutingPolicy||(exports.RoutingPolicy=RoutingPolicy={}));var HealthCheckType;(function(HealthCheckType2){HealthCheckType2.HTTP="HTTP",HealthCheckType2.HTTPS="HTTPS",HealthCheckType2.TCP="TCP"})(HealthCheckType||(exports.HealthCheckType=HealthCheckType={}));