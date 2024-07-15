"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.StepFunctionsIntegration=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},aws_1=()=>{var tmp=require("./aws");return aws_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},integration_1=()=>{var tmp=require("../integration");return integration_1=()=>tmp,tmp},model_1=()=>{var tmp=require("../model");return model_1=()=>tmp,tmp};class StepFunctionsIntegration{static startExecution(stateMachine,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_IStateMachine(stateMachine),jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_StepFunctionsExecutionIntegrationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.startExecution),error}return new StepFunctionsExecutionIntegration(stateMachine,options)}}exports.StepFunctionsIntegration=StepFunctionsIntegration,_a=JSII_RTTI_SYMBOL_1,StepFunctionsIntegration[_a]={fqn:"aws-cdk-lib.aws_apigateway.StepFunctionsIntegration",version:"2.149.0"};class StepFunctionsExecutionIntegration extends aws_1().AwsIntegration{constructor(stateMachine,options={}){super({service:"states",action:"StartSyncExecution",options:{credentialsRole:options.credentialsRole,integrationResponses:options.integrationResponses??integrationResponse(),passthroughBehavior:integration_1().PassthroughBehavior.NEVER,requestTemplates:requestTemplates(stateMachine,options),...options}}),this.stateMachine=stateMachine,this.useDefaultMethodResponses=options.useDefaultMethodResponses??!0}bind(method){const bindResult=super.bind(method),credentialsRole=bindResult.options?.credentialsRole??new(iam()).Role(method,"StartSyncExecutionRole",{assumedBy:new(iam()).ServicePrincipal("apigateway.amazonaws.com")});this.stateMachine.grantStartSyncExecution(credentialsRole);let stateMachineName;if(this.stateMachine instanceof sfn().StateMachine){if(this.stateMachine.stateMachineType!==sfn().StateMachineType.EXPRESS)throw new Error('State Machine must be of type "EXPRESS". Please use StateMachineType.EXPRESS as the stateMachineType');stateMachineName=this.stateMachine.node.defaultChild.stateMachineName}else stateMachineName=`StateMachine-${this.stateMachine.stack.node.addr}`;let deploymentToken;if(stateMachineName!==void 0&&!core_1().Token.isUnresolved(stateMachineName)&&(deploymentToken=JSON.stringify({stateMachineName})),this.useDefaultMethodResponses)for(const methodResponse of METHOD_RESPONSES)method.addMethodResponse(methodResponse);return{...bindResult,options:{...bindResult.options,credentialsRole},deploymentToken}}}function integrationResponse(){const errorResponse=[{selectionPattern:"4\\d{2}",statusCode:"400",responseTemplates:{"application/json":`{
            "error": "Bad request!"
          }`}},{selectionPattern:"5\\d{2}",statusCode:"500",responseTemplates:{"application/json":`"error": $input.path('$.error')`}}];return[{statusCode:"200",responseTemplates:{"application/json":["#set($inputRoot = $input.path('$'))",`#if($input.path('$.status').toString().equals("FAILED"))`,"#set($context.responseOverride.status = 500)","{",`"error": "$input.path('$.error')",`,`"cause": "$input.path('$.cause')"`,"}","#else","$input.path('$.output')","#end"].join(`
`)}},...errorResponse]}function requestTemplates(stateMachine,options){return{"application/json":templateString(stateMachine,options)}}function templateString(stateMachine,options){let templateStr,requestContextStr="";const includeHeader=options.headers??!1,includeQueryString=options.querystring??!0,includePath=options.path??!0,includeAuthorizer=options.authorizer??!1;return options.requestContext&&Object.keys(options.requestContext).length>0&&(requestContextStr=requestContext(options.requestContext)),templateStr=fs().readFileSync(path().join(__dirname,"stepfunctions.vtl"),{encoding:"utf-8"}),templateStr=templateStr.replace("%STATEMACHINE%",stateMachine.stateMachineArn),templateStr=templateStr.replace("%INCLUDE_HEADERS%",String(includeHeader)),templateStr=templateStr.replace("%INCLUDE_QUERYSTRING%",String(includeQueryString)),templateStr=templateStr.replace("%INCLUDE_PATH%",String(includePath)),templateStr=templateStr.replace("%INCLUDE_AUTHORIZER%",String(includeAuthorizer)),templateStr=templateStr.replace("%REQUESTCONTEXT%",requestContextStr),templateStr}function requestContext(requestContextObj){const context={accountId:requestContextObj?.accountId?"$context.identity.accountId":void 0,apiId:requestContextObj?.apiId?"$context.apiId":void 0,apiKey:requestContextObj?.apiKey?"$context.identity.apiKey":void 0,authorizerPrincipalId:requestContextObj?.authorizerPrincipalId?"$context.authorizer.principalId":void 0,caller:requestContextObj?.caller?"$context.identity.caller":void 0,cognitoAuthenticationProvider:requestContextObj?.cognitoAuthenticationProvider?"$context.identity.cognitoAuthenticationProvider":void 0,cognitoAuthenticationType:requestContextObj?.cognitoAuthenticationType?"$context.identity.cognitoAuthenticationType":void 0,cognitoIdentityId:requestContextObj?.cognitoIdentityId?"$context.identity.cognitoIdentityId":void 0,cognitoIdentityPoolId:requestContextObj?.cognitoIdentityPoolId?"$context.identity.cognitoIdentityPoolId":void 0,httpMethod:requestContextObj?.httpMethod?"$context.httpMethod":void 0,stage:requestContextObj?.stage?"$context.stage":void 0,sourceIp:requestContextObj?.sourceIp?"$context.identity.sourceIp":void 0,user:requestContextObj?.user?"$context.identity.user":void 0,userAgent:requestContextObj?.userAgent?"$context.identity.userAgent":void 0,userArn:requestContextObj?.userArn?"$context.identity.userArn":void 0,requestId:requestContextObj?.requestId?"$context.requestId":void 0,resourceId:requestContextObj?.resourceId?"$context.resourceId":void 0,resourcePath:requestContextObj?.resourcePath?"$context.resourcePath":void 0};return JSON.stringify(context).split('"').join("@@")}const METHOD_RESPONSES=[{statusCode:"200",responseModels:{"application/json":model_1().Model.EMPTY_MODEL}},{statusCode:"400",responseModels:{"application/json":model_1().Model.ERROR_MODEL}},{statusCode:"500",responseModels:{"application/json":model_1().Model.ERROR_MODEL}}];