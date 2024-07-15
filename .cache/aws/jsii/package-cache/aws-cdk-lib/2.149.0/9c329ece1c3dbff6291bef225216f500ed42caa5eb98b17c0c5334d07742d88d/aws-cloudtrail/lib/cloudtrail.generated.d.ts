import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Contains information about a returned CloudTrail channel.
 *
 * @cloudformationResource AWS::CloudTrail::Channel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html
 */
export declare class CfnChannel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannel;
    /**
     * `Ref` returns the ARN of the CloudTrail channel, such as `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890` .
     *
     * @cloudformationAttribute ChannelArn
     */
    readonly attrChannelArn: string;
    /**
     * One or more event data stores to which events arriving through a channel will be logged.
     */
    destinations?: Array<CfnChannel.DestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the channel.
     */
    name?: string;
    /**
     * The name of the partner or external event source.
     */
    source?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnChannelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnChannel {
    /**
     * Contains information about the destination receiving events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html
     */
    interface DestinationProperty {
        /**
         * For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel.
         *
         * For service-linked channels, the location is the name of the AWS service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html#cfn-cloudtrail-channel-destination-location
         */
        readonly location: string;
        /**
         * The type of destination for events arriving from a channel.
         *
         * For channels used for a CloudTrail Lake integration, the value is `EVENT_DATA_STORE` . For service-linked channels, the value is `AWS_SERVICE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html#cfn-cloudtrail-channel-destination-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html
 */
export interface CfnChannelProps {
    /**
     * One or more event data stores to which events arriving through a channel will be logged.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-destinations
     */
    readonly destinations?: Array<CfnChannel.DestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-name
     */
    readonly name?: string;
    /**
     * The name of the partner or external event source.
     *
     * You cannot change this name after you create the channel. A maximum of one channel is allowed per source.
     *
     * A source can be either `Custom` for all valid non- AWS events, or the name of a partner event source. For information about the source names for available partners, see [Additional information about integration partners](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information) in the CloudTrail User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-source
     */
    readonly source?: string;
    /**
     * A list of tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new event data store.
 *
 * @cloudformationResource AWS::CloudTrail::EventDataStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html
 */
export declare class CfnEventDataStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventDataStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventDataStore;
    /**
     * `Ref` returns the time stamp of the creation of the event data store, such as `1248496624` .
     *
     * @cloudformationAttribute CreatedTimestamp
     */
    readonly attrCreatedTimestamp: string;
    /**
     * `Ref` returns the ARN of the CloudTrail event data store, such as `arn:aws:cloudtrail:us-east-1:12345678910:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE` .
     *
     * @cloudformationAttribute EventDataStoreArn
     */
    readonly attrEventDataStoreArn: string;
    /**
     * `Ref` returns the status of the event data store, such as `ENABLED` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * `Ref` returns the time stamp that updates were made to an event data store, such as `1598296624` .
     *
     * @cloudformationAttribute UpdatedTimestamp
     */
    readonly attrUpdatedTimestamp: string;
    /**
     * The advanced event selectors to use to select the events for the data store.
     */
    advancedEventSelectors?: Array<CfnEventDataStore.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.
     */
    billingMode?: string;
    /**
     * Indicates if [Lake query federation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html) is enabled. By default, Lake query federation is disabled. You cannot delete an event data store if Lake query federation is enabled.
     */
    federationEnabled?: boolean | cdk.IResolvable;
    /**
     * If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
     */
    federationRoleArn?: string;
    /**
     * Specifies whether the event data store should start ingesting live events.
     */
    ingestionEnabled?: boolean | cdk.IResolvable;
    /**
     * The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events.
     */
    insightsDestination?: string;
    /**
     * A JSON string that contains the Insights types you want to log on an event data store.
     */
    insightSelectors?: Array<CfnEventDataStore.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail.
     */
    kmsKeyId?: string;
    /**
     * Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created.
     */
    multiRegionEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the event data store.
     */
    name?: string;
    /**
     * Specifies whether an event data store collects events logged for an organization in AWS Organizations .
     */
    organizationEnabled?: boolean | cdk.IResolvable;
    /**
     * The retention period of the event data store, in days.
     */
    retentionPeriod?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies whether termination protection is enabled for the event data store.
     */
    terminationProtectionEnabled?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnEventDataStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventDataStore {
    /**
     * Advanced event selectors let you create fine-grained selectors for CloudTrail management and data events.
     *
     * They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) and [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) in the *AWS CloudTrail User Guide* .
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * *Supported CloudTrail event record fields for management events*
     *
     * - `eventCategory` (required)
     * - `eventSource`
     * - `readOnly`
     *
     * *Supported CloudTrail event record fields for data events*
     *
     * - `eventCategory` (required)
     * - `resources.type` (required)
     * - `readOnly`
     * - `eventName`
     * - `resources.ARN`
     *
     * > For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html
     */
    interface AdvancedEventSelectorProperty {
        /**
         * Contains all selector statements in an advanced event selector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html#cfn-cloudtrail-eventdatastore-advancedeventselector-fieldselectors
         */
        readonly fieldSelectors: Array<CfnEventDataStore.AdvancedFieldSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html#cfn-cloudtrail-eventdatastore-advancedeventselector-name
         */
        readonly name?: string;
    }
    /**
     * A single selector statement in an advanced event selector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html
     */
    interface AdvancedFieldSelectorProperty {
        /**
         * An operator that includes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-endswith
         */
        readonly endsWith?: Array<string>;
        /**
         * An operator that includes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * This is the only valid operator that you can use with the `readOnly` , `eventCategory` , and `resources.type` fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-equals
         */
        readonly equalTo?: Array<string>;
        /**
         * A field in a CloudTrail event record on which to filter events to be logged.
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the field is used only for selecting events as filtering is not supported.
         *
         * For CloudTrail management events, supported fields include `readOnly` , `eventCategory` , and `eventSource` .
         *
         * For CloudTrail data events, supported fields include `readOnly` , `eventCategory` , `eventName` , `resources.type` , and `resources.ARN` .
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
         *
         * - *`readOnly`* - Optional. Can be set to `Equals` a value of `true` or `false` . If you do not add this field, CloudTrail logs both `read` and `write` events. A value of `true` logs only `read` events. A value of `false` logs only `write` events.
         * - *`eventSource`* - For filtering management events only. This can be set to `NotEquals` `kms.amazonaws.com` or `NotEquals` `rdsdata.amazonaws.com` .
         * - *`eventName`* - Can use any operator. You can use it to ﬁlter in or ﬁlter out any data event logged to CloudTrail, such as `PutBucket` or `GetSnapshotBlock` . You can have multiple values for this ﬁeld, separated by commas.
         * - *`eventCategory`* - This is required and must be set to `Equals` .
         *
         * - For CloudTrail management events, the value must be `Management` .
         * - For CloudTrail data events, the value must be `Data` .
         *
         * The following are used only for event data stores:
         *
         * - For CloudTrail Insights events, the value must be `Insight` .
         * - For AWS Config configuration items, the value must be `ConfigurationItem` .
         * - For Audit Manager evidence, the value must be `Evidence` .
         * - For non- AWS events, the value must be `ActivityAuditLog` .
         * - *`resources.type`* - This ﬁeld is required for CloudTrail data events. `resources.type` can only use the `Equals` operator, and the value can be one of the following:
         *
         * - `AWS::DynamoDB::Table`
         * - `AWS::Lambda::Function`
         * - `AWS::S3::Object`
         * - `AWS::AppConfig::Configuration`
         * - `AWS::B2BI::Transformer`
         * - `AWS::Bedrock::AgentAlias`
         * - `AWS::Bedrock::KnowledgeBase`
         * - `AWS::Cassandra::Table`
         * - `AWS::CloudFront::KeyValueStore`
         * - `AWS::CloudTrail::Channel`
         * - `AWS::CloudWatch::Metric`
         * - `AWS::CodeWhisperer::Customization`
         * - `AWS::CodeWhisperer::Profile`
         * - `AWS::Cognito::IdentityPool`
         * - `AWS::DynamoDB::Stream`
         * - `AWS::EC2::Snapshot`
         * - `AWS::EMRWAL::Workspace`
         * - `AWS::FinSpace::Environment`
         * - `AWS::Glue::Table`
         * - `AWS::GreengrassV2::ComponentVersion`
         * - `AWS::GreengrassV2::Deployment`
         * - `AWS::GuardDuty::Detector`
         * - `AWS::IoT::Certificate`
         * - `AWS::IoT::Thing`
         * - `AWS::IoTSiteWise::Asset`
         * - `AWS::IoTSiteWise::TimeSeries`
         * - `AWS::IoTTwinMaker::Entity`
         * - `AWS::IoTTwinMaker::Workspace`
         * - `AWS::KendraRanking::ExecutionPlan`
         * - `AWS::Kinesis::Stream`
         * - `AWS::Kinesis::StreamConsumer`
         * - `AWS::KinesisVideo::Stream`
         * - `AWS::MachineLearning::MlModel`
         * - `AWS::ManagedBlockchain::Network`
         * - `AWS::ManagedBlockchain::Node`
         * - `AWS::MedicalImaging::Datastore`
         * - `AWS::NeptuneGraph::Graph`
         * - `AWS::PCAConnectorAD::Connector`
         * - `AWS::PCAConnectorSCEP::Connector`
         * - `AWS::QApps:QApp`
         * - `AWS::QBusiness::Application`
         * - `AWS::QBusiness::DataSource`
         * - `AWS::QBusiness::Index`
         * - `AWS::QBusiness::WebExperience`
         * - `AWS::RDS::DBCluster`
         * - `AWS::S3::AccessPoint`
         * - `AWS::S3ObjectLambda::AccessPoint`
         * - `AWS::S3Outposts::Object`
         * - `AWS::SageMaker::Endpoint`
         * - `AWS::SageMaker::ExperimentTrialComponent`
         * - `AWS::SageMaker::FeatureGroup`
         * - `AWS::ServiceDiscovery::Namespace`
         * - `AWS::ServiceDiscovery::Service`
         * - `AWS::SCN::Instance`
         * - `AWS::SNS::PlatformEndpoint`
         * - `AWS::SNS::Topic`
         * - `AWS::SQS::Queue`
         * - `AWS::SSM::ManagedNode`
         * - `AWS::SSMMessages::ControlChannel`
         * - `AWS::StepFunctions::StateMachine`
         * - `AWS::SWF::Domain`
         * - `AWS::ThinClient::Device`
         * - `AWS::ThinClient::Environment`
         * - `AWS::Timestream::Database`
         * - `AWS::Timestream::Table`
         * - `AWS::VerifiedPermissions::PolicyStore`
         * - `AWS::XRay::Trace`
         *
         * You can have only one `resources.type` ﬁeld per selector. To log data events on more than one resource type, add another selector.
         * - *`resources.ARN`* - You can use any operator with `resources.ARN` , but if you use `Equals` or `NotEquals` , the value must exactly match the ARN of a valid resource of the type you've speciﬁed in the template as the value of resources.type.
         *
         * > You can't use the `resources.ARN` field to filter resource types that do not have ARNs.
         *
         * The `resources.ARN` field can be set one of the following.
         *
         * If resources.type equals `AWS::S3::Object` , the ARN must be in one of the following formats. To log all data events for all objects in a specific S3 bucket, use the `StartsWith` operator, and include only the bucket ARN as the matching value.
         *
         * The trailing slash is intentional; do not exclude it. Replace the text between less than and greater than symbols (<>) with resource-specific information.
         *
         * - `arn:<partition>:s3:::<bucket_name>/`
         * - `arn:<partition>:s3:::<bucket_name>/<object_path>/`
         *
         * When resources.type equals `AWS::DynamoDB::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:dynamodb:<region>:<account_ID>:table/<table_name>`
         *
         * When resources.type equals `AWS::Lambda::Function` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:lambda:<region>:<account_ID>:function:<function_name>`
         *
         * When resources.type equals `AWS::AppConfig::Configuration` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:appconfig:<region>:<account_ID>:application/<application_ID>/environment/<environment_ID>/configuration/<configuration_profile_ID>`
         *
         * When resources.type equals `AWS::B2BI::Transformer` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:b2bi:<region>:<account_ID>:transformer/<transformer_ID>`
         *
         * When resources.type equals `AWS::Bedrock::AgentAlias` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:bedrock:<region>:<account_ID>:agent-alias/<agent_ID>/<alias_ID>`
         *
         * When resources.type equals `AWS::Bedrock::KnowledgeBase` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:bedrock:<region>:<account_ID>:knowledge-base/<knowledge_base_ID>`
         *
         * When resources.type equals `AWS::Cassandra::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cassandra:<region>:<account_ID>:/keyspace/<keyspace_name>/table/<table_name>`
         *
         * When resources.type equals `AWS::CloudFront::KeyValueStore` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cloudfront:<region>:<account_ID>:key-value-store/<KVS_name>`
         *
         * When resources.type equals `AWS::CloudTrail::Channel` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cloudtrail:<region>:<account_ID>:channel/<channel_UUID>`
         *
         * When resources.type equals `AWS::CodeWhisperer::Customization` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:codewhisperer:<region>:<account_ID>:customization/<customization_ID>`
         *
         * When resources.type equals `AWS::CodeWhisperer::Profile` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:codewhisperer:<region>:<account_ID>:profile/<profile_ID>`
         *
         * When resources.type equals `AWS::Cognito::IdentityPool` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cognito-identity:<region>:<account_ID>:identitypool/<identity_pool_ID>`
         *
         * When `resources.type` equals `AWS::DynamoDB::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:dynamodb:<region>:<account_ID>:table/<table_name>/stream/<date_time>`
         *
         * When `resources.type` equals `AWS::EC2::Snapshot` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:ec2:<region>::snapshot/<snapshot_ID>`
         *
         * When `resources.type` equals `AWS::EMRWAL::Workspace` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:emrwal:<region>:<account_ID>:workspace/<workspace_name>`
         *
         * When `resources.type` equals `AWS::FinSpace::Environment` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:finspace:<region>:<account_ID>:environment/<environment_ID>`
         *
         * When `resources.type` equals `AWS::Glue::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:glue:<region>:<account_ID>:table/<database_name>/<table_name>`
         *
         * When `resources.type` equals `AWS::GreengrassV2::ComponentVersion` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:greengrass:<region>:<account_ID>:components/<component_name>`
         *
         * When `resources.type` equals `AWS::GreengrassV2::Deployment` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:greengrass:<region>:<account_ID>:deployments/<deployment_ID`
         *
         * When `resources.type` equals `AWS::GuardDuty::Detector` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:guardduty:<region>:<account_ID>:detector/<detector_ID>`
         *
         * When `resources.type` equals `AWS::IoT::Certificate` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iot:<region>:<account_ID>:cert/<certificate_ID>`
         *
         * When `resources.type` equals `AWS::IoT::Thing` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iot:<region>:<account_ID>:thing/<thing_ID>`
         *
         * When `resources.type` equals `AWS::IoTSiteWise::Asset` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iotsitewise:<region>:<account_ID>:asset/<asset_ID>`
         *
         * When `resources.type` equals `AWS::IoTSiteWise::TimeSeries` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iotsitewise:<region>:<account_ID>:timeseries/<timeseries_ID>`
         *
         * When `resources.type` equals `AWS::IoTTwinMaker::Entity` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iottwinmaker:<region>:<account_ID>:workspace/<workspace_ID>/entity/<entity_ID>`
         *
         * When `resources.type` equals `AWS::IoTTwinMaker::Workspace` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iottwinmaker:<region>:<account_ID>:workspace/<workspace_ID>`
         *
         * When `resources.type` equals `AWS::KendraRanking::ExecutionPlan` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kendra-ranking:<region>:<account_ID>:rescore-execution-plan/<rescore_execution_plan_ID>`
         *
         * When `resources.type` equals `AWS::Kinesis::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kinesis:<region>:<account_ID>:stream/<stream_name>`
         *
         * When `resources.type` equals `AWS::Kinesis::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kinesis:<region>:<account_ID>:<stream_type>/<stream_name>/consumer/<consumer_name>:<consumer_creation_timestamp>`
         *
         * When `resources.type` equals `AWS::KinesisVideo::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kinesisvideo:<region>:<account_ID>:stream/<stream_name>/<creation_time>`
         *
         * When `resources.type` equals `AWS::MachineLearning::MlModel` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:machinelearning:<region>:<account_ID>:mlmodel/<model_ID>`
         *
         * When `resources.type` equals `AWS::ManagedBlockchain::Network` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:managedblockchain:::networks/<network_name>`
         *
         * When `resources.type` equals `AWS::ManagedBlockchain::Node` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:managedblockchain:<region>:<account_ID>:nodes/<node_ID>`
         *
         * When `resources.type` equals `AWS::MedicalImaging::Datastore` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:medical-imaging:<region>:<account_ID>:datastore/<data_store_ID>`
         *
         * When `resources.type` equals `AWS::NeptuneGraph::Graph` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:neptune-graph:<region>:<account_ID>:graph/<graph_ID>`
         *
         * When `resources.type` equals `AWS::PCAConnectorAD::Connector` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:pca-connector-ad:<region>:<account_ID>:connector/<connector_ID>`
         *
         * When `resources.type` equals `AWS::PCAConnectorSCEP::Connector` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:pca-connector-scep:<region>:<account_ID>:connector/<connector_ID>`
         *
         * When `resources.type` equals `AWS::QApps:QApp` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qapps:<region>:<account_ID>:application/<application_UUID>/qapp/<qapp_UUID>`
         *
         * When `resources.type` equals `AWS::QBusiness::Application` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>`
         *
         * When `resources.type` equals `AWS::QBusiness::DataSource` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>/index/<index_ID>/data-source/<datasource_ID>`
         *
         * When `resources.type` equals `AWS::QBusiness::Index` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>/index/<index_ID>`
         *
         * When `resources.type` equals `AWS::QBusiness::WebExperience` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>/web-experience/<web_experience_ID>`
         *
         * When `resources.type` equals `AWS::RDS::DBCluster` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:rds:<region>:<account_ID>:cluster/<cluster_name>`
         *
         * When `resources.type` equals `AWS::S3::AccessPoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in one of the following formats. To log events on all objects in an S3 access point, we recommend that you use only the access point ARN, don’t include the object path, and use the `StartsWith` or `NotStartsWith` operators.
         *
         * - `arn:<partition>:s3:<region>:<account_ID>:accesspoint/<access_point_name>`
         * - `arn:<partition>:s3:<region>:<account_ID>:accesspoint/<access_point_name>/object/<object_path>`
         *
         * When `resources.type` equals `AWS::S3ObjectLambda::AccessPoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:s3-object-lambda:<region>:<account_ID>:accesspoint/<access_point_name>`
         *
         * When `resources.type` equals `AWS::S3Outposts::Object` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:s3-outposts:<region>:<account_ID>:<object_path>`
         *
         * When `resources.type` equals `AWS::SageMaker::Endpoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sagemaker:<region>:<account_ID>:endpoint/<endpoint_name>`
         *
         * When `resources.type` equals `AWS::SageMaker::ExperimentTrialComponent` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sagemaker:<region>:<account_ID>:experiment-trial-component/<experiment_trial_component_name>`
         *
         * When `resources.type` equals `AWS::SageMaker::FeatureGroup` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sagemaker:<region>:<account_ID>:feature-group/<feature_group_name>`
         *
         * When `resources.type` equals `AWS::SCN::Instance` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:scn:<region>:<account_ID>:instance/<instance_ID>`
         *
         * When `resources.type` equals `AWS::ServiceDiscovery::Namespace` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:servicediscovery:<region>:<account_ID>:namespace/<namespace_ID>`
         *
         * When `resources.type` equals `AWS::ServiceDiscovery::Service` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:servicediscovery:<region>:<account_ID>:service/<service_ID>`
         *
         * When `resources.type` equals `AWS::SNS::PlatformEndpoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sns:<region>:<account_ID>:endpoint/<endpoint_type>/<endpoint_name>/<endpoint_ID>`
         *
         * When `resources.type` equals `AWS::SNS::Topic` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sns:<region>:<account_ID>:<topic_name>`
         *
         * When `resources.type` equals `AWS::SQS::Queue` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sqs:<region>:<account_ID>:<queue_name>`
         *
         * When `resources.type` equals `AWS::SSM::ManagedNode` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in one of the following formats:
         *
         * - `arn:<partition>:ssm:<region>:<account_ID>:managed-instance/<instance_ID>`
         * - `arn:<partition>:ec2:<region>:<account_ID>:instance/<instance_ID>`
         *
         * When `resources.type` equals `AWS::SSMMessages::ControlChannel` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:ssmmessages:<region>:<account_ID>:control-channel/<channel_ID>`
         *
         * When `resources.type` equals `AWS::StepFunctions::StateMachine` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in one of the following formats:
         *
         * - `arn:<partition>:states:<region>:<account_ID>:stateMachine:<stateMachine_name>`
         * - `arn:<partition>:states:<region>:<account_ID>:stateMachine:<stateMachine_name>/<label_name>`
         *
         * When `resources.type` equals `AWS::SWF::Domain` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:swf:<region>:<account_ID>:domain/<domain_name>`
         *
         * When `resources.type` equals `AWS::ThinClient::Device` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:thinclient:<region>:<account_ID>:device/<device_ID>`
         *
         * When `resources.type` equals `AWS::ThinClient::Environment` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:thinclient:<region>:<account_ID>:environment/<environment_ID>`
         *
         * When `resources.type` equals `AWS::Timestream::Database` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:timestream:<region>:<account_ID>:database/<database_name>`
         *
         * When `resources.type` equals `AWS::Timestream::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:timestream:<region>:<account_ID>:database/<database_name>/table/<table_name>`
         *
         * When resources.type equals `AWS::VerifiedPermissions::PolicyStore` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:verifiedpermissions:<region>:<account_ID>:policy-store/<policy_store_UUID>`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-field
         */
        readonly field: string;
        /**
         * An operator that excludes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notendswith
         */
        readonly notEndsWith?: Array<string>;
        /**
         * An operator that excludes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notequals
         */
        readonly notEquals?: Array<string>;
        /**
         * An operator that excludes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notstartswith
         */
        readonly notStartsWith?: Array<string>;
        /**
         * An operator that includes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-startswith
         */
        readonly startsWith?: Array<string>;
    }
    /**
     * A JSON string that contains a list of Insights types that are logged on an event data store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-insightselector.html
     */
    interface InsightSelectorProperty {
        /**
         * The type of Insights events to log on an event data store. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
         *
         * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
         *
         * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-insightselector.html#cfn-cloudtrail-eventdatastore-insightselector-insighttype
         */
        readonly insightType?: string;
    }
}
/**
 * Properties for defining a `CfnEventDataStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html
 */
export interface CfnEventDataStoreProps {
    /**
     * The advanced event selectors to use to select the events for the data store.
     *
     * You can configure up to five advanced event selectors for each event data store.
     *
     * For more information about how to use advanced event selectors to log CloudTrail events, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
     *
     * For more information about how to use advanced event selectors to include AWS Config configuration items in your event data store, see [Create an event data store for AWS Config configuration items](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-eds-cli.html#lake-cli-create-eds-config) in the CloudTrail User Guide.
     *
     * For more information about how to use advanced event selectors to include events outside of AWS events in your event data store, see [Create an integration to log events from outside AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-integrations-cli.html#lake-cli-create-integration) in the CloudTrail User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedeventselectors
     */
    readonly advancedEventSelectors?: Array<CfnEventDataStore.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.
     *
     * The following are the possible values:
     *
     * - `EXTENDABLE_RETENTION_PRICING` - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is 366 days.
     * - `FIXED_RETENTION_PRICING` - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years). The default retention period for this billing mode is 2557 days.
     *
     * The default value is `EXTENDABLE_RETENTION_PRICING` .
     *
     * For more information about CloudTrail pricing, see [AWS CloudTrail Pricing](https://docs.aws.amazon.com/cloudtrail/pricing/) and [Managing CloudTrail Lake costs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-manage-costs.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-billingmode
     */
    readonly billingMode?: string;
    /**
     * Indicates if [Lake query federation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html) is enabled. By default, Lake query federation is disabled. You cannot delete an event data store if Lake query federation is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-federationenabled
     */
    readonly federationEnabled?: boolean | cdk.IResolvable;
    /**
     * If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
     *
     * The federation role must exist in your account and provide the [required minimum permissions](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html#query-federation-permissions-role) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-federationrolearn
     */
    readonly federationRoleArn?: string;
    /**
     * Specifies whether the event data store should start ingesting live events.
     *
     * The default is true.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-ingestionenabled
     */
    readonly ingestionEnabled?: boolean | cdk.IResolvable;
    /**
     * The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events.
     *
     * For more information, see [Create an event data store for CloudTrail Insights events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-insights.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-insightsdestination
     */
    readonly insightsDestination?: string;
    /**
     * A JSON string that contains the Insights types you want to log on an event data store.
     *
     * `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
     *
     * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
     *
     * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-insightselectors
     */
    readonly insightSelectors?: Array<CfnEventDataStore.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail.
     *
     * The value can be an alias name prefixed by `alias/` , a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
     *
     * > Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.
     *
     * CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *AWS Key Management Service Developer Guide* .
     *
     * Examples:
     *
     * - `alias/MyAliasName`
     * - `arn:aws:kms:us-east-2:123456789012:alias/MyAliasName`
     * - `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
     * - `12345678-1234-1234-1234-123456789012`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-multiregionenabled
     */
    readonly multiRegionEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the event data store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-name
     */
    readonly name?: string;
    /**
     * Specifies whether an event data store collects events logged for an organization in AWS Organizations .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-organizationenabled
     */
    readonly organizationEnabled?: boolean | cdk.IResolvable;
    /**
     * The retention period of the event data store, in days.
     *
     * If `BillingMode` is set to `EXTENDABLE_RETENTION_PRICING` , you can set a retention period of up to 3653 days, the equivalent of 10 years. If `BillingMode` is set to `FIXED_RETENTION_PRICING` , you can set a retention period of up to 2557 days, the equivalent of seven years.
     *
     * CloudTrail Lake determines whether to retain an event by checking if the `eventTime` of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the `eventTime` is older than 90 days.
     *
     * > If you plan to copy trail events to this event data store, we recommend that you consider both the age of the events that you want to copy as well as how long you want to keep the copied events in your event data store. For example, if you copy trail events that are 5 years old and specify a retention period of 7 years, the event data store will retain those events for two years.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-retentionperiod
     */
    readonly retentionPeriod?: number;
    /**
     * A list of tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether termination protection is enabled for the event data store.
     *
     * If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-terminationprotectionenabled
     */
    readonly terminationProtectionEnabled?: boolean | cdk.IResolvable;
}
/**
 * Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of AWS .
 *
 * For more information about resource-based policies, see [CloudTrail resource-based policy examples](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html) in the *CloudTrail User Guide* .
 *
 * @cloudformationResource AWS::CloudTrail::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy.
     */
    resourceArn: string;
    /**
     * A JSON-formatted string for an AWS resource-based policy.
     */
    resourcePolicy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
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
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy.
     *
     * The following is the format of a resource ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html#cfn-cloudtrail-resourcepolicy-resourcearn
     */
    readonly resourceArn: string;
    /**
     * A JSON-formatted string for an AWS resource-based policy.
     *
     * The following are requirements for the resource policy:
     *
     * - Contains only one action: cloudtrail-data:PutAuditEvents
     * - Contains at least one statement. The policy can have a maximum of 20 statements.
     * - Each statement contains at least one principal. A statement can have a maximum of 50 principals.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html#cfn-cloudtrail-resourcepolicy-resourcepolicy
     */
    readonly resourcePolicy: any | cdk.IResolvable;
}
/**
 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
 *
 * @cloudformationResource AWS::CloudTrail::Trail
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html
 */
export declare class CfnTrail extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrail from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrail;
    /**
     * `Ref` returns the ARN of the CloudTrail trail, such as `arn:aws:cloudtrail:us-east-2:123456789012:trail/myCloudTrail` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * `Ref` returns the ARN of the Amazon SNS topic that's associated with the CloudTrail trail, such as `arn:aws:sns:us-east-2:123456789012:mySNSTopic` .
     *
     * @cloudformationAttribute SnsTopicArn
     */
    readonly attrSnsTopicArn: string;
    /**
     * Specifies the settings for advanced event selectors.
     */
    advancedEventSelectors?: Array<CfnTrail.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered.
     */
    cloudWatchLogsLogGroupArn?: string;
    /**
     * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
     */
    cloudWatchLogsRoleArn?: string;
    /**
     * Specifies whether log file validation is enabled. The default is false.
     */
    enableLogFileValidation?: boolean | cdk.IResolvable;
    /**
     * Use event selectors to further specify the management and data event settings for your trail.
     */
    eventSelectors?: Array<CfnTrail.EventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether the trail is publishing events from global services such as IAM to the log files.
     */
    includeGlobalServiceEvents?: boolean | cdk.IResolvable;
    /**
     * A JSON string that contains the Insights types you want to log on a trail.
     */
    insightSelectors?: Array<CfnTrail.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether the CloudTrail trail is currently logging AWS API calls.
     */
    isLogging: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail applies only to the current Region or to all Regions.
     */
    isMultiRegionTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail is applied to all accounts in an organization in AWS Organizations , or only for the current AWS account .
     */
    isOrganizationTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the logs delivered by CloudTrail.
     */
    kmsKeyId?: string;
    /**
     * Specifies the name of the Amazon S3 bucket designated for publishing log files.
     */
    s3BucketName: string;
    /**
     * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.
     */
    s3KeyPrefix?: string;
    /**
     * Specifies the name of the Amazon SNS topic defined for notification of log file delivery.
     */
    snsTopicName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A custom set of tags (key-value pairs) for this trail.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies the name of the trail. The name must meet the following requirements:.
     */
    trailName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrailProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTrail {
    /**
     * Use event selectors to further specify the management and data event settings for your trail.
     *
     * By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
     *
     * You can configure up to five event selectors for a trail.
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html
     */
    interface EventSelectorProperty {
        /**
         * CloudTrail supports data event logging for Amazon S3 objects, AWS Lambda functions, and Amazon DynamoDB tables with basic event selectors.
         *
         * You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.
         *
         * For more information, see [Data Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Limits in AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) in the *AWS CloudTrail User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-dataresources
         */
        readonly dataResources?: Array<CfnTrail.DataResourceProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An optional list of service event sources from which you do not want management events to be logged on your trail.
         *
         * In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service or Amazon RDS Data API events by containing `kms.amazonaws.com` or `rdsdata.amazonaws.com` . By default, `ExcludeManagementEventSources` is empty, and AWS KMS and Amazon RDS Data API events are logged to your trail. You can exclude management event sources only in Regions that support the event source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-excludemanagementeventsources
         */
        readonly excludeManagementEventSources?: Array<string>;
        /**
         * Specify if you want your event selector to include management events for your trail.
         *
         * For more information, see [Management Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) in the *AWS CloudTrail User Guide* .
         *
         * By default, the value is `true` .
         *
         * The first copy of management events is free. You are charged for additional copies of management events that you are logging on any subsequent trail in the same Region. For more information about CloudTrail pricing, see [AWS CloudTrail Pricing](https://docs.aws.amazon.com/cloudtrail/pricing/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-includemanagementevents
         */
        readonly includeManagementEvents?: boolean | cdk.IResolvable;
        /**
         * Specify if you want your trail to log read-only events, write-only events, or all.
         *
         * For example, the EC2 `GetConsoleOutput` is a read-only API operation and `RunInstances` is a write-only API operation.
         *
         * By default, the value is `All` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-readwritetype
         */
        readonly readWriteType?: string;
    }
    /**
     * Data events provide information about the resource operations performed on or within a resource itself.
     *
     * These are also known as data plane operations. You can specify up to 250 data resources for a trail.
     *
     * Configure the `DataResource` to specify the resource type and resource ARNs for which you want to log data events.
     *
     * You can specify the following resource types in your event selectors for your trail:
     *
     * - `AWS::DynamoDB::Table`
     * - `AWS::Lambda::Function`
     * - `AWS::S3::Object`
     *
     * > The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.
     * >
     * > If you are using advanced event selectors, the maximum total number of values for all conditions, across all advanced event selectors for the trail, is 500.
     *
     * The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named `DOC-EXAMPLE-BUCKET1` . In this example, the CloudTrail user specified an empty prefix, and the option to log both `Read` and `Write` data events.
     *
     * - A user uploads an image file to `DOC-EXAMPLE-BUCKET1` .
     * - The `PutObject` API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.
     * - A user uploads an object to an Amazon S3 bucket named `arn:aws:s3:::DOC-EXAMPLE-BUCKET1` .
     * - The `PutObject` API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.
     *
     * The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named *MyLambdaFunction* , but not for all Lambda functions.
     *
     * - A user runs a script that includes a call to the *MyLambdaFunction* function and the *MyOtherLambdaFunction* function.
     * - The `Invoke` API operation on *MyLambdaFunction* is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for *MyLambdaFunction* , any invocations of that function are logged. The trail processes and logs the event.
     * - The `Invoke` API operation on *MyOtherLambdaFunction* is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the `Invoke` operation for *MyOtherLambdaFunction* does not match the function specified for the trail. The trail doesn’t log the event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html
     */
    interface DataResourceProperty {
        /**
         * The resource type in which you want to log data events.
         *
         * You can specify the following *basic* event selector resource types:
         *
         * - `AWS::DynamoDB::Table`
         * - `AWS::Lambda::Function`
         * - `AWS::S3::Object`
         *
         * Additional resource types are available through *advanced* event selectors. For more information about these additional resource types, see [AdvancedFieldSelector](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedFieldSelector.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html#cfn-cloudtrail-trail-dataresource-type
         */
        readonly type: string;
        /**
         * An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified resource type.
         *
         * - To log data events for all objects in all S3 buckets in your AWS account , specify the prefix as `arn:aws:s3` .
         *
         * > This also enables logging of data event activity performed by any user or role in your AWS account , even if that activity is performed on a bucket that belongs to another AWS account .
         * - To log data events for all objects in an S3 bucket, specify the bucket and an empty object prefix such as `arn:aws:s3:::DOC-EXAMPLE-BUCKET1/` . The trail logs data events for all objects in this S3 bucket.
         * - To log data events for specific objects, specify the S3 bucket and object prefix such as `arn:aws:s3:::DOC-EXAMPLE-BUCKET1/example-images` . The trail logs data events for objects in this S3 bucket that match the prefix.
         * - To log data events for all Lambda functions in your AWS account , specify the prefix as `arn:aws:lambda` .
         *
         * > This also enables logging of `Invoke` activity performed by any user or role in your AWS account , even if that activity is performed on a function that belongs to another AWS account .
         * - To log data events for a specific Lambda function, specify the function ARN.
         *
         * > Lambda function ARNs are exact. For example, if you specify a function ARN *arn:aws:lambda:us-west-2:111111111111:function:helloworld* , data events will only be logged for *arn:aws:lambda:us-west-2:111111111111:function:helloworld* . They will not be logged for *arn:aws:lambda:us-west-2:111111111111:function:helloworld2* .
         * - To log data events for all DynamoDB tables in your AWS account , specify the prefix as `arn:aws:dynamodb` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html#cfn-cloudtrail-trail-dataresource-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Advanced event selectors let you create fine-grained selectors for CloudTrail management and data events.
     *
     * They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) and [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) in the *AWS CloudTrail User Guide* .
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * *Supported CloudTrail event record fields for management events*
     *
     * - `eventCategory` (required)
     * - `eventSource`
     * - `readOnly`
     *
     * *Supported CloudTrail event record fields for data events*
     *
     * - `eventCategory` (required)
     * - `resources.type` (required)
     * - `readOnly`
     * - `eventName`
     * - `resources.ARN`
     *
     * > For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html
     */
    interface AdvancedEventSelectorProperty {
        /**
         * Contains all selector statements in an advanced event selector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html#cfn-cloudtrail-trail-advancedeventselector-fieldselectors
         */
        readonly fieldSelectors: Array<CfnTrail.AdvancedFieldSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html#cfn-cloudtrail-trail-advancedeventselector-name
         */
        readonly name?: string;
    }
    /**
     * A single selector statement in an advanced event selector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html
     */
    interface AdvancedFieldSelectorProperty {
        /**
         * An operator that includes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-endswith
         */
        readonly endsWith?: Array<string>;
        /**
         * An operator that includes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * This is the only valid operator that you can use with the `readOnly` , `eventCategory` , and `resources.type` fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-equals
         */
        readonly equalTo?: Array<string>;
        /**
         * A field in a CloudTrail event record on which to filter events to be logged.
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the field is used only for selecting events as filtering is not supported.
         *
         * For CloudTrail management events, supported fields include `readOnly` , `eventCategory` , and `eventSource` .
         *
         * For CloudTrail data events, supported fields include `readOnly` , `eventCategory` , `eventName` , `resources.type` , and `resources.ARN` .
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
         *
         * - *`readOnly`* - Optional. Can be set to `Equals` a value of `true` or `false` . If you do not add this field, CloudTrail logs both `read` and `write` events. A value of `true` logs only `read` events. A value of `false` logs only `write` events.
         * - *`eventSource`* - For filtering management events only. This can be set to `NotEquals` `kms.amazonaws.com` or `NotEquals` `rdsdata.amazonaws.com` .
         * - *`eventName`* - Can use any operator. You can use it to ﬁlter in or ﬁlter out any data event logged to CloudTrail, such as `PutBucket` or `GetSnapshotBlock` . You can have multiple values for this ﬁeld, separated by commas.
         * - *`eventCategory`* - This is required and must be set to `Equals` .
         *
         * - For CloudTrail management events, the value must be `Management` .
         * - For CloudTrail data events, the value must be `Data` .
         *
         * The following are used only for event data stores:
         *
         * - For CloudTrail Insights events, the value must be `Insight` .
         * - For AWS Config configuration items, the value must be `ConfigurationItem` .
         * - For Audit Manager evidence, the value must be `Evidence` .
         * - For non- AWS events, the value must be `ActivityAuditLog` .
         * - *`resources.type`* - This ﬁeld is required for CloudTrail data events. `resources.type` can only use the `Equals` operator, and the value can be one of the following:
         *
         * - `AWS::DynamoDB::Table`
         * - `AWS::Lambda::Function`
         * - `AWS::S3::Object`
         * - `AWS::AppConfig::Configuration`
         * - `AWS::B2BI::Transformer`
         * - `AWS::Bedrock::AgentAlias`
         * - `AWS::Bedrock::KnowledgeBase`
         * - `AWS::Cassandra::Table`
         * - `AWS::CloudFront::KeyValueStore`
         * - `AWS::CloudTrail::Channel`
         * - `AWS::CloudWatch::Metric`
         * - `AWS::CodeWhisperer::Customization`
         * - `AWS::CodeWhisperer::Profile`
         * - `AWS::Cognito::IdentityPool`
         * - `AWS::DynamoDB::Stream`
         * - `AWS::EC2::Snapshot`
         * - `AWS::EMRWAL::Workspace`
         * - `AWS::FinSpace::Environment`
         * - `AWS::Glue::Table`
         * - `AWS::GreengrassV2::ComponentVersion`
         * - `AWS::GreengrassV2::Deployment`
         * - `AWS::GuardDuty::Detector`
         * - `AWS::IoT::Certificate`
         * - `AWS::IoT::Thing`
         * - `AWS::IoTSiteWise::Asset`
         * - `AWS::IoTSiteWise::TimeSeries`
         * - `AWS::IoTTwinMaker::Entity`
         * - `AWS::IoTTwinMaker::Workspace`
         * - `AWS::KendraRanking::ExecutionPlan`
         * - `AWS::Kinesis::Stream`
         * - `AWS::Kinesis::StreamConsumer`
         * - `AWS::KinesisVideo::Stream`
         * - `AWS::MachineLearning::MlModel`
         * - `AWS::ManagedBlockchain::Network`
         * - `AWS::ManagedBlockchain::Node`
         * - `AWS::MedicalImaging::Datastore`
         * - `AWS::NeptuneGraph::Graph`
         * - `AWS::PCAConnectorAD::Connector`
         * - `AWS::PCAConnectorSCEP::Connector`
         * - `AWS::QApps:QApp`
         * - `AWS::QBusiness::Application`
         * - `AWS::QBusiness::DataSource`
         * - `AWS::QBusiness::Index`
         * - `AWS::QBusiness::WebExperience`
         * - `AWS::RDS::DBCluster`
         * - `AWS::S3::AccessPoint`
         * - `AWS::S3ObjectLambda::AccessPoint`
         * - `AWS::S3Outposts::Object`
         * - `AWS::SageMaker::Endpoint`
         * - `AWS::SageMaker::ExperimentTrialComponent`
         * - `AWS::SageMaker::FeatureGroup`
         * - `AWS::ServiceDiscovery::Namespace`
         * - `AWS::ServiceDiscovery::Service`
         * - `AWS::SCN::Instance`
         * - `AWS::SNS::PlatformEndpoint`
         * - `AWS::SNS::Topic`
         * - `AWS::SQS::Queue`
         * - `AWS::SSM::ManagedNode`
         * - `AWS::SSMMessages::ControlChannel`
         * - `AWS::StepFunctions::StateMachine`
         * - `AWS::SWF::Domain`
         * - `AWS::ThinClient::Device`
         * - `AWS::ThinClient::Environment`
         * - `AWS::Timestream::Database`
         * - `AWS::Timestream::Table`
         * - `AWS::VerifiedPermissions::PolicyStore`
         * - `AWS::XRay::Trace`
         *
         * You can have only one `resources.type` ﬁeld per selector. To log data events on more than one resource type, add another selector.
         * - *`resources.ARN`* - You can use any operator with `resources.ARN` , but if you use `Equals` or `NotEquals` , the value must exactly match the ARN of a valid resource of the type you've speciﬁed in the template as the value of resources.type.
         *
         * > You can't use the `resources.ARN` field to filter resource types that do not have ARNs.
         *
         * The `resources.ARN` field can be set one of the following.
         *
         * If resources.type equals `AWS::S3::Object` , the ARN must be in one of the following formats. To log all data events for all objects in a specific S3 bucket, use the `StartsWith` operator, and include only the bucket ARN as the matching value.
         *
         * The trailing slash is intentional; do not exclude it. Replace the text between less than and greater than symbols (<>) with resource-specific information.
         *
         * - `arn:<partition>:s3:::<bucket_name>/`
         * - `arn:<partition>:s3:::<bucket_name>/<object_path>/`
         *
         * When resources.type equals `AWS::DynamoDB::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:dynamodb:<region>:<account_ID>:table/<table_name>`
         *
         * When resources.type equals `AWS::Lambda::Function` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:lambda:<region>:<account_ID>:function:<function_name>`
         *
         * When resources.type equals `AWS::AppConfig::Configuration` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:appconfig:<region>:<account_ID>:application/<application_ID>/environment/<environment_ID>/configuration/<configuration_profile_ID>`
         *
         * When resources.type equals `AWS::B2BI::Transformer` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:b2bi:<region>:<account_ID>:transformer/<transformer_ID>`
         *
         * When resources.type equals `AWS::Bedrock::AgentAlias` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:bedrock:<region>:<account_ID>:agent-alias/<agent_ID>/<alias_ID>`
         *
         * When resources.type equals `AWS::Bedrock::KnowledgeBase` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:bedrock:<region>:<account_ID>:knowledge-base/<knowledge_base_ID>`
         *
         * When resources.type equals `AWS::Cassandra::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cassandra:<region>:<account_ID>:/keyspace/<keyspace_name>/table/<table_name>`
         *
         * When resources.type equals `AWS::CloudFront::KeyValueStore` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cloudfront:<region>:<account_ID>:key-value-store/<KVS_name>`
         *
         * When resources.type equals `AWS::CloudTrail::Channel` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cloudtrail:<region>:<account_ID>:channel/<channel_UUID>`
         *
         * When resources.type equals `AWS::CodeWhisperer::Customization` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:codewhisperer:<region>:<account_ID>:customization/<customization_ID>`
         *
         * When resources.type equals `AWS::CodeWhisperer::Profile` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:codewhisperer:<region>:<account_ID>:profile/<profile_ID>`
         *
         * When resources.type equals `AWS::Cognito::IdentityPool` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:cognito-identity:<region>:<account_ID>:identitypool/<identity_pool_ID>`
         *
         * When `resources.type` equals `AWS::DynamoDB::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:dynamodb:<region>:<account_ID>:table/<table_name>/stream/<date_time>`
         *
         * When `resources.type` equals `AWS::EC2::Snapshot` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:ec2:<region>::snapshot/<snapshot_ID>`
         *
         * When `resources.type` equals `AWS::EMRWAL::Workspace` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:emrwal:<region>:<account_ID>:workspace/<workspace_name>`
         *
         * When `resources.type` equals `AWS::FinSpace::Environment` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:finspace:<region>:<account_ID>:environment/<environment_ID>`
         *
         * When `resources.type` equals `AWS::Glue::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:glue:<region>:<account_ID>:table/<database_name>/<table_name>`
         *
         * When `resources.type` equals `AWS::GreengrassV2::ComponentVersion` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:greengrass:<region>:<account_ID>:components/<component_name>`
         *
         * When `resources.type` equals `AWS::GreengrassV2::Deployment` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:greengrass:<region>:<account_ID>:deployments/<deployment_ID`
         *
         * When `resources.type` equals `AWS::GuardDuty::Detector` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:guardduty:<region>:<account_ID>:detector/<detector_ID>`
         *
         * When `resources.type` equals `AWS::IoT::Certificate` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iot:<region>:<account_ID>:cert/<certificate_ID>`
         *
         * When `resources.type` equals `AWS::IoT::Thing` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iot:<region>:<account_ID>:thing/<thing_ID>`
         *
         * When `resources.type` equals `AWS::IoTSiteWise::Asset` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iotsitewise:<region>:<account_ID>:asset/<asset_ID>`
         *
         * When `resources.type` equals `AWS::IoTSiteWise::TimeSeries` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iotsitewise:<region>:<account_ID>:timeseries/<timeseries_ID>`
         *
         * When `resources.type` equals `AWS::IoTTwinMaker::Entity` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iottwinmaker:<region>:<account_ID>:workspace/<workspace_ID>/entity/<entity_ID>`
         *
         * When `resources.type` equals `AWS::IoTTwinMaker::Workspace` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:iottwinmaker:<region>:<account_ID>:workspace/<workspace_ID>`
         *
         * When `resources.type` equals `AWS::KendraRanking::ExecutionPlan` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kendra-ranking:<region>:<account_ID>:rescore-execution-plan/<rescore_execution_plan_ID>`
         *
         * When `resources.type` equals `AWS::Kinesis::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kinesis:<region>:<account_ID>:stream/<stream_name>`
         *
         * When `resources.type` equals `AWS::Kinesis::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kinesis:<region>:<account_ID>:<stream_type>/<stream_name>/consumer/<consumer_name>:<consumer_creation_timestamp>`
         *
         * When `resources.type` equals `AWS::KinesisVideo::Stream` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:kinesisvideo:<region>:<account_ID>:stream/<stream_name>/<creation_time>`
         *
         * When `resources.type` equals `AWS::MachineLearning::MlModel` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:machinelearning:<region>:<account_ID>:mlmodel/<model_ID>`
         *
         * When `resources.type` equals `AWS::ManagedBlockchain::Network` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:managedblockchain:::networks/<network_name>`
         *
         * When `resources.type` equals `AWS::ManagedBlockchain::Node` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:managedblockchain:<region>:<account_ID>:nodes/<node_ID>`
         *
         * When `resources.type` equals `AWS::MedicalImaging::Datastore` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:medical-imaging:<region>:<account_ID>:datastore/<data_store_ID>`
         *
         * When `resources.type` equals `AWS::NeptuneGraph::Graph` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:neptune-graph:<region>:<account_ID>:graph/<graph_ID>`
         *
         * When `resources.type` equals `AWS::PCAConnectorAD::Connector` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:pca-connector-ad:<region>:<account_ID>:connector/<connector_ID>`
         *
         * When `resources.type` equals `AWS::PCAConnectorSCEP::Connector` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:pca-connector-scep:<region>:<account_ID>:connector/<connector_ID>`
         *
         * When `resources.type` equals `AWS::QApps:QApp` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qapps:<region>:<account_ID>:application/<application_UUID>/qapp/<qapp_UUID>`
         *
         * When `resources.type` equals `AWS::QBusiness::Application` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>`
         *
         * When `resources.type` equals `AWS::QBusiness::DataSource` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>/index/<index_ID>/data-source/<datasource_ID>`
         *
         * When `resources.type` equals `AWS::QBusiness::Index` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>/index/<index_ID>`
         *
         * When `resources.type` equals `AWS::QBusiness::WebExperience` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:qbusiness:<region>:<account_ID>:application/<application_ID>/web-experience/<web_experience_ID>`
         *
         * When `resources.type` equals `AWS::RDS::DBCluster` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:rds:<region>:<account_ID>:cluster/<cluster_name>`
         *
         * When `resources.type` equals `AWS::S3::AccessPoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in one of the following formats. To log events on all objects in an S3 access point, we recommend that you use only the access point ARN, don’t include the object path, and use the `StartsWith` or `NotStartsWith` operators.
         *
         * - `arn:<partition>:s3:<region>:<account_ID>:accesspoint/<access_point_name>`
         * - `arn:<partition>:s3:<region>:<account_ID>:accesspoint/<access_point_name>/object/<object_path>`
         *
         * When `resources.type` equals `AWS::S3ObjectLambda::AccessPoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:s3-object-lambda:<region>:<account_ID>:accesspoint/<access_point_name>`
         *
         * When `resources.type` equals `AWS::S3Outposts::Object` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:s3-outposts:<region>:<account_ID>:<object_path>`
         *
         * When `resources.type` equals `AWS::SageMaker::Endpoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sagemaker:<region>:<account_ID>:endpoint/<endpoint_name>`
         *
         * When `resources.type` equals `AWS::SageMaker::ExperimentTrialComponent` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sagemaker:<region>:<account_ID>:experiment-trial-component/<experiment_trial_component_name>`
         *
         * When `resources.type` equals `AWS::SageMaker::FeatureGroup` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sagemaker:<region>:<account_ID>:feature-group/<feature_group_name>`
         *
         * When `resources.type` equals `AWS::SCN::Instance` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:scn:<region>:<account_ID>:instance/<instance_ID>`
         *
         * When `resources.type` equals `AWS::ServiceDiscovery::Namespace` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:servicediscovery:<region>:<account_ID>:namespace/<namespace_ID>`
         *
         * When `resources.type` equals `AWS::ServiceDiscovery::Service` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:servicediscovery:<region>:<account_ID>:service/<service_ID>`
         *
         * When `resources.type` equals `AWS::SNS::PlatformEndpoint` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sns:<region>:<account_ID>:endpoint/<endpoint_type>/<endpoint_name>/<endpoint_ID>`
         *
         * When `resources.type` equals `AWS::SNS::Topic` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sns:<region>:<account_ID>:<topic_name>`
         *
         * When `resources.type` equals `AWS::SQS::Queue` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:sqs:<region>:<account_ID>:<queue_name>`
         *
         * When `resources.type` equals `AWS::SSM::ManagedNode` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in one of the following formats:
         *
         * - `arn:<partition>:ssm:<region>:<account_ID>:managed-instance/<instance_ID>`
         * - `arn:<partition>:ec2:<region>:<account_ID>:instance/<instance_ID>`
         *
         * When `resources.type` equals `AWS::SSMMessages::ControlChannel` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:ssmmessages:<region>:<account_ID>:control-channel/<channel_ID>`
         *
         * When `resources.type` equals `AWS::StepFunctions::StateMachine` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in one of the following formats:
         *
         * - `arn:<partition>:states:<region>:<account_ID>:stateMachine:<stateMachine_name>`
         * - `arn:<partition>:states:<region>:<account_ID>:stateMachine:<stateMachine_name>/<label_name>`
         *
         * When `resources.type` equals `AWS::SWF::Domain` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:swf:<region>:<account_ID>:domain/<domain_name>`
         *
         * When `resources.type` equals `AWS::ThinClient::Device` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:thinclient:<region>:<account_ID>:device/<device_ID>`
         *
         * When `resources.type` equals `AWS::ThinClient::Environment` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:thinclient:<region>:<account_ID>:environment/<environment_ID>`
         *
         * When `resources.type` equals `AWS::Timestream::Database` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:timestream:<region>:<account_ID>:database/<database_name>`
         *
         * When `resources.type` equals `AWS::Timestream::Table` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:timestream:<region>:<account_ID>:database/<database_name>/table/<table_name>`
         *
         * When resources.type equals `AWS::VerifiedPermissions::PolicyStore` , and the operator is set to `Equals` or `NotEquals` , the ARN must be in the following format:
         *
         * - `arn:<partition>:verifiedpermissions:<region>:<account_ID>:policy-store/<policy_store_UUID>`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-field
         */
        readonly field: string;
        /**
         * An operator that excludes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-notendswith
         */
        readonly notEndsWith?: Array<string>;
        /**
         * An operator that excludes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-notequals
         */
        readonly notEquals?: Array<string>;
        /**
         * An operator that excludes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-notstartswith
         */
        readonly notStartsWith?: Array<string>;
        /**
         * An operator that includes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-startswith
         */
        readonly startsWith?: Array<string>;
    }
    /**
     * A JSON string that contains a list of Insights types that are logged on a trail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-insightselector.html
     */
    interface InsightSelectorProperty {
        /**
         * The type of Insights events to log on a trail. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
         *
         * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
         *
         * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-insightselector.html#cfn-cloudtrail-trail-insightselector-insighttype
         */
        readonly insightType?: string;
    }
}
/**
 * Properties for defining a `CfnTrail`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html
 */
export interface CfnTrailProps {
    /**
     * Specifies the settings for advanced event selectors.
     *
     * You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either `AdvancedEventSelectors` or `EventSelectors` , but not both. If you apply `AdvancedEventSelectors` to a trail, any existing `EventSelectors` are overwritten. For more information about advanced event selectors, see [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) in the *AWS CloudTrail User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedeventselectors
     */
    readonly advancedEventSelectors?: Array<CfnTrail.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered.
     *
     * You must use a log group that exists in your account.
     *
     * To enable CloudWatch Logs delivery, you must provide values for `CloudWatchLogsLogGroupArn` and `CloudWatchLogsRoleArn` .
     *
     * > If you previously enabled CloudWatch Logs delivery and want to disable CloudWatch Logs delivery, you must set the values of the `CloudWatchLogsRoleArn` and `CloudWatchLogsLogGroupArn` fields to `""` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-cloudwatchlogsloggrouparn
     */
    readonly cloudWatchLogsLogGroupArn?: string;
    /**
     * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
     *
     * You must use a role that exists in your account.
     *
     * To enable CloudWatch Logs delivery, you must provide values for `CloudWatchLogsLogGroupArn` and `CloudWatchLogsRoleArn` .
     *
     * > If you previously enabled CloudWatch Logs delivery and want to disable CloudWatch Logs delivery, you must set the values of the `CloudWatchLogsRoleArn` and `CloudWatchLogsLogGroupArn` fields to `""` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-cloudwatchlogsrolearn
     */
    readonly cloudWatchLogsRoleArn?: string;
    /**
     * Specifies whether log file validation is enabled. The default is false.
     *
     * > When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-enablelogfilevalidation
     */
    readonly enableLogFileValidation?: boolean | cdk.IResolvable;
    /**
     * Use event selectors to further specify the management and data event settings for your trail.
     *
     * By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
     *
     * You can configure up to five event selectors for a trail.
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-eventselectors
     */
    readonly eventSelectors?: Array<CfnTrail.EventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether the trail is publishing events from global services such as IAM to the log files.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-includeglobalserviceevents
     */
    readonly includeGlobalServiceEvents?: boolean | cdk.IResolvable;
    /**
     * A JSON string that contains the Insights types you want to log on a trail.
     *
     * `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
     *
     * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
     *
     * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-insightselectors
     */
    readonly insightSelectors?: Array<CfnTrail.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether the CloudTrail trail is currently logging AWS API calls.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-islogging
     */
    readonly isLogging: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail applies only to the current Region or to all Regions.
     *
     * The default is false. If the trail exists only in the current Region and this value is set to true, shadow trails (replications of the trail) will be created in the other Regions. If the trail exists in all Regions and this value is set to false, the trail will remain in the Region where it was created, and its shadow trails in other Regions will be deleted. As a best practice, consider using trails that log events in all Regions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-ismultiregiontrail
     */
    readonly isMultiRegionTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail is applied to all accounts in an organization in AWS Organizations , or only for the current AWS account .
     *
     * The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the management account for an organization in AWS Organizations . If the trail is not an organization trail and this is set to `true` , the trail will be created in all AWS accounts that belong to the organization. If the trail is an organization trail and this is set to `false` , the trail will remain in the current AWS account but be deleted from all member accounts in the organization.
     *
     * > Only the management account for the organization can convert an organization trail to a non-organization trail, or convert a non-organization trail to an organization trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-isorganizationtrail
     */
    readonly isOrganizationTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the logs delivered by CloudTrail.
     *
     * The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
     *
     * CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *AWS Key Management Service Developer Guide* .
     *
     * Examples:
     *
     * - alias/MyAliasName
     * - arn:aws:kms:us-east-2:123456789012:alias/MyAliasName
     * - arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012
     * - 12345678-1234-1234-1234-123456789012
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies the name of the Amazon S3 bucket designated for publishing log files.
     *
     * See [Amazon S3 Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-s3bucketname
     */
    readonly s3BucketName: string;
    /**
     * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.
     *
     * For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files) . The maximum length is 200 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-s3keyprefix
     */
    readonly s3KeyPrefix?: string;
    /**
     * Specifies the name of the Amazon SNS topic defined for notification of log file delivery.
     *
     * The maximum length is 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-snstopicname
     */
    readonly snsTopicName?: string;
    /**
     * A custom set of tags (key-value pairs) for this trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the name of the trail. The name must meet the following requirements:.
     *
     * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
     * - Start with a letter or number, and end with a letter or number
     * - Be between 3 and 128 characters
     * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
     * - Not be in IP address format (for example, 192.168.5.4)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-trailname
     */
    readonly trailName?: string;
}
