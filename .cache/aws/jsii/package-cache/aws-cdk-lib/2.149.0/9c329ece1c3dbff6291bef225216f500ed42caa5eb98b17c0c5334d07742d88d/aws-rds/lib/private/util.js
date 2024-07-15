"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyDefaultRotationOptions=exports.renderUnless=exports.helperRemovalPolicy=exports.renderSnapshotCredentials=exports.renderCredentials=exports.defaultDeletionProtection=exports.engineDescription=exports.setupS3ImportExport=exports.DEFAULT_PASSWORD_EXCLUDE_CHARS=void 0;var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},database_secret_1=()=>{var tmp=require("../database-secret");return database_secret_1=()=>tmp,tmp},props_1=()=>{var tmp=require("../props");return props_1=()=>tmp,tmp};exports.DEFAULT_PASSWORD_EXCLUDE_CHARS=" %+~`#$&*()|[]{}:;<>?!'/@\"\\";function setupS3ImportExport(scope,props,combineRoles){let s3ImportRole=props.s3ImportRole,s3ExportRole=props.s3ExportRole;if(props.s3ImportBuckets&&props.s3ImportBuckets.length>0){if(props.s3ImportRole)throw new Error("Only one of s3ImportRole or s3ImportBuckets must be specified, not both.");s3ImportRole=combineRoles&&s3ExportRole?s3ExportRole:new(iam()).Role(scope,"S3ImportRole",{assumedBy:new(iam()).ServicePrincipal("rds.amazonaws.com")});for(const bucket of props.s3ImportBuckets)bucket.grantRead(s3ImportRole)}if(props.s3ExportBuckets&&props.s3ExportBuckets.length>0){if(props.s3ExportRole)throw new Error("Only one of s3ExportRole or s3ExportBuckets must be specified, not both.");s3ExportRole=combineRoles&&s3ImportRole?s3ImportRole:new(iam()).Role(scope,"S3ExportRole",{assumedBy:new(iam()).ServicePrincipal("rds.amazonaws.com")});for(const bucket of props.s3ExportBuckets)bucket.grantReadWrite(s3ExportRole)}return{s3ImportRole,s3ExportRole}}exports.setupS3ImportExport=setupS3ImportExport;function engineDescription(engine){return engine.engineType+(engine.engineVersion?.fullVersion?`-${engine.engineVersion.fullVersion}`:"")}exports.engineDescription=engineDescription;function defaultDeletionProtection(deletionProtection,removalPolicy){return deletionProtection??(removalPolicy===core_1().RemovalPolicy.RETAIN?!0:void 0)}exports.defaultDeletionProtection=defaultDeletionProtection;function renderCredentials(scope,engine,credentials){let renderedCredentials=credentials??props_1().Credentials.fromUsername(engine.defaultUsername??"admin");return!renderedCredentials.secret&&!renderedCredentials.password&&(renderedCredentials=props_1().Credentials.fromSecret(new(database_secret_1()).DatabaseSecret(scope,"Secret",{username:renderedCredentials.username,secretName:renderedCredentials.secretName,encryptionKey:renderedCredentials.encryptionKey,excludeCharacters:renderedCredentials.excludeCharacters,replaceOnPasswordCriteriaChanges:credentials?.usernameAsString,replicaRegions:renderedCredentials.replicaRegions}),credentials?.usernameAsString?renderedCredentials.username:void 0)),renderedCredentials}exports.renderCredentials=renderCredentials;function renderSnapshotCredentials(scope,credentials){let renderedCredentials=credentials;if(!renderedCredentials?.secret&&renderedCredentials?.generatePassword){if(!renderedCredentials.username)throw new Error("`snapshotCredentials` `username` must be specified when `generatePassword` is set to true");renderedCredentials=props_1().SnapshotCredentials.fromSecret(new(database_secret_1()).DatabaseSecret(scope,"SnapshotSecret",{username:renderedCredentials.username,encryptionKey:renderedCredentials.encryptionKey,excludeCharacters:renderedCredentials.excludeCharacters,replaceOnPasswordCriteriaChanges:renderedCredentials.replaceOnPasswordCriteriaChanges,replicaRegions:renderedCredentials.replicaRegions}))}return renderedCredentials}exports.renderSnapshotCredentials=renderSnapshotCredentials;function helperRemovalPolicy(basePolicy){return basePolicy===core_1().RemovalPolicy.RETAIN?core_1().RemovalPolicy.RETAIN:core_1().RemovalPolicy.DESTROY}exports.helperRemovalPolicy=helperRemovalPolicy;function renderUnless(value,suppressValue){return value===suppressValue?void 0:value}exports.renderUnless=renderUnless;function applyDefaultRotationOptions(options,defaultvpcSubnets){return{excludeCharacters:exports.DEFAULT_PASSWORD_EXCLUDE_CHARS,vpcSubnets:defaultvpcSubnets,...options}}exports.applyDefaultRotationOptions=applyDefaultRotationOptions;