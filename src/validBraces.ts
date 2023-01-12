export function validBraces(braces: string): boolean {
    return false;
}

export function countOpenBraces(braces:string, brace:string):number {
    let numberOfBrace = 0;
    for (let element of braces) {
        if (element == brace) numberOfBrace++;
    }
    return numberOfBrace;
}
