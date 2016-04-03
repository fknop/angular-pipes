System.register(['./src/string/left-pad.pipe', './src/string/match.pipe', './src/string/pad.pipe', './src/string/replace.pipe', './src/string/right-pad.pipe', './src/string/split.pipe', './src/string/test.pipe', './src/string/trim.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var left_pad_pipe_1, match_pipe_1, pad_pipe_1, replace_pipe_1, right_pad_pipe_1, split_pipe_1, test_pipe_1, trim_pipe_1;
    var NG2_STRING_PIPES;
    var exportedNames_1 = {
        'NG2_STRING_PIPES': true
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
            function (left_pad_pipe_1_1) {
                left_pad_pipe_1 = left_pad_pipe_1_1;
                exportStar_1(left_pad_pipe_1_1);
            },
            function (match_pipe_1_1) {
                match_pipe_1 = match_pipe_1_1;
                exportStar_1(match_pipe_1_1);
            },
            function (pad_pipe_1_1) {
                pad_pipe_1 = pad_pipe_1_1;
                exportStar_1(pad_pipe_1_1);
            },
            function (replace_pipe_1_1) {
                replace_pipe_1 = replace_pipe_1_1;
                exportStar_1(replace_pipe_1_1);
            },
            function (right_pad_pipe_1_1) {
                right_pad_pipe_1 = right_pad_pipe_1_1;
                exportStar_1(right_pad_pipe_1_1);
            },
            function (split_pipe_1_1) {
                split_pipe_1 = split_pipe_1_1;
                exportStar_1(split_pipe_1_1);
            },
            function (test_pipe_1_1) {
                test_pipe_1 = test_pipe_1_1;
                exportStar_1(test_pipe_1_1);
            },
            function (trim_pipe_1_1) {
                trim_pipe_1 = trim_pipe_1_1;
                exportStar_1(trim_pipe_1_1);
            }],
        execute: function() {
            exports_1("NG2_STRING_PIPES", NG2_STRING_PIPES = [
                left_pad_pipe_1.LeftPadPipe,
                match_pipe_1.MatchPipe,
                pad_pipe_1.PadPipe,
                replace_pipe_1.ReplacePipe,
                right_pad_pipe_1.RightPadPipe,
                split_pipe_1.SplitPipe,
                test_pipe_1.TestPipe,
                trim_pipe_1.TrimPipe
            ]);
        }
    }
});
//# sourceMappingURL=string.js.map