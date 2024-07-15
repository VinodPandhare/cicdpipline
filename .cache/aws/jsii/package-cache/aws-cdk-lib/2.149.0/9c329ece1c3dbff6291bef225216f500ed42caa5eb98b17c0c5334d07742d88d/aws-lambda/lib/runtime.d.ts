import { Construct } from 'constructs';
import { DockerImage } from '../../core';
export interface LambdaRuntimeProps {
    /**
     * Whether the ``ZipFile`` (aka inline code) property can be used with this runtime.
     * @default false
     */
    readonly supportsInlineCode?: boolean;
    /**
     * Whether the runtime enum is meant to change over time, IE NODEJS_LATEST.
     * @default false
     */
    readonly isVariable?: boolean;
    /**
     * The Docker image name to be used for bundling in this runtime.
     * @default - the latest docker image "amazon/public.ecr.aws/sam/build-<runtime>" from https://gallery.ecr.aws
     */
    readonly bundlingDockerImage?: string;
    /**
     * Whether this runtime is integrated with and supported for profiling using Amazon CodeGuru Profiler.
     * @default false
     */
    readonly supportsCodeGuruProfiling?: boolean;
    /**
     * Whether this runtime supports SnapStart.
     * @default false
     */
    readonly supportsSnapStart?: boolean;
}
export declare enum RuntimeFamily {
    NODEJS = 0,
    JAVA = 1,
    PYTHON = 2,
    DOTNET_CORE = 3,
    GO = 4,
    RUBY = 5,
    OTHER = 6
}
/**
 * Lambda function runtime environment.
 *
 * If you need to use a runtime name that doesn't exist as a static member, you
 * can instantiate a `Runtime` object, e.g: `new Runtime('nodejs99.99')`.
 */
