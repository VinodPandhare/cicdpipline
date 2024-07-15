import { Construct } from 'constructs';
import { ISource } from './source';
import * as cloudfront from '../../aws-cloudfront';
import * as ec2 from '../../aws-ec2';
import * as iam from '../../aws-iam';
import * as logs from '../../aws-logs';
import * as s3 from '../../aws-s3';
import * as cdk from '../../core';
/**
 * Properties for `BucketDeployment`.
 */
export interface BucketDeploymentProps {
    /**
     * The sources from which to deploy the contents of this bucket.
     */
    readonly sources: ISource[];
    /**
     * The S3 bucket to sync the contents of the zip file to.
     */
    readonly destinationBucket: s3.IBucket;
    /**
     * Key prefix in the destination bucket.
     *
     * Must be <=104 characters
     *
     * @default "/" (unzip to root of the destination bucket)
     */
    readonly destinationKeyPrefix?: string;
    /**
     * If this is set, the zip file will be synced to the destination S3 bucket and extracted.
     * If false, the file will remain zipped in the destination bucket.
     * @default true
     */
    readonly extract?: boolean;
    /**
     * If this is set, matching files or objects will be excluded from the deployment's sync
     * command. This can be used to exclude a file from being pruned in the destination bucket.
     *
     * If you want to just exclude files from the deployment package (which excludes these files
     * evaluated when invalidating the asset), you should leverage the `exclude` property of
     * `AssetOptions` when defining your source.
     *
     * @default - No exclude filters are used
     * @see https://docs.aws.amazon.com/cli/latest/reference/s3/index.html#use-of-exclude-and-include-filters
     */
    readonly exclude?: string[];
    /**
     * If this is set, matching files or objects will be included with the deployment's sync
     * command. Since all files from the deployment package are included by default, this property
     * is usually leveraged alongside an `exclude` filter.
     *
     * @default - No include filters are used and all files are included with the sync command
     * @see https://docs.aws.amazon.com/cli/latest/reference/s3/index.html#use-of-exclude-and-include-filters
     */
    readonly include?: string[];
    /**
     * If this is set to false, files in the destination bucket that
     * do not exist in the asset, will NOT be deleted during deployment (create/update).
     *
     * @see https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html
     *
     * @default true
     */
    readonly prune?: boolean;
    /**
     * If this is set to "false", the destination files will be deleted when the
     * resource is deleted or the destination is updated.
     *
     * NOTICE: Configuring this to "false" might have operational implications. Please
     * visit to the package documentation referred below to make sure you fully understand those implications.
     *
     * @see https://github.com/aws/aws-cdk/tree/main/packages/aws-cdk-lib/aws-s3-deployment#retain-on-delete
     * @default true - when resource is deleted/updated, files are retained
     */
    readonly retainOnDelete?: boolean;
    /**
     * The CloudFront distribution using the destination bucket as an origin.
     * Files in the distribution's edge caches will be invalidated after
     * files are uploaded to the destination bucket.
     *
     * @default - No invalidation occurs
     */
    readonly distribution?: cloudfront.IDistribution;
    /**
     * The file paths to invalidate in the CloudFront distribution.
     *
     * @default - All files under the destination bucket key prefix will be invalidated.
     */
    readonly distributionPaths?: string[];
    /**
     * The number of days that the lambda function's log events are kept in CloudWatch Logs.
     *
     * This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
     * `logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.
     *
     * @default logs.RetentionDays.INFINITE
     */
    readonly logRetention?: logs.RetentionDays;
    /**
     * The Log Group used for logging of events emitted by the custom resource's lambda function.
     *
     * Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
     * If you are deploying to another type of region, please check regional availability first.
     *
     * @default - a default log group created by AWS Lambda
     */
    readonly logGroup?: logs.ILogGroup;
    /**
     * The amount of memory (in MiB) to allocate to the AWS Lambda function which
     * replicates the files from the CDK bucket to the destination bucket.
     *
     * If you are deploying large files, you will need to increase this number
     * accordingly.
     *
     * @default 128
     */
    readonly memoryLimit?: number;
    /**
     * The size of the AWS Lambda function’s /tmp directory in MiB.
     *
     * @default 512 MiB
     */
    readonly ephemeralStorageSize?: cdk.Size;
    /**
     *  Mount an EFS file system. Enable this if your assets are large and you encounter disk space errors.
     *  Enabling this option will require a VPC to be specified.
     *
     * @default - No EFS. Lambda has access only to 512MB of disk space.
     */
    readonly useEfs?: boolean;
    /**
     * Execution role associated with this function
     *
     * @default - A role is automatically created
     */
    readonly role?: iam.IRole;
    /**
     * User-defined object metadata to be set on all objects in the deployment
     * @default - No user metadata is set
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#UserMetadata
     */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
     * System-defined cache-control metadata to be set on all objects in the deployment.
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly cacheControl?: CacheControl[];
    /**
     * System-defined cache-disposition metadata to be set on all objects in the deployment.
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly contentDisposition?: string;
    /**
     * System-defined content-encoding metadata to be set on all objects in the deployment.
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly contentEncoding?: string;
    /**
     * System-defined content-language metadata to be set on all objects in the deployment.
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly contentLanguage?: string;
    /**
     * System-defined content-type metadata to be set on all objects in the deployment.
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly contentType?: string;
    /**
     * System-defined expires metadata to be set on all objects in the deployment.
     * @default - The objects in the distribution will not expire.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly expires?: cdk.Expiration;
    /**
     * System-defined x-amz-server-side-encryption metadata to be set on all objects in the deployment.
     * @default - Server side encryption is not used.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly serverSideEncryption?: ServerSideEncryption;
    /**
     * System-defined x-amz-storage-class metadata to be set on all objects in the deployment.
     * @default - Default storage-class for the bucket is used.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly storageClass?: StorageClass;
    /**
     * System-defined x-amz-website-redirect-location metadata to be set on all objects in the deployment.
     * @default - No website redirection.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly websiteRedirectLocation?: string;
    /**
     * System-defined x-amz-server-side-encryption-aws-kms-key-id metadata to be set on all objects in the deployment.
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
     */
    readonly serverSideEncryptionAwsKmsKeyId?: string;
    /**
     * System-defined x-amz-server-side-encryption-customer-algorithm metadata to be set on all objects in the deployment.
     * Warning: This is not a useful parameter until this bug is fixed: https://github.com/aws/aws-cdk/issues/6080
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html#sse-c-how-to-programmatically-intro
     */
    readonly serverSideEncryptionCustomerAlgorithm?: string;
    /**
     * System-defined x-amz-acl metadata to be set on all objects in the deployment.
     * @default - Not set.
     * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl
     */
    readonly accessControl?: s3.BucketAccessControl;
    /**
     * The VPC network to place the deployment lambda handler in.
     * This is required if `useEfs` is set.
     *
     * @default None
     */
    readonly vpc?: ec2.IVpc;
    /**
     * Where in the VPC to place the deployment lambda handler.
     * Only used if 'vpc' is supplied.
     *
     * @default - the Vpc default strategy if not specified
     */
    readonly vpcSubnets?: ec2.SubnetSelection;
    /**
     * If set to true, uploads will precompute the value of `x-amz-content-sha256`
     * and include it in the signed S3 request headers.
     *
     * @default - `x-amz-content-sha256` will not be computed
     */
    readonly signContent?: boolean;
}
/**
 * `BucketDeployment` populates an S3 bucket with the contents of .zip files from
 * other S3 buckets or from local disk
 */
