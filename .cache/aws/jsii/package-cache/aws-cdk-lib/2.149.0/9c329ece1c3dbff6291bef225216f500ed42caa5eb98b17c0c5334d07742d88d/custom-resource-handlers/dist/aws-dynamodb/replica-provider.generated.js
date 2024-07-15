"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReplicaIsCompleteFunction=exports.ReplicaOnEventFunction=void 0;const path=require("path"),lambda=require("../../../aws-lambda");class ReplicaOnEventFunction extends lambda.Function{constructor(scope,id,props){super(scope,id,{...props,code:lambda.Code.fromAsset(path.join(__dirname,"replica-handler")),handler:"index.onEventHandler",runtime:lambda.determineLatestNodeRuntime(scope)})}}exports.ReplicaOnEventFunction=ReplicaOnEventFunction;class ReplicaIsCompleteFunction extends lambda.Function{constructor(scope,id,props){super(scope,id,{...props,code:lambda.Code.fromAsset(path.join(__dirname,"replica-handler")),handler:"index.isCompleteHandler",runtime:lambda.determineLatestNodeRuntime(scope)})}}exports.ReplicaIsCompleteFunction=ReplicaIsCompleteFunction;