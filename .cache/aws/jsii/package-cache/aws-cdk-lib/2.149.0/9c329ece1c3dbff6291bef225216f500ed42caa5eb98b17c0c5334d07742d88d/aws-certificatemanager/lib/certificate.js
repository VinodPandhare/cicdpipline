"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ValidationMethod=exports.Certificate=exports.CertificateValidation=exports.KeyAlgorithm=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var certificate_base_1=()=>{var tmp=require("./certificate-base");return certificate_base_1=()=>tmp,tmp},certificatemanager_generated_1=()=>{var tmp=require("./certificatemanager.generated");return certificatemanager_generated_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};const NAME_TAG="Name";class KeyAlgorithm{constructor(name){this.name=name}}exports.KeyAlgorithm=KeyAlgorithm,_a=JSII_RTTI_SYMBOL_1,KeyAlgorithm[_a]={fqn:"aws-cdk-lib.aws_certificatemanager.KeyAlgorithm",version:"2.149.0"},KeyAlgorithm.RSA_2048=new KeyAlgorithm("RSA_2048"),KeyAlgorithm.EC_PRIME256V1=new KeyAlgorithm("EC_prime256v1"),KeyAlgorithm.EC_SECP384R1=new KeyAlgorithm("EC_secp384r1");class CertificateValidation{static fromDns(hostedZone){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_IHostedZone(hostedZone)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromDns),error}return new CertificateValidation({method:ValidationMethod.DNS,hostedZone})}static fromDnsMultiZone(hostedZones){return new CertificateValidation({method:ValidationMethod.DNS,hostedZones})}static fromEmail(validationDomains){return new CertificateValidation({method:ValidationMethod.EMAIL,validationDomains})}constructor(props){this.props=props,this.method=props.method??ValidationMethod.EMAIL}}exports.CertificateValidation=CertificateValidation,_b=JSII_RTTI_SYMBOL_1,CertificateValidation[_b]={fqn:"aws-cdk-lib.aws_certificatemanager.CertificateValidation",version:"2.149.0"};class Certificate extends certificate_base_1().CertificateBase{static fromCertificateArn(scope,id,certificateArn){class Import extends certificate_base_1().CertificateBase{constructor(){super(...arguments),this.certificateArn=certificateArn}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_certificatemanager_CertificateProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Certificate),error}let validation;if(props.validation?validation=props.validation:props.validationMethod===ValidationMethod.DNS?validation=CertificateValidation.fromDns():validation=CertificateValidation.fromEmail(props.validationDomains),!core_1().Token.isUnresolved(props.domainName)&&props.domainName.length>64)throw new Error("Domain name must be 64 characters or less");const allDomainNames=[props.domainName].concat(props.subjectAlternativeNames||[]);let certificateTransparencyLoggingPreference;props.transparencyLoggingEnabled!==void 0&&(certificateTransparencyLoggingPreference=props.transparencyLoggingEnabled?"ENABLED":"DISABLED");const cert=new(certificatemanager_generated_1()).CfnCertificate(this,"Resource",{domainName:props.domainName,subjectAlternativeNames:props.subjectAlternativeNames,domainValidationOptions:renderDomainValidation(validation,allDomainNames),validationMethod:validation.method,certificateTransparencyLoggingPreference,keyAlgorithm:props.keyAlgorithm?.name});core_1().Tags.of(cert).add(NAME_TAG,props.certificateName||this.node.path.slice(0,255)),this.certificateArn=cert.ref}}exports.Certificate=Certificate,_c=JSII_RTTI_SYMBOL_1,Certificate[_c]={fqn:"aws-cdk-lib.aws_certificatemanager.Certificate",version:"2.149.0"};var ValidationMethod;(function(ValidationMethod2){ValidationMethod2.EMAIL="EMAIL",ValidationMethod2.DNS="DNS"})(ValidationMethod||(exports.ValidationMethod=ValidationMethod={}));function renderDomainValidation(validation,domainNames){const domainValidation=[];switch(validation.method){case ValidationMethod.DNS:for(const domainName of getUniqueDnsDomainNames(domainNames)){const hostedZone=validation.props.hostedZones?.[domainName]??validation.props.hostedZone;hostedZone&&domainValidation.push({domainName,hostedZoneId:hostedZone.hostedZoneId})}break;case ValidationMethod.EMAIL:for(const domainName of domainNames){const validationDomain=validation.props.validationDomains?.[domainName];if(!validationDomain&&core_1().Token.isUnresolved(domainName))throw new Error("When using Tokens for domain names, 'validationDomains' needs to be supplied");domainValidation.push({domainName,validationDomain:validationDomain??(0,util_1().apexDomain)(domainName)})}break;default:throw new Error(`Unknown validation method ${validation.method}`)}return domainValidation.length!==0?domainValidation:void 0}function getUniqueDnsDomainNames(domainNames){return domainNames.filter(domain=>core_1().Token.isUnresolved(domain)||!domain.startsWith("*.")||!domainNames.includes(domain.replace("*.","")))}