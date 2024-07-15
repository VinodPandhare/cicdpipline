"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnPrivateGraphEndpoint=exports.CfnGraph=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnGraph extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnGraphPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnGraph(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnGraph.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_neptunegraph_CfnGraphProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnGraph),error}cdk().requireProperty(props,"provisionedMemory",this),this.attrEndpoint=cdk().Token.asString(this.getAtt("Endpoint",cdk().ResolutionTypeHint.STRING)),this.attrGraphArn=cdk().Token.asString(this.getAtt("GraphArn",cdk().ResolutionTypeHint.STRING)),this.attrGraphId=cdk().Token.asString(this.getAtt("GraphId",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::NeptuneGraph::Graph",void 0,{tagPropertyName:"tags"}),this.deletionProtection=props.deletionProtection,this.graphName=props.graphName,this.provisionedMemory=props.provisionedMemory,this.publicConnectivity=props.publicConnectivity,this.replicaCount=props.replicaCount,this.tags=props.tags,this.vectorSearchConfiguration=props.vectorSearchConfiguration}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),deletionProtection:this.deletionProtection,graphName:this.graphName,provisionedMemory:this.provisionedMemory,publicConnectivity:this.publicConnectivity,replicaCount:this.replicaCount,vectorSearchConfiguration:this.vectorSearchConfiguration}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnGraph.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnGraphPropsToCloudFormation(props)}}exports.CfnGraph=CfnGraph,_a=JSII_RTTI_SYMBOL_1,CfnGraph[_a]={fqn:"aws-cdk-lib.aws_neptunegraph.CfnGraph",version:"2.149.0"},CfnGraph.CFN_RESOURCE_TYPE_NAME="AWS::NeptuneGraph::Graph";function CfnGraphVectorSearchConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("vectorSearchDimension",cdk().requiredValidator)(properties.vectorSearchDimension)),errors.collect(cdk().propertyValidator("vectorSearchDimension",cdk().validateNumber)(properties.vectorSearchDimension)),errors.wrap('supplied properties not correct for "VectorSearchConfigurationProperty"')}function convertCfnGraphVectorSearchConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGraphVectorSearchConfigurationPropertyValidator(properties).assertSuccess(),{VectorSearchDimension:cdk().numberToCloudFormation(properties.vectorSearchDimension)}):properties}function CfnGraphVectorSearchConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("vectorSearchDimension","VectorSearchDimension",properties.VectorSearchDimension!=null?cfn_parse().FromCloudFormation.getNumber(properties.VectorSearchDimension):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnGraphPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("deletionProtection",cdk().validateBoolean)(properties.deletionProtection)),errors.collect(cdk().propertyValidator("graphName",cdk().validateString)(properties.graphName)),errors.collect(cdk().propertyValidator("provisionedMemory",cdk().requiredValidator)(properties.provisionedMemory)),errors.collect(cdk().propertyValidator("provisionedMemory",cdk().validateNumber)(properties.provisionedMemory)),errors.collect(cdk().propertyValidator("publicConnectivity",cdk().validateBoolean)(properties.publicConnectivity)),errors.collect(cdk().propertyValidator("replicaCount",cdk().validateNumber)(properties.replicaCount)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.collect(cdk().propertyValidator("vectorSearchConfiguration",CfnGraphVectorSearchConfigurationPropertyValidator)(properties.vectorSearchConfiguration)),errors.wrap('supplied properties not correct for "CfnGraphProps"')}function convertCfnGraphPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnGraphPropsValidator(properties).assertSuccess(),{DeletionProtection:cdk().booleanToCloudFormation(properties.deletionProtection),GraphName:cdk().stringToCloudFormation(properties.graphName),ProvisionedMemory:cdk().numberToCloudFormation(properties.provisionedMemory),PublicConnectivity:cdk().booleanToCloudFormation(properties.publicConnectivity),ReplicaCount:cdk().numberToCloudFormation(properties.replicaCount),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags),VectorSearchConfiguration:convertCfnGraphVectorSearchConfigurationPropertyToCloudFormation(properties.vectorSearchConfiguration)}):properties}function CfnGraphPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("deletionProtection","DeletionProtection",properties.DeletionProtection!=null?cfn_parse().FromCloudFormation.getBoolean(properties.DeletionProtection):void 0),ret.addPropertyResult("graphName","GraphName",properties.GraphName!=null?cfn_parse().FromCloudFormation.getString(properties.GraphName):void 0),ret.addPropertyResult("provisionedMemory","ProvisionedMemory",properties.ProvisionedMemory!=null?cfn_parse().FromCloudFormation.getNumber(properties.ProvisionedMemory):void 0),ret.addPropertyResult("publicConnectivity","PublicConnectivity",properties.PublicConnectivity!=null?cfn_parse().FromCloudFormation.getBoolean(properties.PublicConnectivity):void 0),ret.addPropertyResult("replicaCount","ReplicaCount",properties.ReplicaCount!=null?cfn_parse().FromCloudFormation.getNumber(properties.ReplicaCount):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addPropertyResult("vectorSearchConfiguration","VectorSearchConfiguration",properties.VectorSearchConfiguration!=null?CfnGraphVectorSearchConfigurationPropertyFromCloudFormation(properties.VectorSearchConfiguration):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnPrivateGraphEndpoint extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnPrivateGraphEndpointPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnPrivateGraphEndpoint(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnPrivateGraphEndpoint.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_neptunegraph_CfnPrivateGraphEndpointProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnPrivateGraphEndpoint),error}cdk().requireProperty(props,"graphIdentifier",this),cdk().requireProperty(props,"vpcId",this),this.attrPrivateGraphEndpointIdentifier=cdk().Token.asString(this.getAtt("PrivateGraphEndpointIdentifier",cdk().ResolutionTypeHint.STRING)),this.attrVpcEndpointId=cdk().Token.asString(this.getAtt("VpcEndpointId",cdk().ResolutionTypeHint.STRING)),this.graphIdentifier=props.graphIdentifier,this.securityGroupIds=props.securityGroupIds,this.subnetIds=props.subnetIds,this.vpcId=props.vpcId}get cfnProperties(){return{graphIdentifier:this.graphIdentifier,securityGroupIds:this.securityGroupIds,subnetIds:this.subnetIds,vpcId:this.vpcId}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnPrivateGraphEndpoint.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnPrivateGraphEndpointPropsToCloudFormation(props)}}exports.CfnPrivateGraphEndpoint=CfnPrivateGraphEndpoint,_b=JSII_RTTI_SYMBOL_1,CfnPrivateGraphEndpoint[_b]={fqn:"aws-cdk-lib.aws_neptunegraph.CfnPrivateGraphEndpoint",version:"2.149.0"},CfnPrivateGraphEndpoint.CFN_RESOURCE_TYPE_NAME="AWS::NeptuneGraph::PrivateGraphEndpoint";function CfnPrivateGraphEndpointPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("graphIdentifier",cdk().requiredValidator)(properties.graphIdentifier)),errors.collect(cdk().propertyValidator("graphIdentifier",cdk().validateString)(properties.graphIdentifier)),errors.collect(cdk().propertyValidator("securityGroupIds",cdk().listValidator(cdk().validateString))(properties.securityGroupIds)),errors.collect(cdk().propertyValidator("subnetIds",cdk().listValidator(cdk().validateString))(properties.subnetIds)),errors.collect(cdk().propertyValidator("vpcId",cdk().requiredValidator)(properties.vpcId)),errors.collect(cdk().propertyValidator("vpcId",cdk().validateString)(properties.vpcId)),errors.wrap('supplied properties not correct for "CfnPrivateGraphEndpointProps"')}function convertCfnPrivateGraphEndpointPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPrivateGraphEndpointPropsValidator(properties).assertSuccess(),{GraphIdentifier:cdk().stringToCloudFormation(properties.graphIdentifier),SecurityGroupIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.securityGroupIds),SubnetIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.subnetIds),VpcId:cdk().stringToCloudFormation(properties.vpcId)}):properties}function CfnPrivateGraphEndpointPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("graphIdentifier","GraphIdentifier",properties.GraphIdentifier!=null?cfn_parse().FromCloudFormation.getString(properties.GraphIdentifier):void 0),ret.addPropertyResult("securityGroupIds","SecurityGroupIds",properties.SecurityGroupIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SecurityGroupIds):void 0),ret.addPropertyResult("subnetIds","SubnetIds",properties.SubnetIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SubnetIds):void 0),ret.addPropertyResult("vpcId","VpcId",properties.VpcId!=null?cfn_parse().FromCloudFormation.getString(properties.VpcId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}