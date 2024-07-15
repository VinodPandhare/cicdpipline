import { Construct } from 'constructs';
import { CallApiGatewayEndpointBase } from './base';
import { CallApiGatewayEndpointBaseProps } from './base-types';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
import * as cdk from '../../../core';
/**
 * Properties for calling an HTTP API Endpoint
 */
export interface CallApiGatewayHttpApiEndpointProps extends CallApiGatewayEndpointBaseProps {
    /**
     * The Id of the API to call
     */
    readonly apiId: string;
    /**
     * The Stack in which the API is defined
     */
    readonly apiStack: cdk.Stack;
    /**
     * Name of the stage where the API is deployed to in API Gateway
     * @default '$default'
     */
    readonly stageName?: string;
}
/**
 * Call HTTP API endpoint as a Task
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-api-gateway.html
 */
export declare class CallApiGatewayHttpApiEndpoint extends CallApiGatewayEndpointBase {
    private readonly props;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig | undefined;
    protected readonly taskPolicies?: iam.PolicyStatement[] | undefined;
    protected readonly apiEndpoint: string;
    protected readonly arnForExecuteApi: string;
    protected readonly stageName?: string;
    constructor(scope: Construct, id: string, props: CallApiGatewayHttpApiEndpointProps);
    private getApiEndpoint;
    private getArnForExecuteApi;
}
