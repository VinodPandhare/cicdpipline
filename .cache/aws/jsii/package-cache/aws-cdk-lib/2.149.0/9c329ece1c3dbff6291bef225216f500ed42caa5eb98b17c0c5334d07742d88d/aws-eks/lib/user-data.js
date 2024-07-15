"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LifecycleLabel=exports.renderBottlerocketUserData=exports.renderAmazonLinuxUserData=void 0;var core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};function renderAmazonLinuxUserData(cluster,autoScalingGroup,options={}){const stack=core_1().Stack.of(autoScalingGroup),asgLogicalId=autoScalingGroup.node.defaultChild.logicalId,extraArgs=new Array;try{const clusterEndpoint=cluster.clusterEndpoint,clusterCertificateAuthorityData=cluster.clusterCertificateAuthorityData;extraArgs.push(`--apiserver-endpoint '${clusterEndpoint}'`),extraArgs.push(`--b64-cluster-ca '${clusterCertificateAuthorityData}'`)}catch{}extraArgs.push(`--use-max-pods ${options.useMaxPods??!0}`),options.awsApiRetryAttempts&&extraArgs.push(`--aws-api-retry-attempts ${options.awsApiRetryAttempts}`),options.enableDockerBridge&&extraArgs.push("--enable-docker-bridge true"),options.dockerConfigJson&&extraArgs.push(`--docker-config-json '${options.dockerConfigJson}'`),options.dnsClusterIp&&extraArgs.push(`--dns-cluster-ip ${options.dnsClusterIp}`),options.additionalArgs&&extraArgs.push(options.additionalArgs);const commandLineSuffix=extraArgs.join(" "),kubeletExtraArgsSuffix=options.kubeletExtraArgs||"",lifecycleLabel=autoScalingGroup.spotPrice?LifecycleLabel.SPOT:LifecycleLabel.ON_DEMAND,withTaints=autoScalingGroup.spotPrice?"--register-with-taints=spotInstance=true:PreferNoSchedule":"",kubeletExtraArgs=`--node-labels lifecycle=${lifecycleLabel} ${withTaints} ${kubeletExtraArgsSuffix}`.trim();return["set -o xtrace",`/etc/eks/bootstrap.sh ${cluster.clusterName} --kubelet-extra-args "${kubeletExtraArgs}" ${commandLineSuffix}`.trim(),`/opt/aws/bin/cfn-signal --exit-code $? --stack ${stack.stackName} --resource ${asgLogicalId} --region ${stack.region}`]}exports.renderAmazonLinuxUserData=renderAmazonLinuxUserData;function renderBottlerocketUserData(cluster){return["[settings.kubernetes]",`api-server="${cluster.clusterEndpoint}"`,`cluster-certificate="${cluster.clusterCertificateAuthorityData}"`,`cluster-name="${cluster.clusterName}"`]}exports.renderBottlerocketUserData=renderBottlerocketUserData;var LifecycleLabel;(function(LifecycleLabel2){LifecycleLabel2.ON_DEMAND="OnDemand",LifecycleLabel2.SPOT="Ec2Spot"})(LifecycleLabel||(exports.LifecycleLabel=LifecycleLabel={}));
