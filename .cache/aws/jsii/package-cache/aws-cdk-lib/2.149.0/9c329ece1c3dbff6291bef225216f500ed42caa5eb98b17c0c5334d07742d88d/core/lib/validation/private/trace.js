"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReportTrace=void 0;const STARTER_LINE="\u2514\u2500\u2500 ",VERTICAL_LINE="\u2502";class ReportTrace{constructor(tree){this.tree=tree}formatJson(constructPath){return this.trace(constructPath)}formatPrettyPrinted(constructPath){const trace=this.formatJson(constructPath);return this.renderPrettyPrintedTraceInfo(trace)}renderPrettyPrintedTraceInfo(info,indent,start=STARTER_LINE){const notAvailableMessage="	Construct trace not available. Rerun with `--debug` to see trace information";if(info){const indentation=indent??" ".repeat(STARTER_LINE.length+1);return[`${start} ${info?.id} (${info?.path})`,`${indentation}${VERTICAL_LINE} Construct: ${info?.construct}`,`${indentation}${VERTICAL_LINE} Library Version: ${info?.libraryVersion}`,`${indentation}${VERTICAL_LINE} Location: ${info?.location}`,...info?.child?[this.renderPrettyPrintedTraceInfo(info?.child," ".repeat(indentation.length+STARTER_LINE.length+1),indentation+STARTER_LINE)]:[]].join(`
	`)}return notAvailableMessage}trace(constructPath){if(constructPath){const treeNode=this.tree.getTreeNode(constructPath);if(treeNode)return this.tree.getTrace(treeNode)}}}exports.ReportTrace=ReportTrace;