export declare class Runtime {
    /** A list of all known `Runtime`'s. */
    static readonly ALL: Runtime[];
    /**
     * The NodeJS runtime (nodejs)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
     */
    static readonly NODEJS: Runtime;
    /**
     * The NodeJS 4.3 runtime (nodejs4.3)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
     */
    static readonly NODEJS_4_3: Runtime;
    /**
     * The NodeJS 6.10 runtime (nodejs6.10)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
     */
    static readonly NODEJS_6_10: Runtime;
    /**
     * The NodeJS 8.10 runtime (nodejs8.10)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
     */
    static readonly NODEJS_8_10: Runtime;
    /**
     * The NodeJS 10.x runtime (nodejs10.x)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
     */
    static readonly NODEJS_10_X: Runtime;
    /**
     * The NodeJS 12.x runtime (nodejs12.x)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
     */
    static readonly NODEJS_12_X: Runtime;
    /**
     * The NodeJS 14.x runtime (nodejs14.x)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
     */
    static readonly NODEJS_14_X: Runtime;
    /**
     * The NodeJS 16.x runtime (nodejs16.x)
     */
    static readonly NODEJS_16_X: Runtime;
    /**
     * The NodeJS 18.x runtime (nodejs18.x)
     */
    static readonly NODEJS_18_X: Runtime;
    /**
     * The NodeJS 20.x runtime (nodejs20.x)
     */
    static readonly NODEJS_20_X: Runtime;
    /**
     * The latest NodeJS version currently available in ALL regions (not necessarily the latest NodeJS version
     * available in YOUR region).
     */
    static readonly NODEJS_LATEST: Runtime;
    /**
     * The Python 2.7 runtime (python2.7)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Python runtime.
     */
    static readonly PYTHON_2_7: Runtime;
    /**
     * The Python 3.6 runtime (python3.6) (not recommended)
     *
     * The Python 3.6 runtime is deprecated as of July 2022.
     *
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Python runtime.
     */
    static readonly PYTHON_3_6: Runtime;
    /**
     * The Python 3.7 runtime (python3.7)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Python runtime.
     */
    static readonly PYTHON_3_7: Runtime;
    /**
     * The Python 3.8 runtime (python3.8)
     */
    static readonly PYTHON_3_8: Runtime;
    /**
     * The Python 3.9 runtime (python3.9)
     */
    static readonly PYTHON_3_9: Runtime;
    /**
     * The Python 3.10 runtime (python3.10)
     */
    static readonly PYTHON_3_10: Runtime;
    /**
     * The Python 3.11 runtime (python3.11)
     */
    static readonly PYTHON_3_11: Runtime;
    /**
     * The Python 3.12 runtime (python3.12)
     */
    static readonly PYTHON_3_12: Runtime;
    /**
     * The Java 8 runtime (java8)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Java runtime.
     */
    static readonly JAVA_8: Runtime;
    /**
     * The Java 8 Corretto runtime (java8.al2)
     */
    static readonly JAVA_8_CORRETTO: Runtime;
    /**
     * The Java 11 runtime (java11)
     */
    static readonly JAVA_11: Runtime;
    /**
     * The Java 17 runtime (java17)
     */
    static readonly JAVA_17: Runtime;
    /**
     * The Java 21 runtime (java21)
     */
    static readonly JAVA_21: Runtime;
    /**
     * The .NET 6 runtime (dotnet6)
     */
    static readonly DOTNET_6: Runtime;
    /**
     * The .NET 8 runtime (dotnet8)
     */
    static readonly DOTNET_8: Runtime;
    /**
     * The .NET Core 1.0 runtime (dotnetcore1.0)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
     */
    static readonly DOTNET_CORE_1: Runtime;
    /**
     * The .NET Core 2.0 runtime (dotnetcore2.0)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
     */
    static readonly DOTNET_CORE_2: Runtime;
    /**
     * The .NET Core 2.1 runtime (dotnetcore2.1)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
     */
    static readonly DOTNET_CORE_2_1: Runtime;
    /**
     * The .NET Core 3.1 runtime (dotnetcore3.1)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
     */
    static readonly DOTNET_CORE_3_1: Runtime;
    /**
     * The Go 1.x runtime (go1.x)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the PROVIDED_AL2023 runtime.
     */
    static readonly GO_1_X: Runtime;
    /**
     * The Ruby 2.5 runtime (ruby2.5)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Ruby runtime.
     */
    static readonly RUBY_2_5: Runtime;
    /**
     * The Ruby 2.7 runtime (ruby2.7)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Ruby runtime.
     */
    static readonly RUBY_2_7: Runtime;
    /**
     * The Ruby 3.2 runtime (ruby3.2)
     */
    static readonly RUBY_3_2: Runtime;
    /**
    * The Ruby 3.3 runtime (ruby3.3)
    */
    static readonly RUBY_3_3: Runtime;
    /**
     * The custom provided runtime (provided)
     * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest provided.al2023 runtime.
     */
    static readonly PROVIDED: Runtime;
    /**
     * The custom provided runtime with Amazon Linux 2 (provided.al2)
     */
    static readonly PROVIDED_AL2: Runtime;
    /**
     * The custom provided runtime with Amazon Linux 2023 (provided.al2023)
     */
    static readonly PROVIDED_AL2023: Runtime;
    /**
     * A special runtime entry to be used when function is using a docker image.
     */
    static readonly FROM_IMAGE: Runtime;
    /**
     * The name of this runtime, as expected by the Lambda resource.
     */
    readonly name: string;
    /**
     * Whether the ``ZipFile`` (aka inline code) property can be used with this
     * runtime.
     */
    readonly supportsInlineCode: boolean;
    /**
     * Whether this runtime is integrated with and supported for profiling using Amazon CodeGuru Profiler.
     */
    readonly supportsCodeGuruProfiling: boolean;
    /**
     * Whether this runtime supports snapstart.
     */
    readonly supportsSnapStart: boolean;
    /**
     * The runtime family.
     */
    readonly family?: RuntimeFamily;
    /**
     * The bundling Docker image for this runtime.
     */
    readonly bundlingImage: DockerImage;
    /**
     * Enabled for runtime enums that always target the latest available.
     */
    readonly isVariable: boolean;
    constructor(name: string, family?: RuntimeFamily, props?: LambdaRuntimeProps);
    toString(): string;
    runtimeEquals(other: Runtime): boolean;
}
/**
 * The latest Lambda node runtime available by AWS region.
 */
export declare function determineLatestNodeRuntime(scope: Construct): Runtime;