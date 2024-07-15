"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContainerInsightsMetrics=void 0;class ContainerInsightsMetrics{static nodeCpuLimitSum(dimensions){return{namespace:"ContainerInsights",metricName:"node_cpu_limit",dimensionsMap:dimensions,statistic:"Sum"}}static nodeCpuUsageTotalSum(dimensions){return{namespace:"ContainerInsights",metricName:"node_cpu_usage_total",dimensionsMap:dimensions,statistic:"Sum"}}static nodeMemoryLimitSum(dimensions){return{namespace:"ContainerInsights",metricName:"node_memory_limit",dimensionsMap:dimensions,statistic:"Sum"}}static nodeMemoryWorkingSetSum(dimensions){return{namespace:"ContainerInsights",metricName:"node_memory_working_set",dimensionsMap:dimensions,statistic:"Sum"}}static podNetworkRxBytesAverage(dimensions){return{namespace:"ContainerInsights",metricName:"pod_network_rx_bytes",dimensionsMap:dimensions,statistic:"Average"}}static podNetworkTxBytesAverage(dimensions){return{namespace:"ContainerInsights",metricName:"pod_network_tx_bytes",dimensionsMap:dimensions,statistic:"Average"}}static nodeNetworkTotalBytesAverage(dimensions){return{namespace:"ContainerInsights",metricName:"node_network_total_bytes",dimensionsMap:dimensions,statistic:"Average"}}static clusterFailedNodeCountAverage(dimensions){return{namespace:"ContainerInsights",metricName:"cluster_failed_node_count",dimensionsMap:dimensions,statistic:"Average"}}static nodeFilesystemUtilizationp90(dimensions){return{namespace:"ContainerInsights",metricName:"node_filesystem_utilization",dimensionsMap:dimensions,statistic:"p90"}}static clusterNodeCountAverage(dimensions){return{namespace:"ContainerInsights",metricName:"cluster_node_count",dimensionsMap:dimensions,statistic:"Average"}}static podCpuUtilizationAverage(dimensions){return{namespace:"ContainerInsights",metricName:"pod_cpu_utilization",dimensionsMap:dimensions,statistic:"Average"}}}exports.ContainerInsightsMetrics=ContainerInsightsMetrics;