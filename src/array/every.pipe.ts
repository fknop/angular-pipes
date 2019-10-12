import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { every, CollectionPredicate } from '../utils/utils';

@Pipe({
  name: 'every',
})
export class EveryPipe implements PipeTransform {
  transform(input: any, predicate: CollectionPredicate): any {
    return every(input, predicate);
  }
}

@NgModule({
  declarations: [EveryPipe],
  exports: [EveryPipe],
})
export class NgEveryPipeModule {}
