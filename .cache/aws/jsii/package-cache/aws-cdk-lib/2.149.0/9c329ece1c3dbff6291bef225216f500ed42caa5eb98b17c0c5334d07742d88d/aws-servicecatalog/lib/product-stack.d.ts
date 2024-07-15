import { Construct } from 'constructs';
import { ProductStackHistory } from './product-stack-history';
import { IBucket } from '../../aws-s3';
import { ServerSideEncryption } from '../../aws-s3-deployment';
import * as cdk from '../../core';
/**
 * Product stack props.
 */
export interface ProductStackProps {
    /**
     * A Bucket can be passed to store assets, enabling ProductStack Asset support
     *
     * @default - No Bucket provided and Assets will not be supported.
     */
    readonly assetBucket?: IBucket;
    /**
     * A ServerSideEncryption can be enabled to encrypt assets that are put into assetBucket
     *
     * @default - No encryption is used
     */
    readonly serverSideEncryption?: ServerSideEncryption;
    /**
     * For AWS_KMS ServerSideEncryption a KMS KeyId must be provided which will be used to encrypt assets
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
 * A Service Catalog product stack, which is similar in form to a Cloudformation nested stack.
 * You can add the resources to this stack that you want to define for your service catalog product.
 *
 * This stack will not be treated as an independent deployment
 * artifact (won't be listed in "cdk list" or deployable through "cdk deploy"),
 * but rather only synthesized as a template and uploaded as an asset to S3.
 *
 */
export declare class ProductStack extends cdk.Stack {
    readonly templateFile: string;
    private _parentProductStackHistory?;
    private _templateUrl?;
    private _parentStack;
    private assetBucket?;
    constructor(scope: Construct, id: string, props?: ProductStackProps);
    /**
     * Set the parent product stack history
     *
     * @internal
     */
    _setParentProductStackHistory(parentProductStackHistory: ProductStackHistory): ProductStackHistory;
    /**
     * Fetch the template URL.
     *
     * @internal
     */
    _getTemplateUrl(): string;
    /**
     * Fetch the asset bucket.
     *
     * @internal
     */
    _getAssetBucket(): IBucket | undefined;
    /**
     * Fetch the parent Stack.
     *
     * @internal
     */
    _getParentStack(): cdk.Stack;
    /**
     * Synthesize the product stack template, overrides the `super` class method.
     *
     * Defines an asset at the parent stack which represents the template of this
     * product stack.
     *
     * @internal
     */
    _synthesizeTemplate(session: cdk.ISynthesisSession): void;
}
