import { Construct } from 'constructs';
import { CaCertificate } from './ca-certificate';
import { IDatabaseCluster } from './cluster-ref';
import { IParameterGroup } from './parameter-group';
import { PerformanceInsightRetention } from './props';
import { ISubnetGroup } from './subnet-group';
import * as ec2 from '../../aws-ec2';
import { IRole } from '../../aws-iam';
import * as kms from '../../aws-kms';
import { IResource, Duration, RemovalPolicy } from '../../core';
/**
 * Options for binding the instance to the cluster
 */
export interface ClusterInstanceBindOptions {
    /**
     * The interval, in seconds, between points when Amazon RDS collects enhanced
     * monitoring metrics for the DB instances.
     *
     * @default no enhanced monitoring
     */
    readonly monitoringInterval?: Duration;
    /**
     * Role that will be used to manage DB instances monitoring.
     *
     * @default - A role is automatically created for you
     */
    readonly monitoringRole?: IRole;
    /**
     * The removal policy on the cluster
     *
     * @default - RemovalPolicy.DESTROY (cluster snapshot can restore)
     */
    readonly removalPolicy?: RemovalPolicy;
    /**
     * The promotion tier of the cluster instance
     *
     * This matters more for serverlessV2 instances. If a serverless
     * instance is in tier 0-1 then it will scale with the writer.
     *
     * For provisioned instances this just determines the failover priority.
     * If multiple instances have the same priority then one will be picked at random
     *
     * @default 2
     */
    readonly promotionTier?: number;
    /**
     * Existing subnet group for the cluster.
     * This is only needed when using the isFromLegacyInstanceProps
     *
     * @default - cluster subnet group is used
     */
    readonly subnetGroup?: ISubnetGroup;
}
/**
 * The type of Aurora Cluster Instance. Can be either serverless v2
 * or provisioned
 */
export declare class ClusterInstanceType {
    private readonly instanceType;
    readonly type: InstanceType;
    /**
     * Aurora Serverless V2 instance type
     * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html
     */
    static serverlessV2(): ClusterInstanceType;
    /**
     * Aurora Provisioned instance type
     */
    static provisioned(instanceType?: ec2.InstanceType): ClusterInstanceType;
    constructor(instanceType: string, type: InstanceType);
    /**
     * String representation of the instance type that can be used in the CloudFormation resource
     */
    toString(): string;
}
/**
 * Represents an Aurora cluster instance
 * This can be either a provisioned instance or a serverless v2 instance
 */
export interface IClusterInstance {
    /**
     * Create the database instance within the provided cluster
     */
    bind(scope: Construct, cluster: IDatabaseCluster, options: ClusterInstanceBindOptions): IAuroraClusterInstance;
}
/**
 * Options for creating a provisioned instance
 */
export interface ProvisionedClusterInstanceProps extends ClusterInstanceOptions {
    /**
     * The cluster instance type
     *
     * @default db.t3.medium
     */
    readonly instanceType?: ec2.InstanceType;
    /**
     * The promotion tier of the cluster instance
     *
     * Can be between 0-15
     *
     * For provisioned instances this just determines the failover priority.
     * If multiple instances have the same priority then one will be picked at random
     *
     * @default 2
     */
    readonly promotionTier?: number;
}
/**
 * Options for creating a serverless v2 instance
 */
export interface ServerlessV2ClusterInstanceProps extends ClusterInstanceOptions {
    /**
     * Only applicable to reader instances.
     *
     * If this is true then the instance will be placed in promotion tier 1, otherwise
     * it will be placed in promotion tier 2.
     *
     * For serverless v2 instances this means:
     * - true: The serverless v2 reader will scale to match the writer instance (provisioned or serverless)
     * - false: The serverless v2 reader will scale with the read workfload on the instance
     *
     * @default false
     */
    readonly scaleWithWriter?: boolean;
}
/**
 * Common options for creating cluster instances (both serverless and provisioned)
 */
