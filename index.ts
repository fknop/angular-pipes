import { NgModule } from '@angular/core';

import { Ng2AggregatePipesModule } from './src/aggregate';
import { Ng2ArrayPipesModule } from './src/array';
import { Ng2BooleanPipesModule } from './src/boolean';
import { Ng2MathPipesModule } from './src/math';
import { Ng2ObjectPipesModule } from './src/object';
import { Ng2StringPipesModule } from './src/string';


@NgModule({
    exports: [
        Ng2ArrayPipesModule,
        Ng2MathPipesModule,
        Ng2BooleanPipesModule,
        Ng2StringPipesModule,
        Ng2ObjectPipesModule,
        Ng2AggregatePipesModule
    ]
})
export class Ng2PipesModule {}

// Export individual pipes and modules
export * from './src/aggregate';
export * from './src/array';
export * from './src/boolean';
export * from './src/math';
export * from './src/object';
export * from './src/string';
