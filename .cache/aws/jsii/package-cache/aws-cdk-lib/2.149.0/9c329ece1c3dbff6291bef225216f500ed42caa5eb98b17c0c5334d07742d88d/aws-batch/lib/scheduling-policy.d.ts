import { Construct } from 'constructs';
import { Duration, IResource, Resource } from '../../core';
/**
 * Represents a Scheduling Policy. Scheduling Policies tell the Batch
 * Job Scheduler how to schedule incoming jobs.
 */
export interface ISchedulingPolicy extends IResource {
    /**
     * The name of this scheduling policy
     *
     * @attribute
     */
    readonly schedulingPolicyName: string;
    /**
     * The arn of this scheduling policy
     *
     * @attribute
     */
    readonly schedulingPolicyArn: string;
}
/**
 * Props to configure a SchedulingPolicy
 */
interface SchedulingPolicyProps {
    /**
     * The name of this SchedulingPolicy
     *
     * @default - generated by CloudFormation
     */
    readonly schedulingPolicyName?: string;
}
/**
 * @internal
 */
export declare abstract class SchedulingPolicyBase extends Resource implements ISchedulingPolicy {
    abstract readonly schedulingPolicyName: string;
    abstract readonly schedulingPolicyArn: string;
    constructor(scope: Construct, id: string, props?: SchedulingPolicyProps);
}
/**
 * Represents a group of Job Definitions. All Job Definitions that
 * declare a share identifier will be considered members of the Share
 * defined by that share identifier.
 *
 * The Scheduler divides the maximum available vCPUs of the ComputeEnvironment
 * among Jobs in the Queue based on their shareIdentifier and the weightFactor
 * associated with that shareIdentifier.
 */
export interface Share {
    /**
     * The identifier of this Share. All jobs that specify this share identifier
     * when submitted to the queue will be considered as part of this Share.
     */
    readonly shareIdentifier: string;
    /**
     * The weight factor given to this Share. The Scheduler decides which jobs to put in the Compute Environment
     * such that the following ratio is equal for each job:
     *
     * `sharevCpu / weightFactor`,
     *
     * where `sharevCpu` is the total amount of vCPU given to that particular share; that is,
     * the sum of the vCPU of each job currently in the Compute Environment for that share.
     *
     * See the readme of this module for a detailed example that shows how these are used,
     * how it relates to `computeReservation`, and how `shareDecay` affects these calculations.
     */
    readonly weightFactor: number;
}
/**
 * Represents a Fairshare Scheduling Policy. Instructs the scheduler
 * to allocate ComputeEnvironment vCPUs based on Job shareIdentifiers.
 *
 * The Faireshare Scheduling Policy ensures that each share gets a certain amount of vCPUs.
 * It does this by deciding how many Jobs of each share to schedule *relative to how many jobs of
 * each share are currently being executed by the ComputeEnvironment*. The weight factors associated with
 * each share determine the ratio of vCPUs allocated; see the readme for a more in-depth discussion of
 * fairshare policies.
 */
export interface IFairshareSchedulingPolicy extends ISchedulingPolicy {
    /**
     * Used to calculate the percentage of the maximum available vCPU to reserve for share identifiers not present in the Queue.
     *
     * The percentage reserved is defined by the Scheduler as:
     * `(computeReservation/100)^ActiveFairShares` where `ActiveFairShares` is the number of active fair share identifiers.
     *
     * For example, a computeReservation value of 50 indicates that AWS Batch reserves 50% of the
     * maximum available vCPU if there's only one fair share identifier.
     * It reserves 25% if there are two fair share identifiers.
     * It reserves 12.5% if there are three fair share identifiers.
     *
     * A computeReservation value of 25 indicates that AWS Batch should reserve 25% of the
     * maximum available vCPU if there's only one fair share identifier,
     * 6.25% if there are two fair share identifiers,
     * and 1.56% if there are three fair share identifiers.
     *
     * @default - no vCPU is reserved
     */
    readonly computeReservation?: number;
    /**
     * The amount of time to use to measure the usage of each job.
     * The usage is used to calculate a fair share percentage for each fair share identifier currently in the Queue.
     * A value of zero (0) indicates that only current usage is measured.
     * The decay is linear and gives preference to newer jobs.
     *
     * The maximum supported value is 604800 seconds (1 week).
     *
     * @default - 0: only the current job usage is considered
     */
    readonly shareDecay?: Duration;
    /**
     * The shares that this Scheduling Policy applies to.
     * *Note*: It is possible to submit Jobs to the queue with Share Identifiers that
     * are not recognized by the Scheduling Policy.
     */
    readonly shares: Share[];
}
/**
 * Fairshare SchedulingPolicy configuration
 */
