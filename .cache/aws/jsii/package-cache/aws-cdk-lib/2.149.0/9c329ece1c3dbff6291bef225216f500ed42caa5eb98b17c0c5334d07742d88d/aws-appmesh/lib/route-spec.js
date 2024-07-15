"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RouteSpec=exports.GrpcRetryEvent=exports.TcpRetryEvent=exports.HttpRetryEvent=exports.HttpRouteProtocol=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var http_route_path_match_1=()=>{var tmp=require("./http-route-path-match");return http_route_path_match_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./private/utils");return utils_1=()=>tmp,tmp},shared_interfaces_1=()=>{var tmp=require("./shared-interfaces");return shared_interfaces_1=()=>tmp,tmp},HttpRouteProtocol;(function(HttpRouteProtocol2){HttpRouteProtocol2.HTTP="http",HttpRouteProtocol2.HTTPS="https"})(HttpRouteProtocol||(exports.HttpRouteProtocol=HttpRouteProtocol={}));var HttpRetryEvent;(function(HttpRetryEvent2){HttpRetryEvent2.SERVER_ERROR="server-error",HttpRetryEvent2.GATEWAY_ERROR="gateway-error",HttpRetryEvent2.CLIENT_ERROR="client-error",HttpRetryEvent2.STREAM_ERROR="stream-error"})(HttpRetryEvent||(exports.HttpRetryEvent=HttpRetryEvent={}));var TcpRetryEvent;(function(TcpRetryEvent2){TcpRetryEvent2.CONNECTION_ERROR="connection-error"})(TcpRetryEvent||(exports.TcpRetryEvent=TcpRetryEvent={}));var GrpcRetryEvent;(function(GrpcRetryEvent2){GrpcRetryEvent2.CANCELLED="cancelled",GrpcRetryEvent2.DEADLINE_EXCEEDED="deadline-exceeded",GrpcRetryEvent2.INTERNAL_ERROR="internal",GrpcRetryEvent2.RESOURCE_EXHAUSTED="resource-exhausted",GrpcRetryEvent2.UNAVAILABLE="unavailable"})(GrpcRetryEvent||(exports.GrpcRetryEvent=GrpcRetryEvent={}));class RouteSpec{static http(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_HttpRouteSpecOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.http),error}return new HttpRouteSpec(options,shared_interfaces_1().Protocol.HTTP)}static http2(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_HttpRouteSpecOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.http2),error}return new HttpRouteSpec(options,shared_interfaces_1().Protocol.HTTP2)}static tcp(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_TcpRouteSpecOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.tcp),error}return new TcpRouteSpec(options)}static grpc(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_GrpcRouteSpecOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grpc),error}return new GrpcRouteSpec(options)}}exports.RouteSpec=RouteSpec,_a=JSII_RTTI_SYMBOL_1,RouteSpec[_a]={fqn:"aws-cdk-lib.aws_appmesh.RouteSpec",version:"2.149.0"};class HttpRouteSpec extends RouteSpec{constructor(props,protocol){if(super(),this.protocol=protocol,this.match=props.match,this.weightedTargets=props.weightedTargets,this.timeout=props.timeout,this.priority=props.priority,props.retryPolicy){const httpRetryEvents=props.retryPolicy.httpRetryEvents??[],tcpRetryEvents=props.retryPolicy.tcpRetryEvents??[];if(httpRetryEvents.length+tcpRetryEvents.length===0)throw new Error("You must specify one value for at least one of `httpRetryEvents` or `tcpRetryEvents`");this.retryPolicy={...props.retryPolicy,httpRetryEvents:httpRetryEvents.length>0?httpRetryEvents:void 0,tcpRetryEvents:tcpRetryEvents.length>0?tcpRetryEvents:void 0}}}bind(scope){const pathMatchConfig=(this.match?.path??http_route_path_match_1().HttpRoutePathMatch.startsWith("/")).bind(scope),headers=this.match?.headers,queryParameters=this.match?.queryParameters;(0,utils_1().validateHttpMatchArrayLength)(headers,queryParameters);const httpConfig={action:{weightedTargets:renderWeightedTargets(this.weightedTargets)},match:{prefix:pathMatchConfig.prefixPathMatch,path:pathMatchConfig.wholePathMatch,headers:headers?.map(header=>header.bind(scope).headerMatch),method:this.match?.method,scheme:this.match?.protocol,queryParameters:queryParameters?.map(queryParameter=>queryParameter.bind(scope).queryParameterMatch),port:this.match?.port},timeout:renderTimeout(this.timeout),retryPolicy:this.retryPolicy?renderHttpRetryPolicy(this.retryPolicy):void 0};return{priority:this.priority,httpRouteSpec:this.protocol===shared_interfaces_1().Protocol.HTTP?httpConfig:void 0,http2RouteSpec:this.protocol===shared_interfaces_1().Protocol.HTTP2?httpConfig:void 0}}}class TcpRouteSpec extends RouteSpec{constructor(props){super(),this.weightedTargets=props.weightedTargets,this.timeout=props.timeout,this.priority=props.priority}bind(_scope){return{priority:this.priority,tcpRouteSpec:{action:{weightedTargets:renderWeightedTargets(this.weightedTargets)},timeout:renderTimeout(this.timeout)}}}}class GrpcRouteSpec extends RouteSpec{constructor(props){if(super(),this.weightedTargets=props.weightedTargets,this.match=props.match,this.timeout=props.timeout,this.priority=props.priority,props.retryPolicy){const grpcRetryEvents=props.retryPolicy.grpcRetryEvents??[],httpRetryEvents=props.retryPolicy.httpRetryEvents??[],tcpRetryEvents=props.retryPolicy.tcpRetryEvents??[];if(grpcRetryEvents.length+httpRetryEvents.length+tcpRetryEvents.length===0)throw new Error("You must specify one value for at least one of `grpcRetryEvents`, `httpRetryEvents` or `tcpRetryEvents`");this.retryPolicy={...props.retryPolicy,grpcRetryEvents:grpcRetryEvents.length>0?grpcRetryEvents:void 0,httpRetryEvents:httpRetryEvents.length>0?httpRetryEvents:void 0,tcpRetryEvents:tcpRetryEvents.length>0?tcpRetryEvents:void 0}}}bind(scope){const serviceName=this.match.serviceName,methodName=this.match.methodName,metadata=this.match.metadata,port=this.match.port;if((0,utils_1().validateGrpcRouteMatch)(this.match),(0,utils_1().validateGrpcMatchArrayLength)(metadata),methodName&&!serviceName)throw new Error("If you specify a method name, you must also specify a service name");return{priority:this.priority,grpcRouteSpec:{action:{weightedTargets:renderWeightedTargets(this.weightedTargets)},match:{serviceName,methodName,metadata:metadata?.map(singleMetadata=>singleMetadata.bind(scope).headerMatch),port},timeout:renderTimeout(this.timeout),retryPolicy:this.retryPolicy?renderGrpcRetryPolicy(this.retryPolicy):void 0}}}}function renderWeightedTargets(weightedTargets){const renderedTargets=[];for(const t of weightedTargets)renderedTargets.push({virtualNode:t.virtualNode.virtualNodeName,weight:t.weight==null?1:t.weight,port:t.port});return renderedTargets}function renderTimeout(timeout){return timeout?{idle:timeout?.idle!==void 0?{unit:"ms",value:timeout?.idle.toMilliseconds()}:void 0,perRequest:timeout?.perRequest!==void 0?{unit:"ms",value:timeout?.perRequest.toMilliseconds()}:void 0}:void 0}function renderHttpRetryPolicy(retryPolicy){return{maxRetries:retryPolicy.retryAttempts,perRetryTimeout:{unit:"ms",value:retryPolicy.retryTimeout.toMilliseconds()},httpRetryEvents:retryPolicy.httpRetryEvents,tcpRetryEvents:retryPolicy.tcpRetryEvents}}function renderGrpcRetryPolicy(retryPolicy){return{...renderHttpRetryPolicy(retryPolicy),grpcRetryEvents:retryPolicy.grpcRetryEvents}}