import { NgModule } from '@angular/core';

import { NgEmptyPipeModule } from './empty.pipe';
import { NgHeadPipeModule } from './head.pipe';
import { NgInitialPipeModule } from './initial.pipe';
import { NgLastPipeModule } from './last.pipe';
import { NgJoinPipeModule } from './join.pipe';
import { NgTailPipeModule } from './tail.pipe';
import { NgUniqPipeModule } from './uniq.pipe';
import { NgWithoutPipeModule } from './without.pipe';
import { NgMapPipeModule } from './map.pipe';
import { NgWherePipeModule } from './where.pipe';
import { NgFirstOrDefaultPipeModule } from './first-or-default.pipe';
import { NgRangePipeModule } from './range.pipe';
import { NgPluckPipeModule } from './pluck.pipe';
import { NgReversePipeModule } from './reverse.pipe';
import { NgOrderByPipeModule } from './order-by.pipe';
import { NgCountPipeModule } from './count.pipe';
import { NgSomePipeModule } from './some.pipe';
import { NgEveryPipeModule } from './every.pipe';
import { NgShufflePipeModule } from './shuffle.pipe';
import { NgTakePipeModule } from './take.pipe';
import { NgDropPipeModule } from './drop.pipe';
import { NgDeepPipeModule } from './deep.pipe';
import { NgChunkPipeModule } from './chunk.pipe';
import { NgFlattenPipeModule } from './flatten.pipe';
import { NgIntersectionPipeModule } from './intersection.pipe';
import { NgUnionPipeModule } from './union.pipe';
import { NgTakeWhilePipeModule } from './take-while.pipe';
import { NgTakeUntilPipeModule } from './take-until.pipe';

@NgModule({
  imports: [
    NgChunkPipeModule,
    NgCountPipeModule,
    NgDeepPipeModule,
    NgDropPipeModule,
    NgEmptyPipeModule,
    NgEveryPipeModule,
    NgFirstOrDefaultPipeModule,
    NgFlattenPipeModule,
    NgHeadPipeModule,
    NgInitialPipeModule,
    NgIntersectionPipeModule,
    NgJoinPipeModule,
    NgLastPipeModule,
    NgMapPipeModule,
    NgOrderByPipeModule,
    NgPluckPipeModule,
    NgRangePipeModule,
    NgReversePipeModule,
    NgShufflePipeModule,
    NgSomePipeModule,
    NgTailPipeModule,
    NgTakeUntilPipeModule,
    NgTakeWhilePipeModule,
    NgTakePipeModule,
    NgUnionPipeModule,
    NgUniqPipeModule,
    NgWherePipeModule,
    NgWithoutPipeModule,
  ],
})
export class NgArrayPipesModule {}
