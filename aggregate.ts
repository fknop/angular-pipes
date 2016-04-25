import { MaxPipe } from './src/math/max.pipe';
import { MeanPipe } from './src/math/mean.pipe';
import { MinPipe } from './src/math/min.pipe';
import { SumPipe } from './src/math/sum.pipe';

export * from './src/math/max.pipe';
export * from './src/math/mean.pipe';
export * from './src/math/min.pipe';
export * from './src/math/sum.pipe';



export const NG2_AGGREGATE_PIPES = [
    MaxPipe,
    MeanPipe,
    MinPipe,
    SumPipe,
];