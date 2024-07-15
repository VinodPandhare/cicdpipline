import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::IoT1Click::Device` resource controls the enabled state of an AWS IoT 1-Click compatible device.
 *
 * For more information, see [Device](https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html) in the *AWS IoT 1-Click Devices API Reference* .
 *
 * @cloudformationResource AWS::IoT1Click::Device
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html
 */
export declare class CfnDevice extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDevice from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDevice;
    /**
     * The ARN of the device, such as `arn:aws:iot1click:us-west-2:123456789012:devices/G030PX0312744DWM` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier of the device.
     *
     * @cloudformationAttribute DeviceId
     */
    readonly attrDeviceId: string;
    /**
     * A Boolean value indicating whether the device is enabled ( `true` ) or not ( `false` ).
     *
     * @cloudformationAttribute Enabled
     */
    readonly attrEnabled: cdk.IResolvable;
    /**
     * The ID of the device, such as `G030PX0312744DWM` .
     */
    deviceId: string;
    /**
     * A Boolean value indicating whether the device is enabled ( `true` ) or not ( `false` ).
     */
    enabled: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeviceProps);
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
 * Properties for defining a `CfnDevice`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html
 */
export interface CfnDeviceProps {
    /**
     * The ID of the device, such as `G030PX0312744DWM` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html#cfn-iot1click-device-deviceid
     */
    readonly deviceId: string;
    /**
     * A Boolean value indicating whether the device is enabled ( `true` ) or not ( `false` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html#cfn-iot1click-device-enabled
     */
    readonly enabled: boolean | cdk.IResolvable;
}
/**
 * The `AWS::IoT1Click::Placement` resource creates a placement to be associated with an AWS IoT 1-Click project.
 *
 * A placement is an instance of a device in a location. For more information, see [Projects, Templates, and Placements](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-PTP.html) in the *AWS IoT 1-Click Developer Guide* .
 *
 * @cloudformationResource AWS::IoT1Click::Placement
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html
 */
export declare class CfnPlacement extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPlacement from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPlacement;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the placement, such as `floor17` .
     *
     * @cloudformationAttribute PlacementName
     */
    readonly attrPlacementName: string;
    /**
     * The name of the project containing the placement, such as `conference-rooms` .
     *
     * @cloudformationAttribute ProjectName
     */
    readonly attrProjectName: string;
    /**
     * The devices to associate with the placement, as defined by a mapping of zero or more key-value pairs wherein the key is a template name and the value is a device ID.
     */
    associatedDevices?: any | cdk.IResolvable;
    /**
     * The user-defined attributes associated with the placement.
     */
    attributes?: any | cdk.IResolvable;
    /**
     * The name of the placement.
     */
    placementName?: string;
    /**
     * The name of the project containing the placement.
     */
    projectName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPlacementProps);
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
 * Properties for defining a `CfnPlacement`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html
 */
export interface CfnPlacementProps {
    /**
     * The devices to associate with the placement, as defined by a mapping of zero or more key-value pairs wherein the key is a template name and the value is a device ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-associateddevices
     */
    readonly associatedDevices?: any | cdk.IResolvable;
    /**
     * The user-defined attributes associated with the placement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-attributes
     */
    readonly attributes?: any | cdk.IResolvable;
    /**
     * The name of the placement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-placementname
     */
    readonly placementName?: string;
    /**
     * The name of the project containing the placement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-projectname
     */
    readonly projectName: string;
}
/**
 * The `AWS::IoT1Click::Project` resource creates an empty project with a placement template.
 *
 * A project contains zero or more placements that adhere to the placement template defined in the project. For more information, see [CreateProject](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html) in the *AWS IoT 1-Click Projects API Reference* .
 *
 * @cloudformationResource AWS::IoT1Click::Project
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html
 */
export declare class CfnProject extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProject;
    /**
     * The Amazon Resource Name (ARN) of the project, such as `arn:aws:iot1click:us-east-1:123456789012:projects/project-a1bzhi` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the project, such as `project-a1bzhi` .
     *
     * @cloudformationAttribute ProjectName
     */
    readonly attrProjectName: string;
    /**
     * The description of the project.
     */
    description?: string;
    /**
     * An object describing the project's placement specifications.
     */
    placementTemplate: cdk.IResolvable | CfnProject.PlacementTemplateProperty;
    /**
     * The name of the project from which to obtain information.
     */
    projectName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProjectProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProject {
    /**
     * In AWS CloudFormation , use the `PlacementTemplate` property type to define the template for an AWS IoT 1-Click project.
     *
     * `PlacementTemplate` is a property of the `AWS::IoT1Click::Project` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-placementtemplate.html
     */
    interface PlacementTemplateProperty {
        /**
         * The default attributes (key-value pairs) to be applied to all placements using this template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-placementtemplate.html#cfn-iot1click-project-placementtemplate-defaultattributes
         */
        readonly defaultAttributes?: any | cdk.IResolvable;
        /**
         * An object specifying the [DeviceTemplate](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeviceTemplate.html) for all placements using this ( [PlacementTemplate](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_PlacementTemplate.html) ) template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-placementtemplate.html#cfn-iot1click-project-placementtemplate-devicetemplates
         */
        readonly deviceTemplates?: cdk.IResolvable | Record<string, CfnProject.DeviceTemplateProperty | cdk.IResolvable>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-devicetemplate.html
     */
    interface DeviceTemplateProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-devicetemplate.html#cfn-iot1click-project-devicetemplate-callbackoverrides
         */
        readonly callbackOverrides?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-devicetemplate.html#cfn-iot1click-project-devicetemplate-devicetype
         */
        readonly deviceType?: string;
    }
}
/**
 * Properties for defining a `CfnProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html
 */
export interface CfnProjectProps {
    /**
     * The description of the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-description
     */
    readonly description?: string;
    /**
     * An object describing the project's placement specifications.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-placementtemplate
     */
    readonly placementTemplate: cdk.IResolvable | CfnProject.PlacementTemplateProperty;
    /**
     * The name of the project from which to obtain information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#cfn-iot1click-project-projectname
     */
    readonly projectName?: string;
}
