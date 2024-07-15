"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UntrustedCodeBoundaryPolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp};class UntrustedCodeBoundaryPolicy extends iam().ManagedPolicy{constructor(scope,id,props={}){super(scope,id,{managedPolicyName:props.managedPolicyName,description:"Permissions Boundary Policy for CodeBuild Projects running untrusted code",statements:[new(iam()).PolicyStatement({actions:["logs:CreateLogGroup","logs:CreateLogStream","logs:PutLogEvents","codebuild:CreateReportGroup","codebuild:CreateReport","codebuild:UpdateReport","codebuild:BatchPutTestCases","codebuild:BatchPutCodeCoverages","codebuild:StartBuild","codebuild:StopBuild","codebuild:RetryBuild","ecr:GetDownloadUrlForLayer","ecr:BatchGetImage","ecr:BatchCheckLayerAvailability","ec2:CreateNetworkInterfacePermission","ec2:CreateNetworkInterface","ec2:DescribeNetworkInterfaces","ec2:DeleteNetworkInterface","ec2:DescribeSubnets","ec2:DescribeSecurityGroups","ec2:DescribeDhcpOptions","ec2:DescribeVpcs"],resources:["*"]}),...props.additionalStatements??[]]});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codebuild_UntrustedCodeBoundaryPolicyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,UntrustedCodeBoundaryPolicy),error}}}exports.UntrustedCodeBoundaryPolicy=UntrustedCodeBoundaryPolicy,_a=JSII_RTTI_SYMBOL_1,UntrustedCodeBoundaryPolicy[_a]={fqn:"aws-cdk-lib.aws_codebuild.UntrustedCodeBoundaryPolicy",version:"2.149.0"};
