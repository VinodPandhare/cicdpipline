"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWZhY3Qtc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWZhY3Qtc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIHRvIGFjY2VzcyBhbiBJQU0gcm9sZSBjcmVhdGVkXG4gKiBhcyBwYXJ0IG9mIHRoZSBib290c3RyYXAgcHJvY2Vzc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEJvb3RzdHJhcFJvbGUge1xuICAvKipcbiAgICogVGhlIEFSTiBvZiB0aGUgSUFNIHJvbGUgY3JlYXRlZCBhcyBwYXJ0IG9mIGJvb3RyYXBwaW5nXG4gICAqIGUuZy4gbG9va3VwUm9sZUFyblxuICAgKi9cbiAgcmVhZG9ubHkgYXJuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEV4dGVybmFsIElEIHRvIHVzZSB3aGVuIGFzc3VtaW5nIHRoZSBib290c3RyYXAgcm9sZVxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIGV4dGVybmFsIElEXG4gICAqL1xuICByZWFkb25seSBhc3N1bWVSb2xlRXh0ZXJuYWxJZD86IHN0cmluZztcblxuICAvKipcbiAgICogVmVyc2lvbiBvZiBib290c3RyYXAgc3RhY2sgcmVxdWlyZWQgdG8gdXNlIHRoaXMgcm9sZVxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIGJvb3RzdHJhcCBzdGFjayByZXF1aXJlZFxuICAgKi9cbiAgcmVhZG9ubHkgcmVxdWlyZXNCb290c3RyYXBTdGFja1ZlcnNpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgU1NNIHBhcmFtZXRlciB3aXRoIGJvb3RzdHJhcCBzdGFjayB2ZXJzaW9uXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gRGlzY292ZXIgU1NNIHBhcmFtZXRlciBieSByZWFkaW5nIHN0YWNrXG4gICAqL1xuICByZWFkb25seSBib290c3RyYXBTdGFja1ZlcnNpb25Tc21QYXJhbWV0ZXI/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQXJ0aWZhY3QgcHJvcGVydGllcyBmb3IgQ2xvdWRGb3JtYXRpb24gc3RhY2tzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEF3c0Nsb3VkRm9ybWF0aW9uU3RhY2tQcm9wZXJ0aWVzIHtcbiAgLyoqXG4gICAqIEEgZmlsZSByZWxhdGl2ZSB0byB0aGUgYXNzZW1ibHkgcm9vdCB3aGljaCBjb250YWlucyB0aGUgQ2xvdWRGb3JtYXRpb24gdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2suXG4gICAqL1xuICByZWFkb25seSB0ZW1wbGF0ZUZpbGU6IHN0cmluZztcblxuICAvKipcbiAgICogVmFsdWVzIGZvciBDbG91ZEZvcm1hdGlvbiBzdGFjayBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB3aGVuIHRoZSBzdGFjayBpcyBkZXBsb3llZC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBObyBwYXJhbWV0ZXJzXG4gICAqL1xuICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qKlxuICAgKiBWYWx1ZXMgZm9yIENsb3VkRm9ybWF0aW9uIHN0YWNrIHRhZ3MgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHdoZW4gdGhlIHN0YWNrIGlzIGRlcGxveWVkLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIHRhZ3NcbiAgICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIHRvIHVzZSBmb3IgdGhlIENsb3VkRm9ybWF0aW9uIHN0YWNrLlxuICAgKiBAZGVmYXVsdCAtIG5hbWUgZGVyaXZlZCBmcm9tIGFydGlmYWN0IElEXG4gICAqL1xuICByZWFkb25seSBzdGFja05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIHRlcm1pbmF0aW9uIHByb3RlY3Rpb24gZm9yIHRoaXMgc3RhY2suXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSB0ZXJtaW5hdGlvblByb3RlY3Rpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcm9sZSB0aGF0IG5lZWRzIHRvIGJlIGFzc3VtZWQgdG8gZGVwbG95IHRoZSBzdGFja1xuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIHJvbGUgaXMgYXNzdW1lZCAoY3VycmVudCBjcmVkZW50aWFscyBhcmUgdXNlZClcbiAgICovXG4gIHJlYWRvbmx5IGFzc3VtZVJvbGVBcm4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEV4dGVybmFsIElEIHRvIHVzZSB3aGVuIGFzc3VtaW5nIHJvbGUgZm9yIGNsb3VkZm9ybWF0aW9uIGRlcGxveW1lbnRzXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gTm8gZXh0ZXJuYWwgSURcbiAgICovXG4gIHJlYWRvbmx5IGFzc3VtZVJvbGVFeHRlcm5hbElkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcm9sZSB0aGF0IGlzIHBhc3NlZCB0byBDbG91ZEZvcm1hdGlvbiB0byBleGVjdXRlIHRoZSBjaGFuZ2Ugc2V0XG4gICAqXG4gICAqIEBkZWZhdWx0IC0gTm8gcm9sZSBpcyBwYXNzZWQgKGN1cnJlbnRseSBhc3N1bWVkIHJvbGUvY3JlZGVudGlhbHMgYXJlIHVzZWQpXG4gICAqL1xuICByZWFkb25seSBjbG91ZEZvcm1hdGlvbkV4ZWN1dGlvblJvbGVBcm4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByb2xlIHRvIHVzZSB0byBsb29rIHVwIHZhbHVlcyBmcm9tIHRoZSB0YXJnZXQgQVdTIGFjY291bnRcbiAgICpcbiAgICogQGRlZmF1bHQgLSBObyByb2xlIGlzIGFzc3VtZWQgKGN1cnJlbnQgY3JlZGVudGlhbHMgYXJlIHVzZWQpXG4gICAqL1xuICByZWFkb25seSBsb29rdXBSb2xlPzogQm9vdHN0cmFwUm9sZTtcblxuICAvKipcbiAgICogSWYgdGhlIHN0YWNrIHRlbXBsYXRlIGhhcyBhbHJlYWR5IGJlZW4gaW5jbHVkZWQgaW4gdGhlIGFzc2V0IG1hbmlmZXN0LCBpdHMgYXNzZXQgVVJMXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gTm90IHVwbG9hZGVkIHlldCwgdXBsb2FkIGp1c3QgYmVmb3JlIGRlcGxveWluZ1xuICAgKi9cbiAgcmVhZG9ubHkgc3RhY2tUZW1wbGF0ZUFzc2V0T2JqZWN0VXJsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWZXJzaW9uIG9mIGJvb3RzdHJhcCBzdGFjayByZXF1aXJlZCB0byBkZXBsb3kgdGhpcyBzdGFja1xuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIGJvb3RzdHJhcCBzdGFjayByZXF1aXJlZFxuICAgKi9cbiAgcmVhZG9ubHkgcmVxdWlyZXNCb290c3RyYXBTdGFja1ZlcnNpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNTTSBwYXJhbWV0ZXIgd2hlcmUgdGhlIGJvb3RzdHJhcCBzdGFjayB2ZXJzaW9uIG51bWJlciBjYW4gYmUgZm91bmRcbiAgICpcbiAgICogT25seSB1c2VkIGlmIGByZXF1aXJlc0Jvb3RzdHJhcFN0YWNrVmVyc2lvbmAgaXMgc2V0LlxuICAgKlxuICAgKiAtIElmIHRoaXMgdmFsdWUgaXMgbm90IHNldCwgdGhlIGJvb3RzdHJhcCBzdGFjayBuYW1lIG11c3QgYmUga25vd24gYXRcbiAgICogICBkZXBsb3ltZW50IHRpbWUgc28gdGhlIHN0YWNrIHZlcnNpb24gY2FuIGJlIGxvb2tlZCB1cCBmcm9tIHRoZSBzdGFja1xuICAgKiAgIG91dHB1dHMuXG4gICAqIC0gSWYgdGhpcyB2YWx1ZSBpcyBzZXQsIHRoZSBib290c3RyYXAgc3RhY2sgY2FuIGhhdmUgYW55IG5hbWUgYmVjYXVzZVxuICAgKiAgIHdlIHdvbid0IG5lZWQgdG8gbG9vayBpdCB1cC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBCb290c3RyYXAgc3RhY2sgdmVyc2lvbiBudW1iZXIgbG9va2VkIHVwXG4gICAqL1xuICByZWFkb25seSBib290c3RyYXBTdGFja1ZlcnNpb25Tc21QYXJhbWV0ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBzdGFjayBzaG91bGQgYmUgdmFsaWRhdGVkIGJ5IHRoZSBDTEkgYWZ0ZXIgc3ludGhlc2lzXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IHZhbGlkYXRlT25TeW50aD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQXJ0aWZhY3QgcHJvcGVydGllcyBmb3IgdGhlIEFzc2V0IE1hbmlmZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXNzZXRNYW5pZmVzdFByb3BlcnRpZXMge1xuICAvKipcbiAgICogRmlsZW5hbWUgb2YgdGhlIGFzc2V0IG1hbmlmZXN0XG4gICAqL1xuICByZWFkb25seSBmaWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZlcnNpb24gb2YgYm9vdHN0cmFwIHN0YWNrIHJlcXVpcmVkIHRvIGRlcGxveSB0aGlzIHN0YWNrXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gVmVyc2lvbiAxIChiYXNpYyBtb2Rlcm4gYm9vdHN0cmFwIHN0YWNrKVxuICAgKi9cbiAgcmVhZG9ubHkgcmVxdWlyZXNCb290c3RyYXBTdGFja1ZlcnNpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNTTSBwYXJhbWV0ZXIgd2hlcmUgdGhlIGJvb3RzdHJhcCBzdGFjayB2ZXJzaW9uIG51bWJlciBjYW4gYmUgZm91bmRcbiAgICpcbiAgICogLSBJZiB0aGlzIHZhbHVlIGlzIG5vdCBzZXQsIHRoZSBib290c3RyYXAgc3RhY2sgbmFtZSBtdXN0IGJlIGtub3duIGF0XG4gICAqICAgZGVwbG95bWVudCB0aW1lIHNvIHRoZSBzdGFjayB2ZXJzaW9uIGNhbiBiZSBsb29rZWQgdXAgZnJvbSB0aGUgc3RhY2tcbiAgICogICBvdXRwdXRzLlxuICAgKiAtIElmIHRoaXMgdmFsdWUgaXMgc2V0LCB0aGUgYm9vdHN0cmFwIHN0YWNrIGNhbiBoYXZlIGFueSBuYW1lIGJlY2F1c2VcbiAgICogICB3ZSB3b24ndCBuZWVkIHRvIGxvb2sgaXQgdXAuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gQm9vdHN0cmFwIHN0YWNrIHZlcnNpb24gbnVtYmVyIGxvb2tlZCB1cFxuICAgKi9cbiAgcmVhZG9ubHkgYm9vdHN0cmFwU3RhY2tWZXJzaW9uU3NtUGFyYW1ldGVyPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEFydGlmYWN0IHByb3BlcnRpZXMgZm9yIHRoZSBDb25zdHJ1Y3QgVHJlZSBBcnRpZmFjdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVBcnRpZmFjdFByb3BlcnRpZXMge1xuICAvKipcbiAgICogRmlsZW5hbWUgb2YgdGhlIHRyZWUgYXJ0aWZhY3RcbiAgICovXG4gIHJlYWRvbmx5IGZpbGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBcnRpZmFjdCBwcm9wZXJ0aWVzIGZvciBuZXN0ZWQgY2xvdWQgYXNzZW1ibGllc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE5lc3RlZENsb3VkQXNzZW1ibHlQcm9wZXJ0aWVzIHtcbiAgLyoqXG4gICAqIFJlbGF0aXZlIHBhdGggdG8gdGhlIG5lc3RlZCBjbG91ZCBhc3NlbWJseVxuICAgKi9cbiAgcmVhZG9ubHkgZGlyZWN0b3J5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IG5hbWUgZm9yIHRoZSBjbG91ZCBhc3NlbWJseVxuICAgKlxuICAgKiBAZGVmYXVsdCAtIFRoZSBhcnRpZmFjdCBJRFxuICAgKi9cbiAgcmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgbWFuaWZlc3QgYXJ0aWZhY3RzXG4gKi9cbmV4cG9ydCB0eXBlIEFydGlmYWN0UHJvcGVydGllcyA9IEF3c0Nsb3VkRm9ybWF0aW9uU3RhY2tQcm9wZXJ0aWVzXG58IEFzc2V0TWFuaWZlc3RQcm9wZXJ0aWVzXG58IFRyZWVBcnRpZmFjdFByb3BlcnRpZXNcbnwgTmVzdGVkQ2xvdWRBc3NlbWJseVByb3BlcnRpZXM7XG4iXX0=