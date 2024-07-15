"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserPool=exports.AdvancedSecurityMode=exports.AccountRecovery=exports.Mfa=exports.LambdaVersion=exports.VerificationEmailStyle=exports.UserPoolOperation=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var punycode_1=()=>{var tmp=require("punycode/");return punycode_1=()=>tmp,tmp},cognito_generated_1=()=>{var tmp=require("./cognito.generated");return cognito_generated_1=()=>tmp,tmp},attr_names_1=()=>{var tmp=require("./private/attr-names");return attr_names_1=()=>tmp,tmp},user_pool_client_1=()=>{var tmp=require("./user-pool-client");return user_pool_client_1=()=>tmp,tmp},user_pool_domain_1=()=>{var tmp=require("./user-pool-domain");return user_pool_domain_1=()=>tmp,tmp},user_pool_resource_server_1=()=>{var tmp=require("./user-pool-resource-server");return user_pool_resource_server_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class UserPoolOperation{static of(name){const lowerCamelCase=name.charAt(0).toLowerCase()+name.slice(1);return new UserPoolOperation(lowerCamelCase)}constructor(operationName){this.operationName=operationName}}exports.UserPoolOperation=UserPoolOperation,_a=JSII_RTTI_SYMBOL_1,UserPoolOperation[_a]={fqn:"aws-cdk-lib.aws_cognito.UserPoolOperation",version:"2.149.0"},UserPoolOperation.CREATE_AUTH_CHALLENGE=new UserPoolOperation("createAuthChallenge"),UserPoolOperation.CUSTOM_MESSAGE=new UserPoolOperation("customMessage"),UserPoolOperation.DEFINE_AUTH_CHALLENGE=new UserPoolOperation("defineAuthChallenge"),UserPoolOperation.POST_AUTHENTICATION=new UserPoolOperation("postAuthentication"),UserPoolOperation.POST_CONFIRMATION=new UserPoolOperation("postConfirmation"),UserPoolOperation.PRE_AUTHENTICATION=new UserPoolOperation("preAuthentication"),UserPoolOperation.PRE_SIGN_UP=new UserPoolOperation("preSignUp"),UserPoolOperation.PRE_TOKEN_GENERATION=new UserPoolOperation("preTokenGeneration"),UserPoolOperation.PRE_TOKEN_GENERATION_CONFIG=new UserPoolOperation("preTokenGenerationConfig"),UserPoolOperation.USER_MIGRATION=new UserPoolOperation("userMigration"),UserPoolOperation.VERIFY_AUTH_CHALLENGE_RESPONSE=new UserPoolOperation("verifyAuthChallengeResponse"),UserPoolOperation.CUSTOM_EMAIL_SENDER=new UserPoolOperation("customEmailSender"),UserPoolOperation.CUSTOM_SMS_SENDER=new UserPoolOperation("customSmsSender");var VerificationEmailStyle;(function(VerificationEmailStyle2){VerificationEmailStyle2.CODE="CONFIRM_WITH_CODE",VerificationEmailStyle2.LINK="CONFIRM_WITH_LINK"})(VerificationEmailStyle||(exports.VerificationEmailStyle=VerificationEmailStyle={}));var LambdaVersion;(function(LambdaVersion2){LambdaVersion2.V1_0="V1_0",LambdaVersion2.V2_0="V2_0"})(LambdaVersion||(exports.LambdaVersion=LambdaVersion={}));var Mfa;(function(Mfa2){Mfa2.OFF="OFF",Mfa2.OPTIONAL="OPTIONAL",Mfa2.REQUIRED="ON"})(Mfa||(exports.Mfa=Mfa={}));var AccountRecovery;(function(AccountRecovery2){AccountRecovery2[AccountRecovery2.EMAIL_AND_PHONE_WITHOUT_MFA=0]="EMAIL_AND_PHONE_WITHOUT_MFA",AccountRecovery2[AccountRecovery2.PHONE_WITHOUT_MFA_AND_EMAIL=1]="PHONE_WITHOUT_MFA_AND_EMAIL",AccountRecovery2[AccountRecovery2.EMAIL_ONLY=2]="EMAIL_ONLY",AccountRecovery2[AccountRecovery2.PHONE_ONLY_WITHOUT_MFA=3]="PHONE_ONLY_WITHOUT_MFA",AccountRecovery2[AccountRecovery2.PHONE_AND_EMAIL=4]="PHONE_AND_EMAIL",AccountRecovery2[AccountRecovery2.NONE=5]="NONE"})(AccountRecovery||(exports.AccountRecovery=AccountRecovery={}));var AdvancedSecurityMode;(function(AdvancedSecurityMode2){AdvancedSecurityMode2.ENFORCED="ENFORCED",AdvancedSecurityMode2.AUDIT="AUDIT",AdvancedSecurityMode2.OFF="OFF"})(AdvancedSecurityMode||(exports.AdvancedSecurityMode=AdvancedSecurityMode={}));class UserPoolBase extends core_1().Resource{constructor(){super(...arguments),this.identityProviders=[]}addClient(id,options){return new(user_pool_client_1()).UserPoolClient(this,id,{userPool:this,...options})}addDomain(id,options){return new(user_pool_domain_1()).UserPoolDomain(this,id,{userPool:this,...options})}addResourceServer(id,options){return new(user_pool_resource_server_1()).UserPoolResourceServer(this,id,{userPool:this,...options})}registerIdentityProvider(provider){this.identityProviders.push(provider)}grant(grantee,...actions){return aws_iam_1().Grant.addToPrincipal({grantee,actions,resourceArns:[this.userPoolArn],scope:this})}}class UserPool extends UserPoolBase{static fromUserPoolId(scope,id,userPoolId){let userPoolArn=core_1().Stack.of(scope).formatArn({service:"cognito-idp",resource:"userpool",resourceName:userPoolId});return UserPool.fromUserPoolArn(scope,id,userPoolArn)}static fromUserPoolArn(scope,id,userPoolArn){const arnParts=core_1().Stack.of(scope).splitArn(userPoolArn,core_1().ArnFormat.SLASH_RESOURCE_NAME);if(!arnParts.resourceName)throw new Error("invalid user pool ARN");const userPoolId=arnParts.resourceName;class ImportedUserPool extends UserPoolBase{constructor(){super(scope,id,{account:arnParts.account,region:arnParts.region}),this.userPoolArn=userPoolArn,this.userPoolId=userPoolId}}return new ImportedUserPool}constructor(scope,id,props={}){super(scope,id),this.triggers={};try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_UserPoolProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,UserPool),error}const signIn=this.signInConfiguration(props);if(props.customSenderKmsKey){const kmsKey=props.customSenderKmsKey;this.triggers.kmsKeyId=kmsKey.keyArn}if(props.lambdaTriggers)for(const t of Object.keys(props.lambdaTriggers)){let trigger;switch(t){case"customSmsSender":case"customEmailSender":if(!this.triggers.kmsKeyId)throw new Error("you must specify a KMS key if you are using customSmsSender or customEmailSender.");trigger=props.lambdaTriggers[t];const version="V1_0";trigger!==void 0&&(this.addLambdaPermission(trigger,t),this.triggers[t]={lambdaArn:trigger.functionArn,lambdaVersion:version});break;default:trigger=props.lambdaTriggers[t],trigger!==void 0&&(this.addLambdaPermission(trigger,t),this.triggers[t]=trigger.functionArn);break}}const verificationMessageTemplate=this.verificationMessageConfiguration(props);let emailVerificationMessage,emailVerificationSubject;verificationMessageTemplate.defaultEmailOption===VerificationEmailStyle.CODE&&(emailVerificationMessage=verificationMessageTemplate.emailMessage,emailVerificationSubject=verificationMessageTemplate.emailSubject);const smsVerificationMessage=verificationMessageTemplate.smsMessage,inviteMessageTemplate={emailMessage:props.userInvitation?.emailBody,emailSubject:props.userInvitation?.emailSubject,smsMessage:props.userInvitation?.smsMessage},adminCreateUserConfig={allowAdminCreateUserOnly:!(props.selfSignUpEnabled??!1),inviteMessageTemplate:props.userInvitation!==void 0?inviteMessageTemplate:void 0},passwordPolicy=this.configurePasswordPolicy(props);if(props.email&&props.emailSettings)throw new Error('you must either provide "email" or "emailSettings", but not both');const emailConfiguration=props.email?props.email._bind(this):undefinedIfNoKeys({from:encodePuny(props.emailSettings?.from),replyToEmailAddress:encodePuny(props.emailSettings?.replyTo)}),userPool=new(cognito_generated_1()).CfnUserPool(this,"Resource",{userPoolName:props.userPoolName,usernameAttributes:signIn.usernameAttrs,aliasAttributes:signIn.aliasAttrs,autoVerifiedAttributes:signIn.autoVerifyAttrs,lambdaConfig:core_1().Lazy.any({produce:()=>undefinedIfNoKeys(this.triggers)}),smsAuthenticationMessage:this.mfaMessage(props),smsConfiguration:this.smsConfiguration(props),adminCreateUserConfig,emailVerificationMessage,emailVerificationSubject,smsVerificationMessage,verificationMessageTemplate,userPoolAddOns:undefinedIfNoKeys({advancedSecurityMode:props.advancedSecurityMode}),schema:this.schemaConfiguration(props),mfaConfiguration:props.mfa,enabledMfas:this.mfaConfiguration(props),policies:passwordPolicy!==void 0?{passwordPolicy}:void 0,emailConfiguration,usernameConfiguration:undefinedIfNoKeys({caseSensitive:props.signInCaseSensitive}),accountRecoverySetting:this.accountRecovery(props),deviceConfiguration:props.deviceTracking,userAttributeUpdateSettings:this.configureUserAttributeChanges(props),deletionProtection:defaultDeletionProtection(props.deletionProtection)});userPool.applyRemovalPolicy(props.removalPolicy),this.userPoolId=userPool.ref,this.userPoolArn=userPool.attrArn,this.userPoolProviderName=userPool.attrProviderName,this.userPoolProviderUrl=userPool.attrProviderUrl}addTrigger(operation,fn,lambdaVersion){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_UserPoolOperation(operation),jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_IFunction(fn),jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_LambdaVersion(lambdaVersion)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addTrigger),error}if(operation.operationName in this.triggers)throw new Error(`A trigger for the operation ${operation.operationName} already exists.`);if(operation!==UserPoolOperation.PRE_TOKEN_GENERATION_CONFIG&&lambdaVersion===LambdaVersion.V2_0)throw new Error("Only the `PRE_TOKEN_GENERATION_CONFIG` operation supports V2_0 lambda version.");switch(this.addLambdaPermission(fn,operation.operationName),operation.operationName){case"customEmailSender":case"customSmsSender":if(!this.triggers.kmsKeyId)throw new Error("you must specify a KMS key if you are using customSmsSender or customEmailSender.");this.triggers[operation.operationName]={lambdaArn:fn.functionArn,lambdaVersion:LambdaVersion.V1_0};break;case"preTokenGenerationConfig":this.triggers[operation.operationName]={lambdaArn:fn.functionArn,lambdaVersion:lambdaVersion??LambdaVersion.V1_0};break;default:this.triggers[operation.operationName]=fn.functionArn}}addLambdaPermission(fn,name){const capitalize=name.charAt(0).toUpperCase()+name.slice(1);fn.addPermission(`${capitalize}Cognito`,{principal:new(aws_iam_1()).ServicePrincipal("cognito-idp.amazonaws.com"),sourceArn:core_1().Lazy.string({produce:()=>this.userPoolArn}),scope:this})}mfaMessage(props){const CODE_TEMPLATE="{####}",message=props.mfaMessage;if(message&&!core_1().Token.isUnresolved(message)){if(!message.includes(CODE_TEMPLATE))throw new Error(`MFA message must contain the template string '${CODE_TEMPLATE}'`);if(message.length>140)throw new Error(`MFA message must be between ${CODE_TEMPLATE.length} and 140 characters`)}return message}verificationMessageConfiguration(props){const CODE_TEMPLATE="{####}",VERIFY_EMAIL_TEMPLATE="{##Verify Email##}",VERIFY_EMAIL_REGEX=/\{##[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*##\}/u,emailStyle=props.userVerification?.emailStyle??VerificationEmailStyle.CODE,emailSubject=props.userVerification?.emailSubject??"Verify your new account",smsMessage=props.userVerification?.smsMessage??`The verification code to your new account is ${CODE_TEMPLATE}`;if(emailStyle===VerificationEmailStyle.CODE){const emailMessage=props.userVerification?.emailBody??`The verification code to your new account is ${CODE_TEMPLATE}`;if(!core_1().Token.isUnresolved(emailMessage)&&emailMessage.indexOf(CODE_TEMPLATE)<0)throw new Error(`Verification email body must contain the template string '${CODE_TEMPLATE}'`);if(!core_1().Token.isUnresolved(smsMessage)&&smsMessage.indexOf(CODE_TEMPLATE)<0)throw new Error(`SMS message must contain the template string '${CODE_TEMPLATE}'`);return{defaultEmailOption:VerificationEmailStyle.CODE,emailMessage,emailSubject,smsMessage}}else{const emailMessage=props.userVerification?.emailBody??`Verify your account by clicking on ${VERIFY_EMAIL_TEMPLATE}`;if(!core_1().Token.isUnresolved(emailMessage)&&!VERIFY_EMAIL_REGEX.test(emailMessage))throw new Error(`Verification email body must contain the template string '${VERIFY_EMAIL_TEMPLATE}'`);return{defaultEmailOption:VerificationEmailStyle.LINK,emailMessageByLink:emailMessage,emailSubjectByLink:emailSubject,smsMessage}}}signInConfiguration(props){let aliasAttrs,usernameAttrs,autoVerifyAttrs;const signIn=props.signInAliases??{username:!0};if(signIn.preferredUsername&&!signIn.username)throw new Error("username signIn must be enabled if preferredUsername is enabled");return signIn.username?(aliasAttrs=[],signIn.email&&aliasAttrs.push(attr_names_1().StandardAttributeNames.email),signIn.phone&&aliasAttrs.push(attr_names_1().StandardAttributeNames.phoneNumber),signIn.preferredUsername&&aliasAttrs.push(attr_names_1().StandardAttributeNames.preferredUsername),aliasAttrs.length===0&&(aliasAttrs=void 0)):(usernameAttrs=[],signIn.email&&usernameAttrs.push(attr_names_1().StandardAttributeNames.email),signIn.phone&&usernameAttrs.push(attr_names_1().StandardAttributeNames.phoneNumber)),props.autoVerify?(autoVerifyAttrs=[],props.autoVerify.email&&autoVerifyAttrs.push(attr_names_1().StandardAttributeNames.email),props.autoVerify.phone&&autoVerifyAttrs.push(attr_names_1().StandardAttributeNames.phoneNumber)):(signIn.email||signIn.phone)&&(autoVerifyAttrs=[],signIn.email&&autoVerifyAttrs.push(attr_names_1().StandardAttributeNames.email),signIn.phone&&autoVerifyAttrs.push(attr_names_1().StandardAttributeNames.phoneNumber)),{usernameAttrs,aliasAttrs,autoVerifyAttrs}}smsConfiguration(props){if(props.enableSmsRole===!1&&props.smsRole)throw new Error("enableSmsRole cannot be disabled when smsRole is specified");if(props.smsRole)return{snsCallerArn:props.smsRole.roleArn,externalId:props.smsRoleExternalId,snsRegion:props.snsRegion};if(props.enableSmsRole===!1)return;const mfaConfiguration=this.mfaConfiguration(props),phoneVerification=props.signInAliases?.phone===!0||props.autoVerify?.phone===!0;if(!(mfaConfiguration?.includes("SMS_MFA")||phoneVerification)&&props.enableSmsRole===void 0)return;const smsRoleExternalId=core_1().Names.uniqueId(this).slice(0,1223),smsRole=props.smsRole??new(aws_iam_1()).Role(this,"smsRole",{assumedBy:new(aws_iam_1()).ServicePrincipal("cognito-idp.amazonaws.com",{conditions:{StringEquals:{"sts:ExternalId":smsRoleExternalId}}}),inlinePolicies:{"sns-publish":new(aws_iam_1()).PolicyDocument({statements:[new(aws_iam_1()).PolicyStatement({actions:["sns:Publish"],resources:["*"]})]})}});return{externalId:smsRoleExternalId,snsCallerArn:smsRole.roleArn,snsRegion:props.snsRegion}}mfaConfiguration(props){if(!(props.mfa===void 0||props.mfa===Mfa.OFF)){if(props.mfaSecondFactor===void 0&&(props.mfa===Mfa.OPTIONAL||props.mfa===Mfa.REQUIRED))return["SMS_MFA"];{const enabledMfas=[];return props.mfaSecondFactor.sms&&enabledMfas.push("SMS_MFA"),props.mfaSecondFactor.otp&&enabledMfas.push("SOFTWARE_TOKEN_MFA"),enabledMfas}}}configurePasswordPolicy(props){const tempPasswordValidity=props.passwordPolicy?.tempPasswordValidity;if(tempPasswordValidity!==void 0&&tempPasswordValidity.toDays()>core_1().Duration.days(365).toDays())throw new Error(`tempPasswordValidity cannot be greater than 365 days (received: ${tempPasswordValidity.toDays()})`);const minLength=props.passwordPolicy?props.passwordPolicy.minLength??8:void 0;if(minLength!==void 0&&(minLength<6||minLength>99))throw new Error(`minLength for password must be between 6 and 99 (received: ${minLength})`);return undefinedIfNoKeys({temporaryPasswordValidityDays:tempPasswordValidity?.toDays({integral:!0}),minimumLength:minLength,requireLowercase:props.passwordPolicy?.requireLowercase,requireUppercase:props.passwordPolicy?.requireUppercase,requireNumbers:props.passwordPolicy?.requireDigits,requireSymbols:props.passwordPolicy?.requireSymbols})}schemaConfiguration(props){const schema=[];if(props.standardAttributes){const stdAttributes=Object.entries(props.standardAttributes).filter(([,attr])=>!!attr).map(([attrName,attr])=>({name:attr_names_1().StandardAttributeNames[attrName],mutable:attr.mutable??!0,required:attr.required??!1}));schema.push(...stdAttributes)}if(props.customAttributes){const customAttrs=Object.keys(props.customAttributes).map(attrName=>{const attrConfig=props.customAttributes[attrName].bind(),numberConstraints={minValue:attrConfig.numberConstraints?.min?.toString(),maxValue:attrConfig.numberConstraints?.max?.toString()},stringConstraints={minLength:attrConfig.stringConstraints?.minLen?.toString(),maxLength:attrConfig.stringConstraints?.maxLen?.toString()};return{name:attrName,attributeDataType:attrConfig.dataType,numberAttributeConstraints:attrConfig.numberConstraints?numberConstraints:void 0,stringAttributeConstraints:attrConfig.stringConstraints?stringConstraints:void 0,mutable:attrConfig.mutable}});schema.push(...customAttrs)}if(schema.length!==0)return schema}accountRecovery(props){const accountRecovery=props.accountRecovery??AccountRecovery.PHONE_WITHOUT_MFA_AND_EMAIL;switch(accountRecovery){case AccountRecovery.EMAIL_AND_PHONE_WITHOUT_MFA:return{recoveryMechanisms:[{name:"verified_email",priority:1},{name:"verified_phone_number",priority:2}]};case AccountRecovery.PHONE_WITHOUT_MFA_AND_EMAIL:return{recoveryMechanisms:[{name:"verified_phone_number",priority:1},{name:"verified_email",priority:2}]};case AccountRecovery.EMAIL_ONLY:return{recoveryMechanisms:[{name:"verified_email",priority:1}]};case AccountRecovery.PHONE_ONLY_WITHOUT_MFA:return{recoveryMechanisms:[{name:"verified_phone_number",priority:1}]};case AccountRecovery.NONE:return{recoveryMechanisms:[{name:"admin_only",priority:1}]};case AccountRecovery.PHONE_AND_EMAIL:return;default:throw new Error(`Unsupported AccountRecovery type - ${accountRecovery}`)}}configureUserAttributeChanges(props){if(!props.keepOriginal)return;const attributesRequireVerificationBeforeUpdate=[];return props.keepOriginal.email&&attributesRequireVerificationBeforeUpdate.push(attr_names_1().StandardAttributeNames.email),props.keepOriginal.phone&&attributesRequireVerificationBeforeUpdate.push(attr_names_1().StandardAttributeNames.phoneNumber),{attributesRequireVerificationBeforeUpdate}}}exports.UserPool=UserPool,_b=JSII_RTTI_SYMBOL_1,UserPool[_b]={fqn:"aws-cdk-lib.aws_cognito.UserPool",version:"2.149.0"};function undefinedIfNoKeys(struct){return Object.values(struct).every(val=>val===void 0)?void 0:struct}function encodePuny(input){return input!==void 0?(0,punycode_1().toASCII)(input):input}function defaultDeletionProtection(deletionProtection){if(deletionProtection===!0)return"ACTIVE";if(deletionProtection===!1)return"INACTIVE"}
