"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createRole=void 0;var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp};function createRole(scope,_role){let role=_role;return role||(role=new(iam()).Role(scope,"Role",{assumedBy:new(iam()).ServicePrincipal("autoscaling.amazonaws.com")})),role}exports.createRole=createRole;