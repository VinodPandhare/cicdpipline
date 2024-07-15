"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.InstanceProfile=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam_generated_1=()=>{var tmp=require("./iam.generated");return iam_generated_1=()=>tmp,tmp},principals_1=()=>{var tmp=require("./principals");return principals_1=()=>tmp,tmp},role_1=()=>{var tmp=require("./role");return role_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class InstanceProfileBase extends core_1().Resource{get role(){return this._role}}class InstanceProfile extends InstanceProfileBase{static fromInstanceProfileName(scope,id,instanceProfileName){const instanceProfileArn=core_1().Stack.of(scope).formatArn({service:"iam",region:"",resource:"instance-profile",resourceName:instanceProfileName});return InstanceProfile.fromInstanceProfileAttributes(scope,id,{instanceProfileArn})}static fromInstanceProfileArn(scope,id,instanceProfileArn){return InstanceProfile.fromInstanceProfileAttributes(scope,id,{instanceProfileArn})}static fromInstanceProfileAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_InstanceProfileAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromInstanceProfileAttributes),error}class Import extends InstanceProfileBase{constructor(s,i){super(s,i),this.instanceProfileName=core_1().Arn.extractResourceName(attrs.instanceProfileArn,"instance-profile").split("/").pop(),this.instanceProfileArn=attrs.instanceProfileArn,this._role=attrs.role}}return new Import(scope,id)}constructor(scope,id,props={}){super(scope,id,{physicalName:props.instanceProfileName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_InstanceProfileProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,InstanceProfile),error}this._role=props.role||new(role_1()).Role(this,"InstanceRole",{roleName:core_1().PhysicalName.GENERATE_IF_NEEDED,assumedBy:new(principals_1()).ServicePrincipal("ec2.amazonaws.com")});const instanceProfile=new(iam_generated_1()).CfnInstanceProfile(this,"Resource",{roles:[this._role.roleName],instanceProfileName:this.physicalName,path:props.path});this.instanceProfileName=this.getResourceNameAttribute(instanceProfile.ref),this.instanceProfileArn=this.getResourceArnAttribute(instanceProfile.attrArn,{region:"",service:"iam",resource:"instance-profile",resourceName:`${props.path?props.path.substring(props.path.charAt(0)==="/"?1:0):""}${this.physicalName}`})}}exports.InstanceProfile=InstanceProfile,_a=JSII_RTTI_SYMBOL_1,InstanceProfile[_a]={fqn:"aws-cdk-lib.aws_iam.InstanceProfile",version:"2.149.0"};
