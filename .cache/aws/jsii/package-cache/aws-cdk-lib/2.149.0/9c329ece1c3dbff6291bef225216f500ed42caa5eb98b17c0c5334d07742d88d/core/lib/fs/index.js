"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)},_a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FileSystem=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},os=()=>{var tmp=require("os");return os=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},copy_1=()=>{var tmp=require("./copy");return copy_1=()=>tmp,tmp},fingerprint_1=()=>{var tmp=require("./fingerprint");return fingerprint_1=()=>tmp,tmp},_noFold;exports.IgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="IgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./ignore").IgnoreStrategy}),exports.GlobIgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="GlobIgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./ignore").GlobIgnoreStrategy}),exports.GitIgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="GitIgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./ignore").GitIgnoreStrategy}),exports.DockerIgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="DockerIgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./ignore").DockerIgnoreStrategy}),exports.SymlinkFollowMode=void 0,Object.defineProperty(exports,_noFold="SymlinkFollowMode",{enumerable:!0,configurable:!0,get:()=>require("./options").SymlinkFollowMode}),exports.IgnoreMode=void 0,Object.defineProperty(exports,_noFold="IgnoreMode",{enumerable:!0,configurable:!0,get:()=>require("./options").IgnoreMode});class FileSystem{static copyDirectory(srcDir,destDir,options={},rootDir){try{jsiiDeprecationWarnings().aws_cdk_lib_CopyOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.copyDirectory),error}return(0,copy_1().copyDirectory)(srcDir,destDir,options,rootDir)}static fingerprint(fileOrDirectory,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_FingerprintOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fingerprint),error}return(0,fingerprint_1().fingerprint)(fileOrDirectory,options)}static isEmpty(dir){return fs().readdirSync(dir).length===0}static get tmpdir(){return FileSystem._tmpdir||(FileSystem._tmpdir=fs().realpathSync(os().tmpdir())),FileSystem._tmpdir}static mkdtemp(prefix){return fs().mkdtempSync(path().join(FileSystem.tmpdir,prefix))}}exports.FileSystem=FileSystem,_a=JSII_RTTI_SYMBOL_1,FileSystem[_a]={fqn:"aws-cdk-lib.FileSystem",version:"2.149.0"};