"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeCodeBuildOptions=exports.CodeBuildFactory=void 0;var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},buildspecs_1=()=>{var tmp=require("./buildspecs");return buildspecs_1=()=>tmp,tmp},codebuild=()=>{var tmp=require("../../../../aws-codebuild");return codebuild=()=>tmp,tmp},codepipeline_actions=()=>{var tmp=require("../../../../aws-codepipeline-actions");return codepipeline_actions=()=>tmp,tmp},ec2=()=>{var tmp=require("../../../../aws-ec2");return ec2=()=>tmp,tmp},iam=()=>{var tmp=require("../../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../../core");return core_1=()=>tmp,tmp},step_output_1=()=>{var tmp=require("../../helpers-internal/step-output");return step_output_1=()=>tmp,tmp},construct_internals_1=()=>{var tmp=require("../../private/construct-internals");return construct_internals_1=()=>tmp,tmp},identifiers_1=()=>{var tmp=require("../../private/identifiers");return identifiers_1=()=>tmp,tmp},javascript_1=()=>{var tmp=require("../../private/javascript");return javascript_1=()=>tmp,tmp};class CodeBuildFactory{static fromShellStep(constructId,shellStep,additional){return new CodeBuildFactory(constructId,{commands:shellStep.commands,env:shellStep.env,envFromCfnOutputs:shellStep.envFromCfnOutputs,inputs:shellStep.inputs,outputs:shellStep.outputs,stepId:shellStep.id,installCommands:shellStep.installCommands,producedStepOutputs:step_output_1().StepOutput.producedStepOutputs(shellStep),...additional})}static fromCodeBuildStep(constructId,step,additional){const factory=CodeBuildFactory.fromShellStep(constructId,step,{projectName:step.projectName,role:step.role,actionRole:step.actionRole,...additional,projectOptions:mergeCodeBuildOptions(additional?.projectOptions,{buildEnvironment:step.buildEnvironment,rolePolicy:step.rolePolicyStatements,securityGroups:step.securityGroups,partialBuildSpec:step.partialBuildSpec,vpc:step.vpc,subnetSelection:step.subnetSelection,cache:step.cache,timeout:step.timeout,fileSystemLocations:step.fileSystemLocations,logging:step.logging})});return{produceAction:(stage,options)=>{const result=factory.produceAction(stage,options);return result.project&&step._setProject(result.project),result}}}constructor(constructId,props){this.constructId=constructId,this.props=props,this.stepId=props.stepId??constructId}get project(){if(!this._project)throw new Error("Project becomes available after produce() has been called");return this._project}produceAction(stage,options){const projectOptions=mergeCodeBuildOptions(options.codeBuildDefaults,this.props.projectOptions);if((!projectOptions.buildEnvironment?.privileged||projectOptions.vpc===void 0)&&projectOptions.fileSystemLocations!==void 0&&projectOptions.fileSystemLocations.length!=0)throw new Error("Setting fileSystemLocations requires a vpc to be set and privileged to be set to true.");const inputs=this.props.inputs??[],outputs=this.props.outputs??[],mainInput=inputs.find(x=>x.directory==="."),extraInputs=inputs.filter(x=>x.directory!=="."),inputArtifact=mainInput?options.artifacts.toCodePipeline(mainInput.fileSet):options.fallbackArtifact,extraInputArtifacts=extraInputs.map(x=>options.artifacts.toCodePipeline(x.fileSet)),outputArtifacts=outputs.map(x=>options.artifacts.toCodePipeline(x.fileSet));if(!inputArtifact)throw new Error(`CodeBuild action '${this.stepId}' requires an input (and the pipeline doesn't have a Source to fall back to). Add an input or a pipeline source.`);const installCommands=[...generateInputArtifactLinkCommands(options.artifacts,extraInputs),...this.props.installCommands??[]],buildSpecHere=codebuild().BuildSpec.fromObject({version:"0.2",phases:{install:(installCommands.length??0)>0?{commands:installCommands}:void 0,build:this.props.commands.length>0?{commands:this.props.commands}:void 0},artifacts:(0,javascript_1().noEmptyObject)(renderArtifactsBuildSpec(options.artifacts,this.props.outputs??[]))}),env=(0,javascript_1().noUndefined)(this.props.env??{}),[actionEnvs,projectEnvs]=(0,javascript_1().partition)(Object.entries(env??{}),([,v])=>containsPipelineVariable(v)),environment=mergeBuildEnvironments(projectOptions?.buildEnvironment??{},{environmentVariables:(0,javascript_1().noEmptyObject)((0,javascript_1().mapValues)((0,javascript_1().mkdict)(projectEnvs),value=>({value})))}),fullBuildSpec=projectOptions?.partialBuildSpec?codebuild().mergeBuildSpecs(projectOptions.partialBuildSpec,buildSpecHere):buildSpecHere,osFromEnvironment=environment.buildImage&&environment.buildImage instanceof codebuild().WindowsBuildImage?ec2().OperatingSystemType.WINDOWS:ec2().OperatingSystemType.LINUX,actualBuildSpec=filterBuildSpecCommands(fullBuildSpec,osFromEnvironment),scope=this.props.scope??options.scope;let projectBuildSpec;if(this.props.passBuildSpecViaCloudAssembly){const relativeSpecFile=`buildspec-${constructs_1().Node.of(scope).addr}-${this.constructId}.yaml`,absSpecFile=path().join((0,construct_internals_1().cloudAssemblyBuildSpecDir)(scope),relativeSpecFile),fileContents=core_1().Stack.of(scope).resolve(actualBuildSpec.toBuildSpec());if(typeof fileContents!="string")throw new Error(`This BuildSpec contains CloudFormation references and is supported by publishInParallel=false: ${JSON.stringify(fileContents,void 0,2)}`);fs().writeFileSync(absSpecFile,fileContents,{encoding:"utf-8"}),projectBuildSpec=codebuild().BuildSpec.fromSourceFilename(relativeSpecFile)}else projectBuildSpec=actualBuildSpec;const projectConfigHash=(0,identifiers_1().hash)(core_1().Stack.of(scope).resolve({environment:serializeBuildEnvironment(environment),buildSpecString:actualBuildSpec.toBuildSpec()})),actionName=options.actionName??this.stepId;let projectScope=scope;(this.props.additionalConstructLevel??!0)&&(projectScope=(0,construct_internals_1().obtainScope)(scope,actionName));const safePipelineName=core_1().Token.isUnresolved(options.pipeline.pipeline.pipelineName)?`${core_1().Stack.of(options.pipeline).stackName}/${constructs_1().Node.of(options.pipeline.pipeline).id}`:options.pipeline.pipeline.pipelineName,project=new(codebuild()).PipelineProject(projectScope,this.constructId,{projectName:this.props.projectName,description:`Pipeline step ${safePipelineName}/${stage.stageName}/${actionName}`.substring(0,255),environment,vpc:projectOptions.vpc,subnetSelection:projectOptions.subnetSelection,securityGroups:projectOptions.securityGroups,cache:projectOptions.cache,buildSpec:projectBuildSpec,role:this.props.role,timeout:projectOptions.timeout,fileSystemLocations:projectOptions.fileSystemLocations,logging:projectOptions.logging});this.props.additionalDependable&&project.node.addDependency(this.props.additionalDependable),projectOptions.rolePolicy!==void 0&&projectOptions.rolePolicy.forEach(policyStatement=>{project.addToRolePolicy(policyStatement)});const stackOutputEnv=(0,javascript_1().mapValues)(this.props.envFromCfnOutputs??{},outputRef=>options.stackOutputsMap.toCodePipeline(outputRef)),configHashEnv=options.beforeSelfMutation?{_PROJECT_CONFIG_HASH:projectConfigHash}:{},actionRoleCid="CodeBuildActionRole",actionRole=this.props.actionRole??options.pipeline.node.tryFindChild(actionRoleCid)??new(iam()).Role(options.pipeline,actionRoleCid,{assumedBy:options.pipeline.pipeline.role});return stage.addAction(new(codepipeline_actions()).CodeBuildAction({actionName,input:inputArtifact,extraInputs:extraInputArtifacts,outputs:outputArtifacts,project,runOrder:options.runOrder,variablesNamespace:options.variablesNamespace,role:actionRole,environmentVariables:(0,javascript_1().noEmptyObject)(cbEnv({...(0,javascript_1().mkdict)(actionEnvs),...configHashEnv,...stackOutputEnv}))})),this._project=project,{runOrdersConsumed:1,project}}}exports.CodeBuildFactory=CodeBuildFactory;function generateInputArtifactLinkCommands(artifacts,inputs){return inputs.map(input=>{const fragments=[];fragments.push(`[ ! -d "${input.directory}" ] || { echo 'additionalInputs: "${input.directory}" must not exist yet. If you want to merge multiple artifacts, use a "cp" command.'; exit 1; }`);const parentDirectory=path().dirname(input.directory);[".",".."].includes(parentDirectory)||fragments.push(`mkdir -p -- "${parentDirectory}"`);const artifact=artifacts.toCodePipeline(input.fileSet);return fragments.push(`ln -s -- "$CODEBUILD_SRC_DIR_${artifact.artifactName}" "${input.directory}"`),fragments.join(" && ")})}function renderArtifactsBuildSpec(artifactMap,outputs){if(outputs.length===0)return{};if(outputs.length===1)return{"base-directory":outputs[0].directory,files:"**/*"};const secondary={};for(const output of outputs){const art=artifactMap.toCodePipeline(output.fileSet);if(!art.artifactName)throw new Error("You must give the output artifact a name");secondary[art.artifactName]={"base-directory":output.directory,files:"**/*"}}return{"secondary-artifacts":secondary}}function mergeCodeBuildOptions(...opts){const xs=[{},...opts.filter(isDefined)];for(;xs.length>1;){const[a,b]=xs.splice(xs.length-2,2);xs.push(merge2(a,b))}return xs[0];function merge2(a,b){return{buildEnvironment:mergeBuildEnvironments(a.buildEnvironment,b.buildEnvironment),rolePolicy:definedArray([...a.rolePolicy??[],...b.rolePolicy??[]]),securityGroups:definedArray([...a.securityGroups??[],...b.securityGroups??[]]),partialBuildSpec:(0,buildspecs_1().mergeBuildSpecs)(a.partialBuildSpec,b.partialBuildSpec),vpc:b.vpc??a.vpc,subnetSelection:b.subnetSelection??a.subnetSelection,timeout:b.timeout??a.timeout,cache:b.cache??a.cache,fileSystemLocations:definedArray([...a.fileSystemLocations??[],...b.fileSystemLocations??[]]),logging:b.logging??a.logging}}}exports.mergeCodeBuildOptions=mergeCodeBuildOptions;function mergeBuildEnvironments(a,b){return!a||!b?a??b:{buildImage:b.buildImage??a.buildImage,computeType:b.computeType??a.computeType,environmentVariables:{...a.environmentVariables,...b.environmentVariables},privileged:b.privileged??a.privileged}}function isDefined(x){return x!==void 0}function serializeBuildEnvironment(env){return{privileged:env.privileged,environmentVariables:env.environmentVariables,type:env.buildImage?.type,imageId:env.buildImage?.imageId,computeType:env.computeType,imagePullPrincipalType:env.buildImage?.imagePullPrincipalType,secretsManagerArn:env.buildImage?.secretsManagerCredentials?.secretArn}}function containsPipelineVariable(s){return!!s.match(/#\{[^}]+\}/)||step_output_1().StepOutput.findAll(s).length>0}function cbEnv(xs){return(0,javascript_1().mkdict)(Object.entries(xs).filter(([,v])=>v!==void 0).map(([k,v])=>[k,{value:v}]))}function definedArray(xs){return xs.length>0?xs:void 0}function filterBuildSpecCommands(buildSpec,osType){if(!buildSpec.isImmediate)return buildSpec;const spec=buildSpec.spec,winTag="!WINDOWS!",linuxTag="!LINUX!",expectedTag=osType===ec2().OperatingSystemType.WINDOWS?winTag:linuxTag;return codebuild().BuildSpec.fromObject(recurse(spec));function recurse(x){if(Array.isArray(x)){const ret=[];for(const el of x){const[tag,payload]=extractTag(el);(tag===void 0||tag===expectedTag)&&ret.push(payload)}return ret}return x&&typeof x=="object"?(0,javascript_1().mapValues)(x,recurse):x}function extractTag(x){if(typeof x!="string")return[void 0,x];for(const tag of[winTag,linuxTag])if(x.startsWith(tag))return[tag,x.slice(tag.length)];return[void 0,x]}}
