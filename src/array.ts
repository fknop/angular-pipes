import { EmptyPipe } from './array/empty.pipe';
import { HeadPipe } from './array/head.pipe';
import { InitialPipe } from './array/initial.pipe';
import { LastPipe } from './array/last.pipe';
import { JoinPipe } from './array/join.pipe';
import { TailPipe } from './array/tail.pipe';
import { UniqPipe } from './array/uniq.pipe';
import { WithoutPipe } from './array/without.pipe';

export * from './array/empty.pipe';
export * from './array/head.pipe';
export * from './array/initial.pipe';
export * from './array/last.pipe';
export * from './array/join.pipe';
export * from './array/tail.pipe';
export * from './array/uniq.pipe';
export * from './array/without.pipe';

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