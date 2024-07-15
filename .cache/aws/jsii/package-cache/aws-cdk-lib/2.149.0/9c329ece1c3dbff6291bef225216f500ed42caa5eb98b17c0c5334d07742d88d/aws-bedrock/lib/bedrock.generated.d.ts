import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies an agent as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - AgentName – Specify a name for the agent.
 * - AgentResourceRoleArn – Specify the Amazon Resource Name (ARN) of the service role with permissions to invoke API operations on the agent. For more information, see [Create a service role for Agents for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-permissions.html) .
 * - FoundationModel – Specify the model ID of a foundation model to use when invoking the agent. For more information, see [Supported regions and models for Agents for Amazon Bedrock](https://docs.aws.amazon.com//bedrock/latest/userguide/agents-supported.html) .
 *
 * For more information about using agents in Amazon Bedrock , see [Agents for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::Agent
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html
 */
export declare class CfnAgent extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAgent from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAgent;
    /**
     * The Amazon Resource Name (ARN) of the agent.
     *
     * @cloudformationAttribute AgentArn
     */
    readonly attrAgentArn: string;
    /**
     * The unique identifier of the agent.
     *
     * @cloudformationAttribute AgentId
     */
    readonly attrAgentId: string;
    /**
     * The status of the agent and whether it is ready for use. The following statuses are possible:
     *
     * - CREATING – The agent is being created.
     * - PREPARING – The agent is being prepared.
     * - PREPARED – The agent is prepared and ready to be invoked.
     * - NOT_PREPARED – The agent has been created but not yet prepared.
     * - FAILED – The agent API operation failed.
     * - UPDATING – The agent is being updated.
     * - DELETING – The agent is being deleted.
     *
     * @cloudformationAttribute AgentStatus
     */
    readonly attrAgentStatus: string;
    /**
     * The version of the agent.
     *
     * @cloudformationAttribute AgentVersion
     */
    readonly attrAgentVersion: string;
    /**
     * The time at which the agent was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Contains reasons that the agent-related API that you invoked failed.
     *
     * @cloudformationAttribute FailureReasons
     */
    readonly attrFailureReasons: Array<string>;
    /**
     * The time at which the agent was last prepared.
     *
     * @cloudformationAttribute PreparedAt
     */
    readonly attrPreparedAt: string;
    /**
     * Contains recommended actions to take for the agent-related API that you invoked to succeed.
     *
     * @cloudformationAttribute RecommendedActions
     */
    readonly attrRecommendedActions: Array<string>;
    /**
     * The time at which the agent was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The action groups that belong to an agent.
     */
    actionGroups?: Array<CfnAgent.AgentActionGroupProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the agent.
     */
    agentName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     */
    agentResourceRoleArn?: string;
    /**
     * Specifies whether to automatically update the `DRAFT` version of the agent after making changes to the agent.
     */
    autoPrepare?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that encrypts the agent.
     */
    customerEncryptionKeyArn?: string;
    /**
     * The description of the agent.
     */
    description?: string;
    /**
     * The foundation model used for orchestration by the agent.
     */
    foundationModel?: string;
    /**
     * Details about the guardrail associated with the agent.
     */
    guardrailConfiguration?: CfnAgent.GuardrailConfigurationProperty | cdk.IResolvable;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
     */
    idleSessionTtlInSeconds?: number;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: string;
    /**
     * The knowledge bases associated with the agent.
     */
    knowledgeBases?: Array<CfnAgent.AgentKnowledgeBaseProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Contains configurations to override prompt templates in different parts of an agent sequence.
     */
    promptOverrideConfiguration?: cdk.IResolvable | CfnAgent.PromptOverrideConfigurationProperty;
    /**
     * Specifies whether to delete the resource even if it's in use.
     */
    skipResourceInUseCheckOnDelete?: boolean | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    testAliasTags?: cdk.IResolvable | Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAgentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAgent {
    /**
     * Contains details about an action group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html
     */
    interface AgentActionGroupProperty {
        /**
         * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-actiongroupexecutor
         */
        readonly actionGroupExecutor?: CfnAgent.ActionGroupExecutorProperty | cdk.IResolvable;
        /**
         * The name of the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-actiongroupname
         */
        readonly actionGroupName: string;
        /**
         * Specifies whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-actiongroupstate
         */
        readonly actionGroupState?: string;
        /**
         * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema.
         *
         * For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-apischema
         */
        readonly apiSchema?: CfnAgent.APISchemaProperty | cdk.IResolvable;
        /**
         * The description of the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-description
         */
        readonly description?: string;
        /**
         * Defines functions that each define parameters that the agent needs to invoke from the user.
         *
         * Each function represents an action in an action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-functionschema
         */
        readonly functionSchema?: CfnAgent.FunctionSchemaProperty | cdk.IResolvable;
        /**
         * If this field is set as `AMAZON.UserInput` , the agent can request the user for additional information when trying to complete a task. The `description` , `apiSchema` , and `actionGroupExecutor` fields must be blank for this action group.
         *
         * During orchestration, if the agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an [Observation](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html) reprompting the user for more information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-parentactiongroupsignature
         */
        readonly parentActionGroupSignature?: string;
        /**
         * Specifies whether to delete the resource even if it's in use.
         *
         * By default, this value is `false` .
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-skipresourceinusecheckondelete
         */
        readonly skipResourceInUseCheckOnDelete?: boolean | cdk.IResolvable;
    }
    /**
     * Contains details about the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupexecutor.html
     */
    interface ActionGroupExecutorProperty {
        /**
         * To return the action group invocation results directly in the `InvokeAgent` response, specify `RETURN_CONTROL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupexecutor.html#cfn-bedrock-agent-actiongroupexecutor-customcontrol
         */
        readonly customControl?: string;
        /**
         * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupexecutor.html#cfn-bedrock-agent-actiongroupexecutor-lambda
         */
        readonly lambda?: string;
    }
    /**
     * Contains details about the OpenAPI schema for the action group.
     *
     * For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html) . You can either include the schema directly in the `payload` field or you can upload it to an S3 bucket and specify the S3 bucket location in the `s3` field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-apischema.html
     */
    interface APISchemaProperty {
        /**
         * The JSON or YAML-formatted payload defining the OpenAPI schema for the action group.
         *
         * For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-apischema.html#cfn-bedrock-agent-apischema-payload
         */
        readonly payload?: string;
        /**
         * Contains details about the S3 object containing the OpenAPI schema for the action group.
         *
         * For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-apischema.html#cfn-bedrock-agent-apischema-s3
         */
        readonly s3?: cdk.IResolvable | CfnAgent.S3IdentifierProperty;
    }
    /**
     * Contains information about the S3 object containing the resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-s3identifier.html
     */
    interface S3IdentifierProperty {
        /**
         * The name of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-s3identifier.html#cfn-bedrock-agent-s3identifier-s3bucketname
         */
        readonly s3BucketName?: string;
        /**
         * The S3 object key containing the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-s3identifier.html#cfn-bedrock-agent-s3identifier-s3objectkey
         */
        readonly s3ObjectKey?: string;
    }
    /**
     * Defines functions that each define parameters that the agent needs to invoke from the user.
     *
     * Each function represents an action in an action group.
     *
     * This data type is used in the following API operations:
     *
     * - [CreateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax)
     * - [CreateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax)
     * - [UpdateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax)
     * - [UpdateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax)
     * - [GetAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-functionschema.html
     */
    interface FunctionSchemaProperty {
        /**
         * A list of functions that each define an action in the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-functionschema.html#cfn-bedrock-agent-functionschema-functions
         */
        readonly functions: Array<CfnAgent.FunctionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Defines parameters that the agent needs to invoke from the user to complete the function.
     *
     * Corresponds to an action in an action group.
     *
     * This data type is used in the following API operations:
     *
     * - [CreateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax)
     * - [CreateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax)
     * - [UpdateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax)
     * - [UpdateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax)
     * - [GetAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html
     */
    interface FunctionProperty {
        /**
         * A description of the function and its purpose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html#cfn-bedrock-agent-function-description
         */
        readonly description?: string;
        /**
         * A name for the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html#cfn-bedrock-agent-function-name
         */
        readonly name: string;
        /**
         * The parameters that the agent elicits from the user to fulfill the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html#cfn-bedrock-agent-function-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnAgent.ParameterDetailProperty>;
    }
    /**
     * Contains details about a parameter in a function for an action group.
     *
     * This data type is used in the following API operations:
     *
     * - [CreateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax)
     * - [CreateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax)
     * - [UpdateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax)
     * - [UpdateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax)
     * - [GetAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html
     */
    interface ParameterDetailProperty {
        /**
         * A description of the parameter.
         *
         * Helps the foundation model determine how to elicit the parameters from the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html#cfn-bedrock-agent-parameterdetail-description
         */
        readonly description?: string;
        /**
         * Whether the parameter is required for the agent to complete the function for action group invocation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html#cfn-bedrock-agent-parameterdetail-required
         */
        readonly required?: boolean | cdk.IResolvable;
        /**
         * The data type of the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html#cfn-bedrock-agent-parameterdetail-type
         */
        readonly type: string;
    }
    /**
     * Configuration information for a guardrail that you use with the `Converse` action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-guardrailconfiguration.html
     */
    interface GuardrailConfigurationProperty {
        /**
         * The identifier for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-guardrailconfiguration.html#cfn-bedrock-agent-guardrailconfiguration-guardrailidentifier
         */
        readonly guardrailIdentifier?: string;
        /**
         * The version of the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-guardrailconfiguration.html#cfn-bedrock-agent-guardrailconfiguration-guardrailversion
         */
        readonly guardrailVersion?: string;
    }
    /**
     * Contains details about a knowledge base that is associated with an agent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html
     */
    interface AgentKnowledgeBaseProperty {
        /**
         * The description of the association between the agent and the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html#cfn-bedrock-agent-agentknowledgebase-description
         */
        readonly description: string;
        /**
         * The unique identifier of the association between the agent and the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html#cfn-bedrock-agent-agentknowledgebase-knowledgebaseid
         */
        readonly knowledgeBaseId: string;
        /**
         * Specifies whether to use the knowledge base or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html#cfn-bedrock-agent-agentknowledgebase-knowledgebasestate
         */
        readonly knowledgeBaseState?: string;
    }
    /**
     * Contains configurations to override prompts in different parts of an agent sequence.
     *
     * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptoverrideconfiguration.html
     */
    interface PromptOverrideConfigurationProperty {
        /**
         * The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.
         *
         * If you specify this field, at least one of the `promptConfigurations` must contain a `parserMode` value that is set to `OVERRIDDEN` . For more information, see [Parser Lambda function in Agents for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/lambda-parser.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptoverrideconfiguration.html#cfn-bedrock-agent-promptoverrideconfiguration-overridelambda
         */
        readonly overrideLambda?: string;
        /**
         * Contains configurations to override a prompt template in one part of an agent sequence.
         *
         * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptoverrideconfiguration.html#cfn-bedrock-agent-promptoverrideconfiguration-promptconfigurations
         */
        readonly promptConfigurations: Array<cdk.IResolvable | CfnAgent.PromptConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * Contains configurations to override a prompt template in one part of an agent sequence.
     *
     * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html
     */
    interface PromptConfigurationProperty {
        /**
         * Defines the prompt template with which to replace the default prompt template.
         *
         * You can use placeholder variables in the base prompt template to customize the prompt. For more information, see [Prompt template placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html) . For more information, see [Configure the prompt templates](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts-configure.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-baseprompttemplate
         */
        readonly basePromptTemplate?: string;
        /**
         * Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the `promptType` .
         *
         * For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-inferenceconfiguration
         */
        readonly inferenceConfiguration?: CfnAgent.InferenceConfigurationProperty | cdk.IResolvable;
        /**
         * Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the `promptType` .
         *
         * If you set the field as `OVERRIDEN` , the `overrideLambda` field in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) must be specified with the ARN of a Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-parsermode
         */
        readonly parserMode?: string;
        /**
         * Specifies whether to override the default prompt template for this `promptType` .
         *
         * Set this value to `OVERRIDDEN` to use the prompt that you provide in the `basePromptTemplate` . If you leave it as `DEFAULT` , the agent uses a default prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-promptcreationmode
         */
        readonly promptCreationMode?: string;
        /**
         * Specifies whether to allow the agent to carry out the step specified in the `promptType` .
         *
         * If you set this value to `DISABLED` , the agent skips that step. The default state for each `promptType` is as follows.
         *
         * - `PRE_PROCESSING` – `ENABLED`
         * - `ORCHESTRATION` – `ENABLED`
         * - `KNOWLEDGE_BASE_RESPONSE_GENERATION` – `ENABLED`
         * - `POST_PROCESSING` – `DISABLED`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-promptstate
         */
        readonly promptState?: string;
        /**
         * The step in the agent sequence that this prompt configuration applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-prompttype
         */
        readonly promptType?: string;
    }
    /**
     * Base inference parameters to pass to a model in a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) . For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
     *
     * If you need to pass additional parameters that the model supports, use the `additionalModelRequestFields` request field in the call to `Converse` or `ConverseStream` . For more information, see [Model parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html
     */
    interface InferenceConfigurationProperty {
        /**
         * The maximum number of tokens allowed in the generated response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-maximumlength
         */
        readonly maximumLength?: number;
        /**
         * A list of stop sequences.
         *
         * A stop sequence is a sequence of characters that causes the model to stop generating the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-stopsequences
         */
        readonly stopSequences?: Array<string>;
        /**
         * The likelihood of the model selecting higher-probability options while generating a response.
         *
         * A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.
         *
         * The default value is the default value for the model that you are using. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-temperature
         */
        readonly temperature?: number;
        /**
         * While generating a response, the model determines the probability of the following token at each point of generation.
         *
         * The value that you set for `topK` is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set `topK` to 50, the model selects the next token from among the top 50 most likely choices.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-topk
         */
        readonly topK?: number;
        /**
         * The percentage of most-likely candidates that the model considers for the next token.
         *
         * For example, if you choose a value of 0.8 for `topP` , the model selects from the top 80% of the probability distribution of tokens that could be next in the sequence.
         *
         * The default value is the default value for the model that you are using. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-topp
         */
        readonly topP?: number;
    }
}
/**
 * Properties for defining a `CfnAgent`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html
 */
export interface CfnAgentProps {
    /**
     * The action groups that belong to an agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-actiongroups
     */
    readonly actionGroups?: Array<CfnAgent.AgentActionGroupProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-agentname
     */
    readonly agentName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-agentresourcerolearn
     */
    readonly agentResourceRoleArn?: string;
    /**
     * Specifies whether to automatically update the `DRAFT` version of the agent after making changes to the agent.
     *
     * The `DRAFT` version can be continually iterated upon during internal development. By default, this value is `false` .
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-autoprepare
     */
    readonly autoPrepare?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that encrypts the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-customerencryptionkeyarn
     */
    readonly customerEncryptionKeyArn?: string;
    /**
     * The description of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-description
     */
    readonly description?: string;
    /**
     * The foundation model used for orchestration by the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-foundationmodel
     */
    readonly foundationModel?: string;
    /**
     * Details about the guardrail associated with the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-guardrailconfiguration
     */
    readonly guardrailConfiguration?: CfnAgent.GuardrailConfigurationProperty | cdk.IResolvable;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
     *
     * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-idlesessionttlinseconds
     */
    readonly idleSessionTtlInSeconds?: number;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-instruction
     */
    readonly instruction?: string;
    /**
     * The knowledge bases associated with the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-knowledgebases
     */
    readonly knowledgeBases?: Array<CfnAgent.AgentKnowledgeBaseProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Contains configurations to override prompt templates in different parts of an agent sequence.
     *
     * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-promptoverrideconfiguration
     */
    readonly promptOverrideConfiguration?: cdk.IResolvable | CfnAgent.PromptOverrideConfigurationProperty;
    /**
     * Specifies whether to delete the resource even if it's in use.
     *
     * By default, this value is `false` .
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-skipresourceinusecheckondelete
     */
    readonly skipResourceInUseCheckOnDelete?: boolean | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-testaliastags
     */
    readonly testAliasTags?: cdk.IResolvable | Record<string, string>;
}
/**
 * Specifies an agent alias as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - AgentAliasName – Specify a name for the alias.
 *
 * For more information about creating aliases for an agent in Amazon Bedrock , see [Deploy an Amazon Bedrock agent](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-deploy.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::AgentAlias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html
 */
export declare class CfnAgentAlias extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAgentAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAgentAlias;
    /**
     * The Amazon Resource Name (ARN) of the alias of the agent.
     *
     * @cloudformationAttribute AgentAliasArn
     */
    readonly attrAgentAliasArn: string;
    /**
     * Contains details about the history of the alias.
     *
     * @cloudformationAttribute AgentAliasHistoryEvents
     */
    readonly attrAgentAliasHistoryEvents: cdk.IResolvable;
    /**
     * The unique identifier of the alias of the agent.
     *
     * @cloudformationAttribute AgentAliasId
     */
    readonly attrAgentAliasId: string;
    /**
     * The status of the alias of the agent and whether it is ready for use. The following statuses are possible:
     *
     * - CREATING – The agent alias is being created.
     * - PREPARED – The agent alias is finished being created or updated and is ready to be invoked.
     * - FAILED – The agent alias API operation failed.
     * - UPDATING – The agent alias is being updated.
     * - DELETING – The agent alias is being deleted.
     *
     * @cloudformationAttribute AgentAliasStatus
     */
    readonly attrAgentAliasStatus: string;
    /**
     * The time at which the alias of the agent was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The time at which the alias was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The name of the alias of the agent.
     */
    agentAliasName: string;
    /**
     * The unique identifier of the agent.
     */
    agentId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the alias of the agent.
     */
    description?: string;
    /**
     * Contains details about the routing configuration of the alias.
     */
    routingConfiguration?: Array<CfnAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAgentAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAgentAlias {
    /**
     * Contains details about the routing configuration of the alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliasroutingconfigurationlistitem.html
     */
    interface AgentAliasRoutingConfigurationListItemProperty {
        /**
         * The version of the agent with which the alias is associated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliasroutingconfigurationlistitem.html#cfn-bedrock-agentalias-agentaliasroutingconfigurationlistitem-agentversion
         */
        readonly agentVersion: string;
    }
    /**
     * Contains details about the history of the alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html
     */
    interface AgentAliasHistoryEventProperty {
        /**
         * The date that the alias stopped being associated to the version in the `routingConfiguration` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html#cfn-bedrock-agentalias-agentaliashistoryevent-enddate
         */
        readonly endDate?: string;
        /**
         * Contains details about the version of the agent with which the alias is associated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html#cfn-bedrock-agentalias-agentaliashistoryevent-routingconfiguration
         */
        readonly routingConfiguration?: Array<CfnAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The date that the alias began being associated to the version in the `routingConfiguration` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html#cfn-bedrock-agentalias-agentaliashistoryevent-startdate
         */
        readonly startDate?: string;
    }
}
/**
 * Properties for defining a `CfnAgentAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html
 */
export interface CfnAgentAliasProps {
    /**
     * The name of the alias of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-agentaliasname
     */
    readonly agentAliasName: string;
    /**
     * The unique identifier of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-agentid
     */
    readonly agentId: string;
    /**
     * The description of the alias of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-description
     */
    readonly description?: string;
    /**
     * Contains details about the routing configuration of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-routingconfiguration
     */
    readonly routingConfiguration?: Array<CfnAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Specifies a data source as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - Name – Specify a name for the data source.
 * - KnowledgeBaseId – Specify the ID of the knowledge base for the data source to belong to.
 * - DataSourceConfiguration – Specify information about the Amazon S3 bucket containing the data source. The following sub-properties are required:
 *
 * - Type – Specify the value `S3` .
 *
 * For more information about setting up data sources in Amazon Bedrock , see [Set up a data source for your knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::DataSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html
 */
export declare class CfnDataSource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataSource;
    /**
     * The time at which the data source was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The unique identifier of the data source.
     *
     * @cloudformationAttribute DataSourceId
     */
    readonly attrDataSourceId: string;
    /**
     * The status of the data source. The following statuses are possible:
     *
     * - Available – The data source has been created and is ready for ingestion into the knowledge base.
     * - Deleting – The data source is being deleted.
     *
     * @cloudformationAttribute DataSourceStatus
     */
    readonly attrDataSourceStatus: string;
    /**
     * The detailed reasons on the failure to delete a data source.
     *
     * @cloudformationAttribute FailureReasons
     */
    readonly attrFailureReasons: Array<string>;
    /**
     * The time at which the data source was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The data deletion policy for a data source.
     */
    dataDeletionPolicy?: string;
    /**
     * Contains details about how the data source is stored.
     */
    dataSourceConfiguration: CfnDataSource.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * The description of the data source.
     */
    description?: string;
    /**
     * The unique identifier of the knowledge base to which the data source belongs.
     */
    knowledgeBaseId: string;
    /**
     * The name of the data source.
     */
    name: string;
    /**
     * Contains details about the configuration of the server-side encryption.
     */
    serverSideEncryptionConfiguration?: cdk.IResolvable | CfnDataSource.ServerSideEncryptionConfigurationProperty;
    /**
     * Contains details about how to ingest the documents in the data source.
     */
    vectorIngestionConfiguration?: cdk.IResolvable | CfnDataSource.VectorIngestionConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataSource {
    /**
     * Contains details about how a data source is stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html
     */
    interface DataSourceConfigurationProperty {
        /**
         * Contains details about the configuration of the S3 object containing the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDataSource.S3DataSourceConfigurationProperty;
        /**
         * The type of storage for the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-type
         */
        readonly type: string;
    }
    /**
     * Contains information about the S3 configuration of the data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html
     */
    interface S3DataSourceConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the bucket that contains the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html#cfn-bedrock-datasource-s3datasourceconfiguration-bucketarn
         */
        readonly bucketArn: string;
        /**
         * The bucket account owner ID for the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html#cfn-bedrock-datasource-s3datasourceconfiguration-bucketowneraccountid
         */
        readonly bucketOwnerAccountId?: string;
        /**
         * A list of S3 prefixes that define the object containing the data sources.
         *
         * For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html#cfn-bedrock-datasource-s3datasourceconfiguration-inclusionprefixes
         */
        readonly inclusionPrefixes?: Array<string>;
    }
    /**
     * Contains the configuration for server-side encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-serversideencryptionconfiguration.html
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-serversideencryptionconfiguration.html#cfn-bedrock-datasource-serversideencryptionconfiguration-kmskeyarn
         */
        readonly kmsKeyArn?: string;
    }
    /**
     * Contains details about how to ingest the documents in a data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-vectoringestionconfiguration.html
     */
    interface VectorIngestionConfigurationProperty {
        /**
         * Details about how to chunk the documents in the data source.
         *
         * A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-vectoringestionconfiguration.html#cfn-bedrock-datasource-vectoringestionconfiguration-chunkingconfiguration
         */
        readonly chunkingConfiguration?: CfnDataSource.ChunkingConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Details about how to chunk the documents in the data source.
     *
     * A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html
     */
    interface ChunkingConfigurationProperty {
        /**
         * Knowledge base can split your source data into chunks.
         *
         * A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for `NONE` , then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
         *
         * - `FIXED_SIZE` – Amazon Bedrock splits your source data into chunks of the approximate size that you set in the `fixedSizeChunkingConfiguration` .
         * - `NONE` – Amazon Bedrock treats each file as one chunk. If you choose this option, you may want to pre-process your documents by splitting them into separate files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html#cfn-bedrock-datasource-chunkingconfiguration-chunkingstrategy
         */
        readonly chunkingStrategy: string;
        /**
         * Configurations for when you choose fixed-size chunking.
         *
         * If you set the `chunkingStrategy` as `NONE` , exclude this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html#cfn-bedrock-datasource-chunkingconfiguration-fixedsizechunkingconfiguration
         */
        readonly fixedSizeChunkingConfiguration?: CfnDataSource.FixedSizeChunkingConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Configurations for when you choose fixed-size chunking.
     *
     * If you set the `chunkingStrategy` as `NONE` , exclude this field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html
     */
    interface FixedSizeChunkingConfigurationProperty {
        /**
         * The maximum number of tokens to include in a chunk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html#cfn-bedrock-datasource-fixedsizechunkingconfiguration-maxtokens
         */
        readonly maxTokens: number;
        /**
         * The percentage of overlap between adjacent chunks of a data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html#cfn-bedrock-datasource-fixedsizechunkingconfiguration-overlappercentage
         */
        readonly overlapPercentage: number;
    }
}
/**
 * Properties for defining a `CfnDataSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html
 */
export interface CfnDataSourceProps {
    /**
     * The data deletion policy for a data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datadeletionpolicy
     */
    readonly dataDeletionPolicy?: string;
    /**
     * Contains details about how the data source is stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration
     */
    readonly dataSourceConfiguration: CfnDataSource.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * The description of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-description
     */
    readonly description?: string;
    /**
     * The unique identifier of the knowledge base to which the data source belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-knowledgebaseid
     */
    readonly knowledgeBaseId: string;
    /**
     * The name of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-name
     */
    readonly name: string;
    /**
     * Contains details about the configuration of the server-side encryption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-serversideencryptionconfiguration
     */
    readonly serverSideEncryptionConfiguration?: cdk.IResolvable | CfnDataSource.ServerSideEncryptionConfigurationProperty;
    /**
     * Contains details about how to ingest the documents in the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-vectoringestionconfiguration
     */
    readonly vectorIngestionConfiguration?: cdk.IResolvable | CfnDataSource.VectorIngestionConfigurationProperty;
}
/**
 * Creates a guardrail to block topics and to implement safeguards for your generative AI applications.
 *
 * You can configure the following policies in a guardrail to avoid undesirable and harmful content, filter out denied topics and words, and remove sensitive information for privacy protection.
 *
 * - *Content filters* - Adjust filter strengths to block input prompts or model responses containing harmful content.
 * - *Denied topics* - Define a set of topics that are undesirable in the context of your application. These topics will be blocked if detected in user queries or model responses.
 * - *Word filters* - Configure filters to block undesirable words, phrases, and profanity. Such words can include offensive terms, competitor names etc.
 * - *Sensitive information filters* - Block or mask sensitive information such as personally identifiable information (PII) or custom regex in user inputs and model responses.
 *
 * In addition to the above policies, you can also configure the messages to be returned to the user if a user input or model response is in violation of the policies defined in the guardrail.
 *
 * For more information, see [Guardrails for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) in the *Amazon Bedrock User Guide* .
 *
 * @cloudformationResource AWS::Bedrock::Guardrail
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html
 */
export declare class CfnGuardrail extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGuardrail from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGuardrail;
    /**
     * The date and time at which the guardrail was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Appears if the `status` of the guardrail is `FAILED` . A list of recommendations to carry out before retrying the request.
     *
     * @cloudformationAttribute FailureRecommendations
     */
    readonly attrFailureRecommendations: Array<string>;
    /**
     * The ARN of the guardrail.
     *
     * @cloudformationAttribute GuardrailArn
     */
    readonly attrGuardrailArn: string;
    /**
     * The unique identifier of the guardrail.
     *
     * @cloudformationAttribute GuardrailId
     */
    readonly attrGuardrailId: string;
    /**
     * The status of the guardrail.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Appears if the `status` is `FAILED` . A list of reasons for why the guardrail failed to be created, updated, versioned, or deleted.
     *
     * @cloudformationAttribute StatusReasons
     */
    readonly attrStatusReasons: Array<string>;
    /**
     * The date and time at which the guardrail was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The version of the guardrail that was created. This value will always be `DRAFT` .
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * The message to return when the guardrail blocks a prompt.
     */
    blockedInputMessaging: string;
    /**
     * The message to return when the guardrail blocks a model response.
     */
    blockedOutputsMessaging: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The content filter policies to configure for the guardrail.
     */
    contentPolicyConfig?: CfnGuardrail.ContentPolicyConfigProperty | cdk.IResolvable;
    /**
     * A description of the guardrail.
     */
    description?: string;
    /**
     * The ARN of the AWS KMS key that you use to encrypt the guardrail.
     */
    kmsKeyArn?: string;
    /**
     * The name of the guardrail.
     */
    name: string;
    /**
     * The sensitive information policy to configure for the guardrail.
     */
    sensitiveInformationPolicyConfig?: cdk.IResolvable | CfnGuardrail.SensitiveInformationPolicyConfigProperty;
    /**
     * The tags that you want to attach to the guardrail.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The topic policies to configure for the guardrail.
     */
    topicPolicyConfig?: cdk.IResolvable | CfnGuardrail.TopicPolicyConfigProperty;
    /**
     * The word policy you configure for the guardrail.
     */
    wordPolicyConfig?: cdk.IResolvable | CfnGuardrail.WordPolicyConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGuardrailProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGuardrail {
    /**
     * Contains details about how to handle harmful content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentpolicyconfig.html
     */
    interface ContentPolicyConfigProperty {
        /**
         * Contains the type of the content filter and how strongly it should apply to prompts and model responses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentpolicyconfig.html#cfn-bedrock-guardrail-contentpolicyconfig-filtersconfig
         */
        readonly filtersConfig: Array<CfnGuardrail.ContentFilterConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Contains filter strengths for harmful content.
     *
     * Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.
     *
     * - *Hate* – Describes language or a statement that discriminates, criticizes, insults, denounces, or dehumanizes a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).
     * - *Insults* – Describes language or a statement that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.
     * - *Sexual* – Describes language or a statement that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.
     * - *Violence* – Describes language or a statement that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing.
     *
     * Content filtering depends on the confidence classification of user inputs and FM responses across each of the four harmful categories. All input and output statements are classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For example, if a statement is classified as *Hate* with HIGH confidence, the likelihood of the statement representing hateful content is high. A single statement can be classified across multiple categories with varying confidence levels. For example, a single statement can be classified as *Hate* with HIGH confidence, *Insults* with LOW confidence, *Sexual* with NONE confidence, and *Violence* with MEDIUM confidence.
     *
     * For more information, see [Guardrails content filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html
     */
    interface ContentFilterConfigProperty {
        /**
         * The strength of the content filter to apply to prompts.
         *
         * As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html#cfn-bedrock-guardrail-contentfilterconfig-inputstrength
         */
        readonly inputStrength: string;
        /**
         * The strength of the content filter to apply to model responses.
         *
         * As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html#cfn-bedrock-guardrail-contentfilterconfig-outputstrength
         */
        readonly outputStrength: string;
        /**
         * The harmful category that the content filter is applied to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html#cfn-bedrock-guardrail-contentfilterconfig-type
         */
        readonly type: string;
    }
    /**
     * Contains details about PII entities and regular expressions to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html
     */
    interface SensitiveInformationPolicyConfigProperty {
        /**
         * A list of PII entities to configure to the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig-piientitiesconfig
         */
        readonly piiEntitiesConfig?: Array<cdk.IResolvable | CfnGuardrail.PiiEntityConfigProperty> | cdk.IResolvable;
        /**
         * A list of regular expressions to configure to the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig-regexesconfig
         */
        readonly regexesConfig?: Array<cdk.IResolvable | CfnGuardrail.RegexConfigProperty> | cdk.IResolvable;
    }
    /**
     * The PII entity to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientityconfig.html
     */
    interface PiiEntityConfigProperty {
        /**
         * Configure guardrail action when the PII entity is detected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientityconfig.html#cfn-bedrock-guardrail-piientityconfig-action
         */
        readonly action: string;
        /**
         * Configure guardrail type when the PII entity is detected.
         *
         * The following PIIs are used to block or mask sensitive information:
         *
         * - *General*
         *
         * - *ADDRESS*
         *
         * A physical address, such as "100 Main Street, Anytown, USA" or "Suite #12, Building 123". An address can include information such as the street, building, location, city, state, country, county, zip code, precinct, and neighborhood.
         * - *AGE*
         *
         * An individual's age, including the quantity and unit of time. For example, in the phrase "I am 40 years old," Guarrails recognizes "40 years" as an age.
         * - *NAME*
         *
         * An individual's name. This entity type does not include titles, such as Dr., Mr., Mrs., or Miss. guardrails doesn't apply this entity type to names that are part of organizations or addresses. For example, guardrails recognizes the "John Doe Organization" as an organization, and it recognizes "Jane Doe Street" as an address.
         * - *EMAIL*
         *
         * An email address, such as *marymajor@email.com* .
         * - *PHONE*
         *
         * A phone number. This entity type also includes fax and pager numbers.
         * - *USERNAME*
         *
         * A user name that identifies an account, such as a login name, screen name, nick name, or handle.
         * - *PASSWORD*
         *
         * An alphanumeric string that is used as a password, such as "* *very20special#pass** ".
         * - *DRIVER_ID*
         *
         * The number assigned to a driver's license, which is an official document permitting an individual to operate one or more motorized vehicles on a public road. A driver's license number consists of alphanumeric characters.
         * - *LICENSE_PLATE*
         *
         * A license plate for a vehicle is issued by the state or country where the vehicle is registered. The format for passenger vehicles is typically five to eight digits, consisting of upper-case letters and numbers. The format varies depending on the location of the issuing state or country.
         * - *VEHICLE_IDENTIFICATION_NUMBER*
         *
         * A Vehicle Identification Number (VIN) uniquely identifies a vehicle. VIN content and format are defined in the *ISO 3779* specification. Each country has specific codes and formats for VINs.
         * - *Finance*
         *
         * - *REDIT_DEBIT_CARD_CVV*
         *
         * A three-digit card verification code (CVV) that is present on VISA, MasterCard, and Discover credit and debit cards. For American Express credit or debit cards, the CVV is a four-digit numeric code.
         * - *CREDIT_DEBIT_CARD_EXPIRY*
         *
         * The expiration date for a credit or debit card. This number is usually four digits long and is often formatted as *month/year* or *MM/YY* . Guardrails recognizes expiration dates such as *01/21* , *01/2021* , and *Jan 2021* .
         * - *CREDIT_DEBIT_CARD_NUMBER*
         *
         * The number for a credit or debit card. These numbers can vary from 13 to 16 digits in length. However, Amazon Comprehend also recognizes credit or debit card numbers when only the last four digits are present.
         * - *PIN*
         *
         * A four-digit personal identification number (PIN) with which you can access your bank account.
         * - *INTERNATIONAL_BANK_ACCOUNT_NUMBER*
         *
         * An International Bank Account Number has specific formats in each country. For more information, see [www.iban.com/structure](https://docs.aws.amazon.com/https://www.iban.com/structure) .
         * - *SWIFT_CODE*
         *
         * A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify a particular bank or branch. Banks use these codes for money transfers such as international wire transfers.
         *
         * SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to specific branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer to the head or primary office.
         * - *IT*
         *
         * - *IP_ADDRESS*
         *
         * An IPv4 address, such as *198.51.100.0* .
         * - *MAC_ADDRESS*
         *
         * A *media access control* (MAC) address is a unique identifier assigned to a network interface controller (NIC).
         * - *URL*
         *
         * A web address, such as *www.example.com* .
         * - *AWS_ACCESS_KEY*
         *
         * A unique identifier that's associated with a secret access key; you use the access key ID and secret access key to sign programmatic AWS requests cryptographically.
         * - *AWS_SECRET_KEY*
         *
         * A unique identifier that's associated with an access key. You use the access key ID and secret access key to sign programmatic AWS requests cryptographically.
         * - *USA specific*
         *
         * - *US_BANK_ACCOUNT_NUMBER*
         *
         * A US bank account number, which is typically 10 to 12 digits long.
         * - *US_BANK_ROUTING_NUMBER*
         *
         * A US bank account routing number. These are typically nine digits long,
         * - *US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER*
         *
         * A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number that starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN can be formatted with a space or a dash after the third and forth digits.
         * - *US_PASSPORT_NUMBER*
         *
         * A US passport number. Passport numbers range from six to nine alphanumeric characters.
         * - *US_SOCIAL_SECURITY_NUMBER*
         *
         * A US Social Security Number (SSN) is a nine-digit number that is issued to US citizens, permanent residents, and temporary working residents.
         * - *Canada specific*
         *
         * - *CA_HEALTH_NUMBER*
         *
         * A Canadian Health Service Number is a 10-digit unique identifier, required for individuals to access healthcare benefits.
         * - *CA_SOCIAL_INSURANCE_NUMBER*
         *
         * A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier, required for individuals to access government programs and benefits.
         *
         * The SIN is formatted as three groups of three digits, such as *123-456-789* . A SIN can be validated through a simple check-digit process called the [Luhn algorithm](https://docs.aws.amazon.com/https://www.wikipedia.org/wiki/Luhn_algorithm) .
         * - *UK Specific*
         *
         * - *UK_NATIONAL_HEALTH_SERVICE_NUMBER*
         *
         * A UK National Health Service Number is a 10-17 digit number, such as *485 777 3456* . The current system formats the 10-digit number with spaces after the third and sixth digits. The final digit is an error-detecting checksum.
         * - *UK_NATIONAL_INSURANCE_NUMBER*
         *
         * A UK National Insurance Number (NINO) provides individuals with access to National Insurance (social security) benefits. It is also used for some purposes in the UK tax system.
         *
         * The number is nine digits long and starts with two letters, followed by six numbers and one letter. A NINO can be formatted with a space or a dash after the two letters and after the second, forth, and sixth digits.
         * - *UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER*
         *
         * A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a taxpayer or a business.
         * - *Custom*
         *
         * - *Regex filter* - You can use a regular expressions to define patterns for a guardrail to recognize and act upon such as serial number, booking ID etc..
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientityconfig.html#cfn-bedrock-guardrail-piientityconfig-type
         */
        readonly type: string;
    }
    /**
     * The regular expression to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html
     */
    interface RegexConfigProperty {
        /**
         * The guardrail action to configure when matching regular expression is detected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-action
         */
        readonly action: string;
        /**
         * The description of the regular expression to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-description
         */
        readonly description?: string;
        /**
         * The name of the regular expression to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-name
         */
        readonly name: string;
        /**
         * The regular expression pattern to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-pattern
         */
        readonly pattern: string;
    }
    /**
     * Contains details about topics that the guardrail should identify and deny.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicpolicyconfig.html
     */
    interface TopicPolicyConfigProperty {
        /**
         * A list of policies related to topics that the guardrail should deny.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicpolicyconfig.html#cfn-bedrock-guardrail-topicpolicyconfig-topicsconfig
         */
        readonly topicsConfig: Array<cdk.IResolvable | CfnGuardrail.TopicConfigProperty> | cdk.IResolvable;
    }
    /**
     * Details about topics for the guardrail to identify and deny.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html
     */
    interface TopicConfigProperty {
        /**
         * A definition of the topic to deny.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-definition
         */
        readonly definition: string;
        /**
         * A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-examples
         */
        readonly examples?: Array<string>;
        /**
         * The name of the topic to deny.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-name
         */
        readonly name: string;
        /**
         * Specifies to deny the topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-type
         */
        readonly type: string;
    }
    /**
     * Contains details about the word policy to configured for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordpolicyconfig.html
     */
    interface WordPolicyConfigProperty {
        /**
         * A list of managed words to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordpolicyconfig.html#cfn-bedrock-guardrail-wordpolicyconfig-managedwordlistsconfig
         */
        readonly managedWordListsConfig?: Array<cdk.IResolvable | CfnGuardrail.ManagedWordsConfigProperty> | cdk.IResolvable;
        /**
         * A list of words to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordpolicyconfig.html#cfn-bedrock-guardrail-wordpolicyconfig-wordsconfig
         */
        readonly wordsConfig?: Array<cdk.IResolvable | CfnGuardrail.WordConfigProperty> | cdk.IResolvable;
    }
    /**
     * A word to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordconfig.html
     */
    interface WordConfigProperty {
        /**
         * Text of the word configured for the guardrail to block.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordconfig.html#cfn-bedrock-guardrail-wordconfig-text
         */
        readonly text: string;
    }
    /**
     * The managed word list to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-managedwordsconfig.html
     */
    interface ManagedWordsConfigProperty {
        /**
         * The managed word type to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-managedwordsconfig.html#cfn-bedrock-guardrail-managedwordsconfig-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnGuardrail`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html
 */
export interface CfnGuardrailProps {
    /**
     * The message to return when the guardrail blocks a prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-blockedinputmessaging
     */
    readonly blockedInputMessaging: string;
    /**
     * The message to return when the guardrail blocks a model response.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-blockedoutputsmessaging
     */
    readonly blockedOutputsMessaging: string;
    /**
     * The content filter policies to configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contentpolicyconfig
     */
    readonly contentPolicyConfig?: CfnGuardrail.ContentPolicyConfigProperty | cdk.IResolvable;
    /**
     * A description of the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-description
     */
    readonly description?: string;
    /**
     * The ARN of the AWS KMS key that you use to encrypt the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The name of the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-name
     */
    readonly name: string;
    /**
     * The sensitive information policy to configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig
     */
    readonly sensitiveInformationPolicyConfig?: cdk.IResolvable | CfnGuardrail.SensitiveInformationPolicyConfigProperty;
    /**
     * The tags that you want to attach to the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The topic policies to configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicpolicyconfig
     */
    readonly topicPolicyConfig?: cdk.IResolvable | CfnGuardrail.TopicPolicyConfigProperty;
    /**
     * The word policy you configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-wordpolicyconfig
     */
    readonly wordPolicyConfig?: cdk.IResolvable | CfnGuardrail.WordPolicyConfigProperty;
}
/**
 * Creates a version of the guardrail.
 *
 * Use this API to create a snapshot of the guardrail when you are satisfied with a configuration, or to compare the configuration with another version.
 *
 * @cloudformationResource AWS::Bedrock::GuardrailVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html
 */
export declare class CfnGuardrailVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGuardrailVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGuardrailVersion;
    /**
     * The ARN of the guardrail.
     *
     * @cloudformationAttribute GuardrailArn
     */
    readonly attrGuardrailArn: string;
    /**
     * The unique identifier of the guardrail.
     *
     * @cloudformationAttribute GuardrailId
     */
    readonly attrGuardrailId: string;
    /**
     * The version of the guardrail.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * A description of the guardrail version.
     */
    description?: string;
    /**
     * The unique identifier of the guardrail.
     */
    guardrailIdentifier: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGuardrailVersionProps);
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
 * Properties for defining a `CfnGuardrailVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html
 */
export interface CfnGuardrailVersionProps {
    /**
     * A description of the guardrail version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html#cfn-bedrock-guardrailversion-description
     */
    readonly description?: string;
    /**
     * The unique identifier of the guardrail.
     *
     * This can be an ID or the ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html#cfn-bedrock-guardrailversion-guardrailidentifier
     */
    readonly guardrailIdentifier: string;
}
/**
 * Specifies a knowledge base as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - Name – Specify a name for the knowledge base.
 * - RoleArn – Specify the Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base. For more information, see [Create a service role for Knowledge base for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-permissions.html) .
 * - KnowledgeBaseConfiguration – Specify the embeddings configuration of the knowledge base. The following sub-properties are required:
 *
 * - Type – Specify the value `VECTOR` .
 * - StorageConfiguration – Specify information about the vector store in which the data source is stored. The following sub-properties are required:
 *
 * - Type – Specify the vector store service that you are using.
 *
 * > Redis Enterprise Cloud vector stores are currently unsupported in AWS CloudFormation .
 *
 * For more information about using knowledge bases in Amazon Bedrock , see [Knowledge base for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::KnowledgeBase
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html
 */
export declare class CfnKnowledgeBase extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The time at which the knowledge base was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * A list of reasons that the API operation on the knowledge base failed.
     *
     * @cloudformationAttribute FailureReasons
     */
    readonly attrFailureReasons: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     *
     * @cloudformationAttribute KnowledgeBaseArn
     */
    readonly attrKnowledgeBaseArn: string;
    /**
     * The unique identifier of the knowledge base.
     *
     * @cloudformationAttribute KnowledgeBaseId
     */
    readonly attrKnowledgeBaseId: string;
    /**
     * The status of the knowledge base.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The time at which the knowledge base was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the knowledge base.
     */
    description?: string;
    /**
     * Contains details about the embeddings configuration of the knowledge base.
     */
    knowledgeBaseConfiguration: cdk.IResolvable | CfnKnowledgeBase.KnowledgeBaseConfigurationProperty;
    /**
     * The name of the knowledge base.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     */
    roleArn: string;
    /**
     * Contains details about the storage configuration of the knowledge base.
     */
    storageConfiguration: cdk.IResolvable | CfnKnowledgeBase.StorageConfigurationProperty;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
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
     * Contains details about the embeddings configuration of the knowledge base.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html
     */
    interface KnowledgeBaseConfigurationProperty {
        /**
         * The type of data that the data source is converted into for the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-type
         */
        readonly type: string;
        /**
         * Contains details about the embeddings model that'sused to convert the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-vectorknowledgebaseconfiguration
         */
        readonly vectorKnowledgeBaseConfiguration: cdk.IResolvable | CfnKnowledgeBase.VectorKnowledgeBaseConfigurationProperty;
    }
    /**
     * Contains details about the model used to create vector embeddings for the knowledge base.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html
     */
    interface VectorKnowledgeBaseConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-embeddingmodelarn
         */
        readonly embeddingModelArn: string;
    }
    /**
     * Contains the storage configuration of the knowledge base.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html
     */
    interface StorageConfigurationProperty {
        /**
         * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-opensearchserverlessconfiguration
         */
        readonly opensearchServerlessConfiguration?: cdk.IResolvable | CfnKnowledgeBase.OpenSearchServerlessConfigurationProperty;
        /**
         * Contains the storage configuration of the knowledge base in Pinecone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-pineconeconfiguration
         */
        readonly pineconeConfiguration?: cdk.IResolvable | CfnKnowledgeBase.PineconeConfigurationProperty;
        /**
         * Contains details about the storage configuration of the knowledge base in Amazon RDS.
         *
         * For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-rdsconfiguration
         */
        readonly rdsConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RdsConfigurationProperty;
        /**
         * The vector store service in which the knowledge base is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-type
         */
        readonly type: string;
    }
    /**
     * Contains details about the storage configuration of the knowledge base in Amazon OpenSearch Service.
     *
     * For more information, see [Create a vector index in Amazon OpenSearch Service](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html
     */
    interface OpenSearchServerlessConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the OpenSearch Service vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-collectionarn
         */
        readonly collectionArn: string;
        /**
         * Contains the names of the fields to which to map information about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-fieldmapping
         */
        readonly fieldMapping: cdk.IResolvable | CfnKnowledgeBase.OpenSearchServerlessFieldMappingProperty;
        /**
         * The name of the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-vectorindexname
         */
        readonly vectorIndexName: string;
    }
    /**
     * Contains the names of the fields to which to map information about the vector store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html
     */
    interface OpenSearchServerlessFieldMappingProperty {
        /**
         * The name of the field in which Amazon Bedrock stores metadata about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-metadatafield
         */
        readonly metadataField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the raw text from your data.
         *
         * The text is split according to the chunking strategy you choose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-textfield
         */
        readonly textField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-vectorfield
         */
        readonly vectorField: string;
    }
    /**
     * Contains details about the storage configuration of the knowledge base in Pinecone.
     *
     * For more information, see [Create a vector index in Pinecone](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html
     */
    interface PineconeConfigurationProperty {
        /**
         * The endpoint URL for your index management page.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-connectionstring
         */
        readonly connectionString: string;
        /**
         * The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-credentialssecretarn
         */
        readonly credentialsSecretArn: string;
        /**
         * Contains the names of the fields to which to map information about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-fieldmapping
         */
        readonly fieldMapping: cdk.IResolvable | CfnKnowledgeBase.PineconeFieldMappingProperty;
        /**
         * The namespace to be used to write new data to your database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-namespace
         */
        readonly namespace?: string;
    }
    /**
     * Contains the names of the fields to which to map information about the vector store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconefieldmapping.html
     */
    interface PineconeFieldMappingProperty {
        /**
         * The name of the field in which Amazon Bedrock stores metadata about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconefieldmapping.html#cfn-bedrock-knowledgebase-pineconefieldmapping-metadatafield
         */
        readonly metadataField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the raw text from your data.
         *
         * The text is split according to the chunking strategy you choose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconefieldmapping.html#cfn-bedrock-knowledgebase-pineconefieldmapping-textfield
         */
        readonly textField: string;
    }
    /**
     * Contains details about the storage configuration of the knowledge base in Amazon RDS.
     *
     * For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html
     */
    interface RdsConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-credentialssecretarn
         */
        readonly credentialsSecretArn: string;
        /**
         * The name of your Amazon RDS database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-databasename
         */
        readonly databaseName: string;
        /**
         * Contains the names of the fields to which to map information about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-fieldmapping
         */
        readonly fieldMapping: cdk.IResolvable | CfnKnowledgeBase.RdsFieldMappingProperty;
        /**
         * The Amazon Resource Name (ARN) of the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-resourcearn
         */
        readonly resourceArn: string;
        /**
         * The name of the table in the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-tablename
         */
        readonly tableName: string;
    }
    /**
     * Contains the names of the fields to which to map information about the vector store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html
     */
    interface RdsFieldMappingProperty {
        /**
         * The name of the field in which Amazon Bedrock stores metadata about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-metadatafield
         */
        readonly metadataField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the ID for each entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-primarykeyfield
         */
        readonly primaryKeyField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the raw text from your data.
         *
         * The text is split according to the chunking strategy you choose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-textfield
         */
        readonly textField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-vectorfield
         */
        readonly vectorField: string;
    }
}
/**
 * Properties for defining a `CfnKnowledgeBase`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html
 */
export interface CfnKnowledgeBaseProps {
    /**
     * The description of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-description
     */
    readonly description?: string;
    /**
     * Contains details about the embeddings configuration of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration
     */
    readonly knowledgeBaseConfiguration: cdk.IResolvable | CfnKnowledgeBase.KnowledgeBaseConfigurationProperty;
    /**
     * The name of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rolearn
     */
    readonly roleArn: string;
    /**
     * Contains details about the storage configuration of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration
     */
    readonly storageConfiguration: cdk.IResolvable | CfnKnowledgeBase.StorageConfigurationProperty;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-tags
     */
    readonly tags?: Record<string, string>;
}