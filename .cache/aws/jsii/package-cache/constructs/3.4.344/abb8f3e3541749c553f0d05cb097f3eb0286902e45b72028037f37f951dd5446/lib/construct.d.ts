import { IAspect } from './aspect';
import { MetadataEntry } from './metadata';
/**
 * Represents a construct.
 */
export interface IConstruct {
}
/**
 * Represents the construct node in the scope tree.
 */
export declare class Node {
    private readonly host;
    /**
     * Separator used to delimit construct path components.
     */
    static readonly PATH_SEP = "/";
    /**
     * Returns the node associated with a construct.
     * @param construct the construct
     */
    static of(construct: IConstruct): Node;
    /**
     * Returns the scope in which this construct is defined.
     *
     * The value is `undefined` at the root of the construct scope tree.
     */
    readonly scope?: IConstruct;
    /**
     * The id of this construct within the current scope.
     *
     * This is a a scope-unique id. To obtain an app-unique id for this construct, use `uniqueId`.
     */
    readonly id: string;
    private _locked;
    private readonly _aspects;
    private readonly _children;
    private readonly _context;
    private readonly _metadata;
    private readonly _dependencies;
    private readonly invokedAspects;
    private _defaultChild;
    private readonly _validations;
    private _addr?;
    constructor(host: Construct, scope: IConstruct, id: string);
    /**
     * The full, absolute path of this construct in the tree.
     *
     * Components are separated by '/'.
     */
    get path(): string;
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
    get addr(): string;
    /**
     * A tree-global unique alphanumeric identifier for this construct. Includes
     * all components of the tree.
     *
     * @deprecated please avoid using this property and use `addr` to form unique names.
     * This algorithm uses MD5, which is not FIPS-complient and also excludes the
     * identity of the root construct from the calculation.
     */
    get uniqueId(): string;
    /**
     * Return a direct child by id, or undefined
     *
     * @param id Identifier of direct child
     * @returns the child if found, or undefined
     */
    tryFindChild(id: string): IConstruct | undefined;
    /**
     * Return a direct child by id
     *
     * Throws an error if the child is not found.
     *
     * @param id Identifier of direct child
     * @returns Child with the given id.
     */
    findChild(id: string): IConstruct;
    /**
     * Returns the child construct that has the id `Default` or `Resource"`.
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     *
     * @throws if there is more than one child
     * @returns a construct or undefined if there is no default child
     */
    get defaultChild(): IConstruct | undefined;
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
    set defaultChild(value: IConstruct | undefined);
    /**
     * All direct children of this construct.
     */
    get children(): IConstruct[];
    /**
     * Return this construct and all of its children in the given order
     */
    findAll(order?: ConstructOrder): IConstruct[];
    /**
     * This can be used to set contextual values.
     * Context must be set before any children are added, since children may consult context info during construction.
     * If the key already exists, it will be overridden.
     * @param key The context key
     * @param value The context value
     */
    setContext(key: string, value: any): void;
    /**
     * Retrieves a value from tree context.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param key The context key
     * @returns The context value or `undefined` if there is no context value for thie key.
     */
    tryGetContext(key: string): any;
    /**
     * An immutable array of metadata objects associated with this construct.
     * This can be used, for example, to implement support for deprecation notices, source mapping, etc.
     */
    get metadata(): MetadataEntry[];
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
    addMetadata(type: string, data: any, fromFunction?: any): void;
    /**
     * Adds a { "info": <message> } metadata entry to this construct.
     * The toolkit will display the info message when apps are synthesized.
     * @param message The info message.
     */
    addInfo(message: string): void;
    /**
     * Adds a { "warning": <message> } metadata entry to this construct.
     * The toolkit will display the warning when an app is synthesized, or fail
     * if run in --strict mode.
     * @param message The warning message.
     */
    addWarning(message: string): void;
    /**
     * Adds an { "error": <message> } metadata entry to this construct.
     * The toolkit will fail synthesis when errors are reported.
     * @param message The error message.
     */
    addError(message: string): void;
    /**
     * Applies the aspect to this Constructs node
     */
    applyAspect(aspect: IAspect): void;
    /**
     * All parent scopes of this construct.
     *
     * @returns a list of parent scopes. The last element in the list will always
     * be the current construct and the first element will be the root of the
     * tree.
     */
    get scopes(): IConstruct[];
    /**
     * Returns the root of the construct tree.
     * @returns The root of the construct tree.
     */
    get root(): IConstruct;
    /**
     * Returns true if this construct or the scopes in which it is defined are
     * locked.
     */
    get locked(): boolean;
    /**
     * Add an ordering dependency on another Construct.
     *
     * All constructs in the dependency's scope will be deployed before any
     * construct in this construct's scope.
     */
    addDependency(...dependencies: IConstruct[]): void;
    /**
     * Return all dependencies registered on this node or any of its children
     */
    get dependencies(): Dependency[];
    /**
     * Remove the child with the given name, if present.
     *
     * @returns Whether a child with the given name was deleted.
     * @experimental
     */
    tryRemoveChild(childName: string): boolean;
    /**
     * Adds a validation to this construct.
     *
     * When `node.validate()` is called, the `validate()` method will be called on
     * all validations and all errors will be returned.
     *
     * @param validation
     */
    addValidation(validation: IValidation): void;
    /**
     * Synthesizes a CloudAssembly from a construct tree.
     * @param options Synthesis options.
     */
    synthesize(options: SynthesisOptions): void;
    /**
     * Invokes "prepare" on all constructs (depth-first, post-order) in the tree under `node`.
     */
    prepare(): void;
    /**
     * Validates tree (depth-first, pre-order) and returns the list of all errors.
     * An empty list indicates that there are no errors.
     */
    validate(): ValidationError[];
    /**
     * Locks this construct from allowing more children to be added. After this
     * call, no more children can be added to this construct or to any children.
     * @internal
     */
    private _lock;
    /**
     * Unlocks this costruct and allows mutations (adding children).
     * @internal
     */
    private _unlock;
    /**
     * Adds a child construct to this node.
     *
     * @param child The child construct
     * @param childName The type name of the child construct.
     * @returns The resolved path part name of the child
     */
    private addChild;
    /**
     * Triggers each aspect to invoke visit
     */
    private invokeAspects;
}
/**
 * Represents the building block of the construct graph.
 *
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 */
export declare class Construct implements IConstruct {
    /**
     * Creates a new construct node.
     *
     * @param scope The scope in which to define this construct
     * @param id The scoped construct ID. Must be unique amongst siblings. If
     * the ID includes a path separator (`/`), then it will be replaced by double
     * dash `--`.
     * @param options Options
     */
    constructor(scope: Construct, id: string, options?: ConstructOptions);
    /**
     * Returns a string representation of this construct.
     */
    toString(): string;
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
    protected onValidate(): string[];
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
    protected onPrepare(): void;
    /**
     * Allows this construct to emit artifacts into the cloud assembly during synthesis.
     *
     * This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
     * as they participate in synthesizing the cloud assembly.
     *
     * @param session The synthesis session.
     */
    protected onSynthesize(session: ISynthesisSession): void;
}
/**
 * An error returned during the validation phase.
 */
