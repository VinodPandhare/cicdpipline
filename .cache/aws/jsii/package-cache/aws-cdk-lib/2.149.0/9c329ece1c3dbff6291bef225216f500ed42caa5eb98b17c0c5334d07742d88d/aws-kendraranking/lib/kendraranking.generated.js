"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnExecutionPlan=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnExecutionPlan extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnExecutionPlanPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnExecutionPlan(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnExecutionPlan.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_kendraranking_CfnExecutionPlanProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnExecutionPlan),error}cdk().requireProperty(props,"name",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.capacityUnits=props.capacityUnits,this.description=props.description,this.name=props.name,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::KendraRanking::ExecutionPlan",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{capacityUnits:this.capacityUnits,description:this.description,name:this.name,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnExecutionPlan.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnExecutionPlanPropsToCloudFormation(props)}}exports.CfnExecutionPlan=CfnExecutionPlan,_a=JSII_RTTI_SYMBOL_1,CfnExecutionPlan[_a]={fqn:"aws-cdk-lib.aws_kendraranking.CfnExecutionPlan",version:"2.149.0"},CfnExecutionPlan.CFN_RESOURCE_TYPE_NAME="AWS::KendraRanking::ExecutionPlan";function CfnExecutionPlanCapacityUnitsConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("rescoreCapacityUnits",cdk().requiredValidator)(properties.rescoreCapacityUnits)),errors.collect(cdk().propertyValidator("rescoreCapacityUnits",cdk().validateNumber)(properties.rescoreCapacityUnits)),errors.wrap('supplied properties not correct for "CapacityUnitsConfigurationProperty"')}function convertCfnExecutionPlanCapacityUnitsConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnExecutionPlanCapacityUnitsConfigurationPropertyValidator(properties).assertSuccess(),{RescoreCapacityUnits:cdk().numberToCloudFormation(properties.rescoreCapacityUnits)}):properties}function CfnExecutionPlanCapacityUnitsConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("rescoreCapacityUnits","RescoreCapacityUnits",properties.RescoreCapacityUnits!=null?cfn_parse().FromCloudFormation.getNumber(properties.RescoreCapacityUnits):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnExecutionPlanPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("capacityUnits",CfnExecutionPlanCapacityUnitsConfigurationPropertyValidator)(properties.capacityUnits)),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnExecutionPlanProps"')}function convertCfnExecutionPlanPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnExecutionPlanPropsValidator(properties).assertSuccess(),{CapacityUnits:convertCfnExecutionPlanCapacityUnitsConfigurationPropertyToCloudFormation(properties.capacityUnits),Description:cdk().stringToCloudFormation(properties.description),Name:cdk().stringToCloudFormation(properties.name),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnExecutionPlanPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("capacityUnits","CapacityUnits",properties.CapacityUnits!=null?CfnExecutionPlanCapacityUnitsConfigurationPropertyFromCloudFormation(properties.CapacityUnits):void 0),ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}