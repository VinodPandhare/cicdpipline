import { Construct } from 'constructs';
import { IModel } from './model-base';
/**
 * A Bedrock provisioned model
 *
 * Note: CloudFormation does not currently support creating Bedrock Provisioned Throughput
 * resources outside of a custom resource. You can import provisioned models created by
 * provisioning throughput in Bedrock outside the CDK or via a custom resource with
 * {@link ProvisionedModel#fromProvisionedModelArn}.
 *
 * @see https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html
 */
export declare class ProvisionedModel implements IModel {
    /**
     * Import an provisioned model given an ARN
     */
    static fromProvisionedModelArn(_scope: Construct, _id: string, provisionedModelArn: string): IModel;
    /**
     * The ARN of the provisioned model.
     */
    readonly modelArn: string;
    private constructor();
}
