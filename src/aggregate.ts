import { NgModule } from '@angular/core';

import { MaxPipe } from './math/max.pipe';
import { MeanPipe } from './math/mean.pipe';
import { MinPipe } from './math/min.pipe';
import { SumPipe } from './math/sum.pipe';

export * from './math/max.pipe';
export * from './math/mean.pipe';
export * from './math/min.pipe';
export * from './math/sum.pipe';

@NgModule({
    declarations: [
        MaxPipe,
        MeanPipe,
        MinPipe,
        SumPipe
    ],
    exports: [
        MaxPipe,
        MeanPipe,
        MinPipe,
        SumPipe
    ]
})
export class Ng2AggregatePipesModule {}