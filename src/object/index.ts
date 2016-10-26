import { NgModule } from '@angular/core';
import { KeysPipe } from './keys.pipe';
import { ToArrayPipe } from './to-array.pipe';

export * from './keys.pipe';
export * from './to-array.pipe';

@NgModule({
    declarations: [
        KeysPipe,
        ToArrayPipe
    ],
    exports: [
        KeysPipe,
        ToArrayPipe
    ]
})
export class NgObjectPipesModule {}
