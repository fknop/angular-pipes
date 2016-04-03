"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var bytes_pipe_1 = require('./src/math/bytes.pipe');
var ceil_pipe_1 = require('./src/math/ceil.pipe');
var floor_pipe_1 = require('./src/math/floor.pipe');
var max_pipe_1 = require('./src/math/max.pipe');
var mean_pipe_1 = require('./src/math/mean.pipe');
var min_pipe_1 = require('./src/math/min.pipe');
var round_pipe_1 = require('./src/math/round.pipe');
var sum_pipe_1 = require('./src/math/sum.pipe');
__export(require('./src/math/bytes.pipe'));
__export(require('./src/math/ceil.pipe'));
__export(require('./src/math/floor.pipe'));
__export(require('./src/math/max.pipe'));
__export(require('./src/math/mean.pipe'));
__export(require('./src/math/min.pipe'));
__export(require('./src/math/round.pipe'));
__export(require('./src/math/sum.pipe'));
exports.NG2_MATH_PIPES = [
    bytes_pipe_1.BytesPipe,
    ceil_pipe_1.CeilPipe,
    floor_pipe_1.FloorPipe,
    max_pipe_1.MaxPipe,
    mean_pipe_1.MeanPipe,
    min_pipe_1.MinPipe,
    round_pipe_1.RoundPipe,
    sum_pipe_1.SumPipe
];
//# sourceMappingURL=math.js.map