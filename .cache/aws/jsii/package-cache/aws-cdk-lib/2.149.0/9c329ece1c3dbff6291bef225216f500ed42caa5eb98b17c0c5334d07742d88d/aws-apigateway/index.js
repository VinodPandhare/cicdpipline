"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)};Object.defineProperty(exports,"__esModule",{value:!0});var _noFold;exports.RestApiBase=void 0,Object.defineProperty(exports,_noFold="RestApiBase",{enumerable:!0,configurable:!0,get:()=>require("./lib").RestApiBase}),exports.SpecRestApi=void 0,Object.defineProperty(exports,_noFold="SpecRestApi",{enumerable:!0,configurable:!0,get:()=>require("./lib").SpecRestApi}),exports.RestApi=void 0,Object.defineProperty(exports,_noFold="RestApi",{enumerable:!0,configurable:!0,get:()=>require("./lib").RestApi}),exports.ApiKeySourceType=void 0,Object.defineProperty(exports,_noFold="ApiKeySourceType",{enumerable:!0,configurable:!0,get:()=>require("./lib").ApiKeySourceType}),exports.EndpointType=void 0,Object.defineProperty(exports,_noFold="EndpointType",{enumerable:!0,configurable:!0,get:()=>require("./lib").EndpointType}),exports.ResourceBase=void 0,Object.defineProperty(exports,_noFold="ResourceBase",{enumerable:!0,configurable:!0,get:()=>require("./lib").ResourceBase}),exports.Resource=void 0,Object.defineProperty(exports,_noFold="Resource",{enumerable:!0,configurable:!0,get:()=>require("./lib").Resource}),exports.ProxyResource=void 0,Object.defineProperty(exports,_noFold="ProxyResource",{enumerable:!0,configurable:!0,get:()=>require("./lib").ProxyResource}),exports.Method=void 0,Object.defineProperty(exports,_noFold="Method",{enumerable:!0,configurable:!0,get:()=>require("./lib").Method}),exports.AuthorizationType=void 0,Object.defineProperty(exports,_noFold="AuthorizationType",{enumerable:!0,configurable:!0,get:()=>require("./lib").AuthorizationType}),exports.Integration=void 0,Object.defineProperty(exports,_noFold="Integration",{enumerable:!0,configurable:!0,get:()=>require("./lib").Integration}),exports.ContentHandling=void 0,Object.defineProperty(exports,_noFold="ContentHandling",{enumerable:!0,configurable:!0,get:()=>require("./lib").ContentHandling}),exports.IntegrationType=void 0,Object.defineProperty(exports,_noFold="IntegrationType",{enumerable:!0,configurable:!0,get:()=>require("./lib").IntegrationType}),exports.PassthroughBehavior=void 0,Object.defineProperty(exports,_noFold="PassthroughBehavior",{enumerable:!0,configurable:!0,get:()=>require("./lib").PassthroughBehavior}),exports.ConnectionType=void 0,Object.defineProperty(exports,_noFold="ConnectionType",{enumerable:!0,configurable:!0,get:()=>require("./lib").ConnectionType}),exports.Deployment=void 0,Object.defineProperty(exports,_noFold="Deployment",{enumerable:!0,configurable:!0,get:()=>require("./lib").Deployment}),exports.MethodLoggingLevel=void 0,Object.defineProperty(exports,_noFold="MethodLoggingLevel",{enumerable:!0,configurable:!0,get:()=>require("./lib").MethodLoggingLevel}),exports.StageBase=void 0,Object.defineProperty(exports,_noFold="StageBase",{enumerable:!0,configurable:!0,get:()=>require("./lib").StageBase}),exports.Stage=void 0,Object.defineProperty(exports,_noFold="Stage",{enumerable:!0,configurable:!0,get:()=>require("./lib").Stage}),exports.AwsIntegration=void 0,Object.defineProperty(exports,_noFold="AwsIntegration",{enumerable:!0,configurable:!0,get:()=>require("./lib").AwsIntegration}),exports.LambdaIntegration=void 0,Object.defineProperty(exports,_noFold="LambdaIntegration",{enumerable:!0,configurable:!0,get:()=>require("./lib").LambdaIntegration}),exports.HttpIntegration=void 0,Object.defineProperty(exports,_noFold="HttpIntegration",{enumerable:!0,configurable:!0,get:()=>require("./lib").HttpIntegration}),exports.MockIntegration=void 0,Object.defineProperty(exports,_noFold="MockIntegration",{enumerable:!0,configurable:!0,get:()=>require("./lib").MockIntegration}),exports.StepFunctionsIntegration=void 0,Object.defineProperty(exports,_noFold="StepFunctionsIntegration",{enumerable:!0,configurable:!0,get:()=>require("./lib").StepFunctionsIntegration}),exports.SagemakerIntegration=void 0,Object.defineProperty(exports,_noFold="SagemakerIntegration",{enumerable:!0,configurable:!0,get:()=>require("./lib").SagemakerIntegration}),exports.LambdaRestApi=void 0,Object.defineProperty(exports,_noFold="LambdaRestApi",{enumerable:!0,configurable:!0,get:()=>require("./lib").LambdaRestApi}),exports.ApiKey=void 0,Object.defineProperty(exports,_noFold="ApiKey",{enumerable:!0,configurable:!0,get:()=>require("./lib").ApiKey}),exports.RateLimitedApiKey=void 0,Object.defineProperty(exports,_noFold="RateLimitedApiKey",{enumerable:!0,configurable:!0,get:()=>require("./lib").RateLimitedApiKey}),exports.Period=void 0,Object.defineProperty(exports,_noFold="Period",{enumerable:!0,configurable:!0,get:()=>require("./lib").Period}),exports.UsagePlan=void 0,Object.defineProperty(exports,_noFold="UsagePlan",{enumerable:!0,configurable:!0,get:()=>require("./lib").UsagePlan}),exports.VpcLink=void 0,Object.defineProperty(exports,_noFold="VpcLink",{enumerable:!0,configurable:!0,get:()=>require("./lib").VpcLink}),exports.EmptyModel=void 0,Object.defineProperty(exports,_noFold="EmptyModel",{enumerable:!0,configurable:!0,get:()=>require("./lib").EmptyModel}),exports.ErrorModel=void 0,Object.defineProperty(exports,_noFold="ErrorModel",{enumerable:!0,configurable:!0,get:()=>require("./lib").ErrorModel}),exports.Model=void 0,Object.defineProperty(exports,_noFold="Model",{enumerable:!0,configurable:!0,get:()=>require("./lib").Model}),exports.RequestValidator=void 0,Object.defineProperty(exports,_noFold="RequestValidator",{enumerable:!0,configurable:!0,get:()=>require("./lib").RequestValidator}),exports.Authorizer=void 0,Object.defineProperty(exports,_noFold="Authorizer",{enumerable:!0,configurable:!0,get:()=>require("./lib").Authorizer}),exports.JsonSchemaVersion=void 0,Object.defineProperty(exports,_noFold="JsonSchemaVersion",{enumerable:!0,configurable:!0,get:()=>require("./lib").JsonSchemaVersion}),exports.JsonSchemaType=void 0,Object.defineProperty(exports,_noFold="JsonSchemaType",{enumerable:!0,configurable:!0,get:()=>require("./lib").JsonSchemaType}),exports.SecurityPolicy=void 0,Object.defineProperty(exports,_noFold="SecurityPolicy",{enumerable:!0,configurable:!0,get:()=>require("./lib").SecurityPolicy}),exports.DomainName=void 0,Object.defineProperty(exports,_noFold="DomainName",{enumerable:!0,configurable:!0,get:()=>require("./lib").DomainName}),exports.BasePathMapping=void 0,Object.defineProperty(exports,_noFold="BasePathMapping",{enumerable:!0,configurable:!0,get:()=>require("./lib").BasePathMapping}),exports.Cors=void 0,Object.defineProperty(exports,_noFold="Cors",{enumerable:!0,configurable:!0,get:()=>require("./lib").Cors}),exports.TokenAuthorizer=void 0,Object.defineProperty(exports,_noFold="TokenAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./lib").TokenAuthorizer}),exports.RequestAuthorizer=void 0,Object.defineProperty(exports,_noFold="RequestAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./lib").RequestAuthorizer}),exports.IdentitySource=void 0,Object.defineProperty(exports,_noFold="IdentitySource",{enumerable:!0,configurable:!0,get:()=>require("./lib").IdentitySource}),exports.CognitoUserPoolsAuthorizer=void 0,Object.defineProperty(exports,_noFold="CognitoUserPoolsAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./lib").CognitoUserPoolsAuthorizer}),exports.LogGroupLogDestination=void 0,Object.defineProperty(exports,_noFold="LogGroupLogDestination",{enumerable:!0,configurable:!0,get:()=>require("./lib").LogGroupLogDestination}),exports.FirehoseLogDestination=void 0,Object.defineProperty(exports,_noFold="FirehoseLogDestination",{enumerable:!0,configurable:!0,get:()=>require("./lib").FirehoseLogDestination}),exports.AccessLogField=void 0,Object.defineProperty(exports,_noFold="AccessLogField",{enumerable:!0,configurable:!0,get:()=>require("./lib").AccessLogField}),exports.AccessLogFormat=void 0,Object.defineProperty(exports,_noFold="AccessLogFormat",{enumerable:!0,configurable:!0,get:()=>require("./lib").AccessLogFormat}),exports.ApiDefinition=void 0,Object.defineProperty(exports,_noFold="ApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./lib").ApiDefinition}),exports.S3ApiDefinition=void 0,Object.defineProperty(exports,_noFold="S3ApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./lib").S3ApiDefinition}),exports.InlineApiDefinition=void 0,Object.defineProperty(exports,_noFold="InlineApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./lib").InlineApiDefinition}),exports.AssetApiDefinition=void 0,Object.defineProperty(exports,_noFold="AssetApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./lib").AssetApiDefinition}),exports.GatewayResponse=void 0,Object.defineProperty(exports,_noFold="GatewayResponse",{enumerable:!0,configurable:!0,get:()=>require("./lib").GatewayResponse}),exports.ResponseType=void 0,Object.defineProperty(exports,_noFold="ResponseType",{enumerable:!0,configurable:!0,get:()=>require("./lib").ResponseType}),exports.StepFunctionsRestApi=void 0,Object.defineProperty(exports,_noFold="StepFunctionsRestApi",{enumerable:!0,configurable:!0,get:()=>require("./lib").StepFunctionsRestApi}),exports.CfnAccount=void 0,Object.defineProperty(exports,_noFold="CfnAccount",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnAccount}),exports.CfnApiKey=void 0,Object.defineProperty(exports,_noFold="CfnApiKey",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnApiKey}),exports.CfnAuthorizer=void 0,Object.defineProperty(exports,_noFold="CfnAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnAuthorizer}),exports.CfnBasePathMapping=void 0,Object.defineProperty(exports,_noFold="CfnBasePathMapping",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnBasePathMapping}),exports.CfnClientCertificate=void 0,Object.defineProperty(exports,_noFold="CfnClientCertificate",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnClientCertificate}),exports.CfnDeployment=void 0,Object.defineProperty(exports,_noFold="CfnDeployment",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnDeployment}),exports.CfnDocumentationPart=void 0,Object.defineProperty(exports,_noFold="CfnDocumentationPart",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnDocumentationPart}),exports.CfnDocumentationVersion=void 0,Object.defineProperty(exports,_noFold="CfnDocumentationVersion",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnDocumentationVersion}),exports.CfnDomainName=void 0,Object.defineProperty(exports,_noFold="CfnDomainName",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnDomainName}),exports.CfnGatewayResponse=void 0,Object.defineProperty(exports,_noFold="CfnGatewayResponse",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnGatewayResponse}),exports.CfnMethod=void 0,Object.defineProperty(exports,_noFold="CfnMethod",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnMethod}),exports.CfnModel=void 0,Object.defineProperty(exports,_noFold="CfnModel",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnModel}),exports.CfnRequestValidator=void 0,Object.defineProperty(exports,_noFold="CfnRequestValidator",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnRequestValidator}),exports.CfnResource=void 0,Object.defineProperty(exports,_noFold="CfnResource",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnResource}),exports.CfnRestApi=void 0,Object.defineProperty(exports,_noFold="CfnRestApi",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnRestApi}),exports.CfnStage=void 0,Object.defineProperty(exports,_noFold="CfnStage",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnStage}),exports.CfnUsagePlan=void 0,Object.defineProperty(exports,_noFold="CfnUsagePlan",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnUsagePlan}),exports.CfnUsagePlanKey=void 0,Object.defineProperty(exports,_noFold="CfnUsagePlanKey",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnUsagePlanKey}),exports.CfnVpcLink=void 0,Object.defineProperty(exports,_noFold="CfnVpcLink",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnVpcLink}),exports.CfnApiV2=void 0,Object.defineProperty(exports,_noFold="CfnApiV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnApiV2}),exports.CfnApiMappingV2=void 0,Object.defineProperty(exports,_noFold="CfnApiMappingV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnApiMappingV2}),exports.CfnAuthorizerV2=void 0,Object.defineProperty(exports,_noFold="CfnAuthorizerV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnAuthorizerV2}),exports.CfnDeploymentV2=void 0,Object.defineProperty(exports,_noFold="CfnDeploymentV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnDeploymentV2}),exports.CfnDomainNameV2=void 0,Object.defineProperty(exports,_noFold="CfnDomainNameV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnDomainNameV2}),exports.CfnIntegrationV2=void 0,Object.defineProperty(exports,_noFold="CfnIntegrationV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnIntegrationV2}),exports.CfnIntegrationResponseV2=void 0,Object.defineProperty(exports,_noFold="CfnIntegrationResponseV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnIntegrationResponseV2}),exports.CfnModelV2=void 0,Object.defineProperty(exports,_noFold="CfnModelV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnModelV2}),exports.CfnRouteV2=void 0,Object.defineProperty(exports,_noFold="CfnRouteV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnRouteV2}),exports.CfnRouteResponseV2=void 0,Object.defineProperty(exports,_noFold="CfnRouteResponseV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnRouteResponseV2}),exports.CfnStageV2=void 0,Object.defineProperty(exports,_noFold="CfnStageV2",{enumerable:!0,configurable:!0,get:()=>require("./lib").CfnStageV2});