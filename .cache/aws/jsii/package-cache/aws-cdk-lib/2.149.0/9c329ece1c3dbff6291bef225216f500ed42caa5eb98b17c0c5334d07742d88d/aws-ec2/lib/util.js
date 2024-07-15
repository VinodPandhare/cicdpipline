"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flatten=exports.allRouteTableIds=exports.range=exports.ImportSubnetGroup=exports.subnetId=exports.subnetGroupNameFromConstructId=exports.defaultSubnetName=exports.slugify=void 0;var vpc_1=()=>{var tmp=require("./vpc");return vpc_1=()=>tmp,tmp};function slugify(x){return x.replace(/[^a-zA-Z0-9]/g,"")}exports.slugify=slugify;function defaultSubnetName(type){switch(type){case vpc_1().SubnetType.PUBLIC:return"Public";case vpc_1().SubnetType.PRIVATE_WITH_NAT:case vpc_1().SubnetType.PRIVATE_WITH_EGRESS:case vpc_1().SubnetType.PRIVATE:return"Private";case vpc_1().SubnetType.PRIVATE_ISOLATED:case vpc_1().SubnetType.ISOLATED:return"Isolated"}}exports.defaultSubnetName=defaultSubnetName;function subnetGroupNameFromConstructId(subnet){return subnet.node.id.replace(/Subnet\d+$/,"")}exports.subnetGroupNameFromConstructId=subnetGroupNameFromConstructId;function subnetId(name,i){return`${name}Subnet${i+1}`}exports.subnetId=subnetId;class ImportSubnetGroup{constructor(subnetIds,names,routeTableIds,ipv4CidrBlocks,type,availabilityZones,idField,nameField,routeTableIdField,ipv4CidrBlockField){if(this.availabilityZones=availabilityZones,this.subnetIds=subnetIds||[],this.routeTableIds=routeTableIds||[],this.ipv4CidrBlocks=ipv4CidrBlocks||[],this.groups=this.subnetIds.length/this.availabilityZones.length,Math.floor(this.groups)!==this.groups)throw new Error(`Number of ${idField} (${this.subnetIds.length}) must be a multiple of availability zones (${this.availabilityZones.length}).`);if(this.routeTableIds.length!==this.subnetIds.length&&routeTableIds!=null)throw new Error(`Number of ${routeTableIdField} (${this.routeTableIds.length}) must be equal to the amount of ${idField} (${this.subnetIds.length}).`);if(this.ipv4CidrBlocks.length!==this.subnetIds.length&&ipv4CidrBlocks!=null)throw new Error(`Number of ${ipv4CidrBlockField} (${this.ipv4CidrBlocks.length}) must be equal to the amount of ${idField} (${this.subnetIds.length}).`);this.names=this.normalizeNames(names,defaultSubnetName(type),nameField)}import(scope){return range(this.subnetIds.length).map(i=>{const k=Math.floor(i/this.availabilityZones.length);return vpc_1().Subnet.fromSubnetAttributes(scope,subnetId(this.names[k],i),{availabilityZone:this.pickAZ(i),subnetId:this.subnetIds[i],routeTableId:this.routeTableIds[i],ipv4CidrBlock:this.ipv4CidrBlocks[i]})})}normalizeNames(names,defaultName,fieldName){if(names===void 0||names.length===0)return[defaultName];if(names.length!==this.groups)throw new Error(`${fieldName} must have an entry for every corresponding subnet group, got: ${JSON.stringify(names)}`);return names}pickAZ(i){return this.availabilityZones[i%this.availabilityZones.length]}}exports.ImportSubnetGroup=ImportSubnetGroup;function range(n){const ret=[];for(let i=0;i<n;i++)ret.push(i);return ret}exports.range=range;function allRouteTableIds(subnets){const ret=new Set;for(const subnet of subnets)subnet.routeTable&&subnet.routeTable.routeTableId&&ret.add(subnet.routeTable.routeTableId);return Array.from(ret)}exports.allRouteTableIds=allRouteTableIds;function flatten(xs){return Array.prototype.concat.apply([],xs)}exports.flatten=flatten;