export interface ValidationError {
    /**
     * The construct which emitted the error.
     */
    readonly source: Construct;
    /**
     * The error message.
     */
    readonly message: string;
}
/**
 * Implement this interface in order for the construct to be able to validate itself.
 */
export interface IValidation {
    /**
     * Validate the current construct.
     *
     * This method can be implemented by derived constructs in order to perform
     * validation logic. It is called on all constructs before synthesis.
     *
     * @returns An array of validation error messages, or an empty array if there the construct is valid.
     */
    validate(): string[];
}
/**
 * In what order to return constructs
 */
export declare enum ConstructOrder {
    /**
     * Depth-first, pre-order
     */
    PREORDER = 0,
    /**
     * Depth-first, post-order (leaf nodes first)
     */
    POSTORDER = 1
}
/**
 * A single dependency
 */
export interface Dependency {
    /**
     * Source the dependency
     */
    readonly source: IConstruct;
    /**
     * Target of the dependency
     */
    readonly target: IConstruct;
}
/**
 * Represents a single session of synthesis. Passed into `construct.onSynthesize()` methods.
 */
export interface ISynthesisSession {
    /**
     * The output directory for this synthesis session.
     */
    readonly outdir: string;
    /**
     * Additional context passed to synthesizeNode through `sessionContext`.
     */
    [key: string]: any;
}
/**
 * Options for synthesis.
 */
export interface SynthesisOptions {
    /**
     * The output directory into which to synthesize the cloud assembly.
     * @default - creates a temporary directory
     */
    readonly outdir: string;
    /**
     * Whether synthesis should skip the validation phase.
     * @default false
     */
    readonly skipValidation?: boolean;
    /**
     * Additional context passed into the synthesis session object when `construct.synth` is called.
     * @default - no additional context is passed to `onSynthesize`
     */
    readonly sessionContext?: {
        [key: string]: any;
    };
}
/**
 * Options for creating constructs.
 */
export interface ConstructOptions {
    /**
     * A factory for attaching `Node`s to the construct.
     * @default - the default `Node` is associated
     */
    readonly nodeFactory?: INodeFactory;
}
/**
 * A factory for attaching `Node`s to the construct.
 */
export interface INodeFactory {
    /**
     * Returns a new `Node` associated with `host`.
     * @param host the associated construct
     * @param scope the construct's scope (parent)
     * @param id the construct id
     */
    createNode(host: Construct, scope: IConstruct, id: string): Node;
}