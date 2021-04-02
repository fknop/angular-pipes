import { NgModule } from '@angular/core';

import { NgKeysPipeModule } from './keys.pipe';
import { NgToArrayPipeModule } from './to-array.pipe';
import { NgDefaultsPipeModule } from './defaults.pipe';
import { NgToKeyValuePairsPipeModule } from './to-key-value-pairs';

@NgModule({
  imports: [NgKeysPipeModule, NgToArrayPipeModule, NgDefaultsPipeModule, NgToKeyValuePairsPipeModule],
})
export class NgObjectPipesModule {
}
