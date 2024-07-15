import { Construct } from 'constructs';
import { ContainerOverride } from '..';
import * as ec2 from '../../../aws-ec2';
import * as ecs from '../../../aws-ecs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for ECS Tasks
 */
export interface EcsRunTaskProps extends sfn.TaskStateBaseProps {
    /**
     * The ECS cluster to run the task on
     */
    readonly cluster: ecs.ICluster;
    /**
     * [disable-awslint:ref-via-interface]
     * Task Definition used for running tasks in the service.
     *
     * Note: this must be TaskDefinition, and not ITaskDefinition,
     * as it requires properties that are not known for imported task definitions
     * If you want to run a RunTask with an imported task definition,
     * consider using CustomState
     */
    readonly taskDefinition: ecs.TaskDefinition;
    /**
     * The revision number of ECS task definition family
     *
     * @default - '$latest'
     */
    readonly revisionNumber?: number;
    /**
     * Container setting overrides
     *
     * Specify the container to use and the overrides to apply.
     *
     * @default - No overrides
     */
    readonly containerOverrides?: ContainerOverride[];
    /**
     * Subnets to place the task's ENIs
     *
     * @default - Public subnets if assignPublicIp is set. Private subnets otherwise.
     */
    readonly subnets?: ec2.SubnetSelection;
    /**
     * Existing security groups to use for the tasks
     *
     * @default - A new security group is created
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * Assign public IP addresses to each task
     *
     * @default false
     */
    readonly assignPublicIp?: boolean;
    /**
     * An Amazon ECS launch type determines the type of infrastructure on which your
     * tasks and services are hosted.
     *
     * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html
     */
    readonly launchTarget: IEcsLaunchTarget;
    /**
     * Specifies whether to propagate the tags from the task definition to the task.
     * An error will be received if you specify the SERVICE option when running a task.
     *
     * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-propagateTags
     *
     * @default - No tags are propagated.
     */
    readonly propagatedTagSource?: ecs.PropagatedTagSource;
    /**
     * Whether ECS Exec should be enabled
     *
     * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-enableExecuteCommand
     *
     * @default false
     */
    readonly enableExecuteCommand?: boolean;
}
/**
 * An Amazon ECS launch type determines the type of infrastructure on which your tasks and services are hosted.
 * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html
 */
export interface IEcsLaunchTarget {
    /**
     * called when the ECS launch target is configured on RunTask
     */
    bind(task: EcsRunTask, launchTargetOptions: LaunchTargetBindOptions): EcsLaunchTargetConfig;
}
/**
 * Options for binding a launch target to an ECS run job task
 */
export interface LaunchTargetBindOptions {
    /**
     * Task definition to run Docker containers in Amazon ECS
     */
    readonly taskDefinition: ecs.ITaskDefinition;
    /**
     * A regional grouping of one or more container instances on which you can run
     * tasks and services.
     *
     * @default - No cluster
     */
    readonly cluster?: ecs.ICluster;
}
/**
 * Configuration options for the ECS launch type
 */
export interface EcsLaunchTargetConfig {
    /**
     * Additional parameters to pass to the base task
     *
     * @default - No additional parameters passed
     */
    readonly parameters?: {
        [key: string]: any;
    };
}
/**
 * Properties to define an ECS service
 */
export interface EcsFargateLaunchTargetOptions {
    /**
     * Refers to a specific runtime environment for Fargate task infrastructure.
     * Fargate platform version is a combination of the kernel and container runtime versions.
     *
     * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html
     */
    readonly platformVersion: ecs.FargatePlatformVersion;
}
/**
 * Options to run an ECS task on EC2 in StepFunctions and ECS
 */
export interface EcsEc2LaunchTargetOptions {
    /**
     * Placement constraints
     *
     * @default  - None
     */
    readonly placementConstraints?: ecs.PlacementConstraint[];
    /**
     * Placement strategies
     *
     * @default - None
     */
    readonly placementStrategies?: ecs.PlacementStrategy[];
}
/**
 * Configuration for running an ECS task on Fargate
 *
 * @see https://docs.aws.amazon.com/AmazonECS/latest/userguide/launch_types.html#launch-type-fargate
 */
export declare class EcsFargateLaunchTarget implements IEcsLaunchTarget {
    private readonly options?;
    constructor(options?: EcsFargateLaunchTargetOptions | undefined);
    /**
     * Called when the Fargate launch type configured on RunTask
     */
    bind(_task: EcsRunTask, launchTargetOptions: LaunchTargetBindOptions): EcsLaunchTargetConfig;
}
/**
 * Configuration for running an ECS task on EC2
 *
 * @see https://docs.aws.amazon.com/AmazonECS/latest/userguide/launch_types.html#launch-type-ec2
 */
export declare class EcsEc2LaunchTarget implements IEcsLaunchTarget {
    private readonly options?;
    constructor(options?: EcsEc2LaunchTargetOptions | undefined);
    /**
     * Called when the EC2 launch type is configured on RunTask
     */
    bind(_task: EcsRunTask, launchTargetOptions: LaunchTargetBindOptions): EcsLaunchTargetConfig;
}
/**
 * Run a Task on ECS or Fargate
 */
export declare class EcsRunTask extends sfn.TaskStateBase implements ec2.IConnectable {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    /**
     * Manage allowed network traffic for this service
     */
    readonly connections: ec2.Connections;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private securityGroups;
    private networkConfiguration?;
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: EcsRunTaskProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    private configureAwsVpcNetworking;
    private validateNoNetworkingProps;
    private makePolicyStatements;
    /**
     * Returns the ARN of the task definition family by removing the
     * revision from the task definition ARN
     * Before - arn:aws:ecs:us-west-2:123456789012:task-definition/hello_world:8
     * After - arn:aws:ecs:us-west-2:123456789012:task-definition/hello_world
     */
    private getTaskDefinitionFamilyArn;
    private taskExecutionRoles;
}