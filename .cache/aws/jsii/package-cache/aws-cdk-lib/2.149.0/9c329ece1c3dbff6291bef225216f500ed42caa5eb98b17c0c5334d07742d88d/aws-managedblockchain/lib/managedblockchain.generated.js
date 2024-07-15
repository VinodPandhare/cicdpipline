"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnNode=exports.CfnMember=exports.CfnAccessor=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnAccessor extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnAccessorPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnAccessor(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnAccessor.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_managedblockchain_CfnAccessorProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnAccessor),error}cdk().requireProperty(props,"accessorType",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrBillingToken=cdk().Token.asString(this.getAtt("BillingToken",cdk().ResolutionTypeHint.STRING)),this.attrCreationDate=cdk().Token.asString(this.getAtt("CreationDate",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.attrStatus=cdk().Token.asString(this.getAtt("Status",cdk().ResolutionTypeHint.STRING)),this.accessorType=props.accessorType,this.networkType=props.networkType,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::ManagedBlockchain::Accessor",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{accessorType:this.accessorType,networkType:this.networkType,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnAccessor.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnAccessorPropsToCloudFormation(props)}}exports.CfnAccessor=CfnAccessor,_a=JSII_RTTI_SYMBOL_1,CfnAccessor[_a]={fqn:"aws-cdk-lib.aws_managedblockchain.CfnAccessor",version:"2.149.0"},CfnAccessor.CFN_RESOURCE_TYPE_NAME="AWS::ManagedBlockchain::Accessor";function CfnAccessorPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("accessorType",cdk().requiredValidator)(properties.accessorType)),errors.collect(cdk().propertyValidator("accessorType",cdk().validateString)(properties.accessorType)),errors.collect(cdk().propertyValidator("networkType",cdk().validateString)(properties.networkType)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnAccessorProps"')}function convertCfnAccessorPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAccessorPropsValidator(properties).assertSuccess(),{AccessorType:cdk().stringToCloudFormation(properties.accessorType),NetworkType:cdk().stringToCloudFormation(properties.networkType),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnAccessorPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("accessorType","AccessorType",properties.AccessorType!=null?cfn_parse().FromCloudFormation.getString(properties.AccessorType):void 0),ret.addPropertyResult("networkType","NetworkType",properties.NetworkType!=null?cfn_parse().FromCloudFormation.getString(properties.NetworkType):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnMember extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnMemberPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnMember(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnMember.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_managedblockchain_CfnMemberProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnMember),error}cdk().requireProperty(props,"memberConfiguration",this),this.attrMemberId=cdk().Token.asString(this.getAtt("MemberId",cdk().ResolutionTypeHint.STRING)),this.attrNetworkId=cdk().Token.asString(this.getAtt("NetworkId",cdk().ResolutionTypeHint.STRING)),this.invitationId=props.invitationId,this.memberConfiguration=props.memberConfiguration,this.networkConfiguration=props.networkConfiguration,this.networkId=props.networkId}get cfnProperties(){return{invitationId:this.invitationId,memberConfiguration:this.memberConfiguration,networkConfiguration:this.networkConfiguration,networkId:this.networkId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnMember.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnMemberPropsToCloudFormation(props)}}exports.CfnMember=CfnMember,_b=JSII_RTTI_SYMBOL_1,CfnMember[_b]={fqn:"aws-cdk-lib.aws_managedblockchain.CfnMember",version:"2.149.0"},CfnMember.CFN_RESOURCE_TYPE_NAME="AWS::ManagedBlockchain::Member";function CfnMemberMemberFabricConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("adminPassword",cdk().requiredValidator)(properties.adminPassword)),errors.collect(cdk().propertyValidator("adminPassword",cdk().validateString)(properties.adminPassword)),errors.collect(cdk().propertyValidator("adminUsername",cdk().requiredValidator)(properties.adminUsername)),errors.collect(cdk().propertyValidator("adminUsername",cdk().validateString)(properties.adminUsername)),errors.wrap('supplied properties not correct for "MemberFabricConfigurationProperty"')}function convertCfnMemberMemberFabricConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberMemberFabricConfigurationPropertyValidator(properties).assertSuccess(),{AdminPassword:cdk().stringToCloudFormation(properties.adminPassword),AdminUsername:cdk().stringToCloudFormation(properties.adminUsername)}):properties}function CfnMemberMemberFabricConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("adminPassword","AdminPassword",properties.AdminPassword!=null?cfn_parse().FromCloudFormation.getString(properties.AdminPassword):void 0),ret.addPropertyResult("adminUsername","AdminUsername",properties.AdminUsername!=null?cfn_parse().FromCloudFormation.getString(properties.AdminUsername):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberMemberFrameworkConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("memberFabricConfiguration",CfnMemberMemberFabricConfigurationPropertyValidator)(properties.memberFabricConfiguration)),errors.wrap('supplied properties not correct for "MemberFrameworkConfigurationProperty"')}function convertCfnMemberMemberFrameworkConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberMemberFrameworkConfigurationPropertyValidator(properties).assertSuccess(),{MemberFabricConfiguration:convertCfnMemberMemberFabricConfigurationPropertyToCloudFormation(properties.memberFabricConfiguration)}):properties}function CfnMemberMemberFrameworkConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("memberFabricConfiguration","MemberFabricConfiguration",properties.MemberFabricConfiguration!=null?CfnMemberMemberFabricConfigurationPropertyFromCloudFormation(properties.MemberFabricConfiguration):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberMemberConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("memberFrameworkConfiguration",CfnMemberMemberFrameworkConfigurationPropertyValidator)(properties.memberFrameworkConfiguration)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.wrap('supplied properties not correct for "MemberConfigurationProperty"')}function convertCfnMemberMemberConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberMemberConfigurationPropertyValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),MemberFrameworkConfiguration:convertCfnMemberMemberFrameworkConfigurationPropertyToCloudFormation(properties.memberFrameworkConfiguration),Name:cdk().stringToCloudFormation(properties.name)}):properties}function CfnMemberMemberConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("memberFrameworkConfiguration","MemberFrameworkConfiguration",properties.MemberFrameworkConfiguration!=null?CfnMemberMemberFrameworkConfigurationPropertyFromCloudFormation(properties.MemberFrameworkConfiguration):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberApprovalThresholdPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("proposalDurationInHours",cdk().validateNumber)(properties.proposalDurationInHours)),errors.collect(cdk().propertyValidator("thresholdComparator",cdk().validateString)(properties.thresholdComparator)),errors.collect(cdk().propertyValidator("thresholdPercentage",cdk().validateNumber)(properties.thresholdPercentage)),errors.wrap('supplied properties not correct for "ApprovalThresholdPolicyProperty"')}function convertCfnMemberApprovalThresholdPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberApprovalThresholdPolicyPropertyValidator(properties).assertSuccess(),{ProposalDurationInHours:cdk().numberToCloudFormation(properties.proposalDurationInHours),ThresholdComparator:cdk().stringToCloudFormation(properties.thresholdComparator),ThresholdPercentage:cdk().numberToCloudFormation(properties.thresholdPercentage)}):properties}function CfnMemberApprovalThresholdPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("proposalDurationInHours","ProposalDurationInHours",properties.ProposalDurationInHours!=null?cfn_parse().FromCloudFormation.getNumber(properties.ProposalDurationInHours):void 0),ret.addPropertyResult("thresholdComparator","ThresholdComparator",properties.ThresholdComparator!=null?cfn_parse().FromCloudFormation.getString(properties.ThresholdComparator):void 0),ret.addPropertyResult("thresholdPercentage","ThresholdPercentage",properties.ThresholdPercentage!=null?cfn_parse().FromCloudFormation.getNumber(properties.ThresholdPercentage):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberVotingPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("approvalThresholdPolicy",CfnMemberApprovalThresholdPolicyPropertyValidator)(properties.approvalThresholdPolicy)),errors.wrap('supplied properties not correct for "VotingPolicyProperty"')}function convertCfnMemberVotingPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberVotingPolicyPropertyValidator(properties).assertSuccess(),{ApprovalThresholdPolicy:convertCfnMemberApprovalThresholdPolicyPropertyToCloudFormation(properties.approvalThresholdPolicy)}):properties}function CfnMemberVotingPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("approvalThresholdPolicy","ApprovalThresholdPolicy",properties.ApprovalThresholdPolicy!=null?CfnMemberApprovalThresholdPolicyPropertyFromCloudFormation(properties.ApprovalThresholdPolicy):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberNetworkFabricConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("edition",cdk().requiredValidator)(properties.edition)),errors.collect(cdk().propertyValidator("edition",cdk().validateString)(properties.edition)),errors.wrap('supplied properties not correct for "NetworkFabricConfigurationProperty"')}function convertCfnMemberNetworkFabricConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberNetworkFabricConfigurationPropertyValidator(properties).assertSuccess(),{Edition:cdk().stringToCloudFormation(properties.edition)}):properties}function CfnMemberNetworkFabricConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("edition","Edition",properties.Edition!=null?cfn_parse().FromCloudFormation.getString(properties.Edition):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberNetworkFrameworkConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("networkFabricConfiguration",CfnMemberNetworkFabricConfigurationPropertyValidator)(properties.networkFabricConfiguration)),errors.wrap('supplied properties not correct for "NetworkFrameworkConfigurationProperty"')}function convertCfnMemberNetworkFrameworkConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberNetworkFrameworkConfigurationPropertyValidator(properties).assertSuccess(),{NetworkFabricConfiguration:convertCfnMemberNetworkFabricConfigurationPropertyToCloudFormation(properties.networkFabricConfiguration)}):properties}function CfnMemberNetworkFrameworkConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("networkFabricConfiguration","NetworkFabricConfiguration",properties.NetworkFabricConfiguration!=null?CfnMemberNetworkFabricConfigurationPropertyFromCloudFormation(properties.NetworkFabricConfiguration):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberNetworkConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("framework",cdk().requiredValidator)(properties.framework)),errors.collect(cdk().propertyValidator("framework",cdk().validateString)(properties.framework)),errors.collect(cdk().propertyValidator("frameworkVersion",cdk().requiredValidator)(properties.frameworkVersion)),errors.collect(cdk().propertyValidator("frameworkVersion",cdk().validateString)(properties.frameworkVersion)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("networkFrameworkConfiguration",CfnMemberNetworkFrameworkConfigurationPropertyValidator)(properties.networkFrameworkConfiguration)),errors.collect(cdk().propertyValidator("votingPolicy",cdk().requiredValidator)(properties.votingPolicy)),errors.collect(cdk().propertyValidator("votingPolicy",CfnMemberVotingPolicyPropertyValidator)(properties.votingPolicy)),errors.wrap('supplied properties not correct for "NetworkConfigurationProperty"')}function convertCfnMemberNetworkConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberNetworkConfigurationPropertyValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),Framework:cdk().stringToCloudFormation(properties.framework),FrameworkVersion:cdk().stringToCloudFormation(properties.frameworkVersion),Name:cdk().stringToCloudFormation(properties.name),NetworkFrameworkConfiguration:convertCfnMemberNetworkFrameworkConfigurationPropertyToCloudFormation(properties.networkFrameworkConfiguration),VotingPolicy:convertCfnMemberVotingPolicyPropertyToCloudFormation(properties.votingPolicy)}):properties}function CfnMemberNetworkConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("framework","Framework",properties.Framework!=null?cfn_parse().FromCloudFormation.getString(properties.Framework):void 0),ret.addPropertyResult("frameworkVersion","FrameworkVersion",properties.FrameworkVersion!=null?cfn_parse().FromCloudFormation.getString(properties.FrameworkVersion):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("networkFrameworkConfiguration","NetworkFrameworkConfiguration",properties.NetworkFrameworkConfiguration!=null?CfnMemberNetworkFrameworkConfigurationPropertyFromCloudFormation(properties.NetworkFrameworkConfiguration):void 0),ret.addPropertyResult("votingPolicy","VotingPolicy",properties.VotingPolicy!=null?CfnMemberVotingPolicyPropertyFromCloudFormation(properties.VotingPolicy):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMemberPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("invitationId",cdk().validateString)(properties.invitationId)),errors.collect(cdk().propertyValidator("memberConfiguration",cdk().requiredValidator)(properties.memberConfiguration)),errors.collect(cdk().propertyValidator("memberConfiguration",CfnMemberMemberConfigurationPropertyValidator)(properties.memberConfiguration)),errors.collect(cdk().propertyValidator("networkConfiguration",CfnMemberNetworkConfigurationPropertyValidator)(properties.networkConfiguration)),errors.collect(cdk().propertyValidator("networkId",cdk().validateString)(properties.networkId)),errors.wrap('supplied properties not correct for "CfnMemberProps"')}function convertCfnMemberPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMemberPropsValidator(properties).assertSuccess(),{InvitationId:cdk().stringToCloudFormation(properties.invitationId),MemberConfiguration:convertCfnMemberMemberConfigurationPropertyToCloudFormation(properties.memberConfiguration),NetworkConfiguration:convertCfnMemberNetworkConfigurationPropertyToCloudFormation(properties.networkConfiguration),NetworkId:cdk().stringToCloudFormation(properties.networkId)}):properties}function CfnMemberPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("invitationId","InvitationId",properties.InvitationId!=null?cfn_parse().FromCloudFormation.getString(properties.InvitationId):void 0),ret.addPropertyResult("memberConfiguration","MemberConfiguration",properties.MemberConfiguration!=null?CfnMemberMemberConfigurationPropertyFromCloudFormation(properties.MemberConfiguration):void 0),ret.addPropertyResult("networkConfiguration","NetworkConfiguration",properties.NetworkConfiguration!=null?CfnMemberNetworkConfigurationPropertyFromCloudFormation(properties.NetworkConfiguration):void 0),ret.addPropertyResult("networkId","NetworkId",properties.NetworkId!=null?cfn_parse().FromCloudFormation.getString(properties.NetworkId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnNode extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnNodePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnNode(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnNode.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_managedblockchain_CfnNodeProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnNode),error}cdk().requireProperty(props,"networkId",this),cdk().requireProperty(props,"nodeConfiguration",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrMemberId=cdk().Token.asString(this.getAtt("MemberId",cdk().ResolutionTypeHint.STRING)),this.attrNetworkId=cdk().Token.asString(this.getAtt("NetworkId",cdk().ResolutionTypeHint.STRING)),this.attrNodeId=cdk().Token.asString(this.getAtt("NodeId",cdk().ResolutionTypeHint.STRING)),this.memberId=props.memberId,this.networkId=props.networkId,this.nodeConfiguration=props.nodeConfiguration}get cfnProperties(){return{memberId:this.memberId,networkId:this.networkId,nodeConfiguration:this.nodeConfiguration}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnNode.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnNodePropsToCloudFormation(props)}}exports.CfnNode=CfnNode,_c=JSII_RTTI_SYMBOL_1,CfnNode[_c]={fqn:"aws-cdk-lib.aws_managedblockchain.CfnNode",version:"2.149.0"},CfnNode.CFN_RESOURCE_TYPE_NAME="AWS::ManagedBlockchain::Node";function CfnNodeNodeConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("availabilityZone",cdk().requiredValidator)(properties.availabilityZone)),errors.collect(cdk().propertyValidator("availabilityZone",cdk().validateString)(properties.availabilityZone)),errors.collect(cdk().propertyValidator("instanceType",cdk().requiredValidator)(properties.instanceType)),errors.collect(cdk().propertyValidator("instanceType",cdk().validateString)(properties.instanceType)),errors.wrap('supplied properties not correct for "NodeConfigurationProperty"')}function convertCfnNodeNodeConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNodeNodeConfigurationPropertyValidator(properties).assertSuccess(),{AvailabilityZone:cdk().stringToCloudFormation(properties.availabilityZone),InstanceType:cdk().stringToCloudFormation(properties.instanceType)}):properties}function CfnNodeNodeConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("availabilityZone","AvailabilityZone",properties.AvailabilityZone!=null?cfn_parse().FromCloudFormation.getString(properties.AvailabilityZone):void 0),ret.addPropertyResult("instanceType","InstanceType",properties.InstanceType!=null?cfn_parse().FromCloudFormation.getString(properties.InstanceType):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnNodePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("memberId",cdk().validateString)(properties.memberId)),errors.collect(cdk().propertyValidator("networkId",cdk().requiredValidator)(properties.networkId)),errors.collect(cdk().propertyValidator("networkId",cdk().validateString)(properties.networkId)),errors.collect(cdk().propertyValidator("nodeConfiguration",cdk().requiredValidator)(properties.nodeConfiguration)),errors.collect(cdk().propertyValidator("nodeConfiguration",CfnNodeNodeConfigurationPropertyValidator)(properties.nodeConfiguration)),errors.wrap('supplied properties not correct for "CfnNodeProps"')}function convertCfnNodePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNodePropsValidator(properties).assertSuccess(),{MemberId:cdk().stringToCloudFormation(properties.memberId),NetworkId:cdk().stringToCloudFormation(properties.networkId),NodeConfiguration:convertCfnNodeNodeConfigurationPropertyToCloudFormation(properties.nodeConfiguration)}):properties}function CfnNodePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("memberId","MemberId",properties.MemberId!=null?cfn_parse().FromCloudFormation.getString(properties.MemberId):void 0),ret.addPropertyResult("networkId","NetworkId",properties.NetworkId!=null?cfn_parse().FromCloudFormation.getString(properties.NetworkId):void 0),ret.addPropertyResult("nodeConfiguration","NodeConfiguration",properties.NodeConfiguration!=null?CfnNodeNodeConfigurationPropertyFromCloudFormation(properties.NodeConfiguration):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}