"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.limitIdentifierLength=exports.stackVariableNamespace=exports.actionName=exports.hash=void 0;var crypto=()=>{var tmp=require("crypto");return crypto=()=>tmp,tmp};function hash(obj){const d=crypto().createHash("sha256");return d.update(JSON.stringify(obj)),d.digest("hex")}exports.hash=hash;function actionName(node,parent){const names=node.ancestorPath(parent).map(n=>n.id).map(sanitizeName),totalMax=100;if(names.join(".").length<=totalMax)return names.join(".");const componentMin=15,dots=names.length-1,maxLength=Math.max(componentMin,Math.floor((totalMax-dots)/names.length)),trimmedNames=names.map(name=>limitIdentifierLength(name,maxLength));return limitIdentifierLength(trimmedNames.join("."),totalMax)}exports.actionName=actionName;function stackVariableNamespace(stack){return limitIdentifierLength(stack.stackArtifactId,100)}exports.stackVariableNamespace=stackVariableNamespace;function sanitizeName(x){return x.replace(/[^A-Za-z0-9.@\-_]/g,"_")}function limitIdentifierLength(s,n){if(s.length<=n)return s;const h=hash(s).slice(0,8),mid=Math.floor((n-h.length)/2);return s.slice(0,mid)+h+s.slice(-mid)}exports.limitIdentifierLength=limitIdentifierLength;
