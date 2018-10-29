import { MakeSingularStringPipe } from "./singularize-string";
describe("MakeSingularStringPipe Tests", () => {
    let pipe: MakeSingularStringPipe;
    beforeEach(() => {
        pipe = new MakeSingularStringPipe();
    });
    describe("Misc. Inputs", () => {
        it('should return "" if passed null', () => {
            expect(pipe.transform(null)).toEqual("" as string);
        });
        it('should return "" if passed undefined', () => {
            expect(pipe.transform(undefined)).toEqual("" as string);
        });
        it('should return "" if passed ""', () => {
            expect(pipe.transform("")).toEqual("" as string);
        });
    });
    describe("Naive Transformations of One Word", () => {
        it("should return a singular when naively-transforming a plural entity", () => {
            expect(pipe.transform("Flippy-Floops")).toEqual("Flippy-Floop" as string);
        });
        it('should return a singular when naively-transforming a plural entity that ends in "ies"', () => {
            expect(pipe.transform("Flippy-Flappies")).toEqual("Flippy-Flappy" as string);
        });
        it('should return a singular when naively-transforming a plural entity that ends in "es"', () => {
            expect(pipe.transform("Lenses")).toEqual("Lens" as string);
        });
        it("should return a singular entity when naively-transforming an explicitly-singular entity", () => {
            expect(pipe.transform("Flippy-Flappies", 1)).toEqual("Flippy-Flappy" as string);
        });
    });
    describe("Naive Transformations of Two-Word Entities", () => {
        it("should return a plural when naively-transforming a two-word plural entity", () => {
            expect(pipe.transform("Flippy Floops")).toEqual("Flippy Floop" as string);
        });
        it('should return a plural when naively-transforming a two-word plural entity that ends in "es"', () => {
            expect(pipe.transform("Lost Templates")).toEqual("Lost Template" as string);
        });
        it('should return a plural when naively-transforming a two-word plural entity that ends in "ies"', () => {
            expect(pipe.transform("Flippy Flappies")).toEqual("Flippy Flappy" as string);
        });
        it("should return a singular entity when naively-transforming a two-word entity to be explicitly-singular", () => {
            expect(pipe.transform("Lost Templates", 1)).toEqual("Lost Template" as string);
        });
    });
    describe('Using English-language rules for words ending in "y"', () => {
        it('should return "day" if passed "days"', () => {
            expect(pipe.transform("days")).toEqual("day" as string);
        });
        it('should return "day" if passed "days" and 1', () => {
            expect(pipe.transform("days", 1)).toEqual("day" as string);
        });
        it('should return "days" if passed "days" and 99', () => {
            expect(pipe.transform("days", 99)).toEqual("days" as string);
        });
        it('should return "Days" if passed "Days" and 99', () => {
            expect(pipe.transform("Days", 99)).toEqual("Days" as string);
        });
        it('should return "monastery" if passed "monasteries"', () => {
            expect(pipe.transform("monasteries")).toEqual("monastery" as string);
        });
        it('should return "monastery" if passed "monasteries" and 1', () => {
            expect(pipe.transform("monasteries", 1)).toEqual("monastery" as string);
        });
        it('should return "monasteries" if passed "monasteries" and 99', () => {
            expect(pipe.transform("monasteries", 99)).toEqual("monasteries" as string);
        });
        it('should return "spy" if passed "spies"', () => {
            expect(pipe.transform("spies")).toEqual("spy" as string);
        });
        it('should return "spy" if passed "spies" and 1', () => {
            expect(pipe.transform("spies", 1)).toEqual("spy" as string);
        });
        it('should return "spies" if passed "spies" and 99', () => {
            expect(pipe.transform("spies", 99)).toEqual("spies" as string);
        });
    });
    describe("Using Known Irregular Words", () => {
        it('should return "Octopus" if passed "Octopodes"', () => {
            expect(pipe.transform("Octopodes")).toEqual("Octopus");
        });
        it('should return "octopus" if passed "octopodes"', () => {
            expect(pipe.transform("octopodes")).toEqual("octopus");
        });
        it('should return "Octopus" if passed "Octopodes" and 1', () => {
            expect(pipe.transform("Octopodes", 1)).toEqual("Octopus");
        });
        it('should return "octopus" if passed "octopodes" and 1', () => {
            expect(pipe.transform("octopodes", 1)).toEqual("octopus");
        });
        it('should return "One Octopus" if passed "One Octopodes" and 1', () => {
            expect(pipe.transform("One Octopodes", 1)).toEqual("One Octopus");
        });
        it('should return "Four Octopodes" if passed "Four Octopodes" and 4', () => {
            expect(pipe.transform("Four Octopodes", 4)).toEqual("Four Octopodes");
        });
        it('should return "Octopus" if passed "Octopuses" by someone not in the know', () => {
            expect(pipe.transform("Octopuses")).toEqual("Octopus");
        });
    });
});