import * as elbv2 from '../../aws-elasticloadbalancingv2';
/**
 * A single Application Load Balancer as the target for load balancing.
 */
export declare class AlbArnTarget implements elbv2.INetworkLoadBalancerTarget {
    private readonly albArn;
    private readonly port;
    /**
     * Create a new alb target
     *
     * @param albArn The ARN of the application load balancer to load balance to
     * @param port The port on which the target is listening
     */
    constructor(albArn: string, port: number);
    /**
     * Register this alb target with a load balancer
     *
     * Don't call this, it is called automatically when you add the target to a
     * load balancer.
     */
    attachToNetworkTargetGroup(targetGroup: elbv2.INetworkTargetGroup): elbv2.LoadBalancerTargetProps;
    private attach;
}
/**
 * A single Application Load Balancer as the target for load balancing.
 */
export declare class AlbTarget extends AlbArnTarget {
    /**
     * @param alb The application load balancer to load balance to
     * @param port The port on which the target is listening
     */
    constructor(alb: elbv2.IApplicationLoadBalancer, port: number);
}