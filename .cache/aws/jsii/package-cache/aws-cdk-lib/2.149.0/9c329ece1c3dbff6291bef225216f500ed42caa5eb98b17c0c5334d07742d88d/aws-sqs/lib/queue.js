"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Queue=exports.RedrivePermission=exports.FifoThroughputLimit=exports.DeduplicationScope=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var queue_base_1=()=>{var tmp=require("./queue-base");return queue_base_1=()=>tmp,tmp},sqs_generated_1=()=>{var tmp=require("./sqs.generated");return sqs_generated_1=()=>tmp,tmp},validate_props_1=()=>{var tmp=require("./validate-props");return validate_props_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},kms=()=>{var tmp=require("../../aws-kms");return kms=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},DeduplicationScope;(function(DeduplicationScope2){DeduplicationScope2.MESSAGE_GROUP="messageGroup",DeduplicationScope2.QUEUE="queue"})(DeduplicationScope||(exports.DeduplicationScope=DeduplicationScope={}));var FifoThroughputLimit;(function(FifoThroughputLimit2){FifoThroughputLimit2.PER_QUEUE="perQueue",FifoThroughputLimit2.PER_MESSAGE_GROUP_ID="perMessageGroupId"})(FifoThroughputLimit||(exports.FifoThroughputLimit=FifoThroughputLimit={}));var RedrivePermission;(function(RedrivePermission2){RedrivePermission2.ALLOW_ALL="allowAll",RedrivePermission2.DENY_ALL="denyAll",RedrivePermission2.BY_QUEUE="byQueue"})(RedrivePermission||(exports.RedrivePermission=RedrivePermission={}));class Queue extends queue_base_1().QueueBase{static fromQueueArn(scope,id,queueArn){return Queue.fromQueueAttributes(scope,id,{queueArn})}static fromQueueAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sqs_QueueAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromQueueAttributes),error}const stack=core_1().Stack.of(scope),parsedArn=stack.splitArn(attrs.queueArn,core_1().ArnFormat.NO_RESOURCE_NAME),queueName=attrs.queueName||parsedArn.resource,queueUrl=attrs.queueUrl||`https://sqs.${parsedArn.region}.${stack.urlSuffix}/${parsedArn.account}/${queueName}`;class Import extends queue_base_1().QueueBase{constructor(){super(...arguments),this.queueArn=attrs.queueArn,this.queueUrl=queueUrl,this.queueName=queueName,this.encryptionMasterKey=attrs.keyArn?kms().Key.fromKeyArn(this,"Key",attrs.keyArn):void 0,this.fifo=this.determineFifo(),this.encryptionType=attrs.keyArn?queue_base_1().QueueEncryption.KMS:void 0,this.autoCreatePolicy=!1}determineFifo(){if(core_1().Token.isUnresolved(this.queueArn))return attrs.fifo||!1;if(typeof attrs.fifo<"u"){if(attrs.fifo&&!queueName.endsWith(".fifo"))throw new Error("FIFO queue names must end in '.fifo'");if(!attrs.fifo&&queueName.endsWith(".fifo"))throw new Error("Non-FIFO queue name may not end in '.fifo'")}return!!queueName.endsWith(".fifo")}}return new Import(scope,id,{environmentFromArn:attrs.queueArn})}constructor(scope,id,props={}){super(scope,id,{physicalName:props.queueName}),this.autoCreatePolicy=!0;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sqs_QueueProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Queue),error}if((0,validate_props_1().validateProps)(props),props.redriveAllowPolicy){const{redrivePermission,sourceQueues}=props.redriveAllowPolicy;if(redrivePermission===RedrivePermission.BY_QUEUE){if(!sourceQueues||sourceQueues.length===0)throw new Error("At least one source queue must be specified when RedrivePermission is set to 'byQueue'");if(sourceQueues&&sourceQueues.length>10)throw new Error("Up to 10 sourceQueues can be specified. Set RedrivePermission to 'allowAll' to specify more")}else if(redrivePermission&&sourceQueues)throw new Error("sourceQueues cannot be configured when RedrivePermission is set to 'allowAll' or 'denyAll'")}const redrivePolicy=props.deadLetterQueue?{deadLetterTargetArn:props.deadLetterQueue.queue.queueArn,maxReceiveCount:props.deadLetterQueue.maxReceiveCount}:void 0,redriveAllowPolicy=props.redriveAllowPolicy?{redrivePermission:props.redriveAllowPolicy.redrivePermission??(props.redriveAllowPolicy.sourceQueues?RedrivePermission.BY_QUEUE:RedrivePermission.ALLOW_ALL),sourceQueueArns:props.redriveAllowPolicy.sourceQueues?.map(q=>q.queueArn)}:void 0,{encryptionMasterKey,encryptionProps,encryptionType}=_determineEncryptionProps.call(this),fifoProps=this.determineFifoProps(props);this.fifo=fifoProps.fifoQueue||!1;const queue=new(sqs_generated_1()).CfnQueue(this,"Resource",{queueName:this.physicalName,...fifoProps,...encryptionProps,redrivePolicy,redriveAllowPolicy,delaySeconds:props.deliveryDelay&&props.deliveryDelay.toSeconds(),maximumMessageSize:props.maxMessageSizeBytes,messageRetentionPeriod:props.retentionPeriod&&props.retentionPeriod.toSeconds(),receiveMessageWaitTimeSeconds:props.receiveMessageWaitTime&&props.receiveMessageWaitTime.toSeconds(),visibilityTimeout:props.visibilityTimeout&&props.visibilityTimeout.toSeconds()});queue.applyRemovalPolicy(props.removalPolicy??core_1().RemovalPolicy.DESTROY),this.queueArn=this.getResourceArnAttribute(queue.attrArn,{service:"sqs",resource:this.physicalName}),this.queueName=this.getResourceNameAttribute(queue.attrQueueName),this.encryptionMasterKey=encryptionMasterKey,this.queueUrl=queue.ref,this.deadLetterQueue=props.deadLetterQueue,this.encryptionType=encryptionType;function _determineEncryptionProps(){let encryption=props.encryption;if(encryption===queue_base_1().QueueEncryption.SQS_MANAGED&&props.encryptionMasterKey)throw new Error("'encryptionMasterKey' is not supported if encryption type 'SQS_MANAGED' is used");if(encryption!==queue_base_1().QueueEncryption.KMS&&props.encryptionMasterKey&&(encryption!==void 0&&core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-sqs:queueEncryptionChangedToKMS",[`encryption: Automatically changed to QueueEncryption.KMS, was: QueueEncryption.${Object.keys(queue_base_1().QueueEncryption)[Object.values(queue_base_1().QueueEncryption).indexOf(encryption)]}`,"When encryptionMasterKey is provided, always set `encryption: QueueEncryption.KMS`"].join(`
`)),encryption=queue_base_1().QueueEncryption.KMS),!encryption)return{encryptionProps:{},encryptionType:encryption};if(encryption===queue_base_1().QueueEncryption.UNENCRYPTED)return{encryptionType:encryption,encryptionProps:{sqsManagedSseEnabled:!1}};if(encryption===queue_base_1().QueueEncryption.KMS_MANAGED)return{encryptionType:encryption,encryptionProps:{kmsMasterKeyId:"alias/aws/sqs",kmsDataKeyReusePeriodSeconds:props.dataKeyReuse&&props.dataKeyReuse.toSeconds()}};if(encryption===queue_base_1().QueueEncryption.KMS){const masterKey=props.encryptionMasterKey||new(kms()).Key(this,"Key",{description:`Created by ${this.node.path}`});return{encryptionType:encryption,encryptionMasterKey:masterKey,encryptionProps:{kmsMasterKeyId:masterKey.keyArn,kmsDataKeyReusePeriodSeconds:props.dataKeyReuse&&props.dataKeyReuse.toSeconds()}}}if(encryption===queue_base_1().QueueEncryption.SQS_MANAGED)return{encryptionType:encryption,encryptionProps:{sqsManagedSseEnabled:!0}};throw new Error(`Unexpected 'encryptionType': ${encryption}`)}props.enforceSSL&&this.enforceSSLStatement()}determineFifoProps(props){let fifoQueue=props.fifo;const queueName=props.queueName;if(typeof fifoQueue>"u"&&queueName&&!core_1().Token.isUnresolved(queueName)&&queueName.endsWith(".fifo")&&(fifoQueue=!0),typeof fifoQueue>"u"&&props.contentBasedDeduplication&&(fifoQueue=!0),typeof fifoQueue>"u"&&props.deduplicationScope&&(fifoQueue=!0),typeof fifoQueue>"u"&&props.fifoThroughputLimit&&(fifoQueue=!0),typeof queueName=="string"){if(fifoQueue&&!queueName.endsWith(".fifo"))throw new Error("FIFO queue names must end in '.fifo'");if(!fifoQueue&&queueName.endsWith(".fifo"))throw new Error("Non-FIFO queue name may not end in '.fifo'")}if(props.contentBasedDeduplication&&!fifoQueue)throw new Error("Content-based deduplication can only be defined for FIFO queues");if(props.deduplicationScope&&!fifoQueue)throw new Error("Deduplication scope can only be defined for FIFO queues");if(props.fifoThroughputLimit&&!fifoQueue)throw new Error("FIFO throughput limit can only be defined for FIFO queues");return{contentBasedDeduplication:props.contentBasedDeduplication,deduplicationScope:props.deduplicationScope,fifoThroughputLimit:props.fifoThroughputLimit,fifoQueue}}enforceSSLStatement(){const statement=new(iam()).PolicyStatement({actions:["sqs:*"],conditions:{Bool:{"aws:SecureTransport":"false"}},effect:iam().Effect.DENY,resources:[this.queueArn],principals:[new(iam()).AnyPrincipal]});this.addToResourcePolicy(statement)}}exports.Queue=Queue,_a=JSII_RTTI_SYMBOL_1,Queue[_a]={fqn:"aws-cdk-lib.aws_sqs.Queue",version:"2.149.0"};