import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an orchestration of data collection rules.
 *
 * The AWS IoT FleetWise Edge Agent software running in vehicles uses campaigns to decide how to collect and transfer data to the cloud. You create campaigns in the cloud. After you or your team approve campaigns, AWS IoT FleetWise automatically deploys them to vehicles.
 *
 * For more information, see [Collect and transfer data with campaigns](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html) in the *AWS IoT FleetWise Developer Guide* .
 *
 * @cloudformationResource AWS::IoTFleetWise::Campaign
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html
 */
export declare class CfnCampaign extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCampaign from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCampaign;
    /**
     * The Amazon Resource Name (ARN) of the campaign.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the campaign was created in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The last time the campaign was modified.
     *
     * @cloudformationAttribute LastModificationTime
     */
    readonly attrLastModificationTime: string;
    /**
     * The state of the campaign. The status can be one of: `CREATING` , `WAITING_FOR_APPROVAL` , `RUNNING` , and `SUSPENDED` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Specifies how to update a campaign. The action can be one of the following:.
     */
    action: string;
    /**
     * The data collection scheme associated with the campaign.
     */
    collectionScheme: CfnCampaign.CollectionSchemeProperty | cdk.IResolvable;
    /**
     * (Optional) Whether to compress signals before transmitting data to AWS IoT FleetWise .
     */
    compression?: string;
    /**
     * (Optional) The destination where the campaign sends data.
     */
    dataDestinationConfigs?: Array<CfnCampaign.DataDestinationConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * (Optional) A list of vehicle attributes to associate with a campaign.
     */
    dataExtraDimensions?: Array<string>;
    /**
     * (Optional) The description of the campaign.
     */
    description?: string;
    /**
     * (Optional) Option for a vehicle to send diagnostic trouble codes to AWS IoT FleetWise .
     */
    diagnosticsMode?: string;
    /**
     * (Optional) The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time).
     */
    expiryTime?: string;
    /**
     * The name of a campaign.
     */
    name: string;
    /**
     * (Optional) How long (in milliseconds) to collect raw data after a triggering event initiates the collection.
     */
    postTriggerCollectionDuration?: number;
    /**
     * (Optional) A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet.
     */
    priority?: number;
    /**
     * The Amazon Resource Name (ARN) of the signal catalog associated with the campaign.
     */
    signalCatalogArn: string;
    /**
     * (Optional) A list of information about signals to collect.
     */
    signalsToCollect?: Array<cdk.IResolvable | CfnCampaign.SignalInformationProperty> | cdk.IResolvable;
    /**
     * (Optional) Whether to store collected data after a vehicle lost a connection with the cloud.
     */
    spoolingMode?: string;
    /**
     * (Optional) The time, in milliseconds, to deliver a campaign after it was approved.
     */
    startTime?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * (Optional) Metadata that can be used to manage the campaign.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of a vehicle or fleet to which the campaign is deployed.
     */
    targetArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCampaignProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCampaign {
    /**
     * Information about a signal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html
     */
    interface SignalInformationProperty {
        /**
         * (Optional) The maximum number of samples to collect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html#cfn-iotfleetwise-campaign-signalinformation-maxsamplecount
         */
        readonly maxSampleCount?: number;
        /**
         * (Optional) The minimum duration of time (in milliseconds) between two triggering events to collect data.
         *
         * > If a signal changes often, you might want to collect data at a slower rate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html#cfn-iotfleetwise-campaign-signalinformation-minimumsamplingintervalms
         */
        readonly minimumSamplingIntervalMs?: number;
        /**
         * The name of the signal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html#cfn-iotfleetwise-campaign-signalinformation-name
         */
        readonly name: string;
    }
    /**
     * The destination where the AWS IoT FleetWise campaign sends data.
     *
     * You can send data to be stored in Amazon S3 or Amazon Timestream .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datadestinationconfig.html
     */
    interface DataDestinationConfigProperty {
        /**
         * (Optional) The Amazon S3 bucket where the AWS IoT FleetWise campaign sends data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datadestinationconfig.html#cfn-iotfleetwise-campaign-datadestinationconfig-s3config
         */
        readonly s3Config?: cdk.IResolvable | CfnCampaign.S3ConfigProperty;
        /**
         * (Optional) The Amazon Timestream table where the campaign sends data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datadestinationconfig.html#cfn-iotfleetwise-campaign-datadestinationconfig-timestreamconfig
         */
        readonly timestreamConfig?: cdk.IResolvable | CfnCampaign.TimestreamConfigProperty;
    }
    /**
     * The Amazon S3 bucket where the AWS IoT FleetWise campaign sends data.
     *
     * Amazon S3 is an object storage service that stores data as objects within buckets. For more information, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the *Amazon Simple Storage Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-s3config.html
     */
    interface S3ConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-s3config.html#cfn-iotfleetwise-campaign-s3config-bucketarn
         */
        readonly bucketArn: string;
        /**
         * (Optional) Specify the format that files are saved in the Amazon S3 bucket.
         *
         * You can save files in an Apache Parquet or JSON format.
         *
         * - Parquet - Store data in a columnar storage file format. Parquet is optimal for fast data retrieval and can reduce costs. This option is selected by default.
         * - JSON - Store data in a standard text-based JSON file format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-s3config.html#cfn-iotfleetwise-campaign-s3config-dataformat
         */
        readonly dataFormat?: string;
        /**
         * (Optional) Enter an S3 bucket prefix.
         *
         * The prefix is the string of characters after the bucket name and before the object name. You can use the prefix to organize data stored in Amazon S3 buckets. For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the *Amazon Simple Storage Service User Guide* .
         *
         * By default, AWS IoT FleetWise sets the prefix `processed-data/year=YY/month=MM/date=DD/hour=HH/` (in UTC) to data it delivers to Amazon S3 . You can enter a prefix to append it to this default prefix. For example, if you enter the prefix `vehicles` , the prefix will be `vehicles/processed-data/year=YY/month=MM/date=DD/hour=HH/` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-s3config.html#cfn-iotfleetwise-campaign-s3config-prefix
         */
        readonly prefix?: string;
        /**
         * (Optional) By default, stored data is compressed as a .gzip file. Compressed files have a reduced file size, which can optimize the cost of data storage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-s3config.html#cfn-iotfleetwise-campaign-s3config-storagecompressionformat
         */
        readonly storageCompressionFormat?: string;
    }
    /**
     * The Amazon Timestream table where the AWS IoT FleetWise campaign sends data.
     *
     * Timestream stores and organizes data to optimize query processing time and to reduce storage costs. For more information, see [Data modeling](https://docs.aws.amazon.com/timestream/latest/developerguide/data-modeling.html) in the *Amazon Timestream Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timestreamconfig.html
     */
    interface TimestreamConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the task execution role that grants AWS IoT FleetWise permission to deliver data to the Amazon Timestream table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timestreamconfig.html#cfn-iotfleetwise-campaign-timestreamconfig-executionrolearn
         */
        readonly executionRoleArn: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon Timestream table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timestreamconfig.html#cfn-iotfleetwise-campaign-timestreamconfig-timestreamtablearn
         */
        readonly timestreamTableArn: string;
    }
    /**
     * Specifies what data to collect and how often or when to collect it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-collectionscheme.html
     */
    interface CollectionSchemeProperty {
        /**
         * (Optional) Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-collectionscheme.html#cfn-iotfleetwise-campaign-collectionscheme-conditionbasedcollectionscheme
         */
        readonly conditionBasedCollectionScheme?: CfnCampaign.ConditionBasedCollectionSchemeProperty | cdk.IResolvable;
        /**
         * (Optional) Information about a collection scheme that uses a time period to decide how often to collect data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-collectionscheme.html#cfn-iotfleetwise-campaign-collectionscheme-timebasedcollectionscheme
         */
        readonly timeBasedCollectionScheme?: cdk.IResolvable | CfnCampaign.TimeBasedCollectionSchemeProperty;
    }
    /**
     * Information about a collection scheme that uses a time period to decide how often to collect data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timebasedcollectionscheme.html
     */
    interface TimeBasedCollectionSchemeProperty {
        /**
         * The time period (in milliseconds) to decide how often to collect data.
         *
         * For example, if the time period is `60000` , the Edge Agent software collects data once every minute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timebasedcollectionscheme.html#cfn-iotfleetwise-campaign-timebasedcollectionscheme-periodms
         */
        readonly periodMs: number;
    }
    /**
     * Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html
     */
    interface ConditionBasedCollectionSchemeProperty {
        /**
         * (Optional) Specifies the version of the conditional expression language.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-conditionlanguageversion
         */
        readonly conditionLanguageVersion?: number;
        /**
         * The logical expression used to recognize what data to collect.
         *
         * For example, `$variable.Vehicle.OutsideAirTemperature >= 105.0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-expression
         */
        readonly expression: string;
        /**
         * (Optional) The minimum duration of time between two triggering events to collect data, in milliseconds.
         *
         * > If a signal changes often, you might want to collect data at a slower rate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-minimumtriggerintervalms
         */
        readonly minimumTriggerIntervalMs?: number;
        /**
         * (Optional) Whether to collect data for all triggering events ( `ALWAYS` ).
         *
         * Specify ( `RISING_EDGE` ), or specify only when the condition first evaluates to false. For example, triggering on "AirbagDeployed"; Users aren't interested on triggering when the airbag is already exploded; they only care about the change from not deployed => deployed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-triggermode
         */
        readonly triggerMode?: string;
    }
}
/**
 * Properties for defining a `CfnCampaign`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html
 */
