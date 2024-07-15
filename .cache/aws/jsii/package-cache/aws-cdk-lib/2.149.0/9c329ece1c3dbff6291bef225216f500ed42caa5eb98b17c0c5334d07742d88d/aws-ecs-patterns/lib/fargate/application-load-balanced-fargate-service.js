"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ApplicationLoadBalancedFargateService=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var aws_ecs_1=()=>{var tmp=require("../../../aws-ecs");return aws_ecs_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../../cx-api");return cxapi=()=>tmp,tmp},application_load_balanced_service_base_1=()=>{var tmp=require("../base/application-load-balanced-service-base");return application_load_balanced_service_base_1=()=>tmp,tmp};class ApplicationLoadBalancedFargateService extends application_load_balanced_service_base_1().ApplicationLoadBalancedServiceBase{constructor(scope,id,props={}){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_patterns_ApplicationLoadBalancedFargateServiceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ApplicationLoadBalancedFargateService),error}if(this.assignPublicIp=props.assignPublicIp??!1,props.taskDefinition&&props.taskImageOptions)throw new Error("You must specify either a taskDefinition or an image, not both.");if(props.taskDefinition)this.taskDefinition=props.taskDefinition;else if(props.taskImageOptions){const taskImageOptions=props.taskImageOptions;this.taskDefinition=new(aws_ecs_1()).FargateTaskDefinition(this,"TaskDef",{memoryLimitMiB:props.memoryLimitMiB,cpu:props.cpu,ephemeralStorageGiB:props.ephemeralStorageGiB,executionRole:taskImageOptions.executionRole,taskRole:taskImageOptions.taskRole,family:taskImageOptions.family,runtimePlatform:props.runtimePlatform});const enableLogging=taskImageOptions.enableLogging??!0,logDriver=taskImageOptions.logDriver!==void 0?taskImageOptions.logDriver:enableLogging?this.createAWSLogDriver(this.node.id):void 0,containerName=taskImageOptions.containerName??"web";this.taskDefinition.addContainer(containerName,{image:taskImageOptions.image,healthCheck:props.healthCheck,logging:logDriver,environment:taskImageOptions.environment,secrets:taskImageOptions.secrets,dockerLabels:taskImageOptions.dockerLabels,command:taskImageOptions.command,entryPoint:taskImageOptions.entryPoint}).addPortMappings({containerPort:taskImageOptions.containerPort||80})}else throw new Error("You must specify one of: taskDefinition or image");if(this.validateHealthyPercentage("minHealthyPercent",props.minHealthyPercent),this.validateHealthyPercentage("maxHealthyPercent",props.maxHealthyPercent),props.minHealthyPercent&&!core_1().Token.isUnresolved(props.minHealthyPercent)&&props.maxHealthyPercent&&!core_1().Token.isUnresolved(props.maxHealthyPercent)&&props.minHealthyPercent>=props.maxHealthyPercent)throw new Error("Minimum healthy percent must be less than maximum healthy percent.");const desiredCount=core_1().FeatureFlags.of(this).isEnabled(cxapi().ECS_REMOVE_DEFAULT_DESIRED_COUNT)?this.internalDesiredCount:this.desiredCount;this.service=new(aws_ecs_1()).FargateService(this,"Service",{cluster:this.cluster,desiredCount,taskDefinition:this.taskDefinition,assignPublicIp:this.assignPublicIp,serviceName:props.serviceName,healthCheckGracePeriod:props.healthCheckGracePeriod,minHealthyPercent:props.minHealthyPercent,maxHealthyPercent:props.maxHealthyPercent,propagateTags:props.propagateTags,enableECSManagedTags:props.enableECSManagedTags,cloudMapOptions:props.cloudMapOptions,platformVersion:props.platformVersion,deploymentController:props.deploymentController,circuitBreaker:props.circuitBreaker,securityGroups:props.securityGroups,vpcSubnets:props.taskSubnets,enableExecuteCommand:props.enableExecuteCommand,capacityProviderStrategies:props.capacityProviderStrategies}),this.addServiceAsTarget(this.service)}validateHealthyPercentage(name,value){if(!(value===void 0||core_1().Token.isUnresolved(value))&&(!Number.isInteger(value)||value<0))throw new Error(`${name}: Must be a non-negative integer; received ${value}`)}}exports.ApplicationLoadBalancedFargateService=ApplicationLoadBalancedFargateService,_a=JSII_RTTI_SYMBOL_1,ApplicationLoadBalancedFargateService[_a]={fqn:"aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedFargateService",version:"2.149.0"};
