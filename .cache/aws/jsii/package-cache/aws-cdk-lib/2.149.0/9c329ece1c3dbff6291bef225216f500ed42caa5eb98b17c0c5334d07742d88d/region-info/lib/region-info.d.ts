/**
 * Information pertaining to an AWS region.
 */
export declare class RegionInfo {
    readonly name: string;
    /**
     * @returns the list of names of AWS regions for which there is at least one registered fact. This
     *          may not be an exaustive list of all available AWS regions.
     */
    static get regions(): RegionInfo[];
    /**
     * Retrieves a collection of all fact values for all regions that fact is defined in.
     *
     * @param factName the name of the fact to retrieve values for.
     *   For a list of common fact names, see the FactName class
     * @returns a mapping with AWS region codes as the keys,
     *   and the fact in the given region as the value for that key
     */
    static regionMap(factName: string): {
        [region: string]: string;
    };
    /**
     * Retrieves a collection of all fact values for all regions, limited to some partitions
     *
     * @param factName the name of the fact to retrieve values for.
     *   For a list of common fact names, see the FactName class
     * @param partitions list of partitions to retrieve facts for. Defaults
     *   to `['aws', 'aws-cn']`.
     * @returns a mapping with AWS region codes as the keys,
     *   and the fact in the given region as the value for that key
     */
    static limitedRegionMap(factName: string, partitions: string[]): {
        [region: string]: string;
    };
    /**
     * Obtain region info for a given region name.
     *
     * @param name the name of the region (e.g: us-east-1)
     */
    static get(name: string): RegionInfo;
    private constructor();
    /**
     * Whether the `AWS::CDK::Metadata` CloudFormation Resource is available in this region or not.
     */
    get cdkMetadataResourceAvailable(): boolean;
    /**
     * Whether the given region is an opt-in region
     */
    get isOptInRegion(): boolean;
    /**
     * The domain name suffix (e.g: amazonaws.com) for this region.
     */
    get domainSuffix(): string | undefined;
    /**
     * The name of the ARN partition for this region (e.g: aws).
     */
    get partition(): string | undefined;
    /**
     * The endpoint used by S3 static website hosting in this region (e.g: s3-static-website-us-east-1.amazonaws.com)
     */
    get s3StaticWebsiteEndpoint(): string | undefined;
    /**
     * The hosted zone ID used by Route 53 to alias a S3 static website in this region (e.g: Z2O1EMRO9K5GLX)
     */
    get s3StaticWebsiteHostedZoneId(): string | undefined;
    /**
     * The hosted zone ID used by Route 53 to alias a EBS environment endpoint in this region (e.g: Z2O1EMRO9K5GLX)
     */
    get ebsEnvEndpointHostedZoneId(): string | undefined;
    /**
     * The prefix for VPC Endpoint Service names,
     * cn.com.amazonaws.vpce for China regions,
     * com.amazonaws.vpce otherwise.
     */
    get vpcEndpointServiceNamePrefix(): string | undefined;
    /**
     * The name of the service principal for a given service in this region.
     * @param service the service name (e.g: s3.amazonaws.com)
     */
    servicePrincipal(service: string): string | undefined;
    /**
     * The account ID for ELBv2 in this region
     */
    get elbv2Account(): string | undefined;
    /**
     * The ID of the AWS account that owns the public ECR repository containing the
     * AWS Deep Learning Containers images in this region.
     */
    get dlcRepositoryAccount(): string | undefined;
    /**
     * The ARN of the CloudWatch Lambda Insights extension, for the given version.
     * @param insightsVersion the version (e.g. 1.0.98.0)
     * @param architecture the Lambda Function architecture (e.g. 'x86_64' or 'arm64')
     */
    cloudwatchLambdaInsightsArn(insightsVersion: string, architecture?: string): string | undefined;
    /**
     * The ARN of the AppConfig Lambda Layer, for the given version.
     * @param layerVersion The layer version (e.g. 2.0.181)
     * @param architecture The Lambda Function architecture (e.g. 'x86_64' or 'arm64'), defaults to x86_64
     */
    appConfigLambdaArn(layerVersion: string, architecture?: string): string | undefined;
    /**
     * The ID of the AWS account that owns the public ECR repository that contains the
     * AWS App Mesh Envoy Proxy images in a given region.
     */
    get appMeshRepositoryAccount(): string | undefined;
    /**
     * The CIDR block used by Kinesis Data Firehose servers.
     */
    get firehoseCidrBlock(): string | undefined;
    /**
     * The ARN of the ADOT Lambda layer, for the given layer type, version and architecture.
     *
     * @param type the type of the ADOT lambda layer
     * @param version the layer version.
     * @param architecture the Lambda Function architecture (e.g. 'x86_64' or 'arm64')
     */
    adotLambdaLayerArn(type: string, version: string, architecture: string): string | undefined;
    /**
     * The ARN of the Parameters and Secrets Lambda layer for the given lambda architecture.
     *
     * @param version the layer version
     * @param architecture the Lambda Function architecture (e.g. 'x86_64' or 'arm64')
     */
    paramsAndSecretsLambdaLayerArn(version: string, architecture: string): string | undefined;
    /**
     * SAML Sign On URL used by IAM SAML Principals.
     */
    get samlSignOnUrl(): string | undefined;
}
