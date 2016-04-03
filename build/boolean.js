"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var conditions_pipe_1 = require('./src/boolean/conditions.pipe');
var types_pipe_1 = require('./src/boolean/types.pipe');
__export(require('./src/boolean/conditions.pipe'));
__export(require('./src/boolean/types.pipe'));
exports.NG2_BOOLEAN_PIPES = conditions_pipe_1.NG2_CONDITIONS_PIPES.concat(types_pipe_1.NG2_TYPES_PIPES);
//# sourceMappingURL=boolean.js.map