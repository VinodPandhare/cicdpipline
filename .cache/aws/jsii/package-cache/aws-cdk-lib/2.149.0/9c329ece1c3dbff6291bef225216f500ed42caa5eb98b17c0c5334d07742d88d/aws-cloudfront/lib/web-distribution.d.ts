import { Construct } from 'constructs';
import { CfnDistribution } from './cloudfront.generated';
import { HttpVersion, IDistribution, LambdaEdgeEventType, OriginProtocolPolicy, PriceClass, ViewerProtocolPolicy, SSLMethod, SecurityPolicyProtocol } from './distribution';
import { FunctionAssociation } from './function';
import { GeoRestriction } from './geo-restriction';
import { IKeyGroup } from './key-group';
import { IOriginAccessIdentity } from './origin-access-identity';
import * as certificatemanager from '../../aws-certificatemanager';
import * as iam from '../../aws-iam';
import * as lambda from '../../aws-lambda';
import * as s3 from '../../aws-s3';
import * as cdk from '../../core';
/**
 * HTTP status code to failover to second origin
 */
export declare enum FailoverStatusCode {
    /**
     * Forbidden (403)
     */
    FORBIDDEN = 403,
    /**
     * Not found (404)
     */
    NOT_FOUND = 404,
    /**
     * Internal Server Error (500)
     */
    INTERNAL_SERVER_ERROR = 500,
    /**
     * Bad Gateway (502)
     */
    BAD_GATEWAY = 502,
    /**
     * Service Unavailable (503)
     */
    SERVICE_UNAVAILABLE = 503,
    /**
     * Gateway Timeout (504)
     */
    GATEWAY_TIMEOUT = 504
}
/**
 * Logging configuration for incoming requests
 */
export interface LoggingConfiguration {
    /**
     * Bucket to log requests to
     *
     * @default - A logging bucket is automatically created.
     */
    readonly bucket?: s3.IBucket;
    /**
     * Whether to include the cookies in the logs
     *
     * @default false
     */
    readonly includeCookies?: boolean;
    /**
     * Where in the bucket to store logs
     *
     * @default - No prefix.
     */
    readonly prefix?: string;
}
/**
 * A source configuration is a wrapper for CloudFront origins and behaviors.
 * An origin is what CloudFront will "be in front of" - that is, CloudFront will pull it's assets from an origin.
 *
 * If you're using s3 as a source - pass the `s3Origin` property, otherwise, pass the `customOriginSource` property.
 *
 * One or the other must be passed, and it is invalid to pass both in the same SourceConfiguration.
 */
export interface SourceConfiguration {
    /**
     * The number of times that CloudFront attempts to connect to the origin.
     * You can specify 1, 2, or 3 as the number of attempts.
     *
     * @default 3
     */
    readonly connectionAttempts?: number;
    /**
     * The number of seconds that CloudFront waits when trying to establish a connection to the origin.
     * You can specify a number of seconds between 1 and 10 (inclusive).
     *
     * @default cdk.Duration.seconds(10)
     */
    readonly connectionTimeout?: cdk.Duration;
    /**
     * An s3 origin source - if you're using s3 for your assets
     */
    readonly s3OriginSource?: S3OriginConfig;
    /**
     * A custom origin source - for all non-s3 sources.
     */
    readonly customOriginSource?: CustomOriginConfig;
    /**
     * An s3 origin source for failover in case the s3OriginSource returns invalid status code
     *
     * @default - no failover configuration
     */
    readonly failoverS3OriginSource?: S3OriginConfig;
    /**
     * A custom origin source for failover in case the s3OriginSource returns invalid status code
     *
     * @default - no failover configuration
     */
    readonly failoverCustomOriginSource?: CustomOriginConfig;
    /**
     * HTTP status code to failover to second origin
     *
     * @default [500, 502, 503, 504]
     */
    readonly failoverCriteriaStatusCodes?: FailoverStatusCode[];
    /**
     * The behaviors associated with this source.
     * At least one (default) behavior must be included.
     */
    readonly behaviors: Behavior[];
    /**
     * When you enable Origin Shield in the AWS Region that has the lowest latency to your origin, you can get better network performance
     *
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html
     *
     * @default - origin shield not enabled
     */
    readonly originShieldRegion?: string;
}
/**
 * A custom origin configuration
 */
