import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::IVS::Channel` resource specifies an  channel.
 *
 * A channel stores configuration information related to your live stream. For more information, see [CreateChannel](https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateChannel.html) in the *Amazon IVS Low-Latency Streaming API Reference* .
 *
 * > By default, the IVS API CreateChannel endpoint creates a stream key in addition to a channel. The  Channel resource *does not* create a stream key; to create a stream key, use the StreamKey resource instead.
 *
 * @cloudformationResource AWS::IVS::Channel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html
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
     * The channel ARN. For example: `arn:aws:ivs:us-west-2:123456789012:channel/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
     *
     * For example: `a1b2c3d4e5f6.global-contribute.live-video.net`
     *
     * @cloudformationAttribute IngestEndpoint
     */
    readonly attrIngestEndpoint: string;
    /**
     * Channel playback URL. For example: `https://a1b2c3d4e5f6.us-west-2.playback.live-video.net/api/video/v1/us-west-2.123456789012.channel.abcdEFGH.m3u8`
     *
     * @cloudformationAttribute PlaybackUrl
     */
    readonly attrPlaybackUrl: string;
    /**
     * Whether the channel is authorized.
     */
    authorized?: boolean | cdk.IResolvable;
    /**
     * Whether the channel allows insecure RTMP ingest.
     */
    insecureIngest?: boolean | cdk.IResolvable;
    /**
     * Channel latency mode. Valid values:.
     */
    latencyMode?: string;
    /**
     * Channel name.
     */
    name?: string;
    /**
     * An optional transcode preset for the channel.
     */
    preset?: string;
    /**
     * The ARN of a RecordingConfiguration resource.
     */
    recordingConfigurationArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The channel type, which determines the allowable resolution and bitrate.
     */
    type?: string;
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
/**
 * Properties for defining a `CfnChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html
 */
