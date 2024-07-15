"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HostedRotationType=exports.HostedRotation=exports.RotationSchedule=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var secret_1=()=>{var tmp=require("./secret");return secret_1=()=>tmp,tmp},secretsmanager_generated_1=()=>{var tmp=require("./secretsmanager.generated");return secretsmanager_generated_1=()=>tmp,tmp},ec2=()=>{var tmp=require("../../aws-ec2");return ec2=()=>tmp,tmp},aws_events_1=()=>{var tmp=require("../../aws-events");return aws_events_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},kms=()=>{var tmp=require("../../aws-kms");return kms=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};const DEFAULT_PASSWORD_EXCLUDE_CHARS=" %+~`#$&*()|[]{}:;<>?!'/@\"\\";class RotationSchedule extends core_1().Resource{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_RotationScheduleProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,RotationSchedule),error}if(!props.rotationLambda&&!props.hostedRotation||props.rotationLambda&&props.hostedRotation)throw new Error("One of `rotationLambda` or `hostedRotation` must be specified.");props.rotationLambda?.permissionsNode.defaultChild&&(props.secret.encryptionKey&&props.secret.encryptionKey.grantEncryptDecrypt(new(kms()).ViaServicePrincipal(`secretsmanager.${core_1().Stack.of(this).region}.amazonaws.com`,props.rotationLambda.grantPrincipal)),props.rotationLambda.grantInvoke(new(iam()).ServicePrincipal("secretsmanager.amazonaws.com")).applyBefore(this),props.rotationLambda.addToRolePolicy(new(iam()).PolicyStatement({actions:["secretsmanager:DescribeSecret","secretsmanager:GetSecretValue","secretsmanager:PutSecretValue","secretsmanager:UpdateSecretVersionStage"],resources:[props.secret.secretFullArn?props.secret.secretFullArn:`${props.secret.secretArn}-??????`]})),props.rotationLambda.addToRolePolicy(new(iam()).PolicyStatement({actions:["secretsmanager:GetRandomPassword"],resources:["*"]})));let scheduleExpression;if(props.automaticallyAfter){const automaticallyAfterMillis=props.automaticallyAfter.toMilliseconds();if(automaticallyAfterMillis>0){if(automaticallyAfterMillis<core_1().Duration.hours(4).toMilliseconds())throw new Error(`automaticallyAfter must not be smaller than 4 hours, got ${props.automaticallyAfter.toHours()} hours`);if(automaticallyAfterMillis>core_1().Duration.days(1e3).toMilliseconds())throw new Error(`automaticallyAfter must not be greater than 1000 days, got ${props.automaticallyAfter.toDays()} days`);scheduleExpression=aws_events_1().Schedule.rate(props.automaticallyAfter).expressionString}}else scheduleExpression=aws_events_1().Schedule.rate(core_1().Duration.days(30)).expressionString;let rotationRules;scheduleExpression&&(rotationRules={scheduleExpression}),new(secretsmanager_generated_1()).CfnRotationSchedule(this,"Resource",{secretId:props.secret.secretArn,rotationLambdaArn:props.rotationLambda?.functionArn,hostedRotationLambda:props.hostedRotation?.bind(props.secret,this),rotationRules,rotateImmediatelyOnUpdate:props.rotateImmediatelyOnUpdate}),props.secret.denyAccountRootDelete()}}exports.RotationSchedule=RotationSchedule,_a=JSII_RTTI_SYMBOL_1,RotationSchedule[_a]={fqn:"aws-cdk-lib.aws_secretsmanager.RotationSchedule",version:"2.149.0"};class HostedRotation{static mysqlSingleUser(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_SingleUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.mysqlSingleUser),error}return new HostedRotation(HostedRotationType.MYSQL_SINGLE_USER,options)}static mysqlMultiUser(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_MultiUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.mysqlMultiUser),error}return new HostedRotation(HostedRotationType.MYSQL_MULTI_USER,options,options.masterSecret)}static postgreSqlSingleUser(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_SingleUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.postgreSqlSingleUser),error}return new HostedRotation(HostedRotationType.POSTGRESQL_SINGLE_USER,options)}static postgreSqlMultiUser(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_MultiUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.postgreSqlMultiUser),error}return new HostedRotation(HostedRotationType.POSTGRESQL_MULTI_USER,options,options.masterSecret)}static oracleSingleUser(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_SingleUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.oracleSingleUser),error}return new HostedRotation(HostedRotationType.ORACLE_SINGLE_USER,options)}static oracleMultiUser(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_MultiUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.oracleMultiUser),error}return new HostedRotation(HostedRotationType.ORACLE_MULTI_USER,options,options.masterSecret)}static mariaDbSingleUser(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_SingleUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.mariaDbSingleUser),error}return new HostedRotation(HostedRotationType.MARIADB_SINGLE_USER,options)}static mariaDbMultiUser(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_MultiUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.mariaDbMultiUser),error}return new HostedRotation(HostedRotationType.MARIADB_MULTI_USER,options,options.masterSecret)}static sqlServerSingleUser(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_SingleUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.sqlServerSingleUser),error}return new HostedRotation(HostedRotationType.SQLSERVER_SINGLE_USER,options)}static sqlServerMultiUser(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_MultiUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.sqlServerMultiUser),error}return new HostedRotation(HostedRotationType.SQLSERVER_MULTI_USER,options,options.masterSecret)}static redshiftSingleUser(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_SingleUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.redshiftSingleUser),error}return new HostedRotation(HostedRotationType.REDSHIFT_SINGLE_USER,options)}static redshiftMultiUser(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_MultiUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.redshiftMultiUser),error}return new HostedRotation(HostedRotationType.REDSHIFT_MULTI_USER,options,options.masterSecret)}static mongoDbSingleUser(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_SingleUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.mongoDbSingleUser),error}return new HostedRotation(HostedRotationType.MONGODB_SINGLE_USER,options)}static mongoDbMultiUser(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_MultiUserHostedRotationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.mongoDbMultiUser),error}return new HostedRotation(HostedRotationType.MONGODB_MULTI_USER,options,options.masterSecret)}constructor(type,props,masterSecret){if(this.type=type,this.props=props,this.masterSecret=masterSecret,type.isMultiUser&&!masterSecret)throw new Error("The `masterSecret` must be specified when using the multi user scheme.")}bind(secret,scope){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_ISecret(secret)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}if(core_1().Stack.of(scope).addTransform("AWS::SecretsManager-2020-07-23"),!this.props.vpc&&this.props.securityGroups)throw new Error("`vpc` must be specified when specifying `securityGroups`.");this.props.vpc&&(this._connections=new(ec2()).Connections({securityGroups:this.props.securityGroups||[new(ec2()).SecurityGroup(scope,"SecurityGroup",{vpc:this.props.vpc})]})),this.masterSecret&&this.masterSecret.denyAccountRootDelete();let masterSecretArn;this.masterSecret?.secretFullArn?masterSecretArn=this.masterSecret.secretArn:this.masterSecret&&(masterSecretArn=this.masterSecret.secretArn+"-??????");const defaultExcludeCharacters=secret_1().Secret.isSecret(secret)?secret.excludeCharacters??DEFAULT_PASSWORD_EXCLUDE_CHARS:DEFAULT_PASSWORD_EXCLUDE_CHARS;return{rotationType:this.type.name,kmsKeyArn:secret.encryptionKey?.keyArn,masterSecretArn,masterSecretKmsKeyArn:this.masterSecret?.encryptionKey?.keyArn,rotationLambdaName:this.props.functionName,vpcSecurityGroupIds:this._connections?.securityGroups?.map(s=>s.securityGroupId).join(","),vpcSubnetIds:this.props.vpc?.selectSubnets(this.props.vpcSubnets).subnetIds.join(","),excludeCharacters:this.props.excludeCharacters??defaultExcludeCharacters}}get connections(){if(!this.props.vpc)throw new Error("Cannot use connections for a hosted rotation that is not deployed in a VPC");if(!this._connections)throw new Error("Cannot use connections for a hosted rotation that has not been bound to a secret");return this._connections}}exports.HostedRotation=HostedRotation,_b=JSII_RTTI_SYMBOL_1,HostedRotation[_b]={fqn:"aws-cdk-lib.aws_secretsmanager.HostedRotation",version:"2.149.0"};class HostedRotationType{constructor(name,isMultiUser){this.name=name,this.isMultiUser=isMultiUser}}exports.HostedRotationType=HostedRotationType,_c=JSII_RTTI_SYMBOL_1,HostedRotationType[_c]={fqn:"aws-cdk-lib.aws_secretsmanager.HostedRotationType",version:"2.149.0"},HostedRotationType.MYSQL_SINGLE_USER=new HostedRotationType("MySQLSingleUser"),HostedRotationType.MYSQL_MULTI_USER=new HostedRotationType("MySQLMultiUser",!0),HostedRotationType.POSTGRESQL_SINGLE_USER=new HostedRotationType("PostgreSQLSingleUser"),HostedRotationType.POSTGRESQL_MULTI_USER=new HostedRotationType("PostgreSQLMultiUser",!0),HostedRotationType.ORACLE_SINGLE_USER=new HostedRotationType("OracleSingleUser"),HostedRotationType.ORACLE_MULTI_USER=new HostedRotationType("OracleMultiUser",!0),HostedRotationType.MARIADB_SINGLE_USER=new HostedRotationType("MariaDBSingleUser"),HostedRotationType.MARIADB_MULTI_USER=new HostedRotationType("MariaDBMultiUser",!0),HostedRotationType.SQLSERVER_SINGLE_USER=new HostedRotationType("SQLServerSingleUser"),HostedRotationType.SQLSERVER_MULTI_USER=new HostedRotationType("SQLServerMultiUser",!0),HostedRotationType.REDSHIFT_SINGLE_USER=new HostedRotationType("RedshiftSingleUser"),HostedRotationType.REDSHIFT_MULTI_USER=new HostedRotationType("RedshiftMultiUser",!0),HostedRotationType.MONGODB_SINGLE_USER=new HostedRotationType("MongoDBSingleUser"),HostedRotationType.MONGODB_MULTI_USER=new HostedRotationType("MongoDBMultiUser",!0);