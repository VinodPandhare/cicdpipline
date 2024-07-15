"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnScalingPlan=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp};class CfnScalingPlan extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnScalingPlanPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new Error("Unexpected IResolvable");const ret=new CfnScalingPlan(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnScalingPlan.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscalingplans_CfnScalingPlanProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnScalingPlan),error}cdk().requireProperty(props,"applicationSource",this),cdk().requireProperty(props,"scalingInstructions",this),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.attrScalingPlanName=cdk().Token.asString(this.getAtt("ScalingPlanName",cdk().ResolutionTypeHint.STRING)),this.attrScalingPlanVersion=cdk().Token.asString(this.getAtt("ScalingPlanVersion",cdk().ResolutionTypeHint.STRING)),this.applicationSource=props.applicationSource,this.scalingInstructions=props.scalingInstructions}get cfnProperties(){return{applicationSource:this.applicationSource,scalingInstructions:this.scalingInstructions}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnScalingPlan.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnScalingPlanPropsToCloudFormation(props)}}exports.CfnScalingPlan=CfnScalingPlan,_a=JSII_RTTI_SYMBOL_1,CfnScalingPlan[_a]={fqn:"aws-cdk-lib.aws_autoscalingplans.CfnScalingPlan",version:"2.149.0"},CfnScalingPlan.CFN_RESOURCE_TYPE_NAME="AWS::AutoScalingPlans::ScalingPlan";function CfnScalingPlanTagFilterPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("key",cdk().requiredValidator)(properties.key)),errors.collect(cdk().propertyValidator("key",cdk().validateString)(properties.key)),errors.collect(cdk().propertyValidator("values",cdk().listValidator(cdk().validateString))(properties.values)),errors.wrap('supplied properties not correct for "TagFilterProperty"')}function convertCfnScalingPlanTagFilterPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanTagFilterPropertyValidator(properties).assertSuccess(),{Key:cdk().stringToCloudFormation(properties.key),Values:cdk().listMapper(cdk().stringToCloudFormation)(properties.values)}):properties}function CfnScalingPlanTagFilterPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("key","Key",properties.Key!=null?cfn_parse().FromCloudFormation.getString(properties.Key):void 0),ret.addPropertyResult("values","Values",properties.Values!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Values):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanApplicationSourcePropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("cloudFormationStackArn",cdk().validateString)(properties.cloudFormationStackArn)),errors.collect(cdk().propertyValidator("tagFilters",cdk().listValidator(CfnScalingPlanTagFilterPropertyValidator))(properties.tagFilters)),errors.wrap('supplied properties not correct for "ApplicationSourceProperty"')}function convertCfnScalingPlanApplicationSourcePropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanApplicationSourcePropertyValidator(properties).assertSuccess(),{CloudFormationStackARN:cdk().stringToCloudFormation(properties.cloudFormationStackArn),TagFilters:cdk().listMapper(convertCfnScalingPlanTagFilterPropertyToCloudFormation)(properties.tagFilters)}):properties}function CfnScalingPlanApplicationSourcePropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("cloudFormationStackArn","CloudFormationStackARN",properties.CloudFormationStackARN!=null?cfn_parse().FromCloudFormation.getString(properties.CloudFormationStackARN):void 0),ret.addPropertyResult("tagFilters","TagFilters",properties.TagFilters!=null?cfn_parse().FromCloudFormation.getArray(CfnScalingPlanTagFilterPropertyFromCloudFormation)(properties.TagFilters):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanPredefinedScalingMetricSpecificationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("predefinedScalingMetricType",cdk().requiredValidator)(properties.predefinedScalingMetricType)),errors.collect(cdk().propertyValidator("predefinedScalingMetricType",cdk().validateString)(properties.predefinedScalingMetricType)),errors.collect(cdk().propertyValidator("resourceLabel",cdk().validateString)(properties.resourceLabel)),errors.wrap('supplied properties not correct for "PredefinedScalingMetricSpecificationProperty"')}function convertCfnScalingPlanPredefinedScalingMetricSpecificationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanPredefinedScalingMetricSpecificationPropertyValidator(properties).assertSuccess(),{PredefinedScalingMetricType:cdk().stringToCloudFormation(properties.predefinedScalingMetricType),ResourceLabel:cdk().stringToCloudFormation(properties.resourceLabel)}):properties}function CfnScalingPlanPredefinedScalingMetricSpecificationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("predefinedScalingMetricType","PredefinedScalingMetricType",properties.PredefinedScalingMetricType!=null?cfn_parse().FromCloudFormation.getString(properties.PredefinedScalingMetricType):void 0),ret.addPropertyResult("resourceLabel","ResourceLabel",properties.ResourceLabel!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceLabel):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanMetricDimensionPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("value",cdk().requiredValidator)(properties.value)),errors.collect(cdk().propertyValidator("value",cdk().validateString)(properties.value)),errors.wrap('supplied properties not correct for "MetricDimensionProperty"')}function convertCfnScalingPlanMetricDimensionPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanMetricDimensionPropertyValidator(properties).assertSuccess(),{Name:cdk().stringToCloudFormation(properties.name),Value:cdk().stringToCloudFormation(properties.value)}):properties}function CfnScalingPlanMetricDimensionPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("value","Value",properties.Value!=null?cfn_parse().FromCloudFormation.getString(properties.Value):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanCustomizedScalingMetricSpecificationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("dimensions",cdk().listValidator(CfnScalingPlanMetricDimensionPropertyValidator))(properties.dimensions)),errors.collect(cdk().propertyValidator("metricName",cdk().requiredValidator)(properties.metricName)),errors.collect(cdk().propertyValidator("metricName",cdk().validateString)(properties.metricName)),errors.collect(cdk().propertyValidator("namespace",cdk().requiredValidator)(properties.namespace)),errors.collect(cdk().propertyValidator("namespace",cdk().validateString)(properties.namespace)),errors.collect(cdk().propertyValidator("statistic",cdk().requiredValidator)(properties.statistic)),errors.collect(cdk().propertyValidator("statistic",cdk().validateString)(properties.statistic)),errors.collect(cdk().propertyValidator("unit",cdk().validateString)(properties.unit)),errors.wrap('supplied properties not correct for "CustomizedScalingMetricSpecificationProperty"')}function convertCfnScalingPlanCustomizedScalingMetricSpecificationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanCustomizedScalingMetricSpecificationPropertyValidator(properties).assertSuccess(),{Dimensions:cdk().listMapper(convertCfnScalingPlanMetricDimensionPropertyToCloudFormation)(properties.dimensions),MetricName:cdk().stringToCloudFormation(properties.metricName),Namespace:cdk().stringToCloudFormation(properties.namespace),Statistic:cdk().stringToCloudFormation(properties.statistic),Unit:cdk().stringToCloudFormation(properties.unit)}):properties}function CfnScalingPlanCustomizedScalingMetricSpecificationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("dimensions","Dimensions",properties.Dimensions!=null?cfn_parse().FromCloudFormation.getArray(CfnScalingPlanMetricDimensionPropertyFromCloudFormation)(properties.Dimensions):void 0),ret.addPropertyResult("metricName","MetricName",properties.MetricName!=null?cfn_parse().FromCloudFormation.getString(properties.MetricName):void 0),ret.addPropertyResult("namespace","Namespace",properties.Namespace!=null?cfn_parse().FromCloudFormation.getString(properties.Namespace):void 0),ret.addPropertyResult("statistic","Statistic",properties.Statistic!=null?cfn_parse().FromCloudFormation.getString(properties.Statistic):void 0),ret.addPropertyResult("unit","Unit",properties.Unit!=null?cfn_parse().FromCloudFormation.getString(properties.Unit):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanTargetTrackingConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("customizedScalingMetricSpecification",CfnScalingPlanCustomizedScalingMetricSpecificationPropertyValidator)(properties.customizedScalingMetricSpecification)),errors.collect(cdk().propertyValidator("disableScaleIn",cdk().validateBoolean)(properties.disableScaleIn)),errors.collect(cdk().propertyValidator("estimatedInstanceWarmup",cdk().validateNumber)(properties.estimatedInstanceWarmup)),errors.collect(cdk().propertyValidator("predefinedScalingMetricSpecification",CfnScalingPlanPredefinedScalingMetricSpecificationPropertyValidator)(properties.predefinedScalingMetricSpecification)),errors.collect(cdk().propertyValidator("scaleInCooldown",cdk().validateNumber)(properties.scaleInCooldown)),errors.collect(cdk().propertyValidator("scaleOutCooldown",cdk().validateNumber)(properties.scaleOutCooldown)),errors.collect(cdk().propertyValidator("targetValue",cdk().requiredValidator)(properties.targetValue)),errors.collect(cdk().propertyValidator("targetValue",cdk().validateNumber)(properties.targetValue)),errors.wrap('supplied properties not correct for "TargetTrackingConfigurationProperty"')}function convertCfnScalingPlanTargetTrackingConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanTargetTrackingConfigurationPropertyValidator(properties).assertSuccess(),{CustomizedScalingMetricSpecification:convertCfnScalingPlanCustomizedScalingMetricSpecificationPropertyToCloudFormation(properties.customizedScalingMetricSpecification),DisableScaleIn:cdk().booleanToCloudFormation(properties.disableScaleIn),EstimatedInstanceWarmup:cdk().numberToCloudFormation(properties.estimatedInstanceWarmup),PredefinedScalingMetricSpecification:convertCfnScalingPlanPredefinedScalingMetricSpecificationPropertyToCloudFormation(properties.predefinedScalingMetricSpecification),ScaleInCooldown:cdk().numberToCloudFormation(properties.scaleInCooldown),ScaleOutCooldown:cdk().numberToCloudFormation(properties.scaleOutCooldown),TargetValue:cdk().numberToCloudFormation(properties.targetValue)}):properties}function CfnScalingPlanTargetTrackingConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("customizedScalingMetricSpecification","CustomizedScalingMetricSpecification",properties.CustomizedScalingMetricSpecification!=null?CfnScalingPlanCustomizedScalingMetricSpecificationPropertyFromCloudFormation(properties.CustomizedScalingMetricSpecification):void 0),ret.addPropertyResult("disableScaleIn","DisableScaleIn",properties.DisableScaleIn!=null?cfn_parse().FromCloudFormation.getBoolean(properties.DisableScaleIn):void 0),ret.addPropertyResult("estimatedInstanceWarmup","EstimatedInstanceWarmup",properties.EstimatedInstanceWarmup!=null?cfn_parse().FromCloudFormation.getNumber(properties.EstimatedInstanceWarmup):void 0),ret.addPropertyResult("predefinedScalingMetricSpecification","PredefinedScalingMetricSpecification",properties.PredefinedScalingMetricSpecification!=null?CfnScalingPlanPredefinedScalingMetricSpecificationPropertyFromCloudFormation(properties.PredefinedScalingMetricSpecification):void 0),ret.addPropertyResult("scaleInCooldown","ScaleInCooldown",properties.ScaleInCooldown!=null?cfn_parse().FromCloudFormation.getNumber(properties.ScaleInCooldown):void 0),ret.addPropertyResult("scaleOutCooldown","ScaleOutCooldown",properties.ScaleOutCooldown!=null?cfn_parse().FromCloudFormation.getNumber(properties.ScaleOutCooldown):void 0),ret.addPropertyResult("targetValue","TargetValue",properties.TargetValue!=null?cfn_parse().FromCloudFormation.getNumber(properties.TargetValue):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanCustomizedLoadMetricSpecificationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("dimensions",cdk().listValidator(CfnScalingPlanMetricDimensionPropertyValidator))(properties.dimensions)),errors.collect(cdk().propertyValidator("metricName",cdk().requiredValidator)(properties.metricName)),errors.collect(cdk().propertyValidator("metricName",cdk().validateString)(properties.metricName)),errors.collect(cdk().propertyValidator("namespace",cdk().requiredValidator)(properties.namespace)),errors.collect(cdk().propertyValidator("namespace",cdk().validateString)(properties.namespace)),errors.collect(cdk().propertyValidator("statistic",cdk().requiredValidator)(properties.statistic)),errors.collect(cdk().propertyValidator("statistic",cdk().validateString)(properties.statistic)),errors.collect(cdk().propertyValidator("unit",cdk().validateString)(properties.unit)),errors.wrap('supplied properties not correct for "CustomizedLoadMetricSpecificationProperty"')}function convertCfnScalingPlanCustomizedLoadMetricSpecificationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanCustomizedLoadMetricSpecificationPropertyValidator(properties).assertSuccess(),{Dimensions:cdk().listMapper(convertCfnScalingPlanMetricDimensionPropertyToCloudFormation)(properties.dimensions),MetricName:cdk().stringToCloudFormation(properties.metricName),Namespace:cdk().stringToCloudFormation(properties.namespace),Statistic:cdk().stringToCloudFormation(properties.statistic),Unit:cdk().stringToCloudFormation(properties.unit)}):properties}function CfnScalingPlanCustomizedLoadMetricSpecificationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("dimensions","Dimensions",properties.Dimensions!=null?cfn_parse().FromCloudFormation.getArray(CfnScalingPlanMetricDimensionPropertyFromCloudFormation)(properties.Dimensions):void 0),ret.addPropertyResult("metricName","MetricName",properties.MetricName!=null?cfn_parse().FromCloudFormation.getString(properties.MetricName):void 0),ret.addPropertyResult("namespace","Namespace",properties.Namespace!=null?cfn_parse().FromCloudFormation.getString(properties.Namespace):void 0),ret.addPropertyResult("statistic","Statistic",properties.Statistic!=null?cfn_parse().FromCloudFormation.getString(properties.Statistic):void 0),ret.addPropertyResult("unit","Unit",properties.Unit!=null?cfn_parse().FromCloudFormation.getString(properties.Unit):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanPredefinedLoadMetricSpecificationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("predefinedLoadMetricType",cdk().requiredValidator)(properties.predefinedLoadMetricType)),errors.collect(cdk().propertyValidator("predefinedLoadMetricType",cdk().validateString)(properties.predefinedLoadMetricType)),errors.collect(cdk().propertyValidator("resourceLabel",cdk().validateString)(properties.resourceLabel)),errors.wrap('supplied properties not correct for "PredefinedLoadMetricSpecificationProperty"')}function convertCfnScalingPlanPredefinedLoadMetricSpecificationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanPredefinedLoadMetricSpecificationPropertyValidator(properties).assertSuccess(),{PredefinedLoadMetricType:cdk().stringToCloudFormation(properties.predefinedLoadMetricType),ResourceLabel:cdk().stringToCloudFormation(properties.resourceLabel)}):properties}function CfnScalingPlanPredefinedLoadMetricSpecificationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("predefinedLoadMetricType","PredefinedLoadMetricType",properties.PredefinedLoadMetricType!=null?cfn_parse().FromCloudFormation.getString(properties.PredefinedLoadMetricType):void 0),ret.addPropertyResult("resourceLabel","ResourceLabel",properties.ResourceLabel!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceLabel):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanScalingInstructionPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("customizedLoadMetricSpecification",CfnScalingPlanCustomizedLoadMetricSpecificationPropertyValidator)(properties.customizedLoadMetricSpecification)),errors.collect(cdk().propertyValidator("disableDynamicScaling",cdk().validateBoolean)(properties.disableDynamicScaling)),errors.collect(cdk().propertyValidator("maxCapacity",cdk().requiredValidator)(properties.maxCapacity)),errors.collect(cdk().propertyValidator("maxCapacity",cdk().validateNumber)(properties.maxCapacity)),errors.collect(cdk().propertyValidator("minCapacity",cdk().requiredValidator)(properties.minCapacity)),errors.collect(cdk().propertyValidator("minCapacity",cdk().validateNumber)(properties.minCapacity)),errors.collect(cdk().propertyValidator("predefinedLoadMetricSpecification",CfnScalingPlanPredefinedLoadMetricSpecificationPropertyValidator)(properties.predefinedLoadMetricSpecification)),errors.collect(cdk().propertyValidator("predictiveScalingMaxCapacityBehavior",cdk().validateString)(properties.predictiveScalingMaxCapacityBehavior)),errors.collect(cdk().propertyValidator("predictiveScalingMaxCapacityBuffer",cdk().validateNumber)(properties.predictiveScalingMaxCapacityBuffer)),errors.collect(cdk().propertyValidator("predictiveScalingMode",cdk().validateString)(properties.predictiveScalingMode)),errors.collect(cdk().propertyValidator("resourceId",cdk().requiredValidator)(properties.resourceId)),errors.collect(cdk().propertyValidator("resourceId",cdk().validateString)(properties.resourceId)),errors.collect(cdk().propertyValidator("scalableDimension",cdk().requiredValidator)(properties.scalableDimension)),errors.collect(cdk().propertyValidator("scalableDimension",cdk().validateString)(properties.scalableDimension)),errors.collect(cdk().propertyValidator("scalingPolicyUpdateBehavior",cdk().validateString)(properties.scalingPolicyUpdateBehavior)),errors.collect(cdk().propertyValidator("scheduledActionBufferTime",cdk().validateNumber)(properties.scheduledActionBufferTime)),errors.collect(cdk().propertyValidator("serviceNamespace",cdk().requiredValidator)(properties.serviceNamespace)),errors.collect(cdk().propertyValidator("serviceNamespace",cdk().validateString)(properties.serviceNamespace)),errors.collect(cdk().propertyValidator("targetTrackingConfigurations",cdk().requiredValidator)(properties.targetTrackingConfigurations)),errors.collect(cdk().propertyValidator("targetTrackingConfigurations",cdk().listValidator(CfnScalingPlanTargetTrackingConfigurationPropertyValidator))(properties.targetTrackingConfigurations)),errors.wrap('supplied properties not correct for "ScalingInstructionProperty"')}function convertCfnScalingPlanScalingInstructionPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanScalingInstructionPropertyValidator(properties).assertSuccess(),{CustomizedLoadMetricSpecification:convertCfnScalingPlanCustomizedLoadMetricSpecificationPropertyToCloudFormation(properties.customizedLoadMetricSpecification),DisableDynamicScaling:cdk().booleanToCloudFormation(properties.disableDynamicScaling),MaxCapacity:cdk().numberToCloudFormation(properties.maxCapacity),MinCapacity:cdk().numberToCloudFormation(properties.minCapacity),PredefinedLoadMetricSpecification:convertCfnScalingPlanPredefinedLoadMetricSpecificationPropertyToCloudFormation(properties.predefinedLoadMetricSpecification),PredictiveScalingMaxCapacityBehavior:cdk().stringToCloudFormation(properties.predictiveScalingMaxCapacityBehavior),PredictiveScalingMaxCapacityBuffer:cdk().numberToCloudFormation(properties.predictiveScalingMaxCapacityBuffer),PredictiveScalingMode:cdk().stringToCloudFormation(properties.predictiveScalingMode),ResourceId:cdk().stringToCloudFormation(properties.resourceId),ScalableDimension:cdk().stringToCloudFormation(properties.scalableDimension),ScalingPolicyUpdateBehavior:cdk().stringToCloudFormation(properties.scalingPolicyUpdateBehavior),ScheduledActionBufferTime:cdk().numberToCloudFormation(properties.scheduledActionBufferTime),ServiceNamespace:cdk().stringToCloudFormation(properties.serviceNamespace),TargetTrackingConfigurations:cdk().listMapper(convertCfnScalingPlanTargetTrackingConfigurationPropertyToCloudFormation)(properties.targetTrackingConfigurations)}):properties}function CfnScalingPlanScalingInstructionPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("customizedLoadMetricSpecification","CustomizedLoadMetricSpecification",properties.CustomizedLoadMetricSpecification!=null?CfnScalingPlanCustomizedLoadMetricSpecificationPropertyFromCloudFormation(properties.CustomizedLoadMetricSpecification):void 0),ret.addPropertyResult("disableDynamicScaling","DisableDynamicScaling",properties.DisableDynamicScaling!=null?cfn_parse().FromCloudFormation.getBoolean(properties.DisableDynamicScaling):void 0),ret.addPropertyResult("maxCapacity","MaxCapacity",properties.MaxCapacity!=null?cfn_parse().FromCloudFormation.getNumber(properties.MaxCapacity):void 0),ret.addPropertyResult("minCapacity","MinCapacity",properties.MinCapacity!=null?cfn_parse().FromCloudFormation.getNumber(properties.MinCapacity):void 0),ret.addPropertyResult("predefinedLoadMetricSpecification","PredefinedLoadMetricSpecification",properties.PredefinedLoadMetricSpecification!=null?CfnScalingPlanPredefinedLoadMetricSpecificationPropertyFromCloudFormation(properties.PredefinedLoadMetricSpecification):void 0),ret.addPropertyResult("predictiveScalingMaxCapacityBehavior","PredictiveScalingMaxCapacityBehavior",properties.PredictiveScalingMaxCapacityBehavior!=null?cfn_parse().FromCloudFormation.getString(properties.PredictiveScalingMaxCapacityBehavior):void 0),ret.addPropertyResult("predictiveScalingMaxCapacityBuffer","PredictiveScalingMaxCapacityBuffer",properties.PredictiveScalingMaxCapacityBuffer!=null?cfn_parse().FromCloudFormation.getNumber(properties.PredictiveScalingMaxCapacityBuffer):void 0),ret.addPropertyResult("predictiveScalingMode","PredictiveScalingMode",properties.PredictiveScalingMode!=null?cfn_parse().FromCloudFormation.getString(properties.PredictiveScalingMode):void 0),ret.addPropertyResult("resourceId","ResourceId",properties.ResourceId!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceId):void 0),ret.addPropertyResult("scalableDimension","ScalableDimension",properties.ScalableDimension!=null?cfn_parse().FromCloudFormation.getString(properties.ScalableDimension):void 0),ret.addPropertyResult("scalingPolicyUpdateBehavior","ScalingPolicyUpdateBehavior",properties.ScalingPolicyUpdateBehavior!=null?cfn_parse().FromCloudFormation.getString(properties.ScalingPolicyUpdateBehavior):void 0),ret.addPropertyResult("scheduledActionBufferTime","ScheduledActionBufferTime",properties.ScheduledActionBufferTime!=null?cfn_parse().FromCloudFormation.getNumber(properties.ScheduledActionBufferTime):void 0),ret.addPropertyResult("serviceNamespace","ServiceNamespace",properties.ServiceNamespace!=null?cfn_parse().FromCloudFormation.getString(properties.ServiceNamespace):void 0),ret.addPropertyResult("targetTrackingConfigurations","TargetTrackingConfigurations",properties.TargetTrackingConfigurations!=null?cfn_parse().FromCloudFormation.getArray(CfnScalingPlanTargetTrackingConfigurationPropertyFromCloudFormation)(properties.TargetTrackingConfigurations):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnScalingPlanPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("applicationSource",cdk().requiredValidator)(properties.applicationSource)),errors.collect(cdk().propertyValidator("applicationSource",CfnScalingPlanApplicationSourcePropertyValidator)(properties.applicationSource)),errors.collect(cdk().propertyValidator("scalingInstructions",cdk().requiredValidator)(properties.scalingInstructions)),errors.collect(cdk().propertyValidator("scalingInstructions",cdk().listValidator(CfnScalingPlanScalingInstructionPropertyValidator))(properties.scalingInstructions)),errors.wrap('supplied properties not correct for "CfnScalingPlanProps"')}function convertCfnScalingPlanPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnScalingPlanPropsValidator(properties).assertSuccess(),{ApplicationSource:convertCfnScalingPlanApplicationSourcePropertyToCloudFormation(properties.applicationSource),ScalingInstructions:cdk().listMapper(convertCfnScalingPlanScalingInstructionPropertyToCloudFormation)(properties.scalingInstructions)}):properties}function CfnScalingPlanPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("applicationSource","ApplicationSource",properties.ApplicationSource!=null?CfnScalingPlanApplicationSourcePropertyFromCloudFormation(properties.ApplicationSource):void 0),ret.addPropertyResult("scalingInstructions","ScalingInstructions",properties.ScalingInstructions!=null?cfn_parse().FromCloudFormation.getArray(CfnScalingPlanScalingInstructionPropertyFromCloudFormation)(properties.ScalingInstructions):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}