export declare class BucketDeployment extends Construct {
    private readonly cr;
    private _deployedBucket?;
    private requestDestinationArn;
    private readonly destinationBucket;
    private readonly sources;
    /**
     * Execution role of the Lambda function behind the custom CloudFormation resource of type `Custom::CDKBucketDeployment`.
     */
    readonly handlerRole: iam.IRole;
    constructor(scope: Construct, id: string, props: BucketDeploymentProps);
    /**
     * The bucket after the deployment
     *
     * If you want to reference the destination bucket in another construct and make sure the
     * bucket deployment has happened before the next operation is started, pass the other construct
     * a reference to `deployment.deployedBucket`.
     *
     * Note that this only returns an immutable reference to the destination bucket.
     * If sequenced access to the original destination bucket is required, you may add a dependency
     * on the bucket deployment instead: `otherResource.node.addDependency(deployment)`
     */
    get deployedBucket(): s3.IBucket;
    /**
     * The object keys for the sources deployed to the S3 bucket.
     *
     * This returns a list of tokenized object keys for source files that are deployed to the bucket.
     *
     * This can be useful when using `BucketDeployment` with `extract` set to `false` and you need to reference
     * the object key that resides in the bucket for that zip source file somewhere else in your CDK
     * application, such as in a CFN output.
     *
     * For example, use `Fn.select(0, myBucketDeployment.objectKeys)` to reference the object key of the
     * first source file in your bucket deployment.
     */
    get objectKeys(): string[];
    /**
     * Add an additional source to the bucket deployment
     *
     * @example
     * declare const websiteBucket: s3.IBucket;
     * const deployment = new s3deploy.BucketDeployment(this, 'Deployment', {
     *   sources: [s3deploy.Source.asset('./website-dist')],
     *   destinationBucket: websiteBucket,
     * });
     *
     * deployment.addSource(s3deploy.Source.asset('./another-asset'));
     */
    addSource(source: ISource): void;
    private renderUniqueId;
    private renderSingletonUuid;
    /**
     * Function to get/create a stack singleton instance of EFS FileSystem per vpc.
     *
     * @param scope Construct
     * @param fileSystemProps EFS FileSystemProps
     */
    private getOrCreateEfsFileSystem;
}
export interface DeployTimeSubstitutedFileProps {
    /**
     * Path to the user's local file.
     */
    readonly source: string;
    /**
     * The object key in the destination bucket where the processed
     * file would be written to.
     * @default - Fingerprint of the file content would be used as object key
     */
    readonly destinationKey?: string;
    /**
     * The S3 bucket to sync the contents of the zip file to.
     */
    readonly destinationBucket: s3.IBucket;
    /**
     * User-defined substitutions to make in the file.
     * Placeholders in the user's local file must be specified with double curly
     * brackets and spaces. For example, if you use the key 'xxxx' in the file,
     * it must be written as: {{ xxxx }} to be recognized by the construct as a
     * substitution.
     */
    readonly substitutions: {
        [key: string]: string;
    };
    /**
     * Execution role associated with this function
     *
     * @default - A role is automatically created
     */
    readonly role?: iam.IRole;
}
/**
 * `DeployTimeSubstitutedFile` is an extension of `BucketDeployment` that allows users to
 * upload individual files and specify to make substitutions in the file.
 */
