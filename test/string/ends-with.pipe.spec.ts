// idea from https://github.com/a8m/angular-filter

import {EndsWithPipe} from '../../src/index';

describe('EndsWithPipe', () => {

    let pipe: EndsWithPipe;

    beforeEach(() => {
        pipe = new EndsWithPipe();
    });

    it('Must return true when ends with .jpg of image.JPG', () => {
        expect(pipe.transform('image.JPG', '.jpg')).toEqual(true);
    });

    it('Must return false when ends with .jpg of image.JPG', () => {
        expect(pipe.transform('image.JPG', '.jpg', true)).toEqual(false);
    });

});