import { LeftPadPipe } from './src/string/left-pad.pipe';
import { MatchPipe } from './src/string/match.pipe';
import { PadPipe } from './src/string/pad.pipe';
import { ReplacePipe } from './src/string/replace.pipe';
import { RightPadPipe } from './src/string/right-pad.pipe';
import { SplitPipe } from './src/string/split.pipe';
import { TestPipe } from './src/string/test.pipe';
import { TrimPipe } from './src/string/trim.pipe';

export * from './src/string/left-pad.pipe';
export * from './src/string/match.pipe';
export * from './src/string/pad.pipe';
export * from './src/string/replace.pipe';
export * from './src/string/right-pad.pipe';
export * from './src/string/split.pipe';
export * from './src/string/test.pipe';
export * from './src/string/trim.pipe';

export const NG2_STRING_PIPES = [
    LeftPadPipe,
    MatchPipe,
    PadPipe,
    ReplacePipe,
    RightPadPipe,
    SplitPipe,
    TestPipe,
    TrimPipe  
];