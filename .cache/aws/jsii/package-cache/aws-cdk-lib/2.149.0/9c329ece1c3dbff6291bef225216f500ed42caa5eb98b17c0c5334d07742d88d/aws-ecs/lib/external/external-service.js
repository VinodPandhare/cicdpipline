"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExternalService=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},base_service_1=()=>{var tmp=require("../base/base-service");return base_service_1=()=>tmp,tmp},from_service_attributes_1=()=>{var tmp=require("../base/from-service-attributes");return from_service_attributes_1=()=>tmp,tmp},task_definition_1=()=>{var tmp=require("../base/task-definition");return task_definition_1=()=>tmp,tmp};class ExternalService extends base_service_1().BaseService{static fromExternalServiceArn(scope,id,externalServiceArn){class Import extends core_1().Resource{constructor(){super(...arguments),this.serviceArn=externalServiceArn,this.serviceName=core_1().Stack.of(scope).splitArn(externalServiceArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).resourceName}}return new Import(scope,id)}static fromExternalServiceAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ExternalServiceAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromExternalServiceAttributes),error}return(0,from_service_attributes_1().fromServiceAttributes)(scope,id,attrs)}constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ExternalServiceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ExternalService),error}if(props.minHealthyPercent!==void 0&&props.maxHealthyPercent!==void 0&&props.minHealthyPercent>=props.maxHealthyPercent)throw new Error("Minimum healthy percent must be less than maximum healthy percent.");if(props.taskDefinition.compatibility!==task_definition_1().Compatibility.EXTERNAL)throw new Error("Supplied TaskDefinition is not configured for compatibility with ECS Anywhere cluster");if(props.cluster.defaultCloudMapNamespace!==void 0)throw new Error(`Cloud map integration is not supported for External service ${props.cluster.defaultCloudMapNamespace}`);if(props.cloudMapOptions!==void 0)throw new Error("Cloud map options are not supported for External service");if(props.enableExecuteCommand!==void 0)throw new Error("Enable Execute Command options are not supported for External service");if(props.capacityProviderStrategies!==void 0)throw new Error("Capacity Providers are not supported for External service");const propagateTagsFromSource=props.propagateTags??base_service_1().PropagatedTagSource.NONE;super(scope,id,{...props,desiredCount:props.desiredCount,maxHealthyPercent:props.maxHealthyPercent===void 0?100:props.maxHealthyPercent,minHealthyPercent:props.minHealthyPercent===void 0?0:props.minHealthyPercent,launchType:base_service_1().LaunchType.EXTERNAL,propagateTags:propagateTagsFromSource,enableECSManagedTags:props.enableECSManagedTags},{cluster:props.cluster.clusterName,taskDefinition:props.deploymentController?.type===base_service_1().DeploymentControllerType.EXTERNAL?void 0:props.taskDefinition.taskDefinitionArn},props.taskDefinition),this.node.addValidation({validate:()=>this.taskDefinition.defaultContainer?[]:["A TaskDefinition must have at least one essential container"]}),this.node.addValidation({validate:()=>this.networkConfiguration!==void 0?["Network configurations not supported for an external service"]:[]})}attachToApplicationTargetGroup(_targetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_IApplicationTargetGroup(_targetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToApplicationTargetGroup),error}throw new Error("Application load balancer cannot be attached to an external service")}loadBalancerTarget(_options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_LoadBalancerTargetOptions(_options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.loadBalancerTarget),error}throw new Error("External service cannot be attached as load balancer targets")}registerLoadBalancerTargets(..._targets){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_EcsTarget(_targets)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerLoadBalancerTargets),error}throw new Error("External service cannot be registered as load balancer targets")}configureAwsVpcNetworkingWithSecurityGroups(_vpc,_assignPublicIp,_vpcSubnets,_securityGroups){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_IVpc(_vpc),jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_SubnetSelection(_vpcSubnets)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.configureAwsVpcNetworkingWithSecurityGroups),error}throw new Error("Only Bridge network mode is supported for external service")}autoScaleTaskCount(_props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_applicationautoscaling_EnableScalingProps(_props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.autoScaleTaskCount),error}throw new Error("Autoscaling not supported for external service")}enableCloudMap(_options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_CloudMapOptions(_options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.enableCloudMap),error}throw new Error("Cloud map integration not supported for an external service")}associateCloudMapService(_options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_AssociateCloudMapServiceOptions(_options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.associateCloudMapService),error}throw new Error("Cloud map service association is not supported for an external service")}}exports.ExternalService=ExternalService,_a=JSII_RTTI_SYMBOL_1,ExternalService[_a]={fqn:"aws-cdk-lib.aws_ecs.ExternalService",version:"2.149.0"};