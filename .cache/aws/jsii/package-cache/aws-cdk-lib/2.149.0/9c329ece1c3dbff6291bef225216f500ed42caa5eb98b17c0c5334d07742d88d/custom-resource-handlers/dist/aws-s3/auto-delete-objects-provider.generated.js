"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AutoDeleteObjectsProvider=void 0;const path=require("path"),core_1=require("../../../core");class AutoDeleteObjectsProvider extends core_1.CustomResourceProviderBase{static getOrCreate(scope,uniqueid,props){return this.getOrCreateProvider(scope,uniqueid,props).serviceToken}static getOrCreateProvider(scope,uniqueid,props){const id=`${uniqueid}CustomResourceProvider`,stack=core_1.Stack.of(scope);return stack.node.tryFindChild(id)??new AutoDeleteObjectsProvider(stack,id,props)}constructor(scope,id,props){super(scope,id,{...props,codeDirectory:path.join(__dirname,"auto-delete-objects-handler"),runtimeName:(0,core_1.determineLatestNodeRuntimeName)(scope)})}}exports.AutoDeleteObjectsProvider=AutoDeleteObjectsProvider;
