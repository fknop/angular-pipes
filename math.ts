import { BytesPipe } from './src/math/bytes.pipe';
import { CeilPipe } from './src/math/ceil.pipe';
import { FloorPipe } from './src/math/floor.pipe';
import { MaxPipe } from './src/math/max.pipe';
import { MeanPipe } from './src/math/mean.pipe';
import { MinPipe } from './src/math/min.pipe';
import { RoundPipe } from './src/math/round.pipe';
import { SumPipe } from './src/math/sum.pipe';

export * from './src/math/bytes.pipe';
export * from './src/math/ceil.pipe';
export * from './src/math/floor.pipe';
export * from './src/math/max.pipe';
export * from './src/math/mean.pipe';
export * from './src/math/min.pipe';
export * from './src/math/round.pipe';
export * from './src/math/sum.pipe';


export const NG2_MATH_PIPES = [
    BytesPipe,
    CeilPipe,
    FloorPipe,
    MaxPipe,
    MeanPipe,
    MinPipe,
    RoundPipe,
    SumPipe
];