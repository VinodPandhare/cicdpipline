"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Asset=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var path=()=>{var tmp=require("path");return path=()=>tmp,tmp},constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},compat_1=()=>{var tmp=require("./compat");return compat_1=()=>tmp,tmp},kms=()=>{var tmp=require("../../aws-kms");return kms=()=>tmp,tmp},s3=()=>{var tmp=require("../../aws-s3");return s3=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../cx-api");return cxapi=()=>tmp,tmp};class Asset extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Asset),error}if(!props.path)throw new Error("Asset path cannot be empty");this.isBundled=props.bundling!=null;const staging=new(cdk()).AssetStaging(this,"Stage",{...props,sourcePath:path().resolve(props.path),follow:props.followSymlinks??(0,compat_1().toSymlinkFollow)(props.follow),assetHash:props.assetHash??props.sourceHash});this.assetHash=staging.assetHash,this.sourceHash=this.assetHash;const stack=cdk().Stack.of(this);this.assetPath=staging.relativeStagedPath(stack),this.isFile=staging.packaging===cdk().FileAssetPackaging.FILE,this.isZipArchive=staging.isArchive;const location=stack.synthesizer.addFileAsset({packaging:staging.packaging,sourceHash:this.sourceHash,fileName:this.assetPath,deployTime:props.deployTime});this.s3BucketName=location.bucketName,this.s3ObjectKey=location.objectKey,this.s3ObjectUrl=location.s3ObjectUrl,this.httpUrl=location.httpUrl,this.s3Url=location.httpUrl;const kmsKey=location.kmsKeyArn?kms().Key.fromKeyArn(this,"Key",location.kmsKeyArn):void 0;this.bucket=s3().Bucket.fromBucketAttributes(this,"AssetBucket",{bucketName:this.s3BucketName,encryptionKey:kmsKey});for(const reader of props.readers??[])this.grantRead(reader)}addResourceMetadata(resource,resourceProperty){try{jsiiDeprecationWarnings().aws_cdk_lib_CfnResource(resource)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addResourceMetadata),error}this.node.tryGetContext(cxapi().ASSET_RESOURCE_METADATA_ENABLED_CONTEXT)&&(resource.cfnOptions.metadata=resource.cfnOptions.metadata||{},resource.cfnOptions.metadata[cxapi().ASSET_RESOURCE_METADATA_PATH_KEY]=this.assetPath,resource.cfnOptions.metadata[cxapi().ASSET_RESOURCE_METADATA_IS_BUNDLED_KEY]=this.isBundled,resource.cfnOptions.metadata[cxapi().ASSET_RESOURCE_METADATA_PROPERTY_KEY]=resourceProperty)}grantRead(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantRead),error}this.bucket.grantRead(grantee)}}exports.Asset=Asset,_a=JSII_RTTI_SYMBOL_1,Asset[_a]={fqn:"aws-cdk-lib.aws_s3_assets.Asset",version:"2.149.0"};