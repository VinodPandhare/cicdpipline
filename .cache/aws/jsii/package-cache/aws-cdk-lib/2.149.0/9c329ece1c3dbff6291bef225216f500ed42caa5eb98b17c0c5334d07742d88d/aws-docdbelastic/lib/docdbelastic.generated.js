"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnCluster=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnCluster extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnClusterPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnCluster(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnCluster.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_docdbelastic_CfnClusterProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnCluster),error}cdk().requireProperty(props,"adminUserName",this),cdk().requireProperty(props,"authType",this),cdk().requireProperty(props,"clusterName",this),cdk().requireProperty(props,"shardCapacity",this),cdk().requireProperty(props,"shardCount",this),this.attrClusterArn=cdk().Token.asString(this.getAtt("ClusterArn",cdk().ResolutionTypeHint.STRING)),this.attrClusterEndpoint=cdk().Token.asString(this.getAtt("ClusterEndpoint",cdk().ResolutionTypeHint.STRING)),this.adminUserName=props.adminUserName,this.adminUserPassword=props.adminUserPassword,this.authType=props.authType,this.backupRetentionPeriod=props.backupRetentionPeriod,this.clusterName=props.clusterName,this.kmsKeyId=props.kmsKeyId,this.preferredBackupWindow=props.preferredBackupWindow,this.preferredMaintenanceWindow=props.preferredMaintenanceWindow,this.shardCapacity=props.shardCapacity,this.shardCount=props.shardCount,this.shardInstanceCount=props.shardInstanceCount,this.subnetIds=props.subnetIds,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::DocDBElastic::Cluster",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags,this.vpcSecurityGroupIds=props.vpcSecurityGroupIds}get cfnProperties(){return{adminUserName:this.adminUserName,adminUserPassword:this.adminUserPassword,authType:this.authType,backupRetentionPeriod:this.backupRetentionPeriod,clusterName:this.clusterName,kmsKeyId:this.kmsKeyId,preferredBackupWindow:this.preferredBackupWindow,preferredMaintenanceWindow:this.preferredMaintenanceWindow,shardCapacity:this.shardCapacity,shardCount:this.shardCount,shardInstanceCount:this.shardInstanceCount,subnetIds:this.subnetIds,tags:this.tags.renderTags(),vpcSecurityGroupIds:this.vpcSecurityGroupIds}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnCluster.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnClusterPropsToCloudFormation(props)}}exports.CfnCluster=CfnCluster,_a=JSII_RTTI_SYMBOL_1,CfnCluster[_a]={fqn:"aws-cdk-lib.aws_docdbelastic.CfnCluster",version:"2.149.0"},CfnCluster.CFN_RESOURCE_TYPE_NAME="AWS::DocDBElastic::Cluster";function CfnClusterPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("adminUserName",cdk().requiredValidator)(properties.adminUserName)),errors.collect(cdk().propertyValidator("adminUserName",cdk().validateString)(properties.adminUserName)),errors.collect(cdk().propertyValidator("adminUserPassword",cdk().validateString)(properties.adminUserPassword)),errors.collect(cdk().propertyValidator("authType",cdk().requiredValidator)(properties.authType)),errors.collect(cdk().propertyValidator("authType",cdk().validateString)(properties.authType)),errors.collect(cdk().propertyValidator("backupRetentionPeriod",cdk().validateNumber)(properties.backupRetentionPeriod)),errors.collect(cdk().propertyValidator("clusterName",cdk().requiredValidator)(properties.clusterName)),errors.collect(cdk().propertyValidator("clusterName",cdk().validateString)(properties.clusterName)),errors.collect(cdk().propertyValidator("kmsKeyId",cdk().validateString)(properties.kmsKeyId)),errors.collect(cdk().propertyValidator("preferredBackupWindow",cdk().validateString)(properties.preferredBackupWindow)),errors.collect(cdk().propertyValidator("preferredMaintenanceWindow",cdk().validateString)(properties.preferredMaintenanceWindow)),errors.collect(cdk().propertyValidator("shardCapacity",cdk().requiredValidator)(properties.shardCapacity)),errors.collect(cdk().propertyValidator("shardCapacity",cdk().validateNumber)(properties.shardCapacity)),errors.collect(cdk().propertyValidator("shardCount",cdk().requiredValidator)(properties.shardCount)),errors.collect(cdk().propertyValidator("shardCount",cdk().validateNumber)(properties.shardCount)),errors.collect(cdk().propertyValidator("shardInstanceCount",cdk().validateNumber)(properties.shardInstanceCount)),errors.collect(cdk().propertyValidator("subnetIds",cdk().listValidator(cdk().validateString))(properties.subnetIds)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.collect(cdk().propertyValidator("vpcSecurityGroupIds",cdk().listValidator(cdk().validateString))(properties.vpcSecurityGroupIds)),errors.wrap('supplied properties not correct for "CfnClusterProps"')}function convertCfnClusterPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnClusterPropsValidator(properties).assertSuccess(),{AdminUserName:cdk().stringToCloudFormation(properties.adminUserName),AdminUserPassword:cdk().stringToCloudFormation(properties.adminUserPassword),AuthType:cdk().stringToCloudFormation(properties.authType),BackupRetentionPeriod:cdk().numberToCloudFormation(properties.backupRetentionPeriod),ClusterName:cdk().stringToCloudFormation(properties.clusterName),KmsKeyId:cdk().stringToCloudFormation(properties.kmsKeyId),PreferredBackupWindow:cdk().stringToCloudFormation(properties.preferredBackupWindow),PreferredMaintenanceWindow:cdk().stringToCloudFormation(properties.preferredMaintenanceWindow),ShardCapacity:cdk().numberToCloudFormation(properties.shardCapacity),ShardCount:cdk().numberToCloudFormation(properties.shardCount),ShardInstanceCount:cdk().numberToCloudFormation(properties.shardInstanceCount),SubnetIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.subnetIds),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags),VpcSecurityGroupIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.vpcSecurityGroupIds)}):properties}function CfnClusterPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("adminUserName","AdminUserName",properties.AdminUserName!=null?cfn_parse().FromCloudFormation.getString(properties.AdminUserName):void 0),ret.addPropertyResult("adminUserPassword","AdminUserPassword",properties.AdminUserPassword!=null?cfn_parse().FromCloudFormation.getString(properties.AdminUserPassword):void 0),ret.addPropertyResult("authType","AuthType",properties.AuthType!=null?cfn_parse().FromCloudFormation.getString(properties.AuthType):void 0),ret.addPropertyResult("backupRetentionPeriod","BackupRetentionPeriod",properties.BackupRetentionPeriod!=null?cfn_parse().FromCloudFormation.getNumber(properties.BackupRetentionPeriod):void 0),ret.addPropertyResult("clusterName","ClusterName",properties.ClusterName!=null?cfn_parse().FromCloudFormation.getString(properties.ClusterName):void 0),ret.addPropertyResult("kmsKeyId","KmsKeyId",properties.KmsKeyId!=null?cfn_parse().FromCloudFormation.getString(properties.KmsKeyId):void 0),ret.addPropertyResult("preferredBackupWindow","PreferredBackupWindow",properties.PreferredBackupWindow!=null?cfn_parse().FromCloudFormation.getString(properties.PreferredBackupWindow):void 0),ret.addPropertyResult("preferredMaintenanceWindow","PreferredMaintenanceWindow",properties.PreferredMaintenanceWindow!=null?cfn_parse().FromCloudFormation.getString(properties.PreferredMaintenanceWindow):void 0),ret.addPropertyResult("shardCapacity","ShardCapacity",properties.ShardCapacity!=null?cfn_parse().FromCloudFormation.getNumber(properties.ShardCapacity):void 0),ret.addPropertyResult("shardCount","ShardCount",properties.ShardCount!=null?cfn_parse().FromCloudFormation.getNumber(properties.ShardCount):void 0),ret.addPropertyResult("shardInstanceCount","ShardInstanceCount",properties.ShardInstanceCount!=null?cfn_parse().FromCloudFormation.getNumber(properties.ShardInstanceCount):void 0),ret.addPropertyResult("subnetIds","SubnetIds",properties.SubnetIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SubnetIds):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addPropertyResult("vpcSecurityGroupIds","VpcSecurityGroupIds",properties.VpcSecurityGroupIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.VpcSecurityGroupIds):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