export interface CfnCampaignProps {
    /**
     * Specifies how to update a campaign. The action can be one of the following:.
     *
     * - `APPROVE` - To approve delivering a data collection scheme to vehicles.
     * - `SUSPEND` - To suspend collecting signal data. The campaign is deleted from vehicles and all vehicles in the suspended campaign will stop sending data.
     * - `RESUME` - To reactivate the `SUSPEND` campaign. The campaign is redeployed to all vehicles and the vehicles will resume sending data.
     * - `UPDATE` - To update a campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-action
     */
    readonly action: string;
    /**
     * The data collection scheme associated with the campaign.
     *
     * You can specify a scheme that collects data based on time or an event.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-collectionscheme
     */
    readonly collectionScheme: CfnCampaign.CollectionSchemeProperty | cdk.IResolvable;
    /**
     * (Optional) Whether to compress signals before transmitting data to AWS IoT FleetWise .
     *
     * If you don't want to compress the signals, use `OFF` . If it's not specified, `SNAPPY` is used.
     *
     * Default: `SNAPPY`
     *
     * @default - "OFF"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-compression
     */
    readonly compression?: string;
    /**
     * (Optional) The destination where the campaign sends data.
     *
     * You can choose to send data to be stored in Amazon S3 or Amazon Timestream .
     *
     * Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. AWS IoT FleetWise supports at-least-once file delivery to S3. Your vehicle data is stored on multiple AWS IoT FleetWise servers for redundancy and high availability.
     *
     * You can use Amazon Timestream to access and analyze time series data, and Timestream to query vehicle data so that you can identify trends and patterns.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datadestinationconfigs
     */
    readonly dataDestinationConfigs?: Array<CfnCampaign.DataDestinationConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * (Optional) A list of vehicle attributes to associate with a campaign.
     *
     * Enrich the data with specified vehicle attributes. For example, add `make` and `model` to the campaign, and AWS IoT FleetWise will associate the data with those attributes as dimensions in Amazon Timestream . You can then query the data against `make` and `model` .
     *
     * Default: An empty array
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-dataextradimensions
     */
    readonly dataExtraDimensions?: Array<string>;
    /**
     * (Optional) The description of the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-description
     */
    readonly description?: string;
    /**
     * (Optional) Option for a vehicle to send diagnostic trouble codes to AWS IoT FleetWise .
     *
     * If you want to send diagnostic trouble codes, use `SEND_ACTIVE_DTCS` . If it's not specified, `OFF` is used.
     *
     * Default: `OFF`
     *
     * @default - "OFF"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-diagnosticsmode
     */
    readonly diagnosticsMode?: string;
    /**
     * (Optional) The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * Vehicle data isn't collected after the campaign expires.
     *
     * Default: 253402214400 (December 31, 9999, 00:00:00 UTC)
     *
     * @default - "253402214400"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-expirytime
     */
    readonly expiryTime?: string;
    /**
     * The name of a campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-name
     */
    readonly name: string;
    /**
     * (Optional) How long (in milliseconds) to collect raw data after a triggering event initiates the collection.
     *
     * If it's not specified, `0` is used.
     *
     * Default: `0`
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-posttriggercollectionduration
     */
    readonly postTriggerCollectionDuration?: number;
    /**
     * (Optional) A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet.
     *
     * A campaign with the lowest value is deployed to vehicles before any other campaigns. If it's not specified, `0` is used.
     *
     * Default: `0`
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-priority
     */
    readonly priority?: number;
    /**
     * The Amazon Resource Name (ARN) of the signal catalog associated with the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalcatalogarn
     */
    readonly signalCatalogArn: string;
    /**
     * (Optional) A list of information about signals to collect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalstocollect
     */
    readonly signalsToCollect?: Array<cdk.IResolvable | CfnCampaign.SignalInformationProperty> | cdk.IResolvable;
    /**
     * (Optional) Whether to store collected data after a vehicle lost a connection with the cloud.
     *
     * After a connection is re-established, the data is automatically forwarded to AWS IoT FleetWise . If you want to store collected data when a vehicle loses connection with the cloud, use `TO_DISK` . If it's not specified, `OFF` is used.
     *
     * Default: `OFF`
     *
     * @default - "OFF"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-spoolingmode
     */
    readonly spoolingMode?: string;
    /**
     * (Optional) The time, in milliseconds, to deliver a campaign after it was approved.
     *
     * If it's not specified, `0` is used.
     *
     * Default: `0`
     *
     * @default - "0"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-starttime
     */
    readonly startTime?: string;
    /**
     * (Optional) Metadata that can be used to manage the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of a vehicle or fleet to which the campaign is deployed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-targetarn
     */
    readonly targetArn: string;
}
/**
 * Creates the decoder manifest associated with a model manifest. To create a decoder manifest, the following must be true:.
 *
 * - Every signal decoder has a unique name.
 * - Each signal decoder is associated with a network interface.
 * - Each network interface has a unique ID.
 * - The signal decoders are specified in the model manifest.
 *
 * @cloudformationResource AWS::IoTFleetWise::DecoderManifest
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html
 */
