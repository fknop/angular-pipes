"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var boolean_1 = require('./boolean');
var math_1 = require('./math');
var array_1 = require('./array');
var string_1 = require('./string');
__export(require('./boolean'));
__export(require('./math'));
__export(require('./array'));
__export(require('./string'));
exports.NG2_PIPES = boolean_1.NG2_BOOLEAN_PIPES.concat(math_1.NG2_MATH_PIPES, array_1.NG2_ARRAY_PIPES, string_1.NG2_STRING_PIPES);
//# sourceMappingURL=index.js.map