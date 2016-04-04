/// <reference path="node_modules/angular2/typings/browser.d.ts" />

import { NG2_BOOLEAN_PIPES } from './boolean';
import { NG2_MATH_PIPES } from './math';
import { NG2_ARRAY_PIPES } from './array';
import { NG2_STRING_PIPES } from './string';

export * from './boolean';
export * from './math';
export * from './array';
export * from './string';

export const NG2_PIPES = [
    ...NG2_BOOLEAN_PIPES,
    ...NG2_MATH_PIPES,
    ...NG2_ARRAY_PIPES,
    ...NG2_STRING_PIPES  
];