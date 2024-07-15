"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructOrder = exports.Construct = exports.Node = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const metadata_1 = require("./metadata");
const dependency_1 = require("./private/dependency");
const stack_trace_1 = require("./private/stack-trace");
const uniqueid_1 = require("./private/uniqueid");
const CONSTRUCT_NODE_PROPERTY_SYMBOL = Symbol.for('constructs.Construct.node');
/**
 * Represents the construct node in the scope tree.
 */
class Node {
    constructor(host, scope, id) {
        this.host = host;
        this._locked = false; // if this is "true", addChild will fail
        this._aspects = [];
        this._children = {};
        this._context = {};
        this._metadata = new Array();
        this._dependencies = new Set();
        this.invokedAspects = [];
        this._validations = new Array();
        id = id || ''; // if undefined, convert to empty string
        this.id = sanitizeId(id);
        this.scope = scope;
        // We say that scope is required, but root scopes will bypass the type
        // checks and actually pass in 'undefined'.
        if (scope != null) {
            if (id === '') {
                throw new Error('Only root constructs may have an empty name');
            }
            // Has side effect so must be very last thing in constructor
            Node.of(scope).addChild(host, this.id);
        }
        else {
            // This is a root construct.
            this.id = id;
        }
    }
    /**
     * Returns the node associated with a construct.
     * @param construct the construct
     */
    static of(construct) {
        const node = construct[CONSTRUCT_NODE_PROPERTY_SYMBOL];
        if (!node) {
            throw new Error('construct does not have an associated node. All constructs must extend the "Construct" base class');
        }
        return node;
    }
    /**
     * The full, absolute path of this construct in the tree.
     *
     * Components are separated by '/'.
     */
    get path() {
        const components = this.scopes.slice(1).map(c => Node.of(c).id);
        return components.join(Node.PATH_SEP);
    }
    /**
     * Returns an opaque tree-unique address for this construct.
     *
     * Addresses are 42 characters hexadecimal strings. They begin with "c8"
     * followed by 40 lowercase hexadecimal characters (0-9a-f).
     *
     * Addresses are calculated using a SHA-1 of the components of the construct
     * path.
     *
     * To enable refactorings of construct trees, constructs with the ID `Default`
     * will be excluded from the calculation. In those cases constructs in the
     * same tree may have the same addreess.
     *
     * @example c83a2846e506bcc5f10682b564084bca2d275709ee
     */
    get addr() {
        if (!this._addr) {
            this._addr = uniqueid_1.addressOf(this.scopes.map(c => Node.of(c).id));
        }
        return this._addr;
    }
    /**
     * A tree-global unique alphanumeric identifier for this construct. Includes
     * all components of the tree.
     *
     * @deprecated please avoid using this property and use `addr` to form unique names.
     * This algorithm uses MD5, which is not FIPS-complient and also excludes the
     * identity of the root construct from the calculation.
     */
    get uniqueId() {
        const components = this.scopes.slice(1).map(c => Node.of(c).id);
        return components.length > 0 ? uniqueid_1.makeLegacyUniqueId(components) : '';
    }
    /**
     * Return a direct child by id, or undefined
     *
     * @param id Identifier of direct child
     * @returns the child if found, or undefined
     */
    tryFindChild(id) {
        return this._children[sanitizeId(id)];
    }
    /**
     * Return a direct child by id
     *
     * Throws an error if the child is not found.
     *
     * @param id Identifier of direct child
     * @returns Child with the given id.
     */
    findChild(id) {
        const ret = this.tryFindChild(id);
        if (!ret) {
            throw new Error(`No child with id: '${id}'`);
        }
        return ret;
    }
    /**
     * Returns the child construct that has the id `Default` or `Resource"`.
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     *
     * @throws if there is more than one child
     * @returns a construct or undefined if there is no default child
     */
    get defaultChild() {
        if (this._defaultChild !== undefined) {
            return this._defaultChild;
        }
        const resourceChild = this.tryFindChild('Resource');
        const defaultChild = this.tryFindChild('Default');
        if (resourceChild && defaultChild) {
            throw new Error(`Cannot determine default child for ${this.path}. There is both a child with id "Resource" and id "Default"`);
        }
        return defaultChild || resourceChild;
    }
    /**
     * Override the defaultChild property.
     *
     * This should only be used in the cases where the correct
     * default child is not named 'Resource' or 'Default' as it
     * should be.
     *
     * If you set this to undefined, the default behavior of finding
     * the child named 'Resource' or 'Default' will be used.
     */
    set defaultChild(value) {
        this._defaultChild = value;
    }
    /**
     * All direct children of this construct.
     */
    get children() {
        return Object.values(this._children);
    }
    /**
     * Return this construct and all of its children in the given order
     */
    findAll(order = ConstructOrder.PREORDER) {
        const ret = new Array();
        visit(this.host);
        return ret;
        function visit(c) {
            if (order === ConstructOrder.PREORDER) {
                ret.push(c);
            }
            for (const child of Node.of(c).children) {
                visit(child);
            }
            if (order === ConstructOrder.POSTORDER) {
                ret.push(c);
            }
        }
    }
    /**
     * This can be used to set contextual values.
     * Context must be set before any children are added, since children may consult context info during construction.
     * If the key already exists, it will be overridden.
     * @param key The context key
     * @param value The context value
     */
    setContext(key, value) {
        if (this.children.length > 0) {
            const names = this.children.map(c => Node.of(c).id);
            throw new Error('Cannot set context after children have been added: ' + names.join(','));
        }
        this._context[key] = value;
    }
    /**
     * Retrieves a value from tree context.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param key The context key
     * @returns The context value or `undefined` if there is no context value for thie key.
     */
    tryGetContext(key) {
        const value = this._context[key];
        if (value !== undefined) {
            return value;
        }
        return this.scope && Node.of(this.scope).tryGetContext(key);
    }
    /**
     * An immutable array of metadata objects associated with this construct.
     * This can be used, for example, to implement support for deprecation notices, source mapping, etc.
     */
    get metadata() {
        return [...this._metadata];
    }
    /**
     * Adds a metadata entry to this construct.
     * Entries are arbitrary values and will also include a stack trace to allow tracing back to
     * the code location for when the entry was added. It can be used, for example, to include source
     * mapping in CloudFormation templates to improve diagnostics.
     *
     * @param type a string denoting the type of metadata
     * @param data the value of the metadata (can be a Token). If null/undefined, metadata will not be added.
     * @param fromFunction a function under which to restrict the metadata entry's stack trace (defaults to this.addMetadata)
     */
    addMetadata(type, data, fromFunction) {
        if (data == null) {
            return;
        }
        const trace = this.tryGetContext(metadata_1.ConstructMetadata.DISABLE_STACK_TRACE_IN_METADATA)
            ? undefined
            : stack_trace_1.captureStackTrace(fromFunction || this.addMetadata);
        this._metadata.push({ type, data, trace });
    }
    /**
     * Adds a { "info": <message> } metadata entry to this construct.
     * The toolkit will display the info message when apps are synthesized.
     * @param message The info message.
     */
    addInfo(message) {
        this.addMetadata(metadata_1.ConstructMetadata.INFO_METADATA_KEY, message);
    }
    /**
     * Adds a { "warning": <message> } metadata entry to this construct.
     * The toolkit will display the warning when an app is synthesized, or fail
     * if run in --strict mode.
     * @param message The warning message.
     */
    addWarning(message) {
        this.addMetadata(metadata_1.ConstructMetadata.WARNING_METADATA_KEY, message);
    }
    /**
     * Adds an { "error": <message> } metadata entry to this construct.
     * The toolkit will fail synthesis when errors are reported.
     * @param message The error message.
     */
    addError(message) {
        this.addMetadata(metadata_1.ConstructMetadata.ERROR_METADATA_KEY, message);
    }
    /**
     * Applies the aspect to this Constructs node
     */
    applyAspect(aspect) {
        this._aspects.push(aspect);
        return;
    }
    /**
     * All parent scopes of this construct.
     *
     * @returns a list of parent scopes. The last element in the list will always
     * be the current construct and the first element will be the root of the
     * tree.
     */
    get scopes() {
        const ret = new Array();
        let curr = this.host;
        while (curr) {
            ret.unshift(curr);
            curr = Node.of(curr).scope;
        }
        return ret;
    }
    /**
     * Returns the root of the construct tree.
     * @returns The root of the construct tree.
     */
    get root() {
        return this.scopes[0];
    }
    /**
     * Returns true if this construct or the scopes in which it is defined are
     * locked.
     */
    get locked() {
        if (this._locked) {
            return true;
        }
        if (this.scope && Node.of(this.scope).locked) {
            return true;
        }
        return false;
    }
    /**
     * Add an ordering dependency on another Construct.
     *
     * All constructs in the dependency's scope will be deployed before any
     * construct in this construct's scope.
     */
    addDependency(...dependencies) {
        for (const dependency of dependencies) {
            this._dependencies.add(dependency);
        }
    }
    /**
     * Return all dependencies registered on this node or any of its children
     */
    get dependencies() {
        const found = new Map(); // Deduplication map
        const ret = new Array();
        for (const source of this.findAll()) {
            for (const dependable of Node.of(source)._dependencies) {
                for (const target of dependency_1.DependableTrait.get(dependable).dependencyRoots) {
                    let foundTargets = found.get(source);
                    if (!foundTargets) {
                        found.set(source, foundTargets = new Set());
                    }
                    if (!foundTargets.has(target)) {
                        ret.push({ source, target });
                        foundTargets.add(target);
                    }
                }
            }
        }
        return ret;
    }
    /**
     * Remove the child with the given name, if present.
     *
     * @returns Whether a child with the given name was deleted.
     * @experimental
     */
    tryRemoveChild(childName) {
        if (!(childName in this._children)) {
            return false;
        }
        delete this._children[childName];
        return true;
    }
    /**
     * Adds a validation to this construct.
     *
     * When `node.validate()` is called, the `validate()` method will be called on
     * all validations and all errors will be returned.
     *
     * @param validation
     */
    addValidation(validation) {
        this._validations.push(validation);
    }
    /**
     * Synthesizes a CloudAssembly from a construct tree.
     * @param options Synthesis options.
     */
    synthesize(options) {
        // the three holy phases of synthesis: prepare, validate and synthesize
        // prepare
        this.prepare();
        // validate
        const validate = options.skipValidation === undefined ? true : !options.skipValidation;
        if (validate) {
            const errors = this.validate();
            if (errors.length > 0) {
                const errorList = errors.map(e => `[${Node.of(e.source).path}] ${e.message}`).join('\n  ');
                throw new Error(`Validation failed with the following errors:\n  ${errorList}`);
            }
        }
        // synthesize (leaves first)
        for (const construct of this.findAll(ConstructOrder.POSTORDER)) {
            const node = Node.of(construct);
            try {
                node._lock();
                const ctx = {
                    ...options.sessionContext,
                    outdir: options.outdir,
                };
                construct.onSynthesize(ctx); // "as any" is needed because we want to keep "synthesize" protected
            }
            finally {
                node._unlock();
            }
        }
    }
    /**
     * Invokes "prepare" on all constructs (depth-first, post-order) in the tree under `node`.
     */
    prepare() {
        // Aspects are applied root to leaf
        for (const construct of this.findAll(ConstructOrder.PREORDER)) {
            Node.of(construct).invokeAspects();
        }
        // since constructs can be added to the tree during invokeAspects, call findAll() to recreate the list.
        // use PREORDER.reverse() for backward compatability
        for (const construct of this.findAll(ConstructOrder.PREORDER).reverse()) {
            const cn = construct;
            if ('onPrepare' in cn) {
                if (typeof (cn.onPrepare) !== 'function') {
                    throw new Error('expecting "onPrepare" to be a function');
                }
                cn.onPrepare();
            }
        }
    }
    /**
     * Validates tree (depth-first, pre-order) and returns the list of all errors.
     * An empty list indicates that there are no errors.
     */
    validate() {
        let errors = new Array();
        for (const child of this.children) {
            errors = errors.concat(Node.of(child).validate());
        }
        const localErrors = this.host.onValidate(); // "as any" is needed because we want to keep "validate" protected
        // invoke validations
        for (const v of this._validations) {
            localErrors.push(...v.validate());
        }
        return errors.concat(localErrors.map(msg => ({ source: this.host, message: msg })));
    }
    /**
     * Locks this construct from allowing more children to be added. After this
     * call, no more children can be added to this construct or to any children.
     * @internal
     */
    _lock() {
        this._locked = true;
    }
    /**
     * Unlocks this costruct and allows mutations (adding children).
     * @internal
     */
    _unlock() {
        this._locked = false;
    }
    /**
     * Adds a child construct to this node.
     *
     * @param child The child construct
     * @param childName The type name of the child construct.
     * @returns The resolved path part name of the child
     */
    addChild(child, childName) {
        if (this.locked) {
            // special error if root is locked
            if (!this.path) {
                throw new Error('Cannot add children during synthesis');
            }
            throw new Error(`Cannot add children to "${this.path}" during synthesis`);
        }
        if (childName in this._children) {
            const name = this.id || '';
            const typeName = this.host.constructor.name;
            throw new Error(`There is already a Construct with name '${childName}' in ${typeName}${name.length > 0 ? ' [' + name + ']' : ''}`);
        }
        this._children[childName] = child;
    }
    /**
     * Triggers each aspect to invoke visit
     */
    invokeAspects() {
        const descendants = this.findAll();
        for (const aspect of this._aspects) {
            if (this.invokedAspects.includes(aspect)) {
                continue;
            }
            descendants.forEach(member => aspect.visit(member));
            this.invokedAspects.push(aspect);
        }
    }
}
exports.Node = Node;
_a = JSII_RTTI_SYMBOL_1;
Node[_a] = { fqn: "constructs.Node", version: "3.4.344" };
/**
 * Separator used to delimit construct path components.
 */
