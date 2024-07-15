import { Construct } from 'constructs';
import { ScalingInterval } from '../../../aws-applicationautoscaling';
import { IVpc } from '../../../aws-ec2';
import { BaseService, CapacityProviderStrategy, Cluster, ContainerImage, DeploymentController, DeploymentCircuitBreaker, ICluster, LogDriver, PropagatedTagSource, Secret } from '../../../aws-ecs';
import { IQueue } from '../../../aws-sqs';
import { Duration } from '../../../core';
/**
 * The properties for the base QueueProcessingEc2Service or QueueProcessingFargateService service.
 */
export interface QueueProcessingServiceBaseProps {
    /**
     * The name of the service.
     *
     * @default - CloudFormation-generated name.
     */
    readonly serviceName?: string;
    /**
     * The name of the cluster that hosts the service.
     *
     * If a cluster is specified, the vpc construct should be omitted. Alternatively, you can omit both cluster and vpc.
     * @default - create a new cluster; if both cluster and vpc are omitted, a new VPC will be created for you.
     */
    readonly cluster?: ICluster;
    /**
     * The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed.
     *
     * If a vpc is specified, the cluster construct should be omitted. Alternatively, you can omit both vpc and cluster.
     * @default - uses the VPC defined in the cluster or creates a new VPC.
     */
    readonly vpc?: IVpc;
    /**
     * The image used to start a container.
     *
     * For `QueueProcessingFargateService`, either `image` or `taskDefinition` must be specified, but not both.
     * For `QueueProcessingEc2Service`, `image` is required.
     *
     * @default - the image of the task definition is used for Fargate, required otherwise
     */
    readonly image?: ContainerImage;
    /**
     * The command that is passed to the container.
     *
     * If you provide a shell command as a single string, you have to quote command-line arguments.
     *
     * @default - CMD value built into container image.
     */
    readonly command?: string[];
    /**
     * Flag to indicate whether to enable logging.
     *
     * @default true
     */
    readonly enableLogging?: boolean;
    /**
     * The environment variables to pass to the container.
     *
     * The variable `QUEUE_NAME` with value `queue.queueName` will
     * always be passed.
     *
     * @default 'QUEUE_NAME: queue.queueName'
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * The secret to expose to the container as an environment variable.
     *
     * @default - No secret environment variables.
     */
    readonly secrets?: {
        [key: string]: Secret;
    };
    /**
     * A queue for which to process items from.
     *
     * If specified and this is a FIFO queue, the queue name must end in the string '.fifo'. See
     * [CreateQueue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html)
     *
     * @default 'SQSQueue with CloudFormation-generated name'
     */
    readonly queue?: IQueue;
    /**
     * The maximum number of times that a message can be received by consumers.
     * When this value is exceeded for a message the message will be automatically sent to the Dead Letter Queue.
     *
     * If the queue construct is specified, maxReceiveCount should be omitted.
     * @default 3
     */
    readonly maxReceiveCount?: number;
    /**
     * Timeout of processing a single message. After dequeuing, the processor has this much time to handle the message and delete it from the queue
     * before it becomes visible again for dequeueing by another processor. Values must be between 0 and (12 hours).
     *
     * If the queue construct is specified, visibilityTimeout should be omitted.
     * @default Duration.seconds(30)
     */
    readonly visibilityTimeout?: Duration;
    /**
     * The number of seconds that Dead Letter Queue retains a message.
     *
     * If the queue construct is specified, retentionPeriod should be omitted.
     * @default Duration.days(14)
     */
    readonly retentionPeriod?: Duration;
    /**
     * Maximum capacity to scale to.
     *
     * @default 2
     */
    readonly maxScalingCapacity?: number;
    /**
     * Minimum capacity to scale to.
     *
     * @default 1
     */
    readonly minScalingCapacity?: number;
    /**
     * The intervals for scaling based on the SQS queue's ApproximateNumberOfMessagesVisible metric.
     *
     * Maps a range of metric values to a particular scaling behavior. See
     * [Simple and Step Scaling Policies for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html)
     *
     * @default [{ upper: 0, change: -1 },{ lower: 100, change: +1 },{ lower: 500, change: +5 }]
     */
    readonly scalingSteps?: ScalingInterval[];
    /**
     * Grace period after scaling activity in seconds.
     *
     * Subsequent scale outs during the cooldown period are squashed so that only
     * the biggest scale out happens.
     *
     * Subsequent scale ins during the cooldown period are ignored.
     *
     * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html
     * @default 300 seconds
     */
    readonly cooldown?: Duration;
    /**
     * The log driver to use.
     *
     * @default - AwsLogDriver if enableLogging is true
     */
    readonly logDriver?: LogDriver;
    /**
     * Specifies whether to propagate the tags from the task definition or the service to the tasks in the service.
     * Tags can only be propagated to the tasks within the service during service creation.
     *
     * @default - none
     */
    readonly propagateTags?: PropagatedTagSource;
    /**
     * Specifies whether to enable Amazon ECS managed tags for the tasks within the service. For more information, see
     * [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html)
     *
     * @default false
     */
    readonly enableECSManagedTags?: boolean;
    /**
     * The name of a family that the task definition is registered to. A family groups multiple versions of a task definition.
     *
     * @default - Automatically generated name.
     */
    readonly family?: string;
    /**
     * The maximum number of tasks, specified as a percentage of the Amazon ECS
     * service's DesiredCount value, that can run in a service during a
     * deployment.
     *
     * @default - default from underlying service.
     */
    readonly maxHealthyPercent?: number;
    /**
     * The minimum number of tasks, specified as a percentage of
     * the Amazon ECS service's DesiredCount value, that must
     * continue to run and remain healthy during a deployment.
     *
     * @default - default from underlying service.
     */
    readonly minHealthyPercent?: number;
    /**
     * Specifies which deployment controller to use for the service. For more information, see
     * [Amazon ECS Deployment Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html)
     *
     * @default - Rolling update (ECS)
     */
    readonly deploymentController?: DeploymentController;
    /**
     * Whether to enable the deployment circuit breaker. If this property is defined, circuit breaker will be implicitly
     * enabled.
     * @default - disabled
     */
    readonly circuitBreaker?: DeploymentCircuitBreaker;
    /**
     * A list of Capacity Provider strategies used to place a service.
     *
     * @default - undefined
     *
     */
    readonly capacityProviderStrategies?: CapacityProviderStrategy[];
    /**
     * Whether ECS Exec should be enabled
     *
     * @default - false
     */
    readonly enableExecuteCommand?: boolean;
    /**
     * Flag to disable CPU based auto scaling strategy on the service.
     *
     * @default - false
     */
    readonly disableCpuBasedScaling?: boolean;
    /**
     * The target CPU utilization percentage for CPU based scaling strategy when enabled.
     *
     * @default - 50
     */
    readonly cpuTargetUtilizationPercent?: number;
}
/**
 * The base class for QueueProcessingEc2Service and QueueProcessingFargateService services.
 */
