import { Construct } from 'constructs';
import { ICertificate } from '../../../aws-certificatemanager';
import { IVpc } from '../../../aws-ec2';
import { AwsLogDriver, BaseService, CloudMapOptions, Cluster, ContainerImage, DeploymentController, DeploymentCircuitBreaker, ICluster, LogDriver, PropagatedTagSource, Secret, CapacityProviderStrategy } from '../../../aws-ecs';
import { ApplicationListener, ApplicationLoadBalancer, ApplicationProtocol, ApplicationProtocolVersion, ApplicationTargetGroup, IApplicationLoadBalancer, SslPolicy } from '../../../aws-elasticloadbalancingv2';
import { IRole } from '../../../aws-iam';
import { IHostedZone } from '../../../aws-route53';
import * as cdk from '../../../core';
import { Duration } from '../../../core';
/**
 * Describes the type of DNS record the service should create
 */
export declare enum ApplicationLoadBalancedServiceRecordType {
    /**
     * Create Route53 A Alias record
     */
    ALIAS = 0,
    /**
     * Create a CNAME record
     */
    CNAME = 1,
    /**
     * Do not create any DNS records
     */
    NONE = 2
}
/**
 * The properties for the base ApplicationLoadBalancedEc2Service or ApplicationLoadBalancedFargateService service.
 */
export interface ApplicationLoadBalancedServiceBaseProps {
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
     * The properties required to create a new task definition. TaskDefinition or TaskImageOptions must be specified, but not both.
     *
     * @default none
     */
    readonly taskImageOptions?: ApplicationLoadBalancedTaskImageOptions;
    /**
     * Determines whether the Load Balancer will be internet-facing.
     *
     * @default true
     */
    readonly publicLoadBalancer?: boolean;
    /**
     * Determines whether or not the Security Group for the Load Balancer's Listener will be open to all traffic by default.
     *
     * @default true -- The security group allows ingress from all IP addresses.
     */
    readonly openListener?: boolean;
    /**
     * The desired number of instantiations of the task definition to keep running on the service.
     * The minimum value is 1
     *
     * @default - The default is 1 for all new services and uses the existing service's desired count
     * when updating an existing service.
     */
    readonly desiredCount?: number;
    /**
     * Certificate Manager certificate to associate with the load balancer.
     * Setting this option will set the load balancer protocol to HTTPS.
     *
     * @default - No certificate associated with the load balancer, if using
     * the HTTP protocol. For HTTPS, a DNS-validated certificate will be
     * created for the load balancer's specified domain name if a domain name
     * and domain zone are specified.
     */
    readonly certificate?: ICertificate;
    /**
     * The protocol for connections from the load balancer to the ECS tasks.
     * The default target port is determined from the protocol (port 80 for
     * HTTP, port 443 for HTTPS).
     *
     * @default HTTP.
     */
    readonly targetProtocol?: ApplicationProtocol;
    /**
     * The protocol for connections from clients to the load balancer.
     * The load balancer port is determined from the protocol (port 80 for
     * HTTP, port 443 for HTTPS).  If HTTPS, either a certificate or domain
     * name and domain zone must also be specified.
     *
     * @default HTTP. If a certificate is specified, the protocol will be
     * set by default to HTTPS.
     */
    readonly protocol?: ApplicationProtocol;
    /**
     * The protocol version to use
     *
     * @default ApplicationProtocolVersion.HTTP1
     */
    readonly protocolVersion?: ApplicationProtocolVersion;
    /**
     * The domain name for the service, e.g. "api.example.com."
     *
     * @default - No domain name.
     */
    readonly domainName?: string;
    /**
     * The Route53 hosted zone for the domain, e.g. "example.com."
     *
     * @default - No Route53 hosted domain zone.
     */
    readonly domainZone?: IHostedZone;
    /**
     * The name of the service.
     *
     * @default - CloudFormation-generated name.
     */
    readonly serviceName?: string;
    /**
     * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy
     * Elastic Load Balancing target health checks after a task has first started.
     *
     * @default - defaults to 60 seconds if at least one load balancer is in-use and it is not already set
     */
    readonly healthCheckGracePeriod?: cdk.Duration;
    /**
     * The maximum number of tasks, specified as a percentage of the Amazon ECS
     * service's DesiredCount value, that can run in a service during a
     * deployment.
     *
     * @default - 100 if daemon, otherwise 200
     */
    readonly maxHealthyPercent?: number;
    /**
     * The minimum number of tasks, specified as a percentage of
     * the Amazon ECS service's DesiredCount value, that must
     * continue to run and remain healthy during a deployment.
     *
     * @default - 0 if daemon, otherwise 50
     */
    readonly minHealthyPercent?: number;
    /**
     * The application load balancer that will serve traffic to the service.
     * The VPC attribute of a load balancer must be specified for it to be used
     * to create a new service with this pattern.
     *
     * [disable-awslint:ref-via-interface]
     *
     * @default - a new load balancer will be created.
     */
    readonly loadBalancer?: IApplicationLoadBalancer;
    /**
     * Listener port of the application load balancer that will serve traffic to the service.
     *
     * @default - The default listener port is determined from the protocol (port 80 for HTTP,
     * port 443 for HTTPS). A domain name and zone must be also be specified if using HTTPS.
     */
    readonly listenerPort?: number;
    /**
     * The security policy that defines which ciphers and protocols are supported by the ALB Listener.
     *
     * @default - The recommended elastic load balancing security policy
     */
    readonly sslPolicy?: SslPolicy;
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
     * The options for configuring an Amazon ECS service to use service discovery.
     *
     * @default - AWS Cloud Map service discovery is not enabled.
     */
    readonly cloudMapOptions?: CloudMapOptions;
    /**
     * Specifies whether the load balancer should redirect traffic on port 80 to port 443 to support HTTP->HTTPS redirects
     * This is only valid if the protocol of the ALB is HTTPS
     *
     * @default false
     */
    readonly redirectHTTP?: boolean;
    /**
     * Specifies whether the Route53 record should be a CNAME, an A record using the Alias feature or no record at all.
     * This is useful if you need to work with DNS systems that do not support alias records.
     *
     * @default ApplicationLoadBalancedServiceRecordType.ALIAS
     */
    readonly recordType?: ApplicationLoadBalancedServiceRecordType;
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
     * Name of the load balancer
     *
     * @default - Automatically generated name.
     */
    readonly loadBalancerName?: string;
    /**
     * Whether ECS Exec should be enabled
     *
     * @default - false
     */
    readonly enableExecuteCommand?: boolean;
    /**
     * The load balancer idle timeout, in seconds. Can be between 1 and 4000 seconds
     *
     * @default - CloudFormation sets idle timeout to 60 seconds
     */
    readonly idleTimeout?: Duration;
}
export interface ApplicationLoadBalancedTaskImageOptions {
    /**
     * The image used to start a container. Image or taskDefinition must be specified, not both.
     *
     * @default - none
     */
    readonly image: ContainerImage;
    /**
     * The environment variables to pass to the container.
     *
     * @default - No environment variables.
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
     * Flag to indicate whether to enable logging.
     *
     * @default true
     */
    readonly enableLogging?: boolean;
    /**
     * The log driver to use.
     *
     * @default - AwsLogDriver if enableLogging is true
     */
    readonly logDriver?: LogDriver;
    /**
     * The name of the task execution IAM role that grants the Amazon ECS container agent permission to call AWS APIs on your behalf.
     *
     * @default - No value
     */
    readonly executionRole?: IRole;
    /**
     * The name of the task IAM role that grants containers in the task permission to call AWS APIs on your behalf.
     *
     * @default - A task role is automatically created for you.
     */
    readonly taskRole?: IRole;
    /**
     * The container name value to be specified in the task definition.
     *
     * @default - none
     */
    readonly containerName?: string;
    /**
     * The port number on the container that is bound to the user-specified or automatically assigned host port.
     *
     * If you are using containers in a task with the awsvpc or host network mode, exposed ports should be specified using containerPort.
     * If you are using containers in a task with the bridge network mode and you specify a container port and not a host port,
     * your container automatically receives a host port in the ephemeral port range.
     *
     * Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.
     *
     * For more information, see
     * [hostPort](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PortMapping.html#ECS-Type-PortMapping-hostPort).
     *
     * @default 80
     */
    readonly containerPort?: number;
    /**
     * The name of a family that this task definition is registered to. A family groups multiple versions of a task definition.
     *
     * @default - Automatically generated name.
     */
    readonly family?: string;
    /**
     * A key/value map of labels to add to the container.
     *
     * @default - No labels.
     */
    readonly dockerLabels?: {
        [key: string]: string;
    };
    /**
    * The entry point that's passed to the container.
    *
    * This parameter maps to `Entrypoint` in the [Create a container](https://docs.docker.com/engine/api/v1.38/#operation/ContainerCreate) section
    * of the [Docker Remote API](https://docs.docker.com/engine/api/v1.38/) and the `--entrypoint` option to
    * [docker run](https://docs.docker.com/engine/reference/commandline/run/).
    *
    * For more information about the Docker `ENTRYPOINT` parameter, see https://docs.docker.com/engine/reference/builder/#entrypoint.
    *
    * @default none
    */
    readonly entryPoint?: string[];
    /**
    * The command that's passed to the container. If there are multiple arguments, make sure that each argument is a separated string in the array.
    *
    * This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/v1.38/#operation/ContainerCreate) section
    * of the [Docker Remote API](https://docs.docker.com/engine/api/v1.38/) and the `COMMAND` parameter to
    * [docker run](https://docs.docker.com/engine/reference/commandline/run/).
    *
    * For more information about the Docker `CMD` parameter, see https://docs.docker.com/engine/reference/builder/#cmd.
    *
    * @default none
    */
    readonly command?: string[];
}
/**
 * The base class for ApplicationLoadBalancedEc2Service and ApplicationLoadBalancedFargateService services.
 */
