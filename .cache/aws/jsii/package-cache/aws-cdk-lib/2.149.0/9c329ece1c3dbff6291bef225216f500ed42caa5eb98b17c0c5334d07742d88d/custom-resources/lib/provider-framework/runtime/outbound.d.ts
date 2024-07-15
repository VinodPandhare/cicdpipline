/// <reference types="node" />
import * as https from 'https';
import { InvocationResponse, InvokeCommandInput } from '@aws-sdk/client-lambda';
import { StartExecutionInput, StartExecutionOutput } from '@aws-sdk/client-sfn';
declare function defaultHttpRequest(options: https.RequestOptions, requestBody: string): Promise<void>;
declare function defaultStartExecution(req: StartExecutionInput): Promise<StartExecutionOutput>;
declare function defaultInvokeFunction(req: InvokeCommandInput): Promise<InvocationResponse>;
export declare let startExecution: typeof defaultStartExecution;
export declare let invokeFunction: typeof defaultInvokeFunction;
export declare let httpRequest: typeof defaultHttpRequest;
export {};
