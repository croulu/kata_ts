import {countOpenBraces, countCloseBraces, validBraces } from './validBraces';

describe("should handle basic tests", function() {

    describe("validBraces", function() {
        const givenAll:Array<string> = ["()", "[(])", "(){}[]", "([{}])", "(}", "[({})](]"];
        const expectedAll:Array<boolean> = [true, false, true, true, false, false];

        givenAll.forEach((givenElement:string, index:number)=> {

            it(`given ${givenElement} should return ${expectedAll[index]}`, ()=> {
                const sut = validBraces(givenElement);
                expect(sut).toStrictEqual(expectedAll[index]);
            });
        })
    });

    describe("countOpenBraces", function() {
        const givenBraces:string = "(((((";
        const givenBrace:string = "(";
        const expected:number = 5;
        it (`given ${givenBraces} should return ${expected}`, ()=> {
            const sut = countOpenBraces(givenBraces, givenBrace);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("countCloseBraces", function() {
        const givenBraces:string = "))))))))";
        const givenBrace:string = ")";
        const expected:number = 8;
        it (`given ${givenBraces} should return ${expected}`, ()=> {
            const sut = countCloseBraces(givenBraces, givenBrace);
            expect(sut).toStrictEqual(expected);
        });
    });

});
