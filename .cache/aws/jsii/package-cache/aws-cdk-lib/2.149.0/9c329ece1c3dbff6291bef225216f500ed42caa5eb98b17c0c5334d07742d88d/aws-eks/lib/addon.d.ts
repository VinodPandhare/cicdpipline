import { Construct } from 'constructs';
import { ICluster } from './cluster';
import { IResource, Resource } from '../../core';
/**
 * Represents an Amazon EKS Add-On.
 */
export interface IAddon extends IResource {
    /**
     * Name of the Add-On.
     * @attribute
     */
    readonly addonName: string;
    /**
     * ARN of the Add-On.
     * @attribute
     */
    readonly addonArn: string;
}
/**
 * Properties for creating an Amazon EKS Add-On.
 */
export interface AddonProps {
    /**
     * Name of the Add-On.
     */
    readonly addonName: string;
    /**
     * Version of the Add-On. You can check all available versions with describe-addon-versons.
     * For example, this lists all available versions for the `eks-pod-identity-agent` addon:
     * $ aws eks describe-addon-versions --addon-name eks-pod-identity-agent \
     * --query 'addons[*].addonVersions[*].addonVersion'
     *
     * @default the latest version.
     */
    readonly addonVersion?: string;
    /**
     * The EKS cluster the Add-On is associated with.
     */
    readonly cluster: ICluster;
}
/**
 * Represents the attributes of an addon for an Amazon EKS cluster.
 */
export interface AddonAttributes {
    /**
     * The name of the addon.
     */
    readonly addonName: string;
    /**
     * The name of the Amazon EKS cluster the addon is associated with.
     */
    readonly clusterName: string;
}
/**
 * Represents an Amazon EKS Add-On.
 */
export declare class Addon extends Resource implements IAddon {
    /**
     * Creates an `IAddon` instance from the given addon attributes.
     *
     * @param scope - The parent construct.
     * @param id - The construct ID.
     * @param attrs - The attributes of the addon, including the addon name and the cluster name.
     * @returns An `IAddon` instance.
     */
    static fromAddonAttributes(scope: Construct, id: string, attrs: AddonAttributes): IAddon;
    /**
     * Creates an `IAddon` from an existing addon ARN.
     *
     * @param scope - The parent construct.
     * @param id - The ID of the construct.
     * @param addonArn - The ARN of the addon.
     * @returns An `IAddon` implementation.
     */
    static fromAddonArn(scope: Construct, id: string, addonArn: string): IAddon;
    /**
     * Name of the addon.
     */
    readonly addonName: string;
    /**
     * Arn of the addon.
     */
    readonly addonArn: string;
    private readonly clusterName;
    /**
     * Creates a new Amazon EKS Add-On.
     * @param scope The parent construct.
     * @param id The construct ID.
     * @param props The properties for the Add-On.
     */
    constructor(scope: Construct, id: string, props: AddonProps);
}