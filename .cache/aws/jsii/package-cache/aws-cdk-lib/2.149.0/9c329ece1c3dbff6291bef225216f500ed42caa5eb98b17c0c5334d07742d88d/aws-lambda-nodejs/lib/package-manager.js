"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PackageManager=exports.LockFile=void 0;var os=()=>{var tmp=require("os");return os=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},types_1=()=>{var tmp=require("./types");return types_1=()=>tmp,tmp},LockFile;(function(LockFile2){LockFile2.NPM="package-lock.json",LockFile2.YARN="yarn.lock",LockFile2.PNPM="pnpm-lock.yaml"})(LockFile||(exports.LockFile=LockFile={}));class PackageManager{static fromLockFile(lockFilePath,logLevel){switch(path().basename(lockFilePath)){case LockFile.YARN:return new PackageManager({lockFile:LockFile.YARN,installCommand:logLevel&&logLevel!==types_1().LogLevel.INFO?["yarn","install","--no-immutable","--silent"]:["yarn","install","--no-immutable"],runCommand:["yarn","run"]});case LockFile.PNPM:return new PackageManager({lockFile:LockFile.PNPM,installCommand:logLevel&&logLevel!==types_1().LogLevel.INFO?["pnpm","install","--reporter","silent","--config.node-linker=hoisted","--config.package-import-method=clone-or-copy","--no-prefer-frozen-lockfile"]:["pnpm","install","--config.node-linker=hoisted","--config.package-import-method=clone-or-copy","--no-prefer-frozen-lockfile"],runCommand:["pnpm","exec"],argsSeparator:"--"});default:return new PackageManager({lockFile:LockFile.NPM,installCommand:logLevel?["npm","ci","--loglevel",logLevel]:["npm","ci"],runCommand:["npx","--no-install"]})}}constructor(props){this.lockFile=props.lockFile,this.installCommand=props.installCommand,this.runCommand=props.runCommand,this.argsSeparator=props.argsSeparator}runBinCommand(bin){const[runCommand,...runArgs]=this.runCommand;return[os().platform()==="win32"?`${runCommand}.cmd`:runCommand,...runArgs,...this.argsSeparator?[this.argsSeparator]:[],bin].join(" ")}}exports.PackageManager=PackageManager;