import {gooseFilter, removeOneElement} from "./gooseFilter";

describe("filterOutGeese : Basic tests", () => {

    describe("Mixed list", () => {
        const givenBirds1:Array<string> = ["Mallard", "Hook Bill", "African", "Crested", "Blue Swedish"];
        const expectedBirds:Array<string> = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"];

        it(`should return '${expectedBirds}' when search in '${givenBirds1}`, () => {
            let sut = gooseFilter(givenBirds1);
            expect(sut).toStrictEqual(expectedBirds);
        });
    });

    describe("No geese", () => {
// ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
    });

    describe("All geese", () => {
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"], []
    });

});
