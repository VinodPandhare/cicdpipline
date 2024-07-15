import { Construct } from 'constructs';
import { IResource, Resource } from '../../core';
/**
 * Virtual Deliverability Manager (VDM) attributes
 */
export interface IVdmAttributes extends IResource {
    /**
     * The name of the resource behind the Virtual Deliverability Manager attributes.
     *
     * @attribute
     */
    readonly vdmAttributesName: string;
}
/**
 * Properties for the Virtual Deliverability Manager (VDM) attributes
 */
export interface VdmAttributesProps {
    /**
     * Whether engagement metrics are enabled for your account
     *
     * @default true
     */
    readonly engagementMetrics?: boolean;
    /**
     * Whether optimized shared delivery is enabled for your account
     *
     * @default true
     */
    readonly optimizedSharedDelivery?: boolean;
}
/**
 * Virtual Deliverability Manager (VDM) attributes
 */
export declare class VdmAttributes extends Resource implements IVdmAttributes {
    /**
     * Use an existing Virtual Deliverability Manager attributes resource
     */
    static fromVdmAttributesName(scope: Construct, id: string, vdmAttributesName: string): IVdmAttributes;
    readonly vdmAttributesName: string;
    /**
     * Resource ID for the Virtual Deliverability Manager attributes
     *
     * @attribute
     */
    readonly vdmAttributesResourceId: string;
    constructor(scope: Construct, id: string, props?: VdmAttributesProps);
}
