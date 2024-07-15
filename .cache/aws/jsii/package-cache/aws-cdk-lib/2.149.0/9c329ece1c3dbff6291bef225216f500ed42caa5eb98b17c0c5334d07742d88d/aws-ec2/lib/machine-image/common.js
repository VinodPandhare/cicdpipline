"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AmazonLinuxStorage=exports.AmazonLinuxVirt=exports.AmazonLinuxEdition=exports.AmazonLinuxCpuType=exports.OperatingSystemType=exports.AmazonLinuxGeneration=exports.AmazonLinuxImageSsmParameterBase=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var utils_1=()=>{var tmp=require("./utils");return utils_1=()=>tmp,tmp},user_data_1=()=>{var tmp=require("../user-data");return user_data_1=()=>tmp,tmp};class AmazonLinuxImageSsmParameterBase{constructor(props){this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_AmazonLinuxImageSsmParameterBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AmazonLinuxImageSsmParameterBase),error}this.cachedInContext=this.props.cachedInContext??!0}getImage(scope){const imageId=(0,utils_1().lookupImage)(scope,this.cachedInContext,this.props.parameterName),osType=OperatingSystemType.LINUX;return{imageId,osType,userData:this.props.userData??user_data_1().UserData.forLinux()}}}exports.AmazonLinuxImageSsmParameterBase=AmazonLinuxImageSsmParameterBase,_a=JSII_RTTI_SYMBOL_1,AmazonLinuxImageSsmParameterBase[_a]={fqn:"aws-cdk-lib.aws_ec2.AmazonLinuxImageSsmParameterBase",version:"2.149.0"};var AmazonLinuxGeneration;(function(AmazonLinuxGeneration2){AmazonLinuxGeneration2.AMAZON_LINUX="amzn",AmazonLinuxGeneration2.AMAZON_LINUX_2="amzn2",AmazonLinuxGeneration2.AMAZON_LINUX_2022="al2022",AmazonLinuxGeneration2.AMAZON_LINUX_2023="al2023"})(AmazonLinuxGeneration||(exports.AmazonLinuxGeneration=AmazonLinuxGeneration={}));var OperatingSystemType;(function(OperatingSystemType2){OperatingSystemType2[OperatingSystemType2.LINUX=0]="LINUX",OperatingSystemType2[OperatingSystemType2.WINDOWS=1]="WINDOWS",OperatingSystemType2[OperatingSystemType2.UNKNOWN=2]="UNKNOWN"})(OperatingSystemType||(exports.OperatingSystemType=OperatingSystemType={}));var AmazonLinuxCpuType;(function(AmazonLinuxCpuType2){AmazonLinuxCpuType2.ARM_64="arm64",AmazonLinuxCpuType2.X86_64="x86_64"})(AmazonLinuxCpuType||(exports.AmazonLinuxCpuType=AmazonLinuxCpuType={}));var AmazonLinuxEdition;(function(AmazonLinuxEdition2){AmazonLinuxEdition2.STANDARD="standard",AmazonLinuxEdition2.MINIMAL="minimal"})(AmazonLinuxEdition||(exports.AmazonLinuxEdition=AmazonLinuxEdition={}));var AmazonLinuxVirt;(function(AmazonLinuxVirt2){AmazonLinuxVirt2.HVM="hvm",AmazonLinuxVirt2.PV="pv"})(AmazonLinuxVirt||(exports.AmazonLinuxVirt=AmazonLinuxVirt={}));var AmazonLinuxStorage;(function(AmazonLinuxStorage2){AmazonLinuxStorage2.EBS="ebs",AmazonLinuxStorage2.S3="s3",AmazonLinuxStorage2.GENERAL_PURPOSE="gp2"})(AmazonLinuxStorage||(exports.AmazonLinuxStorage=AmazonLinuxStorage={}));