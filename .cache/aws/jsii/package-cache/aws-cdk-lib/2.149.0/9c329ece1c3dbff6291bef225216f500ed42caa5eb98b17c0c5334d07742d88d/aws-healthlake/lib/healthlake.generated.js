"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnFHIRDatastore=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnFHIRDatastore extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnFHIRDatastorePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnFHIRDatastore(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnFHIRDatastore.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_healthlake_CfnFHIRDatastoreProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnFHIRDatastore),error}cdk().requireProperty(props,"datastoreTypeVersion",this),this.attrCreatedAt=this.getAtt("CreatedAt"),this.attrCreatedAtNanos=cdk().Token.asNumber(this.getAtt("CreatedAt.Nanos",cdk().ResolutionTypeHint.NUMBER)),this.attrCreatedAtSeconds=cdk().Token.asString(this.getAtt("CreatedAt.Seconds",cdk().ResolutionTypeHint.STRING)),this.attrDatastoreArn=cdk().Token.asString(this.getAtt("DatastoreArn",cdk().ResolutionTypeHint.STRING)),this.attrDatastoreEndpoint=cdk().Token.asString(this.getAtt("DatastoreEndpoint",cdk().ResolutionTypeHint.STRING)),this.attrDatastoreId=cdk().Token.asString(this.getAtt("DatastoreId",cdk().ResolutionTypeHint.STRING)),this.attrDatastoreStatus=cdk().Token.asString(this.getAtt("DatastoreStatus",cdk().ResolutionTypeHint.STRING)),this.datastoreName=props.datastoreName,this.datastoreTypeVersion=props.datastoreTypeVersion,this.identityProviderConfiguration=props.identityProviderConfiguration,this.preloadDataConfig=props.preloadDataConfig,this.sseConfiguration=props.sseConfiguration,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::HealthLake::FHIRDatastore",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{datastoreName:this.datastoreName,datastoreTypeVersion:this.datastoreTypeVersion,identityProviderConfiguration:this.identityProviderConfiguration,preloadDataConfig:this.preloadDataConfig,sseConfiguration:this.sseConfiguration,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnFHIRDatastore.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnFHIRDatastorePropsToCloudFormation(props)}}exports.CfnFHIRDatastore=CfnFHIRDatastore,_a=JSII_RTTI_SYMBOL_1,CfnFHIRDatastore[_a]={fqn:"aws-cdk-lib.aws_healthlake.CfnFHIRDatastore",version:"2.149.0"},CfnFHIRDatastore.CFN_RESOURCE_TYPE_NAME="AWS::HealthLake::FHIRDatastore";function CfnFHIRDatastoreIdentityProviderConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("authorizationStrategy",cdk().requiredValidator)(properties.authorizationStrategy)),errors.collect(cdk().propertyValidator("authorizationStrategy",cdk().validateString)(properties.authorizationStrategy)),errors.collect(cdk().propertyValidator("fineGrainedAuthorizationEnabled",cdk().validateBoolean)(properties.fineGrainedAuthorizationEnabled)),errors.collect(cdk().propertyValidator("idpLambdaArn",cdk().validateString)(properties.idpLambdaArn)),errors.collect(cdk().propertyValidator("metadata",cdk().validateString)(properties.metadata)),errors.wrap('supplied properties not correct for "IdentityProviderConfigurationProperty"')}function convertCfnFHIRDatastoreIdentityProviderConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnFHIRDatastoreIdentityProviderConfigurationPropertyValidator(properties).assertSuccess(),{AuthorizationStrategy:cdk().stringToCloudFormation(properties.authorizationStrategy),FineGrainedAuthorizationEnabled:cdk().booleanToCloudFormation(properties.fineGrainedAuthorizationEnabled),IdpLambdaArn:cdk().stringToCloudFormation(properties.idpLambdaArn),Metadata:cdk().stringToCloudFormation(properties.metadata)}):properties}function CfnFHIRDatastoreIdentityProviderConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("authorizationStrategy","AuthorizationStrategy",properties.AuthorizationStrategy!=null?cfn_parse().FromCloudFormation.getString(properties.AuthorizationStrategy):void 0),ret.addPropertyResult("fineGrainedAuthorizationEnabled","FineGrainedAuthorizationEnabled",properties.FineGrainedAuthorizationEnabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.FineGrainedAuthorizationEnabled):void 0),ret.addPropertyResult("idpLambdaArn","IdpLambdaArn",properties.IdpLambdaArn!=null?cfn_parse().FromCloudFormation.getString(properties.IdpLambdaArn):void 0),ret.addPropertyResult("metadata","Metadata",properties.Metadata!=null?cfn_parse().FromCloudFormation.getString(properties.Metadata):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnFHIRDatastorePreloadDataConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("preloadDataType",cdk().requiredValidator)(properties.preloadDataType)),errors.collect(cdk().propertyValidator("preloadDataType",cdk().validateString)(properties.preloadDataType)),errors.wrap('supplied properties not correct for "PreloadDataConfigProperty"')}function convertCfnFHIRDatastorePreloadDataConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnFHIRDatastorePreloadDataConfigPropertyValidator(properties).assertSuccess(),{PreloadDataType:cdk().stringToCloudFormation(properties.preloadDataType)}):properties}function CfnFHIRDatastorePreloadDataConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("preloadDataType","PreloadDataType",properties.PreloadDataType!=null?cfn_parse().FromCloudFormation.getString(properties.PreloadDataType):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnFHIRDatastoreKmsEncryptionConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("cmkType",cdk().requiredValidator)(properties.cmkType)),errors.collect(cdk().propertyValidator("cmkType",cdk().validateString)(properties.cmkType)),errors.collect(cdk().propertyValidator("kmsKeyId",cdk().validateString)(properties.kmsKeyId)),errors.wrap('supplied properties not correct for "KmsEncryptionConfigProperty"')}function convertCfnFHIRDatastoreKmsEncryptionConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnFHIRDatastoreKmsEncryptionConfigPropertyValidator(properties).assertSuccess(),{CmkType:cdk().stringToCloudFormation(properties.cmkType),KmsKeyId:cdk().stringToCloudFormation(properties.kmsKeyId)}):properties}function CfnFHIRDatastoreKmsEncryptionConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("cmkType","CmkType",properties.CmkType!=null?cfn_parse().FromCloudFormation.getString(properties.CmkType):void 0),ret.addPropertyResult("kmsKeyId","KmsKeyId",properties.KmsKeyId!=null?cfn_parse().FromCloudFormation.getString(properties.KmsKeyId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnFHIRDatastoreSseConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("kmsEncryptionConfig",cdk().requiredValidator)(properties.kmsEncryptionConfig)),errors.collect(cdk().propertyValidator("kmsEncryptionConfig",CfnFHIRDatastoreKmsEncryptionConfigPropertyValidator)(properties.kmsEncryptionConfig)),errors.wrap('supplied properties not correct for "SseConfigurationProperty"')}function convertCfnFHIRDatastoreSseConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnFHIRDatastoreSseConfigurationPropertyValidator(properties).assertSuccess(),{KmsEncryptionConfig:convertCfnFHIRDatastoreKmsEncryptionConfigPropertyToCloudFormation(properties.kmsEncryptionConfig)}):properties}function CfnFHIRDatastoreSseConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("kmsEncryptionConfig","KmsEncryptionConfig",properties.KmsEncryptionConfig!=null?CfnFHIRDatastoreKmsEncryptionConfigPropertyFromCloudFormation(properties.KmsEncryptionConfig):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnFHIRDatastoreCreatedAtPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("nanos",cdk().requiredValidator)(properties.nanos)),errors.collect(cdk().propertyValidator("nanos",cdk().validateNumber)(properties.nanos)),errors.collect(cdk().propertyValidator("seconds",cdk().requiredValidator)(properties.seconds)),errors.collect(cdk().propertyValidator("seconds",cdk().validateString)(properties.seconds)),errors.wrap('supplied properties not correct for "CreatedAtProperty"')}function convertCfnFHIRDatastoreCreatedAtPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnFHIRDatastoreCreatedAtPropertyValidator(properties).assertSuccess(),{Nanos:cdk().numberToCloudFormation(properties.nanos),Seconds:cdk().stringToCloudFormation(properties.seconds)}):properties}function CfnFHIRDatastoreCreatedAtPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("nanos","Nanos",properties.Nanos!=null?cfn_parse().FromCloudFormation.getNumber(properties.Nanos):void 0),ret.addPropertyResult("seconds","Seconds",properties.Seconds!=null?cfn_parse().FromCloudFormation.getString(properties.Seconds):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnFHIRDatastorePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("datastoreName",cdk().validateString)(properties.datastoreName)),errors.collect(cdk().propertyValidator("datastoreTypeVersion",cdk().requiredValidator)(properties.datastoreTypeVersion)),errors.collect(cdk().propertyValidator("datastoreTypeVersion",cdk().validateString)(properties.datastoreTypeVersion)),errors.collect(cdk().propertyValidator("identityProviderConfiguration",CfnFHIRDatastoreIdentityProviderConfigurationPropertyValidator)(properties.identityProviderConfiguration)),errors.collect(cdk().propertyValidator("preloadDataConfig",CfnFHIRDatastorePreloadDataConfigPropertyValidator)(properties.preloadDataConfig)),errors.collect(cdk().propertyValidator("sseConfiguration",CfnFHIRDatastoreSseConfigurationPropertyValidator)(properties.sseConfiguration)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnFHIRDatastoreProps"')}function convertCfnFHIRDatastorePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnFHIRDatastorePropsValidator(properties).assertSuccess(),{DatastoreName:cdk().stringToCloudFormation(properties.datastoreName),DatastoreTypeVersion:cdk().stringToCloudFormation(properties.datastoreTypeVersion),IdentityProviderConfiguration:convertCfnFHIRDatastoreIdentityProviderConfigurationPropertyToCloudFormation(properties.identityProviderConfiguration),PreloadDataConfig:convertCfnFHIRDatastorePreloadDataConfigPropertyToCloudFormation(properties.preloadDataConfig),SseConfiguration:convertCfnFHIRDatastoreSseConfigurationPropertyToCloudFormation(properties.sseConfiguration),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnFHIRDatastorePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("datastoreName","DatastoreName",properties.DatastoreName!=null?cfn_parse().FromCloudFormation.getString(properties.DatastoreName):void 0),ret.addPropertyResult("datastoreTypeVersion","DatastoreTypeVersion",properties.DatastoreTypeVersion!=null?cfn_parse().FromCloudFormation.getString(properties.DatastoreTypeVersion):void 0),ret.addPropertyResult("identityProviderConfiguration","IdentityProviderConfiguration",properties.IdentityProviderConfiguration!=null?CfnFHIRDatastoreIdentityProviderConfigurationPropertyFromCloudFormation(properties.IdentityProviderConfiguration):void 0),ret.addPropertyResult("preloadDataConfig","PreloadDataConfig",properties.PreloadDataConfig!=null?CfnFHIRDatastorePreloadDataConfigPropertyFromCloudFormation(properties.PreloadDataConfig):void 0),ret.addPropertyResult("sseConfiguration","SseConfiguration",properties.SseConfiguration!=null?CfnFHIRDatastoreSseConfigurationPropertyFromCloudFormation(properties.SseConfiguration):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
