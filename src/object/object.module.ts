import { NgModule } from '@angular/core';

import { NgKeysPipeModule } from './keys.pipe';
import { NgToArrayPipeModule } from './to-array.pipe';
import { NgDefaultsPipeModule } from './defaults.pipe';

@NgModule({
  imports: [NgKeysPipeModule, NgToArrayPipeModule, NgDefaultsPipeModule],
})
export class NgObjectPipesModule {}
