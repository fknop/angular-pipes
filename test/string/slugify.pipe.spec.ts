import { SlugifyPipe } from '../../src/index';

describe('SlugifyPipe', () => {
    
    let pipe: SlugifyPipe;
    
    beforeEach(() => {
       pipe = new SlugifyPipe();
    });
    
    it ('Must return string grouped by hyphen and lowercase', () => {
       expect(pipe.transform('Hello World it Work')).toEqual('hello-world-it-work');
    });
   
});