import { Construct } from 'constructs';
import { IEngine } from './engine';
import { IResource, RemovalPolicy, Resource } from '../../core';
/**
 * Options for `IParameterGroup.bindToCluster`.
 * Empty for now, but can be extended later.
 */
export interface ParameterGroupClusterBindOptions {
}
/**
 * The type returned from `IParameterGroup.bindToCluster`.
 */
export interface ParameterGroupClusterConfig {
    /** The name of this parameter group. */
    readonly parameterGroupName: string;
}
/**
 * Options for `IParameterGroup.bindToInstance`.
 * Empty for now, but can be extended later.
 */
export interface ParameterGroupInstanceBindOptions {
}
/**
 * The type returned from `IParameterGroup.bindToInstance`.
 */
export interface ParameterGroupInstanceConfig {
    /** The name of this parameter group. */
    readonly parameterGroupName: string;
}
/**
 * A parameter group.
 * Represents both a cluster parameter group,
 * and an instance parameter group.
 */
export interface IParameterGroup extends IResource {
    /**
     * Method called when this Parameter Group is used when defining a database cluster.
     */
    bindToCluster(options: ParameterGroupClusterBindOptions): ParameterGroupClusterConfig;
    /**
     * Method called when this Parameter Group is used when defining a database instance.
     */
    bindToInstance(options: ParameterGroupInstanceBindOptions): ParameterGroupInstanceConfig;
    /**
     * Adds a parameter to this group.
     * If this is an imported parameter group,
     * this method does nothing.
     *
     * @returns true if the parameter was actually added
     *   (i.e., this ParameterGroup is not imported),
     *   false otherwise
     */
    addParameter(key: string, value: string): boolean;
}
/**
 * Properties for a parameter group
 */
export interface ParameterGroupProps {
    /**
     * The database engine for this parameter group.
     */
    readonly engine: IEngine;
    /**
     * The name of this parameter group.
     *
     * @default - CloudFormation-generated name
     */
    readonly name?: string;
    /**
     * Description for this parameter group
     *
     * @default a CDK generated description
     */
    readonly description?: string;
    /**
     * The parameters in this parameter group
     *
     * @default - None
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * The CloudFormation policy to apply when the instance is removed from the
     * stack or replaced during an update.
     *
     * @default - RemovalPolicy.DESTROY
     */
    readonly removalPolicy?: RemovalPolicy;
}
/**
 * A parameter group.
 * Represents both a cluster parameter group,
 * and an instance parameter group.
 *
 * @resource AWS::RDS::DBParameterGroup
 */
export declare class ParameterGroup extends Resource implements IParameterGroup {
    /**
     * Imports a parameter group
     */
    static fromParameterGroupName(scope: Construct, id: string, parameterGroupName: string): IParameterGroup;
    private readonly parameters;
    private readonly family;
    private readonly removalPolicy?;
    private readonly description?;
    private readonly name?;
    private clusterCfnGroup?;
    private instanceCfnGroup?;
    constructor(scope: Construct, id: string, props: ParameterGroupProps);
    bindToCluster(_options: ParameterGroupClusterBindOptions): ParameterGroupClusterConfig;
    bindToInstance(_options: ParameterGroupInstanceBindOptions): ParameterGroupInstanceConfig;
    /**
     * Add a parameter to this parameter group
     *
     * @param key The key of the parameter to be added
     * @param value The value of the parameter to be added
     */
    addParameter(key: string, value: string): boolean;
}