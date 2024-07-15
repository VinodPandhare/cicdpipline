"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Accelerator=exports.IpAddressType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var ga=()=>{var tmp=require("./globalaccelerator.generated");return ga=()=>tmp,tmp},listener_1=()=>{var tmp=require("./listener");return listener_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},IpAddressType;(function(IpAddressType2){IpAddressType2.IPV4="IPV4",IpAddressType2.DUAL_STACK="DUAL_STACK"})(IpAddressType||(exports.IpAddressType=IpAddressType={}));class Accelerator extends cdk().Resource{static fromAcceleratorAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_globalaccelerator_AcceleratorAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAcceleratorAttributes),error}class Import extends cdk().Resource{constructor(){super(...arguments),this.acceleratorArn=attrs.acceleratorArn,this.dnsName=attrs.dnsName,this.dualStackDnsName=attrs.dualStackDnsName,this.ipv4Addresses=attrs.ipv4Addresses,this.ipv6Addresses=attrs.ipv6Addresses}}return new Import(scope,id)}constructor(scope,id,props={}){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_globalaccelerator_AcceleratorProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Accelerator),error}this.validateAcceleratorName(props.acceleratorName),this.validateIpAddresses(props.ipAddresses);const name=props.acceleratorName??cdk().Names.uniqueResourceName(this,{maxLength:64}),resource=new(ga()).CfnAccelerator(this,"Resource",{enabled:props.enabled??!0,name,ipAddresses:props.ipAddresses,ipAddressType:props.ipAddressType});this.acceleratorArn=resource.attrAcceleratorArn,this.dnsName=resource.attrDnsName,this.dualStackDnsName=resource.attrDualStackDnsName,this.ipv4Addresses=resource.attrIpv4Addresses,this.ipv6Addresses=resource.attrIpv6Addresses}addListener(id,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_globalaccelerator_ListenerOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addListener),error}return new(listener_1()).Listener(this,id,{accelerator:this,...options})}validateAcceleratorName(name){if(!cdk().Token.isUnresolved(name)&&name!==void 0&&(name.length<1||name.length>64))throw new Error(`Invalid acceleratorName value ${name}, must have length between 1 and 64, got: ${name.length}`)}validateIpAddresses(ipAddresses){if(ipAddresses!==void 0&&(ipAddresses.length<1||ipAddresses.length>2))throw new Error(`Invalid ipAddresses value [${ipAddresses}], you can specify one or two addresses, got: ${ipAddresses.length}`)}}exports.Accelerator=Accelerator,_a=JSII_RTTI_SYMBOL_1,Accelerator[_a]={fqn:"aws-cdk-lib.aws_globalaccelerator.Accelerator",version:"2.149.0"};