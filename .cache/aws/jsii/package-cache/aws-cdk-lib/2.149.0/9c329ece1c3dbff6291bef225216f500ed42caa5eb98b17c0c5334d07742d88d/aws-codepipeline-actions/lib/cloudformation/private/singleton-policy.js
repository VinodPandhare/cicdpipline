"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseCapabilities=exports.SingletonPolicy=void 0;var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../../core");return cdk=()=>tmp,tmp};class SingletonPolicy extends constructs_1().Construct{static forRole(role){return role.node.tryFindChild(SingletonPolicy.UUID)||new SingletonPolicy(role)}constructor(role){super(role,SingletonPolicy.UUID),this.role=role,this.statements={},this.grantPrincipal=role}grantExecuteChangeSet(props){this.statementFor({actions:["cloudformation:DescribeStacks","cloudformation:DescribeStackEvents","cloudformation:DescribeChangeSet","cloudformation:ExecuteChangeSet"],conditions:{StringEqualsIfExists:{"cloudformation:ChangeSetName":props.changeSetName}}}).addResources(this.stackArnFromProps(props))}grantCreateReplaceChangeSet(props){this.statementFor({actions:["cloudformation:CreateChangeSet","cloudformation:DeleteChangeSet","cloudformation:DescribeChangeSet","cloudformation:DescribeStacks"],conditions:{StringEqualsIfExists:{"cloudformation:ChangeSetName":props.changeSetName}}}).addResources(this.stackArnFromProps(props))}grantCreateUpdateStack(props){const actions=["cloudformation:DescribeStack*","cloudformation:CreateStack","cloudformation:UpdateStack","cloudformation:GetTemplate*","cloudformation:ValidateTemplate","cloudformation:GetStackPolicy","cloudformation:SetStackPolicy"];props.replaceOnFailure&&actions.push("cloudformation:DeleteStack"),this.statementFor({actions}).addResources(this.stackArnFromProps(props))}grantCreateUpdateStackSet(props){const actions=["cloudformation:CreateStackSet","cloudformation:UpdateStackSet","cloudformation:DescribeStackSet","cloudformation:DescribeStackSetOperation","cloudformation:ListStackInstances","cloudformation:CreateStackInstances"];this.statementFor({actions}).addResources(this.stackSetArnFromProps(props))}grantDeleteStack(props){this.statementFor({actions:["cloudformation:DescribeStack*","cloudformation:DeleteStack"]}).addResources(this.stackArnFromProps(props))}grantPassRole(role){this.statementFor({actions:["iam:PassRole"]}).addResources(typeof role=="string"?role:role.roleArn)}statementFor(template){const key=keyFor(template);return key in this.statements||(this.statements[key]=new(iam()).PolicyStatement({actions:template.actions}),template.conditions&&this.statements[key].addConditions(template.conditions),this.role.addToPolicy(this.statements[key])),this.statements[key];function keyFor(props){const actions=`${props.actions.sort().join("")}`,conditions=formatConditions(props.conditions);return`${actions}${conditions}`;function formatConditions(cond){if(cond==null)return"";let result="";for(const op of Object.keys(cond).sort()){result+=`${op}`;const condition=cond[op];for(const attribute of Object.keys(condition).sort()){const value=condition[attribute];result+=`${value}`}}return result}}}stackArnFromProps(props){return cdk().Stack.of(this).formatArn({region:props.region,service:"cloudformation",resource:"stack",resourceName:`${props.stackName}/*`})}stackSetArnFromProps(props){return cdk().Stack.of(this).formatArn({region:props.region,service:"cloudformation",resource:"stackset",resourceName:`${props.stackSetName}:*`})}}exports.SingletonPolicy=SingletonPolicy,SingletonPolicy.UUID="8389e75f-0810-4838-bf64-d6f85a95cf83";function parseCapabilities(capabilities){if(capabilities!==void 0){if(capabilities.length===1){const capability=capabilities.toString();return capability===""?void 0:capability}else if(capabilities.length>1)return capabilities.join(",")}}exports.parseCapabilities=parseCapabilities;