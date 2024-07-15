"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EcsTask=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},ec2=()=>{var tmp=require("../../aws-ec2");return ec2=()=>tmp,tmp},ecs=()=>{var tmp=require("../../aws-ecs");return ecs=()=>tmp,tmp},events=()=>{var tmp=require("../../aws-events");return events=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp};class EcsTask{constructor(props){this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_targets_EcsTaskProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EcsTask),error}if(props.securityGroup!==void 0&&props.securityGroups!==void 0)throw new Error("Only one of SecurityGroup or SecurityGroups can be populated.");this.cluster=props.cluster,this.taskDefinition=props.taskDefinition,this.taskCount=props.taskCount??1,this.platformVersion=props.platformVersion,this.assignPublicIp=props.assignPublicIp,this.enableExecuteCommand=props.enableExecuteCommand,this.launchType=props.launchType;const propagateTagsValidValues=[ecs().PropagatedTagSource.TASK_DEFINITION,ecs().PropagatedTagSource.NONE];if(props.propagateTags&&!propagateTagsValidValues.includes(props.propagateTags))throw new Error("When propagateTags is passed, it must be set to TASK_DEFINITION or NONE.");this.propagateTags=props.propagateTags,this.role=props.role??(0,util_1().singletonEventRole)(this.taskDefinition);for(const stmt of this.createEventRolePolicyStatements())this.role.addToPrincipalPolicy(stmt);if(this.tags=props.tags,this.taskDefinition.networkMode!==ecs().NetworkMode.AWS_VPC){(props.securityGroup!==void 0||props.securityGroups!==void 0)&&cdk().Annotations.of(this.taskDefinition).addWarningV2("@aws-cdk/aws-events-targets:ecsTaskSecurityGroupIgnored","security groups are ignored when network mode is not awsvpc");return}if(props.securityGroups){this.securityGroups=props.securityGroups;return}if(!constructs_1().Construct.isConstruct(this.taskDefinition))throw new Error("Cannot create a security group for ECS task. The task definition in ECS task is not a Construct. Please pass a taskDefinition as a Construct in EcsTaskProps.");let securityGroup=props.securityGroup||this.taskDefinition.node.tryFindChild("SecurityGroup");securityGroup=securityGroup||new(ec2()).SecurityGroup(this.taskDefinition,"SecurityGroup",{vpc:this.props.cluster.vpc}),this.securityGroup=securityGroup,this.securityGroups=[securityGroup]}bind(_rule,_id){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_IRule(_rule)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const arn=this.cluster.clusterArn,role=this.role,input={containerOverrides:this.props.containerOverrides&&this.props.containerOverrides.map(({containerName,...overrides})=>({name:containerName,...overrides}))},taskCount=this.taskCount,taskDefinitionArn=this.taskDefinition.taskDefinitionArn,propagateTags=this.propagateTags,tagList=this.tags,enableExecuteCommand=this.enableExecuteCommand,subnetSelection=this.props.subnetSelection||{subnetType:ec2().SubnetType.PRIVATE_WITH_EGRESS};if(this.assignPublicIp&&subnetSelection.subnetType!==ec2().SubnetType.PUBLIC)throw new Error("assignPublicIp should be set to true only for PUBLIC subnets");const assignPublicIp=this.assignPublicIp??subnetSelection.subnetType===ec2().SubnetType.PUBLIC?"ENABLED":"DISABLED",launchType=this.launchType??(this.taskDefinition.isEc2Compatible?"EC2":"FARGATE");if(assignPublicIp==="ENABLED"&&launchType!=="FARGATE")throw new Error("assignPublicIp is only supported for FARGATE tasks");const baseEcsParameters={taskCount,taskDefinitionArn,propagateTags,tagList,enableExecuteCommand},ecsParameters=this.taskDefinition.networkMode===ecs().NetworkMode.AWS_VPC?{...baseEcsParameters,launchType,platformVersion:this.platformVersion,networkConfiguration:{awsVpcConfiguration:{subnets:this.props.cluster.vpc.selectSubnets(subnetSelection).subnetIds,assignPublicIp,securityGroups:this.securityGroups&&this.securityGroups.map(sg=>sg.securityGroupId)}}}:baseEcsParameters;return this.props.deadLetterQueue&&(0,util_1().addToDeadLetterQueueResourcePolicy)(_rule,this.props.deadLetterQueue),{...(0,util_1().bindBaseTargetConfig)(this.props),arn,role,ecsParameters,input:events().RuleTargetInput.fromObject(input),targetResource:this.taskDefinition}}createEventRolePolicyStatements(){const policyStatements=[new(iam()).PolicyStatement({actions:["ecs:RunTask"],resources:[this.taskDefinition.taskDefinitionArn],conditions:{ArnEquals:{"ecs:cluster":this.cluster.clusterArn}}}),new(iam()).PolicyStatement({actions:["ecs:TagResource"],resources:[`arn:${this.cluster.stack.partition}:ecs:${this.cluster.env.region}:*:task/${this.cluster.clusterName}/*`]})];return this.taskDefinition.executionRole!==void 0&&policyStatements.push(new(iam()).PolicyStatement({actions:["iam:PassRole"],resources:[this.taskDefinition.executionRole.roleArn]})),this.taskDefinition.isFargateCompatible&&policyStatements.push(new(iam()).PolicyStatement({actions:["iam:PassRole"],resources:[this.taskDefinition.taskRole.roleArn]})),policyStatements}}exports.EcsTask=EcsTask,_a=JSII_RTTI_SYMBOL_1,EcsTask[_a]={fqn:"aws-cdk-lib.aws_events_targets.EcsTask",version:"2.149.0"};