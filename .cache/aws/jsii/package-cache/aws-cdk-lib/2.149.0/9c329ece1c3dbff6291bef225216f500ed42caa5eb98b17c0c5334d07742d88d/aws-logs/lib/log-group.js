"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LogGroup=exports.Distribution=exports.LogGroupClass=exports.RetentionDays=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var log_stream_1=()=>{var tmp=require("./log-stream");return log_stream_1=()=>tmp,tmp},logs_generated_1=()=>{var tmp=require("./logs.generated");return logs_generated_1=()=>tmp,tmp},metric_filter_1=()=>{var tmp=require("./metric-filter");return metric_filter_1=()=>tmp,tmp},pattern_1=()=>{var tmp=require("./pattern");return pattern_1=()=>tmp,tmp},policy_1=()=>{var tmp=require("./policy");return policy_1=()=>tmp,tmp},subscription_filter_1=()=>{var tmp=require("./subscription-filter");return subscription_filter_1=()=>tmp,tmp},cloudwatch=()=>{var tmp=require("../../aws-cloudwatch");return cloudwatch=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class LogGroupBase extends core_1().Resource{addStream(id,props={}){return new(log_stream_1()).LogStream(this,id,{logGroup:this,...props})}addSubscriptionFilter(id,props){return new(subscription_filter_1()).SubscriptionFilter(this,id,{logGroup:this,...props})}addMetricFilter(id,props){return new(metric_filter_1()).MetricFilter(this,id,{logGroup:this,...props})}extractMetric(jsonField,metricNamespace,metricName){return new(metric_filter_1()).MetricFilter(this,`${metricNamespace}_${metricName}`,{logGroup:this,metricNamespace,metricName,filterPattern:pattern_1().FilterPattern.exists(jsonField),metricValue:jsonField}),new(cloudwatch()).Metric({metricName,namespace:metricNamespace}).attachTo(this)}grantWrite(grantee){return this.grant(grantee,"logs:CreateLogStream","logs:PutLogEvents")}grantRead(grantee){return this.grant(grantee,"logs:FilterLogEvents","logs:GetLogEvents","logs:GetLogGroupFields","logs:DescribeLogGroups","logs:DescribeLogStreams")}grant(grantee,...actions){return iam().Grant.addToPrincipalOrResource({grantee,actions,resourceArns:[this.logGroupArn],resource:this})}logGroupPhysicalName(){return this.physicalName}addToResourcePolicy(statement){return this.policy||(this.policy=new(policy_1()).ResourcePolicy(this,"Policy")),this.policy.document.addStatements(statement.copy({principals:statement.principals.map(p=>this.convertArnPrincipalToAccountId(p))})),{statementAdded:!0,policyDependable:this.policy}}convertArnPrincipalToAccountId(principal){if(principal.principalAccount)return new(iam()).ArnPrincipal(principal.principalAccount);if(principal instanceof iam().ArnPrincipal&&principal.arn!=="*"){const parsedArn=core_1().Arn.split(principal.arn,core_1().ArnFormat.SLASH_RESOURCE_NAME);if(parsedArn.account)return new(iam()).ArnPrincipal(parsedArn.account)}return principal}}var RetentionDays;(function(RetentionDays2){RetentionDays2[RetentionDays2.ONE_DAY=1]="ONE_DAY",RetentionDays2[RetentionDays2.THREE_DAYS=3]="THREE_DAYS",RetentionDays2[RetentionDays2.FIVE_DAYS=5]="FIVE_DAYS",RetentionDays2[RetentionDays2.ONE_WEEK=7]="ONE_WEEK",RetentionDays2[RetentionDays2.TWO_WEEKS=14]="TWO_WEEKS",RetentionDays2[RetentionDays2.ONE_MONTH=30]="ONE_MONTH",RetentionDays2[RetentionDays2.TWO_MONTHS=60]="TWO_MONTHS",RetentionDays2[RetentionDays2.THREE_MONTHS=90]="THREE_MONTHS",RetentionDays2[RetentionDays2.FOUR_MONTHS=120]="FOUR_MONTHS",RetentionDays2[RetentionDays2.FIVE_MONTHS=150]="FIVE_MONTHS",RetentionDays2[RetentionDays2.SIX_MONTHS=180]="SIX_MONTHS",RetentionDays2[RetentionDays2.ONE_YEAR=365]="ONE_YEAR",RetentionDays2[RetentionDays2.THIRTEEN_MONTHS=400]="THIRTEEN_MONTHS",RetentionDays2[RetentionDays2.EIGHTEEN_MONTHS=545]="EIGHTEEN_MONTHS",RetentionDays2[RetentionDays2.TWO_YEARS=731]="TWO_YEARS",RetentionDays2[RetentionDays2.THREE_YEARS=1096]="THREE_YEARS",RetentionDays2[RetentionDays2.FIVE_YEARS=1827]="FIVE_YEARS",RetentionDays2[RetentionDays2.SIX_YEARS=2192]="SIX_YEARS",RetentionDays2[RetentionDays2.SEVEN_YEARS=2557]="SEVEN_YEARS",RetentionDays2[RetentionDays2.EIGHT_YEARS=2922]="EIGHT_YEARS",RetentionDays2[RetentionDays2.NINE_YEARS=3288]="NINE_YEARS",RetentionDays2[RetentionDays2.TEN_YEARS=3653]="TEN_YEARS",RetentionDays2[RetentionDays2.INFINITE=9999]="INFINITE"})(RetentionDays||(exports.RetentionDays=RetentionDays={}));var LogGroupClass;(function(LogGroupClass2){LogGroupClass2.STANDARD="STANDARD",LogGroupClass2.INFREQUENT_ACCESS="INFREQUENT_ACCESS"})(LogGroupClass||(exports.LogGroupClass=LogGroupClass={}));var Distribution;(function(Distribution2){Distribution2.BY_LOG_STREAM="ByLogStream",Distribution2.RANDOM="Random"})(Distribution||(exports.Distribution=Distribution={}));class LogGroup extends LogGroupBase{static fromLogGroupArn(scope,id,logGroupArn){const baseLogGroupArn=logGroupArn.replace(/:\*$/,"");class Import extends LogGroupBase{constructor(){super(...arguments),this.logGroupArn=`${baseLogGroupArn}:*`,this.logGroupName=core_1().Stack.of(scope).splitArn(baseLogGroupArn,core_1().ArnFormat.COLON_RESOURCE_NAME).resourceName}}return new Import(scope,id,{environmentFromArn:baseLogGroupArn})}static fromLogGroupName(scope,id,logGroupName){const baseLogGroupName=logGroupName.replace(/:\*$/,"");class Import extends LogGroupBase{constructor(){super(...arguments),this.logGroupName=baseLogGroupName,this.logGroupArn=core_1().Stack.of(scope).formatArn({service:"logs",resource:"log-group",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME,resourceName:baseLogGroupName+":*"})}}return new Import(scope,id)}constructor(scope,id,props={}){super(scope,id,{physicalName:props.logGroupName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_logs_LogGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LogGroup),error}let retentionInDays=props.retention;if(retentionInDays===void 0&&(retentionInDays=RetentionDays.TWO_YEARS),(retentionInDays===1/0||retentionInDays===RetentionDays.INFINITE)&&(retentionInDays=void 0),retentionInDays!==void 0&&!core_1().Token.isUnresolved(retentionInDays)&&retentionInDays<=0)throw new Error(`retentionInDays must be positive, got ${retentionInDays}`);let logGroupClass=props.logGroupClass;const stack=core_1().Stack.of(scope),logGroupClassUnsupportedRegions=["cn-north-1","cn-northwest-1","us-iso-west-1","us-iso-east-1","us-isob-east-1","us-gov-west-1","us-gov-east-1"];logGroupClass!==void 0&&!core_1().Token.isUnresolved(stack.region)&&logGroupClassUnsupportedRegions.includes(stack.region)&&core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-logs:propertyNotSupported",`The LogGroupClass property is not supported in the following regions: ${logGroupClassUnsupportedRegions}`);const resource=new(logs_generated_1()).CfnLogGroup(this,"Resource",{kmsKeyId:props.encryptionKey?.keyArn,logGroupClass,logGroupName:this.physicalName,retentionInDays,dataProtectionPolicy:props.dataProtectionPolicy?._bind(this)});resource.applyRemovalPolicy(props.removalPolicy),this.logGroupArn=this.getResourceArnAttribute(resource.attrArn,{service:"logs",resource:"log-group",resourceName:this.physicalName,arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME}),this.logGroupName=this.getResourceNameAttribute(resource.ref)}}exports.LogGroup=LogGroup,_a=JSII_RTTI_SYMBOL_1,LogGroup[_a]={fqn:"aws-cdk-lib.aws_logs.LogGroup",version:"2.149.0"};
