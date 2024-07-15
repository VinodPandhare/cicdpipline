import { Construct, IDependable } from 'constructs';
import { AccessPoint, AccessPointOptions } from './access-point';
import { CfnFileSystem } from './efs.generated';
import * as ec2 from '../../aws-ec2';
import * as iam from '../../aws-iam';
import * as kms from '../../aws-kms';
import { RemovalPolicy, Resource, Size } from '../../core';
/**
 * EFS Lifecycle Policy, if a file is not accessed for given days, it will move to EFS Infrequent Access
 * or Archive storage.
 *
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-elasticfilesystem-filesystem-lifecyclepolicies
 */
export declare enum LifecyclePolicy {
    /**
     * After 1 day of not being accessed.
     */
    AFTER_1_DAY = "AFTER_1_DAY",
    /**
     * After 7 days of not being accessed.
     */
    AFTER_7_DAYS = "AFTER_7_DAYS",
    /**
     * After 14 days of not being accessed.
     */
    AFTER_14_DAYS = "AFTER_14_DAYS",
    /**
     * After 30 days of not being accessed.
     */
    AFTER_30_DAYS = "AFTER_30_DAYS",
    /**
     * After 60 days of not being accessed.
     */
    AFTER_60_DAYS = "AFTER_60_DAYS",
    /**
     * After 90 days of not being accessed.
     */
    AFTER_90_DAYS = "AFTER_90_DAYS",
    /**
     * After 180 days of not being accessed.
     */
    AFTER_180_DAYS = "AFTER_180_DAYS",
    /**
     * After 270 days of not being accessed.
     */
    AFTER_270_DAYS = "AFTER_270_DAYS",
    /**
     * After 365 days of not being accessed.
     */
    AFTER_365_DAYS = "AFTER_365_DAYS"
}
/**
 * EFS Out Of Infrequent Access Policy, if a file is accessed given times, it will move back to primary
 * storage class.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html#cfn-efs-filesystem-lifecyclepolicy-transitiontoprimarystorageclass
 */
export declare enum OutOfInfrequentAccessPolicy {
    /**
     * After 1 access
     */
    AFTER_1_ACCESS = "AFTER_1_ACCESS"
}
/**
 * EFS Performance mode.
 *
 * @see https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes
 */
export declare enum PerformanceMode {
    /**
     * General Purpose is ideal for latency-sensitive use cases, like web serving
     * environments, content management systems, home directories, and general file serving.
     * Recommended for the majority of Amazon EFS file systems.
     */
    GENERAL_PURPOSE = "generalPurpose",
    /**
     * File systems in the Max I/O mode can scale to higher levels of aggregate
     * throughput and operations per second. This scaling is done with a tradeoff
     * of slightly higher latencies for file metadata operations.
     * Highly parallelized applications and workloads, such as big data analysis,
     * media processing, and genomics analysis, can benefit from this mode.
     */
    MAX_IO = "maxIO"
}
/**
 * EFS Throughput mode.
 *
 * @see https://docs.aws.amazon.com/efs/latest/ug/performance.html#throughput-modes
 */
export declare enum ThroughputMode {
    /**
     * This mode scales as the size of the file system in the standard storage class grows.
     */
    BURSTING = "bursting",
    /**
     * This mode can instantly provision the throughput of the file system (in MiB/s) independent of the amount of data stored.
     */
    PROVISIONED = "provisioned",
    /**
    * This mode scales the throughput automatically regardless of file system size.
    */
    ELASTIC = "elastic"
}
/**
 * The status of the file system's replication overwrite protection.
 *
 * @see https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-filesystemprotection.html
 */
export declare enum ReplicationOverwriteProtection {
    /**
     * Enable the filesystem's replication overwrite protection.
     */
    ENABLED = "ENABLED",
    /**
     * Disable the filesystem's replication overwrite protection.
     */
    DISABLED = "DISABLED"
}
/**
 * Represents an Amazon EFS file system
 */
