import {
    countParenthesisBraces,
    isSameOpenAndCloseBraces,
    isCorrectOrderForBraces,
    validBraces,
    Brace,
    findAllOccurenceOfOneElement,
    findAllOccurenceOfAllKindOfBrace,
    stringBraces
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

    describe("findAllOccurenceOfOneElement", function() {
        const givenBraces:string = "([(({]})))";
        const givenElement:string = "(";
        const expected:Array<number> = [0, 2, 3];
        it (`should return ${expected} given ${givenBraces} and ${givenElement}`, ()=> {
            const sut = findAllOccurenceOfOneElement(givenBraces, givenElement);
            expect(sut).toStrictEqual(expected);
        });
    });

    describe("findAllOccurenceOfAllKindOfBrace", function() {
        const givenBraces:string = "([(({]})))";
        let myStringBraces = new stringBraces(givenBraces);
        let expected:stringBraces = new stringBraces(givenBraces);
        expected.countParenthesisOpen = [0, 2, 3];
        it (`should return ${expected.countParenthesisOpen} given ${givenBraces}`, ()=> {
            const sut = myStringBraces.countParenthesisOpen;
            expect(sut).toStrictEqual(expected.countParenthesisOpen);
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
