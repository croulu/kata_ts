const VALUE_OPEN_BRACE:number = 1;
const VALUE_CLOSE_BRACE:number = -1;

export function validBraces(braces: string): boolean {
    let myStringBraces = new stringBraces(braces);
    let isCorrectForAllBraces = true;

    if (myStringBraces.isSameOpenAndCloseBraces()) {

        console.log(myStringBraces.isValidForAllBracesParenthesis(), myStringBraces.isValidForAllBracesHook(), myStringBraces.isValidForAllBracesMustache());

        isCorrectForAllBraces = myStringBraces.isValidForAllBracesParenthesis()
            && myStringBraces.isValidForAllBracesHook()
            && myStringBraces.isValidForAllBracesMustache();
    } else {
        isCorrectForAllBraces = false;
    }

    return isCorrectForAllBraces;
}

export function findAllOccurenceOfOneElement(braces: string, element: string):Array<number> {
    const indices = [];
    let indice:number = braces.indexOf(element);
    while (indice !== -1) {
        indices.push(indice);
        indice = braces.indexOf(element, indice + 1);
    }

    return indices;
}

export class Brace {
    openSign: string;
    closeSign: string;

    constructor(openSign: string, closeSign: string) {
        this.openSign = openSign;
        this.closeSign = closeSign;
    }
}

export class stringBraces {
    text:string;

    indexOpenParenthesis:Array<number>;
    indexCloseParenthesis:Array<number>;
    countOpenParenthesis:number;
    countCloseParenthesis:number;
    isCorrectOrderParenthesis:boolean;
    isValidBracesParenthesis:boolean;

    indexOpenHook:Array<number>;
    indexCloseHook:Array<number>;
    countOpenHook:number;
    countCloseHook:number;
    isCorrectOrderHook:boolean;

    indexOpenMustache:Array<number>;
    indexCloseMustache:Array<number>;
    countOpenMustache:number;
    countCloseMustache:number;
    isCorrectOrderMustache:boolean;

    constructor(text:string) {
        this.text = text;

        let parenthesis = new Brace( "(", ")");
        this.indexOpenParenthesis = this.findAllOccurenceOfAllKindOfBrace(parenthesis.openSign);
        this.indexCloseParenthesis = this.findAllOccurenceOfAllKindOfBrace(parenthesis.closeSign);
        this.countOpenParenthesis = this.indexOpenParenthesis.length;
        this.countCloseParenthesis = this.indexCloseParenthesis.length;
        this.isCorrectOrderParenthesis = this.isCorrectOrderForBrace(parenthesis.openSign, parenthesis.closeSign);
        this.isValidBracesParenthesis = this.isValidForAllBracesParenthesis();

        let hook = new Brace( "[", "]");
        this.indexOpenHook = this.findAllOccurenceOfAllKindOfBrace(hook.openSign);
        this.indexCloseHook = this.findAllOccurenceOfAllKindOfBrace(hook.closeSign);
        this.countOpenHook = this.indexOpenHook.length;
        this.countCloseHook = this.indexCloseHook.length;
        this.isCorrectOrderHook = this.isCorrectOrderForBrace(hook.openSign, hook.closeSign);

        let mustache = new Brace( "{", "}");
        this.indexOpenMustache = this.findAllOccurenceOfAllKindOfBrace(mustache.openSign);
        this.indexCloseMustache = this.findAllOccurenceOfAllKindOfBrace(mustache.closeSign);
        this.countOpenMustache = this.indexOpenMustache.length;
        this.countCloseMustache = this.indexCloseMustache.length;
        this.isCorrectOrderMustache = this.isCorrectOrderForBrace(mustache.openSign, mustache.closeSign);
    }

    findAllOccurenceOfAllKindOfBrace(element:string):Array<number> {
        return findAllOccurenceOfOneElement(this.text, element);
    }

    isCorrectOrderForBrace(openElement:string, closeElement:string):boolean {
        let calculateBraces:number = 0;

        for(const brace of this.text) {
            if (brace == openElement) {
                calculateBraces+=VALUE_OPEN_BRACE;
            }
            else if (brace == closeElement) {
                calculateBraces+=VALUE_CLOSE_BRACE;
            }
            if (calculateBraces < 0) return false;
        }

        return calculateBraces >= 0;
    }

    isValidForAllBracesParenthesis() {
        let isValid = true;

        this.indexCloseParenthesis.forEach((indice2Brace, index) => {
            const indice1Brace:number = this.indexOpenParenthesis[this.indexOpenParenthesis.length - 1 - index];
            const lengthBrace:number = indice2Brace - indice1Brace;

            if (this.isSubstringValid(indice1Brace, lengthBrace) == false)
                isValid = false;
        });

        return isValid;
    }

    isValidForAllBracesHook() {
        let isValid = true;

        this.indexCloseHook.forEach((indice2Brace, index) => {
            const indice1Brace:number = this.indexOpenHook[this.indexOpenHook.length - 1 - index];
            const lengthBrace:number = indice2Brace - indice1Brace;

            if (this.isSubstringValid(indice1Brace, lengthBrace) == false)
                isValid = false;
        });

        return isValid;
    }

    isValidForAllBracesMustache() {
        let isValid = true;

        this.indexCloseMustache.forEach((indice2Brace, index) => {
            const indice1Brace:number = this.indexOpenMustache[this.indexOpenMustache.length - 1 - index];
            const lengthBrace:number = indice2Brace - indice1Brace;

            if (this.isSubstringValid(indice1Brace, lengthBrace) == false)
                isValid = false;
        });

        return isValid;
    }

    isSubstringValid(indice1:number, lengthBrace:number):boolean {
        let isValid:boolean = true;
        const stringLimitsExcluded = this.text.substr(indice1 + 1, lengthBrace - 1);

        const subStringBraces = new stringBraces(stringLimitsExcluded);
        if (subStringBraces.validBraces() == false)
            isValid = false;

        return isValid;
    }

    isSameOpenAndCloseBraces():boolean {
        return this.countOpenParenthesis == this.countCloseParenthesis &&
            this.countOpenHook == this.countCloseHook &&
            this.countOpenMustache == this.countCloseMustache;
    }

    isCorrectOrderForBraces():boolean {
        return this.isCorrectOrderParenthesis && this.isCorrectOrderHook && this.isCorrectOrderMustache;
    }

    validBraces(): boolean {
        return this.isSameOpenAndCloseBraces() && this.isCorrectOrderForBraces();
    }

}
