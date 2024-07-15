"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.InitConfig=exports.CloudFormationInit=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var crypto=()=>{var tmp=require("crypto");return crypto=()=>tmp,tmp},machine_image_1=()=>{var tmp=require("./machine-image");return machine_image_1=()=>tmp,tmp},cfn_init_internal_1=()=>{var tmp=require("./private/cfn-init-internal");return cfn_init_internal_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class CloudFormationInit{static fromElements(...elements){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_InitElement(elements)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromElements),error}return CloudFormationInit.fromConfig(new InitConfig(elements))}static fromConfig(config){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_InitConfig(config)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromConfig),error}return CloudFormationInit.fromConfigSets({configSets:{default:["config"]},configs:{config}})}static fromConfigSets(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_ConfigSetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromConfigSets),error}return new CloudFormationInit(props.configSets,props.configs)}constructor(configSets,configs){this._configSets={},this._configs={},Object.assign(this._configSets,configSets),Object.assign(this._configs,configs)}addConfig(configName,config){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_InitConfig(config)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addConfig),error}if(this._configs[configName])throw new Error(`CloudFormationInit already contains a config named '${configName}'`);this._configs[configName]=config}addConfigSet(configSetName,configNames=[]){if(this._configSets[configSetName])throw new Error(`CloudFormationInit already contains a configSet named '${configSetName}'`);const unk=configNames.filter(c=>!this._configs[c]);if(unk.length>0)throw new Error(`Unknown configs referenced in definition of '${configSetName}': ${unk}`);this._configSets[configSetName]=[...configNames]}attach(attachedResource,attachOptions){try{jsiiDeprecationWarnings().aws_cdk_lib_CfnResource(attachedResource),jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_AttachInitOptions(attachOptions)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.attach),error}if(attachOptions.platform===machine_image_1().OperatingSystemType.UNKNOWN)throw new Error("Cannot attach CloudFormationInit to an unknown OS type");const CFN_INIT_METADATA_KEY="AWS::CloudFormation::Init";if(attachedResource.getMetadata(CFN_INIT_METADATA_KEY)!==void 0)throw new Error(`Cannot bind CfnInit: resource '${attachedResource.node.path}' already has '${CFN_INIT_METADATA_KEY}' attached`);const bindResult=this.bind(attachedResource.stack,attachOptions);attachedResource.addMetadata(CFN_INIT_METADATA_KEY,bindResult.configData);const fingerprintInput={config:attachedResource.stack.resolve(bindResult.configData),assetHash:bindResult.assetHash},fingerprint=contentHash(JSON.stringify(fingerprintInput)).slice(0,16);attachOptions.instanceRole.addToPrincipalPolicy(new(iam()).PolicyStatement({actions:["cloudformation:DescribeStackResource","cloudformation:SignalResource"],resources:[core_1().Aws.STACK_ID]})),bindResult.authData&&attachedResource.addMetadata("AWS::CloudFormation::Authentication",bindResult.authData);let resourceLocator=`--region ${core_1().Aws.REGION} --stack ${core_1().Aws.STACK_NAME} --resource ${attachedResource.logicalId}`;const signalResource=attachOptions.signalResource?.logicalId??attachedResource.logicalId;let notifyResourceLocator=`--region ${core_1().Aws.REGION} --stack ${core_1().Aws.STACK_NAME} --resource ${signalResource}`;attachOptions.includeUrl&&(resourceLocator=`${resourceLocator} --url https://cloudformation.${core_1().Aws.REGION}.${core_1().Aws.URL_SUFFIX}`,notifyResourceLocator=`${notifyResourceLocator} --url https://cloudformation.${core_1().Aws.REGION}.${core_1().Aws.URL_SUFFIX}`),attachOptions.includeRole&&(resourceLocator=`${resourceLocator} --role ${attachOptions.instanceRole.roleName}`,notifyResourceLocator=`${notifyResourceLocator} --role ${attachOptions.instanceRole.roleName}`);const configSets=(attachOptions.configSets??["default"]).join(","),printLog=attachOptions.printLog??!0;if((attachOptions.embedFingerprint??!0)&&attachOptions.userData.addCommands(`# fingerprint: ${fingerprint}`),attachOptions.platform===machine_image_1().OperatingSystemType.WINDOWS){const errCode=attachOptions.ignoreFailures?"0":"$LASTEXITCODE";attachOptions.userData.addCommands(`cfn-init.exe -v ${resourceLocator} -c ${configSets}`,`cfn-signal.exe -e ${errCode} ${notifyResourceLocator}`,...printLog?["type C:\\cfn\\log\\cfn-init.log"]:[])}else{const errCode=attachOptions.ignoreFailures?"0":"$?";attachOptions.userData.addCommands("(","  set +e",`  /opt/aws/bin/cfn-init -v ${resourceLocator} -c ${configSets}`,`  /opt/aws/bin/cfn-signal -e ${errCode} ${notifyResourceLocator}`,...printLog?["  cat /var/log/cfn-init.log >&2"]:[],")")}}bind(scope,options){const nonEmptyConfigs=mapValues(this._configs,c=>c.isEmpty()?void 0:c),configNameToBindResult=mapValues(nonEmptyConfigs,c=>c._bind(scope,options));return{configData:{configSets:mapValues(this._configSets,configNames=>configNames.filter(name=>nonEmptyConfigs[name]!==void 0)),...mapValues(configNameToBindResult,c=>c.config)},authData:Object.values(configNameToBindResult).map(c=>c.authentication).reduce(deepMerge,void 0),assetHash:combineAssetHashesOrUndefined(Object.values(configNameToBindResult).map(c=>c.assetHash))}}}exports.CloudFormationInit=CloudFormationInit,_a=JSII_RTTI_SYMBOL_1,CloudFormationInit[_a]={fqn:"aws-cdk-lib.aws_ec2.CloudFormationInit",version:"2.149.0"};class InitConfig{constructor(elements){this.elements=new Array,this.add(...elements)}isEmpty(){return this.elements.length===0}add(...elements){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_InitElement(elements)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.add),error}this.elements.push(...elements)}_bind(scope,options){const bindOptions={instanceRole:options.instanceRole,platform:this.initPlatformFromOSType(options.platform),scope},packageConfig=this.bindForType(cfn_init_internal_1().InitElementType.PACKAGE,bindOptions),groupsConfig=this.bindForType(cfn_init_internal_1().InitElementType.GROUP,bindOptions),usersConfig=this.bindForType(cfn_init_internal_1().InitElementType.USER,bindOptions),sourcesConfig=this.bindForType(cfn_init_internal_1().InitElementType.SOURCE,bindOptions),filesConfig=this.bindForType(cfn_init_internal_1().InitElementType.FILE,bindOptions),commandsConfig=this.bindForType(cfn_init_internal_1().InitElementType.COMMAND,bindOptions),servicesConfig=this.bindForType(cfn_init_internal_1().InitElementType.SERVICE,bindOptions),allConfig=[packageConfig,groupsConfig,usersConfig,sourcesConfig,filesConfig,commandsConfig,servicesConfig],authentication=allConfig.map(c=>c?.authentication).reduce(deepMerge,void 0),assetHash=combineAssetHashesOrUndefined(allConfig.map(c=>c?.assetHash));return{config:{packages:packageConfig?.config,groups:groupsConfig?.config,users:usersConfig?.config,sources:sourcesConfig?.config,files:filesConfig?.config,commands:commandsConfig?.config,services:servicesConfig?.config},authentication,assetHash}}bindForType(elementType,renderOptions){const elements=this.elements.filter(elem=>elem.elementType===elementType);if(elements.length===0)return;const bindResults=elements.map((e,index)=>e._bind({index,...renderOptions}));return{config:bindResults.map(r=>r.config).reduce(deepMerge,void 0)??{},authentication:bindResults.map(r=>r.authentication).reduce(deepMerge,void 0),assetHash:combineAssetHashesOrUndefined(bindResults.map(r=>r.assetHash))}}initPlatformFromOSType(osType){switch(osType){case machine_image_1().OperatingSystemType.LINUX:return cfn_init_internal_1().InitPlatform.LINUX;case machine_image_1().OperatingSystemType.WINDOWS:return cfn_init_internal_1().InitPlatform.WINDOWS;default:throw new Error("Cannot attach CloudFormationInit to an unknown OS type")}}}exports.InitConfig=InitConfig,_b=JSII_RTTI_SYMBOL_1,InitConfig[_b]={fqn:"aws-cdk-lib.aws_ec2.InitConfig",version:"2.149.0"};function deepMerge(target,src){if(target==null)return src;if(src==null)return target;for(const[key,value]of Object.entries(src))if(!(key==="__proto__"||key==="constructor")){if(Array.isArray(value)){if(target[key]&&!Array.isArray(target[key]))throw new Error(`Trying to merge array [${value}] into a non-array '${target[key]}'`);target[key]=Array.from(new Set([...target[key]??[],...value]));continue}if(typeof value=="object"&&value){target[key]=deepMerge(target[key]??{},value);continue}value!==void 0&&(target[key]=value)}return target}function mapValues(xs,fn){const ret={};for(const[k,v]of Object.entries(xs)){const mapped=fn(v);mapped!==void 0&&(ret[k]=mapped)}return ret}function combineAssetHashesOrUndefined(hashes){const hashArray=hashes.filter(x=>x!==void 0);return hashArray.length>0?hashArray.join(""):void 0}function contentHash(content){return crypto().createHash("sha256").update(content).digest("hex")}