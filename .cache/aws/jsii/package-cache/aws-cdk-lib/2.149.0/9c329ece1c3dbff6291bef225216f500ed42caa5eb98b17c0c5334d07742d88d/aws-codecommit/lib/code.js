"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Code=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},assets=()=>{var tmp=require("../../aws-s3-assets");return assets=()=>tmp,tmp};class Code{static fromDirectory(directoryPath,branch){const resolvedPath=path().resolve(directoryPath),statResult=fs().statSync(resolvedPath);if(!statResult||!statResult.isDirectory())throw new Error(`'${directoryPath}' needs to be a path to a directory (resolved to: '${resolvedPath}')`);return new PathResolvedCode(resolvedPath,branch)}static fromZipFile(filePath,branch){const resolvedPath=path().resolve(filePath),statResult=fs().statSync(resolvedPath);if(!statResult||!statResult.isFile())throw new Error(`'${filePath}' needs to be a path to a ZIP file (resolved to: '${resolvedPath}')`);return new PathResolvedCode(resolvedPath,branch)}static fromAsset(asset,branch){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_Asset(asset)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAsset),error}return new AssetCode(asset,branch)}}exports.Code=Code,_a=JSII_RTTI_SYMBOL_1,Code[_a]={fqn:"aws-cdk-lib.aws_codecommit.Code",version:"2.149.0"};class PathResolvedCode extends Code{constructor(resolvedPath,branch){super(),this.resolvedPath=resolvedPath,this.branch=branch}bind(scope){const asset=new(assets()).Asset(scope,"PathResolvedCodeAsset",{path:this.resolvedPath});return new AssetCode(asset,this.branch).bind(scope)}}class AssetCode extends Code{constructor(asset,branch){super(),this.asset=asset,this.branch=branch}bind(_scope){if(!this.asset.isZipArchive)throw new Error("Asset must be a .zip file or a directory (resolved to: "+this.asset.assetPath+" )");return{code:{branchName:this.branch,s3:{bucket:this.asset.s3BucketName,key:this.asset.s3ObjectKey}}}}}
