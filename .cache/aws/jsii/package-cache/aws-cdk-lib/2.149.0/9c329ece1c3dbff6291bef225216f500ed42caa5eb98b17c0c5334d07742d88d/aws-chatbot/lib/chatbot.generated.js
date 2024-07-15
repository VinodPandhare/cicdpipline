"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnSlackChannelConfiguration=exports.CfnMicrosoftTeamsChannelConfiguration=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnMicrosoftTeamsChannelConfiguration extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnMicrosoftTeamsChannelConfigurationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnMicrosoftTeamsChannelConfiguration(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnMicrosoftTeamsChannelConfiguration.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_chatbot_CfnMicrosoftTeamsChannelConfigurationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnMicrosoftTeamsChannelConfiguration),error}cdk().requireProperty(props,"configurationName",this),cdk().requireProperty(props,"iamRoleArn",this),cdk().requireProperty(props,"teamId",this),cdk().requireProperty(props,"teamsChannelId",this),cdk().requireProperty(props,"teamsTenantId",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Chatbot::MicrosoftTeamsChannelConfiguration",void 0,{tagPropertyName:"tags"}),this.configurationName=props.configurationName,this.guardrailPolicies=props.guardrailPolicies,this.iamRoleArn=props.iamRoleArn,this.loggingLevel=props.loggingLevel,this.snsTopicArns=props.snsTopicArns,this.tags=props.tags,this.teamId=props.teamId,this.teamsChannelId=props.teamsChannelId,this.teamsTenantId=props.teamsTenantId,this.userRoleRequired=props.userRoleRequired}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),configurationName:this.configurationName,guardrailPolicies:this.guardrailPolicies,iamRoleArn:this.iamRoleArn,loggingLevel:this.loggingLevel,snsTopicArns:this.snsTopicArns,teamId:this.teamId,teamsChannelId:this.teamsChannelId,teamsTenantId:this.teamsTenantId,userRoleRequired:this.userRoleRequired}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnMicrosoftTeamsChannelConfiguration.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnMicrosoftTeamsChannelConfigurationPropsToCloudFormation(props)}}exports.CfnMicrosoftTeamsChannelConfiguration=CfnMicrosoftTeamsChannelConfiguration,_a=JSII_RTTI_SYMBOL_1,CfnMicrosoftTeamsChannelConfiguration[_a]={fqn:"aws-cdk-lib.aws_chatbot.CfnMicrosoftTeamsChannelConfiguration",version:"2.149.0"},CfnMicrosoftTeamsChannelConfiguration.CFN_RESOURCE_TYPE_NAME="AWS::Chatbot::MicrosoftTeamsChannelConfiguration";function CfnMicrosoftTeamsChannelConfigurationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("configurationName",cdk().requiredValidator)(properties.configurationName)),errors.collect(cdk().propertyValidator("configurationName",cdk().validateString)(properties.configurationName)),errors.collect(cdk().propertyValidator("guardrailPolicies",cdk().listValidator(cdk().validateString))(properties.guardrailPolicies)),errors.collect(cdk().propertyValidator("iamRoleArn",cdk().requiredValidator)(properties.iamRoleArn)),errors.collect(cdk().propertyValidator("iamRoleArn",cdk().validateString)(properties.iamRoleArn)),errors.collect(cdk().propertyValidator("loggingLevel",cdk().validateString)(properties.loggingLevel)),errors.collect(cdk().propertyValidator("snsTopicArns",cdk().listValidator(cdk().validateString))(properties.snsTopicArns)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.collect(cdk().propertyValidator("teamId",cdk().requiredValidator)(properties.teamId)),errors.collect(cdk().propertyValidator("teamId",cdk().validateString)(properties.teamId)),errors.collect(cdk().propertyValidator("teamsChannelId",cdk().requiredValidator)(properties.teamsChannelId)),errors.collect(cdk().propertyValidator("teamsChannelId",cdk().validateString)(properties.teamsChannelId)),errors.collect(cdk().propertyValidator("teamsTenantId",cdk().requiredValidator)(properties.teamsTenantId)),errors.collect(cdk().propertyValidator("teamsTenantId",cdk().validateString)(properties.teamsTenantId)),errors.collect(cdk().propertyValidator("userRoleRequired",cdk().validateBoolean)(properties.userRoleRequired)),errors.wrap('supplied properties not correct for "CfnMicrosoftTeamsChannelConfigurationProps"')}function convertCfnMicrosoftTeamsChannelConfigurationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMicrosoftTeamsChannelConfigurationPropsValidator(properties).assertSuccess(),{ConfigurationName:cdk().stringToCloudFormation(properties.configurationName),GuardrailPolicies:cdk().listMapper(cdk().stringToCloudFormation)(properties.guardrailPolicies),IamRoleArn:cdk().stringToCloudFormation(properties.iamRoleArn),LoggingLevel:cdk().stringToCloudFormation(properties.loggingLevel),SnsTopicArns:cdk().listMapper(cdk().stringToCloudFormation)(properties.snsTopicArns),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags),TeamId:cdk().stringToCloudFormation(properties.teamId),TeamsChannelId:cdk().stringToCloudFormation(properties.teamsChannelId),TeamsTenantId:cdk().stringToCloudFormation(properties.teamsTenantId),UserRoleRequired:cdk().booleanToCloudFormation(properties.userRoleRequired)}):properties}function CfnMicrosoftTeamsChannelConfigurationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("configurationName","ConfigurationName",properties.ConfigurationName!=null?cfn_parse().FromCloudFormation.getString(properties.ConfigurationName):void 0),ret.addPropertyResult("guardrailPolicies","GuardrailPolicies",properties.GuardrailPolicies!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.GuardrailPolicies):void 0),ret.addPropertyResult("iamRoleArn","IamRoleArn",properties.IamRoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.IamRoleArn):void 0),ret.addPropertyResult("loggingLevel","LoggingLevel",properties.LoggingLevel!=null?cfn_parse().FromCloudFormation.getString(properties.LoggingLevel):void 0),ret.addPropertyResult("snsTopicArns","SnsTopicArns",properties.SnsTopicArns!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SnsTopicArns):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addPropertyResult("teamId","TeamId",properties.TeamId!=null?cfn_parse().FromCloudFormation.getString(properties.TeamId):void 0),ret.addPropertyResult("teamsChannelId","TeamsChannelId",properties.TeamsChannelId!=null?cfn_parse().FromCloudFormation.getString(properties.TeamsChannelId):void 0),ret.addPropertyResult("teamsTenantId","TeamsTenantId",properties.TeamsTenantId!=null?cfn_parse().FromCloudFormation.getString(properties.TeamsTenantId):void 0),ret.addPropertyResult("userRoleRequired","UserRoleRequired",properties.UserRoleRequired!=null?cfn_parse().FromCloudFormation.getBoolean(properties.UserRoleRequired):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnSlackChannelConfiguration extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnSlackChannelConfigurationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnSlackChannelConfiguration(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnSlackChannelConfiguration.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_chatbot_CfnSlackChannelConfigurationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnSlackChannelConfiguration),error}cdk().requireProperty(props,"configurationName",this),cdk().requireProperty(props,"iamRoleArn",this),cdk().requireProperty(props,"slackChannelId",this),cdk().requireProperty(props,"slackWorkspaceId",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Chatbot::SlackChannelConfiguration",void 0,{tagPropertyName:"tags"}),this.configurationName=props.configurationName,this.guardrailPolicies=props.guardrailPolicies,this.iamRoleArn=props.iamRoleArn,this.loggingLevel=props.loggingLevel,this.slackChannelId=props.slackChannelId,this.slackWorkspaceId=props.slackWorkspaceId,this.snsTopicArns=props.snsTopicArns,this.tags=props.tags,this.userRoleRequired=props.userRoleRequired}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),configurationName:this.configurationName,guardrailPolicies:this.guardrailPolicies,iamRoleArn:this.iamRoleArn,loggingLevel:this.loggingLevel,slackChannelId:this.slackChannelId,slackWorkspaceId:this.slackWorkspaceId,snsTopicArns:this.snsTopicArns,userRoleRequired:this.userRoleRequired}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnSlackChannelConfiguration.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnSlackChannelConfigurationPropsToCloudFormation(props)}}exports.CfnSlackChannelConfiguration=CfnSlackChannelConfiguration,_b=JSII_RTTI_SYMBOL_1,CfnSlackChannelConfiguration[_b]={fqn:"aws-cdk-lib.aws_chatbot.CfnSlackChannelConfiguration",version:"2.149.0"},CfnSlackChannelConfiguration.CFN_RESOURCE_TYPE_NAME="AWS::Chatbot::SlackChannelConfiguration";function CfnSlackChannelConfigurationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("configurationName",cdk().requiredValidator)(properties.configurationName)),errors.collect(cdk().propertyValidator("configurationName",cdk().validateString)(properties.configurationName)),errors.collect(cdk().propertyValidator("guardrailPolicies",cdk().listValidator(cdk().validateString))(properties.guardrailPolicies)),errors.collect(cdk().propertyValidator("iamRoleArn",cdk().requiredValidator)(properties.iamRoleArn)),errors.collect(cdk().propertyValidator("iamRoleArn",cdk().validateString)(properties.iamRoleArn)),errors.collect(cdk().propertyValidator("loggingLevel",cdk().validateString)(properties.loggingLevel)),errors.collect(cdk().propertyValidator("slackChannelId",cdk().requiredValidator)(properties.slackChannelId)),errors.collect(cdk().propertyValidator("slackChannelId",cdk().validateString)(properties.slackChannelId)),errors.collect(cdk().propertyValidator("slackWorkspaceId",cdk().requiredValidator)(properties.slackWorkspaceId)),errors.collect(cdk().propertyValidator("slackWorkspaceId",cdk().validateString)(properties.slackWorkspaceId)),errors.collect(cdk().propertyValidator("snsTopicArns",cdk().listValidator(cdk().validateString))(properties.snsTopicArns)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.collect(cdk().propertyValidator("userRoleRequired",cdk().validateBoolean)(properties.userRoleRequired)),errors.wrap('supplied properties not correct for "CfnSlackChannelConfigurationProps"')}function convertCfnSlackChannelConfigurationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSlackChannelConfigurationPropsValidator(properties).assertSuccess(),{ConfigurationName:cdk().stringToCloudFormation(properties.configurationName),GuardrailPolicies:cdk().listMapper(cdk().stringToCloudFormation)(properties.guardrailPolicies),IamRoleArn:cdk().stringToCloudFormation(properties.iamRoleArn),LoggingLevel:cdk().stringToCloudFormation(properties.loggingLevel),SlackChannelId:cdk().stringToCloudFormation(properties.slackChannelId),SlackWorkspaceId:cdk().stringToCloudFormation(properties.slackWorkspaceId),SnsTopicArns:cdk().listMapper(cdk().stringToCloudFormation)(properties.snsTopicArns),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags),UserRoleRequired:cdk().booleanToCloudFormation(properties.userRoleRequired)}):properties}function CfnSlackChannelConfigurationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("configurationName","ConfigurationName",properties.ConfigurationName!=null?cfn_parse().FromCloudFormation.getString(properties.ConfigurationName):void 0),ret.addPropertyResult("guardrailPolicies","GuardrailPolicies",properties.GuardrailPolicies!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.GuardrailPolicies):void 0),ret.addPropertyResult("iamRoleArn","IamRoleArn",properties.IamRoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.IamRoleArn):void 0),ret.addPropertyResult("loggingLevel","LoggingLevel",properties.LoggingLevel!=null?cfn_parse().FromCloudFormation.getString(properties.LoggingLevel):void 0),ret.addPropertyResult("slackChannelId","SlackChannelId",properties.SlackChannelId!=null?cfn_parse().FromCloudFormation.getString(properties.SlackChannelId):void 0),ret.addPropertyResult("slackWorkspaceId","SlackWorkspaceId",properties.SlackWorkspaceId!=null?cfn_parse().FromCloudFormation.getString(properties.SlackWorkspaceId):void 0),ret.addPropertyResult("snsTopicArns","SnsTopicArns",properties.SnsTopicArns!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SnsTopicArns):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addPropertyResult("userRoleRequired","UserRoleRequired",properties.UserRoleRequired!=null?cfn_parse().FromCloudFormation.getBoolean(properties.UserRoleRequired):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}