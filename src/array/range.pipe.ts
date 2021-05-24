import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(_input: any, size = 0, start = 1, step = 1): any {
    const range: number[] = [];
    for (let length = 0; length < size; ++length) {
      range.push(start);
      start += step;
    }

    return range;
  }
}

@NgModule({
  declarations: [RangePipe],
  exports: [RangePipe],
})
export class NgRangePipeModule {}
