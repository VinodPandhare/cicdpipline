"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnPipeline=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnPipeline extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnPipelinePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnPipeline(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnPipeline.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_datapipeline_CfnPipelineProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnPipeline),error}cdk().requireProperty(props,"name",this),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.attrPipelineId=cdk().Token.asString(this.getAtt("PipelineId",cdk().ResolutionTypeHint.STRING)),this.activate=props.activate,this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::DataPipeline::Pipeline",void 0,{tagPropertyName:"pipelineTags"}),this.description=props.description,this.name=props.name,this.parameterObjects=props.parameterObjects,this.parameterValues=props.parameterValues,this.pipelineObjects=props.pipelineObjects,this.pipelineTags=props.pipelineTags}get cfnProperties(){return{activate:this.activate,pipelineTags:this.cdkTagManager.renderTags(this.pipelineTags),description:this.description,name:this.name,parameterObjects:this.parameterObjects,parameterValues:this.parameterValues,pipelineObjects:this.pipelineObjects}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnPipeline.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnPipelinePropsToCloudFormation(props)}}exports.CfnPipeline=CfnPipeline,_a=JSII_RTTI_SYMBOL_1,CfnPipeline[_a]={fqn:"aws-cdk-lib.aws_datapipeline.CfnPipeline",version:"2.149.0"},CfnPipeline.CFN_RESOURCE_TYPE_NAME="AWS::DataPipeline::Pipeline";function CfnPipelinePipelineTagPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("key",cdk().requiredValidator)(properties.key)),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.collect(cdk().propertyValidator("value",cdk().requiredValidator)(properties.value)),errors.collect(cdk().propertyValidator("value",cdk().validateString)(properties.value)),errors.wrap('supplied properties not correct for "PipelineTagProperty"')}function convertCfnPipelinePipelineTagPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelinePipelineTagPropertyValidator(properties).assertSuccess(),{Key:cdk().stringToCloudFormation(properties.key),Value:cdk().stringToCloudFormation(properties.value)}):properties}function CfnPipelinePipelineTagPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addPropertyResult("value","Value",properties.Value!=null?cfn_parse().FromCloudFormation.getString(properties.Value):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineParameterAttributePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("key",cdk().requiredValidator)(properties.key)),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.collect(cdk().propertyValidator("stringValue",cdk().requiredValidator)(properties.stringValue)),errors.collect(cdk().propertyValidator("stringValue",cdk().validateString)(properties.stringValue)),errors.wrap('supplied properties not correct for "ParameterAttributeProperty"')}function convertCfnPipelineParameterAttributePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineParameterAttributePropertyValidator(properties).assertSuccess(),{Key:cdk().stringToCloudFormation(properties.key),StringValue:cdk().stringToCloudFormation(properties.stringValue)}):properties}function CfnPipelineParameterAttributePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addPropertyResult("stringValue","StringValue",properties.StringValue!=null?cfn_parse().FromCloudFormation.getString(properties.StringValue):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineParameterObjectPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("attributes",cdk().requiredValidator)(properties.attributes)),errors.collect(cdk().propertyValidator("attributes",cdk().listValidator(CfnPipelineParameterAttributePropertyValidator))(properties.attributes)),errors.collect(cdk().propertyValidator("id",cdk().requiredValidator)(properties.id)),errors.collect(cdk().propertyValidator("id",cdk().validateString)(properties.id)),errors.wrap('supplied properties not correct for "ParameterObjectProperty"')}function convertCfnPipelineParameterObjectPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineParameterObjectPropertyValidator(properties).assertSuccess(),{Attributes:cdk().listMapper(convertCfnPipelineParameterAttributePropertyToCloudFormation)(properties.attributes),Id:cdk().stringToCloudFormation(properties.id)}):properties}function CfnPipelineParameterObjectPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("attributes","Attributes",properties.Attributes!=null?cfn_parse().FromCloudFormation.getArray(CfnPipelineParameterAttributePropertyFromCloudFormation)(properties.Attributes):void 0),ret.addPropertyResult("id","Id",properties.Id!=null?cfn_parse().FromCloudFormation.getString(properties.Id):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineFieldPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("key",cdk().requiredValidator)(properties.key)),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.collect(cdk().propertyValidator("refValue",cdk().validateString)(properties.refValue)),errors.collect(cdk().propertyValidator("stringValue",cdk().validateString)(properties.stringValue)),errors.wrap('supplied properties not correct for "FieldProperty"')}function convertCfnPipelineFieldPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineFieldPropertyValidator(properties).assertSuccess(),{Key:cdk().stringToCloudFormation(properties.key),RefValue:cdk().stringToCloudFormation(properties.refValue),StringValue:cdk().stringToCloudFormation(properties.stringValue)}):properties}function CfnPipelineFieldPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addPropertyResult("refValue","RefValue",properties.RefValue!=null?cfn_parse().FromCloudFormation.getString(properties.RefValue):void 0),ret.addPropertyResult("stringValue","StringValue",properties.StringValue!=null?cfn_parse().FromCloudFormation.getString(properties.StringValue):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelinePipelineObjectPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("fields",cdk().requiredValidator)(properties.fields)),errors.collect(cdk().propertyValidator("fields",cdk().listValidator(CfnPipelineFieldPropertyValidator))(properties.fields)),errors.collect(cdk().propertyValidator("id",cdk().requiredValidator)(properties.id)),errors.collect(cdk().propertyValidator("id",cdk().validateString)(properties.id)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.wrap('supplied properties not correct for "PipelineObjectProperty"')}function convertCfnPipelinePipelineObjectPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelinePipelineObjectPropertyValidator(properties).assertSuccess(),{Fields:cdk().listMapper(convertCfnPipelineFieldPropertyToCloudFormation)(properties.fields),Id:cdk().stringToCloudFormation(properties.id),Name:cdk().stringToCloudFormation(properties.name)}):properties}function CfnPipelinePipelineObjectPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("fields","Fields",properties.Fields!=null?cfn_parse().FromCloudFormation.getArray(CfnPipelineFieldPropertyFromCloudFormation)(properties.Fields):void 0),ret.addPropertyResult("id","Id",properties.Id!=null?cfn_parse().FromCloudFormation.getString(properties.Id):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineParameterValuePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("id",cdk().requiredValidator)(properties.id)),errors.collect(cdk().propertyValidator("id",cdk().validateString)(properties.id)),errors.collect(cdk().propertyValidator("stringValue",cdk().requiredValidator)(properties.stringValue)),errors.collect(cdk().propertyValidator("stringValue",cdk().validateString)(properties.stringValue)),errors.wrap('supplied properties not correct for "ParameterValueProperty"')}function convertCfnPipelineParameterValuePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineParameterValuePropertyValidator(properties).assertSuccess(),{Id:cdk().stringToCloudFormation(properties.id),StringValue:cdk().stringToCloudFormation(properties.stringValue)}):properties}function CfnPipelineParameterValuePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("id","Id",properties.Id!=null?cfn_parse().FromCloudFormation.getString(properties.Id):void 0),ret.addPropertyResult("stringValue","StringValue",properties.StringValue!=null?cfn_parse().FromCloudFormation.getString(properties.StringValue):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelinePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("activate",cdk().validateBoolean)(properties.activate)),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("parameterObjects",cdk().listValidator(CfnPipelineParameterObjectPropertyValidator))(properties.parameterObjects)),errors.collect(cdk().propertyValidator("parameterValues",cdk().listValidator(CfnPipelineParameterValuePropertyValidator))(properties.parameterValues)),errors.collect(cdk().propertyValidator("pipelineObjects",cdk().listValidator(CfnPipelinePipelineObjectPropertyValidator))(properties.pipelineObjects)),errors.collect(cdk().propertyValidator("pipelineTags",cdk().listValidator(CfnPipelinePipelineTagPropertyValidator))(properties.pipelineTags)),errors.wrap('supplied properties not correct for "CfnPipelineProps"')}function convertCfnPipelinePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelinePropsValidator(properties).assertSuccess(),{Activate:cdk().booleanToCloudFormation(properties.activate),Description:cdk().stringToCloudFormation(properties.description),Name:cdk().stringToCloudFormation(properties.name),ParameterObjects:cdk().listMapper(convertCfnPipelineParameterObjectPropertyToCloudFormation)(properties.parameterObjects),ParameterValues:cdk().listMapper(convertCfnPipelineParameterValuePropertyToCloudFormation)(properties.parameterValues),PipelineObjects:cdk().listMapper(convertCfnPipelinePipelineObjectPropertyToCloudFormation)(properties.pipelineObjects),PipelineTags:cdk().listMapper(convertCfnPipelinePipelineTagPropertyToCloudFormation)(properties.pipelineTags)}):properties}function CfnPipelinePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("activate","Activate",properties.Activate!=null?cfn_parse().FromCloudFormation.getBoolean(properties.Activate):void 0),ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("parameterObjects","ParameterObjects",properties.ParameterObjects!=null?cfn_parse().FromCloudFormation.getArray(CfnPipelineParameterObjectPropertyFromCloudFormation)(properties.ParameterObjects):void 0),ret.addPropertyResult("parameterValues","ParameterValues",properties.ParameterValues!=null?cfn_parse().FromCloudFormation.getArray(CfnPipelineParameterValuePropertyFromCloudFormation)(properties.ParameterValues):void 0),ret.addPropertyResult("pipelineObjects","PipelineObjects",properties.PipelineObjects!=null?cfn_parse().FromCloudFormation.getArray(CfnPipelinePipelineObjectPropertyFromCloudFormation)(properties.PipelineObjects):void 0),ret.addPropertyResult("pipelineTags","PipelineTags",properties.PipelineTags!=null?cfn_parse().FromCloudFormation.getArray(CfnPipelinePipelineTagPropertyFromCloudFormation)(properties.PipelineTags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
