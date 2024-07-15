"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrefixList=exports.AddressFamily=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var ec2_generated_1=()=>{var tmp=require("./ec2.generated");return ec2_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},AddressFamily;(function(AddressFamily2){AddressFamily2.IP_V4="IPv4",AddressFamily2.IP_V6="IPv6"})(AddressFamily||(exports.AddressFamily=AddressFamily={}));class PrefixListBase extends core_1().Resource{}class PrefixList extends PrefixListBase{static fromPrefixListId(scope,id,prefixListId){class Import extends core_1().Resource{constructor(){super(...arguments),this.prefixListId=prefixListId}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props?.prefixListName??core_1().Lazy.string({produce:()=>core_1().Names.uniqueResourceName(this,{maxLength:255,allowedSpecialCharacters:".-_"})})});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_PrefixListProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,PrefixList),error}if(props?.prefixListName){if(props.prefixListName.startsWith("com.amazonaws"))throw new Error("The name cannot start with 'com.amazonaws.'");if(props.prefixListName.length>255)throw new Error("Lengths exceeding 255 characters cannot be set.")}this.prefixListName=this.physicalName;let defaultMaxEntries=1;if(props?.entries&&props.entries.length>0){const entries=props.entries;if(props?.addressFamily===AddressFamily.IP_V6){const ipv6Regex=/^s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))(%.+)?s*(\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8]))?$/i;for(const entry of entries)if(!ipv6Regex.test(entry.cidr))throw new Error(`Invalid IPv6 address range: ${entry.cidr}`)}else{const ipv4Regex=/^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/i;for(const entry of entries)if(!ipv4Regex.test(entry.cidr))throw new Error(`Invalid IPv4 address range: ${entry.cidr}`)}defaultMaxEntries=props.entries.length}const prefixList=new(ec2_generated_1()).CfnPrefixList(this,"Resource",{addressFamily:props?.addressFamily||AddressFamily.IP_V4,maxEntries:props?.maxEntries||defaultMaxEntries,prefixListName:this.prefixListName,entries:props?.entries||[]});this.prefixListId=prefixList.attrPrefixListId,this.prefixListArn=prefixList.attrArn,this.ownerId=prefixList.attrOwnerId,this.version=prefixList.attrVersion,this.addressFamily=prefixList.addressFamily}}exports.PrefixList=PrefixList,_a=JSII_RTTI_SYMBOL_1,PrefixList[_a]={fqn:"aws-cdk-lib.aws_ec2.PrefixList",version:"2.149.0"};
