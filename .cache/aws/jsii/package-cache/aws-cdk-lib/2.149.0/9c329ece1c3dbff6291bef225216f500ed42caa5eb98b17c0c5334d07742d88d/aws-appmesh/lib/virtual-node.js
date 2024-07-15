"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.VirtualNode=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var appmesh_generated_1=()=>{var tmp=require("./appmesh.generated");return appmesh_generated_1=()=>tmp,tmp},mesh_1=()=>{var tmp=require("./mesh");return mesh_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./private/utils");return utils_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp};class VirtualNodeBase extends cdk().Resource{grantStreamAggregatedResources(identity){return iam().Grant.addToPrincipal({grantee:identity,actions:["appmesh:StreamAggregatedResources"],resourceArns:[this.virtualNodeArn]})}}class VirtualNode extends VirtualNodeBase{static fromVirtualNodeArn(scope,id,virtualNodeArn){return new class extends VirtualNodeBase{constructor(){super(...arguments),this.virtualNodeArn=virtualNodeArn,this.parsedArn=cdk().Fn.split("/",cdk().Stack.of(scope).splitArn(virtualNodeArn,cdk().ArnFormat.SLASH_RESOURCE_NAME).resourceName),this.mesh=mesh_1().Mesh.fromMeshName(this,"Mesh",cdk().Fn.select(0,this.parsedArn)),this.virtualNodeName=cdk().Fn.select(2,this.parsedArn)}}(scope,id)}static fromVirtualNodeAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_VirtualNodeAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromVirtualNodeAttributes),error}return new class extends VirtualNodeBase{constructor(){super(...arguments),this.mesh=attrs.mesh,this.virtualNodeName=attrs.virtualNodeName,this.virtualNodeArn=cdk().Stack.of(this).formatArn({service:"appmesh",resource:`mesh/${attrs.mesh.meshName}/virtualNode`,resourceName:this.virtualNodeName})}}(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.virtualNodeName||cdk().Lazy.string({produce:()=>cdk().Names.uniqueId(this)})}),this.backends=new Array,this.listeners=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_VirtualNodeProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,VirtualNode),error}this.mesh=props.mesh,this.serviceDiscoveryConfig=props.serviceDiscovery?.bind(this),props.backends?.forEach(backend=>this.addBackend(backend)),props.listeners?.forEach(listener=>this.addListener(listener));const accessLogging=props.accessLog?.bind(this),node=new(appmesh_generated_1()).CfnVirtualNode(this,"Resource",{virtualNodeName:this.physicalName,meshName:this.mesh.meshName,meshOwner:(0,utils_1().renderMeshOwner)(this.env.account,this.mesh.env.account),spec:{backends:cdk().Lazy.any({produce:()=>this.backends},{omitEmptyArray:!0}),listeners:cdk().Lazy.any({produce:()=>this.listeners.map(listener=>listener.listener)},{omitEmptyArray:!0}),backendDefaults:props.backendDefaults!==void 0?{clientPolicy:{tls:(0,utils_1().renderTlsClientPolicy)(this,props.backendDefaults?.tlsClientPolicy)}}:void 0,serviceDiscovery:renderServiceDiscovery(this.serviceDiscoveryConfig),logging:accessLogging!==void 0?{accessLog:accessLogging.virtualNodeAccessLog}:void 0}});this.virtualNodeName=this.getResourceNameAttribute(node.attrVirtualNodeName),this.virtualNodeArn=this.getResourceArnAttribute(node.ref,{service:"appmesh",resource:`mesh/${props.mesh.meshName}/virtualNode`,resourceName:this.physicalName})}addListener(listener){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_VirtualNodeListener(listener)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addListener),error}if(!this.serviceDiscoveryConfig)throw new Error("Service discovery information is required for a VirtualNode with a listener.");this.listeners.push(listener.bind(this))}addBackend(backend){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_Backend(backend)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addBackend),error}this.backends.push(backend.bind(this).virtualServiceBackend)}}exports.VirtualNode=VirtualNode,_a=JSII_RTTI_SYMBOL_1,VirtualNode[_a]={fqn:"aws-cdk-lib.aws_appmesh.VirtualNode",version:"2.149.0"};function renderServiceDiscovery(config){return config?{dns:config?.dns,awsCloudMap:config?.cloudmap}:void 0}
