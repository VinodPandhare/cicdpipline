"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependable = exports.DependencyGroup = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/**
 * A set of constructs to be used as a dependable
 *
 * This class can be used when a set of constructs which are disjoint in the
 * construct tree needs to be combined to be used as a single dependable.
 *
 * @experimental
 */
class DependencyGroup {
    constructor(...deps) {
        this._deps = new Array();
        const self = this;
        Dependable.implement(this, {
            get dependencyRoots() {
                const result = new Array();
                for (const d of self._deps) {
                    result.push(...Dependable.of(d).dependencyRoots);
                }
                return result;
            },
        });
        this.add(...deps);
    }
    /**
     * Add a construct to the dependency roots
     */
    add(...scopes) {
        this._deps.push(...scopes);
    }
}
_a = JSII_RTTI_SYMBOL_1;
DependencyGroup[_a] = { fqn: "constructs.DependencyGroup", version: "10.3.0" };
exports.DependencyGroup = DependencyGroup;
const DEPENDABLE_SYMBOL = Symbol.for('@aws-cdk/core.DependableTrait');
/**
 * Trait for IDependable
 *
 * Traits are interfaces that are privately implemented by objects. Instead of
 * showing up in the public interface of a class, they need to be queried
 * explicitly. This is used to implement certain framework features that are
 * not intended to be used by Construct consumers, and so should be hidden
 * from accidental use.
 *
 * @example
 *
 * // Usage
 * const roots = Dependable.of(construct).dependencyRoots;
 *
 * // Definition
 * Dependable.implement(construct, {
 *       dependencyRoots: [construct],
 * });
 *
 * @experimental
 */
