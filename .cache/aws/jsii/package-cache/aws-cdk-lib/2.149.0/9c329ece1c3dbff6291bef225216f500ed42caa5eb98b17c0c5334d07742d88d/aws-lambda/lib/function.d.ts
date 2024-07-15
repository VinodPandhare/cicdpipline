import { Construct, IConstruct } from 'constructs';
import { AdotInstrumentationConfig } from './adot-layers';
import { AliasOptions, Alias } from './alias';
import { Architecture } from './architecture';
import { Code, CodeConfig } from './code';
import { ICodeSigningConfig } from './code-signing-config';
import { EventInvokeConfigOptions } from './event-invoke-config';
import { IEventSource } from './event-source';
import { FileSystem } from './filesystem';
import { FunctionAttributes, FunctionBase, IFunction } from './function-base';
import { LambdaInsightsVersion } from './lambda-insights';
import { Version, VersionOptions } from './lambda-version';
import { ILayerVersion } from './layers';
import { LogRetentionRetryOptions } from './log-retention';
import { ParamsAndSecretsLayerVersion } from './params-and-secrets-layers';
import { Runtime } from './runtime';
import { RuntimeManagementMode } from './runtime-management';
import { SnapStartConf } from './snapstart-config';
import * as cloudwatch from '../../aws-cloudwatch';
import { IProfilingGroup } from '../../aws-codeguruprofiler';
import * as ec2 from '../../aws-ec2';
import * as iam from '../../aws-iam';
import * as kms from '../../aws-kms';
import * as logs from '../../aws-logs';
import * as sns from '../../aws-sns';
import * as sqs from '../../aws-sqs';
import { Duration, IAspect, Size } from '../../core';
/**
 * X-Ray Tracing Modes (https://docs.aws.amazon.com/lambda/latest/dg/API_TracingConfig.html)
 */
export declare enum Tracing {
    /**
     * Lambda will respect any tracing header it receives from an upstream service.
     * If no tracing header is received, Lambda will sample the request based on a fixed rate. Please see the [Using AWS Lambda with AWS X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) documentation for details on this sampling behavior.
     */
    ACTIVE = "Active",
    /**
     * Lambda will only trace the request from an upstream service
     * if it contains a tracing header with "sampled=1"
     */
    PASS_THROUGH = "PassThrough",
    /**
     * Lambda will not trace any request.
     */
    DISABLED = "Disabled"
}
/**
 * Lambda service will automatically captures system logs about function invocation
 * generated by the Lambda service (known as system logs) and sends these logs to a
 * default CloudWatch log group named after the Lambda function.
 */
export declare enum SystemLogLevel {
    /**
     * Lambda will capture only logs at info level.
     */
    INFO = "INFO",
    /**
     * Lambda will capture only logs at debug level.
     */
    DEBUG = "DEBUG",
    /**
     * Lambda will capture only logs at warn level.
     */
    WARN = "WARN"
}
/**
 * Lambda service automatically captures logs generated by the function code
 * (known as application logs) and sends these logs to a default CloudWatch
 * log group named after the Lambda function.
 */
export declare enum ApplicationLogLevel {
    /**
     * Lambda will capture only logs at info level.
     */
    INFO = "INFO",
    /**
     * Lambda will capture only logs at debug level.
     */
    DEBUG = "DEBUG",
    /**
     * Lambda will capture only logs at warn level.
     */
    WARN = "WARN",
    /**
     * Lambda will capture only logs at trace level.
     */
    TRACE = "TRACE",
    /**
     * Lambda will capture only logs at error level.
     */
    ERROR = "ERROR",
    /**
     * Lambda will capture only logs at fatal level.
     */
    FATAL = "FATAL"
}
/**
 * This field takes in 2 values either Text or JSON. By setting this value to Text,
 * will result in the current structure of logs format, whereas, by setting this value to JSON,
 * Lambda will print the logs as Structured JSON Logs, with the corresponding timestamp and log level
 * of each event. Selecting ‘JSON’ format will only allow customer’s to have different log level
 * Application log level and the System log level.
 */
