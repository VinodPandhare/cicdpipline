"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.MultipartUserData=exports.MultipartBody=exports.UserData=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var machine_image_1=()=>{var tmp=require("./machine-image");return machine_image_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class UserData{static forLinux(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_LinuxUserDataOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.forLinux),error}return new LinuxUserData(options)}static forWindows(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_WindowsUserDataOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.forWindows),error}return new WindowsUserData(options)}static custom(content){const userData=new CustomUserData;return userData.addCommands(content),userData}static forOperatingSystem(os){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_OperatingSystemType(os)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.forOperatingSystem),error}switch(os){case machine_image_1().OperatingSystemType.LINUX:return UserData.forLinux();case machine_image_1().OperatingSystemType.WINDOWS:return UserData.forWindows();case machine_image_1().OperatingSystemType.UNKNOWN:throw new Error("Cannot determine UserData for unknown operating system type")}}}exports.UserData=UserData,_a=JSII_RTTI_SYMBOL_1,UserData[_a]={fqn:"aws-cdk-lib.aws_ec2.UserData",version:"2.149.0"};class LinuxUserData extends UserData{constructor(props={}){super(),this.props=props,this.lines=[],this.onExitLines=[]}addCommands(...commands){this.lines.push(...commands)}addOnExitCommands(...commands){this.onExitLines.push(...commands)}render(){return[this.props.shebang??"#!/bin/bash",...this.renderOnExitLines(),...this.lines].join(`
`)}addS3DownloadCommand(params){const s3Path=`s3://${params.bucket.bucketName}/${params.bucketKey}`,localPath=params.localFile&&params.localFile.length!==0?params.localFile:`/tmp/${params.bucketKey}`;return this.addCommands(`mkdir -p $(dirname '${localPath}')`,`aws s3 cp '${s3Path}' '${localPath}'`+(params.region!==void 0?` --region ${params.region}`:"")),localPath}addExecuteFileCommand(params){this.addCommands("set -e",`chmod +x '${params.filePath}'`,`'${params.filePath}' ${params.arguments??""}`.trim())}addSignalOnExitCommand(resource){const stack=core_1().Stack.of(resource),resourceID=resource.node.defaultChild.logicalId;this.addOnExitCommands(`/opt/aws/bin/cfn-signal --stack ${stack.stackName} --resource ${resourceID} --region ${stack.region} -e $exitCode || echo 'Failed to send Cloudformation Signal'`)}renderOnExitLines(){return this.onExitLines.length>0?["function exitTrap(){","exitCode=$?",...this.onExitLines,"}","trap exitTrap EXIT"]:[]}}class WindowsUserData extends UserData{constructor(props={}){super(),this.props=props,this.lines=[],this.onExitLines=[]}addCommands(...commands){this.lines.push(...commands)}addOnExitCommands(...commands){this.onExitLines.push(...commands)}render(){return`<powershell>${[...this.renderOnExitLines(),...this.lines,...this.onExitLines.length>0?['throw "Success"']:[]].join(`
`)}</powershell>${this.props.persist??!1?"<persist>true</persist>":""}`}addS3DownloadCommand(params){const localPath=params.localFile&&params.localFile.length!==0?params.localFile:`C:/temp/${params.bucketKey}`;return this.addCommands(`mkdir (Split-Path -Path '${localPath}' ) -ea 0`,`Read-S3Object -BucketName '${params.bucket.bucketName}' -key '${params.bucketKey}' -file '${localPath}' -ErrorAction Stop`+(params.region!==void 0?` -Region ${params.region}`:"")),localPath}addExecuteFileCommand(params){this.addCommands(`&'${params.filePath}' ${params.arguments??""}`.trim(),`if (!$?) { Write-Error 'Failed to execute the file "${params.filePath}"' -ErrorAction Stop }`)}addSignalOnExitCommand(resource){const stack=core_1().Stack.of(resource),resourceID=resource.node.defaultChild.logicalId;this.addOnExitCommands(`cfn-signal --stack ${stack.stackName} --resource ${resourceID} --region ${stack.region} --success ($success.ToString().ToLower())`)}renderOnExitLines(){return this.onExitLines.length>0?["trap {",'$success=($PSItem.Exception.Message -eq "Success")',...this.onExitLines,"break","}"]:[]}}class CustomUserData extends UserData{constructor(){super(),this.lines=[]}addCommands(...commands){this.lines.push(...commands)}addOnExitCommands(){throw new Error("CustomUserData does not support addOnExitCommands, use UserData.forLinux() or UserData.forWindows() instead.")}render(){return this.lines.join(`
`)}addS3DownloadCommand(){throw new Error("CustomUserData does not support addS3DownloadCommand, use UserData.forLinux() or UserData.forWindows() instead.")}addExecuteFileCommand(){throw new Error("CustomUserData does not support addExecuteFileCommand, use UserData.forLinux() or UserData.forWindows() instead.")}addSignalOnExitCommand(){throw new Error("CustomUserData does not support addSignalOnExitCommand, use UserData.forLinux() or UserData.forWindows() instead.")}}class MultipartBody{static fromUserData(userData,contentType){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_UserData(userData)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromUserData),error}return new MultipartBodyUserDataWrapper(userData,contentType)}static fromRawBody(opts){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_MultipartBodyOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromRawBody),error}return new MultipartBodyRaw(opts)}constructor(){}}exports.MultipartBody=MultipartBody,_b=JSII_RTTI_SYMBOL_1,MultipartBody[_b]={fqn:"aws-cdk-lib.aws_ec2.MultipartBody",version:"2.149.0"},MultipartBody.SHELL_SCRIPT='text/x-shellscript; charset="utf-8"',MultipartBody.CLOUD_BOOTHOOK='text/cloud-boothook; charset="utf-8"';class MultipartBodyRaw extends MultipartBody{constructor(props){super(),this.props=props}renderBodyPart(){const result=[];return result.push(`Content-Type: ${this.props.contentType}`),this.props.transferEncoding!=null&&result.push(`Content-Transfer-Encoding: ${this.props.transferEncoding}`),result.push(""),this.props.body!=null&&result.push(this.props.body),result}}class MultipartBodyUserDataWrapper extends MultipartBody{constructor(userData,contentType){super(),this.userData=userData,this.contentType=contentType||MultipartBody.SHELL_SCRIPT}renderBodyPart(){const result=[];return result.push(`Content-Type: ${this.contentType}`),result.push("Content-Transfer-Encoding: base64"),result.push(""),result.push(core_1().Fn.base64(this.userData.render())),result}}class MultipartUserData extends UserData{constructor(opts){super(),this.parts=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_MultipartUserDataOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,MultipartUserData),error}let partsSeparator;if(opts?.partsSeparator!=null){if(new RegExp(MultipartUserData.BOUNDRY_PATTERN).test(opts.partsSeparator))throw new Error(`Invalid characters in separator. Separator has to match pattern ${MultipartUserData.BOUNDRY_PATTERN}`);partsSeparator=opts.partsSeparator}else partsSeparator="+AWS+CDK+User+Data+Separator==";this.opts={partsSeparator}}addPart(part){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_MultipartBody(part)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addPart),error}this.parts.push(part)}addUserDataPart(userData,contentType,makeDefault){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_UserData(userData)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addUserDataPart),error}this.addPart(MultipartBody.fromUserData(userData,contentType)),makeDefault=makeDefault??this.defaultUserData===void 0,makeDefault&&(this.defaultUserData=userData)}render(){const boundary=this.opts.partsSeparator;var resultArchive=new Array;return resultArchive.push(`Content-Type: multipart/mixed; boundary="${boundary}"`),resultArchive.push("MIME-Version: 1.0"),resultArchive.push(""),this.parts.forEach(part=>{resultArchive.push(`--${boundary}`),resultArchive.push(...part.renderBodyPart())}),resultArchive.push(`--${boundary}--`),resultArchive.push(""),resultArchive.join(`
`)}addS3DownloadCommand(params){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_S3DownloadOptions(params)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addS3DownloadCommand),error}if(this.defaultUserData)return this.defaultUserData.addS3DownloadCommand(params);throw new Error(MultipartUserData.USE_PART_ERROR)}addExecuteFileCommand(params){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_ExecuteFileOptions(params)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addExecuteFileCommand),error}if(this.defaultUserData)this.defaultUserData.addExecuteFileCommand(params);else throw new Error(MultipartUserData.USE_PART_ERROR)}addSignalOnExitCommand(resource){try{jsiiDeprecationWarnings().aws_cdk_lib_Resource(resource)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addSignalOnExitCommand),error}if(this.defaultUserData)this.defaultUserData.addSignalOnExitCommand(resource);else throw new Error(MultipartUserData.USE_PART_ERROR)}addCommands(...commands){if(this.defaultUserData)this.defaultUserData.addCommands(...commands);else throw new Error(MultipartUserData.USE_PART_ERROR)}addOnExitCommands(...commands){if(this.defaultUserData)this.defaultUserData.addOnExitCommands(...commands);else throw new Error(MultipartUserData.USE_PART_ERROR)}}exports.MultipartUserData=MultipartUserData,_c=JSII_RTTI_SYMBOL_1,MultipartUserData[_c]={fqn:"aws-cdk-lib.aws_ec2.MultipartUserData",version:"2.149.0"},MultipartUserData.USE_PART_ERROR="MultipartUserData only supports this operation if it has a default UserData. Call addUserDataPart with makeDefault=true.",MultipartUserData.BOUNDRY_PATTERN="[^a-zA-Z0-9()+,-./:=?]";