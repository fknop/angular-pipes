import { NgModule } from '@angular/core';

import { NgBytesPipeModule } from './bytes.pipe';
import { NgCeilPipeModule } from './ceil.pipe';
import { NgFloorPipeModule } from './floor.pipe';
import { NgRoundPipeModule } from './round.pipe';
import { NgDegreesPipeModule } from './degrees.pipe';
import { NgRadiansPipeModule } from './radians.pipe';
import { NgRandomPipeModule } from './random.pipe';
import { NgSqrtPipeModule } from './sqrt.pipe';
import { NgPowPipeModule } from './pow.pipe';
import { NgAbsPipeModule } from './abs.pipe';
import { NgOrdinalPipeModule } from './ordinal.pipe';

@NgModule({
  imports: [
    NgAbsPipeModule,
    NgBytesPipeModule,
    NgCeilPipeModule,
    NgDegreesPipeModule,
    NgFloorPipeModule,
    NgOrdinalPipeModule,
    NgPowPipeModule,
    NgRadiansPipeModule,
    NgRandomPipeModule,
    NgRoundPipeModule,
    NgSqrtPipeModule,
  ],
})
export class NgMathPipesModule {}
