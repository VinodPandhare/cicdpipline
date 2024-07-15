"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Schedule=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class Schedule{static expression(expression){return new LiteralSchedule(expression)}static cron(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_CronOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.cron),error}if(options.weekDay!==void 0&&options.day!==void 0)throw new Error("Cannot supply both 'day' and 'weekDay', use at most one");const minute=fallback(options.minute,"*"),hour=fallback(options.hour,"*"),month=fallback(options.month,"*"),day=fallback(options.day,"*"),weekDay=fallback(options.weekDay,"*");return new class extends Schedule{constructor(){super(...arguments),this.expressionString=`${minute} ${hour} ${day} ${month} ${weekDay}`}_bind(scope){return options.minute||core_1().Annotations.of(scope).addWarningV2("@aws-cdk/aws-autoscaling:scheduleDefaultRunsEveryMinute","cron: If you don't pass 'minute', by default the event runs every minute. Pass 'minute: '*'' if that's what you intend, or 'minute: 0' to run once per hour instead."),new LiteralSchedule(this.expressionString)}}}constructor(){}}exports.Schedule=Schedule,_a=JSII_RTTI_SYMBOL_1,Schedule[_a]={fqn:"aws-cdk-lib.aws_autoscaling.Schedule",version:"2.149.0"};class LiteralSchedule extends Schedule{constructor(expressionString){super(),this.expressionString=expressionString}_bind(){}}function fallback(x,def){return x===void 0?def:x}