"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloudFormationProduct=exports.Product=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var association_manager_1=()=>{var tmp=require("./private/association-manager");return association_manager_1=()=>tmp,tmp},validation_1=()=>{var tmp=require("./private/validation");return validation_1=()=>tmp,tmp},servicecatalog_generated_1=()=>{var tmp=require("./servicecatalog.generated");return servicecatalog_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class ProductBase extends core_1().Resource{associateTagOptions(tagOptions){association_manager_1().AssociationManager.associateTagOptions(this,this.productId,tagOptions)}}class Product extends ProductBase{static fromProductArn(scope,id,productArn){const productId=core_1().Stack.of(scope).splitArn(productArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).resourceName;if(!productId)throw new Error("Missing required Portfolio ID from Portfolio ARN: "+productArn);return new class extends ProductBase{constructor(){super(...arguments),this.productId=productId,this.productArn=productArn,this.assetBuckets=[]}}(scope,id)}}exports.Product=Product,_a=JSII_RTTI_SYMBOL_1,Product[_a]={fqn:"aws-cdk-lib.aws_servicecatalog.Product",version:"2.149.0"};class CloudFormationProduct extends Product{constructor(scope,id,props){super(scope,id),this.assetBuckets=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicecatalog_CloudFormationProductProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CloudFormationProduct),error}this.validateProductProps(props);const product=new(servicecatalog_generated_1()).CfnCloudFormationProduct(this,"Resource",{acceptLanguage:props.messageLanguage,description:props.description,distributor:props.distributor,name:props.productName,owner:props.owner,provisioningArtifactParameters:this.renderProvisioningArtifacts(props),replaceProvisioningArtifacts:props.replaceProductVersionIds,supportDescription:props.supportDescription,supportEmail:props.supportEmail,supportUrl:props.supportUrl});this.productId=product.ref,this.productArn=core_1().Stack.of(this).formatArn({service:"catalog",resource:"product",resourceName:product.ref}),props.tagOptions!==void 0&&this.associateTagOptions(props.tagOptions)}renderProvisioningArtifacts(props){return props.productVersions.map(productVersion=>{const template=productVersion.cloudFormationTemplate.bind(this);return template.assetBucket&&this.assetBuckets.push(template.assetBucket),validation_1().InputValidator.validateUrl(this.node.path,"provisioning template url",template.httpUrl),{name:productVersion.productVersionName,description:productVersion.description,disableTemplateValidation:productVersion.validateTemplate===!1,info:{LoadTemplateFromURL:template.httpUrl}}})}validateProductProps(props){if(validation_1().InputValidator.validateLength(this.node.path,"product product name",1,100,props.productName),validation_1().InputValidator.validateLength(this.node.path,"product owner",1,8191,props.owner),validation_1().InputValidator.validateLength(this.node.path,"product description",0,8191,props.description),validation_1().InputValidator.validateLength(this.node.path,"product distributor",0,8191,props.distributor),validation_1().InputValidator.validateEmail(this.node.path,"support email",props.supportEmail),validation_1().InputValidator.validateUrl(this.node.path,"support url",props.supportUrl),validation_1().InputValidator.validateLength(this.node.path,"support description",0,8191,props.supportDescription),props.productVersions.length==0)throw new Error(`Invalid product versions for resource ${this.node.path}, must contain at least 1 product version`);props.productVersions.forEach(productVersion=>{validation_1().InputValidator.validateLength(this.node.path,"provisioning artifact name",0,100,productVersion.productVersionName),validation_1().InputValidator.validateLength(this.node.path,"provisioning artifact description",0,8191,productVersion.description)})}}exports.CloudFormationProduct=CloudFormationProduct,_b=JSII_RTTI_SYMBOL_1,CloudFormationProduct[_b]={fqn:"aws-cdk-lib.aws_servicecatalog.CloudFormationProduct",version:"2.149.0"};