import { NgModule } from '@angular/core';

import { 
    IsGreaterPipe,
    IsGreaterOrEqualPipe,
    IsLessPipe,
    IsLessOrEqualPipe,
    IsEqualPipe,
    IsNotEqualPipe,
    IsIdenticalPipe,
    IsNotIdenticalPipe,
} from './conditions.pipe';

import {
    IsNullPipe,
    IsUndefinedPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsStringPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsDefinedPipe
} from './types.pipe';

@NgModule({
    declarations: [
        IsGreaterPipe,
        IsGreaterOrEqualPipe,
        IsLessPipe,
        IsLessOrEqualPipe,
        IsEqualPipe,
        IsNotEqualPipe,
        IsIdenticalPipe,
        IsNotIdenticalPipe,
        IsNullPipe,
        IsUndefinedPipe,
        IsFunctionPipe,
        IsNumberPipe,
        IsStringPipe,
        IsArrayPipe,
        IsObjectPipe,
        IsDefinedPipe 
    ],
    exports: [
        IsGreaterPipe,
        IsGreaterOrEqualPipe,
        IsLessPipe,
        IsLessOrEqualPipe,
        IsEqualPipe,
        IsNotEqualPipe,
        IsIdenticalPipe,
        IsNotIdenticalPipe,
        IsNullPipe,
        IsUndefinedPipe,
        IsFunctionPipe,
        IsNumberPipe,
        IsStringPipe,
        IsArrayPipe,
        IsObjectPipe,
        IsDefinedPipe
    ]
})
export class Ng2BooleanPipesModule {}

export * from './conditions.pipe';
export * from './types.pipe';

