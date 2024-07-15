"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SESMetrics=void 0;class SESMetrics{static bounceSum(dimensions){return{namespace:"AWS/SES",metricName:"Bounce",dimensionsMap:dimensions,statistic:"Sum"}}static clickSum(dimensions){return{namespace:"AWS/SES",metricName:"Click",dimensionsMap:dimensions,statistic:"Sum"}}static complaintSum(dimensions){return{namespace:"AWS/SES",metricName:"Complaint",dimensionsMap:dimensions,statistic:"Sum"}}static deliverySum(dimensions){return{namespace:"AWS/SES",metricName:"Delivery",dimensionsMap:dimensions,statistic:"Sum"}}static openSum(dimensions){return{namespace:"AWS/SES",metricName:"Open",dimensionsMap:dimensions,statistic:"Sum"}}static rejectSum(dimensions){return{namespace:"AWS/SES",metricName:"Reject",dimensionsMap:dimensions,statistic:"Sum"}}static renderingFailureSum(dimensions){return{namespace:"AWS/SES",metricName:"RenderingFailure",dimensionsMap:dimensions,statistic:"Sum"}}static reputationBounceRateAverage(dimensions){return{namespace:"AWS/SES",metricName:"Reputation.BounceRate",dimensionsMap:dimensions,statistic:"Average"}}static reputationComplaintRateAverage(dimensions){return{namespace:"AWS/SES",metricName:"Reputation.ComplaintRate",dimensionsMap:dimensions,statistic:"Average"}}static sendSum(dimensions){return{namespace:"AWS/SES",metricName:"Send",dimensionsMap:dimensions,statistic:"Sum"}}static reputationBounceRateSum(dimensions){return{namespace:"AWS/SES",metricName:"Reputation.BounceRate",dimensionsMap:dimensions,statistic:"Sum"}}static reputationComplaintRateSum(dimensions){return{namespace:"AWS/SES",metricName:"Reputation.ComplaintRate",dimensionsMap:dimensions,statistic:"Sum"}}}exports.SESMetrics=SESMetrics;