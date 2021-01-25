import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(input: any, character = ''): any {
    if (!isArray(input)) {
      return input;
    }

    return input.join(character);
  }
}

@NgModule({
  declarations: [JoinPipe],
  exports: [JoinPipe],
})
export class NgJoinPipeModule {}
