
export function gooseFilter (birds:Array<string>) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let filteredGeese: Array<string> = birds;

    geese.forEach(element => {
        let indexGeese: number = filteredGeese.indexOf(element);
        if (indexGeese > -1) {
            filteredGeese.splice(indexGeese, 1);
        }
    })

    return filteredGeese;
};
