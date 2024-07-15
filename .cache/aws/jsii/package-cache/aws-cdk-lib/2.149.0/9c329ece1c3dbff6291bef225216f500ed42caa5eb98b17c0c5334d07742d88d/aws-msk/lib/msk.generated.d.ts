import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html.
 *
 * @cloudformationResource AWS::MSK::BatchScramSecret
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html
 */
export declare class CfnBatchScramSecret extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBatchScramSecret from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBatchScramSecret;
    clusterArn: string;
    secretArnList?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBatchScramSecretProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnBatchScramSecret`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html
 */
export interface CfnBatchScramSecretProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html#cfn-msk-batchscramsecret-clusterarn
     */
    readonly clusterArn: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html#cfn-msk-batchscramsecret-secretarnlist
     */
    readonly secretArnList?: Array<string>;
}
/**
 * Creates a new MSK cluster.
 *
 * The following Python 3.6 examples shows how you can create a cluster that's distributed over two Availability Zones. Before you run this Python script, replace the example subnet and security-group IDs with the IDs of your subnets and security group. When you create an MSK cluster, its brokers get evenly distributed over a number of Availability Zones that's equal to the number of subnets that you specify in the `BrokerNodeGroupInfo` parameter. In this example, you can add a third subnet to get a cluster that's distributed over three Availability Zones.
 *
 * ```PYTHON
 * import boto3 client = boto3.client('kafka') response = client.create_cluster( BrokerNodeGroupInfo={ 'BrokerAZDistribution': 'DEFAULT', 'ClientSubnets': [ 'subnet-012345678901fedcba', 'subnet-9876543210abcdef01' ], 'InstanceType': 'kafka.m5.large', 'SecurityGroups': [ 'sg-012345abcdef789789' ] }, ClusterName='SalesCluster', EncryptionInfo={ 'EncryptionInTransit': { 'ClientBroker': 'TLS_PLAINTEXT', 'InCluster': True } }, EnhancedMonitoring='PER_TOPIC_PER_BROKER', KafkaVersion='2.2.1', NumberOfBrokerNodes=2
 * ) print(response)
 * ```
 *
 * @cloudformationResource AWS::MSK::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html
 */
export declare class CfnCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCluster;
    /**
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Information about the broker nodes in the cluster.
     */
    brokerNodeGroupInfo: CfnCluster.BrokerNodeGroupInfoProperty | cdk.IResolvable;
    /**
     * Includes all client authentication related information.
     */
    clientAuthentication?: CfnCluster.ClientAuthenticationProperty | cdk.IResolvable;
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * Represents the configuration that you want MSK to use for the cluster.
     */
    configurationInfo?: CfnCluster.ConfigurationInfoProperty | cdk.IResolvable;
    /**
     * The version of the cluster that you want to update.
     */
    currentVersion?: string;
    /**
     * Includes all encryption-related information.
     */
    encryptionInfo?: CfnCluster.EncryptionInfoProperty | cdk.IResolvable;
    /**
     * Specifies the level of monitoring for the MSK cluster.
     */
    enhancedMonitoring?: string;
    /**
     * The version of Apache Kafka.
     */
    kafkaVersion: string;
    /**
     * Logging Info details.
     */
    loggingInfo?: cdk.IResolvable | CfnCluster.LoggingInfoProperty;
    /**
     * The number of broker nodes in the cluster.
     */
    numberOfBrokerNodes: number;
    /**
     * The settings for open monitoring.
     */
    openMonitoring?: cdk.IResolvable | CfnCluster.OpenMonitoringProperty;
    /**
     * This controls storage mode for supported storage tiers.
     */
    storageMode?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Create tags when creating the cluster.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCluster {
    /**
     * Includes encryption-related information, such as the Amazon KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptioninfo.html
     */
    interface EncryptionInfoProperty {
        /**
         * The data-volume encryption details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptioninfo.html#cfn-msk-cluster-encryptioninfo-encryptionatrest
         */
        readonly encryptionAtRest?: CfnCluster.EncryptionAtRestProperty | cdk.IResolvable;
        /**
         * The details for encryption in transit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptioninfo.html#cfn-msk-cluster-encryptioninfo-encryptionintransit
         */
        readonly encryptionInTransit?: CfnCluster.EncryptionInTransitProperty | cdk.IResolvable;
    }
    /**
     * The data-volume encryption details.
     *
     * You can't update encryption at rest settings for existing clusters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionatrest.html
     */
    interface EncryptionAtRestProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon KMS key for encrypting data at rest.
         *
         * If you don't specify a KMS key, MSK creates one for you and uses it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionatrest.html#cfn-msk-cluster-encryptionatrest-datavolumekmskeyid
         */
        readonly dataVolumeKmsKeyId: string;
    }
    /**
     * The settings for encrypting data in transit.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionintransit.html
     */
    interface EncryptionInTransitProperty {
        /**
         * Indicates the encryption setting for data in transit between clients and brokers.
         *
         * You must set it to one of the following values.
         *
         * `TLS` means that client-broker communication is enabled with TLS only.
         *
         * `TLS_PLAINTEXT` means that client-broker communication is enabled for both TLS-encrypted, as well as plaintext data.
         *
         * `PLAINTEXT` means that client-broker communication is enabled in plaintext only.
         *
         * The default value is `TLS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionintransit.html#cfn-msk-cluster-encryptionintransit-clientbroker
         */
        readonly clientBroker?: string;
        /**
         * When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted.
         *
         * When set to false, the communication happens in plaintext.
         *
         * The default value is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionintransit.html#cfn-msk-cluster-encryptionintransit-incluster
         */
        readonly inCluster?: boolean | cdk.IResolvable;
    }
    /**
     * JMX and Node monitoring for the MSK cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-openmonitoring.html
     */
    interface OpenMonitoringProperty {
        /**
         * Prometheus exporter settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-openmonitoring.html#cfn-msk-cluster-openmonitoring-prometheus
         */
        readonly prometheus: cdk.IResolvable | CfnCluster.PrometheusProperty;
    }
    /**
     * Prometheus settings for open monitoring.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-prometheus.html
     */
    interface PrometheusProperty {
        /**
         * Indicates whether you want to enable or disable the JMX Exporter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-prometheus.html#cfn-msk-cluster-prometheus-jmxexporter
         */
        readonly jmxExporter?: cdk.IResolvable | CfnCluster.JmxExporterProperty;
        /**
         * Indicates whether you want to enable or disable the Node Exporter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-prometheus.html#cfn-msk-cluster-prometheus-nodeexporter
         */
        readonly nodeExporter?: cdk.IResolvable | CfnCluster.NodeExporterProperty;
    }
    /**
     * Indicates whether you want to enable or disable the JMX Exporter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-jmxexporter.html
     */
    interface JmxExporterProperty {
        /**
         * Indicates whether you want to enable or disable the JMX Exporter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-jmxexporter.html#cfn-msk-cluster-jmxexporter-enabledinbroker
         */
        readonly enabledInBroker: boolean | cdk.IResolvable;
    }
    /**
     * Indicates whether you want to enable or disable the Node Exporter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-nodeexporter.html
     */
    interface NodeExporterProperty {
        /**
         * Indicates whether you want to enable or disable the Node Exporter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-nodeexporter.html#cfn-msk-cluster-nodeexporter-enabledinbroker
         */
        readonly enabledInBroker: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the configuration to use for the brokers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-configurationinfo.html
     */
    interface ConfigurationInfoProperty {
        /**
         * ARN of the configuration to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-configurationinfo.html#cfn-msk-cluster-configurationinfo-arn
         */
        readonly arn: string;
        /**
         * The revision of the configuration to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-configurationinfo.html#cfn-msk-cluster-configurationinfo-revision
         */
        readonly revision: number;
    }
    /**
     * Describes the setup to be used for the broker nodes in the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html
     */
    interface BrokerNodeGroupInfoProperty {
        /**
         * This parameter is currently not in use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#cfn-msk-cluster-brokernodegroupinfo-brokerazdistribution
         */
        readonly brokerAzDistribution?: string;
        /**
         * The list of subnets to connect to in the client virtual private cloud (VPC).
         *
         * Amazon creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data.
         *
         * If you use the US West (N. California) Region, specify exactly two subnets. For other Regions where Amazon MSK is available, you can specify either two or three subnets. The subnets that you specify must be in distinct Availability Zones. When you create a cluster, Amazon MSK distributes the broker nodes evenly across the subnets that you specify.
         *
         * Client subnets can't occupy the Availability Zone with ID `use1-az3` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#cfn-msk-cluster-brokernodegroupinfo-clientsubnets
         */
        readonly clientSubnets: Array<string>;
        /**
         * Information about the cluster's connectivity setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#cfn-msk-cluster-brokernodegroupinfo-connectivityinfo
         */
        readonly connectivityInfo?: CfnCluster.ConnectivityInfoProperty | cdk.IResolvable;
        /**
         * The type of Amazon EC2 instances to use for brokers.
         *
         * The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge, kafka.m5.4xlarge, kafka.m5.8xlarge, kafka.m5.12xlarge, kafka.m5.16xlarge, kafka.m5.24xlarge, and kafka.t3.small.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#cfn-msk-cluster-brokernodegroupinfo-instancetype
         */
        readonly instanceType: string;
        /**
         * The security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster.
         *
         * If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC. If you specify security groups that were shared with you, you must ensure that you have permissions to them. Specifically, you need the `ec2:DescribeSecurityGroups` permission.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#cfn-msk-cluster-brokernodegroupinfo-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * Contains information about storage volumes attached to Amazon MSK broker nodes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#cfn-msk-cluster-brokernodegroupinfo-storageinfo
         */
        readonly storageInfo?: cdk.IResolvable | CfnCluster.StorageInfoProperty;
    }
    /**
     * Broker access controls.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-connectivityinfo.html
     */
    interface ConnectivityInfoProperty {
        /**
         * Access control settings for the cluster's brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-connectivityinfo.html#cfn-msk-cluster-connectivityinfo-publicaccess
         */
        readonly publicAccess?: cdk.IResolvable | CfnCluster.PublicAccessProperty;
        /**
         * VPC connection control settings for brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-connectivityinfo.html#cfn-msk-cluster-connectivityinfo-vpcconnectivity
         */
        readonly vpcConnectivity?: cdk.IResolvable | CfnCluster.VpcConnectivityProperty;
    }
    /**
     * VPC connection control settings for brokers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivity.html
     */
    interface VpcConnectivityProperty {
        /**
         * VPC connection control settings for brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivity.html#cfn-msk-cluster-vpcconnectivity-clientauthentication
         */
        readonly clientAuthentication?: cdk.IResolvable | CfnCluster.VpcConnectivityClientAuthenticationProperty;
    }
    /**
     * Includes all client authentication information for VpcConnectivity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityclientauthentication.html
     */
    interface VpcConnectivityClientAuthenticationProperty {
        /**
         * Details for VpcConnectivity ClientAuthentication using SASL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityclientauthentication.html#cfn-msk-cluster-vpcconnectivityclientauthentication-sasl
         */
        readonly sasl?: cdk.IResolvable | CfnCluster.VpcConnectivitySaslProperty;
        /**
         * Details for VpcConnectivity ClientAuthentication using TLS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityclientauthentication.html#cfn-msk-cluster-vpcconnectivityclientauthentication-tls
         */
        readonly tls?: cdk.IResolvable | CfnCluster.VpcConnectivityTlsProperty;
    }
    /**
     * Details for client authentication using SASL for VpcConnectivity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitysasl.html
     */
    interface VpcConnectivitySaslProperty {
        /**
         * Details for ClientAuthentication using IAM for VpcConnectivity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitysasl.html#cfn-msk-cluster-vpcconnectivitysasl-iam
         */
        readonly iam?: cdk.IResolvable | CfnCluster.VpcConnectivityIamProperty;
        /**
         * Details for SASL/SCRAM client authentication for VpcConnectivity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitysasl.html#cfn-msk-cluster-vpcconnectivitysasl-scram
         */
        readonly scram?: cdk.IResolvable | CfnCluster.VpcConnectivityScramProperty;
    }
    /**
     * Details for SASL/IAM client authentication for VpcConnectivity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityiam.html
     */
    interface VpcConnectivityIamProperty {
        /**
         * SASL/IAM authentication is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityiam.html#cfn-msk-cluster-vpcconnectivityiam-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Details for SASL/SCRAM client authentication for vpcConnectivity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityscram.html
     */
    interface VpcConnectivityScramProperty {
        /**
         * SASL/SCRAM authentication is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityscram.html#cfn-msk-cluster-vpcconnectivityscram-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Details for client authentication using TLS for vpcConnectivity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitytls.html
     */
    interface VpcConnectivityTlsProperty {
        /**
         * TLS authentication is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitytls.html#cfn-msk-cluster-vpcconnectivitytls-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Broker access controls.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-publicaccess.html
     */
    interface PublicAccessProperty {
        /**
         * DISABLED means that public access is turned off.
         *
         * SERVICE_PROVIDED_EIPS means that public access is turned on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-publicaccess.html#cfn-msk-cluster-publicaccess-type
         */
        readonly type?: string;
    }
    /**
     * Contains information about storage volumes attached to Amazon MSK broker nodes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-storageinfo.html
     */
    interface StorageInfoProperty {
        /**
         * EBS volume information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-storageinfo.html#cfn-msk-cluster-storageinfo-ebsstorageinfo
         */
        readonly ebsStorageInfo?: CfnCluster.EBSStorageInfoProperty | cdk.IResolvable;
    }
    /**
     * Contains information about the EBS storage volumes attached to the broker nodes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-ebsstorageinfo.html
     */
    interface EBSStorageInfoProperty {
        /**
         * EBS volume provisioned throughput information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-ebsstorageinfo.html#cfn-msk-cluster-ebsstorageinfo-provisionedthroughput
         */
        readonly provisionedThroughput?: cdk.IResolvable | CfnCluster.ProvisionedThroughputProperty;
        /**
         * The size in GiB of the EBS volume for the data drive on each broker node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-ebsstorageinfo.html#cfn-msk-cluster-ebsstorageinfo-volumesize
         */
        readonly volumeSize?: number;
    }
    /**
     * Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-provisionedthroughput.html
     */
    interface ProvisionedThroughputProperty {
        /**
         * Provisioned throughput is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-provisionedthroughput.html#cfn-msk-cluster-provisionedthroughput-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-provisionedthroughput.html#cfn-msk-cluster-provisionedthroughput-volumethroughput
         */
        readonly volumeThroughput?: number;
    }
    /**
     * Includes all client authentication information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-clientauthentication.html
     */
    interface ClientAuthenticationProperty {
        /**
         * Details for client authentication using SASL.
         *
         * To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT` . If you choose `TLS_PLAINTEXT` , then you must also set `unauthenticated` to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-clientauthentication.html#cfn-msk-cluster-clientauthentication-sasl
         */
        readonly sasl?: cdk.IResolvable | CfnCluster.SaslProperty;
        /**
         * Details for ClientAuthentication using TLS.
         *
         * To turn on TLS access control, you must also turn on `EncryptionInTransit` by setting `inCluster` to true and `clientBroker` to `TLS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-clientauthentication.html#cfn-msk-cluster-clientauthentication-tls
         */
        readonly tls?: cdk.IResolvable | CfnCluster.TlsProperty;
        /**
         * Details for ClientAuthentication using no authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-clientauthentication.html#cfn-msk-cluster-clientauthentication-unauthenticated
         */
        readonly unauthenticated?: cdk.IResolvable | CfnCluster.UnauthenticatedProperty;
    }
    /**
     * Details for client authentication using SASL.
     *
     * To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT` . If you choose `TLS_PLAINTEXT` , then you must also set `unauthenticated` to true.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-sasl.html
     */
    interface SaslProperty {
        /**
         * Details for ClientAuthentication using IAM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-sasl.html#cfn-msk-cluster-sasl-iam
         */
        readonly iam?: CfnCluster.IamProperty | cdk.IResolvable;
        /**
         * Details for SASL/SCRAM client authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-sasl.html#cfn-msk-cluster-sasl-scram
         */
        readonly scram?: cdk.IResolvable | CfnCluster.ScramProperty;
    }
    /**
     * Details for SASL/IAM client authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-iam.html
     */
    interface IamProperty {
        /**
         * SASL/IAM authentication is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-iam.html#cfn-msk-cluster-iam-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Details for SASL/SCRAM client authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-scram.html
     */
    interface ScramProperty {
        /**
         * SASL/SCRAM authentication is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-scram.html#cfn-msk-cluster-scram-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Details for allowing no client authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-unauthenticated.html
     */
    interface UnauthenticatedProperty {
        /**
         * Unauthenticated is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-unauthenticated.html#cfn-msk-cluster-unauthenticated-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Details for client authentication using TLS.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-tls.html
     */
    interface TlsProperty {
        /**
         * List of AWS Private CA Amazon Resource Name (ARN)s.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-tls.html#cfn-msk-cluster-tls-certificateauthorityarnlist
         */
        readonly certificateAuthorityArnList?: Array<string>;
        /**
         * TLS authentication is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-tls.html#cfn-msk-cluster-tls-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * You can configure your MSK cluster to send broker logs to different destination types.
     *
     * This is a container for the configuration details related to broker logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-logginginfo.html
     */
    interface LoggingInfoProperty {
        /**
         * You can configure your MSK cluster to send broker logs to different destination types.
         *
         * This configuration specifies the details of these destinations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-logginginfo.html#cfn-msk-cluster-logginginfo-brokerlogs
         */
        readonly brokerLogs: CfnCluster.BrokerLogsProperty | cdk.IResolvable;
    }
    /**
     * The broker logs configuration for this MSK cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokerlogs.html
     */
    interface BrokerLogsProperty {
        /**
         * Details of the CloudWatch Logs destination for broker logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokerlogs.html#cfn-msk-cluster-brokerlogs-cloudwatchlogs
         */
        readonly cloudWatchLogs?: CfnCluster.CloudWatchLogsProperty | cdk.IResolvable;
        /**
         * Details of the Kinesis Data Firehose delivery stream that is the destination for broker logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokerlogs.html#cfn-msk-cluster-brokerlogs-firehose
         */
        readonly firehose?: CfnCluster.FirehoseProperty | cdk.IResolvable;
        /**
         * Details of the Amazon S3 destination for broker logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokerlogs.html#cfn-msk-cluster-brokerlogs-s3
         */
        readonly s3?: cdk.IResolvable | CfnCluster.S3Property;
    }
    /**
     * The details of the Amazon S3 destination for broker logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-s3.html
     */
    interface S3Property {
        /**
         * The name of the S3 bucket that is the destination for broker logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-s3.html#cfn-msk-cluster-s3-bucket
         */
        readonly bucket?: string;
        /**
         * Specifies whether broker logs get sent to the specified Amazon S3 destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-s3.html#cfn-msk-cluster-s3-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The S3 prefix that is the destination for broker logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-s3.html#cfn-msk-cluster-s3-prefix
         */
        readonly prefix?: string;
    }
    /**
     * Firehose details for BrokerLogs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-firehose.html
     */
    interface FirehoseProperty {
        /**
         * The Kinesis Data Firehose delivery stream that is the destination for broker logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-firehose.html#cfn-msk-cluster-firehose-deliverystream
         */
        readonly deliveryStream?: string;
        /**
         * Specifies whether broker logs get sent to the specified Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-firehose.html#cfn-msk-cluster-firehose-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Details of the CloudWatch Logs destination for broker logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-cloudwatchlogs.html
     */
    interface CloudWatchLogsProperty {
        /**
         * Specifies whether broker logs get sent to the specified CloudWatch Logs destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-cloudwatchlogs.html#cfn-msk-cluster-cloudwatchlogs-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The CloudWatch log group that is the destination for broker logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-cloudwatchlogs.html#cfn-msk-cluster-cloudwatchlogs-loggroup
         */
        readonly logGroup?: string;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html
 */
export interface CfnClusterProps {
    /**
     * Information about the broker nodes in the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo
     */
    readonly brokerNodeGroupInfo: CfnCluster.BrokerNodeGroupInfoProperty | cdk.IResolvable;
    /**
     * Includes all client authentication related information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication
     */
    readonly clientAuthentication?: CfnCluster.ClientAuthenticationProperty | cdk.IResolvable;
    /**
     * The name of the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clustername
     */
    readonly clusterName: string;
    /**
     * Represents the configuration that you want MSK to use for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-configurationinfo
     */
    readonly configurationInfo?: CfnCluster.ConfigurationInfoProperty | cdk.IResolvable;
    /**
     * The version of the cluster that you want to update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-currentversion
     */
    readonly currentVersion?: string;
    /**
     * Includes all encryption-related information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptioninfo
     */
    readonly encryptionInfo?: CfnCluster.EncryptionInfoProperty | cdk.IResolvable;
    /**
     * Specifies the level of monitoring for the MSK cluster.
     *
     * The possible values are `DEFAULT` , `PER_BROKER` , and `PER_TOPIC_PER_BROKER` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-enhancedmonitoring
     */
    readonly enhancedMonitoring?: string;
    /**
     * The version of Apache Kafka.
     *
     * You can use Amazon MSK to create clusters that use Apache Kafka versions 1.1.1 and 2.2.1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-kafkaversion
     */
    readonly kafkaVersion: string;
    /**
     * Logging Info details.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-logginginfo
     */
    readonly loggingInfo?: cdk.IResolvable | CfnCluster.LoggingInfoProperty;
    /**
     * The number of broker nodes in the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-numberofbrokernodes
     */
    readonly numberOfBrokerNodes: number;
    /**
     * The settings for open monitoring.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-openmonitoring
     */
    readonly openMonitoring?: cdk.IResolvable | CfnCluster.OpenMonitoringProperty;
    /**
     * This controls storage mode for supported storage tiers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-storagemode
     */
    readonly storageMode?: string;
    /**
     * Create tags when creating the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Create or update cluster policy.
 *
 * @cloudformationResource AWS::MSK::ClusterPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html
 */
export declare class CfnClusterPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClusterPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClusterPolicy;
    /**
     * The current version of the policy attached to the specified cluster.
     *
     * @cloudformationAttribute CurrentVersion
     */
    readonly attrCurrentVersion: string;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
     */
    clusterArn: string;
    /**
     * Resource policy for the cluster.
     */
    policy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnClusterPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html
 */
export interface CfnClusterPolicyProps {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html#cfn-msk-clusterpolicy-clusterarn
     */
    readonly clusterArn: string;
    /**
     * Resource policy for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html#cfn-msk-clusterpolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
}
/**
 * Creates a new MSK configuration.
 *
 * To see an example of how to use this operation, first save the following text to a file and name the file config-file.txt .
 *
 * `auto.create.topics.enable = true zookeeper.connection.timeout.ms = 1000 log.roll.ms = 604800000`
 *
 * Now run the following Python 3.6 script in the folder where you saved config-file.txt . This script uses the properties specified in config-file.txt to create a configuration named `SalesClusterConfiguration` . This configuration can work with Apache Kafka versions 1.1.1 and 2.1.0.
 *
 * ```PYTHON
 * import boto3 client = boto3.client('kafka') config_file = open('config-file.txt', 'r') server_properties = config_file.read() response = client.create_configuration( Name='SalesClusterConfiguration', Description='The configuration to use on all sales clusters.', KafkaVersions=['1.1.1', '2.1.0'], ServerProperties=server_properties
 * ) print(response)
 * ```
 *
 * @cloudformationResource AWS::MSK::Configuration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html
 */
export declare class CfnConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfiguration;
    /**
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time when the configuration was created.
     *
     * @cloudformationAttribute LatestRevision.CreationTime
     */
    readonly attrLatestRevisionCreationTime: string;
    /**
     * The description of the configuration.
     *
     * @cloudformationAttribute LatestRevision.Description
     */
    readonly attrLatestRevisionDescription: string;
    /**
     * A string that uniquely identifies a revision of an MSK configuration.
     *
     * @cloudformationAttribute LatestRevision.Revision
     */
    readonly attrLatestRevisionRevision: number;
    /**
     * The description of the configuration.
     */
    description?: string;
    kafkaVersionsList?: Array<string>;
    /**
     * Latest revision of the configuration.
     */
    latestRevision?: cdk.IResolvable | CfnConfiguration.LatestRevisionProperty;
    /**
     * The name of the configuration.
     */
    name: string;
    /**
     * Contents of the server.properties file. When using the API, you must ensure that the contents of the file are base64 encoded. When using the console, the SDK, or the CLI, the contents of server.properties can be in plaintext.
     */
    serverProperties: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfiguration {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-configuration-latestrevision.html
     */
    interface LatestRevisionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-configuration-latestrevision.html#cfn-msk-configuration-latestrevision-creationtime
         */
        readonly creationTime?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-configuration-latestrevision.html#cfn-msk-configuration-latestrevision-description
         */
        readonly description?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-configuration-latestrevision.html#cfn-msk-configuration-latestrevision-revision
         */
        readonly revision?: number;
    }
}
/**
 * Properties for defining a `CfnConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html
 */
export interface CfnConfigurationProps {
    /**
     * The description of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-description
     */
    readonly description?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-kafkaversionslist
     */
    readonly kafkaVersionsList?: Array<string>;
    /**
     * Latest revision of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-latestrevision
     */
    readonly latestRevision?: cdk.IResolvable | CfnConfiguration.LatestRevisionProperty;
    /**
     * The name of the configuration.
     *
     * Configuration names are strings that match the regex "^[0-9A-Za-z][0-9A-Za-z-]{0,}$".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-name
     */
    readonly name: string;
    /**
     * Contents of the server.properties file. When using the API, you must ensure that the contents of the file are base64 encoded. When using the console, the SDK, or the CLI, the contents of server.properties can be in plaintext.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-serverproperties
     */
    readonly serverProperties: string;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html.
 *
 * @cloudformationResource AWS::MSK::ServerlessCluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html
 */
export declare class CfnServerlessCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServerlessCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServerlessCluster;
    /**
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Includes all client authentication information.
     */
    clientAuthentication: CfnServerlessCluster.ClientAuthenticationProperty | cdk.IResolvable;
    clusterName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A key-value pair to associate with a resource.
     */
    tagsRaw?: Record<string, string>;
    vpcConfigs: Array<cdk.IResolvable | CfnServerlessCluster.VpcConfigProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServerlessClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnServerlessCluster {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-vpcconfig.html#cfn-msk-serverlesscluster-vpcconfig-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-vpcconfig.html#cfn-msk-serverlesscluster-vpcconfig-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * Includes all client authentication information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-clientauthentication.html
     */
    interface ClientAuthenticationProperty {
        /**
         * Details for client authentication using SASL.
         *
         * To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT` . If you choose `TLS_PLAINTEXT` , then you must also set `unauthenticated` to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-clientauthentication.html#cfn-msk-serverlesscluster-clientauthentication-sasl
         */
        readonly sasl: cdk.IResolvable | CfnServerlessCluster.SaslProperty;
    }
    /**
     * Details for client authentication using SASL.
     *
     * To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT` . If you choose `TLS_PLAINTEXT` , then you must also set `unauthenticated` to true.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-sasl.html
     */
    interface SaslProperty {
        /**
         * Details for ClientAuthentication using IAM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-sasl.html#cfn-msk-serverlesscluster-sasl-iam
         */
        readonly iam: CfnServerlessCluster.IamProperty | cdk.IResolvable;
    }
    /**
     * Details for SASL/IAM client authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-iam.html
     */
    interface IamProperty {
        /**
         * SASL/IAM authentication is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-iam.html#cfn-msk-serverlesscluster-iam-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnServerlessCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html
 */
export interface CfnServerlessClusterProps {
    /**
     * Includes all client authentication information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clientauthentication
     */
    readonly clientAuthentication: CfnServerlessCluster.ClientAuthenticationProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clustername
     */
    readonly clusterName: string;
    /**
     * A key-value pair to associate with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-vpcconfigs
     */
    readonly vpcConfigs: Array<cdk.IResolvable | CfnServerlessCluster.VpcConfigProperty> | cdk.IResolvable;
}
/**
 * Create remote VPC connection.
 *
 * @cloudformationResource AWS::MSK::VpcConnection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html
 */
export declare class CfnVpcConnection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVpcConnection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVpcConnection;
    /**
     * The ARN of the VPC connection.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The type of private link authentication.
     */
    authentication: string;
    /**
     * The list of subnets in the client VPC to connect to.
     */
    clientSubnets: Array<string>;
    /**
     * The security groups to attach to the ENIs for the broker nodes.
     */
    securityGroups: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Create tags when creating the VPC connection.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     */
    targetClusterArn: string;
    /**
     * The VPC id of the remote client.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVpcConnectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnVpcConnection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html
 */
export interface CfnVpcConnectionProps {
    /**
     * The type of private link authentication.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-authentication
     */
    readonly authentication: string;
    /**
     * The list of subnets in the client VPC to connect to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-clientsubnets
     */
    readonly clientSubnets: Array<string>;
    /**
     * The security groups to attach to the ENIs for the broker nodes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-securitygroups
     */
    readonly securityGroups: Array<string>;
    /**
     * Create tags when creating the VPC connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-targetclusterarn
     */
    readonly targetClusterArn: string;
    /**
     * The VPC id of the remote client.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-vpcid
     */
    readonly vpcId: string;
}
/**
 * Resource Type definition for AWS::MSK::Replicator.
 *
 * @cloudformationResource AWS::MSK::Replicator
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html
 */
export declare class CfnReplicator extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicator from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicator;
    /**
     * Amazon Resource Name (ARN) for the created replicator.
     *
     * @cloudformationAttribute ReplicatorArn
     */
    readonly attrReplicatorArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The current version of the MSK replicator.
     */
    currentVersion?: string;
    /**
     * A summary description of the replicator.
     */
    description?: string;
    /**
     * Specifies a list of Kafka clusters which are targets of the replicator.
     */
    kafkaClusters: Array<cdk.IResolvable | CfnReplicator.KafkaClusterProperty> | cdk.IResolvable;
    /**
     * A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
     */
    replicationInfoList: Array<cdk.IResolvable | CfnReplicator.ReplicationInfoProperty> | cdk.IResolvable;
    /**
     * The name of the replicator.
     */
    replicatorName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.
     */
    serviceExecutionRoleArn: string;
    /**
     * A collection of tags associated with a resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicatorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReplicator {
    /**
     * Details of a Kafka cluster for replication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkacluster.html
     */
    interface KafkaClusterProperty {
        /**
         * Details of an Amazon MSK cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkacluster.html#cfn-msk-replicator-kafkacluster-amazonmskcluster
         */
        readonly amazonMskCluster: CfnReplicator.AmazonMskClusterProperty | cdk.IResolvable;
        /**
         * Details of an Amazon VPC which has network connectivity to the Kafka cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkacluster.html#cfn-msk-replicator-kafkacluster-vpcconfig
         */
        readonly vpcConfig: cdk.IResolvable | CfnReplicator.KafkaClusterClientVpcConfigProperty;
    }
    /**
     * Details of an Amazon MSK cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-amazonmskcluster.html
     */
    interface AmazonMskClusterProperty {
        /**
         * The ARN of an Amazon MSK cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-amazonmskcluster.html#cfn-msk-replicator-amazonmskcluster-mskclusterarn
         */
        readonly mskClusterArn: string;
    }
    /**
     * Details of an Amazon VPC which has network connectivity to the Kafka cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterclientvpcconfig.html
     */
    interface KafkaClusterClientVpcConfigProperty {
        /**
         * The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to.
         *
         * If a security group is not specified, the default security group associated with the VPC is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterclientvpcconfig.html#cfn-msk-replicator-kafkaclusterclientvpcconfig-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The list of subnets to connect to in the virtual private cloud (VPC).
         *
         * AWS creates elastic network interfaces inside these subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterclientvpcconfig.html#cfn-msk-replicator-kafkaclusterclientvpcconfig-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * Specifies configuration for replication between a source and target Kafka cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html
     */
    interface ReplicationInfoProperty {
        /**
         * Configuration relating to consumer group replication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html#cfn-msk-replicator-replicationinfo-consumergroupreplication
         */
        readonly consumerGroupReplication: CfnReplicator.ConsumerGroupReplicationProperty | cdk.IResolvable;
        /**
         * Amazon Resource Name of the source Kafka cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html#cfn-msk-replicator-replicationinfo-sourcekafkaclusterarn
         */
        readonly sourceKafkaClusterArn: string;
        /**
         * The type of compression to use writing records to target Kafka cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html#cfn-msk-replicator-replicationinfo-targetcompressiontype
         */
        readonly targetCompressionType: string;
        /**
         * Amazon Resource Name of the target Kafka cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html#cfn-msk-replicator-replicationinfo-targetkafkaclusterarn
         */
        readonly targetKafkaClusterArn: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html#cfn-msk-replicator-replicationinfo-topicreplication
         */
        readonly topicReplication: cdk.IResolvable | CfnReplicator.TopicReplicationProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html
     */
    interface TopicReplicationProperty {
        /**
         * Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html#cfn-msk-replicator-topicreplication-copyaccesscontrollistsfortopics
         */
        readonly copyAccessControlListsForTopics?: boolean | cdk.IResolvable;
        /**
         * Whether to periodically configure remote topics to match their corresponding upstream topics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html#cfn-msk-replicator-topicreplication-copytopicconfigurations
         */
        readonly copyTopicConfigurations?: boolean | cdk.IResolvable;
        /**
         * Whether to periodically check for new topics and partitions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html#cfn-msk-replicator-topicreplication-detectandcopynewtopics
         */
        readonly detectAndCopyNewTopics?: boolean | cdk.IResolvable;
        /**
         * Configuration for specifying the position in the topics to start replicating from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html#cfn-msk-replicator-topicreplication-startingposition
         */
        readonly startingPosition?: cdk.IResolvable | CfnReplicator.ReplicationStartingPositionProperty;
        /**
         * List of regular expression patterns indicating the topics that should not be replicated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html#cfn-msk-replicator-topicreplication-topicstoexclude
         */
        readonly topicsToExclude?: Array<string>;
        /**
         * List of regular expression patterns indicating the topics to copy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html#cfn-msk-replicator-topicreplication-topicstoreplicate
         */
        readonly topicsToReplicate: Array<string>;
    }
    /**
     * Configuration for specifying the position in the topics to start replicating from.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationstartingposition.html
     */
    interface ReplicationStartingPositionProperty {
        /**
         * The type of replication starting position.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationstartingposition.html#cfn-msk-replicator-replicationstartingposition-type
         */
        readonly type?: string;
    }
    /**
     * Configuration relating to consumer group replication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html
     */
    interface ConsumerGroupReplicationProperty {
        /**
         * List of regular expression patterns indicating the consumer groups that should not be replicated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html#cfn-msk-replicator-consumergroupreplication-consumergroupstoexclude
         */
        readonly consumerGroupsToExclude?: Array<string>;
        /**
         * List of regular expression patterns indicating the consumer groups to copy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html#cfn-msk-replicator-consumergroupreplication-consumergroupstoreplicate
         */
        readonly consumerGroupsToReplicate: Array<string>;
        /**
         * Whether to periodically check for new consumer groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html#cfn-msk-replicator-consumergroupreplication-detectandcopynewconsumergroups
         */
        readonly detectAndCopyNewConsumerGroups?: boolean | cdk.IResolvable;
        /**
         * Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html#cfn-msk-replicator-consumergroupreplication-synchroniseconsumergroupoffsets
         */
        readonly synchroniseConsumerGroupOffsets?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnReplicator`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html
 */
export interface CfnReplicatorProps {
    /**
     * The current version of the MSK replicator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-currentversion
     */
    readonly currentVersion?: string;
    /**
     * A summary description of the replicator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-description
     */
    readonly description?: string;
    /**
     * Specifies a list of Kafka clusters which are targets of the replicator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-kafkaclusters
     */
    readonly kafkaClusters: Array<cdk.IResolvable | CfnReplicator.KafkaClusterProperty> | cdk.IResolvable;
    /**
     * A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationinfolist
     */
    readonly replicationInfoList: Array<cdk.IResolvable | CfnReplicator.ReplicationInfoProperty> | cdk.IResolvable;
    /**
     * The name of the replicator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicatorname
     */
    readonly replicatorName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-serviceexecutionrolearn
     */
    readonly serviceExecutionRoleArn: string;
    /**
     * A collection of tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}