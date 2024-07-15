"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnDomain=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnDomain extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnDomainPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnDomain(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnDomain.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_voiceid_CfnDomainProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnDomain),error}cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"serverSideEncryptionConfiguration",this),this.attrDomainId=cdk().Token.asString(this.getAtt("DomainId",cdk().ResolutionTypeHint.STRING)),this.description=props.description,this.name=props.name,this.serverSideEncryptionConfiguration=props.serverSideEncryptionConfiguration,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::VoiceID::Domain",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{description:this.description,name:this.name,serverSideEncryptionConfiguration:this.serverSideEncryptionConfiguration,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnDomain.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnDomainPropsToCloudFormation(props)}}exports.CfnDomain=CfnDomain,_a=JSII_RTTI_SYMBOL_1,CfnDomain[_a]={fqn:"aws-cdk-lib.aws_voiceid.CfnDomain",version:"2.149.0"},CfnDomain.CFN_RESOURCE_TYPE_NAME="AWS::VoiceID::Domain";function CfnDomainServerSideEncryptionConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("kmsKeyId",cdk().requiredValidator)(properties.kmsKeyId)),errors.collect(cdk().propertyValidator("kmsKeyId",cdk().validateString)(properties.kmsKeyId)),errors.wrap('supplied properties not correct for "ServerSideEncryptionConfigurationProperty"')}function convertCfnDomainServerSideEncryptionConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnDomainServerSideEncryptionConfigurationPropertyValidator(properties).assertSuccess(),{KmsKeyId:cdk().stringToCloudFormation(properties.kmsKeyId)}):properties}function CfnDomainServerSideEncryptionConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("kmsKeyId","KmsKeyId",properties.KmsKeyId!=null?cfn_parse().FromCloudFormation.getString(properties.KmsKeyId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnDomainPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("serverSideEncryptionConfiguration",cdk().requiredValidator)(properties.serverSideEncryptionConfiguration)),errors.collect(cdk().propertyValidator("serverSideEncryptionConfiguration",CfnDomainServerSideEncryptionConfigurationPropertyValidator)(properties.serverSideEncryptionConfiguration)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnDomainProps"')}function convertCfnDomainPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnDomainPropsValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),Name:cdk().stringToCloudFormation(properties.name),ServerSideEncryptionConfiguration:convertCfnDomainServerSideEncryptionConfigurationPropertyToCloudFormation(properties.serverSideEncryptionConfiguration),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnDomainPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("serverSideEncryptionConfiguration","ServerSideEncryptionConfiguration",properties.ServerSideEncryptionConfiguration!=null?CfnDomainServerSideEncryptionConfigurationPropertyFromCloudFormation(properties.ServerSideEncryptionConfiguration):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}