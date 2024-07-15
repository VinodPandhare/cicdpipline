"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AccessPoint=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var efs_generated_1=()=>{var tmp=require("./efs.generated");return efs_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class AccessPointBase extends core_1().Resource{}class AccessPoint extends AccessPointBase{static fromAccessPointAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_efs_AccessPointAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAccessPointAttributes),error}return new ImportedAccessPoint(scope,id,attrs)}static fromAccessPointId(scope,id,accessPointId){return new ImportedAccessPoint(scope,id,{accessPointId})}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_efs_AccessPointProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AccessPoint),error}const resource=new(efs_generated_1()).CfnAccessPoint(this,"Resource",{fileSystemId:props.fileSystem.fileSystemId,rootDirectory:{creationInfo:props.createAcl?{ownerGid:props.createAcl.ownerGid,ownerUid:props.createAcl.ownerUid,permissions:props.createAcl.permissions}:void 0,path:props.path},posixUser:props.posixUser?{uid:props.posixUser.uid,gid:props.posixUser.gid,secondaryGids:props.posixUser.secondaryGids}:void 0});core_1().Tags.of(this).add("Name",this.node.path),this.accessPointId=resource.ref,this.accessPointArn=core_1().Stack.of(scope).formatArn({service:"elasticfilesystem",resource:"access-point",resourceName:this.accessPointId}),this.fileSystem=props.fileSystem}}exports.AccessPoint=AccessPoint,_a=JSII_RTTI_SYMBOL_1,AccessPoint[_a]={fqn:"aws-cdk-lib.aws_efs.AccessPoint",version:"2.149.0"};class ImportedAccessPoint extends AccessPointBase{constructor(scope,id,attrs){if(super(scope,id),attrs.accessPointId){if(attrs.accessPointArn)throw new Error("Only one of accessPointId or AccessPointArn can be provided!");this.accessPointId=attrs.accessPointId,this.accessPointArn=core_1().Stack.of(scope).formatArn({service:"elasticfilesystem",resource:"access-point",resourceName:attrs.accessPointId})}else{if(!attrs.accessPointArn)throw new Error("One of accessPointId or AccessPointArn is required!");this.accessPointArn=attrs.accessPointArn;let maybeApId=core_1().Stack.of(scope).splitArn(attrs.accessPointArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).resourceName;if(!maybeApId)throw new Error("ARN for AccessPoint must provide the resource name.");this.accessPointId=maybeApId}this._fileSystem=attrs.fileSystem}get fileSystem(){if(!this._fileSystem)throw new Error("fileSystem is only available if 'fromAccessPointAttributes()' is used and a fileSystem is passed in as an attribute.");return this._fileSystem}}
