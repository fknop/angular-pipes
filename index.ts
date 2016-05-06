/// <reference path="node_modules/@angular/core/index.d.ts" />

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

export const NG2_PIPES = [
    ...NG2_BOOLEAN_PIPES,
    ...NG2_MATH_PIPES,
    ...NG2_ARRAY_PIPES,
    ...NG2_STRING_PIPES,
    ...NG2_OBJECT_PIPES,
    ...NG2_AGGREGATE_PIPES
];