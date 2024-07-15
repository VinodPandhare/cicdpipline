import { Construct } from 'constructs';
import { DailyAutomaticBackupStartTime } from './daily-automatic-backup-start-time';
import { FileSystemAttributes, FileSystemBase, FileSystemProps, IFileSystem } from './file-system';
import { LustreMaintenanceTime } from './maintenance-time';
import { Connections, ISubnet } from '../../aws-ec2';
import { Duration } from '../../core';
/**
 * The different kinds of file system deployments used by Lustre.
 */
export declare enum LustreDeploymentType {
    /**
     * Original type for shorter term data processing. Data is not replicated and does not persist on server fail.
     */
    SCRATCH_1 = "SCRATCH_1",
    /**
     * Newer type for shorter term data processing. Data is not replicated and does not persist on server fail.
     * Provides better support for spiky workloads.
     */
    SCRATCH_2 = "SCRATCH_2",
    /**
     * Long term storage. Data is replicated and file servers are replaced if they fail.
     */
    PERSISTENT_1 = "PERSISTENT_1",
    /**
     * Newer type of long term storage with higher throughput tiers.
     * Data is replicated and file servers are replaced if they fail.
     */
    PERSISTENT_2 = "PERSISTENT_2"
}
/**
 * The different auto import policies which are allowed
 */
export declare enum LustreAutoImportPolicy {
    /**
     * AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.
     */
    NONE = "NONE",
    /**
     * AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.
     */
    NEW = "NEW",
    /**
     * AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.
     */
    NEW_CHANGED = "NEW_CHANGED",
    /**
     * AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.
     * */
    NEW_CHANGED_DELETED = "NEW_CHANGED_DELETED"
}
/**
  * The permitted Lustre data compression algorithms
*/
export declare enum LustreDataCompressionType {
    /**
    *
    * `NONE` - (Default) Data compression is turned off when the file system is created.
    */
    NONE = "NONE",
    /**
    * `LZ4` - Data compression is turned on with the LZ4 algorithm.  Note: When you turn data compression on for an existing file system, only newly written files are compressed. Existing files are not compressed.
    */
    LZ4 = "LZ4"
}
/**
 * The configuration for the Amazon FSx for Lustre file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html
 */
export interface LustreConfiguration {
    /**
     * The type of backing file system deployment used by FSx.
     */
    readonly deploymentType: LustreDeploymentType;
    /**
     * The path in Amazon S3 where the root of your Amazon FSx file system is exported. The path must use the same
     * Amazon S3 bucket as specified in ImportPath. If you only specify a bucket name, such as s3://import-bucket, you
     * get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is
     * overwritten on export. If you provide a custom prefix in the export path, such as
     * s3://import-bucket/[custom-optional-prefix], Amazon FSx exports the contents of your file system to that export
     * prefix in the Amazon S3 bucket.
     *
     * @default s3://import-bucket/FSxLustre[creation-timestamp]
     */
    readonly exportPath?: string;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per
     * file (in MiB) stored on a single physical disk. Allowed values are between 1 and 512,000.
     *
     * @default 1024
     */
    readonly importedFileChunkSizeMiB?: number;
    /**
     * The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for
     * your Amazon FSx for Lustre file system. Must be of the format "s3://{bucketName}/optional-prefix" and cannot
     * exceed 900 characters.
     *
     * @default - no bucket is imported
     */
    readonly importPath?: string;
    /**
     * Available with `Scratch` and `Persistent_1` deployment types. When you create your file system, your existing S3 objects appear as file and directory listings. Use this property to choose how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. `AutoImportPolicy` can have the following values:
     *
     * For more information, see [Automatically import updates from your S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html) .
     *
     * > This parameter is not supported for Lustre file systems using the `Persistent_2` deployment type.
     *
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-autoimportpolicy
     * @default - no import policy
     */
    readonly autoImportPolicy?: LustreAutoImportPolicy;
    /**
     * Sets the data compression configuration for the file system.
     * For more information, see [Lustre data compression](https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html) in the *Amazon FSx for Lustre User Guide* .
     *
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-datacompressiontype
     * @default - no compression
     */
    readonly dataCompressionType?: LustreDataCompressionType;
    /**
     * Required for the PERSISTENT_1 deployment type, describes the amount of read and write throughput for each 1
     * tebibyte of storage, in MB/s/TiB. Valid values are 50, 100, 200.
     *
     * @default - no default, conditionally required for PERSISTENT_1 deployment type
     */
    readonly perUnitStorageThroughput?: number;
    /**
     * The preferred day and time to perform weekly maintenance. The first digit is the day of the week, starting at 1
     * for Monday, then the following are hours and minutes in the UTC time zone, 24 hour clock. For example: '2:20:30'
     * is Tuesdays at 20:30.
     *
     * @default - no preference
     */
    readonly weeklyMaintenanceStartTime?: LustreMaintenanceTime;
    /**
     * The number of days to retain automatic backups.
     * Setting this property to 0 disables automatic backups.
     * You can retain automatic backups for a maximum of 90 days.
     *
     * Automatic Backups is not supported on scratch file systems.
     *
     * @default Duration.days(0)
     */
    readonly automaticBackupRetention?: Duration;
    /**
     * A boolean flag indicating whether tags for the file system should be copied to backups.
     *
     * @default - false
     */
    readonly copyTagsToBackups?: boolean;
    /**
     * Start time for 30-minute daily automatic backup window in Coordinated Universal Time (UTC).
     *
     * @default - no backup window
     */
    readonly dailyAutomaticBackupStartTime?: DailyAutomaticBackupStartTime;
}
/**
 * Properties specific to the Lustre version of the FSx file system.
 */
