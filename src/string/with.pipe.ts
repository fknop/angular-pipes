// tslint:disable:cognitive-complexity
import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString, isNull } from '../utils/utils';

@Pipe({ name: 'with' })
export class WithPipe implements PipeTransform {
  transform(input: string, start: string | null = null, ends: string | null = null, csensitive = false): any {
    if (!isString(input) || (isNull(start) && isNull(ends)) || start == '' || ends == '') {
      return input;
    }

    const _input = csensitive ? input : input.toLowerCase();

    if (!isNull(start) && !isNull(ends)) {
      const a: boolean = !_input.indexOf(csensitive ? start : start.toLowerCase());
      const b: boolean = _input.indexOf(csensitive ? ends : ends.toLowerCase(), _input.length - ends.length) !== -1;

      if (a && b) {
        return true;
      }
      return false;
    }

    if (!isNull(start)) {
      return !_input.indexOf(csensitive ? start : start.toLowerCase());
    }

    if (!isNull(ends)) {
      const position: any = _input.length - ends.length;

      return _input.indexOf(csensitive ? ends : ends.toLowerCase(), position) !== -1;
    }
  }
}

@NgModule({
  declarations: [WithPipe],
  exports: [WithPipe],
})
export class NgWithPipeModule {}
