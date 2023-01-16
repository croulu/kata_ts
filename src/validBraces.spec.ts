import {
    validBraces,
    Brace,
    findAllOccurenceOfOneElement,
    stringBraces
} from './validBraces';

describe("should handle basic tests", function() {

    describe("isSameOpenAndCloseBraces", function() {
        const givenBraces:string = "(()))(";
        const expected:boolean = true;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = new stringBraces(givenBraces);
            expect(sut.isSameOpenAndCloseBraces()).toBe(expected);
        });
    });

    describe("isCorrectOrderForBraces", function() {
        const givenBraces:string = "(()(()))";
        const expected:boolean = true;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = new stringBraces(givenBraces);
            expect(sut.isCorrectOrderForBraces()).toBe(expected);
        });
    });

    describe("isCorrectOrderForBraces", function() {
        const givenBraces:string = ")(()(()))";
        const expected:boolean = false;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = new stringBraces(givenBraces);
            expect(sut.isCorrectOrderForBraces()).toBe(expected);
        });
    });

    describe("isCorrectOrderForBraces", function() {
        const givenBraces:string = "()()()())";
        const expected:boolean = false;
        it (`should return ${expected} given ${givenBraces}`, ()=> {
            const sut = new stringBraces(givenBraces);
            expect(sut.isCorrectOrderForBraces()).toBe(expected);
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
        let indexOpenParenthesis:Array<number> = [0, 2, 3];
        let indexCloseParenthesis:Array<number> = [7, 8, 9];
        let countOpenParenthesis:number = 3;
        let countCloseParenthesis:number = 3;
        let indexOpenHook:Array<number> = [1];
        let indexCloseHook:Array<number> = [5];
        let countOpenHook:number = 1;
        let countCloseHook:number = 1;
        let indexOpenMustache:Array<number> = [4];
        let indexCloseMustache:Array<number> = [6];
        let countOpenMustache:number = 1;
        let countCloseMustache:number = 1;
        it (`should return all braces index given ${givenBraces}`, ()=> {
            const sut = new stringBraces(givenBraces);
            expect(sut.indexOpenParenthesis).toStrictEqual(indexOpenParenthesis);
            expect(sut.indexCloseParenthesis).toStrictEqual(indexCloseParenthesis);
            expect(sut.indexOpenHook).toStrictEqual(indexOpenHook);
            expect(sut.indexCloseHook).toStrictEqual(indexCloseHook);
            expect(sut.indexOpenMustache).toStrictEqual(indexOpenMustache);
            expect(sut.indexCloseMustache).toStrictEqual(indexCloseMustache);
            expect(sut.countOpenParenthesis).toBe(countOpenParenthesis);
            expect(sut.countCloseParenthesis).toBe(countCloseParenthesis);
            expect(sut.countOpenHook).toBe(countOpenHook);
            expect(sut.countCloseHook).toBe(countCloseHook);
            expect(sut.countOpenMustache).toBe(countOpenMustache);
            expect(sut.countCloseMustache).toBe(countCloseMustache);
        });
    });

    describe("validBraces", function() {
        const givenAll:Array<string> = ["()", "[(])", "(){}[]", "([{}])", "(}", "[({})](]", "([(((]))))", "([(({]})))"];
        const expectedAll:Array<boolean> = [true, false, true, true, false, false, false, false];

        givenAll.forEach((givenElement:string, index:number)=> {

            it(`should return ${expectedAll[index]} given ${givenElement}`, ()=> {
                const sut = validBraces(givenElement);
                expect(sut).toStrictEqual(expectedAll[index]);
            });
        })
    });
});
