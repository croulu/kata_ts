import {
    validBraces,
    Brace,
    findAllOccurenceOfOneElement,
    stringBraces
} from './validBraces';

describe("should handle basic tests", function() {

    describe("validBraces", function() {
       const givenAll:Array<string> = ["()", "(())", "[(])", "(){}[]", "([{}])", "(}", "[({})](]", "([(((]))))", "([(({]})))", "({})[({})]"];
        const expectedAll:Array<boolean> = [true, true, false, true, true, false, false, false, false, true];

        givenAll.forEach((givenElement:string, index:number)=> {

            it(`should return ${expectedAll[index]} given ${givenElement}`, ()=> {
                const sut = validBraces(givenElement);
                expect(sut).toBe(expectedAll[index]);
            });
        })
    });
});
