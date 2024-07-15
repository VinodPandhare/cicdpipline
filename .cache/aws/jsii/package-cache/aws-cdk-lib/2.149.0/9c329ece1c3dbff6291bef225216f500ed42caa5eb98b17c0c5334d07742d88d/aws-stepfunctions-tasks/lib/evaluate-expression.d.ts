import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as lambda from '../../aws-lambda';
import * as sfn from '../../aws-stepfunctions';
/**
 * Properties for EvaluateExpression
 *
 */
export interface EvaluateExpressionProps extends sfn.TaskStateBaseProps {
    /**
     * The expression to evaluate. The expression may contain state paths.
     *
     * Example value: `'$.a + $.b'`
     */
    readonly expression: string;
    /**
     * The runtime language to use to evaluate the expression.
     *
     * @default - the latest Lambda node runtime available in your region.
     */
    readonly runtime?: lambda.Runtime;
}
/**
 * The event received by the Lambda function
 *
 * Shared definition with packages/@aws-cdk/custom-resource-handlers/lib/custom-resources/aws-stepfunctions-tasks/index.ts
 *
 * @internal
 */
export interface Event {
    /**
     * The expression to evaluate
     */
    readonly expression: string;
    /**
     * The expression attribute values
     */
    readonly expressionAttributeValues: {
        [key: string]: any;
    };
}
/**
 * A Step Functions Task to evaluate an expression
 *
 * OUTPUT: the output of this task is the evaluated expression.
 *
 */
export declare class EvaluateExpression extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly evalFn;
    constructor(scope: Construct, id: string, props: EvaluateExpressionProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}