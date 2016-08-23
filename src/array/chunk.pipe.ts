import { Pipe, PipeTransform  } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(input: any, size?: number): any {

    if (!isArray(input)) {
      return input;
    }

    let chunkSize = size || 1;

    return [].concat.apply([], input.map((elem: any, i: number) => {
        return i % chunkSize ? [] : [input.slice(i, i + chunkSize)];
      })
    );
  }
}