export interface CustomOriginConfig {
    /**
     * The domain name of the custom origin. Should not include the path - that should be in the parent SourceConfiguration
     */
    readonly domainName: string;
    /**
     * The origin HTTP port
     *
     * @default 80
     */
    readonly httpPort?: number;
    /**
     * The origin HTTPS port
     *
     * @default 443
     */
    readonly httpsPort?: number;
    /**
     * The keep alive timeout when making calls in seconds.
     *
     * @default Duration.seconds(5)
     */
    readonly originKeepaliveTimeout?: cdk.Duration;
    /**
     * The protocol (http or https) policy to use when interacting with the origin.
     *
     * @default OriginProtocolPolicy.HttpsOnly
     */
    readonly originProtocolPolicy?: OriginProtocolPolicy;
    /**
     * The read timeout when calling the origin in seconds
     *
     * @default Duration.seconds(30)
     */
    readonly originReadTimeout?: cdk.Duration;
    /**
     * The SSL versions to use when interacting with the origin.
     *
     * @default OriginSslPolicy.TLS_V1_2
     */
    readonly allowedOriginSSLVersions?: OriginSslPolicy[];
    /**
     * The relative path to the origin root to use for sources.
     *
     * @default /
     */
    readonly originPath?: string;
    /**
     * Any additional headers to pass to the origin
     *
     * @default - No additional headers are passed.
     */
    readonly originHeaders?: {
        [key: string]: string;
    };
    /**
     * When you enable Origin Shield in the AWS Region that has the lowest latency to your origin, you can get better network performance
     *
     * @default - origin shield not enabled
     */
    readonly originShieldRegion?: string;
}
export declare enum OriginSslPolicy {
    SSL_V3 = "SSLv3",
    TLS_V1 = "TLSv1",
    TLS_V1_1 = "TLSv1.1",
    TLS_V1_2 = "TLSv1.2"
}
/**
 * S3 origin configuration for CloudFront
 */
export interface S3OriginConfig {
    /**
     * The source bucket to serve content from
     */
    readonly s3BucketSource: s3.IBucket;
    /**
     * The optional Origin Access Identity of the origin identity cloudfront will use when calling your s3 bucket.
     *
     * @default No Origin Access Identity which requires the S3 bucket to be public accessible
     */
    readonly originAccessIdentity?: IOriginAccessIdentity;
    /**
     * The relative path to the origin root to use for sources.
     *
     * @default /
     */
    readonly originPath?: string;
    /**
     * Any additional headers to pass to the origin
     *
     * @default - No additional headers are passed.
     */
    readonly originHeaders?: {
        [key: string]: string;
    };
    /**
     * When you enable Origin Shield in the AWS Region that has the lowest latency to your origin, you can get better network performance
     *
     * @default - origin shield not enabled
     */
    readonly originShieldRegion?: string;
}
/**
 * An enum for the supported methods to a CloudFront distribution.
 */
export declare enum CloudFrontAllowedMethods {
    GET_HEAD = "GH",
    GET_HEAD_OPTIONS = "GHO",
    ALL = "ALL"
}
/**
 * Enums for the methods CloudFront can cache.
 */
export declare enum CloudFrontAllowedCachedMethods {
    GET_HEAD = "GH",
    GET_HEAD_OPTIONS = "GHO"
}
/**
 * A CloudFront behavior wrapper.
 */
