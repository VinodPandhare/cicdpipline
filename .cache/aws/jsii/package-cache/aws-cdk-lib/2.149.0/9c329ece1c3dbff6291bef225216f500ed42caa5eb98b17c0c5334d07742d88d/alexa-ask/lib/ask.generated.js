"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnSkill=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnSkill extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnSkillPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnSkill(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnSkill.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_alexa_ask_CfnSkillProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnSkill),error}cdk().requireProperty(props,"authenticationConfiguration",this),cdk().requireProperty(props,"skillPackage",this),cdk().requireProperty(props,"vendorId",this),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.authenticationConfiguration=props.authenticationConfiguration,this.skillPackage=props.skillPackage,this.vendorId=props.vendorId}get cfnProperties(){return{authenticationConfiguration:this.authenticationConfiguration,skillPackage:this.skillPackage,vendorId:this.vendorId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnSkill.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnSkillPropsToCloudFormation(props)}}exports.CfnSkill=CfnSkill,_a=JSII_RTTI_SYMBOL_1,CfnSkill[_a]={fqn:"aws-cdk-lib.alexa_ask.CfnSkill",version:"2.149.0"},CfnSkill.CFN_RESOURCE_TYPE_NAME="Alexa::ASK::Skill";function CfnSkillAuthenticationConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("clientId",cdk().requiredValidator)(properties.clientId)),errors.collect(cdk().propertyValidator("clientId",cdk().validateString)(properties.clientId)),errors.collect(cdk().propertyValidator("clientSecret",cdk().requiredValidator)(properties.clientSecret)),errors.collect(cdk().propertyValidator("clientSecret",cdk().validateString)(properties.clientSecret)),errors.collect(cdk().propertyValidator("refreshToken",cdk().requiredValidator)(properties.refreshToken)),errors.collect(cdk().propertyValidator("refreshToken",cdk().validateString)(properties.refreshToken)),errors.wrap('supplied properties not correct for "AuthenticationConfigurationProperty"')}function convertCfnSkillAuthenticationConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSkillAuthenticationConfigurationPropertyValidator(properties).assertSuccess(),{ClientId:cdk().stringToCloudFormation(properties.clientId),ClientSecret:cdk().stringToCloudFormation(properties.clientSecret),RefreshToken:cdk().stringToCloudFormation(properties.refreshToken)}):properties}function CfnSkillAuthenticationConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("clientId","ClientId",properties.ClientId!=null?cfn_parse().FromCloudFormation.getString(properties.ClientId):void 0),ret.addPropertyResult("clientSecret","ClientSecret",properties.ClientSecret!=null?cfn_parse().FromCloudFormation.getString(properties.ClientSecret):void 0),ret.addPropertyResult("refreshToken","RefreshToken",properties.RefreshToken!=null?cfn_parse().FromCloudFormation.getString(properties.RefreshToken):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnSkillOverridesPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("manifest",cdk().validateObject)(properties.manifest)),errors.wrap('supplied properties not correct for "OverridesProperty"')}function convertCfnSkillOverridesPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSkillOverridesPropertyValidator(properties).assertSuccess(),{Manifest:cdk().objectToCloudFormation(properties.manifest)}):properties}function CfnSkillOverridesPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("manifest","Manifest",properties.Manifest!=null?cfn_parse().FromCloudFormation.getAny(properties.Manifest):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnSkillSkillPackagePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("overrides",CfnSkillOverridesPropertyValidator)(properties.overrides)),errors.collect(cdk().propertyValidator("s3Bucket",cdk().requiredValidator)(properties.s3Bucket)),errors.collect(cdk().propertyValidator("s3Bucket",cdk().validateString)(properties.s3Bucket)),errors.collect(cdk().propertyValidator("s3BucketRole",cdk().validateString)(properties.s3BucketRole)),errors.collect(cdk().propertyValidator("s3Key",cdk().requiredValidator)(properties.s3Key)),errors.collect(cdk().propertyValidator("s3Key",cdk().validateString)(properties.s3Key)),errors.collect(cdk().propertyValidator("s3ObjectVersion",cdk().validateString)(properties.s3ObjectVersion)),errors.wrap('supplied properties not correct for "SkillPackageProperty"')}function convertCfnSkillSkillPackagePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSkillSkillPackagePropertyValidator(properties).assertSuccess(),{Overrides:convertCfnSkillOverridesPropertyToCloudFormation(properties.overrides),S3Bucket:cdk().stringToCloudFormation(properties.s3Bucket),S3BucketRole:cdk().stringToCloudFormation(properties.s3BucketRole),S3Key:cdk().stringToCloudFormation(properties.s3Key),S3ObjectVersion:cdk().stringToCloudFormation(properties.s3ObjectVersion)}):properties}function CfnSkillSkillPackagePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("overrides","Overrides",properties.Overrides!=null?CfnSkillOverridesPropertyFromCloudFormation(properties.Overrides):void 0),ret.addPropertyResult("s3Bucket","S3Bucket",properties.S3Bucket!=null?cfn_parse().FromCloudFormation.getString(properties.S3Bucket):void 0),ret.addPropertyResult("s3BucketRole","S3BucketRole",properties.S3BucketRole!=null?cfn_parse().FromCloudFormation.getString(properties.S3BucketRole):void 0),ret.addPropertyResult("s3Key","S3Key",properties.S3Key!=null?cfn_parse().FromCloudFormation.getString(properties.S3Key):void 0),ret.addPropertyResult("s3ObjectVersion","S3ObjectVersion",properties.S3ObjectVersion!=null?cfn_parse().FromCloudFormation.getString(properties.S3ObjectVersion):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnSkillPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("authenticationConfiguration",cdk().requiredValidator)(properties.authenticationConfiguration)),errors.collect(cdk().propertyValidator("authenticationConfiguration",CfnSkillAuthenticationConfigurationPropertyValidator)(properties.authenticationConfiguration)),errors.collect(cdk().propertyValidator("skillPackage",cdk().requiredValidator)(properties.skillPackage)),errors.collect(cdk().propertyValidator("skillPackage",CfnSkillSkillPackagePropertyValidator)(properties.skillPackage)),errors.collect(cdk().propertyValidator("vendorId",cdk().requiredValidator)(properties.vendorId)),errors.collect(cdk().propertyValidator("vendorId",cdk().validateString)(properties.vendorId)),errors.wrap('supplied properties not correct for "CfnSkillProps"')}function convertCfnSkillPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSkillPropsValidator(properties).assertSuccess(),{AuthenticationConfiguration:convertCfnSkillAuthenticationConfigurationPropertyToCloudFormation(properties.authenticationConfiguration),SkillPackage:convertCfnSkillSkillPackagePropertyToCloudFormation(properties.skillPackage),VendorId:cdk().stringToCloudFormation(properties.vendorId)}):properties}function CfnSkillPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("authenticationConfiguration","AuthenticationConfiguration",properties.AuthenticationConfiguration!=null?CfnSkillAuthenticationConfigurationPropertyFromCloudFormation(properties.AuthenticationConfiguration):void 0),ret.addPropertyResult("skillPackage","SkillPackage",properties.SkillPackage!=null?CfnSkillSkillPackagePropertyFromCloudFormation(properties.SkillPackage):void 0),ret.addPropertyResult("vendorId","VendorId",properties.VendorId!=null?cfn_parse().FromCloudFormation.getString(properties.VendorId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
