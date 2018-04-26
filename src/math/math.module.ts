import { NgModule } from '@angular/core';

import { BytesPipe } from './bytes.pipe';
import { CeilPipe } from './ceil.pipe';
import { FloorPipe } from './floor.pipe';
import { RoundPipe } from './round.pipe';
import { DegreesPipe } from './degrees.pipe';
import { RadiansPipe } from './radians.pipe';
import { RandomPipe } from './random.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { PowPipe } from './pow.pipe';
import { AbsPipe } from './abs.pipe';

@NgModule({
  declarations: [
    BytesPipe,
    CeilPipe,
    FloorPipe,
    RoundPipe,
    DegreesPipe,
    RadiansPipe,
    RandomPipe,
    SqrtPipe,
    PowPipe,
	AbsPipe
  ],
  exports: [
    BytesPipe,
    CeilPipe,
    FloorPipe,
    RoundPipe,
    DegreesPipe,
    RadiansPipe,
    RandomPipe,
    SqrtPipe,
    PowPipe,
	AbsPipe
  ]
})
export class NgMathPipesModule {}
