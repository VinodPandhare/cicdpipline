"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactMetadataEntryType = void 0;
/**
 * Type of artifact metadata entry.
 */
var ArtifactMetadataEntryType;
(function (ArtifactMetadataEntryType) {
    /**
     * Asset in metadata.
     */
    ArtifactMetadataEntryType["ASSET"] = "aws:cdk:asset";
    /**
     * Metadata key used to print INFO-level messages by the toolkit when an app is syntheized.
     */
    ArtifactMetadataEntryType["INFO"] = "aws:cdk:info";
    /**
     * Metadata key used to print WARNING-level messages by the toolkit when an app is syntheized.
     */
    ArtifactMetadataEntryType["WARN"] = "aws:cdk:warning";
    /**
     * Metadata key used to print ERROR-level messages by the toolkit when an app is syntheized.
     */
    ArtifactMetadataEntryType["ERROR"] = "aws:cdk:error";
    /**
     * Represents the CloudFormation logical ID of a resource at a certain path.
     */
    ArtifactMetadataEntryType["LOGICAL_ID"] = "aws:cdk:logicalId";
    /**
     * Represents tags of a stack.
     */
    ArtifactMetadataEntryType["STACK_TAGS"] = "aws:cdk:stack-tags";
})(ArtifactMetadataEntryType = exports.ArtifactMetadataEntryType || (exports.ArtifactMetadataEntryType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWV0YWRhdGEtc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQW1MQTs7R0FFRztBQUNILElBQVkseUJBOEJYO0FBOUJELFdBQVkseUJBQXlCO0lBQ25DOztPQUVHO0lBQ0gsb0RBQXVCLENBQUE7SUFFdkI7O09BRUc7SUFDSCxrREFBcUIsQ0FBQTtJQUVyQjs7T0FFRztJQUNILHFEQUF3QixDQUFBO0lBRXhCOztPQUVHO0lBQ0gsb0RBQXVCLENBQUE7SUFFdkI7O09BRUc7SUFDSCw2REFBZ0MsQ0FBQTtJQUVoQzs7T0FFRztJQUNILDhEQUFpQyxDQUFBO0FBQ25DLENBQUMsRUE5QlcseUJBQXlCLEdBQXpCLGlDQUF5QixLQUF6QixpQ0FBeUIsUUE4QnBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21tb24gcHJvcGVydGllcyBmb3IgYXNzZXQgbWV0YWRhdGEuXG4gKi9cbmludGVyZmFjZSBCYXNlQXNzZXRNZXRhZGF0YUVudHJ5IHtcbiAgLyoqXG4gICAqIFJlcXVlc3RlZCBwYWNrYWdpbmcgc3R5bGVcbiAgICovXG4gIHJlYWRvbmx5IHBhY2thZ2luZzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMb2dpY2FsIGlkZW50aWZpZXIgZm9yIHRoZSBhc3NldFxuICAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGhhc2ggb2YgdGhlIGFzc2V0IHNvdXJjZS5cbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZUhhc2g6IHN0cmluZztcblxuICAvKipcbiAgICogUGF0aCBvbiBkaXNrIHRvIHRoZSBhc3NldFxuICAgKi9cbiAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xufVxuXG4vKipcbiAqIE1ldGFkYXRhIEVudHJ5IHNwZWMgZm9yIGZpbGVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVBc3NldE1ldGFkYXRhRW50cnkgZXh0ZW5kcyBCYXNlQXNzZXRNZXRhZGF0YUVudHJ5IHtcbiAgLyoqXG4gICAqIFJlcXVlc3RlZCBwYWNrYWdpbmcgc3R5bGVcbiAgICovXG4gIHJlYWRvbmx5IHBhY2thZ2luZzogJ3ppcCcgfCAnZmlsZSc7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgcGFyYW1ldGVyIHdoZXJlIFMzIGJ1Y2tldCBzaG91bGQgYmUgcGFzc2VkIGluXG4gICAqL1xuICByZWFkb25seSBzM0J1Y2tldFBhcmFtZXRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHBhcmFtZXRlciB3aGVyZSBTMyBrZXkgc2hvdWxkIGJlIHBhc3NlZCBpblxuICAgKi9cbiAgcmVhZG9ubHkgczNLZXlQYXJhbWV0ZXI6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciB3aGVyZSB0aGUgaGFzaCBvZiB0aGUgYnVuZGxlZCBhc3NldCBzaG91bGQgYmUgcGFzc2VkIGluLlxuICAgKi9cbiAgcmVhZG9ubHkgYXJ0aWZhY3RIYXNoUGFyYW1ldGVyOiBzdHJpbmc7XG59XG5cbi8qKlxuICogTWV0YWRhdGEgRW50cnkgc3BlYyBmb3Igc3RhY2sgdGFnLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRhZyB7XG4gIC8qKlxuICAgKiBUYWcga2V5LlxuICAgKlxuICAgKiAoSW4gdGhlIGFjdHVhbCBmaWxlIG9uIGRpc2sgdGhpcyB3aWxsIGJlIGNhc2VkIGFzIFwiS2V5XCIsIGFuZCB0aGUgc3RydWN0dXJlIGlzXG4gICAqIHBhdGNoZWQgdG8gbWF0Y2ggdGhpcyBzdHJ1Y3R1cmUgdXBvbiBsb2FkaW5nOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYXdzL2F3cy1jZGsvYmxvYi80YWFkYWE3NzliNDhmMzU4MzhjY2NkNGUyNTEwN2IyMzM4ZjA1NTQ3L3BhY2thZ2VzLyU0MGF3cy1jZGsvY2xvdWQtYXNzZW1ibHktc2NoZW1hL2xpYi9tYW5pZmVzdC50cyNMMTM3KVxuICAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmdcblxuICAvKipcbiAgICogVGFnIHZhbHVlLlxuICAgKlxuICAgKiAoSW4gdGhlIGFjdHVhbCBmaWxlIG9uIGRpc2sgdGhpcyB3aWxsIGJlIGNhc2VkIGFzIFwiVmFsdWVcIiwgYW5kIHRoZSBzdHJ1Y3R1cmUgaXNcbiAgICogcGF0Y2hlZCB0byBtYXRjaCB0aGlzIHN0cnVjdHVyZSB1cG9uIGxvYWRpbmc6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hd3MvYXdzLWNkay9ibG9iLzRhYWRhYTc3OWI0OGYzNTgzOGNjY2Q0ZTI1MTA3YjIzMzhmMDU1NDcvcGFja2FnZXMvJTQwYXdzLWNkay9jbG91ZC1hc3NlbWJseS1zY2hlbWEvbGliL21hbmlmZXN0LnRzI0wxMzcpXG4gICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nXG59XG5cbi8qKlxuICogTWV0YWRhdGEgRW50cnkgc3BlYyBmb3IgY29udGFpbmVyIGltYWdlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJJbWFnZUFzc2V0TWV0YWRhdGFFbnRyeSBleHRlbmRzIEJhc2VBc3NldE1ldGFkYXRhRW50cnkge1xuICAvKipcbiAgICogVHlwZSBvZiBhc3NldFxuICAgKi9cbiAgcmVhZG9ubHkgcGFja2FnaW5nOiAnY29udGFpbmVyLWltYWdlJztcblxuICAvKipcbiAgICogRUNSIFJlcG9zaXRvcnkgbmFtZSBhbmQgcmVwbyBkaWdlc3QgKHNlcGFyYXRlZCBieSBcIkBzaGEyNTY6XCIpIHdoZXJlIHRoaXNcbiAgICogaW1hZ2UgaXMgc3RvcmVkLlxuICAgKlxuICAgKiBAZGVmYXVsdCB1bmRlZmluZWQgSWYgbm90IHNwZWNpZmllZCwgYHJlcG9zaXRvcnlOYW1lYCBhbmQgYGltYWdlVGFnYCBhcmVcbiAgICogcmVxdWlyZWQgYmVjYXVzZSBvdGhlcndpc2UgaG93IHdpbGwgdGhlIHN0YWNrIGtub3cgd2hlcmUgdG8gZmluZCB0aGUgYXNzZXQsXG4gICAqIGhhP1xuICAgKiBAZGVwcmVjYXRlZCBzcGVjaWZ5IGByZXBvc2l0b3J5TmFtZWAgYW5kIGBpbWFnZVRhZ2AgaW5zdGVhZCwgYW5kIHRoZW4geW91XG4gICAqIGtub3cgd2hlcmUgdGhlIGltYWdlIHdpbGwgZ28uXG4gICAqL1xuICByZWFkb25seSBpbWFnZU5hbWVQYXJhbWV0ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVDUiByZXBvc2l0b3J5IG5hbWUsIGlmIG9taXR0ZWQgYSBkZWZhdWx0IG5hbWUgYmFzZWQgb24gdGhlIGFzc2V0J3MgSUQgaXNcbiAgICogdXNlZCBpbnN0ZWFkLiBTcGVjaWZ5IHRoaXMgcHJvcGVydHkgaWYgeW91IG5lZWQgdG8gc3RhdGljYWxseSBhZGRyZXNzIHRoZVxuICAgKiBpbWFnZSwgZS5nLiBmcm9tIGEgS3ViZXJuZXRlcyBQb2QuIE5vdGUsIHRoaXMgaXMgb25seSB0aGUgcmVwb3NpdG9yeSBuYW1lLFxuICAgKiB3aXRob3V0IHRoZSByZWdpc3RyeSBhbmQgdGhlIHRhZyBwYXJ0cy5cbiAgICpcbiAgICogQGRlZmF1bHQgLSB0aGlzIHBhcmFtZXRlciBpcyBSRVFVSVJFRCBhZnRlciAxLjIxLjBcbiAgICovXG4gIHJlYWRvbmx5IHJlcG9zaXRvcnlOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZG9ja2VyIGltYWdlIHRhZyB0byB1c2UgZm9yIHRhZ2dpbmcgcHVzaGVkIGltYWdlcy4gVGhpcyBmaWVsZCBpc1xuICAgKiByZXF1aXJlZCBpZiBgaW1hZ2VQYXJhbWV0ZXJOYW1lYCBpcyBvbW1pdGVkIChvdGhlcndpc2UsIHRoZSBhcHAgd29uJ3QgYmVcbiAgICogYWJsZSB0byBmaW5kIHRoZSBpbWFnZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gdGhpcyBwYXJhbWV0ZXIgaXMgUkVRVUlSRUQgYWZ0ZXIgMS4yMS4wXG4gICAqL1xuICByZWFkb25seSBpbWFnZVRhZz86IHN0cmluZztcblxuICAvKipcbiAgICogQnVpbGQgYXJncyB0byBwYXNzIHRvIHRoZSBgZG9ja2VyIGJ1aWxkYCBjb21tYW5kXG4gICAqXG4gICAqIEBkZWZhdWx0IG5vIGJ1aWxkIGFyZ3MgYXJlIHBhc3NlZFxuICAgKi9cbiAgcmVhZG9ubHkgYnVpbGRBcmdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICogRG9ja2VyIHRhcmdldCB0byBidWlsZCB0b1xuICAgKlxuICAgKiBAZGVmYXVsdCBubyBidWlsZCB0YXJnZXRcbiAgICovXG4gIHJlYWRvbmx5IHRhcmdldD86IHN0cmluZztcblxuICAvKipcbiAgICogUGF0aCB0byB0aGUgRG9ja2VyZmlsZSAocmVsYXRpdmUgdG8gdGhlIGRpcmVjdG9yeSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gZmlsZSBpcyBwYXNzZWRcbiAgICovXG4gIHJlYWRvbmx5IGZpbGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5ldHdvcmtpbmcgbW9kZSBmb3IgdGhlIFJVTiBjb21tYW5kcyBkdXJpbmcgYnVpbGQuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gbmV0d29ya2luZyBtb2RlIHNwZWNpZmllZFxuICAgKi9cbiAgcmVhZG9ubHkgbmV0d29ya01vZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBsYXRmb3JtIHRvIGJ1aWxkIGZvci4gX1JlcXVpcmVzIERvY2tlciBCdWlsZHhfLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIGN1cnJlbnQgbWFjaGluZSBwbGF0Zm9ybVxuICAgKi9cbiAgcmVhZG9ubHkgcGxhdGZvcm0/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHNlZSBBcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLkFTU0VUXG4gKi9cbmV4cG9ydCB0eXBlIEFzc2V0TWV0YWRhdGFFbnRyeSA9IEZpbGVBc3NldE1ldGFkYXRhRW50cnkgfCBDb250YWluZXJJbWFnZUFzc2V0TWV0YWRhdGFFbnRyeTtcblxuLy8gVHlwZSBhbGlhc2VzIGZvciBtZXRhZGF0YSBlbnRyaWVzLlxuLy8gVXNlZCBzaW1wbHkgdG8gYXNzaWduIG5hbWVzIHRvIGRhdGEgdHlwZXMgZm9yIG1vcmUgY2xhcml0eS5cblxuLyoqXG4gKiBAc2VlIEFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuSU5GT1xuICogQHNlZSBBcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLldBUk5cbiAqIEBzZWUgQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5FUlJPUlxuICovXG5leHBvcnQgdHlwZSBMb2dNZXNzYWdlTWV0YWRhdGFFbnRyeSA9IHN0cmluZztcblxuLyoqXG4gKiBAc2VlIEFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuTE9HSUNBTF9JRFxuICovXG5leHBvcnQgdHlwZSBMb2dpY2FsSWRNZXRhZGF0YUVudHJ5ID0gc3RyaW5nO1xuXG4vKipcbiAqIEBzZWUgQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTXG4gKi9cbmV4cG9ydCB0eXBlIFN0YWNrVGFnc01ldGFkYXRhRW50cnkgPSBUYWdbXTtcblxuLyoqXG4gKiBVbmlvbiB0eXBlIGZvciBhbGwgbWV0YWRhdGEgZW50cmllcyB0aGF0IG1pZ2h0IGV4aXN0IGluIHRoZSBtYW5pZmVzdC5cbiAqL1xuZXhwb3J0IHR5cGUgTWV0YWRhdGFFbnRyeURhdGEgPSBBc3NldE1ldGFkYXRhRW50cnkgfCBMb2dNZXNzYWdlTWV0YWRhdGFFbnRyeSB8IExvZ2ljYWxJZE1ldGFkYXRhRW50cnkgfCBTdGFja1RhZ3NNZXRhZGF0YUVudHJ5O1xuXG4vKipcbiAqIFR5cGUgb2YgYXJ0aWZhY3QgbWV0YWRhdGEgZW50cnkuXG4gKi9cbmV4cG9ydCBlbnVtIEFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUge1xuICAvKipcbiAgICogQXNzZXQgaW4gbWV0YWRhdGEuXG4gICAqL1xuICBBU1NFVCA9ICdhd3M6Y2RrOmFzc2V0JyxcblxuICAvKipcbiAgICogTWV0YWRhdGEga2V5IHVzZWQgdG8gcHJpbnQgSU5GTy1sZXZlbCBtZXNzYWdlcyBieSB0aGUgdG9vbGtpdCB3aGVuIGFuIGFwcCBpcyBzeW50aGVpemVkLlxuICAgKi9cbiAgSU5GTyA9ICdhd3M6Y2RrOmluZm8nLFxuXG4gIC8qKlxuICAgKiBNZXRhZGF0YSBrZXkgdXNlZCB0byBwcmludCBXQVJOSU5HLWxldmVsIG1lc3NhZ2VzIGJ5IHRoZSB0b29sa2l0IHdoZW4gYW4gYXBwIGlzIHN5bnRoZWl6ZWQuXG4gICAqL1xuICBXQVJOID0gJ2F3czpjZGs6d2FybmluZycsXG5cbiAgLyoqXG4gICAqIE1ldGFkYXRhIGtleSB1c2VkIHRvIHByaW50IEVSUk9SLWxldmVsIG1lc3NhZ2VzIGJ5IHRoZSB0b29sa2l0IHdoZW4gYW4gYXBwIGlzIHN5bnRoZWl6ZWQuXG4gICAqL1xuICBFUlJPUiA9ICdhd3M6Y2RrOmVycm9yJyxcblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgQ2xvdWRGb3JtYXRpb24gbG9naWNhbCBJRCBvZiBhIHJlc291cmNlIGF0IGEgY2VydGFpbiBwYXRoLlxuICAgKi9cbiAgTE9HSUNBTF9JRCA9ICdhd3M6Y2RrOmxvZ2ljYWxJZCcsXG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGFncyBvZiBhIHN0YWNrLlxuICAgKi9cbiAgU1RBQ0tfVEFHUyA9ICdhd3M6Y2RrOnN0YWNrLXRhZ3MnXG59XG5cbi8qKlxuICogQSBtZXRhZGF0YSBlbnRyeSBpbiBhIGNsb3VkIGFzc2VtYmx5IGFydGlmYWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRW50cnkge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIG1ldGFkYXRhIGVudHJ5LlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YS5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBkYXRhLlxuICAgKi9cbiAgcmVhZG9ubHkgZGF0YT86IE1ldGFkYXRhRW50cnlEYXRhO1xuXG4gIC8qKlxuICAgKiBBIHN0YWNrIHRyYWNlIGZvciB3aGVuIHRoZSBlbnRyeSB3YXMgY3JlYXRlZC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyB0cmFjZS5cbiAgICovXG4gIHJlYWRvbmx5IHRyYWNlPzogc3RyaW5nW107XG59XG4iXX0=