export interface ClusterInstanceProps extends ClusterInstanceOptions {
    /**
     * The type of cluster instance to create. Can be either
     * provisioned or serverless v2
     */
    readonly instanceType: ClusterInstanceType;
    /**
     * The promotion tier of the cluster instance
     *
     * This matters more for serverlessV2 instances. If a serverless
     * instance is in tier 0-1 then it will scale with the writer.
     *
     * For provisioned instances this just determines the failover priority.
     * If multiple instances have the same priority then one will be picked at random
     *
     * @default 2
     */
    readonly promotionTier?: number;
}
/**
 * Common options for creating a cluster instance
 */
export interface ClusterInstanceOptions {
    /**
     * The identifier for the database instance
     *
     * @default - CloudFormation generated identifier
     */
    readonly instanceIdentifier?: string;
    /**
     * Whether to enable automatic upgrade of minor version for the DB instance.
     *
     * @default - true
     */
    readonly autoMinorVersionUpgrade?: boolean;
    /**
     * Whether to enable Performance Insights for the DB instance.
     *
     * @default - false, unless ``performanceInsightRetention`` or ``performanceInsightEncryptionKey`` is set.
     */
    readonly enablePerformanceInsights?: boolean;
    /**
     * The amount of time, in days, to retain Performance Insights data.
     *
     * @default 7
     */
    readonly performanceInsightRetention?: PerformanceInsightRetention;
    /**
     * The AWS KMS key for encryption of Performance Insights data.
     *
     * @default - default master key
     */
    readonly performanceInsightEncryptionKey?: kms.IKey;
    /**
     * Indicates whether the DB instance is an internet-facing instance. If not specified,
     * the cluster's vpcSubnets will be used to determine if the instance is internet-facing
     * or not.
     *
     * @default - `true` if the cluster's `vpcSubnets` is `subnetType: SubnetType.PUBLIC`, `false` otherwise
     */
    readonly publiclyAccessible?: boolean;
    /**
     * A preferred maintenance window day/time range. Should be specified as a range ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC).
     *
     * Example: 'Sun:23:45-Mon:00:15'
     *
     * @default - 30-minute window selected at random from an 8-hour block of time for
     * each AWS Region, occurring on a random day of the week.
     * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The parameters in the DBParameterGroup to create automatically
     *
     * You can only specify parameterGroup or parameters but not both.
     * You need to use a versioned engine to auto-generate a DBParameterGroup.
     *
     * @default - None
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Whether to allow upgrade of major version for the DB instance.
     *
     * @default - false
     */
    readonly allowMajorVersionUpgrade?: boolean;
    /**
     * The DB parameter group to associate with the instance.
     * This is only needed if you need to configure different parameter
     * groups for each individual instance, otherwise you should not
     * provide this and just use the cluster parameter group
     *
     * @default the cluster parameter group is used
     */
    readonly parameterGroup?: IParameterGroup;
    /**
     * Only used for migrating existing clusters from using `instanceProps` to `writer` and `readers`
     *
     * @example
     * // existing cluster
     * declare const vpc: ec2.Vpc;
     * const cluster = new rds.DatabaseCluster(this, 'Database', {
     *   engine: rds.DatabaseClusterEngine.auroraMysql({
     *     version: rds.AuroraMysqlEngineVersion.VER_3_03_0,
     *   }),
     *   instances: 2,
     *   instanceProps: {
     *     instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),
     *     vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
     *     vpc,
     *   },
     * });
     *
     * // migration
     *
     * const instanceProps = {
     *   instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),
     *   isFromLegacyInstanceProps: true,
     * };
     *
     * const myCluster = new rds.DatabaseCluster(this, 'Database', {
     *   engine: rds.DatabaseClusterEngine.auroraMysql({
     *     version: rds.AuroraMysqlEngineVersion.VER_3_03_0,
     *   }),
     *   vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
     *   vpc,
     *   writer: rds.ClusterInstance.provisioned('Instance1', {
     *     instanceType: instanceProps.instanceType,
     *     isFromLegacyInstanceProps: instanceProps.isFromLegacyInstanceProps,
     *   }),
     *   readers: [
     *     rds.ClusterInstance.provisioned('Instance2', {
     *       instanceType: instanceProps.instanceType,
     *       isFromLegacyInstanceProps: instanceProps.isFromLegacyInstanceProps,
     *     }),
     *   ],
     * });
     *
     * @default false
     */
    readonly isFromLegacyInstanceProps?: boolean;
    /**
     * The identifier of the CA certificate for this DB cluster's instances.
     *
     * Specifying or updating this property triggers a reboot.
     *
     * For RDS DB engines:
     * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html
     * For Aurora DB engines:
     * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html
     *
     * @default - RDS will choose a certificate authority
     */
    readonly caCertificate?: CaCertificate;
}
/**
 * Create an RDS Aurora Cluster Instance. You can create either provisioned or
 * serverless v2 instances.
 *
 * @example
 *
 * declare const vpc: ec2.Vpc;
 * const myCluster = new rds.DatabaseCluster(this, 'Database', {
 *   engine: rds.DatabaseClusterEngine.auroraMysql({ version: rds.AuroraMysqlEngineVersion.VER_2_08_1 }),
 *   writer: rds.ClusterInstance.provisioned('writer', {
 *     instanceType: ec2.InstanceType.of(ec2.InstanceClass.R6G, ec2.InstanceSize.XLARGE4),
 *   }),
 *   serverlessV2MinCapacity: 6.5,
 *   serverlessV2MaxCapacity: 64,
 *   readers: [
 *     // will be put in promotion tier 1 and will scale with the writer
 *     rds.ClusterInstance.serverlessV2('reader1', { scaleWithWriter: true }),
 *     // will be put in promotion tier 2 and will not scale with the writer
 *     rds.ClusterInstance.serverlessV2('reader2'),
 *   ],
 *   vpc,
 * });
 */
