import { IBucket } from '../../../aws-s3';
import { ServerSideEncryption } from '../../../aws-s3-deployment';
import * as cdk from '../../../core';
/**
 * Product stack synthesizer props.
 */
export interface ProductStackSynthesizerProps {
    /**
     * The parent stack of the stack that this synthesizer is bound to.
     */
    readonly parentStack: cdk.Stack;
    /**
     * The bucket used to store assets and enable ProductStack asset support.
     *
     * @default - No bucket provided and assets will not be supported
     */
    readonly assetBucket?: IBucket;
    /**
     * A ServerSideEncryption can be enabled to encrypt assets that are put into assetBucket.
     *
     * @default - No encryption is used
     */
    readonly serverSideEncryption?: ServerSideEncryption;
    /**
     * For AWS_KMS ServerSideEncryption a KMS KeyId must be provided which will be used to encrypt assets.
     *
     * @default - No KMS KeyId and SSE_KMS encryption cannot be used
     */
    readonly serverSideEncryptionAwsKmsKeyId?: string;
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
}
/**
 * Deployment environment for an AWS Service Catalog product stack.
 *
 * Interoperates with the StackSynthesizer of the parent stack.
 */
export declare class ProductStackSynthesizer extends cdk.StackSynthesizer {
    private readonly parentStack;
    private readonly assetBucket?;
    private readonly serverSideEncryption?;
    private readonly serverSideEncryptionAwsKmsKeyId?;
    private readonly memoryLimit?;
    private parentAssetBucket?;
    constructor(props: ProductStackSynthesizerProps);
    addFileAsset(asset: cdk.FileAssetSource): cdk.FileAssetLocation;
    private physicalNameOfBucket;
    addDockerImageAsset(_asset: cdk.DockerImageAssetSource): cdk.DockerImageAssetLocation;
    synthesize(session: cdk.ISynthesisSession): void;
}
