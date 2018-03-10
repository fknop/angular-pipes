import { NgModule } from '@angular/core';
import { KeysPipe } from './keys.pipe';
import { ToArrayPipe } from './to-array.pipe';
import { DefaultsPipe } from './defaults.pipe';


@NgModule({
  declarations: [
    KeysPipe,
    ToArrayPipe,
    DefaultsPipe
  ],
  exports: [
    KeysPipe,
    ToArrayPipe,
    DefaultsPipe
  ]
})
export class NgObjectPipesModule {}
