import { NgModule } from '@angular/core';

import { NgAggregatePipesModule } from './src/aggregate';
import { NgArrayPipesModule } from './src/array';
import { NgBooleanPipesModule } from './src/boolean';
import { NgMathPipesModule } from './src/math';
import { NgObjectPipesModule } from './src/object';
import { NgStringPipesModule } from './src/string';


@NgModule({
    exports: [
        NgArrayPipesModule,
        NgMathPipesModule,
        NgBooleanPipesModule,
        NgStringPipesModule,
        NgObjectPipesModule,
        NgAggregatePipesModule
    ]
})
export class NgPipesModule {}

// Export individual pipes and modules
export * from './src/aggregate';
export * from './src/array';
export * from './src/boolean';
export * from './src/math';
export * from './src/object';
export * from './src/string';