export declare class DeployTimeSubstitutedFile extends BucketDeployment {
    readonly objectKey: string;
    constructor(scope: Construct, id: string, props: DeployTimeSubstitutedFileProps);
    get bucket(): s3.IBucket;
}
/**
 * Used for HTTP cache-control header, which influences downstream caches.
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
 */
export declare class CacheControl {
    /**
     * The raw cache control setting.
     */
    readonly value: any;
    /**
     * Sets 'must-revalidate'.
     */
    static mustRevalidate(): CacheControl;
    /**
     * Sets 'no-cache'.
     */
    static noCache(): CacheControl;
    /**
     * Sets 'no-transform'.
     */
    static noTransform(): CacheControl;
    /**
     * Sets 'no-store'.
     */
    static noStore(): CacheControl;
    /**
     * Sets 'must-understand'.
     */
    static mustUnderstand(): CacheControl;
    /**
     * Sets 'public'.
     */
    static setPublic(): CacheControl;
    /**
     * Sets 'private'.
     */
    static setPrivate(): CacheControl;
    /**
     * Sets 'immutable'.
     */
    static immutable(): CacheControl;
    /**
     * Sets 'proxy-revalidate'.
     */
    static proxyRevalidate(): CacheControl;
    /**
     * Sets 'max-age=<duration-in-seconds>'.
     */
    static maxAge(t: cdk.Duration): CacheControl;
    /**
     * Sets 's-maxage=<duration-in-seconds>'.
     */
    static sMaxAge(t: cdk.Duration): CacheControl;
    /**
     * Sets 'stale-while-revalidate=<duration-in-seconds>'.
     */
    static staleWhileRevalidate(t: cdk.Duration): CacheControl;
    /**
     * Sets 'stale-if-error=<duration-in-seconds>'.
     */
    static staleIfError(t: cdk.Duration): CacheControl;
    /**
     * Constructs a custom cache control key from the literal value.
     */
    static fromString(s: string): CacheControl;
    private constructor();
}
/**
 * Indicates whether server-side encryption is enabled for the object, and whether that encryption is
 * from the AWS Key Management Service (AWS KMS) or from Amazon S3 managed encryption (SSE-S3).
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
 */
export declare enum ServerSideEncryption {
    /**
     * 'AES256'
     */
    AES_256 = "AES256",
    /**
     * 'aws:kms'
     */
    AWS_KMS = "aws:kms"
}
/**
 * Storage class used for storing the object.
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#SysMetadata
 */
export declare enum StorageClass {
    /**
     * 'STANDARD'
     */
    STANDARD = "STANDARD",
    /**
     * 'REDUCED_REDUNDANCY'
     */
    REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY",
    /**
     * 'STANDARD_IA'
     */
    STANDARD_IA = "STANDARD_IA",
    /**
     * 'ONEZONE_IA'
     */
    ONEZONE_IA = "ONEZONE_IA",
    /**
     * 'INTELLIGENT_TIERING'
     */
    INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
    /**
     * 'GLACIER'
     */
    GLACIER = "GLACIER",
    /**
     * 'DEEP_ARCHIVE'
     */
    DEEP_ARCHIVE = "DEEP_ARCHIVE"
}
/**
 * Custom user defined metadata.
 *
 * @deprecated Use raw property bags instead (object literals, `Map<String,Object>`, etc... )
 */
export interface UserDefinedObjectMetadata {
    /**
     * Arbitrary metadata key-values
     * The `x-amz-meta-` prefix will automatically be added to keys.
     *
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#UserMetadata
     *
     * This index signature is not usable in non-TypeScript/JavaScript languages.
     *
     * @jsii ignore
     */
    readonly [key: string]: string;
}