export declare class CfnDecoderManifest extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDecoderManifest from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDecoderManifest;
    /**
     * The Amazon Resource Name (ARN) of the decoder manifest.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute LastModificationTime
     */
    readonly attrLastModificationTime: string;
    /**
     * (Optional) A brief description of the decoder manifest.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with the decoder manifest.
     */
    modelManifestArn: string;
    /**
     * The name of the decoder manifest.
     */
    name: string;
    /**
     * (Optional) A list of information about available network interfaces.
     */
    networkInterfaces?: Array<cdk.IResolvable | CfnDecoderManifest.NetworkInterfacesItemsProperty> | cdk.IResolvable;
    /**
     * (Optional) A list of information about signal decoders.
     */
    signalDecoders?: Array<cdk.IResolvable | CfnDecoderManifest.SignalDecodersItemsProperty> | cdk.IResolvable;
    /**
     * (Optional) The state of the decoder manifest.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * (Optional) Metadata that can be used to manage the decoder manifest.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDecoderManifestProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDecoderManifest {
    /**
     * Information about signal decoder using the Controller Area Network (CAN) protocol.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignaldecoder.html
     */
    interface CanSignalDecoderProperty {
        /**
         * Information about a single controller area network (CAN) signal and the messages it receives and transmits.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignaldecoder.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-cansignal
         */
        readonly canSignal: CfnDecoderManifest.CanSignalProperty | cdk.IResolvable;
        /**
         * The fully qualified name of a signal decoder as defined in a vehicle model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignaldecoder.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-fullyqualifiedname
         */
        readonly fullyQualifiedName: string;
        /**
         * The ID of a network interface that specifies what network protocol a vehicle follows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignaldecoder.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-interfaceid
         */
        readonly interfaceId: string;
        /**
         * The network protocol for the vehicle.
         *
         * For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignaldecoder.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-type
         */
        readonly type: string;
    }
    /**
     * (Optional) Information about a single controller area network (CAN) signal and the messages it receives and transmits.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html
     */
    interface CanSignalProperty {
        /**
         * A multiplier used to decode the CAN message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-factor
         */
        readonly factor: string;
        /**
         * Whether the byte ordering of a CAN message is big-endian.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-isbigendian
         */
        readonly isBigEndian: string;
        /**
         * Whether the message data is specified as a signed value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-issigned
         */
        readonly isSigned: string;
        /**
         * How many bytes of data are in the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-length
         */
        readonly length: string;
        /**
         * The ID of the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-messageid
         */
        readonly messageId: string;
        /**
         * (Optional) The name of the signal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-name
         */
        readonly name?: string;
        /**
         * The offset used to calculate the signal value.
         *
         * Combined with factor, the calculation is `value = raw_value * factor + offset` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-offset
         */
        readonly offset: string;
        /**
         * Indicates the beginning of the CAN message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html#cfn-iotfleetwise-decodermanifest-cansignal-startbit
         */
        readonly startBit: string;
    }
    /**
     * A list of information about signal decoders.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignaldecoder.html
     */
    interface ObdSignalDecoderProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignaldecoder.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-fullyqualifiedname
         */
        readonly fullyQualifiedName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignaldecoder.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-interfaceid
         */
        readonly interfaceId: string;
        /**
         * Information about signal messages using the on-board diagnostics (OBD) II protocol in a vehicle.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignaldecoder.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-obdsignal
         */
        readonly obdSignal: cdk.IResolvable | CfnDecoderManifest.ObdSignalProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignaldecoder.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-type
         */
        readonly type: string;
    }
    /**
     * Information about signal messages using the on-board diagnostics (OBD) II protocol in a vehicle.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html
     */
    interface ObdSignalProperty {
        /**
         * (Optional) The number of bits to mask in a message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-bitmasklength
         */
        readonly bitMaskLength?: string;
        /**
         * (Optional) The number of positions to shift bits in the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-bitrightshift
         */
        readonly bitRightShift?: string;
        /**
         * The length of a message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-bytelength
         */
        readonly byteLength: string;
        /**
         * The offset used to calculate the signal value.
         *
         * Combined with scaling, the calculation is `value = raw_value * scaling + offset` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-offset
         */
        readonly offset: string;
        /**
         * The diagnostic code used to request data from a vehicle for this signal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-pid
         */
        readonly pid: string;
        /**
         * The length of the requested data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-pidresponselength
         */
        readonly pidResponseLength: string;
        /**
         * A multiplier used to decode the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-scaling
         */
        readonly scaling: string;
        /**
         * The mode of operation (diagnostic service) in a message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-servicemode
         */
        readonly serviceMode: string;
        /**
         * Indicates the beginning of the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html#cfn-iotfleetwise-decodermanifest-obdsignal-startbyte
         */
        readonly startByte: string;
    }
    /**
     * Information about a signal decoder.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html
     */
    interface SignalDecodersItemsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html#cfn-iotfleetwise-decodermanifest-signaldecodersitems-cansignal
         */
        readonly canSignal?: CfnDecoderManifest.CanSignalProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html#cfn-iotfleetwise-decodermanifest-signaldecodersitems-fullyqualifiedname
         */
        readonly fullyQualifiedName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html#cfn-iotfleetwise-decodermanifest-signaldecodersitems-interfaceid
         */
        readonly interfaceId: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html#cfn-iotfleetwise-decodermanifest-signaldecodersitems-obdsignal
         */
        readonly obdSignal?: cdk.IResolvable | CfnDecoderManifest.ObdSignalProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html#cfn-iotfleetwise-decodermanifest-signaldecodersitems-type
         */
        readonly type: string;
    }
    /**
     * Represents a node and its specifications in an in-vehicle communication network.
     *
     * All signal decoders must be associated with a network node.
     *
     * To return this information about all the network interfaces specified in a decoder manifest, use the [ListDecoderManifestNetworkInterfaces](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifestNetworkInterfaces.html) in the *AWS IoT FleetWise API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cannetworkinterface.html
     */
    interface CanNetworkInterfaceProperty {
        /**
         * Information about a network interface specified by the Controller Area Network (CAN) protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cannetworkinterface.html#cfn-iotfleetwise-decodermanifest-cannetworkinterface-caninterface
         */
        readonly canInterface: CfnDecoderManifest.CanInterfaceProperty | cdk.IResolvable;
        /**
         * The ID of the network interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cannetworkinterface.html#cfn-iotfleetwise-decodermanifest-cannetworkinterface-interfaceid
         */
        readonly interfaceId: string;
        /**
         * The network protocol for the vehicle.
         *
         * For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cannetworkinterface.html#cfn-iotfleetwise-decodermanifest-cannetworkinterface-type
         */
        readonly type: string;
    }
    /**
     * A single controller area network (CAN) device interface.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-caninterface.html
     */
    interface CanInterfaceProperty {
        /**
         * The unique name of the interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-caninterface.html#cfn-iotfleetwise-decodermanifest-caninterface-name
         */
        readonly name: string;
        /**
         * (Optional) The name of the communication protocol for the interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-caninterface.html#cfn-iotfleetwise-decodermanifest-caninterface-protocolname
         */
        readonly protocolName?: string;
        /**
         * (Optional) The version of the communication protocol for the interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-caninterface.html#cfn-iotfleetwise-decodermanifest-caninterface-protocolversion
         */
        readonly protocolVersion?: string;
    }
    /**
     * Information about a network interface specified by the On-board diagnostic (OBD) II protocol.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdnetworkinterface.html
     */
    interface ObdNetworkInterfaceProperty {
        /**
         * The ID of the network interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdnetworkinterface.html#cfn-iotfleetwise-decodermanifest-obdnetworkinterface-interfaceid
         */
        readonly interfaceId: string;
        /**
         * (Optional) Information about a network interface specified by the On-board diagnostic (OBD) II protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdnetworkinterface.html#cfn-iotfleetwise-decodermanifest-obdnetworkinterface-obdinterface
         */
        readonly obdInterface: cdk.IResolvable | CfnDecoderManifest.ObdInterfaceProperty;
        /**
         * The network protocol for the vehicle.
         *
         * For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdnetworkinterface.html#cfn-iotfleetwise-decodermanifest-obdnetworkinterface-type
         */
        readonly type: string;
    }
    /**
     * A network interface that specifies the On-board diagnostic (OBD) II network protocol.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html
     */
    interface ObdInterfaceProperty {
        /**
         * (Optional) The maximum number message requests per diagnostic trouble code per second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html#cfn-iotfleetwise-decodermanifest-obdinterface-dtcrequestintervalseconds
         */
        readonly dtcRequestIntervalSeconds?: string;
        /**
         * (Optional) Whether the vehicle has a transmission control module (TCM).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html#cfn-iotfleetwise-decodermanifest-obdinterface-hastransmissionecu
         */
        readonly hasTransmissionEcu?: string;
        /**
         * The name of the interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html#cfn-iotfleetwise-decodermanifest-obdinterface-name
         */
        readonly name: string;
        /**
         * (Optional) The standard OBD II PID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html#cfn-iotfleetwise-decodermanifest-obdinterface-obdstandard
         */
        readonly obdStandard?: string;
        /**
         * (Optional) The maximum number message requests per second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html#cfn-iotfleetwise-decodermanifest-obdinterface-pidrequestintervalseconds
         */
        readonly pidRequestIntervalSeconds?: string;
        /**
         * The ID of the message requesting vehicle data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html#cfn-iotfleetwise-decodermanifest-obdinterface-requestmessageid
         */
        readonly requestMessageId: string;
        /**
         * (Optional) Whether to use extended IDs in the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html#cfn-iotfleetwise-decodermanifest-obdinterface-useextendedids
         */
        readonly useExtendedIds?: string;
    }
    /**
     * (Optional) A list of information about available network interfaces.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-networkinterfacesitems.html
     */
    interface NetworkInterfacesItemsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-networkinterfacesitems.html#cfn-iotfleetwise-decodermanifest-networkinterfacesitems-caninterface
         */
        readonly canInterface?: CfnDecoderManifest.CanInterfaceProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-networkinterfacesitems.html#cfn-iotfleetwise-decodermanifest-networkinterfacesitems-interfaceid
         */
        readonly interfaceId: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-networkinterfacesitems.html#cfn-iotfleetwise-decodermanifest-networkinterfacesitems-obdinterface
         */
        readonly obdInterface?: cdk.IResolvable | CfnDecoderManifest.ObdInterfaceProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-networkinterfacesitems.html#cfn-iotfleetwise-decodermanifest-networkinterfacesitems-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnDecoderManifest`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html
 */
