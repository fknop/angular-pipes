import { EmptyPipe } from './src/array/empty.pipe';
import { HeadPipe } from './src/array/head.pipe';
import { InitialPipe } from './src/array/initial.pipe';
import { LastPipe } from './src/array/last.pipe';
import { JoinPipe } from './src/array/join.pipe';
import { TailPipe } from './src/array/tail.pipe';
import { UniqPipe } from './src/array/uniq.pipe';
import { WithoutPipe } from './src/array/without.pipe';

export * from './src/array/empty.pipe';
export * from './src/array/head.pipe';
export * from './src/array/initial.pipe';
export * from './src/array/last.pipe';
export * from './src/array/join.pipe';
export * from './src/array/tail.pipe';
export * from './src/array/uniq.pipe';
export * from './src/array/without.pipe';

export const NG2_ARRAY_PIPES = [
    EmptyPipe,
    HeadPipe,
    InitialPipe,
    LastPipe,
    JoinPipe,
    TailPipe,
    UniqPipe,
    WithoutPipe  
];