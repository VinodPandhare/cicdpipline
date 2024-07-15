"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HttpMethod=exports.Connection=exports.HttpParameter=exports.Authorization=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var events_generated_1=()=>{var tmp=require("./events.generated");return events_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class Authorization{static apiKey(apiKeyName,apiKeyValue){try{jsiiDeprecationWarnings().aws_cdk_lib_SecretValue(apiKeyValue)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.apiKey),error}return new class extends Authorization{_bind(){return{authorizationType:AuthorizationType.API_KEY,authParameters:{apiKeyAuthParameters:{apiKeyName,apiKeyValue:apiKeyValue.unsafeUnwrap()}}}}}}static basic(username,password){try{jsiiDeprecationWarnings().aws_cdk_lib_SecretValue(password)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.basic),error}return new class extends Authorization{_bind(){return{authorizationType:AuthorizationType.BASIC,authParameters:{basicAuthParameters:{username,password:password.unsafeUnwrap()}}}}}}static oauth(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_OAuthAuthorizationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.oauth),error}if(![HttpMethod.POST,HttpMethod.GET,HttpMethod.PUT].includes(props.httpMethod))throw new Error("httpMethod must be one of GET, POST, PUT");return new class extends Authorization{_bind(){return{authorizationType:AuthorizationType.OAUTH_CLIENT_CREDENTIALS,authParameters:{oAuthParameters:{authorizationEndpoint:props.authorizationEndpoint,clientParameters:{clientId:props.clientId,clientSecret:props.clientSecret.unsafeUnwrap()},httpMethod:props.httpMethod,oAuthHttpParameters:{bodyParameters:renderHttpParameters(props.bodyParameters),headerParameters:renderHttpParameters(props.headerParameters),queryStringParameters:renderHttpParameters(props.queryStringParameters)}}}}}}}}exports.Authorization=Authorization,_a=JSII_RTTI_SYMBOL_1,Authorization[_a]={fqn:"aws-cdk-lib.aws_events.Authorization",version:"2.149.0"};class HttpParameter{static fromString(value){return new class extends HttpParameter{_render(name){return{key:name,value,isValueSecret:!1}}}}static fromSecret(value){try{jsiiDeprecationWarnings().aws_cdk_lib_SecretValue(value)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromSecret),error}return new class extends HttpParameter{_render(name){return{key:name,value:value.unsafeUnwrap(),isValueSecret:!0}}}}}exports.HttpParameter=HttpParameter,_b=JSII_RTTI_SYMBOL_1,HttpParameter[_b]={fqn:"aws-cdk-lib.aws_events.HttpParameter",version:"2.149.0"};class Connection extends core_1().Resource{static fromEventBusArn(scope,id,connectionArn,connectionSecretArn){const parts=core_1().Stack.of(scope).parseArn(connectionArn);return new ImportedConnection(scope,id,{connectionArn,connectionName:parts.resourceName||"",connectionSecretArn})}static fromConnectionAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_ConnectionAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromConnectionAttributes),error}return new ImportedConnection(scope,id,attrs)}constructor(scope,id,props){super(scope,id,{physicalName:props.connectionName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_ConnectionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Connection),error}const authBind=props.authorization._bind(),invocationHttpParameters=props.headerParameters||props.queryStringParameters||props.bodyParameters?{bodyParameters:renderHttpParameters(props.bodyParameters),headerParameters:renderHttpParameters(props.headerParameters),queryStringParameters:renderHttpParameters(props.queryStringParameters)}:void 0;let connection=new(events_generated_1()).CfnConnection(this,"Connection",{authorizationType:authBind.authorizationType,authParameters:{...authBind.authParameters,invocationHttpParameters},description:props.description,name:this.physicalName});this.connectionName=this.getResourceNameAttribute(connection.ref),this.connectionArn=connection.attrArn,this.connectionSecretArn=connection.attrSecretArn}}exports.Connection=Connection,_c=JSII_RTTI_SYMBOL_1,Connection[_c]={fqn:"aws-cdk-lib.aws_events.Connection",version:"2.149.0"};class ImportedConnection extends core_1().Resource{constructor(scope,id,attrs){const arnParts=core_1().Stack.of(scope).parseArn(attrs.connectionArn);super(scope,id,{account:arnParts.account,region:arnParts.region}),this.connectionArn=attrs.connectionArn,this.connectionName=attrs.connectionName,this.connectionSecretArn=attrs.connectionSecretArn}}var HttpMethod;(function(HttpMethod2){HttpMethod2.POST="POST",HttpMethod2.GET="GET",HttpMethod2.HEAD="HEAD",HttpMethod2.OPTIONS="OPTIONS",HttpMethod2.PUT="PUT",HttpMethod2.PATCH="PATCH",HttpMethod2.DELETE="DELETE"})(HttpMethod||(exports.HttpMethod=HttpMethod={}));var AuthorizationType;(function(AuthorizationType2){AuthorizationType2.API_KEY="API_KEY",AuthorizationType2.BASIC="BASIC",AuthorizationType2.OAUTH_CLIENT_CREDENTIALS="OAUTH_CLIENT_CREDENTIALS"})(AuthorizationType||(AuthorizationType={}));function renderHttpParameters(ps){if(!(!ps||Object.keys(ps).length===0))return Object.entries(ps).map(([name,p])=>p._render(name))}
