"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var left_pad_pipe_1 = require('./src/string/left-pad.pipe');
var match_pipe_1 = require('./src/string/match.pipe');
var pad_pipe_1 = require('./src/string/pad.pipe');
var replace_pipe_1 = require('./src/string/replace.pipe');
var right_pad_pipe_1 = require('./src/string/right-pad.pipe');
var split_pipe_1 = require('./src/string/split.pipe');
var test_pipe_1 = require('./src/string/test.pipe');
var trim_pipe_1 = require('./src/string/trim.pipe');
__export(require('./src/string/left-pad.pipe'));
__export(require('./src/string/match.pipe'));
__export(require('./src/string/pad.pipe'));
__export(require('./src/string/replace.pipe'));
__export(require('./src/string/right-pad.pipe'));
__export(require('./src/string/split.pipe'));
__export(require('./src/string/test.pipe'));
__export(require('./src/string/trim.pipe'));
exports.NG2_STRING_PIPES = [
    left_pad_pipe_1.LeftPadPipe,
    match_pipe_1.MatchPipe,
    pad_pipe_1.PadPipe,
    replace_pipe_1.ReplacePipe,
    right_pad_pipe_1.RightPadPipe,
    split_pipe_1.SplitPipe,
    test_pipe_1.TestPipe,
    trim_pipe_1.TrimPipe
];
//# sourceMappingURL=string.js.map