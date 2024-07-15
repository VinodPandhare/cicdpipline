"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnTransformer=exports.CfnProfile=exports.CfnPartnership=exports.CfnCapability=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnCapability extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnCapabilityPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnCapability(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnCapability.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_b2bi_CfnCapabilityProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnCapability),error}cdk().requireProperty(props,"configuration",this),cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"type",this),this.attrCapabilityArn=cdk().Token.asString(this.getAtt("CapabilityArn",cdk().ResolutionTypeHint.STRING)),this.attrCapabilityId=cdk().Token.asString(this.getAtt("CapabilityId",cdk().ResolutionTypeHint.STRING)),this.attrCreatedAt=cdk().Token.asString(this.getAtt("CreatedAt",cdk().ResolutionTypeHint.STRING)),this.attrModifiedAt=cdk().Token.asString(this.getAtt("ModifiedAt",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::B2BI::Capability",void 0,{tagPropertyName:"tags"}),this.configuration=props.configuration,this.instructionsDocuments=props.instructionsDocuments,this.name=props.name,this.tags=props.tags,this.type=props.type}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),configuration:this.configuration,instructionsDocuments:this.instructionsDocuments,name:this.name,type:this.type}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnCapability.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnCapabilityPropsToCloudFormation(props)}}exports.CfnCapability=CfnCapability,_a=JSII_RTTI_SYMBOL_1,CfnCapability[_a]={fqn:"aws-cdk-lib.aws_b2bi.CfnCapability",version:"2.149.0"},CfnCapability.CFN_RESOURCE_TYPE_NAME="AWS::B2BI::Capability";function CfnCapabilityX12DetailsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("transactionSet",cdk().validateString)(properties.transactionSet)),errors.collect(cdk().propertyValidator("version",cdk().validateString)(properties.version)),errors.wrap('supplied properties not correct for "X12DetailsProperty"')}function convertCfnCapabilityX12DetailsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCapabilityX12DetailsPropertyValidator(properties).assertSuccess(),{TransactionSet:cdk().stringToCloudFormation(properties.transactionSet),Version:cdk().stringToCloudFormation(properties.version)}):properties}function CfnCapabilityX12DetailsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("transactionSet","TransactionSet",properties.TransactionSet!=null?cfn_parse().FromCloudFormation.getString(properties.TransactionSet):void 0),ret.addPropertyResult("version","Version",properties.Version!=null?cfn_parse().FromCloudFormation.getString(properties.Version):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCapabilityEdiTypePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("x12Details",cdk().requiredValidator)(properties.x12Details)),errors.collect(cdk().propertyValidator("x12Details",CfnCapabilityX12DetailsPropertyValidator)(properties.x12Details)),errors.wrap('supplied properties not correct for "EdiTypeProperty"')}function convertCfnCapabilityEdiTypePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCapabilityEdiTypePropertyValidator(properties).assertSuccess(),{X12Details:convertCfnCapabilityX12DetailsPropertyToCloudFormation(properties.x12Details)}):properties}function CfnCapabilityEdiTypePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("x12Details","X12Details",properties.X12Details!=null?CfnCapabilityX12DetailsPropertyFromCloudFormation(properties.X12Details):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCapabilityS3LocationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("bucketName",cdk().validateString)(properties.bucketName)),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.wrap('supplied properties not correct for "S3LocationProperty"')}function convertCfnCapabilityS3LocationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCapabilityS3LocationPropertyValidator(properties).assertSuccess(),{BucketName:cdk().stringToCloudFormation(properties.bucketName),Key:cdk().stringToCloudFormation(properties.key)}):properties}function CfnCapabilityS3LocationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("bucketName","BucketName",properties.BucketName!=null?cfn_parse().FromCloudFormation.getString(properties.BucketName):void 0),ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCapabilityEdiConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("inputLocation",cdk().requiredValidator)(properties.inputLocation)),errors.collect(cdk().propertyValidator("inputLocation",CfnCapabilityS3LocationPropertyValidator)(properties.inputLocation)),errors.collect(cdk().propertyValidator("outputLocation",cdk().requiredValidator)(properties.outputLocation)),errors.collect(cdk().propertyValidator("outputLocation",CfnCapabilityS3LocationPropertyValidator)(properties.outputLocation)),errors.collect(cdk().propertyValidator("transformerId",cdk().requiredValidator)(properties.transformerId)),errors.collect(cdk().propertyValidator("transformerId",cdk().validateString)(properties.transformerId)),errors.collect(cdk().propertyValidator("type",cdk().requiredValidator)(properties.type)),errors.collect(cdk().propertyValidator("type",CfnCapabilityEdiTypePropertyValidator)(properties.type)),errors.wrap('supplied properties not correct for "EdiConfigurationProperty"')}function convertCfnCapabilityEdiConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCapabilityEdiConfigurationPropertyValidator(properties).assertSuccess(),{InputLocation:convertCfnCapabilityS3LocationPropertyToCloudFormation(properties.inputLocation),OutputLocation:convertCfnCapabilityS3LocationPropertyToCloudFormation(properties.outputLocation),TransformerId:cdk().stringToCloudFormation(properties.transformerId),Type:convertCfnCapabilityEdiTypePropertyToCloudFormation(properties.type)}):properties}function CfnCapabilityEdiConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("inputLocation","InputLocation",properties.InputLocation!=null?CfnCapabilityS3LocationPropertyFromCloudFormation(properties.InputLocation):void 0),ret.addPropertyResult("outputLocation","OutputLocation",properties.OutputLocation!=null?CfnCapabilityS3LocationPropertyFromCloudFormation(properties.OutputLocation):void 0),ret.addPropertyResult("transformerId","TransformerId",properties.TransformerId!=null?cfn_parse().FromCloudFormation.getString(properties.TransformerId):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?CfnCapabilityEdiTypePropertyFromCloudFormation(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCapabilityCapabilityConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("edi",cdk().requiredValidator)(properties.edi)),errors.collect(cdk().propertyValidator("edi",CfnCapabilityEdiConfigurationPropertyValidator)(properties.edi)),errors.wrap('supplied properties not correct for "CapabilityConfigurationProperty"')}function convertCfnCapabilityCapabilityConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCapabilityCapabilityConfigurationPropertyValidator(properties).assertSuccess(),{Edi:convertCfnCapabilityEdiConfigurationPropertyToCloudFormation(properties.edi)}):properties}function CfnCapabilityCapabilityConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("edi","Edi",properties.Edi!=null?CfnCapabilityEdiConfigurationPropertyFromCloudFormation(properties.Edi):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCapabilityPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("configuration",cdk().requiredValidator)(properties.configuration)),errors.collect(cdk().propertyValidator("configuration",CfnCapabilityCapabilityConfigurationPropertyValidator)(properties.configuration)),errors.collect(cdk().propertyValidator("instructionsDocuments",cdk().listValidator(CfnCapabilityS3LocationPropertyValidator))(properties.instructionsDocuments)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.collect(cdk().propertyValidator("type",cdk().requiredValidator)(properties.type)),errors.collect(cdk().propertyValidator("type",cdk().validateString)(properties.type)),errors.wrap('supplied properties not correct for "CfnCapabilityProps"')}function convertCfnCapabilityPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCapabilityPropsValidator(properties).assertSuccess(),{Configuration:convertCfnCapabilityCapabilityConfigurationPropertyToCloudFormation(properties.configuration),InstructionsDocuments:cdk().listMapper(convertCfnCapabilityS3LocationPropertyToCloudFormation)(properties.instructionsDocuments),Name:cdk().stringToCloudFormation(properties.name),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags),Type:cdk().stringToCloudFormation(properties.type)}):properties}function CfnCapabilityPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("configuration","Configuration",properties.Configuration!=null?CfnCapabilityCapabilityConfigurationPropertyFromCloudFormation(properties.Configuration):void 0),ret.addPropertyResult("instructionsDocuments","InstructionsDocuments",properties.InstructionsDocuments!=null?cfn_parse().FromCloudFormation.getArray(CfnCapabilityS3LocationPropertyFromCloudFormation)(properties.InstructionsDocuments):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?cfn_parse().FromCloudFormation.getString(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnPartnership extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnPartnershipPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnPartnership(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnPartnership.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_b2bi_CfnPartnershipProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnPartnership),error}cdk().requireProperty(props,"email",this),cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"profileId",this),this.attrCreatedAt=cdk().Token.asString(this.getAtt("CreatedAt",cdk().ResolutionTypeHint.STRING)),this.attrModifiedAt=cdk().Token.asString(this.getAtt("ModifiedAt",cdk().ResolutionTypeHint.STRING)),this.attrPartnershipArn=cdk().Token.asString(this.getAtt("PartnershipArn",cdk().ResolutionTypeHint.STRING)),this.attrPartnershipId=cdk().Token.asString(this.getAtt("PartnershipId",cdk().ResolutionTypeHint.STRING)),this.attrTradingPartnerId=cdk().Token.asString(this.getAtt("TradingPartnerId",cdk().ResolutionTypeHint.STRING)),this.capabilities=props.capabilities,this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::B2BI::Partnership",void 0,{tagPropertyName:"tags"}),this.email=props.email,this.name=props.name,this.phone=props.phone,this.profileId=props.profileId,this.tags=props.tags}get cfnProperties(){return{capabilities:this.capabilities,tags:this.cdkTagManager.renderTags(this.tags),email:this.email,name:this.name,phone:this.phone,profileId:this.profileId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnPartnership.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnPartnershipPropsToCloudFormation(props)}}exports.CfnPartnership=CfnPartnership,_b=JSII_RTTI_SYMBOL_1,CfnPartnership[_b]={fqn:"aws-cdk-lib.aws_b2bi.CfnPartnership",version:"2.149.0"},CfnPartnership.CFN_RESOURCE_TYPE_NAME="AWS::B2BI::Partnership";function CfnPartnershipPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("capabilities",cdk().listValidator(cdk().validateString))(properties.capabilities)),errors.collect(cdk().propertyValidator("email",cdk().requiredValidator)(properties.email)),errors.collect(cdk().propertyValidator("email",cdk().validateString)(properties.email)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("phone",cdk().validateString)(properties.phone)),errors.collect(cdk().propertyValidator("profileId",cdk().requiredValidator)(properties.profileId)),errors.collect(cdk().propertyValidator("profileId",cdk().validateString)(properties.profileId)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnPartnershipProps"')}function convertCfnPartnershipPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPartnershipPropsValidator(properties).assertSuccess(),{Capabilities:cdk().listMapper(cdk().stringToCloudFormation)(properties.capabilities),Email:cdk().stringToCloudFormation(properties.email),Name:cdk().stringToCloudFormation(properties.name),Phone:cdk().stringToCloudFormation(properties.phone),ProfileId:cdk().stringToCloudFormation(properties.profileId),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnPartnershipPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("capabilities","Capabilities",properties.Capabilities!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Capabilities):void 0),ret.addPropertyResult("email","Email",properties.Email!=null?cfn_parse().FromCloudFormation.getString(properties.Email):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("phone","Phone",properties.Phone!=null?cfn_parse().FromCloudFormation.getString(properties.Phone):void 0),ret.addPropertyResult("profileId","ProfileId",properties.ProfileId!=null?cfn_parse().FromCloudFormation.getString(properties.ProfileId):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnProfile extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnProfilePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnProfile(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnProfile.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_b2bi_CfnProfileProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnProfile),error}cdk().requireProperty(props,"businessName",this),cdk().requireProperty(props,"logging",this),cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"phone",this),this.attrCreatedAt=cdk().Token.asString(this.getAtt("CreatedAt",cdk().ResolutionTypeHint.STRING)),this.attrLogGroupName=cdk().Token.asString(this.getAtt("LogGroupName",cdk().ResolutionTypeHint.STRING)),this.attrModifiedAt=cdk().Token.asString(this.getAtt("ModifiedAt",cdk().ResolutionTypeHint.STRING)),this.attrProfileArn=cdk().Token.asString(this.getAtt("ProfileArn",cdk().ResolutionTypeHint.STRING)),this.attrProfileId=cdk().Token.asString(this.getAtt("ProfileId",cdk().ResolutionTypeHint.STRING)),this.businessName=props.businessName,this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::B2BI::Profile",void 0,{tagPropertyName:"tags"}),this.email=props.email,this.logging=props.logging,this.name=props.name,this.phone=props.phone,this.tags=props.tags}get cfnProperties(){return{businessName:this.businessName,tags:this.cdkTagManager.renderTags(this.tags),email:this.email,logging:this.logging,name:this.name,phone:this.phone}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnProfile.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnProfilePropsToCloudFormation(props)}}exports.CfnProfile=CfnProfile,_c=JSII_RTTI_SYMBOL_1,CfnProfile[_c]={fqn:"aws-cdk-lib.aws_b2bi.CfnProfile",version:"2.149.0"},CfnProfile.CFN_RESOURCE_TYPE_NAME="AWS::B2BI::Profile";function CfnProfilePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("businessName",cdk().requiredValidator)(properties.businessName)),errors.collect(cdk().propertyValidator("businessName",cdk().validateString)(properties.businessName)),errors.collect(cdk().propertyValidator("email",cdk().validateString)(properties.email)),errors.collect(cdk().propertyValidator("logging",cdk().requiredValidator)(properties.logging)),errors.collect(cdk().propertyValidator("logging",cdk().validateString)(properties.logging)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("phone",cdk().requiredValidator)(properties.phone)),errors.collect(cdk().propertyValidator("phone",cdk().validateString)(properties.phone)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnProfileProps"')}function convertCfnProfilePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProfilePropsValidator(properties).assertSuccess(),{BusinessName:cdk().stringToCloudFormation(properties.businessName),Email:cdk().stringToCloudFormation(properties.email),Logging:cdk().stringToCloudFormation(properties.logging),Name:cdk().stringToCloudFormation(properties.name),Phone:cdk().stringToCloudFormation(properties.phone),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnProfilePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("businessName","BusinessName",properties.BusinessName!=null?cfn_parse().FromCloudFormation.getString(properties.BusinessName):void 0),ret.addPropertyResult("email","Email",properties.Email!=null?cfn_parse().FromCloudFormation.getString(properties.Email):void 0),ret.addPropertyResult("logging","Logging",properties.Logging!=null?cfn_parse().FromCloudFormation.getString(properties.Logging):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("phone","Phone",properties.Phone!=null?cfn_parse().FromCloudFormation.getString(properties.Phone):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnTransformer extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnTransformerPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnTransformer(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnTransformer.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_b2bi_CfnTransformerProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnTransformer),error}cdk().requireProperty(props,"ediType",this),cdk().requireProperty(props,"fileFormat",this),cdk().requireProperty(props,"mappingTemplate",this),cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"status",this),this.attrCreatedAt=cdk().Token.asString(this.getAtt("CreatedAt",cdk().ResolutionTypeHint.STRING)),this.attrModifiedAt=cdk().Token.asString(this.getAtt("ModifiedAt",cdk().ResolutionTypeHint.STRING)),this.attrTransformerArn=cdk().Token.asString(this.getAtt("TransformerArn",cdk().ResolutionTypeHint.STRING)),this.attrTransformerId=cdk().Token.asString(this.getAtt("TransformerId",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::B2BI::Transformer",void 0,{tagPropertyName:"tags"}),this.ediType=props.ediType,this.fileFormat=props.fileFormat,this.mappingTemplate=props.mappingTemplate,this.name=props.name,this.sampleDocument=props.sampleDocument,this.status=props.status,this.tags=props.tags}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),ediType:this.ediType,fileFormat:this.fileFormat,mappingTemplate:this.mappingTemplate,name:this.name,sampleDocument:this.sampleDocument,status:this.status}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnTransformer.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnTransformerPropsToCloudFormation(props)}}exports.CfnTransformer=CfnTransformer,_d=JSII_RTTI_SYMBOL_1,CfnTransformer[_d]={fqn:"aws-cdk-lib.aws_b2bi.CfnTransformer",version:"2.149.0"},CfnTransformer.CFN_RESOURCE_TYPE_NAME="AWS::B2BI::Transformer";function CfnTransformerX12DetailsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("transactionSet",cdk().validateString)(properties.transactionSet)),errors.collect(cdk().propertyValidator("version",cdk().validateString)(properties.version)),errors.wrap('supplied properties not correct for "X12DetailsProperty"')}function convertCfnTransformerX12DetailsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnTransformerX12DetailsPropertyValidator(properties).assertSuccess(),{TransactionSet:cdk().stringToCloudFormation(properties.transactionSet),Version:cdk().stringToCloudFormation(properties.version)}):properties}function CfnTransformerX12DetailsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("transactionSet","TransactionSet",properties.TransactionSet!=null?cfn_parse().FromCloudFormation.getString(properties.TransactionSet):void 0),ret.addPropertyResult("version","Version",properties.Version!=null?cfn_parse().FromCloudFormation.getString(properties.Version):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnTransformerEdiTypePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("x12Details",cdk().requiredValidator)(properties.x12Details)),errors.collect(cdk().propertyValidator("x12Details",CfnTransformerX12DetailsPropertyValidator)(properties.x12Details)),errors.wrap('supplied properties not correct for "EdiTypeProperty"')}function convertCfnTransformerEdiTypePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnTransformerEdiTypePropertyValidator(properties).assertSuccess(),{X12Details:convertCfnTransformerX12DetailsPropertyToCloudFormation(properties.x12Details)}):properties}function CfnTransformerEdiTypePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("x12Details","X12Details",properties.X12Details!=null?CfnTransformerX12DetailsPropertyFromCloudFormation(properties.X12Details):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnTransformerPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("ediType",cdk().requiredValidator)(properties.ediType)),errors.collect(cdk().propertyValidator("ediType",CfnTransformerEdiTypePropertyValidator)(properties.ediType)),errors.collect(cdk().propertyValidator("fileFormat",cdk().requiredValidator)(properties.fileFormat)),errors.collect(cdk().propertyValidator("fileFormat",cdk().validateString)(properties.fileFormat)),errors.collect(cdk().propertyValidator("mappingTemplate",cdk().requiredValidator)(properties.mappingTemplate)),errors.collect(cdk().propertyValidator("mappingTemplate",cdk().validateString)(properties.mappingTemplate)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("sampleDocument",cdk().validateString)(properties.sampleDocument)),errors.collect(cdk().propertyValidator("status",cdk().requiredValidator)(properties.status)),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnTransformerProps"')}function convertCfnTransformerPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnTransformerPropsValidator(properties).assertSuccess(),{EdiType:convertCfnTransformerEdiTypePropertyToCloudFormation(properties.ediType),FileFormat:cdk().stringToCloudFormation(properties.fileFormat),MappingTemplate:cdk().stringToCloudFormation(properties.mappingTemplate),Name:cdk().stringToCloudFormation(properties.name),SampleDocument:cdk().stringToCloudFormation(properties.sampleDocument),Status:cdk().stringToCloudFormation(properties.status),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnTransformerPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("ediType","EdiType",properties.EdiType!=null?CfnTransformerEdiTypePropertyFromCloudFormation(properties.EdiType):void 0),ret.addPropertyResult("fileFormat","FileFormat",properties.FileFormat!=null?cfn_parse().FromCloudFormation.getString(properties.FileFormat):void 0),ret.addPropertyResult("mappingTemplate","MappingTemplate",properties.MappingTemplate!=null?cfn_parse().FromCloudFormation.getString(properties.MappingTemplate):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("sampleDocument","SampleDocument",properties.SampleDocument!=null?cfn_parse().FromCloudFormation.getString(properties.SampleDocument):void 0),ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
