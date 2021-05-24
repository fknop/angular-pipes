import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { pad, isString } from '../utils/utils';

@Pipe({
  name: 'pad',
})
export class PadPipe implements PipeTransform {
  transform(input: any, length = 0, character = ' '): any {
    if (!isString(input)) {
      return input;
    }

    return pad(input, length, character);
  }
}

@NgModule({
  declarations: [PadPipe],
  exports: [PadPipe],
})
export class NgPadPipeModule {}
