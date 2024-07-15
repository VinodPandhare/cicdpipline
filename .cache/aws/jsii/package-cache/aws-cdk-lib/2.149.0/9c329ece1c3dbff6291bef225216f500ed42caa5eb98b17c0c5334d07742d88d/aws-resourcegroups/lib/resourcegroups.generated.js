"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnGroup=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnGroup extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnGroupPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnGroup(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnGroup.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_resourcegroups_CfnGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnGroup),error}cdk().requireProperty(props,"name",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.configuration=props.configuration,this.description=props.description,this.name=props.name,this.resourceQuery=props.resourceQuery,this.resources=props.resources,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::ResourceGroups::Group",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{configuration:this.configuration,description:this.description,name:this.name,resourceQuery:this.resourceQuery,resources:this.resources,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnGroup.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnGroupPropsToCloudFormation(props)}}exports.CfnGroup=CfnGroup,_a=JSII_RTTI_SYMBOL_1,CfnGroup[_a]={fqn:"aws-cdk-lib.aws_resourcegroups.CfnGroup",version:"2.149.0"},CfnGroup.CFN_RESOURCE_TYPE_NAME="AWS::ResourceGroups::Group";function CfnGroupConfigurationParameterPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("values",cdk().listValidator(cdk().validateString))(properties.values)),errors.wrap('supplied properties not correct for "ConfigurationParameterProperty"')}function convertCfnGroupConfigurationParameterPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupConfigurationParameterPropertyValidator(properties).assertSuccess(),{Name:cdk().stringToCloudFormation(properties.name),Values:cdk().listMapper(cdk().stringToCloudFormation)(properties.values)}):properties}function CfnGroupConfigurationParameterPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("values","Values",properties.Values!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Values):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnGroupConfigurationItemPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("parameters",cdk().listValidator(CfnGroupConfigurationParameterPropertyValidator))(properties.parameters)),errors.collect(cdk().propertyValidator("type",cdk().validateString)(properties.type)),errors.wrap('supplied properties not correct for "ConfigurationItemProperty"')}function convertCfnGroupConfigurationItemPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupConfigurationItemPropertyValidator(properties).assertSuccess(),{Parameters:cdk().listMapper(convertCfnGroupConfigurationParameterPropertyToCloudFormation)(properties.parameters),Type:cdk().stringToCloudFormation(properties.type)}):properties}function CfnGroupConfigurationItemPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("parameters","Parameters",properties.Parameters!=null?cfn_parse().FromCloudFormation.getArray(CfnGroupConfigurationParameterPropertyFromCloudFormation)(properties.Parameters):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?cfn_parse().FromCloudFormation.getString(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnGroupTagFilterPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.collect(cdk().propertyValidator("values",cdk().listValidator(cdk().validateString))(properties.values)),errors.wrap('supplied properties not correct for "TagFilterProperty"')}function convertCfnGroupTagFilterPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupTagFilterPropertyValidator(properties).assertSuccess(),{Key:cdk().stringToCloudFormation(properties.key),Values:cdk().listMapper(cdk().stringToCloudFormation)(properties.values)}):properties}function CfnGroupTagFilterPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addPropertyResult("values","Values",properties.Values!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Values):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnGroupQueryPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("resourceTypeFilters",cdk().listValidator(cdk().validateString))(properties.resourceTypeFilters)),errors.collect(cdk().propertyValidator("stackIdentifier",cdk().validateString)(properties.stackIdentifier)),errors.collect(cdk().propertyValidator("tagFilters",cdk().listValidator(CfnGroupTagFilterPropertyValidator))(properties.tagFilters)),errors.wrap('supplied properties not correct for "QueryProperty"')}function convertCfnGroupQueryPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupQueryPropertyValidator(properties).assertSuccess(),{ResourceTypeFilters:cdk().listMapper(cdk().stringToCloudFormation)(properties.resourceTypeFilters),StackIdentifier:cdk().stringToCloudFormation(properties.stackIdentifier),TagFilters:cdk().listMapper(convertCfnGroupTagFilterPropertyToCloudFormation)(properties.tagFilters)}):properties}function CfnGroupQueryPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("resourceTypeFilters","ResourceTypeFilters",properties.ResourceTypeFilters!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.ResourceTypeFilters):void 0),ret.addPropertyResult("stackIdentifier","StackIdentifier",properties.StackIdentifier!=null?cfn_parse().FromCloudFormation.getString(properties.StackIdentifier):void 0),ret.addPropertyResult("tagFilters","TagFilters",properties.TagFilters!=null?cfn_parse().FromCloudFormation.getArray(CfnGroupTagFilterPropertyFromCloudFormation)(properties.TagFilters):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnGroupResourceQueryPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("query",CfnGroupQueryPropertyValidator)(properties.query)),errors.collect(cdk().propertyValidator("type",cdk().validateString)(properties.type)),errors.wrap('supplied properties not correct for "ResourceQueryProperty"')}function convertCfnGroupResourceQueryPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupResourceQueryPropertyValidator(properties).assertSuccess(),{Query:convertCfnGroupQueryPropertyToCloudFormation(properties.query),Type:cdk().stringToCloudFormation(properties.type)}):properties}function CfnGroupResourceQueryPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("query","Query",properties.Query!=null?CfnGroupQueryPropertyFromCloudFormation(properties.Query):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?cfn_parse().FromCloudFormation.getString(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnGroupPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("configuration",cdk().listValidator(CfnGroupConfigurationItemPropertyValidator))(properties.configuration)),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("resourceQuery",CfnGroupResourceQueryPropertyValidator)(properties.resourceQuery)),errors.collect(cdk().propertyValidator("resources",cdk().listValidator(cdk().validateString))(properties.resources)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnGroupProps"')}function convertCfnGroupPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupPropsValidator(properties).assertSuccess(),{Configuration:cdk().listMapper(convertCfnGroupConfigurationItemPropertyToCloudFormation)(properties.configuration),Description:cdk().stringToCloudFormation(properties.description),Name:cdk().stringToCloudFormation(properties.name),ResourceQuery:convertCfnGroupResourceQueryPropertyToCloudFormation(properties.resourceQuery),Resources:cdk().listMapper(cdk().stringToCloudFormation)(properties.resources),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnGroupPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("configuration","Configuration",properties.Configuration!=null?cfn_parse().FromCloudFormation.getArray(CfnGroupConfigurationItemPropertyFromCloudFormation)(properties.Configuration):void 0),ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("resourceQuery","ResourceQuery",properties.ResourceQuery!=null?CfnGroupResourceQueryPropertyFromCloudFormation(properties.ResourceQuery):void 0),ret.addPropertyResult("resources","Resources",properties.Resources!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Resources):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
