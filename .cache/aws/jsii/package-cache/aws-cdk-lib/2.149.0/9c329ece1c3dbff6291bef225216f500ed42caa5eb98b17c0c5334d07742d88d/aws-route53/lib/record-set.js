"use strict";var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CrossAccountZoneDelegationRecord=exports.ZoneDelegationRecord=exports.DsRecord=exports.NsRecord=exports.MxRecord=exports.CaaAmazonRecord=exports.CaaRecord=exports.CaaTag=exports.SrvRecord=exports.TxtRecord=exports.CnameRecord=exports.AaaaRecord=exports.ARecord=exports.AddressRecordTarget=exports.RecordSet=exports.RecordTarget=exports.RecordType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},route53_generated_1=()=>{var tmp=require("./route53.generated");return route53_generated_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},cross_account_zone_delegation_provider_generated_1=()=>{var tmp=require("../../custom-resource-handlers/dist/aws-route53/cross-account-zone-delegation-provider.generated");return cross_account_zone_delegation_provider_generated_1=()=>tmp,tmp},delete_existing_record_set_provider_generated_1=()=>{var tmp=require("../../custom-resource-handlers/dist/aws-route53/delete-existing-record-set-provider.generated");return delete_existing_record_set_provider_generated_1=()=>tmp,tmp};const CROSS_ACCOUNT_ZONE_DELEGATION_RESOURCE_TYPE="Custom::CrossAccountZoneDelegation",DELETE_EXISTING_RECORD_SET_RESOURCE_TYPE="Custom::DeleteExistingRecordSet";var RecordType;(function(RecordType2){RecordType2.A="A",RecordType2.AAAA="AAAA",RecordType2.CAA="CAA",RecordType2.CNAME="CNAME",RecordType2.DS="DS",RecordType2.MX="MX",RecordType2.NAPTR="NAPTR",RecordType2.NS="NS",RecordType2.PTR="PTR",RecordType2.SOA="SOA",RecordType2.SPF="SPF",RecordType2.SRV="SRV",RecordType2.TXT="TXT"})(RecordType||(exports.RecordType=RecordType={}));class RecordTarget{static fromValues(...values){return new RecordTarget(values)}static fromAlias(aliasTarget){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_IAliasRecordTarget(aliasTarget)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAlias),error}return new RecordTarget(void 0,aliasTarget)}static fromIpAddresses(...ipAddresses){return RecordTarget.fromValues(...ipAddresses)}constructor(values,aliasTarget){this.values=values,this.aliasTarget=aliasTarget;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_IAliasRecordTarget(aliasTarget)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,RecordTarget),error}}}exports.RecordTarget=RecordTarget,_a=JSII_RTTI_SYMBOL_1,RecordTarget[_a]={fqn:"aws-cdk-lib.aws_route53.RecordTarget",version:"2.149.0"};class RecordSet extends core_1().Resource{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_RecordSetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,RecordSet),error}if(props.weight&&(props.weight<0||props.weight>255))throw new Error(`weight must be between 0 and 255 inclusive, got: ${props.weight}`);if(props.setIdentifier&&(props.setIdentifier.length<1||props.setIdentifier.length>128))throw new Error(`setIdentifier must be between 1 and 128 characters long, got: ${props.setIdentifier.length}`);if(props.setIdentifier&&props.weight===void 0&&!props.geoLocation&&!props.region&&!props.multiValueAnswer)throw new Error("setIdentifier can only be specified for non-simple routing policies");if(props.multiValueAnswer&&props.target.aliasTarget)throw new Error("multiValueAnswer cannot be specified for alias record");if([props.geoLocation,props.region,props.weight,props.multiValueAnswer].filter(variable=>variable!==void 0).length>1)throw new Error("Only one of region, weight, multiValueAnswer or geoLocation can be defined");this.geoLocation=props.geoLocation,this.weight=props.weight,this.region=props.region,this.multiValueAnswer=props.multiValueAnswer;const ttl=props.target.aliasTarget?void 0:((props.ttl&&props.ttl.toSeconds())??1800).toString(),recordName=(0,util_1().determineFullyQualifiedDomainName)(props.recordName||props.zone.zoneName,props.zone),recordSet=new(route53_generated_1()).CfnRecordSet(this,"Resource",{hostedZoneId:props.zone.hostedZoneId,name:recordName,type:props.recordType,resourceRecords:props.target.values,aliasTarget:props.target.aliasTarget&&props.target.aliasTarget.bind(this,props.zone),ttl,comment:props.comment,geoLocation:props.geoLocation?{continentCode:props.geoLocation.continentCode,countryCode:props.geoLocation.countryCode,subdivisionCode:props.geoLocation.subdivisionCode}:void 0,multiValueAnswer:props.multiValueAnswer,setIdentifier:props.setIdentifier??this.configureSetIdentifier(),weight:props.weight,region:props.region});if(this.domainName=recordSet.ref,props.deleteExisting){const provider=delete_existing_record_set_provider_generated_1().DeleteExistingRecordSetProvider.getOrCreateProvider(this,DELETE_EXISTING_RECORD_SET_RESOURCE_TYPE,{policyStatements:[{Effect:"Allow",Action:"route53:GetChange",Resource:"*"}]});provider.addToRolePolicy({Effect:"Allow",Action:"route53:ListResourceRecordSets",Resource:props.zone.hostedZoneArn}),provider.addToRolePolicy({Effect:"Allow",Action:"route53:ChangeResourceRecordSets",Resource:props.zone.hostedZoneArn,Condition:{"ForAllValues:StringEquals":{"route53:ChangeResourceRecordSetsRecordTypes":[props.recordType],"route53:ChangeResourceRecordSetsActions":["DELETE"]}}});const customResource=new(core_1()).CustomResource(this,"DeleteExistingRecordSetCustomResource",{resourceType:DELETE_EXISTING_RECORD_SET_RESOURCE_TYPE,serviceToken:provider.serviceToken,properties:{HostedZoneId:props.zone.hostedZoneId,RecordName:recordName,RecordType:props.recordType}});recordSet.node.addDependency(customResource)}}configureSetIdentifier(){if(this.geoLocation){let identifier="GEO";return this.geoLocation.continentCode&&(identifier=identifier.concat("_CONTINENT_",this.geoLocation.continentCode)),this.geoLocation.countryCode&&(identifier=identifier.concat("_COUNTRY_",this.geoLocation.countryCode)),this.geoLocation.subdivisionCode&&(identifier=identifier.concat("_SUBDIVISION_",this.geoLocation.subdivisionCode)),identifier}if(this.weight!==void 0){const idPrefix=`WEIGHT_${this.weight}_ID_`;return this.createIdentifier(idPrefix)}if(this.region){const idPrefix=`REGION_${this.region}_ID_`;return this.createIdentifier(idPrefix)}if(this.multiValueAnswer)return this.createIdentifier("MVA_ID_")}createIdentifier(prefix){return`${prefix}${core_1().Names.uniqueResourceName(this,{maxLength:64-prefix.length})}`}}exports.RecordSet=RecordSet,_b=JSII_RTTI_SYMBOL_1,RecordSet[_b]={fqn:"aws-cdk-lib.aws_route53.RecordSet",version:"2.149.0"};class AddressRecordTarget extends RecordTarget{}exports.AddressRecordTarget=AddressRecordTarget,_c=JSII_RTTI_SYMBOL_1,AddressRecordTarget[_c]={fqn:"aws-cdk-lib.aws_route53.AddressRecordTarget",version:"2.149.0"};class ARecord extends RecordSet{static fromARecordAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_ARecordAttrs(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromARecordAttributes),error}const aliasTarget=RecordTarget.fromAlias(new ARecordAsAliasTarget(attrs));return new ARecord(scope,id,{...attrs,target:aliasTarget})}constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.A,target:props.target});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_ARecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ARecord),error}}}exports.ARecord=ARecord,_d=JSII_RTTI_SYMBOL_1,ARecord[_d]={fqn:"aws-cdk-lib.aws_route53.ARecord",version:"2.149.0"};class ARecordAsAliasTarget{constructor(aRrecordAttrs){this.aRrecordAttrs=aRrecordAttrs}bind(_record,_zone){if(!_zone)throw new Error("Cannot bind to record without a zone");return{dnsName:this.aRrecordAttrs.targetDNS,hostedZoneId:this.aRrecordAttrs.zone.hostedZoneId}}}class AaaaRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.AAAA,target:props.target});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_AaaaRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AaaaRecord),error}}}exports.AaaaRecord=AaaaRecord,_e=JSII_RTTI_SYMBOL_1,AaaaRecord[_e]={fqn:"aws-cdk-lib.aws_route53.AaaaRecord",version:"2.149.0"};class CnameRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.CNAME,target:RecordTarget.fromValues(props.domainName)});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_CnameRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CnameRecord),error}}}exports.CnameRecord=CnameRecord,_f=JSII_RTTI_SYMBOL_1,CnameRecord[_f]={fqn:"aws-cdk-lib.aws_route53.CnameRecord",version:"2.149.0"};class TxtRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.TXT,target:RecordTarget.fromValues(...props.values.map(v=>formatTxt(v)))});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_TxtRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,TxtRecord),error}}}exports.TxtRecord=TxtRecord,_g=JSII_RTTI_SYMBOL_1,TxtRecord[_g]={fqn:"aws-cdk-lib.aws_route53.TxtRecord",version:"2.149.0"};function formatTxt(string){const result=[];let idx=0;for(;idx<string.length;)result.push(string.slice(idx,idx+=255));return result.map(r=>JSON.stringify(r)).join("")}class SrvRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.SRV,target:RecordTarget.fromValues(...props.values.map(v=>`${v.priority} ${v.weight} ${v.port} ${v.hostName}`))});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_SrvRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SrvRecord),error}}}exports.SrvRecord=SrvRecord,_h=JSII_RTTI_SYMBOL_1,SrvRecord[_h]={fqn:"aws-cdk-lib.aws_route53.SrvRecord",version:"2.149.0"};var CaaTag;(function(CaaTag2){CaaTag2.ISSUE="issue",CaaTag2.ISSUEWILD="issuewild",CaaTag2.IODEF="iodef"})(CaaTag||(exports.CaaTag=CaaTag={}));class CaaRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.CAA,target:RecordTarget.fromValues(...props.values.map(v=>`${v.flag} ${v.tag} "${v.value}"`))});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_CaaRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CaaRecord),error}}}exports.CaaRecord=CaaRecord,_j=JSII_RTTI_SYMBOL_1,CaaRecord[_j]={fqn:"aws-cdk-lib.aws_route53.CaaRecord",version:"2.149.0"};class CaaAmazonRecord extends CaaRecord{constructor(scope,id,props){super(scope,id,{...props,values:[{flag:0,tag:CaaTag.ISSUE,value:"amazon.com"}]});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_CaaAmazonRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CaaAmazonRecord),error}}}exports.CaaAmazonRecord=CaaAmazonRecord,_k=JSII_RTTI_SYMBOL_1,CaaAmazonRecord[_k]={fqn:"aws-cdk-lib.aws_route53.CaaAmazonRecord",version:"2.149.0"};class MxRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.MX,target:RecordTarget.fromValues(...props.values.map(v=>`${v.priority} ${v.hostName}`))});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_MxRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,MxRecord),error}}}exports.MxRecord=MxRecord,_l=JSII_RTTI_SYMBOL_1,MxRecord[_l]={fqn:"aws-cdk-lib.aws_route53.MxRecord",version:"2.149.0"};class NsRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.NS,target:RecordTarget.fromValues(...props.values)});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_NsRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,NsRecord),error}}}exports.NsRecord=NsRecord,_m=JSII_RTTI_SYMBOL_1,NsRecord[_m]={fqn:"aws-cdk-lib.aws_route53.NsRecord",version:"2.149.0"};class DsRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.DS,target:RecordTarget.fromValues(...props.values)});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_DsRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,DsRecord),error}}}exports.DsRecord=DsRecord,_o=JSII_RTTI_SYMBOL_1,DsRecord[_o]={fqn:"aws-cdk-lib.aws_route53.DsRecord",version:"2.149.0"};class ZoneDelegationRecord extends RecordSet{constructor(scope,id,props){super(scope,id,{...props,recordType:RecordType.NS,target:RecordTarget.fromValues(...core_1().Token.isUnresolved(props.nameServers)?props.nameServers:props.nameServers.map(ns=>core_1().Token.isUnresolved(ns)||ns.endsWith(".")?ns:`${ns}.`)),ttl:props.ttl||core_1().Duration.days(2)});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_ZoneDelegationRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ZoneDelegationRecord),error}}}exports.ZoneDelegationRecord=ZoneDelegationRecord,_p=JSII_RTTI_SYMBOL_1,ZoneDelegationRecord[_p]={fqn:"aws-cdk-lib.aws_route53.ZoneDelegationRecord",version:"2.149.0"};class CrossAccountZoneDelegationRecord extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_CrossAccountZoneDelegationRecordProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CrossAccountZoneDelegationRecord),error}if(!props.parentHostedZoneName&&!props.parentHostedZoneId)throw Error("At least one of parentHostedZoneName or parentHostedZoneId is required");if(props.parentHostedZoneName&&props.parentHostedZoneId)throw Error("Only one of parentHostedZoneName and parentHostedZoneId is supported");const provider=cross_account_zone_delegation_provider_generated_1().CrossAccountZoneDelegationProvider.getOrCreateProvider(this,CROSS_ACCOUNT_ZONE_DELEGATION_RESOURCE_TYPE),addToPrinciplePolicyResult=iam().Role.fromRoleArn(this,"cross-account-zone-delegation-handler-role",provider.roleArn).addToPrincipalPolicy(new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,actions:["sts:AssumeRole"],resources:[props.delegationRole.roleArn]})),customResource=new(core_1()).CustomResource(this,"CrossAccountZoneDelegationCustomResource",{resourceType:CROSS_ACCOUNT_ZONE_DELEGATION_RESOURCE_TYPE,serviceToken:provider.serviceToken,removalPolicy:props.removalPolicy,properties:{AssumeRoleArn:props.delegationRole.roleArn,ParentZoneName:props.parentHostedZoneName,ParentZoneId:props.parentHostedZoneId,DelegatedZoneName:props.delegatedZone.zoneName,DelegatedZoneNameServers:props.delegatedZone.hostedZoneNameServers,TTL:(props.ttl||core_1().Duration.days(2)).toSeconds(),AssumeRoleRegion:props.assumeRoleRegion}});addToPrinciplePolicyResult.policyDependable&&customResource.node.addDependency(addToPrinciplePolicyResult.policyDependable)}}exports.CrossAccountZoneDelegationRecord=CrossAccountZoneDelegationRecord,_q=JSII_RTTI_SYMBOL_1,CrossAccountZoneDelegationRecord[_q]={fqn:"aws-cdk-lib.aws_route53.CrossAccountZoneDelegationRecord",version:"2.149.0"};