export interface CfnChannelProps {
    /**
     * Whether the channel is authorized.
     *
     * *Default* : `false`
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-authorized
     */
    readonly authorized?: boolean | cdk.IResolvable;
    /**
     * Whether the channel allows insecure RTMP ingest.
     *
     * *Default* : `false`
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-insecureingest
     */
    readonly insecureIngest?: boolean | cdk.IResolvable;
    /**
     * Channel latency mode. Valid values:.
     *
     * - `NORMAL` : Use NORMAL to broadcast and deliver live video up to Full HD.
     * - `LOW` : Use LOW for near real-time interactions with viewers.
     *
     * > In the  console, `LOW` and `NORMAL` correspond to `Ultra-low` and `Standard` , respectively.
     *
     * *Default* : `LOW`
     *
     * @default - "LOW"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-latencymode
     */
    readonly latencyMode?: string;
    /**
     * Channel name.
     *
     * @default - "-"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-name
     */
    readonly name?: string;
    /**
     * An optional transcode preset for the channel.
     *
     * This is selectable only for `ADVANCED_HD` and `ADVANCED_SD` channel types. For those channel types, the default preset is `HIGHER_BANDWIDTH_DELIVERY` . For other channel types ( `BASIC` and `STANDARD` ), `preset` is the empty string ("").
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-preset
     */
    readonly preset?: string;
    /**
     * The ARN of a RecordingConfiguration resource.
     *
     * An empty string indicates that recording is disabled for the channel. A RecordingConfiguration ARN indicates that recording is enabled using the specified recording configuration. See the [RecordingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html) resource for more information and an example.
     *
     * *Default* : "" (empty string, recording is disabled)
     *
     * @default - ""
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-recordingconfigurationarn
     */
    readonly recordingConfigurationArn?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-channel-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The channel type, which determines the allowable resolution and bitrate.
     *
     * *If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.* Valid values:
     *
     * - `STANDARD` : Video is transcoded: multiple qualities are generated from the original input to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through.
     * - `BASIC` : Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.
     * - `ADVANCED_SD` : Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at SD quality (480p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.
     * - `ADVANCED_HD` : Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at HD quality (720p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.
     *
     * Optional *transcode presets* (available for the `ADVANCED` types) allow you to trade off available download bandwidth and video quality, to optimize the viewing experience. There are two presets:
     *
     * - *Constrained bandwidth delivery* uses a lower bitrate for each quality level. Use it if you have low download bandwidth and/or simple video content (e.g., talking heads)
     * - *Higher bandwidth delivery* uses a higher bitrate for each quality level. Use it if you have high download bandwidth and/or complex video content (e.g., flashes and quick scene changes).
     *
     * *Default* : `STANDARD`
     *
     * @default - "STANDARD"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-type
     */
    readonly type?: string;
}
/**
 * The `AWS::IVS::PlaybackKeyPair` resource specifies an  playback key pair.
 *
 * uses a public playback key to validate playback tokens that have been signed with the corresponding private key. For more information, see [Setting Up Private Channels](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/private-channels.html) in the *Amazon IVS Low-Latency Streaming User Guide* .
 *
 * @cloudformationResource AWS::IVS::PlaybackKeyPair
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html
 */
export declare class CfnPlaybackKeyPair extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPlaybackKeyPair from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPlaybackKeyPair;
    /**
     * Key-pair ARN. For example: `arn:aws:ivs:us-west-2:693991300569:playback-key/f99cde61-c2b0-4df3-8941-ca7d38acca1a`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Key-pair identifier. For example: `98:0d:1a:a0:19:96:1e:ea:0a:0a:2c:9a:42:19:2b:e7`
     *
     * @cloudformationAttribute Fingerprint
     */
    readonly attrFingerprint: string;
    /**
     * Playback-key-pair name.
     */
    name?: string;
    /**
     * The public portion of a customer-generated key pair.
     */
    publicKeyMaterial?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnPlaybackKeyPairProps);
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
 * Properties for defining a `CfnPlaybackKeyPair`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html
 */
export interface CfnPlaybackKeyPairProps {
    /**
     * Playback-key-pair name.
     *
     * The value does not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html#cfn-ivs-playbackkeypair-name
     */
    readonly name?: string;
    /**
     * The public portion of a customer-generated key pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html#cfn-ivs-playbackkeypair-publickeymaterial
     */
    readonly publicKeyMaterial?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-playbackkeypair-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html#cfn-ivs-playbackkeypair-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::IVS::RecordingConfiguration` resource specifies an  recording configuration.
 *
 * A recording configuration enables the recording of a channel’s live streams to a data store. Multiple channels can reference the same recording configuration. For more information, see [RecordingConfiguration](https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_RecordingConfiguration.html) in the *Amazon IVS Low-Latency Streaming API Reference* .
 *
 * @cloudformationResource AWS::IVS::RecordingConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html
 */
export declare class CfnRecordingConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRecordingConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRecordingConfiguration;
    /**
     * The recording configuration ARN. For example: `arn:aws:ivs:us-west-2:123456789012:recording-configuration/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates the current state of the recording configuration. When the state is `ACTIVE` , the configuration is ready to record a channel stream. Valid values: `CREATING` | `CREATE_FAILED` | `ACTIVE` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * A destination configuration describes an S3 bucket where recorded video will be stored.
     */
    destinationConfiguration: CfnRecordingConfiguration.DestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Recording-configuration name.
     */
    name?: string;
    /**
     * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together.
     */
    recordingReconnectWindowSeconds?: number;
    /**
     * A rendition configuration describes which renditions should be recorded for a stream.
     */
    renditionConfiguration?: cdk.IResolvable | CfnRecordingConfiguration.RenditionConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A thumbnail configuration enables/disables the recording of thumbnails for a live session and controls the interval at which thumbnails are generated for the live session.
     */
    thumbnailConfiguration?: cdk.IResolvable | CfnRecordingConfiguration.ThumbnailConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRecordingConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRecordingConfiguration {
    /**
     * The DestinationConfiguration property type describes the location where recorded videos will be stored.
     *
     * Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-destinationconfiguration.html
     */
    interface DestinationConfigurationProperty {
        /**
         * An S3 destination configuration where recorded videos will be stored.
         *
         * See the [S3DestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html) property type for more information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-destinationconfiguration.html#cfn-ivs-recordingconfiguration-destinationconfiguration-s3
         */
        readonly s3?: cdk.IResolvable | CfnRecordingConfiguration.S3DestinationConfigurationProperty;
    }
    /**
     * The S3DestinationConfiguration property type describes an S3 location where recorded videos will be stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html
     */
    interface S3DestinationConfigurationProperty {
        /**
         * Location (S3 bucket name) where recorded videos will be stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html#cfn-ivs-recordingconfiguration-s3destinationconfiguration-bucketname
         */
        readonly bucketName: string;
    }
    /**
     * The RenditionConfiguration property type describes which renditions should be recorded for a stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-renditionconfiguration.html
     */
    interface RenditionConfigurationProperty {
        /**
         * A list of which renditions are recorded for a stream, if `renditionSelection` is `CUSTOM` ;
         *
         * otherwise, this field is irrelevant. The selected renditions are recorded if they are available during the stream. If a selected rendition is unavailable, the best available rendition is recorded. For details on the resolution dimensions of each rendition, see [Auto-Record to Amazon S3](https://docs.aws.amazon.com//ivs/latest/LowLatencyUserGuide/record-to-s3.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-renditionconfiguration.html#cfn-ivs-recordingconfiguration-renditionconfiguration-renditions
         */
        readonly renditions?: Array<string>;
        /**
         * The set of renditions are recorded for a stream.
         *
         * For `BASIC` channels, the `CUSTOM` value has no effect. If `CUSTOM` is specified, a set of renditions can be specified in the `renditions` field. Default: `ALL` .
         *
         * @default - "ALL"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-renditionconfiguration.html#cfn-ivs-recordingconfiguration-renditionconfiguration-renditionselection
         */
        readonly renditionSelection?: string;
    }
    /**
     * The ThumbnailConfiguration property type describes a configuration of thumbnails for recorded video.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html
     */
    interface ThumbnailConfigurationProperty {
        /**
         * Thumbnail recording mode. Valid values:.
         *
         * - `DISABLED` : Use DISABLED to disable the generation of thumbnails for recorded video.
         * - `INTERVAL` : Use INTERVAL to enable the generation of thumbnails for recorded video at a time interval controlled by the [TargetIntervalSeconds](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-targetintervalseconds) property.
         *
         * *Default* : `INTERVAL`
         *
         * @default - "INTERVAL"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-recordingmode
         */
        readonly recordingMode?: string;
        /**
         * The desired resolution of recorded thumbnails for a stream.
         *
         * Thumbnails are recorded at the selected resolution if the corresponding rendition is available during the stream; otherwise, they are recorded at source resolution. For more information about resolution values and their corresponding height and width dimensions, see [Auto-Record to Amazon S3](https://docs.aws.amazon.com//ivs/latest/LowLatencyUserGuide/record-to-s3.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-resolution
         */
        readonly resolution?: string;
        /**
         * The format in which thumbnails are recorded for a stream.
         *
         * `SEQUENTIAL` records all generated thumbnails in a serial manner, to the media/thumbnails directory. `LATEST` saves the latest thumbnail in media/thumbnails/latest/thumb.jpg and overwrites it at the interval specified by `targetIntervalSeconds` . You can enable both `SEQUENTIAL` and `LATEST` . Default: `SEQUENTIAL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-storage
         */
        readonly storage?: Array<string>;
        /**
         * The targeted thumbnail-generation interval in seconds. This is configurable (and required) only if [RecordingMode](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-recordingmode) is `INTERVAL` .
         *
         * > Setting a value for `TargetIntervalSeconds` does not guarantee that thumbnails are generated at the specified interval. For thumbnails to be generated at the `TargetIntervalSeconds` interval, the `IDR/Keyframe` value for the input video must be less than the `TargetIntervalSeconds` value. See [Amazon IVS Streaming Configuration](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/streaming-config.html) for information on setting `IDR/Keyframe` to the recommended value in video-encoder settings.
         *
         * *Default* : 60
         *
         * @default - 60
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-targetintervalseconds
         */
        readonly targetIntervalSeconds?: number;
    }
}
/**
 * Properties for defining a `CfnRecordingConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html
 */
export interface CfnRecordingConfigurationProps {
    /**
     * A destination configuration describes an S3 bucket where recorded video will be stored.
     *
     * See the DestinationConfiguration property type for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-destinationconfiguration
     */
    readonly destinationConfiguration: CfnRecordingConfiguration.DestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Recording-configuration name.
     *
     * The value does not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-name
     */
    readonly name?: string;
    /**
     * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together.
     *
     * *Default* : `0`
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-recordingreconnectwindowseconds
     */
    readonly recordingReconnectWindowSeconds?: number;
    /**
     * A rendition configuration describes which renditions should be recorded for a stream.
     *
     * See the RenditionConfiguration property type for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-renditionconfiguration
     */
    readonly renditionConfiguration?: cdk.IResolvable | CfnRecordingConfiguration.RenditionConfigurationProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A thumbnail configuration enables/disables the recording of thumbnails for a live session and controls the interval at which thumbnails are generated for the live session.
     *
     * See the ThumbnailConfiguration property type for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration
     */
    readonly thumbnailConfiguration?: cdk.IResolvable | CfnRecordingConfiguration.ThumbnailConfigurationProperty;
}
/**
 * The `AWS::IVS::StreamKey` resource specifies an  stream key associated with the referenced channel.
 *
 * Use a stream key to initiate a live stream.
 *
 * @cloudformationResource AWS::IVS::StreamKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html
 */
export declare class CfnStreamKey extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStreamKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStreamKey;
    /**
     * The stream-key ARN. For example: `arn:aws:ivs:us-west-2:123456789012:stream-key/g1H2I3j4k5L6`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The stream-key value. For example: `sk_us-west-2_abcdABCDefgh_567890abcdef`
     *
     * @cloudformationAttribute Value
     */
    readonly attrValue: string;
    /**
     * Channel ARN for the stream.
     */
    channelArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStreamKeyProps);
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
 * Properties for defining a `CfnStreamKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html
 */
export interface CfnStreamKeyProps {
    /**
     * Channel ARN for the stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html#cfn-ivs-streamkey-channelarn
     */
    readonly channelArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-streamkey-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html#cfn-ivs-streamkey-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::IVS::EncoderConfiguration` resource specifies an  encoder configuration.
 *
 * An encoder configuration describes a stream’s video configuration. For more information, see [Streaming Configuration](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/streaming-config.html) in the *Amazon IVS Low-Latency Streaming User Guide* .
 *
 * @cloudformationResource AWS::IVS::EncoderConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html
 */
export declare class CfnEncoderConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEncoderConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEncoderConfiguration;
    /**
     * The encoder-configuration ARN. For example: `arn:aws:ivs:us-west-2:123456789012:encoder-configuration/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Encoder cnfiguration name.
     */
    name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Video configuration.
     */
    video?: cdk.IResolvable | CfnEncoderConfiguration.VideoProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnEncoderConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEncoderConfiguration {
    /**
     * The Video property type describes a stream's video configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-video.html
     */
    interface VideoProperty {
        /**
         * Bitrate for generated output, in bps.
         *
         * Default: 2500000.
         *
         * @default - 2500000
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-video.html#cfn-ivs-encoderconfiguration-video-bitrate
         */
        readonly bitrate?: number;
        /**
         * Video frame rate, in fps.
         *
         * Default: 30.
         *
         * @default - 30
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-video.html#cfn-ivs-encoderconfiguration-video-framerate
         */
        readonly framerate?: number;
        /**
         * Video-resolution height.
         *
         * Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.
         *
         * @default - 720
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-video.html#cfn-ivs-encoderconfiguration-video-height
         */
        readonly height?: number;
        /**
         * Video-resolution width.
         *
         * Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.
         *
         * @default - 1280
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-video.html#cfn-ivs-encoderconfiguration-video-width
         */
        readonly width?: number;
    }
}
/**
 * Properties for defining a `CfnEncoderConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html
 */
export interface CfnEncoderConfigurationProps {
    /**
     * Encoder cnfiguration name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html#cfn-ivs-encoderconfiguration-name
     */
    readonly name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html#cfn-ivs-encoderconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Video configuration.
     *
     * Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps. See the [Video](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-video.html) property type for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html#cfn-ivs-encoderconfiguration-video
     */
    readonly video?: cdk.IResolvable | CfnEncoderConfiguration.VideoProperty;
}
/**
 * The `AWS::IVS::PlaybackRestrictionPolicy` resource specifies an  playback restriction policy.
 *
 * A playback restriction policy constrains playback by country and/or origin sites. For more information, see [Undesired Content and Viewers](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/undesired-content.html) in the *Amazon IVS Low-Latency Streaming User Guide* .
 *
 * @cloudformationResource AWS::IVS::PlaybackRestrictionPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html
 */
export declare class CfnPlaybackRestrictionPolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPlaybackRestrictionPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPlaybackRestrictionPolicy;
    /**
     * The playback-restriction-policy ARN. For example: `arn:aws:ivs:us-west-2:123456789012:playback-restriction-policy/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A list of country codes that control geoblocking restrictions.
     */
    allowedCountries: Array<string>;
    /**
     * A list of origin sites that control CORS restriction.
     */
    allowedOrigins: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Whether channel playback is constrained by the origin site.
     */
    enableStrictOriginEnforcement?: boolean | cdk.IResolvable;
    /**
     * Playback-restriction-policy name.
     */
    name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPlaybackRestrictionPolicyProps);
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
 * Properties for defining a `CfnPlaybackRestrictionPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html
 */
export interface CfnPlaybackRestrictionPolicyProps {
    /**
     * A list of country codes that control geoblocking restrictions.
     *
     * Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html#cfn-ivs-playbackrestrictionpolicy-allowedcountries
     */
    readonly allowedCountries: Array<string>;
    /**
     * A list of origin sites that control CORS restriction.
     *
     * Allowed values are the same as valid values of the Origin header defined at [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin"](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html#cfn-ivs-playbackrestrictionpolicy-allowedorigins
     */
    readonly allowedOrigins: Array<string>;
    /**
     * Whether channel playback is constrained by the origin site.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html#cfn-ivs-playbackrestrictionpolicy-enablestrictoriginenforcement
     */
    readonly enableStrictOriginEnforcement?: boolean | cdk.IResolvable;
    /**
     * Playback-restriction-policy name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html#cfn-ivs-playbackrestrictionpolicy-name
     */
    readonly name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-playbackrestrictionpolicy-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html#cfn-ivs-playbackrestrictionpolicy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::IVS::Stage` resource specifies an  stage.
 *
 * A stage is a virtual space where participants can exchange video in real time. For more information, see [CreateStage](https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStage.html) in the *Amazon IVS Real-Time Streaming API Reference* .
 *
 * @cloudformationResource AWS::IVS::Stage
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html
 */
