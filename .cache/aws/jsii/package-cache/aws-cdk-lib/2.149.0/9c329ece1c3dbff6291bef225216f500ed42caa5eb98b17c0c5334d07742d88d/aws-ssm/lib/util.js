"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.arnForParameterName=exports.AUTOGEN_MARKER=void 0;var core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};exports.AUTOGEN_MARKER="$$autogen$$";function arnForParameterName(scope,parameterName,options={}){const physicalName=options.physicalName,nameToValidate=physicalName||parameterName;if(!core_1().Token.isUnresolved(nameToValidate)&&nameToValidate.includes("/")&&!nameToValidate.startsWith("/"))throw new Error(`Parameter names must be fully qualified (if they include "/" they must also begin with a "/"): ${nameToValidate}`);if(isSimpleName())return core_1().Stack.of(scope).formatArn({service:"ssm",resource:"parameter",arnFormat:core_1().ArnFormat.SLASH_RESOURCE_NAME,resourceName:parameterName});return core_1().Stack.of(scope).formatArn({service:"ssm",resource:`parameter${parameterName}`});function isSimpleName(){const concreteName=core_1().Token.isUnresolved(parameterName)?physicalName:parameterName;if(!concreteName||core_1().Token.isUnresolved(concreteName)){if(options.simpleName===void 0)throw new Error('Unable to determine ARN separator for SSM parameter since the parameter name is an unresolved token. Use "fromAttributes" and specify "simpleName" explicitly');return options.simpleName}const result=!concreteName.startsWith("/");if(options.simpleName!==void 0&&options.simpleName!==result)throw concreteName===exports.AUTOGEN_MARKER?new Error('If "parameterName" is not explicitly defined, "simpleName" must be "true" or undefined since auto-generated parameter names always have simple names'):new Error(`Parameter name "${concreteName}" is ${result?"a simple name":"not a simple name"}, but "simpleName" was explicitly set to ${options.simpleName}. Either omit it or set it to ${result}`);return result}}exports.arnForParameterName=arnForParameterName;
