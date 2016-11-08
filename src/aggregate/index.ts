import { NgModule } from '@angular/core';

import { MaxPipe } from './max.pipe';
import { MeanPipe } from './mean.pipe';
import { MinPipe } from './min.pipe';
import { SumPipe } from './sum.pipe';

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
export class NgAggregatePipesModule {}


export * from './max.pipe';
export * from './mean.pipe';
export * from './min.pipe';
export * from './sum.pipe';