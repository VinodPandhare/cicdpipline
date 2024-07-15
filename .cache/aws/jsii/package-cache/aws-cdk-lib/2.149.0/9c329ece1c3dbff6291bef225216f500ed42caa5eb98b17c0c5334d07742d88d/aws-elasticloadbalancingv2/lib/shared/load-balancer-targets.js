"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.IpTarget=exports.InstanceTarget=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var enums_1=()=>{var tmp=require("./enums");return enums_1=()=>tmp,tmp};class InstanceTarget{constructor(instanceId,port){this.instanceId=instanceId,this.port=port}attachToApplicationTargetGroup(targetGroup){return this.attach(targetGroup)}attachToNetworkTargetGroup(targetGroup){return this.attach(targetGroup)}attach(_targetGroup){return{targetType:enums_1().TargetType.INSTANCE,targetJson:{id:this.instanceId,port:this.port}}}}exports.InstanceTarget=InstanceTarget,_a=JSII_RTTI_SYMBOL_1,InstanceTarget[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2.InstanceTarget",version:"2.149.0"};class IpTarget{constructor(ipAddress,port,availabilityZone){this.ipAddress=ipAddress,this.port=port,this.availabilityZone=availabilityZone}attachToApplicationTargetGroup(targetGroup){return this.attach(targetGroup)}attachToNetworkTargetGroup(targetGroup){return this.attach(targetGroup)}attach(_targetGroup){return{targetType:enums_1().TargetType.IP,targetJson:{id:this.ipAddress,port:this.port,availabilityZone:this.availabilityZone}}}}exports.IpTarget=IpTarget,_b=JSII_RTTI_SYMBOL_1,IpTarget[_b]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2.IpTarget",version:"2.149.0"};