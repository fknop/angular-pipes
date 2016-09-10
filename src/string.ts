import { NgModule } from '@angular/core';

import { LeftPadPipe } from './string/left-pad.pipe';
import { MatchPipe } from './string/match.pipe';
import { PadPipe } from './string/pad.pipe';
import { ReplacePipe } from './string/replace.pipe';
import { RightPadPipe } from './string/right-pad.pipe';
import { SplitPipe } from './string/split.pipe';
import { TestPipe } from './string/test.pipe';
import { TrimPipe } from './string/trim.pipe';
import { NewlinesPipe } from './string/newlines.pipe';
import { CapitalizePipe } from './string/capitalize.pipe';
import { UpperFirstPipe } from './string/upperfirst.pipe';
import { TemplatePipe } from './string/template.pipe';
import { EncodeURIPipe } from './string/encode-uri.pipe';
import { EncodeURIComponentPipe } from './string/encode-uri-component.pipe';
import { TruncatePipe } from './string/truncate.pipe';
import { RepeatPipe } from './string/repeat.pipe';

export * from './string/left-pad.pipe';
export * from './string/match.pipe';
export * from './string/pad.pipe';
export * from './string/replace.pipe';
export * from './string/right-pad.pipe';
export * from './string/split.pipe';
export * from './string/test.pipe';
export * from './string/trim.pipe';
export * from './string/newlines.pipe';
export * from './string/capitalize.pipe';
export * from './string/upperfirst.pipe';
export * from './string/template.pipe';
export * from './string/encode-uri.pipe';
export * from './string/encode-uri-component.pipe';
export * from './string/truncate.pipe';
export * from './string/repeat.pipe';

@NgModule({
    declarations: [
        LeftPadPipe,
        MatchPipe,
        PadPipe,
        ReplacePipe,
        RightPadPipe,
        SplitPipe,
        TestPipe,
        TrimPipe,
        NewlinesPipe,
        CapitalizePipe,
        UpperFirstPipe,
        TemplatePipe,
        EncodeURIPipe,
        EncodeURIComponentPipe,
        TruncatePipe,
        RepeatPipe
    ],
    exports: [
        LeftPadPipe,
        MatchPipe,
        PadPipe,
        ReplacePipe,
        RightPadPipe,
        SplitPipe,
        TestPipe,
        TrimPipe,
        NewlinesPipe,
        CapitalizePipe,
        UpperFirstPipe,
        TemplatePipe,
        EncodeURIPipe,
        EncodeURIComponentPipe,
        TruncatePipe,
        RepeatPipe
    ]
})
export class Ng2StringPipesModule {}