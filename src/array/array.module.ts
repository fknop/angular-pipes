import { NgModule } from '@angular/core';

import { EmptyPipe } from './empty.pipe';
import { HeadPipe } from './head.pipe';
import { InitialPipe } from './initial.pipe';
import { LastPipe } from './last.pipe';
import { JoinPipe } from './join.pipe';
import { TailPipe } from './tail.pipe';
import { UniqPipe } from './uniq.pipe';
import { WithoutPipe } from './without.pipe';
import { MapPipe } from './map.pipe';
import { WherePipe } from './where.pipe';
import { FirstOrDefaultPipe } from './first-or-default.pipe';
import { RangePipe } from './range.pipe';
import { PluckPipe } from './pluck.pipe';
import { ReversePipe } from './reverse.pipe';
import { OrderByPipe } from './order-by.pipe';
import { CountPipe } from './count.pipe';
import { SomePipe } from './some.pipe';
import { EveryPipe } from './every.pipe';
import { ShufflePipe } from './shuffle.pipe';
import { TakePipe } from './take.pipe';
import { DropPipe } from './drop.pipe';
import { DeepPipe } from './deep.pipe';
import { ChunkPipe } from './chunk.pipe';
import { FlattenPipe } from './flatten.pipe';
import { IntersectionPipe } from './intersection.pipe';
import { UnionPipe } from './union.pipe';
import { TakeWhilePipe } from './take-while.pipe';
import { TakeUntilPipe } from './take-until.pipe';


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
    ChunkPipe,
    FlattenPipe,
    FirstOrDefaultPipe,
    IntersectionPipe,
    UnionPipe,
    TakeWhilePipe,
    TakeUntilPipe
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
    ChunkPipe,
    FlattenPipe,
    FirstOrDefaultPipe,
    IntersectionPipe,
    UnionPipe,
    TakeWhilePipe,
    TakeUntilPipe
  ]
})
export class NgArrayPipesModule {}
