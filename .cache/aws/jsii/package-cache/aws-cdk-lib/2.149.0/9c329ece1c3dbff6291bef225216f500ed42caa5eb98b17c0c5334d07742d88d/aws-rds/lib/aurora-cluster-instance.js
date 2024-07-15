"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.InstanceType=exports.ClusterInstance=exports.ClusterInstanceType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var parameter_group_1=()=>{var tmp=require("./parameter-group");return parameter_group_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./private/util");return util_1=()=>tmp,tmp},props_1=()=>{var tmp=require("./props");return props_1=()=>tmp,tmp},rds_generated_1=()=>{var tmp=require("./rds.generated");return rds_generated_1=()=>tmp,tmp},ec2=()=>{var tmp=require("../../aws-ec2");return ec2=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};class ClusterInstanceType{static serverlessV2(){return new ClusterInstanceType("db.serverless",InstanceType.SERVERLESS_V2)}static provisioned(instanceType){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_InstanceType(instanceType)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.provisioned),error}return new ClusterInstanceType((instanceType??ec2().InstanceType.of(ec2().InstanceClass.T3,ec2().InstanceSize.MEDIUM)).toString(),InstanceType.PROVISIONED)}constructor(instanceType,type){this.instanceType=instanceType,this.type=type;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_InstanceType(type)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ClusterInstanceType),error}}toString(){return this.instanceType}}exports.ClusterInstanceType=ClusterInstanceType,_a=JSII_RTTI_SYMBOL_1,ClusterInstanceType[_a]={fqn:"aws-cdk-lib.aws_rds.ClusterInstanceType",version:"2.149.0"};class ClusterInstance{static provisioned(id,props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_ProvisionedClusterInstanceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.provisioned),error}return new ClusterInstance(id,{...props,instanceType:ClusterInstanceType.provisioned(props.instanceType)})}static serverlessV2(id,props={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_ServerlessV2ClusterInstanceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.serverlessV2),error}return new ClusterInstance(id,{...props,promotionTier:props.scaleWithWriter?1:2,instanceType:ClusterInstanceType.serverlessV2()})}constructor(id,props){this.id=id,this.props=props}bind(scope,cluster,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_IDatabaseCluster(cluster),jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_ClusterInstanceBindOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return new AuroraClusterInstance(scope,this.id,{cluster,...this.props,...props})}}exports.ClusterInstance=ClusterInstance,_b=JSII_RTTI_SYMBOL_1,ClusterInstance[_b]={fqn:"aws-cdk-lib.aws_rds.ClusterInstance",version:"2.149.0"};var InstanceType;(function(InstanceType2){InstanceType2.PROVISIONED="PROVISIONED",InstanceType2.SERVERLESS_V2="SERVERLESS_V2"})(InstanceType||(exports.InstanceType=InstanceType={}));class AuroraClusterInstance extends core_1().Resource{constructor(scope,id,props){if(super(scope,props.isFromLegacyInstanceProps?`${id}Wrapper`:id,{physicalName:props.instanceIdentifier}),this.tier=props.promotionTier??2,this.tier>15)throw new Error("promotionTier must be between 0-15");const isOwnedResource=core_1().Resource.isOwnedResource(props.cluster);let internetConnected,publiclyAccessible=props.publiclyAccessible;if(isOwnedResource){const ownedCluster=props.cluster;internetConnected=ownedCluster.vpc.selectSubnets(ownedCluster.vpcSubnets).internetConnectivityEstablished;const isInPublicSubnet=ownedCluster.vpcSubnets&&ownedCluster.vpcSubnets.subnetType===ec2().SubnetType.PUBLIC;publiclyAccessible=props.publiclyAccessible??isInPublicSubnet}const instanceType=props.instanceType??ClusterInstanceType.serverlessV2();this.type=instanceType.type,this.instanceSize=this.type===InstanceType.PROVISIONED?props.instanceType?.toString():void 0;const engine=props.cluster.engine,enablePerformanceInsights=props.enablePerformanceInsights||props.performanceInsightRetention!==void 0||props.performanceInsightEncryptionKey!==void 0;if(enablePerformanceInsights&&props.enablePerformanceInsights===!1)throw new Error("`enablePerformanceInsights` disabled, but `performanceInsightRetention` or `performanceInsightEncryptionKey` was set");const instanceParameterGroupConfig=(props.parameterGroup??(props.parameters?core_1().FeatureFlags.of(this).isEnabled(cx_api_1().AURORA_CLUSTER_CHANGE_SCOPE_OF_INSTANCE_PARAMETER_GROUP_WITH_EACH_PARAMETERS)?new(parameter_group_1()).ParameterGroup(this,"InstanceParameterGroup",{engine,parameters:props.parameters}):new(parameter_group_1()).ParameterGroup(props.cluster,"InstanceParameterGroup",{engine,parameters:props.parameters}):void 0))?.bindToInstance({}),instance=new(rds_generated_1()).CfnDBInstance(props.isFromLegacyInstanceProps?scope:this,props.isFromLegacyInstanceProps?id:"Resource",{engine:engine.engineType,dbClusterIdentifier:props.cluster.clusterIdentifier,promotionTier:props.isFromLegacyInstanceProps?void 0:this.tier,dbInstanceIdentifier:this.physicalName,dbInstanceClass:props.instanceType?databaseInstanceType(instanceType):void 0,publiclyAccessible,preferredMaintenanceWindow:props.preferredMaintenanceWindow,enablePerformanceInsights:enablePerformanceInsights||props.enablePerformanceInsights,performanceInsightsKmsKeyId:props.performanceInsightEncryptionKey?.keyArn,performanceInsightsRetentionPeriod:enablePerformanceInsights?props.performanceInsightRetention||props_1().PerformanceInsightRetention.DEFAULT:void 0,dbSubnetGroupName:props.isFromLegacyInstanceProps?props.subnetGroup?.subnetGroupName:void 0,dbParameterGroupName:instanceParameterGroupConfig?.parameterGroupName,monitoringInterval:props.monitoringInterval&&props.monitoringInterval.toSeconds(),monitoringRoleArn:props.monitoringRole&&props.monitoringRole.roleArn,autoMinorVersionUpgrade:props.autoMinorVersionUpgrade,allowMajorVersionUpgrade:props.allowMajorVersionUpgrade,caCertificateIdentifier:props.caCertificate&&props.caCertificate.toString()});instance.applyRemovalPolicy((0,util_1().helperRemovalPolicy)(props.removalPolicy)),internetConnected&&instance.node.addDependency(internetConnected),this.dbInstanceArn=this.getResourceArnAttribute(instance.attrDbInstanceArn,{resource:"db",service:"rds",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME,resourceName:this.physicalName}),this.instanceIdentifier=this.getResourceNameAttribute(instance.ref),this.dbiResourceId=instance.attrDbiResourceId,this.dbInstanceEndpointAddress=instance.attrEndpointAddress}}function databaseInstanceType(instanceType){const type=instanceType.toString();return instanceType.type===InstanceType.SERVERLESS_V2?type:"db."+type}