Node.PATH_SEP = '/';
/**
 * Represents the building block of the construct graph.
 *
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 */
class Construct {
    /**
     * Creates a new construct node.
     *
     * @param scope The scope in which to define this construct
     * @param id The scoped construct ID. Must be unique amongst siblings. If
     * the ID includes a path separator (`/`), then it will be replaced by double
     * dash `--`.
     * @param options Options
     */
    constructor(scope, id, options = {}) {
        // attach the construct to the construct tree by creating a node
        const nodeFactory = options.nodeFactory ?? { createNode: (host, nodeScope, nodeId) => new Node(host, nodeScope, nodeId) };
        Object.defineProperty(this, CONSTRUCT_NODE_PROPERTY_SYMBOL, {
            value: nodeFactory.createNode(this, scope, id),
            enumerable: false,
            configurable: false,
        });
        // implement IDependable privately
        dependency_1.DependableTrait.implement(this, {
            dependencyRoots: [this],
        });
    }
    /**
     * Returns a string representation of this construct.
     */
    toString() {
        return Node.of(this).path || '<root>';
    }
    /**
     * Validate the current construct.
     *
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     *
     * @returns An array of validation error messages, or an empty array if there the construct is valid.
     * @deprecated use `Node.addValidation()` to subscribe validation functions on this construct
     * instead of overriding this method.
     */
    onValidate() {
        return [];
    }
    /**
     * Perform final modifications before synthesis
     *
     * This method can be implemented by derived constructs in order to perform
     * final changes before synthesis. prepare() will be called after child
     * constructs have been prepared.
     *
     * This is an advanced framework feature. Only use this if you
     * understand the implications.
     */
    onPrepare() {
        return;
    }
    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     *
     * This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
     * as they participate in synthesizing the cloud assembly.
     *
     * @param session The synthesis session.
     */
    onSynthesize(session) {
        ignore(session);
    }
}
exports.Construct = Construct;
_b = JSII_RTTI_SYMBOL_1;
Construct[_b] = { fqn: "constructs.Construct", version: "3.4.344" };
/**
 * In what order to return constructs
 */
var ConstructOrder;
(function (ConstructOrder) {
    /**
     * Depth-first, pre-order
     */
    ConstructOrder[ConstructOrder["PREORDER"] = 0] = "PREORDER";
    /**
     * Depth-first, post-order (leaf nodes first)
     */
    ConstructOrder[ConstructOrder["POSTORDER"] = 1] = "POSTORDER";
})(ConstructOrder = exports.ConstructOrder || (exports.ConstructOrder = {}));
function ignore(_x) {
    return;
}
// Import this _after_ everything else to help node work the classes out in the correct order...
const PATH_SEP_REGEX = new RegExp(`${Node.PATH_SEP}`, 'g');
/**
 * Return a sanitized version of an arbitrary string, so it can be used as an ID
 */
