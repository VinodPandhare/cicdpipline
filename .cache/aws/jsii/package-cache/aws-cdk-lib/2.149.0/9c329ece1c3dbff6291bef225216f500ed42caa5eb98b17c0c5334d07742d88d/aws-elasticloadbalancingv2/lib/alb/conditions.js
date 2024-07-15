"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ListenerCondition=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class ListenerCondition{static hostHeaders(values){return new HostHeaderListenerCondition(values)}static httpHeader(name,values){return new HttpHeaderListenerCondition(name,values)}static httpRequestMethods(values){return new HttpRequestMethodListenerCondition(values)}static pathPatterns(values){return new PathPatternListenerCondition(values)}static queryStrings(values){return new QueryStringListenerCondition(values)}static sourceIps(values){return new SourceIpListenerCondition(values)}}exports.ListenerCondition=ListenerCondition,_a=JSII_RTTI_SYMBOL_1,ListenerCondition[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2.ListenerCondition",version:"2.149.0"};class HostHeaderListenerCondition extends ListenerCondition{constructor(values){super(),this.values=values}renderRawCondition(){return{field:"host-header",hostHeaderConfig:{values:this.values}}}}class HttpHeaderListenerCondition extends ListenerCondition{constructor(name,values){super(),this.name=name,this.values=values}renderRawCondition(){return{field:"http-header",httpHeaderConfig:{httpHeaderName:this.name,values:this.values}}}}class HttpRequestMethodListenerCondition extends ListenerCondition{constructor(values){super(),this.values=values}renderRawCondition(){return{field:"http-request-method",httpRequestMethodConfig:{values:this.values}}}}class PathPatternListenerCondition extends ListenerCondition{constructor(values){if(super(),this.values=values,values&&values.length>5)throw new Error("A rule can only have '5' condition values")}renderRawCondition(){return{field:"path-pattern",pathPatternConfig:{values:this.values}}}}class QueryStringListenerCondition extends ListenerCondition{constructor(values){super(),this.values=values}renderRawCondition(){return{field:"query-string",queryStringConfig:{values:this.values}}}}class SourceIpListenerCondition extends ListenerCondition{constructor(values){super(),this.values=values}renderRawCondition(){return{field:"source-ip",sourceIpConfig:{values:this.values}}}}
