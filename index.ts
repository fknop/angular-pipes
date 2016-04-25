/// <reference path="node_modules/angular2/typings/browser.d.ts" />

import { NG2_BOOLEAN_PIPES } from './boolean';
import { NG2_MATH_PIPES } from './math';
import { NG2_ARRAY_PIPES } from './array';
import { NG2_STRING_PIPES } from './string';
import { NG2_OBJECT_PIPES } from './object';
import { NG2_AGGREGATE_PIPES } from './aggregate';

export * from './boolean';
export * from './math';
export * from './array';
export * from './string';
export * from './object';
export * from './aggregate';

export const NG2_PIPES = [
    ...NG2_BOOLEAN_PIPES,
    ...NG2_MATH_PIPES,
    ...NG2_ARRAY_PIPES,
    ...NG2_STRING_PIPES,
    ...NG2_OBJECT_PIPES,
    ...NG2_AGGREGATE_PIPES
];