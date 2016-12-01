import { SlugfyPipe } from '../../src/index';

describe('SlugfyPipe', () => {
    
    let pipe: SlugfyPipe;
    
    beforeEach(() => {
       pipe = new SlugfyPipe();
    });
    
    it ('Must return string grouped by hyphen and lowercase', () => {
       expect(pipe.transform('Hello World it Work')).toEqual('hello-world-it-work');
    });
   
});