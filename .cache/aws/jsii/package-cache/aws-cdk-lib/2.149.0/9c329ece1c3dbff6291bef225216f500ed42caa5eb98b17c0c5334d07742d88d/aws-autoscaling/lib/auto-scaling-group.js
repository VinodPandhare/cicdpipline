"use strict";var _a,_b,_c,_d,_e,_f,_g;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HealthCheck=exports.ScalingProcess=exports.ScalingEvents=exports.ScalingEvent=exports.UpdateType=exports.AutoScalingGroup=exports.GroupMetric=exports.GroupMetrics=exports.UpdatePolicy=exports.Signals=exports.SpotAllocationStrategy=exports.OnDemandAllocationStrategy=exports.Monitoring=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var aspects_1=()=>{var tmp=require("./aspects");return aspects_1=()=>tmp,tmp},autoscaling_generated_1=()=>{var tmp=require("./autoscaling.generated");return autoscaling_generated_1=()=>tmp,tmp},lifecycle_hook_1=()=>{var tmp=require("./lifecycle-hook");return lifecycle_hook_1=()=>tmp,tmp},scheduled_action_1=()=>{var tmp=require("./scheduled-action");return scheduled_action_1=()=>tmp,tmp},step_scaling_policy_1=()=>{var tmp=require("./step-scaling-policy");return step_scaling_policy_1=()=>tmp,tmp},target_tracking_scaling_policy_1=()=>{var tmp=require("./target-tracking-scaling-policy");return target_tracking_scaling_policy_1=()=>tmp,tmp},termination_policy_1=()=>{var tmp=require("./termination-policy");return termination_policy_1=()=>tmp,tmp},volume_1=()=>{var tmp=require("./volume");return volume_1=()=>tmp,tmp},warm_pool_1=()=>{var tmp=require("./warm-pool");return warm_pool_1=()=>tmp,tmp},ec2=()=>{var tmp=require("../../aws-ec2");return ec2=()=>tmp,tmp},elbv2=()=>{var tmp=require("../../aws-elasticloadbalancingv2");return elbv2=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};const NAME_TAG="Name";var Monitoring;(function(Monitoring2){Monitoring2[Monitoring2.BASIC=0]="BASIC",Monitoring2[Monitoring2.DETAILED=1]="DETAILED"})(Monitoring||(exports.Monitoring=Monitoring={}));var OnDemandAllocationStrategy;(function(OnDemandAllocationStrategy2){OnDemandAllocationStrategy2.PRIORITIZED="prioritized",OnDemandAllocationStrategy2.LOWEST_PRICE="lowest-price"})(OnDemandAllocationStrategy||(exports.OnDemandAllocationStrategy=OnDemandAllocationStrategy={}));var SpotAllocationStrategy;(function(SpotAllocationStrategy2){SpotAllocationStrategy2.LOWEST_PRICE="lowest-price",SpotAllocationStrategy2.CAPACITY_OPTIMIZED="capacity-optimized",SpotAllocationStrategy2.CAPACITY_OPTIMIZED_PRIORITIZED="capacity-optimized-prioritized",SpotAllocationStrategy2.PRICE_CAPACITY_OPTIMIZED="price-capacity-optimized"})(SpotAllocationStrategy||(exports.SpotAllocationStrategy=SpotAllocationStrategy={}));class Signals{static waitForAll(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_SignalsOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.waitForAll),error}return validatePercentage(options.minSuccessPercentage),new class extends Signals{renderCreationPolicy(renderOptions){return this.doRender(options,renderOptions.desiredCapacity??renderOptions.minCapacity)}}}static waitForMinCapacity(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_SignalsOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.waitForMinCapacity),error}return validatePercentage(options.minSuccessPercentage),new class extends Signals{renderCreationPolicy(renderOptions){return this.doRender(options,renderOptions.minCapacity)}}}static waitForCount(count,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_SignalsOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.waitForCount),error}return validatePercentage(options.minSuccessPercentage),new class extends Signals{renderCreationPolicy(){return this.doRender(options,count)}}}doRender(options,count){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_SignalsOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.doRender),error}const minSuccessfulInstancesPercent=validatePercentage(options.minSuccessPercentage);return{...options.minSuccessPercentage!==void 0?{autoScalingCreationPolicy:{minSuccessfulInstancesPercent}}:{},resourceSignal:{count,timeout:options.timeout?.toIsoString()}}}}exports.Signals=Signals,_a=JSII_RTTI_SYMBOL_1,Signals[_a]={fqn:"aws-cdk-lib.aws_autoscaling.Signals",version:"2.149.0"};class UpdatePolicy{static replacingUpdate(){return new class extends UpdatePolicy{_renderUpdatePolicy(){return{autoScalingReplacingUpdate:{willReplace:!0}}}}}static rollingUpdate(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_RollingUpdateOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.rollingUpdate),error}const minSuccessPercentage=validatePercentage(options.minSuccessPercentage);return new class extends UpdatePolicy{_renderUpdatePolicy(renderOptions){return{autoScalingRollingUpdate:{maxBatchSize:options.maxBatchSize,minInstancesInService:options.minInstancesInService,suspendProcesses:options.suspendProcesses??DEFAULT_SUSPEND_PROCESSES,minSuccessfulInstancesPercent:minSuccessPercentage??renderOptions.creationPolicy?.autoScalingCreationPolicy?.minSuccessfulInstancesPercent,waitOnResourceSignals:options.waitOnResourceSignals??renderOptions.creationPolicy?.resourceSignal!==void 0?!0:void 0,pauseTime:options.pauseTime?.toIsoString()??renderOptions.creationPolicy?.resourceSignal?.timeout}}}}}}exports.UpdatePolicy=UpdatePolicy,_b=JSII_RTTI_SYMBOL_1,UpdatePolicy[_b]={fqn:"aws-cdk-lib.aws_autoscaling.UpdatePolicy",version:"2.149.0"};class GroupMetrics{static all(){return new GroupMetrics}constructor(...metrics){this._metrics=new Set;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_GroupMetric(metrics)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,GroupMetrics),error}metrics?.forEach(metric=>this._metrics.add(metric))}}exports.GroupMetrics=GroupMetrics,_c=JSII_RTTI_SYMBOL_1,GroupMetrics[_c]={fqn:"aws-cdk-lib.aws_autoscaling.GroupMetrics",version:"2.149.0"};class GroupMetric{constructor(name){this.name=name}}exports.GroupMetric=GroupMetric,_d=JSII_RTTI_SYMBOL_1,GroupMetric[_d]={fqn:"aws-cdk-lib.aws_autoscaling.GroupMetric",version:"2.149.0"},GroupMetric.MIN_SIZE=new GroupMetric("GroupMinSize"),GroupMetric.MAX_SIZE=new GroupMetric("GroupMaxSize"),GroupMetric.DESIRED_CAPACITY=new GroupMetric("GroupDesiredCapacity"),GroupMetric.IN_SERVICE_INSTANCES=new GroupMetric("GroupInServiceInstances"),GroupMetric.PENDING_INSTANCES=new GroupMetric("GroupPendingInstances"),GroupMetric.STANDBY_INSTANCES=new GroupMetric("GroupStandbyInstances"),GroupMetric.TERMINATING_INSTANCES=new GroupMetric("GroupTerminatingInstances"),GroupMetric.TOTAL_INSTANCES=new GroupMetric("GroupTotalInstances");class AutoScalingGroupBase extends core_1().Resource{constructor(){super(...arguments),this.grantPrincipal=new(iam()).UnknownPrincipal({resource:this}),this.hasCalledScaleOnRequestCount=!1}addLifecycleHook(id,props){return new(lifecycle_hook_1()).LifecycleHook(this,`LifecycleHook${id}`,{autoScalingGroup:this,...props})}addWarmPool(options){return new(warm_pool_1()).WarmPool(this,"WarmPool",{autoScalingGroup:this,...options})}scaleOnSchedule(id,props){return new(scheduled_action_1()).ScheduledAction(this,`ScheduledAction${id}`,{autoScalingGroup:this,...props})}scaleOnCpuUtilization(id,props){return new(target_tracking_scaling_policy_1()).TargetTrackingScalingPolicy(this,`ScalingPolicy${id}`,{autoScalingGroup:this,predefinedMetric:target_tracking_scaling_policy_1().PredefinedMetric.ASG_AVERAGE_CPU_UTILIZATION,targetValue:props.targetUtilizationPercent,...props})}scaleOnIncomingBytes(id,props){return new(target_tracking_scaling_policy_1()).TargetTrackingScalingPolicy(this,`ScalingPolicy${id}`,{autoScalingGroup:this,predefinedMetric:target_tracking_scaling_policy_1().PredefinedMetric.ASG_AVERAGE_NETWORK_IN,targetValue:props.targetBytesPerSecond,...props})}scaleOnOutgoingBytes(id,props){return new(target_tracking_scaling_policy_1()).TargetTrackingScalingPolicy(this,`ScalingPolicy${id}`,{autoScalingGroup:this,predefinedMetric:target_tracking_scaling_policy_1().PredefinedMetric.ASG_AVERAGE_NETWORK_OUT,targetValue:props.targetBytesPerSecond,...props})}scaleOnRequestCount(id,props){if(this.albTargetGroup===void 0)throw new Error("Attach the AutoScalingGroup to a non-imported Application Load Balancer before calling scaleOnRequestCount()");const resourceLabel=`${this.albTargetGroup.firstLoadBalancerFullName}/${this.albTargetGroup.targetGroupFullName}`;if(props.targetRequestsPerMinute===void 0==(props.targetRequestsPerSecond===void 0))throw new Error("Specify exactly one of 'targetRequestsPerMinute' or 'targetRequestsPerSecond'");let rpm;if(props.targetRequestsPerSecond!==void 0){if(core_1().Token.isUnresolved(props.targetRequestsPerSecond))throw new Error("'targetRequestsPerSecond' cannot be an unresolved value; use 'targetRequestsPerMinute' instead.");rpm=props.targetRequestsPerSecond*60}else rpm=props.targetRequestsPerMinute;const policy=new(target_tracking_scaling_policy_1()).TargetTrackingScalingPolicy(this,`ScalingPolicy${id}`,{autoScalingGroup:this,predefinedMetric:target_tracking_scaling_policy_1().PredefinedMetric.ALB_REQUEST_COUNT_PER_TARGET,targetValue:rpm,resourceLabel,...props});return policy.node.addDependency(this.albTargetGroup.loadBalancerAttached),this.hasCalledScaleOnRequestCount=!0,policy}scaleToTrackMetric(id,props){return new(target_tracking_scaling_policy_1()).TargetTrackingScalingPolicy(this,`ScalingPolicy${id}`,{autoScalingGroup:this,customMetric:props.metric,...props})}scaleOnMetric(id,props){return new(step_scaling_policy_1()).StepScalingPolicy(this,id,{...props,autoScalingGroup:this})}addUserData(..._commands){}}class AutoScalingGroup extends AutoScalingGroupBase{static fromAutoScalingGroupName(scope,id,autoScalingGroupName){class Import extends AutoScalingGroupBase{constructor(){super(...arguments),this.autoScalingGroupName=autoScalingGroupName,this.autoScalingGroupArn=core_1().Stack.of(this).formatArn({service:"autoscaling",resource:"autoScalingGroup:*:autoScalingGroupName",resourceName:this.autoScalingGroupName}),this.osType=ec2().OperatingSystemType.UNKNOWN}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.autoScalingGroupName}),this.loadBalancerNames=[],this.targetGroupArns=[],this.groupMetrics=[],this.notifications=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_AutoScalingGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AutoScalingGroup),error}if(this.newInstancesProtectedFromScaleIn=props.newInstancesProtectedFromScaleIn,props.initOptions&&!props.init)throw new Error("Setting 'initOptions' requires that 'init' is also set");props.groupMetrics&&this.groupMetrics.push(...props.groupMetrics);let launchConfig,launchTemplateFromConfig;if(props.launchTemplate||props.mixedInstancesPolicy){this.verifyNoLaunchConfigPropIsGiven(props);const bareLaunchTemplate=props.launchTemplate,mixedInstancesPolicy=props.mixedInstancesPolicy;if(bareLaunchTemplate&&mixedInstancesPolicy)throw new Error("Setting 'mixedInstancesPolicy' must not be set when 'launchTemplate' is set");if(bareLaunchTemplate&&bareLaunchTemplate instanceof ec2().LaunchTemplate){if(!bareLaunchTemplate.instanceType)throw new Error("Setting 'launchTemplate' requires its 'instanceType' to be set");if(!bareLaunchTemplate.imageId)throw new Error("Setting 'launchTemplate' requires its 'machineImage' to be set");this.launchTemplate=bareLaunchTemplate}if(mixedInstancesPolicy&&mixedInstancesPolicy.launchTemplate instanceof ec2().LaunchTemplate){if(!mixedInstancesPolicy.launchTemplate.imageId)throw new Error("Setting 'mixedInstancesPolicy.launchTemplate' requires its 'machineImage' to be set");this.launchTemplate=mixedInstancesPolicy.launchTemplate}this._role=this.launchTemplate?.role,this.grantPrincipal=this._role||new(iam()).UnknownPrincipal({resource:this}),this.osType=this.launchTemplate?.osType??ec2().OperatingSystemType.UNKNOWN}else{if(!props.machineImage)throw new Error("Setting 'machineImage' is required when 'launchTemplate' and 'mixedInstancesPolicy' is not set");if(!props.instanceType)throw new Error("Setting 'instanceType' is required when 'launchTemplate' and 'mixedInstancesPolicy' is not set");if(props.keyName&&props.keyPair)throw new Error("Cannot specify both of 'keyName' and 'keyPair'; prefer 'keyPair'");core_1().Tags.of(this).add(NAME_TAG,this.node.path),this.securityGroup=props.securityGroup||new(ec2()).SecurityGroup(this,"InstanceSecurityGroup",{vpc:props.vpc,allowAllOutbound:props.allowAllOutbound!==!1}),this._role=props.role||new(iam()).Role(this,"InstanceRole",{roleName:core_1().PhysicalName.GENERATE_IF_NEEDED,assumedBy:new(iam()).ServicePrincipal("ec2.amazonaws.com")}),this.grantPrincipal=this._role;const iamProfile=new(iam()).CfnInstanceProfile(this,"InstanceProfile",{roles:[this.role.roleName]});if(core_1().FeatureFlags.of(this).isEnabled(cx_api_1().AUTOSCALING_GENERATE_LAUNCH_TEMPLATE)){const instanceProfile=iam().InstanceProfile.fromInstanceProfileAttributes(this,"ImportedInstanceProfile",{instanceProfileArn:iamProfile.attrArn,role:this.role});launchTemplateFromConfig=new(ec2()).LaunchTemplate(this,"LaunchTemplate",{machineImage:props.machineImage,instanceType:props.instanceType,detailedMonitoring:props.instanceMonitoring!==void 0&&props.instanceMonitoring===Monitoring.DETAILED,securityGroup:this.securityGroup,userData:props.userData,associatePublicIpAddress:props.associatePublicIpAddress,spotOptions:props.spotPrice!==void 0?{maxPrice:parseFloat(props.spotPrice)}:void 0,blockDevices:props.blockDevices,instanceProfile,keyPair:props.keyPair,...props.keyName?{keyName:props.keyName}:{}}),this.osType=launchTemplateFromConfig.osType,this.launchTemplate=launchTemplateFromConfig}else{if(this._connections=new(ec2()).Connections({securityGroups:[this.securityGroup]}),this.securityGroups=[this.securityGroup],props.keyPair)throw new Error("Can only use 'keyPair' when feature flag 'AUTOSCALING_GENERATE_LAUNCH_TEMPLATE' is set");const imageConfig=props.machineImage.getImage(this);this._userData=props.userData??imageConfig.userData;const userDataToken=core_1().Lazy.string({produce:()=>core_1().Fn.base64(this.userData.render())}),securityGroupsToken=core_1().Lazy.list({produce:()=>this.securityGroups.map(sg=>sg.securityGroupId)});launchConfig=new(autoscaling_generated_1()).CfnLaunchConfiguration(this,"LaunchConfig",{imageId:imageConfig.imageId,keyName:props.keyName,instanceType:props.instanceType.toString(),instanceMonitoring:props.instanceMonitoring!==void 0?props.instanceMonitoring===Monitoring.DETAILED:void 0,securityGroups:securityGroupsToken,iamInstanceProfile:iamProfile.ref,userData:userDataToken,associatePublicIpAddress:props.associatePublicIpAddress,spotPrice:props.spotPrice,blockDeviceMappings:props.blockDevices!==void 0?synthesizeBlockDeviceMappings(this,props.blockDevices):void 0}),launchConfig.node.addDependency(this.role),this.osType=imageConfig.osType}}props.ssmSessionPermissions&&this._role&&this._role.addManagedPolicy(iam().ManagedPolicy.fromAwsManagedPolicyName("AmazonSSMManagedInstanceCore"));const desiredCapacity=props.desiredCapacity,minCapacity=props.minCapacity??1,maxCapacity=props.maxCapacity??desiredCapacity??(core_1().Token.isUnresolved(minCapacity)?minCapacity:Math.max(minCapacity,1));if((0,core_1().withResolved)(minCapacity,maxCapacity,(min,max)=>{if(min>max)throw new Error(`minCapacity (${min}) should be <= maxCapacity (${max})`)}),(0,core_1().withResolved)(desiredCapacity,minCapacity,(desired,min)=>{if(desired!==void 0&&desired<min)throw new Error(`Should have minCapacity (${min}) <= desiredCapacity (${desired})`)}),(0,core_1().withResolved)(desiredCapacity,maxCapacity,(desired,max)=>{if(desired!==void 0&&max<desired)throw new Error(`Should have desiredCapacity (${desired}) <= maxCapacity (${max})`)}),desiredCapacity!==void 0&&core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-autoscaling:desiredCapacitySet","desiredCapacity has been configured. Be aware this will reset the size of your AutoScalingGroup on every deployment. See https://github.com/aws/aws-cdk/issues/5215"),this.maxInstanceLifetime=props.maxInstanceLifetime,this.maxInstanceLifetime&&!this.maxInstanceLifetime.isUnresolved()&&this.maxInstanceLifetime.toSeconds()!==0&&(this.maxInstanceLifetime.toSeconds()<86400||this.maxInstanceLifetime.toSeconds()>31536e3))throw new Error("maxInstanceLifetime must be between 1 and 365 days (inclusive)");if(props.notificationsTopic&&props.notifications)throw new Error("Cannot set 'notificationsTopic' and 'notifications', 'notificationsTopic' is deprecated use 'notifications' instead");props.notificationsTopic&&(this.notifications=[{topic:props.notificationsTopic}]),props.notifications&&(this.notifications=props.notifications.map(nc=>({topic:nc.topic,scalingEvents:nc.scalingEvents??ScalingEvents.ALL})));const{subnetIds,hasPublic}=props.vpc.selectSubnets(props.vpcSubnets),terminationPolicies=[];props.terminationPolicies&&props.terminationPolicies.forEach((terminationPolicy,index)=>{if(terminationPolicy===termination_policy_1().TerminationPolicy.CUSTOM_LAMBDA_FUNCTION){if(index!==0)throw new Error("TerminationPolicy.CUSTOM_LAMBDA_FUNCTION must be specified first in the termination policies");if(!props.terminationPolicyCustomLambdaFunctionArn)throw new Error("terminationPolicyCustomLambdaFunctionArn property must be specified if the TerminationPolicy.CUSTOM_LAMBDA_FUNCTION is used");terminationPolicies.push(props.terminationPolicyCustomLambdaFunctionArn)}else terminationPolicies.push(terminationPolicy)});const asgProps={autoScalingGroupName:this.physicalName,cooldown:props.cooldown?.toSeconds().toString(),minSize:core_1().Tokenization.stringifyNumber(minCapacity),maxSize:core_1().Tokenization.stringifyNumber(maxCapacity),desiredCapacity:desiredCapacity!==void 0?core_1().Tokenization.stringifyNumber(desiredCapacity):void 0,loadBalancerNames:core_1().Lazy.list({produce:()=>this.loadBalancerNames},{omitEmpty:!0}),targetGroupArns:core_1().Lazy.list({produce:()=>this.targetGroupArns},{omitEmpty:!0}),notificationConfigurations:this.renderNotificationConfiguration(),metricsCollection:core_1().Lazy.any({produce:()=>this.renderMetricsCollection()}),vpcZoneIdentifier:subnetIds,healthCheckType:props.healthCheck&&props.healthCheck.type,healthCheckGracePeriod:props.healthCheck&&props.healthCheck.gracePeriod&&props.healthCheck.gracePeriod.toSeconds(),maxInstanceLifetime:this.maxInstanceLifetime?this.maxInstanceLifetime.toSeconds():void 0,newInstancesProtectedFromScaleIn:core_1().Lazy.any({produce:()=>this.newInstancesProtectedFromScaleIn}),terminationPolicies:terminationPolicies.length===0?void 0:terminationPolicies,defaultInstanceWarmup:props.defaultInstanceWarmup?.toSeconds(),capacityRebalance:props.capacityRebalance,instanceMaintenancePolicy:this.renderInstanceMaintenancePolicy(props.minHealthyPercentage,props.maxHealthyPercentage),...this.getLaunchSettings(launchConfig,props.launchTemplate??launchTemplateFromConfig,props.mixedInstancesPolicy)};if(!hasPublic&&props.associatePublicIpAddress)throw new Error("To set 'associatePublicIpAddress: true' you must select Public subnets (vpcSubnets: { subnetType: SubnetType.PUBLIC })");this.autoScalingGroup=new(autoscaling_generated_1()).CfnAutoScalingGroup(this,"ASG",asgProps),this.autoScalingGroupName=this.getResourceNameAttribute(this.autoScalingGroup.ref),this.autoScalingGroupArn=core_1().Stack.of(this).formatArn({service:"autoscaling",resource:"autoScalingGroup:*:autoScalingGroupName",resourceName:this.autoScalingGroupName}),this.node.defaultChild=this.autoScalingGroup,this.applyUpdatePolicies(props,{desiredCapacity,minCapacity}),props.init&&this.applyCloudFormationInit(props.init,props.initOptions),this.spotPrice=props.spotPrice,props.requireImdsv2&&core_1().Aspects.of(this).add(new(aspects_1()).AutoScalingGroupRequireImdsv2Aspect),this.node.addValidation({validate:()=>this.validateTargetGroup()})}addSecurityGroup(securityGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_ISecurityGroup(securityGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addSecurityGroup),error}if(core_1().FeatureFlags.of(this).isEnabled(cx_api_1().AUTOSCALING_GENERATE_LAUNCH_TEMPLATE))this.launchTemplate?.addSecurityGroup(securityGroup);else{if(!this.securityGroups)throw new Error("You cannot add security groups when the Auto Scaling Group is created from a Launch Template.");this.securityGroups.push(securityGroup)}}attachToClassicLB(loadBalancer){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancing_LoadBalancer(loadBalancer)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToClassicLB),error}this.loadBalancerNames.push(loadBalancer.loadBalancerName)}attachToApplicationTargetGroup(targetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_IApplicationTargetGroup(targetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToApplicationTargetGroup),error}return this.targetGroupArns.push(targetGroup.targetGroupArn),targetGroup instanceof elbv2().ApplicationTargetGroup&&(this.albTargetGroup=targetGroup),targetGroup.registerConnectable(this),{targetType:elbv2().TargetType.INSTANCE}}attachToNetworkTargetGroup(targetGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkTargetGroup(targetGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachToNetworkTargetGroup),error}return this.targetGroupArns.push(targetGroup.targetGroupArn),{targetType:elbv2().TargetType.INSTANCE}}addUserData(...commands){this.userData.addCommands(...commands)}addToRolePolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToRolePolicy),error}this.role.addToPrincipalPolicy(statement)}applyCloudFormationInit(init,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_CloudFormationInit(init),jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_ApplyCloudFormationInitOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.applyCloudFormationInit),error}if(!this.autoScalingGroup.cfnOptions.creationPolicy?.resourceSignal)throw new Error("When applying CloudFormationInit, you must also configure signals by supplying 'signals' at instantiation time.");init.attach(this.autoScalingGroup,{platform:this.osType,instanceRole:this.role,userData:this.userData,configSets:options.configSets,embedFingerprint:options.embedFingerprint,printLog:options.printLog,ignoreFailures:options.ignoreFailures,includeRole:options.includeRole,includeUrl:options.includeUrl})}protectNewInstancesFromScaleIn(){this.newInstancesProtectedFromScaleIn=!0}areNewInstancesProtectedFromScaleIn(){return this.newInstancesProtectedFromScaleIn===!0}get connections(){if(this._connections)return this._connections;if(this.launchTemplate)return this.launchTemplate.connections;throw new Error("AutoScalingGroup can only be used as IConnectable if it is not created from an imported Launch Template.")}get userData(){if(this._userData)return this._userData;if(this.launchTemplate?.userData)return this.launchTemplate.userData;throw new Error("The provided launch template does not expose its user data.")}get role(){if(this._role)return this._role;throw new Error("The provided launch template does not expose or does not define its role.")}verifyNoLaunchConfigPropIsGiven(props){if(props.machineImage)throw new Error("Setting 'machineImage' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.instanceType)throw new Error("Setting 'instanceType' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.role)throw new Error("Setting 'role' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.userData)throw new Error("Setting 'userData' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.securityGroup)throw new Error("Setting 'securityGroup' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.keyName)throw new Error("Setting 'keyName' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.keyPair)throw new Error("Setting 'keyPair' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.instanceMonitoring)throw new Error("Setting 'instanceMonitoring' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.associatePublicIpAddress!==void 0)throw new Error("Setting 'associatePublicIpAddress' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.spotPrice)throw new Error("Setting 'spotPrice' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set");if(props.blockDevices)throw new Error("Setting 'blockDevices' must not be set when 'launchTemplate' or 'mixedInstancesPolicy' is set")}applyUpdatePolicies(props,signalOptions){const oldProps=["updateType","rollingUpdateConfiguration","resourceSignalCount","resourceSignalTimeout","replacingUpdateMinSuccessfulInstancesPercent"];for(const prop of oldProps)if((props.signals||props.updatePolicy)&&props[prop]!==void 0)throw new Error(`Cannot set 'signals'/'updatePolicy' and '${prop}' together. Prefer 'signals'/'updatePolicy'`);props={...props,updatePolicy:props.updatePolicy??(props.init?UpdatePolicy.rollingUpdate():void 0)},props.signals||props.updatePolicy?this.applyNewSignalUpdatePolicies(props,signalOptions):this.applyLegacySignalUpdatePolicies(props),props.ignoreUnmodifiedSizeProperties!==!1&&(this.autoScalingGroup.cfnOptions.updatePolicy={...this.autoScalingGroup.cfnOptions.updatePolicy,autoScalingScheduledAction:{ignoreUnmodifiedGroupSizeProperties:!0}}),props.signals&&!props.init&&this.addToRolePolicy(new(iam()).PolicyStatement({actions:["cloudformation:SignalResource"],resources:[core_1().Aws.STACK_ID]}))}applyNewSignalUpdatePolicies(props,signalOptions){this.autoScalingGroup.cfnOptions.creationPolicy=props.signals?.renderCreationPolicy(signalOptions),this.autoScalingGroup.cfnOptions.updatePolicy=props.updatePolicy?._renderUpdatePolicy({creationPolicy:this.autoScalingGroup.cfnOptions.creationPolicy})}applyLegacySignalUpdatePolicies(props){props.updateType===UpdateType.REPLACING_UPDATE?(this.autoScalingGroup.cfnOptions.updatePolicy={...this.autoScalingGroup.cfnOptions.updatePolicy,autoScalingReplacingUpdate:{willReplace:!0}},props.replacingUpdateMinSuccessfulInstancesPercent!==void 0&&(this.autoScalingGroup.cfnOptions.creationPolicy={...this.autoScalingGroup.cfnOptions.creationPolicy,autoScalingCreationPolicy:{minSuccessfulInstancesPercent:validatePercentage(props.replacingUpdateMinSuccessfulInstancesPercent)}})):props.updateType===UpdateType.ROLLING_UPDATE&&(this.autoScalingGroup.cfnOptions.updatePolicy={...this.autoScalingGroup.cfnOptions.updatePolicy,autoScalingRollingUpdate:renderRollingUpdateConfig(props.rollingUpdateConfiguration)}),(props.resourceSignalCount!==void 0||props.resourceSignalTimeout!==void 0)&&(this.autoScalingGroup.cfnOptions.creationPolicy={...this.autoScalingGroup.cfnOptions.creationPolicy,resourceSignal:{count:props.resourceSignalCount,timeout:props.resourceSignalTimeout&&props.resourceSignalTimeout.toIsoString()}})}renderNotificationConfiguration(){if(this.notifications.length!==0)return this.notifications.map(notification=>({topicArn:notification.topic.topicArn,notificationTypes:notification.scalingEvents?notification.scalingEvents._types:ScalingEvents.ALL._types}))}renderMetricsCollection(){if(this.groupMetrics.length!==0)return this.groupMetrics.map(group=>({granularity:"1Minute",metrics:group._metrics?.size!==0?[...group._metrics].map(m=>m.name):void 0}))}getLaunchSettings(launchConfig,launchTemplate,mixedInstancesPolicy){if(launchConfig)return{launchConfigurationName:launchConfig.ref};if(launchTemplate)return{launchTemplate:this.convertILaunchTemplateToSpecification(launchTemplate)};if(mixedInstancesPolicy){let instancesDistribution;if(mixedInstancesPolicy.instancesDistribution){const dist=mixedInstancesPolicy.instancesDistribution;instancesDistribution={onDemandAllocationStrategy:dist.onDemandAllocationStrategy?.toString(),onDemandBaseCapacity:dist.onDemandBaseCapacity,onDemandPercentageAboveBaseCapacity:dist.onDemandPercentageAboveBaseCapacity,spotAllocationStrategy:dist.spotAllocationStrategy?.toString(),spotInstancePools:dist.spotInstancePools,spotMaxPrice:dist.spotMaxPrice}}return{mixedInstancesPolicy:{instancesDistribution,launchTemplate:{launchTemplateSpecification:this.convertILaunchTemplateToSpecification(mixedInstancesPolicy.launchTemplate),...mixedInstancesPolicy.launchTemplateOverrides?{overrides:mixedInstancesPolicy.launchTemplateOverrides.map(override=>{if(override.weightedCapacity&&Math.floor(override.weightedCapacity)!==override.weightedCapacity)throw new Error("Weight must be an integer");if(!override.instanceType&&!override.instanceRequirements)throw new Error("You must specify either 'instanceRequirements' or 'instanceType'.");if(override.instanceType&&override.instanceRequirements)throw new Error("You can specify either 'instanceRequirements' or 'instanceType', not both.");return{instanceType:override.instanceType?.toString(),launchTemplateSpecification:override.launchTemplate?this.convertILaunchTemplateToSpecification(override.launchTemplate):void 0,instanceRequirements:override.instanceRequirements,weightedCapacity:override.weightedCapacity?.toString()}})}:{}}}}}throw new Error("Either launchConfig, launchTemplate or mixedInstancesPolicy needs to be specified.")}convertILaunchTemplateToSpecification(launchTemplate){return launchTemplate.launchTemplateId?{launchTemplateId:launchTemplate.launchTemplateId,version:launchTemplate.versionNumber}:{launchTemplateName:launchTemplate.launchTemplateName,version:launchTemplate.versionNumber}}validateTargetGroup(){const errors=new Array;return this.hasCalledScaleOnRequestCount&&this.targetGroupArns.length>1&&errors.push("Cannon use multiple target groups if `scaleOnRequestCount()` is being used."),errors}renderInstanceMaintenancePolicy(minHealthyPercentage,maxHealthyPercentage){if(!(minHealthyPercentage===void 0&&maxHealthyPercentage===void 0)){if(minHealthyPercentage===void 0||maxHealthyPercentage===void 0)throw new Error(`Both or neither of minHealthyPercentage and maxHealthyPercentage must be specified, got minHealthyPercentage: ${minHealthyPercentage} and maxHealthyPercentage: ${maxHealthyPercentage}`);if((minHealthyPercentage===-1||maxHealthyPercentage===-1)&&minHealthyPercentage!==maxHealthyPercentage)throw new Error(`Both minHealthyPercentage and maxHealthyPercentage must be -1 to clear the previously set value, got minHealthyPercentage: ${minHealthyPercentage} and maxHealthyPercentage: ${maxHealthyPercentage}`);if(minHealthyPercentage!==-1&&(minHealthyPercentage<0||minHealthyPercentage>100))throw new Error(`minHealthyPercentage must be between 0 and 100, or -1 to clear the previously set value, got ${minHealthyPercentage}`);if(maxHealthyPercentage!==-1&&(maxHealthyPercentage<100||maxHealthyPercentage>200))throw new Error(`maxHealthyPercentage must be between 100 and 200, or -1 to clear the previously set value, got ${maxHealthyPercentage}`);if(maxHealthyPercentage-minHealthyPercentage>100)throw new Error(`The difference between minHealthyPercentage and maxHealthyPercentage cannot be greater than 100, got ${maxHealthyPercentage-minHealthyPercentage}`);return{minHealthyPercentage,maxHealthyPercentage}}}}exports.AutoScalingGroup=AutoScalingGroup,_e=JSII_RTTI_SYMBOL_1,AutoScalingGroup[_e]={fqn:"aws-cdk-lib.aws_autoscaling.AutoScalingGroup",version:"2.149.0"};var UpdateType;(function(UpdateType2){UpdateType2.NONE="None",UpdateType2.REPLACING_UPDATE="Replace",UpdateType2.ROLLING_UPDATE="RollingUpdate"})(UpdateType||(exports.UpdateType=UpdateType={}));var ScalingEvent;(function(ScalingEvent2){ScalingEvent2.INSTANCE_LAUNCH="autoscaling:EC2_INSTANCE_LAUNCH",ScalingEvent2.INSTANCE_TERMINATE="autoscaling:EC2_INSTANCE_TERMINATE",ScalingEvent2.INSTANCE_TERMINATE_ERROR="autoscaling:EC2_INSTANCE_TERMINATE_ERROR",ScalingEvent2.INSTANCE_LAUNCH_ERROR="autoscaling:EC2_INSTANCE_LAUNCH_ERROR",ScalingEvent2.TEST_NOTIFICATION="autoscaling:TEST_NOTIFICATION"})(ScalingEvent||(exports.ScalingEvent=ScalingEvent={}));class ScalingEvents{constructor(...types){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_ScalingEvent(types)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ScalingEvents),error}this._types=types}}exports.ScalingEvents=ScalingEvents,_f=JSII_RTTI_SYMBOL_1,ScalingEvents[_f]={fqn:"aws-cdk-lib.aws_autoscaling.ScalingEvents",version:"2.149.0"},ScalingEvents.ERRORS=new ScalingEvents(ScalingEvent.INSTANCE_LAUNCH_ERROR,ScalingEvent.INSTANCE_TERMINATE_ERROR),ScalingEvents.ALL=new ScalingEvents(ScalingEvent.INSTANCE_LAUNCH,ScalingEvent.INSTANCE_LAUNCH_ERROR,ScalingEvent.INSTANCE_TERMINATE,ScalingEvent.INSTANCE_TERMINATE_ERROR),ScalingEvents.LAUNCH_EVENTS=new ScalingEvents(ScalingEvent.INSTANCE_LAUNCH,ScalingEvent.INSTANCE_LAUNCH_ERROR),ScalingEvents.TERMINATION_EVENTS=new ScalingEvents(ScalingEvent.INSTANCE_TERMINATE,ScalingEvent.INSTANCE_TERMINATE_ERROR);var ScalingProcess;(function(ScalingProcess2){ScalingProcess2.LAUNCH="Launch",ScalingProcess2.TERMINATE="Terminate",ScalingProcess2.HEALTH_CHECK="HealthCheck",ScalingProcess2.REPLACE_UNHEALTHY="ReplaceUnhealthy",ScalingProcess2.AZ_REBALANCE="AZRebalance",ScalingProcess2.ALARM_NOTIFICATION="AlarmNotification",ScalingProcess2.SCHEDULED_ACTIONS="ScheduledActions",ScalingProcess2.ADD_TO_LOAD_BALANCER="AddToLoadBalancer",ScalingProcess2.INSTANCE_REFRESH="InstanceRefresh"})(ScalingProcess||(exports.ScalingProcess=ScalingProcess={}));const DEFAULT_SUSPEND_PROCESSES=[ScalingProcess.HEALTH_CHECK,ScalingProcess.REPLACE_UNHEALTHY,ScalingProcess.AZ_REBALANCE,ScalingProcess.ALARM_NOTIFICATION,ScalingProcess.SCHEDULED_ACTIONS,ScalingProcess.INSTANCE_REFRESH];class HealthCheck{static ec2(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_Ec2HealthCheckOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.ec2),error}return new HealthCheck(HealthCheckType.EC2,options.grace)}static elb(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_ElbHealthCheckOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.elb),error}return new HealthCheck(HealthCheckType.ELB,options.grace)}constructor(type,gracePeriod){this.type=type,this.gracePeriod=gracePeriod}}exports.HealthCheck=HealthCheck,_g=JSII_RTTI_SYMBOL_1,HealthCheck[_g]={fqn:"aws-cdk-lib.aws_autoscaling.HealthCheck",version:"2.149.0"};var HealthCheckType;(function(HealthCheckType2){HealthCheckType2.EC2="EC2",HealthCheckType2.ELB="ELB"})(HealthCheckType||(HealthCheckType={}));function renderRollingUpdateConfig(config={}){const waitOnResourceSignals=config.minSuccessfulInstancesPercent!==void 0,pauseTime=config.pauseTime||(waitOnResourceSignals?core_1().Duration.minutes(5):core_1().Duration.seconds(0));return{maxBatchSize:config.maxBatchSize,minInstancesInService:config.minInstancesInService,minSuccessfulInstancesPercent:validatePercentage(config.minSuccessfulInstancesPercent),waitOnResourceSignals,pauseTime:pauseTime&&pauseTime.toIsoString(),suspendProcesses:config.suspendProcesses??DEFAULT_SUSPEND_PROCESSES}}function validatePercentage(x){if(x===void 0||0<=x&&x<=100)return x;throw new Error(`Expected: a percentage 0..100, got: ${x}`)}function synthesizeBlockDeviceMappings(construct,blockDevices){return blockDevices.map(({deviceName,volume,mappingEnabled})=>{const{virtualName,ebsDevice:ebs}=volume;if(volume===volume_1().BlockDeviceVolume._NO_DEVICE||mappingEnabled===!1)return{deviceName,noDevice:!0};if(ebs){const{iops,volumeType,throughput}=ebs;if(throughput){const throughputRange={Min:125,Max:1e3},{Min,Max}=throughputRange;if(volumeType!=volume_1().EbsDeviceVolumeType.GP3)throw new Error("throughput property requires volumeType: EbsDeviceVolumeType.GP3");if(throughput<Min||throughput>Max)throw new Error(`throughput property takes a minimum of ${Min} and a maximum of ${Max}`);const maximumThroughputRatio=.25;if(iops){const iopsRatio=throughput/iops;if(iopsRatio>maximumThroughputRatio)throw new Error(`Throughput (MiBps) to iops ratio of ${iopsRatio} is too high; maximum is ${maximumThroughputRatio} MiBps per iops`)}}if(iops)volumeType!==volume_1().EbsDeviceVolumeType.IO1&&core_1().Annotations.of(construct).addWarningV2("@aws-cdk/aws-autoscaling:iopsIgnored","iops will be ignored without volumeType: EbsDeviceVolumeType.IO1");else if(volumeType===volume_1().EbsDeviceVolumeType.IO1)throw new Error("iops property is required with volumeType: EbsDeviceVolumeType.IO1")}return{deviceName,ebs,virtualName}})}
