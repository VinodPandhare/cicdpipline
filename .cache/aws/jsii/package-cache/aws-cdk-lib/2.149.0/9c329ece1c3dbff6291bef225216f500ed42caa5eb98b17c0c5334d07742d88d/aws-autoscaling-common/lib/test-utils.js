"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateArbitraryIntervals=void 0;function generateArbitraryIntervals(mrng){const ret=new Array,absolute=mrng.nextBoolean(),factor=(mrng.nextBoolean()?1:-1)*(absolute?10:1),bias=absolute?50:0;ret.push({lower:0,upper:10,change:-2*factor+bias}),ret.push({lower:10,upper:20,change:-1*factor+bias}),ret.push({lower:20,upper:60,change:0+bias}),ret.push({lower:60,upper:80,change:0+bias}),ret.push({lower:80,upper:90,change:1*factor+bias}),ret.push({lower:90,upper:1/0,change:2*factor+bias});const noChanges=ret.filter(x=>x.change===bias);if(absolute?mrng.nextBoolean()?(ret.splice(ret.indexOf(noChanges[0]),1),ret.splice(ret.indexOf(noChanges[1]),1)):(noChanges[0]={...noChanges[0],change:-1*factor+bias},noChanges[1]={...noChanges[1],change:1*factor+bias}):(mrng.nextBoolean()&&(mrng.nextBoolean()?ret.splice(ret.indexOf(noChanges[0]),1):noChanges[0]={...noChanges[0],change:-1*factor+bias}),mrng.nextBoolean()&&(mrng.nextBoolean()?ret.splice(ret.indexOf(noChanges[1]),1):noChanges[1]={...noChanges[1],change:1*factor+bias})),mrng.nextInt(0,2)===0){const signToStrip=mrng.nextBoolean()?-1:1;let ix=ret.findIndex(x=>Math.sign(x.change-bias)===signToStrip);for(;ix>=0;)ret.splice(ix,1),ix=ret.findIndex(x=>Math.sign(x.change-bias)===signToStrip)}const iterations=mrng.nextInt(0,10);for(let iter=0;iter<iterations;iter++){const i=mrng.nextInt(0,ret.length-1);mrng.nextBoolean()?ret[i].upper!==void 0&&(i===0||ret[i-1].upper!==void 0)&&(ret[i]={...ret[i],lower:void 0}):ret[i].lower!==void 0&&(i===ret.length-1||ret[i+1].lower!==void 0)&&(ret[i]={...ret[i],upper:void 0})}return{absolute,intervals:ret}}exports.generateArbitraryIntervals=generateArbitraryIntervals;