export declare class ClusterInstance implements IClusterInstance {
    private id;
    private readonly props;
    /**
     * Add a provisioned instance to the cluster
     *
     * @example
     * rds.ClusterInstance.provisioned('ClusterInstance', {
     *   instanceType: ec2.InstanceType.of(ec2.InstanceClass.R6G, ec2.InstanceSize.XLARGE4),
     * });
     */
    static provisioned(id: string, props?: ProvisionedClusterInstanceProps): IClusterInstance;
    /**
     * Add a serverless v2 instance to the cluster
     *
     * @example
     * rds.ClusterInstance.serverlessV2('ClusterInstance', {
     *   scaleWithWriter: true,
     * });
     */
    static serverlessV2(id: string, props?: ServerlessV2ClusterInstanceProps): IClusterInstance;
    private constructor();
    /**
     * Add the ClusterInstance to the cluster
     */
    bind(scope: Construct, cluster: IDatabaseCluster, props: ClusterInstanceBindOptions): IAuroraClusterInstance;
}
export declare enum InstanceType {
    PROVISIONED = "PROVISIONED",
    SERVERLESS_V2 = "SERVERLESS_V2"
}
/**
 * An Aurora Cluster Instance
 */
export interface IAuroraClusterInstance extends IResource {
    /**
     * The instance ARN
     */
    readonly dbInstanceArn: string;
    /**
     * The instance resource ID
     */
    readonly dbiResourceId: string;
    /**
     * The instance endpoint address
     */
    readonly dbInstanceEndpointAddress: string;
    /**
     * The instance identifier
     */
    readonly instanceIdentifier: string;
    /**
     * The instance type (provisioned vs serverless v2)
     */
    readonly type: InstanceType;
    /**
     * The instance size if the instance is a provisioned type
     */
    readonly instanceSize?: string;
    /**
     * Te promotion tier the instance was created in
     */
    readonly tier: number;
}