export interface Behavior {
    /**
     * If CloudFront should automatically compress some content types.
     *
     * @default true
     */
    readonly compress?: boolean;
    /**
     * If this behavior is the default behavior for the distribution.
     *
     * You must specify exactly one default distribution per CloudFront distribution.
     * The default behavior is allowed to omit the "path" property.
     */
    readonly isDefaultBehavior?: boolean;
    /**
     * Trusted signers is how CloudFront allows you to serve private content.
     * The signers are the account IDs that are allowed to sign cookies/presigned URLs for this distribution.
     *
     * If you pass a non empty value, all requests for this behavior must be signed (no public access will be allowed)
     * @deprecated - We recommend using trustedKeyGroups instead of trustedSigners.
     */
    readonly trustedSigners?: string[];
    /**
     * A list of Key Groups that CloudFront can use to validate signed URLs or signed cookies.
     *
     * @default - no KeyGroups are associated with cache behavior
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html
     */
    readonly trustedKeyGroups?: IKeyGroup[];
    /**
     *
     * The default amount of time CloudFront will cache an object.
     *
     * This value applies only when your custom origin does not add HTTP headers,
     * such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects.
     * @default 86400 (1 day)
     *
     */
    readonly defaultTtl?: cdk.Duration;
    /**
     * The method this CloudFront distribution responds do.
     *
     * @default GET_HEAD
     */
    readonly allowedMethods?: CloudFrontAllowedMethods;
    /**
     * The path this behavior responds to.
     * Required for all non-default behaviors. (The default behavior implicitly has "*" as the path pattern. )
     *
     */
    readonly pathPattern?: string;
    /**
     * Which methods are cached by CloudFront by default.
     *
     * @default GET_HEAD
     */
    readonly cachedMethods?: CloudFrontAllowedCachedMethods;
    /**
     * The values CloudFront will forward to the origin when making a request.
     *
     * @default none (no cookies - no headers)
     *
     */
    readonly forwardedValues?: CfnDistribution.ForwardedValuesProperty;
    /**
     * The minimum amount of time that you want objects to stay in the cache
     * before CloudFront queries your origin.
     */
    readonly minTtl?: cdk.Duration;
    /**
     * The max amount of time you want objects to stay in the cache
     * before CloudFront queries your origin.
     *
     * @default Duration.seconds(31536000) (one year)
     */
    readonly maxTtl?: cdk.Duration;
    /**
     * Declares associated lambda@edge functions for this distribution behaviour.
     *
     * @default No lambda function associated
     */
    readonly lambdaFunctionAssociations?: LambdaFunctionAssociation[];
    /**
     * The CloudFront functions to invoke before serving the contents.
     *
     * @default - no functions will be invoked
     */
    readonly functionAssociations?: FunctionAssociation[];
    /**
     * The viewer policy for this behavior.
     *
     * @default - the distribution wide viewer protocol policy will be used
     */
    readonly viewerProtocolPolicy?: ViewerProtocolPolicy;
}
export interface LambdaFunctionAssociation {
    /**
     * The lambda event type defines at which event the lambda
     * is called during the request lifecycle
     */
    readonly eventType: LambdaEdgeEventType;
    /**
     * A version of the lambda to associate
     */
    readonly lambdaFunction: lambda.IVersion;
    /**
     * Allows a Lambda function to have read access to the body content.
     * Only valid for "request" event types (`ORIGIN_REQUEST` or `VIEWER_REQUEST`).
     * See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html
     *
     * @default false
     */
    readonly includeBody?: boolean;
}
export interface ViewerCertificateOptions {
    /**
     * How CloudFront should serve HTTPS requests.
     *
     * See the notes on SSLMethod if you wish to use other SSL termination types.
     *
     * @default SSLMethod.SNI
     * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html
     */
    readonly sslMethod?: SSLMethod;
    /**
     * The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections.
     *
     * CloudFront serves your objects only to browsers or devices that support at
     * least the SSL version that you specify.
     *
     * @default - SSLv3 if sslMethod VIP, TLSv1 if sslMethod SNI
     */
    readonly securityPolicy?: SecurityPolicyProtocol;
    /**
     * Domain names on the certificate (both main domain name and Subject Alternative names)
     */
    readonly aliases?: string[];
}
/**
 * Viewer certificate configuration class
 */
