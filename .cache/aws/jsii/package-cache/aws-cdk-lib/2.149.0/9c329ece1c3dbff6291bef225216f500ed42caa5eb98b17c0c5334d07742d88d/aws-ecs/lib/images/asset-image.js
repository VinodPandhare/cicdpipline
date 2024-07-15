"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AssetImage=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var aws_ecr_assets_1=()=>{var tmp=require("../../../aws-ecr-assets");return aws_ecr_assets_1=()=>tmp,tmp},container_image_1=()=>{var tmp=require("../container-image");return container_image_1=()=>tmp,tmp};class AssetImage extends container_image_1().ContainerImage{constructor(directory,props={}){super(),this.directory=directory,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_AssetImageProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AssetImage),error}}bind(scope,containerDefinition){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ContainerDefinition(containerDefinition)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const asset=new(aws_ecr_assets_1()).DockerImageAsset(scope,"AssetImage",{directory:this.directory,...this.props});return asset.repository.grantPull(containerDefinition.taskDefinition.obtainExecutionRole()),{imageName:asset.imageUri}}}exports.AssetImage=AssetImage,_a=JSII_RTTI_SYMBOL_1,AssetImage[_a]={fqn:"aws-cdk-lib.aws_ecs.AssetImage",version:"2.149.0"};
