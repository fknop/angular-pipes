import {NgModule} from '@angular/core';

import {LeftPadPipe} from './left-pad.pipe';
import {MatchPipe} from './match.pipe';
import {PadPipe} from './pad.pipe';
import {ReplacePipe} from './replace.pipe';
import {RightPadPipe} from './right-pad.pipe';
import {SplitPipe} from './split.pipe';
import {TestPipe} from './test.pipe';
import {TrimPipe} from './trim.pipe';
import {NewlinesPipe} from './newlines.pipe';
import {CapitalizePipe} from './capitalize.pipe';
import {UpperFirstPipe} from './upperfirst.pipe';
import {TemplatePipe} from './template.pipe';
import {EncodeURIPipe} from './encode-uri.pipe';
import {EncodeURIComponentPipe} from './encode-uri-component.pipe';
import {DecodeURIPipe} from './decode-uri.pipe';
import {DecodeURIComponentPipe} from './decode-uri-component.pipe';
import {TruncatePipe} from './truncate.pipe';
import {RepeatPipe} from './repeat.pipe';
import {SlugifyPipe} from './slugify.pipe';
import {StripTagsPipe} from "./strip-tags.pipe";
import {LatinizePipe} from "./latinize.pipe";
import {WrapPipe} from "./wrap.pipe";
import {WithPipe} from "./with.pipe";
import {ReverseStrPipe} from "./reverse-str.pipe";
import { Dt2agePipe } from './dt2age.pipe';


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
    DecodeURIPipe,
    DecodeURIComponentPipe,
    TruncatePipe,
    RepeatPipe,
    SlugifyPipe,
    StripTagsPipe,
    LatinizePipe,
    WrapPipe,
    WithPipe,
    ReverseStrPipe,
    Dt2agePipe
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
    DecodeURIPipe,
    DecodeURIComponentPipe,
    TruncatePipe,
    RepeatPipe,
    SlugifyPipe,
    StripTagsPipe,
    LatinizePipe,
    WrapPipe,
    WithPipe,
    ReverseStrPipe,
    Dt2agePipe
  ]
})
export class NgStringPipesModule {
}