export declare enum LogFormat {
    /**
     * Lambda Logs text format.
     */
    TEXT = "Text",
    /**
     * Lambda structured logging in Json format.
     */
    JSON = "JSON"
}
/**
 * This field takes in 2 values either Text or JSON. By setting this value to Text,
 * will result in the current structure of logs format, whereas, by setting this value to JSON,
 * Lambda will print the logs as Structured JSON Logs, with the corresponding timestamp and log level
 * of each event. Selecting ‘JSON’ format will only allow customer’s to have different log level
 * Application log level and the System log level.
 */
export declare enum LoggingFormat {
    /**
     * Lambda Logs text format.
     */
    TEXT = "Text",
    /**
     * Lambda structured logging in Json format.
     */
    JSON = "JSON"
}
/**
 * Non runtime options
 */
export interface FunctionOptions extends EventInvokeConfigOptions {
    /**
     * A description of the function.
     *
     * @default - No description.
     */
    readonly description?: string;
    /**
     * The function execution time (in seconds) after which Lambda terminates
     * the function. Because the execution time affects cost, set this value
     * based on the function's expected execution time.
     *
     * @default Duration.seconds(3)
     */
    readonly timeout?: Duration;
    /**
     * Key-value pairs that Lambda caches and makes available for your Lambda
     * functions. Use environment variables to apply configuration changes, such
     * as test and production environment configurations, without changing your
     * Lambda function source code.
     *
     * @default - No environment variables.
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * A name for the function.
     *
     * @default - AWS CloudFormation generates a unique physical ID and uses that
     * ID for the function's name. For more information, see Name Type.
     */
    readonly functionName?: string;
    /**
     * The amount of memory, in MB, that is allocated to your Lambda function.
     * Lambda uses this value to proportionally allocate the amount of CPU
     * power. For more information, see Resource Model in the AWS Lambda
     * Developer Guide.
     *
     * @default 128
     */
    readonly memorySize?: number;
    /**
     * The size of the function’s /tmp directory in MiB.
     *
     * @default 512 MiB
     */
    readonly ephemeralStorageSize?: Size;
    /**
     * Initial policy statements to add to the created Lambda Role.
     *
     * You can call `addToRolePolicy` to the created lambda to add statements post creation.
     *
     * @default - No policy statements are added to the created Lambda role.
     */
    readonly initialPolicy?: iam.PolicyStatement[];
    /**
     * Lambda execution role.
     *
     * This is the role that will be assumed by the function upon execution.
     * It controls the permissions that the function will have. The Role must
     * be assumable by the 'lambda.amazonaws.com' service principal.
     *
     * The default Role automatically has permissions granted for Lambda execution. If you
     * provide a Role, you must add the relevant AWS managed policies yourself.
     *
     * The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
     * "service-role/AWSLambdaVPCAccessExecutionRole".
     *
     * @default - A unique role will be generated for this lambda function.
     * Both supplied and generated roles can always be changed by calling `addToRolePolicy`.
     */
    readonly role?: iam.IRole;
    /**
     * VPC network to place Lambda network interfaces
     *
     * Specify this if the Lambda function needs to access resources in a VPC.
     * This is required when `vpcSubnets` is specified.
     *
     * @default - Function is not placed within a VPC.
     */
    readonly vpc?: ec2.IVpc;
    /**
     * Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
     *
     * Only used if 'vpc' is supplied.
     *
     * @default false
     */
    readonly ipv6AllowedForDualStack?: boolean;
    /**
     * Where to place the network interfaces within the VPC.
     *
     * This requires `vpc` to be specified in order for interfaces to actually be
     * placed in the subnets. If `vpc` is not specify, this will raise an error.
     *
     * Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
     * public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).
     *
     * @default - the Vpc default strategy if not specified
     */
    readonly vpcSubnets?: ec2.SubnetSelection;
    /**
     * The list of security groups to associate with the Lambda's network interfaces.
     *
     * Only used if 'vpc' is supplied.
     *
     * @default - If the function is placed within a VPC and a security group is
     * not specified, either by this or securityGroup prop, a dedicated security
     * group will be created for this function.
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * Whether to allow the Lambda to send all network traffic
     *
     * If set to false, you must individually add traffic rules to allow the
     * Lambda to connect to network targets.
     *
     * Do not specify this property if the `securityGroups` or `securityGroup` property is set.
     * Instead, configure `allowAllOutbound` directly on the security group.
     *
     * @default true
     */
    readonly allowAllOutbound?: boolean;
    /**
     * Enabled DLQ. If `deadLetterQueue` is undefined,
     * an SQS queue with default options will be defined for your Function.
     *
     * @default - false unless `deadLetterQueue` is set, which implies DLQ is enabled.
     */
    readonly deadLetterQueueEnabled?: boolean;
    /**
     * The SQS queue to use if DLQ is enabled.
     * If SNS topic is desired, specify `deadLetterTopic` property instead.
     *
     * @default - SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`
     */
    readonly deadLetterQueue?: sqs.IQueue;
    /**
     * The SNS topic to use as a DLQ.
     * Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
     * rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.
     *
     * @default - no SNS topic
     */
    readonly deadLetterTopic?: sns.ITopic;
    /**
     * Enable AWS X-Ray Tracing for Lambda Function.
     *
     * @default Tracing.Disabled
     */
    readonly tracing?: Tracing;
    /**
    * Enable SnapStart for Lambda Function.
    * SnapStart is currently supported only for Java 11, 17 runtime
    *
    * @default - No snapstart
    */
    readonly snapStart?: SnapStartConf;
    /**
     * Enable profiling.
     * @see https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html
     *
     * @default - No profiling.
     */
    readonly profiling?: boolean;
    /**
     * Profiling Group.
     * @see https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html
     *
     * @default - A new profiling group will be created if `profiling` is set.
     */
    readonly profilingGroup?: IProfilingGroup;
    /**
     * Specify the version of CloudWatch Lambda insights to use for monitoring
     * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights.html
     *
     * When used with `DockerImageFunction` or `DockerImageCode`, the Docker image should have
     * the Lambda insights agent installed.
     * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html
     *
     * @default - No Lambda Insights
     */
    readonly insightsVersion?: LambdaInsightsVersion;
    /**
     * Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation
     * @see https://aws-otel.github.io/docs/getting-started/lambda
     *
     * @default - No ADOT instrumentation
     */
    readonly adotInstrumentation?: AdotInstrumentationConfig;
    /**
     * Specify the configuration of Parameters and Secrets Extension
     * @see https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_lambda.html
     * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html
     *
     * @default - No Parameters and Secrets Extension
     */
    readonly paramsAndSecrets?: ParamsAndSecretsLayerVersion;
    /**
     * A list of layers to add to the function's execution environment. You can configure your Lambda function to pull in
     * additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
     * that can be used by multiple functions.
     *
     * @default - No layers.
     */
    readonly layers?: ILayerVersion[];
    /**
     * The maximum of concurrent executions you want to reserve for the function.
     *
     * @default - No specific limit - account limit.
     * @see https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html
     */
    readonly reservedConcurrentExecutions?: number;
    /**
     * Event sources for this function.
     *
     * You can also add event sources using `addEventSource`.
     *
     * @default - No event sources.
     */
    readonly events?: IEventSource[];
    /**
     * The number of days log events are kept in CloudWatch Logs. When updating
     * this property, unsetting it doesn't remove the log retention policy. To
     * remove the retention policy, set the value to `INFINITE`.
     *
     * This is a legacy API and we strongly recommend you move away from it if you can.
     * Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
     * to instruct the Lambda function to send logs to it.
     * Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
     * Users and code and referencing the name verbatim will have to adjust.
     *
     * In AWS CDK code, you can access the log group name directly from the LogGroup construct:
     * ```ts
     * import * as logs from 'aws-cdk-lib/aws-logs';
     *
     * declare const myLogGroup: logs.LogGroup;
     * myLogGroup.logGroupName;
     * ```
     *
     * @default logs.RetentionDays.INFINITE
     */
    readonly logRetention?: logs.RetentionDays;
    /**
     * The IAM role for the Lambda function associated with the custom resource
     * that sets the retention policy.
     *
     * This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
     * `logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.
     *
     * @default - A new role is created.
     */
    readonly logRetentionRole?: iam.IRole;
    /**
     * When log retention is specified, a custom resource attempts to create the CloudWatch log group.
     * These options control the retry policy when interacting with CloudWatch APIs.
     *
     * This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
     * `logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.
     *
     * @default - Default AWS SDK retry options.
     */
    readonly logRetentionRetryOptions?: LogRetentionRetryOptions;
    /**
     * Options for the `lambda.Version` resource automatically created by the
     * `fn.currentVersion` method.
     * @default - default options as described in `VersionOptions`
     */
    readonly currentVersionOptions?: VersionOptions;
    /**
     * The filesystem configuration for the lambda function
     *
     * @default - will not mount any filesystem
     */
    readonly filesystem?: FileSystem;
    /**
     * Lambda Functions in a public subnet can NOT access the internet.
     * Use this property to acknowledge this limitation and still place the function in a public subnet.
     * @see https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841
     *
     * @default false
     */
    readonly allowPublicSubnet?: boolean;
    /**
     * The AWS KMS key that's used to encrypt your function's environment variables.
     *
     * @default - AWS Lambda creates and uses an AWS managed customer master key (CMK).
     */
    readonly environmentEncryption?: kms.IKey;
    /**
     * Code signing config associated with this function
     *
     * @default - Not Sign the Code
     */
    readonly codeSigningConfig?: ICodeSigningConfig;
    /**
     * The system architectures compatible with this lambda function.
     * @default Architecture.X86_64
     */
    readonly architecture?: Architecture;
    /**
     * Sets the runtime management configuration for a function's version.
     * @default Auto
     */
    readonly runtimeManagementMode?: RuntimeManagementMode;
    /**
     * The log group the function sends logs to.
     *
     * By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
     * However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.
     *
     * Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.
     *
     * Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
     * If you are deploying to another type of region, please check regional availability first.
     *
     * @default `/aws/lambda/${this.functionName}` - default log group created by Lambda
     */
    readonly logGroup?: logs.ILogGroup;
    /**
     * Sets the logFormat for the function.
     * @deprecated Use `loggingFormat` as a property instead.
     * @default "Text"
     */
    readonly logFormat?: string;
    /**
     * Sets the loggingFormat for the function.
     * @default LoggingFormat.TEXT
     */
    readonly loggingFormat?: LoggingFormat;
    /**
     * Sets the application log level for the function.
     * @deprecated Use `applicationLogLevelV2` as a property instead.
     * @default "INFO"
     */
    readonly applicationLogLevel?: string;
    /**
     * Sets the application log level for the function.
     * @default ApplicationLogLevel.INFO
     */
    readonly applicationLogLevelV2?: ApplicationLogLevel;
    /**
     * Sets the system log level for the function.
     * @deprecated Use `systemLogLevelV2` as a property instead.
     * @default "INFO"
     */
    readonly systemLogLevel?: string;
    /**
     * Sets the system log level for the function.
     * @default SystemLogLevel.INFO
     */
    readonly systemLogLevelV2?: SystemLogLevel;
}
export interface FunctionProps extends FunctionOptions {
    /**
     * The runtime environment for the Lambda function that you are uploading.
     * For valid values, see the Runtime property in the AWS Lambda Developer
     * Guide.
     *
     * Use `Runtime.FROM_IMAGE` when defining a function from a Docker image.
     */
    readonly runtime: Runtime;
    /**
     * The source code of your Lambda function. You can point to a file in an
     * Amazon Simple Storage Service (Amazon S3) bucket or specify your source
     * code as inline text.
     */
    readonly code: Code;
    /**
     * The name of the method within your code that Lambda calls to execute
     * your function. The format includes the file name. It can also include
     * namespaces and other qualifiers, depending on the runtime.
     * For more information, see https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html.
     *
     * Use `Handler.FROM_IMAGE` when defining a function from a Docker image.
     *
     * NOTE: If you specify your source code as inline text by specifying the
     * ZipFile property within the Code property, specify index.function_name as
     * the handler.
     */
    readonly handler: string;
}
/**
 * Deploys a file from inside the construct library as a function.
 *
 * The supplied file is subject to the 4096 bytes limit of being embedded in a
 * CloudFormation template.
 *
 * The construct includes an associated role with the lambda.
 *
 * This construct does not yet reproduce all features from the underlying resource
 * library.
 */
