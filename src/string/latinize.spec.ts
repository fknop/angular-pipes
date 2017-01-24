// idea from https://github.com/a8m/angular-filter

import {LatinizePipe} from '../../src/index';

describe('LatinizePipe', () => {

    let pipe: LatinizePipe;

    beforeEach(() => {
        pipe = new LatinizePipe();
    });

    it('Must return string without accents', () => {
        expect(pipe.transform('Thê zômbíê Wõrld wàr bẽgân'))
            .toEqual('The zombie World war began');
    });

});