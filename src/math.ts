import { BytesPipe } from './math/bytes.pipe';
import { CeilPipe } from './math/ceil.pipe';
import { FloorPipe } from './math/floor.pipe';
import { MaxPipe } from './math/max.pipe';
import { MeanPipe } from './math/mean.pipe';
import { MinPipe } from './math/min.pipe';
import { RoundPipe } from './math/round.pipe';
import { SumPipe } from './math/sum.pipe';

export * from './math/bytes.pipe';
export * from './math/ceil.pipe';
export * from './math/floor.pipe';
export * from './math/max.pipe';
export * from './math/mean.pipe';
export * from './math/min.pipe';
export * from './math/round.pipe';
export * from './math/sum.pipe';


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