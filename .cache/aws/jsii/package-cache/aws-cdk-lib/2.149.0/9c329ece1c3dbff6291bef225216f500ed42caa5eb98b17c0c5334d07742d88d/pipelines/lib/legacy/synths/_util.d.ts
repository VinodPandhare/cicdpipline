import * as codebuild from '../../../../aws-codebuild';
export declare function copyEnvironmentVariables(...names: string[]): Record<string, codebuild.BuildEnvironmentVariable>;
export declare function filterEmpty(xs: Array<string | undefined>): string[];
