// idea from https://github.com/a8m/angular-filter

import {StripTagsPipe} from '../../src/index';

describe('StripTagsPipe', () => {

    let pipe: StripTagsPipe;

    beforeEach(() => {
        pipe = new StripTagsPipe();
    });

    it('Must return plain text', () => {
        expect(pipe.transform('<p class="paragraph">Lorem Ipsum is simply dummy text of the printing...</p>')).toEqual('Lorem Ipsum is simply dummy text of the printing...');
    });

});