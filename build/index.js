System.register(['./boolean', './math', './array', './string'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var boolean_1, math_1, array_1, string_1;
    var NG2_PIPES;
    var exportedNames_1 = {
        'NG2_PIPES': true
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
            function (boolean_1_1) {
                boolean_1 = boolean_1_1;
                exportStar_1(boolean_1_1);
            },
            function (math_1_1) {
                math_1 = math_1_1;
                exportStar_1(math_1_1);
            },
            function (array_1_1) {
                array_1 = array_1_1;
                exportStar_1(array_1_1);
            },
            function (string_1_1) {
                string_1 = string_1_1;
                exportStar_1(string_1_1);
            }],
        execute: function() {
            exports_1("NG2_PIPES", NG2_PIPES = boolean_1.NG2_BOOLEAN_PIPES.concat(math_1.NG2_MATH_PIPES, array_1.NG2_ARRAY_PIPES, string_1.NG2_STRING_PIPES));
        }
    }
});
//# sourceMappingURL=index.js.map