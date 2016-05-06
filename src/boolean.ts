import { NG2_CONDITIONS_PIPES } from './boolean/conditions.pipe';
import { NG2_TYPES_PIPES } from './boolean/types.pipe';

export * from './boolean/conditions.pipe';
export * from './boolean/types.pipe';

export const NG2_BOOLEAN_PIPES = [
    ...NG2_CONDITIONS_PIPES,
    ...NG2_TYPES_PIPES
];