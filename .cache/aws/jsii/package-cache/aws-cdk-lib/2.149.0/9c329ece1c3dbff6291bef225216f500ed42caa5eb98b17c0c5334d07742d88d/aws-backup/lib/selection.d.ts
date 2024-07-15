import { Construct } from 'constructs';
import { IBackupPlan } from './plan';
import { BackupResource } from './resource';
import * as iam from '../../aws-iam';
import { Resource } from '../../core';
/**
 * Options for a BackupSelection
 */
export interface BackupSelectionOptions {
    /**
     * The resources to backup.
     * Use the helper static methods defined on `BackupResource`.
     */
    readonly resources: BackupResource[];
    /**
     * The name for this selection
     *
     * @default - a CDK generated name
     */
    readonly backupSelectionName?: string;
    /**
     * The role that AWS Backup uses to authenticate when backuping or restoring
     * the resources. The `AWSBackupServiceRolePolicyForBackup` managed policy
     * will be attached to this role unless `disableDefaultBackupPolicy`
     * is set to `true`.
     *
     * @default - a new role will be created
     */
    readonly role?: iam.IRole;
    /**
     * Whether to disable automatically assigning default backup permissions to the role
     * that AWS Backup uses.
     * If `false`, the `AWSBackupServiceRolePolicyForBackup` managed policy will be
     * attached to the role.
     *
     * @default false
     */
    readonly disableDefaultBackupPolicy?: boolean;
    /**
     * Whether to automatically give restores permissions to the role that AWS
     * Backup uses. If `true`, the `AWSBackupServiceRolePolicyForRestores` managed
     * policy will be attached to the role.
     *
     * @default false
     */
    readonly allowRestores?: boolean;
}
/**
 * Properties for a BackupSelection
 */
export interface BackupSelectionProps extends BackupSelectionOptions {
    /**
     * The backup plan for this selection
     */
    readonly backupPlan: IBackupPlan;
}
/**
 * A backup selection
 */
export declare class BackupSelection extends Resource implements iam.IGrantable {
    /**
     * The identifier of the backup plan.
     *
     * @attribute
     */
    readonly backupPlanId: string;
    /**
     * The identifier of the backup selection.
     *
     * @attribute
     */
    readonly selectionId: string;
    /**
     * The principal to grant permissions to
     */
    readonly grantPrincipal: iam.IPrincipal;
    private listOfTags;
    private resources;
    private readonly backupableResourcesCollector;
    constructor(scope: Construct, id: string, props: BackupSelectionProps);
    private addResource;
}