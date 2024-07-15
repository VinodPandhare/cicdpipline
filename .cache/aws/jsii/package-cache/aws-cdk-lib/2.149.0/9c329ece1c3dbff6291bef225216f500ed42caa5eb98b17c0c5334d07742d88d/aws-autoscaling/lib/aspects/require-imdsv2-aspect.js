"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AutoScalingGroupRequireImdsv2Aspect=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../../cx-api");return cx_api_1=()=>tmp,tmp},auto_scaling_group_1=()=>{var tmp=require("../auto-scaling-group");return auto_scaling_group_1=()=>tmp,tmp};class AutoScalingGroupRequireImdsv2Aspect{constructor(){}visit(node){if(node instanceof auto_scaling_group_1().AutoScalingGroup)if(cdk().FeatureFlags.of(node).isEnabled(cx_api_1().AUTOSCALING_GENERATE_LAUNCH_TEMPLATE)){const cfnLaunchTemplate=node.node.tryFindChild("LaunchTemplate").node.tryFindChild("Resource"),data=cfnLaunchTemplate.launchTemplateData;if(cdk().isResolvableObject(data)){this.warn(node,"CfnLaunchTemplate.LaunchTemplateData field is a CDK token.");return}const metadataOptions=data.metadataOptions;if(cdk().isResolvableObject(metadataOptions)){this.warn(node,"CfnLaunchTemplate.LaunchTemplateData.MetadataOptions field is a CDK token.");return}const newData={...data,metadataOptions:{...metadataOptions,httpTokens:"required"}};cfnLaunchTemplate.launchTemplateData=newData}else{const launchConfig=node.node.tryFindChild("LaunchConfig");if(cdk().isResolvableObject(launchConfig.metadataOptions)){this.warn(node,"CfnLaunchConfiguration.MetadataOptions field is a CDK token.");return}launchConfig.metadataOptions={...launchConfig.metadataOptions,httpTokens:"required"}}}warn(node,message){cdk().Annotations.of(node).addWarningV2(`@aws-cdk/aws-autoscaling:imdsv2${AutoScalingGroupRequireImdsv2Aspect.name}`,`${AutoScalingGroupRequireImdsv2Aspect.name} failed on node ${node.node.id}: ${message}`)}}exports.AutoScalingGroupRequireImdsv2Aspect=AutoScalingGroupRequireImdsv2Aspect,_a=JSII_RTTI_SYMBOL_1,AutoScalingGroupRequireImdsv2Aspect[_a]={fqn:"aws-cdk-lib.aws_autoscaling.AutoScalingGroupRequireImdsv2Aspect",version:"2.149.0"};
