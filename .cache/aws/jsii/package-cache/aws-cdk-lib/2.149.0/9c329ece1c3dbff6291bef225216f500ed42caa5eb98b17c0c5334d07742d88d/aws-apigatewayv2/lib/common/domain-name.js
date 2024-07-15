"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DomainName=exports.EndpointType=exports.SecurityPolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var index_1=()=>{var tmp=require(".././index");return index_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},SecurityPolicy;(function(SecurityPolicy2){SecurityPolicy2.TLS_1_0="TLS_1_0",SecurityPolicy2.TLS_1_2="TLS_1_2"})(SecurityPolicy||(exports.SecurityPolicy=SecurityPolicy={}));var EndpointType;(function(EndpointType2){EndpointType2.EDGE="EDGE",EndpointType2.REGIONAL="REGIONAL"})(EndpointType||(exports.EndpointType=EndpointType={}));class DomainName extends core_1().Resource{static fromDomainNameAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_DomainNameAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromDomainNameAttributes),error}class Import extends core_1().Resource{constructor(){super(...arguments),this.regionalDomainName=attrs.regionalDomainName,this.regionalHostedZoneId=attrs.regionalHostedZoneId,this.name=attrs.name}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id),this.domainNameConfigurations=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_DomainNameProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,DomainName),error}if(props.domainName==="")throw new Error("empty string for domainName not allowed");if(props.ownershipCertificate&&!props.mtls)throw new Error("ownership certificate can only be used with mtls domains");const mtlsConfig=this.configureMTLS(props.mtls),domainNameProps={domainName:props.domainName,domainNameConfigurations:core_1().Lazy.any({produce:()=>this.domainNameConfigurations}),mutualTlsAuthentication:mtlsConfig},resource=new(index_1()).CfnDomainName(this,"Resource",domainNameProps);this.name=resource.ref,this.regionalDomainName=core_1().Token.asString(resource.getAtt("RegionalDomainName")),this.regionalHostedZoneId=core_1().Token.asString(resource.getAtt("RegionalHostedZoneId")),props.certificate&&this.addEndpoint(props)}configureMTLS(mtlsConfig){if(mtlsConfig)return{truststoreUri:mtlsConfig.bucket.s3UrlForObject(mtlsConfig.key),truststoreVersion:mtlsConfig.version}}addEndpoint(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_EndpointOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addEndpoint),error}const domainNameConfig={certificateArn:options.certificate.certificateArn,certificateName:options.certificateName,endpointType:options.endpointType?options.endpointType?.toString():"REGIONAL",ownershipVerificationCertificateArn:options.ownershipCertificate?.certificateArn,securityPolicy:options.securityPolicy?.toString()};this.validateEndpointType(domainNameConfig.endpointType),this.domainNameConfigurations.push(domainNameConfig)}validateEndpointType(endpointType){for(let config of this.domainNameConfigurations)if(endpointType&&endpointType==config.endpointType)throw new Error(`an endpoint with type ${endpointType} already exists`)}}exports.DomainName=DomainName,_a=JSII_RTTI_SYMBOL_1,DomainName[_a]={fqn:"aws-cdk-lib.aws_apigatewayv2.DomainName",version:"2.149.0"};