"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnVirtualCluster=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnVirtualCluster extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnVirtualClusterPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnVirtualCluster(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnVirtualCluster.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_emrcontainers_CfnVirtualClusterProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnVirtualCluster),error}cdk().requireProperty(props,"containerProvider",this),cdk().requireProperty(props,"name",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.containerProvider=props.containerProvider,this.name=props.name,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::EMRContainers::VirtualCluster",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{containerProvider:this.containerProvider,name:this.name,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnVirtualCluster.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnVirtualClusterPropsToCloudFormation(props)}}exports.CfnVirtualCluster=CfnVirtualCluster,_a=JSII_RTTI_SYMBOL_1,CfnVirtualCluster[_a]={fqn:"aws-cdk-lib.aws_emrcontainers.CfnVirtualCluster",version:"2.149.0"},CfnVirtualCluster.CFN_RESOURCE_TYPE_NAME="AWS::EMRContainers::VirtualCluster";function CfnVirtualClusterEksInfoPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("namespace",cdk().requiredValidator)(properties.namespace)),errors.collect(cdk().propertyValidator("namespace",cdk().validateString)(properties.namespace)),errors.wrap('supplied properties not correct for "EksInfoProperty"')}function convertCfnVirtualClusterEksInfoPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnVirtualClusterEksInfoPropertyValidator(properties).assertSuccess(),{Namespace:cdk().stringToCloudFormation(properties.namespace)}):properties}function CfnVirtualClusterEksInfoPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("namespace","Namespace",properties.Namespace!=null?cfn_parse().FromCloudFormation.getString(properties.Namespace):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnVirtualClusterContainerInfoPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("eksInfo",cdk().requiredValidator)(properties.eksInfo)),errors.collect(cdk().propertyValidator("eksInfo",CfnVirtualClusterEksInfoPropertyValidator)(properties.eksInfo)),errors.wrap('supplied properties not correct for "ContainerInfoProperty"')}function convertCfnVirtualClusterContainerInfoPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnVirtualClusterContainerInfoPropertyValidator(properties).assertSuccess(),{EksInfo:convertCfnVirtualClusterEksInfoPropertyToCloudFormation(properties.eksInfo)}):properties}function CfnVirtualClusterContainerInfoPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("eksInfo","EksInfo",properties.EksInfo!=null?CfnVirtualClusterEksInfoPropertyFromCloudFormation(properties.EksInfo):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnVirtualClusterContainerProviderPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("id",cdk().requiredValidator)(properties.id)),errors.collect(cdk().propertyValidator("id",cdk().validateString)(properties.id)),errors.collect(cdk().propertyValidator("info",cdk().requiredValidator)(properties.info)),errors.collect(cdk().propertyValidator("info",CfnVirtualClusterContainerInfoPropertyValidator)(properties.info)),errors.collect(cdk().propertyValidator("type",cdk().requiredValidator)(properties.type)),errors.collect(cdk().propertyValidator("type",cdk().validateString)(properties.type)),errors.wrap('supplied properties not correct for "ContainerProviderProperty"')}function convertCfnVirtualClusterContainerProviderPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnVirtualClusterContainerProviderPropertyValidator(properties).assertSuccess(),{Id:cdk().stringToCloudFormation(properties.id),Info:convertCfnVirtualClusterContainerInfoPropertyToCloudFormation(properties.info),Type:cdk().stringToCloudFormation(properties.type)}):properties}function CfnVirtualClusterContainerProviderPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("id","Id",properties.Id!=null?cfn_parse().FromCloudFormation.getString(properties.Id):void 0),ret.addPropertyResult("info","Info",properties.Info!=null?CfnVirtualClusterContainerInfoPropertyFromCloudFormation(properties.Info):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?cfn_parse().FromCloudFormation.getString(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnVirtualClusterPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("containerProvider",cdk().requiredValidator)(properties.containerProvider)),errors.collect(cdk().propertyValidator("containerProvider",CfnVirtualClusterContainerProviderPropertyValidator)(properties.containerProvider)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnVirtualClusterProps"')}function convertCfnVirtualClusterPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnVirtualClusterPropsValidator(properties).assertSuccess(),{ContainerProvider:convertCfnVirtualClusterContainerProviderPropertyToCloudFormation(properties.containerProvider),Name:cdk().stringToCloudFormation(properties.name),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnVirtualClusterPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("containerProvider","ContainerProvider",properties.ContainerProvider!=null?CfnVirtualClusterContainerProviderPropertyFromCloudFormation(properties.ContainerProvider):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
