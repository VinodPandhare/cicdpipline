"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EngineVersion=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class EngineVersion{static elasticsearch(version){return new EngineVersion(`Elasticsearch_${version}`)}static openSearch(version){return new EngineVersion(`OpenSearch_${version}`)}constructor(version){this.version=version}}exports.EngineVersion=EngineVersion,_a=JSII_RTTI_SYMBOL_1,EngineVersion[_a]={fqn:"aws-cdk-lib.aws_opensearchservice.EngineVersion",version:"2.149.0"},EngineVersion.ELASTICSEARCH_1_5=EngineVersion.elasticsearch("1.5"),EngineVersion.ELASTICSEARCH_2_3=EngineVersion.elasticsearch("2.3"),EngineVersion.ELASTICSEARCH_5_1=EngineVersion.elasticsearch("5.1"),EngineVersion.ELASTICSEARCH_5_3=EngineVersion.elasticsearch("5.3"),EngineVersion.ELASTICSEARCH_5_5=EngineVersion.elasticsearch("5.5"),EngineVersion.ELASTICSEARCH_5_6=EngineVersion.elasticsearch("5.6"),EngineVersion.ELASTICSEARCH_6_0=EngineVersion.elasticsearch("6.0"),EngineVersion.ELASTICSEARCH_6_2=EngineVersion.elasticsearch("6.2"),EngineVersion.ELASTICSEARCH_6_3=EngineVersion.elasticsearch("6.3"),EngineVersion.ELASTICSEARCH_6_4=EngineVersion.elasticsearch("6.4"),EngineVersion.ELASTICSEARCH_6_5=EngineVersion.elasticsearch("6.5"),EngineVersion.ELASTICSEARCH_6_7=EngineVersion.elasticsearch("6.7"),EngineVersion.ELASTICSEARCH_6_8=EngineVersion.elasticsearch("6.8"),EngineVersion.ELASTICSEARCH_7_1=EngineVersion.elasticsearch("7.1"),EngineVersion.ELASTICSEARCH_7_4=EngineVersion.elasticsearch("7.4"),EngineVersion.ELASTICSEARCH_7_7=EngineVersion.elasticsearch("7.7"),EngineVersion.ELASTICSEARCH_7_8=EngineVersion.elasticsearch("7.8"),EngineVersion.ELASTICSEARCH_7_9=EngineVersion.elasticsearch("7.9"),EngineVersion.ELASTICSEARCH_7_10=EngineVersion.elasticsearch("7.10"),EngineVersion.OPENSEARCH_1_0=EngineVersion.openSearch("1.0"),EngineVersion.OPENSEARCH_1_1=EngineVersion.openSearch("1.1"),EngineVersion.OPENSEARCH_1_2=EngineVersion.openSearch("1.2"),EngineVersion.OPENSEARCH_1_3=EngineVersion.openSearch("1.3"),EngineVersion.OPENSEARCH_2_3=EngineVersion.openSearch("2.3"),EngineVersion.OPENSEARCH_2_5=EngineVersion.openSearch("2.5"),EngineVersion.OPENSEARCH_2_7=EngineVersion.openSearch("2.7"),EngineVersion.OPENSEARCH_2_9=EngineVersion.openSearch("2.9"),EngineVersion.OPENSEARCH_2_10=EngineVersion.openSearch("2.10"),EngineVersion.OPENSEARCH_2_11=EngineVersion.openSearch("2.11"),EngineVersion.OPENSEARCH_2_13=EngineVersion.openSearch("2.13");