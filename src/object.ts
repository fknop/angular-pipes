import { NgModule } from '@angular/core';
import { KeysPipe } from './object/keys.pipe';
import { ToArrayPipe } from './object/to-array.pipe';

export * from './object/keys.pipe';
export * from './object/to-array.pipe';

@NgModule({
    exports: [
        KeysPipe,
        ToArrayPipe
    ]
})
export class Ng2ObjectPipesModule {}
