import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
  name: 'abs',
})
export class AbsPipe implements PipeTransform {
  transform(input: any): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return Math.abs(input);
  }
}

@NgModule({
  declarations: [AbsPipe],
  exports: [AbsPipe],
})
export class NgAbsPipeModule {}
