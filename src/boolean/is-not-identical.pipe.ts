import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'notIdentical',
})
export class IsNotIdenticalPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first !== second;
  }
}

@NgModule({
  declarations: [IsNotIdenticalPipe],
  exports: [IsNotIdenticalPipe],
})
export class NgIsNotIdenticalPipeModule {}
