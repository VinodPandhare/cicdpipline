"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrivateSubnet=exports.PublicSubnet=exports.RouterType=exports.Subnet=exports.Vpc=exports.DefaultInstanceTenancy=exports.SubnetType=exports.IpProtocol=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},client_vpn_endpoint_1=()=>{var tmp=require("./client-vpn-endpoint");return client_vpn_endpoint_1=()=>tmp,tmp},ec2_generated_1=()=>{var tmp=require("./ec2.generated");return ec2_generated_1=()=>tmp,tmp},ip_addresses_1=()=>{var tmp=require("./ip-addresses");return ip_addresses_1=()=>tmp,tmp},nat_1=()=>{var tmp=require("./nat");return nat_1=()=>tmp,tmp},network_acl_1=()=>{var tmp=require("./network-acl");return network_acl_1=()=>tmp,tmp},subnet_1=()=>{var tmp=require("./subnet");return subnet_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},vpc_endpoint_1=()=>{var tmp=require("./vpc-endpoint");return vpc_endpoint_1=()=>tmp,tmp},vpc_flow_logs_1=()=>{var tmp=require("./vpc-flow-logs");return vpc_flow_logs_1=()=>tmp,tmp},vpn_1=()=>{var tmp=require("./vpn");return vpn_1=()=>tmp,tmp},cxschema=()=>{var tmp=require("../../cloud-assembly-schema");return cxschema=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},restrict_default_sg_provider_generated_1=()=>{var tmp=require("../../custom-resource-handlers/dist/aws-ec2/restrict-default-sg-provider.generated");return restrict_default_sg_provider_generated_1=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../cx-api");return cxapi=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};const VPC_SUBNET_SYMBOL=Symbol.for("@aws-cdk/aws-ec2.VpcSubnet"),FAKE_AZ_NAME="fake-az";var IpProtocol;(function(IpProtocol2){IpProtocol2.IPV4_ONLY="Ipv4_Only",IpProtocol2.DUAL_STACK="Dual_Stack"})(IpProtocol||(exports.IpProtocol=IpProtocol={}));var SubnetType;(function(SubnetType2){SubnetType2.PRIVATE_ISOLATED="Isolated",SubnetType2.ISOLATED="Deprecated_Isolated",SubnetType2.PRIVATE_WITH_EGRESS="Private",SubnetType2.PRIVATE_WITH_NAT="Deprecated_Private_NAT",SubnetType2.PRIVATE="Deprecated_Private",SubnetType2.PUBLIC="Public"})(SubnetType||(exports.SubnetType=SubnetType={}));class VpcBase extends core_1().Resource{constructor(){super(...arguments),this.natDependencies=new Array,this.incompleteSubnetDefinition=!1}selectSubnets(selection={}){const subnets=this.selectSubnetObjects(selection),pubs=new Set(this.publicSubnets);return{subnetIds:subnets.map(s=>s.subnetId),get availabilityZones(){return subnets.map(s=>s.availabilityZone)},internetConnectivityEstablished:tap(new CompositeDependable,d=>subnets.forEach(s=>d.add(s.internetConnectivityEstablished))),subnets,hasPublic:subnets.some(s=>pubs.has(s)),isPendingLookup:this.incompleteSubnetDefinition}}enableVpnGateway(options){if(this.vpnGatewayId)throw new Error("The VPN Gateway has already been enabled.");const vpnGateway=new(vpn_1()).VpnGateway(this,"VpnGateway",{amazonSideAsn:options.amazonSideAsn,type:vpn_1().VpnConnectionType.IPSEC_1});this._vpnGatewayId=vpnGateway.gatewayId;const attachment=new(ec2_generated_1()).CfnVPCGatewayAttachment(this,"VPCVPNGW",{vpcId:this.vpcId,vpnGatewayId:this._vpnGatewayId}),vpnRoutePropagation=options.vpnRoutePropagation??[{}],routeTableIds=(0,util_1().allRouteTableIds)((0,util_1().flatten)(vpnRoutePropagation.map(s=>this.selectSubnets(s).subnets)));routeTableIds.length===0&&core_1().Annotations.of(this).addError(`enableVpnGateway: no subnets matching selection: '${JSON.stringify(vpnRoutePropagation)}'. Select other subnets to add routes to.`),new(ec2_generated_1()).CfnVPNGatewayRoutePropagation(this,"RoutePropagation",{routeTableIds,vpnGatewayId:this._vpnGatewayId}).node.addDependency(attachment)}addVpnConnection(id,options){return new(vpn_1()).VpnConnection(this,id,{vpc:this,...options})}addClientVpnEndpoint(id,options){return new(client_vpn_endpoint_1()).ClientVpnEndpoint(this,id,{...options,vpc:this})}addInterfaceEndpoint(id,options){return new(vpc_endpoint_1()).InterfaceVpcEndpoint(this,id,{vpc:this,...options})}addGatewayEndpoint(id,options){return new(vpc_endpoint_1()).GatewayVpcEndpoint(this,id,{vpc:this,...options})}addFlowLog(id,options){return new(vpc_flow_logs_1()).FlowLog(this,id,{resourceType:vpc_flow_logs_1().FlowLogResourceType.fromVpc(this),...options})}get vpnGatewayId(){return this._vpnGatewayId}selectSubnetObjects(selection={}){if(selection=this.reifySelectionDefaults(selection),selection.subnets!==void 0)return selection.subnets;let subnets;if(selection.subnetGroupName!==void 0)subnets=this.selectSubnetObjectsByName(selection.subnetGroupName);else{const type=selection.subnetType||SubnetType.PRIVATE_WITH_EGRESS;subnets=this.selectSubnetObjectsByType(type)}return subnets=this.applySubnetFilters(subnets,selection.subnetFilters??[]),subnets}applySubnetFilters(subnets,filters){let filtered=subnets;for(const filter of filters)filtered=filter.selectSubnets(filtered);return filtered}selectSubnetObjectsByName(groupName){const allSubnets=[...this.publicSubnets,...this.privateSubnets,...this.isolatedSubnets],subnets=allSubnets.filter(s=>(0,util_1().subnetGroupNameFromConstructId)(s)===groupName);if(subnets.length===0&&!this.incompleteSubnetDefinition){const names=Array.from(new Set(allSubnets.map(util_1().subnetGroupNameFromConstructId)));throw new Error(`There are no subnet groups with name '${groupName}' in this VPC. Available names: ${names}`)}return subnets}selectSubnetObjectsByType(subnetType){const allSubnets={[SubnetType.PRIVATE_ISOLATED]:this.isolatedSubnets,[SubnetType.ISOLATED]:this.isolatedSubnets,[SubnetType.PRIVATE_WITH_NAT]:this.privateSubnets,[SubnetType.PRIVATE_WITH_EGRESS]:this.privateSubnets,[SubnetType.PRIVATE]:this.privateSubnets,[SubnetType.PUBLIC]:this.publicSubnets},subnets=allSubnets[subnetType];if(subnets.length===0&&!this.incompleteSubnetDefinition){const availableTypes=Object.entries(allSubnets).filter(([_,subs])=>subs.length>0).map(([typeName,_])=>typeName);throw new Error(`There are no '${subnetType}' subnet groups in this VPC. Available types: ${availableTypes}`)}return subnets}reifySelectionDefaults(placement){if(placement.subnetName!==void 0){if(placement.subnetGroupName!==void 0)throw new Error("Please use only 'subnetGroupName' ('subnetName' is deprecated and has the same behavior)");core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-ec2:subnetNameDeprecated","Usage of 'subnetName' in SubnetSelection is deprecated, use 'subnetGroupName' instead"),placement={...placement,subnetGroupName:placement.subnetName}}const providedSelections=["subnets","subnetType","subnetGroupName"].filter(key=>placement[key]!==void 0);if(providedSelections.length>1)throw new Error(`Only one of '${providedSelections}' can be supplied to subnet selection.`);if(placement.subnetType===void 0&&placement.subnetGroupName===void 0&&placement.subnets===void 0){let subnetType=this.privateSubnets.length?SubnetType.PRIVATE_WITH_EGRESS:this.isolatedSubnets.length?SubnetType.PRIVATE_ISOLATED:SubnetType.PUBLIC;placement={...placement,subnetType}}let subnetFilters=placement.subnetFilters??[];placement.availabilityZones!==void 0&&subnetFilters.push(subnet_1().SubnetFilter.availabilityZones(placement.availabilityZones)),placement.onePerAz&&subnetFilters.push(subnet_1().SubnetFilter.onePerAz()),placement={...placement,subnetFilters,availabilityZones:void 0,onePerAz:void 0};const{availabilityZones,onePerAz,...rest}=placement;return rest}}const NAME_TAG="Name";var DefaultInstanceTenancy;(function(DefaultInstanceTenancy2){DefaultInstanceTenancy2.DEFAULT="default",DefaultInstanceTenancy2.DEDICATED="dedicated"})(DefaultInstanceTenancy||(exports.DefaultInstanceTenancy=DefaultInstanceTenancy={}));class Vpc extends VpcBase{static fromVpcAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_VpcAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromVpcAttributes),error}return new ImportedVpc(scope,id,attrs,!1)}static fromLookup(scope,id,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_VpcLookupOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromLookup),error}if(core_1().Token.isUnresolved(options.vpcId)||core_1().Token.isUnresolved(options.vpcName)||Object.values(options.tags||{}).some(core_1().Token.isUnresolved)||Object.keys(options.tags||{}).some(core_1().Token.isUnresolved))throw new Error("All arguments to Vpc.fromLookup() must be concrete (no Tokens)");const filter=makeTagFilter(options.tags);options.vpcId&&(filter["vpc-id"]=options.vpcId),options.vpcName&&(filter["tag:Name"]=options.vpcName),options.ownerAccountId&&(filter["owner-id"]=options.ownerAccountId),options.isDefault!==void 0&&(filter.isDefault=options.isDefault?"true":"false");const overrides={};options.region&&(overrides.region=options.region);const attributes=core_1().ContextProvider.getValue(scope,{provider:cxschema().ContextProvider.VPC_PROVIDER,props:{...overrides,filter,returnAsymmetricSubnets:!0,returnVpnGateways:options.returnVpnGateways,subnetGroupNameTag:options.subnetGroupNameTag},dummyValue:void 0}).value;return new LookedUpVpc(scope,id,attributes??DUMMY_VPC_PROPS,attributes===void 0);function makeTagFilter(tags){const result={};for(const[name,value]of Object.entries(tags||{}))result[`tag:${name}`]=value;return result}}constructor(scope,id,props={}){super(scope,id),this.publicSubnets=[],this.privateSubnets=[],this.isolatedSubnets=[],this.subnetConfiguration=[],this._internetConnectivityEstablished=new(constructs_1()).DependencyGroup;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_VpcProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Vpc),error}const stack=core_1().Stack.of(this);if(props.enableDnsHostnames&&!props.enableDnsSupport)throw new Error("To use DNS Hostnames, DNS Support must be enabled, however, it was explicitly disabled.");if(props.availabilityZones&&props.maxAzs)throw new Error("Vpc supports 'availabilityZones' or 'maxAzs', but not both.");const cidrBlock=ifUndefined(props.cidr,Vpc.DEFAULT_CIDR_RANGE);if(core_1().Token.isUnresolved(cidrBlock))throw new Error("'cidr' property must be a concrete CIDR string, got a Token (we need to parse it for automatic subdivision)");if(props.ipAddresses&&props.cidr)throw new Error("supply at most one of ipAddresses or cidr");const ipProtocol=props.ipProtocol??IpProtocol.IPV4_ONLY;this.useIpv4=ipProtocol===IpProtocol.IPV4_ONLY||ipProtocol===IpProtocol.DUAL_STACK,this.useIpv6=ipProtocol===IpProtocol.DUAL_STACK;const ipv6OnlyProps=["ipv6Addresses"];if(!this.useIpv6){for(const prop of ipv6OnlyProps)if(props[prop]!==void 0)throw new Error(`${prop} can only be set if IPv6 is enabled. Set ipProtocol to DUAL_STACK`)}this.ipAddresses=props.ipAddresses??ip_addresses_1().IpAddresses.cidr(cidrBlock),this.dnsHostnamesEnabled=props.enableDnsHostnames==null?!0:props.enableDnsHostnames,this.dnsSupportEnabled=props.enableDnsSupport==null?!0:props.enableDnsSupport;const instanceTenancy=props.defaultInstanceTenancy||"default";this.internetConnectivityEstablished=this._internetConnectivityEstablished;const vpcIpAddressOptions=this.ipAddresses.allocateVpcCidr();if(this.resource=new(ec2_generated_1()).CfnVPC(this,"Resource",{cidrBlock:vpcIpAddressOptions.cidrBlock,ipv4IpamPoolId:vpcIpAddressOptions.ipv4IpamPoolId,ipv4NetmaskLength:vpcIpAddressOptions.ipv4NetmaskLength,enableDnsHostnames:this.dnsHostnamesEnabled,enableDnsSupport:this.dnsSupportEnabled,instanceTenancy}),this.vpcDefaultNetworkAcl=this.resource.attrDefaultNetworkAcl,this.vpcCidrBlockAssociations=this.resource.attrCidrBlockAssociations,this.vpcCidrBlock=this.resource.attrCidrBlock,this.vpcDefaultSecurityGroup=this.resource.attrDefaultSecurityGroup,this.vpcIpv6CidrBlocks=this.resource.attrIpv6CidrBlocks,core_1().Tags.of(this).add(NAME_TAG,props.vpcName||this.node.path),props.availabilityZones){const resolvedStackAzs=this.resolveStackAvailabilityZones(stack.availabilityZones);if(!(resolvedStackAzs.length===0||props.availabilityZones.every(az=>core_1().Token.isUnresolved(az)||resolvedStackAzs.includes(az))))throw new Error(`Given VPC 'availabilityZones' ${props.availabilityZones} must be a subset of the stack's availability zones ${resolvedStackAzs}`);this.availabilityZones=props.availabilityZones}else{const maxAZs=props.maxAzs??3;this.availabilityZones=stack.availabilityZones.slice(0,maxAZs)}for(let i=0;props.reservedAzs&&i<props.reservedAzs;i++)this.availabilityZones.push(FAKE_AZ_NAME);this.vpcId=this.resource.ref,this.vpcArn=core_1().Arn.format({service:"ec2",resource:"vpc",resourceName:this.vpcId},stack);const defaultSubnet=props.natGateways===0?Vpc.DEFAULT_SUBNETS_NO_NAT:Vpc.DEFAULT_SUBNETS;this.subnetConfiguration=ifUndefined(props.subnetConfiguration,defaultSubnet);const natGatewayPlacement=props.natGatewaySubnets||{subnetType:SubnetType.PUBLIC},natGatewayCount=determineNatGatewayCount(props.natGateways,this.subnetConfiguration,this.availabilityZones.length);this.useIpv6&&(this.ipv6Addresses=props.ipv6Addresses??ip_addresses_1().Ipv6Addresses.amazonProvided(),this.ipv6CidrBlock=this.ipv6Addresses.allocateVpcIpv6Cidr({scope:this,vpcId:this.vpcId}),this.ipv6SelectedCidr=core_1().Fn.select(0,this.resource.attrIpv6CidrBlocks)),this.createSubnets();const createInternetGateway=props.createInternetGateway??!0;if(this.subnetConfiguration.filter(subnet=>subnet.subnetType!==SubnetType.PRIVATE_ISOLATED&&subnet.subnetType!==SubnetType.ISOLATED&&!subnet.reserved).length>0&&createInternetGateway){const igw=new(ec2_generated_1()).CfnInternetGateway(this,"IGW",{});this.internetGatewayId=igw.ref,this._internetConnectivityEstablished.add(igw);const att=new(ec2_generated_1()).CfnVPCGatewayAttachment(this,"VPCGW",{internetGatewayId:igw.ref,vpcId:this.resource.ref});if(this.publicSubnets.forEach(publicSubnet=>{this.useIpv4&&publicSubnet.addDefaultInternetRoute(igw.ref,att),this.useIpv6&&publicSubnet.addIpv6DefaultInternetRoute(igw.ref)}),natGatewayCount>0){const provider=props.natGatewayProvider||nat_1().NatProvider.gateway();this.createNatGateways(provider,natGatewayCount,natGatewayPlacement)}}if(this.useIpv6&&this.privateSubnets){const eigw=new(ec2_generated_1()).CfnEgressOnlyInternetGateway(this,"EIGW6",{vpcId:this.vpcId});this.privateSubnets.forEach(privateSubnet=>{privateSubnet.addIpv6DefaultEgressOnlyInternetRoute(eigw.ref)})}if(props.vpnGateway&&this.publicSubnets.length===0&&this.privateSubnets.length===0&&this.isolatedSubnets.length===0)throw new Error("Can not enable the VPN gateway while the VPC has no subnets at all");if((props.vpnConnections||props.vpnGatewayAsn)&&props.vpnGateway===!1)throw new Error("Cannot specify `vpnConnections` or `vpnGatewayAsn` when `vpnGateway` is set to false.");if(props.vpnGateway||props.vpnConnections||props.vpnGatewayAsn){this.enableVpnGateway({amazonSideAsn:props.vpnGatewayAsn,type:vpn_1().VpnConnectionType.IPSEC_1,vpnRoutePropagation:props.vpnRoutePropagation});const vpnConnections=props.vpnConnections||{};for(const[connectionId,connection]of Object.entries(vpnConnections))this.addVpnConnection(connectionId,connection)}if(props.gatewayEndpoints){const gatewayEndpoints=props.gatewayEndpoints||{};for(const[endpointId,endpoint]of Object.entries(gatewayEndpoints))this.addGatewayEndpoint(endpointId,endpoint)}if(props.flowLogs){const flowLogs=props.flowLogs||{};for(const[flowLogId,flowLog]of Object.entries(flowLogs))this.addFlowLog(flowLogId,flowLog)}(core_1().FeatureFlags.of(this).isEnabled(cx_api_1().EC2_RESTRICT_DEFAULT_SECURITY_GROUP)&&props.restrictDefaultSecurityGroup!==!1||props.restrictDefaultSecurityGroup)&&this.restrictDefaultSecurityGroup()}addS3Endpoint(id,subnets){return new(vpc_endpoint_1()).GatewayVpcEndpoint(this,id,{service:vpc_endpoint_1().GatewayVpcEndpointAwsService.S3,vpc:this,subnets})}addDynamoDbEndpoint(id,subnets){return new(vpc_endpoint_1()).GatewayVpcEndpoint(this,id,{service:vpc_endpoint_1().GatewayVpcEndpointAwsService.DYNAMODB,vpc:this,subnets})}createNatGateways(provider,natCount,placement){const natSubnets=this.selectSubnetObjects(placement);for(const sub of natSubnets)if(this.publicSubnets.indexOf(sub)===-1)throw new Error(`natGatewayPlacement ${placement} contains non public subnet ${sub}`);provider.configureNat({vpc:this,natSubnets:natSubnets.slice(0,natCount),privateSubnets:this.privateSubnets})}createSubnets(){const requestedSubnets=[];this.subnetConfiguration.forEach(configuration=>this.availabilityZones.forEach((az,index)=>{requestedSubnets.push({availabilityZone:az,subnetConstructId:(0,util_1().subnetId)(configuration.name,index),configuration})}));let{allocatedSubnets}=this.ipAddresses.allocateSubnetsCidr({vpcCidr:this.vpcCidrBlock,requestedSubnets});if(allocatedSubnets.length!=requestedSubnets.length)throw new Error("Incomplete Subnet Allocation; response array dose not equal input array");if(this.useIpv6){if(this.ipv6SelectedCidr===void 0)throw new Error("No IPv6 CIDR block associated with this VPC could be found");if(this.ipv6Addresses===void 0)throw new Error("No IPv6 IpAddresses were found");const subnetIpv6Cidrs=this.ipv6Addresses.createIpv6CidrBlocks({ipv6SelectedCidr:this.ipv6SelectedCidr,subnetCount:allocatedSubnets.length});allocatedSubnets=this.ipv6Addresses.allocateSubnetsIpv6Cidr({allocatedSubnets,ipv6Cidrs:subnetIpv6Cidrs}).allocatedSubnets}this.createSubnetResources(requestedSubnets,allocatedSubnets),this.useIpv6&&(this.publicSubnets.forEach(publicSubnet=>{this.ipv6CidrBlock!==void 0&&publicSubnet.node.addDependency(this.ipv6CidrBlock)}),this.privateSubnets.forEach(privateSubnet=>{this.ipv6CidrBlock!==void 0&&privateSubnet.node.addDependency(this.ipv6CidrBlock)}),this.isolatedSubnets.forEach(isolatedSubnet=>{this.ipv6CidrBlock!==void 0&&isolatedSubnet.node.addDependency(this.ipv6CidrBlock)}))}calculateMapPublicIpOnLaunch(subnetConfig){if(subnetConfig.subnetType===SubnetType.PUBLIC)return subnetConfig.mapPublicIpOnLaunch!==void 0?subnetConfig.mapPublicIpOnLaunch:!this.useIpv6;if(subnetConfig.mapPublicIpOnLaunch!==void 0)throw new Error(`${subnetConfig.subnetType} subnet cannot include mapPublicIpOnLaunch parameter`);return!1}createSubnetResources(requestedSubnets,allocatedSubnets){allocatedSubnets.forEach((allocated,i)=>{const{configuration:subnetConfig,subnetConstructId,availabilityZone}=requestedSubnets[i];if(subnetConfig.reserved===!0||availabilityZone===FAKE_AZ_NAME)return;const ipv6OnlyProps=["ipv6AssignAddressOnCreation"];if(!this.useIpv6){for(const prop of ipv6OnlyProps)if(subnetConfig[prop]!==void 0)throw new Error(`${prop} can only be set if IPv6 is enabled. Set ipProtocol to DUAL_STACK`)}const subnetProps={availabilityZone,vpcId:this.vpcId,cidrBlock:allocated.cidr,mapPublicIpOnLaunch:this.calculateMapPublicIpOnLaunch(subnetConfig),ipv6CidrBlock:allocated.ipv6Cidr,assignIpv6AddressOnCreation:this.useIpv6?subnetConfig.ipv6AssignAddressOnCreation??!0:void 0};let subnet;switch(subnetConfig.subnetType){case SubnetType.PUBLIC:const publicSubnet=new PublicSubnet(this,subnetConstructId,subnetProps);this.publicSubnets.push(publicSubnet),subnet=publicSubnet;break;case SubnetType.PRIVATE_WITH_EGRESS:case SubnetType.PRIVATE_WITH_NAT:case SubnetType.PRIVATE:const privateSubnet=new PrivateSubnet(this,subnetConstructId,subnetProps);this.privateSubnets.push(privateSubnet),subnet=privateSubnet;break;case SubnetType.PRIVATE_ISOLATED:case SubnetType.ISOLATED:const isolatedSubnet=new PrivateSubnet(this,subnetConstructId,subnetProps);this.isolatedSubnets.push(isolatedSubnet),subnet=isolatedSubnet;break;default:throw new Error(`Unrecognized subnet type: ${subnetConfig.subnetType}`)}const includeResourceTypes=[ec2_generated_1().CfnSubnet.CFN_RESOURCE_TYPE_NAME];core_1().Tags.of(subnet).add(SUBNETNAME_TAG,subnetConfig.name,{includeResourceTypes}),core_1().Tags.of(subnet).add(SUBNETTYPE_TAG,subnetTypeTagValue(subnetConfig.subnetType),{includeResourceTypes})})}restrictDefaultSecurityGroup(){const id="Custom::VpcRestrictDefaultSG",provider=restrict_default_sg_provider_generated_1().RestrictDefaultSgProvider.getOrCreateProvider(this,id,{description:"Lambda function for removing all inbound/outbound rules from the VPC default security group"});provider.addToRolePolicy({Effect:"Allow",Action:["ec2:AuthorizeSecurityGroupIngress","ec2:AuthorizeSecurityGroupEgress","ec2:RevokeSecurityGroupIngress","ec2:RevokeSecurityGroupEgress"],Resource:[core_1().Stack.of(this).formatArn({resource:"security-group",service:"ec2",resourceName:this.vpcDefaultSecurityGroup})]}),new(core_1()).CustomResource(this,"RestrictDefaultSecurityGroupCustomResource",{resourceType:id,serviceToken:provider.serviceToken,properties:{DefaultSecurityGroupId:this.vpcDefaultSecurityGroup,Account:core_1().Stack.of(this).account}})}resolveStackAvailabilityZones(stackAvailabilityZones){const dummyValues=["dummy1a","dummy1b","dummy1c"];return stackAvailabilityZones.filter(az=>!core_1().Token.isUnresolved(az)&&!dummyValues.includes(az))}}exports.Vpc=Vpc,_a=JSII_RTTI_SYMBOL_1,Vpc[_a]={fqn:"aws-cdk-lib.aws_ec2.Vpc",version:"2.149.0"},Vpc.DEFAULT_CIDR_RANGE="10.0.0.0/16",Vpc.DEFAULT_SUBNETS=[{subnetType:SubnetType.PUBLIC,name:(0,util_1().defaultSubnetName)(SubnetType.PUBLIC)},{subnetType:SubnetType.PRIVATE_WITH_EGRESS,name:(0,util_1().defaultSubnetName)(SubnetType.PRIVATE_WITH_EGRESS)}],Vpc.DEFAULT_SUBNETS_NO_NAT=[{subnetType:SubnetType.PUBLIC,name:(0,util_1().defaultSubnetName)(SubnetType.PUBLIC)},{subnetType:SubnetType.PRIVATE_ISOLATED,name:(0,util_1().defaultSubnetName)(SubnetType.PRIVATE_ISOLATED)}];const SUBNETTYPE_TAG="aws-cdk:subnet-type",SUBNETNAME_TAG="aws-cdk:subnet-name";function subnetTypeTagValue(type){switch(type){case SubnetType.PUBLIC:return"Public";case SubnetType.PRIVATE_WITH_EGRESS:case SubnetType.PRIVATE_WITH_NAT:case SubnetType.PRIVATE:return"Private";case SubnetType.PRIVATE_ISOLATED:case SubnetType.ISOLATED:return"Isolated"}}class Subnet extends core_1().Resource{static isVpcSubnet(x){return VPC_SUBNET_SYMBOL in x}static fromSubnetAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_SubnetAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromSubnetAttributes),error}return new ImportedSubnet(scope,id,attrs)}static fromSubnetId(scope,id,subnetId){return this.fromSubnetAttributes(scope,id,{subnetId})}constructor(scope,id,props){super(scope,id),this.dependencyElements=[],this._internetConnectivityEstablished=new(constructs_1()).DependencyGroup;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_SubnetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Subnet),error}Object.defineProperty(this,VPC_SUBNET_SYMBOL,{value:!0}),core_1().Tags.of(this).add(NAME_TAG,this.node.path),this.availabilityZone=props.availabilityZone,this.ipv4CidrBlock=props.cidrBlock;const subnet=new(ec2_generated_1()).CfnSubnet(this,"Subnet",{vpcId:props.vpcId,cidrBlock:props.cidrBlock,availabilityZone:props.availabilityZone,mapPublicIpOnLaunch:props.mapPublicIpOnLaunch,ipv6CidrBlock:props.ipv6CidrBlock,assignIpv6AddressOnCreation:props.assignIpv6AddressOnCreation});this.subnetId=subnet.ref,this.subnetVpcId=subnet.attrVpcId,this.subnetAvailabilityZone=subnet.attrAvailabilityZone,this.subnetIpv6CidrBlocks=subnet.attrIpv6CidrBlocks,this.subnetOutpostArn=subnet.attrOutpostArn,this._networkAcl=network_acl_1().NetworkAcl.fromNetworkAclId(this,"Acl",subnet.attrNetworkAclAssociationId),this.subnetNetworkAclAssociationId=core_1().Lazy.string({produce:()=>this._networkAcl.networkAclId}),this.node.defaultChild=subnet;const table=new(ec2_generated_1()).CfnRouteTable(this,"RouteTable",{vpcId:props.vpcId});this.routeTable={routeTableId:table.ref};const routeAssoc=new(ec2_generated_1()).CfnSubnetRouteTableAssociation(this,"RouteTableAssociation",{subnetId:this.subnetId,routeTableId:table.ref});this._internetConnectivityEstablished.add(routeAssoc),this.internetConnectivityEstablished=this._internetConnectivityEstablished}addDefaultInternetRoute(gatewayId,gatewayAttachment){const route=new(ec2_generated_1()).CfnRoute(this,"DefaultRoute",{routeTableId:this.routeTable.routeTableId,destinationCidrBlock:"0.0.0.0/0",gatewayId});route.node.addDependency(gatewayAttachment),this._internetConnectivityEstablished.add(route)}addIpv6DefaultInternetRoute(gatewayId){this.addRoute("DefaultRoute6",{routerType:RouterType.GATEWAY,routerId:gatewayId,destinationIpv6CidrBlock:"::/0",enablesInternetConnectivity:!0})}addIpv6DefaultEgressOnlyInternetRoute(gatewayId){this.addRoute("DefaultRoute6",{routerType:RouterType.EGRESS_ONLY_INTERNET_GATEWAY,routerId:gatewayId,destinationIpv6CidrBlock:"::/0",enablesInternetConnectivity:!0})}get networkAcl(){return this._networkAcl}addDefaultNatRoute(natGatewayId){this.addRoute("DefaultRoute",{routerType:RouterType.NAT_GATEWAY,routerId:natGatewayId,enablesInternetConnectivity:!0})}addIpv6Nat64Route(natGatewayId){this.addRoute("Nat64",{routerType:RouterType.NAT_GATEWAY,routerId:natGatewayId,enablesInternetConnectivity:!0,destinationIpv6CidrBlock:"64:ff9b::/96"})}addRoute(id,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_AddRouteOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addRoute),error}if(options.destinationCidrBlock&&options.destinationIpv6CidrBlock)throw new Error("Cannot specify both 'destinationCidrBlock' and 'destinationIpv6CidrBlock'");const route=new(ec2_generated_1()).CfnRoute(this,id,{routeTableId:this.routeTable.routeTableId,destinationCidrBlock:options.destinationCidrBlock||(options.destinationIpv6CidrBlock===void 0?"0.0.0.0/0":void 0),destinationIpv6CidrBlock:options.destinationIpv6CidrBlock,[routerTypeToPropName(options.routerType)]:options.routerId});options.enablesInternetConnectivity&&this._internetConnectivityEstablished.add(route)}associateNetworkAcl(id,networkAcl){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_INetworkAcl(networkAcl)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.associateNetworkAcl),error}this._networkAcl=networkAcl;const scope=networkAcl instanceof constructs_1().Construct?networkAcl:this,other=networkAcl instanceof constructs_1().Construct?this:networkAcl;new(network_acl_1()).SubnetNetworkAclAssociation(scope,id+core_1().Names.nodeUniqueId(other.node),{networkAcl,subnet:this})}}exports.Subnet=Subnet,_b=JSII_RTTI_SYMBOL_1,Subnet[_b]={fqn:"aws-cdk-lib.aws_ec2.Subnet",version:"2.149.0"};var RouterType;(function(RouterType2){RouterType2.CARRIER_GATEWAY="CarrierGateway",RouterType2.EGRESS_ONLY_INTERNET_GATEWAY="EgressOnlyInternetGateway",RouterType2.GATEWAY="Gateway",RouterType2.INSTANCE="Instance",RouterType2.LOCAL_GATEWAY="LocalGateway",RouterType2.NAT_GATEWAY="NatGateway",RouterType2.NETWORK_INTERFACE="NetworkInterface",RouterType2.TRANSIT_GATEWAY="TransitGateway",RouterType2.VPC_PEERING_CONNECTION="VpcPeeringConnection",RouterType2.VPC_ENDPOINT="VpcEndpoint"})(RouterType||(exports.RouterType=RouterType={}));function routerTypeToPropName(routerType){return{[RouterType.CARRIER_GATEWAY]:"carrierGatewayId",[RouterType.EGRESS_ONLY_INTERNET_GATEWAY]:"egressOnlyInternetGatewayId",[RouterType.GATEWAY]:"gatewayId",[RouterType.INSTANCE]:"instanceId",[RouterType.LOCAL_GATEWAY]:"localGatewayId",[RouterType.NAT_GATEWAY]:"natGatewayId",[RouterType.NETWORK_INTERFACE]:"networkInterfaceId",[RouterType.TRANSIT_GATEWAY]:"transitGatewayId",[RouterType.VPC_PEERING_CONNECTION]:"vpcPeeringConnectionId",[RouterType.VPC_ENDPOINT]:"vpcEndpointId"}[routerType]}class PublicSubnet extends Subnet{static fromPublicSubnetAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_PublicSubnetAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromPublicSubnetAttributes),error}return new ImportedSubnet(scope,id,attrs)}constructor(scope,id,props){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_PublicSubnetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,PublicSubnet),error}}addNatGateway(eipAllocationId){const ngw=new(ec2_generated_1()).CfnNatGateway(this,"NATGateway",{subnetId:this.subnetId,allocationId:eipAllocationId??new(ec2_generated_1()).CfnEIP(this,"EIP",{domain:"vpc"}).attrAllocationId});return ngw.node.addDependency(this.internetConnectivityEstablished),ngw}}exports.PublicSubnet=PublicSubnet,_c=JSII_RTTI_SYMBOL_1,PublicSubnet[_c]={fqn:"aws-cdk-lib.aws_ec2.PublicSubnet",version:"2.149.0"};class PrivateSubnet extends Subnet{static fromPrivateSubnetAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_PrivateSubnetAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromPrivateSubnetAttributes),error}return new ImportedSubnet(scope,id,attrs)}constructor(scope,id,props){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_PrivateSubnetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,PrivateSubnet),error}}}exports.PrivateSubnet=PrivateSubnet,_d=JSII_RTTI_SYMBOL_1,PrivateSubnet[_d]={fqn:"aws-cdk-lib.aws_ec2.PrivateSubnet",version:"2.149.0"};function ifUndefined(value,defaultValue){return value??defaultValue}class ImportedVpc extends VpcBase{constructor(scope,id,props,isIncomplete){super(scope,id,{region:props.region}),this.internetConnectivityEstablished=new(constructs_1()).DependencyGroup,this.vpcId=props.vpcId,this.vpcArn=core_1().Arn.format({service:"ec2",resource:"vpc",resourceName:this.vpcId},core_1().Stack.of(this)),this.cidr=props.vpcCidrBlock,this.availabilityZones=props.availabilityZones,this._vpnGatewayId=props.vpnGatewayId,this.incompleteSubnetDefinition=isIncomplete;for(const k of Object.keys(props))Array.isArray(props[k])&&core_1().Token.isUnresolved(props[k])&&core_1().Annotations.of(this).addWarningV2(`@aws-cdk/aws-ec2:vpcAttributeIsListToken${k}`,`fromVpcAttributes: '${k}' is a list token: the imported VPC will not work with constructs that require a list of subnets at synthesis time. Use 'Vpc.fromLookup()' or 'Fn.importListValue' instead.`);const pub=new(util_1()).ImportSubnetGroup(props.publicSubnetIds,props.publicSubnetNames,props.publicSubnetRouteTableIds,props.publicSubnetIpv4CidrBlocks,SubnetType.PUBLIC,this.availabilityZones,"publicSubnetIds","publicSubnetNames","publicSubnetRouteTableIds","publicSubnetIpv4CidrBlocks"),priv=new(util_1()).ImportSubnetGroup(props.privateSubnetIds,props.privateSubnetNames,props.privateSubnetRouteTableIds,props.privateSubnetIpv4CidrBlocks,SubnetType.PRIVATE_WITH_EGRESS,this.availabilityZones,"privateSubnetIds","privateSubnetNames","privateSubnetRouteTableIds","privateSubnetIpv4CidrBlocks"),iso=new(util_1()).ImportSubnetGroup(props.isolatedSubnetIds,props.isolatedSubnetNames,props.isolatedSubnetRouteTableIds,props.isolatedSubnetIpv4CidrBlocks,SubnetType.PRIVATE_ISOLATED,this.availabilityZones,"isolatedSubnetIds","isolatedSubnetNames","isolatedSubnetRouteTableIds","isolatedSubnetIpv4CidrBlocks");this.publicSubnets=pub.import(this),this.privateSubnets=priv.import(this),this.isolatedSubnets=iso.import(this)}get vpcCidrBlock(){if(this.cidr===void 0)throw new Error("Cannot perform this operation: 'vpcCidrBlock' was not supplied when creating this VPC");return this.cidr}}class LookedUpVpc extends VpcBase{constructor(scope,id,props,isIncomplete){super(scope,id,{region:props.region,account:props.ownerAccountId}),this.internetConnectivityEstablished=new(constructs_1()).DependencyGroup,this.vpcId=props.vpcId,this.vpcArn=core_1().Arn.format({service:"ec2",resource:"vpc",resourceName:this.vpcId,region:this.env.region,account:this.env.account},core_1().Stack.of(this)),this.cidr=props.vpcCidrBlock,this._vpnGatewayId=props.vpnGatewayId,this.incompleteSubnetDefinition=isIncomplete;const subnetGroups=props.subnetGroups||[],availabilityZones=Array.from(new Set(flatMap(subnetGroups,subnetGroup=>subnetGroup.subnets.map(subnet=>subnet.availabilityZone))));availabilityZones.sort((az1,az2)=>az1.localeCompare(az2)),this.availabilityZones=availabilityZones,this.publicSubnets=this.extractSubnetsOfType(subnetGroups,cxapi().VpcSubnetGroupType.PUBLIC),this.privateSubnets=this.extractSubnetsOfType(subnetGroups,cxapi().VpcSubnetGroupType.PRIVATE),this.isolatedSubnets=this.extractSubnetsOfType(subnetGroups,cxapi().VpcSubnetGroupType.ISOLATED)}get vpcCidrBlock(){if(this.cidr===void 0)throw new Error("Cannot perform this operation: 'vpcCidrBlock' was not found when looking up this VPC. Use a newer version of the CDK CLI and clear the old context value.");return this.cidr}extractSubnetsOfType(subnetGroups,subnetGroupType){return flatMap(subnetGroups.filter(subnetGroup=>subnetGroup.type===subnetGroupType),subnetGroup=>this.subnetGroupToSubnets(subnetGroup))}subnetGroupToSubnets(subnetGroup){const ret=new Array;for(let i=0;i<subnetGroup.subnets.length;i++){const vpcSubnet=subnetGroup.subnets[i];ret.push(Subnet.fromSubnetAttributes(this,`${subnetGroup.name}Subnet${i+1}`,{availabilityZone:vpcSubnet.availabilityZone,subnetId:vpcSubnet.subnetId,routeTableId:vpcSubnet.routeTableId,ipv4CidrBlock:vpcSubnet.cidr}))}return ret}}function flatMap(xs,fn){const ret=new Array;for(const x of xs)ret.push(...fn(x));return ret}class CompositeDependable{constructor(){this.dependables=new Array;const self=this;constructs_1().Dependable.implement(this,{get dependencyRoots(){const ret=new Array;for(const dep of self.dependables)ret.push(...constructs_1().Dependable.of(dep).dependencyRoots);return ret}})}add(dep){this.dependables.push(dep)}}function tap(x,fn){return fn(x),x}class ImportedSubnet extends core_1().Resource{constructor(scope,id,attrs){if(super(scope,id),this.internetConnectivityEstablished=new(constructs_1()).DependencyGroup,!attrs.routeTableId){const ref=core_1().Token.isUnresolved(attrs.subnetId)||core_1().Token.isUnresolved([attrs.subnetId])?`at '${constructs_1().Node.of(scope).path}/${id}'`:`'${attrs.subnetId}'`;core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-ec2:noSubnetRouteTableId",`No routeTableId was provided to the subnet ${ref}. Attempting to read its .routeTable.routeTableId will return null/undefined. (More info: https://github.com/aws/aws-cdk/pull/3171)`)}this._ipv4CidrBlock=attrs.ipv4CidrBlock,this._availabilityZone=attrs.availabilityZone,this.subnetId=attrs.subnetId,this.routeTable={routeTableId:attrs.routeTableId}}get availabilityZone(){if(!this._availabilityZone)throw new Error("You cannot reference a Subnet's availability zone if it was not supplied. Add the availabilityZone when importing using Subnet.fromSubnetAttributes()");return this._availabilityZone}get ipv4CidrBlock(){if(!this._ipv4CidrBlock)throw new Error("You cannot reference an imported Subnet's IPv4 CIDR if it was not supplied. Add the ipv4CidrBlock when importing using Subnet.fromSubnetAttributes()");return this._ipv4CidrBlock}associateNetworkAcl(id,networkAcl){const scope=networkAcl instanceof constructs_1().Construct?networkAcl:this,other=networkAcl instanceof constructs_1().Construct?this:networkAcl;new(network_acl_1()).SubnetNetworkAclAssociation(scope,id+core_1().Names.nodeUniqueId(other.node),{networkAcl,subnet:this})}}function determineNatGatewayCount(requestedCount,subnetConfig,azCount){const hasPrivateSubnets=subnetConfig.some(c=>(c.subnetType===SubnetType.PRIVATE_WITH_EGRESS||c.subnetType===SubnetType.PRIVATE||c.subnetType===SubnetType.PRIVATE_WITH_NAT)&&!c.reserved),hasPublicSubnets=subnetConfig.some(c=>c.subnetType===SubnetType.PUBLIC&&!c.reserved),hasCustomEgress=subnetConfig.some(c=>c.subnetType===SubnetType.PRIVATE_WITH_EGRESS),count=requestedCount!==void 0?Math.min(requestedCount,azCount):hasPrivateSubnets?azCount:0;if(count===0&&hasPrivateSubnets&&!hasCustomEgress)throw new Error("If you do not want NAT gateways (natGateways=0), make sure you don't configure any PRIVATE(_WITH_NAT) subnets in 'subnetConfiguration' (make them PUBLIC or ISOLATED instead)");if(count>0&&!hasPublicSubnets)throw new Error(`If you configure PRIVATE subnets in 'subnetConfiguration', you must also configure PUBLIC subnets to put the NAT gateways into (got ${JSON.stringify(subnetConfig)}.`);return count}const DUMMY_VPC_PROPS={availabilityZones:[],vpcCidrBlock:"1.2.3.4/5",isolatedSubnetIds:void 0,isolatedSubnetNames:void 0,isolatedSubnetRouteTableIds:void 0,privateSubnetIds:void 0,privateSubnetNames:void 0,privateSubnetRouteTableIds:void 0,publicSubnetIds:void 0,publicSubnetNames:void 0,publicSubnetRouteTableIds:void 0,subnetGroups:[{name:"Public",type:cxapi().VpcSubnetGroupType.PUBLIC,subnets:[{availabilityZone:"dummy1a",subnetId:"s-12345",routeTableId:"rtb-12345s",cidr:"1.2.3.4/5"},{availabilityZone:"dummy1b",subnetId:"s-67890",routeTableId:"rtb-67890s",cidr:"1.2.3.4/5"}]},{name:"Private",type:cxapi().VpcSubnetGroupType.PRIVATE,subnets:[{availabilityZone:"dummy1a",subnetId:"p-12345",routeTableId:"rtb-12345p",cidr:"1.2.3.4/5"},{availabilityZone:"dummy1b",subnetId:"p-67890",routeTableId:"rtb-57890p",cidr:"1.2.3.4/5"}]},{name:"Isolated",type:cxapi().VpcSubnetGroupType.ISOLATED,subnets:[{availabilityZone:"dummy1a",subnetId:"p-12345",routeTableId:"rtb-12345p",cidr:"1.2.3.4/5"},{availabilityZone:"dummy1b",subnetId:"p-67890",routeTableId:"rtb-57890p",cidr:"1.2.3.4/5"}]}],vpcId:"vpc-12345"};
