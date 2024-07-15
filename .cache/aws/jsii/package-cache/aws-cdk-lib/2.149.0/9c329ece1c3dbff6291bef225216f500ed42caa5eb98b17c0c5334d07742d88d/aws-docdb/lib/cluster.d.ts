import { Construct } from 'constructs';
import { DatabaseClusterAttributes, IDatabaseCluster } from './cluster-ref';
import { Endpoint } from './endpoint';
import { IClusterParameterGroup } from './parameter-group';
import { BackupProps, Login, RotationMultiUserOptions } from './props';
import * as ec2 from '../../aws-ec2';
import { IRole } from '../../aws-iam';
import * as kms from '../../aws-kms';
import * as logs from '../../aws-logs';
import { CaCertificate } from '../../aws-rds';
import * as secretsmanager from '../../aws-secretsmanager';
import { Duration, RemovalPolicy, Resource } from '../../core';
/**
 * Properties for a new database cluster
 */
export interface DatabaseClusterProps {
    /**
     * What version of the database to start
     *
     * @default - The default engine version.
     */
    readonly engineVersion?: string;
    /**
     * The port the DocumentDB cluster will listen on
     *
     * @default DatabaseCluster.DEFAULT_PORT
     */
    readonly port?: number;
    /**
     * Username and password for the administrative user
     */
    readonly masterUser: Login;
    /**
     * Backup settings
     *
     * @default - Backup retention period for automated backups is 1 day.
     * Backup preferred window is set to a 30-minute window selected at random from an
     * 8-hour block of time for each AWS Region, occurring on a random day of the week.
     * @see https://docs.aws.amazon.com/documentdb/latest/developerguide/backup-restore.db-cluster-snapshots.html#backup-restore.backup-window
     */
    readonly backup?: BackupProps;
    /**
     * The KMS key for storage encryption.
     *
     * @default - default master key.
     */
    readonly kmsKey?: kms.IKey;
    /**
     * Whether to enable storage encryption
     *
     * @default true
     */
    readonly storageEncrypted?: boolean;
    /**
     * Number of DocDB compute instances
     *
     * @default 1
     */
    readonly instances?: number;
    /**
     * An optional identifier for the cluster
     *
     * @default - A name is automatically generated.
     */
    readonly dbClusterName?: string;
    /**
     * Base identifier for instances
     *
     * Every replica is named by appending the replica number to this string, 1-based.
     *
     * @default - `dbClusterName` is used with the word "Instance" appended. If `dbClusterName` is not provided, the
     * identifier is automatically generated.
     */
    readonly instanceIdentifierBase?: string;
    /**
     * What type of instance to start for the replicas
     */
    readonly instanceType: ec2.InstanceType;
    /**
     * The identifier of the CA certificate used for the instances.
     *
     * Specifying or updating this property triggers a reboot.
     *
     * @see https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html
     *
     * @default - DocumentDB will choose a certificate authority
     */
    readonly caCertificate?: CaCertificate;
    /**
      * What subnets to run the DocumentDB instances in.
      *
      * Must be at least 2 subnets in two different AZs.
      */
    readonly vpc: ec2.IVpc;
    /**
      * Where to place the instances within the VPC
      *
      * @default private subnets
      */
    readonly vpcSubnets?: ec2.SubnetSelection;
    /**
      * Security group.
      *
      * @default a new security group is created.
      */
    readonly securityGroup?: ec2.ISecurityGroup;
    /**
      * The DB parameter group to associate with the instance.
      *
      * @default no parameter group
      */
    readonly parameterGroup?: IClusterParameterGroup;
    /**
     * A weekly time range in which maintenance should preferably execute.
     *
     * Must be at least 30 minutes long.
     *
     * Example: 'tue:04:17-tue:04:47'
     *
     * @default - 30-minute window selected at random from an 8-hour block of time for
     * each AWS Region, occurring on a random day of the week.
     * @see https://docs.aws.amazon.com/documentdb/latest/developerguide/db-instance-maintain.html#maintenance-window
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The removal policy to apply when the cluster and its instances are removed
     * or replaced during a stack update, or when the stack is deleted. This
     * removal policy also applies to the implicit security group created for the
     * cluster if one is not supplied as a parameter.
     *
     * When set to `SNAPSHOT`, the removal policy for the instances and the security group
     * will default to `DESTROY` as those resources do not support the policy.
     *
     * Use the `instanceRemovalPolicy` and `securityGroupRemovalPolicy` to change the behavior.
     *
     * @default - Retain cluster.
     */
    readonly removalPolicy?: RemovalPolicy;
    /**
     * Specifies whether this cluster can be deleted. If deletionProtection is
     * enabled, the cluster cannot be deleted unless it is modified and
     * deletionProtection is disabled. deletionProtection protects clusters from
     * being accidentally deleted.
     *
     * @default - false
     */
    readonly deletionProtection?: boolean;
    /**
     * Whether the profiler logs should be exported to CloudWatch.
     * Note that you also have to configure the profiler log export in the Cluster's Parameter Group.
     *
     * @see https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html#profiling.enable-profiling
     * @default false
     */
    readonly exportProfilerLogsToCloudWatch?: boolean;
    /**
     * Whether the audit logs should be exported to CloudWatch.
     * Note that you also have to configure the audit log export in the Cluster's Parameter Group.
     *
     * @see https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html#event-auditing-enabling-auditing
     * @default false
     */
    readonly exportAuditLogsToCloudWatch?: boolean;
    /**
     * The number of days log events are kept in CloudWatch Logs. When updating
     * this property, unsetting it doesn't remove the log retention policy. To
     * remove the retention policy, set the value to `Infinity`.
     *
     * @default - logs never expire
     */
    readonly cloudWatchLogsRetention?: logs.RetentionDays;
    /**
      * The IAM role for the Lambda function associated with the custom resource
      * that sets the retention policy.
      *
      * @default - a new role is created.
      */
    readonly cloudWatchLogsRetentionRole?: IRole;
    /**
     * A value that indicates whether to enable Performance Insights for the instances in the DB Cluster.
     *
     * @default - false
     */
    readonly enablePerformanceInsights?: boolean;
    /**
     * The removal policy to apply to the cluster's instances.
     *
     * Cannot be set to `SNAPSHOT`.
     *
     * @default - `RemovalPolicy.DESTROY` when `removalPolicy` is set to `SNAPSHOT`, `removalPolicy` otherwise.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html
     */
    readonly instanceRemovalPolicy?: RemovalPolicy;
    /**
     * The removal policy to apply to the cluster's security group.
     *
     * Cannot be set to `SNAPSHOT`.
     *
     * @default - `RemovalPolicy.DESTROY` when `removalPolicy` is set to `SNAPSHOT`, `removalPolicy` otherwise.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html
     */
    readonly securityGroupRemovalPolicy?: RemovalPolicy;
    /**
     * Whether to copy tags to the snapshot when a snapshot is created.
     *
     * @default - false
     */
    readonly copyTagsToSnapshot?: boolean;
}
/**
 * A new or imported clustered database.
 */
