"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloudAssemblyBuilder=exports.CloudAssembly=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},os=()=>{var tmp=require("os");return os=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},cloudformation_artifact_1=()=>{var tmp=require("./artifacts/cloudformation-artifact");return cloudformation_artifact_1=()=>tmp,tmp},nested_cloud_assembly_artifact_1=()=>{var tmp=require("./artifacts/nested-cloud-assembly-artifact");return nested_cloud_assembly_artifact_1=()=>tmp,tmp},tree_cloud_artifact_1=()=>{var tmp=require("./artifacts/tree-cloud-artifact");return tree_cloud_artifact_1=()=>tmp,tmp},cloud_artifact_1=()=>{var tmp=require("./cloud-artifact");return cloud_artifact_1=()=>tmp,tmp},toposort_1=()=>{var tmp=require("./toposort");return toposort_1=()=>tmp,tmp},cxschema=()=>{var tmp=require("../../cloud-assembly-schema");return cxschema=()=>tmp,tmp};const MANIFEST_FILE="manifest.json";class CloudAssembly{constructor(directory,loadOptions){try{jsiiDeprecationWarnings().aws_cdk_lib_cloud_assembly_schema_LoadManifestOptions(loadOptions)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CloudAssembly),error}this.directory=directory,this.manifest=cxschema().Manifest.loadAssemblyManifest(path().join(directory,MANIFEST_FILE),loadOptions),this.version=this.manifest.version,this.artifacts=this.renderArtifacts(loadOptions?.topoSort??!0),this.runtime=this.manifest.runtime||{libraries:{}},this.validateDeps()}tryGetArtifact(id){return this.artifacts.find(a=>a.id===id)}getStackByName(stackName){const artifacts=this.artifacts.filter(a=>a instanceof cloudformation_artifact_1().CloudFormationStackArtifact&&a.stackName===stackName);if(!artifacts||artifacts.length===0)throw new Error(`Unable to find stack with stack name "${stackName}"`);if(artifacts.length>1)throw new Error(`There are multiple stacks with the stack name "${stackName}" (${artifacts.map(a=>a.id).join(",")}). Use "getStackArtifact(id)" instead`);return artifacts[0]}getStack(stackName){return this.getStackByName(stackName)}getStackArtifact(artifactId){const artifact=this.tryGetArtifactRecursively(artifactId);if(!artifact)throw new Error(`Unable to find artifact with id "${artifactId}"`);if(!(artifact instanceof cloudformation_artifact_1().CloudFormationStackArtifact))throw new Error(`Artifact ${artifactId} is not a CloudFormation stack`);return artifact}tryGetArtifactRecursively(artifactId){return this.stacksRecursively.find(a=>a.id===artifactId)}get stacksRecursively(){function search(stackArtifacts,assemblies){if(assemblies.length===0)return stackArtifacts;const[head,...tail]=assemblies,nestedAssemblies=head.nestedAssemblies.map(asm=>asm.nestedAssembly);return search(stackArtifacts.concat(head.stacks),tail.concat(nestedAssemblies))}return search([],[this])}getNestedAssemblyArtifact(artifactId){const artifact=this.tryGetArtifact(artifactId);if(!artifact)throw new Error(`Unable to find artifact with id "${artifactId}"`);if(!(artifact instanceof nested_cloud_assembly_artifact_1().NestedCloudAssemblyArtifact))throw new Error(`Found artifact '${artifactId}' but it's not a nested cloud assembly`);return artifact}getNestedAssembly(artifactId){return this.getNestedAssemblyArtifact(artifactId).nestedAssembly}tree(){const trees=this.artifacts.filter(a=>a.manifest.type===cxschema().ArtifactType.CDK_TREE);if(trees.length===0)return;if(trees.length>1)throw new Error(`Multiple artifacts of type ${cxschema().ArtifactType.CDK_TREE} found in manifest`);const tree=trees[0];if(!(tree instanceof tree_cloud_artifact_1().TreeCloudArtifact))throw new Error('"Tree" artifact is not of expected type');return tree}get stacks(){return this.artifacts.filter(isCloudFormationStackArtifact);function isCloudFormationStackArtifact(x){return x instanceof cloudformation_artifact_1().CloudFormationStackArtifact}}get nestedAssemblies(){return this.artifacts.filter(isNestedCloudAssemblyArtifact);function isNestedCloudAssemblyArtifact(x){return x instanceof nested_cloud_assembly_artifact_1().NestedCloudAssemblyArtifact}}validateDeps(){for(const artifact of this.artifacts)artifact.dependencies}renderArtifacts(topoSort){const result=new Array;for(const[name,artifact]of Object.entries(this.manifest.artifacts||{})){const cloudartifact=cloud_artifact_1().CloudArtifact.fromManifest(this,name,artifact);cloudartifact&&result.push(cloudartifact)}return topoSort?(0,toposort_1().topologicalSort)(result,x=>x.id,x=>x._dependencyIDs):result}}exports.CloudAssembly=CloudAssembly,_a=JSII_RTTI_SYMBOL_1,CloudAssembly[_a]={fqn:"aws-cdk-lib.cx_api.CloudAssembly",version:"2.149.0"};class CloudAssemblyBuilder{constructor(outdir,props={}){this.artifacts={},this.missing=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_cx_api_CloudAssemblyBuilderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CloudAssemblyBuilder),error}this.outdir=determineOutputDirectory(outdir),this.assetOutdir=props.assetOutdir??this.outdir,this.parentBuilder=props.parentBuilder,ensureDirSync(this.outdir)}addArtifact(id,manifest){try{jsiiDeprecationWarnings().aws_cdk_lib_cloud_assembly_schema_ArtifactManifest(manifest)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addArtifact),error}this.artifacts[id]=filterUndefined(manifest)}addMissing(missing){try{jsiiDeprecationWarnings().aws_cdk_lib_cloud_assembly_schema_MissingContext(missing)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addMissing),error}this.missing.every(m=>m.key!==missing.key)&&this.missing.push(missing),this.parentBuilder?.addMissing(missing)}buildAssembly(options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_cx_api_AssemblyBuildOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.buildAssembly),error}let manifest={version:cxschema().Manifest.version(),artifacts:this.artifacts,runtime:options.runtimeInfo,missing:this.missing.length>0?this.missing:void 0};manifest=filterUndefined(manifest);const manifestFilePath=path().join(this.outdir,MANIFEST_FILE);return cxschema().Manifest.saveAssemblyManifest(manifest,manifestFilePath),fs().writeFileSync(path().join(this.outdir,"cdk.out"),JSON.stringify({version:manifest.version})),new CloudAssembly(this.outdir)}createNestedAssembly(artifactId,displayName){const directoryName=artifactId,innerAsmDir=path().join(this.outdir,directoryName);return this.addArtifact(artifactId,{type:cxschema().ArtifactType.NESTED_CLOUD_ASSEMBLY,properties:{directoryName,displayName}}),new CloudAssemblyBuilder(innerAsmDir,{assetOutdir:this.assetOutdir,parentBuilder:this})}delete(){fs().rmSync(this.outdir,{recursive:!0,force:!0})}}exports.CloudAssemblyBuilder=CloudAssemblyBuilder,_b=JSII_RTTI_SYMBOL_1,CloudAssemblyBuilder[_b]={fqn:"aws-cdk-lib.cx_api.CloudAssemblyBuilder",version:"2.149.0"};function filterUndefined(obj){if(Array.isArray(obj))return obj.filter(x=>x!==void 0).map(x=>filterUndefined(x));if(typeof obj=="object"){const ret={};for(const[key,value]of Object.entries(obj))value!==void 0&&(ret[key]=filterUndefined(value));return ret}return obj}function ignore(_x){}function determineOutputDirectory(outdir){return outdir??fs().mkdtempSync(path().join(fs().realpathSync(os().tmpdir()),"cdk.out"))}function ensureDirSync(dir){if(fs().existsSync(dir)){if(!fs().statSync(dir).isDirectory())throw new Error(`${dir} must be a directory`)}else fs().mkdirSync(dir,{recursive:!0})}
