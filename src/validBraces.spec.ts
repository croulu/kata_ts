import {
    countParenthesisBraces,
    isSameOpenAndCloseBraces,
    isCorrectOrderForBraces,
    validBraces,
    Brace,
    findFirstCloseBraceIndex,
    findLastOpenBraceIndexBeforeCloseBraceIndex,
    findAllOccurenceOfOneElement
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

    describe("findFirstCloseBraceIndex", function() {
        const givenBraces:string = "([(({]})))";
        const expected:number = 7;
       it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = findFirstCloseBraceIndex(givenBraces);
           expect(sut).toBe(expected);
       });
    });

    describe("findLastOpenBraceIndexBeforeCloseBraceIndex", function() {
        const givenBraces:string = "([(({]})))";
        const expected:number = 3;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = findLastOpenBraceIndexBeforeCloseBraceIndex(givenBraces);
            expect(sut).toBe(expected);
        });
    });

    describe("findAllOccurenceOfOneElement", function() {
        const givenBraces:string = "([(({]})))";
        const givenElement:string = "(";
        const expected:Array<number> = [0, 2, 3];
        it (`should return ${expected} given ${givenBraces} and ${givenElement}`, ()=> {
            const sut = findAllOccurenceOfOneElement(givenBraces, givenElement);
            expect(sut).toStrictEqual(expected);
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
