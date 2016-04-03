import { NG2_CONDITIONS_PIPES } from './src/boolean/conditions.pipe';
import { NG2_TYPES_PIPES } from './src/boolean/types.pipe';

export * from './src/boolean/conditions.pipe';
export * from './src/boolean/types.pipe';

export const NG2_BOOLEAN_PIPES = [
    ...NG2_CONDITIONS_PIPES,
    ...NG2_TYPES_PIPES
];