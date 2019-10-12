import { NgModule } from '@angular/core';

import { NgIsEqualPipeModule } from './is-equal.pipe';
import { NgIsGreaterOrEqualPipeModule } from './is-greater-or-equal.pipe';
import { NgIsGreaterPipeModule } from './is-greater.pipe';
import { NgIsIdenticalPipeModule } from './is-identical.pipe';
import { NgIsLessOrEqualPipeModule } from './is-less-or-equal.pipe';
import { NgIsLessPipeModule } from './is-less.pipe';
import { NgIsNotEqualPipeModule } from './is-not-equal.pipe';
import { NgIsNotIdenticalPipeModule } from './is-not-identical.pipe';
import { NgIsNullPipeModule } from './is-null.pipe';
import { NgIsUndefinedPipeModule } from './is-undefined.pipe';
import { NgIsNilPipeModule } from './is-nil.pipe';
import { NgIsFunctionPipeModule } from './is-function.pipe';
import { NgIsNumberPipeModule } from './is-number.pipe';
import { NgIsStringPipeModule } from './is-string.pipe';
import { NgIsArrayPipeModule } from './is-array.pipe';
import { NgIsObjectPipeModule } from './is-object.pipe';
import { NgIsDefinedPipeModule } from './is-defined.pipe';

@NgModule({
  imports: [
    NgIsNullPipeModule,
    NgIsUndefinedPipeModule,
    NgIsNilPipeModule,
    NgIsFunctionPipeModule,
    NgIsNumberPipeModule,
    NgIsStringPipeModule,
    NgIsArrayPipeModule,
    NgIsObjectPipeModule,
    NgIsDefinedPipeModule,
  ],
})
export class NgTypesPipesModule {}

@NgModule({
  imports: [
    NgIsEqualPipeModule,
    NgIsGreaterOrEqualPipeModule,
    NgIsGreaterPipeModule,
    NgIsIdenticalPipeModule,
    NgIsLessOrEqualPipeModule,
    NgIsLessPipeModule,
    NgIsNotEqualPipeModule,
    NgIsNotIdenticalPipeModule,
  ],
})
export class NgConditionsPipesModule {}

@NgModule({
  imports: [NgConditionsPipesModule, NgTypesPipesModule],
})
export class NgBooleanPipesModule {}
