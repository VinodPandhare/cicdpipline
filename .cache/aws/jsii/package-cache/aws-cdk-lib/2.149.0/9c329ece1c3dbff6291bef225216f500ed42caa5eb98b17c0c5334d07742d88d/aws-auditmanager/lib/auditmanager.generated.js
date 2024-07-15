"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnAssessment=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnAssessment extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnAssessmentPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnAssessment(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props={}){super(scope,id,{type:CfnAssessment.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_auditmanager_CfnAssessmentProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnAssessment),error}this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrAssessmentId=cdk().Token.asString(this.getAtt("AssessmentId",cdk().ResolutionTypeHint.STRING)),this.attrCreationTime=this.getAtt("CreationTime",cdk().ResolutionTypeHint.NUMBER),this.assessmentReportsDestination=props.assessmentReportsDestination,this.awsAccount=props.awsAccount,this.delegations=props.delegations,this.description=props.description,this.frameworkId=props.frameworkId,this.name=props.name,this.roles=props.roles,this.scope=props.scope,this.status=props.status,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::AuditManager::Assessment",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{assessmentReportsDestination:this.assessmentReportsDestination,awsAccount:this.awsAccount,delegations:this.delegations,description:this.description,frameworkId:this.frameworkId,name:this.name,roles:this.roles,scope:this.scope,status:this.status,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnAssessment.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnAssessmentPropsToCloudFormation(props)}}exports.CfnAssessment=CfnAssessment,_a=JSII_RTTI_SYMBOL_1,CfnAssessment[_a]={fqn:"aws-cdk-lib.aws_auditmanager.CfnAssessment",version:"2.149.0"},CfnAssessment.CFN_RESOURCE_TYPE_NAME="AWS::AuditManager::Assessment";function CfnAssessmentAssessmentReportsDestinationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("destination",cdk().validateString)(properties.destination)),errors.collect(cdk().propertyValidator("destinationType",cdk().validateString)(properties.destinationType)),errors.wrap('supplied properties not correct for "AssessmentReportsDestinationProperty"')}function convertCfnAssessmentAssessmentReportsDestinationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAssessmentAssessmentReportsDestinationPropertyValidator(properties).assertSuccess(),{Destination:cdk().stringToCloudFormation(properties.destination),DestinationType:cdk().stringToCloudFormation(properties.destinationType)}):properties}function CfnAssessmentAssessmentReportsDestinationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("destination","Destination",properties.Destination!=null?cfn_parse().FromCloudFormation.getString(properties.Destination):void 0),ret.addPropertyResult("destinationType","DestinationType",properties.DestinationType!=null?cfn_parse().FromCloudFormation.getString(properties.DestinationType):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAssessmentDelegationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("assessmentId",cdk().validateString)(properties.assessmentId)),errors.collect(cdk().propertyValidator("assessmentName",cdk().validateString)(properties.assessmentName)),errors.collect(cdk().propertyValidator("comment",cdk().validateString)(properties.comment)),errors.collect(cdk().propertyValidator("controlSetId",cdk().validateString)(properties.controlSetId)),errors.collect(cdk().propertyValidator("createdBy",cdk().validateString)(properties.createdBy)),errors.collect(cdk().propertyValidator("creationTime",cdk().validateNumber)(properties.creationTime)),errors.collect(cdk().propertyValidator("id",cdk().validateString)(properties.id)),errors.collect(cdk().propertyValidator("lastUpdated",cdk().validateNumber)(properties.lastUpdated)),errors.collect(cdk().propertyValidator("roleArn",cdk().validateString)(properties.roleArn)),errors.collect(cdk().propertyValidator("roleType",cdk().validateString)(properties.roleType)),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.wrap('supplied properties not correct for "DelegationProperty"')}function convertCfnAssessmentDelegationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAssessmentDelegationPropertyValidator(properties).assertSuccess(),{AssessmentId:cdk().stringToCloudFormation(properties.assessmentId),AssessmentName:cdk().stringToCloudFormation(properties.assessmentName),Comment:cdk().stringToCloudFormation(properties.comment),ControlSetId:cdk().stringToCloudFormation(properties.controlSetId),CreatedBy:cdk().stringToCloudFormation(properties.createdBy),CreationTime:cdk().numberToCloudFormation(properties.creationTime),Id:cdk().stringToCloudFormation(properties.id),LastUpdated:cdk().numberToCloudFormation(properties.lastUpdated),RoleArn:cdk().stringToCloudFormation(properties.roleArn),RoleType:cdk().stringToCloudFormation(properties.roleType),Status:cdk().stringToCloudFormation(properties.status)}):properties}function CfnAssessmentDelegationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("assessmentId","AssessmentId",properties.AssessmentId!=null?cfn_parse().FromCloudFormation.getString(properties.AssessmentId):void 0),ret.addPropertyResult("assessmentName","AssessmentName",properties.AssessmentName!=null?cfn_parse().FromCloudFormation.getString(properties.AssessmentName):void 0),ret.addPropertyResult("comment","Comment",properties.Comment!=null?cfn_parse().FromCloudFormation.getString(properties.Comment):void 0),ret.addPropertyResult("controlSetId","ControlSetId",properties.ControlSetId!=null?cfn_parse().FromCloudFormation.getString(properties.ControlSetId):void 0),ret.addPropertyResult("createdBy","CreatedBy",properties.CreatedBy!=null?cfn_parse().FromCloudFormation.getString(properties.CreatedBy):void 0),ret.addPropertyResult("creationTime","CreationTime",properties.CreationTime!=null?cfn_parse().FromCloudFormation.getNumber(properties.CreationTime):void 0),ret.addPropertyResult("id","Id",properties.Id!=null?cfn_parse().FromCloudFormation.getString(properties.Id):void 0),ret.addPropertyResult("lastUpdated","LastUpdated",properties.LastUpdated!=null?cfn_parse().FromCloudFormation.getNumber(properties.LastUpdated):void 0),ret.addPropertyResult("roleArn","RoleArn",properties.RoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.RoleArn):void 0),ret.addPropertyResult("roleType","RoleType",properties.RoleType!=null?cfn_parse().FromCloudFormation.getString(properties.RoleType):void 0),ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAssessmentAWSAccountPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("emailAddress",cdk().validateString)(properties.emailAddress)),errors.collect(cdk().propertyValidator("id",cdk().validateString)(properties.id)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.wrap('supplied properties not correct for "AWSAccountProperty"')}function convertCfnAssessmentAWSAccountPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAssessmentAWSAccountPropertyValidator(properties).assertSuccess(),{EmailAddress:cdk().stringToCloudFormation(properties.emailAddress),Id:cdk().stringToCloudFormation(properties.id),Name:cdk().stringToCloudFormation(properties.name)}):properties}function CfnAssessmentAWSAccountPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("emailAddress","EmailAddress",properties.EmailAddress!=null?cfn_parse().FromCloudFormation.getString(properties.EmailAddress):void 0),ret.addPropertyResult("id","Id",properties.Id!=null?cfn_parse().FromCloudFormation.getString(properties.Id):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAssessmentAWSServicePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("serviceName",cdk().validateString)(properties.serviceName)),errors.wrap('supplied properties not correct for "AWSServiceProperty"')}function convertCfnAssessmentAWSServicePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAssessmentAWSServicePropertyValidator(properties).assertSuccess(),{ServiceName:cdk().stringToCloudFormation(properties.serviceName)}):properties}function CfnAssessmentAWSServicePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("serviceName","ServiceName",properties.ServiceName!=null?cfn_parse().FromCloudFormation.getString(properties.ServiceName):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAssessmentScopePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("awsAccounts",cdk().listValidator(CfnAssessmentAWSAccountPropertyValidator))(properties.awsAccounts)),errors.collect(cdk().propertyValidator("awsServices",cdk().listValidator(CfnAssessmentAWSServicePropertyValidator))(properties.awsServices)),errors.wrap('supplied properties not correct for "ScopeProperty"')}function convertCfnAssessmentScopePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAssessmentScopePropertyValidator(properties).assertSuccess(),{AwsAccounts:cdk().listMapper(convertCfnAssessmentAWSAccountPropertyToCloudFormation)(properties.awsAccounts),AwsServices:cdk().listMapper(convertCfnAssessmentAWSServicePropertyToCloudFormation)(properties.awsServices)}):properties}function CfnAssessmentScopePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("awsAccounts","AwsAccounts",properties.AwsAccounts!=null?cfn_parse().FromCloudFormation.getArray(CfnAssessmentAWSAccountPropertyFromCloudFormation)(properties.AwsAccounts):void 0),ret.addPropertyResult("awsServices","AwsServices",properties.AwsServices!=null?cfn_parse().FromCloudFormation.getArray(CfnAssessmentAWSServicePropertyFromCloudFormation)(properties.AwsServices):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAssessmentRolePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("roleArn",cdk().validateString)(properties.roleArn)),errors.collect(cdk().propertyValidator("roleType",cdk().validateString)(properties.roleType)),errors.wrap('supplied properties not correct for "RoleProperty"')}function convertCfnAssessmentRolePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAssessmentRolePropertyValidator(properties).assertSuccess(),{RoleArn:cdk().stringToCloudFormation(properties.roleArn),RoleType:cdk().stringToCloudFormation(properties.roleType)}):properties}function CfnAssessmentRolePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("roleArn","RoleArn",properties.RoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.RoleArn):void 0),ret.addPropertyResult("roleType","RoleType",properties.RoleType!=null?cfn_parse().FromCloudFormation.getString(properties.RoleType):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnAssessmentPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("assessmentReportsDestination",CfnAssessmentAssessmentReportsDestinationPropertyValidator)(properties.assessmentReportsDestination)),errors.collect(cdk().propertyValidator("awsAccount",CfnAssessmentAWSAccountPropertyValidator)(properties.awsAccount)),errors.collect(cdk().propertyValidator("delegations",cdk().listValidator(CfnAssessmentDelegationPropertyValidator))(properties.delegations)),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("frameworkId",cdk().validateString)(properties.frameworkId)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("roles",cdk().listValidator(CfnAssessmentRolePropertyValidator))(properties.roles)),errors.collect(cdk().propertyValidator("scope",CfnAssessmentScopePropertyValidator)(properties.scope)),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnAssessmentProps"')}function convertCfnAssessmentPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAssessmentPropsValidator(properties).assertSuccess(),{AssessmentReportsDestination:convertCfnAssessmentAssessmentReportsDestinationPropertyToCloudFormation(properties.assessmentReportsDestination),AwsAccount:convertCfnAssessmentAWSAccountPropertyToCloudFormation(properties.awsAccount),Delegations:cdk().listMapper(convertCfnAssessmentDelegationPropertyToCloudFormation)(properties.delegations),Description:cdk().stringToCloudFormation(properties.description),FrameworkId:cdk().stringToCloudFormation(properties.frameworkId),Name:cdk().stringToCloudFormation(properties.name),Roles:cdk().listMapper(convertCfnAssessmentRolePropertyToCloudFormation)(properties.roles),Scope:convertCfnAssessmentScopePropertyToCloudFormation(properties.scope),Status:cdk().stringToCloudFormation(properties.status),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnAssessmentPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("assessmentReportsDestination","AssessmentReportsDestination",properties.AssessmentReportsDestination!=null?CfnAssessmentAssessmentReportsDestinationPropertyFromCloudFormation(properties.AssessmentReportsDestination):void 0),ret.addPropertyResult("awsAccount","AwsAccount",properties.AwsAccount!=null?CfnAssessmentAWSAccountPropertyFromCloudFormation(properties.AwsAccount):void 0),ret.addPropertyResult("delegations","Delegations",properties.Delegations!=null?cfn_parse().FromCloudFormation.getArray(CfnAssessmentDelegationPropertyFromCloudFormation)(properties.Delegations):void 0),ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("frameworkId","FrameworkId",properties.FrameworkId!=null?cfn_parse().FromCloudFormation.getString(properties.FrameworkId):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("roles","Roles",properties.Roles!=null?cfn_parse().FromCloudFormation.getArray(CfnAssessmentRolePropertyFromCloudFormation)(properties.Roles):void 0),ret.addPropertyResult("scope","Scope",properties.Scope!=null?CfnAssessmentScopePropertyFromCloudFormation(properties.Scope):void 0),ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}