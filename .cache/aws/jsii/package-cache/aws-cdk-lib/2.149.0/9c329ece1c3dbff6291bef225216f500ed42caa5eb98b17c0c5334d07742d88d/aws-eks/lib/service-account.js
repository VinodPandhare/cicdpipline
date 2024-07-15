"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ServiceAccount=exports.IdentityType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},index_1=()=>{var tmp=require("./index");return index_1=()=>tmp,tmp},k8s_manifest_1=()=>{var tmp=require("./k8s-manifest");return k8s_manifest_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},IdentityType;(function(IdentityType2){IdentityType2.IRSA="IRSA",IdentityType2.POD_IDENTITY="POD_IDENTITY"})(IdentityType||(exports.IdentityType=IdentityType={}));class ServiceAccount extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_eks_ServiceAccountProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ServiceAccount),error}const{cluster}=props;if(this.serviceAccountName=props.name??core_1().Names.uniqueId(this).toLowerCase(),this.serviceAccountNamespace=props.namespace??"default",!this.isValidDnsSubdomainName(this.serviceAccountName))throw RangeError("The name of a ServiceAccount object must be a valid DNS subdomain name.");if(!this.isValidDnsLabelName(this.serviceAccountNamespace))throw RangeError("All namespace names must be valid RFC 1123 DNS labels.");let principal;if(props.identityType!==IdentityType.POD_IDENTITY){const conditions=new(core_1()).CfnJson(this,"ConditionJson",{value:{[`${cluster.openIdConnectProvider.openIdConnectProviderIssuer}:aud`]:"sts.amazonaws.com",[`${cluster.openIdConnectProvider.openIdConnectProviderIssuer}:sub`]:`system:serviceaccount:${this.serviceAccountNamespace}:${this.serviceAccountName}`}});principal=new(aws_iam_1()).OpenIdConnectPrincipal(cluster.openIdConnectProvider).withConditions({StringEquals:conditions})}else{if(cluster instanceof index_1().FargateCluster)throw Error("Pod Identity is not supported in Fargate. Use IRSA identity type instead.");principal=new(aws_iam_1()).ServicePrincipal("pods.eks.amazonaws.com")}const role=new(aws_iam_1()).Role(this,"Role",{assumedBy:principal});props.identityType===IdentityType.POD_IDENTITY&&(role.assumeRolePolicy.addStatements(new(aws_iam_1()).PolicyStatement({actions:["sts:AssumeRole","sts:TagSession"],principals:[new(aws_iam_1()).ServicePrincipal("pods.eks.amazonaws.com")]})),cluster.eksPodIdentityAgent,new(index_1()).CfnPodIdentityAssociation(this,"Association",{clusterName:cluster.clusterName,namespace:props.namespace??"default",roleArn:role.roleArn,serviceAccount:this.serviceAccountName})),this.role=role,this.assumeRoleAction=this.role.assumeRoleAction,this.grantPrincipal=this.role.grantPrincipal,this.policyFragment=this.role.policyFragment,new(k8s_manifest_1()).KubernetesManifest(this,`manifest-${id}ServiceAccountResource`,{cluster,manifest:[{apiVersion:"v1",kind:"ServiceAccount",metadata:{name:this.serviceAccountName,namespace:this.serviceAccountNamespace,labels:{"app.kubernetes.io/name":this.serviceAccountName,...props.labels},annotations:{"eks.amazonaws.com/role-arn":this.role.roleArn,...props.annotations}}}]})}addToPolicy(statement){return this.addToPrincipalPolicy(statement).statementAdded}addToPrincipalPolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToPrincipalPolicy),error}return this.role.addToPrincipalPolicy(statement)}isValidDnsSubdomainName(value){return value.length<=253&&/^[a-z0-9]+[a-z0-9-.]*[a-z0-9]+$/.test(value)}isValidDnsLabelName(value){return value.length<=63&&/^[a-z0-9]+[a-z0-9-]*[a-z0-9]+$/.test(value)}}exports.ServiceAccount=ServiceAccount,_a=JSII_RTTI_SYMBOL_1,ServiceAccount[_a]={fqn:"aws-cdk-lib.aws_eks.ServiceAccount",version:"2.149.0"};