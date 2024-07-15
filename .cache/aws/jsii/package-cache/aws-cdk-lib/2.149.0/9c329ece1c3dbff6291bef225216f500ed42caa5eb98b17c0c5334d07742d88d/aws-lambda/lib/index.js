"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)};Object.defineProperty(exports,"__esModule",{value:!0});var _noFold;exports.AdotLayerVersion=void 0,Object.defineProperty(exports,_noFold="AdotLayerVersion",{enumerable:!0,configurable:!0,get:()=>require("./adot-layers").AdotLayerVersion}),exports.AdotLambdaExecWrapper=void 0,Object.defineProperty(exports,_noFold="AdotLambdaExecWrapper",{enumerable:!0,configurable:!0,get:()=>require("./adot-layers").AdotLambdaExecWrapper}),exports.AdotLambdaLayerJavaSdkVersion=void 0,Object.defineProperty(exports,_noFold="AdotLambdaLayerJavaSdkVersion",{enumerable:!0,configurable:!0,get:()=>require("./adot-layers").AdotLambdaLayerJavaSdkVersion}),exports.AdotLambdaLayerJavaAutoInstrumentationVersion=void 0,Object.defineProperty(exports,_noFold="AdotLambdaLayerJavaAutoInstrumentationVersion",{enumerable:!0,configurable:!0,get:()=>require("./adot-layers").AdotLambdaLayerJavaAutoInstrumentationVersion}),exports.AdotLambdaLayerPythonSdkVersion=void 0,Object.defineProperty(exports,_noFold="AdotLambdaLayerPythonSdkVersion",{enumerable:!0,configurable:!0,get:()=>require("./adot-layers").AdotLambdaLayerPythonSdkVersion}),exports.AdotLambdaLayerJavaScriptSdkVersion=void 0,Object.defineProperty(exports,_noFold="AdotLambdaLayerJavaScriptSdkVersion",{enumerable:!0,configurable:!0,get:()=>require("./adot-layers").AdotLambdaLayerJavaScriptSdkVersion}),exports.AdotLambdaLayerGenericVersion=void 0,Object.defineProperty(exports,_noFold="AdotLambdaLayerGenericVersion",{enumerable:!0,configurable:!0,get:()=>require("./adot-layers").AdotLambdaLayerGenericVersion}),exports.Alias=void 0,Object.defineProperty(exports,_noFold="Alias",{enumerable:!0,configurable:!0,get:()=>require("./alias").Alias}),exports.FunctionBase=void 0,Object.defineProperty(exports,_noFold="FunctionBase",{enumerable:!0,configurable:!0,get:()=>require("./function-base").FunctionBase}),exports.QualifiedFunctionBase=void 0,Object.defineProperty(exports,_noFold="QualifiedFunctionBase",{enumerable:!0,configurable:!0,get:()=>require("./function-base").QualifiedFunctionBase}),exports.Tracing=void 0,Object.defineProperty(exports,_noFold="Tracing",{enumerable:!0,configurable:!0,get:()=>require("./function").Tracing}),exports.SystemLogLevel=void 0,Object.defineProperty(exports,_noFold="SystemLogLevel",{enumerable:!0,configurable:!0,get:()=>require("./function").SystemLogLevel}),exports.ApplicationLogLevel=void 0,Object.defineProperty(exports,_noFold="ApplicationLogLevel",{enumerable:!0,configurable:!0,get:()=>require("./function").ApplicationLogLevel}),exports.LogFormat=void 0,Object.defineProperty(exports,_noFold="LogFormat",{enumerable:!0,configurable:!0,get:()=>require("./function").LogFormat}),exports.LoggingFormat=void 0,Object.defineProperty(exports,_noFold="LoggingFormat",{enumerable:!0,configurable:!0,get:()=>require("./function").LoggingFormat}),exports.Function=void 0,Object.defineProperty(exports,_noFold="Function",{enumerable:!0,configurable:!0,get:()=>require("./function").Function}),exports.verifyCodeConfig=void 0,Object.defineProperty(exports,_noFold="verifyCodeConfig",{enumerable:!0,configurable:!0,get:()=>require("./function").verifyCodeConfig}),exports.FunctionVersionUpgrade=void 0,Object.defineProperty(exports,_noFold="FunctionVersionUpgrade",{enumerable:!0,configurable:!0,get:()=>require("./function").FunctionVersionUpgrade}),exports.Handler=void 0,Object.defineProperty(exports,_noFold="Handler",{enumerable:!0,configurable:!0,get:()=>require("./handler").Handler}),exports.DockerImageCode=void 0,Object.defineProperty(exports,_noFold="DockerImageCode",{enumerable:!0,configurable:!0,get:()=>require("./image-function").DockerImageCode}),exports.DockerImageFunction=void 0,Object.defineProperty(exports,_noFold="DockerImageFunction",{enumerable:!0,configurable:!0,get:()=>require("./image-function").DockerImageFunction}),exports.LayerVersion=void 0,Object.defineProperty(exports,_noFold="LayerVersion",{enumerable:!0,configurable:!0,get:()=>require("./layers").LayerVersion}),exports.RuntimeFamily=void 0,Object.defineProperty(exports,_noFold="RuntimeFamily",{enumerable:!0,configurable:!0,get:()=>require("./runtime").RuntimeFamily}),exports.Runtime=void 0,Object.defineProperty(exports,_noFold="Runtime",{enumerable:!0,configurable:!0,get:()=>require("./runtime").Runtime}),exports.determineLatestNodeRuntime=void 0,Object.defineProperty(exports,_noFold="determineLatestNodeRuntime",{enumerable:!0,configurable:!0,get:()=>require("./runtime").determineLatestNodeRuntime}),exports.Code=void 0,Object.defineProperty(exports,_noFold="Code",{enumerable:!0,configurable:!0,get:()=>require("./code").Code}),exports.S3Code=void 0,Object.defineProperty(exports,_noFold="S3Code",{enumerable:!0,configurable:!0,get:()=>require("./code").S3Code}),exports.InlineCode=void 0,Object.defineProperty(exports,_noFold="InlineCode",{enumerable:!0,configurable:!0,get:()=>require("./code").InlineCode}),exports.AssetCode=void 0,Object.defineProperty(exports,_noFold="AssetCode",{enumerable:!0,configurable:!0,get:()=>require("./code").AssetCode}),exports.CfnParametersCode=void 0,Object.defineProperty(exports,_noFold="CfnParametersCode",{enumerable:!0,configurable:!0,get:()=>require("./code").CfnParametersCode}),exports.EcrImageCode=void 0,Object.defineProperty(exports,_noFold="EcrImageCode",{enumerable:!0,configurable:!0,get:()=>require("./code").EcrImageCode}),exports.AssetImageCode=void 0,Object.defineProperty(exports,_noFold="AssetImageCode",{enumerable:!0,configurable:!0,get:()=>require("./code").AssetImageCode}),exports.FileSystem=void 0,Object.defineProperty(exports,_noFold="FileSystem",{enumerable:!0,configurable:!0,get:()=>require("./filesystem").FileSystem}),exports.Version=void 0,Object.defineProperty(exports,_noFold="Version",{enumerable:!0,configurable:!0,get:()=>require("./lambda-version").Version}),exports.extractQualifierFromArn=void 0,Object.defineProperty(exports,_noFold="extractQualifierFromArn",{enumerable:!0,configurable:!0,get:()=>require("./lambda-version").extractQualifierFromArn}),exports.SingletonFunction=void 0,Object.defineProperty(exports,_noFold="SingletonFunction",{enumerable:!0,configurable:!0,get:()=>require("./singleton-lambda").SingletonFunction}),exports.SourceAccessConfigurationType=void 0,Object.defineProperty(exports,_noFold="SourceAccessConfigurationType",{enumerable:!0,configurable:!0,get:()=>require("./event-source-mapping").SourceAccessConfigurationType}),exports.EventSourceMapping=void 0,Object.defineProperty(exports,_noFold="EventSourceMapping",{enumerable:!0,configurable:!0,get:()=>require("./event-source-mapping").EventSourceMapping}),exports.StartingPosition=void 0,Object.defineProperty(exports,_noFold="StartingPosition",{enumerable:!0,configurable:!0,get:()=>require("./event-source-mapping").StartingPosition}),exports.FilterRule=void 0,Object.defineProperty(exports,_noFold="FilterRule",{enumerable:!0,configurable:!0,get:()=>require("./event-source-filter").FilterRule}),exports.FilterCriteria=void 0,Object.defineProperty(exports,_noFold="FilterCriteria",{enumerable:!0,configurable:!0,get:()=>require("./event-source-filter").FilterCriteria}),exports.DestinationType=void 0,Object.defineProperty(exports,_noFold="DestinationType",{enumerable:!0,configurable:!0,get:()=>require("./destination").DestinationType}),exports.EventInvokeConfig=void 0,Object.defineProperty(exports,_noFold="EventInvokeConfig",{enumerable:!0,configurable:!0,get:()=>require("./event-invoke-config").EventInvokeConfig}),exports.UntrustedArtifactOnDeployment=void 0,Object.defineProperty(exports,_noFold="UntrustedArtifactOnDeployment",{enumerable:!0,configurable:!0,get:()=>require("./code-signing-config").UntrustedArtifactOnDeployment}),exports.CodeSigningConfig=void 0,Object.defineProperty(exports,_noFold="CodeSigningConfig",{enumerable:!0,configurable:!0,get:()=>require("./code-signing-config").CodeSigningConfig}),exports.LambdaInsightsVersion=void 0,Object.defineProperty(exports,_noFold="LambdaInsightsVersion",{enumerable:!0,configurable:!0,get:()=>require("./lambda-insights").LambdaInsightsVersion}),exports.LogRetention=void 0,Object.defineProperty(exports,_noFold="LogRetention",{enumerable:!0,configurable:!0,get:()=>require("./log-retention").LogRetention}),exports.Architecture=void 0,Object.defineProperty(exports,_noFold="Architecture",{enumerable:!0,configurable:!0,get:()=>require("./architecture").Architecture}),exports.FunctionUrlAuthType=void 0,Object.defineProperty(exports,_noFold="FunctionUrlAuthType",{enumerable:!0,configurable:!0,get:()=>require("./function-url").FunctionUrlAuthType}),exports.InvokeMode=void 0,Object.defineProperty(exports,_noFold="InvokeMode",{enumerable:!0,configurable:!0,get:()=>require("./function-url").InvokeMode}),exports.HttpMethod=void 0,Object.defineProperty(exports,_noFold="HttpMethod",{enumerable:!0,configurable:!0,get:()=>require("./function-url").HttpMethod}),exports.FunctionUrl=void 0,Object.defineProperty(exports,_noFold="FunctionUrl",{enumerable:!0,configurable:!0,get:()=>require("./function-url").FunctionUrl}),exports.RuntimeManagementMode=void 0,Object.defineProperty(exports,_noFold="RuntimeManagementMode",{enumerable:!0,configurable:!0,get:()=>require("./runtime-management").RuntimeManagementMode}),exports.ParamsAndSecretsVersions=void 0,Object.defineProperty(exports,_noFold="ParamsAndSecretsVersions",{enumerable:!0,configurable:!0,get:()=>require("./params-and-secrets-layers").ParamsAndSecretsVersions}),exports.ParamsAndSecretsLogLevel=void 0,Object.defineProperty(exports,_noFold="ParamsAndSecretsLogLevel",{enumerable:!0,configurable:!0,get:()=>require("./params-and-secrets-layers").ParamsAndSecretsLogLevel}),exports.ParamsAndSecretsLayerVersion=void 0,Object.defineProperty(exports,_noFold="ParamsAndSecretsLayerVersion",{enumerable:!0,configurable:!0,get:()=>require("./params-and-secrets-layers").ParamsAndSecretsLayerVersion}),exports.SnapStartConf=void 0,Object.defineProperty(exports,_noFold="SnapStartConf",{enumerable:!0,configurable:!0,get:()=>require("./snapstart-config").SnapStartConf}),exports.CfnAlias=void 0,Object.defineProperty(exports,_noFold="CfnAlias",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnAlias}),exports.CfnCodeSigningConfig=void 0,Object.defineProperty(exports,_noFold="CfnCodeSigningConfig",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnCodeSigningConfig}),exports.CfnEventInvokeConfig=void 0,Object.defineProperty(exports,_noFold="CfnEventInvokeConfig",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnEventInvokeConfig}),exports.CfnEventSourceMapping=void 0,Object.defineProperty(exports,_noFold="CfnEventSourceMapping",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnEventSourceMapping}),exports.CfnFunction=void 0,Object.defineProperty(exports,_noFold="CfnFunction",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnFunction}),exports.CfnLayerVersion=void 0,Object.defineProperty(exports,_noFold="CfnLayerVersion",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnLayerVersion}),exports.CfnLayerVersionPermission=void 0,Object.defineProperty(exports,_noFold="CfnLayerVersionPermission",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnLayerVersionPermission}),exports.CfnPermission=void 0,Object.defineProperty(exports,_noFold="CfnPermission",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnPermission}),exports.CfnUrl=void 0,Object.defineProperty(exports,_noFold="CfnUrl",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnUrl}),exports.CfnVersion=void 0,Object.defineProperty(exports,_noFold="CfnVersion",{enumerable:!0,configurable:!0,get:()=>require("./lambda.generated").CfnVersion}),require("./lambda-augmentations.generated");