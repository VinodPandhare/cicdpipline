"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LaunchTemplateRequireImdsv2Aspect=exports.InstanceRequireImdsv2Aspect=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../../cx-api");return cxapi=()=>tmp,tmp},ec2_generated_1=()=>{var tmp=require("../ec2.generated");return ec2_generated_1=()=>tmp,tmp},instance_1=()=>{var tmp=require("../instance");return instance_1=()=>tmp,tmp},launch_template_1=()=>{var tmp=require("../launch-template");return launch_template_1=()=>tmp,tmp};class RequireImdsv2Aspect{constructor(props){this.suppressWarnings=props?.suppressWarnings??!1}warn(node,message){this.suppressWarnings!==!0&&cdk().Annotations.of(node).addWarningV2(`@aws-cdk/aws-ec2:imdsv2${RequireImdsv2Aspect.name}`,`${RequireImdsv2Aspect.name} failed on node ${node.node.id}: ${message}`)}}class InstanceRequireImdsv2Aspect extends RequireImdsv2Aspect{constructor(props){super(props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_InstanceRequireImdsv2AspectProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,InstanceRequireImdsv2Aspect),error}this.suppressLaunchTemplateWarning=props?.suppressLaunchTemplateWarning??!1}visit(node){if(!(node instanceof instance_1().Instance))return;if(node.instance.launchTemplate!==void 0){this.warn(node,"Cannot toggle IMDSv1 because this Instance is associated with an existing Launch Template.");return}const launchTemplate=new(ec2_generated_1()).CfnLaunchTemplate(node,"LaunchTemplate",{launchTemplateData:{metadataOptions:{httpTokens:"required"}}});cdk().FeatureFlags.of(node).isEnabled(cxapi().EC2_UNIQUE_IMDSV2_LAUNCH_TEMPLATE_NAME)?launchTemplate.launchTemplateName=cdk().Names.uniqueId(launchTemplate):launchTemplate.launchTemplateName=`${node.node.id}LaunchTemplate`,node.instance.launchTemplate={launchTemplateName:launchTemplate.launchTemplateName,version:launchTemplate.getAtt("LatestVersionNumber").toString()}}warn(node,message){this.suppressLaunchTemplateWarning!==!0&&super.warn(node,message)}}exports.InstanceRequireImdsv2Aspect=InstanceRequireImdsv2Aspect,_a=JSII_RTTI_SYMBOL_1,InstanceRequireImdsv2Aspect[_a]={fqn:"aws-cdk-lib.aws_ec2.InstanceRequireImdsv2Aspect",version:"2.149.0"};class LaunchTemplateRequireImdsv2Aspect extends RequireImdsv2Aspect{constructor(props){super(props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_LaunchTemplateRequireImdsv2AspectProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LaunchTemplateRequireImdsv2Aspect),error}}visit(node){if(!(node instanceof launch_template_1().LaunchTemplate))return;const launchTemplate=node.node.tryFindChild("Resource"),data=launchTemplate.launchTemplateData;if(cdk().isResolvableObject(data)){this.warn(node,"LaunchTemplateData is a CDK token.");return}const metadataOptions=data.metadataOptions;if(cdk().isResolvableObject(metadataOptions)){this.warn(node,"LaunchTemplateData.MetadataOptions is a CDK token.");return}const newData={...data,metadataOptions:{...metadataOptions,httpTokens:"required"}};launchTemplate.launchTemplateData=newData}}exports.LaunchTemplateRequireImdsv2Aspect=LaunchTemplateRequireImdsv2Aspect,_b=JSII_RTTI_SYMBOL_1,LaunchTemplateRequireImdsv2Aspect[_b]={fqn:"aws-cdk-lib.aws_ec2.LaunchTemplateRequireImdsv2Aspect",version:"2.149.0"};
