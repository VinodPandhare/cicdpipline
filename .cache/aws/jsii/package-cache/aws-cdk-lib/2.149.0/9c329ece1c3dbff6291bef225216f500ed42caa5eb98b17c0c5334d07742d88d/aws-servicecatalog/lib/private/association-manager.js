"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AssociationManager=void 0;var util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},validation_1=()=>{var tmp=require("./validation");return validation_1=()=>tmp,tmp},servicecatalog_generated_1=()=>{var tmp=require("../servicecatalog.generated");return servicecatalog_generated_1=()=>tmp,tmp};class AssociationManager{static associateProductWithPortfolio(portfolio,product,options){validation_1().InputValidator.validateLength(this.prettyPrintAssociation(portfolio,product),"description",0,2e3,options?.description);const associationKey=(0,util_1().hashValues)(portfolio.node.addr,product.node.addr,product.stack.node.addr),constructId=`PortfolioProductAssociation${associationKey}`,existingAssociation=portfolio.node.tryFindChild(constructId),cfnAssociation=existingAssociation||new(servicecatalog_generated_1()).CfnPortfolioProductAssociation(portfolio,constructId,{portfolioId:portfolio.portfolioId,productId:product.productId});return{associationKey,cfnPortfolioProductAssociation:cfnAssociation}}static constrainTagUpdates(portfolio,product,options){const association=this.associateProductWithPortfolio(portfolio,product,options),constructId=`ResourceUpdateConstraint${association.associationKey}`;if(!portfolio.node.tryFindChild(constructId))new(servicecatalog_generated_1()).CfnResourceUpdateConstraint(portfolio,constructId,{acceptLanguage:options.messageLanguage,description:options.description,portfolioId:portfolio.portfolioId,productId:product.productId,tagUpdateOnProvisionedProduct:options.allow===!1?"NOT_ALLOWED":"ALLOWED"}).addDependency(association.cfnPortfolioProductAssociation);else throw new Error(`Cannot have multiple tag update constraints for association ${this.prettyPrintAssociation(portfolio,product)}`)}static notifyOnStackEvents(portfolio,product,topic,options){const association=this.associateProductWithPortfolio(portfolio,product,options),constructId=`LaunchNotificationConstraint${(0,util_1().hashValues)(topic.node.addr,topic.stack.node.addr,association.associationKey)}`;if(!portfolio.node.tryFindChild(constructId))new(servicecatalog_generated_1()).CfnLaunchNotificationConstraint(portfolio,constructId,{acceptLanguage:options.messageLanguage,description:options.description,portfolioId:portfolio.portfolioId,productId:product.productId,notificationArns:[topic.topicArn]}).addDependency(association.cfnPortfolioProductAssociation);else throw new Error(`Topic ${topic.node.path} is already subscribed to association ${this.prettyPrintAssociation(portfolio,product)}`)}static constrainCloudFormationParameters(portfolio,product,options){const association=this.associateProductWithPortfolio(portfolio,product,options),constructId=`LaunchTemplateConstraint${(0,util_1().hashValues)(association.associationKey,options.rule.ruleName)}`;if(!portfolio.node.tryFindChild(constructId))new(servicecatalog_generated_1()).CfnLaunchTemplateConstraint(portfolio,constructId,{acceptLanguage:options.messageLanguage,description:options.description,portfolioId:portfolio.portfolioId,productId:product.productId,rules:this.formatTemplateRule(portfolio.stack,options.rule)}).addDependency(association.cfnPortfolioProductAssociation);else throw new Error(`Provisioning rule ${options.rule.ruleName} already configured on association ${this.prettyPrintAssociation(portfolio,product)}`)}static setLaunchRole(portfolio,product,launchRole,options){this.setLaunchRoleConstraint(portfolio,product,options,{roleArn:launchRole.roleArn})}static setLocalLaunchRoleName(portfolio,product,launchRoleName,options){this.setLaunchRoleConstraint(portfolio,product,options,{localRoleName:launchRoleName})}static deployWithStackSets(portfolio,product,options){const association=this.associateProductWithPortfolio(portfolio,product,options);if(portfolio.node.tryFindChild(this.launchRoleConstraintLogicalId(association.associationKey)))throw new Error(`Cannot configure StackSet deployment when a launch role is already defined for association ${this.prettyPrintAssociation(portfolio,product)}`);const constructId=this.stackSetConstraintLogicalId(association.associationKey);if(!portfolio.node.tryFindChild(constructId))new(servicecatalog_generated_1()).CfnStackSetConstraint(portfolio,constructId,{acceptLanguage:options.messageLanguage,description:options.description??"",portfolioId:portfolio.portfolioId,productId:product.productId,accountList:options.accounts,regionList:options.regions,adminRole:options.adminRole.roleArn,executionRole:options.executionRoleName,stackInstanceControl:options.allowStackSetInstanceOperations?"ALLOWED":"NOT_ALLOWED"}).addDependency(association.cfnPortfolioProductAssociation);else throw new Error(`Cannot configure multiple StackSet deployment constraints for association ${this.prettyPrintAssociation(portfolio,product)}`)}static associateTagOptions(resource,resourceId,tagOptions){for(const cfnTagOption of tagOptions._cfnTagOptions){const tagAssocationConstructId=`TagOptionAssociation${(0,util_1().hashValues)(cfnTagOption.key,cfnTagOption.value,resource.node.addr)}`;resource.node.tryFindChild(tagAssocationConstructId)||new(servicecatalog_generated_1()).CfnTagOptionAssociation(resource,tagAssocationConstructId,{resourceId,tagOptionId:cfnTagOption.ref})}}static setLaunchRoleConstraint(portfolio,product,options,roleOptions){const association=this.associateProductWithPortfolio(portfolio,product,options);if(portfolio.node.tryFindChild(this.stackSetConstraintLogicalId(association.associationKey)))throw new Error(`Cannot set launch role when a StackSet rule is already defined for association ${this.prettyPrintAssociation(portfolio,product)}`);const constructId=this.launchRoleConstraintLogicalId(association.associationKey);if(!portfolio.node.tryFindChild(constructId))new(servicecatalog_generated_1()).CfnLaunchRoleConstraint(portfolio,constructId,{acceptLanguage:options.messageLanguage,description:options.description,portfolioId:portfolio.portfolioId,productId:product.productId,roleArn:roleOptions.roleArn,localRoleName:roleOptions.localRoleName}).addDependency(association.cfnPortfolioProductAssociation);else throw new Error(`Cannot set multiple launch roles for association ${this.prettyPrintAssociation(portfolio,product)}`)}static stackSetConstraintLogicalId(associationKey){return`StackSetConstraint${associationKey}`}static launchRoleConstraintLogicalId(associationKey){return`LaunchRoleConstraint${associationKey}`}static prettyPrintAssociation(portfolio,product){return`- Portfolio: ${portfolio.node.path} | Product: ${product.node.path}`}static formatTemplateRule(stack,rule){return JSON.stringify({[rule.ruleName]:{Assertions:this.formatAssertions(stack,rule.assertions),RuleCondition:rule.condition?stack.resolve(rule.condition):void 0}})}static formatAssertions(stack,assertions){return assertions.reduce((formattedAssertions,assertion)=>(formattedAssertions.push({Assert:stack.resolve(assertion.assert),AssertDescription:assertion.description}),formattedAssertions),new Array)}}exports.AssociationManager=AssociationManager;
