"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultAddPrincipalToAssumeRole=void 0;var policy_statement_1=()=>{var tmp=require("../policy-statement");return policy_statement_1=()=>tmp,tmp};function defaultAddPrincipalToAssumeRole(principal,doc){isAssumeRolePrincipal(principal)?principal.addToAssumeRolePolicy(doc):doc.addStatements(new(policy_statement_1()).PolicyStatement({actions:[principal.assumeRoleAction],principals:[principal]}))}exports.defaultAddPrincipalToAssumeRole=defaultAddPrincipalToAssumeRole;function isAssumeRolePrincipal(principal){return!!principal.addToAssumeRolePolicy}
