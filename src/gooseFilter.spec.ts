import {gooseFilter} from "./gooseFilter";

describe("filterOutGeese : Basic tests", () => {

    describe("Mixed list", () => {
        const givenBirds: Array<string> = ["Mallard", "Hook Bill", "African", "Crested", "Blue Swedish"];
        const expectedBirds: Array<string> = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"];

        it(`should return '${expectedBirds}' when search in '${givenBirds}`, () => {
            let sut = gooseFilter(givenBirds);
            expect(sut).toStrictEqual(expectedBirds);
        });

        const givenBirds2: Array<string> = ['Roman Tufted', 'Crested'];
        const expectedBirds2: Array<string> = ['Crested'];

        it(`should return '${expectedBirds2}' when search in '${givenBirds2}`, () => {
            let sut = gooseFilter(givenBirds2);
            expect(sut).toStrictEqual(expectedBirds2);
        });

    });

    describe("No geese", () => {
        const givenBirds: Array<string> = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"];
        const expectedBirds: Array<string> = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"];

        it(`should return '${expectedBirds}' when search in '${givenBirds}`, () => {
            let sut = gooseFilter(givenBirds);
            expect(sut).toStrictEqual(expectedBirds);
        });
    });

    describe("All geese", () => {
        const givenBirds: Array<string> = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
        const expectedBirds: Array<string> = [];

        it(`should return '${expectedBirds}' when search in '${givenBirds}`, () => {
            let sut = gooseFilter(givenBirds);
            expect(sut).toStrictEqual(expectedBirds);
        });
    });

});
