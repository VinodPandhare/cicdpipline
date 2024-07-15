"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnResourceSet=exports.CfnPolicy=exports.CfnNotificationChannel=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnNotificationChannel extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnNotificationChannelPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnNotificationChannel(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnNotificationChannel.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_fms_CfnNotificationChannelProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnNotificationChannel),error}cdk().requireProperty(props,"snsRoleName",this),cdk().requireProperty(props,"snsTopicArn",this),this.snsRoleName=props.snsRoleName,this.snsTopicArn=props.snsTopicArn}get cfnProperties(){return{snsRoleName:this.snsRoleName,snsTopicArn:this.snsTopicArn}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnNotificationChannel.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnNotificationChannelPropsToCloudFormation(props)}}exports.CfnNotificationChannel=CfnNotificationChannel,_a=JSII_RTTI_SYMBOL_1,CfnNotificationChannel[_a]={fqn:"aws-cdk-lib.aws_fms.CfnNotificationChannel",version:"2.149.0"},CfnNotificationChannel.CFN_RESOURCE_TYPE_NAME="AWS::FMS::NotificationChannel";function CfnNotificationChannelPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("snsRoleName",cdk().requiredValidator)(properties.snsRoleName)),errors.collect(cdk().propertyValidator("snsRoleName",cdk().validateString)(properties.snsRoleName)),errors.collect(cdk().propertyValidator("snsTopicArn",cdk().requiredValidator)(properties.snsTopicArn)),errors.collect(cdk().propertyValidator("snsTopicArn",cdk().validateString)(properties.snsTopicArn)),errors.wrap('supplied properties not correct for "CfnNotificationChannelProps"')}function convertCfnNotificationChannelPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNotificationChannelPropsValidator(properties).assertSuccess(),{SnsRoleName:cdk().stringToCloudFormation(properties.snsRoleName),SnsTopicArn:cdk().stringToCloudFormation(properties.snsTopicArn)}):properties}function CfnNotificationChannelPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("snsRoleName","SnsRoleName",properties.SnsRoleName!=null?cfn_parse().FromCloudFormation.getString(properties.SnsRoleName):void 0),ret.addPropertyResult("snsTopicArn","SnsTopicArn",properties.SnsTopicArn!=null?cfn_parse().FromCloudFormation.getString(properties.SnsTopicArn):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnPolicy extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnPolicyPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnPolicy(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnPolicy.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_fms_CfnPolicyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnPolicy),error}cdk().requireProperty(props,"excludeResourceTags",this),cdk().requireProperty(props,"policyName",this),cdk().requireProperty(props,"remediationEnabled",this),cdk().requireProperty(props,"securityServicePolicyData",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::FMS::Policy",void 0,{tagPropertyName:"tags"}),this.deleteAllPolicyResources=props.deleteAllPolicyResources,this.excludeMap=props.excludeMap,this.excludeResourceTags=props.excludeResourceTags,this.includeMap=props.includeMap,this.policyDescription=props.policyDescription,this.policyName=props.policyName,this.remediationEnabled=props.remediationEnabled,this.resourcesCleanUp=props.resourcesCleanUp,this.resourceSetIds=props.resourceSetIds,this.resourceTags=props.resourceTags,this.resourceType=props.resourceType,this.resourceTypeList=props.resourceTypeList,this.securityServicePolicyData=props.securityServicePolicyData,this.tags=props.tags}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),deleteAllPolicyResources:this.deleteAllPolicyResources,excludeMap:this.excludeMap,excludeResourceTags:this.excludeResourceTags,includeMap:this.includeMap,policyDescription:this.policyDescription,policyName:this.policyName,remediationEnabled:this.remediationEnabled,resourcesCleanUp:this.resourcesCleanUp,resourceSetIds:this.resourceSetIds,resourceTags:this.resourceTags,resourceType:this.resourceType,resourceTypeList:this.resourceTypeList,securityServicePolicyData:this.securityServicePolicyData}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnPolicy.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnPolicyPropsToCloudFormation(props)}}exports.CfnPolicy=CfnPolicy,_b=JSII_RTTI_SYMBOL_1,CfnPolicy[_b]={fqn:"aws-cdk-lib.aws_fms.CfnPolicy",version:"2.149.0"},CfnPolicy.CFN_RESOURCE_TYPE_NAME="AWS::FMS::Policy";function CfnPolicyResourceTagPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("key",cdk().requiredValidator)(properties.key)),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.collect(cdk().propertyValidator("value",cdk().validateString)(properties.value)),errors.wrap('supplied properties not correct for "ResourceTagProperty"')}function convertCfnPolicyResourceTagPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicyResourceTagPropertyValidator(properties).assertSuccess(),{Key:cdk().stringToCloudFormation(properties.key),Value:cdk().stringToCloudFormation(properties.value)}):properties}function CfnPolicyResourceTagPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addPropertyResult("value","Value",properties.Value!=null?cfn_parse().FromCloudFormation.getString(properties.Value):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPolicyNetworkFirewallPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("firewallDeploymentModel",cdk().requiredValidator)(properties.firewallDeploymentModel)),errors.collect(cdk().propertyValidator("firewallDeploymentModel",cdk().validateString)(properties.firewallDeploymentModel)),errors.wrap('supplied properties not correct for "NetworkFirewallPolicyProperty"')}function convertCfnPolicyNetworkFirewallPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicyNetworkFirewallPolicyPropertyValidator(properties).assertSuccess(),{FirewallDeploymentModel:cdk().stringToCloudFormation(properties.firewallDeploymentModel)}):properties}function CfnPolicyNetworkFirewallPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("firewallDeploymentModel","FirewallDeploymentModel",properties.FirewallDeploymentModel!=null?cfn_parse().FromCloudFormation.getString(properties.FirewallDeploymentModel):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPolicyThirdPartyFirewallPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("firewallDeploymentModel",cdk().requiredValidator)(properties.firewallDeploymentModel)),errors.collect(cdk().propertyValidator("firewallDeploymentModel",cdk().validateString)(properties.firewallDeploymentModel)),errors.wrap('supplied properties not correct for "ThirdPartyFirewallPolicyProperty"')}function convertCfnPolicyThirdPartyFirewallPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicyThirdPartyFirewallPolicyPropertyValidator(properties).assertSuccess(),{FirewallDeploymentModel:cdk().stringToCloudFormation(properties.firewallDeploymentModel)}):properties}function CfnPolicyThirdPartyFirewallPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("firewallDeploymentModel","FirewallDeploymentModel",properties.FirewallDeploymentModel!=null?cfn_parse().FromCloudFormation.getString(properties.FirewallDeploymentModel):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPolicyPolicyOptionPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("networkFirewallPolicy",CfnPolicyNetworkFirewallPolicyPropertyValidator)(properties.networkFirewallPolicy)),errors.collect(cdk().propertyValidator("thirdPartyFirewallPolicy",CfnPolicyThirdPartyFirewallPolicyPropertyValidator)(properties.thirdPartyFirewallPolicy)),errors.wrap('supplied properties not correct for "PolicyOptionProperty"')}function convertCfnPolicyPolicyOptionPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicyPolicyOptionPropertyValidator(properties).assertSuccess(),{NetworkFirewallPolicy:convertCfnPolicyNetworkFirewallPolicyPropertyToCloudFormation(properties.networkFirewallPolicy),ThirdPartyFirewallPolicy:convertCfnPolicyThirdPartyFirewallPolicyPropertyToCloudFormation(properties.thirdPartyFirewallPolicy)}):properties}function CfnPolicyPolicyOptionPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("networkFirewallPolicy","NetworkFirewallPolicy",properties.NetworkFirewallPolicy!=null?CfnPolicyNetworkFirewallPolicyPropertyFromCloudFormation(properties.NetworkFirewallPolicy):void 0),ret.addPropertyResult("thirdPartyFirewallPolicy","ThirdPartyFirewallPolicy",properties.ThirdPartyFirewallPolicy!=null?CfnPolicyThirdPartyFirewallPolicyPropertyFromCloudFormation(properties.ThirdPartyFirewallPolicy):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPolicySecurityServicePolicyDataPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("managedServiceData",cdk().validateString)(properties.managedServiceData)),errors.collect(cdk().propertyValidator("policyOption",CfnPolicyPolicyOptionPropertyValidator)(properties.policyOption)),errors.collect(cdk().propertyValidator("type",cdk().requiredValidator)(properties.type)),errors.collect(cdk().propertyValidator("type",cdk().validateString)(properties.type)),errors.wrap('supplied properties not correct for "SecurityServicePolicyDataProperty"')}function convertCfnPolicySecurityServicePolicyDataPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicySecurityServicePolicyDataPropertyValidator(properties).assertSuccess(),{ManagedServiceData:cdk().stringToCloudFormation(properties.managedServiceData),PolicyOption:convertCfnPolicyPolicyOptionPropertyToCloudFormation(properties.policyOption),Type:cdk().stringToCloudFormation(properties.type)}):properties}function CfnPolicySecurityServicePolicyDataPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("managedServiceData","ManagedServiceData",properties.ManagedServiceData!=null?cfn_parse().FromCloudFormation.getString(properties.ManagedServiceData):void 0),ret.addPropertyResult("policyOption","PolicyOption",properties.PolicyOption!=null?CfnPolicyPolicyOptionPropertyFromCloudFormation(properties.PolicyOption):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?cfn_parse().FromCloudFormation.getString(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPolicyIEMapPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("account",cdk().listValidator(cdk().validateString))(properties.account)),errors.collect(cdk().propertyValidator("orgunit",cdk().listValidator(cdk().validateString))(properties.orgunit)),errors.wrap('supplied properties not correct for "IEMapProperty"')}function convertCfnPolicyIEMapPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicyIEMapPropertyValidator(properties).assertSuccess(),{ACCOUNT:cdk().listMapper(cdk().stringToCloudFormation)(properties.account),ORGUNIT:cdk().listMapper(cdk().stringToCloudFormation)(properties.orgunit)}):properties}function CfnPolicyIEMapPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("account","ACCOUNT",properties.ACCOUNT!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.ACCOUNT):void 0),ret.addPropertyResult("orgunit","ORGUNIT",properties.ORGUNIT!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.ORGUNIT):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPolicyPolicyTagPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("key",cdk().requiredValidator)(properties.key)),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.collect(cdk().propertyValidator("value",cdk().requiredValidator)(properties.value)),errors.collect(cdk().propertyValidator("value",cdk().validateString)(properties.value)),errors.wrap('supplied properties not correct for "PolicyTagProperty"')}function convertCfnPolicyPolicyTagPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicyPolicyTagPropertyValidator(properties).assertSuccess(),{Key:cdk().stringToCloudFormation(properties.key),Value:cdk().stringToCloudFormation(properties.value)}):properties}function CfnPolicyPolicyTagPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addPropertyResult("value","Value",properties.Value!=null?cfn_parse().FromCloudFormation.getString(properties.Value):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPolicyPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("deleteAllPolicyResources",cdk().validateBoolean)(properties.deleteAllPolicyResources)),errors.collect(cdk().propertyValidator("excludeMap",CfnPolicyIEMapPropertyValidator)(properties.excludeMap)),errors.collect(cdk().propertyValidator("excludeResourceTags",cdk().requiredValidator)(properties.excludeResourceTags)),errors.collect(cdk().propertyValidator("excludeResourceTags",cdk().validateBoolean)(properties.excludeResourceTags)),errors.collect(cdk().propertyValidator("includeMap",CfnPolicyIEMapPropertyValidator)(properties.includeMap)),errors.collect(cdk().propertyValidator("policyDescription",cdk().validateString)(properties.policyDescription)),errors.collect(cdk().propertyValidator("policyName",cdk().requiredValidator)(properties.policyName)),errors.collect(cdk().propertyValidator("policyName",cdk().validateString)(properties.policyName)),errors.collect(cdk().propertyValidator("remediationEnabled",cdk().requiredValidator)(properties.remediationEnabled)),errors.collect(cdk().propertyValidator("remediationEnabled",cdk().validateBoolean)(properties.remediationEnabled)),errors.collect(cdk().propertyValidator("resourceSetIds",cdk().listValidator(cdk().validateString))(properties.resourceSetIds)),errors.collect(cdk().propertyValidator("resourceTags",cdk().listValidator(CfnPolicyResourceTagPropertyValidator))(properties.resourceTags)),errors.collect(cdk().propertyValidator("resourceType",cdk().validateString)(properties.resourceType)),errors.collect(cdk().propertyValidator("resourceTypeList",cdk().listValidator(cdk().validateString))(properties.resourceTypeList)),errors.collect(cdk().propertyValidator("resourcesCleanUp",cdk().validateBoolean)(properties.resourcesCleanUp)),errors.collect(cdk().propertyValidator("securityServicePolicyData",cdk().requiredValidator)(properties.securityServicePolicyData)),errors.collect(cdk().propertyValidator("securityServicePolicyData",CfnPolicySecurityServicePolicyDataPropertyValidator)(properties.securityServicePolicyData)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(CfnPolicyPolicyTagPropertyValidator))(properties.tags)),errors.wrap('supplied properties not correct for "CfnPolicyProps"')}function convertCfnPolicyPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPolicyPropsValidator(properties).assertSuccess(),{DeleteAllPolicyResources:cdk().booleanToCloudFormation(properties.deleteAllPolicyResources),ExcludeMap:convertCfnPolicyIEMapPropertyToCloudFormation(properties.excludeMap),ExcludeResourceTags:cdk().booleanToCloudFormation(properties.excludeResourceTags),IncludeMap:convertCfnPolicyIEMapPropertyToCloudFormation(properties.includeMap),PolicyDescription:cdk().stringToCloudFormation(properties.policyDescription),PolicyName:cdk().stringToCloudFormation(properties.policyName),RemediationEnabled:cdk().booleanToCloudFormation(properties.remediationEnabled),ResourceSetIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.resourceSetIds),ResourceTags:cdk().listMapper(convertCfnPolicyResourceTagPropertyToCloudFormation)(properties.resourceTags),ResourceType:cdk().stringToCloudFormation(properties.resourceType),ResourceTypeList:cdk().listMapper(cdk().stringToCloudFormation)(properties.resourceTypeList),ResourcesCleanUp:cdk().booleanToCloudFormation(properties.resourcesCleanUp),SecurityServicePolicyData:convertCfnPolicySecurityServicePolicyDataPropertyToCloudFormation(properties.securityServicePolicyData),Tags:cdk().listMapper(convertCfnPolicyPolicyTagPropertyToCloudFormation)(properties.tags)}):properties}function CfnPolicyPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("deleteAllPolicyResources","DeleteAllPolicyResources",properties.DeleteAllPolicyResources!=null?cfn_parse().FromCloudFormation.getBoolean(properties.DeleteAllPolicyResources):void 0),ret.addPropertyResult("excludeMap","ExcludeMap",properties.ExcludeMap!=null?CfnPolicyIEMapPropertyFromCloudFormation(properties.ExcludeMap):void 0),ret.addPropertyResult("excludeResourceTags","ExcludeResourceTags",properties.ExcludeResourceTags!=null?cfn_parse().FromCloudFormation.getBoolean(properties.ExcludeResourceTags):void 0),ret.addPropertyResult("includeMap","IncludeMap",properties.IncludeMap!=null?CfnPolicyIEMapPropertyFromCloudFormation(properties.IncludeMap):void 0),ret.addPropertyResult("policyDescription","PolicyDescription",properties.PolicyDescription!=null?cfn_parse().FromCloudFormation.getString(properties.PolicyDescription):void 0),ret.addPropertyResult("policyName","PolicyName",properties.PolicyName!=null?cfn_parse().FromCloudFormation.getString(properties.PolicyName):void 0),ret.addPropertyResult("remediationEnabled","RemediationEnabled",properties.RemediationEnabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.RemediationEnabled):void 0),ret.addPropertyResult("resourcesCleanUp","ResourcesCleanUp",properties.ResourcesCleanUp!=null?cfn_parse().FromCloudFormation.getBoolean(properties.ResourcesCleanUp):void 0),ret.addPropertyResult("resourceSetIds","ResourceSetIds",properties.ResourceSetIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.ResourceSetIds):void 0),ret.addPropertyResult("resourceTags","ResourceTags",properties.ResourceTags!=null?cfn_parse().FromCloudFormation.getArray(CfnPolicyResourceTagPropertyFromCloudFormation)(properties.ResourceTags):void 0),ret.addPropertyResult("resourceType","ResourceType",properties.ResourceType!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceType):void 0),ret.addPropertyResult("resourceTypeList","ResourceTypeList",properties.ResourceTypeList!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.ResourceTypeList):void 0),ret.addPropertyResult("securityServicePolicyData","SecurityServicePolicyData",properties.SecurityServicePolicyData!=null?CfnPolicySecurityServicePolicyDataPropertyFromCloudFormation(properties.SecurityServicePolicyData):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(CfnPolicyPolicyTagPropertyFromCloudFormation)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnResourceSet extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnResourceSetPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnResourceSet(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnResourceSet.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_fms_CfnResourceSetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnResourceSet),error}cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"resourceTypeList",this),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.description=props.description,this.name=props.name,this.resources=props.resources,this.resourceTypeList=props.resourceTypeList,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::FMS::ResourceSet",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{description:this.description,name:this.name,resources:this.resources,resourceTypeList:this.resourceTypeList,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnResourceSet.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnResourceSetPropsToCloudFormation(props)}}exports.CfnResourceSet=CfnResourceSet,_c=JSII_RTTI_SYMBOL_1,CfnResourceSet[_c]={fqn:"aws-cdk-lib.aws_fms.CfnResourceSet",version:"2.149.0"},CfnResourceSet.CFN_RESOURCE_TYPE_NAME="AWS::FMS::ResourceSet";function CfnResourceSetPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("resourceTypeList",cdk().requiredValidator)(properties.resourceTypeList)),errors.collect(cdk().propertyValidator("resourceTypeList",cdk().listValidator(cdk().validateString))(properties.resourceTypeList)),errors.collect(cdk().propertyValidator("resources",cdk().listValidator(cdk().validateString))(properties.resources)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnResourceSetProps"')}function convertCfnResourceSetPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnResourceSetPropsValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),Name:cdk().stringToCloudFormation(properties.name),ResourceTypeList:cdk().listMapper(cdk().stringToCloudFormation)(properties.resourceTypeList),Resources:cdk().listMapper(cdk().stringToCloudFormation)(properties.resources),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnResourceSetPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("resources","Resources",properties.Resources!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Resources):void 0),ret.addPropertyResult("resourceTypeList","ResourceTypeList",properties.ResourceTypeList!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.ResourceTypeList):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
