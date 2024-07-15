"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnGroupMembership=exports.CfnGroup=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnGroup extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnGroupPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnGroup(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnGroup.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_identitystore_CfnGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnGroup),error}cdk().requireProperty(props,"displayName",this),cdk().requireProperty(props,"identityStoreId",this),this.attrGroupId=cdk().Token.asString(this.getAtt("GroupId",cdk().ResolutionTypeHint.STRING)),this.description=props.description,this.displayName=props.displayName,this.identityStoreId=props.identityStoreId}get cfnProperties(){return{description:this.description,displayName:this.displayName,identityStoreId:this.identityStoreId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnGroup.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnGroupPropsToCloudFormation(props)}}exports.CfnGroup=CfnGroup,_a=JSII_RTTI_SYMBOL_1,CfnGroup[_a]={fqn:"aws-cdk-lib.aws_identitystore.CfnGroup",version:"2.149.0"},CfnGroup.CFN_RESOURCE_TYPE_NAME="AWS::IdentityStore::Group";function CfnGroupPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("displayName",cdk().requiredValidator)(properties.displayName)),errors.collect(cdk().propertyValidator("displayName",cdk().validateString)(properties.displayName)),errors.collect(cdk().propertyValidator("identityStoreId",cdk().requiredValidator)(properties.identityStoreId)),errors.collect(cdk().propertyValidator("identityStoreId",cdk().validateString)(properties.identityStoreId)),errors.wrap('supplied properties not correct for "CfnGroupProps"')}function convertCfnGroupPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupPropsValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),DisplayName:cdk().stringToCloudFormation(properties.displayName),IdentityStoreId:cdk().stringToCloudFormation(properties.identityStoreId)}):properties}function CfnGroupPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("displayName","DisplayName",properties.DisplayName!=null?cfn_parse().FromCloudFormation.getString(properties.DisplayName):void 0),ret.addPropertyResult("identityStoreId","IdentityStoreId",properties.IdentityStoreId!=null?cfn_parse().FromCloudFormation.getString(properties.IdentityStoreId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnGroupMembership extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnGroupMembershipPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnGroupMembership(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnGroupMembership.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_identitystore_CfnGroupMembershipProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnGroupMembership),error}cdk().requireProperty(props,"groupId",this),cdk().requireProperty(props,"identityStoreId",this),cdk().requireProperty(props,"memberId",this),this.attrMembershipId=cdk().Token.asString(this.getAtt("MembershipId",cdk().ResolutionTypeHint.STRING)),this.groupId=props.groupId,this.identityStoreId=props.identityStoreId,this.memberId=props.memberId}get cfnProperties(){return{groupId:this.groupId,identityStoreId:this.identityStoreId,memberId:this.memberId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnGroupMembership.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnGroupMembershipPropsToCloudFormation(props)}}exports.CfnGroupMembership=CfnGroupMembership,_b=JSII_RTTI_SYMBOL_1,CfnGroupMembership[_b]={fqn:"aws-cdk-lib.aws_identitystore.CfnGroupMembership",version:"2.149.0"},CfnGroupMembership.CFN_RESOURCE_TYPE_NAME="AWS::IdentityStore::GroupMembership";function CfnGroupMembershipMemberIdPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("userId",cdk().requiredValidator)(properties.userId)),errors.collect(cdk().propertyValidator("userId",cdk().validateString)(properties.userId)),errors.wrap('supplied properties not correct for "MemberIdProperty"')}function convertCfnGroupMembershipMemberIdPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupMembershipMemberIdPropertyValidator(properties).assertSuccess(),{UserId:cdk().stringToCloudFormation(properties.userId)}):properties}function CfnGroupMembershipMemberIdPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("userId","UserId",properties.UserId!=null?cfn_parse().FromCloudFormation.getString(properties.UserId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnGroupMembershipPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("groupId",cdk().requiredValidator)(properties.groupId)),errors.collect(cdk().propertyValidator("groupId",cdk().validateString)(properties.groupId)),errors.collect(cdk().propertyValidator("identityStoreId",cdk().requiredValidator)(properties.identityStoreId)),errors.collect(cdk().propertyValidator("identityStoreId",cdk().validateString)(properties.identityStoreId)),errors.collect(cdk().propertyValidator("memberId",cdk().requiredValidator)(properties.memberId)),errors.collect(cdk().propertyValidator("memberId",CfnGroupMembershipMemberIdPropertyValidator)(properties.memberId)),errors.wrap('supplied properties not correct for "CfnGroupMembershipProps"')}function convertCfnGroupMembershipPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGroupMembershipPropsValidator(properties).assertSuccess(),{GroupId:cdk().stringToCloudFormation(properties.groupId),IdentityStoreId:cdk().stringToCloudFormation(properties.identityStoreId),MemberId:convertCfnGroupMembershipMemberIdPropertyToCloudFormation(properties.memberId)}):properties}function CfnGroupMembershipPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("groupId","GroupId",properties.GroupId!=null?cfn_parse().FromCloudFormation.getString(properties.GroupId):void 0),ret.addPropertyResult("identityStoreId","IdentityStoreId",properties.IdentityStoreId!=null?cfn_parse().FromCloudFormation.getString(properties.IdentityStoreId):void 0),ret.addPropertyResult("memberId","MemberId",properties.MemberId!=null?CfnGroupMembershipMemberIdPropertyFromCloudFormation(properties.MemberId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
