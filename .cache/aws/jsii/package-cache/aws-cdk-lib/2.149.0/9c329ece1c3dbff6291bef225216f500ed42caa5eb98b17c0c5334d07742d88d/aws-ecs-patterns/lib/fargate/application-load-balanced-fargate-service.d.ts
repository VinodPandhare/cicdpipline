import { Construct } from 'constructs';
import { ISecurityGroup, SubnetSelection } from '../../../aws-ec2';
import { FargateService, FargateTaskDefinition, HealthCheck } from '../../../aws-ecs';
import { ApplicationLoadBalancedServiceBase, ApplicationLoadBalancedServiceBaseProps } from '../base/application-load-balanced-service-base';
import { FargateServiceBaseProps } from '../base/fargate-service-base';
/**
 * The properties for the ApplicationLoadBalancedFargateService service.
 */
export interface ApplicationLoadBalancedFargateServiceProps extends ApplicationLoadBalancedServiceBaseProps, FargateServiceBaseProps {
    /**
     * Determines whether the service will be assigned a public IP address.
     *
     * @default false
     */
    readonly assignPublicIp?: boolean;
    /**
     * The subnets to associate with the service.
     *
     * @default - Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.
     */
    readonly taskSubnets?: SubnetSelection;
    /**
     * The security groups to associate with the service. If you do not specify a security group, a new security group is created.
     *
     * @default - A new security group is created.
     */
    readonly securityGroups?: ISecurityGroup[];
    /**
     * The health check command and associated configuration parameters for the container.
     *
     * @default - Health check configuration from container.
     */
    readonly healthCheck?: HealthCheck;
}
/**
 * A Fargate service running on an ECS cluster fronted by an application load balancer.
 */
export declare class ApplicationLoadBalancedFargateService extends ApplicationLoadBalancedServiceBase {
    /**
     * Determines whether the service will be assigned a public IP address.
     */
    readonly assignPublicIp: boolean;
    /**
     * The Fargate service in this construct.
     */
    readonly service: FargateService;
    /**
     * The Fargate task definition in this construct.
     */
    readonly taskDefinition: FargateTaskDefinition;
    /**
     * Constructs a new instance of the ApplicationLoadBalancedFargateService class.
     */
    constructor(scope: Construct, id: string, props?: ApplicationLoadBalancedFargateServiceProps);
    /**
     * Throws an error if the specified percent is not an integer or negative.
     */
    private validateHealthyPercentage;
}