import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'identical',
})
export class IsIdenticalPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first === second;
  }
}

@NgModule({
  declarations: [IsIdenticalPipe],
  exports: [IsIdenticalPipe],
})
export class NgIsIdenticalPipeModule {}
