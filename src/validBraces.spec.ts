import {
    countOpenBraces,
    countCloseBraces,
    sameOccurenceBrace,
    orderCorrectBraces,
    validBraces
} from './validBraces';

describe("should handle basic tests", function() {

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

    describe("sameOccurenceBrace", function() {
        const givenBraces:string = "(()))(";
        const givenOpenBrace:string = "(";
        const givenCloseBrace:string = ")";
        const expected:boolean = true;
        it (`given ${givenBraces} for ${givenOpenBrace} and ${givenCloseBrace} should return ${expected}`, ()=> {
            const sut = sameOccurenceBrace(givenBraces, givenOpenBrace, givenCloseBrace);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("orderCorrectBraces", function() {
        const givenBraces:string = "(()(()))";
        const givenOpenBrace:string = "(";
        const givenCloseBrace:string = ")";
        const expected:boolean = true;
        it (`given ${givenBraces} for ${givenOpenBrace} and ${givenCloseBrace} should return ${expected}`, ()=> {
            const sut = orderCorrectBraces(givenBraces, givenOpenBrace, givenCloseBrace);
            expect(sut).toStrictEqual(expected);
        });
    });

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
});