export declare abstract class ApplicationLoadBalancedServiceBase extends Construct {
    /**
     * The desired number of instantiations of the task definition to keep running on the service.
     * The default is 1 for all new services and uses the existing services desired count
     * when updating an existing service if one is not provided.
     */
    readonly internalDesiredCount?: number;
    /**
     * The Application Load Balancer for the service.
     */
    get loadBalancer(): ApplicationLoadBalancer;
    /**
     * The listener for the service.
     */
    readonly listener: ApplicationListener;
    /**
     * The redirect listener for the service if redirectHTTP is enabled.
     */
    readonly redirectListener?: ApplicationListener;
    /**
     * The target group for the service.
     */
    readonly targetGroup: ApplicationTargetGroup;
    /**
     * Certificate Manager certificate to associate with the load balancer.
     */
    readonly certificate?: ICertificate;
    /**
     * The cluster that hosts the service.
     */
    readonly cluster: ICluster;
    private readonly _applicationLoadBalancer?;
    /**
     * Constructs a new instance of the ApplicationLoadBalancedServiceBase class.
     */
    constructor(scope: Construct, id: string, props?: ApplicationLoadBalancedServiceBaseProps);
    /**
     * Returns the default cluster.
     */
    protected getDefaultCluster(scope: Construct, vpc?: IVpc): Cluster;
    /**
     * Adds service as a target of the target group.
     */
    protected addServiceAsTarget(service: BaseService): void;
    protected createAWSLogDriver(prefix: string): AwsLogDriver;
}