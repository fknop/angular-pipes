import { NgModule } from '@angular/core';

import { NgGroupByPipeModule } from './group-by.pipe';
import { NgMaxPipeModule } from './max.pipe';
import { NgMeanPipeModule } from './mean.pipe';
import { NgMinPipeModule } from './min.pipe';
import { NgSumPipeModule } from './sum.pipe';

@NgModule({
  imports: [NgGroupByPipeModule, NgMaxPipeModule, NgMeanPipeModule, NgMinPipeModule, NgSumPipeModule],
})
export class NgAggregatePipesModule {}
