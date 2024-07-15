"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnEnvironment=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnEnvironment extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnEnvironmentPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnEnvironment(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnEnvironment.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_workspacesthinclient_CfnEnvironmentProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnEnvironment),error}cdk().requireProperty(props,"desktopArn",this),this.attrActivationCode=cdk().Token.asString(this.getAtt("ActivationCode",cdk().ResolutionTypeHint.STRING)),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrCreatedAt=cdk().Token.asString(this.getAtt("CreatedAt",cdk().ResolutionTypeHint.STRING)),this.attrDesktopType=cdk().Token.asString(this.getAtt("DesktopType",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.attrPendingSoftwareSetId=cdk().Token.asString(this.getAtt("PendingSoftwareSetId",cdk().ResolutionTypeHint.STRING)),this.attrPendingSoftwareSetVersion=cdk().Token.asString(this.getAtt("PendingSoftwareSetVersion",cdk().ResolutionTypeHint.STRING)),this.attrRegisteredDevicesCount=cdk().Token.asNumber(this.getAtt("RegisteredDevicesCount",cdk().ResolutionTypeHint.NUMBER)),this.attrSoftwareSetComplianceStatus=cdk().Token.asString(this.getAtt("SoftwareSetComplianceStatus",cdk().ResolutionTypeHint.STRING)),this.attrUpdatedAt=cdk().Token.asString(this.getAtt("UpdatedAt",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::WorkSpacesThinClient::Environment",void 0,{tagPropertyName:"tags"}),this.desiredSoftwareSetId=props.desiredSoftwareSetId,this.desktopArn=props.desktopArn,this.desktopEndpoint=props.desktopEndpoint,this.kmsKeyArn=props.kmsKeyArn,this.maintenanceWindow=props.maintenanceWindow,this.name=props.name,this.softwareSetUpdateMode=props.softwareSetUpdateMode,this.softwareSetUpdateSchedule=props.softwareSetUpdateSchedule,this.tags=props.tags}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),desiredSoftwareSetId:this.desiredSoftwareSetId,desktopArn:this.desktopArn,desktopEndpoint:this.desktopEndpoint,kmsKeyArn:this.kmsKeyArn,maintenanceWindow:this.maintenanceWindow,name:this.name,softwareSetUpdateMode:this.softwareSetUpdateMode,softwareSetUpdateSchedule:this.softwareSetUpdateSchedule}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnEnvironment.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnEnvironmentPropsToCloudFormation(props)}}exports.CfnEnvironment=CfnEnvironment,_a=JSII_RTTI_SYMBOL_1,CfnEnvironment[_a]={fqn:"aws-cdk-lib.aws_workspacesthinclient.CfnEnvironment",version:"2.149.0"},CfnEnvironment.CFN_RESOURCE_TYPE_NAME="AWS::WorkSpacesThinClient::Environment";function CfnEnvironmentMaintenanceWindowPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("applyTimeOf",cdk().validateString)(properties.applyTimeOf)),errors.collect(cdk().propertyValidator("daysOfTheWeek",cdk().listValidator(cdk().validateString))(properties.daysOfTheWeek)),errors.collect(cdk().propertyValidator("endTimeHour",cdk().validateNumber)(properties.endTimeHour)),errors.collect(cdk().propertyValidator("endTimeMinute",cdk().validateNumber)(properties.endTimeMinute)),errors.collect(cdk().propertyValidator("startTimeHour",cdk().validateNumber)(properties.startTimeHour)),errors.collect(cdk().propertyValidator("startTimeMinute",cdk().validateNumber)(properties.startTimeMinute)),errors.collect(cdk().propertyValidator("type",cdk().requiredValidator)(properties.type)),errors.collect(cdk().propertyValidator("type",cdk().validateString)(properties.type)),errors.wrap('supplied properties not correct for "MaintenanceWindowProperty"')}function convertCfnEnvironmentMaintenanceWindowPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnEnvironmentMaintenanceWindowPropertyValidator(properties).assertSuccess(),{ApplyTimeOf:cdk().stringToCloudFormation(properties.applyTimeOf),DaysOfTheWeek:cdk().listMapper(cdk().stringToCloudFormation)(properties.daysOfTheWeek),EndTimeHour:cdk().numberToCloudFormation(properties.endTimeHour),EndTimeMinute:cdk().numberToCloudFormation(properties.endTimeMinute),StartTimeHour:cdk().numberToCloudFormation(properties.startTimeHour),StartTimeMinute:cdk().numberToCloudFormation(properties.startTimeMinute),Type:cdk().stringToCloudFormation(properties.type)}):properties}function CfnEnvironmentMaintenanceWindowPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("applyTimeOf","ApplyTimeOf",properties.ApplyTimeOf!=null?cfn_parse().FromCloudFormation.getString(properties.ApplyTimeOf):void 0),ret.addPropertyResult("daysOfTheWeek","DaysOfTheWeek",properties.DaysOfTheWeek!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.DaysOfTheWeek):void 0),ret.addPropertyResult("endTimeHour","EndTimeHour",properties.EndTimeHour!=null?cfn_parse().FromCloudFormation.getNumber(properties.EndTimeHour):void 0),ret.addPropertyResult("endTimeMinute","EndTimeMinute",properties.EndTimeMinute!=null?cfn_parse().FromCloudFormation.getNumber(properties.EndTimeMinute):void 0),ret.addPropertyResult("startTimeHour","StartTimeHour",properties.StartTimeHour!=null?cfn_parse().FromCloudFormation.getNumber(properties.StartTimeHour):void 0),ret.addPropertyResult("startTimeMinute","StartTimeMinute",properties.StartTimeMinute!=null?cfn_parse().FromCloudFormation.getNumber(properties.StartTimeMinute):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?cfn_parse().FromCloudFormation.getString(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnEnvironmentPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("desiredSoftwareSetId",cdk().validateString)(properties.desiredSoftwareSetId)),errors.collect(cdk().propertyValidator("desktopArn",cdk().requiredValidator)(properties.desktopArn)),errors.collect(cdk().propertyValidator("desktopArn",cdk().validateString)(properties.desktopArn)),errors.collect(cdk().propertyValidator("desktopEndpoint",cdk().validateString)(properties.desktopEndpoint)),errors.collect(cdk().propertyValidator("kmsKeyArn",cdk().validateString)(properties.kmsKeyArn)),errors.collect(cdk().propertyValidator("maintenanceWindow",CfnEnvironmentMaintenanceWindowPropertyValidator)(properties.maintenanceWindow)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("softwareSetUpdateMode",cdk().validateString)(properties.softwareSetUpdateMode)),errors.collect(cdk().propertyValidator("softwareSetUpdateSchedule",cdk().validateString)(properties.softwareSetUpdateSchedule)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnEnvironmentProps"')}function convertCfnEnvironmentPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnEnvironmentPropsValidator(properties).assertSuccess(),{DesiredSoftwareSetId:cdk().stringToCloudFormation(properties.desiredSoftwareSetId),DesktopArn:cdk().stringToCloudFormation(properties.desktopArn),DesktopEndpoint:cdk().stringToCloudFormation(properties.desktopEndpoint),KmsKeyArn:cdk().stringToCloudFormation(properties.kmsKeyArn),MaintenanceWindow:convertCfnEnvironmentMaintenanceWindowPropertyToCloudFormation(properties.maintenanceWindow),Name:cdk().stringToCloudFormation(properties.name),SoftwareSetUpdateMode:cdk().stringToCloudFormation(properties.softwareSetUpdateMode),SoftwareSetUpdateSchedule:cdk().stringToCloudFormation(properties.softwareSetUpdateSchedule),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnEnvironmentPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("desiredSoftwareSetId","DesiredSoftwareSetId",properties.DesiredSoftwareSetId!=null?cfn_parse().FromCloudFormation.getString(properties.DesiredSoftwareSetId):void 0),ret.addPropertyResult("desktopArn","DesktopArn",properties.DesktopArn!=null?cfn_parse().FromCloudFormation.getString(properties.DesktopArn):void 0),ret.addPropertyResult("desktopEndpoint","DesktopEndpoint",properties.DesktopEndpoint!=null?cfn_parse().FromCloudFormation.getString(properties.DesktopEndpoint):void 0),ret.addPropertyResult("kmsKeyArn","KmsKeyArn",properties.KmsKeyArn!=null?cfn_parse().FromCloudFormation.getString(properties.KmsKeyArn):void 0),ret.addPropertyResult("maintenanceWindow","MaintenanceWindow",properties.MaintenanceWindow!=null?CfnEnvironmentMaintenanceWindowPropertyFromCloudFormation(properties.MaintenanceWindow):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("softwareSetUpdateMode","SoftwareSetUpdateMode",properties.SoftwareSetUpdateMode!=null?cfn_parse().FromCloudFormation.getString(properties.SoftwareSetUpdateMode):void 0),ret.addPropertyResult("softwareSetUpdateSchedule","SoftwareSetUpdateSchedule",properties.SoftwareSetUpdateSchedule!=null?cfn_parse().FromCloudFormation.getString(properties.SoftwareSetUpdateSchedule):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
