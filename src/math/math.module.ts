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
import { OrdinalPipe } from './ordinal.pipe';

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
    AbsPipe,
    OrdinalPipe
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
    AbsPipe,
    OrdinalPipe
  ]
})
export class NgMathPipesModule {}
