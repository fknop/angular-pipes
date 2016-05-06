import { MaxPipe } from './math/max.pipe';
import { MeanPipe } from './math/mean.pipe';
import { MinPipe } from './math/min.pipe';
import { SumPipe } from './math/sum.pipe';

export * from './math/max.pipe';
export * from './math/mean.pipe';
export * from './math/min.pipe';
export * from './math/sum.pipe';



export const NG2_AGGREGATE_PIPES = [
    MaxPipe,
    MeanPipe,
    MinPipe,
    SumPipe,
];