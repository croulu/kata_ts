export function validBraces(braces: string): boolean {
    let myStringBraces = new stringBraces(braces);

    return myStringBraces.validBraces();
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

    openSigns:Array<string> = [];
    closeSigns:Array<string> = [];

    constructor(text:string) {
        this.text = text;

        let parenthesis = new Brace( "(", ")");
        this.openSigns.push(parenthesis.openSign);
        this.closeSigns.push(parenthesis.closeSign);
        let hook = new Brace( "[", "]");
        this.openSigns.push(hook.openSign);
        this.closeSigns.push(hook.closeSign);
        let mustache = new Brace( "{", "}");
        this.openSigns.push(mustache.openSign);
        this.closeSigns.push(mustache.closeSign);
    }

    isTheSameFamilyBrace(brace:string, theLastBracePushed:string) {
        return (this.closeSigns.indexOf(brace) === this.openSigns.indexOf(theLastBracePushed));
    }

    validBraces(): boolean {
        let checkBraces:Array<string> = [];

        for(const brace of this.text) {
            if (this.openSigns.includes(brace)) {
                checkBraces.push(brace);
            } else {
                const theLastBracePushed = checkBraces[checkBraces.length - 1];
                if (this.isTheSameFamilyBrace(brace, theLastBracePushed)) {
                    checkBraces.pop();
                } else
                    return false
            }
        }

        return checkBraces.length == 0;
    }

}