export declare abstract class QueueProcessingServiceBase extends Construct {
    /**
     * The SQS queue that the service will process from
     */
    readonly sqsQueue: IQueue;
    /**
     * The dead letter queue for the primary SQS queue
     */
    readonly deadLetterQueue?: IQueue;
    /**
     * The cluster where your service will be deployed
     */
    readonly cluster: ICluster;
    /**
     * Environment variables that will include the queue name
     */
    readonly environment: {
        [key: string]: string;
    };
    /**
     * The secret environment variables.
     */
    readonly secrets?: {
        [key: string]: Secret;
    };
    /**
     * The maximum number of instances for autoscaling to scale up to.
     */
    readonly maxCapacity: number;
    /**
     * The minimum number of instances for autoscaling to scale down to.
     */
    readonly minCapacity: number;
    /**
     * The scaling interval for autoscaling based off an SQS Queue size.
     */
    readonly scalingSteps: ScalingInterval[];
    /**
     * Grace period after scaling activity in seconds.
     * @default 300 seconds
     */
    private readonly cooldown?;
    /**
     * The AwsLogDriver to use for logging if logging is enabled.
     */
    readonly logDriver?: LogDriver;
    /**
     * Flag to disable CPU based auto scaling strategy on the service.
     */
    private readonly disableCpuBasedScaling;
    /**
     * The target CPU utilization percentage for CPU based scaling strategy when enabled.
     */
    private readonly cpuTargetUtilizationPercent;
    /**
     * Constructs a new instance of the QueueProcessingServiceBase class.
     */
    constructor(scope: Construct, id: string, props: QueueProcessingServiceBaseProps);
    /**
     * Configure autoscaling based off of CPU utilization as well as the number of messages visible in the SQS queue
     *
     * @param service the ECS/Fargate service for which to apply the autoscaling rules to
     */
    protected configureAutoscalingForService(service: BaseService): void;
    /**
     * Grant SQS permissions to an ECS service.
     * @param service the ECS/Fargate service to which to grant SQS permissions
     */
    protected grantPermissionsToService(service: BaseService): void;
    /**
     * Returns the default cluster.
     */
    protected getDefaultCluster(scope: Construct, vpc?: IVpc): Cluster;
    /**
     * Create an AWS Log Driver with the provided streamPrefix
     *
     * @param prefix the Cloudwatch logging prefix
     */
    private createAWSLogDriver;
}