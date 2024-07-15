import { Construct } from 'constructs';
import { ConfigurationSetEventDestination, ConfigurationSetEventDestinationOptions } from './configuration-set-event-destination';
import { IDedicatedIpPool } from './dedicated-ip-pool';
import { IResource, Resource } from '../../core';
/**
 * A configuration set
 */
export interface IConfigurationSet extends IResource {
    /**
     * The name of the configuration set
     *
     * @attribute
     */
    readonly configurationSetName: string;
}
/**
 * Properties for a configuration set
 */
export interface ConfigurationSetProps {
    /**
     * A name for the configuration set
     *
     * @default - a CloudFormation generated name
     */
    readonly configurationSetName?: string;
    /**
     * The dedicated IP pool to associate with the configuration set
     *
     * @default - do not use a dedicated IP pool
     */
    readonly dedicatedIpPool?: IDedicatedIpPool;
    /**
     * Specifies whether messages that use the configuration set are required to
     * use Transport Layer Security (TLS)
     *
     * @default ConfigurationSetTlsPolicy.OPTIONAL
     */
    readonly tlsPolicy?: ConfigurationSetTlsPolicy;
    /**
     * Whether to publish reputation metrics for the configuration set, such as
     * bounce and complaint rates, to Amazon CloudWatch
     *
     * @default false
     */
    readonly reputationMetrics?: boolean;
    /**
     * Whether email sending is enabled
     *
     * @default true
     */
    readonly sendingEnabled?: boolean;
    /**
     * The reasons for which recipient email addresses should be automatically added
     * to your account's suppression list
     *
     * @default - use account level settings
     */
    readonly suppressionReasons?: SuppressionReasons;
    /**
     * The custom subdomain that is used to redirect email recipients to the
     * Amazon SES event tracking domain
     *
     * @default - use the default awstrack.me domain
     */
    readonly customTrackingRedirectDomain?: string;
    /**
     * The Virtual Deliverability Manager (VDM) options that apply to the configuration set
     *
     * @default - VDM options not configured at the configuration set level. In this case, use account level settings. (To set the account level settings using CDK, use the `VdmAttributes` Construct.)
     */
    readonly vdmOptions?: VdmOptions;
}
/**
 * Properties for the Virtual Deliverability Manager (VDM) options that apply to the configuration set
 */
export interface VdmOptions {
    /**
     * If true, engagement metrics are enabled for the configuration set
     *
     * @default - Engagement metrics not configured at the configuration set level. In this case, use account level settings.
     */
    readonly engagementMetrics?: boolean;
    /**
     * If true, optimized shared delivery is enabled for the configuration set
     *
     * @default - Optimized shared delivery not configured at the configuration set level. In this case, use account level settings.
     */
    readonly optimizedSharedDelivery?: boolean;
}
/**
 * TLS policy for a configuration set
 */
export declare enum ConfigurationSetTlsPolicy {
    /**
     * Messages are only delivered if a TLS connection can be established
     */
    REQUIRE = "REQUIRE",
    /**
     * Messages can be delivered in plain text if a TLS connection can't be established
     */
    OPTIONAL = "OPTIONAL"
}
/**
 * Reasons for which recipient email addresses should be automatically added
 * to your account's suppression list
 */
export declare enum SuppressionReasons {
    /**
     * Bounces and complaints
     */
    BOUNCES_AND_COMPLAINTS = "BOUNCES_AND_COMPLAINTS",
    /**
     * Bounces only
     */
    BOUNCES_ONLY = "BOUNCES_ONLY",
    /**
     * Complaints only
     */
    COMPLAINTS_ONLY = "COMPLAINTS_ONLY"
}
/**
 * A configuration set
 */
export declare class ConfigurationSet extends Resource implements IConfigurationSet {
    /**
     * Use an existing configuration set
     */
    static fromConfigurationSetName(scope: Construct, id: string, configurationSetName: string): IConfigurationSet;
    readonly configurationSetName: string;
    constructor(scope: Construct, id: string, props?: ConfigurationSetProps);
    /**
     * Adds an event destination to this configuration set
     */
    addEventDestination(id: string, options: ConfigurationSetEventDestinationOptions): ConfigurationSetEventDestination;
}