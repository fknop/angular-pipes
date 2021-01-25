import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { leftPad, isString } from '../utils/utils';

@Pipe({
  name: 'leftpad',
})
export class LeftPadPipe implements PipeTransform {
  transform(input: any, length = 0, character = ' '): any {
    if (!isString(input)) {
      return input;
    }

    return leftPad(input, length, character);
  }
}

@NgModule({
  declarations: [LeftPadPipe],
  exports: [LeftPadPipe],
})
export class NgLeftPadPipeModule {}
