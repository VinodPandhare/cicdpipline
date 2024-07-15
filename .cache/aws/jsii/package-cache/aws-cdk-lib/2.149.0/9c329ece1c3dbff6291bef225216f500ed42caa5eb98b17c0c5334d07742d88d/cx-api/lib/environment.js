"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EnvironmentUtils=exports.UNKNOWN_REGION=exports.UNKNOWN_ACCOUNT=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti"),AWS_ENV_REGEX=/aws\:\/\/([a-z0-9A-Z\-\@\.\_]+)\/([a-z\-0-9]+)/;exports.UNKNOWN_ACCOUNT="unknown-account",exports.UNKNOWN_REGION="unknown-region";class EnvironmentUtils{static parse(environment){const env=AWS_ENV_REGEX.exec(environment);if(!env)throw new Error(`Unable to parse environment specification "${environment}". Expected format: aws://account/region`);const[,account,region]=env;if(!account||!region)throw new Error(`Invalid environment specification: ${environment}`);return{account,region,name:environment}}static make(account,region){return{account,region,name:this.format(account,region)}}static format(account,region){return`aws://${account}/${region}`}}exports.EnvironmentUtils=EnvironmentUtils,_a=JSII_RTTI_SYMBOL_1,EnvironmentUtils[_a]={fqn:"aws-cdk-lib.cx_api.EnvironmentUtils",version:"2.149.0"};