declare abstract class DatabaseClusterBase extends Resource implements IDatabaseCluster {
    /**
     * Identifier of the cluster
     */
    abstract readonly clusterIdentifier: string;
    /**
     * Identifiers of the replicas
     */
    abstract readonly instanceIdentifiers: string[];
    /**
     * The endpoint to use for read/write operations
     */
    abstract readonly clusterEndpoint: Endpoint;
    /**
     * Endpoint to use for load-balanced read-only operations.
     */
    abstract readonly clusterReadEndpoint: Endpoint;
    /**
     * Endpoints which address each individual replica.
     */
    abstract readonly instanceEndpoints: Endpoint[];
    /**
     * Access to the network connections
     */
    abstract readonly connections: ec2.Connections;
    /**
     * Security group identifier of this database
     */
    abstract readonly securityGroupId: string;
    /**
     * Renders the secret attachment target specifications.
     */
    asSecretAttachmentTarget(): secretsmanager.SecretAttachmentTargetProps;
}
/**
 * Create a clustered database with a given number of instances.
 *
 * @resource AWS::DocDB::DBCluster
 */
export declare class DatabaseCluster extends DatabaseClusterBase {
    /**
     * The default number of instances in the DocDB cluster if none are
     * specified
     */
    static readonly DEFAULT_NUM_INSTANCES = 1;
    /**
     * The default port Document DB listens on
     */
    static readonly DEFAULT_PORT = 27017;
    /**
     * Import an existing DatabaseCluster from properties
     */
    static fromDatabaseClusterAttributes(scope: Construct, id: string, attrs: DatabaseClusterAttributes): IDatabaseCluster;
    /**
     * The single user secret rotation application.
     */
    private static readonly SINGLE_USER_ROTATION_APPLICATION;
    /**
     * The multi user secret rotation application.
     */
    private static readonly MULTI_USER_ROTATION_APPLICATION;
    /**
     * Identifier of the cluster
     */
    readonly clusterIdentifier: string;
    /**
     * The endpoint to use for read/write operations
     */
    readonly clusterEndpoint: Endpoint;
    /**
     * Endpoint to use for load-balanced read-only operations.
     */
    readonly clusterReadEndpoint: Endpoint;
    /**
     * The resource id for the cluster; for example: cluster-ABCD1234EFGH5678IJKL90MNOP. The cluster ID uniquely
     * identifies the cluster and is used in things like IAM authentication policies.
     * @attribute ClusterResourceId
     */
    readonly clusterResourceIdentifier: string;
    /**
     * The connections object to implement IConnectable
     */
    readonly connections: ec2.Connections;
    /**
     * Identifiers of the replicas
     */
    readonly instanceIdentifiers: string[];
    /**
     * Endpoints which address each individual replica.
     */
    readonly instanceEndpoints: Endpoint[];
    /**
     * Security group identifier of this database
     */
    readonly securityGroupId: string;
    /**
     * The secret attached to this cluster
     */
    readonly secret?: secretsmanager.ISecret;
    /**
     * The underlying CloudFormation resource for a database cluster.
     */
    private readonly cluster;
    /**
     * The VPC where the DB subnet group is created.
     */
    private readonly vpc;
    /**
     * The subnets used by the DB subnet group.
     */
    private readonly vpcSubnets?;
    constructor(scope: Construct, id: string, props: DatabaseClusterProps);
    /**
     * Sets up CloudWatch log retention if configured.
     */
    private setLogRetention;
    private getInstanceRemovalPolicy;
    private getSecurityGroupRemovalPolicy;
    /**
     * Adds the single user rotation of the master password to this cluster.
     *
     * @param [automaticallyAfter=Duration.days(30)] Specifies the number of days after the previous rotation
     * before Secrets Manager triggers the next automatic rotation.
     */
    addRotationSingleUser(automaticallyAfter?: Duration): secretsmanager.SecretRotation;
    /**
     * Adds the multi user rotation to this cluster.
     */
    addRotationMultiUser(id: string, options: RotationMultiUserOptions): secretsmanager.SecretRotation;
    /**
     * Adds security groups to this cluster.
     * @param securityGroups The security groups to add.
     */
    addSecurityGroups(...securityGroups: ec2.ISecurityGroup[]): void;
}
export {};
