import { NgModule } from '@angular/core';

import { EmptyPipe } from './array/empty.pipe';
import { HeadPipe } from './array/head.pipe';
import { InitialPipe } from './array/initial.pipe';
import { LastPipe } from './array/last.pipe';
import { JoinPipe } from './array/join.pipe';
import { TailPipe } from './array/tail.pipe';
import { UniqPipe } from './array/uniq.pipe';
import { WithoutPipe } from './array/without.pipe';
import { MapPipe } from './array/map.pipe';
import { WherePipe } from './array/where.pipe';
import { RangePipe } from './array/range.pipe';
import { PluckPipe } from './array/pluck.pipe';
import { ReversePipe } from './array/reverse.pipe';
import { OrderByPipe } from './array/order-by.pipe';
import { CountPipe } from './array/count.pipe';
import { SomePipe } from './array/some.pipe';
import { EveryPipe } from './array/every.pipe';
import { ShufflePipe } from './array/shuffle.pipe';
import { TakePipe } from './array/take.pipe';
import { DropPipe } from './array/drop.pipe';
import { DeepPipe } from './array/deep.pipe';
import { ChunkPipe } from './array/chunk.pipe';

export * from './array/empty.pipe';
export * from './array/head.pipe';
export * from './array/initial.pipe';
export * from './array/last.pipe';
export * from './array/join.pipe';
export * from './array/tail.pipe';
export * from './array/uniq.pipe';
export * from './array/without.pipe';
export * from './array/map.pipe';
export * from './array/where.pipe';
export * from './array/range.pipe';
export * from './array/pluck.pipe';
export * from './array/reverse.pipe';
export * from './array/order-by.pipe';
export * from './array/count.pipe';
export * from './array/some.pipe';
export * from './array/every.pipe';
export * from './array/shuffle.pipe';
export * from './array/take.pipe';
export * from './array/drop.pipe';
export * from './array/deep.pipe';
export * from './array/chunk.pipe';

@NgModule({
    declarations: [
        EmptyPipe,
        HeadPipe,
        InitialPipe,
        LastPipe,
        JoinPipe,
        TailPipe,
        UniqPipe,
        WithoutPipe,
        MapPipe,
        WherePipe,
        RangePipe,
        PluckPipe,
        ReversePipe,
        OrderByPipe,
        CountPipe,
        SomePipe,
        EveryPipe,
        ShufflePipe,
        TakePipe,
        DropPipe,
        DeepPipe,
        ChunkPipe
    ],
    exports: [
        EmptyPipe,
        HeadPipe,
        InitialPipe,
        LastPipe,
        JoinPipe,
        TailPipe,
        UniqPipe,
        WithoutPipe,
        MapPipe,
        WherePipe,
        RangePipe,
        PluckPipe,
        ReversePipe,
        OrderByPipe,
        CountPipe,
        SomePipe,
        EveryPipe,
        ShufflePipe,
        TakePipe,
        DropPipe,
        DeepPipe,
        ChunkPipe
    ]
})
export class Ng2ArrayPipesModule {}