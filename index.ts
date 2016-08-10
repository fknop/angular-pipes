import { NgModule } from '@angular/core';


import { NG2_BOOLEAN_PIPES } from './src/boolean';
import { NG2_MATH_PIPES } from './src/math';
import { NG2_ARRAY_PIPES } from './src/array';
import { NG2_STRING_PIPES } from './src/string';
import { NG2_OBJECT_PIPES } from './src/object';
import { NG2_AGGREGATE_PIPES } from './src/aggregate';

export * from './src/boolean';
export * from './src/math';
export * from './src/array';
export * from './src/string';
export * from './src/object';
export * from './src/aggregate';


@NgModule({
    exports: [NG2_ARRAY_PIPES]
})
export class Ng2ArrayPipesModule {}

@NgModule({
    exports: [NG2_MATH_PIPES]
})
export class Ng2MathPipesModule {}

@NgModule({
    exports: [NG2_BOOLEAN_PIPES]
})
export class Ng2BooleanPipesModule {}

@NgModule({
    exports: [NG2_STRING_PIPES]
})
export class Ng2StringPipesModule {}

@NgModule({
    exports: [NG2_OBJECT_PIPES]
})
export class Ng2ObjectPipesModule {}

@NgModule({
    exports: [NG2_AGGREGATE_PIPES]
})
export class Ng2AggregatePipesModule {}

@NgModule({
    exports: [
        NG2_ARRAY_PIPES,
        NG2_MATH_PIPES,
        NG2_BOOLEAN_PIPES,
        NG2_STRING_PIPES,
        NG2_OBJECT_PIPES,
        NG2_AGGREGATE_PIPES
    ]
})
export class Ng2PipesModule {}


/**
 * @deprecated will be removed for RC.6
 */
export const NG2_PIPES = [
    ...NG2_BOOLEAN_PIPES,
    ...NG2_MATH_PIPES,
    ...NG2_ARRAY_PIPES,
    ...NG2_STRING_PIPES,
    ...NG2_OBJECT_PIPES,
    ...NG2_AGGREGATE_PIPES
];