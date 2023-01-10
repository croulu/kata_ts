import {filterOutGeese} from "./filterOutGeese";

describe("filterOutGeese", () => {

    const givenString:string = "African";
    const givenBigString:Array<string> = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    describe(`when search ${givenString} in ${givenBigString}`, () => {
        it("should return true", () => {
            const expected = true;

            expect(filterOutGeese(givenString, givenBigString)).toBe(expected);
        });
    });
});