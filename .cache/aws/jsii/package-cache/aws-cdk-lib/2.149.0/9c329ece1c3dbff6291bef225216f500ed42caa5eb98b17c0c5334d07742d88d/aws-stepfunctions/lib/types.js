"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DISCARD=exports.ProcessorType=exports.ProcessorMode=exports.Errors=exports.JitterType=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var JitterType;(function(JitterType2){JitterType2.FULL="FULL",JitterType2.NONE="NONE"})(JitterType||(exports.JitterType=JitterType={}));class Errors{}exports.Errors=Errors,_a=JSII_RTTI_SYMBOL_1,Errors[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.Errors",version:"2.149.0"},Errors.ALL="States.ALL",Errors.HEARTBEAT_TIMEOUT="States.HeartbeatTimeout",Errors.TIMEOUT="States.Timeout",Errors.TASKS_FAILED="States.TaskFailed",Errors.PERMISSIONS="States.Permissions",Errors.RESULT_PATH_MATCH_FAILURE="States.ResultPathMatchFailure",Errors.PARAMETER_PATH_FAILURE="States.ParameterPathFailure",Errors.BRANCH_FAILED="States.BranchFailed",Errors.NO_CHOICE_MATCHED="States.NoChoiceMatched";var ProcessorMode;(function(ProcessorMode2){ProcessorMode2.INLINE="INLINE",ProcessorMode2.DISTRIBUTED="DISTRIBUTED"})(ProcessorMode||(exports.ProcessorMode=ProcessorMode={}));var ProcessorType;(function(ProcessorType2){ProcessorType2.STANDARD="STANDARD",ProcessorType2.EXPRESS="EXPRESS"})(ProcessorType||(exports.ProcessorType=ProcessorType={})),exports.DISCARD="DISCARD";