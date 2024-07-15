"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AssetSingletonRole=void 0;var iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};class AssetSingletonRole extends iam().Role{constructor(scope,id,props){super(scope,id,props),this._rejectDuplicates=!1,this.addToPolicy(new(iam()).PolicyStatement({resources:[core_1().Stack.of(this).formatArn({service:"logs",resource:"log-group",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME,resourceName:"/aws/codebuild/*"})],actions:["logs:CreateLogGroup","logs:CreateLogStream","logs:PutLogEvents"]})),this.addToPolicy(new(iam()).PolicyStatement({actions:["codebuild:CreateReportGroup","codebuild:CreateReport","codebuild:UpdateReport","codebuild:BatchPutTestCases","codebuild:BatchPutCodeCoverages"],resources:[core_1().Stack.of(this).formatArn({service:"codebuild",resource:"report-group",resourceName:"*"})]})),this.addToPolicy(new(iam()).PolicyStatement({resources:["*"],actions:["codebuild:BatchGetBuilds","codebuild:StartBuild","codebuild:StopBuild"]})),this._rejectDuplicates=!0}addToPrincipalPolicy(statement){const json=statement.toStatementJson(),acts=JSON.stringify(json.Action),alreadyAdded=['["logs:CreateLogGroup","logs:CreateLogStream","logs:PutLogEvents"]','["codebuild:CreateReportGroup","codebuild:CreateReport","codebuild:UpdateReport","codebuild:BatchPutTestCases","codebuild:BatchPutCodeCoverages"]','["codebuild:BatchGetBuilds","codebuild:StartBuild","codebuild:StopBuild"]'];return this._rejectDuplicates&&alreadyAdded.includes(acts)?{statementAdded:!0,policyDependable:new class{}}:acts==='["kms:Decrypt","kms:Encrypt","kms:ReEncrypt*","kms:GenerateDataKey*"]'?{statementAdded:!0,policyDependable:new class{}}:super.addToPrincipalPolicy(statement)}addAssumeRole(roleArn){this._assumeRoleStatement||(this._assumeRoleStatement=new(iam()).PolicyStatement({actions:["sts:AssumeRole"]}),this.addToPrincipalPolicy(this._assumeRoleStatement));const MAX_ARNS_PER_STATEMENT=10;this._assumeRoleStatement.addResources(roleArn),this._assumeRoleStatement.resources.length>=MAX_ARNS_PER_STATEMENT&&(this._assumeRoleStatement=void 0)}}exports.AssetSingletonRole=AssetSingletonRole;