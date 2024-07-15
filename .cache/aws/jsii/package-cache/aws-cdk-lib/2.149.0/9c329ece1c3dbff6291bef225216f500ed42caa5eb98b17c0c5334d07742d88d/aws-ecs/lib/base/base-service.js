"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PropagatedTagSource=exports.DeploymentControllerType=exports.LaunchType=exports.BaseService=exports.ListenerConfig=exports.AlarmBehavior=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var scalable_task_count_1=()=>{var tmp=require("./scalable-task-count");return scalable_task_count_1=()=>tmp,tmp},appscaling=()=>{var tmp=require("../../../aws-applicationautoscaling");return appscaling=()=>tmp,tmp},cloudwatch=()=>{var tmp=require("../../../aws-cloudwatch");return cloudwatch=()=>tmp,tmp},ec2=()=>{var tmp=require("../../../aws-ec2");return ec2=()=>tmp,tmp},elbv2=()=>{var tmp=require("../../../aws-elasticloadbalancingv2");return elbv2=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},cloudmap=()=>{var tmp=require("../../../aws-servicediscovery");return cloudmap=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../../cx-api");return cxapi=()=>tmp,tmp},region_info_1=()=>{var tmp=require("../../../region-info");return region_info_1=()=>tmp,tmp},task_definition_1=()=>{var tmp=require("../base/task-definition");return task_definition_1=()=>tmp,tmp},cluster_1=()=>{var tmp=require("../cluster");return cluster_1=()=>tmp,tmp},ecs_generated_1=()=>{var tmp=require("../ecs.generated");return ecs_generated_1=()=>tmp,tmp},AlarmBehavior;(function(AlarmBehavior2){AlarmBehavior2.ROLLBACK_ON_ALARM="ROLLBACK_ON_ALARM",AlarmBehavior2.FAIL_ON_ALARM="FAIL_ON_ALARM"})(AlarmBehavior||(exports.AlarmBehavior=AlarmBehavior={}));class ListenerConfig{static applicationListener(listener,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_ApplicationListener(listener),jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_AddApplicationTargetsProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.applicationListener),error}return new ApplicationListenerConfig(listener,props)}static networkListener(listener,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_NetworkListener(listener),jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_AddNetworkTargetsProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.networkListener),error}return new NetworkListenerConfig(listener,props)}}exports.ListenerConfig=ListenerConfig,_a=JSII_RTTI_SYMBOL_1,ListenerConfig[_a]={fqn:"aws-cdk-lib.aws_ecs.ListenerConfig",version:"2.149.0"};class ApplicationListenerConfig extends ListenerConfig{constructor(listener,props){super(),this.listener=listener,this.props=props}addTargets(id,target,service){const props=this.props||{},protocol=props.protocol,port=props.port??(protocol===elbv2().ApplicationProtocol.HTTPS?443:80);this.listener.addTargets(id,{...props,targets:[service.loadBalancerTarget({...target})],port})}}class NetworkListenerConfig extends ListenerConfig{constructor(listener,props){super(),this.listener=listener,this.props=props}addTargets(id,target,service){const port=this.props?.port??80;this.listener.addTargets(id,{...this.props,targets:[service.loadBalancerTarget({...target})],port})}}class BaseService extends core_1().Resource{static fromServiceArnWithCluster(scope,id,serviceArn){const arn=core_1().Stack.of(scope).splitArn(serviceArn,core_1().ArnFormat.SLASH_RESOURCE_NAME),resourceName=arn.resourceName;if(!resourceName)throw new Error(`Missing resource Name from service ARN: ${serviceArn}`);const resourceNameParts=resourceName.split("/");if(resourceNameParts.length!==2)throw new Error(`resource name ${resourceName} from service ARN: ${serviceArn} is not using the ARN cluster format`);const clusterName=resourceNameParts[0],serviceName=resourceNameParts[1],clusterArn=core_1().Stack.of(scope).formatArn({partition:arn.partition,region:arn.region,account:arn.account,service:"ecs",resource:"cluster",resourceName:clusterName}),cluster=cluster_1().Cluster.fromClusterArn(scope,`${id}Cluster`,clusterArn);class Import extends core_1().Resource{constructor(){super(...arguments),this.serviceArn=serviceArn,this.serviceName=serviceName,this.cluster=cluster}}return new Import(scope,id,{environmentFromArn:serviceArn})}constructor(scope,id,props,additionalProps,taskDefinition){super(scope,id,{physicalName:props.serviceName}),this.connections=new(ec2()).Connections,this.loadBalancers=new Array,this.serviceRegistries=new Array,this.volumes=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_BaseServiceProps(props),jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_TaskDefinition(taskDefinition)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BaseService),error}if(props.propagateTags&&props.propagateTaskTagsFrom)throw new Error("You can only specify either propagateTags or propagateTaskTagsFrom. Alternatively, you can leave both blank");this.taskDefinition=taskDefinition;const launchType=props.deploymentController?.type===DeploymentControllerType.EXTERNAL||props.capacityProviderStrategies!==void 0?void 0:props.launchType,propagateTagsFromSource=props.propagateTaskTagsFrom??props.propagateTags??PropagatedTagSource.NONE,deploymentController=this.getDeploymentController(props);if(this.resource=new(ecs_generated_1()).CfnService(this,"Service",{desiredCount:props.desiredCount,serviceName:this.physicalName,loadBalancers:core_1().Lazy.any({produce:()=>this.loadBalancers},{omitEmptyArray:!0}),deploymentConfiguration:{maximumPercent:props.maxHealthyPercent||200,minimumHealthyPercent:props.minHealthyPercent===void 0?50:props.minHealthyPercent,deploymentCircuitBreaker:props.circuitBreaker?{enable:props.circuitBreaker.enable??!0,rollback:props.circuitBreaker.rollback??!1}:void 0,alarms:core_1().Lazy.any({produce:()=>this.deploymentAlarms},{omitEmptyArray:!0})},propagateTags:propagateTagsFromSource===PropagatedTagSource.NONE?void 0:props.propagateTags,enableEcsManagedTags:props.enableECSManagedTags??!1,deploymentController,launchType,enableExecuteCommand:props.enableExecuteCommand,capacityProviderStrategy:props.capacityProviderStrategies,healthCheckGracePeriodSeconds:this.evaluateHealthGracePeriod(props.healthCheckGracePeriod),networkConfiguration:core_1().Lazy.any({produce:()=>this.networkConfiguration},{omitEmptyArray:!0}),serviceRegistries:core_1().Lazy.any({produce:()=>this.serviceRegistries},{omitEmptyArray:!0}),serviceConnectConfiguration:core_1().Lazy.any({produce:()=>this._serviceConnectConfig},{omitEmptyArray:!0}),volumeConfigurations:core_1().Lazy.any({produce:()=>this.renderVolumes()},{omitEmptyArray:!0}),...additionalProps}),this.node.addDependency(this.taskDefinition.taskRole),props.deploymentController?.type===DeploymentControllerType.EXTERNAL&&core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-ecs:externalDeploymentController","taskDefinition and launchType are blanked out when using external deployment controller."),props.circuitBreaker&&deploymentController&&deploymentController.type!==DeploymentControllerType.ECS&&core_1().Annotations.of(this).addError("Deployment circuit breaker requires the ECS deployment controller."),props.deploymentAlarms&&deploymentController&&deploymentController.type!==DeploymentControllerType.ECS)throw new Error("Deployment alarms requires the ECS deployment controller.");if(props.deploymentController?.type===DeploymentControllerType.CODE_DEPLOY&&props.taskDefinitionRevision&&props.taskDefinitionRevision!==task_definition_1().TaskDefinitionRevision.LATEST)throw new Error("CODE_DEPLOY deploymentController can only be used with the `latest` task definition revision");if(props.deploymentController?.type===DeploymentControllerType.CODE_DEPLOY?(this.resource.taskDefinition=taskDefinition.family,this.node.addDependency(taskDefinition)):props.taskDefinitionRevision&&(this.resource.taskDefinition=taskDefinition.family,props.taskDefinitionRevision!==task_definition_1().TaskDefinitionRevision.LATEST&&(this.resource.taskDefinition+=`:${props.taskDefinitionRevision.revision}`),this.node.addDependency(taskDefinition)),this.serviceArn=this.getResourceArnAttribute(this.resource.ref,{service:"ecs",resource:"service",resourceName:`${props.cluster.clusterName}/${this.physicalName}`}),this.serviceName=this.getResourceNameAttribute(this.resource.attrName),this.cluster=props.cluster,props.cloudMapOptions&&this.enableCloudMap(props.cloudMapOptions),props.serviceConnectConfiguration&&this.enableServiceConnect(props.serviceConnectConfiguration),props.volumeConfigurations&&props.volumeConfigurations.forEach(v=>this.addVolume(v)),props.enableExecuteCommand){this.enableExecuteCommand();const logging=this.cluster.executeCommandConfiguration?.logging??cluster_1().ExecuteCommandLogging.DEFAULT;this.cluster.executeCommandConfiguration?.kmsKey&&this.enableExecuteCommandEncryption(logging),logging!==cluster_1().ExecuteCommandLogging.NONE&&this.executeCommandLogConfiguration()}if(props.deploymentAlarms){if(props.deploymentAlarms.alarmNames.length===0)throw new Error("at least one alarm name is required when specifying deploymentAlarms, received empty array");this.deploymentAlarms={alarmNames:props.deploymentAlarms.alarmNames,enable:!0,rollback:props.deploymentAlarms.behavior!==AlarmBehavior.FAIL_ON_ALARM}}else(!props.deploymentController||props.deploymentController?.type===DeploymentControllerType.ECS)&&this.deploymentAlarmsAvailableInRegion()&&(core_1().FeatureFlags.of(this).isEnabled(cxapi().ECS_REMOVE_DEFAULT_DEPLOYMENT_ALARM)||(this.deploymentAlarms={alarmNames:[],enable:!1,rollback:!1}));this.node.defaultChild=this.resource}addVolume(volume){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ServiceManagedVolume(volume)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addVolume),error}this.volumes.push(volume)}renderVolumes(){if(this.volumes.length>1)throw new Error(`Only one EBS volume can be specified for 'volumeConfigurations', got: ${this.volumes.length}`);return this.volumes.map(renderVolume);function renderVolume(spec){const tagSpecifications=spec.config?.tagSpecifications?.map(ebsTagSpec=>({resourceType:"volume",propagateTags:ebsTagSpec.propagateTags,tags:ebsTagSpec.tags?Object.entries(ebsTagSpec.tags).map(([key,value])=>({key,value})):void 0}));return{name:spec.name,managedEbsVolume:spec.config&&{roleArn:spec.role.roleArn,encrypted:spec.config.encrypted,filesystemType:spec.config.fileSystemType,iops:spec.config.iops,kmsKeyId:spec.config.kmsKeyId?.keyId,throughput:spec.config.throughput,volumeType:spec.config.volumeType,snapshotId:spec.config.snapShotId,sizeInGiB:spec.config.size?.toGibibytes(),tagSpecifications}}}}enableDeploymentAlarms(alarmNames,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_DeploymentAlarmOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.enableDeploymentAlarms),error}if(alarmNames.length===0)throw new Error("at least one alarm name is required when calling enableDeploymentAlarms(), received empty array");if(alarmNames.forEach(alarmName=>{core_1().Token.isUnresolved(alarmName)&&core_1().Annotations.of(this).addInfo(`Deployment alarm (${JSON.stringify(this.stack.resolve(alarmName))}) enabled on ${this.node.id} may cause a circular dependency error when this stack deploys. The alarm name references the alarm's logical id, or another resource. See the 'Deployment alarms' section in the module README for more details.`)}),this.deploymentAlarms?.enable&&options?.behavior&&(AlarmBehavior.ROLLBACK_ON_ALARM===options.behavior&&!this.deploymentAlarms.rollback||AlarmBehavior.FAIL_ON_ALARM===options.behavior&&this.deploymentAlarms.rollback))throw new Error(`all deployment alarms on an ECS service must have the same AlarmBehavior. Attempted to enable deployment alarms with ${options.behavior}, but alarms were previously enabled with ${this.deploymentAlarms.rollback?AlarmBehavior.ROLLBACK_ON_ALARM:AlarmBehavior.FAIL_ON_ALARM}`);this.deploymentAlarms?.enable?this.deploymentAlarms.alarmNames.concat(alarmNames):this.deploymentAlarms={enable:!0,alarmNames,rollback:options?.behavior!==AlarmBehavior.FAIL_ON_ALARM}}enableServiceConnect(config){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ServiceConnectProps(config)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.enableServiceConnect),error}if(this._serviceConnectConfig)throw new Error("Service connect configuration cannot be specified more than once.");this.validateServiceConnectConfiguration(config);let cfg=config||{},namespace;this.cluster.defaultCloudMapNamespace&&(namespace=this.cluster.defaultCloudMapNamespace.namespaceName),cfg.namespace&&(namespace=cfg.namespace);const services=cfg.services?.map(svc=>{const containerPort=this.taskDefinition.findPortMappingByName(svc.portMappingName)?.containerPort;if(!containerPort)throw new Error(`Port mapping with name ${svc.portMappingName} does not exist.`);const alias={port:svc.port||containerPort,dnsName:svc.dnsName};return{portName:svc.portMappingName,discoveryName:svc.discoveryName,ingressPortOverride:svc.ingressPortOverride,clientAliases:[alias],timeout:this.renderTimeout(svc.idleTimeout,svc.perRequestTimeout)}});let logConfig;cfg.logDriver&&this.taskDefinition.defaultContainer&&(logConfig=cfg.logDriver.bind(this,this.taskDefinition.defaultContainer)),this._serviceConnectConfig={enabled:!0,logConfiguration:logConfig,namespace,services}}validateServiceConnectConfiguration(config){if(!this.taskDefinition.defaultContainer)throw new Error("Task definition must have at least one container to enable service connect.");if((!config||!config.namespace)&&!this.cluster.defaultCloudMapNamespace)throw new Error("Namespace must be defined either in serviceConnectConfig or cluster.defaultCloudMapNamespace");if(!config||!config.services)return;let portNames=new Map;config.services.forEach(serviceConnectService=>{if(!this.taskDefinition.findPortMappingByName(serviceConnectService.portMappingName))throw new Error(`Port Mapping '${serviceConnectService.portMappingName}' does not exist on the task definition.`);const discoveryName=serviceConnectService.discoveryName||serviceConnectService.portMappingName;if(portNames.get(serviceConnectService.portMappingName)?.includes(discoveryName))throw new Error(`Cannot create multiple services with the discoveryName '${discoveryName}'.`);let currentDiscoveries=portNames.get(serviceConnectService.portMappingName);if(currentDiscoveries?(currentDiscoveries.push(discoveryName),portNames.set(serviceConnectService.portMappingName,currentDiscoveries)):portNames.set(serviceConnectService.portMappingName,[discoveryName]),serviceConnectService.ingressPortOverride&&!this.isValidPort(serviceConnectService.ingressPortOverride))throw new Error(`ingressPortOverride ${serviceConnectService.ingressPortOverride} is not valid.`);if(serviceConnectService.port&&!this.isValidPort(serviceConnectService.port))throw new Error(`Client Alias port ${serviceConnectService.port} is not valid.`)})}isValidPort(port){return!!(port&&Number.isInteger(port)&&port>=BaseService.MIN_PORT&&port<=BaseService.MAX_PORT)}get cloudMapService(){return this.cloudmapService}getDeploymentController(props){if(props.deploymentController)return props.deploymentController;if(!core_1().FeatureFlags.of(this).isEnabled(cxapi().ECS_DISABLE_EXPLICIT_DEPLOYMENT_CONTROLLER_FOR_CIRCUIT_BREAKER)&&props.circuitBreaker)return{type:DeploymentControllerType.ECS}}executeCommandLogConfiguration(){const logConfiguration=this.cluster.executeCommandConfiguration?.logConfiguration;this.taskDefinition.addToTaskRolePolicy(new(iam()).PolicyStatement({actions:["logs:DescribeLogGroups"],resources:["*"]}));const logGroupArn=logConfiguration?.cloudWatchLogGroup?`arn:${this.stack.partition}:logs:${this.env.region}:${this.env.account}:log-group:${logConfiguration.cloudWatchLogGroup.logGroupName}:*`:"*";this.taskDefinition.addToTaskRolePolicy(new(iam()).PolicyStatement({actions:["logs:CreateLogStream","logs:DescribeLogStreams","logs:PutLogEvents"],resources:[logGroupArn]})),logConfiguration?.s3Bucket?.bucketName&&(this.taskDefinition.addToTaskRolePolicy(new(iam()).PolicyStatement({actions:["s3:GetBucketLocation"],resources:["*"]})),this.taskDefinition.addToTaskRolePolicy(new(iam()).PolicyStatement({actions:["s3:PutObject"],resources:[`arn:${this.stack.partition}:s3:::${logConfiguration.s3Bucket.bucketName}/*`]})),logConfiguration.s3EncryptionEnabled&&this.taskDefinition.addToTaskRolePolicy(new(iam()).PolicyStatement({actions:["s3:GetEncryptionConfiguration"],resources:[`arn:${this.stack.partition}:s3:::${logConfiguration.s3Bucket.bucketName}`]})))}enableExecuteCommandEncryption(logging){this.taskDefinition.addToTaskRolePolicy(new(iam()).PolicyStatement({actions:["kms:Decrypt","kms:GenerateDataKey"],resources:[`${this.cluster.executeCommandConfiguration?.kmsKey?.keyArn}`]})),this.cluster.executeCommandConfiguration?.kmsKey?.addToResourcePolicy(new(iam()).PolicyStatement({actions:["kms:*"],resources:["*"],principals:[new(iam()).ArnPrincipal(`arn:${this.stack.partition}:iam::${this.env.account}:root`)]})),(logging===cluster_1().ExecuteCommandLogging.DEFAULT||this.cluster.executeCommandConfiguration?.logConfiguration?.cloudWatchEncryptionEnabled)&&this.cluster.executeCommandConfiguration?.kmsKey?.addToResourcePolicy(new(iam()).PolicyStatement({actions:["kms:Encrypt*","kms:Decrypt*","kms:ReEncrypt*","kms:GenerateDataKey*","kms:Describe*"],resources:["*"],principals:[new(iam()).ServicePrincipal(`logs.${this.env.region}.amazonaws.com`)],conditions:{ArnLike:{"kms:EncryptionContext:aws:logs:arn":`arn:${this.stack.partition}:logs:${this.env.region}:${this.env.account}:*`}}}))}attachToApplicationTargetGroup(targetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_IApplicationTargetGroup(targetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToApplicationTargetGroup),error}return this.defaultLoadBalancerTarget.attachToApplicationTargetGroup(targetGroup)}attachToClassicLB(loadBalancer){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancing_LoadBalancer(loadBalancer)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToClassicLB),error}return this.defaultLoadBalancerTarget.attachToClassicLB(loadBalancer)}loadBalancerTarget(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_LoadBalancerTargetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.loadBalancerTarget),error}const self=this,target=this.taskDefinition._validateTarget(options),connections=self.connections;return{attachToApplicationTargetGroup(targetGroup){return targetGroup.registerConnectable(self,self.taskDefinition._portRangeFromPortMapping(target.portMapping)),self.attachToELBv2(targetGroup,target.containerName,target.portMapping.containerPort)},attachToNetworkTargetGroup(targetGroup){return self.attachToELBv2(targetGroup,target.containerName,target.portMapping.containerPort)},connections,attachToClassicLB(loadBalancer){return self.attachToELB(loadBalancer,target.containerName,target.portMapping.containerPort)}}}registerLoadBalancerTargets(...targets){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_EcsTarget(targets)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerLoadBalancerTargets),error}for(const target of targets)target.listener.addTargets(target.newTargetGroupId,{containerName:target.containerName,containerPort:target.containerPort,protocol:target.protocol},this)}attachToNetworkTargetGroup(targetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkTargetGroup(targetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToNetworkTargetGroup),error}return this.defaultLoadBalancerTarget.attachToNetworkTargetGroup(targetGroup)}autoScaleTaskCount(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_applicationautoscaling_EnableScalingProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.autoScaleTaskCount),error}if(this.scalableTaskCount)throw new Error("AutoScaling of task count already enabled for this service");return this.scalableTaskCount=new(scalable_task_count_1()).ScalableTaskCount(this,"TaskCount",{serviceNamespace:appscaling().ServiceNamespace.ECS,resourceId:`service/${this.cluster.clusterName}/${this.serviceName}`,dimension:"ecs:service:DesiredCount",role:this.makeAutoScalingRole(),...props})}enableCloudMap(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_CloudMapOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.enableCloudMap),error}const sdNamespace=options.cloudMapNamespace??this.cluster.defaultCloudMapNamespace;if(sdNamespace===void 0)throw new Error("Cannot enable service discovery if a Cloudmap Namespace has not been created in the cluster.");if(sdNamespace.type===cloudmap().NamespaceType.HTTP)throw new Error("Cannot enable DNS service discovery for HTTP Cloudmap Namespace.");const networkMode=this.taskDefinition.networkMode;if(networkMode===task_definition_1().NetworkMode.NONE)throw new Error("Cannot use a service discovery if NetworkMode is None. Use Bridge, Host or AwsVpc instead.");let dnsRecordType=options.dnsRecordType;if((networkMode===task_definition_1().NetworkMode.BRIDGE||networkMode===task_definition_1().NetworkMode.HOST)&&(dnsRecordType===void 0&&(dnsRecordType=cloudmap().DnsRecordType.SRV),dnsRecordType!==cloudmap().DnsRecordType.SRV))throw new Error("SRV records must be used when network mode is Bridge or Host.");networkMode===task_definition_1().NetworkMode.AWS_VPC&&dnsRecordType===void 0&&(dnsRecordType=cloudmap().DnsRecordType.A);const{containerName,containerPort}=determineContainerNameAndPort({taskDefinition:this.taskDefinition,dnsRecordType,container:options.container,containerPort:options.containerPort}),cloudmapService=new(cloudmap()).Service(this,"CloudmapService",{namespace:sdNamespace,name:options.name,dnsRecordType,customHealthCheck:{failureThreshold:options.failureThreshold||1},dnsTtl:options.dnsTtl}),serviceArn=cloudmapService.serviceArn;return this.addServiceRegistry({arn:serviceArn,containerName,containerPort}),this.cloudmapService=cloudmapService,cloudmapService}associateCloudMapService(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_AssociateCloudMapServiceOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.associateCloudMapService),error}const service=options.service,{containerName,containerPort}=determineContainerNameAndPort({taskDefinition:this.taskDefinition,dnsRecordType:service.dnsRecordType,container:options.container,containerPort:options.containerPort});this.addServiceRegistry({arn:service.serviceArn,containerName,containerPort})}metric(metricName,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric),error}return new(cloudwatch()).Metric({namespace:"AWS/ECS",metricName,dimensionsMap:{ClusterName:this.cluster.clusterName,ServiceName:this.serviceName},...props}).attachTo(this)}metricMemoryUtilization(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricMemoryUtilization),error}return this.metric("MemoryUtilization",props)}metricCpuUtilization(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricCpuUtilization),error}return this.metric("CPUUtilization",props)}configureAwsVpcNetworking(vpc,assignPublicIp,vpcSubnets,securityGroup){vpcSubnets===void 0&&(vpcSubnets=assignPublicIp?{subnetType:ec2().SubnetType.PUBLIC}:{}),securityGroup===void 0&&(securityGroup=new(ec2()).SecurityGroup(this,"SecurityGroup",{vpc})),this.connections.addSecurityGroup(securityGroup),this.networkConfiguration={awsvpcConfiguration:{assignPublicIp:assignPublicIp?"ENABLED":"DISABLED",subnets:vpc.selectSubnets(vpcSubnets).subnetIds,securityGroups:core_1().Lazy.list({produce:()=>[securityGroup.securityGroupId]})}}}configureAwsVpcNetworkingWithSecurityGroups(vpc,assignPublicIp,vpcSubnets,securityGroups){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_IVpc(vpc),jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_SubnetSelection(vpcSubnets)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.configureAwsVpcNetworkingWithSecurityGroups),error}vpcSubnets===void 0&&(vpcSubnets=assignPublicIp?{subnetType:ec2().SubnetType.PUBLIC}:{}),(securityGroups===void 0||securityGroups.length===0)&&(securityGroups=[new(ec2()).SecurityGroup(this,"SecurityGroup",{vpc})]),securityGroups.forEach(sg=>{this.connections.addSecurityGroup(sg)},this),this.networkConfiguration={awsvpcConfiguration:{assignPublicIp:assignPublicIp?"ENABLED":"DISABLED",subnets:vpc.selectSubnets(vpcSubnets).subnetIds,securityGroups:securityGroups.map(sg=>sg.securityGroupId)}}}renderServiceRegistry(registry){return{registryArn:registry.arn,containerName:registry.containerName,containerPort:registry.containerPort}}attachToELB(loadBalancer,containerName,containerPort){if(this.taskDefinition.networkMode===task_definition_1().NetworkMode.AWS_VPC)throw new Error("Cannot use a Classic Load Balancer if NetworkMode is AwsVpc. Use Host or Bridge instead.");if(this.taskDefinition.networkMode===task_definition_1().NetworkMode.NONE)throw new Error("Cannot use a Classic Load Balancer if NetworkMode is None. Use Host or Bridge instead.");this.loadBalancers.push({loadBalancerName:loadBalancer.loadBalancerName,containerName,containerPort})}attachToELBv2(targetGroup,containerName,containerPort){if(this.taskDefinition.networkMode===task_definition_1().NetworkMode.NONE)throw new Error("Cannot use a load balancer if NetworkMode is None. Use Bridge, Host or AwsVpc instead.");return this.loadBalancers.push({targetGroupArn:targetGroup.targetGroupArn,containerName,containerPort}),this.resource.node.addDependency(targetGroup.loadBalancerAttached),{targetType:this.taskDefinition.networkMode===task_definition_1().NetworkMode.AWS_VPC?elbv2().TargetType.IP:elbv2().TargetType.INSTANCE}}get defaultLoadBalancerTarget(){return this.loadBalancerTarget({containerName:this.taskDefinition.defaultContainer.containerName})}makeAutoScalingRole(){return iam().Role.fromRoleArn(this,"ScalingRole",core_1().Stack.of(this).formatArn({region:"",service:"iam",resource:"role/aws-service-role/ecs.application-autoscaling.amazonaws.com",resourceName:"AWSServiceRoleForApplicationAutoScaling_ECSService"}))}addServiceRegistry(registry){if(this.serviceRegistries.length>=1)throw new Error("Cannot associate with the given service discovery registry. ECS supports at most one service registry per service.");const sr=this.renderServiceRegistry(registry);this.serviceRegistries.push(sr)}evaluateHealthGracePeriod(providedHealthCheckGracePeriod){return core_1().Lazy.any({produce:()=>providedHealthCheckGracePeriod?.toSeconds()??(this.loadBalancers.length>0?60:void 0)})}enableExecuteCommand(){this.taskDefinition.addToTaskRolePolicy(new(iam()).PolicyStatement({actions:["ssmmessages:CreateControlChannel","ssmmessages:CreateDataChannel","ssmmessages:OpenControlChannel","ssmmessages:OpenDataChannel"],resources:["*"]}))}deploymentAlarmsAvailableInRegion(){const unsupportedPartitions=["aws-cn","aws-us-gov","aws-iso","aws-iso-b"],currentRegion=region_info_1().RegionInfo.get(this.stack.resolve(this.stack.region));return currentRegion.partition?!unsupportedPartitions.includes(currentRegion.partition):!0}renderTimeout(idleTimeout,perRequestTimeout){if(!(!idleTimeout&&!perRequestTimeout)){if(idleTimeout&&idleTimeout.toMilliseconds()>0&&idleTimeout.toMilliseconds()<core_1().Duration.seconds(1).toMilliseconds())throw new Error(`idleTimeout must be at least 1 second or 0 to disable it, got ${idleTimeout.toMilliseconds()}ms.`);if(perRequestTimeout&&perRequestTimeout.toMilliseconds()>0&&perRequestTimeout.toMilliseconds()<core_1().Duration.seconds(1).toMilliseconds())throw new Error(`perRequestTimeout must be at least 1 second or 0 to disable it, got ${perRequestTimeout.toMilliseconds()}ms.`);return{idleTimeoutSeconds:idleTimeout?.toSeconds(),perRequestTimeoutSeconds:perRequestTimeout?.toSeconds()}}}}exports.BaseService=BaseService,_b=JSII_RTTI_SYMBOL_1,BaseService[_b]={fqn:"aws-cdk-lib.aws_ecs.BaseService",version:"2.149.0"},BaseService.MIN_PORT=1,BaseService.MAX_PORT=65535;var LaunchType;(function(LaunchType2){LaunchType2.EC2="EC2",LaunchType2.FARGATE="FARGATE",LaunchType2.EXTERNAL="EXTERNAL"})(LaunchType||(exports.LaunchType=LaunchType={}));var DeploymentControllerType;(function(DeploymentControllerType2){DeploymentControllerType2.ECS="ECS",DeploymentControllerType2.CODE_DEPLOY="CODE_DEPLOY",DeploymentControllerType2.EXTERNAL="EXTERNAL"})(DeploymentControllerType||(exports.DeploymentControllerType=DeploymentControllerType={}));var PropagatedTagSource;(function(PropagatedTagSource2){PropagatedTagSource2.SERVICE="SERVICE",PropagatedTagSource2.TASK_DEFINITION="TASK_DEFINITION",PropagatedTagSource2.NONE="NONE"})(PropagatedTagSource||(exports.PropagatedTagSource=PropagatedTagSource={}));function determineContainerNameAndPort(options){if(options.dnsRecordType===cloudmap().DnsRecordType.SRV){if(options.container&&options.container.taskDefinition!=options.taskDefinition)throw new Error("Cannot add discovery for a container from another task definition");const container=options.container??options.taskDefinition.defaultContainer;if(options.containerPort&&!container.portMappings.some(mapping=>mapping.containerPort===options.containerPort))throw new Error("Cannot add discovery for a container port that has not been mapped");return{containerName:container.containerName,containerPort:options.containerPort??options.taskDefinition.defaultContainer.containerPort}}return{}}
