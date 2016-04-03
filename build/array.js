System.register(['./src/array/empty.pipe', './src/array/head.pipe', './src/array/initial.pipe', './src/array/last.pipe', './src/array/join.pipe', './src/array/tail.pipe', './src/array/uniq.pipe', './src/array/without.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var empty_pipe_1, head_pipe_1, initial_pipe_1, last_pipe_1, join_pipe_1, tail_pipe_1, uniq_pipe_1, without_pipe_1;
    var NG2_ARRAY_PIPES;
    var exportedNames_1 = {
        'NG2_ARRAY_PIPES': true
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
            function (empty_pipe_1_1) {
                empty_pipe_1 = empty_pipe_1_1;
                exportStar_1(empty_pipe_1_1);
            },
            function (head_pipe_1_1) {
                head_pipe_1 = head_pipe_1_1;
                exportStar_1(head_pipe_1_1);
            },
            function (initial_pipe_1_1) {
                initial_pipe_1 = initial_pipe_1_1;
                exportStar_1(initial_pipe_1_1);
            },
            function (last_pipe_1_1) {
                last_pipe_1 = last_pipe_1_1;
                exportStar_1(last_pipe_1_1);
            },
            function (join_pipe_1_1) {
                join_pipe_1 = join_pipe_1_1;
                exportStar_1(join_pipe_1_1);
            },
            function (tail_pipe_1_1) {
                tail_pipe_1 = tail_pipe_1_1;
                exportStar_1(tail_pipe_1_1);
            },
            function (uniq_pipe_1_1) {
                uniq_pipe_1 = uniq_pipe_1_1;
                exportStar_1(uniq_pipe_1_1);
            },
            function (without_pipe_1_1) {
                without_pipe_1 = without_pipe_1_1;
                exportStar_1(without_pipe_1_1);
            }],
        execute: function() {
            exports_1("NG2_ARRAY_PIPES", NG2_ARRAY_PIPES = [
                empty_pipe_1.EmptyPipe,
                head_pipe_1.HeadPipe,
                initial_pipe_1.InitialPipe,
                last_pipe_1.LastPipe,
                join_pipe_1.JoinPipe,
                tail_pipe_1.TailPipe,
                uniq_pipe_1.UniqPipe,
                without_pipe_1.WithoutPipe
            ]);
        }
    }
});
//# sourceMappingURL=array.js.map