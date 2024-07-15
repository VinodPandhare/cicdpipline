"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.KubectlProvider=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},cluster_1=()=>{var tmp=require("./cluster");return cluster_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},kubectl_provider_generated_1=()=>{var tmp=require("../../custom-resource-handlers/dist/aws-eks/kubectl-provider.generated");return kubectl_provider_generated_1=()=>tmp,tmp},cr=()=>{var tmp=require("../../custom-resources");return cr=()=>tmp,tmp},lambda_layer_awscli_1=()=>{var tmp=require("../../lambda-layer-awscli");return lambda_layer_awscli_1=()=>tmp,tmp},lambda_layer_kubectl_1=()=>{var tmp=require("../../lambda-layer-kubectl");return lambda_layer_kubectl_1=()=>tmp,tmp};class KubectlProvider extends core_1().NestedStack{static getOrCreate(scope,cluster){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_eks_ICluster(cluster)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getOrCreate),error}if(cluster instanceof cluster_1().Cluster)return cluster._attachKubectlResourceScope(scope);if(cluster.kubectlProvider)return cluster.kubectlProvider;const uid=`${core_1().Names.nodeUniqueId(cluster.node)}-KubectlProvider`,stack=core_1().Stack.of(scope);let provider=stack.node.tryFindChild(uid);return provider||(provider=new KubectlProvider(stack,uid,{cluster})),provider}static fromKubectlProviderAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_eks_KubectlProviderAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromKubectlProviderAttributes),error}return new ImportedKubectlProvider(scope,id,attrs)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_eks_KubectlProviderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,KubectlProvider),error}const cluster=props.cluster;if(!cluster.kubectlRole)throw new Error('"kubectlRole" is not defined, cannot issue kubectl commands against this cluster');if(cluster.kubectlPrivateSubnets&&!cluster.kubectlSecurityGroup)throw new Error('"kubectlSecurityGroup" is required if "kubectlSubnets" is specified');const memorySize=cluster.kubectlMemory?cluster.kubectlMemory.toMebibytes():1024,handler=new(kubectl_provider_generated_1()).KubectlFunction(this,"Handler",{timeout:core_1().Duration.minutes(15),description:"onEvent handler for EKS kubectl resource provider",memorySize,environment:{AWS_STS_REGIONAL_ENDPOINTS:"regional",...cluster.kubectlEnvironment},role:cluster.kubectlLambdaRole?cluster.kubectlLambdaRole:void 0,vpc:cluster.kubectlPrivateSubnets?cluster.vpc:void 0,securityGroups:cluster.kubectlPrivateSubnets&&cluster.kubectlSecurityGroup?[cluster.kubectlSecurityGroup]:void 0,vpcSubnets:cluster.kubectlPrivateSubnets?{subnets:cluster.kubectlPrivateSubnets}:void 0});handler.addLayers(props.cluster.awscliLayer??new(lambda_layer_awscli_1()).AwsCliLayer(this,"AwsCliLayer")),handler.addLayers(props.cluster.kubectlLayer??new(lambda_layer_kubectl_1()).KubectlLayer(this,"KubectlLayer")),this.handlerRole=handler.role,this.handlerRole.addToPrincipalPolicy(new(iam()).PolicyStatement({actions:["eks:DescribeCluster"],resources:[cluster.clusterArn]})),handler.isBoundToVpc&&handler.role?.addManagedPolicy(iam().ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaVPCAccessExecutionRole")),this.handlerRole.addManagedPolicy(iam().ManagedPolicy.fromAwsManagedPolicyName("AmazonEC2ContainerRegistryReadOnly"));const hasEcrPublicCondition=new(core_1()).CfnCondition(this.handlerRole.node.scope,"HasEcrPublic",{expression:core_1().Fn.conditionEquals(core_1().Aws.PARTITION,"aws")}),conditionalPolicy=iam().ManagedPolicy.fromManagedPolicyArn(this,"ConditionalPolicyArn",core_1().Fn.conditionIf(hasEcrPublicCondition.logicalId,iam().ManagedPolicy.fromAwsManagedPolicyName("AmazonElasticContainerRegistryPublicReadOnly").managedPolicyArn,core_1().Aws.NO_VALUE).toString());this.handlerRole.addManagedPolicy(iam().ManagedPolicy.fromManagedPolicyArn(this,"conditionalPolicy",conditionalPolicy.managedPolicyArn)),cluster.kubectlRole.grant(this.handlerRole,"sts:AssumeRole");const provider=new(cr()).Provider(this,"Provider",{onEventHandler:handler,vpc:cluster.kubectlPrivateSubnets?cluster.vpc:void 0,vpcSubnets:cluster.kubectlPrivateSubnets?{subnets:cluster.kubectlPrivateSubnets}:void 0,securityGroups:cluster.kubectlPrivateSubnets&&cluster.kubectlSecurityGroup?[cluster.kubectlSecurityGroup]:void 0});this.serviceToken=provider.serviceToken,this.roleArn=cluster.kubectlRole.roleArn}}exports.KubectlProvider=KubectlProvider,_a=JSII_RTTI_SYMBOL_1,KubectlProvider[_a]={fqn:"aws-cdk-lib.aws_eks.KubectlProvider",version:"2.149.0"};class ImportedKubectlProvider extends constructs_1().Construct{constructor(scope,id,props){super(scope,id),this.serviceToken=props.functionArn,this.roleArn=props.kubectlRoleArn,this.handlerRole=props.handlerRole}}