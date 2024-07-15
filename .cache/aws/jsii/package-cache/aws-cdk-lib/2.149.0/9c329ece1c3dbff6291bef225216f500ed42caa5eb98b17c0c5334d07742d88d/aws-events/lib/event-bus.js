"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventBusPolicy=exports.EventBus=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var archive_1=()=>{var tmp=require("./archive");return archive_1=()=>tmp,tmp},events_generated_1=()=>{var tmp=require("./events.generated");return events_generated_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class EventBusBase extends core_1().Resource{archive(id,props){return new(archive_1()).Archive(this,id,{sourceEventBus:this,description:props.description||`Event Archive for ${this.eventBusName} Event Bus`,eventPattern:props.eventPattern,retention:props.retention,archiveName:props.archiveName})}grantPutEventsTo(grantee){return iam().Grant.addToPrincipal({grantee,actions:["events:PutEvents"],resourceArns:[this.eventBusArn]})}}class EventBus extends EventBusBase{static fromEventBusArn(scope,id,eventBusArn){const parts=core_1().Stack.of(scope).splitArn(eventBusArn,core_1().ArnFormat.SLASH_RESOURCE_NAME);return new ImportedEventBus(scope,id,{eventBusArn,eventBusName:parts.resourceName||"",eventBusPolicy:""})}static fromEventBusName(scope,id,eventBusName){const eventBusArn=core_1().Stack.of(scope).formatArn({resource:"event-bus",service:"events",resourceName:eventBusName});return EventBus.fromEventBusAttributes(scope,id,{eventBusName,eventBusArn,eventBusPolicy:""})}static fromEventBusAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_EventBusAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromEventBusAttributes),error}return new ImportedEventBus(scope,id,attrs)}static grantPutEvents(grantee){return iam().Grant.addToPrincipal({grantee,actions:["events:PutEvents"],resourceArns:["*"]})}static grantAllPutEvents(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantAllPutEvents),error}return iam().Grant.addToPrincipal({grantee,actions:["events:PutEvents"],resourceArns:["*"]})}static eventBusProps(defaultEventBusName,props={}){const{eventBusName,eventSourceName}=props,eventBusNameRegex=/^[\/\.\-_A-Za-z0-9]{1,256}$/;if(eventBusName!==void 0&&eventSourceName!==void 0)throw new Error("'eventBusName' and 'eventSourceName' cannot both be provided");if(eventBusName!==void 0){if(!core_1().Token.isUnresolved(eventBusName)){if(eventBusName==="default")throw new Error("'eventBusName' must not be 'default'");if(eventBusName.indexOf("/")>-1)throw new Error("'eventBusName' must not contain '/'");if(!eventBusNameRegex.test(eventBusName))throw new Error(`'eventBusName' must satisfy: ${eventBusNameRegex}`)}return{eventBusName}}if(eventSourceName!==void 0){if(!core_1().Token.isUnresolved(eventSourceName)){const eventSourceNameRegex=/^aws\.partner(\/[\.\-_A-Za-z0-9]+){2,}$/;if(eventSourceNameRegex.test(eventSourceName)){if(!eventBusNameRegex.test(eventSourceName))throw new Error(`'eventSourceName' must satisfy: ${eventBusNameRegex}`)}else throw new Error(`'eventSourceName' must satisfy: ${eventSourceNameRegex}`)}return{eventBusName:eventSourceName,eventSourceName}}return{eventBusName:defaultEventBusName}}constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_EventBusProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EventBus),error}const{eventBusName,eventSourceName}=EventBus.eventBusProps(core_1().Lazy.string({produce:()=>core_1().Names.uniqueId(this)}),props);super(scope,id,{physicalName:eventBusName});const eventBus=new(events_generated_1()).CfnEventBus(this,"Resource",{name:this.physicalName,eventSourceName});this.eventBusArn=this.getResourceArnAttribute(eventBus.attrArn,{service:"events",resource:"event-bus",resourceName:eventBus.name}),this.eventBusName=this.getResourceNameAttribute(eventBus.ref),this.eventBusPolicy=eventBus.attrPolicy,this.eventSourceName=eventBus.eventSourceName}addToResourcePolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToResourcePolicy),error}if(statement.sid==null)throw new Error("Event Bus policy statements must have a sid");const statementId=`cdk-${statement.sid}`.slice(0,64);return statement.sid=statementId,{statementAdded:!0,policyDependable:new EventBusPolicy(this,statementId,{eventBus:this,statement:statement.toJSON(),statementId})}}}exports.EventBus=EventBus,_a=JSII_RTTI_SYMBOL_1,EventBus[_a]={fqn:"aws-cdk-lib.aws_events.EventBus",version:"2.149.0"};class ImportedEventBus extends EventBusBase{constructor(scope,id,attrs){const arnParts=core_1().Stack.of(scope).splitArn(attrs.eventBusArn,core_1().ArnFormat.SLASH_RESOURCE_NAME);super(scope,id,{account:arnParts.account,region:arnParts.region}),this.eventBusArn=attrs.eventBusArn,this.eventBusName=attrs.eventBusName,this.eventBusPolicy=attrs.eventBusPolicy,this.eventSourceName=attrs.eventSourceName}}class EventBusPolicy extends core_1().Resource{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_EventBusPolicyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EventBusPolicy),error}new(events_generated_1()).CfnEventBusPolicy(this,"Resource",{statementId:props.statementId,statement:props.statement,eventBusName:props.eventBus.eventBusName})}}exports.EventBusPolicy=EventBusPolicy,_b=JSII_RTTI_SYMBOL_1,EventBusPolicy[_b]={fqn:"aws-cdk-lib.aws_events.EventBusPolicy",version:"2.149.0"};
