"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HttpLambdaIntegration=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var aws_apigatewayv2_1=()=>{var tmp=require("../../../aws-apigatewayv2");return aws_apigatewayv2_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};class HttpLambdaIntegration extends aws_apigatewayv2_1().HttpRouteIntegration{constructor(id,handler,props={}){super(id),this.handler=handler,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(handler),jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_integrations_HttpLambdaIntegrationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,HttpLambdaIntegration),error}this._id=id}completeBind(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_HttpRouteIntegrationBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.completeBind),error}const route=options.route;this.handler.addPermission(`${this._id}-Permission`,{scope:options.scope,principal:new(aws_iam_1()).ServicePrincipal("apigateway.amazonaws.com"),sourceArn:core_1().Stack.of(route).formatArn({service:"execute-api",resource:route.httpApi.apiId,resourceName:`*/*${route.path??""}`})})}bind(_options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_HttpRouteIntegrationBindOptions(_options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{type:aws_apigatewayv2_1().HttpIntegrationType.AWS_PROXY,uri:this.handler.functionArn,payloadFormatVersion:this.props.payloadFormatVersion??aws_apigatewayv2_1().PayloadFormatVersion.VERSION_2_0,parameterMapping:this.props.parameterMapping,timeout:this.props.timeout}}}exports.HttpLambdaIntegration=HttpLambdaIntegration,_a=JSII_RTTI_SYMBOL_1,HttpLambdaIntegration[_a]={fqn:"aws-cdk-lib.aws_apigatewayv2_integrations.HttpLambdaIntegration",version:"2.149.0"};