export declare class ViewerCertificate {
    readonly props: CfnDistribution.ViewerCertificateProperty;
    readonly aliases: string[];
    /**
     * Generate an AWS Certificate Manager (ACM) viewer certificate configuration
     *
     * @param certificate AWS Certificate Manager (ACM) certificate.
     *                    Your certificate must be located in the us-east-1 (US East (N. Virginia)) region to be accessed by CloudFront
     * @param options certificate configuration options
     */
    static fromAcmCertificate(certificate: certificatemanager.ICertificate, options?: ViewerCertificateOptions): ViewerCertificate;
    /**
     * Generate an IAM viewer certificate configuration
     *
     * @param iamCertificateId Identifier of the IAM certificate
     * @param options certificate configuration options
     */
    static fromIamCertificate(iamCertificateId: string, options?: ViewerCertificateOptions): ViewerCertificate;
    /**
     * Generate a viewer certificate configuration using
     * the CloudFront default certificate (e.g. d111111abcdef8.cloudfront.net)
     * and a `SecurityPolicyProtocol.TLS_V1` security policy.
     *
     * @param aliases Alternative CNAME aliases
     *                You also must create a CNAME record with your DNS service to route queries
     */
    static fromCloudFrontDefaultCertificate(...aliases: string[]): ViewerCertificate;
    private constructor();
}
export interface CloudFrontWebDistributionProps {
    /**
     * A comment for this distribution in the CloudFront console.
     *
     * @default - No comment is added to distribution.
     */
    readonly comment?: string;
    /**
     * Enable or disable the distribution.
     *
     * @default true
     */
    readonly enabled?: boolean;
    /**
     * The default object to serve.
     *
     * @default - "index.html" is served.
     */
    readonly defaultRootObject?: string;
    /**
     * If your distribution should have IPv6 enabled.
     *
     * @default true
     */
    readonly enableIpV6?: boolean;
    /**
     * The max supported HTTP Versions.
     *
     * @default HttpVersion.HTTP2
     */
    readonly httpVersion?: HttpVersion;
    /**
     * The price class for the distribution (this impacts how many locations CloudFront uses for your distribution, and billing)
     *
     * @default PriceClass.PRICE_CLASS_100 the cheapest option for CloudFront is picked by default.
     */
    readonly priceClass?: PriceClass;
    /**
     * The default viewer policy for incoming clients.
     *
     * @default RedirectToHTTPs
     */
    readonly viewerProtocolPolicy?: ViewerProtocolPolicy;
    /**
     * The origin configurations for this distribution. Behaviors are a part of the origin.
     */
    readonly originConfigs: SourceConfiguration[];
    /**
     * Optional - if we should enable logging.
     * You can pass an empty object ({}) to have us auto create a bucket for logging.
     * Omission of this property indicates no logging is to be enabled.
     *
     * @default - no logging is enabled by default.
     */
    readonly loggingConfig?: LoggingConfiguration;
    /**
     * How CloudFront should handle requests that are not successful (eg PageNotFound)
     *
     * By default, CloudFront does not replace HTTP status codes in the 4xx and 5xx range
     * with custom error messages. CloudFront does not cache HTTP status codes.
     *
     * @default - No custom error configuration.
     */
    readonly errorConfigurations?: CfnDistribution.CustomErrorResponseProperty[];
    /**
     * Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution.
     *
     * To specify a web ACL created using the latest version of AWS WAF, use the ACL ARN, for example
     * `arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a`.
     *
     * To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `473e64fd-f30b-4765-81a0-62ad96dd167a`.
     *
     * @see https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html
     * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.
     *
     * @default - No AWS Web Application Firewall web access control list (web ACL).
     */
    readonly webACLId?: string;
    /**
     * Specifies whether you want viewers to use HTTP or HTTPS to request your objects,
     * whether you're using an alternate domain name with HTTPS, and if so,
     * if you're using AWS Certificate Manager (ACM) or a third-party certificate authority.
     *
     * @default ViewerCertificate.fromCloudFrontDefaultCertificate()
     *
     * @see https://aws.amazon.com/premiumsupport/knowledge-center/custom-ssl-certificate-cloudfront/
     */
    readonly viewerCertificate?: ViewerCertificate;
    /**
     * Controls the countries in which your content is distributed.
     *
     * @default No geo restriction
     */
    readonly geoRestriction?: GeoRestriction;
}
/**
 * Attributes used to import a Distribution.
 */
