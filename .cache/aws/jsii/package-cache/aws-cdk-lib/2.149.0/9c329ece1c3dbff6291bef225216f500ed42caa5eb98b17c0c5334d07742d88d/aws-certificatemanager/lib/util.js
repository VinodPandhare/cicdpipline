"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCertificateRegion=exports.isDnsValidatedCertificate=exports.apexDomain=void 0;var public_suffixes_1=()=>{var tmp=require("./public-suffixes");return public_suffixes_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};function apexDomain(domainName){const parts=domainName.split(".").reverse();let curr=public_suffixes_1().publicSuffixes;const accumulated=[];for(const part of parts){if(accumulated.push(part),!(part in curr))break;curr=curr[part]}return accumulated.reverse().join(".")}exports.apexDomain=apexDomain;function isDnsValidatedCertificate(cert){return cert.hasOwnProperty("domainName")}exports.isDnsValidatedCertificate=isDnsValidatedCertificate;function getCertificateRegion(cert){const{certificateArn,stack}=cert;if(isDnsValidatedCertificate(cert)){const requestResource=cert.node.findChild("CertificateRequestorResource").node.defaultChild,{_cfnProperties:properties}=requestResource,{Region:region}=properties;if(region&&!core_1().Token.isUnresolved(region))return region}{const{region}=core_1().Arn.split(certificateArn,core_1().ArnFormat.SLASH_RESOURCE_NAME);if(region&&!core_1().Token.isUnresolved(region))return region}return core_1().Stack.of(stack).region}exports.getCertificateRegion=getCertificateRegion;
