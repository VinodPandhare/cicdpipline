"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnAccessPointPolicy=exports.CfnAccessPoint=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnAccessPoint extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnAccessPointPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnAccessPoint(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnAccessPoint.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3objectlambda_CfnAccessPointProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnAccessPoint),error}cdk().requireProperty(props,"objectLambdaConfiguration",this),this.attrAlias=this.getAtt("Alias"),this.attrAliasStatus=cdk().Token.asString(this.getAtt("Alias.Status",cdk().ResolutionTypeHint.STRING)),this.attrAliasValue=cdk().Token.asString(this.getAtt("Alias.Value",cdk().ResolutionTypeHint.STRING)),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrCreationDate=cdk().Token.asString(this.getAtt("CreationDate",cdk().ResolutionTypeHint.STRING)),this.attrPolicyStatus=this.getAtt("PolicyStatus"),this.attrPolicyStatusIsPublic=this.getAtt("PolicyStatus.IsPublic"),this.attrPublicAccessBlockConfiguration=this.getAtt("PublicAccessBlockConfiguration"),this.attrPublicAccessBlockConfigurationBlockPublicAcls=this.getAtt("PublicAccessBlockConfiguration.BlockPublicAcls"),this.attrPublicAccessBlockConfigurationBlockPublicPolicy=this.getAtt("PublicAccessBlockConfiguration.BlockPublicPolicy"),this.attrPublicAccessBlockConfigurationIgnorePublicAcls=this.getAtt("PublicAccessBlockConfiguration.IgnorePublicAcls"),this.attrPublicAccessBlockConfigurationRestrictPublicBuckets=this.getAtt("PublicAccessBlockConfiguration.RestrictPublicBuckets"),this.name=props.name,this.objectLambdaConfiguration=props.objectLambdaConfiguration}get cfnProperties(){return{name:this.name,objectLambdaConfiguration:this.objectLambdaConfiguration}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnAccessPoint.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnAccessPointPropsToCloudFormation(props)}}exports.CfnAccessPoint=CfnAccessPoint,_a=JSII_RTTI_SYMBOL_1,CfnAccessPoint[_a]={fqn:"aws-cdk-lib.aws_s3objectlambda.CfnAccessPoint",version:"2.149.0"},CfnAccessPoint.CFN_RESOURCE_TYPE_NAME="AWS::S3ObjectLambda::AccessPoint";function CfnAccessPointTransformationConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("actions",cdk().requiredValidator)(properties.actions)),errors.collect(cdk().propertyValidator("actions",cdk().listValidator(cdk().validateString))(properties.actions)),errors.collect(cdk().propertyValidator("contentTransformation",cdk().requiredValidator)(properties.contentTransformation)),errors.collect(cdk().propertyValidator("contentTransformation",cdk().validateObject)(properties.contentTransformation)),errors.wrap('supplied properties not correct for "TransformationConfigurationProperty"')}function convertCfnAccessPointTransformationConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointTransformationConfigurationPropertyValidator(properties).assertSuccess(),{Actions:cdk().listMapper(cdk().stringToCloudFormation)(properties.actions),ContentTransformation:cdk().objectToCloudFormation(properties.contentTransformation)}):properties}function CfnAccessPointTransformationConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("actions","Actions",properties.Actions!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Actions):void 0),ret.addPropertyResult("contentTransformation","ContentTransformation",properties.ContentTransformation!=null?cfn_parse().FromCloudFormation.getAny(properties.ContentTransformation):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAccessPointObjectLambdaConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("allowedFeatures",cdk().listValidator(cdk().validateString))(properties.allowedFeatures)),errors.collect(cdk().propertyValidator("cloudWatchMetricsEnabled",cdk().validateBoolean)(properties.cloudWatchMetricsEnabled)),errors.collect(cdk().propertyValidator("supportingAccessPoint",cdk().requiredValidator)(properties.supportingAccessPoint)),errors.collect(cdk().propertyValidator("supportingAccessPoint",cdk().validateString)(properties.supportingAccessPoint)),errors.collect(cdk().propertyValidator("transformationConfigurations",cdk().requiredValidator)(properties.transformationConfigurations)),errors.collect(cdk().propertyValidator("transformationConfigurations",cdk().listValidator(CfnAccessPointTransformationConfigurationPropertyValidator))(properties.transformationConfigurations)),errors.wrap('supplied properties not correct for "ObjectLambdaConfigurationProperty"')}function convertCfnAccessPointObjectLambdaConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointObjectLambdaConfigurationPropertyValidator(properties).assertSuccess(),{AllowedFeatures:cdk().listMapper(cdk().stringToCloudFormation)(properties.allowedFeatures),CloudWatchMetricsEnabled:cdk().booleanToCloudFormation(properties.cloudWatchMetricsEnabled),SupportingAccessPoint:cdk().stringToCloudFormation(properties.supportingAccessPoint),TransformationConfigurations:cdk().listMapper(convertCfnAccessPointTransformationConfigurationPropertyToCloudFormation)(properties.transformationConfigurations)}):properties}function CfnAccessPointObjectLambdaConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("allowedFeatures","AllowedFeatures",properties.AllowedFeatures!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.AllowedFeatures):void 0),ret.addPropertyResult("cloudWatchMetricsEnabled","CloudWatchMetricsEnabled",properties.CloudWatchMetricsEnabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.CloudWatchMetricsEnabled):void 0),ret.addPropertyResult("supportingAccessPoint","SupportingAccessPoint",properties.SupportingAccessPoint!=null?cfn_parse().FromCloudFormation.getString(properties.SupportingAccessPoint):void 0),ret.addPropertyResult("transformationConfigurations","TransformationConfigurations",properties.TransformationConfigurations!=null?cfn_parse().FromCloudFormation.getArray(CfnAccessPointTransformationConfigurationPropertyFromCloudFormation)(properties.TransformationConfigurations):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAccessPointPublicAccessBlockConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("blockPublicAcls",cdk().validateBoolean)(properties.blockPublicAcls)),errors.collect(cdk().propertyValidator("blockPublicPolicy",cdk().validateBoolean)(properties.blockPublicPolicy)),errors.collect(cdk().propertyValidator("ignorePublicAcls",cdk().validateBoolean)(properties.ignorePublicAcls)),errors.collect(cdk().propertyValidator("restrictPublicBuckets",cdk().validateBoolean)(properties.restrictPublicBuckets)),errors.wrap('supplied properties not correct for "PublicAccessBlockConfigurationProperty"')}function convertCfnAccessPointPublicAccessBlockConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointPublicAccessBlockConfigurationPropertyValidator(properties).assertSuccess(),{BlockPublicAcls:cdk().booleanToCloudFormation(properties.blockPublicAcls),BlockPublicPolicy:cdk().booleanToCloudFormation(properties.blockPublicPolicy),IgnorePublicAcls:cdk().booleanToCloudFormation(properties.ignorePublicAcls),RestrictPublicBuckets:cdk().booleanToCloudFormation(properties.restrictPublicBuckets)}):properties}function CfnAccessPointPublicAccessBlockConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("blockPublicAcls","BlockPublicAcls",properties.BlockPublicAcls!=null?cfn_parse().FromCloudFormation.getBoolean(properties.BlockPublicAcls):void 0),ret.addPropertyResult("blockPublicPolicy","BlockPublicPolicy",properties.BlockPublicPolicy!=null?cfn_parse().FromCloudFormation.getBoolean(properties.BlockPublicPolicy):void 0),ret.addPropertyResult("ignorePublicAcls","IgnorePublicAcls",properties.IgnorePublicAcls!=null?cfn_parse().FromCloudFormation.getBoolean(properties.IgnorePublicAcls):void 0),ret.addPropertyResult("restrictPublicBuckets","RestrictPublicBuckets",properties.RestrictPublicBuckets!=null?cfn_parse().FromCloudFormation.getBoolean(properties.RestrictPublicBuckets):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAccessPointAliasPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.collect(cdk().propertyValidator("value",cdk().requiredValidator)(properties.value)),errors.collect(cdk().propertyValidator("value",cdk().validateString)(properties.value)),errors.wrap('supplied properties not correct for "AliasProperty"')}function convertCfnAccessPointAliasPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointAliasPropertyValidator(properties).assertSuccess(),{Status:cdk().stringToCloudFormation(properties.status),Value:cdk().stringToCloudFormation(properties.value)}):properties}function CfnAccessPointAliasPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addPropertyResult("value","Value",properties.Value!=null?cfn_parse().FromCloudFormation.getString(properties.Value):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAccessPointPolicyStatusPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("isPublic",cdk().validateBoolean)(properties.isPublic)),errors.wrap('supplied properties not correct for "PolicyStatusProperty"')}function convertCfnAccessPointPolicyStatusPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointPolicyStatusPropertyValidator(properties).assertSuccess(),{IsPublic:cdk().booleanToCloudFormation(properties.isPublic)}):properties}function CfnAccessPointPolicyStatusPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("isPublic","IsPublic",properties.IsPublic!=null?cfn_parse().FromCloudFormation.getBoolean(properties.IsPublic):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAccessPointPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("objectLambdaConfiguration",cdk().requiredValidator)(properties.objectLambdaConfiguration)),errors.collect(cdk().propertyValidator("objectLambdaConfiguration",CfnAccessPointObjectLambdaConfigurationPropertyValidator)(properties.objectLambdaConfiguration)),errors.wrap('supplied properties not correct for "CfnAccessPointProps"')}function convertCfnAccessPointPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointPropsValidator(properties).assertSuccess(),{Name:cdk().stringToCloudFormation(properties.name),ObjectLambdaConfiguration:convertCfnAccessPointObjectLambdaConfigurationPropertyToCloudFormation(properties.objectLambdaConfiguration)}):properties}function CfnAccessPointPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("objectLambdaConfiguration","ObjectLambdaConfiguration",properties.ObjectLambdaConfiguration!=null?CfnAccessPointObjectLambdaConfigurationPropertyFromCloudFormation(properties.ObjectLambdaConfiguration):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAccessPointAwsLambdaPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("functionArn",cdk().requiredValidator)(properties.functionArn)),errors.collect(cdk().propertyValidator("functionArn",cdk().validateString)(properties.functionArn)),errors.collect(cdk().propertyValidator("functionPayload",cdk().validateString)(properties.functionPayload)),errors.wrap('supplied properties not correct for "AwsLambdaProperty"')}function convertCfnAccessPointAwsLambdaPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointAwsLambdaPropertyValidator(properties).assertSuccess(),{FunctionArn:cdk().stringToCloudFormation(properties.functionArn),FunctionPayload:cdk().stringToCloudFormation(properties.functionPayload)}):properties}function CfnAccessPointAwsLambdaPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("functionArn","FunctionArn",properties.FunctionArn!=null?cfn_parse().FromCloudFormation.getString(properties.FunctionArn):void 0),ret.addPropertyResult("functionPayload","FunctionPayload",properties.FunctionPayload!=null?cfn_parse().FromCloudFormation.getString(properties.FunctionPayload):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAccessPointContentTransformationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("awsLambda",cdk().requiredValidator)(properties.awsLambda)),errors.collect(cdk().propertyValidator("awsLambda",CfnAccessPointAwsLambdaPropertyValidator)(properties.awsLambda)),errors.wrap('supplied properties not correct for "ContentTransformationProperty"')}function convertCfnAccessPointContentTransformationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointContentTransformationPropertyValidator(properties).assertSuccess(),{AwsLambda:convertCfnAccessPointAwsLambdaPropertyToCloudFormation(properties.awsLambda)}):properties}function CfnAccessPointContentTransformationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("awsLambda","AwsLambda",properties.AwsLambda!=null?CfnAccessPointAwsLambdaPropertyFromCloudFormation(properties.AwsLambda):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnAccessPointPolicy extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnAccessPointPolicyPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnAccessPointPolicy(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnAccessPointPolicy.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3objectlambda_CfnAccessPointPolicyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnAccessPointPolicy),error}cdk().requireProperty(props,"objectLambdaAccessPoint",this),cdk().requireProperty(props,"policyDocument",this),this.objectLambdaAccessPoint=props.objectLambdaAccessPoint,this.policyDocument=props.policyDocument}get cfnProperties(){return{objectLambdaAccessPoint:this.objectLambdaAccessPoint,policyDocument:this.policyDocument}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnAccessPointPolicy.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnAccessPointPolicyPropsToCloudFormation(props)}}exports.CfnAccessPointPolicy=CfnAccessPointPolicy,_b=JSII_RTTI_SYMBOL_1,CfnAccessPointPolicy[_b]={fqn:"aws-cdk-lib.aws_s3objectlambda.CfnAccessPointPolicy",version:"2.149.0"},CfnAccessPointPolicy.CFN_RESOURCE_TYPE_NAME="AWS::S3ObjectLambda::AccessPointPolicy";function CfnAccessPointPolicyPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("objectLambdaAccessPoint",cdk().requiredValidator)(properties.objectLambdaAccessPoint)),errors.collect(cdk().propertyValidator("objectLambdaAccessPoint",cdk().validateString)(properties.objectLambdaAccessPoint)),errors.collect(cdk().propertyValidator("policyDocument",cdk().requiredValidator)(properties.policyDocument)),errors.collect(cdk().propertyValidator("policyDocument",cdk().validateObject)(properties.policyDocument)),errors.wrap('supplied properties not correct for "CfnAccessPointPolicyProps"')}function convertCfnAccessPointPolicyPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessPointPolicyPropsValidator(properties).assertSuccess(),{ObjectLambdaAccessPoint:cdk().stringToCloudFormation(properties.objectLambdaAccessPoint),PolicyDocument:cdk().objectToCloudFormation(properties.policyDocument)}):properties}function CfnAccessPointPolicyPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("objectLambdaAccessPoint","ObjectLambdaAccessPoint",properties.ObjectLambdaAccessPoint!=null?cfn_parse().FromCloudFormation.getString(properties.ObjectLambdaAccessPoint):void 0),ret.addPropertyResult("policyDocument","PolicyDocument",properties.PolicyDocument!=null?cfn_parse().FromCloudFormation.getAny(properties.PolicyDocument):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}