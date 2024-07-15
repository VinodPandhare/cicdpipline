"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dockerExec=exports.AssetBundlingVolumeCopy=exports.AssetBundlingBindMount=void 0;var child_process_1=()=>{var tmp=require("child_process");return child_process_1=()=>tmp,tmp},crypto=()=>{var tmp=require("crypto");return crypto=()=>tmp,tmp},os=()=>{var tmp=require("os");return os=()=>tmp,tmp},asset_staging_1=()=>{var tmp=require("../asset-staging");return asset_staging_1=()=>tmp,tmp};class AssetBundlingBase{constructor(options){this.options=options}determineUser(){let user;if(this.options.user)user=this.options.user;else{const userInfo=os().userInfo();user=userInfo.uid!==-1?`${userInfo.uid}:${userInfo.gid}`:"1000:1000"}return user}}class AssetBundlingBindMount extends AssetBundlingBase{run(){this.options.image.run({command:this.options.command,user:this.determineUser(),environment:this.options.environment,entrypoint:this.options.entrypoint,workingDirectory:this.options.workingDirectory??asset_staging_1().AssetStaging.BUNDLING_INPUT_DIR,securityOpt:this.options.securityOpt??"",volumesFrom:this.options.volumesFrom,volumes:[{hostPath:this.options.sourcePath,containerPath:asset_staging_1().AssetStaging.BUNDLING_INPUT_DIR},{hostPath:this.options.bundleDir,containerPath:asset_staging_1().AssetStaging.BUNDLING_OUTPUT_DIR},...this.options.volumes??[]],network:this.options.network})}}exports.AssetBundlingBindMount=AssetBundlingBindMount;class AssetBundlingVolumeCopy extends AssetBundlingBase{constructor(options){super(options);const copySuffix=crypto().randomBytes(12).toString("hex");this.inputVolumeName=`assetInput${copySuffix}`,this.outputVolumeName=`assetOutput${copySuffix}`,this.copyContainerName=`copyContainer${copySuffix}`}prepareVolumes(){dockerExec(["volume","create",this.inputVolumeName]),dockerExec(["volume","create",this.outputVolumeName])}cleanVolumes(){dockerExec(["volume","rm",this.inputVolumeName]),dockerExec(["volume","rm",this.outputVolumeName])}startHelperContainer(user){dockerExec(["run","--name",this.copyContainerName,"-v",`${this.inputVolumeName}:${asset_staging_1().AssetStaging.BUNDLING_INPUT_DIR}`,"-v",`${this.outputVolumeName}:${asset_staging_1().AssetStaging.BUNDLING_OUTPUT_DIR}`,"public.ecr.aws/docker/library/alpine","sh","-c",`mkdir -p ${asset_staging_1().AssetStaging.BUNDLING_INPUT_DIR} && chown -R ${user} ${asset_staging_1().AssetStaging.BUNDLING_OUTPUT_DIR} && chown -R ${user} ${asset_staging_1().AssetStaging.BUNDLING_INPUT_DIR}`])}cleanHelperContainer(){dockerExec(["rm",this.copyContainerName])}copyInputFrom(sourcePath){dockerExec(["cp",`${sourcePath}/.`,`${this.copyContainerName}:${asset_staging_1().AssetStaging.BUNDLING_INPUT_DIR}`])}copyOutputTo(outputPath){dockerExec(["cp",`${this.copyContainerName}:${asset_staging_1().AssetStaging.BUNDLING_OUTPUT_DIR}/.`,outputPath])}run(){const user=this.determineUser();this.prepareVolumes(),this.startHelperContainer(user),this.copyInputFrom(this.options.sourcePath),this.options.image.run({command:this.options.command,user,environment:this.options.environment,entrypoint:this.options.entrypoint,workingDirectory:this.options.workingDirectory??asset_staging_1().AssetStaging.BUNDLING_INPUT_DIR,securityOpt:this.options.securityOpt??"",volumes:this.options.volumes,volumesFrom:[this.copyContainerName,...this.options.volumesFrom??[]]}),this.copyOutputTo(this.options.bundleDir),this.cleanHelperContainer(),this.cleanVolumes()}}exports.AssetBundlingVolumeCopy=AssetBundlingVolumeCopy;function dockerExec(args,options){const prog=process.env.CDK_DOCKER??"docker",proc=(0,child_process_1().spawnSync)(prog,args,options??{encoding:"utf-8",stdio:["ignore",process.stderr,"inherit"]});if(proc.error)throw proc.error;if(proc.status!==0){let prependLines=function(firstLine,text){if(!text||text.length===0)return[];const padding=" ".repeat(firstLine.length);return text.toString("utf-8").split(`
`).map((line,idx)=>`${idx===0?firstLine:padding}${line}`)};const reason=proc.signal!=null?`signal ${proc.signal}`:`status ${proc.status}`,command=[prog,...args.map(arg=>/[^a-z0-9_-]/i.test(arg)?JSON.stringify(arg):arg)].join(" ");throw new Error([`${prog} exited with ${reason}`,...prependLines("--> STDOUT:  ",proc.stdout)??[],...prependLines("--> STDERR:  ",proc.stderr)??[],`--> Command: ${command}`].join(`
`))}return proc}exports.dockerExec=dockerExec;