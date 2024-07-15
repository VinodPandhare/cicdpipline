import * as ec2 from '../../aws-ec2';
import { Construct } from 'constructs';
/**
 * The ECS-optimized AMI variant to use. For more information, see
 * [Amazon ECS-optimized AMIs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html).
 */
export declare enum AmiHardwareType {
    /**
     * Use the standard Amazon ECS-optimized AMI.
     */
    STANDARD = "Standard",
    /**
     * Use the Amazon ECS GPU-optimized AMI.
     */
    GPU = "GPU",
    /**
     * Use the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI.
     */
    ARM = "ARM64",
    /**
     * Use the Amazon ECS-optimized Amazon Linux 2 (Neuron) AMI.
     */
    NEURON = "Neuron"
}
/**
 * ECS-optimized Windows version list
 */
export declare enum WindowsOptimizedVersion {
    SERVER_2022 = "2022",
    SERVER_2019 = "2019",
    SERVER_2016 = "2016"
}
/**
 * Additional configuration properties for EcsOptimizedImage factory functions
 */
export interface EcsOptimizedImageOptions {
    /**
     * Whether the AMI ID is cached to be stable between deployments
     *
     * By default, the newest image is used on each deployment. This will cause
     * instances to be replaced whenever a new version is released, and may cause
     * downtime if there aren't enough running instances in the AutoScalingGroup
     * to reschedule the tasks on.
     *
     * If set to true, the AMI ID will be cached in `cdk.context.json` and the
     * same value will be used on future runs. Your instances will not be replaced
     * but your AMI version will grow old over time. To refresh the AMI lookup,
     * you will have to evict the value from the cache using the `cdk context`
     * command. See https://docs.aws.amazon.com/cdk/latest/guide/context.html for
     * more information.
     *
     * Can not be set to `true` in environment-agnostic stacks.
     *
     * @default false
     */
    readonly cachedInContext?: boolean;
}
/**
 * Construct a Linux or Windows machine image from the latest ECS Optimized AMI published in SSM
 */
export declare class EcsOptimizedImage implements ec2.IMachineImage {
    /**
     * Construct an Amazon Linux 2023 image from the latest ECS Optimized AMI published in SSM
     *
     * @param hardwareType ECS-optimized AMI variant to use
     */
    static amazonLinux2023(hardwareType?: AmiHardwareType, options?: EcsOptimizedImageOptions): EcsOptimizedImage;
    /**
     * Construct an Amazon Linux 2 image from the latest ECS Optimized AMI published in SSM
     *
     * @param hardwareType ECS-optimized AMI variant to use
     */
    static amazonLinux2(hardwareType?: AmiHardwareType, options?: EcsOptimizedImageOptions): EcsOptimizedImage;
    /**
     * Construct an Amazon Linux AMI image from the latest ECS Optimized AMI published in SSM
     */
    static amazonLinux(options?: EcsOptimizedImageOptions): EcsOptimizedImage;
    /**
     * Construct a Windows image from the latest ECS Optimized AMI published in SSM
     *
     * @param windowsVersion Windows Version to use
     */
    static windows(windowsVersion: WindowsOptimizedVersion, options?: EcsOptimizedImageOptions): EcsOptimizedImage;
    private readonly generation?;
    private readonly windowsVersion?;
    private readonly hwType?;
    private readonly amiParameterName;
    private readonly cachedInContext;
    /**
     * Constructs a new instance of the EcsOptimizedAmi class.
     */
    private constructor();
    /**
     * Return the correct image
     */
    getImage(scope: Construct): ec2.MachineImageConfig;
}
/**
 * Amazon ECS variant
 */
export declare enum BottlerocketEcsVariant {
    /**
     * aws-ecs-1 variant
     */
    AWS_ECS_1 = "aws-ecs-1",
    /**
     * aws-ecs-1-nvidia variant
     */
    AWS_ECS_1_NVIDIA = "aws-ecs-1-nvidia",
    /**
     * aws-ecs-2 variant
     */
    AWS_ECS_2 = "aws-ecs-2",
    /**
     * aws-ecs-2-nvidia variant
     */
    AWS_ECS_2_NVIDIA = "aws-ecs-2-nvidia"
}
/**
 * Properties for BottleRocketImage
 */
export interface BottleRocketImageProps {
    /**
     * The Amazon ECS variant to use.
     *
     * @default - BottlerocketEcsVariant.AWS_ECS_1
     */
    readonly variant?: BottlerocketEcsVariant;
    /**
     * The CPU architecture
     *
     * @default - x86_64
     */
    readonly architecture?: ec2.InstanceArchitecture;
    /**
     * Whether the AMI ID is cached to be stable between deployments
     *
     * By default, the newest image is used on each deployment. This will cause
     * instances to be replaced whenever a new version is released, and may cause
     * downtime if there aren't enough running instances in the AutoScalingGroup
     * to reschedule the tasks on.
     *
     * If set to true, the AMI ID will be cached in `cdk.context.json` and the
     * same value will be used on future runs. Your instances will not be replaced
     * but your AMI version will grow old over time. To refresh the AMI lookup,
     * you will have to evict the value from the cache using the `cdk context`
     * command. See https://docs.aws.amazon.com/cdk/latest/guide/context.html for
     * more information.
     *
     * Can not be set to `true` in environment-agnostic stacks.
     *
     * @default false
     */
    readonly cachedInContext?: boolean;
}
/**
 * Construct an Bottlerocket image from the latest AMI published in SSM
 */
export declare class BottleRocketImage implements ec2.IMachineImage {
    /**
     * Return whether the given object is a BottleRocketImage
     */
    static isBottleRocketImage(x: any): x is BottleRocketImage;
    private readonly amiParameterName;
    /**
     * Amazon ECS variant for Bottlerocket AMI
     */
    private readonly variant;
    /**
     * Instance architecture
     */
    private readonly architecture;
    private readonly cachedInContext;
    /**
     * Constructs a new instance of the BottleRocketImage class.
     */
    constructor(props?: BottleRocketImageProps);
    /**
     * Return the correct image
     */
    getImage(scope: Construct): ec2.MachineImageConfig;
}
