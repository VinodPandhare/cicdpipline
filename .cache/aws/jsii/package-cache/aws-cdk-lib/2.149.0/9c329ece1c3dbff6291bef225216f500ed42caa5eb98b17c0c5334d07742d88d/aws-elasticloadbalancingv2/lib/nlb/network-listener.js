"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.NetworkListener=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var network_listener_action_1=()=>{var tmp=require("./network-listener-action");return network_listener_action_1=()=>tmp,tmp},network_listener_certificate_1=()=>{var tmp=require("./network-listener-certificate");return network_listener_certificate_1=()=>tmp,tmp},network_target_group_1=()=>{var tmp=require("./network-target-group");return network_target_group_1=()=>tmp,tmp},cxschema=()=>{var tmp=require("../../../cloud-assembly-schema");return cxschema=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},base_listener_1=()=>{var tmp=require("../shared/base-listener");return base_listener_1=()=>tmp,tmp},enums_1=()=>{var tmp=require("../shared/enums");return enums_1=()=>tmp,tmp},util_1=()=>{var tmp=require("../shared/util");return util_1=()=>tmp,tmp};class NetworkListener extends base_listener_1().BaseListener{static fromLookup(scope,id,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_NetworkListenerLookupOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromLookup),error}let listenerProtocol;if(options.listenerProtocol)switch((0,util_1().validateNetworkProtocol)(options.listenerProtocol),options.listenerProtocol){case enums_1().Protocol.TCP:listenerProtocol=cxschema().LoadBalancerListenerProtocol.TCP;break;case enums_1().Protocol.UDP:listenerProtocol=cxschema().LoadBalancerListenerProtocol.UDP;break;case enums_1().Protocol.TCP_UDP:listenerProtocol=cxschema().LoadBalancerListenerProtocol.TCP_UDP;break;case enums_1().Protocol.TLS:listenerProtocol=cxschema().LoadBalancerListenerProtocol.TLS;break}const props=base_listener_1().BaseListener._queryContextProvider(scope,{userOptions:options,listenerProtocol,loadBalancerType:cxschema().LoadBalancerType.NETWORK});class LookedUp extends core_1().Resource{constructor(){super(...arguments),this.listenerArn=props.listenerArn}}return new LookedUp(scope,id)}static fromNetworkListenerArn(scope,id,networkListenerArn){class Import extends core_1().Resource{constructor(){super(...arguments),this.listenerArn=networkListenerArn}}return new Import(scope,id)}constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_NetworkListenerProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,NetworkListener),error}const certs=props.certificates||[],proto=props.protocol||(certs.length>0?enums_1().Protocol.TLS:enums_1().Protocol.TCP);if((0,util_1().validateNetworkProtocol)(proto),proto===enums_1().Protocol.TLS&&certs.filter(v=>v!=null).length===0)throw new Error("When the protocol is set to TLS, you must specify certificates");if(proto!==enums_1().Protocol.TLS&&certs.length>0)throw new Error("Protocol must be TLS when certificates have been specified");if(proto!==enums_1().Protocol.TLS&&props.alpnPolicy)throw new Error("Protocol must be TLS when alpnPolicy have been specified");if(props.loadBalancer.ipAddressType===enums_1().IpAddressType.DUAL_STACK&&(props.protocol===enums_1().Protocol.UDP||props.protocol===enums_1().Protocol.TCP_UDP))throw new Error("UDP or TCP_UDP listeners cannot be added to a dualstack network load balancer.");if(super(scope,id,{loadBalancerArn:props.loadBalancer.loadBalancerArn,protocol:proto,port:props.port,sslPolicy:props.sslPolicy,certificates:core_1().Lazy.any({produce:()=>this.certificateArns.map(certificateArn=>({certificateArn}))},{omitEmptyArray:!0}),alpnPolicy:props.alpnPolicy?[props.alpnPolicy]:void 0}),this.certificateArns=[],this.loadBalancer=props.loadBalancer,this.protocol=proto,certs.length>0&&this.addCertificates("DefaultCertificates",certs),props.defaultAction&&props.defaultTargetGroups)throw new Error("Specify at most one of 'defaultAction' and 'defaultTargetGroups'");props.defaultAction&&this.setDefaultAction(props.defaultAction),props.defaultTargetGroups&&this.setDefaultAction(network_listener_action_1().NetworkListenerAction.forward(props.defaultTargetGroups))}addCertificates(id,certificates){const additionalCerts=[...certificates];if(this.certificateArns.length===0&&additionalCerts.length>0){const first=additionalCerts.splice(0,1)[0];this.certificateArns.push(first.certificateArn)}for(let i=0;i<additionalCerts.length;i++)new(network_listener_certificate_1()).NetworkListenerCertificate(this,`${id}${i+1}`,{listener:this,certificates:[additionalCerts[i]]})}addTargetGroups(_id,...targetGroups){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkTargetGroup(targetGroups)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addTargetGroups),error}this.setDefaultAction(network_listener_action_1().NetworkListenerAction.forward(targetGroups))}addAction(_id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_AddNetworkActionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addAction),error}this.setDefaultAction(props.action)}addTargets(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_AddNetworkTargetsProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addTargets),error}if(!this.loadBalancer.vpc)throw new Error("Can only call addTargets() when using a constructed Load Balancer or imported Load Balancer with specified VPC; construct a new TargetGroup and use addTargetGroup");const group=new(network_target_group_1()).NetworkTargetGroup(this,id+"Group",{deregistrationDelay:props.deregistrationDelay,healthCheck:props.healthCheck,port:props.port,protocol:props.protocol??this.protocol,proxyProtocolV2:props.proxyProtocolV2,preserveClientIp:props.preserveClientIp,targetGroupName:props.targetGroupName,targets:props.targets,vpc:this.loadBalancer.vpc});return this.addTargetGroups(id,group),group}setDefaultAction(action){action.bind(this,this),this._setDefaultAction(action)}}exports.NetworkListener=NetworkListener,_a=JSII_RTTI_SYMBOL_1,NetworkListener[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2.NetworkListener",version:"2.149.0"};