"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventsMetrics=void 0;class EventsMetrics{static invocationsSum(dimensions){return{namespace:"AWS/Events",metricName:"Invocations",dimensionsMap:dimensions,statistic:"Sum"}}static failedInvocationsSum(dimensions){return{namespace:"AWS/Events",metricName:"FailedInvocations",dimensionsMap:dimensions,statistic:"Sum"}}static deadLetterInvocationsSum(dimensions){return{namespace:"AWS/Events",metricName:"DeadLetterInvocations",dimensionsMap:dimensions,statistic:"Sum"}}static triggeredRulesSum(dimensions){return{namespace:"AWS/Events",metricName:"TriggeredRules",dimensionsMap:dimensions,statistic:"Sum"}}static matchedEventsSum(dimensions){return{namespace:"AWS/Events",metricName:"MatchedEvents",dimensionsMap:dimensions,statistic:"Sum"}}static throttledRulesSum(dimensions){return{namespace:"AWS/Events",metricName:"ThrottledRules",dimensionsMap:dimensions,statistic:"Sum"}}}exports.EventsMetrics=EventsMetrics;