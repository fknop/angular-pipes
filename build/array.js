"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var empty_pipe_1 = require('./src/array/empty.pipe');
var head_pipe_1 = require('./src/array/head.pipe');
var initial_pipe_1 = require('./src/array/initial.pipe');
var last_pipe_1 = require('./src/array/last.pipe');
var join_pipe_1 = require('./src/array/join.pipe');
var tail_pipe_1 = require('./src/array/tail.pipe');
var uniq_pipe_1 = require('./src/array/uniq.pipe');
var without_pipe_1 = require('./src/array/without.pipe');
__export(require('./src/array/empty.pipe'));
__export(require('./src/array/head.pipe'));
__export(require('./src/array/initial.pipe'));
__export(require('./src/array/last.pipe'));
__export(require('./src/array/join.pipe'));
__export(require('./src/array/tail.pipe'));
__export(require('./src/array/uniq.pipe'));
__export(require('./src/array/without.pipe'));
exports.NG2_ARRAY_PIPES = [
    empty_pipe_1.EmptyPipe,
    head_pipe_1.HeadPipe,
    initial_pipe_1.InitialPipe,
    last_pipe_1.LastPipe,
    join_pipe_1.JoinPipe,
    tail_pipe_1.TailPipe,
    uniq_pipe_1.UniqPipe,
    without_pipe_1.WithoutPipe
];
//# sourceMappingURL=array.js.map