"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LogQueryWidget=exports.LogQueryVisualizationType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var widget_1=()=>{var tmp=require("./widget");return widget_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},LogQueryVisualizationType;(function(LogQueryVisualizationType2){LogQueryVisualizationType2.TABLE="table",LogQueryVisualizationType2.LINE="line",LogQueryVisualizationType2.STACKEDAREA="stackedarea",LogQueryVisualizationType2.BAR="bar",LogQueryVisualizationType2.PIE="pie"})(LogQueryVisualizationType||(exports.LogQueryVisualizationType=LogQueryVisualizationType={}));class LogQueryWidget extends widget_1().ConcreteWidget{constructor(props){super(props.width||6,props.height||6);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_LogQueryWidgetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LogQueryWidget),error}if(this.props=props,props.logGroupNames.length===0)throw new Error("Specify at least one log group name.");if(!!props.queryString==!!props.queryLines)throw new Error("Specify exactly one of 'queryString' and 'queryLines'")}toJson(){const sources=this.props.logGroupNames.map(l=>`SOURCE '${l}'`).join(" | "),query=this.props.queryLines?this.props.queryLines.join(`
| `):this.props.queryString,properties={view:this.props.view?this.props.view:LogQueryVisualizationType.TABLE,title:this.props.title,region:this.props.region||cdk().Aws.REGION,query:`${sources} | ${query}`};return(this.props.view===LogQueryVisualizationType.LINE||this.props.view===LogQueryVisualizationType.STACKEDAREA)&&(properties.view="timeSeries",properties.stacked=this.props.view===LogQueryVisualizationType.STACKEDAREA),[{type:"log",width:this.width,height:this.height,x:this.x,y:this.y,properties}]}}exports.LogQueryWidget=LogQueryWidget,_a=JSII_RTTI_SYMBOL_1,LogQueryWidget[_a]={fqn:"aws-cdk-lib.aws_cloudwatch.LogQueryWidget",version:"2.149.0"};