System.register(['./src/boolean/conditions.pipe', './src/boolean/types.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var conditions_pipe_1, types_pipe_1;
    var NG2_BOOLEAN_PIPES;
    var exportedNames_1 = {
        'NG2_BOOLEAN_PIPES': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (conditions_pipe_1_1) {
                conditions_pipe_1 = conditions_pipe_1_1;
                exportStar_1(conditions_pipe_1_1);
            },
            function (types_pipe_1_1) {
                types_pipe_1 = types_pipe_1_1;
                exportStar_1(types_pipe_1_1);
            }],
        execute: function() {
            exports_1("NG2_BOOLEAN_PIPES", NG2_BOOLEAN_PIPES = conditions_pipe_1.NG2_CONDITIONS_PIPES.concat(types_pipe_1.NG2_TYPES_PIPES));
        }
    }
});
//# sourceMappingURL=boolean.js.map