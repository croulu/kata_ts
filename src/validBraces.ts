const VALUE_OPEN_BRACE:number = 1;
const VALUE_CLOSE_BRACE:number = -1;

export function validBraces(braces: string): boolean {
    let myStringBraces = new stringBraces(braces);

    return isCorrectOrderForBraces(myStringBraces.text);
}

export function countParenthesisBraces(braces: string, whatToCount:string):number {
    let parenthesis = new Brace( "(", ")");
    let myStringBraces = new stringBraces(braces);

    return myStringBraces.countBraces(parenthesis, whatToCount);
}

export function countHookBraces(braces: string, whatToCount:string):number {
    let hook = new Brace( "[", "]");
    let myStringBraces = new stringBraces(braces);

    return myStringBraces.countBraces(hook, whatToCount);
}

export function countMustacheBraces(braces: string, whatToCount:string):number {
    let mustache = new Brace( "{", "}");
    let myStringBraces = new stringBraces(braces);

    return myStringBraces.countBraces(mustache, whatToCount);
}

export function isSameOpenAndCloseBraces(braces:string):boolean {
    let parenthesis = new Brace( "(", ")");
    let myStringBraces = new stringBraces(braces);

    const countOpen:number = myStringBraces.countOpen(parenthesis);
    const countClose:number = myStringBraces.countClose(parenthesis);

    return countOpen == countClose;
}

export function isCorrectOrderForBraces(braces:string):boolean {
    let parenthesis = new Brace( "(", ")");

    let calculateBraces:number = 0;

    for(const brace of braces) {
        if (brace == parenthesis.openSign) {
            calculateBraces+=VALUE_OPEN_BRACE;
        }
        else if (brace == parenthesis.closeSign) {
            calculateBraces+=VALUE_CLOSE_BRACE;
        }
        if (calculateBraces < 0) return false;
    }

    return calculateBraces >= 0;
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
    indexOpenHook:Array<number>;
    indexCloseHook:Array<number>;
    countOpenHook:number;
    countCloseHook:number;
    indexOpenMustache:Array<number>;
    indexCloseMustache:Array<number>;
    countOpenMustache:number;
    countCloseMustache:number;

    constructor(text:string) {
        this.text = text;
        let parenthesis = new Brace( "(", ")");
        this.indexOpenParenthesis = this.findAllOccurenceOfAllKindOfBrace(parenthesis.openSign);
        this.indexCloseParenthesis = this.findAllOccurenceOfAllKindOfBrace(parenthesis.closeSign);
        this.countOpenParenthesis = this.indexOpenParenthesis.length;
        this.countCloseParenthesis = this.indexCloseParenthesis.length;
        let hook = new Brace( "[", "]");
        this.indexOpenHook = this.findAllOccurenceOfAllKindOfBrace(hook.openSign);
        this.indexCloseHook = this.findAllOccurenceOfAllKindOfBrace(hook.closeSign);
        this.countOpenHook = this.indexOpenHook.length;
        this.countCloseHook = this.indexCloseHook.length;
        let mustache = new Brace( "{", "}");
        this.indexOpenMustache = this.findAllOccurenceOfAllKindOfBrace(mustache.openSign);
        this.indexCloseMustache = this.findAllOccurenceOfAllKindOfBrace(mustache.closeSign);
        this.countOpenMustache = this.indexOpenMustache.length;
        this.countCloseMustache = this.indexCloseMustache.length;
    }

    countOpen(brace:Brace):number {
        let numberOfBrace = 0;
        for (let car of this.text) {
            if (car == brace.openSign) numberOfBrace++;
        }
        return numberOfBrace;
    }

    countClose(brace:Brace):number {
        let numberOfBrace = 0;
        for (let car of this.text) {
            if (car == brace.closeSign) numberOfBrace++;
        }
        return numberOfBrace;
    }

    countBraces(brace:Brace, whatToCount:string):number {
        if (whatToCount == "open")
            return this.countOpen(brace);
        else if (whatToCount == "close")
            return this.countClose(brace);
    }

    findAllOccurenceOfAllKindOfBrace(element:string):Array<number> {
        return findAllOccurenceOfOneElement(this.text, element);
    }
}