export interface FairshareSchedulingPolicyProps extends SchedulingPolicyProps {
    /**
     * Used to calculate the percentage of the maximum available vCPU to reserve for share identifiers not present in the Queue.
     *
     * The percentage reserved is defined by the Scheduler as:
     * `(computeReservation/100)^ActiveFairShares` where `ActiveFairShares` is the number of active fair share identifiers.
     *
     * For example, a computeReservation value of 50 indicates that AWS Batch reserves 50% of the
     * maximum available vCPU if there's only one fair share identifier.
     * It reserves 25% if there are two fair share identifiers.
     * It reserves 12.5% if there are three fair share identifiers.
     *
     * A computeReservation value of 25 indicates that AWS Batch should reserve 25% of the
     * maximum available vCPU if there's only one fair share identifier,
     * 6.25% if there are two fair share identifiers,
     * and 1.56% if there are three fair share identifiers.
     *
     * @default - no vCPU is reserved
     */
    readonly computeReservation?: number;
    /**
     * The amount of time to use to measure the usage of each job.
     * The usage is used to calculate a fair share percentage for each fair share identifier currently in the Queue.
     * A value of zero (0) indicates that only current usage is measured.
     * The decay is linear and gives preference to newer jobs.
     *
     * The maximum supported value is 604800 seconds (1 week).
     *
     * @default - 0: only the current job usage is considered
     */
    readonly shareDecay?: Duration;
    /**
     * The shares that this Scheduling Policy applies to.
     * *Note*: It is possible to submit Jobs to the queue with Share Identifiers that
     * are not recognized by the Scheduling Policy.
     *
     * @default - no shares
     */
    readonly shares?: Share[];
}
/**
 * Represents a Fairshare Scheduling Policy. Instructs the scheduler
 * to allocate ComputeEnvironment vCPUs based on Job shareIdentifiers.
 *
 * The Faireshare Scheduling Policy ensures that each share gets a certain amount of vCPUs.
 * The scheduler does this by deciding how many Jobs of each share to schedule *relative to how many jobs of
 * each share are currently being executed by the ComputeEnvironment*. The weight factors associated with
 * each share determine the ratio of vCPUs allocated; see the readme for a more in-depth discussion of
 * fairshare policies.
 *
 * @resource AWS::Batch::SchedulingPolicy
 */
export declare class FairshareSchedulingPolicy extends SchedulingPolicyBase implements IFairshareSchedulingPolicy {
    /**
     * Reference an exisiting Scheduling Policy by its ARN
     */
    static fromFairshareSchedulingPolicyArn(scope: Construct, id: string, fairshareSchedulingPolicyArn: string): IFairshareSchedulingPolicy;
    readonly computeReservation?: number;
    readonly shareDecay?: Duration;
    readonly shares: Share[];
    readonly schedulingPolicyArn: string;
    readonly schedulingPolicyName: string;
    constructor(scope: Construct, id: string, props?: FairshareSchedulingPolicyProps);
    /**
     * Add a share this to this Fairshare SchedulingPolicy
     */
    addShare(share: Share): void;
}
export {};