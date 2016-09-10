import { NgModule } from '@angular/core';

import { BytesPipe } from './math/bytes.pipe';
import { CeilPipe } from './math/ceil.pipe';
import { FloorPipe } from './math/floor.pipe';
import { RoundPipe } from './math/round.pipe';
import { DegreesPipe } from './math/degrees.pipe';
import { RadiansPipe } from './math/radians.pipe';
import { RandomPipe } from './math/random.pipe';
import { SqrtPipe } from './math/sqrt.pipe';
import { PowPipe } from './math/pow.pipe';

export * from './math/bytes.pipe';
export * from './math/ceil.pipe';
export * from './math/floor.pipe';
export * from './math/round.pipe';
export * from './math/degrees.pipe';
export * from './math/radians.pipe';
export * from './math/random.pipe';
export * from './math/sqrt.pipe';
export * from './math/pow.pipe';

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
        PowPipe
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
        PowPipe
    ]
})
export class Ng2MathPipesModule {}