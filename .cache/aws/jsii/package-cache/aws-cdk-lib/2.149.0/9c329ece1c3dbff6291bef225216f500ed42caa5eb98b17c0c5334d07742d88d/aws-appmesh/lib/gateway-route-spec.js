"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.GatewayRouteSpec=exports.GatewayRouteHostnameMatch=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var http_route_path_match_1=()=>{var tmp=require("./http-route-path-match");return http_route_path_match_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./private/utils");return utils_1=()=>tmp,tmp},shared_interfaces_1=()=>{var tmp=require("./shared-interfaces");return shared_interfaces_1=()=>tmp,tmp};class GatewayRouteHostnameMatch{static exactly(name){return new GatewayRouteHostnameMatchImpl({exact:name})}static endsWith(suffix){return new GatewayRouteHostnameMatchImpl({suffix})}}exports.GatewayRouteHostnameMatch=GatewayRouteHostnameMatch,_a=JSII_RTTI_SYMBOL_1,GatewayRouteHostnameMatch[_a]={fqn:"aws-cdk-lib.aws_appmesh.GatewayRouteHostnameMatch",version:"2.149.0"};class GatewayRouteHostnameMatchImpl extends GatewayRouteHostnameMatch{constructor(matchProperty){super(),this.matchProperty=matchProperty}bind(_scope){return{hostnameMatch:this.matchProperty}}}class GatewayRouteSpec{static http(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_HttpGatewayRouteSpecOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.http),error}return new HttpGatewayRouteSpec(options,shared_interfaces_1().Protocol.HTTP)}static http2(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_HttpGatewayRouteSpecOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.http2),error}return new HttpGatewayRouteSpec(options,shared_interfaces_1().Protocol.HTTP2)}static grpc(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_GrpcGatewayRouteSpecOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grpc),error}return new GrpcGatewayRouteSpec(options)}}exports.GatewayRouteSpec=GatewayRouteSpec,_b=JSII_RTTI_SYMBOL_1,GatewayRouteSpec[_b]={fqn:"aws-cdk-lib.aws_appmesh.GatewayRouteSpec",version:"2.149.0"};class HttpGatewayRouteSpec extends GatewayRouteSpec{constructor(options,protocol){super(),this.routeTarget=options.routeTarget,this.routeType=protocol,this.match=options.match,this.priority=options.priority}bind(scope){const pathMatchConfig=(this.match?.path??http_route_path_match_1().HttpGatewayRoutePathMatch.startsWith("/")).bind(scope),rewriteRequestHostname=this.match?.rewriteRequestHostname,prefixPathRewrite=pathMatchConfig.prefixPathRewrite,wholePathRewrite=pathMatchConfig.wholePathRewrite,httpConfig={match:{prefix:pathMatchConfig.prefixPathMatch,path:pathMatchConfig.wholePathMatch,hostname:this.match?.hostname?.bind(scope).hostnameMatch,method:this.match?.method,headers:this.match?.headers?.map(header=>header.bind(scope).headerMatch),queryParameters:this.match?.queryParameters?.map(queryParameter=>queryParameter.bind(scope).queryParameterMatch),port:this.match?.port},action:{target:{virtualService:{virtualServiceName:this.routeTarget.virtualServiceName}},rewrite:rewriteRequestHostname!==void 0||prefixPathRewrite||wholePathRewrite?{hostname:rewriteRequestHostname===void 0?void 0:{defaultTargetHostname:rewriteRequestHostname?"ENABLED":"DISABLED"},prefix:prefixPathRewrite,path:wholePathRewrite}:void 0}};return{priority:this.priority,httpSpecConfig:this.routeType===shared_interfaces_1().Protocol.HTTP?httpConfig:void 0,http2SpecConfig:this.routeType===shared_interfaces_1().Protocol.HTTP2?httpConfig:void 0}}}class GrpcGatewayRouteSpec extends GatewayRouteSpec{constructor(options){super(),this.match=options.match,this.routeTarget=options.routeTarget,this.priority=options.priority}bind(scope){const metadataMatch=this.match.metadata;return(0,utils_1().validateGrpcGatewayRouteMatch)(this.match),(0,utils_1().validateGrpcMatchArrayLength)(metadataMatch),{grpcSpecConfig:{match:{serviceName:this.match.serviceName,hostname:this.match.hostname?.bind(scope).hostnameMatch,port:this.match.port,metadata:metadataMatch?.map(metadata=>metadata.bind(scope).headerMatch)},action:{target:{virtualService:{virtualServiceName:this.routeTarget.virtualServiceName}},rewrite:this.match.rewriteRequestHostname===void 0?void 0:{hostname:{defaultTargetHostname:this.match.rewriteRequestHostname?"ENABLED":"DISABLED"}}}},priority:this.priority}}}
