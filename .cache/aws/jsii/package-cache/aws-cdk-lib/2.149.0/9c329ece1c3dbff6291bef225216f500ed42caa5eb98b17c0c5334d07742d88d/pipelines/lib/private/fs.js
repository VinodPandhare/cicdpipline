"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toPosixPath=void 0;var path=()=>{var tmp=require("path");return path=()=>tmp,tmp};function toPosixPath(osPath,currentSep){const regex=new RegExp(`\\${currentSep??path().sep}`,"g");return osPath.replace(regex,"/")}exports.toPosixPath=toPosixPath;