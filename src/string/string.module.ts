import { NgModule } from '@angular/core';

import { NgLeftPadPipeModule } from './left-pad.pipe';
import { NgMatchPipeModule } from './match.pipe';
import { NgPadPipeModule } from './pad.pipe';
import { NgReplacePipeModule } from './replace.pipe';
import { NgRightPadPipeModule } from './right-pad.pipe';
import { NgSplitPipeModule } from './split.pipe';
import { NgTestPipeModule } from './test.pipe';
import { NgTrimPipeModule } from './trim.pipe';
import { NgNewlinesPipeModule } from './newlines.pipe';
import { NgCapitalizePipeModule } from './capitalize.pipe';
import { NgUpperFirstPipeModule } from './upperfirst.pipe';
import { NgTemplatePipeModule } from './template.pipe';
import { NgEncodeURIPipeModule } from './encode-uri.pipe';
import { NgEncodeURIComponentPipeModule } from './encode-uri-component.pipe';
import { NgDecodeURIPipeModule } from './decode-uri.pipe';
import { NgDecodeURIComponentPipeModule } from './decode-uri-component.pipe';
import { NgTruncatePipeModule } from './truncate.pipe';
import { NgRepeatPipeModule } from './repeat.pipe';
import { NgSlugifyPipeModule } from './slugify.pipe';
import { NgStripTagsPipeModule } from './strip-tags.pipe';
import { NgLatinizePipeModule } from './latinize.pipe';
import { NgWrapPipeModule } from './wrap.pipe';
import { NgWithPipeModule } from './with.pipe';
import { NgReverseStrPipeModule } from './reverse-str.pipe';

@NgModule({
  imports: [
    NgCapitalizePipeModule,
    NgDecodeURIComponentPipeModule,
    NgDecodeURIPipeModule,
    NgEncodeURIComponentPipeModule,
    NgLeftPadPipeModule,
    NgMatchPipeModule,
    NgPadPipeModule,
    NgReplacePipeModule,
    NgRightPadPipeModule,
    NgSplitPipeModule,
    NgTestPipeModule,
    NgTrimPipeModule,
    NgNewlinesPipeModule,
    NgUpperFirstPipeModule,
    NgTemplatePipeModule,
    NgEncodeURIPipeModule,
    NgTruncatePipeModule,
    NgRepeatPipeModule,
    NgSlugifyPipeModule,
    NgStripTagsPipeModule,
    NgLatinizePipeModule,
    NgWrapPipeModule,
    NgWithPipeModule,
    NgReverseStrPipeModule,
  ],
})
export class NgStringPipesModule {}
