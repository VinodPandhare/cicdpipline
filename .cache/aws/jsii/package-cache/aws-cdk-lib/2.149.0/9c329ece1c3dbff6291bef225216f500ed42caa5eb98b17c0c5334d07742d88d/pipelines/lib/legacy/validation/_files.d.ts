import { Construct } from 'constructs';
import * as codepipeline from '../../../../aws-codepipeline';
import { IGrantable } from '../../../../aws-iam';
import * as s3assets from '../../../../aws-s3-assets';
/**
 * Additional files to use in a shell script
 */
export declare abstract class Files {
    /**
     * Use the files from a CodePipeline artifact
     */
    static fromArtifact(artifact: codepipeline.Artifact): Files;
    /**
     * Create a new asset to bundle up the files in a directory on disk
     */
    static fromDirectory(directoryPath: string): Files;
    /**
     * Use an existing asset as a file source
     */
    static fromAsset(asset: s3assets.Asset): Files;
    protected constructor();
    /**
     * Bind the Files to a usage location
     */
    abstract bind(scope: Construct): FilesConfig;
    /**
     * Grant read permissions to the file set to the given grantable
     *
     * Must be called after bind().
     */
    abstract grantRead(grantee: IGrantable): void;
}
/**
 * Config for a Files source
 */
export interface FilesConfig {
    /**
     * CodePipeline artifact to add to the set of input artifacts for the project
     *
     * @default - No artifact
     */
    readonly artifact?: codepipeline.Artifact;
    /**
     * Commands to add to the set of commands for the project
     *
     * @default - No commands
     */
    readonly commands?: string[];
}
