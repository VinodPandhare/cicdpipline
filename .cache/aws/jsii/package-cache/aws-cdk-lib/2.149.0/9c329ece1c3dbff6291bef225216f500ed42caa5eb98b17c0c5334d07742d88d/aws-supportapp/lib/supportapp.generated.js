"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnSlackWorkspaceConfiguration=exports.CfnSlackChannelConfiguration=exports.CfnAccountAlias=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnAccountAlias extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnAccountAliasPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnAccountAlias(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnAccountAlias.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_supportapp_CfnAccountAliasProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnAccountAlias),error}cdk().requireProperty(props,"accountAlias",this),this.attrAccountAliasResourceId=cdk().Token.asString(this.getAtt("AccountAliasResourceId",cdk().ResolutionTypeHint.STRING)),this.accountAlias=props.accountAlias}get cfnProperties(){return{accountAlias:this.accountAlias}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnAccountAlias.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnAccountAliasPropsToCloudFormation(props)}}exports.CfnAccountAlias=CfnAccountAlias,_a=JSII_RTTI_SYMBOL_1,CfnAccountAlias[_a]={fqn:"aws-cdk-lib.aws_supportapp.CfnAccountAlias",version:"2.149.0"},CfnAccountAlias.CFN_RESOURCE_TYPE_NAME="AWS::SupportApp::AccountAlias";function CfnAccountAliasPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("accountAlias",cdk().requiredValidator)(properties.accountAlias)),errors.collect(cdk().propertyValidator("accountAlias",cdk().validateString)(properties.accountAlias)),errors.wrap('supplied properties not correct for "CfnAccountAliasProps"')}function convertCfnAccountAliasPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccountAliasPropsValidator(properties).assertSuccess(),{AccountAlias:cdk().stringToCloudFormation(properties.accountAlias)}):properties}function CfnAccountAliasPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("accountAlias","AccountAlias",properties.AccountAlias!=null?cfn_parse().FromCloudFormation.getString(properties.AccountAlias):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnSlackChannelConfiguration extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnSlackChannelConfigurationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnSlackChannelConfiguration(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnSlackChannelConfiguration.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_supportapp_CfnSlackChannelConfigurationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnSlackChannelConfiguration),error}cdk().requireProperty(props,"channelId",this),cdk().requireProperty(props,"channelRoleArn",this),cdk().requireProperty(props,"notifyOnCaseSeverity",this),cdk().requireProperty(props,"teamId",this),this.channelId=props.channelId,this.channelName=props.channelName,this.channelRoleArn=props.channelRoleArn,this.notifyOnAddCorrespondenceToCase=props.notifyOnAddCorrespondenceToCase,this.notifyOnCaseSeverity=props.notifyOnCaseSeverity,this.notifyOnCreateOrReopenCase=props.notifyOnCreateOrReopenCase,this.notifyOnResolveCase=props.notifyOnResolveCase,this.teamId=props.teamId}get cfnProperties(){return{channelId:this.channelId,channelName:this.channelName,channelRoleArn:this.channelRoleArn,notifyOnAddCorrespondenceToCase:this.notifyOnAddCorrespondenceToCase,notifyOnCaseSeverity:this.notifyOnCaseSeverity,notifyOnCreateOrReopenCase:this.notifyOnCreateOrReopenCase,notifyOnResolveCase:this.notifyOnResolveCase,teamId:this.teamId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnSlackChannelConfiguration.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnSlackChannelConfigurationPropsToCloudFormation(props)}}exports.CfnSlackChannelConfiguration=CfnSlackChannelConfiguration,_b=JSII_RTTI_SYMBOL_1,CfnSlackChannelConfiguration[_b]={fqn:"aws-cdk-lib.aws_supportapp.CfnSlackChannelConfiguration",version:"2.149.0"},CfnSlackChannelConfiguration.CFN_RESOURCE_TYPE_NAME="AWS::SupportApp::SlackChannelConfiguration";function CfnSlackChannelConfigurationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("channelId",cdk().requiredValidator)(properties.channelId)),errors.collect(cdk().propertyValidator("channelId",cdk().validateString)(properties.channelId)),errors.collect(cdk().propertyValidator("channelName",cdk().validateString)(properties.channelName)),errors.collect(cdk().propertyValidator("channelRoleArn",cdk().requiredValidator)(properties.channelRoleArn)),errors.collect(cdk().propertyValidator("channelRoleArn",cdk().validateString)(properties.channelRoleArn)),errors.collect(cdk().propertyValidator("notifyOnAddCorrespondenceToCase",cdk().validateBoolean)(properties.notifyOnAddCorrespondenceToCase)),errors.collect(cdk().propertyValidator("notifyOnCaseSeverity",cdk().requiredValidator)(properties.notifyOnCaseSeverity)),errors.collect(cdk().propertyValidator("notifyOnCaseSeverity",cdk().validateString)(properties.notifyOnCaseSeverity)),errors.collect(cdk().propertyValidator("notifyOnCreateOrReopenCase",cdk().validateBoolean)(properties.notifyOnCreateOrReopenCase)),errors.collect(cdk().propertyValidator("notifyOnResolveCase",cdk().validateBoolean)(properties.notifyOnResolveCase)),errors.collect(cdk().propertyValidator("teamId",cdk().requiredValidator)(properties.teamId)),errors.collect(cdk().propertyValidator("teamId",cdk().validateString)(properties.teamId)),errors.wrap('supplied properties not correct for "CfnSlackChannelConfigurationProps"')}function convertCfnSlackChannelConfigurationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSlackChannelConfigurationPropsValidator(properties).assertSuccess(),{ChannelId:cdk().stringToCloudFormation(properties.channelId),ChannelName:cdk().stringToCloudFormation(properties.channelName),ChannelRoleArn:cdk().stringToCloudFormation(properties.channelRoleArn),NotifyOnAddCorrespondenceToCase:cdk().booleanToCloudFormation(properties.notifyOnAddCorrespondenceToCase),NotifyOnCaseSeverity:cdk().stringToCloudFormation(properties.notifyOnCaseSeverity),NotifyOnCreateOrReopenCase:cdk().booleanToCloudFormation(properties.notifyOnCreateOrReopenCase),NotifyOnResolveCase:cdk().booleanToCloudFormation(properties.notifyOnResolveCase),TeamId:cdk().stringToCloudFormation(properties.teamId)}):properties}function CfnSlackChannelConfigurationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("channelId","ChannelId",properties.ChannelId!=null?cfn_parse().FromCloudFormation.getString(properties.ChannelId):void 0),ret.addPropertyResult("channelName","ChannelName",properties.ChannelName!=null?cfn_parse().FromCloudFormation.getString(properties.ChannelName):void 0),ret.addPropertyResult("channelRoleArn","ChannelRoleArn",properties.ChannelRoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.ChannelRoleArn):void 0),ret.addPropertyResult("notifyOnAddCorrespondenceToCase","NotifyOnAddCorrespondenceToCase",properties.NotifyOnAddCorrespondenceToCase!=null?cfn_parse().FromCloudFormation.getBoolean(properties.NotifyOnAddCorrespondenceToCase):void 0),ret.addPropertyResult("notifyOnCaseSeverity","NotifyOnCaseSeverity",properties.NotifyOnCaseSeverity!=null?cfn_parse().FromCloudFormation.getString(properties.NotifyOnCaseSeverity):void 0),ret.addPropertyResult("notifyOnCreateOrReopenCase","NotifyOnCreateOrReopenCase",properties.NotifyOnCreateOrReopenCase!=null?cfn_parse().FromCloudFormation.getBoolean(properties.NotifyOnCreateOrReopenCase):void 0),ret.addPropertyResult("notifyOnResolveCase","NotifyOnResolveCase",properties.NotifyOnResolveCase!=null?cfn_parse().FromCloudFormation.getBoolean(properties.NotifyOnResolveCase):void 0),ret.addPropertyResult("teamId","TeamId",properties.TeamId!=null?cfn_parse().FromCloudFormation.getString(properties.TeamId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnSlackWorkspaceConfiguration extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnSlackWorkspaceConfigurationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnSlackWorkspaceConfiguration(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnSlackWorkspaceConfiguration.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_supportapp_CfnSlackWorkspaceConfigurationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnSlackWorkspaceConfiguration),error}cdk().requireProperty(props,"teamId",this),this.teamId=props.teamId,this.versionId=props.versionId}get cfnProperties(){return{teamId:this.teamId,versionId:this.versionId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnSlackWorkspaceConfiguration.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnSlackWorkspaceConfigurationPropsToCloudFormation(props)}}exports.CfnSlackWorkspaceConfiguration=CfnSlackWorkspaceConfiguration,_c=JSII_RTTI_SYMBOL_1,CfnSlackWorkspaceConfiguration[_c]={fqn:"aws-cdk-lib.aws_supportapp.CfnSlackWorkspaceConfiguration",version:"2.149.0"},CfnSlackWorkspaceConfiguration.CFN_RESOURCE_TYPE_NAME="AWS::SupportApp::SlackWorkspaceConfiguration";function CfnSlackWorkspaceConfigurationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("teamId",cdk().requiredValidator)(properties.teamId)),errors.collect(cdk().propertyValidator("teamId",cdk().validateString)(properties.teamId)),errors.collect(cdk().propertyValidator("versionId",cdk().validateString)(properties.versionId)),errors.wrap('supplied properties not correct for "CfnSlackWorkspaceConfigurationProps"')}function convertCfnSlackWorkspaceConfigurationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSlackWorkspaceConfigurationPropsValidator(properties).assertSuccess(),{TeamId:cdk().stringToCloudFormation(properties.teamId),VersionId:cdk().stringToCloudFormation(properties.versionId)}):properties}function CfnSlackWorkspaceConfigurationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("teamId","TeamId",properties.TeamId!=null?cfn_parse().FromCloudFormation.getString(properties.TeamId):void 0),ret.addPropertyResult("versionId","VersionId",properties.VersionId!=null?cfn_parse().FromCloudFormation.getString(properties.VersionId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
