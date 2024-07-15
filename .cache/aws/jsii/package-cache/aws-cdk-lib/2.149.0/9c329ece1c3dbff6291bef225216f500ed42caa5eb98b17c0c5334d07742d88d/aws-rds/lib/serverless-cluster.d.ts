import { Construct } from 'constructs';
import { IClusterEngine } from './cluster-engine';
import { Endpoint } from './endpoint';
import { IParameterGroup } from './parameter-group';
import { Credentials, RotationMultiUserOptions, RotationSingleUserOptions, SnapshotCredentials } from './props';
import { CfnDBClusterProps } from './rds.generated';
import { ISubnetGroup } from './subnet-group';
import * as ec2 from '../../aws-ec2';
import * as iam from '../../aws-iam';
import * as kms from '../../aws-kms';
import * as secretsmanager from '../../aws-secretsmanager';
import { Resource, Duration, RemovalPolicy, IResource } from '../../core';
/**
  * Interface representing a serverless database cluster.
  *
 */
export interface IServerlessCluster extends IResource, ec2.IConnectable, secretsmanager.ISecretAttachmentTarget {
    /**
     * Identifier of the cluster
     */
    readonly clusterIdentifier: string;
    /**
     * The ARN of the cluster
     */
    readonly clusterArn: string;
    /**
     * The endpoint to use for read/write operations
     * @attribute EndpointAddress,EndpointPort
     */
    readonly clusterEndpoint: Endpoint;
    /**
     * Endpoint to use for load-balanced read-only operations.
     * @attribute ReadEndpointAddress
     */
    readonly clusterReadEndpoint: Endpoint;
    /**
     * Grant the given identity to access to the Data API.
     *
     * @param grantee The principal to grant access to
     */
    grantDataApiAccess(grantee: iam.IGrantable): iam.Grant;
}
/**
 *  Common Properties to configure new Aurora Serverless v1 Cluster or Aurora Serverless v1 Cluster from snapshot
 */
interface ServerlessClusterNewProps {
    /**
     * What kind of database to start
     */
    readonly engine: IClusterEngine;
    /**
     * An optional identifier for the cluster
     *
     * @default - A name is automatically generated.
     */
    readonly clusterIdentifier?: string;
    /**
     * The number of days during which automatic DB snapshots are retained.
     * Automatic backup retention cannot be disabled on serverless clusters.
     * Must be a value from 1 day to 35 days.
     *
     * @default Duration.days(1)
     */
    readonly backupRetention?: Duration;
    /**
     * Name of a database which is automatically created inside the cluster
     *
     * @default - Database is not created in cluster.
     */
    readonly defaultDatabaseName?: string;
    /**
     * Indicates whether the DB cluster should have deletion protection enabled.
     *
     * @default - true if removalPolicy is RETAIN, false otherwise
     */
    readonly deletionProtection?: boolean;
    /**
     * Whether to enable the Data API.
     *
     * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html
      *
     * @default false
     */
    readonly enableDataApi?: boolean;
    /**
     * The VPC that this Aurora Serverless v1 Cluster has been created in.
     *
     * @default - the default VPC in the account and region will be used
     */
    readonly vpc?: ec2.IVpc;
    /**
     * Where to place the instances within the VPC.
     * If provided, the `vpc` property must also be specified.
     *
     * @default - the VPC default strategy if not specified.
     */
    readonly vpcSubnets?: ec2.SubnetSelection;
    /**
     * Scaling configuration of an Aurora Serverless database cluster.
     *
     * @default - Serverless cluster is automatically paused after 5 minutes of being idle.
     *   minimum capacity: 2 ACU
     *   maximum capacity: 16 ACU
     */
    readonly scaling?: ServerlessScalingOptions;
    /**
     * The removal policy to apply when the cluster and its instances are removed
     * from the stack or replaced during an update.
     *
     * @default - RemovalPolicy.SNAPSHOT (remove the cluster and instances, but retain a snapshot of the data)
     */
    readonly removalPolicy?: RemovalPolicy;
    /**
     * Security group.
     *
     * @default - a new security group is created if `vpc` was provided.
     *   If the `vpc` property was not provided, no VPC security groups will be associated with the DB cluster.
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * Additional parameters to pass to the database engine
     *
     * @default - no parameter group.
     */
    readonly parameterGroup?: IParameterGroup;
    /**
     * Existing subnet group for the cluster.
     *
     * @default - a new subnet group is created if `vpc` was provided.
     *   If the `vpc` property was not provided, no subnet group will be associated with the DB cluster
     */
    readonly subnetGroup?: ISubnetGroup;
    /**
     * Whether to copy tags to the snapshot when a snapshot is created.
     *
     * @default - true
     */
    readonly copyTagsToSnapshot?: boolean;
}
/**
 * Properties that describe an existing cluster instance
 *
 */
