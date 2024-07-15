"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnNotificationRule=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnNotificationRule extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnNotificationRulePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnNotificationRule(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnNotificationRule.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codestarnotifications_CfnNotificationRuleProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnNotificationRule),error}cdk().requireProperty(props,"detailType",this),cdk().requireProperty(props,"eventTypeIds",this),cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"resource",this),cdk().requireProperty(props,"targets",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.createdBy=props.createdBy,this.detailType=props.detailType,this.eventTypeId=props.eventTypeId,this.eventTypeIds=props.eventTypeIds,this.name=props.name,this.resource=props.resource,this.status=props.status,this.tags=new(cdk()).TagManager(cdk().TagType.MAP,"AWS::CodeStarNotifications::NotificationRule",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags,this.targetAddress=props.targetAddress,this.targets=props.targets}get cfnProperties(){return{createdBy:this.createdBy,detailType:this.detailType,eventTypeId:this.eventTypeId,eventTypeIds:this.eventTypeIds,name:this.name,resource:this.resource,status:this.status,tags:this.tags.renderTags(),targetAddress:this.targetAddress,targets:this.targets}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnNotificationRule.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnNotificationRulePropsToCloudFormation(props)}}exports.CfnNotificationRule=CfnNotificationRule,_a=JSII_RTTI_SYMBOL_1,CfnNotificationRule[_a]={fqn:"aws-cdk-lib.aws_codestarnotifications.CfnNotificationRule",version:"2.149.0"},CfnNotificationRule.CFN_RESOURCE_TYPE_NAME="AWS::CodeStarNotifications::NotificationRule";function CfnNotificationRuleTargetPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("targetAddress",cdk().requiredValidator)(properties.targetAddress)),errors.collect(cdk().propertyValidator("targetAddress",cdk().validateString)(properties.targetAddress)),errors.collect(cdk().propertyValidator("targetType",cdk().requiredValidator)(properties.targetType)),errors.collect(cdk().propertyValidator("targetType",cdk().validateString)(properties.targetType)),errors.wrap('supplied properties not correct for "TargetProperty"')}function convertCfnNotificationRuleTargetPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNotificationRuleTargetPropertyValidator(properties).assertSuccess(),{TargetAddress:cdk().stringToCloudFormation(properties.targetAddress),TargetType:cdk().stringToCloudFormation(properties.targetType)}):properties}function CfnNotificationRuleTargetPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("targetAddress","TargetAddress",properties.TargetAddress!=null?cfn_parse().FromCloudFormation.getString(properties.TargetAddress):void 0),ret.addPropertyResult("targetType","TargetType",properties.TargetType!=null?cfn_parse().FromCloudFormation.getString(properties.TargetType):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnNotificationRulePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("createdBy",cdk().validateString)(properties.createdBy)),errors.collect(cdk().propertyValidator("detailType",cdk().requiredValidator)(properties.detailType)),errors.collect(cdk().propertyValidator("detailType",cdk().validateString)(properties.detailType)),errors.collect(cdk().propertyValidator("eventTypeId",cdk().validateString)(properties.eventTypeId)),errors.collect(cdk().propertyValidator("eventTypeIds",cdk().requiredValidator)(properties.eventTypeIds)),errors.collect(cdk().propertyValidator("eventTypeIds",cdk().listValidator(cdk().validateString))(properties.eventTypeIds)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("resource",cdk().requiredValidator)(properties.resource)),errors.collect(cdk().propertyValidator("resource",cdk().validateString)(properties.resource)),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.collect(cdk().propertyValidator("tags",cdk().hashValidator(cdk().validateString))(properties.tags)),errors.collect(cdk().propertyValidator("targetAddress",cdk().validateString)(properties.targetAddress)),errors.collect(cdk().propertyValidator("targets",cdk().requiredValidator)(properties.targets)),errors.collect(cdk().propertyValidator("targets",cdk().listValidator(CfnNotificationRuleTargetPropertyValidator))(properties.targets)),errors.wrap('supplied properties not correct for "CfnNotificationRuleProps"')}function convertCfnNotificationRulePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNotificationRulePropsValidator(properties).assertSuccess(),{CreatedBy:cdk().stringToCloudFormation(properties.createdBy),DetailType:cdk().stringToCloudFormation(properties.detailType),EventTypeId:cdk().stringToCloudFormation(properties.eventTypeId),EventTypeIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.eventTypeIds),Name:cdk().stringToCloudFormation(properties.name),Resource:cdk().stringToCloudFormation(properties.resource),Status:cdk().stringToCloudFormation(properties.status),Tags:cdk().hashMapper(cdk().stringToCloudFormation)(properties.tags),TargetAddress:cdk().stringToCloudFormation(properties.targetAddress),Targets:cdk().listMapper(convertCfnNotificationRuleTargetPropertyToCloudFormation)(properties.targets)}):properties}function CfnNotificationRulePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("createdBy","CreatedBy",properties.CreatedBy!=null?cfn_parse().FromCloudFormation.getString(properties.CreatedBy):void 0),ret.addPropertyResult("detailType","DetailType",properties.DetailType!=null?cfn_parse().FromCloudFormation.getString(properties.DetailType):void 0),ret.addPropertyResult("eventTypeId","EventTypeId",properties.EventTypeId!=null?cfn_parse().FromCloudFormation.getString(properties.EventTypeId):void 0),ret.addPropertyResult("eventTypeIds","EventTypeIds",properties.EventTypeIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.EventTypeIds):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("resource","Resource",properties.Resource!=null?cfn_parse().FromCloudFormation.getString(properties.Resource):void 0),ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getMap(cfn_parse().FromCloudFormation.getString)(properties.Tags):void 0),ret.addPropertyResult("targetAddress","TargetAddress",properties.TargetAddress!=null?cfn_parse().FromCloudFormation.getString(properties.TargetAddress):void 0),ret.addPropertyResult("targets","Targets",properties.Targets!=null?cfn_parse().FromCloudFormation.getArray(CfnNotificationRuleTargetPropertyFromCloudFormation)(properties.Targets):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}