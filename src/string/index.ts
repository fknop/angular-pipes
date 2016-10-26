import { NgModule } from '@angular/core';

import { LeftPadPipe } from './left-pad.pipe';
import { MatchPipe } from './match.pipe';
import { PadPipe } from './pad.pipe';
import { ReplacePipe } from './replace.pipe';
import { RightPadPipe } from './right-pad.pipe';
import { SplitPipe } from './split.pipe';
import { TestPipe } from './test.pipe';
import { TrimPipe } from './trim.pipe';
import { NewlinesPipe } from './newlines.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { UpperFirstPipe } from './upperfirst.pipe';
import { TemplatePipe } from './template.pipe';
import { EncodeURIPipe } from './encode-uri.pipe';
import { EncodeURIComponentPipe } from './encode-uri-component.pipe';
import { TruncatePipe } from './truncate.pipe';
import { RepeatPipe } from './repeat.pipe';

export * from './left-pad.pipe';
export * from './match.pipe';
export * from './pad.pipe';
export * from './replace.pipe';
export * from './right-pad.pipe';
export * from './split.pipe';
export * from './test.pipe';
export * from './trim.pipe';
export * from './newlines.pipe';
export * from './capitalize.pipe';
export * from './upperfirst.pipe';
export * from './template.pipe';
export * from './encode-uri.pipe';
export * from './encode-uri-component.pipe';
export * from './truncate.pipe';
export * from './repeat.pipe';

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
export class NgStringPipesModule {}
