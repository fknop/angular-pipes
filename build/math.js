System.register(['./src/math/bytes.pipe', './src/math/ceil.pipe', './src/math/floor.pipe', './src/math/max.pipe', './src/math/mean.pipe', './src/math/min.pipe', './src/math/round.pipe', './src/math/sum.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bytes_pipe_1, ceil_pipe_1, floor_pipe_1, max_pipe_1, mean_pipe_1, min_pipe_1, round_pipe_1, sum_pipe_1;
    var NG2_MATH_PIPES;
    var exportedNames_1 = {
        'NG2_MATH_PIPES': true
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
            function (bytes_pipe_1_1) {
                bytes_pipe_1 = bytes_pipe_1_1;
                exportStar_1(bytes_pipe_1_1);
            },
            function (ceil_pipe_1_1) {
                ceil_pipe_1 = ceil_pipe_1_1;
                exportStar_1(ceil_pipe_1_1);
            },
            function (floor_pipe_1_1) {
                floor_pipe_1 = floor_pipe_1_1;
                exportStar_1(floor_pipe_1_1);
            },
            function (max_pipe_1_1) {
                max_pipe_1 = max_pipe_1_1;
                exportStar_1(max_pipe_1_1);
            },
            function (mean_pipe_1_1) {
                mean_pipe_1 = mean_pipe_1_1;
                exportStar_1(mean_pipe_1_1);
            },
            function (min_pipe_1_1) {
                min_pipe_1 = min_pipe_1_1;
                exportStar_1(min_pipe_1_1);
            },
            function (round_pipe_1_1) {
                round_pipe_1 = round_pipe_1_1;
                exportStar_1(round_pipe_1_1);
            },
            function (sum_pipe_1_1) {
                sum_pipe_1 = sum_pipe_1_1;
                exportStar_1(sum_pipe_1_1);
            }],
        execute: function() {
            exports_1("NG2_MATH_PIPES", NG2_MATH_PIPES = [
                bytes_pipe_1.BytesPipe,
                ceil_pipe_1.CeilPipe,
                floor_pipe_1.FloorPipe,
                max_pipe_1.MaxPipe,
                mean_pipe_1.MeanPipe,
                min_pipe_1.MinPipe,
                round_pipe_1.RoundPipe,
                sum_pipe_1.SumPipe
            ]);
        }
    }
});
//# sourceMappingURL=math.js.map