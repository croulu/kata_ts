export function validBraces(braces: string): boolean {
    return false;
}

export function countOpenBraces(braces:string, braceToCount:string):number {
    let numberOfBrace = 0;
    for (let brace of braces) {
        if (brace == braceToCount) numberOfBrace++;
    }
    return numberOfBrace;
}

export function countCloseBraces(braces:string, braceToCount:string):number {
    let numberOfBrace = 0;
    for (let brace of braces) {
        if (brace == braceToCount) numberOfBrace++;
    }
    return numberOfBrace;
}

export function sameOccurenceBrace(braces:string, braceOpen:string, braceClose:string):boolean {
    return countOpenBraces(braces, braceOpen) == countCloseBraces(braces, braceClose);
}

export function orderCorrectBraces(braces:string, braceOpen:string, braceClose:string):boolean {
    const valueForOpenBrace:number = 1;
    const valueForCloseBrace:number = -1;

    let calculateBraces:number = 0;

    for(const brace of braces) {
        brace == braceOpen ? calculateBraces+=valueForOpenBrace : calculateBraces+=valueForCloseBrace;
        if (calculateBraces < 0) return false;
    }

    return calculateBraces >= 0;
}
