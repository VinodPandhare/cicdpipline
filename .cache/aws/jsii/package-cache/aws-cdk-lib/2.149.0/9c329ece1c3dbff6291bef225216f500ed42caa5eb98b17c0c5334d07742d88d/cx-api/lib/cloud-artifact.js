"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloudArtifact=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var metadata_1=()=>{var tmp=require("./metadata");return metadata_1=()=>tmp,tmp},cxschema=()=>{var tmp=require("../../cloud-assembly-schema");return cxschema=()=>tmp,tmp};class CloudArtifact{static fromManifest(assembly,id,artifact){try{jsiiDeprecationWarnings().aws_cdk_lib_cx_api_CloudAssembly(assembly),jsiiDeprecationWarnings().aws_cdk_lib_cloud_assembly_schema_ArtifactManifest(artifact)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromManifest),error}throw new Error("Implementation not overridden yet")}constructor(assembly,id,manifest){this.assembly=assembly,this.id=id;try{jsiiDeprecationWarnings().aws_cdk_lib_cx_api_CloudAssembly(assembly),jsiiDeprecationWarnings().aws_cdk_lib_cloud_assembly_schema_ArtifactManifest(manifest)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CloudArtifact),error}this.manifest=manifest,this.messages=this.renderMessages(),this._dependencyIDs=manifest.dependencies||[]}get dependencies(){return this._deps?this._deps:(this._deps=this._dependencyIDs.map(id=>{const dep=this.assembly.tryGetArtifact(id);if(!dep)throw new Error(`Artifact ${this.id} depends on non-existing artifact ${id}`);return dep}),this._deps)}findMetadataByType(type){const result=new Array;for(const path of Object.keys(this.manifest.metadata||{}))for(const entry of(this.manifest.metadata||{})[path])entry.type===type&&result.push({path,...entry});return result}renderMessages(){const messages=new Array;for(const[id,metadata]of Object.entries(this.manifest.metadata||{}))for(const entry of metadata){let level;switch(entry.type){case cxschema().ArtifactMetadataEntryType.WARN:level=metadata_1().SynthesisMessageLevel.WARNING;break;case cxschema().ArtifactMetadataEntryType.ERROR:level=metadata_1().SynthesisMessageLevel.ERROR;break;case cxschema().ArtifactMetadataEntryType.INFO:level=metadata_1().SynthesisMessageLevel.INFO;break;default:continue}messages.push({level,entry,id})}return messages}get hierarchicalId(){return this.manifest.displayName??this.id}}exports.CloudArtifact=CloudArtifact,_a=JSII_RTTI_SYMBOL_1,CloudArtifact[_a]={fqn:"aws-cdk-lib.cx_api.CloudArtifact",version:"2.149.0"};
