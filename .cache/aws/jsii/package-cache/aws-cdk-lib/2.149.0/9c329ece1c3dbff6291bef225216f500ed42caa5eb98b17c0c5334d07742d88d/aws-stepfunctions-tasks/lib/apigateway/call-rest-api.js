"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CallApiGatewayRestApiEndpoint=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var base_1=()=>{var tmp=require("./base");return base_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp};class CallApiGatewayRestApiEndpoint extends base_1().CallApiGatewayEndpointBase{constructor(scope,id,props){super(scope,id,props),this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_tasks_CallApiGatewayRestApiEndpointProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CallApiGatewayRestApiEndpoint),error}this.apiEndpoint=this.getApiEndpoint(),this.arnForExecuteApi=props.api.arnForExecuteApi(props.method,props.apiPath,props.stageName),this.stageName=props.stageName,this.taskPolicies=this.createPolicyStatements()}getApiEndpoint(){const apiStack=cdk().Stack.of(this.props.api);return`${this.props.api.restApiId}.execute-api.${apiStack.region}.${apiStack.urlSuffix}`}}exports.CallApiGatewayRestApiEndpoint=CallApiGatewayRestApiEndpoint,_a=JSII_RTTI_SYMBOL_1,CallApiGatewayRestApiEndpoint[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.CallApiGatewayRestApiEndpoint",version:"2.149.0"};
