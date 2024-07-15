"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)};Object.defineProperty(exports,"__esModule",{value:!0});var _noFold;exports.RestApiBase=void 0,Object.defineProperty(exports,_noFold="RestApiBase",{enumerable:!0,configurable:!0,get:()=>require("./restapi").RestApiBase}),exports.SpecRestApi=void 0,Object.defineProperty(exports,_noFold="SpecRestApi",{enumerable:!0,configurable:!0,get:()=>require("./restapi").SpecRestApi}),exports.RestApi=void 0,Object.defineProperty(exports,_noFold="RestApi",{enumerable:!0,configurable:!0,get:()=>require("./restapi").RestApi}),exports.ApiKeySourceType=void 0,Object.defineProperty(exports,_noFold="ApiKeySourceType",{enumerable:!0,configurable:!0,get:()=>require("./restapi").ApiKeySourceType}),exports.EndpointType=void 0,Object.defineProperty(exports,_noFold="EndpointType",{enumerable:!0,configurable:!0,get:()=>require("./restapi").EndpointType}),exports.ResourceBase=void 0,Object.defineProperty(exports,_noFold="ResourceBase",{enumerable:!0,configurable:!0,get:()=>require("./resource").ResourceBase}),exports.Resource=void 0,Object.defineProperty(exports,_noFold="Resource",{enumerable:!0,configurable:!0,get:()=>require("./resource").Resource}),exports.ProxyResource=void 0,Object.defineProperty(exports,_noFold="ProxyResource",{enumerable:!0,configurable:!0,get:()=>require("./resource").ProxyResource}),exports.Method=void 0,Object.defineProperty(exports,_noFold="Method",{enumerable:!0,configurable:!0,get:()=>require("./method").Method}),exports.AuthorizationType=void 0,Object.defineProperty(exports,_noFold="AuthorizationType",{enumerable:!0,configurable:!0,get:()=>require("./method").AuthorizationType}),exports.Integration=void 0,Object.defineProperty(exports,_noFold="Integration",{enumerable:!0,configurable:!0,get:()=>require("./integration").Integration}),exports.ContentHandling=void 0,Object.defineProperty(exports,_noFold="ContentHandling",{enumerable:!0,configurable:!0,get:()=>require("./integration").ContentHandling}),exports.IntegrationType=void 0,Object.defineProperty(exports,_noFold="IntegrationType",{enumerable:!0,configurable:!0,get:()=>require("./integration").IntegrationType}),exports.PassthroughBehavior=void 0,Object.defineProperty(exports,_noFold="PassthroughBehavior",{enumerable:!0,configurable:!0,get:()=>require("./integration").PassthroughBehavior}),exports.ConnectionType=void 0,Object.defineProperty(exports,_noFold="ConnectionType",{enumerable:!0,configurable:!0,get:()=>require("./integration").ConnectionType}),exports.Deployment=void 0,Object.defineProperty(exports,_noFold="Deployment",{enumerable:!0,configurable:!0,get:()=>require("./deployment").Deployment}),exports.MethodLoggingLevel=void 0,Object.defineProperty(exports,_noFold="MethodLoggingLevel",{enumerable:!0,configurable:!0,get:()=>require("./stage").MethodLoggingLevel}),exports.StageBase=void 0,Object.defineProperty(exports,_noFold="StageBase",{enumerable:!0,configurable:!0,get:()=>require("./stage").StageBase}),exports.Stage=void 0,Object.defineProperty(exports,_noFold="Stage",{enumerable:!0,configurable:!0,get:()=>require("./stage").Stage}),exports.AwsIntegration=void 0,Object.defineProperty(exports,_noFold="AwsIntegration",{enumerable:!0,configurable:!0,get:()=>require("./integrations").AwsIntegration}),exports.LambdaIntegration=void 0,Object.defineProperty(exports,_noFold="LambdaIntegration",{enumerable:!0,configurable:!0,get:()=>require("./integrations").LambdaIntegration}),exports.HttpIntegration=void 0,Object.defineProperty(exports,_noFold="HttpIntegration",{enumerable:!0,configurable:!0,get:()=>require("./integrations").HttpIntegration}),exports.MockIntegration=void 0,Object.defineProperty(exports,_noFold="MockIntegration",{enumerable:!0,configurable:!0,get:()=>require("./integrations").MockIntegration}),exports.StepFunctionsIntegration=void 0,Object.defineProperty(exports,_noFold="StepFunctionsIntegration",{enumerable:!0,configurable:!0,get:()=>require("./integrations").StepFunctionsIntegration}),exports.SagemakerIntegration=void 0,Object.defineProperty(exports,_noFold="SagemakerIntegration",{enumerable:!0,configurable:!0,get:()=>require("./integrations").SagemakerIntegration}),exports.LambdaRestApi=void 0,Object.defineProperty(exports,_noFold="LambdaRestApi",{enumerable:!0,configurable:!0,get:()=>require("./lambda-api").LambdaRestApi}),exports.ApiKey=void 0,Object.defineProperty(exports,_noFold="ApiKey",{enumerable:!0,configurable:!0,get:()=>require("./api-key").ApiKey}),exports.RateLimitedApiKey=void 0,Object.defineProperty(exports,_noFold="RateLimitedApiKey",{enumerable:!0,configurable:!0,get:()=>require("./api-key").RateLimitedApiKey}),exports.Period=void 0,Object.defineProperty(exports,_noFold="Period",{enumerable:!0,configurable:!0,get:()=>require("./usage-plan").Period}),exports.UsagePlan=void 0,Object.defineProperty(exports,_noFold="UsagePlan",{enumerable:!0,configurable:!0,get:()=>require("./usage-plan").UsagePlan}),exports.VpcLink=void 0,Object.defineProperty(exports,_noFold="VpcLink",{enumerable:!0,configurable:!0,get:()=>require("./vpc-link").VpcLink}),exports.EmptyModel=void 0,Object.defineProperty(exports,_noFold="EmptyModel",{enumerable:!0,configurable:!0,get:()=>require("./model").EmptyModel}),exports.ErrorModel=void 0,Object.defineProperty(exports,_noFold="ErrorModel",{enumerable:!0,configurable:!0,get:()=>require("./model").ErrorModel}),exports.Model=void 0,Object.defineProperty(exports,_noFold="Model",{enumerable:!0,configurable:!0,get:()=>require("./model").Model}),exports.RequestValidator=void 0,Object.defineProperty(exports,_noFold="RequestValidator",{enumerable:!0,configurable:!0,get:()=>require("./requestvalidator").RequestValidator}),exports.Authorizer=void 0,Object.defineProperty(exports,_noFold="Authorizer",{enumerable:!0,configurable:!0,get:()=>require("./authorizer").Authorizer}),exports.JsonSchemaVersion=void 0,Object.defineProperty(exports,_noFold="JsonSchemaVersion",{enumerable:!0,configurable:!0,get:()=>require("./json-schema").JsonSchemaVersion}),exports.JsonSchemaType=void 0,Object.defineProperty(exports,_noFold="JsonSchemaType",{enumerable:!0,configurable:!0,get:()=>require("./json-schema").JsonSchemaType}),exports.SecurityPolicy=void 0,Object.defineProperty(exports,_noFold="SecurityPolicy",{enumerable:!0,configurable:!0,get:()=>require("./domain-name").SecurityPolicy}),exports.DomainName=void 0,Object.defineProperty(exports,_noFold="DomainName",{enumerable:!0,configurable:!0,get:()=>require("./domain-name").DomainName}),exports.BasePathMapping=void 0,Object.defineProperty(exports,_noFold="BasePathMapping",{enumerable:!0,configurable:!0,get:()=>require("./base-path-mapping").BasePathMapping}),exports.Cors=void 0,Object.defineProperty(exports,_noFold="Cors",{enumerable:!0,configurable:!0,get:()=>require("./cors").Cors}),exports.TokenAuthorizer=void 0,Object.defineProperty(exports,_noFold="TokenAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./authorizers").TokenAuthorizer}),exports.RequestAuthorizer=void 0,Object.defineProperty(exports,_noFold="RequestAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./authorizers").RequestAuthorizer}),exports.IdentitySource=void 0,Object.defineProperty(exports,_noFold="IdentitySource",{enumerable:!0,configurable:!0,get:()=>require("./authorizers").IdentitySource}),exports.CognitoUserPoolsAuthorizer=void 0,Object.defineProperty(exports,_noFold="CognitoUserPoolsAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./authorizers").CognitoUserPoolsAuthorizer}),exports.LogGroupLogDestination=void 0,Object.defineProperty(exports,_noFold="LogGroupLogDestination",{enumerable:!0,configurable:!0,get:()=>require("./access-log").LogGroupLogDestination}),exports.FirehoseLogDestination=void 0,Object.defineProperty(exports,_noFold="FirehoseLogDestination",{enumerable:!0,configurable:!0,get:()=>require("./access-log").FirehoseLogDestination}),exports.AccessLogField=void 0,Object.defineProperty(exports,_noFold="AccessLogField",{enumerable:!0,configurable:!0,get:()=>require("./access-log").AccessLogField}),exports.AccessLogFormat=void 0,Object.defineProperty(exports,_noFold="AccessLogFormat",{enumerable:!0,configurable:!0,get:()=>require("./access-log").AccessLogFormat}),exports.ApiDefinition=void 0,Object.defineProperty(exports,_noFold="ApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./api-definition").ApiDefinition}),exports.S3ApiDefinition=void 0,Object.defineProperty(exports,_noFold="S3ApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./api-definition").S3ApiDefinition}),exports.InlineApiDefinition=void 0,Object.defineProperty(exports,_noFold="InlineApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./api-definition").InlineApiDefinition}),exports.AssetApiDefinition=void 0,Object.defineProperty(exports,_noFold="AssetApiDefinition",{enumerable:!0,configurable:!0,get:()=>require("./api-definition").AssetApiDefinition}),exports.GatewayResponse=void 0,Object.defineProperty(exports,_noFold="GatewayResponse",{enumerable:!0,configurable:!0,get:()=>require("./gateway-response").GatewayResponse}),exports.ResponseType=void 0,Object.defineProperty(exports,_noFold="ResponseType",{enumerable:!0,configurable:!0,get:()=>require("./gateway-response").ResponseType}),exports.StepFunctionsRestApi=void 0,Object.defineProperty(exports,_noFold="StepFunctionsRestApi",{enumerable:!0,configurable:!0,get:()=>require("./stepfunctions-api").StepFunctionsRestApi}),exports.CfnAccount=void 0,Object.defineProperty(exports,_noFold="CfnAccount",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnAccount}),exports.CfnApiKey=void 0,Object.defineProperty(exports,_noFold="CfnApiKey",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnApiKey}),exports.CfnAuthorizer=void 0,Object.defineProperty(exports,_noFold="CfnAuthorizer",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnAuthorizer}),exports.CfnBasePathMapping=void 0,Object.defineProperty(exports,_noFold="CfnBasePathMapping",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnBasePathMapping}),exports.CfnClientCertificate=void 0,Object.defineProperty(exports,_noFold="CfnClientCertificate",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnClientCertificate}),exports.CfnDeployment=void 0,Object.defineProperty(exports,_noFold="CfnDeployment",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnDeployment}),exports.CfnDocumentationPart=void 0,Object.defineProperty(exports,_noFold="CfnDocumentationPart",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnDocumentationPart}),exports.CfnDocumentationVersion=void 0,Object.defineProperty(exports,_noFold="CfnDocumentationVersion",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnDocumentationVersion}),exports.CfnDomainName=void 0,Object.defineProperty(exports,_noFold="CfnDomainName",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnDomainName}),exports.CfnGatewayResponse=void 0,Object.defineProperty(exports,_noFold="CfnGatewayResponse",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnGatewayResponse}),exports.CfnMethod=void 0,Object.defineProperty(exports,_noFold="CfnMethod",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnMethod}),exports.CfnModel=void 0,Object.defineProperty(exports,_noFold="CfnModel",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnModel}),exports.CfnRequestValidator=void 0,Object.defineProperty(exports,_noFold="CfnRequestValidator",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnRequestValidator}),exports.CfnResource=void 0,Object.defineProperty(exports,_noFold="CfnResource",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnResource}),exports.CfnRestApi=void 0,Object.defineProperty(exports,_noFold="CfnRestApi",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnRestApi}),exports.CfnStage=void 0,Object.defineProperty(exports,_noFold="CfnStage",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnStage}),exports.CfnUsagePlan=void 0,Object.defineProperty(exports,_noFold="CfnUsagePlan",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnUsagePlan}),exports.CfnUsagePlanKey=void 0,Object.defineProperty(exports,_noFold="CfnUsagePlanKey",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnUsagePlanKey}),exports.CfnVpcLink=void 0,Object.defineProperty(exports,_noFold="CfnVpcLink",{enumerable:!0,configurable:!0,get:()=>require("./apigateway.generated").CfnVpcLink}),exports.CfnApiV2=void 0,Object.defineProperty(exports,_noFold="CfnApiV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnApiV2}),exports.CfnApiMappingV2=void 0,Object.defineProperty(exports,_noFold="CfnApiMappingV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnApiMappingV2}),exports.CfnAuthorizerV2=void 0,Object.defineProperty(exports,_noFold="CfnAuthorizerV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnAuthorizerV2}),exports.CfnDeploymentV2=void 0,Object.defineProperty(exports,_noFold="CfnDeploymentV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnDeploymentV2}),exports.CfnDomainNameV2=void 0,Object.defineProperty(exports,_noFold="CfnDomainNameV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnDomainNameV2}),exports.CfnIntegrationV2=void 0,Object.defineProperty(exports,_noFold="CfnIntegrationV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnIntegrationV2}),exports.CfnIntegrationResponseV2=void 0,Object.defineProperty(exports,_noFold="CfnIntegrationResponseV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnIntegrationResponseV2}),exports.CfnModelV2=void 0,Object.defineProperty(exports,_noFold="CfnModelV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnModelV2}),exports.CfnRouteV2=void 0,Object.defineProperty(exports,_noFold="CfnRouteV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnRouteV2}),exports.CfnRouteResponseV2=void 0,Object.defineProperty(exports,_noFold="CfnRouteResponseV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnRouteResponseV2}),exports.CfnStageV2=void 0,Object.defineProperty(exports,_noFold="CfnStageV2",{enumerable:!0,configurable:!0,get:()=>require("./apigatewayv2").CfnStageV2});
