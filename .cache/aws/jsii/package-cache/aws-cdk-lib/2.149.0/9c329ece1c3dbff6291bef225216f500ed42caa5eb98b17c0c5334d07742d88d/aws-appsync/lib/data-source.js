"use strict";var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k;Object.defineProperty(exports,"__esModule",{value:!0}),exports.OpenSearchDataSource=exports.ElasticsearchDataSource=exports.RdsDataSource=exports.LambdaDataSource=exports.EventBridgeDataSource=exports.HttpDataSource=exports.DynamoDbDataSource=exports.NoneDataSource=exports.BackedDataSource=exports.BaseDataSource=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},appsync_function_1=()=>{var tmp=require("./appsync-function");return appsync_function_1=()=>tmp,tmp},appsync_generated_1=()=>{var tmp=require("./appsync.generated");return appsync_generated_1=()=>tmp,tmp},resolver_1=()=>{var tmp=require("./resolver");return resolver_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class BaseDataSource extends constructs_1().Construct{constructor(scope,id,props,extended){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_BackedDataSourceProps(props),jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_ExtendedDataSourceProps(extended)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BaseDataSource),error}extended.type!=="NONE"&&(this.serviceRole=props.serviceRole||new(aws_iam_1()).Role(this,"ServiceRole",{assumedBy:new(aws_iam_1()).ServicePrincipal("appsync.amazonaws.com")}));const name=props.name??id,supportedName=core_1().Token.isUnresolved(name)?name:name.replace(/[\W]+/g,"");this.ds=new(appsync_generated_1()).CfnDataSource(this,"Resource",{apiId:props.api.apiId,name:supportedName,description:props.description,serviceRoleArn:this.serviceRole?.roleArn,...extended}),this.name=supportedName,this.api=props.api}createResolver(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_BaseResolverProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.createResolver),error}return new(resolver_1()).Resolver(this.api,id,{api:this.api,dataSource:this,...props})}createFunction(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_BaseAppsyncFunctionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.createFunction),error}return new(appsync_function_1()).AppsyncFunction(this.api,id,{api:this.api,dataSource:this,...props})}}exports.BaseDataSource=BaseDataSource,_a=JSII_RTTI_SYMBOL_1,BaseDataSource[_a]={fqn:"aws-cdk-lib.aws_appsync.BaseDataSource",version:"2.149.0"};class BackedDataSource extends BaseDataSource{constructor(scope,id,props,extended){super(scope,id,props,extended);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_BackedDataSourceProps(props),jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_ExtendedDataSourceProps(extended)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BackedDataSource),error}this.grantPrincipal=this.serviceRole}}exports.BackedDataSource=BackedDataSource,_b=JSII_RTTI_SYMBOL_1,BackedDataSource[_b]={fqn:"aws-cdk-lib.aws_appsync.BackedDataSource",version:"2.149.0"};class NoneDataSource extends BaseDataSource{constructor(scope,id,props){super(scope,id,props,{type:"NONE"});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_NoneDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,NoneDataSource),error}}}exports.NoneDataSource=NoneDataSource,_c=JSII_RTTI_SYMBOL_1,NoneDataSource[_c]={fqn:"aws-cdk-lib.aws_appsync.NoneDataSource",version:"2.149.0"};class DynamoDbDataSource extends BackedDataSource{constructor(scope,id,props){super(scope,id,props,{type:"AMAZON_DYNAMODB",dynamoDbConfig:{tableName:props.table.tableName,awsRegion:props.table.env.region,useCallerCredentials:props.useCallerCredentials}});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_DynamoDbDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,DynamoDbDataSource),error}props.readOnlyAccess?props.table.grantReadData(this):props.table.grantReadWriteData(this)}}exports.DynamoDbDataSource=DynamoDbDataSource,_d=JSII_RTTI_SYMBOL_1,DynamoDbDataSource[_d]={fqn:"aws-cdk-lib.aws_appsync.DynamoDbDataSource",version:"2.149.0"};class HttpDataSource extends BackedDataSource{constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_HttpDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,HttpDataSource),error}const authorizationConfig=props.authorizationConfig?{authorizationType:"AWS_IAM",awsIamConfig:props.authorizationConfig}:void 0;super(scope,id,props,{type:"HTTP",httpConfig:{endpoint:props.endpoint,authorizationConfig}})}}exports.HttpDataSource=HttpDataSource,_e=JSII_RTTI_SYMBOL_1,HttpDataSource[_e]={fqn:"aws-cdk-lib.aws_appsync.HttpDataSource",version:"2.149.0"};class EventBridgeDataSource extends BackedDataSource{constructor(scope,id,props){super(scope,id,props,{type:"AMAZON_EVENTBRIDGE",eventBridgeConfig:{eventBusArn:props.eventBus.eventBusArn}});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_EventBridgeDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EventBridgeDataSource),error}props.eventBus.grantPutEventsTo(this)}}exports.EventBridgeDataSource=EventBridgeDataSource,_f=JSII_RTTI_SYMBOL_1,EventBridgeDataSource[_f]={fqn:"aws-cdk-lib.aws_appsync.EventBridgeDataSource",version:"2.149.0"};class LambdaDataSource extends BackedDataSource{constructor(scope,id,props){super(scope,id,props,{type:"AWS_LAMBDA",lambdaConfig:{lambdaFunctionArn:props.lambdaFunction.functionArn}});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_LambdaDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LambdaDataSource),error}props.lambdaFunction.grantInvoke(this)}}exports.LambdaDataSource=LambdaDataSource,_g=JSII_RTTI_SYMBOL_1,LambdaDataSource[_g]={fqn:"aws-cdk-lib.aws_appsync.LambdaDataSource",version:"2.149.0"};class RdsDataSource extends BackedDataSource{constructor(scope,id,props){super(scope,id,props,{type:"RELATIONAL_DATABASE",relationalDatabaseConfig:{rdsHttpEndpointConfig:{awsRegion:props.serverlessCluster.env.region,dbClusterIdentifier:core_1().Lazy.string({produce:()=>core_1().Stack.of(this).formatArn({service:"rds",resource:`cluster:${props.serverlessCluster.clusterIdentifier}`})}),awsSecretStoreArn:props.secretStore.secretArn,databaseName:props.databaseName},relationalDatabaseSourceType:"RDS_HTTP_ENDPOINT"}});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_RdsDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,RdsDataSource),error}const clusterArn=core_1().Stack.of(this).formatArn({service:"rds",resource:`cluster:${props.serverlessCluster.clusterIdentifier}`});props.secretStore.grantRead(this),props.serverlessCluster.grantDataApiAccess(this),aws_iam_1().Grant.addToPrincipal({grantee:this,actions:["rds-data:DeleteItems","rds-data:ExecuteSql","rds-data:GetItems","rds-data:InsertItems","rds-data:UpdateItems"],resourceArns:[clusterArn,`${clusterArn}:*`],scope:this})}}exports.RdsDataSource=RdsDataSource,_h=JSII_RTTI_SYMBOL_1,RdsDataSource[_h]={fqn:"aws-cdk-lib.aws_appsync.RdsDataSource",version:"2.149.0"};class ElasticsearchDataSource extends BackedDataSource{constructor(scope,id,props){super(scope,id,props,{type:"AMAZON_ELASTICSEARCH",elasticsearchConfig:{awsRegion:props.domain.env.region,endpoint:`https://${props.domain.domainEndpoint}`}});try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_appsync.ElasticsearchDataSource","- use `OpenSearchDataSource`"),jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_ElasticsearchDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ElasticsearchDataSource),error}props.domain.grantReadWrite(this)}}exports.ElasticsearchDataSource=ElasticsearchDataSource,_j=JSII_RTTI_SYMBOL_1,ElasticsearchDataSource[_j]={fqn:"aws-cdk-lib.aws_appsync.ElasticsearchDataSource",version:"2.149.0"};class OpenSearchDataSource extends BackedDataSource{constructor(scope,id,props){super(scope,id,props,{type:"AMAZON_OPENSEARCH_SERVICE",openSearchServiceConfig:{awsRegion:props.domain.env.region,endpoint:`https://${props.domain.domainEndpoint}`}});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_OpenSearchDataSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,OpenSearchDataSource),error}props.domain.grantReadWrite(this)}}exports.OpenSearchDataSource=OpenSearchDataSource,_k=JSII_RTTI_SYMBOL_1,OpenSearchDataSource[_k]={fqn:"aws-cdk-lib.aws_appsync.OpenSearchDataSource",version:"2.149.0"};