export declare class CfnStage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStage;
    /**
     * ID of the active session within the stage. For example: `st-a1b2c3d4e5f6g`
     *
     * @cloudformationAttribute ActiveSessionId
     */
    readonly attrActiveSessionId: string;
    /**
     * The stage ARN. For example: `arn:aws:ivs:us-west-2:123456789012:stage/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Stage name.
     */
    name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnStageProps);
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
 * Properties for defining a `CfnStage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html
 */
export interface CfnStageProps {
    /**
     * Stage name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-name
     */
    readonly name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-stage-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::IVS::StorageConfiguration` resource specifies an  storage configuration.
 *
 * A storage configuration describes an S3 location where recorded videos will be stored. For more information, see [Auto-Record to Amazon S3 (Low-Latency Streaming)](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/record-to-s3.html) in the *Amazon IVS Low-Latency Streaming User Guide* .
 *
 * @cloudformationResource AWS::IVS::StorageConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html
 */
export declare class CfnStorageConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStorageConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStorageConfiguration;
    /**
     * The storage-configuration ARN. For example: `arn:aws:ivs:us-west-2:123456789012:storage-configuration/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Storage cnfiguration name.
     */
    name?: string;
    /**
     * An S3 storage configuration contains information about where recorded video will be stored.
     */
    s3: cdk.IResolvable | CfnStorageConfiguration.S3StorageConfigurationProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStorageConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStorageConfiguration {
    /**
     * The S3StorageConfiguration property type describes an S3 location where recorded videos will be stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-storageconfiguration-s3storageconfiguration.html
     */
    interface S3StorageConfigurationProperty {
        /**
         * Name of the S3 bucket where recorded video will be stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-storageconfiguration-s3storageconfiguration.html#cfn-ivs-storageconfiguration-s3storageconfiguration-bucketname
         */
        readonly bucketName: string;
    }
}
/**
 * Properties for defining a `CfnStorageConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html
 */
export interface CfnStorageConfigurationProps {
    /**
     * Storage cnfiguration name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html#cfn-ivs-storageconfiguration-name
     */
    readonly name?: string;
    /**
     * An S3 storage configuration contains information about where recorded video will be stored.
     *
     * See the [S3StorageConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-storageconfiguration-s3storageconfiguration.html) property type for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html#cfn-ivs-storageconfiguration-s3
     */
    readonly s3: cdk.IResolvable | CfnStorageConfiguration.S3StorageConfigurationProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-storageconfiguration-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html#cfn-ivs-storageconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
