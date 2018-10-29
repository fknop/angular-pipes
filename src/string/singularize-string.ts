import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "make-singular-string",
})
/**
 * Takes a plural entity string and singularizes (sorry) it.
 * Uses both naive and holdout-list approaches.
 * If several words appear in the string, only the last word is made singular -- this
 * means that if "your stories" was passed in, "your story" would be passed out.
 * @constructor
 * @param {string} pluralEntity - Entity to singularize. Pass as a plural ('stories' or 'houses').
 *          NOTE: The last word is examined. So you can pass in e.g. 'my stories'.
 * @param {number} [quantity=0] quantity - How many of the entity are there ultimately? If left blank, this will
 *          singularize the string (e.g. 'stories' -> 'story', 'houses' -> 'house'). If given a value,
 *          this will singularize appropriately (e.g. ('stories', 1) -> 'story', ('stories', 2) -> 'stories').
 */
export class MakeSingularStringPipe implements PipeTransform {
    private irregularMap: any = {
        addenda: "addendum",
        algae: "alga",
        alumnae: "alumna",
        alumni: "alumnus",
        analyses: "analysis",
        antennae: "antenna",
        appendices: "appendix",
        aquaria: "aquarium",
        arches: "arch",
        axes: "axe",
        bacilli: "bacillus",
        bacteria: "bacterium",
        bases: "basis",
        batches: "batch",
        beaches: "beach",
        beaux: "beau",
        bison: "bison",
        brushes: "brush",
        buffaloes: "buffalo",
        bureaus: "bureau",
        busses: "bus",
        cacti: "cactus",
        calves: "calf",
        chateaux: "chateau",
        cherries: "cherry",
        children: "child",
        churches: "church",
        circuses: "circus",
        cod: "cod",
        corps: "corps",
        corpora: "corpus",
        crises: "crisis",
        criteria: "criterion",
        curricula: "curriculum",
        data: "datum",
        deer: "deer",
        diagnoses: "diagnosis",
        dice: "die",
        dominoes: "domino",
        dwarves: "dwarf",
        echoes: "echo",
        elves: "elf",
        ellipses: "ellipsis",
        embargoes: "embargo",
        emphases: "emphasis",
        errata: "erratum",
        faxes: "fax",
        firemen: "fireman",
        fish: "fish",
        flushes: "flush",
        foci: "focus",
        feet: "foot",
        formulas: "formula",
        fungi: "fungus",
        genera: "genus",
        geese: "goose",
        grafiti: "grafito",
        halves: "half",
        heroes: "hero",
        hoaxes: "hoax",
        hooves: "hoof",
        hypotheses: "hypothesis",
        indices: "index",
        kisses: "kiss",
        knives: "knife",
        leaves: "leaf",
        lenses: "lens",
        lives: "life",
        loaves: "loaf",
        lice: "louse",
        men: "man",
        mangoes: "mango",
        matrices: "matrix",
        means: "means",
        media: "medium",
        memoranda: "memorandum",
        milennia: "millennium",
        moose: "moose",
        mosquitoes: "mosquito",
        mottoes: "motto",
        mice: "mouse",
        nebulae: "nebula",
        neuroses: "neurosis",
        nuclei: "nucleus",
        oases: "oasis",
        octopodes: "octopus",
        octopuses: "octopus",
        ova: "ovum",
        oxen: "ox",
        paralyses: "paralysis",
        parentheses: "parenthesis",
        people: "person",
        phenomena: "phenomenon",
        plateaux: "plateau",
        potatoes: "potato",
        quizzes: "quiz",
        radii: "radius",
        reflexes: "reflex",
        "runners-up": "runner-up",
        scampi: "scampo",
        scarves: "scarf",
        scissors: "scissors",
        scratches: "scratch",
        selves: "self",
        series: "series",
        sheaves: "sheaf",
        sheep: "sheep",
        shelves: "shelf",
        "sons-in-law": "son-in-law",
        species: "species",
        splashes: "splash",
        stimuli: "stimulus",
        stitches: "stitch",
        strata: "stratum",
        syllabi: "syllabus",
        symposia: "symposium",
        synopses: "synopsis",
        syntheses: "synthesis",
        tableaux: "tableau",
        taxes: "tax",
        templates: "template",
        those: "that",
        theses: "thesis",
        thieves: "thief",
        these: "this",
        tomatoes: "tomato",
        teeth: "tooth",
        tornadoes: "tornado",
        torpedoes: "torpedo",
        vertebrae: "vertebra",
        vetoes: "veto",
        vitae: "vita",
        volcanoes: "volcano",
        waltzes: "waltz",
        washes: "wash",
        watches: "watch",
        wharves: "wharf",
        wives: "wife",
        wolves: "wolf",
        women: "woman",
        zeroes: "zero",
    };
    transform(pluralEntity: string, quantity: number = 1): string {
        if (!pluralEntity || pluralEntity === "") {
            return "";
        }
        if (quantity !== 1) {
            return pluralEntity;
        } else {
            const lastWord = pluralEntity.trim().split(" ")[pluralEntity.trim().split(" ").length - 1];
            if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                    return pluralEntity.replace(
                        lastWord,
                        this.irregularMap[lastWord.toLocaleLowerCase()].replace(
                            this.irregularMap[lastWord.toLocaleLowerCase()][0],
                            this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()
                        )
                    );
                }
                return pluralEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
            } else if (lastWord.substring(lastWord.length -('ies'.length)) === "ies") {
                // Naive approach:
                // consonant+y = word - 'y' +'ies'
                // vowel+y = word + 's'
                return pluralEntity.replace(lastWord, lastWord.slice(0, -('ies'.length))+'y');
            } else {
                // Chop off the ending 's'
                return pluralEntity.replace(lastWord, lastWord.slice(0, -'s'.length));
            }
        }
    }
}