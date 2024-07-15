"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manifest = exports.VERSION_MISMATCH = void 0;
const jsiiDeprecationWarnings = require("../.warnings.jsii.js");
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const fs = require("fs");
const jsonschema = require("jsonschema");
const semver = require("semver");
const assembly = require("./cloud-assembly");
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
// this prefix is used by the CLI to identify this specific error.
// in which case we want to instruct the user to upgrade his CLI.
// see exec.ts#createAssembly
exports.VERSION_MISMATCH = 'Cloud assembly schema version mismatch';
const ASSETS_SCHEMA = require('../schema/assets.schema.json');
const ASSEMBLY_SCHEMA = require('../schema/cloud-assembly.schema.json');
/**
 * Version is shared for both manifests
 */
const SCHEMA_VERSION = require('../schema/cloud-assembly.version.json').version;
const INTEG_SCHEMA = require('../schema/integ.schema.json');
/**
 * Protocol utility class.
 */
class Manifest {
    constructor() { }
    /**
     * Validates and saves the cloud assembly manifest to file.
     *
     * @param manifest - manifest.
     * @param filePath - output file path.
     */
    static saveAssemblyManifest(manifest, filePath) {
        try {
            jsiiDeprecationWarnings._aws_cdk_cloud_assembly_schema_AssemblyManifest(manifest);
        }
        catch (error) {
            if (process.env.JSII_DEBUG !== "1" && error.name === "DeprecationError") {
                Error.captureStackTrace(error, this.saveAssemblyManifest);
            }
            throw error;
        }
        Manifest.saveManifest(manifest, filePath, ASSEMBLY_SCHEMA, Manifest.patchStackTagsOnWrite);
    }
    /**
     * Load and validates the cloud assembly manifest from file.
     *
     * @param filePath - path to the manifest file.
     */
    static loadAssemblyManifest(filePath, options) {
        try {
            jsiiDeprecationWarnings._aws_cdk_cloud_assembly_schema_LoadManifestOptions(options);
        }
        catch (error) {
            if (process.env.JSII_DEBUG !== "1" && error.name === "DeprecationError") {
                Error.captureStackTrace(error, this.loadAssemblyManifest);
            }
            throw error;
        }
        return Manifest.loadManifest(filePath, ASSEMBLY_SCHEMA, Manifest.patchStackTagsOnRead, options);
    }
    /**
     * Validates and saves the asset manifest to file.
     *
     * @param manifest - manifest.
     * @param filePath - output file path.
     */
    static saveAssetManifest(manifest, filePath) {
        try {
            jsiiDeprecationWarnings._aws_cdk_cloud_assembly_schema_AssetManifest(manifest);
        }
        catch (error) {
            if (process.env.JSII_DEBUG !== "1" && error.name === "DeprecationError") {
                Error.captureStackTrace(error, this.saveAssetManifest);
            }
            throw error;
        }
        Manifest.saveManifest(manifest, filePath, ASSETS_SCHEMA, Manifest.patchStackTagsOnRead);
    }
    /**
     * Load and validates the asset manifest from file.
     *
     * @param filePath - path to the manifest file.
     */
    static loadAssetManifest(filePath) {
        return this.loadManifest(filePath, ASSETS_SCHEMA);
    }
    /**
     * Validates and saves the integ manifest to file.
     *
     * @param manifest - manifest.
     * @param filePath - output file path.
     */
    static saveIntegManifest(manifest, filePath) {
        try {
            jsiiDeprecationWarnings._aws_cdk_cloud_assembly_schema_IntegManifest(manifest);
        }
        catch (error) {
            if (process.env.JSII_DEBUG !== "1" && error.name === "DeprecationError") {
                Error.captureStackTrace(error, this.saveIntegManifest);
            }
            throw error;
        }
        Manifest.saveManifest(manifest, filePath, INTEG_SCHEMA);
    }
    /**
     * Load and validates the integ manifest from file.
     *
     * @param filePath - path to the manifest file.
     */
    static loadIntegManifest(filePath) {
        return this.loadManifest(filePath, INTEG_SCHEMA);
    }
    /**
     * Fetch the current schema version number.
     */
    static version() {
        return SCHEMA_VERSION;
    }
    /**
     * Deprecated
     * @deprecated use `saveAssemblyManifest()`
     */
    static save(manifest, filePath) { try {
        jsiiDeprecationWarnings.print("@aws-cdk/cloud-assembly-schema.Manifest#save", "use `saveAssemblyManifest()`");
        jsiiDeprecationWarnings._aws_cdk_cloud_assembly_schema_AssemblyManifest(manifest);
    }
    catch (error) {
        if (process.env.JSII_DEBUG !== "1" && error.name === "DeprecationError") {
            Error.captureStackTrace(error, this.save);
        }
        throw error;
    } return this.saveAssemblyManifest(manifest, filePath); }
    /**
     * Deprecated
     * @deprecated use `loadAssemblyManifest()`
     */
    static load(filePath) { try {
        jsiiDeprecationWarnings.print("@aws-cdk/cloud-assembly-schema.Manifest#load", "use `loadAssemblyManifest()`");
    }
    catch (error) {
        if (process.env.JSII_DEBUG !== "1" && error.name === "DeprecationError") {
            Error.captureStackTrace(error, this.load);
        }
        throw error;
    } return this.loadAssemblyManifest(filePath); }
    static validate(manifest, schema, options) {
        function parseVersion(version) {
            const ver = semver.valid(version);
            if (!ver) {
                throw new Error(`Invalid semver string: "${version}"`);
            }
            return ver;
        }
        const maxSupported = parseVersion(Manifest.version());
        const actual = parseVersion(manifest.version);
        // first validate the version should be accepted.
        if (semver.gt(actual, maxSupported) && !options?.skipVersionCheck) {
            // we use a well known error prefix so that the CLI can identify this specific error
            // and print some more context to the user.
            throw new Error(`${exports.VERSION_MISMATCH}: Maximum schema version supported is ${maxSupported}, but found ${actual}`);
        }
        // now validate the format is good.
        const validator = new jsonschema.Validator();
        const result = validator.validate(manifest, schema, {
            // does exist but is not in the TypeScript definitions
            nestedErrors: true,
            allowUnknownAttributes: false,
        });
        let errors = result.errors;
        if (options?.skipEnumCheck) {
            // Enum validations aren't useful when
            errors = stripEnumErrors(errors);
        }
        if (errors.length > 0) {
            throw new Error(`Invalid assembly manifest:\n${errors.map(e => e.stack).join('\n')}`);
        }
    }
    static saveManifest(manifest, filePath, schema, preprocess) {
        let withVersion = { ...manifest, version: Manifest.version() };
        Manifest.validate(withVersion, schema);
        if (preprocess) {
            withVersion = preprocess(withVersion);
        }
        fs.writeFileSync(filePath, JSON.stringify(withVersion, undefined, 2));
    }
    static loadManifest(filePath, schema, preprocess, options) {
        let obj = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
        if (preprocess) {
            obj = preprocess(obj);
        }
        Manifest.validate(obj, schema, options);
        return obj;
    }
    /**
     * This requires some explaining...
     *
     * We previously used `{ Key, Value }` for the object that represents a stack tag. (Notice the casing)
     * @link https://github.com/aws/aws-cdk/blob/v1.27.0/packages/aws-cdk/lib/api/cxapp/stacks.ts#L427.
     *
     * When that object moved to this package, it had to be JSII compliant, which meant the property
     * names must be `camelCased`, and not `PascalCased`. This meant it no longer matches the structure in the `manifest.json` file.
     * In order to support current manifest files, we have to translate the `PascalCased` representation to the new `camelCased` one.
     *
     * Note that the serialization itself still writes `PascalCased` because it relates to how CloudFormation expects it.
     *
     * Ideally, we would start writing the `camelCased` and translate to how CloudFormation expects it when needed. But this requires nasty
     * backwards-compatibility code and it just doesn't seem to be worth the effort.
     */
    static patchStackTagsOnRead(manifest) {
        return Manifest.replaceStackTags(manifest, tags => tags.map((diskTag) => ({
            key: diskTag.Key,
            value: diskTag.Value,
        })));
    }
    /**
     * See explanation on `patchStackTagsOnRead`
     *
     * Translate stack tags metadata if it has the "right" casing.
     */
    static patchStackTagsOnWrite(manifest) {
        return Manifest.replaceStackTags(manifest, tags => tags.map(memTag => 
        // Might already be uppercased (because stack synthesis generates it in final form yet)
        ('Key' in memTag ? memTag : { Key: memTag.key, Value: memTag.value })));
    }
    /**
     * Recursively replace stack tags in the stack metadata
     */
    static replaceStackTags(manifest, fn) {
        // Need to add in the `noUndefined`s because otherwise jest snapshot tests are going to freak out
        // about the keys with values that are `undefined` (even though they would never be JSON.stringified)
        return noUndefined({
            ...manifest,
            artifacts: mapValues(manifest.artifacts, artifact => {
                if (artifact.type !== assembly.ArtifactType.AWS_CLOUDFORMATION_STACK) {
                    return artifact;
                }
                return noUndefined({
                    ...artifact,
                    metadata: mapValues(artifact.metadata, metadataEntries => metadataEntries.map(metadataEntry => {
                        if (metadataEntry.type !== assembly.ArtifactMetadataEntryType.STACK_TAGS || !metadataEntry.data) {
                            return metadataEntry;
                        }
                        return {
                            ...metadataEntry,
                            data: fn(metadataEntry.data),
                        };
                    })),
                });
            }),
        });
    }
}
exports.Manifest = Manifest;
_a = JSII_RTTI_SYMBOL_1;
Manifest[_a] = { fqn: "@aws-cdk/cloud-assembly-schema.Manifest", version: "1.204.0" };
function mapValues(xs, fn) {
    if (!xs) {
        return undefined;
    }
    const ret = {};
    for (const [k, v] of Object.entries(xs)) {
        ret[k] = fn(v);
    }
    return ret;
}
function noUndefined(xs) {
    const ret = {};
    for (const [k, v] of Object.entries(xs)) {
        if (v !== undefined) {
            ret[k] = v;
        }
    }
    return ret;
}
function stripEnumErrors(errors) {
    return errors.filter(e => typeof e.schema === 'string' || !('enum' in e.schema));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5pZmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5QkFBeUI7QUFDekIseUNBQXlDO0FBQ3pDLGlDQUFpQztBQUVqQyw2Q0FBNkM7QUFHN0MsdURBQXVEO0FBQ3ZELDBEQUEwRDtBQUUxRCxrRUFBa0U7QUFDbEUsaUVBQWlFO0FBQ2pFLDZCQUE2QjtBQUNoQixRQUFBLGdCQUFnQixHQUFXLHdDQUF3QyxDQUFDO0FBRWpGLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRTlELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBRXhFOztHQUVHO0FBQ0gsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRWhGLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBNEI1RDs7R0FFRztBQUNILE1BQWEsUUFBUTtJQWtNbkIsaUJBQXdCO0lBak14Qjs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFtQyxFQUFFLFFBQWdCOzs7Ozs7Ozs7O1FBQ3RGLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDNUY7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUFDLFFBQWdCLEVBQUUsT0FBNkI7Ozs7Ozs7Ozs7UUFDaEYsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pHO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBOEIsRUFBRSxRQUFnQjs7Ozs7Ozs7OztRQUM5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OlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMganNvbnNjaGVtYSBmcm9tICdqc29uc2NoZW1hJztcbmltcG9ydCAqIGFzIHNlbXZlciBmcm9tICdzZW12ZXInO1xuaW1wb3J0ICogYXMgYXNzZXRzIGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCAqIGFzIGFzc2VtYmx5IGZyb20gJy4vY2xvdWQtYXNzZW1ibHknO1xuaW1wb3J0ICogYXMgaW50ZWcgZnJvbSAnLi9pbnRlZy10ZXN0cyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cblxuLy8gdGhpcyBwcmVmaXggaXMgdXNlZCBieSB0aGUgQ0xJIHRvIGlkZW50aWZ5IHRoaXMgc3BlY2lmaWMgZXJyb3IuXG4vLyBpbiB3aGljaCBjYXNlIHdlIHdhbnQgdG8gaW5zdHJ1Y3QgdGhlIHVzZXIgdG8gdXBncmFkZSBoaXMgQ0xJLlxuLy8gc2VlIGV4ZWMudHMjY3JlYXRlQXNzZW1ibHlcbmV4cG9ydCBjb25zdCBWRVJTSU9OX01JU01BVENIOiBzdHJpbmcgPSAnQ2xvdWQgYXNzZW1ibHkgc2NoZW1hIHZlcnNpb24gbWlzbWF0Y2gnO1xuXG5jb25zdCBBU1NFVFNfU0NIRU1BID0gcmVxdWlyZSgnLi4vc2NoZW1hL2Fzc2V0cy5zY2hlbWEuanNvbicpO1xuXG5jb25zdCBBU1NFTUJMWV9TQ0hFTUEgPSByZXF1aXJlKCcuLi9zY2hlbWEvY2xvdWQtYXNzZW1ibHkuc2NoZW1hLmpzb24nKTtcblxuLyoqXG4gKiBWZXJzaW9uIGlzIHNoYXJlZCBmb3IgYm90aCBtYW5pZmVzdHNcbiAqL1xuY29uc3QgU0NIRU1BX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9zY2hlbWEvY2xvdWQtYXNzZW1ibHkudmVyc2lvbi5qc29uJykudmVyc2lvbjtcblxuY29uc3QgSU5URUdfU0NIRU1BID0gcmVxdWlyZSgnLi4vc2NoZW1hL2ludGVnLnNjaGVtYS5qc29uJyk7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgdGhlIGxvYWRNYW5pZmVzdCBvcGVyYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2FkTWFuaWZlc3RPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNraXAgdGhlIHZlcnNpb24gY2hlY2tcbiAgICpcbiAgICogVGhpcyBtZWFucyB5b3UgbWF5IHJlYWQgYSBuZXdlciBjbG91ZCBhc3NlbWJseSB0aGFuIHRoZSBDWCBBUEkgaXMgZGVzaWduZWRcbiAgICogdG8gc3VwcG9ydCwgYW5kIHlvdXIgYXBwbGljYXRpb24gbWF5IG5vdCBiZSBhd2FyZSBvZiBhbGwgZmVhdHVyZXMgdGhhdCBpbiB1c2VcbiAgICogaW4gdGhlIENsb3VkIEFzc2VtYmx5LlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgc2tpcFZlcnNpb25DaGVjaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNraXAgZW51bSBjaGVja3NcbiAgICpcbiAgICogVGhpcyBtZWFucyB5b3UgbWF5IHJlYWQgZW51bSB2YWx1ZXMgeW91IGRvbid0IGtub3cgYWJvdXQgeWV0LiBNYWtlIHN1cmUgdG8gYWx3YXlzXG4gICAqIGNoZWNrIHRoZSB2YWx1ZXMgb2YgZW51bXMgeW91IGVuY291bnRlciBpbiB0aGUgbWFuaWZlc3QuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBza2lwRW51bUNoZWNrPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBQcm90b2NvbCB1dGlsaXR5IGNsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgTWFuaWZlc3Qge1xuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBzYXZlcyB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3QgdG8gZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIG1hbmlmZXN0IC0gbWFuaWZlc3QuXG4gICAqIEBwYXJhbSBmaWxlUGF0aCAtIG91dHB1dCBmaWxlIHBhdGguXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNhdmVBc3NlbWJseU1hbmlmZXN0KG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0LCBmaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgTWFuaWZlc3Quc2F2ZU1hbmlmZXN0KG1hbmlmZXN0LCBmaWxlUGF0aCwgQVNTRU1CTFlfU0NIRU1BLCBNYW5pZmVzdC5wYXRjaFN0YWNrVGFnc09uV3JpdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYW5kIHZhbGlkYXRlcyB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3QgZnJvbSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggLSBwYXRoIHRvIHRoZSBtYW5pZmVzdCBmaWxlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBsb2FkQXNzZW1ibHlNYW5pZmVzdChmaWxlUGF0aDogc3RyaW5nLCBvcHRpb25zPzogTG9hZE1hbmlmZXN0T3B0aW9ucyk6IGFzc2VtYmx5LkFzc2VtYmx5TWFuaWZlc3Qge1xuICAgIHJldHVybiBNYW5pZmVzdC5sb2FkTWFuaWZlc3QoZmlsZVBhdGgsIEFTU0VNQkxZX1NDSEVNQSwgTWFuaWZlc3QucGF0Y2hTdGFja1RhZ3NPblJlYWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgc2F2ZXMgdGhlIGFzc2V0IG1hbmlmZXN0IHRvIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSBtYW5pZmVzdCAtIG1hbmlmZXN0LlxuICAgKiBAcGFyYW0gZmlsZVBhdGggLSBvdXRwdXQgZmlsZSBwYXRoLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzYXZlQXNzZXRNYW5pZmVzdChtYW5pZmVzdDogYXNzZXRzLkFzc2V0TWFuaWZlc3QsIGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICBNYW5pZmVzdC5zYXZlTWFuaWZlc3QobWFuaWZlc3QsIGZpbGVQYXRoLCBBU1NFVFNfU0NIRU1BLCBNYW5pZmVzdC5wYXRjaFN0YWNrVGFnc09uUmVhZCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhbmQgdmFsaWRhdGVzIHRoZSBhc3NldCBtYW5pZmVzdCBmcm9tIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlUGF0aCAtIHBhdGggdG8gdGhlIG1hbmlmZXN0IGZpbGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldE1hbmlmZXN0KGZpbGVQYXRoOiBzdHJpbmcpOiBhc3NldHMuQXNzZXRNYW5pZmVzdCB7XG4gICAgcmV0dXJuIHRoaXMubG9hZE1hbmlmZXN0KGZpbGVQYXRoLCBBU1NFVFNfU0NIRU1BKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYW5kIHNhdmVzIHRoZSBpbnRlZyBtYW5pZmVzdCB0byBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFuaWZlc3QgLSBtYW5pZmVzdC5cbiAgICogQHBhcmFtIGZpbGVQYXRoIC0gb3V0cHV0IGZpbGUgcGF0aC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2F2ZUludGVnTWFuaWZlc3QobWFuaWZlc3Q6IGludGVnLkludGVnTWFuaWZlc3QsIGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICBNYW5pZmVzdC5zYXZlTWFuaWZlc3QobWFuaWZlc3QsIGZpbGVQYXRoLCBJTlRFR19TQ0hFTUEpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYW5kIHZhbGlkYXRlcyB0aGUgaW50ZWcgbWFuaWZlc3QgZnJvbSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggLSBwYXRoIHRvIHRoZSBtYW5pZmVzdCBmaWxlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBsb2FkSW50ZWdNYW5pZmVzdChmaWxlUGF0aDogc3RyaW5nKTogaW50ZWcuSW50ZWdNYW5pZmVzdCB7XG4gICAgcmV0dXJuIHRoaXMubG9hZE1hbmlmZXN0KGZpbGVQYXRoLCBJTlRFR19TQ0hFTUEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHRoZSBjdXJyZW50IHNjaGVtYSB2ZXJzaW9uIG51bWJlci5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBTQ0hFTUFfVkVSU0lPTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgc2F2ZUFzc2VtYmx5TWFuaWZlc3QoKWBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2F2ZShtYW5pZmVzdDogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCwgZmlsZVBhdGg6IHN0cmluZykgeyByZXR1cm4gdGhpcy5zYXZlQXNzZW1ibHlNYW5pZmVzdChtYW5pZmVzdCwgZmlsZVBhdGgpOyB9XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWRcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBsb2FkQXNzZW1ibHlNYW5pZmVzdCgpYFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBsb2FkKGZpbGVQYXRoOiBzdHJpbmcpOiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0IHsgcmV0dXJuIHRoaXMubG9hZEFzc2VtYmx5TWFuaWZlc3QoZmlsZVBhdGgpOyB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgdmFsaWRhdGUobWFuaWZlc3Q6IHsgdmVyc2lvbjogc3RyaW5nIH0sIHNjaGVtYToganNvbnNjaGVtYS5TY2hlbWEsIG9wdGlvbnM/OiBMb2FkTWFuaWZlc3RPcHRpb25zKSB7XG4gICAgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb246IHN0cmluZykge1xuICAgICAgY29uc3QgdmVyID0gc2VtdmVyLnZhbGlkKHZlcnNpb24pO1xuICAgICAgaWYgKCF2ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNlbXZlciBzdHJpbmc6IFwiJHt2ZXJzaW9ufVwiYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmVyO1xuICAgIH1cblxuICAgIGNvbnN0IG1heFN1cHBvcnRlZCA9IHBhcnNlVmVyc2lvbihNYW5pZmVzdC52ZXJzaW9uKCkpO1xuICAgIGNvbnN0IGFjdHVhbCA9IHBhcnNlVmVyc2lvbihtYW5pZmVzdC52ZXJzaW9uKTtcblxuICAgIC8vIGZpcnN0IHZhbGlkYXRlIHRoZSB2ZXJzaW9uIHNob3VsZCBiZSBhY2NlcHRlZC5cbiAgICBpZiAoc2VtdmVyLmd0KGFjdHVhbCwgbWF4U3VwcG9ydGVkKSAmJiAhb3B0aW9ucz8uc2tpcFZlcnNpb25DaGVjaykge1xuICAgICAgLy8gd2UgdXNlIGEgd2VsbCBrbm93biBlcnJvciBwcmVmaXggc28gdGhhdCB0aGUgQ0xJIGNhbiBpZGVudGlmeSB0aGlzIHNwZWNpZmljIGVycm9yXG4gICAgICAvLyBhbmQgcHJpbnQgc29tZSBtb3JlIGNvbnRleHQgdG8gdGhlIHVzZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7VkVSU0lPTl9NSVNNQVRDSH06IE1heGltdW0gc2NoZW1hIHZlcnNpb24gc3VwcG9ydGVkIGlzICR7bWF4U3VwcG9ydGVkfSwgYnV0IGZvdW5kICR7YWN0dWFsfWApO1xuICAgIH1cblxuICAgIC8vIG5vdyB2YWxpZGF0ZSB0aGUgZm9ybWF0IGlzIGdvb2QuXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IGpzb25zY2hlbWEuVmFsaWRhdG9yKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdG9yLnZhbGlkYXRlKG1hbmlmZXN0LCBzY2hlbWEsIHtcblxuICAgICAgLy8gZG9lcyBleGlzdCBidXQgaXMgbm90IGluIHRoZSBUeXBlU2NyaXB0IGRlZmluaXRpb25zXG4gICAgICBuZXN0ZWRFcnJvcnM6IHRydWUsXG5cbiAgICAgIGFsbG93VW5rbm93bkF0dHJpYnV0ZXM6IGZhbHNlLFxuXG4gICAgfSBhcyBhbnkpO1xuXG4gICAgbGV0IGVycm9ycyA9IHJlc3VsdC5lcnJvcnM7XG4gICAgaWYgKG9wdGlvbnM/LnNraXBFbnVtQ2hlY2spIHtcbiAgICAgIC8vIEVudW0gdmFsaWRhdGlvbnMgYXJlbid0IHVzZWZ1bCB3aGVuXG4gICAgICBlcnJvcnMgPSBzdHJpcEVudW1FcnJvcnMoZXJyb3JzKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhc3NlbWJseSBtYW5pZmVzdDpcXG4ke2Vycm9ycy5tYXAoZSA9PiBlLnN0YWNrKS5qb2luKCdcXG4nKX1gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzYXZlTWFuaWZlc3QobWFuaWZlc3Q6IGFueSwgZmlsZVBhdGg6IHN0cmluZywgc2NoZW1hOiBqc29uc2NoZW1hLlNjaGVtYSwgcHJlcHJvY2Vzcz86IChvYmo6IGFueSkgPT4gYW55KSB7XG4gICAgbGV0IHdpdGhWZXJzaW9uID0geyAuLi5tYW5pZmVzdCwgdmVyc2lvbjogTWFuaWZlc3QudmVyc2lvbigpIH07XG4gICAgTWFuaWZlc3QudmFsaWRhdGUod2l0aFZlcnNpb24sIHNjaGVtYSk7XG4gICAgaWYgKHByZXByb2Nlc3MpIHtcbiAgICAgIHdpdGhWZXJzaW9uID0gcHJlcHJvY2Vzcyh3aXRoVmVyc2lvbik7XG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHdpdGhWZXJzaW9uLCB1bmRlZmluZWQsIDIpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGxvYWRNYW5pZmVzdChmaWxlUGF0aDogc3RyaW5nLCBzY2hlbWE6IGpzb25zY2hlbWEuU2NoZW1hLCBwcmVwcm9jZXNzPzogKG9iajogYW55KSA9PiBhbnksIG9wdGlvbnM/OiBMb2FkTWFuaWZlc3RPcHRpb25zKSB7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pKTtcbiAgICBpZiAocHJlcHJvY2Vzcykge1xuICAgICAgb2JqID0gcHJlcHJvY2VzcyhvYmopO1xuICAgIH1cbiAgICBNYW5pZmVzdC52YWxpZGF0ZShvYmosIHNjaGVtYSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJlcXVpcmVzIHNvbWUgZXhwbGFpbmluZy4uLlxuICAgKlxuICAgKiBXZSBwcmV2aW91c2x5IHVzZWQgYHsgS2V5LCBWYWx1ZSB9YCBmb3IgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBzdGFjayB0YWcuIChOb3RpY2UgdGhlIGNhc2luZylcbiAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3MtY2RrL2Jsb2IvdjEuMjcuMC9wYWNrYWdlcy9hd3MtY2RrL2xpYi9hcGkvY3hhcHAvc3RhY2tzLnRzI0w0MjcuXG4gICAqXG4gICAqIFdoZW4gdGhhdCBvYmplY3QgbW92ZWQgdG8gdGhpcyBwYWNrYWdlLCBpdCBoYWQgdG8gYmUgSlNJSSBjb21wbGlhbnQsIHdoaWNoIG1lYW50IHRoZSBwcm9wZXJ0eVxuICAgKiBuYW1lcyBtdXN0IGJlIGBjYW1lbENhc2VkYCwgYW5kIG5vdCBgUGFzY2FsQ2FzZWRgLiBUaGlzIG1lYW50IGl0IG5vIGxvbmdlciBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgaW4gdGhlIGBtYW5pZmVzdC5qc29uYCBmaWxlLlxuICAgKiBJbiBvcmRlciB0byBzdXBwb3J0IGN1cnJlbnQgbWFuaWZlc3QgZmlsZXMsIHdlIGhhdmUgdG8gdHJhbnNsYXRlIHRoZSBgUGFzY2FsQ2FzZWRgIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBuZXcgYGNhbWVsQ2FzZWRgIG9uZS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBzZXJpYWxpemF0aW9uIGl0c2VsZiBzdGlsbCB3cml0ZXMgYFBhc2NhbENhc2VkYCBiZWNhdXNlIGl0IHJlbGF0ZXMgdG8gaG93IENsb3VkRm9ybWF0aW9uIGV4cGVjdHMgaXQuXG4gICAqXG4gICAqIElkZWFsbHksIHdlIHdvdWxkIHN0YXJ0IHdyaXRpbmcgdGhlIGBjYW1lbENhc2VkYCBhbmQgdHJhbnNsYXRlIHRvIGhvdyBDbG91ZEZvcm1hdGlvbiBleHBlY3RzIGl0IHdoZW4gbmVlZGVkLiBCdXQgdGhpcyByZXF1aXJlcyBuYXN0eVxuICAgKiBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBjb2RlIGFuZCBpdCBqdXN0IGRvZXNuJ3Qgc2VlbSB0byBiZSB3b3J0aCB0aGUgZWZmb3J0LlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcGF0Y2hTdGFja1RhZ3NPblJlYWQobWFuaWZlc3Q6IGFzc2VtYmx5LkFzc2VtYmx5TWFuaWZlc3QpIHtcbiAgICByZXR1cm4gTWFuaWZlc3QucmVwbGFjZVN0YWNrVGFncyhtYW5pZmVzdCwgdGFncyA9PiB0YWdzLm1hcCgoZGlza1RhZzogYW55KSA9PiAoe1xuICAgICAga2V5OiBkaXNrVGFnLktleSxcbiAgICAgIHZhbHVlOiBkaXNrVGFnLlZhbHVlLFxuICAgIH0pKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VlIGV4cGxhbmF0aW9uIG9uIGBwYXRjaFN0YWNrVGFnc09uUmVhZGBcbiAgICpcbiAgICogVHJhbnNsYXRlIHN0YWNrIHRhZ3MgbWV0YWRhdGEgaWYgaXQgaGFzIHRoZSBcInJpZ2h0XCIgY2FzaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcGF0Y2hTdGFja1RhZ3NPbldyaXRlKG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0KSB7XG4gICAgcmV0dXJuIE1hbmlmZXN0LnJlcGxhY2VTdGFja1RhZ3MobWFuaWZlc3QsIHRhZ3MgPT4gdGFncy5tYXAobWVtVGFnID0+XG4gICAgICAvLyBNaWdodCBhbHJlYWR5IGJlIHVwcGVyY2FzZWQgKGJlY2F1c2Ugc3RhY2sgc3ludGhlc2lzIGdlbmVyYXRlcyBpdCBpbiBmaW5hbCBmb3JtIHlldClcbiAgICAgICgnS2V5JyBpbiBtZW1UYWcgPyBtZW1UYWcgOiB7IEtleTogbWVtVGFnLmtleSwgVmFsdWU6IG1lbVRhZy52YWx1ZSB9KSBhcyBhbnksXG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgcmVwbGFjZSBzdGFjayB0YWdzIGluIHRoZSBzdGFjayBtZXRhZGF0YVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVwbGFjZVN0YWNrVGFncyhtYW5pZmVzdDogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCwgZm46IEVuZG9mdW5jdG9yPGFzc2VtYmx5LlN0YWNrVGFnc01ldGFkYXRhRW50cnk+KTogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCB7XG4gICAgLy8gTmVlZCB0byBhZGQgaW4gdGhlIGBub1VuZGVmaW5lZGBzIGJlY2F1c2Ugb3RoZXJ3aXNlIGplc3Qgc25hcHNob3QgdGVzdHMgYXJlIGdvaW5nIHRvIGZyZWFrIG91dFxuICAgIC8vIGFib3V0IHRoZSBrZXlzIHdpdGggdmFsdWVzIHRoYXQgYXJlIGB1bmRlZmluZWRgIChldmVuIHRob3VnaCB0aGV5IHdvdWxkIG5ldmVyIGJlIEpTT04uc3RyaW5naWZpZWQpXG4gICAgcmV0dXJuIG5vVW5kZWZpbmVkKHtcbiAgICAgIC4uLm1hbmlmZXN0LFxuICAgICAgYXJ0aWZhY3RzOiBtYXBWYWx1ZXMobWFuaWZlc3QuYXJ0aWZhY3RzLCBhcnRpZmFjdCA9PiB7XG4gICAgICAgIGlmIChhcnRpZmFjdC50eXBlICE9PSBhc3NlbWJseS5BcnRpZmFjdFR5cGUuQVdTX0NMT1VERk9STUFUSU9OX1NUQUNLKSB7IHJldHVybiBhcnRpZmFjdDsgfVxuICAgICAgICByZXR1cm4gbm9VbmRlZmluZWQoe1xuICAgICAgICAgIC4uLmFydGlmYWN0LFxuICAgICAgICAgIG1ldGFkYXRhOiBtYXBWYWx1ZXMoYXJ0aWZhY3QubWV0YWRhdGEsIG1ldGFkYXRhRW50cmllcyA9PiBtZXRhZGF0YUVudHJpZXMubWFwKG1ldGFkYXRhRW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhRW50cnkudHlwZSAhPT0gYXNzZW1ibHkuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTIHx8ICFtZXRhZGF0YUVudHJ5LmRhdGEpIHsgcmV0dXJuIG1ldGFkYXRhRW50cnk7IH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhRW50cnksXG4gICAgICAgICAgICAgIGRhdGE6IGZuKG1ldGFkYXRhRW50cnkuZGF0YSBhcyBhc3NlbWJseS5TdGFja1RhZ3NNZXRhZGF0YUVudHJ5KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkpLFxuICAgICAgICB9IGFzIGFzc2VtYmx5LkFydGlmYWN0TWFuaWZlc3QpO1xuICAgICAgfSksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cblxudHlwZSBFbmRvZnVuY3RvcjxBPiA9ICh4OiBBKSA9PiBBO1xuXG5mdW5jdGlvbiBtYXBWYWx1ZXM8QSwgQj4oeHM6IFJlY29yZDxzdHJpbmcsIEE+IHwgdW5kZWZpbmVkLCBmbjogKHg6IEEpID0+IEIpOiBSZWNvcmQ8c3RyaW5nLCBCPiB8IHVuZGVmaW5lZCB7XG4gIGlmICgheHMpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuICBjb25zdCByZXQ6IFJlY29yZDxzdHJpbmcsIEI+IHwgdW5kZWZpbmVkID0ge307XG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHhzKSkge1xuICAgIHJldFtrXSA9IGZuKHYpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG5vVW5kZWZpbmVkPEEgZXh0ZW5kcyBvYmplY3Q+KHhzOiBBKTogQSB7XG4gIGNvbnN0IHJldDogYW55ID0ge307XG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHhzKSkge1xuICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldFtrXSA9IHY7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHN0cmlwRW51bUVycm9ycyhlcnJvcnM6IGpzb25zY2hlbWEuVmFsaWRhdGlvbkVycm9yW10pIHtcbiAgcmV0dXJuIGVycm9ycy5maWx0ZXIoZSA9PiB0eXBlb2YgZS5zY2hlbWEgPT09J3N0cmluZycgfHwgISgnZW51bScgaW4gZS5zY2hlbWEpKTtcbn1cbiJdfQ==