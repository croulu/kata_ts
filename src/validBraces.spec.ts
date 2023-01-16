import {
    countParenthesisBraces,
    isSameOpenAndCloseBraces,
    isCorrectOrderForBraces,
    validBraces,
    Brace,
    findFirstIndexForCloseBrace
} from './validBraces';

describe("should handle basic tests", function() {

    describe("countParenthesisBraces", function() {
        const givenBraces:string = "(((((";
        const givenWhatToCount:string = "open";
        const expected:number = 5;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = countParenthesisBraces(givenBraces, givenWhatToCount);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("countParenthesisBraces", function() {
        const givenBraces:string = "))))))))";
        const givenWhatToCount:string = "close";
        const expected:number = 8;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = countParenthesisBraces(givenBraces, givenWhatToCount);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("isSameOpenAndCloseBraces", function() {
        const givenBraces:string = "(()))(";
        const expected:boolean = true;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = isSameOpenAndCloseBraces(givenBraces);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("isCorrectOrderForBraces", function() {
        const givenBraces:string = "(()(()))";
        const expected:boolean = true;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = isCorrectOrderForBraces(givenBraces);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("isCorrectOrderForBraces", function() {
        const givenBraces:string = ")(()(()))";
        const expected:boolean = false;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = isCorrectOrderForBraces(givenBraces);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("isCorrectOrderForBraces", function() {
        const givenBraces:string = "()()()())";
        const expected:boolean = false;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = isCorrectOrderForBraces(givenBraces);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("findFirstIndexForCloseBrace", function() {
        const givenBraces:string = "([(({]})))";
        const expected:number = 7;
       it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = findFirstIndexForCloseBrace(givenBraces);
           expect(sut).toBe(expected);
       });
    });

    describe("validBraces", function() {
        const givenAll:Array<string> = ["()", "[(])", "(){}[]", "([{}])", "(}", "[({})](]"];
        const expectedAll:Array<boolean> = [true, false, true, true, false, false];

        givenAll.forEach((givenElement:string, index:number)=> {

            it(`should return ${expectedAll[index]} given ${givenElement}`, ()=> {
                const sut = validBraces(givenElement);
                expect(sut).toStrictEqual(expectedAll[index]);
            });
        })
    });
});
