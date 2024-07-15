"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)};Object.defineProperty(exports,"__esModule",{value:!0});var _noFold;exports.HostedZone=void 0,Object.defineProperty(exports,_noFold="HostedZone",{enumerable:!0,configurable:!0,get:()=>require("./hosted-zone").HostedZone}),exports.PublicHostedZone=void 0,Object.defineProperty(exports,_noFold="PublicHostedZone",{enumerable:!0,configurable:!0,get:()=>require("./hosted-zone").PublicHostedZone}),exports.PrivateHostedZone=void 0,Object.defineProperty(exports,_noFold="PrivateHostedZone",{enumerable:!0,configurable:!0,get:()=>require("./hosted-zone").PrivateHostedZone}),exports.KeySigningKeyStatus=void 0,Object.defineProperty(exports,_noFold="KeySigningKeyStatus",{enumerable:!0,configurable:!0,get:()=>require("./key-signing-key").KeySigningKeyStatus}),exports.KeySigningKey=void 0,Object.defineProperty(exports,_noFold="KeySigningKey",{enumerable:!0,configurable:!0,get:()=>require("./key-signing-key").KeySigningKey}),exports.RecordType=void 0,Object.defineProperty(exports,_noFold="RecordType",{enumerable:!0,configurable:!0,get:()=>require("./record-set").RecordType}),exports.RecordTarget=void 0,Object.defineProperty(exports,_noFold="RecordTarget",{enumerable:!0,configurable:!0,get:()=>require("./record-set").RecordTarget}),exports.RecordSet=void 0,Object.defineProperty(exports,_noFold="RecordSet",{enumerable:!0,configurable:!0,get:()=>require("./record-set").RecordSet}),exports.AddressRecordTarget=void 0,Object.defineProperty(exports,_noFold="AddressRecordTarget",{enumerable:!0,configurable:!0,get:()=>require("./record-set").AddressRecordTarget}),exports.ARecord=void 0,Object.defineProperty(exports,_noFold="ARecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").ARecord}),exports.AaaaRecord=void 0,Object.defineProperty(exports,_noFold="AaaaRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").AaaaRecord}),exports.CnameRecord=void 0,Object.defineProperty(exports,_noFold="CnameRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").CnameRecord}),exports.TxtRecord=void 0,Object.defineProperty(exports,_noFold="TxtRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").TxtRecord}),exports.SrvRecord=void 0,Object.defineProperty(exports,_noFold="SrvRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").SrvRecord}),exports.CaaTag=void 0,Object.defineProperty(exports,_noFold="CaaTag",{enumerable:!0,configurable:!0,get:()=>require("./record-set").CaaTag}),exports.CaaRecord=void 0,Object.defineProperty(exports,_noFold="CaaRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").CaaRecord}),exports.CaaAmazonRecord=void 0,Object.defineProperty(exports,_noFold="CaaAmazonRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").CaaAmazonRecord}),exports.MxRecord=void 0,Object.defineProperty(exports,_noFold="MxRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").MxRecord}),exports.NsRecord=void 0,Object.defineProperty(exports,_noFold="NsRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").NsRecord}),exports.DsRecord=void 0,Object.defineProperty(exports,_noFold="DsRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").DsRecord}),exports.ZoneDelegationRecord=void 0,Object.defineProperty(exports,_noFold="ZoneDelegationRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").ZoneDelegationRecord}),exports.CrossAccountZoneDelegationRecord=void 0,Object.defineProperty(exports,_noFold="CrossAccountZoneDelegationRecord",{enumerable:!0,configurable:!0,get:()=>require("./record-set").CrossAccountZoneDelegationRecord}),exports.VpcEndpointServiceDomainName=void 0,Object.defineProperty(exports,_noFold="VpcEndpointServiceDomainName",{enumerable:!0,configurable:!0,get:()=>require("./vpc-endpoint-service-domain-name").VpcEndpointServiceDomainName}),exports.GeoLocation=void 0,Object.defineProperty(exports,_noFold="GeoLocation",{enumerable:!0,configurable:!0,get:()=>require("./geo-location").GeoLocation}),exports.Continent=void 0,Object.defineProperty(exports,_noFold="Continent",{enumerable:!0,configurable:!0,get:()=>require("./geo-location").Continent}),exports.CfnCidrCollection=void 0,Object.defineProperty(exports,_noFold="CfnCidrCollection",{enumerable:!0,configurable:!0,get:()=>require("./route53.generated").CfnCidrCollection}),exports.CfnDNSSEC=void 0,Object.defineProperty(exports,_noFold="CfnDNSSEC",{enumerable:!0,configurable:!0,get:()=>require("./route53.generated").CfnDNSSEC}),exports.CfnHealthCheck=void 0,Object.defineProperty(exports,_noFold="CfnHealthCheck",{enumerable:!0,configurable:!0,get:()=>require("./route53.generated").CfnHealthCheck}),exports.CfnHostedZone=void 0,Object.defineProperty(exports,_noFold="CfnHostedZone",{enumerable:!0,configurable:!0,get:()=>require("./route53.generated").CfnHostedZone}),exports.CfnKeySigningKey=void 0,Object.defineProperty(exports,_noFold="CfnKeySigningKey",{enumerable:!0,configurable:!0,get:()=>require("./route53.generated").CfnKeySigningKey}),exports.CfnRecordSet=void 0,Object.defineProperty(exports,_noFold="CfnRecordSet",{enumerable:!0,configurable:!0,get:()=>require("./route53.generated").CfnRecordSet}),exports.CfnRecordSetGroup=void 0,Object.defineProperty(exports,_noFold="CfnRecordSetGroup",{enumerable:!0,configurable:!0,get:()=>require("./route53.generated").CfnRecordSetGroup});
