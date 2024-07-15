"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Guardrail=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};class Guardrail{static enable(identifier,version){if(!core_1().Token.isUnresolved(version)&&(version<1||version>99999999))throw new Error(`\`version\` must be between 1 and 99999999, got ${version}.`);return new Guardrail(identifier,version.toString())}static enableDraft(identifier){return new Guardrail(identifier,"DRAFT")}constructor(guardrailIdentifier,guardrailVersion){if(this.guardrailIdentifier=guardrailIdentifier,this.guardrailVersion=guardrailVersion,!core_1().Token.isUnresolved(guardrailIdentifier)){let gurdrailId;if(guardrailIdentifier.startsWith("arn:")){const arn=core_1().Arn.split(guardrailIdentifier,core_1().ArnFormat.SLASH_RESOURCE_NAME);if(!arn.resourceName)throw new Error(`Invalid ARN format. The ARN of Guradrail should have the format: \`arn:<partition>:bedrock:<region>:<account-id>:guardrail/<guardrail-name>\`, got ${guardrailIdentifier}.`);gurdrailId=arn.resourceName}else gurdrailId=guardrailIdentifier;if(!/^[a-z0-9]+$/.test(gurdrailId))throw new Error(`The id of Guardrail must contain only lowercase letters and numbers, got ${gurdrailId}.`);if(guardrailIdentifier.length>2048)throw new Error(`\`guardrailIdentifier\` length must be between 0 and 2048, got ${guardrailIdentifier.length}.`)}}}exports.Guardrail=Guardrail,_a=JSII_RTTI_SYMBOL_1,Guardrail[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.Guardrail",version:"2.149.0"};