export interface IFileSystem extends ec2.IConnectable, iam.IResourceWithPolicy {
    /**
     * The ID of the file system, assigned by Amazon EFS.
     *
     * @attribute
     */
    readonly fileSystemId: string;
    /**
     * The ARN of the file system.
     *
     * @attribute
     */
    readonly fileSystemArn: string;
    /**
     * Dependable that can be depended upon to ensure the mount targets of the filesystem are ready
     */
    readonly mountTargetsAvailable: IDependable;
    /**
     * Grant the actions defined in actions to the given grantee
     * on this File System resource.
     */
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
    /**
     * Grant read permissions for this file system to an IAM principal.
     * @param grantee The principal to grant read to
     */
    grantRead(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grant read and write permissions for this file system to an IAM principal.
     * @param grantee The principal to grant read and write to
     */
    grantReadWrite(grantee: iam.IGrantable): iam.Grant;
    /**
     * As root user, grant read and write permissions for this file system to an IAM principal.
     * @param grantee The principal to grant root access to
     */
    grantRootAccess(grantee: iam.IGrantable): iam.Grant;
}
/**
 * Properties of EFS FileSystem.
 */
export interface FileSystemProps {
    /**
     * VPC to launch the file system in.
     */
    readonly vpc: ec2.IVpc;
    /**
     * Security Group to assign to this file system.
     *
     * @default - creates new security group which allows all outbound traffic
     */
    readonly securityGroup?: ec2.ISecurityGroup;
    /**
     * Which subnets to place the mount target in the VPC.
     *
     * @default - the Vpc default strategy if not specified
     */
    readonly vpcSubnets?: ec2.SubnetSelection;
    /**
     * Defines if the data at rest in the file system is encrypted or not.
     *
     * @default - If your application has the '@aws-cdk/aws-efs:defaultEncryptionAtRest' feature flag set, the default is true, otherwise, the default is false.
     * @link https://docs.aws.amazon.com/cdk/latest/guide/featureflags.html
     */
    readonly encrypted?: boolean;
    /**
     * The file system's name.
     *
     * @default - CDK generated name
     */
    readonly fileSystemName?: string;
    /**
     * The KMS key used for encryption. This is required to encrypt the data at rest if @encrypted is set to true.
     *
     * @default - if 'encrypted' is true, the default key for EFS (/aws/elasticfilesystem) is used
     */
    readonly kmsKey?: kms.IKey;
    /**
     * A policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
     *
     * @default - None. EFS will not transition files to the IA storage class.
     */
    readonly lifecyclePolicy?: LifecyclePolicy;
    /**
     * A policy used by EFS lifecycle management to transition files from Infrequent Access (IA) storage class to
     * primary storage class.
     *
     * @default - None. EFS will not transition files from IA storage to primary storage.
     */
    readonly outOfInfrequentAccessPolicy?: OutOfInfrequentAccessPolicy;
    /**
     * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.
     * Metadata operations such as listing the contents of a directory don't count as file access events.
     *
     * @default - None. EFS will not transition files to Archive storage class.
     */
    readonly transitionToArchivePolicy?: LifecyclePolicy;
    /**
     * The performance mode that the file system will operate under.
     * An Amazon EFS file system's performance mode can't be changed after the file system has been created.
     * Updating this property will replace the file system.
     *
     * @default PerformanceMode.GENERAL_PURPOSE
     */
    readonly performanceMode?: PerformanceMode;
    /**
     * Enum to mention the throughput mode of the file system.
     *
     * @default ThroughputMode.BURSTING
     */
    readonly throughputMode?: ThroughputMode;
    /**
     * Provisioned throughput for the file system.
     * This is a required property if the throughput mode is set to PROVISIONED.
     * Must be at least 1MiB/s.
     *
     * @default - none, errors out
     */
    readonly provisionedThroughputPerSecond?: Size;
    /**
     * The removal policy to apply to the file system.
     *
     * @default RemovalPolicy.RETAIN
     */
    readonly removalPolicy?: RemovalPolicy;
    /**
     * Whether to enable automatic backups for the file system.
     *
     * @default false
     */
    readonly enableAutomaticBackups?: boolean;
    /**
     * File system policy is an IAM resource policy used to control NFS access to an EFS file system.
     *
     * @default none
     */
    readonly fileSystemPolicy?: iam.PolicyDocument;
    /**
     * Allow access from anonymous client that doesn't use IAM authentication.
     *
     * @default false when using `grantRead`, `grantWrite`, `grantRootAccess`
     * or set `@aws-cdk/aws-efs:denyAnonymousAccess` feature flag, otherwise true
     */
    readonly allowAnonymousAccess?: boolean;
    /**
     * Whether this is a One Zone file system.
     * If enabled, `performanceMode` must be set to `GENERAL_PURPOSE` and `vpcSubnets` cannot be set.
     *
     * @default false
     * @link https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type
     */
    readonly oneZone?: boolean;
    /**
     * Whether to enable the filesystem's replication overwrite protection or not.
     * Set false if you want to create a read-only filesystem for use as a replication destination.
     *
     * @see https://docs.aws.amazon.com/efs/latest/ug/replication-use-cases.html#replicate-existing-destination
     *
     * @default ReplicationOverwriteProtection.ENABLED
     */
    readonly replicationOverwriteProtection?: ReplicationOverwriteProtection;
    /**
     * Replication configuration for the file system.
     *
     * @default - no replication
     */
    readonly replicationConfiguration?: ReplicationConfiguration;
}
/**
 * Properties that describe an existing EFS file system.
 */
export interface FileSystemAttributes {
    /**
     * The security group of the file system
     */
    readonly securityGroup: ec2.ISecurityGroup;
    /**
     * The File System's ID.
     *
     * @default - determined based on fileSystemArn
     */
    readonly fileSystemId?: string;
    /**
     * The File System's Arn.
     *
     * @default - determined based on fileSystemId
     */
    readonly fileSystemArn?: string;
}
/**
 * Properties for the ReplicationConfiguration.
 */
export interface ReplicationConfigurationProps {
    /**
     * The existing destination file system for the replication.
     *
     * @default - None
     */
    readonly destinationFileSystem?: IFileSystem;
    /**
     * AWS KMS key used to protect the encrypted file system.
     *
     * @default - use service-managed KMS key for Amazon EFS
     */
    readonly kmsKey?: kms.IKey;
    /**
     * The AWS Region in which the destination file system is located.
     *
     * @default - the region of the stack
     */
    readonly region?: string;
    /**
     * The availability zone name of the destination file system.
     * One zone file system is used as the destination file system when this property is set.
     *
     * @default - no availability zone is set
     */
    readonly availabilityZone?: string;
}
/**
 * Properties for configuring ReplicationConfiguration to replicate
 * to a new One Zone file system.
 */
export interface OneZoneFileSystemProps {
    /**
     * AWS KMS key used to protect the encrypted file system.
     *
     * @default - use service-managed KMS key for Amazon EFS
     */
    readonly kmsKey?: kms.IKey;
    /**
     * The AWS Region in which the destination file system is located.
     */
    readonly region: string;
    /**
     * The availability zone name of the destination file system.
     * One zone file system is used as the destination file system when this property is set.
     */
    readonly availabilityZone: string;
}
/**
 * Properties for configuring ReplicationConfiguration to replicate
 * to a new Regional file system.
 */
export interface RegionalFileSystemProps {
    /**
     * AWS KMS key used to protect the encrypted file system.
     *
     * @default - use service-managed KMS key for Amazon EFS
     */
    readonly kmsKey?: kms.IKey;
    /**
     * The AWS Region in which the destination file system is located.
     *
     * @default - the region of the stack
     */
    readonly region?: string;
}
/**
 * Properties for configuring ReplicationConfiguration to replicate
 * to an existing file system.
 */
export interface ExistingFileSystemProps {
    /**
     * The existing destination file system for the replication.
     */
    readonly destinationFileSystem: IFileSystem;
}
/**
 * EFS Replication Configuration
 */
export declare abstract class ReplicationConfiguration {
    /**
     * Specify the existing destination file system for the replication.
     *
     * @param destinationFileSystem The existing destination file system for the replication
     */
    static existingFileSystem(destinationFileSystem: IFileSystem): ReplicationConfiguration;
    /**
     * Create a new regional destination file system for the replication.
     *
     * @param region The AWS Region in which the destination file system is located. Default is the region of the stack.
     * @param kmsKey  AWS KMS key used to protect the encrypted file system. Default is service-managed KMS key for Amazon EFS.
     */
    static regionalFileSystem(region?: string, kmsKey?: kms.IKey): ReplicationConfiguration;
    /**
     * Create a new one zone destination file system for the replication.
     *
     * @param region The AWS Region in which the specified availability zone belongs to.
     * @param availabilityZone The availability zone name of the destination file system.
     * @param kmsKey AWS KMS key used to protect the encrypted file system. Default is service-managed KMS key for Amazon EFS.
     */
    static oneZoneFileSystem(region: string, availabilityZone: string, kmsKey?: kms.IKey): ReplicationConfiguration;
    /**
     * The existing destination file system for the replication.
     */
    readonly destinationFileSystem?: IFileSystem;
    /**
     * AWS KMS key used to protect the encrypted file system.
     */
    readonly kmsKey?: kms.IKey;
    /**
     * The AWS Region in which the destination file system is located.
     */
    readonly region?: string;
    /**
     * The availability zone name of the destination file system.
     * One zone file system is used as the destination file system when this property is set.
     */
    readonly availabilityZone?: string;
    constructor(options: ReplicationConfigurationProps);
}
declare abstract class FileSystemBase extends Resource implements IFileSystem {
    /**
     * The security groups/rules used to allow network connections to the file system.
     */
    abstract readonly connections: ec2.Connections;
    /**
    * @attribute
    */
    abstract readonly fileSystemId: string;
    /**
    * @attribute
    */
    abstract readonly fileSystemArn: string;
    /**
     * Dependable that can be depended upon to ensure the mount targets of the filesystem are ready
     */
    abstract readonly mountTargetsAvailable: IDependable;
    /**
     * @internal
     */
    protected _resource?: CfnFileSystem;
    /**
     * @internal
     */
    protected _fileSystemPolicy?: iam.PolicyDocument;
    /**
     * @internal
     */
    protected _grantedClient: boolean;
    /**
     * Grant the actions defined in actions to the given grantee
     * on this File System resource.
     *
     * @param grantee Principal to grant right to
     * @param actions The actions to grant
     */
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
    /**
     * Grant the client actions defined in actions to the given grantee on this File System resource.
     * If this method is used and the allowAnonymousAccess props are not specified,
     * anonymous access to this file system is prohibited.
     *
     * @param grantee The principal to grant right to
     * @param actions The client actions to grant
     * @param conditions The conditions to grant
     */
    private _grantClient;
    /**
     * Grant read permissions for this file system to an IAM principal.
     * @param grantee The principal to grant read to
     */
    grantRead(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grant read and write permissions for this file system to an IAM principal.
     * @param grantee The principal to grant read and write to
     */
    grantReadWrite(grantee: iam.IGrantable): iam.Grant;
    /**
     * As root user, grant read and write permissions for this file system to an IAM principal.
     * @param grantee The principal to grant root access to
     */
    grantRootAccess(grantee: iam.IGrantable): iam.Grant;
    /**
     * Adds a statement to the resource policy associated with this file system.
     * A resource policy will be automatically created upon the first call to `addToResourcePolicy`.
     *
     * Note that this does not work with imported file systems.
     *
     * @param statement The policy statement to add
     */
    addToResourcePolicy(statement: iam.PolicyStatement): iam.AddToResourcePolicyResult;
}
/**
 * The Elastic File System implementation of IFileSystem.
 * It creates a new, empty file system in Amazon Elastic File System (Amazon EFS).
 * It also creates mount target (AWS::EFS::MountTarget) implicitly to mount the
 * EFS file system on an Amazon Elastic Compute Cloud (Amazon EC2) instance or another resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html
 *
 * @resource AWS::EFS::FileSystem
 */
export declare class FileSystem extends FileSystemBase {
    /**
     * The default port File System listens on.
     */
    static readonly DEFAULT_PORT: number;
    /**
     * Import an existing File System from the given properties.
     */
    static fromFileSystemAttributes(scope: Construct, id: string, attrs: FileSystemAttributes): IFileSystem;
    /**
     * The security groups/rules used to allow network connections to the file system.
     */
    readonly connections: ec2.Connections;
    /**
     * @attribute
     */
    readonly fileSystemId: string;
    /**
     * @attribute
     */
    readonly fileSystemArn: string;
    readonly mountTargetsAvailable: IDependable;
    private readonly _mountTargetsAvailable;
    private readonly props;
    /**
     * Constructor for creating a new EFS FileSystem.
     */
    constructor(scope: Construct, id: string, props: FileSystemProps);
    private oneZoneValidation;
    /**
     * create access point from this filesystem
     */
    addAccessPoint(id: string, accessPointOptions?: AccessPointOptions): AccessPoint;
}
export {};
