"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InstanceGroupModifyConfigPropertyToJson=exports.BootstrapActionConfigToJson=exports.PlacementTypePropertyToJson=exports.InstanceGroupConfigPropertyToJson=exports.AutoScalingPolicyPropertyToJson=exports.ScalingRulePropertyToJson=exports.ScalingActionPropertyToJson=exports.ScalingTriggerPropertyToJson=exports.MetricDimensionPropertyToJson=exports.InstanceFleetConfigPropertyToJson=exports.InstanceFleetProvisioningSpecificationsPropertyToJson=exports.InstanceTypeConfigPropertyToJson=exports.EbsConfigurationPropertyToJson=exports.EbsBlockDeviceConfigPropertyToJson=exports.ConfigurationPropertyToJson=exports.ApplicationConfigPropertyToJson=exports.InstancesConfigPropertyToJson=exports.KerberosAttributesPropertyToJson=void 0;var cdk=()=>{var tmp=require("../../../../core");return cdk=()=>tmp,tmp},emr_create_cluster_1=()=>{var tmp=require("../emr-create-cluster");return emr_create_cluster_1=()=>tmp,tmp};function KerberosAttributesPropertyToJson(property){return{ADDomainJoinPassword:cdk().stringToCloudFormation(property.adDomainJoinPassword),ADDomainJoinUser:cdk().stringToCloudFormation(property.adDomainJoinUser),CrossRealmTrustPrincipalPassword:cdk().stringToCloudFormation(property.crossRealmTrustPrincipalPassword),KdcAdminPassword:cdk().stringToCloudFormation(property.kdcAdminPassword),Realm:cdk().stringToCloudFormation(property.realm)}}exports.KerberosAttributesPropertyToJson=KerberosAttributesPropertyToJson;function InstancesConfigPropertyToJson(property){return{AdditionalMasterSecurityGroups:cdk().listMapper(cdk().stringToCloudFormation)(property.additionalMasterSecurityGroups),AdditionalSlaveSecurityGroups:cdk().listMapper(cdk().stringToCloudFormation)(property.additionalSlaveSecurityGroups),Ec2KeyName:cdk().stringToCloudFormation(property.ec2KeyName),Ec2SubnetId:cdk().stringToCloudFormation(property.ec2SubnetId),Ec2SubnetIds:cdk().listMapper(cdk().stringToCloudFormation)(property.ec2SubnetIds),EmrManagedMasterSecurityGroup:cdk().stringToCloudFormation(property.emrManagedMasterSecurityGroup),EmrManagedSlaveSecurityGroup:cdk().stringToCloudFormation(property.emrManagedSlaveSecurityGroup),HadoopVersion:cdk().stringToCloudFormation(property.hadoopVersion),InstanceCount:cdk().numberToCloudFormation(property.instanceCount),InstanceFleets:cdk().listMapper(InstanceFleetConfigPropertyToJson)(property.instanceFleets),InstanceGroups:cdk().listMapper(InstanceGroupConfigPropertyToJson)(property.instanceGroups),KeepJobFlowAliveWhenNoSteps:!0,MasterInstanceType:cdk().stringToCloudFormation(property.masterInstanceType),Placement:property.placement===void 0?property.placement:PlacementTypePropertyToJson(property.placement),ServiceAccessSecurityGroup:cdk().stringToCloudFormation(property.serviceAccessSecurityGroup),SlaveInstanceType:cdk().stringToCloudFormation(property.slaveInstanceType),TerminationProtected:cdk().booleanToCloudFormation(property.terminationProtected)}}exports.InstancesConfigPropertyToJson=InstancesConfigPropertyToJson;function ApplicationConfigPropertyToJson(property){return{Name:cdk().stringToCloudFormation(property.name),Args:cdk().listMapper(cdk().stringToCloudFormation)(property.args),Version:cdk().stringToCloudFormation(property.version),AdditionalInfo:cdk().objectToCloudFormation(property.additionalInfo)}}exports.ApplicationConfigPropertyToJson=ApplicationConfigPropertyToJson;function ConfigurationPropertyToJson(property){return{Classification:cdk().stringToCloudFormation(property.classification),Properties:cdk().objectToCloudFormation(property.properties),Configurations:cdk().listMapper(ConfigurationPropertyToJson)(property.configurations)}}exports.ConfigurationPropertyToJson=ConfigurationPropertyToJson;function EbsBlockDeviceConfigPropertyToJson(property){return{VolumeSpecification:{Iops:cdk().numberToCloudFormation(property.volumeSpecification.iops),SizeInGB:property.volumeSpecification.volumeSize?.toGibibytes(),VolumeType:cdk().stringToCloudFormation(property.volumeSpecification.volumeType?.valueOf())},VolumesPerInstance:cdk().numberToCloudFormation(property.volumesPerInstance)}}exports.EbsBlockDeviceConfigPropertyToJson=EbsBlockDeviceConfigPropertyToJson;function EbsConfigurationPropertyToJson(property){return{EbsBlockDeviceConfigs:cdk().listMapper(EbsBlockDeviceConfigPropertyToJson)(property.ebsBlockDeviceConfigs),EbsOptimized:cdk().booleanToCloudFormation(property.ebsOptimized)}}exports.EbsConfigurationPropertyToJson=EbsConfigurationPropertyToJson;function InstanceTypeConfigPropertyToJson(property){if(property.bidPrice&&property.bidPriceAsPercentageOfOnDemandPrice)throw new Error("Cannot specify both bidPrice and bidPriceAsPercentageOfOnDemandPrice");return{BidPrice:cdk().stringToCloudFormation(property.bidPrice),BidPriceAsPercentageOfOnDemandPrice:cdk().numberToCloudFormation(property.bidPriceAsPercentageOfOnDemandPrice),Configurations:cdk().listMapper(ConfigurationPropertyToJson)(property.configurations),EbsConfiguration:property.ebsConfiguration===void 0?property.ebsConfiguration:EbsConfigurationPropertyToJson(property.ebsConfiguration),InstanceType:cdk().stringToCloudFormation(property.instanceType?.valueOf()),WeightedCapacity:cdk().numberToCloudFormation(property.weightedCapacity)}}exports.InstanceTypeConfigPropertyToJson=InstanceTypeConfigPropertyToJson;function InstanceFleetProvisioningSpecificationsPropertyToJson(property){return{OnDemandSpecification:OnDemandProvisioningSpecificationPropertyToJson(property.onDemandSpecification),SpotSpecification:SpotProvisioningSpecificationPropertyToJson(property.spotSpecification)}}exports.InstanceFleetProvisioningSpecificationsPropertyToJson=InstanceFleetProvisioningSpecificationsPropertyToJson;function OnDemandProvisioningSpecificationPropertyToJson(property){if(property)return{AllocationStrategy:cdk().stringToCloudFormation(property.allocationStrategy)}}function SpotProvisioningSpecificationPropertyToJson(property){if(!property)return;if(property.timeout&&property.timeoutDurationMinutes||!property.timeout&&!property.timeoutDurationMinutes)throw new Error("one of timeout and timeoutDurationMinutes must be specified");const timeout=property.timeout?.toMinutes()??property.timeoutDurationMinutes;if(timeout!==void 0&&!cdk().Token.isUnresolved(timeout)&&(timeout<5||timeout>1440))throw new Error(`timeout must be between 5 and 1440 minutes, got ${timeout} minutes.`);return{AllocationStrategy:cdk().stringToCloudFormation(property.allocationStrategy),BlockDurationMinutes:cdk().numberToCloudFormation(property.blockDurationMinutes),TimeoutAction:cdk().stringToCloudFormation(property.timeoutAction?.valueOf()),TimeoutDurationMinutes:cdk().numberToCloudFormation(property.timeout?.toMinutes()||property.timeoutDurationMinutes)}}function InstanceFleetConfigPropertyToJson(property){if(!property.targetSpotCapacity&&!property.targetOnDemandCapacity)throw new Error("At least one of targetSpotCapacity and targetOnDemandCapacity should be greater than 0");if(property.instanceFleetType===emr_create_cluster_1().EmrCreateCluster.InstanceRoleType.MASTER){if(property.targetSpotCapacity&&property.targetOnDemandCapacity)throw new Error("For a master instance fleet, only one of targetSpotCapacity and targetOnDemandCapacity can be specified");if(property.targetSpotCapacity&&property.targetSpotCapacity!==1)throw new Error(`For a master instance fleet, targetSpotCapacity cannot be a number other than 1, got ${property.targetSpotCapacity}`);if(property.targetOnDemandCapacity&&property.targetOnDemandCapacity!==1)throw new Error(`For a master instance fleet, targetOnDemandCapacity cannot be a number other than 1, got ${property.targetOnDemandCapacity}`)}return{InstanceFleetType:cdk().stringToCloudFormation(property.instanceFleetType?.valueOf()),InstanceTypeConfigs:cdk().listMapper(InstanceTypeConfigPropertyToJson)(property.instanceTypeConfigs),LaunchSpecifications:property.launchSpecifications===void 0?property.launchSpecifications:InstanceFleetProvisioningSpecificationsPropertyToJson(property.launchSpecifications),Name:cdk().stringToCloudFormation(property.name),TargetOnDemandCapacity:cdk().numberToCloudFormation(property.targetOnDemandCapacity),TargetSpotCapacity:cdk().numberToCloudFormation(property.targetSpotCapacity)}}exports.InstanceFleetConfigPropertyToJson=InstanceFleetConfigPropertyToJson;function MetricDimensionPropertyToJson(property){return{Key:cdk().stringToCloudFormation(property.key),Value:cdk().stringToCloudFormation(property.value)}}exports.MetricDimensionPropertyToJson=MetricDimensionPropertyToJson;function ScalingTriggerPropertyToJson(property){return{CloudWatchAlarmDefinition:{ComparisonOperator:cdk().stringToCloudFormation(property.cloudWatchAlarmDefinition.comparisonOperator?.valueOf()),Dimensions:cdk().listMapper(MetricDimensionPropertyToJson)(property.cloudWatchAlarmDefinition.dimensions),EvaluationPeriods:cdk().numberToCloudFormation(property.cloudWatchAlarmDefinition.evaluationPeriods),MetricName:cdk().stringToCloudFormation(property.cloudWatchAlarmDefinition.metricName),Namespace:cdk().stringToCloudFormation(property.cloudWatchAlarmDefinition.namespace),Period:cdk().numberToCloudFormation(property.cloudWatchAlarmDefinition.period.toSeconds()),Statistic:cdk().stringToCloudFormation(property.cloudWatchAlarmDefinition.statistic?.valueOf()),Threshold:cdk().numberToCloudFormation(property.cloudWatchAlarmDefinition.threshold),Unit:cdk().stringToCloudFormation(property.cloudWatchAlarmDefinition.unit?.valueOf())}}}exports.ScalingTriggerPropertyToJson=ScalingTriggerPropertyToJson;function ScalingActionPropertyToJson(property){return{Market:cdk().stringToCloudFormation(property.market?.valueOf()),SimpleScalingPolicyConfiguration:{AdjustmentType:cdk().stringToCloudFormation(property.simpleScalingPolicyConfiguration.adjustmentType),CoolDown:cdk().numberToCloudFormation(property.simpleScalingPolicyConfiguration.coolDown),ScalingAdjustment:cdk().numberToCloudFormation(property.simpleScalingPolicyConfiguration.scalingAdjustment)}}}exports.ScalingActionPropertyToJson=ScalingActionPropertyToJson;function ScalingRulePropertyToJson(property){return{Action:ScalingActionPropertyToJson(property.action),Description:cdk().stringToCloudFormation(property.description),Name:cdk().stringToCloudFormation(property.name),Trigger:ScalingTriggerPropertyToJson(property.trigger)}}exports.ScalingRulePropertyToJson=ScalingRulePropertyToJson;function AutoScalingPolicyPropertyToJson(property){return{Constraints:{MaxCapacity:cdk().numberToCloudFormation(property.constraints.maxCapacity),MinCapacity:cdk().numberToCloudFormation(property.constraints.minCapacity)},Rules:cdk().listMapper(ScalingRulePropertyToJson)(property.rules)}}exports.AutoScalingPolicyPropertyToJson=AutoScalingPolicyPropertyToJson;function InstanceGroupConfigPropertyToJson(property){return{AutoScalingPolicy:property.autoScalingPolicy===void 0?property.autoScalingPolicy:AutoScalingPolicyPropertyToJson(property.autoScalingPolicy),BidPrice:cdk().numberToCloudFormation(property.bidPrice),Configurations:cdk().listMapper(ConfigurationPropertyToJson)(property.configurations),EbsConfiguration:property.ebsConfiguration===void 0?property.ebsConfiguration:EbsConfigurationPropertyToJson(property.ebsConfiguration),InstanceCount:cdk().numberToCloudFormation(property.instanceCount),InstanceRole:cdk().stringToCloudFormation(property.instanceRole?.valueOf()),InstanceType:cdk().stringToCloudFormation(property.instanceType),Market:cdk().stringToCloudFormation(property.market?.valueOf()),Name:cdk().stringToCloudFormation(property.name)}}exports.InstanceGroupConfigPropertyToJson=InstanceGroupConfigPropertyToJson;function PlacementTypePropertyToJson(property){return{AvailabilityZone:cdk().stringToCloudFormation(property.availabilityZone),AvailabilityZones:cdk().listMapper(cdk().stringToCloudFormation)(property.availabilityZones)}}exports.PlacementTypePropertyToJson=PlacementTypePropertyToJson;function BootstrapActionConfigToJson(property){return{Name:cdk().stringToCloudFormation(property.name),ScriptBootstrapAction:{Path:cdk().stringToCloudFormation(property.scriptBootstrapAction.path),Args:cdk().listMapper(cdk().stringToCloudFormation)(property.scriptBootstrapAction.args)}}}exports.BootstrapActionConfigToJson=BootstrapActionConfigToJson;function InstanceGroupModifyConfigPropertyToJson(property){return{Configurations:cdk().listMapper(ConfigurationPropertyToJson)(property.configurations),EC2InstanceIdsToTerminate:cdk().listMapper(cdk().stringToCloudFormation)(property.eC2InstanceIdsToTerminate),InstanceCount:cdk().numberToCloudFormation(property.instanceCount),ShrinkPolicy:property.shrinkPolicy===void 0?property.shrinkPolicy:ShrinkPolicyPropertyToJson(property.shrinkPolicy)}}exports.InstanceGroupModifyConfigPropertyToJson=InstanceGroupModifyConfigPropertyToJson;function ShrinkPolicyPropertyToJson(property){return{DecommissionTimeout:cdk().numberToCloudFormation(property.decommissionTimeout?.toSeconds()),InstanceResizePolicy:property.instanceResizePolicy?InstanceResizePolicyPropertyToJson(property.instanceResizePolicy):void 0}}function InstanceResizePolicyPropertyToJson(property){return{InstancesToProtect:cdk().listMapper(cdk().stringToCloudFormation)(property.instancesToProtect),InstancesToTerminate:cdk().listMapper(cdk().stringToCloudFormation)(property.instancesToTerminate),InstanceTerminationTimeout:cdk().numberToCloudFormation(property.instanceTerminationTimeout?.toSeconds())}}