class Dependable {
    /**
     * Turn any object into an IDependable.
     */
    static implement(instance, trait) {
        // I would also like to reference classes (to cut down on the list of objects
        // we need to manage), but we can't do that either since jsii doesn't have the
        // concept of a class reference.
        instance[DEPENDABLE_SYMBOL] = trait;
    }
    /**
     * Return the matching Dependable for the given class instance.
     */
    static of(instance) {
        const ret = instance[DEPENDABLE_SYMBOL];
        if (!ret) {
            throw new Error(`${instance} does not implement IDependable. Use "Dependable.implement()" to implement`);
        }
        return ret;
    }
    /**
     * Return the matching Dependable for the given class instance.
     * @deprecated use `of`
     */
    static get(instance) {
        return this.of(instance);
    }
}
_b = JSII_RTTI_SYMBOL_1;
Dependable[_b] = { fqn: "constructs.Dependable", version: "10.3.0" };
exports.Dependable = Dependable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBaUJBOzs7Ozs7O0dBT0c7QUFDSCxNQUFhLGVBQWU7SUFHMUIsWUFBWSxHQUFHLElBQW1CO1FBRmpCLFVBQUssR0FBRyxJQUFJLEtBQUssRUFBZSxDQUFDO1FBR2hELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLGVBQWU7Z0JBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7Z0JBQ3ZDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQ2xEO2dCQUNELE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRyxDQUFDLEdBQUcsTUFBcUI7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0FBeEJVLDBDQUFlO0FBMkI1QixNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUV0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxNQUFzQixVQUFVO0lBQzlCOztPQUVHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFxQixFQUFFLEtBQWlCO1FBQzlELDZFQUE2RTtRQUM3RSw4RUFBOEU7UUFDOUUsZ0NBQWdDO1FBQy9CLFFBQWdCLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFxQjtRQUNwQyxNQUFNLEdBQUcsR0FBSSxRQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxRQUFRLDRFQUE0RSxDQUFDLENBQUM7U0FDMUc7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQXFCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0FBNUJtQixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tICcuL2NvbnN0cnVjdCc7XG5cbi8qKlxuICogVHJhaXQgbWFya2VyIGZvciBjbGFzc2VzIHRoYXQgY2FuIGJlIGRlcGVuZGVkIHVwb25cbiAqXG4gKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBpbnRlcmZhY2UgaW5kaWNhdGVzIHRoYXQgYW4gb2JqZWN0IGhhc1xuICogYW4gYElEZXBlbmRhYmxlYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBjYW4gYmUgdXNlZCB0byB0YWtlIGFuIChvcmRlcmluZykgZGVwZW5kZW5jeSBvbiBhIHNldCBvZlxuICogY29uc3RydWN0cy4gQW4gb3JkZXJpbmcgZGVwZW5kZW5jeSBpbXBsaWVzIHRoYXQgdGhlIHJlc291cmNlcyByZXByZXNlbnRlZCBieVxuICogdGhvc2UgY29uc3RydWN0cyBhcmUgZGVwbG95ZWQgYmVmb3JlIHRoZSByZXNvdXJjZXMgZGVwZW5kaW5nIE9OIHRoZW0gYXJlXG4gKiBkZXBsb3llZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGVwZW5kYWJsZSB7XG4gIC8vIEVtcHR5LCB0aGlzIGludGVyZmFjZSBpcyBhIHRyYWl0IG1hcmtlclxufVxuXG4vKipcbiAqIEEgc2V0IG9mIGNvbnN0cnVjdHMgdG8gYmUgdXNlZCBhcyBhIGRlcGVuZGFibGVcbiAqXG4gKiBUaGlzIGNsYXNzIGNhbiBiZSB1c2VkIHdoZW4gYSBzZXQgb2YgY29uc3RydWN0cyB3aGljaCBhcmUgZGlzam9pbnQgaW4gdGhlXG4gKiBjb25zdHJ1Y3QgdHJlZSBuZWVkcyB0byBiZSBjb21iaW5lZCB0byBiZSB1c2VkIGFzIGEgc2luZ2xlIGRlcGVuZGFibGUuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUdyb3VwIGltcGxlbWVudHMgSURlcGVuZGFibGUge1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXBzID0gbmV3IEFycmF5PElEZXBlbmRhYmxlPigpO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmRlcHM6IElEZXBlbmRhYmxlW10pIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIERlcGVuZGFibGUuaW1wbGVtZW50KHRoaXMsIHtcbiAgICAgIGdldCBkZXBlbmRlbmN5Um9vdHMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxJQ29uc3RydWN0PigpO1xuICAgICAgICBmb3IgKGNvbnN0IGQgb2Ygc2VsZi5fZGVwcykge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLkRlcGVuZGFibGUub2YoZCkuZGVwZW5kZW5jeVJvb3RzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkKC4uLmRlcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGNvbnN0cnVjdCB0byB0aGUgZGVwZW5kZW5jeSByb290c1xuICAgKi9cbiAgcHVibGljIGFkZCguLi5zY29wZXM6IElEZXBlbmRhYmxlW10pIHtcbiAgICB0aGlzLl9kZXBzLnB1c2goLi4uc2NvcGVzKTtcbiAgfVxufVxuXG5jb25zdCBERVBFTkRBQkxFX1NZTUJPTCA9IFN5bWJvbC5mb3IoJ0Bhd3MtY2RrL2NvcmUuRGVwZW5kYWJsZVRyYWl0Jyk7XG5cbi8qKlxuICogVHJhaXQgZm9yIElEZXBlbmRhYmxlXG4gKlxuICogVHJhaXRzIGFyZSBpbnRlcmZhY2VzIHRoYXQgYXJlIHByaXZhdGVseSBpbXBsZW1lbnRlZCBieSBvYmplY3RzLiBJbnN0ZWFkIG9mXG4gKiBzaG93aW5nIHVwIGluIHRoZSBwdWJsaWMgaW50ZXJmYWNlIG9mIGEgY2xhc3MsIHRoZXkgbmVlZCB0byBiZSBxdWVyaWVkXG4gKiBleHBsaWNpdGx5LiBUaGlzIGlzIHVzZWQgdG8gaW1wbGVtZW50IGNlcnRhaW4gZnJhbWV3b3JrIGZlYXR1cmVzIHRoYXQgYXJlXG4gKiBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBieSBDb25zdHJ1Y3QgY29uc3VtZXJzLCBhbmQgc28gc2hvdWxkIGJlIGhpZGRlblxuICogZnJvbSBhY2NpZGVudGFsIHVzZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFVzYWdlXG4gKiBjb25zdCByb290cyA9IERlcGVuZGFibGUub2YoY29uc3RydWN0KS5kZXBlbmRlbmN5Um9vdHM7XG4gKlxuICogLy8gRGVmaW5pdGlvblxuICogRGVwZW5kYWJsZS5pbXBsZW1lbnQoY29uc3RydWN0LCB7XG4gKiAgICAgICBkZXBlbmRlbmN5Um9vdHM6IFtjb25zdHJ1Y3RdLFxuICogfSk7XG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVwZW5kYWJsZSB7XG4gIC8qKlxuICAgKiBUdXJuIGFueSBvYmplY3QgaW50byBhbiBJRGVwZW5kYWJsZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW1wbGVtZW50KGluc3RhbmNlOiBJRGVwZW5kYWJsZSwgdHJhaXQ6IERlcGVuZGFibGUpIHtcbiAgICAvLyBJIHdvdWxkIGFsc28gbGlrZSB0byByZWZlcmVuY2UgY2xhc3NlcyAodG8gY3V0IGRvd24gb24gdGhlIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIC8vIHdlIG5lZWQgdG8gbWFuYWdlKSwgYnV0IHdlIGNhbid0IGRvIHRoYXQgZWl0aGVyIHNpbmNlIGpzaWkgZG9lc24ndCBoYXZlIHRoZVxuICAgIC8vIGNvbmNlcHQgb2YgYSBjbGFzcyByZWZlcmVuY2UuXG4gICAgKGluc3RhbmNlIGFzIGFueSlbREVQRU5EQUJMRV9TWU1CT0xdID0gdHJhaXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXRjaGluZyBEZXBlbmRhYmxlIGZvciB0aGUgZ2l2ZW4gY2xhc3MgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9mKGluc3RhbmNlOiBJRGVwZW5kYWJsZSk6IERlcGVuZGFibGUge1xuICAgIGNvbnN0IHJldCA9IChpbnN0YW5jZSBhcyBhbnkpW0RFUEVOREFCTEVfU1lNQk9MXTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2luc3RhbmNlfSBkb2VzIG5vdCBpbXBsZW1lbnQgSURlcGVuZGFibGUuIFVzZSBcIkRlcGVuZGFibGUuaW1wbGVtZW50KClcIiB0byBpbXBsZW1lbnRgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1hdGNoaW5nIERlcGVuZGFibGUgZm9yIHRoZSBnaXZlbiBjbGFzcyBpbnN0YW5jZS5cbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBvZmBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0KGluc3RhbmNlOiBJRGVwZW5kYWJsZSk6IERlcGVuZGFibGUge1xuICAgIHJldHVybiB0aGlzLm9mKGluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGNvbnN0cnVjdHMgdGhhdCBmb3JtIHRoZSByb290IG9mIHRoaXMgZGVwZW5kYWJsZVxuICAgKlxuICAgKiBBbGwgcmVzb3VyY2VzIHVuZGVyIGFsbCByZXR1cm5lZCBjb25zdHJ1Y3RzIGFyZSBpbmNsdWRlZCBpbiB0aGUgb3JkZXJpbmdcbiAgICogZGVwZW5kZW5jeS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBkZXBlbmRlbmN5Um9vdHM6IElDb25zdHJ1Y3RbXTtcbn1cbiJdfQ==