export interface ServerlessClusterAttributes {
    /**
     * Identifier for the cluster
     */
    readonly clusterIdentifier: string;
    /**
     * The database port
     *
     * @default - none
     */
    readonly port?: number;
    /**
     * The security groups of the database cluster
     *
     * @default - no security groups
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * Cluster endpoint address
     *
     * @default - no endpoint address
     */
    readonly clusterEndpointAddress?: string;
    /**
     * Reader endpoint address
     *
     * @default - no reader address
     */
    readonly readerEndpointAddress?: string;
    /**
     * The secret attached to the database cluster
     *
     * @default - no secret
     */
    readonly secret?: secretsmanager.ISecret;
}
/**
 * Aurora capacity units (ACUs).
 * Each ACU is a combination of processing and memory capacity.
 *
 * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.setting-capacity.html
 * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.architecture
 *
 */
export declare enum AuroraCapacityUnit {
    /** 1 Aurora Capacity Unit */
    ACU_1 = 1,
    /** 2 Aurora Capacity Units */
    ACU_2 = 2,
    /** 4 Aurora Capacity Units */
    ACU_4 = 4,
    /** 8 Aurora Capacity Units */
    ACU_8 = 8,
    /** 16 Aurora Capacity Units */
    ACU_16 = 16,
    /** 32 Aurora Capacity Units */
    ACU_32 = 32,
    /** 64 Aurora Capacity Units */
    ACU_64 = 64,
    /** 128 Aurora Capacity Units */
    ACU_128 = 128,
    /** 192 Aurora Capacity Units */
    ACU_192 = 192,
    /** 256 Aurora Capacity Units */
    ACU_256 = 256,
    /** 384 Aurora Capacity Units */
    ACU_384 = 384
}
/**
 * TimeoutAction defines the action to take when a timeout occurs if a scaling point is not found.
 *
 * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v1.how-it-works.html#aurora-serverless.how-it-works.timeout-action
 */
export declare enum TimeoutAction {
    /**
     * FORCE_APPLY_CAPACITY_CHANGE sets the capacity to the specified value as soon as possible.
     * Transactions may be interrupted, and connections to temporary tables and locks may be dropped.
     * Only select this option if your application can recover from dropped connections or incomplete transactions.
     */
    FORCE_APPLY_CAPACITY_CHANGE = "ForceApplyCapacityChange",
    /**
     * ROLLBACK_CAPACITY_CHANGE ignores the capacity change if a scaling point is not found.
     * This is the default behavior.
     */
    ROLLBACK_CAPACITY_CHANGE = "RollbackCapacityChange"
}
/**
 * Options for configuring scaling on an Aurora Serverless v1 Cluster
 *
 */
export interface ServerlessScalingOptions {
    /**
     * The minimum capacity for an Aurora Serverless database cluster.
     *
     * @default - determined by Aurora based on database engine
     */
    readonly minCapacity?: AuroraCapacityUnit;
    /**
     * The maximum capacity for an Aurora Serverless database cluster.
     *
     * @default - determined by Aurora based on database engine
     */
    readonly maxCapacity?: AuroraCapacityUnit;
    /**
     * The time before an Aurora Serverless database cluster is paused.
     * A database cluster can be paused only when it is idle (it has no connections).
     * Auto pause time must be between 5 minutes and 1 day.
     *
     * If a DB cluster is paused for more than seven days, the DB cluster might be
     * backed up with a snapshot. In this case, the DB cluster is restored when there
     * is a request to connect to it.
     *
     * Set to 0 to disable
     *
     * @default - automatic pause enabled after 5 minutes
     */
    readonly autoPause?: Duration;
    /**
     * The amount of time that Aurora Serverless v1 tries to find a scaling point to perform
     * seamless scaling before enforcing the timeout action.
     *
     * @default - 5 minutes
     */
    readonly timeout?: Duration;
    /**
     * The action to take when the timeout is reached.
     * Selecting ForceApplyCapacityChange will force the capacity to the specified value as soon as possible, even without a scaling point.
     * Selecting RollbackCapacityChange will ignore the capacity change if a scaling point is not found. This is the default behavior.
     *
     * @default - TimeoutAction.ROLLBACK_CAPACITY_CHANGE
     */
    readonly timeoutAction?: TimeoutAction;
}
/**
 * New or imported Serverless Cluster
 */
