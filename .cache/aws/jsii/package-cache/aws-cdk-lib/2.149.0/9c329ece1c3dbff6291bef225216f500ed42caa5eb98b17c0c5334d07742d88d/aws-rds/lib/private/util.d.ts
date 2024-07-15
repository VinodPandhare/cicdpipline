import { Construct } from 'constructs';
import * as ec2 from '../../../aws-ec2';
import * as iam from '../../../aws-iam';
import * as s3 from '../../../aws-s3';
import { RemovalPolicy } from '../../../core';
import { IEngine } from '../engine';
import { CommonRotationUserOptions, Credentials, SnapshotCredentials } from '../props';
/**
 * The default set of characters we exclude from generated passwords for database users.
 * It's a combination of characters that have a tendency to cause problems in shell scripts,
 * some engine-specific characters (for example, Oracle doesn't like '@' in its passwords),
 * and some that trip up other services, like DMS.
 *
 * This constant is private to the RDS module.
 */
export declare const DEFAULT_PASSWORD_EXCLUDE_CHARS = " %+~`#$&*()|[]{}:;<>?!'/@\"\\";
/** Common base of `DatabaseInstanceProps` and `DatabaseClusterBaseProps` that has only the S3 props */
export interface DatabaseS3ImportExportProps {
    readonly s3ImportRole?: iam.IRole;
    readonly s3ImportBuckets?: s3.IBucket[];
    readonly s3ExportRole?: iam.IRole;
    readonly s3ExportBuckets?: s3.IBucket[];
}
/**
 * Validates the S3 import/export props and returns the import/export roles, if any.
 * If `combineRoles` is true, will reuse the import role for export (or vice versa) if possible.
 *
 * Notably, `combineRoles` is set to true for instances, but false for clusters.
 * This is because the `combineRoles` functionality is most applicable to instances and didn't exist
 * for the initial clusters implementation. To maintain backwards compatibility, it is set to false for clusters.
 */
export declare function setupS3ImportExport(scope: Construct, props: DatabaseS3ImportExportProps, combineRoles: boolean): {
    s3ImportRole?: iam.IRole;
    s3ExportRole?: iam.IRole;
};
export declare function engineDescription(engine: IEngine): string;
/**
 * By default, deletion protection is disabled.
 * Enable if explicitly provided or if the RemovalPolicy has been set to RETAIN
 */
export declare function defaultDeletionProtection(deletionProtection?: boolean, removalPolicy?: RemovalPolicy): boolean | undefined;
/**
 * Renders the credentials for an instance or cluster
 */
export declare function renderCredentials(scope: Construct, engine: IEngine, credentials?: Credentials): Credentials;
/**
 * Renders the credentials for an instance or cluster using provided snapshot credentials
 */
export declare function renderSnapshotCredentials(scope: Construct, credentials?: SnapshotCredentials): SnapshotCredentials | undefined;
/**
 * The RemovalPolicy that should be applied to a "helper" resource, if the base resource has the given removal policy
 *
 * - For Clusters, this determines the RemovalPolicy for Instances/SubnetGroups.
 * - For Instances, this determines the RemovalPolicy for SubnetGroups.
 *
 * If the basePolicy is:
 *
 *  DESTROY or SNAPSHOT -> DESTROY (snapshot is good enough to recreate)
 *  RETAIN              -> RETAIN  (anything else will lose data or fail to deploy)
 *  (undefined)         -> DESTROY (base policy is assumed to be SNAPSHOT)
 */
export declare function helperRemovalPolicy(basePolicy?: RemovalPolicy): RemovalPolicy;
/**
 * Return a given value unless it's the same as another value
 */
export declare function renderUnless<A>(value: A, suppressValue: A): A | undefined;
/**
 * Applies defaults for rotation options
 */
export declare function applyDefaultRotationOptions(options: CommonRotationUserOptions, defaultvpcSubnets?: ec2.SubnetSelection): CommonRotationUserOptions;