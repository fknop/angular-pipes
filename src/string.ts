import { LeftPadPipe } from './string/left-pad.pipe';
import { MatchPipe } from './string/match.pipe';
import { PadPipe } from './string/pad.pipe';
import { ReplacePipe } from './string/replace.pipe';
import { RightPadPipe } from './string/right-pad.pipe';
import { SplitPipe } from './string/split.pipe';
import { TestPipe } from './string/test.pipe';
import { TrimPipe } from './string/trim.pipe';

export * from './string/left-pad.pipe';
export * from './string/match.pipe';
export * from './string/pad.pipe';
export * from './string/replace.pipe';
export * from './string/right-pad.pipe';
export * from './string/split.pipe';
export * from './string/test.pipe';
export * from './string/trim.pipe';

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