export declare class Function extends FunctionBase {
    /**
     * Returns a `lambda.Version` which represents the current version of this
     * Lambda function. A new version will be created every time the function's
     * configuration changes.
     *
     * You can specify options for this version using the `currentVersionOptions`
     * prop when initializing the `lambda.Function`.
     */
    get currentVersion(): Version;
    get resourceArnsForGrantInvoke(): string[];
    /** @internal */
    static _VER_PROPS: {
        [key: string]: boolean;
    };
    /**
     * Record whether specific properties in the `AWS::Lambda::Function` resource should
     * also be associated to the Version resource.
     * See 'currentVersion' section in the module README for more details.
     * @param propertyName The property to classify
     * @param locked whether the property should be associated to the version or not.
     */
    static classifyVersionProperty(propertyName: string, locked: boolean): void;
    /**
     * Import a lambda function into the CDK using its name
     */
    static fromFunctionName(scope: Construct, id: string, functionName: string): IFunction;
    /**
     * Import a lambda function into the CDK using its ARN.
     *
     * For `Function.addPermissions()` to work on this imported lambda, make sure that is
     * in the same account and region as the stack you are importing it into.
     */
    static fromFunctionArn(scope: Construct, id: string, functionArn: string): IFunction;
    /**
     * Creates a Lambda function object which represents a function not defined
     * within this stack.
     *
     * For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
     * if this imported lambda is in the same account and region as the stack you are importing it into.
     *
     * @param scope The parent construct
     * @param id The name of the lambda construct
     * @param attrs the attributes of the function to import
     */
    static fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes): IFunction;
    /**
     * Return the given named metric for this Lambda
     */
    static metricAll(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the number of Errors executing all Lambdas
     *
     * @default sum over 5 minutes
     */
    static metricAllErrors(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the Duration executing all Lambdas
     *
     * @default average over 5 minutes
     */
    static metricAllDuration(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the number of invocations of all Lambdas
     *
     * @default sum over 5 minutes
     */
    static metricAllInvocations(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the number of throttled invocations of all Lambdas
     *
     * @default sum over 5 minutes
     */
    static metricAllThrottles(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the number of concurrent executions across all Lambdas
     *
     * @default max over 5 minutes
     */
    static metricAllConcurrentExecutions(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Metric for the number of unreserved concurrent executions across all Lambdas
     *
     * @default max over 5 minutes
     */
    static metricAllUnreservedConcurrentExecutions(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * Name of this function
     */
    readonly functionName: string;
    /**
     * ARN of this function
     */
    readonly functionArn: string;
    /**
     * Execution role associated with this function
     */
    readonly role?: iam.IRole;
    /**
     * The runtime configured for this lambda.
     */
    readonly runtime: Runtime;
    /**
     * The principal this Lambda Function is running as
     */
    readonly grantPrincipal: iam.IPrincipal;
    /**
     * The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).
     */
    readonly deadLetterQueue?: sqs.IQueue;
    /**
     * The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).
     */
    readonly deadLetterTopic?: sns.ITopic;
    /**
     * The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).
     */
    readonly architecture: Architecture;
    /**
     * The timeout configured for this lambda.
     */
    readonly timeout?: Duration;
    readonly permissionsNode: import("constructs").Node;
    protected readonly canCreatePermissions = true;
    /** @internal */
    readonly _layers: ILayerVersion[];
    private _logGroup?;
    /**
     * Environment variables for this function
     */
    private environment;
    private readonly currentVersionOptions?;
    private _currentVersion?;
    private _architecture?;
    private hashMixins;
    constructor(scope: Construct, id: string, props: FunctionProps);
    /**
     * Adds an environment variable to this Lambda function.
     * If this is a ref to a Lambda function, this operation results in a no-op.
     * @param key The environment variable key.
     * @param value The environment variable's value.
     * @param options Environment variable options.
     */
    addEnvironment(key: string, value: string, options?: EnvironmentOptions): this;
    /**
     * Get Logging Config propety for the function.
     * This method returns the function LoggingConfig Property if the property is set on the
     * function and undefined if not.
     */
    private getLoggingConfig;
    /**
     * Mix additional information into the hash of the Version object
     *
     * The Lambda Function construct does its best to automatically create a new
     * Version when anything about the Function changes (its code, its layers,
     * any of the other properties).
     *
     * However, you can sometimes source information from places that the CDK cannot
     * look into, like the deploy-time values of SSM parameters. In those cases,
     * the CDK would not force the creation of a new Version object when it actually
     * should.
     *
     * This method can be used to invalidate the current Version object. Pass in
     * any string into this method, and make sure the string changes when you know
     * a new Version needs to be created.
     *
     * This method may be called more than once.
     */
    invalidateVersionBasedOn(x: string): void;
    /**
     * Adds one or more Lambda Layers to this Lambda function.
     *
     * @param layers the layers to be added.
     *
     * @throws if there are already 5 layers on this function, or the layer is incompatible with this function's runtime.
     */
    addLayers(...layers: ILayerVersion[]): void;
    /**
     * Defines an alias for this function.
     *
     * The alias will automatically be updated to point to the latest version of
     * the function as it is being updated during a deployment.
     *
     * ```ts
     * declare const fn: lambda.Function;
     *
     * fn.addAlias('Live');
     *
     * // Is equivalent to
     *
     * new lambda.Alias(this, 'AliasLive', {
     *   aliasName: 'Live',
     *   version: fn.currentVersion,
     * });
     * ```
     *
     * @param aliasName The name of the alias
     * @param options Alias options
     */
    addAlias(aliasName: string, options?: AliasOptions): Alias;
    /**
     * The LogGroup where the Lambda function's logs are made available.
     *
     * If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
     * pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
     * period (never expire, by default).
     *
     * Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
     * to never expire even if it was configured with a different value.
     */
    get logGroup(): logs.ILogGroup;
    /** @internal */
    _checkEdgeCompatibility(): void;
    /**
     * Configured lambda insights on the function if specified. This is acheived by adding an imported layer which is added to the
     * list of lambda layers on synthesis.
     *
     * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-extension-versions.html
     */
    private configureLambdaInsights;
    /**
     * Add an AWS Distro for OpenTelemetry Lambda layer.
     *
     * @param props properties for the ADOT instrumentation
     */
    private configureAdotInstrumentation;
    /**
     * Add a Parameters and Secrets Extension Lambda layer.
     */
    private configureParamsAndSecretsExtension;
    private renderLayers;
    private renderEnvironment;
    /**
     * If configured, set up the VPC-related properties
     *
     * Returns the VpcConfig that should be added to the
     * Lambda creation properties.
     */
    private configureVpc;
    private configureSnapStart;
    private isQueue;
    private buildDeadLetterQueue;
    private buildDeadLetterConfig;
    private buildTracingConfig;
    private validateProfiling;
}
/**
 * Environment variables options
 */
export interface EnvironmentOptions {
    /**
     * When used in Lambda@Edge via edgeArn() API, these environment
     * variables will be removed. If not set, an error will be thrown.
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-requirements-limits.html#lambda-requirements-lambda-function-configuration
     *
     * @default false - using the function in Lambda@Edge will throw
     */
    readonly removeInEdge?: boolean;
}
export declare function verifyCodeConfig(code: CodeConfig, props: FunctionProps): void;
/**
 * Aspect for upgrading function versions when the provided feature flag
 * is enabled. This can be necessary when the feature flag
 * changes the function hash, as such changes must be associated with a new
 * version. This aspect will change the function description in these cases,
 * which "validates" the new function hash.
 */
export declare class FunctionVersionUpgrade implements IAspect {
    private readonly featureFlag;
    private readonly enabled;
    constructor(featureFlag: string, enabled?: boolean);
    visit(node: IConstruct): void;
}
