"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TableBaseV2=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var dynamodb_canned_metrics_generated_1=()=>{var tmp=require("./dynamodb-canned-metrics.generated");return dynamodb_canned_metrics_generated_1=()=>tmp,tmp},perms=()=>{var tmp=require("./perms");return perms=()=>tmp,tmp},shared_1=()=>{var tmp=require("./shared");return shared_1=()=>tmp,tmp},aws_cloudwatch_1=()=>{var tmp=require("../../aws-cloudwatch");return aws_cloudwatch_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class TableBaseV2 extends core_1().Resource{grant(grantee,...actions){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grant),error}const resourceArns=[this.tableArn];return this.hasIndex&&resourceArns.push(`${this.tableArn}/index/*`),aws_iam_1().Grant.addToPrincipalOrResource({grantee,actions,resourceArns,resource:this})}grantStream(grantee,...actions){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantStream),error}if(!this.tableStreamArn)throw new Error(`No stream ARN found on the table ${this.node.path}`);return aws_iam_1().Grant.addToPrincipal({grantee,actions,resourceArns:[this.tableStreamArn]})}grantStreamRead(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantStreamRead),error}this.grantTableListStreams(grantee);const keyActions=perms().KEY_READ_ACTIONS,streamActions=perms().READ_STREAM_DATA_ACTIONS;return this.combinedGrant(grantee,{keyActions,streamActions})}grantTableListStreams(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantTableListStreams),error}if(!this.tableStreamArn)throw new Error(`No stream ARN found on the table ${this.node.path}`);return aws_iam_1().Grant.addToPrincipal({grantee,actions:["dynamodb:ListStreams"],resourceArns:[this.tableStreamArn]})}grantReadData(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantReadData),error}const tableActions=perms().READ_DATA_ACTIONS.concat(perms().DESCRIBE_TABLE);return this.combinedGrant(grantee,{keyActions:perms().KEY_READ_ACTIONS,tableActions})}grantWriteData(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantWriteData),error}const tableActions=perms().WRITE_DATA_ACTIONS.concat(perms().DESCRIBE_TABLE),keyActions=perms().KEY_READ_ACTIONS.concat(perms().KEY_WRITE_ACTIONS);return this.combinedGrant(grantee,{keyActions,tableActions})}grantReadWriteData(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantReadWriteData),error}const tableActions=perms().READ_DATA_ACTIONS.concat(perms().WRITE_DATA_ACTIONS).concat(perms().DESCRIBE_TABLE),keyActions=perms().KEY_READ_ACTIONS.concat(perms().KEY_WRITE_ACTIONS);return this.combinedGrant(grantee,{keyActions,tableActions})}grantFullAccess(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantFullAccess),error}const keyActions=perms().KEY_READ_ACTIONS.concat(perms().KEY_WRITE_ACTIONS);return this.combinedGrant(grantee,{keyActions,tableActions:["dynamodb:*"]})}metric(metricName,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric),error}const metricProps={namespace:"AWS/DynamoDB",metricName,dimensionsMap:{TableName:this.tableName},...props};return this.configureMetric(metricProps)}metricConsumedReadCapacityUnits(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricConsumedReadCapacityUnits),error}const metricProps={...dynamodb_canned_metrics_generated_1().DynamoDBMetrics.consumedReadCapacityUnitsSum({TableName:this.tableName}),...props};return this.configureMetric(metricProps)}metricConsumedWriteCapacityUnits(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricConsumedWriteCapacityUnits),error}const metricProps={...dynamodb_canned_metrics_generated_1().DynamoDBMetrics.consumedWriteCapacityUnitsSum({TableName:this.tableName}),...props};return this.configureMetric(metricProps)}metricUserErrors(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricUserErrors),error}if(props?.dimensions)throw new Error("`dimensions` is not supported for the `UserErrors` metric");return this.metric("UserErrors",{statistic:"sum",...props,dimensionsMap:{}})}metricConditionalCheckFailedRequests(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricConditionalCheckFailedRequests),error}return this.metric("ConditionalCheckFailedRequests",{statistic:"sum",...props})}metricSuccessfulRequestLatency(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricSuccessfulRequestLatency),error}if(!props?.dimensions?.Operation&&!props?.dimensionsMap?.Operation)throw new Error("`Operation` dimension must be passed for the `SuccessfulRequestLatency` metric");const dimensionsMap={TableName:this.tableName,Operation:props.dimensionsMap?.Operation??props.dimensions?.Operation},metricProps={...dynamodb_canned_metrics_generated_1().DynamoDBMetrics.successfulRequestLatencyAverage(dimensionsMap),...props,dimensionsMap};return this.configureMetric(metricProps)}metricThrottledRequestsForOperation(operation,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_dynamodb_OperationsMetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricThrottledRequestsForOperation),error}const metricProps={...dynamodb_canned_metrics_generated_1().DynamoDBMetrics.throttledRequestsSum({Operation:operation,TableName:this.tableName}),...props};return this.configureMetric(metricProps)}metricThrottledRequestsForOperations(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_dynamodb_OperationsMetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricThrottledRequestsForOperations),error}return this.sumMetricsForOperations("ThrottledRequests","Sum of throttled requests across all operations",props)}metricSystemErrorsForOperations(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_dynamodb_SystemErrorsForOperationsMetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricSystemErrorsForOperations),error}return this.sumMetricsForOperations("SystemErrors","Sum of errors across all operations",props)}metricThrottledRequests(props){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_dynamodb.TableBaseV2#metricThrottledRequests","Do not use this function. It returns an invalid metric. Use `metricThrottledRequestsForOperation` instead."),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricThrottledRequests),error}return this.metric("ThrottledRequests",{statistic:"sum",...props})}metricSystemErrors(props){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_dynamodb.TableBaseV2#metricSystemErrors","use `metricSystemErrorsForOperations`."),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricSystemErrors),error}if(!props?.dimensions?.Operation&&!props?.dimensionsMap?.Operation)throw new Error("'Operation' dimension must be passed for the 'SystemErrors' metric.");const dimensionsMap={TableName:this.tableName,...props?.dimensions??{},...props?.dimensionsMap??{}};return this.metric("SystemErrors",{statistic:"sum",...props,dimensionsMap})}sumMetricsForOperations(metricName,expressionLabel,props){if(props?.dimensions?.Operation)throw new Error("The Operation dimension is not supported. Use the `operations` property");const operations=props?.operations??Object.values(shared_1().Operation),values=this.createMetricForOperations(metricName,operations,{statistic:"sum",...props});return new(aws_cloudwatch_1()).MathExpression({expression:`${Object.keys(values).join(" + ")}`,usingMetrics:{...values},color:props?.color,label:expressionLabel,period:props?.period})}createMetricForOperations(metricName,operations,props,metricNameMapper){const metrics={},mapper=metricNameMapper??(op=>op.toLowerCase());if(props?.dimensions?.Operation)throw new Error("Invalid properties. Operation dimension is not supported when calculating operational metrics");for(const operation of operations){const metric=this.metric(metricName,{...props,dimensionsMap:{TableName:this.tableName,Operation:operation,...props?.dimensions}}),operationMetricName=mapper(operation),firstChar=operationMetricName.charAt(0);if(firstChar===firstChar.toUpperCase())throw new Error(`Mapper generated an illegal operation metric name: ${operationMetricName}. Must start with a lowercase letter`);metrics[operationMetricName]=metric}return metrics}combinedGrant(grantee,options){if(options.keyActions&&this.encryptionKey&&this.encryptionKey.grant(grantee,...options.keyActions),options.tableActions){const resourceArns=[this.tableArn];return this.hasIndex&&resourceArns.push(`${this.tableArn}/index/*`),aws_iam_1().Grant.addToPrincipalOrResource({grantee,actions:options.tableActions,resourceArns,resource:this})}if(options.streamActions){if(!this.tableStreamArn)throw new Error(`No stream ARNs found on the table ${this.node.path}`);return aws_iam_1().Grant.addToPrincipal({grantee,actions:options.streamActions,resourceArns:[this.tableStreamArn],scope:this})}throw new Error(`Unexpected 'action', ${options.tableActions||options.streamActions}`)}configureMetric(props){return new(aws_cloudwatch_1()).Metric({...props,region:props?.region??this.region,account:props?.account??this.stack.account})}addToResourcePolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToResourcePolicy),error}return this.resourcePolicy=this.resourcePolicy??new(aws_iam_1()).PolicyDocument({statements:[]}),this.resourcePolicy.addStatements(statement),{statementAdded:!0,policyDependable:this}}}exports.TableBaseV2=TableBaseV2,_a=JSII_RTTI_SYMBOL_1,TableBaseV2[_a]={fqn:"aws-cdk-lib.aws_dynamodb.TableBaseV2",version:"2.149.0"};
