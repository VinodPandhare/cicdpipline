import * as lambda from '../../aws-lambda';
import * as s3 from '../../aws-s3';
export interface S3EventSourceProps {
    /**
     * The s3 event types that will trigger the notification.
     */
    readonly events: s3.EventType[];
    /**
     * S3 object key filter rules to determine which objects trigger this event.
     * Each filter must include a `prefix` and/or `suffix` that will be matched
     * against the s3 object key. Refer to the S3 Developer Guide for details
     * about allowed filter rules.
     */
    readonly filters?: s3.NotificationKeyFilter[];
}
/**
 * Use S3 bucket notifications as an event source for AWS Lambda.
 */
export declare class S3EventSource implements lambda.IEventSource {
    readonly bucket: s3.Bucket;
    private readonly props;
    constructor(bucket: s3.Bucket, props: S3EventSourceProps);
    bind(target: lambda.IFunction): void;
}
/**
 * S3EventSourceV2 Use S3 bucket notifications as an event source for AWS Lambda.
 */
export declare class S3EventSourceV2 implements lambda.IEventSource {
    private readonly bucket;
    private readonly props;
    constructor(bucket: s3.IBucket, props: S3EventSourceProps);
    bind(target: lambda.IFunction): void;
}
