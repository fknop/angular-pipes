import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(input: any): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    if (this.endsWithTenth(input)) {
      return input + 'th';
    } else {
      const cardinal = input.toString().charAt(input.toString().length - 1);

      switch (cardinal) {
        case '1':
          return input + 'st';
        case '2':
          return input + 'nd';
        case '3':
          return input + 'rd';
        default:
          return input + 'th';
      }
    }
  }

  private endsWithTenth(input: any): boolean {
    const beforeLastDigit = input.toString().charAt(input.toString().length - 2);

    return beforeLastDigit === '1';
  }
}

@NgModule({
  declarations: [OrdinalPipe],
  exports: [OrdinalPipe],
})
export class NgOrdinalPipeModule {}
