"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LambdaEdgeEventType=exports.CachedMethods=exports.AllowedMethods=exports.SecurityPolicyProtocol=exports.SSLMethod=exports.OriginProtocolPolicy=exports.ViewerProtocolPolicy=exports.PriceClass=exports.HttpVersion=exports.Distribution=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},cloudfront_generated_1=()=>{var tmp=require("./cloudfront.generated");return cloudfront_generated_1=()=>tmp,tmp},cache_behavior_1=()=>{var tmp=require("./private/cache-behavior");return cache_behavior_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./private/utils");return utils_1=()=>tmp,tmp},cloudwatch=()=>{var tmp=require("../../aws-cloudwatch");return cloudwatch=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},s3=()=>{var tmp=require("../../aws-s3");return s3=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};class Distribution extends core_1().Resource{static fromDistributionAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_DistributionAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromDistributionAttributes),error}return new class extends core_1().Resource{constructor(){super(scope,id),this.domainName=attrs.domainName,this.distributionDomainName=attrs.domainName,this.distributionId=attrs.distributionId}grant(grantee,...actions){return iam().Grant.addToPrincipal({grantee,actions,resourceArns:[(0,utils_1().formatDistributionArn)(this)]})}grantCreateInvalidation(grantee){return this.grant(grantee,"cloudfront:CreateInvalidation")}}}constructor(scope,id,props){super(scope,id),this.additionalBehaviors=[],this.boundOrigins=[],this.originGroups=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_DistributionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Distribution),error}if(props.certificate){const certificateRegion=core_1().Stack.of(this).splitArn(props.certificate.certificateArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).region;if(!core_1().Token.isUnresolved(certificateRegion)&&certificateRegion!=="us-east-1")throw new Error(`Distribution certificates must be in the us-east-1 region and the certificate you provided is in ${certificateRegion}.`);if((props.domainNames??[]).length===0)throw new Error("Must specify at least one domain name to use a certificate with a distribution")}const originId=this.addOrigin(props.defaultBehavior.origin);this.defaultBehavior=new(cache_behavior_1()).CacheBehavior(originId,{pathPattern:"*",...props.defaultBehavior}),props.additionalBehaviors&&Object.entries(props.additionalBehaviors).forEach(([pathPattern,behaviorOptions])=>{this.addBehavior(pathPattern,behaviorOptions.origin,behaviorOptions)}),this.certificate=props.certificate,this.errorResponses=props.errorResponses??[],this.publishAdditionalMetrics=props.publishAdditionalMetrics;const trimmedComment=props.comment&&props.comment.length>128?`${props.comment.slice(0,125)}...`:props.comment,distribution=new(cloudfront_generated_1()).CfnDistribution(this,"Resource",{distributionConfig:{enabled:props.enabled??!0,origins:core_1().Lazy.any({produce:()=>this.renderOrigins()}),originGroups:core_1().Lazy.any({produce:()=>this.renderOriginGroups()}),defaultCacheBehavior:this.defaultBehavior._renderBehavior(),aliases:props.domainNames,cacheBehaviors:core_1().Lazy.any({produce:()=>this.renderCacheBehaviors()}),comment:trimmedComment,customErrorResponses:this.renderErrorResponses(),defaultRootObject:props.defaultRootObject,httpVersion:props.httpVersion??HttpVersion.HTTP2,ipv6Enabled:props.enableIpv6??!0,logging:this.renderLogging(props),priceClass:props.priceClass??void 0,restrictions:this.renderRestrictions(props.geoRestriction),viewerCertificate:this.certificate?this.renderViewerCertificate(this.certificate,props.minimumProtocolVersion,props.sslSupportMethod):void 0,webAclId:props.webAclId}});this.domainName=distribution.attrDomainName,this.distributionDomainName=distribution.attrDomainName,this.distributionId=distribution.ref,props.publishAdditionalMetrics&&new(cloudfront_generated_1()).CfnMonitoringSubscription(this,"MonitoringSubscription",{distributionId:this.distributionId,monitoringSubscription:{realtimeMetricsSubscriptionConfig:{realtimeMetricsSubscriptionStatus:"Enabled"}}})}metric(metricName,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric),error}return new(cloudwatch()).Metric({namespace:"AWS/CloudFront",metricName,dimensionsMap:{DistributionId:this.distributionId},...props})}metricRequests(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricRequests),error}return this.metric("Requests",{statistic:"sum",...props})}metricBytesUploaded(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricBytesUploaded),error}return this.metric("BytesUploaded",{statistic:"sum",...props})}metricBytesDownloaded(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricBytesDownloaded),error}return this.metric("BytesDownloaded",{statistic:"sum",...props})}metricTotalErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricTotalErrorRate),error}return this.metric("TotalErrorRate",props)}metric4xxErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric4xxErrorRate),error}return this.metric("4xxErrorRate",props)}metric5xxErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric5xxErrorRate),error}return this.metric("5xxErrorRate",props)}metricOriginLatency(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricOriginLatency),error}if(this.publishAdditionalMetrics!==!0)throw new Error("Origin latency metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("OriginLatency",props)}metricCacheHitRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricCacheHitRate),error}if(this.publishAdditionalMetrics!==!0)throw new Error("Cache hit rate metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("CacheHitRate",props)}metric401ErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric401ErrorRate),error}if(this.publishAdditionalMetrics!==!0)throw new Error("401 error rate metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("401ErrorRate",props)}metric403ErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric403ErrorRate),error}if(this.publishAdditionalMetrics!==!0)throw new Error("403 error rate metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("403ErrorRate",props)}metric404ErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric404ErrorRate),error}if(this.publishAdditionalMetrics!==!0)throw new Error("404 error rate metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("404ErrorRate",props)}metric502ErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric502ErrorRate),error}if(this.publishAdditionalMetrics!==!0)throw new Error("502 error rate metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("502ErrorRate",props)}metric503ErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric503ErrorRate),error}if(this.publishAdditionalMetrics!==!0)throw new Error("503 error rate metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("503ErrorRate",props)}metric504ErrorRate(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric504ErrorRate),error}if(this.publishAdditionalMetrics!==!0)throw new Error("504 error rate metric is only available if 'publishAdditionalMetrics' is set 'true'");return this.metric("504ErrorRate",props)}addBehavior(pathPattern,origin,behaviorOptions={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_IOrigin(origin),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_AddBehaviorOptions(behaviorOptions)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addBehavior),error}if(pathPattern==="*")throw new Error("Only the default behavior can have a path pattern of '*'");const originId=this.addOrigin(origin);this.additionalBehaviors.push(new(cache_behavior_1()).CacheBehavior(originId,{pathPattern,...behaviorOptions}))}grant(identity,...actions){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(identity)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grant),error}return iam().Grant.addToPrincipal({grantee:identity,actions,resourceArns:[(0,utils_1().formatDistributionArn)(this)]})}grantCreateInvalidation(identity){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(identity)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantCreateInvalidation),error}return this.grant(identity,"cloudfront:CreateInvalidation")}addOrigin(origin,isFailoverOrigin=!1){const existingOrigin=this.boundOrigins.find(boundOrigin=>boundOrigin.origin===origin);if(existingOrigin)return existingOrigin.originGroupId??existingOrigin.originId;{const originIndex=this.boundOrigins.length+1,scope=new(constructs_1()).Construct(this,`Origin${originIndex}`),generatedId=core_1().Names.uniqueId(scope).slice(-128),originBindConfig=origin.bind(scope,{originId:generatedId}),originId=originBindConfig.originProperty?.id??generatedId,duplicateId=this.boundOrigins.find(boundOrigin=>boundOrigin.originProperty?.id===originBindConfig.originProperty?.id);if(duplicateId)throw new Error(`Origin with id ${duplicateId.originProperty?.id} already exists. OriginIds must be unique within a distribution`);if(!originBindConfig.failoverConfig)this.boundOrigins.push({origin,originId,...originBindConfig});else{if(isFailoverOrigin)throw new Error("An Origin cannot use an Origin with its own failover configuration as its fallback origin!");const groupIndex=this.originGroups.length+1,originGroupId=core_1().Names.uniqueId(new(constructs_1()).Construct(this,`OriginGroup${groupIndex}`)).slice(-128);this.boundOrigins.push({origin,originId,originGroupId,...originBindConfig});const failoverOriginId=this.addOrigin(originBindConfig.failoverConfig.failoverOrigin,!0);return this.addOriginGroup(originGroupId,originBindConfig.failoverConfig.statusCodes,originId,failoverOriginId),originGroupId}return originBindConfig.originProperty?.id??originId}}addOriginGroup(originGroupId,statusCodes,originId,failoverOriginId){if(statusCodes=statusCodes??[500,502,503,504],statusCodes.length===0)throw new Error("fallbackStatusCodes cannot be empty");this.originGroups.push({failoverCriteria:{statusCodes:{items:statusCodes,quantity:statusCodes.length}},id:originGroupId,members:{items:[{originId},{originId:failoverOriginId}],quantity:2}})}renderOrigins(){const renderedOrigins=[];return this.boundOrigins.forEach(boundOrigin=>{boundOrigin.originProperty&&renderedOrigins.push(boundOrigin.originProperty)}),renderedOrigins}renderOriginGroups(){return this.originGroups.length===0?void 0:{items:this.originGroups,quantity:this.originGroups.length}}renderCacheBehaviors(){if(this.additionalBehaviors.length!==0)return this.additionalBehaviors.map(behavior=>behavior._renderBehavior())}renderErrorResponses(){if(this.errorResponses.length!==0)return this.errorResponses.map(errorConfig=>{if(!errorConfig.responseHttpStatus&&!errorConfig.ttl&&!errorConfig.responsePagePath)throw new Error("A custom error response without either a 'responseHttpStatus', 'ttl' or 'responsePagePath' is not valid.");return{errorCachingMinTtl:errorConfig.ttl?.toSeconds(),errorCode:errorConfig.httpStatus,responseCode:errorConfig.responsePagePath?errorConfig.responseHttpStatus??errorConfig.httpStatus:errorConfig.responseHttpStatus,responsePagePath:errorConfig.responsePagePath}})}renderLogging(props){if(!props.enableLogging&&!props.logBucket)return;if(props.enableLogging===!1&&props.logBucket)throw new Error("Explicitly disabled logging but provided a logging bucket.");return{bucket:(props.logBucket??new(s3()).Bucket(this,"LoggingBucket",{encryption:s3().BucketEncryption.S3_MANAGED,objectOwnership:s3().ObjectOwnership.OBJECT_WRITER})).bucketRegionalDomainName,includeCookies:props.logIncludesCookies,prefix:props.logFilePrefix}}renderRestrictions(geoRestriction){return geoRestriction?{geoRestriction:{restrictionType:geoRestriction.restrictionType,locations:geoRestriction.locations}}:void 0}renderViewerCertificate(certificate,minimumProtocolVersionProp,sslSupportMethodProp){const defaultVersion=core_1().FeatureFlags.of(this).isEnabled(cx_api_1().CLOUDFRONT_DEFAULT_SECURITY_POLICY_TLS_V1_2_2021)?SecurityPolicyProtocol.TLS_V1_2_2021:SecurityPolicyProtocol.TLS_V1_2_2019,minimumProtocolVersion=minimumProtocolVersionProp??defaultVersion,sslSupportMethod=sslSupportMethodProp??SSLMethod.SNI;return{acmCertificateArn:certificate.certificateArn,minimumProtocolVersion,sslSupportMethod}}}exports.Distribution=Distribution,_a=JSII_RTTI_SYMBOL_1,Distribution[_a]={fqn:"aws-cdk-lib.aws_cloudfront.Distribution",version:"2.149.0"};var HttpVersion;(function(HttpVersion2){HttpVersion2.HTTP1_1="http1.1",HttpVersion2.HTTP2="http2",HttpVersion2.HTTP2_AND_3="http2and3",HttpVersion2.HTTP3="http3"})(HttpVersion||(exports.HttpVersion=HttpVersion={}));var PriceClass;(function(PriceClass2){PriceClass2.PRICE_CLASS_100="PriceClass_100",PriceClass2.PRICE_CLASS_200="PriceClass_200",PriceClass2.PRICE_CLASS_ALL="PriceClass_All"})(PriceClass||(exports.PriceClass=PriceClass={}));var ViewerProtocolPolicy;(function(ViewerProtocolPolicy2){ViewerProtocolPolicy2.HTTPS_ONLY="https-only",ViewerProtocolPolicy2.REDIRECT_TO_HTTPS="redirect-to-https",ViewerProtocolPolicy2.ALLOW_ALL="allow-all"})(ViewerProtocolPolicy||(exports.ViewerProtocolPolicy=ViewerProtocolPolicy={}));var OriginProtocolPolicy;(function(OriginProtocolPolicy2){OriginProtocolPolicy2.HTTP_ONLY="http-only",OriginProtocolPolicy2.MATCH_VIEWER="match-viewer",OriginProtocolPolicy2.HTTPS_ONLY="https-only"})(OriginProtocolPolicy||(exports.OriginProtocolPolicy=OriginProtocolPolicy={}));var SSLMethod;(function(SSLMethod2){SSLMethod2.SNI="sni-only",SSLMethod2.VIP="vip"})(SSLMethod||(exports.SSLMethod=SSLMethod={}));var SecurityPolicyProtocol;(function(SecurityPolicyProtocol2){SecurityPolicyProtocol2.SSL_V3="SSLv3",SecurityPolicyProtocol2.TLS_V1="TLSv1",SecurityPolicyProtocol2.TLS_V1_2016="TLSv1_2016",SecurityPolicyProtocol2.TLS_V1_1_2016="TLSv1.1_2016",SecurityPolicyProtocol2.TLS_V1_2_2018="TLSv1.2_2018",SecurityPolicyProtocol2.TLS_V1_2_2019="TLSv1.2_2019",SecurityPolicyProtocol2.TLS_V1_2_2021="TLSv1.2_2021"})(SecurityPolicyProtocol||(exports.SecurityPolicyProtocol=SecurityPolicyProtocol={}));class AllowedMethods{constructor(methods){this.methods=methods}}exports.AllowedMethods=AllowedMethods,_b=JSII_RTTI_SYMBOL_1,AllowedMethods[_b]={fqn:"aws-cdk-lib.aws_cloudfront.AllowedMethods",version:"2.149.0"},AllowedMethods.ALLOW_GET_HEAD=new AllowedMethods(["GET","HEAD"]),AllowedMethods.ALLOW_GET_HEAD_OPTIONS=new AllowedMethods(["GET","HEAD","OPTIONS"]),AllowedMethods.ALLOW_ALL=new AllowedMethods(["GET","HEAD","OPTIONS","PUT","PATCH","POST","DELETE"]);class CachedMethods{constructor(methods){this.methods=methods}}exports.CachedMethods=CachedMethods,_c=JSII_RTTI_SYMBOL_1,CachedMethods[_c]={fqn:"aws-cdk-lib.aws_cloudfront.CachedMethods",version:"2.149.0"},CachedMethods.CACHE_GET_HEAD=new CachedMethods(["GET","HEAD"]),CachedMethods.CACHE_GET_HEAD_OPTIONS=new CachedMethods(["GET","HEAD","OPTIONS"]);var LambdaEdgeEventType;(function(LambdaEdgeEventType2){LambdaEdgeEventType2.ORIGIN_REQUEST="origin-request",LambdaEdgeEventType2.ORIGIN_RESPONSE="origin-response",LambdaEdgeEventType2.VIEWER_REQUEST="viewer-request",LambdaEdgeEventType2.VIEWER_RESPONSE="viewer-response"})(LambdaEdgeEventType||(exports.LambdaEdgeEventType=LambdaEdgeEventType={}));