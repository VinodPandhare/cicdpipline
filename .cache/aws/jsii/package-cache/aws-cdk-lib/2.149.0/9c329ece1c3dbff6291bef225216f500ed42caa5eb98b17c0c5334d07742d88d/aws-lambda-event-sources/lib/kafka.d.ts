import { StreamEventSource, BaseStreamEventSourceProps } from './stream';
import { ISecurityGroup, IVpc, SubnetSelection } from '../../aws-ec2';
import * as lambda from '../../aws-lambda';
import * as secretsmanager from '../../aws-secretsmanager';
/**
 * Properties for a Kafka event source
 */
export interface KafkaEventSourceProps extends BaseStreamEventSourceProps {
    /**
     * The Kafka topic to subscribe to
     */
    readonly topic: string;
    /**
     * The secret with the Kafka credentials, see https://docs.aws.amazon.com/msk/latest/developerguide/msk-password.html for details
     * This field is required if your Kafka brokers are accessed over the Internet
     *
     * @default none
     */
    readonly secret?: secretsmanager.ISecret;
    /**
     * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value.  The value must have a lenght between 1 and 200 and full the pattern '[a-zA-Z0-9-\/*:_+=.@-]*'.
     * @see https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id
     *
     * @default - none
     */
    readonly consumerGroupId?: string;
    /**
     * Add filter criteria to Event Source
     * @see https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html
     *
     * @default - none
     */
    readonly filters?: Array<{
        [key: string]: any;
    }>;
    /**
     * Add an on Failure Destination for this Kafka event. SNS/SQS/S3 are supported
     *
     * @default - discarded records are ignored
     */
    readonly onFailure?: lambda.IEventSourceDlq;
}
/**
 * Properties for a MSK event source
 */
export interface ManagedKafkaEventSourceProps extends KafkaEventSourceProps {
    /**
     * An MSK cluster construct
     */
    readonly clusterArn: string;
}
/**
 * The authentication method to use with SelfManagedKafkaEventSource
 */
export declare enum AuthenticationMethod {
    /**
     * SASL_SCRAM_512_AUTH authentication method for your Kafka cluster
     */
    SASL_SCRAM_512_AUTH = "SASL_SCRAM_512_AUTH",
    /**
     * SASL_SCRAM_256_AUTH authentication method for your Kafka cluster
     */
    SASL_SCRAM_256_AUTH = "SASL_SCRAM_256_AUTH",
    /**
     * BASIC_AUTH (SASL/PLAIN) authentication method for your Kafka cluster
     */
    BASIC_AUTH = "BASIC_AUTH",
    /**
     * CLIENT_CERTIFICATE_TLS_AUTH (mTLS) authentication method for your Kafka cluster
     */
    CLIENT_CERTIFICATE_TLS_AUTH = "CLIENT_CERTIFICATE_TLS_AUTH"
}
/**
 * Properties for a self managed Kafka cluster event source.
 * If your Kafka cluster is only reachable via VPC make sure to configure it.
 */
export interface SelfManagedKafkaEventSourceProps extends KafkaEventSourceProps {
    /**
     * The list of host and port pairs that are the addresses of the Kafka brokers in a "bootstrap" Kafka cluster that
     * a Kafka client connects to initially to bootstrap itself. They are in the format `abc.xyz.com:xxxx`.
     */
    readonly bootstrapServers: string[];
    /**
     * If your Kafka brokers are only reachable via VPC provide the VPC here
     *
     * @default none
     */
    readonly vpc?: IVpc;
    /**
     * If your Kafka brokers are only reachable via VPC, provide the subnets selection here
     *
     * @default - none, required if setting vpc
     */
    readonly vpcSubnets?: SubnetSelection;
    /**
     * If your Kafka brokers are only reachable via VPC, provide the security group here
     *
     * @default - none, required if setting vpc
     */
    readonly securityGroup?: ISecurityGroup;
    /**
     * The authentication method for your Kafka cluster
     *
     * @default AuthenticationMethod.SASL_SCRAM_512_AUTH
     */
    readonly authenticationMethod?: AuthenticationMethod;
    /**
     * The secret with the root CA certificate used by your Kafka brokers for TLS encryption
     * This field is required if your Kafka brokers use certificates signed by a private CA
     *
     * @default - none
     */
    readonly rootCACertificate?: secretsmanager.ISecret;
}
/**
 * Use a MSK cluster as a streaming source for AWS Lambda
 */
export declare class ManagedKafkaEventSource extends StreamEventSource {
    private innerProps;
    private _eventSourceMappingId?;
    private _eventSourceMappingArn?;
    constructor(props: ManagedKafkaEventSourceProps);
    bind(target: lambda.IFunction): void;
    private sourceAccessConfigurations;
    /**
    * The identifier for this EventSourceMapping
    */
    get eventSourceMappingId(): string;
    /**
     * The ARN for this EventSourceMapping
     */
    get eventSourceMappingArn(): string;
}
/**
 * Use a self hosted Kafka installation as a streaming source for AWS Lambda.
 */
export declare class SelfManagedKafkaEventSource extends StreamEventSource {
    private innerProps;
    constructor(props: SelfManagedKafkaEventSourceProps);
    bind(target: lambda.IFunction): void;
    private mappingId;
    private sourceAccessConfigurations;
}