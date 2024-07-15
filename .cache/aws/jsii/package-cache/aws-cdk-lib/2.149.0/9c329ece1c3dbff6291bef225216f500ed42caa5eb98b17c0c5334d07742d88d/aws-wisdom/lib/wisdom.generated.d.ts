import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies an Amazon Connect Wisdom assistant.
 *
 * @cloudformationResource AWS::Wisdom::Assistant
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html
 */
export declare class CfnAssistant extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssistant from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssistant;
    /**
     * The Amazon Resource Name (ARN) of the assistant.
     *
     * @cloudformationAttribute AssistantArn
     */
    readonly attrAssistantArn: string;
    /**
     * The ID of the Wisdom assistant.
     *
     * @cloudformationAttribute AssistantId
     */
    readonly attrAssistantId: string;
    /**
     * The description of the assistant.
     */
    description?: string;
    /**
     * The name of the assistant.
     */
    name: string;
    /**
     * The configuration information for the customer managed key used for encryption.
     */
    serverSideEncryptionConfiguration?: cdk.IResolvable | CfnAssistant.ServerSideEncryptionConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of assistant.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAssistantProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAssistant {
    /**
     * The configuration information for the customer managed key used for encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistant-serversideencryptionconfiguration.html
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * The customer managed key used for encryption.
         *
         * The customer managed key must have a policy that allows `kms:CreateGrant` and `kms:DescribeKey` permissions to the IAM identity using the key to invoke Wisdom. To use Wisdom with chat, the key policy must also allow `kms:Decrypt` , `kms:GenerateDataKey*` , and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal. For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html) . For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) in the *AWS Key Management Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistant-serversideencryptionconfiguration.html#cfn-wisdom-assistant-serversideencryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
}
/**
 * Properties for defining a `CfnAssistant`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html
 */
export interface CfnAssistantProps {
    /**
     * The description of the assistant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html#cfn-wisdom-assistant-description
     */
    readonly description?: string;
    /**
     * The name of the assistant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html#cfn-wisdom-assistant-name
     */
    readonly name: string;
    /**
     * The configuration information for the customer managed key used for encryption.
     *
     * The customer managed key must have a policy that allows `kms:CreateGrant` and `kms:DescribeKey` permissions to the IAM identity using the key to invoke Wisdom. To use Wisdom with chat, the key policy must also allow `kms:Decrypt` , `kms:GenerateDataKey*` , and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal. For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html#cfn-wisdom-assistant-serversideencryptionconfiguration
     */
    readonly serverSideEncryptionConfiguration?: cdk.IResolvable | CfnAssistant.ServerSideEncryptionConfigurationProperty;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html#cfn-wisdom-assistant-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of assistant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html#cfn-wisdom-assistant-type
     */
    readonly type: string;
}
/**
 * Specifies an association between an Amazon Connect Wisdom assistant and another resource.
 *
 * Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
 *
 * @cloudformationResource AWS::Wisdom::AssistantAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html
 */
export declare class CfnAssistantAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssistantAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssistantAssociation;
    /**
     * The Amazon Resource Name (ARN) of the Wisdom assistant.
     *
     * @cloudformationAttribute AssistantArn
     */
    readonly attrAssistantArn: string;
    /**
     * The Amazon Resource Name (ARN) of the assistant association.
     *
     * @cloudformationAttribute AssistantAssociationArn
     */
    readonly attrAssistantAssociationArn: string;
    /**
     * The ID of the association.
     *
     * @cloudformationAttribute AssistantAssociationId
     */
    readonly attrAssistantAssociationId: string;
    /**
     * The identifier of the Wisdom assistant.
     */
    assistantId: string;
    /**
     * The identifier of the associated resource.
     */
    association: CfnAssistantAssociation.AssociationDataProperty | cdk.IResolvable;
    /**
     * The type of association.
     */
    associationType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAssistantAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAssistantAssociation {
    /**
     * A union type that currently has a single argument, which is the knowledge base ID.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistantassociation-associationdata.html
     */
    interface AssociationDataProperty {
        /**
         * The identifier of the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistantassociation-associationdata.html#cfn-wisdom-assistantassociation-associationdata-knowledgebaseid
         */
        readonly knowledgeBaseId: string;
    }
}
/**
 * Properties for defining a `CfnAssistantAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html
 */
export interface CfnAssistantAssociationProps {
    /**
     * The identifier of the Wisdom assistant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-assistantid
     */
    readonly assistantId: string;
    /**
     * The identifier of the associated resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-association
     */
    readonly association: CfnAssistantAssociation.AssociationDataProperty | cdk.IResolvable;
    /**
     * The type of association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-associationtype
     */
    readonly associationType: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a knowledge base.
 *
 * @cloudformationResource AWS::Wisdom::KnowledgeBase
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html
 */
export declare class CfnKnowledgeBase extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnKnowledgeBase from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnKnowledgeBase;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     *
     * @cloudformationAttribute KnowledgeBaseArn
     */
    readonly attrKnowledgeBaseArn: string;
    /**
     * The ID of the knowledge base.
     *
     * @cloudformationAttribute KnowledgeBaseId
     */
    readonly attrKnowledgeBaseId: string;
    /**
     * The description.
     */
    description?: string;
    /**
     * The type of knowledge base.
     */
    knowledgeBaseType: string;
    /**
     * The name of the knowledge base.
     */
    name: string;
    /**
     * Information about how to render the content.
     */
    renderingConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RenderingConfigurationProperty;
    /**
     * This customer managed key must have a policy that allows `kms:CreateGrant` and `kms:DescribeKey` permissions to the IAM identity using the key to invoke Wisdom.
     */
    serverSideEncryptionConfiguration?: cdk.IResolvable | CfnKnowledgeBase.ServerSideEncryptionConfigurationProperty;
    /**
     * The source of the knowledge base content.
     */
    sourceConfiguration?: cdk.IResolvable | CfnKnowledgeBase.SourceConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnKnowledgeBaseProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnKnowledgeBase {
    /**
     * Configuration information about the external data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-sourceconfiguration.html
     */
    interface SourceConfigurationProperty {
        /**
         * Configuration information for Amazon AppIntegrations to automatically ingest content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-sourceconfiguration.html#cfn-wisdom-knowledgebase-sourceconfiguration-appintegrations
         */
        readonly appIntegrations: CfnKnowledgeBase.AppIntegrationsConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Configuration information for Amazon AppIntegrations to automatically ingest content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.html
     */
    interface AppIntegrationsConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.
         *
         * - For [Salesforce](https://docs.aws.amazon.com/https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm) , your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least `Id` , `ArticleNumber` , `VersionNumber` , `Title` , `PublishStatus` , and `IsDeleted` as source fields.
         * - For [ServiceNow](https://docs.aws.amazon.com/https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api) , your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least `number` , `short_description` , `sys_mod_count` , `workflow_state` , and `active` as source fields.
         * - For [Zendesk](https://docs.aws.amazon.com/https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/) , your AppIntegrations DataIntegration must have an ObjectConfiguration if `objectFields` is not provided, including at least `id` , `title` , `updated_at` , and `draft` as source fields.
         * - For [SharePoint](https://docs.aws.amazon.com/https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index) , your AppIntegrations DataIntegration must have a FileConfiguration, including only file extensions that are among `docx` , `pdf` , `html` , `htm` , and `txt` .
         * - For [Amazon S3](https://docs.aws.amazon.com/https://aws.amazon.com/s3/) , the ObjectConfiguration and FileConfiguration of your AppIntegrations DataIntegration must be null. The `SourceURI` of your DataIntegration must use the following format: `s3://your_s3_bucket_name` .
         *
         * > The bucket policy of the corresponding S3 bucket must allow the AWS principal `app-integrations.amazonaws.com` to perform `s3:ListBucket` , `s3:GetObject` , and `s3:GetBucketLocation` against the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.html#cfn-wisdom-knowledgebase-appintegrationsconfiguration-appintegrationarn
         */
        readonly appIntegrationArn: string;
        /**
         * The fields from the source that are made available to your agents in Amazon Q in Connect.
         *
         * Optional if ObjectConfiguration is included in the provided DataIntegration.
         *
         * - For [Salesforce](https://docs.aws.amazon.com/https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm) , you must include at least `Id` , `ArticleNumber` , `VersionNumber` , `Title` , `PublishStatus` , and `IsDeleted` .
         * - For [ServiceNow](https://docs.aws.amazon.com/https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api) , you must include at least `number` , `short_description` , `sys_mod_count` , `workflow_state` , and `active` .
         * - For [Zendesk](https://docs.aws.amazon.com/https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/) , you must include at least `id` , `title` , `updated_at` , and `draft` .
         *
         * Make sure to include additional fields. These fields are indexed and used to source recommendations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.html#cfn-wisdom-knowledgebase-appintegrationsconfiguration-objectfields
         */
        readonly objectFields?: Array<string>;
    }
    /**
     * The configuration information for the customer managed key used for encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration.html
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * The customer managed key used for encryption.
         *
         * This customer managed key must have a policy that allows `kms:CreateGrant` and `kms:DescribeKey` permissions to the IAM identity using the key to invoke Wisdom.
         *
         * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html) . For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration.html#cfn-wisdom-knowledgebase-serversideencryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Information about how to render the content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-renderingconfiguration.html
     */
    interface RenderingConfigurationProperty {
        /**
         * A URI template containing exactly one variable in `${variableName}` format.
         *
         * This can only be set for `EXTERNAL` knowledge bases. For Salesforce, ServiceNow, and Zendesk, the variable must be one of the following:
         *
         * - Salesforce: `Id` , `ArticleNumber` , `VersionNumber` , `Title` , `PublishStatus` , or `IsDeleted`
         * - ServiceNow: `number` , `short_description` , `sys_mod_count` , `workflow_state` , or `active`
         * - Zendesk: `id` , `title` , `updated_at` , or `draft`
         *
         * The variable is replaced with the actual value for a piece of content when calling [GetContent](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetContent.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-renderingconfiguration.html#cfn-wisdom-knowledgebase-renderingconfiguration-templateuri
         */
        readonly templateUri?: string;
    }
}
/**
 * Properties for defining a `CfnKnowledgeBase`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html
 */
export interface CfnKnowledgeBaseProps {
    /**
     * The description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-description
     */
    readonly description?: string;
    /**
     * The type of knowledge base.
     *
     * Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-knowledgebasetype
     */
    readonly knowledgeBaseType: string;
    /**
     * The name of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-name
     */
    readonly name: string;
    /**
     * Information about how to render the content.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-renderingconfiguration
     */
    readonly renderingConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RenderingConfigurationProperty;
    /**
     * This customer managed key must have a policy that allows `kms:CreateGrant` and `kms:DescribeKey` permissions to the IAM identity using the key to invoke Wisdom.
     *
     * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html) . For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-serversideencryptionconfiguration
     */
    readonly serverSideEncryptionConfiguration?: cdk.IResolvable | CfnKnowledgeBase.ServerSideEncryptionConfigurationProperty;
    /**
     * The source of the knowledge base content.
     *
     * Only set this argument for EXTERNAL knowledge bases.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-sourceconfiguration
     */
    readonly sourceConfiguration?: cdk.IResolvable | CfnKnowledgeBase.SourceConfigurationProperty;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}