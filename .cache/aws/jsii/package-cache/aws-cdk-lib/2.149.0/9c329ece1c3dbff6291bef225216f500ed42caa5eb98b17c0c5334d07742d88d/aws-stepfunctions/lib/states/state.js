"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderJsonPath=exports.renderList=exports.State=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},fields_1=()=>{var tmp=require("../fields");return fields_1=()=>tmp,tmp},types_1=()=>{var tmp=require("../types");return types_1=()=>tmp,tmp};class State extends constructs_1().Construct{static prefixStates(root,prefix){const queue=[root];for(;queue.length>0;){const el=queue.splice(0,1)[0];isPrefixable(el)&&el.addPrefix(prefix),queue.push(...constructs_1().Node.of(el).children)}}static findReachableStates(start,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_State(start),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_FindStateOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.findReachableStates),error}const visited=new Set,ret=new Set,queue=[start];for(;queue.length>0;){const state=queue.splice(0,1)[0];if(visited.has(state))continue;visited.add(state);const outgoing=state.outgoingTransitions(options);queue.push(...outgoing),ret.add(state)}return Array.from(ret)}static findReachableEndStates(start,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_State(start),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_FindStateOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.findReachableEndStates),error}const visited=new Set,ret=new Set,queue=[start];for(;queue.length>0;){const state=queue.splice(0,1)[0];if(visited.has(state))continue;visited.add(state);const outgoing=state.outgoingTransitions(options);outgoing.length>0?queue.push(...outgoing):ret.add(state)}return Array.from(ret)}static filterNextables(states){return states.filter(isNextable)}constructor(scope,id,props){super(scope,id),this.branches=[],this.processorMode=types_1().ProcessorMode.INLINE,this.retries=[],this.catches=[],this.choices=[],this.prefixes=[],this.incomingStates=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,State),error}this.startState=this,this.stateName=props.stateName,this.comment=props.comment,this.inputPath=props.inputPath,this.parameters=props.parameters,this.outputPath=props.outputPath,this.resultPath=props.resultPath,this.resultSelector=props.resultSelector,this.node.addValidation({validate:()=>this.validateState()})}validateState(){return[]}get id(){return this.node.id}get stateId(){return this.prefixes.concat(this.stateName?this.stateName:this.id).join("")}addPrefix(x){x!==""&&this.prefixes.splice(0,0,x)}bindToGraph(graph){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(graph)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bindToGraph),error}if(this.containingGraph!==graph){if(this.containingGraph)throw new Error(`Trying to use state '${this.stateId}' in ${graph}, but is already in ${this.containingGraph}. Every state can only be used in one graph.`);this.containingGraph=graph,this.whenBoundToGraph(graph);for(const incoming of this.incomingStates)incoming.bindToGraph(graph);for(const outgoing of this.outgoingTransitions({includeErrorHandlers:!0}))outgoing.bindToGraph(graph);for(const branch of this.branches)branch.registerSuperGraph(this.containingGraph);this.iteration&&this.iteration.registerSuperGraph(this.containingGraph),this.processor&&this.processor.registerSuperGraph(this.containingGraph)}}_addRetry(props={}){validateErrors(props.errors),this.retries.push({...props,errors:props.errors??[types_1().Errors.ALL]})}_addCatch(handler,props={}){validateErrors(props.errors),this.catches.push({next:handler,props:{errors:props.errors??[types_1().Errors.ALL],resultPath:props.resultPath}}),handler.addIncoming(this),this.containingGraph&&handler.bindToGraph(this.containingGraph)}makeNext(next){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_State(next)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.makeNext),error}if(this._next)throw new Error(`State '${this.id}' already has a next state`);this._next=next,next.addIncoming(this),this.containingGraph&&next.bindToGraph(this.containingGraph)}addChoice(condition,next,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_Condition(condition),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_State(next),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_ChoiceTransitionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addChoice),error}this.choices.push({condition,next,...options}),next.startState.addIncoming(this),this.containingGraph&&next.startState.bindToGraph(this.containingGraph)}addBranch(branch){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(branch)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addBranch),error}this.branches.push(branch),this.containingGraph&&branch.registerSuperGraph(this.containingGraph)}addIterator(iteration){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(iteration)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addIterator),error}this.iteration=iteration,this.containingGraph&&iteration.registerSuperGraph(this.containingGraph)}addItemProcessor(processor,config={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(processor),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_ProcessorConfig(config)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addItemProcessor),error}this.processor=processor,this.processorConfig=config,this.containingGraph&&processor.registerSuperGraph(this.containingGraph)}makeDefault(def){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_State(def)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.makeDefault),error}if(this.defaultChoice)throw new Error(`Choice '${this.id}' already has a default next state`);this.defaultChoice=def}renderNextEnd(){return this._next?{Next:this._next.stateId}:{End:!0}}renderChoices(){return{Choices:renderList(this.choices,renderChoice),Default:this.defaultChoice?.stateId}}renderInputOutput(){return{InputPath:renderJsonPath(this.inputPath),Parameters:this.parameters,OutputPath:renderJsonPath(this.outputPath)}}renderBranches(){return{Branches:this.branches.map(b=>b.toGraphJson())}}renderIterator(){if(this.iteration)return{Iterator:this.iteration.toGraphJson()}}renderRetryCatch(){return{Retry:renderList(this.retries,renderRetry,(a,b)=>compareErrors(a.errors,b.errors)),Catch:renderList(this.catches,renderCatch,(a,b)=>compareErrors(a.props.errors,b.props.errors))}}renderResultSelector(){return fields_1().FieldUtils.renderObject({ResultSelector:this.resultSelector})}renderItemProcessor(){if(this.processor)return{ItemProcessor:{...this.renderProcessorConfig(),...this.processor.toGraphJson()}}}renderProcessorConfig(){const mode=this.processorConfig?.mode?.toString()??this.processorMode;if(mode===types_1().ProcessorMode.INLINE)return{ProcessorConfig:{Mode:mode}};const executionType=this.processorConfig?.executionType?.toString();return{ProcessorConfig:{Mode:mode,ExecutionType:executionType}}}whenBoundToGraph(graph){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(graph)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.whenBoundToGraph),error}graph.registerState(this)}addIncoming(source){this.incomingStates.push(source)}outgoingTransitions(options){const ret=new Array;this._next&&ret.push(this._next),this.defaultChoice&&ret.push(this.defaultChoice);for(const c of this.choices)ret.push(c.next);if(options.includeErrorHandlers)for(const c of this.catches)ret.push(c.next);return ret}}exports.State=State,_a=JSII_RTTI_SYMBOL_1,State[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.State",version:"2.149.0"};function renderChoice(c){return{...c.condition.renderCondition(),Next:c.next.stateId,Comment:c.comment}}function renderRetry(retry){return{ErrorEquals:retry.errors,IntervalSeconds:retry.interval&&retry.interval.toSeconds(),MaxAttempts:retry.maxAttempts,BackoffRate:retry.backoffRate,MaxDelaySeconds:retry.maxDelay&&retry.maxDelay.toSeconds(),JitterStrategy:retry.jitterStrategy}}function renderCatch(c){return{ErrorEquals:c.props.errors,ResultPath:renderJsonPath(c.props.resultPath),Next:c.next.stateId}}function compareErrors(a,b){return a?.includes(types_1().Errors.ALL)?1:b?.includes(types_1().Errors.ALL)?-1:0}function validateErrors(errors){if(errors?.includes(types_1().Errors.ALL)&&errors.length>1)throw new Error(`${types_1().Errors.ALL} must appear alone in an error list`)}function renderList(xs,mapFn,sortFn){if(xs.length===0)return;let list=xs;return sortFn&&(list=xs.sort(sortFn)),list.map(mapFn)}exports.renderList=renderList;function renderJsonPath(jsonPath){if(jsonPath!==void 0){if(!core_1().Token.isUnresolved(jsonPath)&&!jsonPath.startsWith("$"))throw new Error(`Expected JSON path to start with '$', got: ${jsonPath}`);return jsonPath}}exports.renderJsonPath=renderJsonPath;function isPrefixable(x){return typeof x=="object"&&x.addPrefix}function isNextable(x){return typeof x=="object"&&x.next}