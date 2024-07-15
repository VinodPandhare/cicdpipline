import { IBackupVault } from './vault';
import * as events from '../../aws-events';
import { Duration } from '../../core';
/**
 * Properties for a BackupPlanRule
 */
export interface BackupPlanRuleProps {
    /**
     * The duration after a backup job is successfully started before it must be
     * completed or it is canceled by AWS Backup.
     *
     * @default - 7 days
     */
    readonly completionWindow?: Duration;
    /**
     * Specifies the duration after creation that a recovery point is deleted.
     * Must be greater than `moveToColdStorageAfter`.
     *
     * @default - recovery point is never deleted
     */
    readonly deleteAfter?: Duration;
    /**
     * Specifies the duration after creation that a recovery point is moved to cold
     * storage.
     *
     * @default - recovery point is never moved to cold storage
     */
    readonly moveToColdStorageAfter?: Duration;
    /**
     * A display name for the backup rule.
     *
     * @default - a CDK generated name
     */
    readonly ruleName?: string;
    /**
     * A CRON expression specifying when AWS Backup initiates a backup job.
     *
     * @default - no schedule
     */
    readonly scheduleExpression?: events.Schedule;
    /**
     * The duration after a backup is scheduled before a job is canceled if it doesn't start successfully.
     *
     * @default - 8 hours
     */
    readonly startWindow?: Duration;
    /**
     * The backup vault where backups are
     *
     * @default - use the vault defined at the plan level. If not defined a new
     * common vault for the plan will be created
     */
    readonly backupVault?: IBackupVault;
    /**
     * Enables continuous backup and point-in-time restores (PITR).
     *
     * Property `deleteAfter` defines the retention period for the backup. It is mandatory if PITR is enabled.
     * If no value is specified, the retention period is set to 35 days which is the maximum retention period supported by PITR.
     *
     * Property `moveToColdStorageAfter` must not be specified because PITR does not support this option.
     *
     * @default false
     */
    readonly enableContinuousBackup?: boolean;
    /**
     * Copy operations to perform on recovery points created by this rule
     *
     * @default - no copy actions
     */
    readonly copyActions?: BackupPlanCopyActionProps[];
    /**
     * To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.
     *
     * @default - no recovery point tags.
     */
    readonly recoveryPointTags?: {
        [key: string]: string;
    };
}
/**
 * Properties for a BackupPlanCopyAction
 */
export interface BackupPlanCopyActionProps {
    /**
     * Destination Vault for recovery points to be copied into
     */
    readonly destinationBackupVault: IBackupVault;
    /**
     * Specifies the duration after creation that a copied recovery point is deleted from the destination vault.
     * Must be at least 90 days greater than `moveToColdStorageAfter`, if specified.
     *
     * @default - recovery point is never deleted
     */
    readonly deleteAfter?: Duration;
    /**
     * Specifies the duration after creation that a copied recovery point is moved to cold storage.
     *
     * @default - recovery point is never moved to cold storage
     */
    readonly moveToColdStorageAfter?: Duration;
}
/**
 * A backup plan rule
 */
export declare class BackupPlanRule {
    /**
     * Daily with 35 days retention
     */
    static daily(backupVault?: IBackupVault): BackupPlanRule;
    /**
     * Weekly with 3 months retention
     */
    static weekly(backupVault?: IBackupVault): BackupPlanRule;
    /**
     * Monthly 1 year retention, move to cold storage after 1 month
     */
    static monthly1Year(backupVault?: IBackupVault): BackupPlanRule;
    /**
     * Monthly 5 year retention, move to cold storage after 3 months
     */
    static monthly5Year(backupVault?: IBackupVault): BackupPlanRule;
    /**
     * Monthly 7 year retention, move to cold storage after 3 months
     */
    static monthly7Year(backupVault?: IBackupVault): BackupPlanRule;
    /**
     * Properties of BackupPlanRule
     */
    readonly props: BackupPlanRuleProps;
    /** @param props Rule properties */
    constructor(props: BackupPlanRuleProps);
}