import {even_or_odd} from "./even_or_odd";

describe("even_or_odd", function(){

    const allNumbers:Array<number> = [2, 0, 7, 1, -4, -3];
    const allExpects:Array<string> = ['Even', 'Even', 'Odd', 'Odd', 'Even', 'Odd'];

    allNumbers.forEach((value, index) => {

        const testNumber:number = value;
        const expectResult:string = allExpects[index];
        it(`basicTests : should return '${expect}' for ${testNumber}`, function() {
            let sut = even_or_odd(testNumber);
            expect(sut).toBe(expectResult);
        });
    })

});