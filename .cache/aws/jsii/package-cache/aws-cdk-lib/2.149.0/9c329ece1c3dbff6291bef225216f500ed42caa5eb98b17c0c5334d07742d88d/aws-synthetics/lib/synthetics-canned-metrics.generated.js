"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloudWatchSyntheticsMetrics=void 0;class CloudWatchSyntheticsMetrics{static _2XxSum(dimensions){return{namespace:"CloudWatchSynthetics",metricName:"2xx",dimensionsMap:dimensions,statistic:"Sum"}}static _4XxSum(dimensions){return{namespace:"CloudWatchSynthetics",metricName:"4xx",dimensionsMap:dimensions,statistic:"Sum"}}static _5XxSum(dimensions){return{namespace:"CloudWatchSynthetics",metricName:"5xx",dimensionsMap:dimensions,statistic:"Sum"}}static durationMaximum(dimensions){return{namespace:"CloudWatchSynthetics",metricName:"Duration",dimensionsMap:dimensions,statistic:"Maximum"}}static failedSum(dimensions){return{namespace:"CloudWatchSynthetics",metricName:"Failed",dimensionsMap:dimensions,statistic:"Sum"}}static failedRequestsSum(dimensions){return{namespace:"CloudWatchSynthetics",metricName:"Failed requests",dimensionsMap:dimensions,statistic:"Sum"}}static successPercentAverage(dimensions){return{namespace:"CloudWatchSynthetics",metricName:"SuccessPercent",dimensionsMap:dimensions,statistic:"Average"}}}exports.CloudWatchSyntheticsMetrics=CloudWatchSyntheticsMetrics;