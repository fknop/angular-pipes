import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
  name: 'repeat',
})
export class RepeatPipe implements PipeTransform {
  transform(input: any, times = 1, characters = ''): any {
    let _times = times;
    if (!isString(input)) {
      return input;
    }

    if (_times <= 0) {
      _times = 1;
    }

    const repeated = [input];
    for (let i = 1; i < _times; ++i) {
      repeated.push(input);
    }

    return repeated.join(characters);
  }
}

@NgModule({
  declarations: [RepeatPipe],
  exports: [RepeatPipe],
})
export class NgRepeatPipeModule {}
