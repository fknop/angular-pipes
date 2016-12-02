// idea from https://github.com/a8m/angular-filter

import {StringularPipe} from '../../src/index';

describe('StringularPipe', () => {

    let pipe: StringularPipe;

    beforeEach(() => {
        pipe = new StringularPipe();
    });

    it('should return the text as it was if only one argument is passed', function () {
        expect(pipe.transform('The zombie world war began')).toEqual('The zombie world war began');
    });

    it('should replace {n} with arguments passed after the text argument', function () {
        expect(pipe.transform('The {0} world war began', 'zombie')).toEqual('The zombie world war began');
        expect(pipe.transform('The {0} world {1} began', 'zombie', 'war')).toEqual('The zombie world war began');
        expect(pipe.transform('{3} {0} world {1} began', 'zombie', 'war', null, 'The')).toEqual('The zombie world war began');
    });

    it('should keep {n} if no matching argument was found', function () {
        expect(pipe.transform('The {0} world war began')).toEqual('The {0} world war began');
        expect(pipe.transform('The {0} world {1} began', 'zombie')).toEqual('The zombie world {1} began');
    });

});