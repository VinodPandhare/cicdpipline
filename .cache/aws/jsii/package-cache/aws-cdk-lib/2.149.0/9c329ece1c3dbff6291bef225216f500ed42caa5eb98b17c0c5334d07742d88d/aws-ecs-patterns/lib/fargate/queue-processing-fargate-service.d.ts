import { Construct } from 'constructs';
import * as ec2 from '../../../aws-ec2';
import { FargateService, FargateTaskDefinition, HealthCheck } from '../../../aws-ecs';
import { FargateServiceBaseProps } from '../base/fargate-service-base';
import { QueueProcessingServiceBase, QueueProcessingServiceBaseProps } from '../base/queue-processing-service-base';
/**
 * The properties for the QueueProcessingFargateService service.
 */
export interface QueueProcessingFargateServiceProps extends QueueProcessingServiceBaseProps, FargateServiceBaseProps {
    /**
     * Optional name for the container added.
     * This name is not used when `taskDefinition` is provided.
     *
     * @default - QueueProcessingContainer
     */
    readonly containerName?: string;
    /**
     * The health check command and associated configuration parameters for the container.
     *
     * @default - Health check configuration from container.
     */
    readonly healthCheck?: HealthCheck;
    /**
     * The subnets to associate with the service.
     *
     * @default - Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.
     */
    readonly taskSubnets?: ec2.SubnetSelection;
    /**
     * The security groups to associate with the service. If you do not specify a security group, a new security group is created.
     *
     * @default - A new security group is created.
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * Specifies whether the task's elastic network interface receives a public IP address.
     *
     * If true, each task will receive a public IP address.
     *
     * @default false
     */
    readonly assignPublicIp?: boolean;
}
/**
 * Class to create a queue processing Fargate service
 */
export declare class QueueProcessingFargateService extends QueueProcessingServiceBase {
    /**
     * The Fargate service in this construct.
     */
    readonly service: FargateService;
    /**
     * The Fargate task definition in this construct.
     */
    readonly taskDefinition: FargateTaskDefinition;
    /**
     * Constructs a new instance of the QueueProcessingFargateService class.
     */
    constructor(scope: Construct, id: string, props?: QueueProcessingFargateServiceProps);
}