export interface CfnDecoderManifestProps {
    /**
     * (Optional) A brief description of the decoder manifest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with the decoder manifest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-modelmanifestarn
     */
    readonly modelManifestArn: string;
    /**
     * The name of the decoder manifest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-name
     */
    readonly name: string;
    /**
     * (Optional) A list of information about available network interfaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-networkinterfaces
     */
    readonly networkInterfaces?: Array<cdk.IResolvable | CfnDecoderManifest.NetworkInterfacesItemsProperty> | cdk.IResolvable;
    /**
     * (Optional) A list of information about signal decoders.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-signaldecoders
     */
    readonly signalDecoders?: Array<cdk.IResolvable | CfnDecoderManifest.SignalDecodersItemsProperty> | cdk.IResolvable;
    /**
     * (Optional) The state of the decoder manifest.
     *
     * If the status is `ACTIVE` , the decoder manifest can't be edited. If the status is marked `DRAFT` , you can edit the decoder manifest.
     *
     * @default - "DRAFT"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-status
     */
    readonly status?: string;
    /**
     * (Optional) Metadata that can be used to manage the decoder manifest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a fleet that represents a group of vehicles.
 *
 * > You must create both a signal catalog and vehicles before you can create a fleet.
 *
 * For more information, see [Fleets](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleets.html) in the *AWS IoT FleetWise Developer Guide* .
 *
 * @cloudformationResource AWS::IoTFleetWise::Fleet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html
 */
export declare class CfnFleet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFleet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFleet;
    /**
     * The Amazon Resource Name (ARN) of the created fleet.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the fleet was created in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The time the fleet was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute LastModificationTime
     */
    readonly attrLastModificationTime: string;
    /**
     * (Optional) A brief description of the fleet.
     */
    description?: string;
    /**
     * The unique ID of the fleet.
     */
    id: string;
    /**
     * The ARN of the signal catalog associated with the fleet.
     */
    signalCatalogArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * (Optional) Metadata that can be used to manage the fleet.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFleetProps);
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
 * Properties for defining a `CfnFleet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html
 */
export interface CfnFleetProps {
    /**
     * (Optional) A brief description of the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html#cfn-iotfleetwise-fleet-description
     */
    readonly description?: string;
    /**
     * The unique ID of the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html#cfn-iotfleetwise-fleet-id
     */
    readonly id: string;
    /**
     * The ARN of the signal catalog associated with the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html#cfn-iotfleetwise-fleet-signalcatalogarn
     */
    readonly signalCatalogArn: string;
    /**
     * (Optional) Metadata that can be used to manage the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html#cfn-iotfleetwise-fleet-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators).
 *
 * For more information, see [Vehicle models](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html) in the *AWS IoT FleetWise Developer Guide* .
 *
 * @cloudformationResource AWS::IoTFleetWise::ModelManifest
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html
 */
export declare class CfnModelManifest extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModelManifest from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModelManifest;
    /**
     * The Amazon Resource Name (ARN) of the vehicle model.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the vehicle model was created, in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The time the vehicle model was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute LastModificationTime
     */
    readonly attrLastModificationTime: string;
    /**
     * (Optional) A brief description of the vehicle model.
     */
    description?: string;
    /**
     * The name of the vehicle model.
     */
    name: string;
    /**
     * (Optional) A list of nodes, which are a general abstraction of signals.
     */
    nodes?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the signal catalog associated with the vehicle model.
     */
    signalCatalogArn: string;
    /**
     * (Optional) The state of the vehicle model.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * (Optional) Metadata that can be used to manage the vehicle model.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnModelManifestProps);
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
 * Properties for defining a `CfnModelManifest`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html
 */
export interface CfnModelManifestProps {
    /**
     * (Optional) A brief description of the vehicle model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-description
     */
    readonly description?: string;
    /**
     * The name of the vehicle model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-name
     */
    readonly name: string;
    /**
     * (Optional) A list of nodes, which are a general abstraction of signals.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-nodes
     */
    readonly nodes?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the signal catalog associated with the vehicle model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-signalcatalogarn
     */
    readonly signalCatalogArn: string;
    /**
     * (Optional) The state of the vehicle model.
     *
     * If the status is `ACTIVE` , the vehicle model can't be edited. If the status is `DRAFT` , you can edit the vehicle model.
     *
     * @default - "DRAFT"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-status
     */
    readonly status?: string;
    /**
     * (Optional) Metadata that can be used to manage the vehicle model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a collection of standardized signals that can be reused to create vehicle models.
 *
 * @cloudformationResource AWS::IoTFleetWise::SignalCatalog
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html
 */
export declare class CfnSignalCatalog extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSignalCatalog from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSignalCatalog;
    /**
     * The Amazon Resource Name (ARN) of the signal catalog.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The time the signal catalog was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute LastModificationTime
     */
    readonly attrLastModificationTime: string;
    /**
     * The total number of nodes in a vehicle network that represent actuators.
     *
     * @cloudformationAttribute NodeCounts.TotalActuators
     */
    readonly attrNodeCountsTotalActuators: cdk.IResolvable;
    /**
     * The total number of nodes in a vehicle network that represent attributes.
     *
     * @cloudformationAttribute NodeCounts.TotalAttributes
     */
    readonly attrNodeCountsTotalAttributes: cdk.IResolvable;
    /**
     * The total number of nodes in a vehicle network that represent branches.
     *
     * @cloudformationAttribute NodeCounts.TotalBranches
     */
    readonly attrNodeCountsTotalBranches: cdk.IResolvable;
    /**
     * The total number of nodes in a vehicle network.
     *
     * @cloudformationAttribute NodeCounts.TotalNodes
     */
    readonly attrNodeCountsTotalNodes: cdk.IResolvable;
    /**
     * The total number of nodes in a vehicle network that represent sensors.
     *
     * @cloudformationAttribute NodeCounts.TotalSensors
     */
    readonly attrNodeCountsTotalSensors: cdk.IResolvable;
    /**
     * (Optional) A brief description of the signal catalog.
     */
    description?: string;
    /**
     * (Optional) The name of the signal catalog.
     */
    name?: string;
    /**
     * (Optional) Information about the number of nodes and node types in a vehicle network.
     */
    nodeCounts?: cdk.IResolvable | CfnSignalCatalog.NodeCountsProperty;
    /**
     * (Optional) A list of information about nodes, which are a general abstraction of signals.
     */
    nodes?: Array<cdk.IResolvable | CfnSignalCatalog.NodeProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * (Optional) Metadata that can be used to manage the signal catalog.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSignalCatalogProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSignalCatalog {
    /**
     * Information about the number of nodes and node types in a vehicle network.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html
     */
    interface NodeCountsProperty {
        /**
         * (Optional) The total number of nodes in a vehicle network that represent actuators.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html#cfn-iotfleetwise-signalcatalog-nodecounts-totalactuators
         */
        readonly totalActuators?: number;
        /**
         * (Optional) The total number of nodes in a vehicle network that represent attributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html#cfn-iotfleetwise-signalcatalog-nodecounts-totalattributes
         */
        readonly totalAttributes?: number;
        /**
         * (Optional) The total number of nodes in a vehicle network that represent branches.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html#cfn-iotfleetwise-signalcatalog-nodecounts-totalbranches
         */
        readonly totalBranches?: number;
        /**
         * (Optional) The total number of nodes in a vehicle network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html#cfn-iotfleetwise-signalcatalog-nodecounts-totalnodes
         */
        readonly totalNodes?: number;
        /**
         * (Optional) The total number of nodes in a vehicle network that represent sensors.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html#cfn-iotfleetwise-signalcatalog-nodecounts-totalsensors
         */
        readonly totalSensors?: number;
    }
    /**
     * A general abstraction of a signal.
     *
     * A node can be specified as an actuator, attribute, branch, or sensor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html
     */
    interface NodeProperty {
        /**
         * (Optional) Information about a node specified as an actuator.
         *
         * > An actuator is a digital representation of a vehicle device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html#cfn-iotfleetwise-signalcatalog-node-actuator
         */
        readonly actuator?: CfnSignalCatalog.ActuatorProperty | cdk.IResolvable;
        /**
         * (Optional) Information about a node specified as an attribute.
         *
         * > An attribute represents static information about a vehicle.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html#cfn-iotfleetwise-signalcatalog-node-attribute
         */
        readonly attribute?: CfnSignalCatalog.AttributeProperty | cdk.IResolvable;
        /**
         * (Optional) Information about a node specified as a branch.
         *
         * > A group of signals that are defined in a hierarchical structure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html#cfn-iotfleetwise-signalcatalog-node-branch
         */
        readonly branch?: CfnSignalCatalog.BranchProperty | cdk.IResolvable;
        /**
         * (Optional) An input component that reports the environmental condition of a vehicle.
         *
         * > You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html#cfn-iotfleetwise-signalcatalog-node-sensor
         */
        readonly sensor?: cdk.IResolvable | CfnSignalCatalog.SensorProperty;
    }
    /**
     * A signal that represents static information about the vehicle, such as engine type or manufacturing date.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html
     */
    interface AttributeProperty {
        /**
         * (Optional) A list of possible values an attribute can be assigned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-allowedvalues
         */
        readonly allowedValues?: Array<string>;
        /**
         * (Optional) A specified value for the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-assignedvalue
         */
        readonly assignedValue?: string;
        /**
         * The specified data type of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-datatype
         */
        readonly dataType: string;
        /**
         * (Optional) The default value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * (Optional) A brief description of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-description
         */
        readonly description?: string;
        /**
         * The fully qualified name of the attribute.
         *
         * For example, the fully qualified name of an attribute might be `Vehicle.Body.Engine.Type` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-fullyqualifiedname
         */
        readonly fullyQualifiedName: string;
        /**
         * (Optional) The specified possible maximum value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-max
         */
        readonly max?: number;
        /**
         * (Optional) The specified possible minimum value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-min
         */
        readonly min?: number;
        /**
         * (Optional) The scientific unit for the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html#cfn-iotfleetwise-signalcatalog-attribute-unit
         */
        readonly unit?: string;
    }
    /**
     * A group of signals that are defined in a hierarchical structure.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-branch.html
     */
    interface BranchProperty {
        /**
         * (Optional) A brief description of the branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-branch.html#cfn-iotfleetwise-signalcatalog-branch-description
         */
        readonly description?: string;
        /**
         * The fully qualified name of the branch.
         *
         * For example, the fully qualified name of a branch might be `Vehicle.Body.Engine` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-branch.html#cfn-iotfleetwise-signalcatalog-branch-fullyqualifiedname
         */
        readonly fullyQualifiedName: string;
    }
    /**
     * An input component that reports the environmental condition of a vehicle.
     *
     * > You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html
     */
    interface SensorProperty {
        /**
         * (Optional) A list of possible values a sensor can take.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html#cfn-iotfleetwise-signalcatalog-sensor-allowedvalues
         */
        readonly allowedValues?: Array<string>;
        /**
         * The specified data type of the sensor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html#cfn-iotfleetwise-signalcatalog-sensor-datatype
         */
        readonly dataType: string;
        /**
         * (Optional) A brief description of a sensor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html#cfn-iotfleetwise-signalcatalog-sensor-description
         */
        readonly description?: string;
        /**
         * The fully qualified name of the sensor.
         *
         * For example, the fully qualified name of a sensor might be `Vehicle.Body.Engine.Battery` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html#cfn-iotfleetwise-signalcatalog-sensor-fullyqualifiedname
         */
        readonly fullyQualifiedName: string;
        /**
         * (Optional) The specified possible maximum value of the sensor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html#cfn-iotfleetwise-signalcatalog-sensor-max
         */
        readonly max?: number;
        /**
         * (Optional) The specified possible minimum value of the sensor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html#cfn-iotfleetwise-signalcatalog-sensor-min
         */
        readonly min?: number;
        /**
         * (Optional) The scientific unit of measurement for data collected by the sensor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html#cfn-iotfleetwise-signalcatalog-sensor-unit
         */
        readonly unit?: string;
    }
    /**
     * A signal that represents a vehicle device such as the engine, heater, and door locks.
     *
     * Data from an actuator reports the state of a certain vehicle device.
     *
     * > Updating actuator data can change the state of a device. For example, you can turn on or off the heater by updating its actuator data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html
     */
    interface ActuatorProperty {
        /**
         * (Optional) A list of possible values an actuator can take.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-allowedvalues
         */
        readonly allowedValues?: Array<string>;
        /**
         * (Optional) A specified value for the actuator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-assignedvalue
         */
        readonly assignedValue?: string;
        /**
         * The specified data type of the actuator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-datatype
         */
        readonly dataType: string;
        /**
         * (Optional) A brief description of the actuator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-description
         */
        readonly description?: string;
        /**
         * The fully qualified name of the actuator.
         *
         * For example, the fully qualified name of an actuator might be `Vehicle.Front.Left.Door.Lock` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-fullyqualifiedname
         */
        readonly fullyQualifiedName: string;
        /**
         * (Optional) The specified possible maximum value of an actuator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-max
         */
        readonly max?: number;
        /**
         * (Optional) The specified possible minimum value of an actuator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-min
         */
        readonly min?: number;
        /**
         * (Optional) The scientific unit for the actuator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html#cfn-iotfleetwise-signalcatalog-actuator-unit
         */
        readonly unit?: string;
    }
}
/**
 * Properties for defining a `CfnSignalCatalog`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html
 */
export interface CfnSignalCatalogProps {
    /**
     * (Optional) A brief description of the signal catalog.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html#cfn-iotfleetwise-signalcatalog-description
     */
    readonly description?: string;
    /**
     * (Optional) The name of the signal catalog.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html#cfn-iotfleetwise-signalcatalog-name
     */
    readonly name?: string;
    /**
     * (Optional) Information about the number of nodes and node types in a vehicle network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html#cfn-iotfleetwise-signalcatalog-nodecounts
     */
    readonly nodeCounts?: cdk.IResolvable | CfnSignalCatalog.NodeCountsProperty;
    /**
     * (Optional) A list of information about nodes, which are a general abstraction of signals.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html#cfn-iotfleetwise-signalcatalog-nodes
     */
    readonly nodes?: Array<cdk.IResolvable | CfnSignalCatalog.NodeProperty> | cdk.IResolvable;
    /**
     * (Optional) Metadata that can be used to manage the signal catalog.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html#cfn-iotfleetwise-signalcatalog-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a vehicle, which is an instance of a vehicle model (model manifest).
 *
 * Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model.
 *
 * > If you have an existing AWS IoT thing, you can use AWS IoT FleetWise to create a vehicle and collect data from your thing.
 *
 * For more information, see [Create a vehicle (console)](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-console.html) in the *AWS IoT FleetWise Developer Guide* .
 *
 * @cloudformationResource AWS::IoTFleetWise::Vehicle
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html
 */
export declare class CfnVehicle extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVehicle from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVehicle;
    /**
     * The Amazon Resource Name (ARN) of the vehicle.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
     *
     * @cloudformationAttribute LastModificationTime
     */
    readonly attrLastModificationTime: string;
    /**
     * (Optional) An option to create a new AWS IoT thing when creating a vehicle, or to validate an existing thing as a vehicle.
     */
    associationBehavior?: string;
    /**
     * (Optional) Static information about a vehicle in a key-value pair.
     */
    attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
     */
    decoderManifestArn: string;
    /**
     * The Amazon Resource Name (ARN) of the vehicle model (model manifest) to create the vehicle from.
     */
    modelManifestArn: string;
    /**
     * The unique ID of the vehicle.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * (Optional) Metadata which can be used to manage the vehicle.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVehicleProps);
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
 * Properties for defining a `CfnVehicle`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html
 */
export interface CfnVehicleProps {
    /**
     * (Optional) An option to create a new AWS IoT thing when creating a vehicle, or to validate an existing thing as a vehicle.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-associationbehavior
     */
    readonly associationBehavior?: string;
    /**
     * (Optional) Static information about a vehicle in a key-value pair.
     *
     * For example: `"engine Type"` : `"v6"`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-attributes
     */
    readonly attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-decodermanifestarn
     */
    readonly decoderManifestArn: string;
    /**
     * The Amazon Resource Name (ARN) of the vehicle model (model manifest) to create the vehicle from.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-modelmanifestarn
     */
    readonly modelManifestArn: string;
    /**
     * The unique ID of the vehicle.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-name
     */
    readonly name: string;
    /**
     * (Optional) Metadata which can be used to manage the vehicle.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}