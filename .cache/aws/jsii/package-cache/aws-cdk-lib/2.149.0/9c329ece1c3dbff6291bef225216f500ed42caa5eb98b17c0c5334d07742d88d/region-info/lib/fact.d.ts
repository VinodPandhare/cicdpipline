/**
 * A database of regional information.
 */
export declare class Fact {
    /**
     * @returns the list of names of AWS Regions for which there is at least one registered fact. This
     *          includes Regions defined in AWS_REGIONS plus custom defined regions.
     */
    static get regions(): string[];
    /**
     * Returns the list of names of registered facts.
     *
     * All facts will be present in at least one region.
     */
    static get names(): string[];
    /**
     * Return all pairs of (region, factName) that are defined
     */
    static definedFacts(): Array<string[]>;
    /**
     * Retrieves a fact from this Fact database.
     *
     * @param region the name of the region (e.g: `us-east-1`)
     * @param name   the name of the fact being looked up (see the `FactName` class for details)
     *
     * @returns the fact value if it is known, and `undefined` otherwise.
     */
    static find(region: string, name: string): string | undefined;
    /**
     * Retrieve a fact from the Fact database. (retrieval will fail if the specified region or
     * fact name does not exist.)
     *
     * @param region the name of the region (e.g: `us-east-1`)
     * @param name the name of the fact being looked up (see the `FactName` class for details)
     */
    static requireFact(region: string, name: string): string;
    /**
     * Registers a new fact in this Fact database.
     *
     * @param fact           the new fact to be registered.
     * @param allowReplacing whether new facts can replace existing facts or not.
     */
    static register(fact: IFact, allowReplacing?: boolean): void;
    /**
     * Removes a fact from the database.
     * @param region the region for which the fact is to be removed.
     * @param name   the name of the fact to remove.
     * @param value  the value that should be removed (removal will fail if the value is specified, but does not match the
     *               current stored value).
     */
    static unregister(region: string, name: string, value?: string): void;
    private static readonly database;
    private constructor();
}
/**
 * A fact that can be registered about a particular region.
 */
export interface IFact {
    /**
     * The region for which this fact applies.
     */
    readonly region: string;
    /**
     * The name of this fact. Standardized values are provided by the `Facts` class.
     */
    readonly name: string;
    /**
     * The value of this fact.
     */
    readonly value: string | undefined;
}
/**
 * All standardized fact names.
 */
export declare class FactName {
    /**
     * The name of the partition for a region (e.g: 'aws', 'aws-cn', ...)
     */
    static readonly PARTITION = "partition";
    /**
     * The domain suffix for a region (e.g: 'amazonaws.com`)
     */
    static readonly DOMAIN_SUFFIX = "domainSuffix";
    /**
     * Whether the AWS::CDK::Metadata CloudFormation Resource is available in-region or not. The value is a boolean
     * modelled as `YES` or `NO`.
     */
    static readonly CDK_METADATA_RESOURCE_AVAILABLE = "cdk:metadata-resource:available";
    /**
     * Whether the given region is an opt-in region or not. The value is a boolean
     * modelled as `YES` or `NO`.
     */
    static readonly IS_OPT_IN_REGION = "aws:is-opt-in-region";
    /**
     * The endpoint used for hosting S3 static websites
     */
    static readonly S3_STATIC_WEBSITE_ENDPOINT = "s3-static-website:endpoint";
    /**
     * The endpoint used for aliasing S3 static websites in Route 53
     */
    static readonly S3_STATIC_WEBSITE_ZONE_53_HOSTED_ZONE_ID = "s3-static-website:route-53-hosted-zone-id";
    /**
     * The hosted zone ID used by Route 53 to alias a EBS environment endpoint in this region (e.g: Z2O1EMRO9K5GLX)
     */
    static readonly EBS_ENV_ENDPOINT_HOSTED_ZONE_ID = "ebs-environment:route-53-hosted-zone-id";
    /**
     * The prefix for VPC Endpoint Service names,
     * cn.com.amazonaws.vpce for China regions,
     * com.amazonaws.vpce otherwise.
     */
    static readonly VPC_ENDPOINT_SERVICE_NAME_PREFIX = "vpcEndpointServiceNamePrefix";
    /**
     * The account for ELBv2 in this region
     */
    static readonly ELBV2_ACCOUNT = "elbv2Account";
    /**
     * The ID of the AWS account that owns the public ECR repository that contains the
     * AWS Deep Learning Containers images in a given region.
     */
    static readonly DLC_REPOSITORY_ACCOUNT = "dlcRepositoryAccount";
    /**
     * The ID of the AWS account that owns the public ECR repository that contains the
     * AWS App Mesh Envoy Proxy images in a given region.
     */
    static readonly APPMESH_ECR_ACCOUNT = "appMeshRepositoryAccount";
    /**
     * The CIDR block used by Kinesis Data Firehose servers.
     */
    static readonly FIREHOSE_CIDR_BLOCK = "firehoseCidrBlock";
    /**
     * The SAML Sign On URL for partition used by IAM SAML Principal
     */
    static readonly SAML_SIGN_ON_URL = "samlSignOnUrl";
    /**
     * The latest Lambda NodeJS runtime available in a given region.
     */
    static readonly LATEST_NODE_RUNTIME = "latestNodeRuntime";
    /**
     * The ARN of CloudWatch Lambda Insights for a version (e.g. 1.0.98.0)
     */
    static cloudwatchLambdaInsightsVersion(version: string, arch?: string): string;
    /**
     * The ARN of AppConfig Lambda Layer for a given version (e.g. 2.0.181)
     * @param version The layer version.
     * @param arch The architecture (optional), defaults to x86_64.
     */
    static appConfigLambdaLayerVersion(version: string, arch?: string): string;
    /**
     * The name of the regional service principal for a given service.
     *
     * @param service the service name, either simple (e.g: `s3`, `codedeploy`) or qualified (e.g: `s3.amazonaws.com`).
     *                The `.amazonaws.com` and `.amazonaws.com.cn` domains are stripped from service names, so they are
     *                canonicalized in that respect.
     */
    static servicePrincipal(service: string): string;
    /**
     * The ARN of Amazon Distro for OpenTelemetry (ADOT) Lambda layer for a given lambda type, version and architecture.
     *
     * @param type the type of the ADOT lambda layer
     * @param version the layer version.
     * @param architecture the Lambda Function architecture (e.g. 'x86_64' or 'arm64')
     */
    static adotLambdaLayer(type: string, version: string, architecture: string): string;
    /**
     * The ARN of Parameters and Secrets Lambda layer for a given lambda architecture.
     *
     * @param version the layer version
     * @param architecture the Lambda Function architecture (e.g. 'x86_64' or 'arm64')
     */
    static paramsAndSecretsLambdaLayer(version: string, architecture: string): string;
}