"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reset=exports.quiet=void 0;function quiet(){const deprecated=process.env.JSII_DEPRECATED;return process.env.JSII_DEPRECATED="quiet",deprecated}exports.quiet=quiet;function reset(deprecated){deprecated===void 0?delete process.env.JSII_DEPRECATED:process.env.JSII_DEPRECATED=deprecated}exports.reset=reset;
