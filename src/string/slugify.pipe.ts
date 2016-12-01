import {Pipe, PipeTransform} from '@angular/core';
import {isString} from '../utils/utils';

@Pipe({ name: 'slugify' })
export class SlugifyPipe implements PipeTransform {
    transform(input: string): string {
        if (!isString(input)) {
            return input;
        }

        let slug = input.toLowerCase().trim();
        slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
        slug = slug.replace(/[\s-]+/g, '-');
        return slug;
    }
}
