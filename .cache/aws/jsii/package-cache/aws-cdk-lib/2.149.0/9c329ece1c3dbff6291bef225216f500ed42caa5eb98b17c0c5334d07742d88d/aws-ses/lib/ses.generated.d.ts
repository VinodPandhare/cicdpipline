import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES.
 *
 * For more information about using configuration sets, see [Using Amazon SES Configuration Sets](https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html) in the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/) .
 *
 * > *Required permissions:*
 * >
 * > To apply any of the resource options, you will need to have the corresponding AWS Identity and Access Management (IAM) SES API v2 permissions:
 * >
 * > - `ses:GetConfigurationSet`
 * >
 * > - (This permission is replacing the v1 *ses:DescribeConfigurationSet* permission which will not work with these v2 resource options.)
 * > - `ses:PutConfigurationSetDeliveryOptions`
 * > - `ses:PutConfigurationSetReputationOptions`
 * > - `ses:PutConfigurationSetSendingOptions`
 * > - `ses:PutConfigurationSetSuppressionOptions`
 * > - `ses:PutConfigurationSetTrackingOptions`
 *
 * @cloudformationResource AWS::SES::ConfigurationSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html
 */
export declare class CfnConfigurationSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationSet;
    /**
     * Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     */
    deliveryOptions?: CfnConfigurationSet.DeliveryOptionsProperty | cdk.IResolvable;
    /**
     * The name of the configuration set. The name must meet the following requirements:.
     */
    name?: string;
    /**
     * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
     */
    reputationOptions?: cdk.IResolvable | CfnConfigurationSet.ReputationOptionsProperty;
    /**
     * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
     */
    sendingOptions?: cdk.IResolvable | CfnConfigurationSet.SendingOptionsProperty;
    /**
     * An object that contains information about the suppression list preferences for your account.
     */
    suppressionOptions?: cdk.IResolvable | CfnConfigurationSet.SuppressionOptionsProperty;
    /**
     * An object that defines the open and click tracking options for emails that you send using the configuration set.
     */
    trackingOptions?: cdk.IResolvable | CfnConfigurationSet.TrackingOptionsProperty;
    /**
     * The Virtual Deliverability Manager (VDM) options that apply to the configuration set.
     */
    vdmOptions?: cdk.IResolvable | CfnConfigurationSet.VdmOptionsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnConfigurationSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationSet {
    /**
     * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-sendingoptions.html
     */
    interface SendingOptionsProperty {
        /**
         * If `true` , email sending is enabled for the configuration set.
         *
         * If `false` , email sending is disabled for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-sendingoptions.html#cfn-ses-configurationset-sendingoptions-sendingenabled
         */
        readonly sendingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * An object that contains information about the suppression list preferences for your account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-suppressionoptions.html
     */
    interface SuppressionOptionsProperty {
        /**
         * A list that contains the reasons that email addresses are automatically added to the suppression list for your account.
         *
         * This list can contain any or all of the following:
         *
         * - `COMPLAINT` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.
         * - `BOUNCE` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-suppressionoptions.html#cfn-ses-configurationset-suppressionoptions-suppressedreasons
         */
        readonly suppressedReasons?: Array<string>;
    }
    /**
     * An object that defines the tracking options for a configuration set.
     *
     * When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.
     *
     * You can optionally configure a custom subdomain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.
     *
     * For more information, see [Configuring Custom Domains to Handle Open and Click Tracking](https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html) in the *Amazon SES Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html
     */
    interface TrackingOptionsProperty {
        /**
         * The custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html#cfn-ses-configurationset-trackingoptions-customredirectdomain
         */
        readonly customRedirectDomain?: string;
    }
    /**
     * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-reputationoptions.html
     */
    interface ReputationOptionsProperty {
        /**
         * If `true` , tracking of reputation metrics is enabled for the configuration set.
         *
         * If `false` , tracking of reputation metrics is disabled for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-reputationoptions.html#cfn-ses-configurationset-reputationoptions-reputationmetricsenabled
         */
        readonly reputationMetricsEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * The Virtual Deliverability Manager (VDM) options that apply to a configuration set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html
     */
    interface VdmOptionsProperty {
        /**
         * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html#cfn-ses-configurationset-vdmoptions-dashboardoptions
         */
        readonly dashboardOptions?: CfnConfigurationSet.DashboardOptionsProperty | cdk.IResolvable;
        /**
         * Specifies additional settings for your VDM configuration as applicable to the Guardian.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html#cfn-ses-configurationset-vdmoptions-guardianoptions
         */
        readonly guardianOptions?: CfnConfigurationSet.GuardianOptionsProperty | cdk.IResolvable;
    }
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-dashboardoptions.html
     */
    interface DashboardOptionsProperty {
        /**
         * Specifies the status of your VDM engagement metrics collection. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables engagement metrics for the configuration set.
         * - `DISABLED` – Amazon SES disables engagement metrics for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-dashboardoptions.html#cfn-ses-configurationset-dashboardoptions-engagementmetrics
         */
        readonly engagementMetrics: string;
    }
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Guardian.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-guardianoptions.html
     */
    interface GuardianOptionsProperty {
        /**
         * Specifies the status of your VDM optimized shared delivery. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables optimized shared delivery for the configuration set.
         * - `DISABLED` – Amazon SES disables optimized shared delivery for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-guardianoptions.html#cfn-ses-configurationset-guardianoptions-optimizedshareddelivery
         */
        readonly optimizedSharedDelivery: string;
    }
    /**
     * Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html
     */
    interface DeliveryOptionsProperty {
        /**
         * The name of the dedicated IP pool to associate with the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html#cfn-ses-configurationset-deliveryoptions-sendingpoolname
         */
        readonly sendingPoolName?: string;
        /**
         * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
         *
         * If the value is `REQUIRE` , messages are only delivered if a TLS connection can be established. If the value is `OPTIONAL` , messages can be delivered in plain text if a TLS connection can't be established.
         *
         * Valid Values: `REQUIRE | OPTIONAL`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html#cfn-ses-configurationset-deliveryoptions-tlspolicy
         */
        readonly tlsPolicy?: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html
 */
export interface CfnConfigurationSetProps {
    /**
     * Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-deliveryoptions
     */
    readonly deliveryOptions?: CfnConfigurationSet.DeliveryOptionsProperty | cdk.IResolvable;
    /**
     * The name of the configuration set. The name must meet the following requirements:.
     *
     * - Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
     * - Contain 64 characters or fewer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-name
     */
    readonly name?: string;
    /**
     * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-reputationoptions
     */
    readonly reputationOptions?: cdk.IResolvable | CfnConfigurationSet.ReputationOptionsProperty;
    /**
     * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-sendingoptions
     */
    readonly sendingOptions?: cdk.IResolvable | CfnConfigurationSet.SendingOptionsProperty;
    /**
     * An object that contains information about the suppression list preferences for your account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-suppressionoptions
     */
    readonly suppressionOptions?: cdk.IResolvable | CfnConfigurationSet.SuppressionOptionsProperty;
    /**
     * An object that defines the open and click tracking options for emails that you send using the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-trackingoptions
     */
    readonly trackingOptions?: cdk.IResolvable | CfnConfigurationSet.TrackingOptionsProperty;
    /**
     * The Virtual Deliverability Manager (VDM) options that apply to the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-vdmoptions
     */
    readonly vdmOptions?: cdk.IResolvable | CfnConfigurationSet.VdmOptionsProperty;
}
/**
 * Specifies a configuration set event destination.
 *
 * *Events* include message sends, deliveries, opens, clicks, bounces, and complaints. *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 *
 * A single configuration set can include more than one event destination.
 *
 * @cloudformationResource AWS::SES::ConfigurationSetEventDestination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html
 */
export declare class CfnConfigurationSetEventDestination extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationSetEventDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationSetEventDestination;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the configuration set that contains the event destination.
     */
    configurationSetName: string;
    /**
     * An object that defines the event destination.
     */
    eventDestination: CfnConfigurationSetEventDestination.EventDestinationProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationSetEventDestinationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationSetEventDestination {
    /**
     * In the Amazon SES API v2, *events* include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays.
     *
     * *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html
     */
    interface EventDestinationProperty {
        /**
         * An object that defines an Amazon CloudWatch destination for email events.
         *
         * You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-cloudwatchdestination
         */
        readonly cloudWatchDestination?: CfnConfigurationSetEventDestination.CloudWatchDestinationProperty | cdk.IResolvable;
        /**
         * If `true` , the event destination is enabled.
         *
         * When the event destination is enabled, the specified event types are sent to the destinations in this `EventDestinationDefinition` .
         *
         * If `false` , the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * An object that defines an Amazon EventBridge destination for email events.
         *
         * You can use Amazon EventBridge to send notifications when certain email events occur.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-eventbridgedestination
         */
        readonly eventBridgeDestination?: CfnConfigurationSetEventDestination.EventBridgeDestinationProperty | cdk.IResolvable;
        /**
         * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-kinesisfirehosedestination
         */
        readonly kinesisFirehoseDestination?: cdk.IResolvable | CfnConfigurationSetEventDestination.KinesisFirehoseDestinationProperty;
        /**
         * The types of events that Amazon SES sends to the specified event destinations.
         *
         * - `SEND` - The send request was successful and SES will attempt to deliver the message to the recipient’s mail server. (If account-level or global suppression is being used, SES will still count it as a send, but delivery is suppressed.)
         * - `REJECT` - SES accepted the email, but determined that it contained a virus and didn’t attempt to deliver it to the recipient’s mail server.
         * - `BOUNCE` - ( *Hard bounce* ) The recipient's mail server permanently rejected the email. ( *Soft bounces* are only included when SES fails to deliver the email after retrying for a period of time.)
         * - `COMPLAINT` - The email was successfully delivered to the recipient’s mail server, but the recipient marked it as spam.
         * - `DELIVERY` - SES successfully delivered the email to the recipient's mail server.
         * - `OPEN` - The recipient received the message and opened it in their email client.
         * - `CLICK` - The recipient clicked one or more links in the email.
         * - `RENDERING_FAILURE` - The email wasn't sent because of a template rendering issue. This event type can occur when template data is missing, or when there is a mismatch between template parameters and data. (This event type only occurs when you send email using the [`SendTemplatedEmail`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html) or [`SendBulkTemplatedEmail`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html) API operations.)
         * - `DELIVERY_DELAY` - The email couldn't be delivered to the recipient’s mail server because a temporary issue occurred. Delivery delays can occur, for example, when the recipient's inbox is full, or when the receiving email server experiences a transient issue.
         * - `SUBSCRIPTION` - The email was successfully delivered, but the recipient updated their subscription preferences by clicking on an *unsubscribe* link as part of your [subscription management](https://docs.aws.amazon.com/ses/latest/dg/sending-email-subscription-management.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-matchingeventtypes
         */
        readonly matchingEventTypes: Array<string>;
        /**
         * The name of the event destination. The name must meet the following requirements:.
         *
         * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
         * - Contain 64 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-name
         */
        readonly name?: string;
        /**
         * An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-snsdestination
         */
        readonly snsDestination?: cdk.IResolvable | CfnConfigurationSetEventDestination.SnsDestinationProperty;
    }
    /**
     * Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
     *
     * Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-snsdestination.html
     */
    interface SnsDestinationProperty {
        /**
         * The ARN of the Amazon SNS topic for email sending events.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-snsdestination.html#cfn-ses-configurationseteventdestination-snsdestination-topicarn
         */
        readonly topicArn: string;
    }
    /**
     * An object that defines an Amazon CloudWatch destination for email events.
     *
     * You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-cloudwatchdestination.html
     */
    interface CloudWatchDestinationProperty {
        /**
         * An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-cloudwatchdestination.html#cfn-ses-configurationseteventdestination-cloudwatchdestination-dimensionconfigurations
         */
        readonly dimensionConfigurations?: Array<CfnConfigurationSetEventDestination.DimensionConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html
     */
    interface DimensionConfigurationProperty {
        /**
         * The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email.
         *
         * This value has to meet the following criteria:
         *
         * - Can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-), at signs (@), and periods (.).
         * - It can contain no more than 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-defaultdimensionvalue
         */
        readonly defaultDimensionValue: string;
        /**
         * The name of an Amazon CloudWatch dimension associated with an email sending metric.
         *
         * The name has to meet the following criteria:
         *
         * - It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).
         * - It can contain no more than 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-dimensionname
         */
        readonly dimensionName: string;
        /**
         * The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch.
         *
         * To use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail` or `SendRawEmail` API, choose `messageTag` . To use your own email headers, choose `emailHeader` . To use link tags, choose `linkTag` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-dimensionvaluesource
         */
        readonly dimensionValueSource: string;
    }
    /**
     * An object that defines an Amazon Kinesis Data Firehose destination for email events.
     *
     * You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html
     */
    interface KinesisFirehoseDestinationProperty {
        /**
         * The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html#cfn-ses-configurationseteventdestination-kinesisfirehosedestination-deliverystreamarn
         */
        readonly deliveryStreamArn: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html#cfn-ses-configurationseteventdestination-kinesisfirehosedestination-iamrolearn
         */
        readonly iamRoleArn: string;
    }
    /**
     * An object that defines an Amazon EventBridge destination for email events.
     *
     * You can use Amazon EventBridge to send notifications when certain email events occur.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventbridgedestination.html
     */
    interface EventBridgeDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon EventBridge bus to publish email events to.
         *
         * Only the default bus is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventbridgedestination.html#cfn-ses-configurationseteventdestination-eventbridgedestination-eventbusarn
         */
        readonly eventBusArn: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationSetEventDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html
 */
export interface CfnConfigurationSetEventDestinationProps {
    /**
     * The name of the configuration set that contains the event destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-configurationsetname
     */
    readonly configurationSetName: string;
    /**
     * An object that defines the event destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination
     */
    readonly eventDestination: CfnConfigurationSetEventDestination.EventDestinationProperty | cdk.IResolvable;
}
/**
 * A list that contains contacts that have subscribed to a particular topic or topics.
 *
 * @cloudformationResource AWS::SES::ContactList
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html
 */
export declare class CfnContactList extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContactList from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContactList;
    /**
     * The name of the contact list.
     */
    contactListName?: string;
    /**
     * A description of what the contact list is about.
     */
    description?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with a contact list.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An interest group, theme, or label within a list.
     */
    topics?: Array<cdk.IResolvable | CfnContactList.TopicProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnContactListProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnContactList {
    /**
     * An interest group, theme, or label within a list.
     *
     * Lists can have multiple topics.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html
     */
    interface TopicProperty {
        /**
         * The default subscription status to be applied to a contact if the contact has not noted their preference for subscribing to a topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-defaultsubscriptionstatus
         */
        readonly defaultSubscriptionStatus: string;
        /**
         * A description of what the topic is about, which the contact will see.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-description
         */
        readonly description?: string;
        /**
         * The name of the topic the contact will see.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-displayname
         */
        readonly displayName: string;
        /**
         * The name of the topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-topicname
         */
        readonly topicName: string;
    }
}
/**
 * Properties for defining a `CfnContactList`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html
 */
export interface CfnContactListProps {
    /**
     * The name of the contact list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-contactlistname
     */
    readonly contactListName?: string;
    /**
     * A description of what the contact list is about.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-description
     */
    readonly description?: string;
    /**
     * The tags associated with a contact list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An interest group, theme, or label within a list.
     *
     * A contact list can have multiple topics.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-topics
     */
    readonly topics?: Array<cdk.IResolvable | CfnContactList.TopicProperty> | cdk.IResolvable;
}
/**
 * Create a new pool of dedicated IP addresses.
 *
 * A pool can include one or more dedicated IP addresses that are associated with your AWS account . You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
 *
 * > You can't delete dedicated IP pools that have a `STANDARD` scaling mode with one or more dedicated IP addresses. This constraint doesn't apply to dedicated IP pools that have a `MANAGED` scaling mode.
 *
 * @cloudformationResource AWS::SES::DedicatedIpPool
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html
 */
export declare class CfnDedicatedIpPool extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDedicatedIpPool from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDedicatedIpPool;
    /**
     * The name of the dedicated IP pool that the IP address is associated with.
     */
    poolName?: string;
    /**
     * The type of scaling mode.
     */
    scalingMode?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDedicatedIpPoolProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnDedicatedIpPool`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html
 */
export interface CfnDedicatedIpPoolProps {
    /**
     * The name of the dedicated IP pool that the IP address is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html#cfn-ses-dedicatedippool-poolname
     */
    readonly poolName?: string;
    /**
     * The type of scaling mode.
     *
     * The following options are available:
     *
     * - `STANDARD` - The customer controls which IPs are part of the dedicated IP pool.
     * - `MANAGED` - The reputation and number of IPs are automatically managed by Amazon SES .
     *
     * The `STANDARD` option is selected by default if no value is specified.
     *
     * > Updating *ScalingMode* doesn't require a replacement if you're updating its value from `STANDARD` to `MANAGED` . However, updating *ScalingMode* from `MANAGED` to `STANDARD` is not supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html#cfn-ses-dedicatedippool-scalingmode
     */
    readonly scalingMode?: string;
}
/**
 * Specifies an identity for using within SES.
 *
 * An identity is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.
 *
 * When you verify an email address, SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. When you verify a domain without specifying the `DkimSigningAttributes` properties, OR only the `NextSigningKeyLength` property of `DkimSigningAttributes` , this resource provides a set of CNAME token names and values ( *DkimDNSTokenName1* , *DkimDNSTokenValue1* , *DkimDNSTokenName2* , *DkimDNSTokenValue2* , *DkimDNSTokenName3* , *DkimDNSTokenValue3* ) as outputs. You can then add these to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as Easy DKIM.
 *
 * Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your resource must include `DkimSigningAttributes` properties `DomainSigningSelector` and `DomainSigningPrivateKey` . When you specify this object, you provide a selector ( `DomainSigningSelector` ) (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key ( `DomainSigningPrivateKey` ).
 *
 * Additionally, you can associate an existing configuration set with the email identity that you're verifying.
 *
 * @cloudformationResource AWS::SES::EmailIdentity
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html
 */
export declare class CfnEmailIdentity extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEmailIdentity from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEmailIdentity;
    /**
     * The host name for the first token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenName1
     */
    readonly attrDkimDnsTokenName1: string;
    /**
     * The host name for the second token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenName2
     */
    readonly attrDkimDnsTokenName2: string;
    /**
     * The host name for the third token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenName3
     */
    readonly attrDkimDnsTokenName3: string;
    /**
     * The record value for the first token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenValue1
     */
    readonly attrDkimDnsTokenValue1: string;
    /**
     * The record value for the second token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenValue2
     */
    readonly attrDkimDnsTokenValue2: string;
    /**
     * The record value for the third token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenValue3
     */
    readonly attrDkimDnsTokenValue3: string;
    /**
     * Used to associate a configuration set with an email identity.
     */
    configurationSetAttributes?: CfnEmailIdentity.ConfigurationSetAttributesProperty | cdk.IResolvable;
    /**
     * An object that contains information about the DKIM attributes for the identity.
     */
    dkimAttributes?: CfnEmailIdentity.DkimAttributesProperty | cdk.IResolvable;
    /**
     * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) .
     */
    dkimSigningAttributes?: CfnEmailIdentity.DkimSigningAttributesProperty | cdk.IResolvable;
    /**
     * The email address or domain to verify.
     */
    emailIdentity: string;
    /**
     * Used to enable or disable feedback forwarding for an identity.
     */
    feedbackAttributes?: CfnEmailIdentity.FeedbackAttributesProperty | cdk.IResolvable;
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     */
    mailFromAttributes?: cdk.IResolvable | CfnEmailIdentity.MailFromAttributesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEmailIdentityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEmailIdentity {
    /**
     * Used to associate a configuration set with an email identity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-configurationsetattributes.html
     */
    interface ConfigurationSetAttributesProperty {
        /**
         * The configuration set to associate with an email identity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-configurationsetattributes.html#cfn-ses-emailidentity-configurationsetattributes-configurationsetname
         */
        readonly configurationSetName?: string;
    }
    /**
     * Used to configure or change the DKIM authentication settings for an email domain identity.
     *
     * You can use this operation to do any of the following:
     *
     * - Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).
     * - Update the key length that should be used for Easy DKIM.
     * - Change from using no DKIM authentication to using Easy DKIM.
     * - Change from using no DKIM authentication to using BYODKIM.
     * - Change from using Easy DKIM to using BYODKIM.
     * - Change from using BYODKIM to using Easy DKIM.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html
     */
    interface DkimSigningAttributesProperty {
        /**
         * [Bring Your Own DKIM] A private key that's used to generate a DKIM signature.
         *
         * The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
         *
         * > Rather than embedding sensitive information directly in your CFN templates, we recommend you use dynamic parameters in the stack template to reference sensitive information that is stored and managed outside of CFN, such as in the AWS Systems Manager Parameter Store or AWS Secrets Manager.
         * >
         * > For more information, see the [Do not embed credentials in your templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#creds) best practice.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html#cfn-ses-emailidentity-dkimsigningattributes-domainsigningprivatekey
         */
        readonly domainSigningPrivateKey?: string;
        /**
         * [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html#cfn-ses-emailidentity-dkimsigningattributes-domainsigningselector
         */
        readonly domainSigningSelector?: string;
        /**
         * [Easy DKIM] The key length of the future DKIM key pair to be generated.
         *
         * This can be changed at most once per day.
         *
         * Valid Values: `RSA_1024_BIT | RSA_2048_BIT`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html#cfn-ses-emailidentity-dkimsigningattributes-nextsigningkeylength
         */
        readonly nextSigningKeyLength?: string;
    }
    /**
     * Used to enable or disable DKIM authentication for an email identity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimattributes.html
     */
    interface DkimAttributesProperty {
        /**
         * Sets the DKIM signing configuration for the identity.
         *
         * When you set this value `true` , then the messages that are sent from the identity are signed using DKIM. If you set this value to `false` , your messages are sent without DKIM signing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimattributes.html#cfn-ses-emailidentity-dkimattributes-signingenabled
         */
        readonly signingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Used to enable or disable feedback forwarding for an identity.
     *
     * This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-feedbackattributes.html
     */
    interface FeedbackAttributesProperty {
        /**
         * Sets the feedback forwarding configuration for the identity.
         *
         * If the value is `true` , you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the `Return-Path` header of the original email.
         *
         * You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-feedbackattributes.html#cfn-ses-emailidentity-feedbackattributes-emailforwardingenabled
         */
        readonly emailForwardingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html
     */
    interface MailFromAttributesProperty {
        /**
         * The action to take if the required MX record isn't found when you send an email.
         *
         * When you set this value to `USE_DEFAULT_VALUE` , the mail is sent using *amazonses.com* as the MAIL FROM domain. When you set this value to `REJECT_MESSAGE` , the Amazon SES API v2 returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
         *
         * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending` , `Failed` , and `TemporaryFailure` states.
         *
         * Valid Values: `USE_DEFAULT_VALUE | REJECT_MESSAGE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html#cfn-ses-emailidentity-mailfromattributes-behavioronmxfailure
         */
        readonly behaviorOnMxFailure?: string;
        /**
         * The custom MAIL FROM domain that you want the verified identity to use.
         *
         * The MAIL FROM domain must meet the following criteria:
         *
         * - It has to be a subdomain of the verified identity.
         * - It can't be used to receive email.
         * - It can't be used in a "From" address if the MAIL FROM domain is a destination for feedback forwarding emails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html#cfn-ses-emailidentity-mailfromattributes-mailfromdomain
         */
        readonly mailFromDomain?: string;
    }
}
/**
 * Properties for defining a `CfnEmailIdentity`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html
 */
export interface CfnEmailIdentityProps {
    /**
     * Used to associate a configuration set with an email identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-configurationsetattributes
     */
    readonly configurationSetAttributes?: CfnEmailIdentity.ConfigurationSetAttributesProperty | cdk.IResolvable;
    /**
     * An object that contains information about the DKIM attributes for the identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimattributes
     */
    readonly dkimAttributes?: CfnEmailIdentity.DkimAttributesProperty | cdk.IResolvable;
    /**
     * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) .
     *
     * You can only specify this object if the email identity is a domain, as opposed to an address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimsigningattributes
     */
    readonly dkimSigningAttributes?: CfnEmailIdentity.DkimSigningAttributesProperty | cdk.IResolvable;
    /**
     * The email address or domain to verify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-emailidentity
     */
    readonly emailIdentity: string;
    /**
     * Used to enable or disable feedback forwarding for an identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-feedbackattributes
     */
    readonly feedbackAttributes?: CfnEmailIdentity.FeedbackAttributesProperty | cdk.IResolvable;
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-mailfromattributes
     */
    readonly mailFromAttributes?: cdk.IResolvable | CfnEmailIdentity.MailFromAttributesProperty;
}
/**
 * Specify a new IP address filter.
 *
 * You use IP address filters when you receive email with Amazon SES.
 *
 * @cloudformationResource AWS::SES::ReceiptFilter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html
 */
export declare class CfnReceiptFilter extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReceiptFilter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReceiptFilter;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
     */
    filter: CfnReceiptFilter.FilterProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReceiptFilterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReceiptFilter {
    /**
     * Specifies an IP address filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html
     */
    interface FilterProperty {
        /**
         * A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html#cfn-ses-receiptfilter-filter-ipfilter
         */
        readonly ipFilter: CfnReceiptFilter.IpFilterProperty | cdk.IResolvable;
        /**
         * The name of the IP address filter. The name must meet the following requirements:.
         *
         * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
         * - Start and end with a letter or number.
         * - Contain 64 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html#cfn-ses-receiptfilter-filter-name
         */
        readonly name?: string;
    }
    /**
     * A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.
     *
     * For information about setting up IP address filters, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html
     */
    interface IpFilterProperty {
        /**
         * A single IP address or a range of IP addresses to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation.
         *
         * An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see [RFC 2317](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc2317) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html#cfn-ses-receiptfilter-ipfilter-cidr
         */
        readonly cidr: string;
        /**
         * Indicates whether to block or allow incoming mail from the specified IP addresses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html#cfn-ses-receiptfilter-ipfilter-policy
         */
        readonly policy: string;
    }
}
/**
 * Properties for defining a `CfnReceiptFilter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html
 */
export interface CfnReceiptFilterProps {
    /**
     * A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#cfn-ses-receiptfilter-filter
     */
    readonly filter: CfnReceiptFilter.FilterProperty | cdk.IResolvable;
}
/**
 * Specifies a receipt rule.
 *
 * @cloudformationResource AWS::SES::ReceiptRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html
 */
export declare class CfnReceiptRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReceiptRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReceiptRule;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of an existing rule after which the new rule is placed.
     */
    after?: string;
    /**
     * A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
     */
    rule: cdk.IResolvable | CfnReceiptRule.RuleProperty;
    /**
     * The name of the rule set where the receipt rule is added.
     */
    ruleSetName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReceiptRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReceiptRule {
    /**
     * Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.
     *
     * Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.
     *
     * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html
     */
    interface RuleProperty {
        /**
         * An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-actions
         */
        readonly actions?: Array<CfnReceiptRule.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * If `true` , the receipt rule is active.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The name of the receipt rule. The name must meet the following requirements:.
         *
         * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), dashes (-), or periods (.).
         * - Start and end with a letter or number.
         * - Contain 64 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-name
         */
        readonly name?: string;
        /**
         * The recipient domains and email addresses that the receipt rule applies to.
         *
         * If this field is not specified, this rule matches all recipients on all verified domains.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-recipients
         */
        readonly recipients?: Array<string>;
        /**
         * If `true` , then messages that this receipt rule applies to are scanned for spam and viruses.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-scanenabled
         */
        readonly scanEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS).
         *
         * If this parameter is set to `Require` , Amazon SES bounces emails that are not received over TLS. The default is `Optional` .
         *
         * Valid Values: `Require | Optional`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-tlspolicy
         */
        readonly tlsPolicy?: string;
    }
    /**
     * An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own.
     *
     * An instance of this data type can represent only one action.
     *
     * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html
     */
    interface ActionProperty {
        /**
         * Adds a header to the received email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-addheaderaction
         */
        readonly addHeaderAction?: CfnReceiptRule.AddHeaderActionProperty | cdk.IResolvable;
        /**
         * Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-bounceaction
         */
        readonly bounceAction?: CfnReceiptRule.BounceActionProperty | cdk.IResolvable;
        /**
         * Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-lambdaaction
         */
        readonly lambdaAction?: cdk.IResolvable | CfnReceiptRule.LambdaActionProperty;
        /**
         * Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-s3action
         */
        readonly s3Action?: cdk.IResolvable | CfnReceiptRule.S3ActionProperty;
        /**
         * Publishes the email content within a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-snsaction
         */
        readonly snsAction?: cdk.IResolvable | CfnReceiptRule.SNSActionProperty;
        /**
         * Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-stopaction
         */
        readonly stopAction?: cdk.IResolvable | CfnReceiptRule.StopActionProperty;
        /**
         * Calls Amazon WorkMail and, optionally, publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-workmailaction
         */
        readonly workmailAction?: cdk.IResolvable | CfnReceiptRule.WorkmailActionProperty;
    }
    /**
     * When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * For information about sending a bounce message in response to a received email, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-bounce.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html
     */
    interface BounceActionProperty {
        /**
         * Human-readable text to include in the bounce message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-message
         */
        readonly message: string;
        /**
         * The email address of the sender of the bounced email.
         *
         * This is the address from which the bounce message is sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-sender
         */
        readonly sender: string;
        /**
         * The SMTP reply code, as defined by [RFC 5321](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc5321) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-smtpreplycode
         */
        readonly smtpReplyCode: string;
        /**
         * The SMTP enhanced status code, as defined by [RFC 3463](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc3463) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-statuscode
         */
        readonly statusCode?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is taken.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about granting permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
     *
     * > When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that bounces.
     *
     * For information about specifying Amazon S3 actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-s3.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html
     */
    interface S3ActionProperty {
        /**
         * The name of the Amazon S3 bucket for incoming email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-bucketname
         */
        readonly bucketName: string;
        /**
         * The customer master key that Amazon SES should use to encrypt your emails before saving them to the Amazon S3 bucket.
         *
         * You can use the default master key or a custom master key that you created in AWS KMS as follows:
         *
         * - To use the default master key, provide an ARN in the form of `arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses` . For example, if your AWS account ID is 123456789012 and you want to use the default master key in the US West (Oregon) Region, the ARN of the default master key would be `arn:aws:kms:us-west-2:123456789012:alias/aws/ses` . If you use the default master key, you don't need to perform any extra steps to give Amazon SES permission to use the key.
         * - To use a custom master key that you created in AWS KMS, provide the ARN of the master key and ensure that you add a statement to your key's policy to give Amazon SES permission to use it. For more information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
         *
         * For more information about key policies, see the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html) . If you do not specify a master key, Amazon SES does not encrypt your emails.
         *
         * > Your mail is encrypted by Amazon SES using the Amazon S3 encryption client before the mail is submitted to Amazon S3 for storage. It is not encrypted using Amazon S3 server-side encryption. This means that you must use the Amazon S3 encryption client to decrypt the email after retrieving it from Amazon S3, as the service has no access to use your AWS KMS keys for decryption. This encryption client is currently available with the [AWS SDK for Java](https://docs.aws.amazon.com/sdk-for-java/) and [AWS SDK for Ruby](https://docs.aws.amazon.com/sdk-for-ruby/) only. For more information about client-side encryption using AWS KMS master keys, see the [Amazon S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The key prefix of the Amazon S3 bucket.
         *
         * The key prefix is similar to a directory name that enables you to store similar data under the same directory in a bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-objectkeyprefix
         */
        readonly objectKeyPrefix?: string;
        /**
         * The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * For information about setting a stop action in a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-stop.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html
     */
    interface StopActionProperty {
        /**
         * The scope of the StopAction.
         *
         * The only acceptable value is `RuleSet` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html#cfn-ses-receiptrule-stopaction-scope
         */
        readonly scope: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop action is taken.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html#cfn-ses-receiptrule-stopaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.
     *
     * If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
     *
     * > You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.
     *
     * For information about using a receipt rule to publish an Amazon SNS notification, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-sns.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html
     */
    interface SNSActionProperty {
        /**
         * The encoding to use for the email within the Amazon SNS notification.
         *
         * UTF-8 is easier to use, but may not preserve all special characters when a message was encoded with a different encoding format. Base64 preserves all special characters. The default value is UTF-8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html#cfn-ses-receiptrule-snsaction-encoding
         */
        readonly encoding?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html#cfn-ses-receiptrule-snsaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * It usually isn't necessary to set this up manually, because Amazon WorkMail adds the rule automatically during its setup procedure.
     *
     * For information using a receipt rule to call Amazon WorkMail, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-workmail.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html
     */
    interface WorkmailActionProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon WorkMail organization. Amazon WorkMail ARNs use the following format:.
         *
         * `arn:aws:workmail:<region>:<awsAccountId>:organization/<workmailOrganizationId>`
         *
         * You can find the ID of your organization by using the [ListOrganizations](https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html) operation in Amazon WorkMail. Amazon WorkMail organization IDs begin with " `m-` ", followed by a string of alphanumeric characters.
         *
         * For information about Amazon WorkMail organizations, see the [Amazon WorkMail Administrator Guide](https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html#cfn-ses-receiptrule-workmailaction-organizationarn
         */
        readonly organizationArn: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the WorkMail action is called.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html#cfn-ses-receiptrule-workmailaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action adds a header to the received email.
     *
     * For information about adding a header using a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html
     */
    interface AddHeaderActionProperty {
        /**
         * The name of the header to add to the incoming message.
         *
         * The name must contain at least one character, and can contain up to 50 characters. It consists of alphanumeric ( `a–z, A–Z, 0–9` ) characters and dashes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html#cfn-ses-receiptrule-addheaderaction-headername
         */
        readonly headerName: string;
        /**
         * The content to include in the header.
         *
         * This value can contain up to 2048 characters. It can't contain newline ( `\n` ) or carriage return ( `\r` ) characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html#cfn-ses-receiptrule-addheaderaction-headervalue
         */
        readonly headerValue: string;
    }
    /**
     * When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
     *
     * For information about using AWS Lambda actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-lambda.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html
     */
    interface LambdaActionProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS Lambda function.
         *
         * An example of an AWS Lambda function ARN is `arn:aws:lambda:us-west-2:account-id:function:MyFunction` . For more information about AWS Lambda, see the [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html#cfn-ses-receiptrule-lambdaaction-functionarn
         */
        readonly functionArn: string;
        /**
         * The invocation type of the AWS Lambda function.
         *
         * An invocation type of `RequestResponse` means that the execution of the function immediately results in a response, and a value of `Event` means that the function is invoked asynchronously. The default value is `Event` . For information about AWS Lambda invocation types, see the [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html) .
         *
         * > There is a 30-second timeout on `RequestResponse` invocations. You should use `Event` invocation in most cases. Use `RequestResponse` only to make a mail flow decision, such as whether to stop the receipt rule or the receipt rule set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html#cfn-ses-receiptrule-lambdaaction-invocationtype
         */
        readonly invocationType?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda action is executed.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html#cfn-ses-receiptrule-lambdaaction-topicarn
         */
        readonly topicArn?: string;
    }
}
/**
 * Properties for defining a `CfnReceiptRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html
 */
export interface CfnReceiptRuleProps {
    /**
     * The name of an existing rule after which the new rule is placed.
     *
     * If this parameter is null, the new rule is inserted at the beginning of the rule list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html#cfn-ses-receiptrule-after
     */
    readonly after?: string;
    /**
     * A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html#cfn-ses-receiptrule-rule
     */
    readonly rule: cdk.IResolvable | CfnReceiptRule.RuleProperty;
    /**
     * The name of the rule set where the receipt rule is added.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html#cfn-ses-receiptrule-rulesetname
     */
    readonly ruleSetName: string;
}
/**
 * Creates an empty receipt rule set.
 *
 * For information about setting up receipt rule sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules) .
 *
 * You can execute this operation no more than once per second.
 *
 * @cloudformationResource AWS::SES::ReceiptRuleSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html
 */
export declare class CfnReceiptRuleSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReceiptRuleSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReceiptRuleSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the receipt rule set to make active.
     */
    ruleSetName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnReceiptRuleSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnReceiptRuleSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html
 */
export interface CfnReceiptRuleSetProps {
    /**
     * The name of the receipt rule set to make active.
     *
     * Setting this value to null disables all email receiving.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html#cfn-ses-receiptruleset-rulesetname
     */
    readonly ruleSetName?: string;
}
/**
 * Specifies an email template.
 *
 * Email templates enable you to send personalized email to one or more destinations in a single API operation.
 *
 * @cloudformationResource AWS::SES::Template
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html
 */
export declare class CfnTemplate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTemplate;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The content of the email, composed of a subject line and either an HTML part or a text-only part.
     */
    template?: cdk.IResolvable | CfnTemplate.TemplateProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTemplate {
    /**
     * An object that defines the email template to use for an email message, and the values to use for any message variables in that template.
     *
     * An *email template* is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html
     */
    interface TemplateProperty {
        /**
         * The HTML body of the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-htmlpart
         */
        readonly htmlPart?: string;
        /**
         * The subject line of the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-subjectpart
         */
        readonly subjectPart: string;
        /**
         * The name of the template.
         *
         * You will refer to this name when you send email using the `SendTemplatedEmail` or `SendBulkTemplatedEmail` operations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-templatename
         */
        readonly templateName?: string;
        /**
         * The email body that is visible to recipients whose email clients do not display HTML content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-textpart
         */
        readonly textPart?: string;
    }
}
/**
 * Properties for defining a `CfnTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html
 */
export interface CfnTemplateProps {
    /**
     * The content of the email, composed of a subject line and either an HTML part or a text-only part.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#cfn-ses-template-template
     */
    readonly template?: cdk.IResolvable | CfnTemplate.TemplateProperty;
}
/**
 * The Virtual Deliverability Manager (VDM) attributes that apply to your Amazon SES account.
 *
 * @cloudformationResource AWS::SES::VdmAttributes
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html
 */
export declare class CfnVdmAttributes extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVdmAttributes from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVdmAttributes;
    /**
     * Unique identifier for this resource
     *
     * @cloudformationAttribute VdmAttributesResourceId
     */
    readonly attrVdmAttributesResourceId: string;
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
     */
    dashboardAttributes?: CfnVdmAttributes.DashboardAttributesProperty | cdk.IResolvable;
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Guardian.
     */
    guardianAttributes?: CfnVdmAttributes.GuardianAttributesProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnVdmAttributesProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVdmAttributes {
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-dashboardattributes.html
     */
    interface DashboardAttributesProperty {
        /**
         * Specifies the status of your VDM engagement metrics collection. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables engagement metrics for your account.
         * - `DISABLED` – Amazon SES disables engagement metrics for your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-dashboardattributes.html#cfn-ses-vdmattributes-dashboardattributes-engagementmetrics
         */
        readonly engagementMetrics?: string;
    }
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Guardian.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-guardianattributes.html
     */
    interface GuardianAttributesProperty {
        /**
         * Specifies the status of your VDM optimized shared delivery. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables optimized shared delivery for your account.
         * - `DISABLED` – Amazon SES disables optimized shared delivery for your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-guardianattributes.html#cfn-ses-vdmattributes-guardianattributes-optimizedshareddelivery
         */
        readonly optimizedSharedDelivery?: string;
    }
}
/**
 * Properties for defining a `CfnVdmAttributes`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html
 */
export interface CfnVdmAttributesProps {
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-dashboardattributes
     */
    readonly dashboardAttributes?: CfnVdmAttributes.DashboardAttributesProperty | cdk.IResolvable;
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Guardian.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-guardianattributes
     */
    readonly guardianAttributes?: CfnVdmAttributes.GuardianAttributesProperty | cdk.IResolvable;
}
