"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnPipeline=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnPipeline extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnPipelinePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnPipeline(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnPipeline.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_osis_CfnPipelineProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnPipeline),error}cdk().requireProperty(props,"maxUnits",this),cdk().requireProperty(props,"minUnits",this),cdk().requireProperty(props,"pipelineConfigurationBody",this),cdk().requireProperty(props,"pipelineName",this),this.attrIngestEndpointUrls=cdk().Token.asList(this.getAtt("IngestEndpointUrls",cdk().ResolutionTypeHint.STRING_LIST)),this.attrPipelineArn=cdk().Token.asString(this.getAtt("PipelineArn",cdk().ResolutionTypeHint.STRING)),this.attrVpcEndpoints=this.getAtt("VpcEndpoints"),this.attrVpcEndpointService=cdk().Token.asString(this.getAtt("VpcEndpointService",cdk().ResolutionTypeHint.STRING)),this.bufferOptions=props.bufferOptions,this.encryptionAtRestOptions=props.encryptionAtRestOptions,this.logPublishingOptions=props.logPublishingOptions,this.maxUnits=props.maxUnits,this.minUnits=props.minUnits,this.pipelineConfigurationBody=props.pipelineConfigurationBody,this.pipelineName=props.pipelineName,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::OSIS::Pipeline",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags,this.vpcOptions=props.vpcOptions}get cfnProperties(){return{bufferOptions:this.bufferOptions,encryptionAtRestOptions:this.encryptionAtRestOptions,logPublishingOptions:this.logPublishingOptions,maxUnits:this.maxUnits,minUnits:this.minUnits,pipelineConfigurationBody:this.pipelineConfigurationBody,pipelineName:this.pipelineName,tags:this.tags.renderTags(),vpcOptions:this.vpcOptions}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnPipeline.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnPipelinePropsToCloudFormation(props)}}exports.CfnPipeline=CfnPipeline,_a=JSII_RTTI_SYMBOL_1,CfnPipeline[_a]={fqn:"aws-cdk-lib.aws_osis.CfnPipeline",version:"2.149.0"},CfnPipeline.CFN_RESOURCE_TYPE_NAME="AWS::OSIS::Pipeline";function CfnPipelineVpcOptionsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("securityGroupIds",cdk().listValidator(cdk().validateString))(properties.securityGroupIds)),errors.collect(cdk().propertyValidator("subnetIds",cdk().requiredValidator)(properties.subnetIds)),errors.collect(cdk().propertyValidator("subnetIds",cdk().listValidator(cdk().validateString))(properties.subnetIds)),errors.collect(cdk().propertyValidator("vpcEndpointManagement",cdk().validateString)(properties.vpcEndpointManagement)),errors.wrap('supplied properties not correct for "VpcOptionsProperty"')}function convertCfnPipelineVpcOptionsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineVpcOptionsPropertyValidator(properties).assertSuccess(),{SecurityGroupIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.securityGroupIds),SubnetIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.subnetIds),VpcEndpointManagement:cdk().stringToCloudFormation(properties.vpcEndpointManagement)}):properties}function CfnPipelineVpcOptionsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("securityGroupIds","SecurityGroupIds",properties.SecurityGroupIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SecurityGroupIds):void 0),ret.addPropertyResult("subnetIds","SubnetIds",properties.SubnetIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SubnetIds):void 0),ret.addPropertyResult("vpcEndpointManagement","VpcEndpointManagement",properties.VpcEndpointManagement!=null?cfn_parse().FromCloudFormation.getString(properties.VpcEndpointManagement):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineCloudWatchLogDestinationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("logGroup",cdk().requiredValidator)(properties.logGroup)),errors.collect(cdk().propertyValidator("logGroup",cdk().validateString)(properties.logGroup)),errors.wrap('supplied properties not correct for "CloudWatchLogDestinationProperty"')}function convertCfnPipelineCloudWatchLogDestinationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineCloudWatchLogDestinationPropertyValidator(properties).assertSuccess(),{LogGroup:cdk().stringToCloudFormation(properties.logGroup)}):properties}function CfnPipelineCloudWatchLogDestinationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("logGroup","LogGroup",properties.LogGroup!=null?cfn_parse().FromCloudFormation.getString(properties.LogGroup):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineLogPublishingOptionsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("cloudWatchLogDestination",CfnPipelineCloudWatchLogDestinationPropertyValidator)(properties.cloudWatchLogDestination)),errors.collect(cdk().propertyValidator("isLoggingEnabled",cdk().validateBoolean)(properties.isLoggingEnabled)),errors.wrap('supplied properties not correct for "LogPublishingOptionsProperty"')}function convertCfnPipelineLogPublishingOptionsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineLogPublishingOptionsPropertyValidator(properties).assertSuccess(),{CloudWatchLogDestination:convertCfnPipelineCloudWatchLogDestinationPropertyToCloudFormation(properties.cloudWatchLogDestination),IsLoggingEnabled:cdk().booleanToCloudFormation(properties.isLoggingEnabled)}):properties}function CfnPipelineLogPublishingOptionsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("cloudWatchLogDestination","CloudWatchLogDestination",properties.CloudWatchLogDestination!=null?CfnPipelineCloudWatchLogDestinationPropertyFromCloudFormation(properties.CloudWatchLogDestination):void 0),ret.addPropertyResult("isLoggingEnabled","IsLoggingEnabled",properties.IsLoggingEnabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.IsLoggingEnabled):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineBufferOptionsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("persistentBufferEnabled",cdk().requiredValidator)(properties.persistentBufferEnabled)),errors.collect(cdk().propertyValidator("persistentBufferEnabled",cdk().validateBoolean)(properties.persistentBufferEnabled)),errors.wrap('supplied properties not correct for "BufferOptionsProperty"')}function convertCfnPipelineBufferOptionsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineBufferOptionsPropertyValidator(properties).assertSuccess(),{PersistentBufferEnabled:cdk().booleanToCloudFormation(properties.persistentBufferEnabled)}):properties}function CfnPipelineBufferOptionsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("persistentBufferEnabled","PersistentBufferEnabled",properties.PersistentBufferEnabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.PersistentBufferEnabled):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineEncryptionAtRestOptionsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("kmsKeyArn",cdk().requiredValidator)(properties.kmsKeyArn)),errors.collect(cdk().propertyValidator("kmsKeyArn",cdk().validateString)(properties.kmsKeyArn)),errors.wrap('supplied properties not correct for "EncryptionAtRestOptionsProperty"')}function convertCfnPipelineEncryptionAtRestOptionsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineEncryptionAtRestOptionsPropertyValidator(properties).assertSuccess(),{KmsKeyArn:cdk().stringToCloudFormation(properties.kmsKeyArn)}):properties}function CfnPipelineEncryptionAtRestOptionsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("kmsKeyArn","KmsKeyArn",properties.KmsKeyArn!=null?cfn_parse().FromCloudFormation.getString(properties.KmsKeyArn):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelineVpcEndpointPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("vpcEndpointId",cdk().validateString)(properties.vpcEndpointId)),errors.collect(cdk().propertyValidator("vpcId",cdk().validateString)(properties.vpcId)),errors.collect(cdk().propertyValidator("vpcOptions",CfnPipelineVpcOptionsPropertyValidator)(properties.vpcOptions)),errors.wrap('supplied properties not correct for "VpcEndpointProperty"')}function convertCfnPipelineVpcEndpointPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelineVpcEndpointPropertyValidator(properties).assertSuccess(),{VpcEndpointId:cdk().stringToCloudFormation(properties.vpcEndpointId),VpcId:cdk().stringToCloudFormation(properties.vpcId),VpcOptions:convertCfnPipelineVpcOptionsPropertyToCloudFormation(properties.vpcOptions)}):properties}function CfnPipelineVpcEndpointPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("vpcEndpointId","VpcEndpointId",properties.VpcEndpointId!=null?cfn_parse().FromCloudFormation.getString(properties.VpcEndpointId):void 0),ret.addPropertyResult("vpcId","VpcId",properties.VpcId!=null?cfn_parse().FromCloudFormation.getString(properties.VpcId):void 0),ret.addPropertyResult("vpcOptions","VpcOptions",properties.VpcOptions!=null?CfnPipelineVpcOptionsPropertyFromCloudFormation(properties.VpcOptions):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPipelinePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("bufferOptions",CfnPipelineBufferOptionsPropertyValidator)(properties.bufferOptions)),errors.collect(cdk().propertyValidator("encryptionAtRestOptions",CfnPipelineEncryptionAtRestOptionsPropertyValidator)(properties.encryptionAtRestOptions)),errors.collect(cdk().propertyValidator("logPublishingOptions",CfnPipelineLogPublishingOptionsPropertyValidator)(properties.logPublishingOptions)),errors.collect(cdk().propertyValidator("maxUnits",cdk().requiredValidator)(properties.maxUnits)),errors.collect(cdk().propertyValidator("maxUnits",cdk().validateNumber)(properties.maxUnits)),errors.collect(cdk().propertyValidator("minUnits",cdk().requiredValidator)(properties.minUnits)),errors.collect(cdk().propertyValidator("minUnits",cdk().validateNumber)(properties.minUnits)),errors.collect(cdk().propertyValidator("pipelineConfigurationBody",cdk().requiredValidator)(properties.pipelineConfigurationBody)),errors.collect(cdk().propertyValidator("pipelineConfigurationBody",cdk().validateString)(properties.pipelineConfigurationBody)),errors.collect(cdk().propertyValidator("pipelineName",cdk().requiredValidator)(properties.pipelineName)),errors.collect(cdk().propertyValidator("pipelineName",cdk().validateString)(properties.pipelineName)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.collect(cdk().propertyValidator("vpcOptions",CfnPipelineVpcOptionsPropertyValidator)(properties.vpcOptions)),errors.wrap('supplied properties not correct for "CfnPipelineProps"')}function convertCfnPipelinePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPipelinePropsValidator(properties).assertSuccess(),{BufferOptions:convertCfnPipelineBufferOptionsPropertyToCloudFormation(properties.bufferOptions),EncryptionAtRestOptions:convertCfnPipelineEncryptionAtRestOptionsPropertyToCloudFormation(properties.encryptionAtRestOptions),LogPublishingOptions:convertCfnPipelineLogPublishingOptionsPropertyToCloudFormation(properties.logPublishingOptions),MaxUnits:cdk().numberToCloudFormation(properties.maxUnits),MinUnits:cdk().numberToCloudFormation(properties.minUnits),PipelineConfigurationBody:cdk().stringToCloudFormation(properties.pipelineConfigurationBody),PipelineName:cdk().stringToCloudFormation(properties.pipelineName),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags),VpcOptions:convertCfnPipelineVpcOptionsPropertyToCloudFormation(properties.vpcOptions)}):properties}function CfnPipelinePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("bufferOptions","BufferOptions",properties.BufferOptions!=null?CfnPipelineBufferOptionsPropertyFromCloudFormation(properties.BufferOptions):void 0),ret.addPropertyResult("encryptionAtRestOptions","EncryptionAtRestOptions",properties.EncryptionAtRestOptions!=null?CfnPipelineEncryptionAtRestOptionsPropertyFromCloudFormation(properties.EncryptionAtRestOptions):void 0),ret.addPropertyResult("logPublishingOptions","LogPublishingOptions",properties.LogPublishingOptions!=null?CfnPipelineLogPublishingOptionsPropertyFromCloudFormation(properties.LogPublishingOptions):void 0),ret.addPropertyResult("maxUnits","MaxUnits",properties.MaxUnits!=null?cfn_parse().FromCloudFormation.getNumber(properties.MaxUnits):void 0),ret.addPropertyResult("minUnits","MinUnits",properties.MinUnits!=null?cfn_parse().FromCloudFormation.getNumber(properties.MinUnits):void 0),ret.addPropertyResult("pipelineConfigurationBody","PipelineConfigurationBody",properties.PipelineConfigurationBody!=null?cfn_parse().FromCloudFormation.getString(properties.PipelineConfigurationBody):void 0),ret.addPropertyResult("pipelineName","PipelineName",properties.PipelineName!=null?cfn_parse().FromCloudFormation.getString(properties.PipelineName):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addPropertyResult("vpcOptions","VpcOptions",properties.VpcOptions!=null?CfnPipelineVpcOptionsPropertyFromCloudFormation(properties.VpcOptions):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}