declare abstract class ServerlessClusterBase extends Resource implements IServerlessCluster {
    /**
     * Identifier of the cluster
     */
    abstract readonly clusterIdentifier: string;
    /**
     * The endpoint to use for read/write operations
     */
    abstract readonly clusterEndpoint: Endpoint;
    /**
     * The endpoint to use for read/write operations
     */
    abstract readonly clusterReadEndpoint: Endpoint;
    /**
     * Access to the network connections
     */
    abstract readonly connections: ec2.Connections;
    /**
     * The secret attached to this cluster
     */
    abstract readonly secret?: secretsmanager.ISecret;
    protected abstract enableDataApi?: boolean;
    /**
     * The ARN of the cluster
     */
    get clusterArn(): string;
    /**
     * Grant the given identity to access to the Data API, including read access to the secret attached to the cluster if present
     *
     * @param grantee The principal to grant access to
     */
    grantDataApiAccess(grantee: iam.IGrantable): iam.Grant;
    /**
     * Renders the secret attachment target specifications.
     */
    asSecretAttachmentTarget(): secretsmanager.SecretAttachmentTargetProps;
}
/**
 * Create an Aurora Serverless v1 Cluster
 *
 * @resource AWS::RDS::DBCluster
 */
declare abstract class ServerlessClusterNew extends ServerlessClusterBase {
    readonly connections: ec2.Connections;
    protected readonly newCfnProps: CfnDBClusterProps;
    protected readonly securityGroups: ec2.ISecurityGroup[];
    protected enableDataApi?: boolean;
    constructor(scope: Construct, id: string, props: ServerlessClusterNewProps);
    private renderScalingConfiguration;
}
/**
 * Properties for a new Aurora Serverless v1 Cluster
 */
export interface ServerlessClusterProps extends ServerlessClusterNewProps {
    /**
     * Credentials for the administrative user
     *
     * @default - A username of 'admin' and SecretsManager-generated password
     */
    readonly credentials?: Credentials;
    /**
     * The KMS key for storage encryption.
     *
     * @default - the default master key will be used for storage encryption
     */
    readonly storageEncryptionKey?: kms.IKey;
}
/**
 * Create an Aurora Serverless v1 Cluster
 *
 * @resource AWS::RDS::DBCluster
 *
 */
export declare class ServerlessCluster extends ServerlessClusterNew {
    /**
     * Import an existing DatabaseCluster from properties
     */
    static fromServerlessClusterAttributes(scope: Construct, id: string, attrs: ServerlessClusterAttributes): IServerlessCluster;
    readonly clusterIdentifier: string;
    readonly clusterEndpoint: Endpoint;
    readonly clusterReadEndpoint: Endpoint;
    readonly secret?: secretsmanager.ISecret;
    private readonly vpc?;
    private readonly vpcSubnets?;
    private readonly singleUserRotationApplication;
    private readonly multiUserRotationApplication;
    constructor(scope: Construct, id: string, props: ServerlessClusterProps);
    /**
     * Adds the single user rotation of the master password to this cluster.
     */
    addRotationSingleUser(options?: RotationSingleUserOptions): secretsmanager.SecretRotation;
    /**
     * Adds the multi user rotation to this cluster.
     */
    addRotationMultiUser(id: string, options: RotationMultiUserOptions): secretsmanager.SecretRotation;
}
/**
 * Properties for ``ServerlessClusterFromSnapshot``
 */
export interface ServerlessClusterFromSnapshotProps extends ServerlessClusterNewProps {
    /**
     * The identifier for the DB instance snapshot or DB cluster snapshot to restore from.
     * You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot.
     * However, you can use only the ARN to specify a DB instance snapshot.
     */
    readonly snapshotIdentifier: string;
    /**
     * Master user credentials.
     *
     * Note - It is not possible to change the master username for a snapshot;
     * however, it is possible to provide (or generate) a new password.
     *
     * @default - The existing username and password from the snapshot will be used.
     */
    readonly credentials?: SnapshotCredentials;
}
/**
 * A Aurora Serverless v1 Cluster restored from a snapshot.
 *
 * @resource AWS::RDS::DBCluster
 */
export declare class ServerlessClusterFromSnapshot extends ServerlessClusterNew {
    readonly clusterIdentifier: string;
    readonly clusterEndpoint: Endpoint;
    readonly clusterReadEndpoint: Endpoint;
    readonly secret?: secretsmanager.ISecret;
    constructor(scope: Construct, id: string, props: ServerlessClusterFromSnapshotProps);
}
export {};