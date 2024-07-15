"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LazyRole=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var role_1=()=>{var tmp=require("./role");return role_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp};class LazyRole extends cdk().Resource{constructor(scope,id,props){super(scope,id),this.props=props,this.grantPrincipal=this,this.principalAccount=this.env.account,this.assumeRoleAction="sts:AssumeRole",this.statements=new Array,this.policies=new Array,this.managedPolicies=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_LazyRoleProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LazyRole),error}}addToPrincipalPolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToPrincipalPolicy),error}return this.role?this.role.addToPrincipalPolicy(statement):(this.statements.push(statement),{statementAdded:!0,policyDependable:this})}addToPolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToPolicy),error}return this.addToPrincipalPolicy(statement).statementAdded}attachInlinePolicy(policy){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_Policy(policy)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attachInlinePolicy),error}this.role?this.role.attachInlinePolicy(policy):this.policies.push(policy)}addManagedPolicy(policy){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IManagedPolicy(policy)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addManagedPolicy),error}this.role?this.role.addManagedPolicy(policy):this.managedPolicies.push(policy)}get roleArn(){return this.instantiate().roleArn}get roleId(){return this.instantiate().roleId}get roleName(){return this.instantiate().roleName}get policyFragment(){return this.instantiate().policyFragment}grant(identity,...actions){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(identity)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grant),error}return this.instantiate().grant(identity,...actions)}grantPassRole(identity){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(identity)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantPassRole),error}return this.instantiate().grantPassRole(identity)}grantAssumeRole(identity){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(identity)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantAssumeRole),error}return this.instantiate().grantAssumeRole(identity)}instantiate(){if(!this.role){const role=new(role_1()).Role(this,"Default",this.props);this.statements.forEach(role.addToPolicy.bind(role)),this.policies.forEach(role.attachInlinePolicy.bind(role)),this.managedPolicies.forEach(role.addManagedPolicy.bind(role)),this.role=role}return this.role}}exports.LazyRole=LazyRole,_a=JSII_RTTI_SYMBOL_1,LazyRole[_a]={fqn:"aws-cdk-lib.aws_iam.LazyRole",version:"2.149.0"};