export interface CloudFrontWebDistributionAttributes {
    /**
     * The generated domain name of the Distribution, such as d111111abcdef8.cloudfront.net.
     *
     * @attribute
     */
    readonly domainName: string;
    /**
     * The distribution ID for this distribution.
     *
     * @attribute
     */
    readonly distributionId: string;
}
/**
 * Amazon CloudFront is a global content delivery network (CDN) service that securely delivers data, videos,
 * applications, and APIs to your viewers with low latency and high transfer speeds.
 * CloudFront fronts user provided content and caches it at edge locations across the world.
 *
 * Here's how you can use this construct:
 *
 * ```ts
 * const sourceBucket = new s3.Bucket(this, 'Bucket');
 *
 * const distribution = new cloudfront.CloudFrontWebDistribution(this, 'MyDistribution', {
 *   originConfigs: [
 *     {
 *       s3OriginSource: {
 *       s3BucketSource: sourceBucket,
 *       },
 *       behaviors : [ {isDefaultBehavior: true}],
 *     },
 *   ],
 * });
 * ```
 *
 * This will create a CloudFront distribution that uses your S3Bucket as it's origin.
 *
 * You can customize the distribution using additional properties from the CloudFrontWebDistributionProps interface.
 *
 * @resource AWS::CloudFront::Distribution
 */
export declare class CloudFrontWebDistribution extends cdk.Resource implements IDistribution {
    /**
     * Creates a construct that represents an external (imported) distribution.
     */
    static fromDistributionAttributes(scope: Construct, id: string, attrs: CloudFrontWebDistributionAttributes): IDistribution;
    /**
     * The logging bucket for this CloudFront distribution.
     * If logging is not enabled for this distribution - this property will be undefined.
     */
    readonly loggingBucket?: s3.IBucket;
    /**
     * The domain name created by CloudFront for this distribution.
     * If you are using aliases for your distribution, this is the domainName your DNS records should point to.
     * (In Route53, you could create an ALIAS record to this value, for example.)
     */
    readonly distributionDomainName: string;
    /**
     * The distribution ID for this distribution.
     */
    readonly distributionId: string;
    /**
     * Maps our methods to the string arrays they are
     */
    private readonly METHOD_LOOKUP_MAP;
    /**
     * Maps for which SecurityPolicyProtocol are available to which SSLMethods
     */
    private readonly VALID_SSL_PROTOCOLS;
    constructor(scope: Construct, id: string, props: CloudFrontWebDistributionProps);
    /**
     * Adds an IAM policy statement associated with this distribution to an IAM
     * principal's policy.
     *
     * @param identity The principal
     * @param actions The set of actions to allow (i.e. "cloudfront:ListInvalidations")
     */
    grant(identity: iam.IGrantable, ...actions: string[]): iam.Grant;
    /**
     * Grant to create invalidations for this bucket to an IAM principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantCreateInvalidation(identity: iam.IGrantable): iam.Grant;
    private toBehavior;
    private toOriginProperty;
    /**
     * Takes origin shield region from props and converts to CfnDistribution.OriginShieldProperty
     */
    private toOriginShieldProperty;
}
