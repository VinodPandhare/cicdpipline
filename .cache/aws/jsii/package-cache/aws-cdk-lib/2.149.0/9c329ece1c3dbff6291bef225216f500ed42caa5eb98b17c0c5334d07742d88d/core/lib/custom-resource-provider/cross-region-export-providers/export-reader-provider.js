"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExportReader=void 0;const constructs_1=require("constructs"),types_1=require("./types"),cfn_resource_1=require("../../cfn-resource"),custom_resource_1=require("../../custom-resource"),cross_region_ssm_reader_provider_generated_1=require("../../dist/core/cross-region-ssm-reader-provider.generated"),lazy_1=require("../../lazy"),stack_1=require("../../stack");class ExportReader extends constructs_1.Construct{static getOrCreate(scope,uniqueId,_props={}){const stack=stack_1.Stack.of(scope),existing=stack.node.tryFindChild(uniqueId);return existing||new ExportReader(stack,uniqueId)}constructor(scope,id,_props={}){super(scope,id),this.importParameters={};const stack=stack_1.Stack.of(this),resourceType="Custom::CrossRegionExportReader",serviceToken=cross_region_ssm_reader_provider_generated_1.CrossRegionSsmReaderProvider.getOrCreate(this,resourceType,{policyStatements:[{Effect:"Allow",Resource:stack.formatArn({service:"ssm",resource:"parameter",resourceName:`${types_1.SSM_EXPORT_PATH_PREFIX}${stack.stackName}/*`}),Action:["ssm:AddTagsToResource","ssm:RemoveTagsFromResource","ssm:GetParameters"]}]}),properties={region:stack.region,prefix:stack.stackName,imports:lazy_1.Lazy.any({produce:()=>this.importParameters})};this.customResource=new custom_resource_1.CustomResource(this,"Resource",{resourceType,serviceToken,properties:{ReaderProps:properties}})}addDependency(resource){const customResource=this.customResource.node.tryFindChild("Default");customResource&&cfn_resource_1.CfnResource.isCfnResource(customResource)&&customResource.addDependsOn(resource)}importValue(name,value){return this.importParameters[name]=value.toString(),this.customResource.getAtt(name)}}exports.ExportReader=ExportReader;