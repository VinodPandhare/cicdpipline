"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TransferMetrics=void 0;class TransferMetrics{static bytesInSum(dimensions){return{namespace:"AWS/Transfer",metricName:"BytesIn",dimensionsMap:dimensions,statistic:"Sum"}}static bytesOutSum(dimensions){return{namespace:"AWS/Transfer",metricName:"BytesOut",dimensionsMap:dimensions,statistic:"Sum"}}}exports.TransferMetrics=TransferMetrics;
