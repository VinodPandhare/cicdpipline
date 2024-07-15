"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReceiptRuleSet=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var receipt_rule_1=()=>{var tmp=require("./receipt-rule");return receipt_rule_1=()=>tmp,tmp},ses_generated_1=()=>{var tmp=require("./ses.generated");return ses_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class ReceiptRuleSetBase extends core_1().Resource{addRule(id,options){return this.lastAddedRule=new(receipt_rule_1()).ReceiptRule(this,id,{after:this.lastAddedRule??void 0,ruleSet:this,...options}),this.lastAddedRule}addDropSpamRule(){const dropSpam=new(receipt_rule_1()).DropSpamReceiptRule(this,"DropSpam",{ruleSet:this});this.lastAddedRule=dropSpam.rule}}class ReceiptRuleSet extends ReceiptRuleSetBase{static fromReceiptRuleSetName(scope,id,receiptRuleSetName){class Import extends ReceiptRuleSetBase{constructor(){super(...arguments),this.receiptRuleSetName=receiptRuleSetName}}return new Import(scope,id)}constructor(scope,id,props={}){super(scope,id,{physicalName:props.receiptRuleSetName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_ReceiptRuleSetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ReceiptRuleSet),error}const resource=new(ses_generated_1()).CfnReceiptRuleSet(this,"Resource",{ruleSetName:this.physicalName});this.receiptRuleSetName=resource.ref,props&&(props.dropSpam&&this.addDropSpamRule(),(props.rules||[]).forEach((ruleOption,idx)=>this.addRule(`Rule${idx}`,ruleOption)))}}exports.ReceiptRuleSet=ReceiptRuleSet,_a=JSII_RTTI_SYMBOL_1,ReceiptRuleSet[_a]={fqn:"aws-cdk-lib.aws_ses.ReceiptRuleSet",version:"2.149.0"};