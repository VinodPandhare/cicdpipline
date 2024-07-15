"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TmpfsMountOption=exports.DevicePermission=exports.LinuxParameters=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp};class LinuxParameters extends constructs_1().Construct{constructor(scope,id,props={}){super(scope,id),this.devices=new Array,this.tmpfs=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_batch_LinuxParametersProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LinuxParameters),error}this.validateProps(props),this.sharedMemorySize=props.sharedMemorySize,this.initProcessEnabled=props.initProcessEnabled,this.maxSwap=props.maxSwap,this.swappiness=props.maxSwap?props.swappiness:void 0}validateProps(props){if(!cdk().Token.isUnresolved(props.swappiness)&&props.swappiness!==void 0&&(!Number.isInteger(props.swappiness)||props.swappiness<0||props.swappiness>100))throw new Error(`swappiness: Must be an integer between 0 and 100; received ${props.swappiness}.`)}addDevices(...device){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_batch_Device(device)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addDevices),error}this.devices.push(...device)}addTmpfs(...tmpfs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_batch_Tmpfs(tmpfs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addTmpfs),error}this.tmpfs.push(...tmpfs)}renderLinuxParameters(){return{initProcessEnabled:this.initProcessEnabled,sharedMemorySize:this.sharedMemorySize?.toMebibytes(),maxSwap:this.maxSwap?.toMebibytes(),swappiness:this.swappiness,devices:cdk().Lazy.any({produce:()=>this.devices.map(renderDevice)},{omitEmptyArray:!0}),tmpfs:cdk().Lazy.any({produce:()=>this.tmpfs.map(renderTmpfs)},{omitEmptyArray:!0})}}}exports.LinuxParameters=LinuxParameters,_a=JSII_RTTI_SYMBOL_1,LinuxParameters[_a]={fqn:"aws-cdk-lib.aws_batch.LinuxParameters",version:"2.149.0"};var DevicePermission;(function(DevicePermission2){DevicePermission2.READ="read",DevicePermission2.WRITE="write",DevicePermission2.MKNOD="mknod"})(DevicePermission||(exports.DevicePermission=DevicePermission={}));var TmpfsMountOption;(function(TmpfsMountOption2){TmpfsMountOption2.DEFAULTS="defaults",TmpfsMountOption2.RO="ro",TmpfsMountOption2.RW="rw",TmpfsMountOption2.SUID="suid",TmpfsMountOption2.NOSUID="nosuid",TmpfsMountOption2.DEV="dev",TmpfsMountOption2.NODEV="nodev",TmpfsMountOption2.EXEC="exec",TmpfsMountOption2.NOEXEC="noexec",TmpfsMountOption2.SYNC="sync",TmpfsMountOption2.ASYNC="async",TmpfsMountOption2.DIRSYNC="dirsync",TmpfsMountOption2.REMOUNT="remount",TmpfsMountOption2.MAND="mand",TmpfsMountOption2.NOMAND="nomand",TmpfsMountOption2.ATIME="atime",TmpfsMountOption2.NOATIME="noatime",TmpfsMountOption2.DIRATIME="diratime",TmpfsMountOption2.NODIRATIME="nodiratime",TmpfsMountOption2.BIND="bind",TmpfsMountOption2.RBIND="rbind",TmpfsMountOption2.UNBINDABLE="unbindable",TmpfsMountOption2.RUNBINDABLE="runbindable",TmpfsMountOption2.PRIVATE="private",TmpfsMountOption2.RPRIVATE="rprivate",TmpfsMountOption2.SHARED="shared",TmpfsMountOption2.RSHARED="rshared",TmpfsMountOption2.SLAVE="slave",TmpfsMountOption2.RSLAVE="rslave",TmpfsMountOption2.RELATIME="relatime",TmpfsMountOption2.NORELATIME="norelatime",TmpfsMountOption2.STRICTATIME="strictatime",TmpfsMountOption2.NOSTRICTATIME="nostrictatime",TmpfsMountOption2.MODE="mode",TmpfsMountOption2.UID="uid",TmpfsMountOption2.GID="gid",TmpfsMountOption2.NR_INODES="nr_inodes",TmpfsMountOption2.NR_BLOCKS="nr_blocks",TmpfsMountOption2.MPOL="mpol"})(TmpfsMountOption||(exports.TmpfsMountOption=TmpfsMountOption={}));function renderTmpfs(tmpfs){return{containerPath:tmpfs.containerPath,size:tmpfs.size.toMebibytes(),mountOptions:tmpfs.mountOptions}}function renderDevice(device){return{containerPath:device.containerPath,hostPath:device.hostPath,permissions:device.permissions}}
