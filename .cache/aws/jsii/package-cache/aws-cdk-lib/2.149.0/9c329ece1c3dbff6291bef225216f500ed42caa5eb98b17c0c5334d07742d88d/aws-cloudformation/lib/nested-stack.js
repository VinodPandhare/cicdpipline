"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.NestedStack=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core=()=>{var tmp=require("../../core");return core=()=>tmp,tmp};class NestedStack extends core().NestedStack{constructor(scope,id,props={}){super(scope,id,{parameters:props.parameters,timeout:props.timeout,notificationArns:props.notifications?.map(n=>n.topicArn)})}}exports.NestedStack=NestedStack,_a=JSII_RTTI_SYMBOL_1,NestedStack[_a]={fqn:"aws-cdk-lib.aws_cloudformation.NestedStack",version:"2.149.0"};
