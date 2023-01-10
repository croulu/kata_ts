import {gooseFilter} from "./gooseFilter";

describe("filterOutGeese : Basic tests", () => {

    describe("Mixed list", () => {
        const givenBirds1:Array<string> = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

        const expectedBirds:Array<string> = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"];
        let sut = gooseFilter(givenBirds1);

        it(`should return '${expectedBirds}' when search in '${givenBirds1}`, () => {

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
