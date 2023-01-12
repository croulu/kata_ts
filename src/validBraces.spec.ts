import { validBraces } from './validBraces';

describe("solution", function() {
    describe("should handle basic tests", function() {
        it("should return true for ()", ()=> {
            const given = "()";
            const expected = true;
            const sut = validBraces(given);
            expect(sut).strictEqual(expected);
        })
        it("should return false for [(])", ()=> {
            const given = "[(])";
            const expected = false;
            const sut = validBraces(given);
            expect(sut).strictEqual(expected);
        });
        it("should return true for (){}[]", ()=> {
            const given = "(){}[]";
            const expected = true;
            const sut = validBraces(given);
            expect(sut).strictEqual(expected);
        });
        it("should return true for ([{}])", ()=> {
            const given = "([{}])";
            const expected = true;
            const sut = validBraces(given);
            expect(sut).strictEqual(expected);
        });
        it("should return false for (}", ()=> {
            const given = "(}";
            const expected = false;
            const sut = validBraces(given);
            expect(sut).strictEqual(expected);
        });
        it("should return false for [({})](]", ()=> {
            const given = "[({})](]";
            const expected = false;
            const sut = validBraces(given);
            expect(sut).strictEqual(expected);
        });
    });
});
