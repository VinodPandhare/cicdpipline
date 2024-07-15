"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Route53Metrics=void 0;class Route53Metrics{static healthCheckPercentageHealthyAverage(dimensions){return{namespace:"AWS/Route53",metricName:"HealthCheckPercentageHealthy",dimensionsMap:dimensions,statistic:"Average"}}static connectionTimeAverage(dimensions){return{namespace:"AWS/Route53",metricName:"ConnectionTime",dimensionsMap:dimensions,statistic:"Average"}}static healthCheckStatusMinimum(dimensions){return{namespace:"AWS/Route53",metricName:"HealthCheckStatus",dimensionsMap:dimensions,statistic:"Minimum"}}static sslHandshakeTimeAverage(dimensions){return{namespace:"AWS/Route53",metricName:"SSLHandshakeTime",dimensionsMap:dimensions,statistic:"Average"}}static childHealthCheckHealthyCountAverage(dimensions){return{namespace:"AWS/Route53",metricName:"ChildHealthCheckHealthyCount",dimensionsMap:dimensions,statistic:"Average"}}static timeToFirstByteAverage(dimensions){return{namespace:"AWS/Route53",metricName:"TimeToFirstByte",dimensionsMap:dimensions,statistic:"Average"}}}exports.Route53Metrics=Route53Metrics;