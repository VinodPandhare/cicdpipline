"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ProxyResource=exports.Resource=exports.ResourceBase=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var apigateway_generated_1=()=>{var tmp=require("./apigateway.generated");return apigateway_generated_1=()=>tmp,tmp},cors_1=()=>{var tmp=require("./cors");return cors_1=()=>tmp,tmp},integrations_1=()=>{var tmp=require("./integrations");return integrations_1=()=>tmp,tmp},method_1=()=>{var tmp=require("./method");return method_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class ResourceBase extends core_1().Resource{constructor(scope,id){super(scope,id),this.children={}}addResource(pathPart,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_ResourceOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addResource),error}return new Resource(this,pathPart,{parent:this,pathPart,...options})}addMethod(httpMethod,integration,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_Integration(integration),jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_MethodOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addMethod),error}return new(method_1()).Method(this,httpMethod,{resource:this,httpMethod,integration,options})}addProxy(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_ProxyResourceOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addProxy),error}return new ProxyResource(this,"{proxy+}",{parent:this,...options})}addCorsPreflight(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_CorsOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addCorsPreflight),error}const headers={},allowHeaders=options.allowHeaders||cors_1().Cors.DEFAULT_HEADERS;if(headers["Access-Control-Allow-Headers"]=`'${allowHeaders.join(",")}'`,options.allowOrigins.length===0)throw new Error("allowOrigins must contain at least one origin");if(options.allowOrigins.includes("*")&&options.allowOrigins.length>1)throw new Error(`Invalid "allowOrigins" - cannot mix "*" with specific origins: ${options.allowOrigins.join(",")}`);const initialOrigin=options.allowOrigins[0];headers["Access-Control-Allow-Origin"]=`'${initialOrigin}'`,initialOrigin!=="*"&&(headers.Vary="'Origin'");let allowMethods=options.allowMethods||cors_1().Cors.ALL_METHODS;if(allowMethods.includes("ANY")){if(allowMethods.length>1)throw new Error(`ANY cannot be used with any other method. Received: ${allowMethods.join(",")}`);allowMethods=cors_1().Cors.ALL_METHODS}headers["Access-Control-Allow-Methods"]=`'${allowMethods.join(",")}'`,options.allowCredentials&&(headers["Access-Control-Allow-Credentials"]="'true'");let maxAgeSeconds;if(options.maxAge&&options.disableCache)throw new Error('The options "maxAge" and "disableCache" are mutually exclusive');options.maxAge&&(maxAgeSeconds=options.maxAge.toSeconds()),options.disableCache&&(maxAgeSeconds=-1),maxAgeSeconds&&(headers["Access-Control-Max-Age"]=`'${maxAgeSeconds}'`),options.exposeHeaders&&(headers["Access-Control-Expose-Headers"]=`'${options.exposeHeaders.join(",")}'`);const statusCode=options.statusCode??204,integrationResponseParams={},methodResponseParams={};for(const[name,value]of Object.entries(headers)){const key=`method.response.header.${name}`;integrationResponseParams[key]=value,methodResponseParams[key]=!0}return this.addMethod("OPTIONS",new(integrations_1()).MockIntegration({requestTemplates:{"application/json":"{ statusCode: 200 }"},integrationResponses:[{statusCode:`${statusCode}`,responseParameters:integrationResponseParams,responseTemplates:renderResponseTemplate()}]}),{authorizer:{authorizerId:"",authorizationType:method_1().AuthorizationType.NONE},apiKeyRequired:!1,authorizationType:method_1().AuthorizationType.NONE,methodResponses:[{statusCode:`${statusCode}`,responseParameters:methodResponseParams}]});function renderResponseTemplate(){const origins=options.allowOrigins.slice(1);if(origins.length===0)return;const template=new Array;template.push('#set($origin = $input.params().header.get("Origin"))','#if($origin == "")','  #set($origin = $input.params().header.get("origin"))',"#end");const condition=origins.map(o=>`$origin == "${o}"`).join(" || ");return template.push(`#if(${condition})`),template.push("  #set($context.responseOverride.header.Access-Control-Allow-Origin = $origin)"),template.push("#end"),{"application/json":template.join(`
`)}}}getResource(pathPart){return this.children[pathPart]}_trackChild(pathPart,resource){this.children[pathPart]=resource}resourceForPath(path){if(!path)return this;if(path.startsWith("/")){if(this.path!=="/")throw new Error(`Path may start with "/" only for the resource, but we are at: ${this.path}`);return this.resourceForPath(path.slice(1))}const parts=path.split("/"),next=parts.shift();if(!next||next==="")throw new Error("resourceForPath cannot be called with an empty path");let resource=this.getResource(next);return resource||(resource=this.addResource(next)),resource.resourceForPath(parts.join("/"))}get url(){return this.restApi.urlForPath(this.path)}}exports.ResourceBase=ResourceBase,_a=JSII_RTTI_SYMBOL_1,ResourceBase[_a]={fqn:"aws-cdk-lib.aws_apigateway.ResourceBase",version:"2.149.0"};class Resource extends ResourceBase{static fromResourceAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_ResourceAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromResourceAttributes),error}class Import extends ResourceBase{constructor(){super(...arguments),this.api=attrs.restApi,this.resourceId=attrs.resourceId,this.path=attrs.path,this.defaultIntegration=void 0,this.defaultMethodOptions=void 0,this.defaultCorsPreflightOptions=void 0}get parentResource(){throw new Error("parentResource is not configured for imported resource.")}get restApi(){throw new Error("restApi is not configured for imported resource.")}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_ResourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Resource),error}validateResourcePathPart(props.pathPart),this.parentResource=props.parent,props.parent instanceof ResourceBase&&props.parent._trackChild(props.pathPart,this);const resourceProps={restApiId:props.parent.api.restApiId,parentId:props.parent.resourceId,pathPart:props.pathPart},resource=new(apigateway_generated_1()).CfnResource(this,"Resource",resourceProps);this.resourceId=resource.ref,this.api=props.parent.api,this.path=props.parent.path,this.path.endsWith("/")||(this.path+="/"),this.path+=props.pathPart;const deployment=props.parent.api.latestDeployment;deployment&&(deployment.node.addDependency(resource),deployment.addToLogicalId({resource:resourceProps})),this.defaultIntegration=props.defaultIntegration||props.parent.defaultIntegration,this.defaultMethodOptions={...props.parent.defaultMethodOptions,...props.defaultMethodOptions},this.defaultCorsPreflightOptions=props.defaultCorsPreflightOptions||props.parent.defaultCorsPreflightOptions,this.defaultCorsPreflightOptions&&this.addCorsPreflight(this.defaultCorsPreflightOptions)}get restApi(){if(!this.parentResource)throw new Error("parentResource was unexpectedly not defined");return this.parentResource.restApi}}exports.Resource=Resource,_b=JSII_RTTI_SYMBOL_1,Resource[_b]={fqn:"aws-cdk-lib.aws_apigateway.Resource",version:"2.149.0"};class ProxyResource extends Resource{constructor(scope,id,props){super(scope,id,{parent:props.parent,pathPart:"{proxy+}",defaultIntegration:props.defaultIntegration,defaultMethodOptions:props.defaultMethodOptions});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_ProxyResourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ProxyResource),error}(props.anyMethod??!0)&&(this.anyMethod=this.addMethod("ANY"))}addMethod(httpMethod,integration,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_Integration(integration),jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_MethodOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addMethod),error}return this.parentResource&&this.parentResource.path==="/"&&(this.parentResource.node.tryFindChild(httpMethod)instanceof method_1().Method||this.parentResource.addMethod(httpMethod,integration,options)),super.addMethod(httpMethod,integration,options)}}exports.ProxyResource=ProxyResource,_c=JSII_RTTI_SYMBOL_1,ProxyResource[_c]={fqn:"aws-cdk-lib.aws_apigateway.ProxyResource",version:"2.149.0"};function validateResourcePathPart(part){if(part.startsWith("{")&&part.endsWith("}")&&(part=part.slice(1,-1),part.endsWith("+")&&(part=part.slice(0,-1))),!/^[a-zA-Z0-9:\.\_\-\$]+$/.test(part))throw new Error(`Resource's path part only allow [a-zA-Z0-9:._-$], an optional trailing '+'
      and curly braces at the beginning and the end: ${part}`)}