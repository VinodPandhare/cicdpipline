"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnServiceTemplate=exports.CfnEnvironmentTemplate=exports.CfnEnvironmentAccountConnection=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnEnvironmentAccountConnection extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnEnvironmentAccountConnectionPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnEnvironmentAccountConnection(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props={}){super(scope,id,{type:CfnEnvironmentAccountConnection.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_proton_CfnEnvironmentAccountConnectionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnEnvironmentAccountConnection),error}this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.attrStatus=cdk().Token.asString(this.getAtt("Status",cdk().ResolutionTypeHint.STRING)),this.codebuildRoleArn=props.codebuildRoleArn,this.componentRoleArn=props.componentRoleArn,this.environmentAccountId=props.environmentAccountId,this.environmentName=props.environmentName,this.managementAccountId=props.managementAccountId,this.roleArn=props.roleArn,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Proton::EnvironmentAccountConnection",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{codebuildRoleArn:this.codebuildRoleArn,componentRoleArn:this.componentRoleArn,environmentAccountId:this.environmentAccountId,environmentName:this.environmentName,managementAccountId:this.managementAccountId,roleArn:this.roleArn,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnEnvironmentAccountConnection.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnEnvironmentAccountConnectionPropsToCloudFormation(props)}}exports.CfnEnvironmentAccountConnection=CfnEnvironmentAccountConnection,_a=JSII_RTTI_SYMBOL_1,CfnEnvironmentAccountConnection[_a]={fqn:"aws-cdk-lib.aws_proton.CfnEnvironmentAccountConnection",version:"2.149.0"},CfnEnvironmentAccountConnection.CFN_RESOURCE_TYPE_NAME="AWS::Proton::EnvironmentAccountConnection";function CfnEnvironmentAccountConnectionPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("codebuildRoleArn",cdk().validateString)(properties.codebuildRoleArn)),errors.collect(cdk().propertyValidator("componentRoleArn",cdk().validateString)(properties.componentRoleArn)),errors.collect(cdk().propertyValidator("environmentAccountId",cdk().validateString)(properties.environmentAccountId)),errors.collect(cdk().propertyValidator("environmentName",cdk().validateString)(properties.environmentName)),errors.collect(cdk().propertyValidator("managementAccountId",cdk().validateString)(properties.managementAccountId)),errors.collect(cdk().propertyValidator("roleArn",cdk().validateString)(properties.roleArn)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnEnvironmentAccountConnectionProps"')}function convertCfnEnvironmentAccountConnectionPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnEnvironmentAccountConnectionPropsValidator(properties).assertSuccess(),{CodebuildRoleArn:cdk().stringToCloudFormation(properties.codebuildRoleArn),ComponentRoleArn:cdk().stringToCloudFormation(properties.componentRoleArn),EnvironmentAccountId:cdk().stringToCloudFormation(properties.environmentAccountId),EnvironmentName:cdk().stringToCloudFormation(properties.environmentName),ManagementAccountId:cdk().stringToCloudFormation(properties.managementAccountId),RoleArn:cdk().stringToCloudFormation(properties.roleArn),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnEnvironmentAccountConnectionPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("codebuildRoleArn","CodebuildRoleArn",properties.CodebuildRoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.CodebuildRoleArn):void 0),ret.addPropertyResult("componentRoleArn","ComponentRoleArn",properties.ComponentRoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.ComponentRoleArn):void 0),ret.addPropertyResult("environmentAccountId","EnvironmentAccountId",properties.EnvironmentAccountId!=null?cfn_parse().FromCloudFormation.getString(properties.EnvironmentAccountId):void 0),ret.addPropertyResult("environmentName","EnvironmentName",properties.EnvironmentName!=null?cfn_parse().FromCloudFormation.getString(properties.EnvironmentName):void 0),ret.addPropertyResult("managementAccountId","ManagementAccountId",properties.ManagementAccountId!=null?cfn_parse().FromCloudFormation.getString(properties.ManagementAccountId):void 0),ret.addPropertyResult("roleArn","RoleArn",properties.RoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.RoleArn):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnEnvironmentTemplate extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnEnvironmentTemplatePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnEnvironmentTemplate(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props={}){super(scope,id,{type:CfnEnvironmentTemplate.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_proton_CfnEnvironmentTemplateProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnEnvironmentTemplate),error}this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.description=props.description,this.displayName=props.displayName,this.encryptionKey=props.encryptionKey,this.name=props.name,this.provisioning=props.provisioning,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Proton::EnvironmentTemplate",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{description:this.description,displayName:this.displayName,encryptionKey:this.encryptionKey,name:this.name,provisioning:this.provisioning,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnEnvironmentTemplate.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnEnvironmentTemplatePropsToCloudFormation(props)}}exports.CfnEnvironmentTemplate=CfnEnvironmentTemplate,_b=JSII_RTTI_SYMBOL_1,CfnEnvironmentTemplate[_b]={fqn:"aws-cdk-lib.aws_proton.CfnEnvironmentTemplate",version:"2.149.0"},CfnEnvironmentTemplate.CFN_RESOURCE_TYPE_NAME="AWS::Proton::EnvironmentTemplate";function CfnEnvironmentTemplatePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("displayName",cdk().validateString)(properties.displayName)),errors.collect(cdk().propertyValidator("encryptionKey",cdk().validateString)(properties.encryptionKey)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("provisioning",cdk().validateString)(properties.provisioning)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnEnvironmentTemplateProps"')}function convertCfnEnvironmentTemplatePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnEnvironmentTemplatePropsValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),DisplayName:cdk().stringToCloudFormation(properties.displayName),EncryptionKey:cdk().stringToCloudFormation(properties.encryptionKey),Name:cdk().stringToCloudFormation(properties.name),Provisioning:cdk().stringToCloudFormation(properties.provisioning),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnEnvironmentTemplatePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("displayName","DisplayName",properties.DisplayName!=null?cfn_parse().FromCloudFormation.getString(properties.DisplayName):void 0),ret.addPropertyResult("encryptionKey","EncryptionKey",properties.EncryptionKey!=null?cfn_parse().FromCloudFormation.getString(properties.EncryptionKey):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("provisioning","Provisioning",properties.Provisioning!=null?cfn_parse().FromCloudFormation.getString(properties.Provisioning):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnServiceTemplate extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnServiceTemplatePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnServiceTemplate(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props={}){super(scope,id,{type:CfnServiceTemplate.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_proton_CfnServiceTemplateProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnServiceTemplate),error}this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.description=props.description,this.displayName=props.displayName,this.encryptionKey=props.encryptionKey,this.name=props.name,this.pipelineProvisioning=props.pipelineProvisioning,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Proton::ServiceTemplate",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{description:this.description,displayName:this.displayName,encryptionKey:this.encryptionKey,name:this.name,pipelineProvisioning:this.pipelineProvisioning,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnServiceTemplate.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnServiceTemplatePropsToCloudFormation(props)}}exports.CfnServiceTemplate=CfnServiceTemplate,_c=JSII_RTTI_SYMBOL_1,CfnServiceTemplate[_c]={fqn:"aws-cdk-lib.aws_proton.CfnServiceTemplate",version:"2.149.0"},CfnServiceTemplate.CFN_RESOURCE_TYPE_NAME="AWS::Proton::ServiceTemplate";function CfnServiceTemplatePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("displayName",cdk().validateString)(properties.displayName)),errors.collect(cdk().propertyValidator("encryptionKey",cdk().validateString)(properties.encryptionKey)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("pipelineProvisioning",cdk().validateString)(properties.pipelineProvisioning)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnServiceTemplateProps"')}function convertCfnServiceTemplatePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnServiceTemplatePropsValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),DisplayName:cdk().stringToCloudFormation(properties.displayName),EncryptionKey:cdk().stringToCloudFormation(properties.encryptionKey),Name:cdk().stringToCloudFormation(properties.name),PipelineProvisioning:cdk().stringToCloudFormation(properties.pipelineProvisioning),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnServiceTemplatePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("displayName","DisplayName",properties.DisplayName!=null?cfn_parse().FromCloudFormation.getString(properties.DisplayName):void 0),ret.addPropertyResult("encryptionKey","EncryptionKey",properties.EncryptionKey!=null?cfn_parse().FromCloudFormation.getString(properties.EncryptionKey):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("pipelineProvisioning","PipelineProvisioning",properties.PipelineProvisioning!=null?cfn_parse().FromCloudFormation.getString(properties.PipelineProvisioning):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
