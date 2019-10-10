import { NgModule } from '@angular/core';

import { NgAggregatePipesModule } from './aggregate/aggregate.module';
import { NgArrayPipesModule } from './array/array.module';
import { NgBooleanPipesModule } from './boolean/boolean.module';
import { NgMathPipesModule } from './math/math.module';
import { NgObjectPipesModule } from './object/object.module';
import { NgStringPipesModule } from './string/string.module';

@NgModule({
  exports: [
    NgArrayPipesModule,
    NgMathPipesModule,
    NgBooleanPipesModule,
    NgStringPipesModule,
    NgObjectPipesModule,
    NgAggregatePipesModule,
  ],
})
export class NgPipesModule {}
