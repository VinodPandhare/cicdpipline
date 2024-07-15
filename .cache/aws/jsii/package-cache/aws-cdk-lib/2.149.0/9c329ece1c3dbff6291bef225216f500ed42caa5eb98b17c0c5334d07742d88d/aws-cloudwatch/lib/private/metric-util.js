"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dispatchMetric=exports.metricPeriod=exports.metricKey=void 0;var core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};const METRICKEY_SYMBOL=Symbol("@aws-cdk/aws-cloudwatch.MetricKey");function metricKey(metric){if(metric.hasOwnProperty(METRICKEY_SYMBOL))return metric[METRICKEY_SYMBOL];const parts=new Array,conf=metric.toMetricConfig();if(conf.mathExpression){parts.push(conf.mathExpression.expression);for(const id of Object.keys(conf.mathExpression.usingMetrics).sort())parts.push(id),parts.push(metricKey(conf.mathExpression.usingMetrics[id]));conf.mathExpression.searchRegion&&parts.push(conf.mathExpression.searchRegion),conf.mathExpression.searchAccount&&parts.push(conf.mathExpression.searchAccount)}if(conf.metricStat){parts.push(conf.metricStat.namespace),parts.push(conf.metricStat.metricName);for(const dim of conf.metricStat.dimensions||[])parts.push(dim.name),parts.push(dim.value);conf.metricStat.statistic&&parts.push(conf.metricStat.statistic),conf.metricStat.period&&parts.push(`${conf.metricStat.period.toSeconds()}`),conf.metricStat.region&&parts.push(conf.metricStat.region),conf.metricStat.account&&parts.push(conf.metricStat.account)}const ret=parts.join("|");return Object.defineProperty(metric,METRICKEY_SYMBOL,{value:ret}),ret}exports.metricKey=metricKey;function metricPeriod(metric){return dispatchMetric(metric,{withStat(stat){return stat.period},withExpression(){return metric.period||core_1().Duration.minutes(5)}})}exports.metricPeriod=metricPeriod;function dispatchMetric(metric,fns){const conf=metric.toMetricConfig();if(conf.metricStat&&conf.mathExpression)throw new Error("Metric object must not produce both 'metricStat' and 'mathExpression'");if(conf.metricStat)return fns.withStat(conf.metricStat,conf);if(conf.mathExpression)return fns.withExpression(conf.mathExpression,conf);throw new Error("Metric object must have either 'metricStat' or 'mathExpression'")}exports.dispatchMetric=dispatchMetric;
