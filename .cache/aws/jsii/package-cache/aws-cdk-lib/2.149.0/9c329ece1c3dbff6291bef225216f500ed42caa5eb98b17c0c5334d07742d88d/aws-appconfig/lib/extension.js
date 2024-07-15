"use strict";var _a,_b,_c,_d,_e,_f,_g,_h;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExtensibleBase=exports.Extension=exports.Parameter=exports.Action=exports.EventBridgeDestination=exports.SnsDestination=exports.SqsDestination=exports.LambdaDestination=exports.SourceType=exports.ActionPoint=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var appconfig_generated_1=()=>{var tmp=require("./appconfig.generated");return appconfig_generated_1=()=>tmp,tmp},hash_1=()=>{var tmp=require("./private/hash");return hash_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},ActionPoint;(function(ActionPoint2){ActionPoint2.PRE_CREATE_HOSTED_CONFIGURATION_VERSION="PRE_CREATE_HOSTED_CONFIGURATION_VERSION",ActionPoint2.PRE_START_DEPLOYMENT="PRE_START_DEPLOYMENT",ActionPoint2.ON_DEPLOYMENT_START="ON_DEPLOYMENT_START",ActionPoint2.ON_DEPLOYMENT_STEP="ON_DEPLOYMENT_STEP",ActionPoint2.ON_DEPLOYMENT_BAKING="ON_DEPLOYMENT_BAKING",ActionPoint2.ON_DEPLOYMENT_COMPLETE="ON_DEPLOYMENT_COMPLETE",ActionPoint2.ON_DEPLOYMENT_ROLLED_BACK="ON_DEPLOYMENT_ROLLED_BACK"})(ActionPoint||(exports.ActionPoint=ActionPoint={}));var SourceType;(function(SourceType2){SourceType2.LAMBDA="lambda",SourceType2.SQS="sqs",SourceType2.SNS="sns",SourceType2.EVENTS="events"})(SourceType||(exports.SourceType=SourceType={}));class LambdaDestination{constructor(func){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(func)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LambdaDestination),error}this.extensionUri=func.functionArn,this.type=SourceType.LAMBDA;const policy=new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,resources:[this.extensionUri],actions:["lambda:InvokeFunction","lambda:InvokeAsync"]});this.policyDocument=new(iam()).PolicyDocument({statements:[policy]}),func.permissionsNode.tryFindChild("AppConfigPermission")||func.addPermission("AppConfigPermission",{principal:new(iam()).ServicePrincipal("appconfig.amazonaws.com")})}}exports.LambdaDestination=LambdaDestination,_a=JSII_RTTI_SYMBOL_1,LambdaDestination[_a]={fqn:"aws-cdk-lib.aws_appconfig.LambdaDestination",version:"2.149.0"};class SqsDestination{constructor(queue){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sqs_IQueue(queue)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SqsDestination),error}this.extensionUri=queue.queueArn,this.type=SourceType.SQS;const policy=new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,resources:[this.extensionUri],actions:["sqs:SendMessage"]});this.policyDocument=new(iam()).PolicyDocument({statements:[policy]})}}exports.SqsDestination=SqsDestination,_b=JSII_RTTI_SYMBOL_1,SqsDestination[_b]={fqn:"aws-cdk-lib.aws_appconfig.SqsDestination",version:"2.149.0"};class SnsDestination{constructor(topic){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_ITopic(topic)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SnsDestination),error}this.extensionUri=topic.topicArn,this.type=SourceType.SNS;const policy=new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,resources:[this.extensionUri],actions:["sns:Publish"]});this.policyDocument=new(iam()).PolicyDocument({statements:[policy]})}}exports.SnsDestination=SnsDestination,_c=JSII_RTTI_SYMBOL_1,SnsDestination[_c]={fqn:"aws-cdk-lib.aws_appconfig.SnsDestination",version:"2.149.0"};class EventBridgeDestination{constructor(bus){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_IEventBus(bus)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EventBridgeDestination),error}this.extensionUri=bus.eventBusArn,this.type=SourceType.EVENTS}}exports.EventBridgeDestination=EventBridgeDestination,_d=JSII_RTTI_SYMBOL_1,EventBridgeDestination[_d]={fqn:"aws-cdk-lib.aws_appconfig.EventBridgeDestination",version:"2.149.0"};class Action{constructor(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ActionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Action),error}this.actionPoints=props.actionPoints,this.eventDestination=props.eventDestination,this.name=props.name,this.executionRole=props.executionRole,this.description=props.description,this.invokeWithoutExecutionRole=props.invokeWithoutExecutionRole||!1}}exports.Action=Action,_e=JSII_RTTI_SYMBOL_1,Action[_e]={fqn:"aws-cdk-lib.aws_appconfig.Action",version:"2.149.0"};class Parameter{static required(name,value,description){return new Parameter(name,!0,value,description)}static notRequired(name,value,description){return new Parameter(name,!1,value,description)}constructor(name,isRequired,value,description){this.name=name,this.isRequired=isRequired,this.value=value,this.description=description}}exports.Parameter=Parameter,_f=JSII_RTTI_SYMBOL_1,Parameter[_f]={fqn:"aws-cdk-lib.aws_appconfig.Parameter",version:"2.149.0"};class Extension extends core_1().Resource{static fromExtensionArn(scope,id,extensionArn){const parsedArn=core_1().Stack.of(scope).splitArn(extensionArn,core_1().ArnFormat.SLASH_RESOURCE_NAME);if(!parsedArn.resourceName)throw new Error(`Missing required /$/{extensionId}//$/{extensionVersionNumber} from configuration profile ARN: ${parsedArn.resourceName}`);const resourceName=parsedArn.resourceName.split("/");if(resourceName.length!=2||!resourceName[0]||!resourceName[1])throw new Error("Missing required parameters for extension ARN: format should be /$/{extensionId}//$/{extensionVersionNumber}");const extensionId=resourceName[0],extensionVersionNumber=resourceName[1];class Import extends core_1().Resource{constructor(){super(...arguments),this.extensionId=extensionId,this.extensionVersionNumber=parseInt(extensionVersionNumber),this.extensionArn=extensionArn}}return new Import(scope,id,{environmentFromArn:extensionArn})}static fromExtensionAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromExtensionAttributes),error}const stack=core_1().Stack.of(scope),extensionArn=attrs.extensionArn||stack.formatArn({service:"appconfig",resource:"extension",resourceName:`${attrs.extensionId}/${attrs.extensionVersionNumber}`});class Import extends core_1().Resource{constructor(){super(...arguments),this.extensionId=attrs.extensionId,this.extensionVersionNumber=attrs.extensionVersionNumber,this.extensionArn=extensionArn,this.name=attrs.name,this.actions=attrs.actions,this.description=attrs.description}}return new Import(scope,id,{environmentFromArn:extensionArn})}constructor(scope,id,props){super(scope,id,{physicalName:props.extensionName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Extension),error}this.actions=props.actions,this.name=props.extensionName||core_1().Names.uniqueResourceName(this,{maxLength:64,separator:"-"}),this.description=props.description,this.latestVersionNumber=props.latestVersionNumber,this.parameters=props.parameters;const resource=new(appconfig_generated_1()).CfnExtension(this,"Resource",{actions:this.actions.reduce((acc,cur,index)=>{const extensionUri=cur.eventDestination.extensionUri,sourceType=cur.eventDestination.type;this.executionRole=cur.executionRole;const name=cur.name??`${this.name}-${index}`;return cur.actionPoints.forEach(actionPoint=>{acc[actionPoint]=[{Name:name,Uri:extensionUri,...sourceType===SourceType.EVENTS||cur.invokeWithoutExecutionRole?{}:{RoleArn:this.executionRole?.roleArn||this.getExecutionRole(cur.eventDestination,name).roleArn},...cur.description?{Description:cur.description}:{}}]}),acc},{}),name:this.name,description:this.description,latestVersionNumber:this.latestVersionNumber,parameters:this.parameters?.reduce((acc,cur)=>(acc[cur.name]={required:cur.isRequired,description:cur.description},acc),{})});this._cfnExtension=resource,this.extensionId=this._cfnExtension.attrId,this.extensionVersionNumber=this._cfnExtension.attrVersionNumber,this.extensionArn=this.getResourceArnAttribute(this._cfnExtension.attrArn,{service:"appconfig",resource:"extension",resourceName:`${this.extensionId}/${this.extensionVersionNumber}`})}getExecutionRole(eventDestination,actionName){const versionNumber=this.latestVersionNumber?this.latestVersionNumber+1:1,combinedObjects=(0,hash_1().stringifyObjects)(this.name,versionNumber,actionName);return this.executionRole=new(iam()).Role(this,`Role${(0,hash_1().getHash)(combinedObjects)}`,{roleName:core_1().PhysicalName.GENERATE_IF_NEEDED,assumedBy:new(iam()).ServicePrincipal("appconfig.amazonaws.com"),inlinePolicies:{AllowAppConfigInvokeExtensionEventSourcePolicy:eventDestination.policyDocument}}),this.executionRole}}exports.Extension=Extension,_g=JSII_RTTI_SYMBOL_1,Extension[_g]={fqn:"aws-cdk-lib.aws_appconfig.Extension",version:"2.149.0"};class ExtensibleBase{constructor(scope,resourceArn,resourceName){this.resourceArn=resourceArn,this.resourceName=resourceName,this.scope=scope}on(actionPoint,eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ActionPoint(actionPoint),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.on),error}this.getExtensionForActionPoint(eventDestination,actionPoint,options)}preCreateHostedConfigurationVersion(eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.preCreateHostedConfigurationVersion),error}this.getExtensionForActionPoint(eventDestination,ActionPoint.PRE_CREATE_HOSTED_CONFIGURATION_VERSION,options)}preStartDeployment(eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.preStartDeployment),error}this.getExtensionForActionPoint(eventDestination,ActionPoint.PRE_START_DEPLOYMENT,options)}onDeploymentStart(eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.onDeploymentStart),error}this.getExtensionForActionPoint(eventDestination,ActionPoint.ON_DEPLOYMENT_START,options)}onDeploymentStep(eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.onDeploymentStep),error}this.getExtensionForActionPoint(eventDestination,ActionPoint.ON_DEPLOYMENT_STEP,options)}onDeploymentBaking(eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.onDeploymentBaking),error}this.getExtensionForActionPoint(eventDestination,ActionPoint.ON_DEPLOYMENT_BAKING,options)}onDeploymentComplete(eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.onDeploymentComplete),error}this.getExtensionForActionPoint(eventDestination,ActionPoint.ON_DEPLOYMENT_COMPLETE,options)}onDeploymentRolledBack(eventDestination,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IEventDestination(eventDestination),jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_ExtensionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.onDeploymentRolledBack),error}this.getExtensionForActionPoint(eventDestination,ActionPoint.ON_DEPLOYMENT_ROLLED_BACK,options)}addExtension(extension){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appconfig_IExtension(extension)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addExtension),error}this.addExtensionAssociation(extension)}getExtensionForActionPoint(eventDestination,actionPoint,options){const name=options?.extensionName||this.getExtensionDefaultName(),versionNumber=options?.latestVersionNumber?options?.latestVersionNumber+1:1,extension=new Extension(this.scope,`Extension${this.getExtensionHash(name,versionNumber)}`,{actions:[new Action({eventDestination,actionPoints:[actionPoint]})],extensionName:name,...options?.description?{description:options.description}:{},...options?.latestVersionNumber?{latestVersionNumber:options.latestVersionNumber}:{},...options?.parameters?{parameters:options.parameters}:{}});this.addExtensionAssociation(extension)}addExtensionAssociation(extension){const versionNumber=extension?.latestVersionNumber?extension?.latestVersionNumber+1:1,name=extension.name??this.getExtensionDefaultName();new(appconfig_generated_1()).CfnExtensionAssociation(this.scope,`AssociationResource${this.getExtensionAssociationHash(name,versionNumber)}`,{extensionIdentifier:extension.extensionId,resourceIdentifier:this.resourceArn,extensionVersionNumber:extension.extensionVersionNumber,parameters:extension.parameters?.reduce((acc,cur)=>(cur.value&&(acc[cur.name]=cur.value),acc),{})})}getExtensionHash(name,versionNumber){const combinedString=(0,hash_1().stringifyObjects)(name,versionNumber);return(0,hash_1().getHash)(combinedString)}getExtensionAssociationHash(name,versionNumber){const resourceIdentifier=this.resourceName??this.resourceArn,combinedString=(0,hash_1().stringifyObjects)(resourceIdentifier,name,versionNumber);return(0,hash_1().getHash)(combinedString)}getExtensionDefaultName(){return core_1().Names.uniqueResourceName(this.scope,{maxLength:54,separator:"-"})+"-Extension"}}exports.ExtensibleBase=ExtensibleBase,_h=JSII_RTTI_SYMBOL_1,ExtensibleBase[_h]={fqn:"aws-cdk-lib.aws_appconfig.ExtensibleBase",version:"2.149.0"};