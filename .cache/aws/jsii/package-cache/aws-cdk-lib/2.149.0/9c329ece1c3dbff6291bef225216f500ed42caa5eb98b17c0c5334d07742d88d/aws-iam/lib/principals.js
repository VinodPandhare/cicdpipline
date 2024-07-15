"use strict";var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v;Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateConditionObject=exports.CompositePrincipal=exports.StarPrincipal=exports.Anyone=exports.AnyPrincipal=exports.AccountRootPrincipal=exports.SamlConsolePrincipal=exports.SamlPrincipal=exports.OpenIdConnectPrincipal=exports.WebIdentityPrincipal=exports.FederatedPrincipal=exports.CanonicalUserPrincipal=exports.OrganizationPrincipal=exports.ServicePrincipal=exports.AccountPrincipal=exports.ArnPrincipal=exports.PrincipalPolicyFragment=exports.SessionTagsPrincipal=exports.PrincipalWithConditions=exports.PrincipalBase=exports.ComparablePrincipal=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var policy_statement_1=()=>{var tmp=require("./policy-statement");return policy_statement_1=()=>tmp,tmp},assume_role_policy_1=()=>{var tmp=require("./private/assume-role-policy");return assume_role_policy_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./private/util");return util_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../cx-api");return cxapi=()=>tmp,tmp},region_info_1=()=>{var tmp=require("../../region-info");return region_info_1=()=>tmp,tmp};class ComparablePrincipal{static isComparablePrincipal(x){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(x)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.isComparablePrincipal),error}return"dedupeString"in x}static dedupeStringFor(x){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(x)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.dedupeStringFor),error}return ComparablePrincipal.isComparablePrincipal(x)?x.dedupeString():void 0}}exports.ComparablePrincipal=ComparablePrincipal,_a=JSII_RTTI_SYMBOL_1,ComparablePrincipal[_a]={fqn:"aws-cdk-lib.aws_iam.ComparablePrincipal",version:"2.149.0"};class PrincipalBase{constructor(){this.grantPrincipal=this,this.principalAccount=void 0,this.assumeRoleAction="sts:AssumeRole"}addToPolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToPolicy),error}return this.addToPrincipalPolicy(statement).statementAdded}addToPrincipalPolicy(_statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(_statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToPrincipalPolicy),error}return{statementAdded:!1}}addToAssumeRolePolicy(document){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyDocument(document)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToAssumeRolePolicy),error}document.addStatements(new(policy_statement_1()).PolicyStatement({actions:[this.assumeRoleAction],principals:[this]}))}toString(){return JSON.stringify(this.policyFragment.principalJson)}toJSON(){return this.policyFragment.principalJson}withConditions(conditions){return new PrincipalWithConditions(this,conditions)}withSessionTags(){return new SessionTagsPrincipal(this)}}exports.PrincipalBase=PrincipalBase,_b=JSII_RTTI_SYMBOL_1,PrincipalBase[_b]={fqn:"aws-cdk-lib.aws_iam.PrincipalBase",version:"2.149.0"};class PrincipalAdapter extends PrincipalBase{constructor(wrapped){super(),this.wrapped=wrapped,this.assumeRoleAction=this.wrapped.assumeRoleAction,this.principalAccount=this.wrapped.principalAccount}get policyFragment(){return this.wrapped.policyFragment}addToPolicy(statement){return this.wrapped.addToPolicy(statement)}addToPrincipalPolicy(statement){return this.wrapped.addToPrincipalPolicy(statement)}appendDedupe(append){const inner=ComparablePrincipal.dedupeStringFor(this.wrapped);return inner!==void 0?`${this.constructor.name}:${inner}:${append}`:void 0}}class PrincipalWithConditions extends PrincipalAdapter{constructor(principal,conditions){super(principal);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(principal)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,PrincipalWithConditions),error}this.additionalConditions=conditions}addToAssumeRolePolicy(doc){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyDocument(doc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToAssumeRolePolicy),error}const adapter=require("./private/policydoc-adapter");(0,assume_role_policy_1().defaultAddPrincipalToAssumeRole)(this.wrapped,new adapter.MutatingPolicyDocumentAdapter(doc,statement=>(statement.addActions(this.assumeRoleAction),statement.addConditions(this.conditions),statement)))}addCondition(key,value){validateConditionObject(value);const existingValue=this.additionalConditions[key];if(!existingValue){this.additionalConditions[key]=value;return}validateConditionObject(existingValue),this.additionalConditions[key]={...existingValue,...value}}addConditions(conditions){Object.entries(conditions).forEach(([key,value])=>{this.addCondition(key,value)})}get conditions(){return this.mergeConditions(this.wrapped.policyFragment.conditions,this.additionalConditions)}get policyFragment(){return new PrincipalPolicyFragment(this.wrapped.policyFragment.principalJson,this.conditions)}toString(){return this.wrapped.toString()}toJSON(){return this.policyFragment.principalJson}dedupeString(){return this.appendDedupe(JSON.stringify(this.conditions))}mergeConditions(principalConditions,additionalConditions){const mergedConditions={};return Object.entries(principalConditions).forEach(([operator,condition])=>{mergedConditions[operator]=condition}),Object.entries(additionalConditions).forEach(([operator,condition])=>{const existing=mergedConditions[operator];if(!existing){mergedConditions[operator]=condition;return}if(cdk().Token.isUnresolved(condition)||cdk().Token.isUnresolved(existing))throw new Error(`multiple "${operator}" conditions cannot be merged if one of them contains an unresolved token`);validateConditionObject(existing),validateConditionObject(condition),mergedConditions[operator]={...existing,...condition}}),mergedConditions}}exports.PrincipalWithConditions=PrincipalWithConditions,_c=JSII_RTTI_SYMBOL_1,PrincipalWithConditions[_c]={fqn:"aws-cdk-lib.aws_iam.PrincipalWithConditions",version:"2.149.0"};class SessionTagsPrincipal extends PrincipalAdapter{constructor(principal){super(principal);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(principal)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SessionTagsPrincipal),error}}addToAssumeRolePolicy(doc){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyDocument(doc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToAssumeRolePolicy),error}const adapter=require("./private/policydoc-adapter");(0,assume_role_policy_1().defaultAddPrincipalToAssumeRole)(this.wrapped,new adapter.MutatingPolicyDocumentAdapter(doc,statement=>(statement.addActions("sts:TagSession"),statement)))}dedupeString(){return this.appendDedupe("")}}exports.SessionTagsPrincipal=SessionTagsPrincipal,_d=JSII_RTTI_SYMBOL_1,SessionTagsPrincipal[_d]={fqn:"aws-cdk-lib.aws_iam.SessionTagsPrincipal",version:"2.149.0"};class PrincipalPolicyFragment{constructor(principalJson,conditions={}){this.principalJson=principalJson,this.conditions=conditions}}exports.PrincipalPolicyFragment=PrincipalPolicyFragment,_e=JSII_RTTI_SYMBOL_1,PrincipalPolicyFragment[_e]={fqn:"aws-cdk-lib.aws_iam.PrincipalPolicyFragment",version:"2.149.0"};class ArnPrincipal extends PrincipalBase{constructor(arn){super(),this.arn=arn}get policyFragment(){return new PrincipalPolicyFragment({AWS:[this.arn]})}toString(){return`ArnPrincipal(${this.arn})`}inOrganization(organizationId){return this.withConditions({StringEquals:{"aws:PrincipalOrgID":organizationId}})}dedupeString(){return`ArnPrincipal:${this.arn}`}}exports.ArnPrincipal=ArnPrincipal,_f=JSII_RTTI_SYMBOL_1,ArnPrincipal[_f]={fqn:"aws-cdk-lib.aws_iam.ArnPrincipal",version:"2.149.0"};class AccountPrincipal extends ArnPrincipal{constructor(accountId){if(super(new StackDependentToken(stack=>`arn:${stack.partition}:iam::${accountId}:root`).toString()),this.accountId=accountId,!cdk().Token.isUnresolved(accountId)&&typeof accountId!="string")throw new Error("accountId should be of type string");this.principalAccount=accountId}toString(){return`AccountPrincipal(${this.accountId})`}}exports.AccountPrincipal=AccountPrincipal,_g=JSII_RTTI_SYMBOL_1,AccountPrincipal[_g]={fqn:"aws-cdk-lib.aws_iam.AccountPrincipal",version:"2.149.0"};class ServicePrincipal extends PrincipalBase{static servicePrincipalName(service){return new ServicePrincipalToken(service,{}).toString()}constructor(service,opts={}){super(),this.service=service,this.opts=opts;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_ServicePrincipalOpts(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ServicePrincipal),error}}get policyFragment(){return new PrincipalPolicyFragment({Service:[new ServicePrincipalToken(this.service,this.opts).toString()]},this.opts.conditions)}toString(){return`ServicePrincipal(${this.service})`}dedupeString(){return`ServicePrincipal:${this.service}:${JSON.stringify(this.opts)}`}}exports.ServicePrincipal=ServicePrincipal,_h=JSII_RTTI_SYMBOL_1,ServicePrincipal[_h]={fqn:"aws-cdk-lib.aws_iam.ServicePrincipal",version:"2.149.0"};class OrganizationPrincipal extends PrincipalBase{constructor(organizationId){super(),this.organizationId=organizationId}get policyFragment(){return new PrincipalPolicyFragment({AWS:["*"]},{StringEquals:{"aws:PrincipalOrgID":this.organizationId}})}toString(){return`OrganizationPrincipal(${this.organizationId})`}dedupeString(){return`OrganizationPrincipal:${this.organizationId}`}}exports.OrganizationPrincipal=OrganizationPrincipal,_j=JSII_RTTI_SYMBOL_1,OrganizationPrincipal[_j]={fqn:"aws-cdk-lib.aws_iam.OrganizationPrincipal",version:"2.149.0"};class CanonicalUserPrincipal extends PrincipalBase{constructor(canonicalUserId){super(),this.canonicalUserId=canonicalUserId}get policyFragment(){return new PrincipalPolicyFragment({CanonicalUser:[this.canonicalUserId]})}toString(){return`CanonicalUserPrincipal(${this.canonicalUserId})`}dedupeString(){return`CanonicalUserPrincipal:${this.canonicalUserId}`}}exports.CanonicalUserPrincipal=CanonicalUserPrincipal,_k=JSII_RTTI_SYMBOL_1,CanonicalUserPrincipal[_k]={fqn:"aws-cdk-lib.aws_iam.CanonicalUserPrincipal",version:"2.149.0"};class FederatedPrincipal extends PrincipalBase{constructor(federated,conditions={},assumeRoleAction="sts:AssumeRole"){super(),this.federated=federated,this.conditions=conditions,this.assumeRoleAction=assumeRoleAction}get policyFragment(){return new PrincipalPolicyFragment({Federated:[this.federated]},this.conditions)}toString(){return`FederatedPrincipal(${this.federated})`}dedupeString(){return`FederatedPrincipal:${this.federated}:${this.assumeRoleAction}:${JSON.stringify(this.conditions)}`}}exports.FederatedPrincipal=FederatedPrincipal,_l=JSII_RTTI_SYMBOL_1,FederatedPrincipal[_l]={fqn:"aws-cdk-lib.aws_iam.FederatedPrincipal",version:"2.149.0"};class WebIdentityPrincipal extends FederatedPrincipal{constructor(identityProvider,conditions={}){super(identityProvider,conditions??{},"sts:AssumeRoleWithWebIdentity")}get policyFragment(){return new PrincipalPolicyFragment({Federated:[this.federated]},this.conditions)}toString(){return`WebIdentityPrincipal(${this.federated})`}}exports.WebIdentityPrincipal=WebIdentityPrincipal,_m=JSII_RTTI_SYMBOL_1,WebIdentityPrincipal[_m]={fqn:"aws-cdk-lib.aws_iam.WebIdentityPrincipal",version:"2.149.0"};class OpenIdConnectPrincipal extends WebIdentityPrincipal{constructor(openIdConnectProvider,conditions={}){super(openIdConnectProvider.openIdConnectProviderArn,conditions??{});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IOpenIdConnectProvider(openIdConnectProvider)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,OpenIdConnectPrincipal),error}}get policyFragment(){return new PrincipalPolicyFragment({Federated:[this.federated]},this.conditions)}toString(){return`OpenIdConnectPrincipal(${this.federated})`}}exports.OpenIdConnectPrincipal=OpenIdConnectPrincipal,_o=JSII_RTTI_SYMBOL_1,OpenIdConnectPrincipal[_o]={fqn:"aws-cdk-lib.aws_iam.OpenIdConnectPrincipal",version:"2.149.0"};class SamlPrincipal extends FederatedPrincipal{constructor(samlProvider,conditions){super(samlProvider.samlProviderArn,conditions,"sts:AssumeRoleWithSAML");try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_ISamlProvider(samlProvider)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SamlPrincipal),error}}toString(){return`SamlPrincipal(${this.federated})`}}exports.SamlPrincipal=SamlPrincipal,_p=JSII_RTTI_SYMBOL_1,SamlPrincipal[_p]={fqn:"aws-cdk-lib.aws_iam.SamlPrincipal",version:"2.149.0"};class SamlConsolePrincipal extends SamlPrincipal{constructor(samlProvider,conditions={}){super(samlProvider,{...conditions,StringEquals:{"SAML:aud":region_info_1().RegionInfo.get(samlProvider.stack.region).samlSignOnUrl??"https://signin.aws.amazon.com/saml"}});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_ISamlProvider(samlProvider)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,SamlConsolePrincipal),error}}toString(){return`SamlConsolePrincipal(${this.federated})`}}exports.SamlConsolePrincipal=SamlConsolePrincipal,_q=JSII_RTTI_SYMBOL_1,SamlConsolePrincipal[_q]={fqn:"aws-cdk-lib.aws_iam.SamlConsolePrincipal",version:"2.149.0"};class AccountRootPrincipal extends AccountPrincipal{constructor(){super(new StackDependentToken(stack=>stack.account).toString())}toString(){return"AccountRootPrincipal()"}}exports.AccountRootPrincipal=AccountRootPrincipal,_r=JSII_RTTI_SYMBOL_1,AccountRootPrincipal[_r]={fqn:"aws-cdk-lib.aws_iam.AccountRootPrincipal",version:"2.149.0"};class AnyPrincipal extends ArnPrincipal{constructor(){super("*")}toString(){return"AnyPrincipal()"}}exports.AnyPrincipal=AnyPrincipal,_s=JSII_RTTI_SYMBOL_1,AnyPrincipal[_s]={fqn:"aws-cdk-lib.aws_iam.AnyPrincipal",version:"2.149.0"};class Anyone extends AnyPrincipal{}exports.Anyone=Anyone,_t=JSII_RTTI_SYMBOL_1,Anyone[_t]={fqn:"aws-cdk-lib.aws_iam.Anyone",version:"2.149.0"};class StarPrincipal extends PrincipalBase{constructor(){super(...arguments),this.policyFragment={principalJson:{[util_1().LITERAL_STRING_KEY]:["*"]},conditions:{}}}toString(){return"StarPrincipal()"}dedupeString(){return"StarPrincipal"}}exports.StarPrincipal=StarPrincipal,_u=JSII_RTTI_SYMBOL_1,StarPrincipal[_u]={fqn:"aws-cdk-lib.aws_iam.StarPrincipal",version:"2.149.0"};class CompositePrincipal extends PrincipalBase{constructor(...principals){super(),this._principals=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(principals)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CompositePrincipal),error}if(principals.length===0)throw new Error("CompositePrincipals must be constructed with at least 1 Principal but none were passed.");this.assumeRoleAction=principals[0].assumeRoleAction,this.addPrincipals(...principals)}addPrincipals(...principals){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(principals)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addPrincipals),error}return this._principals.push(...principals),this}addToAssumeRolePolicy(doc){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyDocument(doc)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToAssumeRolePolicy),error}for(const p of this._principals)(0,assume_role_policy_1().defaultAddPrincipalToAssumeRole)(p,doc)}get policyFragment(){for(const p of this._principals){const fragment=p.policyFragment;if(fragment.conditions&&Object.keys(fragment.conditions).length>0)throw new Error(`Components of a CompositePrincipal must not have conditions. Tried to add the following fragment: ${JSON.stringify(fragment)}`)}const principalJson={};for(const p of this._principals)(0,util_1().mergePrincipal)(principalJson,p.policyFragment.principalJson);return new PrincipalPolicyFragment(principalJson)}toString(){return`CompositePrincipal(${this._principals})`}dedupeString(){const inner=this._principals.map(ComparablePrincipal.dedupeStringFor);if(!inner.some(x=>x===void 0))return`CompositePrincipal[${inner.join(",")}]`}get principals(){return this._principals}}exports.CompositePrincipal=CompositePrincipal,_v=JSII_RTTI_SYMBOL_1,CompositePrincipal[_v]={fqn:"aws-cdk-lib.aws_iam.CompositePrincipal",version:"2.149.0"};class StackDependentToken{constructor(fn){this.fn=fn,this.creationStack=cdk().captureStackTrace()}resolve(context){return this.fn(cdk().Stack.of(context.scope))}toString(){return cdk().Token.asString(this)}toJSON(){return"<unresolved-token>"}}class ServicePrincipalToken{constructor(service,opts){this.service=service,this.opts=opts,this.creationStack=cdk().captureStackTrace()}resolve(ctx){return cdk().FeatureFlags.of(ctx.scope).isEnabled(cxapi().IAM_STANDARDIZED_SERVICE_PRINCIPALS)?this.newStandardizedBehavior(ctx):this.legacyBehavior(ctx)}newStandardizedBehavior(ctx){const stack=cdk().Stack.of(ctx.scope);return this.opts.region&&!cdk().Token.isUnresolved(this.opts.region)&&stack.region!==this.opts.region&&region_info_1().RegionInfo.get(this.opts.region).isOptInRegion?this.service.replace(/\.amazonaws\.com$/,`.${this.opts.region}.amazonaws.com`):this.service}legacyBehavior(ctx){if(this.opts.region)return region_info_1().RegionInfo.get(this.opts.region).servicePrincipal(this.service)??region_info_1().Default.servicePrincipal(this.service,this.opts.region,cdk().Aws.URL_SUFFIX);const stack=cdk().Stack.of(ctx.scope);return stack.regionalFact(region_info_1().FactName.servicePrincipal(this.service),region_info_1().Default.servicePrincipal(this.service,stack.region,cdk().Aws.URL_SUFFIX))}toString(){return cdk().Token.asString(this,{displayHint:this.service})}toJSON(){return`<${this.service}>`}}function validateConditionObject(x){if(!x||typeof x!="object"||Array.isArray(x))throw new Error("A Condition should be represented as a map of operator to value")}exports.validateConditionObject=validateConditionObject;