export interface LustreFileSystemProps extends FileSystemProps {
    /**
     * Additional configuration for FSx specific to Lustre.
     */
    readonly lustreConfiguration: LustreConfiguration;
    /**
     * The subnet that the file system will be accessible from.
     */
    readonly vpcSubnet: ISubnet;
}
/**
 * The FSx for Lustre File System implementation of IFileSystem.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html
 *
 * @resource AWS::FSx::FileSystem
 */
export declare class LustreFileSystem extends FileSystemBase {
    /**
     * Import an existing FSx for Lustre file system from the given properties.
     */
    static fromLustreFileSystemAttributes(scope: Construct, id: string, attrs: FileSystemAttributes): IFileSystem;
    /**
     * The default FSx file system type used by FSx for Lustre.
     */
    private static readonly DEFAULT_FILE_SYSTEM_TYPE;
    /**
     * The default ports the file system listens on. Actual port list is: [988, 1021, 1022, 1023]
     */
    private static readonly DEFAULT_PORT_RANGE;
    /**
     * Configures a Connections object with all the ports required by FSx for Lustre
     */
    private static configureConnections;
    /**
     * The security groups/rules used to allow network connections to the file system.
     */
    readonly connections: Connections;
    /**
     * The DNS name assigned to this file system.
     */
    readonly dnsName: string;
    /**
     * The ID that AWS assigns to the file system.
     */
    readonly fileSystemId: string;
    /**
     * The mount name of the file system, generated by FSx
     *
     * @attribute LustreMountName
     */
    readonly mountName: string;
    /**
     * The encapsulated L1 file system.
     */
    private readonly fileSystem;
    constructor(scope: Construct, id: string, props: LustreFileSystemProps);
    /**
     * Validates the props provided for a new FSx for Lustre file system.
     */
    private validateProps;
    /**
     * Validates the auto import policy
     */
    private validateAutoImportPolicy;
    /**
     * Validates the export path is in the correct format and matches the import path.
     */
    private validateExportPath;
    /**
     * Validates the importedFileChunkSize is in the correct range.
     */
    private validateImportedFileChunkSize;
    /**
     * Validates the import path is the correct format.
     */
    private validateImportPath;
    /**
     * Validates the perUnitStorageThroughput is defined correctly for the given deploymentType.
     */
    private validatePerUnitStorageThroughput;
    /**
     * Validates the storage capacity is an acceptable value for the deployment type.
     */
    private validateStorageCapacity;
    /**
     * Validates the automaticBackupRetention with a non-scratch deployment class and an acceptable day value.
     */
    private validateAutomaticBackupRetention;
    /**
     * Validates the dailyAutomaticBackupStartTime is set with a non-zero day automaticBackupRetention.
     */
    private validateDailyAutomaticBackupStartTime;
}