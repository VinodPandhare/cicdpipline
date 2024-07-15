"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MediaConvertMetrics=void 0;class MediaConvertMetrics{static transcodingTimeAverage(dimensions){return{namespace:"AWS/MediaConvert",metricName:"TranscodingTime",dimensionsMap:dimensions,statistic:"Average"}}static jobsCompletedCountSum(dimensions){return{namespace:"AWS/MediaConvert",metricName:"JobsCompletedCount",dimensionsMap:dimensions,statistic:"Sum"}}static _8KOutputDurationAverage(dimensions){return{namespace:"AWS/MediaConvert",metricName:"8KOutputDuration",dimensionsMap:dimensions,statistic:"Average"}}static audioOutputDurationAverage(dimensions){return{namespace:"AWS/MediaConvert",metricName:"AudioOutputDuration",dimensionsMap:dimensions,statistic:"Average"}}static hdOutputDurationAverage(dimensions){return{namespace:"AWS/MediaConvert",metricName:"HDOutputDuration",dimensionsMap:dimensions,statistic:"Average"}}static jobsErroredCountSum(dimensions){return{namespace:"AWS/MediaConvert",metricName:"JobsErroredCount",dimensionsMap:dimensions,statistic:"Sum"}}static sdOutputDurationAverage(dimensions){return{namespace:"AWS/MediaConvert",metricName:"SDOutputDuration",dimensionsMap:dimensions,statistic:"Average"}}static standbyTimeSum(dimensions){return{namespace:"AWS/MediaConvert",metricName:"StandbyTime",dimensionsMap:dimensions,statistic:"Sum"}}static uhdOutputDurationAverage(dimensions){return{namespace:"AWS/MediaConvert",metricName:"UHDOutputDuration",dimensionsMap:dimensions,statistic:"Average"}}}exports.MediaConvertMetrics=MediaConvertMetrics;
