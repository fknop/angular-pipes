import { KeysPipe } from './src/object/keys.pipe';
import { ToArrayPipe } from './src/object/to-array.pipe';

export * from './src/object/keys.pipe';
export * from './src/object/to-array.pipe';


export const NG2_OBJECT_PIPES = [
    KeysPipe,
    ToArrayPipe,
];