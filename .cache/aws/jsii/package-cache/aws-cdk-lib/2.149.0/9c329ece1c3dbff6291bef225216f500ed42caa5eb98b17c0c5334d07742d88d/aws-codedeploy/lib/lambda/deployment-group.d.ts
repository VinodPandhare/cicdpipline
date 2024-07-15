import { Construct } from 'constructs';
import { ILambdaApplication } from './application';
import { ILambdaDeploymentConfig } from './deployment-config';
import * as cloudwatch from '../../../aws-cloudwatch';
import * as iam from '../../../aws-iam';
import * as lambda from '../../../aws-lambda';
import * as cdk from '../../../core';
import { DeploymentGroupBase } from '../private/base-deployment-group';
import { AutoRollbackConfig } from '../rollback-config';
/**
 * Interface for a Lambda deployment groups.
 */
export interface ILambdaDeploymentGroup extends cdk.IResource {
    /**
     * The reference to the CodeDeploy Lambda Application that this Deployment Group belongs to.
     */
    readonly application: ILambdaApplication;
    /**
     * The physical name of the CodeDeploy Deployment Group.
     * @attribute
     */
    readonly deploymentGroupName: string;
    /**
     * The ARN of this Deployment Group.
     * @attribute
     */
    readonly deploymentGroupArn: string;
    /**
     * The Deployment Configuration this Group uses.
     */
    readonly deploymentConfig: ILambdaDeploymentConfig;
}
/**
 * Construction properties for `LambdaDeploymentGroup`.
 */
export interface LambdaDeploymentGroupProps {
    /**
     * The reference to the CodeDeploy Lambda Application that this Deployment Group belongs to.
     *
     * @default - One will be created for you.
     */
    readonly application?: ILambdaApplication;
    /**
     * The physical, human-readable name of the CodeDeploy Deployment Group.
     *
     * @default - An auto-generated name will be used.
     */
    readonly deploymentGroupName?: string;
    /**
     * The Deployment Configuration this Deployment Group uses.
     *
     * @default LambdaDeploymentConfig.CANARY_10PERCENT_5MINUTES
     */
    readonly deploymentConfig?: ILambdaDeploymentConfig;
    /**
     * The CloudWatch alarms associated with this Deployment Group.
     * CodeDeploy will stop (and optionally roll back)
     * a deployment if during it any of the alarms trigger.
     *
     * Alarms can also be added after the Deployment Group is created using the `#addAlarm` method.
     *
     * @default []
     * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-create-alarms.html
     */
    readonly alarms?: cloudwatch.IAlarm[];
    /**
     * The service Role of this Deployment Group.
     *
     * @default - A new Role will be created.
     */
    readonly role?: iam.IRole;
    /**
     * Lambda Alias to shift traffic. Updating the version
     * of the alias will trigger a CodeDeploy deployment.
     *
     * [disable-awslint:ref-via-interface] since we need to modify the alias CFN resource update policy
     */
    readonly alias: lambda.Alias;
    /**
     * The Lambda function to run before traffic routing starts.
     *
     * @default - None.
     */
    readonly preHook?: lambda.IFunction;
    /**
     * The Lambda function to run after traffic routing starts.
     *
     * @default - None.
     */
    readonly postHook?: lambda.IFunction;
    /**
     * Whether to continue a deployment even if fetching the alarm status from CloudWatch failed.
     *
     * @default false
     */
    readonly ignorePollAlarmsFailure?: boolean;
    /**
     * The auto-rollback configuration for this Deployment Group.
     *
     * @default - default AutoRollbackConfig.
     */
    readonly autoRollback?: AutoRollbackConfig;
    /**
     * Whether to skip the step of checking CloudWatch alarms during the deployment process
     *
     * @default - false
     */
    readonly ignoreAlarmConfiguration?: boolean;
}
/**
 * @resource AWS::CodeDeploy::DeploymentGroup
 */
export declare class LambdaDeploymentGroup extends DeploymentGroupBase implements ILambdaDeploymentGroup {
    /**
     * Import an Lambda Deployment Group defined either outside the CDK app, or in a different AWS region.
     *
     * Account and region for the DeploymentGroup are taken from the application.
     *
     * @param scope the parent Construct for this new Construct
     * @param id the logical ID of this new Construct
     * @param attrs the properties of the referenced Deployment Group
     * @returns a Construct representing a reference to an existing Deployment Group
     */
    static fromLambdaDeploymentGroupAttributes(scope: Construct, id: string, attrs: LambdaDeploymentGroupAttributes): ILambdaDeploymentGroup;
    readonly application: ILambdaApplication;
    readonly deploymentConfig: ILambdaDeploymentConfig;
    /**
     * The service Role of this Deployment Group.
     */
    readonly role: iam.IRole;
    private readonly alarms;
    private preHook?;
    private postHook?;
    constructor(scope: Construct, id: string, props: LambdaDeploymentGroupProps);
    /**
     * Associates an additional alarm with this Deployment Group.
     *
     * @param alarm the alarm to associate with this Deployment Group
     */
    addAlarm(alarm: cloudwatch.IAlarm): void;
    /**
     * Associate a function to run before deployment begins.
     * @param preHook function to run before deployment beings
     * @throws an error if a pre-hook function is already configured
     */
    addPreHook(preHook: lambda.IFunction): void;
    /**
     * Associate a function to run after deployment completes.
     * @param postHook function to run after deployment completes
     * @throws an error if a post-hook function is already configured
     */
    addPostHook(postHook: lambda.IFunction): void;
    /**
     * Grant a principal permission to codedeploy:PutLifecycleEventHookExecutionStatus
     * on this deployment group resource.
     * @param grantee to grant permission to
     */
    grantPutLifecycleEventHookExecutionStatus(grantee: iam.IGrantable): iam.Grant;
}
/**
 * Properties of a reference to a CodeDeploy Lambda Deployment Group.
 *
 * @see LambdaDeploymentGroup#fromLambdaDeploymentGroupAttributes
 */
export interface LambdaDeploymentGroupAttributes {
    /**
     * The reference to the CodeDeploy Lambda Application
     * that this Deployment Group belongs to.
     */
    readonly application: ILambdaApplication;
    /**
     * The physical, human-readable name of the CodeDeploy Lambda Deployment Group
     * that we are referencing.
     */
    readonly deploymentGroupName: string;
    /**
     * The Deployment Configuration this Deployment Group uses.
     *
     * @default LambdaDeploymentConfig.CANARY_10PERCENT_5MINUTES
     */
    readonly deploymentConfig?: ILambdaDeploymentConfig;
}