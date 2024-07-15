"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnStream=exports.CfnLedger=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnLedger extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnLedgerPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnLedger(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnLedger.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_qldb_CfnLedgerProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnLedger),error}cdk().requireProperty(props,"permissionsMode",this),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.deletionProtection=props.deletionProtection,this.kmsKey=props.kmsKey,this.name=props.name,this.permissionsMode=props.permissionsMode,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::QLDB::Ledger",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags,this.node.scope!=null&&cdk().Resource.isResource(this.node.scope)&&this.node.addValidation({validate:()=>this.cfnOptions.deletionPolicy===void 0?["'AWS::QLDB::Ledger' is a stateful resource type, and you must specify a Removal Policy for it. Call 'resource.applyRemovalPolicy()'."]:[]})}get cfnProperties(){return{deletionProtection:this.deletionProtection,kmsKey:this.kmsKey,name:this.name,permissionsMode:this.permissionsMode,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnLedger.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnLedgerPropsToCloudFormation(props)}}exports.CfnLedger=CfnLedger,_a=JSII_RTTI_SYMBOL_1,CfnLedger[_a]={fqn:"aws-cdk-lib.aws_qldb.CfnLedger",version:"2.149.0"},CfnLedger.CFN_RESOURCE_TYPE_NAME="AWS::QLDB::Ledger";function CfnLedgerPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("deletionProtection",cdk().validateBoolean)(properties.deletionProtection)),errors.collect(cdk().propertyValidator("kmsKey",cdk().validateString)(properties.kmsKey)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("permissionsMode",cdk().requiredValidator)(properties.permissionsMode)),errors.collect(cdk().propertyValidator("permissionsMode",cdk().validateString)(properties.permissionsMode)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnLedgerProps"')}function convertCfnLedgerPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLedgerPropsValidator(properties).assertSuccess(),{DeletionProtection:cdk().booleanToCloudFormation(properties.deletionProtection),KmsKey:cdk().stringToCloudFormation(properties.kmsKey),Name:cdk().stringToCloudFormation(properties.name),PermissionsMode:cdk().stringToCloudFormation(properties.permissionsMode),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnLedgerPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("deletionProtection","DeletionProtection",properties.DeletionProtection!=null?cfn_parse().FromCloudFormation.getBoolean(properties.DeletionProtection):void 0),ret.addPropertyResult("kmsKey","KmsKey",properties.KmsKey!=null?cfn_parse().FromCloudFormation.getString(properties.KmsKey):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("permissionsMode","PermissionsMode",properties.PermissionsMode!=null?cfn_parse().FromCloudFormation.getString(properties.PermissionsMode):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnStream extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnStreamPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnStream(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnStream.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_qldb_CfnStreamProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnStream),error}cdk().requireProperty(props,"inclusiveStartTime",this),cdk().requireProperty(props,"kinesisConfiguration",this),cdk().requireProperty(props,"ledgerName",this),cdk().requireProperty(props,"roleArn",this),cdk().requireProperty(props,"streamName",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.exclusiveEndTime=props.exclusiveEndTime,this.inclusiveStartTime=props.inclusiveStartTime,this.kinesisConfiguration=props.kinesisConfiguration,this.ledgerName=props.ledgerName,this.roleArn=props.roleArn,this.streamName=props.streamName,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::QLDB::Stream",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{exclusiveEndTime:this.exclusiveEndTime,inclusiveStartTime:this.inclusiveStartTime,kinesisConfiguration:this.kinesisConfiguration,ledgerName:this.ledgerName,roleArn:this.roleArn,streamName:this.streamName,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnStream.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnStreamPropsToCloudFormation(props)}}exports.CfnStream=CfnStream,_b=JSII_RTTI_SYMBOL_1,CfnStream[_b]={fqn:"aws-cdk-lib.aws_qldb.CfnStream",version:"2.149.0"},CfnStream.CFN_RESOURCE_TYPE_NAME="AWS::QLDB::Stream";function CfnStreamKinesisConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("aggregationEnabled",cdk().validateBoolean)(properties.aggregationEnabled)),errors.collect(cdk().propertyValidator("streamArn",cdk().validateString)(properties.streamArn)),errors.wrap('supplied properties not correct for "KinesisConfigurationProperty"')}function convertCfnStreamKinesisConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnStreamKinesisConfigurationPropertyValidator(properties).assertSuccess(),{AggregationEnabled:cdk().booleanToCloudFormation(properties.aggregationEnabled),StreamArn:cdk().stringToCloudFormation(properties.streamArn)}):properties}function CfnStreamKinesisConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("aggregationEnabled","AggregationEnabled",properties.AggregationEnabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.AggregationEnabled):void 0),ret.addPropertyResult("streamArn","StreamArn",properties.StreamArn!=null?cfn_parse().FromCloudFormation.getString(properties.StreamArn):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnStreamPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("exclusiveEndTime",cdk().validateString)(properties.exclusiveEndTime)),errors.collect(cdk().propertyValidator("inclusiveStartTime",cdk().requiredValidator)(properties.inclusiveStartTime)),errors.collect(cdk().propertyValidator("inclusiveStartTime",cdk().validateString)(properties.inclusiveStartTime)),errors.collect(cdk().propertyValidator("kinesisConfiguration",cdk().requiredValidator)(properties.kinesisConfiguration)),errors.collect(cdk().propertyValidator("kinesisConfiguration",CfnStreamKinesisConfigurationPropertyValidator)(properties.kinesisConfiguration)),errors.collect(cdk().propertyValidator("ledgerName",cdk().requiredValidator)(properties.ledgerName)),errors.collect(cdk().propertyValidator("ledgerName",cdk().validateString)(properties.ledgerName)),errors.collect(cdk().propertyValidator("roleArn",cdk().requiredValidator)(properties.roleArn)),errors.collect(cdk().propertyValidator("roleArn",cdk().validateString)(properties.roleArn)),errors.collect(cdk().propertyValidator("streamName",cdk().requiredValidator)(properties.streamName)),errors.collect(cdk().propertyValidator("streamName",cdk().validateString)(properties.streamName)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnStreamProps"')}function convertCfnStreamPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnStreamPropsValidator(properties).assertSuccess(),{ExclusiveEndTime:cdk().stringToCloudFormation(properties.exclusiveEndTime),InclusiveStartTime:cdk().stringToCloudFormation(properties.inclusiveStartTime),KinesisConfiguration:convertCfnStreamKinesisConfigurationPropertyToCloudFormation(properties.kinesisConfiguration),LedgerName:cdk().stringToCloudFormation(properties.ledgerName),RoleArn:cdk().stringToCloudFormation(properties.roleArn),StreamName:cdk().stringToCloudFormation(properties.streamName),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnStreamPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("exclusiveEndTime","ExclusiveEndTime",properties.ExclusiveEndTime!=null?cfn_parse().FromCloudFormation.getString(properties.ExclusiveEndTime):void 0),ret.addPropertyResult("inclusiveStartTime","InclusiveStartTime",properties.InclusiveStartTime!=null?cfn_parse().FromCloudFormation.getString(properties.InclusiveStartTime):void 0),ret.addPropertyResult("kinesisConfiguration","KinesisConfiguration",properties.KinesisConfiguration!=null?CfnStreamKinesisConfigurationPropertyFromCloudFormation(properties.KinesisConfiguration):void 0),ret.addPropertyResult("ledgerName","LedgerName",properties.LedgerName!=null?cfn_parse().FromCloudFormation.getString(properties.LedgerName):void 0),ret.addPropertyResult("roleArn","RoleArn",properties.RoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.RoleArn):void 0),ret.addPropertyResult("streamName","StreamName",properties.StreamName!=null?cfn_parse().FromCloudFormation.getString(properties.StreamName):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}