function sanitizeId(id) {
    // Escape path seps as double dashes
    return id.replace(PATH_SEP_REGEX, '--');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0cnVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHlDQUE4RDtBQUM5RCxxREFBdUQ7QUFDdkQsdURBQTBEO0FBQzFELGlEQUFtRTtBQUVuRSxNQUFNLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQU8vRTs7R0FFRztBQUNILE1BQWEsSUFBSTtJQTRDZixZQUE2QixJQUFlLEVBQUUsS0FBaUIsRUFBRSxFQUFVO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQVc7UUFYcEMsWUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLHdDQUF3QztRQUNoRCxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBaUMsRUFBRyxDQUFDO1FBQzlDLGFBQVEsR0FBMkIsRUFBRyxDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxJQUFJLEtBQUssRUFBaUIsQ0FBQztRQUN2QyxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFjLENBQUM7UUFDdEMsbUJBQWMsR0FBYyxFQUFFLENBQUM7UUFFL0IsaUJBQVksR0FBRyxJQUFJLEtBQUssRUFBZSxDQUFDO1FBSXZELEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsd0NBQXdDO1FBRXZELElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLHNFQUFzRTtRQUN0RSwyQ0FBMkM7UUFDM0MsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7YUFDaEU7WUFFRCw0REFBNEQ7WUFDNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFR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O0FBQ0gsU0FBUyxVQUFVLENBQUMsRUFBVTtJQUM1QixvQ0FBb0M7SUFDcEMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFzcGVjdCB9IGZyb20gJy4vYXNwZWN0JztcbmltcG9ydCB7IENvbnN0cnVjdE1ldGFkYXRhLCBNZXRhZGF0YUVudHJ5IH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBEZXBlbmRhYmxlVHJhaXQgfSBmcm9tICcuL3ByaXZhdGUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgeyBjYXB0dXJlU3RhY2tUcmFjZSB9IGZyb20gJy4vcHJpdmF0ZS9zdGFjay10cmFjZSc7XG5pbXBvcnQgeyBtYWtlTGVnYWN5VW5pcXVlSWQsIGFkZHJlc3NPZiB9IGZyb20gJy4vcHJpdmF0ZS91bmlxdWVpZCc7XG5cbmNvbnN0IENPTlNUUlVDVF9OT0RFX1BST1BFUlRZX1NZTUJPTCA9IFN5bWJvbC5mb3IoJ2NvbnN0cnVjdHMuQ29uc3RydWN0Lm5vZGUnKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29uc3RydWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb25zdHJ1Y3QgeyB9XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY29uc3RydWN0IG5vZGUgaW4gdGhlIHNjb3BlIHRyZWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgLyoqXG4gICAqIFNlcGFyYXRvciB1c2VkIHRvIGRlbGltaXQgY29uc3RydWN0IHBhdGggY29tcG9uZW50cy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEFUSF9TRVAgPSAnLyc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vZGUgYXNzb2NpYXRlZCB3aXRoIGEgY29uc3RydWN0LlxuICAgKiBAcGFyYW0gY29uc3RydWN0IHRoZSBjb25zdHJ1Y3RcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgb2YoY29uc3RydWN0OiBJQ29uc3RydWN0KTogTm9kZSB7XG4gICAgY29uc3Qgbm9kZSA9IChjb25zdHJ1Y3QgYXMgYW55KVtDT05TVFJVQ1RfTk9ERV9QUk9QRVJUWV9TWU1CT0xdIGFzIE5vZGU7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnN0cnVjdCBkb2VzIG5vdCBoYXZlIGFuIGFzc29jaWF0ZWQgbm9kZS4gQWxsIGNvbnN0cnVjdHMgbXVzdCBleHRlbmQgdGhlIFwiQ29uc3RydWN0XCIgYmFzZSBjbGFzcycpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjb3BlIGluIHdoaWNoIHRoaXMgY29uc3RydWN0IGlzIGRlZmluZWQuXG4gICAqXG4gICAqIFRoZSB2YWx1ZSBpcyBgdW5kZWZpbmVkYCBhdCB0aGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHNjb3BlIHRyZWUuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc2NvcGU/OiBJQ29uc3RydWN0O1xuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhpcyBjb25zdHJ1Y3Qgd2l0aGluIHRoZSBjdXJyZW50IHNjb3BlLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgYSBzY29wZS11bmlxdWUgaWQuIFRvIG9idGFpbiBhbiBhcHAtdW5pcXVlIGlkIGZvciB0aGlzIGNvbnN0cnVjdCwgdXNlIGB1bmlxdWVJZGAuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICBwcml2YXRlIF9sb2NrZWQgPSBmYWxzZTsgLy8gaWYgdGhpcyBpcyBcInRydWVcIiwgYWRkQ2hpbGQgd2lsbCBmYWlsXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FzcGVjdHM6IElBc3BlY3RbXSA9IFtdO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jaGlsZHJlbjogeyBbaWQ6IHN0cmluZ106IElDb25zdHJ1Y3QgfSA9IHsgfTtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29udGV4dDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHsgfTtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWV0YWRhdGEgPSBuZXcgQXJyYXk8TWV0YWRhdGFFbnRyeT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGVwZW5kZW5jaWVzID0gbmV3IFNldDxJQ29uc3RydWN0PigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGludm9rZWRBc3BlY3RzOiBJQXNwZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfZGVmYXVsdENoaWxkOiBJQ29uc3RydWN0IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHJlYWRvbmx5IF92YWxpZGF0aW9ucyA9IG5ldyBBcnJheTxJVmFsaWRhdGlvbj4oKTtcbiAgcHJpdmF0ZSBfYWRkcj86IHN0cmluZzsgLy8gY2FjaGVcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IENvbnN0cnVjdCwgc2NvcGU6IElDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICBpZCA9IGlkIHx8ICcnOyAvLyBpZiB1bmRlZmluZWQsIGNvbnZlcnQgdG8gZW1wdHkgc3RyaW5nXG5cbiAgICB0aGlzLmlkID0gc2FuaXRpemVJZChpZCk7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuXG4gICAgLy8gV2Ugc2F5IHRoYXQgc2NvcGUgaXMgcmVxdWlyZWQsIGJ1dCByb290IHNjb3BlcyB3aWxsIGJ5cGFzcyB0aGUgdHlwZVxuICAgIC8vIGNoZWNrcyBhbmQgYWN0dWFsbHkgcGFzcyBpbiAndW5kZWZpbmVkJy5cbiAgICBpZiAoc2NvcGUgIT0gbnVsbCkge1xuICAgICAgaWYgKGlkID09PSAnJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgcm9vdCBjb25zdHJ1Y3RzIG1heSBoYXZlIGFuIGVtcHR5IG5hbWUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFzIHNpZGUgZWZmZWN0IHNvIG11c3QgYmUgdmVyeSBsYXN0IHRoaW5nIGluIGNvbnN0cnVjdG9yXG4gICAgICBOb2RlLm9mKHNjb3BlKS5hZGRDaGlsZChob3N0LCB0aGlzLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpcyBhIHJvb3QgY29uc3RydWN0LlxuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVsbCwgYWJzb2x1dGUgcGF0aCBvZiB0aGlzIGNvbnN0cnVjdCBpbiB0aGUgdHJlZS5cbiAgICpcbiAgICogQ29tcG9uZW50cyBhcmUgc2VwYXJhdGVkIGJ5ICcvJy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLnNjb3Blcy5zbGljZSgxKS5tYXAoYyA9PiBOb2RlLm9mKGMpLmlkKTtcbiAgICByZXR1cm4gY29tcG9uZW50cy5qb2luKE5vZGUuUEFUSF9TRVApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb3BhcXVlIHRyZWUtdW5pcXVlIGFkZHJlc3MgZm9yIHRoaXMgY29uc3RydWN0LlxuICAgKlxuICAgKiBBZGRyZXNzZXMgYXJlIDQyIGNoYXJhY3RlcnMgaGV4YWRlY2ltYWwgc3RyaW5ncy4gVGhleSBiZWdpbiB3aXRoIFwiYzhcIlxuICAgKiBmb2xsb3dlZCBieSA0MCBsb3dlcmNhc2UgaGV4YWRlY2ltYWwgY2hhcmFjdGVycyAoMC05YS1mKS5cbiAgICpcbiAgICogQWRkcmVzc2VzIGFyZSBjYWxjdWxhdGVkIHVzaW5nIGEgU0hBLTEgb2YgdGhlIGNvbXBvbmVudHMgb2YgdGhlIGNvbnN0cnVjdFxuICAgKiBwYXRoLlxuICAgKlxuICAgKiBUbyBlbmFibGUgcmVmYWN0b3JpbmdzIG9mIGNvbnN0cnVjdCB0cmVlcywgY29uc3RydWN0cyB3aXRoIHRoZSBJRCBgRGVmYXVsdGBcbiAgICogd2lsbCBiZSBleGNsdWRlZCBmcm9tIHRoZSBjYWxjdWxhdGlvbi4gSW4gdGhvc2UgY2FzZXMgY29uc3RydWN0cyBpbiB0aGVcbiAgICogc2FtZSB0cmVlIG1heSBoYXZlIHRoZSBzYW1lIGFkZHJlZXNzLlxuICAgKlxuICAgKiBAZXhhbXBsZSBjODNhMjg0NmU1MDZiY2M1ZjEwNjgyYjU2NDA4NGJjYTJkMjc1NzA5ZWVcbiAgICovXG4gIHB1YmxpYyBnZXQgYWRkcigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fYWRkcikge1xuICAgICAgdGhpcy5fYWRkciA9IGFkZHJlc3NPZih0aGlzLnNjb3Blcy5tYXAoYyA9PiBOb2RlLm9mKGMpLmlkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2FkZHI7XG4gIH1cblxuICAvKipcbiAgICogQSB0cmVlLWdsb2JhbCB1bmlxdWUgYWxwaGFudW1lcmljIGlkZW50aWZpZXIgZm9yIHRoaXMgY29uc3RydWN0LiBJbmNsdWRlc1xuICAgKiBhbGwgY29tcG9uZW50cyBvZiB0aGUgdHJlZS5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIGF2b2lkIHVzaW5nIHRoaXMgcHJvcGVydHkgYW5kIHVzZSBgYWRkcmAgdG8gZm9ybSB1bmlxdWUgbmFtZXMuXG4gICAqIFRoaXMgYWxnb3JpdGhtIHVzZXMgTUQ1LCB3aGljaCBpcyBub3QgRklQUy1jb21wbGllbnQgYW5kIGFsc28gZXhjbHVkZXMgdGhlXG4gICAqIGlkZW50aXR5IG9mIHRoZSByb290IGNvbnN0cnVjdCBmcm9tIHRoZSBjYWxjdWxhdGlvbi5cbiAgICovXG4gIHB1YmxpYyBnZXQgdW5pcXVlSWQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5zY29wZXMuc2xpY2UoMSkubWFwKGMgPT4gTm9kZS5vZihjKS5pZCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHMubGVuZ3RoID4gMCA/IG1ha2VMZWdhY3lVbmlxdWVJZChjb21wb25lbnRzKSA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGRpcmVjdCBjaGlsZCBieSBpZCwgb3IgdW5kZWZpbmVkXG4gICAqXG4gICAqIEBwYXJhbSBpZCBJZGVudGlmaWVyIG9mIGRpcmVjdCBjaGlsZFxuICAgKiBAcmV0dXJucyB0aGUgY2hpbGQgaWYgZm91bmQsIG9yIHVuZGVmaW5lZFxuICAgKi9cbiAgcHVibGljIHRyeUZpbmRDaGlsZChpZDogc3RyaW5nKTogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW3Nhbml0aXplSWQoaWQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBkaXJlY3QgY2hpbGQgYnkgaWRcbiAgICpcbiAgICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBjaGlsZCBpcyBub3QgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBpZCBJZGVudGlmaWVyIG9mIGRpcmVjdCBjaGlsZFxuICAgKiBAcmV0dXJucyBDaGlsZCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICovXG4gIHB1YmxpYyBmaW5kQ2hpbGQoaWQ6IHN0cmluZyk6IElDb25zdHJ1Y3Qge1xuICAgIGNvbnN0IHJldCA9IHRoaXMudHJ5RmluZENoaWxkKGlkKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjaGlsZCB3aXRoIGlkOiAnJHtpZH0nYCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2hpbGQgY29uc3RydWN0IHRoYXQgaGFzIHRoZSBpZCBgRGVmYXVsdGAgb3IgYFJlc291cmNlXCJgLlxuICAgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGNvbnN0cnVjdCB0aGF0IHByb3ZpZGVzIHRoZSBidWxrIG9mIHRoZSB1bmRlcmx5aW5nIGZ1bmN0aW9uYWxpdHkuXG4gICAqIFVzZWZ1bCBmb3IgbW9kaWZpY2F0aW9ucyBvZiB0aGUgdW5kZXJseWluZyBjb25zdHJ1Y3QgdGhhdCBhcmUgbm90IGF2YWlsYWJsZSBhdCB0aGUgaGlnaGVyIGxldmVscy5cbiAgICpcbiAgICogQHRocm93cyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGNoaWxkXG4gICAqIEByZXR1cm5zIGEgY29uc3RydWN0IG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IGNoaWxkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRDaGlsZCgpOiBJQ29uc3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5fZGVmYXVsdENoaWxkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2hpbGQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzb3VyY2VDaGlsZCA9IHRoaXMudHJ5RmluZENoaWxkKCdSZXNvdXJjZScpO1xuICAgIGNvbnN0IGRlZmF1bHRDaGlsZCA9IHRoaXMudHJ5RmluZENoaWxkKCdEZWZhdWx0Jyk7XG4gICAgaWYgKHJlc291cmNlQ2hpbGQgJiYgZGVmYXVsdENoaWxkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgZGVmYXVsdCBjaGlsZCBmb3IgJHt0aGlzLnBhdGh9LiBUaGVyZSBpcyBib3RoIGEgY2hpbGQgd2l0aCBpZCBcIlJlc291cmNlXCIgYW5kIGlkIFwiRGVmYXVsdFwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRDaGlsZCB8fCByZXNvdXJjZUNoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0Q2hpbGQgcHJvcGVydHkuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiB0aGUgY2FzZXMgd2hlcmUgdGhlIGNvcnJlY3RcbiAgICogZGVmYXVsdCBjaGlsZCBpcyBub3QgbmFtZWQgJ1Jlc291cmNlJyBvciAnRGVmYXVsdCcgYXMgaXRcbiAgICogc2hvdWxkIGJlLlxuICAgKlxuICAgKiBJZiB5b3Ugc2V0IHRoaXMgdG8gdW5kZWZpbmVkLCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBmaW5kaW5nXG4gICAqIHRoZSBjaGlsZCBuYW1lZCAnUmVzb3VyY2UnIG9yICdEZWZhdWx0JyB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBwdWJsaWMgc2V0IGRlZmF1bHRDaGlsZCh2YWx1ZTogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlZmF1bHRDaGlsZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBkaXJlY3QgY2hpbGRyZW4gb2YgdGhpcyBjb25zdHJ1Y3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNoaWxkcmVuKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhpcyBjb25zdHJ1Y3QgYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW4gaW4gdGhlIGdpdmVuIG9yZGVyXG4gICAqL1xuICBwdWJsaWMgZmluZEFsbChvcmRlcjogQ29uc3RydWN0T3JkZXIgPSBDb25zdHJ1Y3RPcmRlci5QUkVPUkRFUik6IElDb25zdHJ1Y3RbXSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5PElDb25zdHJ1Y3Q+KCk7XG4gICAgdmlzaXQodGhpcy5ob3N0KTtcbiAgICByZXR1cm4gcmV0O1xuXG4gICAgZnVuY3Rpb24gdmlzaXQoYzogSUNvbnN0cnVjdCkge1xuICAgICAgaWYgKG9yZGVyID09PSBDb25zdHJ1Y3RPcmRlci5QUkVPUkRFUikge1xuICAgICAgICByZXQucHVzaChjKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBOb2RlLm9mKGMpLmNoaWxkcmVuKSB7XG4gICAgICAgIHZpc2l0KGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yZGVyID09PSBDb25zdHJ1Y3RPcmRlci5QT1NUT1JERVIpIHtcbiAgICAgICAgcmV0LnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gc2V0IGNvbnRleHR1YWwgdmFsdWVzLlxuICAgKiBDb250ZXh0IG11c3QgYmUgc2V0IGJlZm9yZSBhbnkgY2hpbGRyZW4gYXJlIGFkZGVkLCBzaW5jZSBjaGlsZHJlbiBtYXkgY29uc3VsdCBjb250ZXh0IGluZm8gZHVyaW5nIGNvbnN0cnVjdGlvbi5cbiAgICogSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCBiZSBvdmVycmlkZGVuLlxuICAgKiBAcGFyYW0ga2V5IFRoZSBjb250ZXh0IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvbnRleHQgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzZXRDb250ZXh0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLmNoaWxkcmVuLm1hcChjID0+IE5vZGUub2YoYykuaWQpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IGNvbnRleHQgYWZ0ZXIgY2hpbGRyZW4gaGF2ZSBiZWVuIGFkZGVkOiAnICsgbmFtZXMuam9pbignLCcpKTtcbiAgICB9XG4gICAgdGhpcy5fY29udGV4dFtrZXldID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGEgdmFsdWUgZnJvbSB0cmVlIGNvbnRleHQuXG4gICAqXG4gICAqIENvbnRleHQgaXMgdXN1YWxseSBpbml0aWFsaXplZCBhdCB0aGUgcm9vdCwgYnV0IGNhbiBiZSBvdmVycmlkZGVuIGF0IGFueSBwb2ludCBpbiB0aGUgdHJlZS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBUaGUgY29udGV4dCBrZXlcbiAgICogQHJldHVybnMgVGhlIGNvbnRleHQgdmFsdWUgb3IgYHVuZGVmaW5lZGAgaWYgdGhlcmUgaXMgbm8gY29udGV4dCB2YWx1ZSBmb3IgdGhpZSBrZXkuXG4gICAqL1xuICBwdWJsaWMgdHJ5R2V0Q29udGV4dChrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9jb250ZXh0W2tleV07XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbiAgICByZXR1cm4gdGhpcy5zY29wZSAmJiBOb2RlLm9mKHRoaXMuc2NvcGUpLnRyeUdldENvbnRleHQoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbW11dGFibGUgYXJyYXkgb2YgbWV0YWRhdGEgb2JqZWN0cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb25zdHJ1Y3QuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQsIGZvciBleGFtcGxlLCB0byBpbXBsZW1lbnQgc3VwcG9ydCBmb3IgZGVwcmVjYXRpb24gbm90aWNlcywgc291cmNlIG1hcHBpbmcsIGV0Yy5cbiAgICovXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGEoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9tZXRhZGF0YV07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1ldGFkYXRhIGVudHJ5IHRvIHRoaXMgY29uc3RydWN0LlxuICAgKiBFbnRyaWVzIGFyZSBhcmJpdHJhcnkgdmFsdWVzIGFuZCB3aWxsIGFsc28gaW5jbHVkZSBhIHN0YWNrIHRyYWNlIHRvIGFsbG93IHRyYWNpbmcgYmFjayB0b1xuICAgKiB0aGUgY29kZSBsb2NhdGlvbiBmb3Igd2hlbiB0aGUgZW50cnkgd2FzIGFkZGVkLiBJdCBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIGluY2x1ZGUgc291cmNlXG4gICAqIG1hcHBpbmcgaW4gQ2xvdWRGb3JtYXRpb24gdGVtcGxhdGVzIHRvIGltcHJvdmUgZGlhZ25vc3RpY3MuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIGEgc3RyaW5nIGRlbm90aW5nIHRoZSB0eXBlIG9mIG1ldGFkYXRhXG4gICAqIEBwYXJhbSBkYXRhIHRoZSB2YWx1ZSBvZiB0aGUgbWV0YWRhdGEgKGNhbiBiZSBhIFRva2VuKS4gSWYgbnVsbC91bmRlZmluZWQsIG1ldGFkYXRhIHdpbGwgbm90IGJlIGFkZGVkLlxuICAgKiBAcGFyYW0gZnJvbUZ1bmN0aW9uIGEgZnVuY3Rpb24gdW5kZXIgd2hpY2ggdG8gcmVzdHJpY3QgdGhlIG1ldGFkYXRhIGVudHJ5J3Mgc3RhY2sgdHJhY2UgKGRlZmF1bHRzIHRvIHRoaXMuYWRkTWV0YWRhdGEpXG4gICAqL1xuICBwdWJsaWMgYWRkTWV0YWRhdGEodHlwZTogc3RyaW5nLCBkYXRhOiBhbnksIGZyb21GdW5jdGlvbj86IGFueSk6IHZvaWQge1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFjZSA9IHRoaXMudHJ5R2V0Q29udGV4dChDb25zdHJ1Y3RNZXRhZGF0YS5ESVNBQkxFX1NUQUNLX1RSQUNFX0lOX01FVEFEQVRBKVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogY2FwdHVyZVN0YWNrVHJhY2UoZnJvbUZ1bmN0aW9uIHx8IHRoaXMuYWRkTWV0YWRhdGEpO1xuXG4gICAgdGhpcy5fbWV0YWRhdGEucHVzaCh7IHR5cGUsIGRhdGEsIHRyYWNlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB7IFwiaW5mb1wiOiA8bWVzc2FnZT4gfSBtZXRhZGF0YSBlbnRyeSB0byB0aGlzIGNvbnN0cnVjdC5cbiAgICogVGhlIHRvb2xraXQgd2lsbCBkaXNwbGF5IHRoZSBpbmZvIG1lc3NhZ2Ugd2hlbiBhcHBzIGFyZSBzeW50aGVzaXplZC5cbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGluZm8gbWVzc2FnZS5cbiAgICovXG4gIHB1YmxpYyBhZGRJbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWRkTWV0YWRhdGEoQ29uc3RydWN0TWV0YWRhdGEuSU5GT19NRVRBREFUQV9LRVksIG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB7IFwid2FybmluZ1wiOiA8bWVzc2FnZT4gfSBtZXRhZGF0YSBlbnRyeSB0byB0aGlzIGNvbnN0cnVjdC5cbiAgICogVGhlIHRvb2xraXQgd2lsbCBkaXNwbGF5IHRoZSB3YXJuaW5nIHdoZW4gYW4gYXBwIGlzIHN5bnRoZXNpemVkLCBvciBmYWlsXG4gICAqIGlmIHJ1biBpbiAtLXN0cmljdCBtb2RlLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICAgKi9cbiAgcHVibGljIGFkZFdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hZGRNZXRhZGF0YShDb25zdHJ1Y3RNZXRhZGF0YS5XQVJOSU5HX01FVEFEQVRBX0tFWSwgbWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiB7IFwiZXJyb3JcIjogPG1lc3NhZ2U+IH0gbWV0YWRhdGEgZW50cnkgdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqIFRoZSB0b29sa2l0IHdpbGwgZmFpbCBzeW50aGVzaXMgd2hlbiBlcnJvcnMgYXJlIHJlcG9ydGVkLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAgICovXG4gIHB1YmxpYyBhZGRFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkZE1ldGFkYXRhKENvbnN0cnVjdE1ldGFkYXRhLkVSUk9SX01FVEFEQVRBX0tFWSwgbWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgYXNwZWN0IHRvIHRoaXMgQ29uc3RydWN0cyBub2RlXG4gICAqL1xuICBwdWJsaWMgYXBwbHlBc3BlY3QoYXNwZWN0OiBJQXNwZWN0KTogdm9pZCB7XG4gICAgdGhpcy5fYXNwZWN0cy5wdXNoKGFzcGVjdCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBwYXJlbnQgc2NvcGVzIG9mIHRoaXMgY29uc3RydWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBhIGxpc3Qgb2YgcGFyZW50IHNjb3Blcy4gVGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgbGlzdCB3aWxsIGFsd2F5c1xuICAgKiBiZSB0aGUgY3VycmVudCBjb25zdHJ1Y3QgYW5kIHRoZSBmaXJzdCBlbGVtZW50IHdpbGwgYmUgdGhlIHJvb3Qgb2YgdGhlXG4gICAqIHRyZWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNjb3BlcygpOiBJQ29uc3RydWN0W10ge1xuICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheTxJQ29uc3RydWN0PigpO1xuXG4gICAgbGV0IGN1cnI6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQgPSB0aGlzLmhvc3Q7XG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIHJldC51bnNoaWZ0KGN1cnIpO1xuICAgICAgY3VyciA9IE5vZGUub2YoY3Vycikuc2NvcGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IG9mIHRoZSBjb25zdHJ1Y3QgdHJlZS5cbiAgICogQHJldHVybnMgVGhlIHJvb3Qgb2YgdGhlIGNvbnN0cnVjdCB0cmVlLlxuICAgKi9cbiAgcHVibGljIGdldCByb290KCkge1xuICAgIHJldHVybiB0aGlzLnNjb3Blc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb25zdHJ1Y3Qgb3IgdGhlIHNjb3BlcyBpbiB3aGljaCBpdCBpcyBkZWZpbmVkIGFyZVxuICAgKiBsb2NrZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGxvY2tlZCgpIHtcbiAgICBpZiAodGhpcy5fbG9ja2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY29wZSAmJiBOb2RlLm9mKHRoaXMuc2NvcGUpLmxvY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBvcmRlcmluZyBkZXBlbmRlbmN5IG9uIGFub3RoZXIgQ29uc3RydWN0LlxuICAgKlxuICAgKiBBbGwgY29uc3RydWN0cyBpbiB0aGUgZGVwZW5kZW5jeSdzIHNjb3BlIHdpbGwgYmUgZGVwbG95ZWQgYmVmb3JlIGFueVxuICAgKiBjb25zdHJ1Y3QgaW4gdGhpcyBjb25zdHJ1Y3QncyBzY29wZS5cbiAgICovXG4gIHB1YmxpYyBhZGREZXBlbmRlbmN5KC4uLmRlcGVuZGVuY2llczogSUNvbnN0cnVjdFtdKSB7XG4gICAgZm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5fZGVwZW5kZW5jaWVzLmFkZChkZXBlbmRlbmN5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFsbCBkZXBlbmRlbmNpZXMgcmVnaXN0ZXJlZCBvbiB0aGlzIG5vZGUgb3IgYW55IG9mIGl0cyBjaGlsZHJlblxuICAgKi9cbiAgcHVibGljIGdldCBkZXBlbmRlbmNpZXMoKTogRGVwZW5kZW5jeVtdIHtcbiAgICBjb25zdCBmb3VuZCA9IG5ldyBNYXA8SUNvbnN0cnVjdCwgU2V0PElDb25zdHJ1Y3Q+PigpOyAvLyBEZWR1cGxpY2F0aW9uIG1hcFxuICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheTxEZXBlbmRlbmN5PigpO1xuXG4gICAgZm9yIChjb25zdCBzb3VyY2Ugb2YgdGhpcy5maW5kQWxsKCkpIHtcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kYWJsZSBvZiBOb2RlLm9mKHNvdXJjZSkuX2RlcGVuZGVuY2llcykge1xuICAgICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiBEZXBlbmRhYmxlVHJhaXQuZ2V0KGRlcGVuZGFibGUpLmRlcGVuZGVuY3lSb290cykge1xuICAgICAgICAgIGxldCBmb3VuZFRhcmdldHMgPSBmb3VuZC5nZXQoc291cmNlKTtcbiAgICAgICAgICBpZiAoIWZvdW5kVGFyZ2V0cykgeyBmb3VuZC5zZXQoc291cmNlLCBmb3VuZFRhcmdldHMgPSBuZXcgU2V0KCkpOyB9XG5cbiAgICAgICAgICBpZiAoIWZvdW5kVGFyZ2V0cy5oYXModGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0LnB1c2goeyBzb3VyY2UsIHRhcmdldCB9KTtcbiAgICAgICAgICAgIGZvdW5kVGFyZ2V0cy5hZGQodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2hpbGQgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgaWYgcHJlc2VudC5cbiAgICpcbiAgICogQHJldHVybnMgV2hldGhlciBhIGNoaWxkIHdpdGggdGhlIGdpdmVuIG5hbWUgd2FzIGRlbGV0ZWQuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyB0cnlSZW1vdmVDaGlsZChjaGlsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghKGNoaWxkTmFtZSBpbiB0aGlzLl9jaGlsZHJlbikpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2NoaWxkTmFtZV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRpb24gdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIFdoZW4gYG5vZGUudmFsaWRhdGUoKWAgaXMgY2FsbGVkLCB0aGUgYHZhbGlkYXRlKClgIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBvblxuICAgKiBhbGwgdmFsaWRhdGlvbnMgYW5kIGFsbCBlcnJvcnMgd2lsbCBiZSByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHZhbGlkYXRpb25cbiAgICovXG4gIHB1YmxpYyBhZGRWYWxpZGF0aW9uKHZhbGlkYXRpb246IElWYWxpZGF0aW9uKSB7XG4gICAgdGhpcy5fdmFsaWRhdGlvbnMucHVzaCh2YWxpZGF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50aGVzaXplcyBhIENsb3VkQXNzZW1ibHkgZnJvbSBhIGNvbnN0cnVjdCB0cmVlLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBTeW50aGVzaXMgb3B0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBzeW50aGVzaXplKG9wdGlvbnM6IFN5bnRoZXNpc09wdGlvbnMpOiB2b2lkIHtcbiAgICAvLyB0aGUgdGhyZWUgaG9seSBwaGFzZXMgb2Ygc3ludGhlc2lzOiBwcmVwYXJlLCB2YWxpZGF0ZSBhbmQgc3ludGhlc2l6ZVxuXG4gICAgLy8gcHJlcGFyZVxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgLy8gdmFsaWRhdGVcbiAgICBjb25zdCB2YWxpZGF0ZSA9IG9wdGlvbnMuc2tpcFZhbGlkYXRpb24gPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhb3B0aW9ucy5za2lwVmFsaWRhdGlvbjtcbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGUoKTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBlcnJvckxpc3QgPSBlcnJvcnMubWFwKGUgPT4gYFske05vZGUub2YoZS5zb3VyY2UpLnBhdGh9XSAke2UubWVzc2FnZX1gKS5qb2luKCdcXG4gICcpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbGlkYXRpb24gZmFpbGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcnM6XFxuICAke2Vycm9yTGlzdH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzeW50aGVzaXplIChsZWF2ZXMgZmlyc3QpXG4gICAgZm9yIChjb25zdCBjb25zdHJ1Y3Qgb2YgdGhpcy5maW5kQWxsKENvbnN0cnVjdE9yZGVyLlBPU1RPUkRFUikpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBOb2RlLm9mKGNvbnN0cnVjdCk7XG4gICAgICB0cnkge1xuICAgICAgICBub2RlLl9sb2NrKCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAuLi5vcHRpb25zLnNlc3Npb25Db250ZXh0LFxuICAgICAgICAgIG91dGRpcjogb3B0aW9ucy5vdXRkaXIsXG4gICAgICAgIH07XG4gICAgICAgIChjb25zdHJ1Y3QgYXMgYW55KS5vblN5bnRoZXNpemUoY3R4KTsgLy8gXCJhcyBhbnlcIiBpcyBuZWVkZWQgYmVjYXVzZSB3ZSB3YW50IHRvIGtlZXAgXCJzeW50aGVzaXplXCIgcHJvdGVjdGVkXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBub2RlLl91bmxvY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBcInByZXBhcmVcIiBvbiBhbGwgY29uc3RydWN0cyAoZGVwdGgtZmlyc3QsIHBvc3Qtb3JkZXIpIGluIHRoZSB0cmVlIHVuZGVyIGBub2RlYC5cbiAgICovXG4gIHB1YmxpYyBwcmVwYXJlKCkge1xuICAgIC8vIEFzcGVjdHMgYXJlIGFwcGxpZWQgcm9vdCB0byBsZWFmXG4gICAgZm9yIChjb25zdCBjb25zdHJ1Y3Qgb2YgdGhpcy5maW5kQWxsKENvbnN0cnVjdE9yZGVyLlBSRU9SREVSKSkge1xuICAgICAgTm9kZS5vZihjb25zdHJ1Y3QpLmludm9rZUFzcGVjdHMoKTtcbiAgICB9XG5cbiAgICAvLyBzaW5jZSBjb25zdHJ1Y3RzIGNhbiBiZSBhZGRlZCB0byB0aGUgdHJlZSBkdXJpbmcgaW52b2tlQXNwZWN0cywgY2FsbCBmaW5kQWxsKCkgdG8gcmVjcmVhdGUgdGhlIGxpc3QuXG4gICAgLy8gdXNlIFBSRU9SREVSLnJldmVyc2UoKSBmb3IgYmFja3dhcmQgY29tcGF0YWJpbGl0eVxuICAgIGZvciAoY29uc3QgY29uc3RydWN0IG9mIHRoaXMuZmluZEFsbChDb25zdHJ1Y3RPcmRlci5QUkVPUkRFUikucmV2ZXJzZSgpKSB7XG4gICAgICBjb25zdCBjbiA9IGNvbnN0cnVjdCBhcyBhbnk7XG4gICAgICBpZiAoJ29uUHJlcGFyZScgaW4gY24pIHtcbiAgICAgICAgaWYgKHR5cGVvZihjbi5vblByZXBhcmUpICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IG5ldyBFcnJvcignZXhwZWN0aW5nIFwib25QcmVwYXJlXCIgdG8gYmUgYSBmdW5jdGlvbicpOyB9XG4gICAgICAgIGNuLm9uUHJlcGFyZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdHJlZSAoZGVwdGgtZmlyc3QsIHByZS1vcmRlcikgYW5kIHJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIGVycm9ycy5cbiAgICogQW4gZW1wdHkgbGlzdCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSBhcmUgbm8gZXJyb3JzLlxuICAgKi9cbiAgcHVibGljIHZhbGlkYXRlKCkge1xuICAgIGxldCBlcnJvcnMgPSBuZXcgQXJyYXk8VmFsaWRhdGlvbkVycm9yPigpO1xuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KE5vZGUub2YoY2hpbGQpLnZhbGlkYXRlKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvY2FsRXJyb3JzOiBzdHJpbmdbXSA9ICh0aGlzLmhvc3QgYXMgYW55KS5vblZhbGlkYXRlKCk7IC8vIFwiYXMgYW55XCIgaXMgbmVlZGVkIGJlY2F1c2Ugd2Ugd2FudCB0byBrZWVwIFwidmFsaWRhdGVcIiBwcm90ZWN0ZWRcblxuICAgIC8vIGludm9rZSB2YWxpZGF0aW9uc1xuICAgIGZvciAoY29uc3QgdiBvZiB0aGlzLl92YWxpZGF0aW9ucykge1xuICAgICAgbG9jYWxFcnJvcnMucHVzaCguLi52LnZhbGlkYXRlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnMuY29uY2F0KGxvY2FsRXJyb3JzLm1hcChtc2cgPT4gKHsgc291cmNlOiB0aGlzLmhvc3QsIG1lc3NhZ2U6IG1zZyB9KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvY2tzIHRoaXMgY29uc3RydWN0IGZyb20gYWxsb3dpbmcgbW9yZSBjaGlsZHJlbiB0byBiZSBhZGRlZC4gQWZ0ZXIgdGhpc1xuICAgKiBjYWxsLCBubyBtb3JlIGNoaWxkcmVuIGNhbiBiZSBhZGRlZCB0byB0aGlzIGNvbnN0cnVjdCBvciB0byBhbnkgY2hpbGRyZW4uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSBfbG9jaygpIHtcbiAgICB0aGlzLl9sb2NrZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9ja3MgdGhpcyBjb3N0cnVjdCBhbmQgYWxsb3dzIG11dGF0aW9ucyAoYWRkaW5nIGNoaWxkcmVuKS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIF91bmxvY2soKSB7XG4gICAgdGhpcy5fbG9ja2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGNvbnN0cnVjdCB0byB0aGlzIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBjaGlsZCBUaGUgY2hpbGQgY29uc3RydWN0XG4gICAqIEBwYXJhbSBjaGlsZE5hbWUgVGhlIHR5cGUgbmFtZSBvZiB0aGUgY2hpbGQgY29uc3RydWN0LlxuICAgKiBAcmV0dXJucyBUaGUgcmVzb2x2ZWQgcGF0aCBwYXJ0IG5hbWUgb2YgdGhlIGNoaWxkXG4gICAqL1xuICBwcml2YXRlIGFkZENoaWxkKGNoaWxkOiBDb25zdHJ1Y3QsIGNoaWxkTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMubG9ja2VkKSB7XG5cbiAgICAgIC8vIHNwZWNpYWwgZXJyb3IgaWYgcm9vdCBpcyBsb2NrZWRcbiAgICAgIGlmICghdGhpcy5wYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBjaGlsZHJlbiBkdXJpbmcgc3ludGhlc2lzJyk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGFkZCBjaGlsZHJlbiB0byBcIiR7dGhpcy5wYXRofVwiIGR1cmluZyBzeW50aGVzaXNgKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROYW1lIGluIHRoaXMuX2NoaWxkcmVuKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5pZCB8fCAnJztcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5ob3N0LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIGFscmVhZHkgYSBDb25zdHJ1Y3Qgd2l0aCBuYW1lICcke2NoaWxkTmFtZX0nIGluICR7dHlwZU5hbWV9JHtuYW1lLmxlbmd0aCA+IDAgPyAnIFsnICsgbmFtZSArICddJyA6ICcnfWApO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuW2NoaWxkTmFtZV0gPSBjaGlsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBlYWNoIGFzcGVjdCB0byBpbnZva2UgdmlzaXRcbiAgICovXG4gIHByaXZhdGUgaW52b2tlQXNwZWN0cygpOiB2b2lkIHtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMuZmluZEFsbCgpO1xuICAgIGZvciAoY29uc3QgYXNwZWN0IG9mIHRoaXMuX2FzcGVjdHMpIHtcbiAgICAgIGlmICh0aGlzLmludm9rZWRBc3BlY3RzLmluY2x1ZGVzKGFzcGVjdCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBkZXNjZW5kYW50cy5mb3JFYWNoKG1lbWJlciA9PiBhc3BlY3QudmlzaXQobWVtYmVyKSk7XG4gICAgICB0aGlzLmludm9rZWRBc3BlY3RzLnB1c2goYXNwZWN0KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBidWlsZGluZyBibG9jayBvZiB0aGUgY29uc3RydWN0IGdyYXBoLlxuICpcbiAqIEFsbCBjb25zdHJ1Y3RzIGJlc2lkZXMgdGhlIHJvb3QgY29uc3RydWN0IG11c3QgYmUgY3JlYXRlZCB3aXRoaW4gdGhlIHNjb3BlIG9mXG4gKiBhbm90aGVyIGNvbnN0cnVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0cnVjdCBpbXBsZW1lbnRzIElDb25zdHJ1Y3Qge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjb25zdHJ1Y3Qgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzLiBJZlxuICAgKiB0aGUgSUQgaW5jbHVkZXMgYSBwYXRoIHNlcGFyYXRvciAoYC9gKSwgdGhlbiBpdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IGRvdWJsZVxuICAgKiBkYXNoIGAtLWAuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIG9wdGlvbnM6IENvbnN0cnVjdE9wdGlvbnMgPSB7IH0pIHtcbiAgICAvLyBhdHRhY2ggdGhlIGNvbnN0cnVjdCB0byB0aGUgY29uc3RydWN0IHRyZWUgYnkgY3JlYXRpbmcgYSBub2RlXG4gICAgY29uc3Qgbm9kZUZhY3RvcnkgPSBvcHRpb25zLm5vZGVGYWN0b3J5ID8/IHsgY3JlYXRlTm9kZTogKGhvc3QsIG5vZGVTY29wZSwgbm9kZUlkKSA9PiBuZXcgTm9kZShob3N0LCBub2RlU2NvcGUsIG5vZGVJZCkgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgQ09OU1RSVUNUX05PREVfUFJPUEVSVFlfU1lNQk9MLCB7XG4gICAgICB2YWx1ZTogbm9kZUZhY3RvcnkuY3JlYXRlTm9kZSh0aGlzLCBzY29wZSwgaWQpLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgLy8gaW1wbGVtZW50IElEZXBlbmRhYmxlIHByaXZhdGVseVxuICAgIERlcGVuZGFibGVUcmFpdC5pbXBsZW1lbnQodGhpcywge1xuICAgICAgZGVwZW5kZW5jeVJvb3RzOiBbdGhpc10sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGNvbnN0cnVjdC5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gTm9kZS5vZih0aGlzKS5wYXRoIHx8ICc8cm9vdD4nO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBjdXJyZW50IGNvbnN0cnVjdC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY29uc3RydWN0cyBpbiBvcmRlciB0byBwZXJmb3JtXG4gICAqIHZhbGlkYXRpb24gbG9naWMuIEl0IGlzIGNhbGxlZCBvbiBhbGwgY29uc3RydWN0cyBiZWZvcmUgc3ludGhlc2lzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzLCBvciBhbiBlbXB0eSBhcnJheSBpZiB0aGVyZSB0aGUgY29uc3RydWN0IGlzIHZhbGlkLlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYE5vZGUuYWRkVmFsaWRhdGlvbigpYCB0byBzdWJzY3JpYmUgdmFsaWRhdGlvbiBmdW5jdGlvbnMgb24gdGhpcyBjb25zdHJ1Y3RcbiAgICogaW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoaXMgbWV0aG9kLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uVmFsaWRhdGUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGZpbmFsIG1vZGlmaWNhdGlvbnMgYmVmb3JlIHN5bnRoZXNpc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgaW1wbGVtZW50ZWQgYnkgZGVyaXZlZCBjb25zdHJ1Y3RzIGluIG9yZGVyIHRvIHBlcmZvcm1cbiAgICogZmluYWwgY2hhbmdlcyBiZWZvcmUgc3ludGhlc2lzLiBwcmVwYXJlKCkgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgY2hpbGRcbiAgICogY29uc3RydWN0cyBoYXZlIGJlZW4gcHJlcGFyZWQuXG4gICAqXG4gICAqIFRoaXMgaXMgYW4gYWR2YW5jZWQgZnJhbWV3b3JrIGZlYXR1cmUuIE9ubHkgdXNlIHRoaXMgaWYgeW91XG4gICAqIHVuZGVyc3RhbmQgdGhlIGltcGxpY2F0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBvblByZXBhcmUoKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGlzIGNvbnN0cnVjdCB0byBlbWl0IGFydGlmYWN0cyBpbnRvIHRoZSBjbG91ZCBhc3NlbWJseSBkdXJpbmcgc3ludGhlc2lzLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c3VhbGx5IGltcGxlbWVudGVkIGJ5IGZyYW1ld29yay1sZXZlbCBjb25zdHJ1Y3RzIHN1Y2ggYXMgYFN0YWNrYCBhbmQgYEFzc2V0YFxuICAgKiBhcyB0aGV5IHBhcnRpY2lwYXRlIGluIHN5bnRoZXNpemluZyB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gICAqXG4gICAqIEBwYXJhbSBzZXNzaW9uIFRoZSBzeW50aGVzaXMgc2Vzc2lvbi5cbiAgICovXG4gIHByb3RlY3RlZCBvblN5bnRoZXNpemUoc2Vzc2lvbjogSVN5bnRoZXNpc1Nlc3Npb24pOiB2b2lkIHtcbiAgICBpZ25vcmUoc2Vzc2lvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlcnJvciByZXR1cm5lZCBkdXJpbmcgdGhlIHZhbGlkYXRpb24gcGhhc2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkVycm9yIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3Qgd2hpY2ggZW1pdHRlZCB0aGUgZXJyb3IuXG4gICAqL1xuICByZWFkb25seSBzb3VyY2U6IENvbnN0cnVjdDtcblxuICAvKipcbiAgICogVGhlIGVycm9yIG1lc3NhZ2UuXG4gICAqL1xuICByZWFkb25seSBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIGluIG9yZGVyIGZvciB0aGUgY29uc3RydWN0IHRvIGJlIGFibGUgdG8gdmFsaWRhdGUgaXRzZWxmLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0aW9uIHtcbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBjdXJyZW50IGNvbnN0cnVjdC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY29uc3RydWN0cyBpbiBvcmRlciB0byBwZXJmb3JtXG4gICAqIHZhbGlkYXRpb24gbG9naWMuIEl0IGlzIGNhbGxlZCBvbiBhbGwgY29uc3RydWN0cyBiZWZvcmUgc3ludGhlc2lzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzLCBvciBhbiBlbXB0eSBhcnJheSBpZiB0aGVyZSB0aGUgY29uc3RydWN0IGlzIHZhbGlkLlxuICAgKi9cbiAgdmFsaWRhdGUoKTogc3RyaW5nW107XG59XG5cbi8qKlxuICogSW4gd2hhdCBvcmRlciB0byByZXR1cm4gY29uc3RydWN0c1xuICovXG5leHBvcnQgZW51bSBDb25zdHJ1Y3RPcmRlciB7XG4gIC8qKlxuICAgKiBEZXB0aC1maXJzdCwgcHJlLW9yZGVyXG4gICAqL1xuICBQUkVPUkRFUixcblxuICAvKipcbiAgICogRGVwdGgtZmlyc3QsIHBvc3Qtb3JkZXIgKGxlYWYgbm9kZXMgZmlyc3QpXG4gICAqL1xuICBQT1NUT1JERVJcbn1cblxuLyoqXG4gKiBBIHNpbmdsZSBkZXBlbmRlbmN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVwZW5kZW5jeSB7XG4gIC8qKlxuICAgKiBTb3VyY2UgdGhlIGRlcGVuZGVuY3lcbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZTogSUNvbnN0cnVjdDtcblxuICAvKipcbiAgICogVGFyZ2V0IG9mIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWFkb25seSB0YXJnZXQ6IElDb25zdHJ1Y3Q7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBzZXNzaW9uIG9mIHN5bnRoZXNpcy4gUGFzc2VkIGludG8gYGNvbnN0cnVjdC5vblN5bnRoZXNpemUoKWAgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3ludGhlc2lzU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IGRpcmVjdG9yeSBmb3IgdGhpcyBzeW50aGVzaXMgc2Vzc2lvbi5cbiAgICovXG4gIHJlYWRvbmx5IG91dGRpcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGNvbnRleHQgcGFzc2VkIHRvIHN5bnRoZXNpemVOb2RlIHRocm91Z2ggYHNlc3Npb25Db250ZXh0YC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBzeW50aGVzaXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ludGhlc2lzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IGRpcmVjdG9yeSBpbnRvIHdoaWNoIHRvIHN5bnRoZXNpemUgdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKiBAZGVmYXVsdCAtIGNyZWF0ZXMgYSB0ZW1wb3JhcnkgZGlyZWN0b3J5XG4gICAqL1xuICByZWFkb25seSBvdXRkaXI6IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciBzeW50aGVzaXMgc2hvdWxkIHNraXAgdGhlIHZhbGlkYXRpb24gcGhhc2UuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBza2lwVmFsaWRhdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgY29udGV4dCBwYXNzZWQgaW50byB0aGUgc3ludGhlc2lzIHNlc3Npb24gb2JqZWN0IHdoZW4gYGNvbnN0cnVjdC5zeW50aGAgaXMgY2FsbGVkLlxuICAgKiBAZGVmYXVsdCAtIG5vIGFkZGl0aW9uYWwgY29udGV4dCBpcyBwYXNzZWQgdG8gYG9uU3ludGhlc2l6ZWBcbiAgICovXG4gIHJlYWRvbmx5IHNlc3Npb25Db250ZXh0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZnVuY3Rpb24gaWdub3JlKF94OiBhbnkpIHtcbiAgcmV0dXJuO1xufVxuXG4vLyBJbXBvcnQgdGhpcyBfYWZ0ZXJfIGV2ZXJ5dGhpbmcgZWxzZSB0byBoZWxwIG5vZGUgd29yayB0aGUgY2xhc3NlcyBvdXQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuLi5cbmNvbnN0IFBBVEhfU0VQX1JFR0VYID0gbmV3IFJlZ0V4cChgJHtOb2RlLlBBVEhfU0VQfWAsICdnJyk7XG5cbi8qKlxuICogUmV0dXJuIGEgc2FuaXRpemVkIHZlcnNpb24gb2YgYW4gYXJiaXRyYXJ5IHN0cmluZywgc28gaXQgY2FuIGJlIHVzZWQgYXMgYW4gSURcbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVJZChpZDogc3RyaW5nKSB7XG4gIC8vIEVzY2FwZSBwYXRoIHNlcHMgYXMgZG91YmxlIGRhc2hlc1xuICByZXR1cm4gaWQucmVwbGFjZShQQVRIX1NFUF9SRUdFWCwgJy0tJyk7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgY29uc3RydWN0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25zdHJ1Y3RPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgZmFjdG9yeSBmb3IgYXR0YWNoaW5nIGBOb2RlYHMgdG8gdGhlIGNvbnN0cnVjdC5cbiAgICogQGRlZmF1bHQgLSB0aGUgZGVmYXVsdCBgTm9kZWAgaXMgYXNzb2NpYXRlZFxuICAgKi9cbiAgcmVhZG9ubHkgbm9kZUZhY3Rvcnk/OiBJTm9kZUZhY3Rvcnk7XG59XG5cbi8qKlxuICogQSBmYWN0b3J5IGZvciBhdHRhY2hpbmcgYE5vZGVgcyB0byB0aGUgY29uc3RydWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElOb2RlRmFjdG9yeSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmV3IGBOb2RlYCBhc3NvY2lhdGVkIHdpdGggYGhvc3RgLlxuICAgKiBAcGFyYW0gaG9zdCB0aGUgYXNzb2NpYXRlZCBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIHNjb3BlIHRoZSBjb25zdHJ1Y3QncyBzY29wZSAocGFyZW50KVxuICAgKiBAcGFyYW0gaWQgdGhlIGNvbnN0cnVjdCBpZFxuICAgKi9cbiAgY3JlYXRlTm9kZShob3N0OiBDb25zdHJ1Y3QsIHNjb3BlOiBJQ29uc3RydWN0LCBpZDogc3RyaW5nKTogTm9kZTtcbn1cbiJdfQ==