"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Stats=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class Stats{static percentile(percentile){return assertPercentage(percentile),`p${percentile}`}static p(percentile){return Stats.percentile(percentile)}static trimmedMean(p1,p2){return boundaryPercentileStat("tm","TM",p1,p2)}static tm(p1,p2){return Stats.trimmedMean(p1,p2)}static winsorizedMean(p1,p2){return boundaryPercentileStat("wm","WM",p1,p2)}static wm(p1,p2){return Stats.winsorizedMean(p1,p2)}static trimmedCount(p1,p2){return boundaryPercentileStat("tc","TC",p1,p2)}static tc(p1,p2){return Stats.trimmedCount(p1,p2)}static trimmedSum(p1,p2){return boundaryPercentileStat("ts","TS",p1,p2)}static ts(p1,p2){return Stats.trimmedSum(p1,p2)}static percentileRank(v1,v2){return v2!==void 0?`PR(${v1}:${v2})`:`PR(:${v1})`}static pr(v1,v2){return this.percentileRank(v1,v2)}}exports.Stats=Stats,_a=JSII_RTTI_SYMBOL_1,Stats[_a]={fqn:"aws-cdk-lib.aws_cloudwatch.Stats",version:"2.149.0"},Stats.SAMPLE_COUNT="SampleCount",Stats.AVERAGE="Average",Stats.SUM="Sum",Stats.MINIMUM="Minimum",Stats.MAXIMUM="Maximum",Stats.IQM="IQM";function assertPercentage(x){if(x!==void 0&&(x<0||x>100))throw new Error(`Expecting a percentage, got: ${x}`)}function boundaryPercentileStat(oneBoundaryStat,twoBoundaryStat,p1,p2){return assertPercentage(p1),assertPercentage(p2),p2!==void 0?`${twoBoundaryStat}(${p1}%:${p2}%)`:`${oneBoundaryStat}${p1}`}